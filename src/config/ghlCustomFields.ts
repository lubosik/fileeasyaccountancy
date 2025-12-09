/**
 * GoHighLevel Custom Field Mappings
 * 
 * This file maps UI form fields to GHL custom field IDs.
 * 
 * IMPORTANT: Replace all "cf_PLACEHOLDER_*" values with your actual GHL custom field IDs.
 * 
 * To find your custom field IDs:
 * 1. Go to GHL Dashboard → Settings → Custom Fields
 * 2. Find the field you want to map
 * 3. Copy the field ID (usually starts with "cf_")
 * 4. Replace the placeholder below
 * 
 * Each field is documented with which UI question/step fills it.
 */

export const GHL_CUSTOM_FIELDS = {
  // Step 2A: Routing Question
  // Maps to: "What kind of support do you need right now?" → Monthly or One-Off
  engagementType: "cf_PLACEHOLDER_engagementType",

  // Step 2B: Pre-Qualification Questions (Monthly Flow)
  // Q1: "What best describes your business?"
  businessType: "cf_PLACEHOLDER_businessType",
  
  // Q2: "What's your approximate annual turnover?"
  turnoverBand: "cf_PLACEHOLDER_turnoverBand",
  
  // Q3: "Who do you work with?"
  teamStructure: "cf_PLACEHOLDER_teamStructure",
  
  // Q4: "How are your accounts managed right now?"
  currentSupport: "cf_PLACEHOLDER_currentSupport",
  
  // Q5: "How soon do you want support in place?"
  urgency: "cf_PLACEHOLDER_urgency",
  
  // Q6: "What's most important to you right now?" (multi-select)
  priorities: "cf_PLACEHOLDER_priorities",
  
  // Q7: Budget alignment question
  budgetComfort: "cf_PLACEHOLDER_budgetComfort",

  // Step 3: Package Recommendation
  // System-recommended package based on answers
  recommendedPackage: "cf_PLACEHOLDER_recommendedPackage",

  // Step 4: Package Selection
  // User's chosen package (Silver, Gold, Platinum)
  selectedPackage: "cf_PLACEHOLDER_selectedPackage",

  // Step 5: Payment Style
  // User's payment preference (Monthly or Annual)
  paymentPreference: "cf_PLACEHOLDER_paymentPreference",

  // Step 6: Onboarding Details
  // Legal business name
  companyName: "cf_PLACEHOLDER_companyName",
  
  // Trading name (if different from legal name)
  tradingName: "cf_PLACEHOLDER_tradingName",
  
  // Company registration number
  companyNumber: "cf_PLACEHOLDER_companyNumber",
  
  // Business address
  businessAddress: "cf_PLACEHOLDER_businessAddress",
  
  // Website URL (optional)
  websiteUrl: "cf_PLACEHOLDER_websiteUrl",
  
  // User's role in the business
  userRole: "cf_PLACEHOLDER_userRole",
  
  // Other directors/shareholders? (Yes/No)
  hasOtherDirectors: "cf_PLACEHOLDER_hasOtherDirectors",
  
  // All UK residents? (Yes/No)
  allUkResidents: "cf_PLACEHOLDER_allUkResidents",
  
  // AML consent checkbox
  amlConsent: "cf_PLACEHOLDER_amlConsent",

  // One-Off Flow: Step O1
  // Job types (multi-select, comma-separated)
  oneOffJobType: "cf_PLACEHOLDER_oneOffJobType",
  
  // One-Off urgency
  oneOffUrgency: "cf_PLACEHOLDER_oneOffUrgency",
  
  // One-Off budget comfort
  oneOffBudget: "cf_PLACEHOLDER_oneOffBudget",

  // One-Off Flow: Step O2
  // Preferred contact method/time window
  preferredContactMethod: "cf_PLACEHOLDER_preferredContactMethod",

  // Status field (optional - for tracking overall progress)
  statusField: "cf_PLACEHOLDER_statusField",

  // Resume & UID Fields (Phase 1+)
  // Unique ID for resume functionality (10-char base32, e.g., F3K8-2JQ9)
  uniqueId: "cf_PLACEHOLDER_uniqueId",
  
  // Last completed step in the onboarding flow
  lastCompletedStep: "cf_PLACEHOLDER_lastCompletedStep",
  
  // Resume payload snapshot (compact JSON of all answers)
  resumePayloadV1: "cf_PLACEHOLDER_resumePayloadV1",

  // Stripe Deposit Fields (Phase 10+)
  // Deposit payment status (paid, pending, failed)
  depositStatus: "cf_PLACEHOLDER_depositStatus",
  
  // Stripe Checkout Session ID
  stripeSessionId: "cf_PLACEHOLDER_stripeSessionId",
  
  // Stripe Payment Intent ID
  stripePaymentIntentId: "cf_PLACEHOLDER_stripePaymentIntentId",
  
  // Deposit paid timestamp (ISO string)
  depositPaidAt: "cf_PLACEHOLDER_depositPaidAt",

  // UID Reset Fields (Phase 7+)
  // Hashed reset code token (SHA-256 hash)
  uidResetTokenHash: "cf_PLACEHOLDER_uidResetTokenHash",
  
  // Reset code expiry timestamp
  uidResetTokenExpiry: "cf_PLACEHOLDER_uidResetTokenExpiry",
} as const;

/**
 * Type for custom field keys
 */
export type GHLCustomFieldKey = keyof typeof GHL_CUSTOM_FIELDS;

/**
 * Get custom field ID by key
 */
export function getCustomFieldId(key: GHLCustomFieldKey): string {
  return GHL_CUSTOM_FIELDS[key];
}

/**
 * Check if a custom field ID is still a placeholder
 * Useful for development warnings
 */
export function isPlaceholderFieldId(fieldId: string): boolean {
  return fieldId.startsWith('cf_PLACEHOLDER_');
}

