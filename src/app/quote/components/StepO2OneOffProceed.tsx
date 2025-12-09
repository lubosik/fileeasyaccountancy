'use client';

import { useState, useEffect } from 'react';
import { StepO2Data, OneOffProceedOption, OneOffCallbackTime } from '../types';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { markStepComplete } from '@/lib/progress';
import { updateGHLProgress } from '@/lib/ghlProgress';

interface StepO2OneOffProceedProps {
  onNext: (data: StepO2Data) => void;
  onBack: () => void;
  firstName?: string;
  initialData?: StepO2Data;
}

export default function StepO2OneOffProceed({
  onNext,
  initialData
}: StepO2OneOffProceedProps) {
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [proceedOption, setProceedOption] = useState<OneOffProceedOption>(
    initialData?.proceedOption || (leadStore.stepO2?.proceedOption as OneOffProceedOption) || 'callback'
  );
  const [callbackTime, setCallbackTime] = useState<OneOffCallbackTime>(
    initialData?.callbackTime || (leadStore.stepO2?.callbackTime as OneOffCallbackTime) || '' as OneOffCallbackTime
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Autosave to localStorage
  useEffect(() => {
    const data: StepO2Data = {
      proceedOption,
      callbackTime: proceedOption === 'callback' ? callbackTime : undefined
    };
    localStorage.setItem('quote_stepO2', JSON.stringify(data));
  }, [proceedOption, callbackTime]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!proceedOption) {
      newErrors.proceedOption = 'Please select an option';
    }
    if (proceedOption === 'callback' && !callbackTime) {
      newErrors.callbackTime = 'Please select a preferred time';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const stepO2Data: StepO2Data = {
      proceedOption,
      callbackTime: proceedOption === 'callback' ? callbackTime : undefined
    };

    // Update leadStore
    updateLeadStore({
      stepO2: stepO2Data,
    });

    // Map callback time to GHL custom field
    const customFields: Record<string, any> = {};

    if (callbackTime) {
      // Map callback time values to readable labels
      const callbackTimeLabels: Record<OneOffCallbackTime, string> = {
        'morning': 'Morning',
        'afternoon': 'Afternoon',
        'evening': 'Evening',
        'immediately': 'Immediately',
      };
      customFields[GHL_CUSTOM_FIELDS.preferredContactMethod] = callbackTimeLabels[callbackTime] || callbackTime;
    }

    // Update GHL progress (new field-mapped endpoint)
    if (leadStore.email) {
      try {
        await updateGHLProgress({
          email: leadStore.email,
          phone: leadStore.phone,
          firstName: leadStore.firstName,
          lastName: leadStore.lastName,
          tags: ['One-Off – Callback Requested'],
          custom: {
            'One-Off Preferred Contact Method': 'Callback',
            'One-Off Preferred Time': callbackTime,
          },
        });
      } catch (error) {
        // Non-blocking
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step O2: GHL progress update error:', error);
        }
      }
    }

    // Also dispatch to GHL (legacy - for backward compatibility)
    try {
      const result = await dispatchToGHL(
        {
          customFields,
        },
        {
          addTags: ['One-Off – Callback Requested'],
        }
      );

      if (process.env.NODE_ENV !== 'production') {
        if (result.success) {
          console.log('Step O2: Callback request sent to GHL:', callbackTime);
        } else {
          console.warn('Step O2: GHL dispatch failed (queued for retry):', result.error);
        }
      }
    } catch (error) {
      // Non-blocking - queue will retry
      if (process.env.NODE_ENV !== 'production') {
        console.error('Step O2: GHL dispatch error:', error);
      }
    }

    // Fire analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_oneoff_callback_requested', {
        event_category: 'Quote',
        event_label: 'One-Off Callback Requested',
        callback_time: callbackTime,
        preferred_contact_method: callbackTime,
      });
    }

    // Mark step O2 as complete
    await markStepComplete('O2', {
      stepO2: stepO2Data,
      preferredContactMethod: stepO2Data.callbackTime,
    });

    onNext(stepO2Data);
  };

  return (
    <form id="stepO2-form" onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">
          How would you like to move forward?
        </h1>
      </div>

      {/* Option 1 - Callback */}
      <div>
        <label
          className={`flex items-start space-x-3 p-6 border-2 rounded-lg cursor-pointer transition-all ${
            proceedOption === 'callback'
              ? 'border-primary bg-primary/5 ring-2 ring-primary'
              : 'border-muted hover:border-primary/50'
          }`}
        >
          <input
            type="radio"
            name="proceedOption"
            value="callback"
            checked={proceedOption === 'callback'}
            onChange={() => {
              setProceedOption('callback');
              if (errors.proceedOption) {
                setErrors({ ...errors, proceedOption: '' });
              }
            }}
            className="w-5 h-5 text-primary border-muted focus:ring-primary mt-1"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-2">Have File Easy Call Me Back</h3>
            <p className="text-muted-foreground mb-3">
              Choose a preferred time:
            </p>
            {proceedOption === 'callback' && (
              <div className="space-y-2 ml-8">
                {[
                  { value: 'morning' as OneOffCallbackTime, label: 'Morning' },
                  { value: 'afternoon' as OneOffCallbackTime, label: 'Afternoon' },
                  { value: 'evening' as OneOffCallbackTime, label: 'Evening' },
                  { value: 'immediately' as OneOffCallbackTime, label: 'Immediately' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 p-2 border border-muted rounded-lg cursor-pointer hover:bg-muted/50"
                  >
                    <input
                      type="radio"
                      name="callbackTime"
                      value={option.value}
                      checked={callbackTime === option.value}
                      onChange={() => {
                        setCallbackTime(option.value);
                        if (errors.callbackTime) {
                          setErrors({ ...errors, callbackTime: '' });
                        }
                      }}
                      className="w-4 h-4 text-primary border-muted focus:ring-primary"
                    />
                    <span className="text-muted-foreground">{option.label}</span>
                  </label>
                ))}
                {errors.callbackTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.callbackTime}</p>
                )}
              </div>
            )}
          </div>
        </label>
      </div>


      {errors.proceedOption && (
        <p className="text-red-500 text-sm text-center">{errors.proceedOption}</p>
      )}
    </form>
  );
}

