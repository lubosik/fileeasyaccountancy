# Phase 6 — Implement FirmCheck Client Creation After Deposit Payment

**Date:** 2025-12-07  
**Branch:** `feat/ghl-aml-integration`  
**Status:** ✅ Complete  

---

## Changes Made

### 1. Implemented POST `/api/aml/create-client`
✅ Full implementation of FirmCheck client creation endpoint:

**Flow:**
1. ✅ Fetches contact data from GHL using `contactId`
2. ✅ Maps GHL contact to FirmCheck entity format (based on business type)
3. ✅ Creates FirmCheck client with status `'PROSPECT'`
4. ✅ Starts AML determination automatically
5. ✅ Stores FirmCheck `clientId` in GHL custom field
6. ✅ Updates GHL with tags and notes

**Request Format:**
```json
{
  "contactId": "contact_123ABC",
  "email": "user@example.com" // Optional, contactId preferred
}
```

**Response Format:**
```json
{
  "success": true,
  "firmCheckClientId": "fc_client_456DEF",
  "amlDeterminationId": "aml_det_789GHI",
  "entityType": "organisation",
  "message": "FirmCheck client created and AML determination started"
}
```

### 2. Entity Mapping Logic
✅ Maps GHL contact data to FirmCheck entity format:

**Organisation Entity:**
- Trigger: `businessType` contains "Limited Company" OR `companyNumber` exists
- Fields:
  - `type: 'organisation'`
  - `name`: Company Name or Trading Name
  - `companyNumber`: Company registration number (if available)
  - `registeredAddress`: Parsed from business address

**Sole Trader Entity:**
- Trigger: `businessType` contains "Sole Trader" OR `tradingName` exists
- Fields:
  - `type: 'sole_trader'`
  - `tradingName`: Trading name
  - `firstName`, `lastName`: From GHL contact
  - `email`, `phone`: From GHL contact
  - `address`: Parsed from business address

**Individual Entity (Default):**
- Trigger: None of the above
- Fields:
  - `type: 'individual'`
  - `firstName`, `lastName`: From GHL contact
  - `email`, `phone`: From GHL contact
  - `address`: Parsed from business address

**Address Parsing:**
- Assumes format: `"line1, line2, city, postcode, country"`
- Defaults country to `'GB'` if not provided
- Handles missing optional fields gracefully

### 3. GHL Custom Field Mapping
✅ Uses friendly field names that will be mapped by `/api/ghl/progress`:

**Custom Fields Updated:**
- `'FirmCheck Client ID'` → FirmCheck client ID (friendly name, mapped server-side)

**Tags Added:**
- `'FirmCheck Client Created'` (always)
- `'AML Determination Started'` (if AML determination started successfully)

**Note Added:**
```
FirmCheck client created: fc_client_456DEF
AML Determination: Started (aml_det_789GHI)
Entity Type: organisation
Created: 2025-12-07T12:00:00.000Z
```

### 4. Wired into Stripe Webhook
✅ Automatically triggers after successful deposit payment:

**Location:** `/api/stripe/webhook` (checkout.session.completed event)

**Flow:**
1. Deposit payment confirmed
2. Contact upserted to GHL with deposit info
3. If `FE_GHL_AML_ENABLED === 'true'` and `contactId` available:
   - Calls `/api/aml/create-client` with `contactId` (non-blocking)
   - Uses internal fetch (no external webhook dependency)
   - Errors are logged but don't fail webhook

**Implementation:**
```typescript
if (process.env.FE_GHL_AML_ENABLED === 'true' && ghlResult.contactId) {
  fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/aml/create-client`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contactId: ghlResult.contactId,
      email,
    }),
  }).catch((error) => {
    // Non-blocking - log but don't fail webhook
  });
}
```

### 5. Error Handling
✅ Comprehensive error handling:

**Scenarios:**
- ✅ Feature flag disabled → 503
- ✅ FirmCheck not configured → 503
- ✅ GHL not configured → 503
- ✅ Missing contactId/email → 400
- ✅ Contact not found → 404
- ✅ Entity mapping fails → 400
- ✅ FirmCheck API error → 500
- ✅ AML determination fails → Logged but doesn't block client creation

**Non-Blocking Operations:**
- AML determination failure doesn't prevent client creation
- GHL note addition failure doesn't prevent success response
- All errors logged (dev mode only)

---

## Technical Details

### Custom Field Lookup
**GHL Contact Structure:**
```typescript
{
  id: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  customFields?: Array<{ field: string; value: any }> | Record<string, any>;
}
```

**Field Lookup Logic:**
- Handles both array and object formats for `customFields`
- Searches by field ID (contains search key) or field name (contains search key)
- Case-insensitive matching

### FirmCheck Client Creation
**Request:**
```typescript
{
  status: 'PROSPECT',
  entity: {
    type: 'organisation' | 'sole_trader' | 'individual',
    // ... entity-specific fields
  },
  notes: 'Created from File Easy onboarding. GHL Contact ID: contact_123ABC'
}
```

**Response:**
```typescript
{
  id: 'fc_client_456DEF',
  status: 'PROSPECT',
  entity: { ... },
  amlDeterminationStatus?: 'IN_PROGRESS' | 'PASSED' | 'FAILED' | 'IN_REVIEW',
  // ...
}
```

### AML Determination
**Request:**
```typescript
{
  clientId: 'fc_client_456DEF'
}
```

**Response:**
```typescript
{
  id: 'aml_det_789GHI',
  clientId: 'fc_client_456DEF',
  status: 'IN_PROGRESS',
  riskLevel?: 'LOW' | 'MEDIUM' | 'HIGH',
  // ...
}
```

---

## Integration Points

### Stripe Webhook → FirmCheck
```
Stripe checkout.session.completed
  ↓
Webhook handler processes payment
  ↓
Upserts contact to GHL with deposit info
  ↓
If FE_GHL_AML_ENABLED === 'true':
  ↓
Calls /api/aml/create-client (non-blocking)
  ↓
Fetches contact from GHL
  ↓
Maps to FirmCheck entity
  ↓
Creates FirmCheck client
  ↓
Starts AML determination
  ↓
Updates GHL with FirmCheck client ID
```

### GHL Custom Field Requirements
**Required Custom Field:**
- `'FirmCheck Client ID'` - Must exist in GHL (will be mapped by field discovery)

**Optional Custom Fields (for entity mapping):**
- `'Business Type'` - Used to determine entity type
- `'Company Name'` - Used for organisation/sole trader name
- `'Company Number'` - Used for organisation entity
- `'Trading Name'` - Used for sole trader entity
- `'Business Address'` - Used for address parsing

---

## Testing Checklist

- [ ] Deposit payment triggers FirmCheck client creation
- [ ] Limited Company maps to Organisation entity
- [ ] Sole Trader maps to Sole Trader entity
- [ ] Default maps to Individual entity
- [ ] Address parsing works correctly
- [ ] FirmCheck client ID stored in GHL
- [ ] Tags added to GHL contact
- [ ] Note added to GHL contact
- [ ] AML determination started automatically
- [ ] Errors don't block webhook processing
- [ ] Feature flag properly disables integration

---

## Next Steps (Phase 7)

1. Implement AML status polling endpoint (`/api/aml/status`)
2. Implement FirmCheck webhook handler (`/api/aml/webhook`)
3. Update GHL with AML status changes
4. Add AML status tags to GHL contact

---

**Status:** ✅ Phase 6 Complete - Ready for Phase 7
