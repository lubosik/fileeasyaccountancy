/**
 * Email UID API Route
 * 
 * POST /api/resume/email-uid
 * 
 * Triggers GHL automation to send UID email to contact.
 * Uses GHL tags to trigger email automation (no SMTP keys needed).
 * 
 * Input: { email }
 * Action: Upsert tag "UID Email – Send" to contact
 * Output: { ok: true } or { ok: false, error: string }
 */

import { NextRequest, NextResponse } from 'next/server';
import { upsertContact } from '@/lib/ghlClient';
import { isGHLConfigured } from '@/config/ghl';
import { rateLimitMiddleware } from '@/lib/rateLimit';

// Force dynamic runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Retry helper for GHL operations
 */
async function retryOperation<T>(
  operation: () => Promise<T>,
  maxAttempts: number = 2,
  delayMs: number = 1000
): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      if (attempt < maxAttempts - 1) {
        // Wait before retry (exponential backoff)
        const waitTime = delayMs * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        
        if (process.env.NODE_ENV !== 'production') {
          console.log(`Retry attempt ${attempt + 1}/${maxAttempts} after ${waitTime}ms`);
        }
      }
    }
  }

  throw lastError || new Error('Operation failed after retries');
}

export async function POST(request: NextRequest) {
  // Rate limiting: 5 requests per minute per IP
  const rateLimitResponse = rateLimitMiddleware(request, 5, 60 * 1000);
  if (rateLimitResponse) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Too many requests',
        message: 'Too many requests. Please try again later.',
      },
      {
        status: 429,
        headers: rateLimitResponse.headers,
      }
    );
  }

  // Check if GHL is configured
  if (!isGHLConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error: 'GHL not configured',
        message: 'GHL_API_KEY and GHL_LOCATION_ID must be set in environment variables',
      },
      { status: 503 }
    );
  }

  try {
    // Parse request body
    const body = await request.json();

    // Validate required email
    if (!body.email || typeof body.email !== 'string' || !body.email.trim()) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Email is required',
          message: 'Email field must be provided and non-empty',
        },
        { status: 400 }
      );
    }

    const email = body.email.trim();

    // Upsert contact with tag to trigger GHL email automation
    // GHL automation will send email using [cf_uniqueId] merge field
    const params = {
      email,
      tags: ['UID Email – Send'],
    };

    // Retry up to 2 times if GHL is busy
    await retryOperation(async () => {
      const result = await upsertContact(params);
      
      if (!result.contactId) {
        throw new Error('Failed to update contact in GHL');
      }
      
      return result;
    }, 2);

    // Return success
    return NextResponse.json(
      {
        ok: true,
        message: 'UID email trigger sent to GHL',
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error triggering UID email:', error);
    }

    return NextResponse.json(
      {
        ok: false,
        error: 'Failed to trigger UID email',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

