// Types for the quote onboarding flow

export interface Step1Data {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  consent: boolean;
}

// Step 2A - Routing Question (Monthly vs One-Off)
export type SupportType = 'monthly' | 'one-off';

export interface Step2Data {
  supportType: SupportType;
}

// Step 2B - Pre-Qualification Questions (Monthly Support Only)
export interface Step2BData {
  businessType: 'limited-company' | 'sole-trader' | 'partnership' | 'not-set-up' | '';
  turnoverBand: 'under-250k' | '250k-1m' | '1m-5m' | 'over-5m' | '';
  teamStructure: 'just-me' | 'me-employees' | 'subcontractors-cis' | 'employees-subcontractors' | '';
  currentSupport: 'have-accountant' | 'do-myself' | 'mess-behind' | '';
  urgency: 'immediately' | 'within-30-days' | 'within-3-months' | 'just-researching' | '';
  priorities: string[]; // Multi-select
  budgetAlignment: 'sounds-fine' | 'keep-costs-down' | 'not-sure' | '';
}

// Step 3 - Package Selection
export type PackageType = 'silver' | 'gold' | 'platinum';

export interface Step3Data {
  selectedPackage: PackageType;
  recommendedPackage: PackageType;
}

// Step 4 - Pricing Selection (same as Step 3, but with confirmed pricing)
export interface Step4Data {
  selectedPackage: PackageType;
  monthlyPrice: { min: number; max: number };
}

// Step 5 - Payment Style
export type PaymentStyle = 'monthly' | 'annual';

export interface Step5Data {
  paymentStyle: PaymentStyle;
  monthlyPrice: number;
  annualPrice?: number;
  savings?: number;
  depositRequired?: boolean; // Display only, no payment capture
  depositAmount?: number; // Display only, no payment capture
}

// Step 6 - Onboarding Details
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

// Step 7 - Commitment Option
// Note: 'email-quote' is unused in v2 (option removed)
export type CommitmentOption = 'set-me-up' | 'book-call' | 'email-quote';

export interface Step7Data {
  commitmentOption: CommitmentOption;
}

// One-Off Flow Types
export type OneOffJobType = 'self-assessment' | 'one-off-accounts' | 'bookkeeping-catchup' | 'hmrc-letter' | 'cis-reconciliation' | 'other';
export type OneOffTimePeriod = 'latest-tax-year' | 'multiple-past-years' | 'ongoing-issue';
export type OneOffUrgency = 'within-7-days' | 'within-30-days' | 'no-fixed-deadline';
export type OneOffCurrentAccountant = 'yes' | 'no' | 'complicated';
export type OneOffBudgetComfort = 'sounds-fine' | 'keep-it-low' | 'not-sure';
// Note: 'book-call' and 'email-guide' are unused in v2 (options removed)
export type OneOffProceedOption = 'book-call' | 'callback' | 'email-guide';
export type OneOffCallbackTime = 'morning' | 'afternoon' | 'evening' | 'immediately';

export interface StepO1Data {
  jobTypes: OneOffJobType[];
  otherJobType?: string; // If 'other' is selected
  timePeriod: OneOffTimePeriod;
  urgency: OneOffUrgency;
  currentAccountant: OneOffCurrentAccountant;
  budgetComfort: OneOffBudgetComfort;
}

export interface StepO2Data {
  proceedOption: OneOffProceedOption;
  callbackTime?: OneOffCallbackTime; // If callback is selected
}

export interface QuoteFormData {
  step1?: Step1Data;
  step2?: Step2Data;
  step2B?: Step2BData;
  step3?: Step3Data;
  step4?: Step4Data;
  step5?: Step5Data;
  step6?: Step6Data;
  step7?: Step7Data;
  stepO1?: StepO1Data;
  stepO2?: StepO2Data;
}

export type QuoteStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'O1' | 'O2' | 'O3';

export const TOTAL_STEPS = 9;

