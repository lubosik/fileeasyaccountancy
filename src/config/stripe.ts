/**
 * Stripe Configuration
 * 
 * Server-only Stripe client initialization.
 * Do not import this file in client components.
 * 
 * Environment variables required:
 * - STRIPE_SECRET_KEY: Your Stripe secret key (starts with sk_)
 * - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: Your Stripe publishable key (starts with pk_)
 * - STRIPE_WEBHOOK_SECRET: Webhook signing secret (starts with whsec_)
 */

import Stripe from 'stripe';

/**
 * Stripe secret key from environment
 * Get this from: Stripe Dashboard → Developers → API keys → Secret key
 */
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

/**
 * Stripe publishable key (safe to expose to client)
 * Get this from: Stripe Dashboard → Developers → API keys → Publishable key
 */
export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';

/**
 * Stripe webhook secret for verifying webhook signatures
 * Get this from: Stripe Dashboard → Developers → Webhooks → [Your webhook] → Signing secret
 */
export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';

/**
 * Stripe client instance (server-only)
 * 
 * Initialized only if STRIPE_SECRET_KEY is present.
 * Will throw if used without a key, so check isStripeConfigured() first.
 */
export const stripe: Stripe | null = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
      typescript: true,
    })
  : null;

/**
 * Check if Stripe is configured
 * Returns true if secret key is present
 */
export function isStripeConfigured(): boolean {
  return !!STRIPE_SECRET_KEY;
}

/**
 * Get Stripe client (throws if not configured)
 * Use this in API routes after checking isStripeConfigured()
 */
export function getStripeClient(): Stripe {
  if (!stripe) {
    throw new Error('Stripe not configured: STRIPE_SECRET_KEY must be set in environment variables');
  }
  return stripe;
}

/**
 * Stripe currency and amount constants
 */
export const STRIPE_CURRENCY = 'gbp';
export const DEPOSIT_AMOUNT = 10000; // £100.00 in pence
export const DEPOSIT_AMOUNT_DISPLAY = 100; // £100 for display purposes

