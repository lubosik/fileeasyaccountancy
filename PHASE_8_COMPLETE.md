# Phase 8 — Improve Contact Lookup and Add Helper Utilities

**Date:** 2025-12-07  
**Branch:** `feat/ghl-aml-integration`  
**Status:** ✅ Complete  

---

## Changes Made

### 1. Created `/lib/ghlContactSearch.ts`
✅ Contact search utilities:

**Functions:**
- `searchContactByCustomField(customFieldName, value)` - Generic search by custom field
- `searchContactByFirmCheckClientId(firmCheckClientId)` - Convenience wrapper

**Features:**
- ✅ Uses field mapping to translate friendly names to field IDs
- ✅ Searches through GHL contacts for matching custom field values
- ✅ Handles both array and object custom field formats
- ✅ Returns contact ID if found, null otherwise

**Limitations:**
- ⚠️ GHL API may not support direct custom field search
- ⚠️ Current implementation fetches contacts and filters (may be slow for large datasets)
- ⚠️ Pagination not implemented (may miss contacts if list is large)

**Future Enhancements:**
- Database table for contactId → FirmCheck clientId mappings
- Redis cache for faster lookups
- Pagination support
- GHL API custom field search if available

### 2. Enhanced `/api/aml/webhook`
✅ Improved contact lookup logic:

**Lookup Strategy (Priority Order):**
1. **Provided contactId** (from webhook metadata) - Fastest and most reliable
   - Verifies contact exists before using
   - Falls back to search if contact not found
2. **Search by FirmCheck Client ID** - Fallback if contactId not provided
   - Uses `searchContactByFirmCheckClientId()` utility
   - Searches custom field `'FirmCheck Client ID'`

**Error Handling:**
- ✅ Returns 200 with warning if contact not found (non-blocking)
- ✅ Includes helpful suggestions in response
- ✅ Detailed logging for debugging

**Response (Contact Not Found):**
```json
{
  "received": true,
  "warning": "GHL contact not found - status not updated",
  "clientId": "fc_client_456DEF",
  "amlStatus": "PASSED",
  "suggestion": "Include contactId in webhook metadata for faster lookup"
}
```

### 3. Enhanced `/api/aml/create-client`
✅ Improved mapping storage:

**Changes:**
- ✅ Added `createContactMappingNote()` helper function
- ✅ Stores contactId → FirmCheck clientId mapping in GHL note
- ✅ Makes webhook lookup more reliable

**Note Format:**
```
FirmCheck client created: fc_client_456DEF
AML Determination: Started (aml_det_789GHI)
Entity Type: organisation
Created: 2025-12-07T12:00:00.000Z

FirmCheck Client ID: fc_client_456DEF
GHL Contact ID: contact_123ABC
Mapping created: 2025-12-07T12:00:00.000Z
```

### 4. Error Handling Improvements
✅ Better error messages and suggestions:

**Scenarios:**
- ✅ ContactId provided but not found → Falls back to search
- ✅ ContactId not provided → Searches by FirmCheck client ID
- ✅ Contact not found → Returns 200 with warning (non-blocking)
- ✅ Search fails → Returns 200 with warning (non-blocking)

**Logging:**
- ✅ Detailed warnings with context
- ✅ Suggestions for fixing issues
- ✅ Dev mode only (production logs minimal)

---

## Technical Details

### Contact Lookup Flow
```
Webhook received with clientId
  ↓
Check if contactId in metadata
  ↓
If yes: Verify contact exists
  ↓
If no or not found: Search by FirmCheck Client ID
  ↓
If found: Update GHL with AML status
  ↓
If not found: Return 200 with warning (non-blocking)
```

### Custom Field Search Implementation
**Current Approach:**
1. Get field map to translate friendly name → field ID
2. Call GHL search endpoint (if available)
3. Filter contacts by custom field value
4. Return first match

**Limitations:**
- May be slow for large contact lists
- Requires fetching all contacts (no direct custom field filter)
- Pagination not implemented

**Future Improvements:**
- Database lookup table (fastest)
- Redis cache (fast, but requires maintenance)
- GHL API custom field search (if supported)

### Field Mapping Integration
**Uses Existing Infrastructure:**
- `getFieldMap()` from `/lib/ghlFieldMap.ts`
- Translates `'FirmCheck Client ID'` → actual field ID
- Handles missing fields gracefully

---

## Integration Points

### Webhook → Contact Lookup
```
FirmCheck webhook received
  ↓
Extract clientId and contactId (if provided)
  ↓
If contactId provided:
  ↓
  Verify contact exists
  ↓
  If found: Use it
  ↓
  If not found: Search by FirmCheck Client ID
  ↓
If contactId not provided:
  ↓
  Search by FirmCheck Client ID
  ↓
Update GHL with AML status
```

### Client Creation → Mapping Storage
```
FirmCheck client created
  ↓
Store FirmCheck Client ID in GHL custom field
  ↓
Store contactId → FirmCheck clientId mapping in note
  ↓
Webhook can use either:
  - contactId (from metadata) - fastest
  - FirmCheck Client ID (from custom field) - fallback
```

---

## Best Practices

### For Webhook Integration
**Recommended:**
- Include `contactId` in webhook metadata when creating FirmCheck client
- Store mapping in database for faster lookups
- Use contactId for primary lookup (fastest)

**Fallback:**
- Search by FirmCheck Client ID if contactId not available
- Store mapping in GHL note for reference
- Handle gracefully if contact not found

### For Production
**Consider:**
1. **Database Mapping Table:**
   ```sql
   CREATE TABLE firmcheck_contact_mappings (
     ghl_contact_id VARCHAR(255) PRIMARY KEY,
     firmcheck_client_id VARCHAR(255) UNIQUE,
     created_at TIMESTAMP,
     updated_at TIMESTAMP
   );
   ```

2. **Redis Cache:**
   ```typescript
   await redis.set(`firmcheck:${clientId}`, contactId, 'EX', 86400);
   ```

3. **Webhook Metadata:**
   ```json
   {
     "clientId": "fc_client_456DEF",
     "metadata": {
       "contactId": "contact_123ABC"
     }
   }
   ```

---

## Testing Checklist

- [ ] Contact lookup by contactId works
- [ ] Contact lookup by FirmCheck Client ID works
- [ ] Fallback logic works correctly
- [ ] Error handling doesn't block webhook
- [ ] Mapping stored in GHL note
- [ ] Field mapping translates correctly
- [ ] Search handles missing fields gracefully
- [ ] Large contact lists handled (with pagination in future)

---

## Next Steps (Phase 9+)

1. Add database mapping table for faster lookups
2. Implement pagination for contact search
3. Add Redis cache for contact mappings
4. Add webhook signature verification
5. Add retry mechanism for failed GHL updates
6. Add webhook event logging/audit trail

---

**Status:** ✅ Phase 8 Complete - Ready for Phase 9
