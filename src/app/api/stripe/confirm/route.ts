/**
 * Stripe Session Confirmation API Route
 * 
 * GET /api/stripe/confirm?session_id=cs_test_...
 * 
 * Validates a Stripe Checkout Session and returns session details.
 * Used by the deposit success page to confirm payment before proceeding.
 * 
 * Output: { ok: true, session: {...}, paid: boolean } or { ok: false, error: string }
 */

import { NextRequest, NextResponse } from 'next/server';
import { getStripeClient, isStripeConfigured } from '@/config/stripe';

// Force dynamic runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  // Check if Stripe is configured
  if (!isStripeConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Payment processing is not available at this time.',
      },
      { status: 503 }
    );
  }

  try {
    // Get session_id from query params
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    if (!sessionId || typeof sessionId !== 'string') {
      return NextResponse.json(
        {
          ok: false,
          error: 'Session ID is required',
          message: 'Please provide a valid session ID',
        },
        { status: 400 }
      );
    }

    // Get Stripe client
    const stripe = getStripeClient();

    // Retrieve session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent'],
    });

    // Check if payment was successful
    const paid = session.payment_status === 'paid';

    if (process.env.NODE_ENV !== 'production') {
      console.log('Stripe session confirmed:', {
        sessionId: session.id,
        paymentStatus: session.payment_status,
        paid,
      });
    }

    // Return session details
    return NextResponse.json(
      {
        ok: true,
        session: {
          id: session.id,
          payment_status: session.payment_status,
          customer_email: session.customer_email,
          metadata: session.metadata,
        },
        paid,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error confirming Stripe session:', error);
    }

    // Return generic error
    return NextResponse.json(
      {
        ok: false,
        error: 'Failed to confirm payment',
        message: 'Something went wrong. Please try again or contact support.',
      },
      { status: 500 }
    );
  }
}

