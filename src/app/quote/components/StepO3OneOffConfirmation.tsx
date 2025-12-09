'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Phone } from 'lucide-react';
import Link from 'next/link';
import { Step1Data, Step2Data, StepO1Data, StepO2Data } from '../types';

interface StepO3OneOffConfirmationProps {
  step1Data: Step1Data;
  step2Data?: Step2Data;
  stepO1Data?: StepO1Data;
  stepO2Data: StepO2Data;
}

export default function StepO3OneOffConfirmation({
  step1Data,
  step2Data,
  stepO1Data,
  stepO2Data
}: StepO3OneOffConfirmationProps) {

  useEffect(() => {
    // Track completion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'fe_quote_completed', {
        event_category: 'Quote',
        event_label: 'One-Off Quote Flow Completed',
        proceed_option: stepO2Data.proceedOption,
        email: step1Data.email
      });
    }

    // Meta Pixel conversion
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'One-Off Quote Completed',
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
            step2: step2Data || { supportType: 'one-off' },
            stepO1: stepO1Data,
            stepO2: stepO2Data
          }),
        });

        const result = await response.json();
        
        if (result.success) {
          console.log('One-off quote submitted to GHL successfully:', result.contactId);
        } else {
          console.warn('GHL submission failed or API not configured:', result.message);
        }
      } catch (error) {
        console.error('Error submitting to GHL:', error);
        // Don't show error to user - fail silently
      }
    };

    submitToCRM();
  }, [step1Data, step2Data, stepO1Data, stepO2Data]);

  const getConfirmationMessage = () => {
    switch (stepO2Data.proceedOption) {
      case 'callback':
        const timeLabel = stepO2Data.callbackTime === 'immediately' 
          ? 'immediately' 
          : stepO2Data.callbackTime === 'morning'
          ? 'in the morning'
          : stepO2Data.callbackTime === 'afternoon'
          ? 'in the afternoon'
          : stepO2Data.callbackTime === 'evening'
          ? 'in the evening'
          : 'at your preferred time';
        return {
          title: `Thanks, ${step1Data.firstName} — your one-off quote is being prepared.`,
          items: [
            'You\'re now in our priority queue',
            `We'll call you ${timeLabel}`,
            'Before officially onboarding, we\'ll complete a simple AML check. Nothing to do yet — we\'ll guide you when the time comes.'
          ]
        };
      default:
        return {
          title: `Thanks, ${step1Data.firstName} — your one-off quote is being prepared.`,
          items: [
            'You\'re now in our priority queue',
            'We\'ll call you at the time selected',
            'Before officially onboarding, we\'ll complete a simple AML check. Nothing to do yet — we\'ll guide you when the time comes.'
          ]
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

      {/* Next Steps */}
      {stepO2Data.proceedOption === 'callback' && (
        <div className="border-t border-muted pt-6">
          <h2 className="text-xl font-semibold text-primary mb-4 text-center">
            What happens next?
          </h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
              <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-primary">We&apos;ll call you</p>
                <p className="text-sm text-muted-foreground">
                  Expect a call from us {stepO2Data.callbackTime === 'immediately' ? 'immediately' : stepO2Data.callbackTime === 'morning' ? 'in the morning' : stepO2Data.callbackTime === 'afternoon' ? 'in the afternoon' : stepO2Data.callbackTime === 'evening' ? 'in the evening' : 'at your preferred time'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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

