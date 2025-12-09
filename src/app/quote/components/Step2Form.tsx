'use client';

import { useState, useEffect } from 'react';
import { Step2Data, SupportType } from '../types';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { markStepComplete } from '@/lib/progress';
import { updateGHLProgress, getStoredContactId } from '@/lib/ghlProgress';

interface Step2FormProps {
  onNext: (data: Step2Data) => void;
  onBack: () => void;
  initialData?: Partial<Step2Data>;
}

export default function Step2Form({ onNext, initialData }: Step2FormProps) {
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [formData, setFormData] = useState<Step2Data>({
    supportType: initialData?.supportType || (leadStore.engagementType === 'Monthly' ? 'monthly' : leadStore.engagementType === 'One-Off' ? 'one-off' : '') as SupportType,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Step2Data, string>>>({});

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('quote_step2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  // Autosave to localStorage
  useEffect(() => {
    if (formData.supportType) {
      localStorage.setItem('quote_step2', JSON.stringify(formData));
    }
  }, [formData]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof Step2Data, string>> = {};

    if (!formData.supportType) {
      newErrors.supportType = 'Please select a support type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate()) {

      // Map supportType to engagementType format
      const engagementType = formData.supportType === 'monthly' ? 'Monthly' : 'One-Off';
      const tag = formData.supportType === 'monthly' 
        ? 'Engagement Type – Monthly' 
        : 'Engagement Type – One-Off';

      // Update leadStore
      updateLeadStore({
        engagementType: engagementType as 'Monthly' | 'One-Off',
      });

      // Update GHL progress (new field-mapped endpoint)
      const contactId = getStoredContactId();
      if (leadStore.email) {
        try {
          await updateGHLProgress({
            email: leadStore.email,
            phone: leadStore.phone,
            firstName: leadStore.firstName,
            lastName: leadStore.lastName,
            tags: [tag],
            custom: {
              'Engagement Type': engagementType,
            },
          });
        } catch (error) {
          // Non-blocking
          if (process.env.NODE_ENV !== 'production') {
            console.error('Step 2: GHL progress update error:', error);
          }
        }
      }

      // Also dispatch to GHL (legacy - for backward compatibility)
      try {
        const result = await dispatchToGHL(
          {
            customFields: {
              [GHL_CUSTOM_FIELDS.engagementType]: engagementType,
            },
          },
          {
            addTags: [tag],
          }
        );

        if (process.env.NODE_ENV !== 'production') {
          if (result.success) {
            console.log('Step 2: Engagement type updated in GHL:', engagementType);
          } else {
            console.warn('Step 2: GHL dispatch failed (queued for retry):', result.error);
          }
        }
      } catch (error) {
        // Non-blocking - queue will retry
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step 2: GHL dispatch error:', error);
        }
      }

      // Fire analytics events
      if (typeof window !== 'undefined') {
        if (window.gtag) {
          const eventName = formData.supportType === 'monthly' 
            ? 'lead_routed_monthly' 
            : 'lead_routed_oneoff';
          
          window.gtag('event', eventName, {
            event_category: 'Quote',
            event_label: `Route Selected: ${engagementType}`,
            engagement_type: engagementType,
          });
        }
      }

      // Mark step 2 as complete
      await markStepComplete(2, {
        engagementType: engagementType,
      });

        setTimeout(() => {
          onNext(formData);
        }, 300);
    }
  };

  const handleChange = (value: SupportType) => {
    setFormData(prev => ({ ...prev, supportType: value }));
    if (errors.supportType) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.supportType;
        return newErrors;
      });
    }
  };

  return (
    <form id="step2-form" onSubmit={handleSubmit} className="space-y-6">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">
          What kind of support do you need right now?
        </h1>
      </div>

      {/* Radio Button Options */}
      <div className="space-y-4">
        <label className={`flex items-start p-6 border-2 rounded-lg cursor-pointer transition-all ${
          formData.supportType === 'monthly' 
            ? 'border-primary bg-primary/5' 
            : 'border-muted hover:border-primary/50'
        }`}>
          <input
            type="radio"
            name="supportType"
            value="monthly"
            checked={formData.supportType === 'monthly'}
            onChange={() => handleChange('monthly')}
            className="mt-1 w-5 h-5 text-primary border-muted focus:ring-2 focus:ring-primary"
          />
          <div className="ml-4 flex-1">
            <div className="font-semibold text-lg text-primary mb-2">
              Ongoing monthly support
            </div>
            <div className="text-muted-foreground">
              Bookkeeping, VAT, CIS, accounts, tax planning & Virtual FD support.
            </div>
          </div>
        </label>

        <label className={`flex items-start p-6 border-2 rounded-lg cursor-pointer transition-all ${
          formData.supportType === 'one-off' 
            ? 'border-primary bg-primary/5' 
            : 'border-muted hover:border-primary/50'
        }`}>
          <input
            type="radio"
            name="supportType"
            value="one-off"
            checked={formData.supportType === 'one-off'}
            onChange={() => handleChange('one-off')}
            className="mt-1 w-5 h-5 text-primary border-muted focus:ring-2 focus:ring-primary"
          />
          <div className="ml-4 flex-1">
            <div className="font-semibold text-lg text-primary mb-2">
              A one-off job
            </div>
            <div className="text-muted-foreground">
              Self Assessment, company accounts, HMRC issue, bookkeeping catch-up, etc.
            </div>
          </div>
        </label>
      </div>

      {errors.supportType && (
        <p className="text-red-600 text-sm mt-2">{errors.supportType}</p>
      )}

      {/* Submit Button - Hidden, triggered by Continue button in footer */}
      <button type="submit" id="step2-submit" className="hidden" aria-hidden="true" />
    </form>
  );
}

