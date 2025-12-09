# Phase 3 — Build Runtime Field-Mapping Registry

**Date:** 2025-12-07  
**Branch:** `feat/ghl-aml-integration`  
**Status:** ✅ Complete

---

## Changes Made

### 1. Created `/lib/ghlFieldMap.ts`
✅ Runtime field mapping registry:

**Features:**
- ✅ `getFieldMap()` - Async function that calls `/api/ghl/fields` once (memoized)
- ✅ Builds dictionary mapping friendly names → field IDs
- ✅ Fuzzy matching for field names (handles variations)
- ✅ Returns typed `FieldMappingError` if required fields missing
- ✅ Caches result per server instance

**Field Mapping:**
- **Required Fields:** 23 fields that must exist in GHL
  - Engagement Type, Business Type, Turnover Band, etc.
  - AML Decision Status, FirmCheck Client ID, etc.
- **Optional Fields:** 13 fields (nice to have)
  - Website URL, One-Off fields, UID Reset fields, etc.

**Fuzzy Matching:**
- Exact match (case-insensitive)
- Normalized match (whitespace, punctuation)
- Partial match (contains)

### 2. Created `/admin/debug/fields` Page
✅ Admin debug page for QA:

**Features:**
- ✅ Displays resolved mapping table
- ✅ Shows missing required/optional fields
- ✅ Lists all discovered fields from GHL
- ✅ Color-coded status (Mapped/Missing/Optional)
- ✅ Guarded by `NODE_ENV !== 'production'`

**UI Sections:**
1. **Summary:** Total mapped, missing required, missing optional
2. **Field Mapping Table:** Friendly name → Field ID → Type → Status
3. **All Discovered Fields:** Complete list from GHL

### 3. Error Handling
✅ Typed error with missing fields:

**FieldMappingError:**
- Lists all missing required fields
- Non-fatal: returns partial result even if some fields missing
- Clear error messages for quick GHL field fixes

**Example Error:**
```
FieldMappingError: Missing required GHL custom fields: Engagement Type, AML Decision Status
```

### 4. Helper Functions
✅ Utility functions:

- `getFieldId(friendlyName)` - Get field ID by friendly name
- `clearFieldMapCache()` - Clear cache (for testing)

---

## Field Mapping Structure

### Required Fields (23)
```typescript
'Engagement Type' → 'cf_123ABC'
'Business Type' → 'cf_456DEF'
'Turnover Band' → 'cf_789GHI'
// ... etc
'AML Decision Status' → 'cf_AML123'
'FirmCheck Client ID' → 'cf_FC456'
```

### Optional Fields (13)
```typescript
'Website URL' → 'cf_WEB123' (if exists)
'One-Off Job Type' → 'cf_OO123' (if exists)
// ... etc
```

---

## Usage Example

```typescript
import { getFieldMap, getFieldId } from '@/lib/ghlFieldMap';

// Get full mapping
const fieldMap = await getFieldMap();
console.log(fieldMap.mapping['Engagement Type']); // 'cf_123ABC'

// Get single field ID
const engagementTypeId = await getFieldId('Engagement Type');
console.log(engagementTypeId); // 'cf_123ABC'
```

---

## Admin Debug Page

**URL:** `/admin/debug/fields`

**Access:**
- ✅ Available in development mode
- ❌ Blocked in production (shows "Access Denied")

**Displays:**
- Mapping summary (mapped/missing counts)
- Field mapping table (friendly name → ID → Type → Status)
- All discovered fields from GHL

---

## Error Scenarios

### Missing Required Field
```
FieldMappingError: Missing required GHL custom fields: Engagement Type
```

**Action:** Create "Engagement Type" field in GHL, then refresh page.

### Missing Optional Field
```
Warning: Optional field "Website URL" not found in GHL
```

**Action:** Optional - can be ignored or created later.

### API Failure
```
Error: Failed to build field mapping: Failed to fetch custom fields: 503
```

**Action:** Check GHL API configuration and discovery endpoint.

---

## Next Steps (Phase 4)

1. Implement POST `/api/ghl/progress` to upsert contact
2. Use field mapping to translate friendly names to field IDs
3. Map custom fields using discovered IDs
4. Add tags and custom fields to GHL contact

---

**Status:** ✅ Phase 3 Complete - Ready for Phase 4
