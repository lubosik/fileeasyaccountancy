# PHASE Δ6 — Events & Tags Audit Report

## Summary
Comprehensive audit of all analytics events and CRM tags to ensure only active UI options fire events and emit tags. All deprecated options have been removed from event tracking.

---

## ANALYTICS EVENTS MATRIX

### Before vs Now Comparison

| Event Name | Trigger Step | Old Params | New Params | Status |
|------------|--------------|------------|------------|--------|
| `view_item_list` | Page Load (Step 0) | `step: 0, source, item_list_id, item_list_name` | ✅ Same | ✅ ACTIVE |
| `PageView` (Meta Pixel) | Page Load (Step 0) | `content_name, content_category, source` | ✅ Same | ✅ ACTIVE |
| `fe_quote_start_cta` | Page Load (Step 0) | `source, event_category, event_label` | ✅ Same | ✅ ACTIVE |
| `fe_quote_step_complete` | Step 1 Complete | `step: 1, event_category, event_label` | ✅ Same | ✅ ACTIVE |
| `fe_quote_step_complete` | Step 2 Complete | `step: 2, event_category, event_label, support_type` | ✅ Same | ✅ ACTIVE |
| `fe_quote_step_complete` | Step 2B Complete | `step: 3, event_category, event_label` | ✅ Same | ✅ ACTIVE |
| `fe_quote_package_selected` | Step 3 (Package Selection) | `recommended_package, selected_package, event_category, event_label` | ✅ Same | ✅ ACTIVE |
| `fe_quote_step_complete` | Step 3 Complete | `step: 4, event_category, event_label, selected_package` | ✅ Same | ✅ ACTIVE |
| `fe_quote_package_selected` | Step 4 (Pricing Selection) | `package, event_category, event_label, turnover_band` | ✅ Same | ✅ ACTIVE |
| `fe_quote_step_complete` | Step 4 Complete | `step: 5, event_category, event_label, selected_package, price_min, price_max` | ✅ Same | ✅ ACTIVE |
| `fe_quote_payment_style_selected` | Step 5 (Payment Selection) | `payment_style, event_category, event_label, monthly_price, annual_price, savings` | ✅ **ADDED: `depositRequired: true, depositAmount: 100`** | ✅ ACTIVE |
| `fe_quote_step_complete` | Step 5 Complete | `step: 6, event_category, event_label, payment_style` | ✅ Same | ✅ ACTIVE |
| `fe_quote_step_complete` | Step 6 Complete | `step: 7, event_category, event_label` | ✅ Same | ✅ ACTIVE |
| `fe_quote_commitment_option_selected` | Step 7 (Option Selection) | `option, event_category, event_label` | ✅ **UPDATED: Only fires for `set-me-up` and `book-call`** | ✅ ACTIVE |
| `fe_quote_step_complete` | Step 7 Complete | `step: 8, event_category, event_label, commitment_option` | ✅ **UPDATED: Only fires for `set-me-up` (book-call redirects)** | ✅ ACTIVE |
| `fe_quote_completed` | Step 8 (Confirmation) | `event_category, event_label, commitment_option, email` | ✅ **UPDATED: Only fires for `set-me-up` and `book-call`** | ✅ ACTIVE |
| `Lead` (Meta Pixel) | Step 8 (Confirmation) | `content_name, content_category, value, currency` | ✅ Same | ✅ ACTIVE |
| `fe_quote_step_complete` | Step O2 Complete | `step: 'O2', event_category, event_label, proceed_option` | ✅ **UPDATED: Only fires for `callback`** | ✅ ACTIVE |
| `fe_quote_completed` | Step O3 (Confirmation) | `event_category, event_label, proceed_option, email` | ✅ **UPDATED: Only fires for `callback`** | ✅ ACTIVE |
| `Lead` (Meta Pixel) | Step O3 (Confirmation) | `content_name, content_category, value, currency` | ✅ Same | ✅ ACTIVE |

### Removed Events

| Event Name | Old Trigger | Reason Removed |
|------------|-------------|----------------|
| `fe_quote_commitment_option_selected` with `option: 'email-quote'` | Step 7 | Option removed from UI |
| `fe_quote_step_complete` with `commitment_option: 'email-quote'` | Step 7 | Option removed from UI |
| `fe_quote_completed` with `commitment_option: 'email-quote'` | Step 8 | Option removed from UI |
| `fe_quote_step_complete` with `proceed_option: 'book-call'` | Step O2 | Option removed from UI |
| `fe_quote_step_complete` with `proceed_option: 'email-guide'` | Step O2 | Option removed from UI |
| `fe_quote_completed` with `proceed_option: 'book-call'` | Step O3 | Option removed from UI |
| `fe_quote_completed` with `proceed_option: 'email-guide'` | Step O3 | Option removed from UI |

---

## CRM TAGS MAPPING TABLE

### Field → Source Mapping

| CRM Field | Source Step | Data Type | Notes |
|-----------|-------------|-----------|-------|
| First Name | Step 1 | `step1.firstName` | Required |
| Last Name | Step 1 | `step1.lastName` | Required |
| Email | Step 1 | `step1.email` | Required |
| Phone | Step 1 | `step1.mobileNumber` | Required |
| Engagement Type | Step 2 | `step2.supportType` | 'monthly' or 'one-off' |
| Business Type | Step 2B | `step2B.businessType` | Monthly flow only |
| Turnover Band | Step 2B | `step2B.turnoverBand` | Monthly flow only |
| Team Structure | Step 2B | `step2B.teamStructure` | Monthly flow only |
| Current Support | Step 2B | `step2B.currentSupport` | Monthly flow only |
| Urgency | Step 2B | `step2B.urgency` | Monthly flow only |
| Priorities | Step 2B | `step2B.priorities` | Monthly flow only (array) |
| Budget Alignment | Step 2B | `step2B.budgetAlignment` | Monthly flow only |
| Recommended Package | Step 3 | `step3.recommendedPackage` | Monthly flow only |
| Selected Package | Step 4 | `step4.selectedPackage` | Monthly flow only |
| Payment Preference | Step 5 | `step5.paymentStyle` | Monthly flow only |
| Deposit Required | Step 5 | `step5.depositRequired` | Always `true` (display only) |
| Deposit Amount | Step 5 | `step5.depositAmount` | Always `100` (display only) |
| Legal Business Name | Step 6 | `step6.legalBusinessName` | Monthly flow only |
| Trading Name | Step 6 | `step6.tradingName` | Monthly flow only |
| Company Number | Step 6 | `step6.companyNumber` | Monthly flow only (optional) |
| Business Address | Step 6 | `step6.businessAddress` | Monthly flow only |
| Website | Step 6 | `step6.website` | Monthly flow only (optional) |
| Your Role | Step 6 | `step6.yourRole` | Monthly flow only |
| Other Directors/Shareholders | Step 6 | `step6.otherDirectorsShareholders` | Monthly flow only |
| UK Residents | Step 6 | `step6.ukResidents` | Monthly flow only |
| AML Consent | Step 6 | `step6.amlConsent` | Monthly flow only |
| Commitment Option | Step 7 | `step7.commitmentOption` | Monthly flow only |
| Job Types | Step O1 | `stepO1.jobTypes` | One-Off flow only (array) |
| Other Job Type | Step O1 | `stepO1.otherJobType` | One-Off flow only (optional) |
| Time Period | Step O1 | `stepO1.timePeriod` | One-Off flow only |
| Urgency | Step O1 | `stepO1.urgency` | One-Off flow only |
| Current Accountant | Step O1 | `stepO1.currentAccountant` | One-Off flow only |
| Budget Comfort | Step O1 | `stepO1.budgetComfort` | One-Off flow only |
| Proceed Option | Step O2 | `stepO2.proceedOption` | One-Off flow only |
| Callback Time | Step O2 | `stepO2.callbackTime` | One-Off flow only (if callback) |

### Tag → Trigger Step Mapping

| CRM Tag | Trigger Step | Condition | Status |
|---------|--------------|-----------|--------|
| `Lead – Started Quote` | Step 1 | On form submission | ✅ ACTIVE |
| `Engagement Type – Monthly` | Step 2 | If `supportType === 'monthly'` | ✅ ACTIVE |
| `Engagement Type – One-Off` | Step 2 | If `supportType === 'one-off'` | ✅ ACTIVE |
| `Recommended Package: Silver` | Step 3 | If recommended package is Silver | ✅ ACTIVE |
| `Recommended Package: Gold` | Step 3 | If recommended package is Gold | ✅ ACTIVE |
| `Recommended Package: Platinum` | Step 3 | If recommended package is Platinum | ✅ ACTIVE |
| `Selected Package – Silver` | Step 4 | If selected package is Silver | ✅ ACTIVE |
| `Selected Package – Gold` | Step 4 | If selected package is Gold | ✅ ACTIVE |
| `Selected Package – Platinum` | Step 4 | If selected package is Platinum | ✅ ACTIVE |
| `Payment Preference – Monthly` | Step 5 | If `paymentStyle === 'monthly'` | ✅ ACTIVE |
| `Payment Preference – Annual` | Step 5 | If `paymentStyle === 'annual'` | ✅ ACTIVE |
| `Onboarding – Details Complete` | Step 6 | On form submission | ✅ ACTIVE |
| `Ready to Onboard` | Step 7 | If `commitmentOption === 'set-me-up'` | ✅ ACTIVE |
| `Needs Call` | Step 7 | If `commitmentOption === 'book-call'` | ✅ ACTIVE |
| `One-Off – Callback Requested` | Step O2 | If `proceedOption === 'callback'` | ✅ ACTIVE |

### Removed Tags (Not Emitted in v2)

| CRM Tag | Old Trigger | Reason Removed |
|---------|-------------|----------------|
| `Quote Requested` | Step 7 (email-quote) | Option removed from UI |
| `One-Off – Call Booked` | Step O2 (book-call) | Option removed from UI |
| `One-Off – Email Quote Requested` | Step O2 (email-guide) | Option removed from UI |

**Note:** These tag constants remain in code (commented out) for backward compatibility but are never emitted in v2 flow.

---

## EVENT PARAMETER UPDATES

### Payment Step Events (Step 5)

**Event:** `fe_quote_payment_style_selected`

**New Parameters Added:**
- ✅ `depositRequired: true` (always true)
- ✅ `depositAmount: 100` (always 100)

**File:** `src/app/quote/components/Step5PaymentStyle.tsx` (lines 58-59)

**Status:** ✅ IMPLEMENTED

---

## CONDITIONAL EVENT FIRING

### Step 7 Commitment Events

**Event:** `fe_quote_step_complete`

**Old Behavior:**
- Fired for all options: `set-me-up`, `book-call`, `email-quote`

**New Behavior:**
- ✅ Fires for `set-me-up` (proceeds to confirmation)
- ❌ Does NOT fire for `book-call` (redirects to Calendly before tracking)
- ❌ Does NOT fire for `email-quote` (option removed)

**File:** `src/app/quote/page.tsx` (lines 299-307)

**Code:**
```typescript
// Track step completion (only for set-me-up, book-call redirects)
if (option !== 'book-call' && typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'fe_quote_step_complete', {
    step: 8,
    event_category: 'Quote',
    event_label: 'Step 7 Complete - Commitment Selected',
    commitment_option: option
  });
}
```

### Step O2 One-Off Events

**Event:** `fe_quote_step_complete`

**Old Behavior:**
- Fired for all options: `book-call`, `callback`, `email-guide`

**New Behavior:**
- ❌ Does NOT fire for `book-call` (option removed)
- ✅ Fires for `callback` (proceeds to confirmation)
- ❌ Does NOT fire for `email-guide` (option removed)

**File:** `src/app/quote/page.tsx` (lines 346-352)

**Code:**
```typescript
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
```

---

## CRM TASK CREATION

### Monthly Flow Tasks

**Trigger:** Step 7 commitment option

**Conditions:**
- ✅ `set-me-up` → Creates task with 'high' priority
- ✅ `book-call` → Creates task with 'medium' priority
- ❌ `email-quote` → No task created (option removed)

**File:** `src/lib/ghl.ts` (lines 375-382)

### One-Off Flow Tasks

**Trigger:** Step O2 proceed option

**Conditions:**
- ❌ `book-call` → No task created (option removed)
- ✅ `callback` → Creates task with 'medium' priority, includes callback time
- ❌ `email-guide` → No task created (option removed)

**File:** `src/lib/ghl.ts` (lines 383-391)

---

## VERIFICATION CHECKLIST

- ✅ All deprecated option events removed
- ✅ Payment step events include `depositRequired` and `depositAmount`
- ✅ Step 7 events only fire for active options
- ✅ Step O2 events only fire for active options
- ✅ CRM tags only emitted for active options
- ✅ Task creation only for active options
- ✅ All event parameters documented
- ✅ All tag triggers documented

---

## SUMMARY

### Events Status
- **Total Active Events:** 19
- **Removed Events:** 7
- **Updated Events:** 3 (Step 5, Step 7, Step O2)

### Tags Status
- **Total Active Tags:** 14
- **Removed Tags:** 3
- **Tags Kept in Code (Commented):** 3

### Files Modified
- `src/app/quote/page.tsx` - Updated event firing conditions
- `src/app/quote/components/Step5PaymentStyle.tsx` - Added deposit params
- `src/lib/ghl.ts` - Updated tag emissions and task creation

---

## NEXT PHASE

Ready for **PHASE Δ7 — Emails & automations alignment** after approval.

