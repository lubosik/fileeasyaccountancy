/**
 * Deposit Cancelled Page
 * 
 * This page is shown when a user cancels the Stripe Checkout payment.
 * 
 * Flow:
 * 1. User clicks "Cancel" on Stripe Checkout
 * 2. Stripe redirects here
 * 3. User can retry payment or return to quote
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { trackGA4Event } from '@/lib/analytics';
import { useEffect } from 'react';

export default function DepositCancelledPage() {
  useEffect(() => {
    // Track cancellation
    trackGA4Event('lead_deposit_cancelled', {
      event_category: 'Quote',
      event_label: 'Deposit Payment Cancelled',
    });
  }, []);

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
        <div className="text-yellow-600 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">Payment Cancelled</h1>
        <p className="text-muted-foreground mb-6">
          Your deposit payment was cancelled. You can try again or continue without payment for now.
        </p>
        <div className="space-y-2">
          <Link
            href="/quote?step=5"
            className="block w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
          >
            Try Payment Again
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

