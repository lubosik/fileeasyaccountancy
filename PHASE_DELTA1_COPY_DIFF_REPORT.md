# PHASE Δ1 — Copy Synchronization Diff Report

## Summary
All step components have been updated to match the new specification exactly. This report documents every string change made.

---

## STEP 1 — Email & Phone Capture

### Changes Made:

**Title:**
- ❌ OLD: `"Get Your Custom Quote"`
- ✅ NEW: `"Let's Get Your Personalised File Easy Quote"`

**Description:**
- ❌ OLD: `"Let's start with your contact details. This will only take 60 seconds."`
- ✅ NEW: `"Answer a few quick questions and we'll build your personalised quote and next steps."`

**Consent Text:**
- ❌ OLD: `"I agree to the Privacy Policy and consent to being contacted about my quote request."`
- ✅ NEW: `"By continuing, you agree we can contact you about your quote via email and SMS. You can opt out anytime."`

**Button Text:**
- ✅ VERIFIED: `"Start My 60-Second Quote"` (already correct)

**Micro-commitment Line (NEW):**
- ✅ ADDED: `"Great — we're reserving your customised File Easy quote now."` (appears after form submission)

**File:** `src/app/quote/components/Step1Form.tsx`

---

## STEP 2A — Routing Question

### Changes Made:

**Headline:**
- ✅ VERIFIED: `"What kind of support do you need right now?"` (already correct)

**Options:**
- ✅ VERIFIED: Both options match spec exactly (already correct)

**File:** `src/app/quote/components/Step2Form.tsx`

---

## STEP 2B — Pre-Qualification Questions

### Changes Made:

**Structure:**
- ❌ OLD: Single title `"{firstName}, Tell Us About Your Business"` with subtitle
- ✅ NEW: Each question now has its own `h1` headline (per spec requirement)

**Q1 Headline:**
- ✅ VERIFIED: `"What best describes your business?"` (already correct, now as h1)

**Q2 Headline:**
- ✅ VERIFIED: `"What's your approximate annual turnover?"` (already correct, now as h1)

**Q3 Headline:**
- ✅ VERIFIED: `"Who do you work with?"` (already correct, now as h1)

**Q4 Headline:**
- ✅ VERIFIED: `"How are your accounts managed right now?"` (already correct, now as h1)

**Q5 Headline:**
- ✅ VERIFIED: `"How soon do you want support in place?"` (already correct, now as h1)

**Q6 Headline:**
- ✅ VERIFIED: `"What's most important to you right now?"` (already correct, now as h1)

**Q7 Headline:**
- ✅ VERIFIED: `"Most clients in your situation invest £150–£1,495/month depending on size and support level. How does that sound?"` (already correct, now as h1)

**File:** `src/app/quote/components/Step2BForm.tsx`

---

## STEP 3 — Package Recommendation

### Changes Made:

**Headline:**
- ✅ VERIFIED: `"[Name], based on your answers, here's the right support level for you."` (already correct)

**Micro-commitment:**
- ✅ VERIFIED: `"We've tentatively assigned this package for your business. You can confirm or choose another option below."` (already correct)

**Most Popular Badge:**
- ✅ ADDED: Gold package now always displays "Most Popular" badge (yellow badge)
- ✅ ADDED: Visual highlight for Gold card (subtle yellow background)

**File:** `src/app/quote/components/Step3PackageRecommendation.tsx`

---

## STEP 4 — Pricing Page

### Changes Made:

**Headline:**
- ✅ VERIFIED: `"Choose Your File Easy Package"` (already correct)

**Micro-commitment:**
- ✅ VERIFIED: `"You're nearly there — select the support level that fits your business."` (already correct)

**File:** `src/app/quote/components/Step4Pricing.tsx`

---

## STEP 5 — Payment Style

### Changes Made:

**Headline:**
- ✅ VERIFIED: `"How would you like to pay?"` (already correct)

**Deposit Info (NEW):**
- ✅ ADDED: `"Small deposit – £100"` (display only, no payment capture)

**Option 1 Title:**
- ❌ OLD: `"Pay Monthly"`
- ✅ NEW: `"Pay Monthly – 1st Month"`

**Option 1 Description:**
- ❌ OLD: `"Flexible monthly payments"`
- ✅ NEW: `"Cancel with 30 days' notice."`

**Option 2 Title:**
- ❌ OLD: `"Pay Annually (Save 5%)"`
- ✅ NEW: `"Pay Annually (Save 5%) – One year payment"`

**Option 2 Description:**
- ❌ OLD: `"Save £X per year"`
- ✅ NEW: `"Pay £Y for the year (5% discount)"`

**Option 2 Features:**
- ❌ OLD: `['One invoice per year', 'Less admin', 'Best value']`
- ✅ NEW: `['One invoice. Less admin. Best value.', 'Save £X per year', 'Best value']`

**Micro-commitment:**
- ✅ VERIFIED: `"Great — we've saved your payment preference. Final step below."` (already correct)

**Data Model:**
- ✅ ADDED: `depositRequired: true` and `depositAmount: 100` to `Step5Data` type

**File:** `src/app/quote/components/Step5PaymentStyle.tsx`, `src/app/quote/types.ts`

---

## STEP 6 — Onboarding Details

### Changes Made:

**Headline:**
- ✅ VERIFIED: `"A few details so we can prepare your onboarding pack."` (already correct)

**AML Copy:**
- ✅ VERIFIED: Matches spec exactly (already correct)

**Checkbox Text:**
- ✅ VERIFIED: `"I understand that File Easy will complete AML checks before becoming my accountant."` (already correct)

**File:** `src/app/quote/components/Step6OnboardingDetails.tsx`

---

## STEP 7 — Commitment Page

### Changes Made:

**Headline:**
- ✅ VERIFIED: `"You're almost all set, [Name]. Choose how you'd like to complete your onboarding."` (already correct)

**Option 1:**
- ✅ VERIFIED: `"Set Me Up & Send My Agreement"` (already correct)
- ✅ VERIFIED: Description matches spec (already correct)

**Option 2:**
- ✅ VERIFIED: `"Book a Welcome Call First"` (already correct)
- ❌ OLD: `"Prefer to speak before finalising? Choose a time that works."`
- ✅ NEW: `"Prefer to speak before finalising? Choose a preferred time that works for a call back."`

**Option 3 (REMOVED):**
- ❌ REMOVED: `"Email Me My Quote"` option completely

**File:** `src/app/quote/components/Step7Commitment.tsx`

---

## STEP 8 — Confirmation Page

### Changes Made:

**Headline:**
- ✅ VERIFIED: `"Great work — your File Easy setup has begun."` (already correct)

**Bullets:**
- ✅ VERIFIED: All three bullets match spec exactly (already correct)

**Footer:**
- ✅ VERIFIED: `"You're officially at the final stage — welcome to File Easy."` (already correct)

**Removed Cases:**
- ❌ REMOVED: `case 'email-quote'` handling (no longer needed)

**File:** `src/app/quote/components/Step8Confirmation.tsx`

---

## STEP O1 — One-Off Scoping

### Changes Made:

**Headline:**
- ✅ VERIFIED: `"Tell us what you need help with — we'll prepare your fixed quote."` (already correct)

**Q5 Budget Comfort:**
- ❌ OLD: Static text `"Most one-off jobs start from £X–£Y depending on complexity."`
- ✅ NEW: Dynamic pricing `"Most one-off jobs start from £150–£1,500 depending on complexity."` (from config)

**New File Created:**
- ✅ ADDED: `src/app/quote/lib/oneOffPricing.ts` (pricing configuration)

**File:** `src/app/quote/components/StepO1OneOffScoping.tsx`, `src/app/quote/lib/oneOffPricing.ts`

---

## STEP O2 — One-Off Proceed

### Changes Made:

**Headline:**
- ✅ VERIFIED: `"How would you like to move forward?"` (already correct)

**Option 1 (REMOVED):**
- ❌ REMOVED: `"Book My Quote Call"` option completely

**Option 2 (KEPT):**
- ✅ VERIFIED: `"Have File Easy Call Me Back"` (kept)
- ✅ ADDED: `"Immediately"` option to callback time choices

**File:** `src/app/quote/components/StepO2OneOffProceed.tsx`, `src/app/quote/types.ts`

---

## STEP O3 — One-Off Confirmation

### Changes Made:

**Headline:**
- ✅ VERIFIED: `"Thanks, [Name] — your one-off quote is being prepared."` (already correct)

**Bullets (Updated):**
- ❌ OLD: Separate handling for `book-call` and `callback` cases
- ✅ NEW: Unified confirmation message with dynamic time label
- ✅ NEW: Includes AML notice in confirmation items: `"Before officially onboarding, we'll complete a simple AML check. Nothing to do yet — we'll guide you when the time comes."`

**Removed Cases:**
- ❌ REMOVED: `case 'book-call'` handling (no longer needed)

**File:** `src/app/quote/components/StepO3OneOffConfirmation.tsx`

---

## TYPE UPDATES

### Changes Made:

**Step5Data:**
- ✅ ADDED: `depositRequired?: boolean`
- ✅ ADDED: `depositAmount?: number`

**OneOffCallbackTime:**
- ✅ ADDED: `'immediately'` option

**File:** `src/app/quote/types.ts`

---

## SUMMARY

### Files Modified: 12
1. `src/app/quote/components/Step1Form.tsx`
2. `src/app/quote/components/Step2BForm.tsx`
3. `src/app/quote/components/Step3PackageRecommendation.tsx`
4. `src/app/quote/components/Step5PaymentStyle.tsx`
5. `src/app/quote/components/Step7Commitment.tsx`
6. `src/app/quote/components/Step8Confirmation.tsx`
7. `src/app/quote/components/StepO1OneOffScoping.tsx`
8. `src/app/quote/components/StepO2OneOffProceed.tsx`
9. `src/app/quote/components/StepO3OneOffConfirmation.tsx`
10. `src/app/quote/types.ts`
11. `src/app/quote/page.tsx` (deposit fields)
12. `src/app/quote/lib/oneOffPricing.ts` (NEW FILE)

### Total String Changes: 15+
### Options Removed: 2 (email-quote, book-call)
### New Features Added: 3 (deposit info, Most Popular badge, dynamic pricing)

---

## NEXT PHASE

Ready for **PHASE Δ2 — Remove deprecated options & triggers** after approval.

