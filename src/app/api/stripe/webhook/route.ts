/**
 * Stripe Webhook Handler API Route
 * 
 * POST /api/stripe/webhook
 * 
 * Handles Stripe webhook events, specifically checkout.session.completed.
 * 
 * On successful payment:
 * - Retrieves session details
 * - Extracts metadata (email, uid)
 * - Upserts to GHL with:
 *   - Tag: "Deposit Paid"
 *   - Custom fields: depositStatus, stripeSessionId, stripePaymentIntentId, timestamp
 */

import { NextRequest, NextResponse } from 'next/server';
import { getStripeClient, isStripeConfigured, STRIPE_WEBHOOK_SECRET } from '@/config/stripe';
import { upsertContact } from '@/lib/ghlClient';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
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
        error: 'Stripe not configured',
      },
      { status: 503 }
    );
  }

  // Check if GHL is configured
  if (!isGHLConfigured()) {
    return NextResponse.json(
      {
        error: 'GHL not configured',
      },
      { status: 503 }
    );
  }

  try {
    // Get raw body for signature verification
    const body = await request.text();

    // Get Stripe client
    const stripe = getStripeClient();

    // Verify webhook signature and parse event
    let event;
    try {
      const signature = request.headers.get('stripe-signature');
      if (!signature) {
        return NextResponse.json(
          {
            error: 'Missing signature',
          },
          { status: 400 }
        );
      }

      // Verify and construct event
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        STRIPE_WEBHOOK_SECRET || ''
      );
    } catch (error: any) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Webhook signature verification failed:', error);
      }
      return NextResponse.json(
        {
          error: 'Invalid signature',
        },
        { status: 400 }
      );
    }

    // Handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Extract metadata
      const email = session.metadata?.email || session.customer_email;
      const uid = session.metadata?.uid;
      const paymentIntentId = session.payment_intent;

      if (!email) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('No email found in Stripe session:', session.id);
        }
        return NextResponse.json(
          {
            error: 'Missing email in session',
          },
          { status: 400 }
        );
      }

      // Prepare GHL custom fields
      const customFields: Record<string, any> = {
        [GHL_CUSTOM_FIELDS.depositStatus]: 'paid',
        [GHL_CUSTOM_FIELDS.stripeSessionId]: session.id,
        [GHL_CUSTOM_FIELDS.stripePaymentIntentId]: paymentIntentId || '',
      };

      // Add timestamp
      const paidAt = new Date().toISOString();
      customFields[GHL_CUSTOM_FIELDS.depositPaidAt] = paidAt;

      // Upsert to GHL with tag and custom fields
      const ghlResult = await upsertContact({
        email,
        firstName: session.metadata?.firstName,
        lastName: session.metadata?.lastName,
        customFields: Object.entries(customFields).map(([field, value]) => ({
          field,
          value: String(value),
        })),
        tags: ['Deposit Paid'],
      });

      if (process.env.NODE_ENV !== 'production') {
        console.log('Deposit payment processed:', {
          email,
          uid,
          sessionId: session.id,
          paymentIntentId,
          contactId: ghlResult.contactId,
        });
      }

      // Trigger FirmCheck client creation (if feature enabled)
      if (process.env.FE_GHL_AML_ENABLED === 'true' && ghlResult.contactId) {
        try {
          // Call FirmCheck create client endpoint (non-blocking)
          fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/aml/create-client`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contactId: ghlResult.contactId,
              email,
            }),
          }).catch((error) => {
            // Non-blocking - log but don't fail webhook
            if (process.env.NODE_ENV !== 'production') {
              console.error('Failed to trigger FirmCheck client creation:', error);
            }
          });
        } catch (error) {
          // Non-blocking - log but don't fail webhook
          if (process.env.NODE_ENV !== 'production') {
            console.error('Error triggering FirmCheck client creation:', error);
          }
        }
      }

      // Return success
      return NextResponse.json(
        {
          received: true,
          event: event.type,
        },
        { status: 200 }
      );
    }

    // Handle other events (optional)
    if (process.env.NODE_ENV !== 'production') {
      console.log('Unhandled Stripe webhook event:', event.type);
    }

    // Return success for unhandled events (Stripe expects 200)
    return NextResponse.json(
      {
        received: true,
        event: event.type,
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error processing Stripe webhook:', error);
    }

    return NextResponse.json(
      {
        error: 'Webhook processing failed',
      },
      { status: 500 }
    );
  }
}

