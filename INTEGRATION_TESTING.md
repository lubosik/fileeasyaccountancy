# Integration Testing Guide

**Date:** 2025-12-07  
**Branch:** `feat/ghl-aml-integration`  
**Status:** ✅ Complete

---

## Overview

This document provides a comprehensive testing guide for the GHL Custom Field Discovery and FirmCheck AML integration.

---

## Prerequisites

### Environment Variables Required
```bash
# GHL Configuration
GHL_API_KEY=your_ghl_api_key
GHL_LOCATION_ID=your_location_id
GHL_API_BASE=https://services.leadconnectorhq.com
GHL_API_VERSION=2021-07-28
GHL_CF_DISCOVERY_BASE=https://rest.gohighlevel.com
GHL_CF_DISCOVERY_PATH=/v1/custom-fields/

# FirmCheck Configuration
FIRMCHECK_API_KEY=your_firmcheck_api_key
FIRMCHECK_API_BASE=https://api.firmcheck.com
FIRMCHECK_ACCEPT_VERSION=1.0.0

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Feature Flags
FE_GHL_AML_ENABLED=true
NEXT_PUBLIC_FE_GHL_AML_ENABLED=true

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DEPOSIT_AMOUNT_PENCE=10000
```

---

## Manual Testing Checklist

### 1. Health Check Endpoint
**Endpoint:** `GET /api/health`

**Test Cases:**
- [ ] Returns 200 when all services healthy
- [ ] Returns 503 when GHL unhealthy
- [ ] Returns 503 when FirmCheck unhealthy (if enabled)
- [ ] Returns 503 when Stripe unhealthy
- [ ] Returns correct status for each service
- [ ] Includes error messages for failed services

**Test Command:**
```bash
curl http://localhost:3000/api/health
```

**Expected Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-12-07T12:00:00.000Z",
  "services": {
    "ghl": { "configured": true, "healthy": true },
    "firmcheck": { "configured": true, "enabled": true, "healthy": true },
    "stripe": { "configured": true, "healthy": true }
  }
}
```

### 2. GHL Custom Field Discovery
**Endpoint:** `GET /api/ghl/fields`

**Test Cases:**
- [ ] Returns list of custom fields
- [ ] Fields include required fields (AML Status, FirmCheck Client ID, etc.)
- [ ] Returns 503 if GHL not configured
- [ ] Fields are normalized (consistent format)

**Test Command:**
```bash
curl http://localhost:3000/api/ghl/fields
```

**Expected Response:**
```json
[
  {
    "id": "field_123",
    "name": "AML Status",
    "fieldType": "TEXT",
    "position": 1
  },
  {
    "id": "field_456",
    "name": "FirmCheck Client ID",
    "fieldType": "TEXT",
    "position": 2
  }
]
```

### 3. GHL Progress Update
**Endpoint:** `POST /api/ghl/progress`

**Test Cases:**
- [ ] Updates contact with custom fields
- [ ] Maps friendly field names to GHL field IDs
- [ ] Returns contactId on success
- [ ] Validates email format
- [ ] Validates required fields
- [ ] Handles field mapping errors gracefully
- [ ] Retries on transient failures

**Test Command:**
```bash
curl -X POST http://localhost:3000/api/ghl/progress \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "Test",
    "lastName": "User",
    "tags": ["Test Tag"],
    "custom": {
      "AML Status": "IN_PROGRESS",
      "FirmCheck Client ID": "fc_client_123"
    }
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "contactId": "contact_123",
  "message": "Contact updated in GHL"
}
```

### 4. FirmCheck Ping
**Endpoint:** `GET /api/aml/ping`

**Test Cases:**
- [ ] Returns 200 when FirmCheck accessible
- [ ] Returns firm information
- [ ] Returns 503 if feature flag disabled
- [ ] Returns 503 if FirmCheck not configured

**Test Command:**
```bash
curl http://localhost:3000/api/aml/ping
```

**Expected Response:**
```json
{
  "success": true,
  "configured": true,
  "firm": {
    "id": "firm_123",
    "name": "File Easy Accountancy"
  },
  "message": "FirmCheck API is accessible"
}
```

### 5. FirmCheck Client Creation
**Endpoint:** `POST /api/aml/create-client`

**Test Cases:**
- [ ] Creates FirmCheck client from GHL contact
- [ ] Maps GHL contact to FirmCheck entity (organisation/sole_trader/individual)
- [ ] Starts AML determination
- [ ] Updates GHL with FirmCheck client ID
- [ ] Adds tags to GHL contact
- [ ] Returns 503 if feature flag disabled
- [ ] Validates contactId format
- [ ] Retries on transient failures

**Test Command:**
```bash
curl -X POST http://localhost:3000/api/aml/create-client \
  -H "Content-Type: application/json" \
  -d '{
    "contactId": "contact_123",
    "email": "test@example.com"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "firmCheckClientId": "fc_client_456",
  "amlDeterminationId": "aml_det_789",
  "entityType": "organisation",
  "message": "FirmCheck client created and AML determination started"
}
```

### 6. AML Status Polling
**Endpoint:** `GET /api/aml/status?clientId=...`

**Test Cases:**
- [ ] Returns AML status for client
- [ ] Includes risk level if available
- [ ] Includes determination ID if available
- [ ] Returns 404 if client not found
- [ ] Validates clientId format
- [ ] Returns 503 if feature flag disabled

**Test Command:**
```bash
curl "http://localhost:3000/api/aml/status?clientId=fc_client_456"
```

**Expected Response:**
```json
{
  "success": true,
  "clientId": "fc_client_456",
  "status": "IN_PROGRESS",
  "riskLevel": "LOW",
  "determinationId": "aml_det_789",
  "message": "AML status retrieved successfully"
}
```

### 7. Get FirmCheck Client ID
**Endpoint:** `GET /api/aml/get-client-id?contactId=...`

**Test Cases:**
- [ ] Returns FirmCheck client ID from GHL contact
- [ ] Returns 404 if client ID not found
- [ ] Validates contactId format
- [ ] Returns 503 if feature flag disabled

**Test Command:**
```bash
curl "http://localhost:3000/api/aml/get-client-id?contactId=contact_123"
```

**Expected Response:**
```json
{
  "success": true,
  "contactId": "contact_123",
  "firmCheckClientId": "fc_client_456",
  "message": "FirmCheck client ID retrieved successfully"
}
```

### 8. AML Webhook Handler
**Endpoint:** `POST /api/aml/webhook`

**Test Cases:**
- [ ] Updates GHL with AML status
- [ ] Adds appropriate tags based on status
- [ ] Updates custom fields
- [ ] Adds note to contact
- [ ] Finds contact by FirmCheck client ID
- [ ] Returns 200 even if GHL update fails (after retries)
- [ ] Validates webhook payload

**Test Command:**
```bash
curl -X POST http://localhost:3000/api/aml/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "fc_client_456",
    "amlStatus": "PASSED",
    "riskLevel": "LOW",
    "determinationId": "aml_det_789"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "AML status updated in GHL"
}
```

### 9. Stripe Webhook Integration
**Endpoint:** `POST /api/stripe/webhook`

**Test Cases:**
- [ ] Processes deposit payment
- [ ] Updates GHL with deposit info
- [ ] Triggers FirmCheck client creation (if enabled)
- [ ] Verifies webhook signature
- [ ] Handles retries on transient failures

**Test Command:**
```bash
# Use Stripe CLI to forward webhooks
stripe listen --forward-to http://localhost:3000/api/stripe/webhook
```

### 10. Client-Side AML Status Display
**Component:** `<AMLStatusDisplay />`

**Test Cases:**
- [ ] Displays on Step 6 after deposit payment
- [ ] Displays on Step 8 confirmation page
- [ ] Polls status every 10 seconds
- [ ] Stops polling when status is PASSED
- [ ] Stops polling when status is FAILED
- [ ] Shows correct status colors
- [ ] Shows correct status icons
- [ ] Handles missing FirmCheck client ID gracefully
- [ ] Handles network errors gracefully
- [ ] Shows loading state initially

**Test Steps:**
1. Complete deposit payment
2. Navigate to Step 6
3. Verify AML status display appears
4. Verify status updates in real-time
5. Navigate to Step 8
6. Verify AML status display appears
7. Verify final status is shown

---

## End-to-End Flow Testing

### Complete Onboarding Flow with AML

**Test Scenario:**
1. User starts quote flow
2. Completes Step 1 (name, email, phone)
3. Selects Monthly Support
4. Completes Step 2B (pre-qualification)
5. Views package recommendation (Step 3)
6. Selects package (Step 4)
7. Selects payment style (Step 5)
8. Completes deposit payment
9. Completes Step 6 (onboarding details)
10. Views AML status on Step 6
11. Completes Step 7 (commitment)
12. Views confirmation page (Step 8)
13. Views final AML status on Step 8

**Verification Points:**
- [ ] GHL contact created at Step 1
- [ ] Progress updated at each step
- [ ] Deposit payment processed
- [ ] FirmCheck client created after deposit
- [ ] AML determination started
- [ ] AML status displayed on Step 6
- [ ] AML status displayed on Step 8
- [ ] AML status updates in real-time
- [ ] GHL updated with AML status via webhook

---

## Error Scenarios

### 1. GHL API Failure
**Test:** Disconnect GHL API or use invalid API key

**Expected Behavior:**
- [ ] Health check returns 503
- [ ] Progress updates retry 3 times
- [ ] Error messages are user-friendly
- [ ] No sensitive data in error messages

### 2. FirmCheck API Failure
**Test:** Disconnect FirmCheck API or use invalid API key

**Expected Behavior:**
- [ ] Health check returns 503
- [ ] Client creation retries 3 times
- [ ] Error messages are user-friendly
- [ ] No sensitive data in error messages

### 3. Missing Custom Fields
**Test:** Remove required custom fields from GHL

**Expected Behavior:**
- [ ] Field mapping fails gracefully
- [ ] Contact updated without custom fields
- [ ] Warning logged (dev mode only)
- [ ] User experience not blocked

### 4. Network Timeout
**Test:** Simulate network timeout

**Expected Behavior:**
- [ ] Retry mechanism activates
- [ ] Exponential backoff applied
- [ ] Error handled gracefully
- [ ] User experience not blocked

### 5. Invalid Webhook Payload
**Test:** Send invalid webhook payload

**Expected Behavior:**
- [ ] Webhook returns 400
- [ ] Error logged (dev mode only)
- [ ] No GHL updates performed
- [ ] No sensitive data in response

---

## Performance Testing

### 1. Field Discovery Performance
**Test:** Measure time to fetch custom fields

**Expected:**
- [ ] First request: < 2 seconds
- [ ] Cached requests: < 100ms
- [ ] No memory leaks

### 2. Progress Update Performance
**Test:** Measure time to update GHL contact

**Expected:**
- [ ] Update time: < 1 second
- [ ] Retry time: < 3 seconds (worst case)
- [ ] No blocking operations

### 3. AML Status Polling Performance
**Test:** Measure polling overhead

**Expected:**
- [ ] Poll interval: 10 seconds
- [ ] Poll request time: < 500ms
- [ ] No performance degradation over time

---

## Security Testing

### 1. API Key Exposure
**Test:** Check for API keys in client-side code

**Expected:**
- [ ] No API keys in client components
- [ ] No API keys in browser console
- [ ] All API calls go through server routes

### 2. Input Validation
**Test:** Send malicious input to API endpoints

**Expected:**
- [ ] All inputs validated
- [ ] SQL injection prevented
- [ ] XSS prevented
- [ ] Input sanitized

### 3. Rate Limiting
**Test:** Send rapid requests to API endpoints

**Expected:**
- [ ] Rate limits enforced
- [ ] 429 status returned when limit exceeded
- [ ] Retry-After header included

### 4. Webhook Security
**Test:** Send unverified webhook

**Expected:**
- [ ] Webhook signature verified
- [ ] Invalid signatures rejected
- [ ] 400 status returned

---

## Monitoring and Logging

### 1. Error Logging
**Test:** Trigger errors and check logs

**Expected:**
- [ ] Errors logged server-side
- [ ] No PII in production logs
- [ ] Stack traces in dev mode only

### 2. Performance Monitoring
**Test:** Monitor API response times

**Expected:**
- [ ] Response times logged
- [ ] Slow requests identified
- [ ] Performance metrics available

### 3. Health Check Monitoring
**Test:** Monitor health check endpoint

**Expected:**
- [ ] Health status tracked
- [ ] Alerts on unhealthy status
- [ ] Service status visible

---

## Test Data

### Test GHL Contact
```json
{
  "email": "test@example.com",
  "firstName": "Test",
  "lastName": "User",
  "phone": "+441234567890",
  "customFields": {
    "Business Type": "Limited Company",
    "Company Number": "12345678",
    "Trading Name": "Test Company Ltd"
  }
}
```

### Test FirmCheck Client
```json
{
  "id": "fc_client_test_123",
  "status": "PROSPECT",
  "entity": {
    "type": "organisation",
    "name": "Test Company Ltd",
    "companyNumber": "12345678"
  }
}
```

---

## Troubleshooting

### Issue: AML Status Not Displaying
**Possible Causes:**
1. Feature flag not enabled
2. FirmCheck client not created
3. Contact ID not available
4. Network error

**Solutions:**
1. Check `NEXT_PUBLIC_FE_GHL_AML_ENABLED=true`
2. Verify FirmCheck client creation in logs
3. Check `leadStore.contactId` is set
4. Check browser console for errors

### Issue: Field Mapping Fails
**Possible Causes:**
1. Custom field not found in GHL
2. Field name mismatch
3. Field discovery failed

**Solutions:**
1. Verify custom field exists in GHL
2. Check field name matches exactly
3. Check `/api/ghl/fields` endpoint

### Issue: Retry Mechanism Not Working
**Possible Causes:**
1. Retry logic not triggered
2. Max attempts reached
3. Network error persists

**Solutions:**
1. Check retry logs (dev mode)
2. Verify retry configuration
3. Check network connectivity

---

## Next Steps

1. Add automated integration tests
2. Add E2E tests with Playwright
3. Add performance benchmarks
4. Add security scanning
5. Add monitoring dashboards

---

**Status:** ✅ Integration Testing Guide Complete

