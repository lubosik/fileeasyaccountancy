'use client';

import { useState, useEffect } from 'react';
import { StepO1Data, OneOffJobType, OneOffTimePeriod, OneOffUrgency, OneOffCurrentAccountant, OneOffBudgetComfort } from '../types';
import { formatOneOffPricingRange } from '../lib/oneOffPricing';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { markStepComplete } from '@/lib/progress';
import { updateGHLProgress } from '@/lib/ghlProgress';

interface StepO1OneOffScopingProps {
  onNext: (data: StepO1Data) => void;
  onBack: () => void;
  firstName?: string;
  initialData?: StepO1Data;
}

export default function StepO1OneOffScoping({
  onNext,
  initialData
}: StepO1OneOffScopingProps) {
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [jobTypes, setJobTypes] = useState<OneOffJobType[]>(
    initialData?.jobTypes || leadStore.stepO1?.jobTypes || []
  );
  const [otherJobType, setOtherJobType] = useState<string>(
    initialData?.otherJobType || leadStore.stepO1?.otherJobType || ''
  );
  const [timePeriod, setTimePeriod] = useState<OneOffTimePeriod>(
    initialData?.timePeriod || leadStore.stepO1?.timePeriod || '' as OneOffTimePeriod
  );
  const [urgency, setUrgency] = useState<OneOffUrgency>(
    initialData?.urgency || leadStore.stepO1?.urgency || '' as OneOffUrgency
  );
  const [currentAccountant, setCurrentAccountant] = useState<OneOffCurrentAccountant>(
    initialData?.currentAccountant || leadStore.stepO1?.currentAccountant || '' as OneOffCurrentAccountant
  );
  const [budgetComfort, setBudgetComfort] = useState<OneOffBudgetComfort>(
    initialData?.budgetComfort || leadStore.stepO1?.budgetComfort || '' as OneOffBudgetComfort
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Autosave to localStorage
  useEffect(() => {
    const data: StepO1Data = {
      jobTypes,
      otherJobType,
      timePeriod,
      urgency,
      currentAccountant,
      budgetComfort
    };
    localStorage.setItem('quote_stepO1', JSON.stringify(data));
  }, [jobTypes, otherJobType, timePeriod, urgency, currentAccountant, budgetComfort]);

  const jobTypeOptions: { value: OneOffJobType; label: string }[] = [
    { value: 'self-assessment', label: 'Self Assessment' },
    { value: 'one-off-accounts', label: 'One-off company accounts' },
    { value: 'bookkeeping-catchup', label: 'Bookkeeping catch-up' },
    { value: 'hmrc-letter', label: 'HMRC letter or VAT issue' },
    { value: 'cis-reconciliation', label: 'CIS reconciliation' },
    { value: 'other', label: 'Other' }
  ];

  const toggleJobType = (type: OneOffJobType) => {
    if (jobTypes.includes(type)) {
      setJobTypes(jobTypes.filter(t => t !== type));
    } else {
      setJobTypes([...jobTypes, type]);
    }
    if (errors.jobTypes) {
      setErrors({ ...errors, jobTypes: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (jobTypes.length === 0) {
      newErrors.jobTypes = 'Please select at least one job type';
    }
    if (jobTypes.includes('other') && !otherJobType.trim()) {
      newErrors.otherJobType = 'Please describe the other job type';
    }
    if (!timePeriod) {
      newErrors.timePeriod = 'Please select a time period';
    }
    if (!urgency) {
      newErrors.urgency = 'Please select urgency';
    }
    if (!currentAccountant) {
      newErrors.currentAccountant = 'Please select an option';
    }
    if (!budgetComfort) {
      newErrors.budgetComfort = 'Please select an option';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const stepO1Data: StepO1Data = {
      jobTypes,
      otherJobType: jobTypes.includes('other') ? otherJobType : undefined,
      timePeriod,
      urgency,
      currentAccountant,
      budgetComfort
    };

    // Update leadStore
    updateLeadStore({
      stepO1: stepO1Data,
    });

    // Map all Step O1 answers to GHL custom fields
    const customFields: Record<string, any> = {};

    // Convert jobTypes array to comma-separated string, including otherJobType if present
    if (jobTypes.length > 0) {
      const jobTypeLabels: string[] = [];
      jobTypeOptions.forEach(option => {
        if (jobTypes.includes(option.value)) {
          if (option.value === 'other' && otherJobType.trim()) {
            jobTypeLabels.push(`Other: ${otherJobType.trim()}`);
          } else {
            jobTypeLabels.push(option.label);
          }
        }
      });
      customFields[GHL_CUSTOM_FIELDS.oneOffJobType] = jobTypeLabels.join(', ');
    }

    if (urgency) {
      // Map urgency values to readable labels
      const urgencyLabels: Record<OneOffUrgency, string> = {
        'within-7-days': 'Deadline within 7 days',
        'within-30-days': 'Within 30 days',
        'no-fixed-deadline': 'No fixed deadline',
      };
      customFields[GHL_CUSTOM_FIELDS.oneOffUrgency] = urgencyLabels[urgency] || urgency;
    }

    if (budgetComfort) {
      // Map budget comfort values to readable labels
      const budgetLabels: Record<OneOffBudgetComfort, string> = {
        'sounds-fine': 'That sounds fine',
        'keep-it-low': 'Need to keep it low',
        'not-sure': 'Not sure',
      };
      customFields[GHL_CUSTOM_FIELDS.oneOffBudget] = budgetLabels[budgetComfort] || budgetComfort;
    }

    // Update GHL progress (new field-mapped endpoint)
    if (leadStore.email) {
      try {
        await updateGHLProgress({
          email: leadStore.email,
          phone: leadStore.phone,
          firstName: leadStore.firstName,
          lastName: leadStore.lastName,
          tags: ['One-Off – Scoping Complete'],
          custom: {
            'One-Off Job Type': jobTypes.join(', '),
            'One-Off Other Job Type': otherJobType,
            'One-Off Time Period': timePeriod,
            'One-Off Urgency': urgency,
            'One-Off Current Accountant': currentAccountant,
            'One-Off Budget Comfort': budgetComfort,
          },
        });
      } catch (error) {
        // Non-blocking
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step O1: GHL progress update error:', error);
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
          addTags: ['One-Off – Scoping Complete'],
        }
      );

      if (process.env.NODE_ENV !== 'production') {
        if (result.success) {
          console.log('Step O1: One-off scoping answers sent to GHL');
        } else {
          console.warn('Step O1: GHL dispatch failed (queued for retry):', result.error);
        }
      }
    } catch (error) {
      // Non-blocking - queue will retry
      if (process.env.NODE_ENV !== 'production') {
        console.error('Step O1: GHL dispatch error:', error);
      }
    }

    // Fire analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_oneoff_scoping_complete', {
        event_category: 'Quote',
        event_label: 'One-Off Scoping Complete',
        job_types_count: jobTypes.length,
        urgency: urgency,
        budget_comfort: budgetComfort,
      });
    }

    // Mark step O1 as complete
    await markStepComplete('O1', {
      stepO1: stepO1Data,
      oneOffJobType: stepO1Data.jobTypes.join(', '),
      oneOffUrgency: stepO1Data.urgency,
      oneOffBudget: stepO1Data.budgetComfort,
    });

    onNext(stepO1Data);
  };

  return (
    <form id="stepO1-form" onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Tell us what you need help with — we&apos;ll prepare your fixed quote.
        </h1>
      </div>

      {/* Q1 - Job Type (multi-select) */}
      <div>
        <label className="block text-lg font-semibold text-primary mb-3">
          What type of work do you need? (Select all that apply)
        </label>
        <div className="space-y-2">
          {jobTypeOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 p-3 border border-muted rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
            >
              <input
                type="checkbox"
                checked={jobTypes.includes(option.value)}
                onChange={() => toggleJobType(option.value)}
                className="w-5 h-5 text-primary border-muted rounded focus:ring-primary"
              />
              <span className="text-muted-foreground">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.jobTypes && (
          <p className="text-red-500 text-sm mt-1">{errors.jobTypes}</p>
        )}
      </div>

      {/* Other Job Type Text Input */}
      {jobTypes.includes('other') && (
        <div>
          <label className="block text-lg font-semibold text-primary mb-2">
            Please describe the other job type
          </label>
          <textarea
            value={otherJobType}
            onChange={(e) => {
              setOtherJobType(e.target.value);
              if (errors.otherJobType) {
                setErrors({ ...errors, otherJobType: '' });
              }
            }}
            className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            rows={3}
            placeholder="Describe what you need help with..."
          />
          {errors.otherJobType && (
            <p className="text-red-500 text-sm mt-1">{errors.otherJobType}</p>
          )}
        </div>
      )}

      {/* Q2 - Time Period */}
      <div>
        <label className="block text-lg font-semibold text-primary mb-3">
          What time period does this cover?
        </label>
        <div className="space-y-2">
          {[
            { value: 'latest-tax-year' as OneOffTimePeriod, label: 'Latest tax year' },
            { value: 'multiple-past-years' as OneOffTimePeriod, label: 'Multiple past years' },
            { value: 'ongoing-issue' as OneOffTimePeriod, label: 'Ongoing issue / unsure' }
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 p-3 border border-muted rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
            >
              <input
                type="radio"
                name="timePeriod"
                value={option.value}
                checked={timePeriod === option.value}
                onChange={() => {
                  setTimePeriod(option.value);
                  if (errors.timePeriod) {
                    setErrors({ ...errors, timePeriod: '' });
                  }
                }}
                className="w-5 h-5 text-primary border-muted focus:ring-primary"
              />
              <span className="text-muted-foreground">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.timePeriod && (
          <p className="text-red-500 text-sm mt-1">{errors.timePeriod}</p>
        )}
      </div>

      {/* Q3 - Urgency */}
      <div>
        <label className="block text-lg font-semibold text-primary mb-3">
          How urgent is this?
        </label>
        <div className="space-y-2">
          {[
            { value: 'within-7-days' as OneOffUrgency, label: 'Deadline within 7 days' },
            { value: 'within-30-days' as OneOffUrgency, label: 'Within 30 days' },
            { value: 'no-fixed-deadline' as OneOffUrgency, label: 'No fixed deadline' }
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 p-3 border border-muted rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
            >
              <input
                type="radio"
                name="urgency"
                value={option.value}
                checked={urgency === option.value}
                onChange={() => {
                  setUrgency(option.value);
                  if (errors.urgency) {
                    setErrors({ ...errors, urgency: '' });
                  }
                }}
                className="w-5 h-5 text-primary border-muted focus:ring-primary"
              />
              <span className="text-muted-foreground">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.urgency && (
          <p className="text-red-500 text-sm mt-1">{errors.urgency}</p>
        )}
      </div>

      {/* Q4 - Current Accountant */}
      <div>
        <label className="block text-lg font-semibold text-primary mb-3">
          Do you currently have an accountant?
        </label>
        <div className="space-y-2">
          {[
            { value: 'yes' as OneOffCurrentAccountant, label: 'Yes' },
            { value: 'no' as OneOffCurrentAccountant, label: 'No' },
            { value: 'complicated' as OneOffCurrentAccountant, label: 'Complicated' }
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 p-3 border border-muted rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
            >
              <input
                type="radio"
                name="currentAccountant"
                value={option.value}
                checked={currentAccountant === option.value}
                onChange={() => {
                  setCurrentAccountant(option.value);
                  if (errors.currentAccountant) {
                    setErrors({ ...errors, currentAccountant: '' });
                  }
                }}
                className="w-5 h-5 text-primary border-muted focus:ring-primary"
              />
              <span className="text-muted-foreground">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.currentAccountant && (
          <p className="text-red-500 text-sm mt-1">{errors.currentAccountant}</p>
        )}
      </div>

      {/* Q5 - Budget Comfort */}
      <div>
        <label className="block text-lg font-semibold text-primary mb-3">
          Budget Comfort
        </label>
        <p className="text-muted-foreground mb-4">
          Most one-off jobs start from {formatOneOffPricingRange()} depending on complexity.
        </p>
        <div className="space-y-2">
          {[
            { value: 'sounds-fine' as OneOffBudgetComfort, label: 'That sounds fine' },
            { value: 'keep-it-low' as OneOffBudgetComfort, label: 'Need to keep it low' },
            { value: 'not-sure' as OneOffBudgetComfort, label: 'Not sure' }
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 p-3 border border-muted rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
            >
              <input
                type="radio"
                name="budgetComfort"
                value={option.value}
                checked={budgetComfort === option.value}
                onChange={() => {
                  setBudgetComfort(option.value);
                  if (errors.budgetComfort) {
                    setErrors({ ...errors, budgetComfort: '' });
                  }
                }}
                className="w-5 h-5 text-primary border-muted focus:ring-primary"
              />
              <span className="text-muted-foreground">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.budgetComfort && (
          <p className="text-red-500 text-sm mt-1">{errors.budgetComfort}</p>
        )}
      </div>
    </form>
  );
}

