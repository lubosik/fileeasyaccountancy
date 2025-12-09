# End-to-End Test Plan for Resume & Deposit Features

**Date:** 2025-12-07  
**Branch:** `feat/resume-and-deposit`

---

## Test Environment Setup

### Prerequisites
- Local development server running
- GHL API keys configured (or use test mode)
- Stripe test keys configured
- Browser with DevTools open (Network, Console tabs)

### Test Data
- Test email: `test@example.com`
- Test phone: `+44 7700 900000`
- Test surname: `TestUser`
- Stripe test card: `4242 4242 4242 4242` (any future expiry, any CVC)

---

## Test Suite 1: Resume Functionality (Surname + UID)

### Test 1.1: UID Assignment After Step 1
**Steps:**
1. Navigate to `/quote`
2. Complete Step 1 (Name, Email, Phone)
3. Submit form

**Expected:**
- ✅ Contact created/updated in GHL
- ✅ UID generated and stored in `cf_uniqueId`
- ✅ UID saved to local `leadStore`
- ✅ Message shown: "Saved your resume code. We'll email it too."
- ✅ Analytics: `lead_uid_issued` event fired
- ✅ GHL tag: "UID Issued" added

**Verify:**
- Check browser console for UID
- Check GHL contact custom field `cf_uniqueId`
- Check `sessionStorage` for `fileeasy_lead_store` (contains `uid`)

### Test 1.2: Resume Lookup by Surname + UID
**Steps:**
1. Complete onboarding flow up to Step 5
2. Note the UID from Step 1 confirmation
3. Navigate to `/resume`
4. Enter surname and UID
5. Submit form

**Expected:**
- ✅ Lookup succeeds
- ✅ All previous answers restored
- ✅ Navigate to correct step (after last completed)
- ✅ Analytics: `lead_resume_success` event fired
- ✅ Local `leadStore` rehydrated with all data

**Verify:**
- Check browser console for resume payload
- Check `sessionStorage` for restored data
- Verify current step matches `lastCompletedStep + 1`

### Test 1.3: Resume Lookup - Invalid UID
**Steps:**
1. Navigate to `/resume`
2. Enter valid surname but invalid UID (e.g., "INVALID")
3. Submit form

**Expected:**
- ✅ Error message: "No quote found with those details. Please check and try again."
- ✅ Analytics: `lead_resume_not_found` event fired
- ✅ No navigation occurs

### Test 1.4: Resume Lookup - Wrong Surname
**Steps:**
1. Complete onboarding with surname "Smith"
2. Navigate to `/resume`
3. Enter correct UID but wrong surname (e.g., "Jones")
4. Submit form

**Expected:**
- ✅ Error message: "No quote found with those details. Please check and try again."
- ✅ Analytics: `lead_resume_not_found` event fired
- ✅ No navigation occurs

### Test 1.5: UID Reminder Flow
**Steps:**
1. Navigate to `/resume/reminder`
2. Enter surname and email
3. Submit form

**Expected:**
- ✅ Always shows: "If your details matched, we've emailed your code."
- ✅ GHL tag "UID Reminder – Send" added (if match found)
- ✅ Analytics: `lead_uid_reminder_requested` event fired
- ✅ No enumeration (same message regardless of match)

**Verify:**
- Check GHL contact tags (if email matches)
- Verify non-revealing response

### Test 1.6: UID Reset Flow
**Steps:**
1. Navigate to `/resume/reset`
2. Enter surname and email
3. Submit request
4. Check email for 6-digit code
5. Navigate to `/resume/reset/verify`
6. Enter email and code
7. Submit verification

**Expected:**
- ✅ Reset code generated and stored (hashed)
- ✅ GHL tag "UID Reset Code – Send" added
- ✅ Email sent with code (via GHL automation)
- ✅ Code verification succeeds
- ✅ New UID generated and stored
- ✅ Old UID replaced in GHL
- ✅ GHL tag "UID Reset – Done" added
- ✅ Analytics: `lead_uid_reset_requested`, `lead_uid_reset_verified` events fired

**Verify:**
- Check GHL contact `cf_uniqueId` updated
- Check old UID no longer works for lookup
- Check new UID works for lookup

### Test 1.7: Rate Limiting on Resume Endpoints
**Steps:**
1. Navigate to `/resume`
2. Submit form 6 times rapidly (within 1 minute)

**Expected:**
- ✅ First 5 requests succeed
- ✅ 6th request returns `429 Too Many Requests`
- ✅ Response includes `Retry-After` header
- ✅ Response includes `X-RateLimit-*` headers

**Verify:**
- Check Network tab for 429 response
- Check response headers
- Wait 1 minute, verify next request succeeds

---

## Test Suite 2: Deposit Payment Flow (Monthly)

### Test 2.1: Deposit Checkout Creation
**Steps:**
1. Complete Steps 1-4 (Monthly flow)
2. Select payment preference on Step 5
3. Click "Continue"

**Expected:**
- ✅ Stripe checkout session created
- ✅ Redirect to Stripe Checkout page
- ✅ Analytics: `lead_deposit_checkout_initiated` event fired
- ✅ Session includes email, uid, metadata

**Verify:**
- Check Network tab for `/api/stripe/create-checkout-session` request
- Verify redirect URL is Stripe Checkout
- Check session metadata in Stripe Dashboard

### Test 2.2: Successful Deposit Payment
**Steps:**
1. Complete Test 2.1
2. On Stripe Checkout, enter test card: `4242 4242 4242 4242`
3. Complete payment

**Expected:**
- ✅ Redirect to `/onboarding/deposit/success?session_id=...`
- ✅ Success page validates session
- ✅ `depositPaid=true` set in `leadStore`
- ✅ GHL updated with "Deposit Paid" tag
- ✅ GHL custom fields: `depositStatus='paid'`, `stripeSessionId`, `stripePaymentIntentId`, `depositPaidAt`
- ✅ Auto-redirect to Step 6 after 2 seconds
- ✅ Analytics: `lead_deposit_paid` event fired

**Verify:**
- Check browser console for session validation
- Check `sessionStorage` for `depositPaid: true`
- Check GHL contact tags and custom fields
- Verify Step 6 is accessible

### Test 2.3: Deposit Payment Cancellation
**Steps:**
1. Complete Test 2.1
2. On Stripe Checkout, click "Cancel" or close window

**Expected:**
- ✅ Redirect to `/onboarding/deposit/cancelled`
- ✅ Cancelled page shows retry option
- ✅ Analytics: `lead_deposit_cancelled` event fired

**Verify:**
- Check cancelled page UI
- Verify "Try Payment Again" button works
- Verify "Return to Quote" link works

### Test 2.4: Deposit Guard - Block Step 6 Without Payment
**Steps:**
1. Complete Steps 1-5 (Monthly flow)
2. Manually navigate to Step 6 (e.g., change URL or use browser back)

**Expected:**
- ✅ Guard modal appears
- ✅ Modal shows "Deposit Required" message
- ✅ "Try Payment Again" button creates new checkout session
- ✅ "Go Back to Payment Step" button navigates to Step 5
- ✅ Step 6 not accessible until deposit paid

**Verify:**
- Check modal UI
- Verify buttons work
- Verify Step 6 component not rendered

### Test 2.5: Deposit Guard - Allow Step 6 After Payment
**Steps:**
1. Complete Test 2.2 (successful payment)
2. Navigate to Step 6

**Expected:**
- ✅ No guard modal
- ✅ Step 6 (Onboarding Details) accessible
- ✅ Can proceed with onboarding

**Verify:**
- Check Step 6 form renders
- Verify can submit Step 6

### Test 2.6: Webhook Processing
**Steps:**
1. Complete Test 2.2 (successful payment)
2. Check Stripe Dashboard → Webhooks

**Expected:**
- ✅ Webhook event `checkout.session.completed` received
- ✅ Webhook handler processes event
- ✅ GHL updated with deposit info (if not already done by success page)
- ✅ Webhook returns `200 OK`

**Verify:**
- Check Stripe Dashboard webhook logs
- Check GHL contact (tags and custom fields)
- Verify webhook signature verification works

---

## Test Suite 3: One-Off Flow (No Deposit)

### Test 3.1: One-Off Flow - No Deposit Required
**Steps:**
1. Complete Steps 1-2, select "One-Off" on Step 2A
2. Complete Steps O1-O2
3. On Step 5 (if shown), select payment preference
4. Click "Continue"

**Expected:**
- ✅ No Stripe checkout redirect
- ✅ Proceeds directly to next step
- ✅ No deposit required
- ✅ No guard blocking progression

**Verify:**
- Check no redirect to Stripe
- Verify can proceed through flow
- Check `leadStore.depositPaid` is undefined (not set)

### Test 3.2: One-Off Flow - Step 6 Accessible
**Steps:**
1. Complete Test 3.1
2. Navigate to Step 6 (if applicable)

**Expected:**
- ✅ No guard modal
- ✅ Step 6 accessible immediately
- ✅ No deposit check performed

**Verify:**
- Check Step 6 renders without guard
- Verify can submit Step 6

---

## Test Suite 4: Progress Persistence

### Test 4.1: Step Completion Tracking
**Steps:**
1. Complete each step of onboarding flow
2. Check GHL after each step

**Expected:**
- ✅ `cf_lastCompletedStep` updated after each step
- ✅ `cf_resumePayloadV1` contains JSON snapshot
- ✅ Individual custom fields updated with step answers
- ✅ Local `leadStore` updated immediately

**Verify:**
- Check GHL custom fields after each step
- Check `sessionStorage` for `lastCompletedStep`
- Verify snapshot JSON is valid and under 8KB

### Test 4.2: Resume from Middle Step
**Steps:**
1. Complete Steps 1-4
2. Close browser
3. Navigate to `/resume`
4. Enter surname and UID
5. Resume flow

**Expected:**
- ✅ Resumes at Step 5 (after last completed step 4)
- ✅ All previous answers restored
- ✅ Can continue from exact point left off

**Verify:**
- Check current step is 5
- Verify all form fields pre-filled
- Verify can proceed normally

---

## Test Suite 5: Security & Rate Limiting

### Test 5.1: Rate Limiting - All Resume Endpoints
**Steps:**
1. Make 6 rapid requests to each endpoint:
   - `/api/resume/lookup`
   - `/api/resume/reminder`
   - `/api/resume/assign-uid`
   - `/api/resume/email-uid`
   - `/api/resume/reset/request`
   - `/api/resume/reset/verify`

**Expected:**
- ✅ First 5 requests succeed
- ✅ 6th request returns `429 Too Many Requests`
- ✅ Response includes rate limit headers
- ✅ After 1 minute, next request succeeds

**Verify:**
- Check Network tab for 429 responses
- Verify `Retry-After` header
- Verify `X-RateLimit-*` headers

### Test 5.2: PII Hygiene - Error Messages
**Steps:**
1. Test various error scenarios:
   - Invalid UID lookup
   - Wrong surname lookup
   - Invalid email reminder
   - Invalid reset code

**Expected:**
- ✅ All error messages are generic
- ✅ No PII (email, surname, UID) in error messages
- ✅ No enumeration (same message for match/no-match)
- ✅ Console logs only in development mode

**Verify:**
- Check all error responses
- Verify no sensitive data in messages
- Check production build has no console logs

### Test 5.3: Webhook Signature Verification
**Steps:**
1. Send invalid webhook request to `/api/stripe/webhook`
2. Send valid webhook with wrong signature

**Expected:**
- ✅ Invalid signature returns `400 Bad Request`
- ✅ Valid signature processes event
- ✅ No processing without valid signature

**Verify:**
- Check webhook handler logs
- Verify signature verification works
- Test with Stripe CLI

---

## Test Suite 6: Analytics & Tracking

### Test 6.1: Analytics Events - Resume Flow
**Steps:**
1. Complete resume-related actions
2. Check GA4 events

**Expected:**
- ✅ `lead_uid_issued` on Step 1
- ✅ `lead_resume_success` on successful lookup
- ✅ `lead_resume_not_found` on failed lookup
- ✅ `lead_uid_reminder_requested` on reminder
- ✅ `lead_uid_reset_requested` on reset request
- ✅ `lead_uid_reset_verified` on reset verification

**Verify:**
- Check GA4 DebugView or Network tab
- Verify all events have correct properties
- Verify event names match spec

### Test 6.2: Analytics Events - Deposit Flow
**Steps:**
1. Complete deposit-related actions
2. Check GA4 events

**Expected:**
- ✅ `lead_deposit_checkout_initiated` on checkout creation
- ✅ `lead_deposit_paid` on successful payment
- ✅ `lead_deposit_cancelled` on cancellation

**Verify:**
- Check GA4 DebugView or Network tab
- Verify all events have correct properties
- Verify event names match spec

---

## Test Suite 7: Edge Cases & Error Handling

### Test 7.1: Missing Environment Variables
**Steps:**
1. Remove `GHL_API_KEY` from `.env.local`
2. Try to complete Step 1

**Expected:**
- ✅ Graceful error handling
- ✅ User sees generic error message
- ✅ No crash or exposed error details

**Verify:**
- Check error messages are user-friendly
- Verify no stack traces exposed
- Check console for development warnings only

### Test 7.2: Network Failures
**Steps:**
1. Disable network (DevTools → Network → Offline)
2. Try to complete various steps

**Expected:**
- ✅ Failed requests queued in `localStorage`
- ✅ Retry worker attempts to resend
- ✅ User sees appropriate error messages
- ✅ Progress not lost

**Verify:**
- Check `localStorage` for `ghl_dispatch_queue`
- Verify retry worker runs
- Check progress persists

### Test 7.3: Session Expiry
**Steps:**
1. Complete Step 1, get UID
2. Wait for session to expire (or clear sessionStorage)
3. Try to resume

**Expected:**
- ✅ Resume lookup still works (uses GHL as source of truth)
- ✅ Local store rehydrated from GHL
- ✅ Can continue flow

**Verify:**
- Check resume works after session cleared
- Verify data restored from GHL

---

## Test Results Template

```
Test Suite: [Name]
Date: [Date]
Tester: [Name]
Environment: [Local/Staging/Production]

Test Case | Status | Notes
---------|--------|------
1.1      | ✅/❌  | [Notes]
1.2      | ✅/❌  | [Notes]
...

Issues Found:
- [Issue 1]
- [Issue 2]

Overall Status: ✅ Pass / ❌ Fail / ⚠️ Partial
```

---

## Automated Testing (Future)

### Recommended Test Framework
- **Playwright** for E2E tests
- **Jest** for unit tests
- **MSW** for API mocking

### Test Coverage Goals
- ✅ Resume lookup flow: 100%
- ✅ Deposit payment flow: 100%
- ✅ Rate limiting: 100%
- ✅ Error handling: 90%+
- ✅ Analytics events: 100%

---

**Status:** Test plan ready for execution

