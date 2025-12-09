'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Mail, FileText } from 'lucide-react';
import Link from 'next/link';
import { Step1Data, Step2Data, Step2BData, Step3Data, Step4Data, Step5Data, Step6Data, Step7Data, CommitmentOption } from '../types';
import { useLeadStore } from '@/lib/leadStore';
import AMLStatusDisplay from '@/components/AMLStatusDisplay';

interface Step8ConfirmationProps {
  step1Data: Step1Data;
  step2Data?: Step2Data;
  step2BData?: Step2BData;
  step3Data?: Step3Data;
  step4Data?: Step4Data;
  step5Data?: Step5Data;
  step6Data?: Step6Data;
  step7Data: Step7Data;
  commitmentOption: CommitmentOption;
}

export default function Step8Confirmation({
  step1Data,
  step2Data,
  step2BData,
  step3Data,
  step4Data,
  step5Data,
  step6Data,
  step7Data,
  commitmentOption
}: Step8ConfirmationProps) {
  const { data: leadStore } = useLeadStore();

  useEffect(() => {
    // Track completion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'fe_quote_completed', {
        event_category: 'Quote',
        event_label: 'Quote Flow Completed',
        commitment_option: commitmentOption,
        email: step1Data.email
      });
    }

    // Meta Pixel conversion
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Quote Completed',
        content_category: 'Onboarding',
        value: 1,
        currency: 'GBP'
      });
    }

    // Submit to GoHighLevel CRM via API route
    const submitToCRM = async () => {
      try {
        const response = await fetch('/api/quote/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            step1: step1Data,
            step2: step2Data,
            step2B: step2BData,
            step3: step3Data,
            step4: step4Data,
            step5: step5Data,
            step6: step6Data,
            step7: step7Data,
            commitmentOption: commitmentOption
          }),
        });

        const result = await response.json();
        
        if (result.success) {
          console.log('Quote submitted to GHL successfully:', result.contactId);
        } else {
          console.warn('GHL submission failed or API not configured:', result.message);
        }
      } catch (error) {
        console.error('Error submitting to GHL:', error);
        // Don't show error to user - fail silently
      }
    };

    submitToCRM();

    // Clear localStorage after successful completion (optional - or keep for resume)
    // localStorage.removeItem('quote_step1');
    // localStorage.removeItem('quote_step2');
    // ... etc
  }, [commitmentOption, step1Data, step2Data, step2BData, step3Data, step4Data, step5Data, step6Data, step7Data]);

  const getConfirmationMessage = () => {
    switch (commitmentOption) {
      case 'set-me-up':
        return {
          title: 'Great work — your File Easy setup has begun.',
          items: [
            'We\'re preparing your onboarding documents',
            'We\'ll guide you through the AML check',
            'You\'ll receive everything shortly'
          ],
          footer: 'You\'re officially at the final stage — welcome to File Easy.'
        };
      case 'book-call':
        return {
          title: 'Great work — your File Easy setup has begun.',
          items: [
            'We\'re preparing your onboarding documents',
            'We\'ll guide you through the AML check',
            'You\'ll receive everything shortly'
          ],
          footer: 'You\'re officially at the final stage — welcome to File Easy.'
        };
      default:
        return {
          title: 'Great work — your File Easy setup has begun.',
          items: [
            'We\'re preparing your onboarding documents',
            'We\'ll guide you through the AML check',
            'You\'ll receive everything shortly'
          ],
          footer: 'You\'re officially at the final stage — welcome to File Easy.'
        };
    }
  };

  const confirmation = getConfirmationMessage();

  return (
    <div className="space-y-8">
      {/* Success Icon and Title */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">
          {confirmation.title}
        </h1>
      </div>

      {/* Confirmation Items */}
      <div className="bg-muted/50 rounded-lg p-6 space-y-4">
        {confirmation.items.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>

      {/* Footer Message */}
      <div className="text-center pt-4">
        <p className="text-lg font-semibold text-primary">
          {confirmation.footer}
        </p>
      </div>

      {/* AML Status Display (if deposit paid and FirmCheck enabled) */}
      {leadStore.depositPaid && typeof window !== 'undefined' && process.env.NEXT_PUBLIC_FE_GHL_AML_ENABLED === 'true' && (
        <div className="border-t border-muted pt-6">
          <h2 className="text-xl font-semibold text-primary mb-4 text-center">
            AML Check Status
          </h2>
          <AMLStatusDisplay
            contactId={leadStore.contactId}
            showDetails={true}
            onStatusChange={(status, riskLevel) => {
              if (process.env.NODE_ENV !== 'production') {
                console.log('AML status changed:', status, riskLevel);
              }
            }}
          />
        </div>
      )}

      {/* Next Steps */}
      <div className="border-t border-muted pt-6">
        <h2 className="text-xl font-semibold text-primary mb-4 text-center">
          What happens next?
        </h2>
        <div className="space-y-3">
          {(commitmentOption === 'set-me-up' || commitmentOption === 'book-call') && (
            <>
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary">Check your email</p>
                  <p className="text-sm text-muted-foreground">
                    We'll send your engagement letter and onboarding pack to {step1Data.email}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary">Complete AML check</p>
                  <p className="text-sm text-muted-foreground">
                    We'll guide you through a simple identity verification process
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center pt-6">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-primary hover:underline"
        >
          <span>Return to homepage</span>
        </Link>
      </div>
    </div>
  );
}

