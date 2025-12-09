# Developer Handoff Document - Resume & Deposit Features

**Date:** 2025-12-07  
**Branch:** `feat/resume-and-deposit`  
**Status:** ✅ Ready for Production

---

## Overview

This document provides complete setup and deployment instructions for the resume functionality and Stripe deposit payment integration added to the File Easy onboarding flow.

---

## Features Implemented

### 1. Resume Functionality
- ✅ Users can resume their quote using Surname + Unique ID
- ✅ Unique ID (10-char base32) generated after Step 1
- ✅ UID emailed via GHL automation
- ✅ UID reminder flow (Surname + Email)
- ✅ UID reset flow (Email verification code)
- ✅ Progress persistence (lastCompletedStep + JSON snapshot)

### 2. Deposit Payment
- ✅ £100 deposit required for Monthly flow (before Step 6)
- ✅ Stripe Checkout integration
- ✅ Deposit success/cancelled pages
- ✅ Client-side guard blocks Step 6 without deposit
- ✅ One-Off flow bypasses deposit requirement

---

## Environment Variables Required

### GoHighLevel (GHL)
```bash
GHL_API_KEY=pit-e44bc39e-1439-49ed-8b95-522fd-cecb594
GHL_LOCATION_ID=__YOUR_LOCATION_ID__
```

**Where to get:**
- GHL Dashboard → Settings → Integrations → API
- Copy API key and Location ID

### Stripe
```bash
STRIPE_SECRET_KEY=sk_test_...  # or sk_live_... for production
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...  # or pk_live_... for production
STRIPE_WEBHOOK_SECRET=whsec_...
```

**Where to get:**
- Stripe Dashboard → Developers → API keys
- Copy Secret key and Publishable key
- For webhook secret: Stripe Dashboard → Developers → Webhooks → [Your webhook] → Signing secret

### App Configuration
```bash
APP_BASE_URL=https://fileeasyaccountancy.co.uk  # or http://localhost:3000 for local
```

**Where to get:**
- Production: Your domain URL
- Local: `http://localhost:3000`

### Optional (Analytics)
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics 4
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXX  # Meta Pixel
```

---

## GHL Custom Fields Setup

**CRITICAL:** You must create these custom fields in GHL and replace the placeholder IDs in `src/config/ghlCustomFields.ts`.

### Required Custom Fields

1. **Resume & UID:**
   - `cf_uniqueId` - Text field (stores 10-char UID)
   - `cf_lastCompletedStep` - Text field (stores step number)
   - `cf_resumePayloadV1` - Text field (stores JSON snapshot, max 10KB)

2. **Stripe Deposit:**
   - `cf_depositStatus` - Text field (values: "paid", "pending", "cancelled")
   - `cf_stripeSessionId` - Text field (Stripe session ID)
   - `cf_stripePaymentIntentId` - Text field (Stripe payment intent ID)
   - `cf_depositPaidAt` - Text field (ISO timestamp)

3. **UID Reset:**
   - `cf_uidResetTokenHash` - Text field (SHA-256 hash of reset code)
   - `cf_uidResetTokenExpiry` - Text field (Unix timestamp)

4. **Existing Fields (from previous integration):**
   - `cf_engagementType` - Monthly/One-Off
   - `cf_businessType`, `cf_turnoverBand`, etc. (all onboarding fields)

### How to Set Up Custom Fields

1. Go to GHL Dashboard → Settings → Custom Fields
2. Create each field with the exact name above
3. Copy the field ID (starts with `cf_`)
4. Replace placeholder in `src/config/ghlCustomFields.ts`:
   ```typescript
   uniqueId: "cf_YOUR_ACTUAL_FIELD_ID",
   ```

---

## GHL Automations Setup

### Required Tags

The system uses tags to trigger GHL automations. Create these tags in GHL:

1. **UID Email:**
   - Tag: `UID Email – Send`
   - **Automation:** Send email with UID (use merge field `[cf_uniqueId]`)

2. **UID Reminder:**
   - Tag: `UID Reminder – Send`
   - **Automation:** Send email with UID reminder (use merge field `[cf_uniqueId]`)

3. **UID Reset:**
   - Tag: `UID Reset Code – Send`
   - **Automation:** Send email with 6-digit reset code (use merge field from `cf_resumePayloadV1` JSON)
   - Tag: `UID Reset – Done`
   - **Automation:** Send confirmation email with new UID

4. **Deposit:**
   - Tag: `Deposit Paid`
   - **Automation:** (Optional) Send confirmation email

5. **Existing Tags (from previous integration):**
   - `Lead – Started Quote`
   - `Engagement Type – Monthly`
   - `Engagement Type – One-Off`
   - `Onboarding – Details Complete`
   - etc.

### How to Create Automations

1. Go to GHL Dashboard → Automations
2. Create new automation
3. Trigger: "Contact Tagged" → Select tag (e.g., "UID Email – Send")
4. Action: "Send Email"
5. Use merge fields: `[cf_uniqueId]`, `[firstName]`, `[lastName]`, etc.

**Note:** For UID Reset Code, the code is temporarily stored in `cf_resumePayloadV1` as JSON. You'll need to parse it in your email template or use a custom field merge.

---

## Stripe Webhook Setup

### 1. Create Webhook Endpoint

1. Go to Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://fileeasyaccountancy.co.uk/api/stripe/webhook`
4. Select events:
   - ✅ `checkout.session.completed` (required)
   - Optionally: `payment_intent.succeeded`, `payment_intent.payment_failed`
5. Click "Add endpoint"

### 2. Get Webhook Secret

1. After creating endpoint, click on it
2. Copy the "Signing secret" (starts with `whsec_`)
3. Add to environment variables: `STRIPE_WEBHOOK_SECRET=whsec_...`

### 3. Test Webhook (Local Development)

Use Stripe CLI:
```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe  # macOS
# or download from https://stripe.com/docs/stripe-cli

# Login
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/stripe/webhook

# In another terminal, trigger test event
stripe trigger checkout.session.completed
```

---

## Deployment Checklist

### Pre-Deployment

- [ ] All environment variables set in deployment platform (Vercel/Netlify)
- [ ] GHL custom fields created and IDs updated in `src/config/ghlCustomFields.ts`
- [ ] GHL automations created for all tags
- [ ] Stripe webhook endpoint created and secret added to env vars
- [ ] `APP_BASE_URL` set to production domain
- [ ] Stripe keys switched to live keys (not test keys)

### Deployment Steps

1. **Push to Repository:**
   ```bash
   git checkout main
   git merge feat/resume-and-deposit
   git push origin main
   ```

2. **Deploy to Vercel/Netlify:**
   - Push triggers automatic deployment
   - Or manually trigger deployment from dashboard

3. **Verify Environment Variables:**
   - Check all env vars are set in deployment platform
   - Verify `APP_BASE_URL` is production URL

4. **Test Webhook:**
   - Complete a test payment
   - Check Stripe Dashboard → Webhooks → [Your endpoint] → Recent events
   - Verify webhook received and processed

5. **Test Resume Flow:**
   - Complete onboarding to Step 1
   - Check UID generated and stored in GHL
   - Test resume lookup with Surname + UID

6. **Test Deposit Flow:**
   - Complete Monthly flow to Step 5
   - Verify redirect to Stripe Checkout
   - Complete test payment
   - Verify redirect to success page
   - Verify Step 6 accessible after payment

---

## File Structure

### New Files Created

```
src/
├── app/
│   ├── api/
│   │   ├── resume/
│   │   │   ├── assign-uid/route.ts          # Generate UID
│   │   │   ├── email-uid/route.ts           # Trigger UID email
│   │   │   ├── lookup/route.ts              # Resume lookup
│   │   │   ├── reminder/route.ts            # UID reminder
│   │   │   └── reset/
│   │   │       ├── request/route.ts         # Request reset code
│   │   │       └── verify/route.ts         # Verify reset code
│   │   └── stripe/
│   │       ├── create-checkout-session/route.ts  # Create payment session
│   │       ├── confirm/route.ts              # Validate payment session
│   │       └── webhook/route.ts             # Handle Stripe webhooks
│   ├── onboarding/
│   │   └── deposit/
│   │       ├── success/page.tsx              # Payment success page
│   │       └── cancelled/page.tsx            # Payment cancelled page
│   └── resume/
│       ├── page.tsx                          # Resume lookup page
│       ├── reminder/page.tsx                 # UID reminder page
│       └── reset/
│           ├── page.tsx                      # Reset request page
│           └── verify/page.tsx               # Reset verification page
├── config/
│   ├── stripe.ts                             # Stripe configuration
│   └── app.ts                                # App configuration
├── lib/
│   ├── uid.ts                                # UID generation
│   ├── rateLimit.ts                          # Rate limiting
│   ├── progress.ts                           # Progress tracking
│   └── resetCode.ts                          # Reset code generation
└── config/
    └── ghlCustomFields.ts                    # GHL custom field mappings
```

### Modified Files

- `src/app/quote/components/Step5PaymentStyle.tsx` - Added deposit redirect
- `src/app/quote/page.tsx` - Added deposit guard
- `src/lib/leadStore.tsx` - Added `depositPaid` flag
- `src/config/ghlCustomFields.ts` - Added deposit/reset fields

---

## Testing

See `TEST_PLAN.md` for comprehensive test plan.

### Quick Smoke Tests

1. **Resume Flow:**
   - Complete Step 1 → Get UID
   - Navigate to `/resume` → Enter Surname + UID → Verify resume works

2. **Deposit Flow:**
   - Complete Monthly flow to Step 5 → Verify redirect to Stripe
   - Complete test payment → Verify success page → Verify Step 6 accessible

3. **One-Off Flow:**
   - Complete One-Off flow → Verify no deposit required → Verify Step 6 accessible

---

## Troubleshooting

### UID Not Generated
- Check GHL API key and location ID are correct
- Check browser console for errors
- Verify `/api/resume/assign-uid` endpoint is accessible
- Check GHL custom field `cf_uniqueId` exists

### Deposit Payment Fails
- Check Stripe keys are correct (test vs live)
- Check `APP_BASE_URL` is set correctly
- Verify Stripe webhook endpoint is configured
- Check browser console for errors

### Resume Lookup Fails
- Verify UID format is correct (10 chars, base32)
- Check GHL contact has `cf_uniqueId` populated
- Verify surname matches exactly (case-insensitive)
- Check rate limiting (429 if too many requests)

### Webhook Not Processing
- Verify webhook secret is correct
- Check Stripe Dashboard → Webhooks → Recent events
- Verify webhook endpoint URL is correct
- Check server logs for errors

---

## Support & Maintenance

### Monitoring
- Monitor Stripe Dashboard for failed payments
- Monitor GHL for contact creation/updates
- Monitor analytics events (GA4, Meta Pixel)
- Check server logs for errors

### Regular Tasks
- Rotate API keys periodically (every 90 days recommended)
- Review rate limit logs for abuse
- Monitor webhook success rate
- Review failed GHL dispatches (check retry queue)

### Updates
- Keep Stripe SDK updated: `npm update stripe`
- Keep Next.js updated: `npm update next`
- Review GHL API changes (check GHL changelog)

---

## Additional Resources

- **Stripe Docs:** https://stripe.com/docs
- **GHL API Docs:** https://highlevel.stoplight.io/docs/integrations
- **Next.js Docs:** https://nextjs.org/docs
- **Test Plan:** See `TEST_PLAN.md`
- **Security Review:** See `SECURITY_REVIEW.md`

---

**Status:** ✅ Ready for Production Deployment

