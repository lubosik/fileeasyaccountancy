# Phase 1 — Create Integration Scaffolding

**Date:** 2025-12-07  
**Branch:** `feat/ghl-aml-integration`  
**Status:** ✅ Complete

---

## Changes Made

### 1. Created `/lib/ghl.ts`
✅ Pure type definitions and client factory:

**Features:**
- ✅ No top-level side effects
- ✅ Client instantiation only inside functions
- ✅ Uses LeadConnector API (`services.leadconnectorhq.com`)
- ✅ Version header support (`2021-07-28`)
- ✅ Type-safe interfaces for all operations

**Functions:**
- `getGHLConfig()` - Get config from env vars (returns null if missing)
- `isGHLConfigured()` - Safe build-time check
- `createGHLClient()` - Factory function (no instantiation at module load)
- `upsertContact()` - Upsert contact by email/phone
- `getContact()` - Get contact by ID
- `addNote()` - Add note to contact
- `setTags()` - Set tags (append without wiping)

### 2. Created `/lib/firmcheck.ts`
✅ Pure type definitions and client factory:

**Features:**
- ✅ No top-level side effects
- ✅ Client instantiation only inside functions
- ✅ Feature flag check: `FE_GHL_AML_ENABLED`
- ✅ Type-safe interfaces for all operations

**Functions:**
- `getFirmCheckConfig()` - Get config from env vars (returns null if missing)
- `isFirmCheckConfigured()` - Safe build-time check
- `isFirmCheckAMLEnabled()` - Feature flag check
- `createFirmCheckClient()` - Factory function (no instantiation at module load)
- `getFirm()` - Get firm information (connectivity check)
- `createClient()` - Create FirmCheck client
- `getClient()` - Get client by ID
- `startAMLDetermination()` - Start AML determination

### 3. Created API Route Stubs
✅ All routes return 503 when envs missing (Vercel build-safe):

**Routes Created:**
1. **GET `/api/ghl/fields`**
   - Custom fields discovery endpoint
   - Returns 503 if `GHL_CF_DISCOVERY_BASE` or `GHL_API_KEY` missing

2. **POST `/api/ghl/progress`**
   - Progress update endpoint
   - Returns 503 if `GHL_API_KEY` or `GHL_LOCATION_ID` missing
   - Accepts: `{ email, phone?, firstName?, lastName?, tags?, custom? }`

3. **POST `/api/aml/create-client`**
   - Create FirmCheck client endpoint
   - Returns 503 if `FE_GHL_AML_ENABLED !== 'true'` or FirmCheck envs missing
   - Accepts: `{ contactId?, email? }`

4. **GET `/api/aml/status`**
   - Poll AML status endpoint
   - Returns 503 if feature flag disabled or FirmCheck envs missing
   - Query param: `clientId`

5. **POST `/api/aml/webhook`**
   - FirmCheck webhook handler (optional)
   - Returns 503 if feature flag disabled or FirmCheck envs missing

6. **GET `/api/aml/ping`**
   - Connectivity check endpoint
   - Returns 503 if feature flag disabled or FirmCheck envs missing

**All Routes:**
- ✅ Export `dynamic = 'force-dynamic'`, `revalidate = 0`
- ✅ Return 503 JSON when envs missing
- ✅ No external SDK imports at top level
- ✅ Type-safe request/response interfaces

### 4. Added Test Placeholders
✅ Created test files in `/__tests__/api/`:

- `ghl-fields.test.ts` - Tests for fields discovery endpoint
- `ghl-progress.test.ts` - Tests for progress update endpoint
- `aml-create-client.test.ts` - Tests for create client endpoint

**Test Structure:**
- Placeholder tests that verify 503 responses when envs missing
- Ready for implementation in later phases

---

## Vercel Build Safety

### ✅ No Build-Time API Calls
- All client factories are functions (not instantiated at module load)
- All API routes check env vars and return 503 if missing
- No external SDK imports at top level

### ✅ Runtime Guards
- All functions check `getGHLConfig()` / `getFirmCheckConfig()` before use
- Feature flag check: `FE_GHL_AML_ENABLED === 'true'`
- Graceful 503 responses when services not configured

### ✅ Type Safety
- All request/response interfaces defined
- TypeScript types for all operations
- No `any` types in public interfaces

---

## Environment Variables Required

### GHL / LeadConnector
```bash
GHL_API_KEY=
GHL_LOCATION_ID=
GHL_API_BASE=https://services.leadconnectorhq.com
GHL_API_VERSION=2021-07-28
```

### GHL Custom Field Discovery
```bash
GHL_CF_DISCOVERY_BASE=https://rest.gohighlevel.com
GHL_CF_DISCOVERY_PATH=/v1/custom-fields/
```

### FirmCheck
```bash
FIRMCHECK_API_KEY=
FIRMCHECK_API_BASE=https://api.firmcheck.com
FIRMCHECK_ACCEPT_VERSION=1.0.0
```

### Feature Flag
```bash
FE_GHL_AML_ENABLED=true
```

---

## Next Steps (Phase 2)

1. Implement GET `/api/ghl/fields` to fetch custom fields from GHL
2. Add in-memory caching (10 minutes)
3. Return normalized array: `{ id, name, fieldType, options }[]`

---

**Status:** ✅ Phase 1 Complete - Ready for Phase 2
