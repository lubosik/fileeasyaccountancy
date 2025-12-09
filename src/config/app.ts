/**
 * App Configuration
 * 
 * Application-wide configuration constants.
 * Environment variables and base URLs.
 */

/**
 * Base URL for the application
 * Used for redirects, webhooks, email links, etc.
 * 
 * Examples:
 * - Development: http://localhost:3000
 * - Production: https://fileeasyaccountancy.co.uk
 * 
 * Get this from your deployment platform (Vercel, Netlify, etc.)
 */
export const APP_BASE_URL = process.env.APP_BASE_URL || '';

/**
 * Check if app base URL is configured
 */
export function isAppBaseUrlConfigured(): boolean {
  return !!APP_BASE_URL;
}

/**
 * Get app base URL (throws if not configured)
 * Use this in API routes after checking isAppBaseUrlConfigured()
 */
export function getAppBaseUrl(): string {
  if (!APP_BASE_URL) {
    throw new Error('APP_BASE_URL must be set in environment variables');
  }
  return APP_BASE_URL;
}

/**
 * Construct a full URL for a given path
 * @param path - Path relative to base URL (e.g., '/quote', '/onboarding/deposit/success')
 * @returns Full URL
 */
export function getAppUrl(path: string): string {
  const base = getAppBaseUrl();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // Remove trailing slash from base if present
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${normalizedBase}${normalizedPath}`;
}

