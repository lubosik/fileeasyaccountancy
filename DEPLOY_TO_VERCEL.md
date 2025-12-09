# Deploy to Vercel - Quick Setup Guide

**Date:** December 9, 2025  
**Status:** Ready to Deploy

---

## ✅ Values You Have

- **GHL Location ID:** `paq1Vfk9uvFu0imJwcVU`
- **Stripe Webhook Secret:** `whsec_G00Yi85FLz6ZuFVp53jvyFPRRPojpohY`

---

## 📋 Environment Variables to Set in Vercel

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

### Copy & Paste These (Fill in missing values):

```bash
# GHL Configuration
GHL_API_KEY=YOUR_GHL_API_KEY_HERE
GHL_LOCATION_ID=paq1Vfk9uvFu0imJwcVU
GHL_API_BASE=https://services.leadconnectorhq.com
GHL_API_VERSION=2021-07-28
GHL_CF_DISCOVERY_BASE=https://rest.gohighlevel.com
GHL_CF_DISCOVERY_PATH=/v1/custom-fields/

# FirmCheck Configuration (Optional - can test without)
FIRMCHECK_API_KEY=YOUR_FIRMCHECK_API_KEY_HERE
FIRMCHECK_API_BASE=https://api.firmcheck.com
FIRMCHECK_ACCEPT_VERSION=1.0.0

# Stripe Configuration
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY_HERE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=YOUR_STRIPE_PUBLISHABLE_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_G00Yi85FLz6ZuFVp53jvyFPRRPojpohY

# Feature Flags
FE_GHL_AML_ENABLED=true
NEXT_PUBLIC_FE_GHL_AML_ENABLED=true

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
DEPOSIT_AMOUNT_PENCE=10000
```

---

## 🔍 Still Need These Values

1. **GHL_API_KEY** - Get from GoHighLevel Dashboard → Settings → API → API Keys
2. **FIRMCHECK_API_KEY** - Get from FirmCheck Dashboard → API Settings (Optional for now)
3. **STRIPE_SECRET_KEY** - Get from Stripe Dashboard → Developers → API keys → Secret key
4. **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY** - Get from Stripe Dashboard → Developers → API keys → Publishable key
5. **NEXT_PUBLIC_SITE_URL** - Your Vercel deployment URL (e.g., `https://fileeasyaccountancy.vercel.app`)

---

## ⚠️ About FirmCheck Webhook

**The FirmCheck webhook is OPTIONAL.** The system works without it using polling:

- ✅ **With Webhook:** Real-time updates when AML status changes
- ✅ **Without Webhook:** System polls for status updates (works fine, just slightly delayed)

**You can test and deploy without the FirmCheck webhook.** Set it up later if needed.

---

## 🚀 Deployment Steps

### Step 1: Set Environment Variables in Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable from the list above
3. **Important:** Set for **Production**, **Preview**, and **Development**
4. For variables starting with `NEXT_PUBLIC_`, they will be exposed to the browser

### Step 2: Configure Stripe Webhook

1. **After deployment**, get your Vercel URL (e.g., `https://your-project.vercel.app`)
2. Go to Stripe Dashboard → Developers → Webhooks
3. Click "Add endpoint"
4. **Endpoint URL:** `https://your-project.vercel.app/api/stripe/webhook`
5. **Events:** Select `checkout.session.completed`
6. Click "Add endpoint"
7. **Note:** The webhook secret is already set above (`whsec_G00Yi85FLz6ZuFVp53jvyFPRRPojpohY`)

### Step 3: Deploy

1. Push to GitHub (if connected)
2. Or trigger deployment in Vercel Dashboard
3. Wait for deployment to complete

### Step 4: Update Site URL

1. Once deployed, update `NEXT_PUBLIC_SITE_URL` with your actual domain
2. Update Stripe webhook URL if needed
3. Redeploy

---

## ✅ Verification After Deployment

Test these endpoints:

```bash
# Health Check (should return 200)
curl https://your-domain.vercel.app/api/health

# GHL Fields Discovery (should return field list)
curl https://your-domain.vercel.app/api/ghl/fields

# FirmCheck Ping (if FirmCheck API key is set)
curl https://your-domain.vercel.app/api/aml/ping
```

---

## 📝 Quick Checklist

- [ ] Set all environment variables in Vercel
- [ ] Deploy to Vercel
- [ ] Configure Stripe webhook with Vercel URL
- [ ] Update `NEXT_PUBLIC_SITE_URL` with actual domain
- [ ] Test health check endpoint
- [ ] Test quote flow end-to-end
- [ ] (Optional) Set up FirmCheck webhook later

---

## 🆘 Troubleshooting

**If health check fails:**
- Check all environment variables are set
- Verify API keys are correct
- Check Vercel logs for errors

**If Stripe webhook fails:**
- Verify webhook URL is correct (must be `https://`)
- Check webhook secret matches
- Test with Stripe CLI: `stripe listen --forward-to http://localhost:3000/api/stripe/webhook`

**If GHL updates fail:**
- Verify `GHL_API_KEY` and `GHL_LOCATION_ID` are correct
- Check GHL API permissions
- Review Vercel logs

---

**Ready to deploy!** 🚀

