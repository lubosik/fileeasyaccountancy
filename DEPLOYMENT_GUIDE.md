# Deployment Guide - GHL & FirmCheck Integration

**Date:** 2025-12-07  
**Status:** Production Ready

---

## Pre-Deployment Checklist

### 1. Environment Variables
- [ ] All environment variables set in Vercel
- [ ] GHL API key and location ID configured
- [ ] FirmCheck API key configured
- [ ] Stripe keys configured
- [ ] Feature flags enabled
- [ ] Site URL configured

### 2. GHL Configuration
- [ ] Custom fields created in GHL:
  - [ ] `AML Status` (Text)
  - [ ] `FirmCheck Client ID` (Text)
  - [ ] `AML Risk Level` (Text, optional)
  - [ ] `AML Determination ID` (Text, optional)
- [ ] Field names match exactly (case-sensitive)
- [ ] GHL API key has correct permissions

### 3. FirmCheck Configuration
- [ ] FirmCheck API key configured
- [ ] FirmCheck webhook URL configured:
  - `https://your-domain.com/api/aml/webhook`
- [ ] Webhook events enabled:
  - AML determination status updates

### 4. Stripe Configuration
- [ ] Stripe webhook configured:
  - `https://your-domain.com/api/stripe/webhook`
- [ ] Webhook events enabled:
  - `checkout.session.completed`
- [ ] Webhook secret configured

### 5. Testing
- [ ] Health check endpoint tested
- [ ] GHL field discovery tested
- [ ] Progress updates tested
- [ ] FirmCheck client creation tested
- [ ] AML status polling tested
- [ ] Webhooks tested
- [ ] End-to-end flow tested

---

## Deployment Steps

### Step 1: Set Environment Variables in Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all required variables (see below)
3. Ensure variables are set for Production, Preview, and Development

**Required Variables:**
```bash
# GHL Configuration
GHL_API_KEY=your_production_ghl_api_key
GHL_LOCATION_ID=your_production_location_id
GHL_API_BASE=https://services.leadconnectorhq.com
GHL_API_VERSION=2021-07-28
GHL_CF_DISCOVERY_BASE=https://rest.gohighlevel.com
GHL_CF_DISCOVERY_PATH=/v1/custom-fields/

# FirmCheck Configuration
FIRMCHECK_API_KEY=your_production_firmcheck_api_key
FIRMCHECK_API_BASE=https://api.firmcheck.com
FIRMCHECK_ACCEPT_VERSION=1.0.0

# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Feature Flags
FE_GHL_AML_ENABLED=true
NEXT_PUBLIC_FE_GHL_AML_ENABLED=true

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
DEPOSIT_AMOUNT_PENCE=10000
```

### Step 2: Configure GHL Custom Fields

1. Log into GoHighLevel
2. Go to Settings → Custom Fields
3. Create the following fields (if not already created):

**Required Fields:**
- **AML Status** (Text)
- **FirmCheck Client ID** (Text)

**Optional Fields:**
- **AML Risk Level** (Text)
- **AML Determination ID** (Text)

**Important:** Field names must match exactly (case-sensitive) for automatic mapping.

### Step 3: Configure FirmCheck Webhook

1. Log into FirmCheck Dashboard
2. Go to Settings → Webhooks
3. Add webhook URL:
   ```
   https://your-domain.com/api/aml/webhook
   ```
4. Enable events:
   - AML determination status updates
5. Save webhook configuration

### Step 4: Configure Stripe Webhook

1. Log into Stripe Dashboard
2. Go to Developers → Webhooks
3. Add endpoint:
   ```
   https://your-domain.com/api/stripe/webhook
   ```
4. Select events:
   - `checkout.session.completed`
5. Copy webhook signing secret
6. Add to Vercel environment variables as `STRIPE_WEBHOOK_SECRET`

### Step 5: Deploy to Vercel

1. Push code to main branch
2. Vercel will automatically deploy
3. Monitor deployment logs for errors
4. Verify build succeeds

### Step 6: Post-Deployment Verification

1. **Health Check:**
   ```bash
   curl https://your-domain.com/api/health
   ```
   Expected: `200 OK` with all services healthy

2. **GHL Field Discovery:**
   ```bash
   curl https://your-domain.com/api/ghl/fields
   ```
   Expected: List of custom fields

3. **FirmCheck Ping:**
   ```bash
   curl https://your-domain.com/api/aml/ping
   ```
   Expected: FirmCheck connectivity confirmed

4. **Test End-to-End Flow:**
   - Complete a test quote
   - Verify GHL updates at each step
   - Complete deposit payment
   - Verify FirmCheck client creation
   - Verify AML status display

---

## Monitoring

### Health Check Monitoring

**Recommended:** Set up uptime monitoring for `/api/health`

**Services:**
- UptimeRobot
- Pingdom
- Vercel Analytics

**Configuration:**
- URL: `https://your-domain.com/api/health`
- Interval: 5 minutes
- Alert: On `503` status

### Error Monitoring

**Recommended:** Set up error tracking

**Services:**
- Sentry
- LogRocket
- Vercel Logs

**Configuration:**
- Monitor API route errors
- Track retry failures
- Alert on persistent errors

### Performance Monitoring

**Recommended:** Monitor API response times

**Metrics to Track:**
- Field discovery time
- Progress update time
- AML status poll time
- Webhook processing time

---

## Rollback Plan

### If Issues Occur

1. **Disable Feature Flag:**
   ```bash
   FE_GHL_AML_ENABLED=false
   NEXT_PUBLIC_FE_GHL_AML_ENABLED=false
   ```
   This will disable AML integration but keep GHL progress updates.

2. **Revert Deployment:**
   - Go to Vercel Dashboard → Deployments
   - Find last working deployment
   - Click "..." → Promote to Production

3. **Check Logs:**
   - Vercel Dashboard → Logs
   - Check for error messages
   - Verify environment variables

---

## Troubleshooting

### Issue: Health Check Failing

**Symptoms:**
- `/api/health` returns `503`
- Services show as unhealthy

**Solutions:**
1. Verify environment variables are set
2. Check API keys are valid
3. Verify network connectivity
4. Check service status (GHL, FirmCheck, Stripe)

### Issue: Field Mapping Failing

**Symptoms:**
- Progress updates succeed but custom fields not updated
- Field mapping errors in logs

**Solutions:**
1. Verify custom fields exist in GHL
2. Check field names match exactly
3. Test `/api/ghl/fields` endpoint
4. Verify field discovery is working

### Issue: FirmCheck Client Not Created

**Symptoms:**
- Deposit paid but no FirmCheck client
- AML status not displaying

**Solutions:**
1. Check `FE_GHL_AML_ENABLED=true`
2. Verify FirmCheck API key is valid
3. Check webhook is triggering
4. Review logs for errors

### Issue: Webhooks Not Working

**Symptoms:**
- Stripe/FirmCheck webhooks not received
- Status not updating

**Solutions:**
1. Verify webhook URLs are correct
2. Check webhook secrets are set
3. Verify webhook events are enabled
4. Test webhook endpoints manually

---

## Maintenance

### Regular Tasks

**Weekly:**
- Review health check status
- Check error logs
- Monitor performance metrics

**Monthly:**
- Review custom field mappings
- Verify webhook configurations
- Check API key expiration dates

**Quarterly:**
- Review retry success rates
- Optimize polling intervals
- Update documentation

### Updates

**When Updating:**
1. Test in preview environment first
2. Verify all endpoints still work
3. Check health check passes
4. Monitor after deployment

---

## Support

### Resources
- `INTEGRATION_TESTING.md` - Testing guide
- `GHL_AML_INTEGRATION_SUMMARY.md` - Complete summary
- `PHASE_*_COMPLETE.md` - Phase documentation

### Getting Help
1. Check troubleshooting section
2. Review error logs
3. Test individual endpoints
4. Verify environment variables

---

**Status:** ✅ Deployment Guide Complete

