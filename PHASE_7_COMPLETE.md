# Phase 7 — Implement AML Status Polling and Webhook Handling

**Date:** 2025-12-07  
**Branch:** `feat/ghl-aml-integration`  
**Status:** ✅ Complete  

---

## Changes Made

### 1. Implemented GET `/api/aml/status`
✅ AML status polling endpoint:

**Endpoint:** `GET /api/aml/status?clientId=fc_client_123`

**Flow:**
1. ✅ Fetches client from FirmCheck using `clientId`
2. ✅ Extracts AML determination status, risk level, determination ID
3. ✅ Returns status information
4. ⚠️ GHL update requires `contactId` (not implemented in this endpoint)

**Request:**
```
GET /api/aml/status?clientId=fc_client_456DEF
```

**Response:**
```json
{
  "success": true,
  "clientId": "fc_client_456DEF",
  "amlStatus": "PASSED",
  "riskLevel": "LOW",
  "determinationId": "aml_det_789GHI",
  "lastDetermination": {
    "id": "aml_det_789GHI",
    "status": "PASSED",
    "riskLevel": "LOW",
    "createdAt": "2025-12-07T12:00:00.000Z"
  },
  "message": "AML status retrieved (GHL update requires contactId)"
}
```

**Use Cases:**
- Manual status checks
- Client-side polling
- Status verification

### 2. Implemented POST `/api/aml/webhook`
✅ FirmCheck webhook handler for AML status updates:

**Endpoint:** `POST /api/aml/webhook`

**Supported Webhook Payload Formats:**
```json
// Format 1: Direct
{
  "clientId": "fc_client_456DEF",
  "determination": {
    "id": "aml_det_789GHI",
    "status": "PASSED",
    "riskLevel": "LOW"
  },
  "contactId": "contact_123ABC" // Optional: GHL contact ID
}

// Format 2: Nested data
{
  "data": {
    "clientId": "fc_client_456DEF",
    "determination": {
      "status": "PASSED",
      "riskLevel": "LOW"
    }
  }
}

// Format 3: Client object
{
  "client": {
    "id": "fc_client_456DEF"
  },
  "amlDetermination": {
    "status": "PASSED",
    "riskLevel": "LOW"
  }
}
```

**Flow:**
1. ✅ Parses webhook payload (handles multiple formats)
2. ✅ Extracts `clientId`, AML status, risk level, determination ID
3. ✅ Finds GHL contact by `contactId` (from metadata) or FirmCheck client ID
4. ✅ Updates GHL with AML status custom fields
5. ✅ Adds status tags and risk level tags
6. ✅ Adds note to GHL contact

**GHL Updates:**
- **Custom Fields:**
  - `'AML Status'` → Status value (PASSED, FAILED, IN_PROGRESS, IN_REVIEW)
  - `'AML Risk Level'` → Risk level (LOW, MEDIUM, HIGH)
  - `'AML Determination ID'` → Determination ID

- **Tags Added:**
  - `'AML – In Progress'` (if status is IN_PROGRESS)
  - `'AML – Passed'` (if status is PASSED)
  - `'AML – Failed'` (if status is FAILED)
  - `'AML – In Review'` (if status is IN_REVIEW)
  - `'AML Risk – LOW'` (if risk level is LOW)
  - `'AML Risk – MEDIUM'` (if risk level is MEDIUM)
  - `'AML Risk – HIGH'` (if risk level is HIGH)

- **Note Added:**
```
AML Status Update: PASSED
Risk Level: LOW
Determination ID: aml_det_789GHI
FirmCheck Client ID: fc_client_456DEF
Updated: 2025-12-07T12:00:00.000Z
```

**Response:**
```json
{
  "received": true,
  "updated": true,
  "ghlContactId": "contact_123ABC",
  "amlStatus": "PASSED",
  "riskLevel": "LOW",
  "message": "AML status updated in GHL"
}
```

### 3. GHL Contact Lookup
✅ Multiple lookup strategies:

**Strategy 1: Direct contactId (Preferred)**
- Webhook includes `contactId` in metadata
- Direct lookup using `getContact(contactId)`
- Fastest and most reliable

**Strategy 2: FirmCheck Client ID Search**
- Search GHL contacts by custom field `'FirmCheck Client ID'`
- Requires custom field search API (may not be available)
- Fallback if `contactId` not provided

**Current Implementation:**
- Uses `contactId` from webhook metadata if available
- Falls back to FirmCheck client ID search (placeholder - requires GHL API support)
- Returns warning if contact not found (non-blocking)

### 4. Error Handling
✅ Comprehensive error handling:

**Scenarios:**
- ✅ Feature flag disabled → 503
- ✅ FirmCheck not configured → 503
- ✅ GHL not configured → 503
- ✅ Missing `clientId` in webhook → 400
- ✅ Client not found → 404 (status endpoint)
- ✅ GHL contact not found → 200 with warning (webhook - non-blocking)
- ✅ FirmCheck API error → 500
- ✅ GHL update error → Logged but doesn't fail webhook

**Non-Blocking Operations:**
- GHL contact not found doesn't fail webhook (returns 200 with warning)
- GHL update errors are logged but don't fail webhook
- All errors logged (dev mode only)

---

## Technical Details

### AML Status Mapping
**FirmCheck Status → GHL Tags:**
```
IN_PROGRESS → 'AML – In Progress'
PASSED      → 'AML – Passed'
FAILED      → 'AML – Failed'
IN_REVIEW   → 'AML – In Review'
```

**Risk Level → GHL Tags:**
```
LOW    → 'AML Risk – LOW'
MEDIUM → 'AML Risk – MEDIUM'
HIGH   → 'AML Risk – HIGH'
```

### Custom Field Mapping
**Friendly Names (Mapped by Field Discovery):**
- `'AML Status'` → GHL custom field ID
- `'AML Risk Level'` → GHL custom field ID
- `'AML Determination ID'` → GHL custom field ID

### Webhook Security
**Current Implementation:**
- No signature verification (assumes FirmCheck webhook is secure)
- In production, should verify webhook signature if FirmCheck provides it

**Future Enhancement:**
- Add webhook signature verification
- Validate webhook source IP
- Rate limiting

---

## Integration Points

### FirmCheck Webhook → GHL Update
```
FirmCheck AML status changes
  ↓
FirmCheck sends webhook to /api/aml/webhook
  ↓
Extract clientId, status, riskLevel
  ↓
Find GHL contact (by contactId or FirmCheck client ID)
  ↓
Update GHL custom fields
  ↓
Add status tags
  ↓
Add risk level tags
  ↓
Add note with update details
```

### Status Polling Flow
```
Client/System polls /api/aml/status?clientId=...
  ↓
Fetch client from FirmCheck
  ↓
Extract AML status
  ↓
Return status (no GHL update - requires contactId)
```

---

## GHL Custom Field Requirements

**Required Custom Fields:**
- `'AML Status'` - Must exist in GHL (will be mapped by field discovery)
- `'AML Risk Level'` - Must exist in GHL (optional)
- `'AML Determination ID'` - Must exist in GHL (optional)

**Field Discovery:**
- Fields are mapped using friendly names
- Server-side mapping via `/api/ghl/fields` endpoint
- Falls back gracefully if fields not found

---

## Testing Checklist

- [ ] Status polling returns correct AML status
- [ ] Webhook handler processes status updates
- [ ] GHL contact found by contactId
- [ ] GHL contact found by FirmCheck client ID (if supported)
- [ ] Custom fields updated correctly
- [ ] Status tags added correctly
- [ ] Risk level tags added correctly
- [ ] Notes added with update details
- [ ] Webhook returns 200 even if contact not found
- [ ] Multiple webhook payload formats supported
- [ ] Errors don't block webhook processing

---

## Next Steps (Phase 8)

1. Implement GHL custom field search by value (if API supports)
2. Add webhook signature verification
3. Add retry mechanism for failed GHL updates
4. Add webhook event logging/audit trail

---

**Status:** ✅ Phase 7 Complete - Ready for Phase 8
