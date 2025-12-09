# Phase 4 — Implement GHL Contact Upsert at Every Step

**Date:** 2025-12-07  
**Branch:** `feat/ghl-aml-integration`  
**Status:** ✅ Complete

---

## Changes Made

### 1. Implemented POST `/api/ghl/progress`
✅ Full implementation of progress update endpoint:

**Features:**
- ✅ Accepts: `{ email, phone?, firstName?, lastName?, tags?, custom? }`
- ✅ Uses `getFieldMap()` to translate friendly names to field IDs
- ✅ Maps custom fields using discovered IDs from Phase 3
- ✅ Calls `upsertContact()` from `/lib/ghl.ts` (LeadConnector API)
- ✅ Returns `{ success: true, contactId }` for client persistence

**Request Format:**
```json
{
  "email": "user@example.com",
  "phone": "+44 7700 900000",
  "firstName": "John",
  "lastName": "Smith",
  "tags": ["Lead – Started Quote"],
  "custom": {
    "Engagement Type": "Monthly",
    "Business Type": "Limited Company",
    "Turnover Band": "£250k–£1m"
  }
}
```

**Response Format:**
```json
{
  "success": true,
  "contactId": "contact_123ABC",
  "message": "Contact updated in GHL"
}
```

### 2. Field Mapping Integration
✅ `mapCustomFields()` function:

**Features:**
- ✅ Translates friendly names (e.g., "Engagement Type") → field IDs (e.g., "cf_123ABC")
- ✅ Uses `getFieldMap()` from Phase 3
- ✅ Handles array values (joins with comma)
- ✅ Converts all values to strings (GHL requirement)
- ✅ Graceful degradation: continues without custom fields if mapping fails

**Example:**
```typescript
// Input (friendly names)
custom: {
  "Engagement Type": "Monthly",
  "Business Type": "Limited Company"
}

// Output (field IDs)
customFields: [
  { field: "cf_123ABC", value: "Monthly" },
  { field: "cf_456DEF", value: "Limited Company" }
]
```

### 3. Updated `upsertContact()` in `/lib/ghl.ts`
✅ Uses LeadConnector API:

**Endpoint:**
```
POST https://services.leadconnectorhq.com/contacts/upsert
Headers:
  Authorization: Bearer <GHL_API_KEY>
  Version: 2021-07-28
  Content-Type: application/json
```

**Payload:**
```json
{
  "email": "user@example.com",
  "phone": "+44 7700 900000",
  "firstName": "John",
  "lastName": "Smith",
  "locationId": "location_123",
  "tags": ["Lead – Started Quote"],
  "customFields": [
    { "field": "cf_123ABC", "value": "Monthly" },
    { "field": "cf_456DEF", "value": "Limited Company" }
  ]
}
```

**Response Handling:**
- Extracts `contactId` from various response formats
- Handles `result.contact?.id`, `result.id`, or `result.contactId`
- Throws error if contact ID not found

### 4. Error Handling
✅ Comprehensive error handling:

**Scenarios:**
- ✅ Missing GHL config → 503
- ✅ Missing email → 400
- ✅ Field mapping fails → Updates contact without custom fields (with warning)
- ✅ GHL API error → 500 with error message
- ✅ Network error → 500 with error message

**FieldMappingError Handling:**
- If field mapping fails, still updates contact
- Returns warning in response: `"warning": "Contact updated but some custom fields could not be mapped"`
- Includes `missingFields` array in response

---

## Technical Details

### Field Mapping Flow
```
Client sends: { custom: { "Engagement Type": "Monthly" } }
  ↓
mapCustomFields() calls getFieldMap()
  ↓
getFieldMap() fetches fields from GHL (memoized)
  ↓
Finds "Engagement Type" → "cf_123ABC"
  ↓
Returns: [{ field: "cf_123ABC", value: "Monthly" }]
  ↓
upsertContact() sends to GHL
```

### Upsert Logic
```
POST /api/ghl/progress
  ↓
Validate email (required)
  ↓
Map custom fields (friendly names → IDs)
  ↓
Build upsert payload
  ↓
Call GHL /contacts/upsert
  ↓
Extract contactId from response
  ↓
Return { success: true, contactId }
```

### Custom Fields Format
**GHL Expects:**
```json
{
  "customFields": [
    { "field": "cf_123ABC", "value": "Monthly" },
    { "field": "cf_456DEF", "value": "Limited Company" }
  ]
}
```

**Our Input (Friendly Names):**
```json
{
  "custom": {
    "Engagement Type": "Monthly",
    "Business Type": "Limited Company"
  }
}
```

**Translation:**
- "Engagement Type" → Lookup in field map → "cf_123ABC"
- "Business Type" → Lookup in field map → "cf_456DEF"

---

## Usage Example

### Client-Side Call
```typescript
const response = await fetch('/api/ghl/progress', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    phone: '+44 7700 900000',
    firstName: 'John',
    lastName: 'Smith',
    tags: ['Lead – Started Quote'],
    custom: {
      'Engagement Type': 'Monthly',
      'Business Type': 'Limited Company',
    },
  }),
});

const result = await response.json();
// { success: true, contactId: "contact_123ABC" }

// Persist contactId in localStorage/sessionStorage
localStorage.setItem('ghl_contact_id', result.contactId);
```

---

## Error Scenarios

### Missing Field Mapping
**Input:**
```json
{
  "custom": {
    "Unknown Field": "value"
  }
}
```

**Behavior:**
- Field not found in mapping
- Logs warning (dev mode only)
- Skips that field
- Continues with other fields

**Response:**
```json
{
  "success": true,
  "contactId": "contact_123ABC",
  "warning": "Some custom fields could not be mapped"
}
```

### Field Mapping Completely Fails
**Behavior:**
- `getFieldMap()` throws `FieldMappingError`
- Catches error and retries without custom fields
- Updates contact with basic info + tags only
- Returns warning in response

**Response:**
```json
{
  "success": true,
  "contactId": "contact_123ABC",
  "warning": "Contact updated but some custom fields could not be mapped",
  "missingFields": ["Engagement Type", "Business Type"]
}
```

---

## Next Steps (Phase 5)

1. Wire all onboarding steps to call `/api/ghl/progress`
2. Step 1: Call immediately after name/email/phone capture
3. Subsequent steps: Merge new answers and send
4. Add semantic tags per milestone

---

**Status:** ✅ Phase 4 Complete - Ready for Phase 5
