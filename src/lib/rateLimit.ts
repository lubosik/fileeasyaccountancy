/**
 * Rate Limiting Helper
 * 
 * Lightweight in-memory rate limiter for API routes.
 * Tracks requests per IP address with configurable limits.
 * 
 * Note: For production, consider using a Redis-based rate limiter
 * or a service like Upstash Rate Limit for distributed systems.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// In-memory store (clears on server restart)
// In production, use Redis or similar for distributed systems
const rateLimitStore = new Map<string, RateLimitEntry>();

// Cleanup old entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
      if (entry.resetAt < now) {
        rateLimitStore.delete(key);
      }
    }
  }, 5 * 60 * 1000); // 5 minutes
}

/**
 * Get client IP address from request
 * 
 * Handles various proxy headers (Vercel, Cloudflare, etc.)
 */
export function getClientIP(request: Request): string {
  // Try various headers (order matters - most trusted first)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, take the first one
    const ips = forwarded.split(',').map(ip => ip.trim());
    return ips[0] || 'unknown';
  }

  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  const cfConnectingIP = request.headers.get('cf-connecting-ip'); // Cloudflare
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback (won't work in serverless, but good for local dev)
  return 'unknown';
}

/**
 * Check if request exceeds rate limit
 * 
 * @param identifier - Unique identifier (typically IP address)
 * @param maxRequests - Maximum requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns Object with `allowed` boolean and `remaining` count
 */
export function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60 * 1000 // 1 minute default
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const key = identifier;

  // Get or create entry
  let entry = rateLimitStore.get(key);

  // If entry doesn't exist or has expired, create new one
  if (!entry || entry.resetAt < now) {
    entry = {
      count: 0,
      resetAt: now + windowMs,
    };
    rateLimitStore.set(key, entry);
  }

  // Increment count
  entry.count += 1;

  // Check if limit exceeded
  const allowed = entry.count <= maxRequests;
  const remaining = Math.max(0, maxRequests - entry.count);

  return {
    allowed,
    remaining,
    resetAt: entry.resetAt,
  };
}

/**
 * Rate limit middleware for Next.js API routes
 * 
 * @param request - Next.js Request object
 * @param maxRequests - Maximum requests allowed (default: 5)
 * @param windowMs - Time window in milliseconds (default: 60000 = 1 minute)
 * @returns Response if rate limited, null if allowed
 */
export function rateLimitMiddleware(
  request: Request,
  maxRequests: number = 5,
  windowMs: number = 60 * 1000
): Response | null {
  const ip = getClientIP(request);
  const result = checkRateLimit(ip, maxRequests, windowMs);

  if (!result.allowed) {
    // Return 429 Too Many Requests
    return new Response(
      JSON.stringify({
        ok: false,
        error: 'Too many requests. Please try again later.',
        retryAfter: Math.ceil((result.resetAt - Date.now()) / 1000), // seconds
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(Math.ceil((result.resetAt - Date.now()) / 1000)),
          'X-RateLimit-Limit': String(maxRequests),
          'X-RateLimit-Remaining': String(result.remaining),
          'X-RateLimit-Reset': String(Math.ceil(result.resetAt / 1000)),
        },
      }
    );
  }

  return null; // Allowed
}

