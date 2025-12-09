/**
 * Deposit Success Page
 * 
 * This page is shown after a successful Stripe Checkout payment.
 * 
 * Flow:
 * 1. User completes payment on Stripe Checkout
 * 2. Stripe redirects here with ?session_id=...
 * 3. Page validates session via /api/stripe/confirm
 * 4. If valid, sets depositPaid=true in leadStore
 * 5. Upserts to GHL with "Deposit Paid" tag (if not already done by webhook)
 * 6. Redirects to Step 6 (Onboarding Details)
 */

'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { trackGA4Event } from '@/lib/analytics';

function DepositSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const confirmPayment = async () => {
      const sessionId = searchParams.get('session_id');

      if (!sessionId) {
        setStatus('error');
        setErrorMessage('No session ID provided. Please contact support.');
        return;
      }

      // Validate session with Stripe
      try {
        const response = await fetch(`/api/stripe/confirm?session_id=${sessionId}`);
        const result = await response.json();

        if (result.ok && result.paid) {
          // Payment confirmed - update local store
          updateLeadStore({
            depositPaid: true,
          });

          // Upsert to GHL with deposit info (webhook may have already done this, but ensure it's set)
          if (leadStore.email) {
            try {
              await dispatchToGHL(
                {
                  email: leadStore.email,
                  customFields: {
                    [GHL_CUSTOM_FIELDS.depositStatus]: 'paid',
                    [GHL_CUSTOM_FIELDS.stripeSessionId]: result.session.id,
                  },
                },
                {
                  addTags: ['Deposit Paid'],
                }
              );
            } catch (ghlError) {
              // Non-blocking - webhook may have already updated GHL
              if (process.env.NODE_ENV !== 'production') {
                console.warn('GHL update failed (may already be updated by webhook):', ghlError);
              }
            }
          }

          // Track analytics
          trackGA4Event('lead_deposit_paid', {
            event_category: 'Quote',
            event_label: 'Deposit Paid',
            session_id: sessionId,
            payment_status: 'paid',
          });

          setStatus('success');

          // Redirect to Step 6 after a brief delay
          setTimeout(() => {
            router.push('/quote?step=6');
          }, 2000);
        } else {
          // Payment not confirmed
          setStatus('error');
          setErrorMessage('Payment could not be confirmed. Please contact support.');
        }
      } catch (error) {
        console.error('Error confirming payment:', error);
        setStatus('error');
        setErrorMessage('Something went wrong. Please contact support.');
      }
    };

    confirmPayment();
  }, [searchParams, router, leadStore.email, updateLeadStore]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-page flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-4">
            <Image
              src="/brand/logo-fileeasy.png"
              alt="File Easy Accountancy"
              width={180}
              height={60}
              className="h-10 w-auto mx-auto"
              priority
              unoptimized
            />
          </div>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-primary mb-2">Confirming Payment</h1>
          <p className="text-muted-foreground">Please wait while we confirm your deposit payment...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-page flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-4">
            <Image
              src="/brand/logo-fileeasy.png"
              alt="File Easy Accountancy"
              width={180}
              height={60}
              className="h-10 w-auto mx-auto"
              priority
              unoptimized
            />
          </div>
          <div className="text-red-600 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">Payment Confirmation Failed</h1>
          <p className="text-muted-foreground mb-6">{errorMessage}</p>
          <div className="space-y-2">
            <Link
              href="/quote?step=5"
              className="block w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
            >
              Try Again
            </Link>
            <Link
              href="/quote"
              className="block w-full text-primary hover:underline py-2"
            >
              Return to Quote
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Success state (briefly shown before redirect)
  return (
    <div className="min-h-screen bg-page flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-4">
          <Image
            src="/brand/logo-fileeasy.png"
            alt="File Easy Accountancy"
            width={180}
            height={60}
            className="h-10 w-auto mx-auto"
            priority
            unoptimized
          />
        </div>
        <div className="text-green-600 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">Deposit Payment Successful</h1>
        <p className="text-muted-foreground mb-4">Your £100 deposit has been confirmed.</p>
        <p className="text-sm text-muted-foreground">Redirecting to next step...</p>
      </div>
    </div>
  );
}

export default function DepositSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-page flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    }>
      <DepositSuccessContent />
    </Suspense>
  );
}

