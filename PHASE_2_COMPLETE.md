# Phase 2 — Implement GHL Custom-Field Discovery Endpoint

**Date:** 2025-12-07  
**Branch:** `feat/ghl-aml-integration`  
**Status:** ✅ Complete

---

## Changes Made

### 1. Implemented GET `/api/ghl/fields`
✅ Full implementation of custom fields discovery:

**Features:**
- ✅ Calls GHL discovery endpoint: `GET https://rest.gohighlevel.com/v1/custom-fields/`
- ✅ Uses `Authorization: Bearer <GHL_API_KEY>` header
- ✅ Returns normalized array: `{ id, name, fieldType, options }[]`
- ✅ Handles various GHL response formats (array, wrapped in properties)
- ✅ Filters out invalid fields (missing id or name)

**Response Format:**
```json
{
  "fields": [
    {
      "id": "cf_123ABC",
      "name": "Engagement Type",
      "fieldType": "dropdown",
      "options": [
        { "id": "opt1", "label": "Monthly" },
        { "id": "opt2", "label": "One-Off" }
      ]
    }
  ],
  "cached": false,
  "count": 42
}
```

### 2. Added In-Memory Caching
✅ Created `/lib/ghlFieldsCache.ts`:

**Features:**
- ✅ 10-minute TTL per server instance
- ✅ Cache expires automatically
- ✅ Clears on server restart
- ✅ `getCachedFields()` - Get cached fields if valid
- ✅ `setCachedFields()` - Set cached fields
- ✅ `clearCache()` - Clear cache (for testing)

**Cache Behavior:**
- First request: Fetches from GHL, caches result
- Subsequent requests (within 10 min): Returns cached result
- After 10 minutes: Cache expires, fetches fresh data

### 3. Normalized Response Handling
✅ Handles various GHL response formats:

**Supported Formats:**
- Direct array: `[{ id, name, ... }]`
- Wrapped in `customFields`: `{ customFields: [...] }`
- Wrapped in `fields`: `{ fields: [...] }`
- Wrapped in `data`: `{ data: [...] }`
- Auto-detects first array property if structure unknown

**Normalization:**
- Maps `id` or `fieldId` → `id`
- Maps `name` or `label` → `name`
- Maps `fieldType` or `type` → `fieldType`
- Maps `options` or `choices` → `options`
- Filters out fields missing `id` or `name`

### 4. Vercel Build Safety
✅ Never calls at build time:

- ✅ Export `dynamic = 'force-dynamic'`, `revalidate = 0`
- ✅ All API calls inside route handler only
- ✅ Returns 503 if envs missing (Vercel build-safe)
- ✅ No top-level side effects

### 5. Error Handling
✅ Comprehensive error handling:

- ✅ Returns 503 if `GHL_CF_DISCOVERY_BASE` or `GHL_API_KEY` missing
- ✅ Returns appropriate status codes for API errors
- ✅ Logs errors in development mode only
- ✅ Generic error messages (no PII leakage)

---

## Technical Details

### API Endpoint
```
GET /api/ghl/fields
Authorization: Bearer <GHL_API_KEY>
```

**GHL Discovery Endpoint:**
```
GET https://rest.gohighlevel.com/v1/custom-fields/
Authorization: Bearer <GHL_API_KEY>
```

### Cache Strategy
- **TTL:** 10 minutes (600,000 ms)
- **Storage:** In-memory (Map-like structure)
- **Scope:** Per server instance (clears on restart)
- **Invalidation:** Time-based (automatic expiry)

### Response Normalization
```typescript
{
  id: field.id || field.fieldId,
  name: field.name || field.label,
  fieldType: field.fieldType || field.type || 'text',
  options: field.options || field.choices
}
```

---

## Testing

### Manual Testing
1. Set `GHL_CF_DISCOVERY_BASE` and `GHL_API_KEY` in `.env.local`
2. Call `GET /api/ghl/fields`
3. Verify response contains normalized fields array
4. Call again immediately - should return cached result
5. Wait 10+ minutes - should fetch fresh data

### Expected Behavior
- ✅ First call: Fetches from GHL, returns `{ fields: [...], cached: false }`
- ✅ Second call (within 10 min): Returns `{ fields: [...], cached: true }`
- ✅ Missing envs: Returns `503 { error: "GHL custom-field discovery disabled" }`
- ✅ Invalid API key: Returns GHL API error status

---

## Next Steps (Phase 3)

1. Create `/lib/ghlFieldMap.ts` with `getFieldMap()` function
2. Call `/api/ghl/fields` once (memoized)
3. Build dictionary mapping friendly names → field IDs
4. Return typed error if required field missing
5. Add `/admin/debug/fields` page for QA

---

**Status:** ✅ Phase 2 Complete - Ready for Phase 3
