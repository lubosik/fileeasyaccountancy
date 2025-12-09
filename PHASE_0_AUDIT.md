# Phase 0 — Current Flow Audit & Summary

**Date:** 2025-12-07  
**Branch:** `feat/resume-and-deposit`  
**Status:** ✅ Complete

---

## Build Status

✅ **Codebase Structure Verified**
- Branch created: `feat/resume-and-deposit`
- All component files present and structured correctly
- TypeScript types defined in `src/app/quote/types.ts`

---

## Current Onboarding Flow Architecture

### Entry Point
- **Route:** `/quote/` (`src/app/quote/page.tsx`)
- **Layout:** Wrapped with `LeadStoreProvider` for state management
- **Source Tracking:** Query param `?source=...` for analytics

### Flow Structure

#### **Monthly Support Flow:**
1. **Step 1** (`Step1Form.tsx`) - Name, Email, Phone capture
   - Creates/updates GHL contact
   - Tag: `"Lead – Started Quote"`
   - Analytics: `lead_step_1_captured`

2. **Step 2A** (`Step2Form.tsx`) - Routing question (Monthly vs One-Off)
   - Custom Field: `engagementType`
   - Tags: `"Engagement Type – Monthly"` or `"Engagement Type – One-Off"`
   - Analytics: `lead_routed_monthly` or `lead_routed_oneoff`

3. **Step 2B** (`Step2BForm.tsx`) - Pre-qualification (7 questions)
   - Custom Fields: `businessType`, `turnoverBand`, `teamStructure`, `currentSupport`, `urgency`, `priorities`, `budgetComfort`
   - Tag: `"Monthly – Prequal Complete"`
   - Analytics: `lead_monthly_prequal_complete`

4. **Step 3** (`Step3PackageRecommendation.tsx`) - Package recommendation
   - Custom Field: `recommendedPackage`
   - Tag: `"Recommended – {Package}"`
   - Analytics: `lead_recommendation_shown`

5. **Step 4** (`Step4Pricing.tsx`) - Package selection
   - Custom Field: `selectedPackage`
   - Tag: `"Selected Package – {Package}"`
   - Analytics: `lead_package_selected`

6. **Step 5** (`Step5PaymentStyle.tsx`) - Payment preference (Monthly vs Annual)
   - Custom Field: `paymentPreference`
   - Tag: `"Payment Preference – {Preference}"`
   - Analytics: `lead_payment_preference_selected`
   - **⚠️ DEPOSIT HOOK POINT:** After this step, before Step 6

7. **Step 6** (`Step6OnboardingDetails.tsx`) - Onboarding details (pre-AML)
   - Custom Fields: `companyName`, `tradingName`, `companyNumber`, `businessAddress`, `websiteUrl`, `userRole`, `hasOtherDirectors`, `allUkResidents`, `amlConsent`
   - Tag: `"Onboarding – Details Complete"`
   - Auto-creates AML task in GHL
   - Analytics: `lead_onboarding_details_complete`

8. **Step 7** (`Step7Commitment.tsx`) - Commitment page
   - Options: "Set Me Up & Send My Agreement" or "Book a Welcome Call First"
   - Tags: `"Ready to Onboard"` or `"Needs Call"`
   - Analytics: `lead_commitment_selected`

9. **Step 8** (`Step8Confirmation.tsx`) - Confirmation page

#### **One-Off Flow:**
- **Step O1** (`StepO1OneOffScoping.tsx`) - Scoping questions
- **Step O2** (`StepO2OneOffProceed.tsx`) - Callback request
- **Step O3** (`StepO3OneOffConfirmation.tsx`) - Confirmation

---

## Existing Infrastructure

### ✅ GHL Integration
- **Client:** `src/lib/ghlClient.ts`
  - `upsertContact()` - Create/update contacts
  - `searchContactByName()` - Search by first/last name
  - `createTaskForContact()` - Create tasks (used for AML)
  - Retry logic with exponential backoff

- **API Route:** `src/app/api/ghl/upsert/route.ts`
  - POST endpoint for client-side dispatch
  - Validates email, handles tags, custom fields
  - Auto-creates AML task when conditions met

- **Dispatch Helper:** `src/lib/dispatchToGHL.ts`
  - Single reusable function for CRM updates
  - Merges with `leadStore` data
  - Background retry queue for failed requests

### ✅ State Management
- **Lead Store:** `src/lib/leadStore.tsx`
  - React Context provider
  - Persists to `sessionStorage`
  - Stores: contact basics, step data, `contactId`, `startedAt`

- **Resume Progress:** `src/lib/resumeProgress.ts`
  - `checkForExistingProgress()` - Check by email/phone
  - `restoreProgress()` - Restore saved data
  - Currently uses email + phone as identifier

### ✅ Custom Fields Mapping
- **Config:** `src/config/ghlCustomFields.ts`
  - Maps all UI fields to GHL custom field IDs
  - Currently using placeholders (`cf_PLACEHOLDER_*`)
  - Fields for: engagement, business type, turnover, packages, payment, onboarding details

### ✅ Analytics
- **GA4 Events:** Fired via `window.gtag()`
  - Events: `lead_step_1_captured`, `lead_routed_monthly`, `lead_monthly_prequal_complete`, etc.
  - Custom parameters included

- **Meta Pixel:** Fired via `window.fbq()`
  - Events: `LeadStep1Captured`, etc.

---

## Integration Points for New Features

### 🔧 Resume by Surname + Unique ID
**Hook Points:**
1. **Step 1** - After contact creation, generate and assign UID
2. **All Steps** - Update `lastCompletedStep` and answers on each step completion
3. **New Route:** `/resume` - Resume lookup page
4. **New API:** `/api/resume/*` - UID assignment, lookup, reminder, reset

**Storage:**
- GHL Custom Fields: `cf_uniqueId`, `cf_lastCompletedStep`, `cf_resumePayloadV1`
- Local: Store UID in `leadStore` after Step 1

### 🔧 Stripe £100 Deposit
**Hook Point:**
- **After Step 5** (Payment preference), **before Step 6** (Onboarding details)
- Insert new deposit step between Step 5 and Step 6

**Integration:**
- New API: `/api/stripe/create-checkout-session`
- New API: `/api/stripe/webhook`
- Success page: `/onboarding/deposit/success`
- Cancel page: `/onboarding/deposit/cancelled`
- Guard: Prevent Step 6 access without `depositPaid === true`

---

## Current Step Components Summary

| Step | Component | Key Actions | GHL Tags | Custom Fields |
|------|-----------|-------------|----------|---------------|
| 1 | `Step1Form.tsx` | Contact creation | `Lead – Started Quote` | - |
| 2A | `Step2Form.tsx` | Routing | `Engagement Type – Monthly/One-Off` | `engagementType` |
| 2B | `Step2BForm.tsx` | Pre-qual (7 Qs) | `Monthly – Prequal Complete` | `businessType`, `turnoverBand`, etc. |
| 3 | `Step3PackageRecommendation.tsx` | Show recommendation | `Recommended – {Package}` | `recommendedPackage` |
| 4 | `Step4Pricing.tsx` | Package selection | `Selected Package – {Package}` | `selectedPackage` |
| 5 | `Step5PaymentStyle.tsx` | Payment preference | `Payment Preference – {Preference}` | `paymentPreference` |
| **→ DEPOSIT** | **NEW** | **Stripe Checkout** | **`Deposit Paid`** | **`depositStatus`** |
| 6 | `Step6OnboardingDetails.tsx` | Onboarding details | `Onboarding – Details Complete` | `companyName`, `tradingName`, etc. |
| 7 | `Step7Commitment.tsx` | Commitment choice | `Ready to Onboard` / `Needs Call` | - |
| 8 | `Step8Confirmation.tsx` | Confirmation | - | - |

---

## Next Steps (Phase 1)

1. Add Stripe config placeholders to `.env.example`
2. Create `config/stripe.ts` (server-only)
3. Create `config/app.ts` for `APP_BASE_URL`
4. Ensure no real secrets committed

---

**Status:** ✅ Phase 0 Complete - Ready for Phase 1

