'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Step1Form from './components/Step1Form';
import Step2Form from './components/Step2Form';
import Step2BForm from './components/Step2BForm';
import Step3PackageRecommendation from './components/Step3PackageRecommendation';
import Step4Pricing from './components/Step4Pricing';
import Step5PaymentStyle from './components/Step5PaymentStyle';
import Step6OnboardingDetails from './components/Step6OnboardingDetails';
import Step7Commitment from './components/Step7Commitment';
import Step8Confirmation from './components/Step8Confirmation';
import StepO1OneOffScoping from './components/StepO1OneOffScoping';
import StepO2OneOffProceed from './components/StepO2OneOffProceed';
import StepO3OneOffConfirmation from './components/StepO3OneOffConfirmation';
import { recommendPackage } from './lib/packageRecommendation';
import { getPackagePrice, calculateAnnualPrice } from './lib/pricing';
import { Step1Data, Step2Data, Step2BData, Step3Data, Step4Data, Step5Data, Step6Data, Step7Data, StepO1Data, StepO2Data, CommitmentOption, PaymentStyle, PackageType, TOTAL_STEPS, type QuoteStep } from './types';
import { useLeadStore } from '@/lib/leadStore';

function QuoteContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get('source') || 'unknown';
  const resume = searchParams.get('resume') === 'true';
  const resumeStep = searchParams.get('step');
  const { data: leadStore } = useLeadStore();
  const [currentStep, setCurrentStep] = useState<QuoteStep>(() => {
    // If resuming, start at the step after lastCompletedStep
    if (resume && resumeStep) {
      const stepNum = parseInt(resumeStep);
      if (!isNaN(stepNum) && stepNum >= 1) {
        // Navigate to step after last completed (or stay at same step if at end)
        return (stepNum + 1) as QuoteStep;
      }
    }
    return 1;
  });
  
  // Helper to check if we're on a confirmation page
  const isConfirmationPage = (step: QuoteStep): boolean => {
    return (typeof step === 'number' && step === 9) || step === 'O3';
  };
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null);
  const [step2BData, setStep2BData] = useState<Step2BData | null>(null);
  const [step3Data, setStep3Data] = useState<Step3Data | null>(null);
  const [step4Data, setStep4Data] = useState<Step4Data | null>(null);
  const [step5Data, setStep5Data] = useState<Step5Data | null>(null);
  const [step6Data, setStep6Data] = useState<Step6Data | null>(null);
  const [step7Data, setStep7Data] = useState<Step7Data | null>(null);
  const [stepO1Data, setStepO1Data] = useState<StepO1Data | null>(null);
  const [stepO2Data, setStepO2Data] = useState<StepO2Data | null>(null);
  
  // Calculate progress
  const progress = typeof currentStep === 'number' 
    ? Math.round((currentStep / TOTAL_STEPS) * 100)
    : 100; // One-off flow steps show 100% progress

  // Load resume data on mount if resuming
  useEffect(() => {
    if (resume) {
      // Data should already be in leadStore from resume page
      // Fire resume analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_resume_continued', {
          event_category: 'Quote',
          event_label: 'Resume Continued',
          resumed_step: resumeStep || 'unknown',
        });
      }
    }
  }, [resume, resumeStep]);

  // Analytics: GA4 view_item_list and Meta Pixel PageView on mount
  useEffect(() => {
    // GA4 view_item_list (step: 0)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item_list', {
        item_list_id: 'quote_onboarding',
        item_list_name: 'Quote Onboarding Flow',
        step: 0,
        source: resume ? 'resume' : source
      });
    }

    // Meta Pixel PageView
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView', {
        content_name: 'Quote Onboarding',
        content_category: 'Onboarding',
        source: source
      });
    }

    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'fe_quote_start_cta', {
        source: source,
        event_category: 'Quote',
        event_label: 'Quote Flow Started'
      });
    }
  }, [source, resume, resumeStep]);

  return (
    <div className="min-h-screen bg-page flex flex-col">
      {/* Header with Logo */}
      <header className="bg-white border-b border-muted sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/brand/logo-fileeasy.png" 
              alt="File Easy Accountancy" 
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
              unoptimized
            />
          </Link>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-muted">
        <div className="container mx-auto px-4 py-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Progress: ${progress}%`}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1 text-right">
            {progress}% Complete
          </div>
        </div>
      </div>

      {/* Main Content - Centered Card */}
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-lg border border-muted shadow-lg p-8">
            {/* Step Content */}
            {currentStep === 1 && (
              <Step1Form
                onNext={(data) => {
                  setStep1Data(data);
                  setCurrentStep(2 as QuoteStep);
                  // Track step completion
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'fe_quote_step_complete', {
                      step: 1,
                      event_category: 'Quote',
                      event_label: 'Step 1 Complete'
                    });
                  }
                }}
                initialData={step1Data || undefined}
              />
            )}
            {currentStep === 2 && (
              <Step2Form
                onNext={(data) => {
                  setStep2Data(data);
                  // Branch based on support type
                  if (data.supportType === 'monthly') {
                    setCurrentStep(3 as QuoteStep); // Go to Step 2B (pre-qualification)
                  } else {
                    // One-off flow
                    setCurrentStep('O1' as QuoteStep);
                  }
                  // Track step completion
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'fe_quote_step_complete', {
                      step: 2,
                      event_category: 'Quote',
                      event_label: `Step 2 Complete - ${data.supportType}`,
                      support_type: data.supportType
                    });
                  }
                }}
                onBack={() => setCurrentStep(1 as QuoteStep)}
                initialData={step2Data || undefined}
              />
            )}
            {currentStep === 3 && step2BData && (
              <Step2BForm
                onNext={(data) => {
                  setStep2BData(data);
                  setCurrentStep(4 as QuoteStep); // Go to Step 3 (Package Recommendation)
                  // Track step completion
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'fe_quote_step_complete', {
                      step: 3,
                      event_category: 'Quote',
                      event_label: 'Step 2B Complete - Pre-qualification'
                    });
                  }
                }}
                onBack={() => setCurrentStep(2 as QuoteStep)}
                initialData={step2BData}
                firstName={step1Data?.firstName}
              />
            )}
            {currentStep === 4 && step2BData && (
              <Step3PackageRecommendation
                onNext={(selectedPackage: PackageType) => {
                  const recommendedPackage = recommendPackage(step2BData);
                  setStep3Data({
                    selectedPackage,
                    recommendedPackage
                  });
                  setCurrentStep(5 as QuoteStep); // Go to Step 4 (Pricing)
                  // Track step completion
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'fe_quote_step_complete', {
                      step: 4,
                      event_category: 'Quote',
                      event_label: 'Step 3 Complete - Package Recommendation',
                      selected_package: selectedPackage
                    });
                  }
                }}
                onBack={() => setCurrentStep(3 as QuoteStep)}
                step2BData={step2BData}
                firstName={step1Data?.firstName}
              />
            )}
            {currentStep === 5 && step2BData && (
              <Step4Pricing
                onNext={(selectedPackage: PackageType) => {
                  const pricing = getPackagePrice(step2BData.turnoverBand, selectedPackage);
                  setStep4Data({
                    selectedPackage,
                    monthlyPrice: pricing
                  });
                  setCurrentStep(6 as QuoteStep); // Go to Step 5 (Payment Style)
                  // Track step completion
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'fe_quote_step_complete', {
                      step: 5,
                      event_category: 'Quote',
                      event_label: 'Step 4 Complete - Pricing Selected',
                      selected_package: selectedPackage,
                      price_min: pricing.min,
                      price_max: pricing.max
                    });
                  }
                }}
                onBack={() => setCurrentStep(4 as QuoteStep)}
                step2BData={step2BData}
                step3SelectedPackage={step3Data?.selectedPackage}
              />
            )}
            {/* Guard: Block Step 6 (Onboarding Details) if deposit not paid (Monthly flow only) */}
            {currentStep === 7 && step2Data?.supportType === 'monthly' && !leadStore.depositPaid && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                  <h2 className="text-2xl font-bold text-primary mb-4">Deposit Required</h2>
                  <p className="text-muted-foreground mb-6">
                    To continue with your onboarding, please complete the £100 deposit payment.
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={async () => {
                        // Try to create checkout session again
                        try {
                          const response = await fetch('/api/stripe/create-checkout-session', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                              email: leadStore.email,
                              uid: leadStore.uid,
                              metadata: {
                                firstName: leadStore.firstName,
                                lastName: leadStore.lastName,
                                paymentPreference: step5Data?.paymentStyle === 'monthly' ? 'Monthly' : 'Annual',
                              },
                            }),
                          });
                          const result = await response.json();
                          if (result.ok && result.url) {
                            window.location.href = result.url;
                          } else {
                            alert('Unable to process payment. Please contact support.');
                          }
                        } catch (error) {
                          console.error('Error creating checkout session:', error);
                          alert('Unable to process payment. Please contact support.');
                        }
                      }}
                      className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Try Payment Again
                    </button>
                    <button
                      onClick={() => setCurrentStep(6 as QuoteStep)}
                      className="w-full text-primary hover:underline py-2"
                    >
                      Go Back to Payment Step
                    </button>
                  </div>
                </div>
              </div>
            )}
            {currentStep === 7 && step4Data && (
              <Step5PaymentStyle
                onNext={(paymentStyle: PaymentStyle) => {
                  const monthlyPrice = step4Data.monthlyPrice.min;
                  const annualPrice = calculateAnnualPrice(monthlyPrice);
                  const savings = Math.round(monthlyPrice * 12 - annualPrice);
                  
                  setStep5Data({
                    paymentStyle,
                    monthlyPrice,
                    annualPrice: paymentStyle === 'annual' ? annualPrice : undefined,
                    savings: paymentStyle === 'annual' ? savings : undefined,
                    depositRequired: true,
                    depositAmount: 100
                  });
                  setCurrentStep(7 as QuoteStep); // Go to Step 6 (Onboarding Details)
                  // Track step completion
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'fe_quote_step_complete', {
                      step: 6,
                      event_category: 'Quote',
                      event_label: 'Step 5 Complete - Payment Style Selected',
                      payment_style: paymentStyle
                    });
                  }
                }}
                onBack={() => setCurrentStep(5 as QuoteStep)}
                step4Data={step4Data}
              />
            )}
            {currentStep === 7 && (
              <Step6OnboardingDetails
                onNext={(data: Step6Data) => {
                  setStep6Data(data);
                  setCurrentStep(8 as QuoteStep); // Go to Step 7 (Commitment Page)
                  // Track step completion
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'fe_quote_step_complete', {
                      step: 7,
                      event_category: 'Quote',
                      event_label: 'Step 6 Complete - Onboarding Details'
                    });
                  }
                }}
                onBack={() => setCurrentStep(6 as QuoteStep)}
                initialData={step6Data || undefined}
                firstName={step1Data?.firstName}
              />
            )}
                {currentStep === 8 && (
                  <Step7Commitment
                    onNext={(option: CommitmentOption) => {
                      setStep7Data({ commitmentOption: option });
                      
                      // Handle different commitment options
                      if (option === 'book-call') {
                        // Redirect to Calendly for welcome call
                        window.location.href = 'https://calendly.com/fileeasy/consultation';
                        return;
                      } else if (option === 'set-me-up') {
                        // set-me-up: proceed to confirmation
                        setCurrentStep(9 as QuoteStep);
                        
                        // Track step completion for set-me-up
                        if (typeof window !== 'undefined' && window.gtag) {
                          window.gtag('event', 'fe_quote_step_complete', {
                            step: 8,
                            event_category: 'Quote',
                            event_label: 'Step 7 Complete - Commitment Selected',
                            commitment_option: option
                          });
                        }
                      }
                      // Note: email-quote option removed in v2
                    }}
                onBack={() => setCurrentStep(7 as QuoteStep)}
                firstName={step1Data?.firstName}
              />
            )}
            {currentStep === 9 && step1Data && step7Data && (
              <Step8Confirmation
                step1Data={step1Data}
                step2Data={step2Data || undefined}
                step2BData={step2BData || undefined}
                step3Data={step3Data || undefined}
                step4Data={step4Data || undefined}
                step5Data={step5Data || undefined}
                step6Data={step6Data || undefined}
                step7Data={step7Data}
                commitmentOption={step7Data.commitmentOption}
              />
            )}
            {/* One-Off Flow Steps */}
            {currentStep === 'O1' && (
              <StepO1OneOffScoping
                onNext={(data) => {
                  setStepO1Data(data);
                  setCurrentStep('O2' as QuoteStep);
                }}
                onBack={() => setCurrentStep(2 as QuoteStep)}
                firstName={step1Data?.firstName}
                initialData={stepO1Data || undefined}
              />
            )}
            {currentStep === 'O2' && stepO1Data && (
              <StepO2OneOffProceed
                onNext={(data) => {
                  setStepO2Data(data);
                  
                  // Only callback option remains - proceed to confirmation
                  if (data.proceedOption === 'callback') {
                    setCurrentStep('O3' as QuoteStep);
                    // Track step completion
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'fe_quote_step_complete', {
                        step: 'O2',
                        event_category: 'Quote',
                        event_label: 'Step O2 Complete - Callback Requested',
                        proceed_option: data.proceedOption
                      });
                    }
                  }
                  // Note: book-call and email-guide options removed in v2
                }}
                onBack={() => setCurrentStep('O1' as QuoteStep)}
                firstName={step1Data?.firstName}
                initialData={stepO2Data || undefined}
              />
            )}
            {currentStep === 'O3' && step1Data && stepO2Data && (
              <StepO3OneOffConfirmation
                step1Data={step1Data}
                step2Data={step2Data || undefined}
                stepO1Data={stepO1Data || undefined}
                stepO2Data={stepO2Data}
              />
            )}
            {typeof currentStep === 'number' && currentStep > 9 && (
              <div className="text-center">
                <p className="text-muted-foreground">
                  Step {currentStep} content coming soon...
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Sticky Footer with Back/Continue Buttons */}
      {(typeof currentStep === 'number' && currentStep < 9) || (typeof currentStep === 'string' && currentStep !== 'O3') ? (
        <footer className="bg-white border-t border-muted sticky bottom-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
            <button
              type="button"
              onClick={() => {
                if (typeof currentStep === 'number' && currentStep > 1) {
                  setCurrentStep((currentStep - 1) as QuoteStep);
                } else if (currentStep === 'O2') {
                  setCurrentStep('O1' as QuoteStep);
                } else if (currentStep === 'O1') {
                  setCurrentStep(2 as QuoteStep);
                }
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={(typeof currentStep === 'number' && currentStep === 1) || currentStep === 'O1'}
              aria-label="Go to previous step"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            
            {isConfirmationPage(currentStep) ? null : (
              <>
                {typeof currentStep === 'number' && currentStep === 1 && (
                  <button
                    type="submit"
                    form="step1-form"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors"
                    aria-label="Start My 60-Second Quote"
                  >
                    <span>Start My 60-Second Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                {typeof currentStep === 'number' && currentStep === 2 && (
                  <button
                    type="submit"
                    form="step2-form"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors"
                    aria-label="Continue"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                {typeof currentStep === 'number' && currentStep === 3 && (
                  <button
                    type="submit"
                    form="step2b-form"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors"
                    aria-label="Continue"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                {typeof currentStep === 'number' && currentStep === 4 && (
                  <button
                    type="button"
                    onClick={() => {
                      const button = document.querySelector('[data-step3-continue]') as HTMLButtonElement;
                      if (button) button.click();
                    }}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors"
                    aria-label="Continue to Pricing"
                  >
                    <span>Continue to Pricing</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                {typeof currentStep === 'number' && currentStep === 5 && (
                  <button
                    type="button"
                    onClick={() => {
                      const button = document.querySelector('[data-step4-continue]') as HTMLButtonElement;
                      if (button) button.click();
                    }}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors"
                    aria-label="Continue"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                {typeof currentStep === 'number' && currentStep === 6 && (
                  <button
                    type="button"
                    onClick={() => {
                      const button = document.querySelector('[data-step5-continue]') as HTMLButtonElement;
                      if (button) button.click();
                    }}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors"
                    aria-label="Continue"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                {typeof currentStep === 'number' && currentStep === 7 && (
                  <button
                    type="submit"
                    form="step6-form"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors"
                    aria-label="Continue"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                {typeof currentStep === 'number' && currentStep === 8 && (
                  <button
                    type="button"
                    onClick={() => {
                      const button = document.querySelector('[data-step7-continue]') as HTMLButtonElement;
                      if (button && !button.disabled) {
                        button.click();
                      }
                    }}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Continue"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                {currentStep === 'O1' && (
                  <button
                    type="submit"
                    form="stepO1-form"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors"
                    aria-label="Continue"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                {currentStep === 'O2' && (
                  <button
                    type="submit"
                    form="stepO2-form"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors"
                    aria-label="Continue"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </>
            )}
            {typeof currentStep === 'number' && currentStep > 9 && currentStep < TOTAL_STEPS && (
              <button
                type="button"
                onClick={() => {
                  if (typeof currentStep === 'number') {
                    setCurrentStep(Math.min(currentStep + 1, TOTAL_STEPS) as QuoteStep);
                  }
                }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold transition-colors"
                aria-label="Continue to next step"
              >
                <span>Continue</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </footer>
      ) : null}
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-page flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <QuoteContent />
    </Suspense>
  );
}

