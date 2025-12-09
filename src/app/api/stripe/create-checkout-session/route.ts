/**
 * Stripe Checkout Session Creation API Route
 * 
 * POST /api/stripe/create-checkout-session
 * 
 * Creates a Stripe Checkout Session for a £100 deposit payment.
 * 
 * Input: { email, uid, metadata? }
 * Output: { ok: true, sessionId: string, url: string } or { ok: false, error: string }
 */

import { NextRequest, NextResponse } from 'next/server';
import { getStripeClient, isStripeConfigured, DEPOSIT_AMOUNT, STRIPE_CURRENCY } from '@/config/stripe';
import { getAppUrl } from '@/config/app';
import { isGHLConfigured } from '@/config/ghl';

// Force dynamic runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request: NextRequest) {
  // Check if Stripe is configured
  if (!isStripeConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Payment processing is not available at this time.',
        message: 'Stripe is not configured. Please contact support.',
      },
      { status: 503 }
    );
  }

  // Check if GHL is configured (needed for metadata)
  if (!isGHLConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Service not available',
        message: 'Service is not fully configured. Please contact support.',
      },
      { status: 503 }
    );
  }

  try {
    // Parse request body
    const body = await request.json();

    // Validate required fields
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

    if (!body.uid || typeof body.uid !== 'string' || !body.uid.trim()) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Unique ID is required',
          message: 'Unique ID is required to process payment',
        },
        { status: 400 }
      );
    }

    const email = body.email.trim();
    const uid = body.uid.trim();
    const metadata = body.metadata || {};

    // Get Stripe client
    const stripe = getStripeClient();

    // Build success and cancel URLs
    const successUrl = getAppUrl('/onboarding/deposit/success?session_id={CHECKOUT_SESSION_ID}');
    const cancelUrl = getAppUrl('/onboarding/deposit/cancelled');

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment', // One-time payment
      line_items: [
        {
          price_data: {
            currency: STRIPE_CURRENCY,
            product_data: {
              name: 'File Easy Accountancy - Deposit',
              description: '£100 deposit to secure your File Easy accountancy services',
            },
            unit_amount: DEPOSIT_AMOUNT, // £100.00 in pence
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        email,
        uid,
        ...metadata,
        // Add timestamp for tracking
        created_at: new Date().toISOString(),
      },
      // Allow promotion codes
      allow_promotion_codes: false,
      // Collect billing address (optional, but good for AML)
      billing_address_collection: 'required',
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log('Stripe Checkout Session created:', {
        sessionId: session.id,
        email,
        uid,
      });
    }

    // Return success with session ID and URL
    return NextResponse.json(
      {
        ok: true,
        sessionId: session.id,
        url: session.url,
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating Stripe Checkout Session:', error);
    }

    // Return generic error (don't leak Stripe details)
    return NextResponse.json(
      {
        ok: false,
        error: 'Failed to create payment session',
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}

