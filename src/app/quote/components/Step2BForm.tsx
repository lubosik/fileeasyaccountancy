'use client';

import { useState, useEffect } from 'react';
import { Step2BData } from '../types';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { markStepComplete } from '@/lib/progress';
import { updateGHLProgress } from '@/lib/ghlProgress';

interface Step2BFormProps {
  onNext: (data: Step2BData) => void;
  onBack: () => void;
  initialData?: Partial<Step2BData>;
  firstName?: string; // For personalized messaging
}

export default function Step2BForm({ onNext, initialData }: Step2BFormProps) {
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [formData, setFormData] = useState<Step2BData>({
    businessType: initialData?.businessType || leadStore.step2B?.businessType || '',
    turnoverBand: initialData?.turnoverBand || leadStore.step2B?.turnoverBand || '',
    teamStructure: initialData?.teamStructure || leadStore.step2B?.teamStructure || '',
    currentSupport: initialData?.currentSupport || leadStore.step2B?.currentSupport || '',
    urgency: initialData?.urgency || leadStore.step2B?.urgency || '',
    priorities: initialData?.priorities || leadStore.step2B?.priorities || [],
    budgetAlignment: initialData?.budgetAlignment || leadStore.step2B?.budgetAlignment || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Step2BData, string>>>({});

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('quote_step2b');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch {
        // Ignore parse errors
      }
    }
  }, []);

  // Autosave to localStorage
  useEffect(() => {
    if (formData.businessType || formData.turnoverBand || formData.teamStructure) {
      localStorage.setItem('quote_step2b', JSON.stringify(formData));
    }
  }, [formData]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof Step2BData, string>> = {};

    if (!formData.businessType) {
      newErrors.businessType = 'Please select a business type';
    }
    if (!formData.turnoverBand) {
      newErrors.turnoverBand = 'Please select a turnover band';
    }
    if (!formData.teamStructure) {
      newErrors.teamStructure = 'Please select a team structure';
    }
    if (!formData.currentSupport) {
      newErrors.currentSupport = 'Please select how your accounts are managed';
    }
    if (!formData.urgency) {
      newErrors.urgency = 'Please select when you need support';
    }
    if (formData.priorities.length === 0) {
      newErrors.priorities = 'Please select at least one priority';
    }
    if (!formData.budgetAlignment) {
      newErrors.budgetAlignment = 'Please select a budget preference';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {

      // Update leadStore with Step 2B data
      updateLeadStore({
        step2B: formData,
      });

      // Map all answers to GHL custom fields
      const customFields: Record<string, any> = {};

      if (formData.businessType) {
        customFields[GHL_CUSTOM_FIELDS.businessType] = formData.businessType;
      }

      if (formData.turnoverBand) {
        customFields[GHL_CUSTOM_FIELDS.turnoverBand] = formData.turnoverBand;
      }

      if (formData.teamStructure) {
        customFields[GHL_CUSTOM_FIELDS.teamStructure] = formData.teamStructure;
      }

      if (formData.currentSupport) {
        customFields[GHL_CUSTOM_FIELDS.currentSupport] = formData.currentSupport;
      }

      if (formData.urgency) {
        customFields[GHL_CUSTOM_FIELDS.urgency] = formData.urgency;
      }

      // Convert priorities array to comma-separated string
      if (formData.priorities && formData.priorities.length > 0) {
        customFields[GHL_CUSTOM_FIELDS.priorities] = formData.priorities.join(', ');
      }

      if (formData.budgetAlignment) {
        customFields[GHL_CUSTOM_FIELDS.budgetComfort] = formData.budgetAlignment;
      }

      // Update GHL progress (new field-mapped endpoint)
      if (leadStore.email) {
        try {
          await updateGHLProgress({
            email: leadStore.email,
            phone: leadStore.phone,
            firstName: leadStore.firstName,
            lastName: leadStore.lastName,
            tags: ['Monthly – Prequal Complete'],
            custom: {
              'Business Type': formData.businessType,
              'Turnover Band': formData.turnoverBand,
              'Team Structure': formData.teamStructure,
              'Current Support': formData.currentSupport,
              'Urgency': formData.urgency,
              'Priorities': formData.priorities.join(', '),
              'Budget Comfort': formData.budgetAlignment,
            },
          });
        } catch (error) {
          // Non-blocking
          if (process.env.NODE_ENV !== 'production') {
            console.error('Step 2B: GHL progress update error:', error);
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
            addTags: ['Monthly – Prequal Complete'],
          }
        );

        if (process.env.NODE_ENV !== 'production') {
          if (result.success) {
            console.log('Step 2B: Pre-qualification answers sent to GHL');
          } else {
            console.warn('Step 2B: GHL dispatch failed (queued for retry):', result.error);
          }
        }
      } catch (error) {
        // Non-blocking - queue will retry
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step 2B: GHL dispatch error:', error);
        }
      }

      // Fire analytics event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_monthly_prequal_complete', {
          event_category: 'Quote',
          event_label: 'Monthly Pre-Qualification Complete',
          business_type: formData.businessType,
          turnover_band: formData.turnoverBand,
          priorities_count: formData.priorities.length,
        });
      }

      // Mark step 2B as complete
      await markStepComplete('2B', {
        step2B: formData,
        businessType: formData.businessType,
        turnoverBand: formData.turnoverBand,
        teamStructure: formData.teamStructure,
        currentSupport: formData.currentSupport,
        urgency: formData.urgency,
        priorities: formData.priorities,
        budgetAlignment: formData.budgetAlignment,
      });

      setTimeout(() => {
        onNext(formData);
      }, 300);
    }
  };

  const handleRadioChange = (field: keyof Step2BData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handlePriorityToggle = (priority: string) => {
    setFormData(prev => {
      const newPriorities = prev.priorities.includes(priority)
        ? prev.priorities.filter(p => p !== priority)
        : [...prev.priorities, priority];
      return { ...prev, priorities: newPriorities };
    });
    if (errors.priorities) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.priorities;
        return newErrors;
      });
    }
  };

  const priorityOptions = [
    'Stay compliant & avoid penalties',
    'Reduce tax & keep more profit',
    'Better finances, cashflow, monthly clarity',
    'Virtual Finance Director level support',
  ];

  return (
    <form id="step2b-form" onSubmit={handleSubmit} className="space-y-8">
      {/* Title - Removed, each question has its own headline per spec */}

      {/* Q1 - Business Type */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-4">
          What best describes your business?
        </h1>
        <div className="space-y-3">
          {['Limited Company', 'Sole Trader', 'Partnership', 'Not set up yet'].map((option) => {
            const value = option.toLowerCase().replace(/\s+/g, '-').replace('not-set-up-yet', 'not-set-up');
            return (
              <label
                key={value}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.businessType === value
                    ? 'border-primary bg-primary/5'
                    : 'border-muted hover:border-primary/50'
                }`}
              >
                <input
                  type="radio"
                  name="businessType"
                  value={value}
                  checked={formData.businessType === value}
                  onChange={() => handleRadioChange('businessType', value)}
                  className="w-5 h-5 text-primary border-muted focus:ring-2 focus:ring-primary"
                />
                <span className="ml-3 text-muted-foreground">{option}</span>
              </label>
            );
          })}
        </div>
        {errors.businessType && (
          <p className="text-red-600 text-sm mt-2">{errors.businessType}</p>
        )}
      </div>

      {/* Q2 - Turnover Band */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-4">
          What's your approximate annual turnover?
        </h1>
        <div className="space-y-3">
          {[
            { label: 'Under £250k', value: 'under-250k' },
            { label: '£250k–£1m', value: '250k-1m' },
            { label: '£1m–£5m', value: '1m-5m' },
            { label: 'Over £5m', value: 'over-5m' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.turnoverBand === option.value
                  ? 'border-primary bg-primary/5'
                  : 'border-muted hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                name="turnoverBand"
                value={option.value}
                checked={formData.turnoverBand === option.value}
                onChange={() => handleRadioChange('turnoverBand', option.value)}
                className="w-5 h-5 text-primary border-muted focus:ring-2 focus:ring-primary"
              />
              <span className="ml-3 text-muted-foreground">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.turnoverBand && (
          <p className="text-red-600 text-sm mt-2">{errors.turnoverBand}</p>
        )}
      </div>

      {/* Q3 - Team / CIS Structure */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-4">
          Who do you work with?
        </h1>
        <div className="space-y-3">
          {[
            { label: 'Just me', value: 'just-me' },
            { label: 'Me + employees', value: 'me-employees' },
            { label: 'I use subcontractors (CIS)', value: 'subcontractors-cis' },
            { label: 'Employees + subcontractors', value: 'employees-subcontractors' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.teamStructure === option.value
                  ? 'border-primary bg-primary/5'
                  : 'border-muted hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                name="teamStructure"
                value={option.value}
                checked={formData.teamStructure === option.value}
                onChange={() => handleRadioChange('teamStructure', option.value)}
                className="w-5 h-5 text-primary border-muted focus:ring-2 focus:ring-primary"
              />
              <span className="ml-3 text-muted-foreground">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.teamStructure && (
          <p className="text-red-600 text-sm mt-2">{errors.teamStructure}</p>
        )}
      </div>

      {/* Q4 - Current Support */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-4">
          How are your accounts managed right now?
        </h1>
        <div className="space-y-3">
          {[
            { label: 'I already have an accountant', value: 'have-accountant' },
            { label: 'I do it myself', value: 'do-myself' },
            { label: "It's a bit of a mess / I'm behind", value: 'mess-behind' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.currentSupport === option.value
                  ? 'border-primary bg-primary/5'
                  : 'border-muted hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                name="currentSupport"
                value={option.value}
                checked={formData.currentSupport === option.value}
                onChange={() => handleRadioChange('currentSupport', option.value)}
                className="w-5 h-5 text-primary border-muted focus:ring-2 focus:ring-primary"
              />
              <span className="ml-3 text-muted-foreground">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.currentSupport && (
          <p className="text-red-600 text-sm mt-2">{errors.currentSupport}</p>
        )}
      </div>

      {/* Q5 - Urgency */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-4">
          How soon do you want support in place?
        </h1>
        <div className="space-y-3">
          {[
            { label: 'Immediately', value: 'immediately' },
            { label: 'Within 30 days', value: 'within-30-days' },
            { label: 'Within 3 months', value: 'within-3-months' },
            { label: 'Just researching', value: 'just-researching' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.urgency === option.value
                  ? 'border-primary bg-primary/5'
                  : 'border-muted hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                name="urgency"
                value={option.value}
                checked={formData.urgency === option.value}
                onChange={() => handleRadioChange('urgency', option.value)}
                className="w-5 h-5 text-primary border-muted focus:ring-2 focus:ring-primary"
              />
              <span className="ml-3 text-muted-foreground">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.urgency && (
          <p className="text-red-600 text-sm mt-2">{errors.urgency}</p>
        )}
      </div>

      {/* Q6 - Priorities (Multi-select) */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-4">
          What's most important to you right now?
        </h1>
        <div className="space-y-3">
          {priorityOptions.map((priority) => (
            <label
              key={priority}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.priorities.includes(priority)
                  ? 'border-primary bg-primary/5'
                  : 'border-muted hover:border-primary/50'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.priorities.includes(priority)}
                onChange={() => handlePriorityToggle(priority)}
                className="w-5 h-5 text-primary border-muted rounded focus:ring-2 focus:ring-primary"
              />
              <span className="ml-3 text-muted-foreground">{priority}</span>
            </label>
          ))}
        </div>
        {errors.priorities && (
          <p className="text-red-600 text-sm mt-2">{errors.priorities}</p>
        )}
      </div>

      {/* Q7 - Budget Alignment */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-4">
          Most clients in your situation invest £150–£1,495/month depending on size and support level. How does that sound?
        </h1>
        <div className="space-y-3">
          {[
            { label: 'That sounds fine', value: 'sounds-fine' },
            { label: 'Need to keep costs down', value: 'keep-costs-down' },
            { label: 'Not sure yet', value: 'not-sure' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.budgetAlignment === option.value
                  ? 'border-primary bg-primary/5'
                  : 'border-muted hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                name="budgetAlignment"
                value={option.value}
                checked={formData.budgetAlignment === option.value}
                onChange={() => handleRadioChange('budgetAlignment', option.value)}
                className="w-5 h-5 text-primary border-muted focus:ring-2 focus:ring-primary"
              />
              <span className="ml-3 text-muted-foreground">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.budgetAlignment && (
          <p className="text-red-600 text-sm mt-2">{errors.budgetAlignment}</p>
        )}
      </div>

      {/* Submit Button - Hidden, triggered by Continue button in footer */}
      <button type="submit" className="hidden" aria-hidden="true" />
    </form>
  );
}

