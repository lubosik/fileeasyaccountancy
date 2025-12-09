'use client';

import { useState, useEffect } from 'react';
import { Step4Data } from '../types';
import { calculateAnnualPrice, formatAnnualPrice, formatPriceRange } from '../lib/pricing';
import { CheckCircle2 } from 'lucide-react';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { markStepComplete } from '@/lib/progress';
import { trackGA4Event } from '@/lib/analytics';
import { updateGHLProgress } from '@/lib/ghlProgress';

export type PaymentStyle = 'monthly' | 'annual';

interface Step5PaymentStyleProps {
  onNext: (paymentStyle: PaymentStyle) => void;
  onBack: () => void;
  step4Data: Step4Data;
}

export default function Step5PaymentStyle({
  onNext,
  step4Data
}: Step5PaymentStyleProps) {
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [paymentStyle, setPaymentStyle] = useState<PaymentStyle>(
    (leadStore.paymentPreference?.toLowerCase() as PaymentStyle) || 'monthly'
  );

  // Calculate prices
  const monthlyPrice = step4Data.monthlyPrice.min; // Use min price for display
  const annualPrice = calculateAnnualPrice(monthlyPrice);
  const savings = Math.round(monthlyPrice * 12 - annualPrice);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('quote_step5');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.paymentStyle) {
          setPaymentStyle(parsed.paymentStyle);
        }
      } catch {
        // Ignore parse errors
      }
    }
  }, []);

  // Autosave to localStorage
  useEffect(() => {
    localStorage.setItem('quote_step5', JSON.stringify({ paymentStyle }));
  }, [paymentStyle]);

  const handleContinue = async () => {
    const paymentPreference = paymentStyle.charAt(0).toUpperCase() + paymentStyle.slice(1); // "monthly" -> "Monthly", "annual" -> "Annual"

    // Update leadStore
    updateLeadStore({
      paymentPreference: paymentPreference as 'Monthly' | 'Annual',
    });

    // Update GHL progress (new field-mapped endpoint)
    if (leadStore.email) {
      try {
        await updateGHLProgress({
          email: leadStore.email,
          phone: leadStore.phone,
          firstName: leadStore.firstName,
          lastName: leadStore.lastName,
          tags: [`Payment Preference – ${paymentPreference}`],
          custom: {
            'Payment Preference': paymentPreference,
          },
        });
      } catch (error) {
        // Non-blocking
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step 5: GHL progress update error:', error);
        }
      }
    }

    // Also dispatch to GHL (legacy - for backward compatibility)
    try {
      const result = await dispatchToGHL(
        {
          customFields: {
            [GHL_CUSTOM_FIELDS.paymentPreference]: paymentPreference,
          },
        },
        {
          addTags: [`Payment Preference – ${paymentPreference}`],
        }
      );

      if (process.env.NODE_ENV !== 'production') {
        if (result.success) {
          console.log('Step 5: Payment preference sent to GHL:', paymentPreference);
        } else {
          console.warn('Step 5: GHL dispatch failed (queued for retry):', result.error);
        }
      }
    } catch (error) {
      // Non-blocking - queue will retry
      if (process.env.NODE_ENV !== 'production') {
        console.error('Step 5: GHL dispatch error:', error);
      }
    }

    // Track payment style selection
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'fe_quote_payment_style_selected', {
        payment_style: paymentStyle,
        event_category: 'Quote',
        event_label: `Payment Style: ${paymentStyle}`,
        monthly_price: monthlyPrice,
        annual_price: annualPrice,
        savings: savings,
        depositRequired: true,
        depositAmount: 100
      });

      // Also fire lead_payment_preference_selected event
      window.gtag('event', 'lead_payment_preference_selected', {
        event_category: 'Quote',
        event_label: `Payment Preference: ${paymentPreference}`,
        payment_preference: paymentPreference,
        payment_style: paymentStyle,
        deposit_required: true,
        deposit_amount: 100,
      });
    }

    // Mark step 5 as complete
    await markStepComplete(5, {
      step5: { paymentStyle },
      paymentPreference: paymentStyle === 'monthly' ? 'Monthly' : 'Annual',
    });

    // For Monthly flow, redirect to Stripe checkout for deposit
    // For One-Off flow, proceed normally (no deposit required)
    if (leadStore.engagementType === 'Monthly') {
      // Create Stripe checkout session
      try {
        const response = await fetch('/api/stripe/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: leadStore.email,
            uid: leadStore.uid,
            metadata: {
              firstName: leadStore.firstName,
              lastName: leadStore.lastName,
              paymentPreference: paymentStyle === 'monthly' ? 'Monthly' : 'Annual',
            },
          }),
        });

        const result = await response.json();

        if (result.ok && result.url) {
          // Track analytics event
          trackGA4Event('lead_deposit_checkout_initiated', {
            event_category: 'Quote',
            event_label: 'Deposit Checkout Initiated',
            payment_preference: paymentStyle === 'monthly' ? 'Monthly' : 'Annual',
            deposit_amount: 100,
          });

          // Redirect to Stripe Checkout
          window.location.href = result.url;
          return; // Don't call onNext, we're redirecting
        } else {
          // If checkout creation fails, show error but allow progression
          console.error('Failed to create checkout session:', result.error);
          alert('Unable to process payment at this time. Please contact support.');
          // Still proceed to next step (graceful degradation)
        }
      } catch (error) {
        console.error('Error creating checkout session:', error);
        alert('Unable to process payment at this time. Please contact support.');
        // Still proceed to next step (graceful degradation)
      }
    }

    // For One-Off flow or if deposit redirect failed, proceed normally
    onNext(paymentStyle);
  };

  const PaymentOption = ({ 
    style, 
    title, 
    price, 
    description, 
    features 
  }: { 
    style: PaymentStyle;
    title: string;
    price: string;
    description: string;
    features: string[];
  }) => {
    const isSelected = paymentStyle === style;

    return (
      <div
        className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
          isSelected
            ? 'border-primary bg-primary/5 ring-2 ring-primary'
            : 'border-muted hover:border-primary/50'
        }`}
        onClick={() => setPaymentStyle(style)}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
            <div className="text-3xl font-bold text-primary mb-2">{price}</div>
          </div>
          {isSelected && (
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
          )}
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">
          How would you like to pay?
        </h1>
      </div>

      {/* Deposit Info */}
      <div className="text-center mb-6">
        <p className="text-lg font-semibold text-primary">
          Small deposit – £100
        </p>
      </div>

      {/* Payment Options - 2 columns */}
      <div className="grid md:grid-cols-2 gap-6">
        <PaymentOption
          style="monthly"
          title="Pay Monthly – 1st Month"
          price={`From ${formatPriceRange(step4Data.monthlyPrice.min, step4Data.monthlyPrice.max)}`}
          description="Cancel with 30 days' notice."
          features={[
            'Cancel with 30 days\' notice',
            'Pay as you go',
            'No long-term commitment'
          ]}
        />

        <PaymentOption
          style="annual"
          title="Pay Annually (Save 5%) – One year payment"
          price={formatAnnualPrice(annualPrice)}
          description={`Pay £${annualPrice.toLocaleString()} for the year (5% discount)`}
          features={[
            'One invoice. Less admin. Best value.',
            'Save £' + savings.toLocaleString() + ' per year',
            'Best value'
          ]}
        />
      </div>

      {/* Micro-commitment line */}
      <div className="text-center pt-4">
        <p className="text-muted-foreground">
          Great — we've saved your payment preference. Final step below.
        </p>
      </div>

      {/* Submit Button - Hidden, triggered by Continue button in footer */}
      <button 
        type="button" 
        onClick={handleContinue} 
        className="hidden" 
        aria-hidden="true"
        data-step5-continue
      />
    </div>
  );
}

