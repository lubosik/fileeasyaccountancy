'use client';

import { useState, useEffect } from 'react';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { markStepComplete } from '@/lib/progress';
import { updateGHLProgress } from '@/lib/ghlProgress';
import AMLStatusDisplay from '@/components/AMLStatusDisplay';

export interface Step6Data {
  legalBusinessName: string;
  tradingName: string;
  companyNumber: string;
  businessAddress: string;
  website: string;
  yourRole: string;
  otherDirectorsShareholders: 'yes' | 'no' | '';
  ukResidents: 'yes' | 'no' | '';
  amlConsent: boolean;
}

interface Step6OnboardingDetailsProps {
  onNext: (data: Step6Data) => void;
  onBack: () => void;
  initialData?: Partial<Step6Data>;
  firstName?: string;
}

export default function Step6OnboardingDetails({
  onNext,
  initialData
}: Step6OnboardingDetailsProps) {
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [formData, setFormData] = useState<Step6Data>({
    legalBusinessName: initialData?.legalBusinessName || leadStore.step6?.legalBusinessName || '',
    tradingName: initialData?.tradingName || leadStore.step6?.tradingName || '',
    companyNumber: initialData?.companyNumber || leadStore.step6?.companyNumber || '',
    businessAddress: initialData?.businessAddress || leadStore.step6?.businessAddress || '',
    website: initialData?.website || leadStore.step6?.website || '',
    yourRole: initialData?.yourRole || leadStore.step6?.yourRole || '',
    otherDirectorsShareholders: initialData?.otherDirectorsShareholders || leadStore.step6?.otherDirectorsShareholders || '',
    ukResidents: initialData?.ukResidents || leadStore.step6?.ukResidents || '',
    amlConsent: initialData?.amlConsent || leadStore.step6?.amlConsent || false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Step6Data, string>>>({});

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('quote_step6');
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
    if (
      formData.legalBusinessName ||
      formData.tradingName ||
      formData.businessAddress ||
      formData.yourRole
    ) {
      localStorage.setItem('quote_step6', JSON.stringify(formData));
    }
  }, [formData]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof Step6Data, string>> = {};

    if (!formData.legalBusinessName.trim()) {
      newErrors.legalBusinessName = 'Legal business name is required';
    }

    if (!formData.tradingName.trim()) {
      newErrors.tradingName = 'Trading name is required';
    }

    if (!formData.businessAddress.trim()) {
      newErrors.businessAddress = 'Business address is required';
    }

    if (!formData.yourRole.trim()) {
      newErrors.yourRole = 'Your role is required';
    }

    if (!formData.otherDirectorsShareholders) {
      newErrors.otherDirectorsShareholders = 'Please select an option';
    }

    if (!formData.ukResidents) {
      newErrors.ukResidents = 'Please select an option';
    }

    if (!formData.amlConsent) {
      newErrors.amlConsent = 'You must agree to AML checks';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {

      // Update leadStore with Step 6 data
      updateLeadStore({
        step6: formData,
      });

      // Map all Step 6 fields to GHL custom fields
      const customFields: Record<string, any> = {};

      if (formData.legalBusinessName) {
        customFields[GHL_CUSTOM_FIELDS.companyName] = formData.legalBusinessName;
      }

      if (formData.tradingName) {
        customFields[GHL_CUSTOM_FIELDS.tradingName] = formData.tradingName;
      }

      if (formData.companyNumber) {
        customFields[GHL_CUSTOM_FIELDS.companyNumber] = formData.companyNumber;
      }

      if (formData.businessAddress) {
        customFields[GHL_CUSTOM_FIELDS.businessAddress] = formData.businessAddress;
      }

      if (formData.website) {
        customFields[GHL_CUSTOM_FIELDS.websiteUrl] = formData.website;
      }

      if (formData.yourRole) {
        customFields[GHL_CUSTOM_FIELDS.userRole] = formData.yourRole;
      }

      // Convert yes/no to Yes/No for GHL
      if (formData.otherDirectorsShareholders) {
        const hasOtherDirectors = formData.otherDirectorsShareholders === 'yes' ? 'Yes' : 'No';
        customFields[GHL_CUSTOM_FIELDS.hasOtherDirectors] = hasOtherDirectors;
      }

      if (formData.ukResidents) {
        const allUkResidents = formData.ukResidents === 'yes' ? 'Yes' : 'No';
        customFields[GHL_CUSTOM_FIELDS.allUkResidents] = allUkResidents;
      }

      // AML consent (boolean)
      customFields[GHL_CUSTOM_FIELDS.amlConsent] = formData.amlConsent ? 'Yes' : 'No';

      // Update GHL progress (new field-mapped endpoint)
      if (leadStore.email) {
        try {
          await updateGHLProgress({
            email: leadStore.email,
            phone: leadStore.phone,
            firstName: leadStore.firstName,
            lastName: leadStore.lastName,
            tags: ['Onboarding – Details Complete'],
            custom: {
              'Company Name': formData.legalBusinessName,
              'Trading Name': formData.tradingName,
              'Company Number': formData.companyNumber,
              'Business Address': formData.businessAddress,
              'Website': formData.website,
              'Your Role': formData.yourRole,
              'Other Directors/Shareholders': formData.otherDirectorsShareholders === 'yes' ? 'Yes' : 'No',
              'UK Residents': formData.ukResidents === 'yes' ? 'Yes' : 'No',
              'AML Consent': formData.amlConsent ? 'Yes' : 'No',
            },
          });
        } catch (error) {
          // Non-blocking
          if (process.env.NODE_ENV !== 'production') {
            console.error('Step 6: GHL progress update error:', error);
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
            addTags: ['Onboarding – Details Complete'],
          }
        );

        if (process.env.NODE_ENV !== 'production') {
          if (result.success) {
            console.log('Step 6: Onboarding details sent to GHL');
            
            // Note: AML task creation should be handled server-side
            // The API route can be extended to create tasks when this tag is added
            if (result.contactId && formData.amlConsent) {
              console.log('Step 6: AML consent given - task should be created in GHL');
            }
          } else {
            console.warn('Step 6: GHL dispatch failed (queued for retry):', result.error);
          }
        }
      } catch (error) {
        // Non-blocking - queue will retry
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step 6: GHL dispatch error:', error);
        }
      }

      // Fire analytics event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_onboarding_details_complete', {
          event_category: 'Quote',
          event_label: 'Onboarding Details Complete',
          has_company_number: !!formData.companyNumber,
          has_website: !!formData.website,
          aml_consent: formData.amlConsent,
        });
      }

      // Mark step 6 as complete
      await markStepComplete(6, {
        step6: formData,
        companyName: formData.legalBusinessName,
        tradingName: formData.tradingName,
        companyNumber: formData.companyNumber,
        businessAddress: formData.businessAddress,
        websiteUrl: formData.website,
        userRole: formData.yourRole,
        hasOtherDirectors: formData.otherDirectorsShareholders === 'yes' ? 'Yes' : 'No',
        allUkResidents: formData.ukResidents === 'yes' ? 'Yes' : 'No',
        amlConsent: formData.amlConsent ? 'Yes' : 'No',
      });

      setTimeout(() => {
        onNext(formData);
      }, 300);
    }
  };

  const handleChange = (field: keyof Step6Data, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <form id="step6-form" onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">
          A few details so we can prepare your onboarding pack.
        </h1>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Legal Business Name */}
        <div>
          <label htmlFor="legalBusinessName" className="block text-sm font-medium text-primary mb-2">
            Legal business name *
          </label>
          <input
            type="text"
            id="legalBusinessName"
            value={formData.legalBusinessName}
            onChange={(e) => handleChange('legalBusinessName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.legalBusinessName ? 'border-red-500' : 'border-muted'
            }`}
            placeholder="Your Company Ltd"
            required
          />
          {errors.legalBusinessName && (
            <p className="text-red-600 text-sm mt-1">{errors.legalBusinessName}</p>
          )}
        </div>

        {/* Trading Name */}
        <div>
          <label htmlFor="tradingName" className="block text-sm font-medium text-primary mb-2">
            Trading name *
          </label>
          <input
            type="text"
            id="tradingName"
            value={formData.tradingName}
            onChange={(e) => handleChange('tradingName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.tradingName ? 'border-red-500' : 'border-muted'
            }`}
            placeholder="Your Trading Name"
            required
          />
          {errors.tradingName && (
            <p className="text-red-600 text-sm mt-1">{errors.tradingName}</p>
          )}
        </div>

        {/* Company Number */}
        <div>
          <label htmlFor="companyNumber" className="block text-sm font-medium text-primary mb-2">
            Company number <span className="text-muted-foreground text-sm">(if known)</span>
          </label>
          <input
            type="text"
            id="companyNumber"
            value={formData.companyNumber}
            onChange={(e) => handleChange('companyNumber', e.target.value)}
            className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="12345678"
          />
        </div>

        {/* Business Address */}
        <div>
          <label htmlFor="businessAddress" className="block text-sm font-medium text-primary mb-2">
            Business address *
          </label>
          <textarea
            id="businessAddress"
            value={formData.businessAddress}
            onChange={(e) => handleChange('businessAddress', e.target.value)}
            rows={3}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.businessAddress ? 'border-red-500' : 'border-muted'
            }`}
            placeholder="123 Business Street, City, Postcode"
            required
          />
          {errors.businessAddress && (
            <p className="text-red-600 text-sm mt-1">{errors.businessAddress}</p>
          )}
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-primary mb-2">
            Website <span className="text-muted-foreground text-sm">(optional)</span>
          </label>
          <input
            type="url"
            id="website"
            value={formData.website}
            onChange={(e) => handleChange('website', e.target.value)}
            className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="https://www.example.com"
          />
        </div>

        {/* Your Role */}
        <div>
          <label htmlFor="yourRole" className="block text-sm font-medium text-primary mb-2">
            Your role *
          </label>
          <input
            type="text"
            id="yourRole"
            value={formData.yourRole}
            onChange={(e) => handleChange('yourRole', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.yourRole ? 'border-red-500' : 'border-muted'
            }`}
            placeholder="Director, Owner, Manager, etc."
            required
          />
          {errors.yourRole && (
            <p className="text-red-600 text-sm mt-1">{errors.yourRole}</p>
          )}
        </div>

        {/* Other Directors/Shareholders */}
        <div>
          <label className="block text-sm font-medium text-primary mb-4">
            Other directors/shareholders? *
          </label>
          <div className="space-y-3">
            {[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' }
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.otherDirectorsShareholders === option.value
                    ? 'border-primary bg-primary/5'
                    : 'border-muted hover:border-primary/50'
                }`}
              >
                <input
                  type="radio"
                  name="otherDirectorsShareholders"
                  value={option.value}
                  checked={formData.otherDirectorsShareholders === option.value}
                  onChange={(e) => handleChange('otherDirectorsShareholders', e.target.value as 'yes' | 'no')}
                  className="w-5 h-5 text-primary border-muted focus:ring-2 focus:ring-primary"
                />
                <span className="ml-3 text-muted-foreground">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.otherDirectorsShareholders && (
            <p className="text-red-600 text-sm mt-2">{errors.otherDirectorsShareholders}</p>
          )}
        </div>

        {/* UK Residents */}
        <div>
          <label className="block text-sm font-medium text-primary mb-4">
            UK residents? *
          </label>
          <div className="space-y-3">
            {[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' }
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.ukResidents === option.value
                    ? 'border-primary bg-primary/5'
                    : 'border-muted hover:border-primary/50'
                }`}
              >
                <input
                  type="radio"
                  name="ukResidents"
                  value={option.value}
                  checked={formData.ukResidents === option.value}
                  onChange={(e) => handleChange('ukResidents', e.target.value as 'yes' | 'no')}
                  className="w-5 h-5 text-primary border-muted focus:ring-2 focus:ring-primary"
                />
                <span className="ml-3 text-muted-foreground">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.ukResidents && (
            <p className="text-red-600 text-sm mt-2">{errors.ukResidents}</p>
          )}
        </div>
      </div>

      {/* AML Copy and Consent */}
      <div className="pt-6 border-t border-muted">
        <div className="bg-muted/50 rounded-lg p-6 mb-4">
          <p className="text-sm text-muted-foreground mb-4">
            As a regulated accountancy supervised by HMRC, we will complete a simple identity check before officially onboarding you. There's nothing you need to do now — we'll guide you through it.
          </p>
        </div>
        
        {/* AML Status Display (if deposit paid and FirmCheck enabled) */}
        {leadStore.depositPaid && typeof window !== 'undefined' && process.env.NEXT_PUBLIC_FE_GHL_AML_ENABLED === 'true' && (
          <div className="mb-4">
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
        
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.amlConsent}
            onChange={(e) => handleChange('amlConsent', e.target.checked)}
            className="mt-1 w-4 h-4 text-primary border-muted rounded focus:ring-2 focus:ring-primary"
            required
          />
          <span className="text-sm text-muted-foreground">
            I understand that File Easy will complete AML checks before becoming my accountant. *
          </span>
        </label>
        {errors.amlConsent && (
          <p className="text-red-600 text-sm mt-1">{errors.amlConsent}</p>
        )}
      </div>

      {/* Submit Button - Hidden, triggered by Continue button in footer */}
      <button type="submit" className="hidden" aria-hidden="true" />
    </form>
  );
}

