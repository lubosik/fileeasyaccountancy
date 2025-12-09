# ✅ Vercel Deployment - Ready to Deploy

**Date:** December 9, 2025  
**Status:** Ready (with provided credentials)

---

## ✅ What You've Provided

- ✅ **GHL Location ID:** `paq1Vfk9uvFu0imJwcVU`
- ✅ **Stripe Webhook Secret:** `whsec_G00Yi85FLz6ZuFVp53jvyFPRRPojpohY`

---

## 📋 Environment Variables Status

### ✅ Ready to Set (You Have These):
- `GHL_LOCATION_ID=paq1Vfk9uvFu0imJwcVU`
- `STRIPE_WEBHOOK_SECRET=whsec_G00Yi85FLz6ZuFVp53jvyFPRRPojpohY`

### ⚠️ Still Need (Get These First):
1. **GHL_API_KEY** - GoHighLevel Dashboard → Settings → API → API Keys
2. **STRIPE_SECRET_KEY** - Stripe Dashboard → Developers → API keys → Secret key
3. **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY** - Stripe Dashboard → Developers → API keys → Publishable key
4. **NEXT_PUBLIC_SITE_URL** - Your Vercel deployment URL (set after first deploy)

### 🔵 Optional (Can Test Without):
- **FIRMCHECK_API_KEY** - FirmCheck Dashboard → API Settings
  - **Note:** FirmCheck webhook is OPTIONAL. System uses polling, so it works fine without the webhook.

---

## 🚀 Quick Deployment Steps

### Step 1: Get Missing API Keys

1. **GHL API Key:**
   - Go to GoHighLevel Dashboard
   - Settings → API → API Keys
   - Copy your API key

2. **Stripe Keys:**
   - Go to Stripe Dashboard
   - Developers → API keys
   - Copy Secret key (`sk_live_...` or `sk_test_...`)
   - Copy Publishable key (`pk_live_...` or `pk_test_...`)

### Step 2: Set Environment Variables in Vercel

1. Go to **Vercel Dashboard → Your Project → Settings → Environment Variables**
2. Add these variables:

```
GHL_API_KEY=<your_ghl_api_key>
GHL_LOCATION_ID=paq1Vfk9uvFu0imJwcVU
GHL_API_BASE=https://services.leadconnectorhq.com
GHL_API_VERSION=2021-07-28
GHL_CF_DISCOVERY_BASE=https://rest.gohighlevel.com
GHL_CF_DISCOVERY_PATH=/v1/custom-fields/

FIRMCHECK_API_KEY=<your_firmcheck_api_key>  # Optional
FIRMCHECK_API_BASE=https://api.firmcheck.com
FIRMCHECK_ACCEPT_VERSION=1.0.0

STRIPE_SECRET_KEY=<your_stripe_secret_key>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
STRIPE_WEBHOOK_SECRET=whsec_G00Yi85FLz6ZuFVp53jvyFPRRPojpohY

FE_GHL_AML_ENABLED=true
NEXT_PUBLIC_FE_GHL_AML_ENABLED=true

NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app  # Update after deploy
DEPOSIT_AMOUNT_PENCE=10000
```

3. **Important:** Set for **Production**, **Preview**, and **Development** environments

### Step 3: Deploy to Vercel

1. Push code to GitHub (if connected)
2. Or trigger deployment in Vercel Dashboard
3. Wait for deployment to complete
4. Note your deployment URL (e.g., `https://fileeasyaccountancy.vercel.app`)

### Step 4: Update Site URL & Configure Stripe Webhook

1. **Update `NEXT_PUBLIC_SITE_URL`** in Vercel with your actual deployment URL
2. **Configure Stripe Webhook:**
   - Go to Stripe Dashboard → Developers → Webhooks
   - Click "Add endpoint"
   - **Endpoint URL:** `https://your-project.vercel.app/api/stripe/webhook`
   - **Events:** Select `checkout.session.completed`
   - Click "Add endpoint"
   - **Note:** The webhook secret is already set (`whsec_G00Yi85FLz6ZuFVp53jvyFPRRPojpohY`)

### Step 5: (Optional) Configure FirmCheck Webhook

**This is OPTIONAL!** The system works without it using polling.

If you want real-time updates:
1. Go to FirmCheck Dashboard → Settings → Webhooks
2. **Webhook URL:** `https://your-project.vercel.app/api/aml/webhook`
3. Enable "AML Determination Status Updates"
4. Save

**Note:** Without the webhook, the system polls for status updates every few seconds. This works fine, just slightly delayed.

---

## ✅ Verification Checklist

After deployment, test these:

```bash
# 1. Health Check
curl https://your-domain.vercel.app/api/health
# Should return: {"status":"healthy",...}

# 2. GHL Fields Discovery
curl https://your-domain.vercel.app/api/ghl/fields
# Should return: {"fields":[...]}

# 3. FirmCheck Ping (if API key is set)
curl https://your-domain.vercel.app/api/aml/ping
# Should return: {"success":true,...}
```

---

## 📝 What Works Without FirmCheck Webhook

✅ **Everything works!** The system uses polling:

- ✅ AML status is displayed via `AMLStatusDisplay` component
- ✅ Status updates are polled every few seconds
- ✅ GHL is updated when status changes
- ✅ User sees real-time status (slightly delayed, but works)

**The webhook is just for instant updates. Polling works perfectly fine.**

---

## 🆘 Troubleshooting

**If deployment fails:**
- Check all required environment variables are set
- Verify API keys are correct
- Check Vercel build logs

**If health check fails:**
- Verify `GHL_API_KEY` and `GHL_LOCATION_ID` are correct
- Check `STRIPE_SECRET_KEY` is valid
- Review Vercel logs

**If Stripe webhook fails:**
- Verify webhook URL is correct (must be `https://`)
- Check webhook secret matches: `whsec_G00Yi85FLz6ZuFVp53jvyFPRRPojpohY`
- Test with Stripe CLI: `stripe listen --forward-to http://localhost:3000/api/stripe/webhook`

---

## 📄 Files Created

- ✅ `DEPLOY_TO_VERCEL.md` - Detailed deployment guide
- ✅ `vercel-env-template.txt` - Environment variables template
- ✅ `Vercel-Setup-Checklist.md` - Complete setup checklist

---

## 🎯 Next Steps

1. ✅ Get GHL API key
2. ✅ Get Stripe API keys (secret + publishable)
3. ✅ Set all environment variables in Vercel
4. ✅ Deploy to Vercel
5. ✅ Configure Stripe webhook
6. ✅ Test end-to-end quote flow
7. ⏳ (Optional) Set up FirmCheck webhook later

---

**Ready to deploy!** 🚀

All code is ready. Just need the missing API keys and you're good to go!

