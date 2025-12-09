# PHASE Δ0 — Inventory & Diff Checklist

## Branch Created
✅ `feature/onboarding-v2-spec-delta`

---

## DELTA CHECKLIST: Old Behavior → New Required Behavior

### 1. MONTHLY STEP 7 — Commitment Page (Remove "Email My Quote" Option)

**Current State:**
- File: `src/app/quote/components/Step7Commitment.tsx`
- Has 3 options: "Set Me Up & Send My Agreement", "Book a Welcome Call First", "Email Me My Quote"
- Type: `CommitmentOption = 'set-me-up' | 'book-call' | 'email-quote'` in `src/app/quote/types.ts`
- CRM Tag: `'email-quote': 'Quote Requested'` in `src/lib/ghl.ts:287`
- Confirmation handling: `case 'email-quote'` in `src/app/quote/components/Step8Confirmation.tsx:109,190`

**Required Changes:**
- ❌ Remove "Email Me My Quote" option card (lines 54-60 in Step7Commitment.tsx)
- ❌ Remove `'email-quote'` from `CommitmentOption` type (keep for backward compatibility but mark as unused)
- ❌ Remove `'email-quote': 'Quote Requested'` tag emission from GHL (keep constant but comment as unused)
- ❌ Remove `case 'email-quote'` handling from Step8Confirmation.tsx
- ✅ Keep only 2 options: "Set Me Up & Send My Agreement", "Book a Welcome Call First"
- ✅ Update headline copy to match spec exactly: "You're almost all set, [Name]. Choose how you'd like to complete your onboarding."
- ✅ Update "Book a Welcome Call First" description: "Prefer to speak before finalising? Choose a preferred time that works for a call back."

**Files to Modify:**
- `src/app/quote/components/Step7Commitment.tsx`
- `src/app/quote/types.ts` (mark `'email-quote'` as unused)
- `src/lib/ghl.ts` (comment out `'email-quote'` tag emission)
- `src/app/quote/components/Step8Confirmation.tsx` (remove email-quote case)

---

### 2. ONE-OFF STEP O2 — Proceed Options (Remove "Book Call" and "Email Quote")

**Current State:**
- File: `src/app/quote/components/StepO2OneOffProceed.tsx`
- Has 2 options: "Book My Quote Call" (lines 63-91), "Have File Easy Call Me Back" (lines 93-154)
- Type: `OneOffProceedOption = 'book-call' | 'callback' | 'email-guide'` in `src/app/quote/types.ts`
- CRM Tags: `'book-call': 'One-Off – Call Booked'`, `'email-guide': 'One-Off – Email Quote Requested'` in `src/lib/ghl.ts:305,307`
- Confirmation handling: `case 'book-call'` in `src/app/quote/components/StepO3OneOffConfirmation.tsx:79`

**Required Changes:**
- ❌ Remove "Book My Quote Call" option (lines 63-91)
- ❌ Remove `'book-call'` and `'email-guide'` from `OneOffProceedOption` type (keep for backward compatibility but mark as unused)
- ❌ Remove `'book-call'` and `'email-guide'` tag emissions from GHL (keep constants but comment as unused)
- ❌ Remove `case 'book-call'` handling from StepO3OneOffConfirmation.tsx
- ✅ Keep only 1 option: "Have File Easy Call Me Back" with preferred time selection (Morning/Afternoon/Evening)
- ✅ Update headline: "How would you like to move forward?" (already correct)
- ✅ Add "Immediately" option to callback time choices (if not present)
- ✅ Update confirmation copy to match spec exactly

**Files to Modify:**
- `src/app/quote/components/StepO2OneOffProceed.tsx`
- `src/app/quote/types.ts` (mark `'book-call'` and `'email-guide'` as unused)
- `src/lib/ghl.ts` (comment out `'book-call'` and `'email-guide'` tag emissions)
- `src/app/quote/components/StepO3OneOffConfirmation.tsx` (remove book-call case, update callback copy)

---

### 3. STEP 5 — Payment Style (Add Deposit Info & Update Copy)

**Current State:**
- File: `src/app/quote/components/Step5PaymentStyle.tsx`
- Headline: "How would you like to pay?" (correct)
- Option 1: "Pay Monthly" with "From £X/month" and features list
- Option 2: "Pay Annually (Save 5%)" with annual price
- No deposit information displayed
- No "1st Month" or "Cancel with 30 days' notice" explicitly stated
- No "One year payment" label

**Required Changes:**
- ✅ Add informational line: "Small deposit – £100" (display only, no payment capture)
- ✅ Update Option 1 title: "Pay Monthly – 1st Month"
- ✅ Update Option 1 description: Show "From £X/month" and add "Cancel with 30 days' notice." as explicit line
- ✅ Update Option 2 title: "Pay Annually (Save 5%) – One year payment"
- ✅ Update Option 2 description: "Pay £Y for the year (5% discount)" and "One invoice. Less admin. Best value."
- ✅ Add `depositRequired: true` and `depositAmount: 100` to Step5Data type (display only)
- ✅ Update micro-commitment line: "Great — we've saved your payment preference. Final step below." (already correct)

**Files to Modify:**
- `src/app/quote/components/Step5PaymentStyle.tsx`
- `src/app/quote/types.ts` (add deposit fields to Step5Data)

---

### 4. ONE-OFF STEP O1 Q5 — Budget Comfort (Add Dynamic Pricing Footnote)

**Current State:**
- File: `src/app/quote/components/StepO1OneOffScoping.tsx`
- Line 272-273: Static text "Most one-off jobs start from £X–£Y depending on complexity."
- No dynamic pricing calculation

**Required Changes:**
- ✅ Create `src/app/quote/lib/oneOffPricing.ts` with config constants (LOW=150, HIGH=1500)
- ✅ Calculate and inject dynamic £LOW–£HIGH range into the budget comfort question
- ✅ Update line 272-273 to use computed range: `Most one-off jobs start from £${low}–£${high} depending on complexity.`
- ✅ Keep answer choices: "That sounds fine", "Need to keep it low", "Not sure" (already correct)

**Files to Modify:**
- `src/app/quote/components/StepO1OneOffScoping.tsx`
- `src/app/quote/lib/oneOffPricing.ts` (new file)

---

### 5. STEP 3 — Package Recommendation (Mark Gold as "Most Popular")

**Current State:**
- File: `src/app/quote/components/Step3PackageRecommendation.tsx`
- Gold card shows "Recommended" badge if it's the recommended package (lines 67-72)
- No explicit "Most Popular" badge for Gold

**Required Changes:**
- ✅ Ensure Gold card always shows "Most Popular" badge (in addition to "Recommended" if applicable)
- ✅ Add visual highlight for Gold card (subtle background/border)
- ✅ Confirm headline matches spec: "[Name], based on your answers, here's the right support level for you."
- ✅ Confirm micro-commitment: "We've tentatively assigned this package for your business. You can confirm or choose another option below."

**Files to Modify:**
- `src/app/quote/components/Step3PackageRecommendation.tsx`

---

### 6. COPY SYNCHRONIZATION — All Steps (Exact Wording Match)

**Step 1 — Email & Phone Capture:**
- ❌ Current: "Get Your Custom Quote" → ✅ New: "Let's Get Your Personalised File Easy Quote"
- ❌ Current: "Let's start with your contact details. This will only take 60 seconds." → ✅ New: "Answer a few quick questions and we'll build your personalised quote and next steps."
- ❌ Current: "I agree to the Privacy Policy..." → ✅ New: "By continuing, you agree we can contact you about your quote via email and SMS. You can opt out anytime."
- ❌ Current: No micro-commitment line → ✅ New: After click, show "Great — we're reserving your customised File Easy quote now."
- ✅ Button: "Start My 60-Second Quote" (needs verification)

**Step 2A — Routing:**
- ✅ Headline: "What kind of support do you need right now?" (correct)
- ✅ Options text matches spec (correct)

**Step 2B — Pre-Qualification:**
- ❌ Current: "{firstName}, Tell Us About Your Business" → ✅ New: Individual question headlines per spec
- ❌ Current: "A few quick questions to help us recommend..." → ✅ New: Each question has its own headline
- ✅ Q1: "What best describes your business?" (correct)
- ✅ Q2: "What's your approximate annual turnover?" (correct)
- ✅ Q3: "Who do you work with?" (correct)
- ✅ Q4: "How are your accounts managed right now?" (correct)
- ✅ Q5: "How soon do you want support in place?" (correct)
- ✅ Q6: "What's most important to you right now?" (correct)
- ✅ Q7: "Most clients in your situation invest £150–£1,495/month..." (correct)

**Step 3 — Package Recommendation:**
- ✅ Headline: "[Name], based on your answers, here's the right support level for you." (correct)
- ✅ Micro-commitment: "We've tentatively assigned this package..." (correct)

**Step 4 — Pricing:**
- ✅ Headline: "Choose Your File Easy Package" (correct)
- ✅ Micro-commitment: "You're nearly there — select the support level that fits your business." (correct)

**Step 5 — Payment:**
- ✅ Headline: "How would you like to pay?" (correct)
- ❌ Needs deposit line, "1st Month", "30 days' notice", "One year payment" updates (see #3 above)

**Step 6 — Onboarding Details:**
- ✅ Headline: "A few details so we can prepare your onboarding pack." (correct)
- ✅ AML copy matches spec (correct)
- ✅ Checkbox text: "I understand that File Easy will complete AML checks..." (correct)

**Step 7 — Commitment:**
- ✅ Headline: "You're almost all set, [Name]. Choose how you'd like to complete your onboarding." (correct)
- ❌ Remove "Email My Quote" option (see #1 above)
- ✅ Option 1: "Set Me Up & Send My Agreement" (correct)
- ❌ Option 2 description needs update: "Prefer to speak before finalising? Choose a preferred time that works for a call back."

**Step 8 — Confirmation:**
- ✅ Headline: "Great work — your File Easy setup has begun." (correct)
- ✅ Bullets match spec (correct)
- ✅ Footer: "You're officially at the final stage — welcome to File Easy." (correct)

**Step O1 — One-Off Scoping:**
- ✅ Headline: "Tell us what you need help with — we'll prepare your fixed quote." (correct)
- ❌ Q5 budget footnote needs dynamic pricing (see #4 above)

**Step O2 — One-Off Proceed:**
- ✅ Headline: "How would you like to move forward?" (correct)
- ❌ Remove "Book My Quote Call" option (see #2 above)
- ✅ Keep only "Have File Easy Call Me Back" with time selection

**Step O3 — One-Off Confirmation:**
- ✅ Headline: "Thanks, [Name] — your one-off quote is being prepared." (correct)
- ✅ Bullets match spec (correct)
- ✅ AML notice matches spec (correct)

**Files to Modify:**
- `src/app/quote/components/Step1Form.tsx`
- `src/app/quote/components/Step2BForm.tsx` (update question structure)
- All step components for micro-commitment lines

---

### 7. CRM TAGS & EVENTS AUDIT

**Tags to Remove from Active Emission:**
- ❌ `'Quote Requested'` (from Monthly Step 7 email-quote option)
- ❌ `'One-Off – Call Booked'` (from One-Off Step O2 book-call option)
- ❌ `'One-Off – Email Quote Requested'` (from One-Off Step O2 email-guide option)

**Tags to Keep:**
- ✅ `'Lead – Started Quote'` (Step 1)
- ✅ `'Engagement Type – Monthly'` / `'Engagement Type – One-Off'` (Step 2)
- ✅ `'Recommended Package: {Silver|Gold|Platinum}'` (Step 3)
- ✅ `'Selected Package – {Silver|Gold|Platinum}'` (Step 4)
- ✅ `'Payment Preference – Monthly/Annual'` (Step 5)
- ✅ `'Onboarding – Details Complete'` (Step 6)
- ✅ `'Ready to Onboard'` (Step 7 set-me-up)
- ✅ `'Needs Call'` (Step 7 book-call)
- ✅ `'One-Off – Callback Requested'` (Step O2 callback)

**Files to Modify:**
- `src/lib/ghl.ts` (comment out unused tag emissions, keep constants)

---

### 8. ANALYTICS EVENTS

**Events to Remove:**
- ❌ `fe_quote_commitment_option_selected` with `option: 'email-quote'`
- ❌ `fe_quote_step_complete` with `proceed_option: 'book-call'` or `'email-guide'` in One-Off flow

**Events to Keep/Update:**
- ✅ All existing step completion events
- ✅ Add `depositRequired: true` to payment step events

**Files to Modify:**
- `src/app/quote/components/Step5PaymentStyle.tsx` (add depositRequired to analytics)
- `src/app/quote/components/Step7Commitment.tsx` (remove email-quote tracking)
- `src/app/quote/components/StepO2OneOffProceed.tsx` (remove book-call tracking)

---

## SUMMARY OF FILES TO MODIFY

1. `src/app/quote/components/Step1Form.tsx` - Copy updates
2. `src/app/quote/components/Step2BForm.tsx` - Question structure
3. `src/app/quote/components/Step3PackageRecommendation.tsx` - Most Popular badge
4. `src/app/quote/components/Step4Pricing.tsx` - Copy verification
5. `src/app/quote/components/Step5PaymentStyle.tsx` - Deposit + copy updates
6. `src/app/quote/components/Step6OnboardingDetails.tsx` - Copy verification
7. `src/app/quote/components/Step7Commitment.tsx` - Remove email-quote option
8. `src/app/quote/components/Step8Confirmation.tsx` - Remove email-quote case
9. `src/app/quote/components/StepO1OneOffScoping.tsx` - Dynamic pricing footnote
10. `src/app/quote/components/StepO2OneOffProceed.tsx` - Remove book-call option
11. `src/app/quote/components/StepO3OneOffConfirmation.tsx` - Remove book-call case, update copy
12. `src/app/quote/types.ts` - Mark deprecated types as unused, add deposit fields
13. `src/lib/ghl.ts` - Comment out unused tag emissions
14. `src/app/quote/lib/oneOffPricing.ts` - NEW FILE - Pricing config for one-off jobs

---

## NEXT PHASE

Ready for **PHASE Δ1 — Copy synchronization pass** after approval.

