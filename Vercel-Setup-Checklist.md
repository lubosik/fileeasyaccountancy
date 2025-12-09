# Vercel Setup Checklist - Environment Variables & Webhooks

**Date:** December 7, 2025  
**Project:** File Easy Accountancy

---

## Environment Variables for Vercel

### GHL (GoHighLevel) Configuration

Add these in Vercel Project Settings → Environment Variables:

```
GHL_API_KEY=your_ghl_api_key_here
GHL_LOCATION_ID=your_location_id_here
GHL_API_BASE=https://services.leadconnectorhq.com
GHL_API_VERSION=2021-07-28
GHL_CF_DISCOVERY_BASE=https://rest.gohighlevel.com
GHL_CF_DISCOVERY_PATH=/v1/custom-fields/
```

**Where to get:**
- `GHL_API_KEY`: GoHighLevel Dashboard → Settings → API → API Keys
- `GHL_LOCATION_ID`: GoHighLevel Dashboard → Settings → Locations → Your Location ID

---

### FirmCheck Configuration

```
FIRMCHECK_API_KEY=your_firmcheck_api_key_here
FIRMCHECK_API_BASE=https://api.firmcheck.com
FIRMCHECK_ACCEPT_VERSION=1.0.0
```

**Where to get:**
- `FIRMCHECK_API_KEY`: FirmCheck Dashboard → API Settings → API Key

---

### Stripe Configuration

```
STRIPE_SECRET_KEY=sk_live_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

**Where to get:**
- `STRIPE_SECRET_KEY`: Stripe Dashboard → Developers → API keys → Secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe Dashboard → Developers → API keys → Publishable key
- `STRIPE_WEBHOOK_SECRET`: See "Stripe Webhook" section below (created after webhook setup)

**Important:** 
- Use `sk_live_...` and `pk_live_...` for production
- Use `sk_test_...` and `pk_test_...` for testing

---

### Feature Flags

```
FE_GHL_AML_ENABLED=true
NEXT_PUBLIC_FE_GHL_AML_ENABLED=true
```

**Note:** Both must be set to `true` to enable AML integration.

---

### Site Configuration

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
DEPOSIT_AMOUNT_PENCE=10000
```

**Where to set:**
- `NEXT_PUBLIC_SITE_URL`: Your production domain (e.g., `https://fileeasyaccountancy.co.uk`)
- `DEPOSIT_AMOUNT_PENCE`: Amount in pence (10000 = £100.00)

---

## Webhook Configuration

### 1. Stripe Webhook

**Setup Steps:**

1. **Go to Stripe Dashboard:**
   - Navigate to: Developers → Webhooks
   - Click "Add endpoint"

2. **Configure Webhook:**
   - **Endpoint URL:** `https://your-domain.com/api/stripe/webhook`
   - **Description:** "File Easy Deposit Payment Webhook"
   - **Events to send:** Select `checkout.session.completed`
   - Click "Add endpoint"

3. **Copy Webhook Secret:**
   - After creating the webhook, click on it
   - Find "Signing secret" section
   - Click "Reveal" to show the secret
   - Copy the secret (starts with `whsec_`)
   - Add to Vercel as: `STRIPE_WEBHOOK_SECRET=whsec_...`

4. **Test Webhook:**
   - Use Stripe CLI for local testing: `stripe listen --forward-to http://localhost:3000/api/stripe/webhook`
   - Or test in Stripe Dashboard → Webhooks → [Your webhook] → Send test webhook

---

### 2. FirmCheck Webhook

**Setup Steps:**

1. **Go to FirmCheck Dashboard:**
   - Navigate to: Settings → Webhooks (or API → Webhooks)
   - Click "Add Webhook" or "Create Webhook"

2. **Configure Webhook:**
   - **Webhook URL:** `https://your-domain.com/api/aml/webhook`
   - **Description:** "File Easy AML Status Updates"
   - **Events:** Enable "AML Determination Status Updates" or similar
   - Save the webhook

3. **Verify Webhook:**
   - FirmCheck may send a test webhook to verify the endpoint
   - Check Vercel logs to ensure webhook is received
   - The endpoint should return `200 OK`

**Note:** FirmCheck webhook configuration may vary. Check FirmCheck documentation for exact steps.

---

## Environment Variables Summary Table

| Variable Name | Required | Example Value | Where to Get |
|--------------|----------|---------------|--------------|
| `GHL_API_KEY` | ✅ Yes | `pit-e44bc39e-...` | GHL Dashboard → API |
| `GHL_LOCATION_ID` | ✅ Yes | `location_123` | GHL Dashboard → Locations |
| `GHL_API_BASE` | ✅ Yes | `https://services.leadconnectorhq.com` | Fixed value |
| `GHL_API_VERSION` | ✅ Yes | `2021-07-28` | Fixed value |
| `GHL_CF_DISCOVERY_BASE` | ✅ Yes | `https://rest.gohighlevel.com` | Fixed value |
| `GHL_CF_DISCOVERY_PATH` | ✅ Yes | `/v1/custom-fields/` | Fixed value |
| `FIRMCHECK_API_KEY` | ✅ Yes | `fc_key_...` | FirmCheck Dashboard → API |
| `FIRMCHECK_API_BASE` | ✅ Yes | `https://api.firmcheck.com` | Fixed value |
| `FIRMCHECK_ACCEPT_VERSION` | ✅ Yes | `1.0.0` | Fixed value |
| `STRIPE_SECRET_KEY` | ✅ Yes | `sk_live_...` | Stripe Dashboard → API Keys |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | ✅ Yes | `pk_live_...` | Stripe Dashboard → API Keys |
| `STRIPE_WEBHOOK_SECRET` | ✅ Yes | `whsec_...` | Stripe Dashboard → Webhooks |
| `FE_GHL_AML_ENABLED` | ✅ Yes | `true` | Fixed value |
| `NEXT_PUBLIC_FE_GHL_AML_ENABLED` | ✅ Yes | `true` | Fixed value |
| `NEXT_PUBLIC_SITE_URL` | ✅ Yes | `https://your-domain.com` | Your domain |
| `DEPOSIT_AMOUNT_PENCE` | ✅ Yes | `10000` | Fixed value (£100) |

---

## Setup Order

### Step 1: Set Environment Variables in Vercel
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all variables from the table above
3. Set for **Production**, **Preview**, and **Development** environments
4. **Important:** Variables starting with `NEXT_PUBLIC_` are exposed to the browser

### Step 2: Deploy to Vercel
1. Push code to GitHub (or connect repository)
2. Vercel will automatically deploy
3. Wait for deployment to complete
4. Note your deployment URL (e.g., `https://your-project.vercel.app`)

### Step 3: Configure Stripe Webhook
1. Use your Vercel deployment URL for webhook endpoint
2. Create webhook in Stripe Dashboard
3. Copy webhook secret
4. Add `STRIPE_WEBHOOK_SECRET` to Vercel environment variables
5. Redeploy (or wait for auto-deploy)

### Step 4: Configure FirmCheck Webhook
1. Use your Vercel deployment URL for webhook endpoint
2. Create webhook in FirmCheck Dashboard
3. Verify webhook is working (check Vercel logs)

### Step 5: Update Site URL
1. Once you have your final domain, update `NEXT_PUBLIC_SITE_URL`
2. Update webhook URLs in Stripe and FirmCheck if needed
3. Redeploy

---

## Verification Checklist

After setup, verify everything works:

- [ ] **Health Check:** `curl https://your-domain.com/api/health` returns 200
- [ ] **GHL Fields:** `curl https://your-domain.com/api/ghl/fields` returns field list
- [ ] **FirmCheck Ping:** `curl https://your-domain.com/api/aml/ping` returns success
- [ ] **Stripe Webhook:** Test payment triggers webhook (check Vercel logs)
- [ ] **FirmCheck Webhook:** AML status update triggers webhook (check Vercel logs)
- [ ] **End-to-End:** Complete test quote and verify GHL updates

---

## Important Notes

### Security
- ✅ All API keys are server-side only (except `NEXT_PUBLIC_*` variables)
- ✅ Webhook secrets are used to verify webhook authenticity
- ✅ Never commit environment variables to git

### Testing
- Use test Stripe keys (`sk_test_...`, `pk_test_...`) for testing
- Use production keys (`sk_live_...`, `pk_live_...`) for production
- Test webhooks using Stripe CLI or test events

### Troubleshooting
- Check Vercel logs for errors
- Verify all environment variables are set
- Ensure webhook URLs are correct (use full URL with `https://`)
- Check that webhook secrets match

---

## Quick Copy-Paste for Vercel

### All Environment Variables (Copy All)

```
GHL_API_KEY=
GHL_LOCATION_ID=
GHL_API_BASE=https://services.leadconnectorhq.com
GHL_API_VERSION=2021-07-28
GHL_CF_DISCOVERY_BASE=https://rest.gohighlevel.com
GHL_CF_DISCOVERY_PATH=/v1/custom-fields/
FIRMCHECK_API_KEY=
FIRMCHECK_API_BASE=https://api.firmcheck.com
FIRMCHECK_ACCEPT_VERSION=1.0.0
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
FE_GHL_AML_ENABLED=true
NEXT_PUBLIC_FE_GHL_AML_ENABLED=true
NEXT_PUBLIC_SITE_URL=
DEPOSIT_AMOUNT_PENCE=10000
```

**Note:** Fill in the empty values with your actual keys/IDs.

---

**Last Updated:** December 7, 2025

