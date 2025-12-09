'use client';

import { useState, useEffect } from 'react';
import { Step1Data } from '../types';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { startRetryWorker } from '@/lib/dispatchToGHL';
import { checkForExistingProgress, restoreProgress } from '@/lib/resumeProgress';
import { markStepComplete } from '@/lib/progress';
import { updateGHLProgress } from '@/lib/ghlProgress';

interface Step1FormProps {
  onNext: (data: Step1Data) => void;
  initialData?: Partial<Step1Data>;
}

export default function Step1Form({ onNext, initialData }: Step1FormProps) {
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [formData, setFormData] = useState<Step1Data>({
    firstName: initialData?.firstName || leadStore.firstName || '',
    lastName: initialData?.lastName || leadStore.lastName || '',
    email: initialData?.email || leadStore.email || '',
    mobileNumber: initialData?.mobileNumber || leadStore.phone || '',
    consent: initialData?.consent || false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Step1Data, string>>>({});
  const [showMicroCommitment, setShowMicroCommitment] = useState(false);
  const [resumeMessage, setResumeMessage] = useState<string | null>(null);
  const [uidConfirmation, setUidConfirmation] = useState<string | null>(null);

  // Start retry worker on mount (for background queue processing)
  useEffect(() => {
    startRetryWorker();
  }, []);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('quote_step1');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch {
        // Ignore parse errors
      }
    }
  }, []);

  // Check for existing progress when email/phone is entered
  useEffect(() => {
    if (formData.email && (formData.mobileNumber || formData.firstName)) {
      const result = checkForExistingProgress(formData.email, formData.mobileNumber);
      if (result.hasProgress && result.data) {
        setResumeMessage(result.message || 'Found your previous progress');
        // Restore the progress
        restoreProgress(result.data);
        // Update form with restored data
        if (result.data.firstName) setFormData(prev => ({ ...prev, firstName: result.data.firstName }));
        if (result.data.lastName) setFormData(prev => ({ ...prev, lastName: result.data.lastName }));
        if (result.data.email) setFormData(prev => ({ ...prev, email: result.data.email }));
        if (result.data.phone || result.data.mobileNumber) {
          setFormData(prev => ({ ...prev, mobileNumber: result.data.phone || result.data.mobileNumber }));
        }
      } else {
        setResumeMessage(null);
      }
    }
  }, [formData.email, formData.mobileNumber]);

  // Autosave to localStorage
  useEffect(() => {
    if (formData.firstName || formData.lastName || formData.email || formData.mobileNumber) {
      localStorage.setItem('quote_step1', JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        consent: formData.consent,
      }));
    }
  }, [formData]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof Step1Data, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid mobile number';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to our privacy policy to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate()) {
      setShowMicroCommitment(true);

      // Update leadStore with Step 1 data
      updateLeadStore({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.mobileNumber,
        startedAt: leadStore.startedAt || new Date().toISOString(),
      });

      // Update GHL progress (new field-mapped endpoint)
      let contactId: string | undefined;
      try {
        const progressResult = await updateGHLProgress({
          email: formData.email,
          phone: formData.mobileNumber,
          firstName: formData.firstName,
          lastName: formData.lastName,
          tags: ['Lead – Started Quote'],
        });

        if (progressResult.success && progressResult.contactId) {
          contactId = progressResult.contactId;
          // Store contactId in leadStore
          updateLeadStore({ contactId });
          
          if (process.env.NODE_ENV !== 'production') {
            console.log('Step 1: Contact created/updated in GHL:', contactId);
          }
        } else {
          if (process.env.NODE_ENV !== 'production') {
            console.warn('Step 1: GHL progress update failed:', progressResult.message);
          }
        }
      } catch (error) {
        // Non-blocking - continue with flow
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step 1: GHL progress update error:', error);
        }
      }

      // Also dispatch to GHL (legacy - for backward compatibility)
      try {
        const result = await dispatchToGHL(
          {
            email: formData.email,
            phone: formData.mobileNumber,
            firstName: formData.firstName,
            lastName: formData.lastName,
          },
          {
            addTags: ['Lead – Started Quote'],
          }
        );

        if (process.env.NODE_ENV !== 'production') {
          if (result.success) {
            console.log('Step 1: Contact created/updated in GHL (legacy):', result.contactId);
            // Use legacy contactId if new one not available
            if (!contactId && result.contactId) {
              contactId = result.contactId;
              updateLeadStore({ contactId });
            }
          } else {
            console.warn('Step 1: GHL dispatch failed (queued for retry):', result.error);
          }
        }
      } catch (error) {
        // Non-blocking - queue will retry
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step 1: GHL dispatch error:', error);
        }
      }

      // Assign Unique ID after contact is created/updated
      if (contactId) {
          try {
            const uidResponse = await fetch('/api/resume/assign-uid', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
              }),
            });

            const uidData = await uidResponse.json();

            if (uidData.ok && uidData.uid) {
              // Save UID to lead store
              updateLeadStore({
                uid: uidData.uid,
              });

              // Show confirmation message
              setUidConfirmation("Saved your resume code. We'll email it too.");

              // Fire analytics event
              if (typeof window !== 'undefined') {
                if (window.gtag) {
                  window.gtag('event', 'lead_uid_issued', {
                    event_category: 'Quote',
                    event_label: 'UID Issued',
                    method: 'auto-after-step1',
                    uid: uidData.uid,
                  });
                }
              }

              // Trigger UID email via GHL automation
              try {
                const emailResponse = await fetch('/api/resume/email-uid', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email: formData.email,
                  }),
                });

                const emailData = await emailResponse.json();

                if (emailData.ok) {
                  if (process.env.NODE_ENV !== 'production') {
                    console.log('Step 1: UID email triggered via GHL');
                  }
                } else {
                  if (process.env.NODE_ENV !== 'production') {
                    console.warn('Step 1: UID email trigger failed:', emailData.error);
                  }
                }
              } catch (emailError) {
                // Non-blocking - email trigger failure shouldn't block flow
                if (process.env.NODE_ENV !== 'production') {
                  console.error('Step 1: UID email trigger error:', emailError);
                }
              }

              if (process.env.NODE_ENV !== 'production') {
                console.log('Step 1: UID assigned:', uidData.uid);
              }
            } else {
              if (process.env.NODE_ENV !== 'production') {
                console.warn('Step 1: UID assignment failed:', uidData.error);
              }
            }
          } catch (uidError) {
            // Non-blocking - UID assignment failure shouldn't block flow
            if (process.env.NODE_ENV !== 'production') {
              console.error('Step 1: UID assignment error:', uidError);
            }
          }
        }

      // Fire analytics events
      if (typeof window !== 'undefined') {
        // GA4 event
        if (window.gtag) {
          window.gtag('event', 'lead_step_1_captured', {
            event_category: 'Quote',
            event_label: 'Step 1 Complete',
            email: formData.email,
            source: 'quote_flow',
          });
        }

        // Meta Pixel event
        if (window.fbq) {
          window.fbq('trackCustom', 'LeadStep1Captured', {
            email: formData.email,
            source: 'quote_flow',
          });
        }
      }

      // Mark step 1 as complete
      await markStepComplete(1, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.mobileNumber,
      });

      // Show micro-commitment message, then proceed
      setTimeout(() => {
        onNext(formData);
      }, 1500);
    }
  };

  const handleChange = (field: keyof Step1Data, value: string | boolean) => {
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
    <form id="step1-form" onSubmit={handleSubmit} className="space-y-6">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Let's Get Your Personalised File Easy Quote
        </h1>
        <p className="text-muted-foreground text-lg">
          Answer a few quick questions and we'll build your personalised quote and next steps.
        </p>
        {resumeMessage && (
          <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-sm text-primary font-medium">{resumeMessage}</p>
          </div>
        )}
        {uidConfirmation && (
          <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-xs text-green-700">{uidConfirmation}</p>
          </div>
        )}
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* First Name and Last Name - Side by Side */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.firstName ? 'border-red-500' : 'border-muted'
              }`}
              placeholder="John"
              required
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.lastName ? 'border-red-500' : 'border-muted'
              }`}
              placeholder="Smith"
              required
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-muted'
            }`}
            placeholder="your.email@company.com"
            required
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-primary mb-2">
            Mobile Number *
          </label>
          <input
            type="tel"
            id="mobileNumber"
            value={formData.mobileNumber}
            onChange={(e) => handleChange('mobileNumber', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.mobileNumber ? 'border-red-500' : 'border-muted'
            }`}
            placeholder="+44 7894 447435"
            required
          />
          {errors.mobileNumber && (
            <p className="text-red-600 text-sm mt-1">{errors.mobileNumber}</p>
          )}
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="pt-4">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => handleChange('consent', e.target.checked)}
            className="mt-1 w-4 h-4 text-primary border-muted rounded focus:ring-2 focus:ring-primary"
            required
          />
          <span className="text-sm text-muted-foreground">
            By continuing, you agree we can contact you about your quote via email and SMS. You can opt out anytime.
          </span>
        </label>
        {errors.consent && (
          <p className="text-red-600 text-sm mt-1">{errors.consent}</p>
        )}
      </div>

      {/* Micro-commitment line */}
      {showMicroCommitment && (
        <div className="text-center pt-4">
          <p className="text-lg font-semibold text-primary">
            Great — we're reserving your customised File Easy quote now.
          </p>
        </div>
      )}

      {/* Submit Button - Hidden, triggered by Continue button in footer */}
      <button type="submit" className="hidden" aria-hidden="true" />
    </form>
  );
}

