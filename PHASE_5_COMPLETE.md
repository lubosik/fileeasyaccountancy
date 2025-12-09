# Phase 5 — Wire All Onboarding Steps to Call /api/ghl/progress

**Date:** 2025-12-07  
**Branch:** `feat/ghl-aml-integration`  
**Status:** ✅ Complete

---

## Changes Made

### 1. Created `/lib/ghlProgress.ts` Helper
✅ Client-side helper for calling `/api/ghl/progress`:

**Functions:**
- `updateGHLProgress(params)` - Calls `/api/ghl/progress` with friendly field names
- `getStoredContactId()` - Retrieves contactId from localStorage/sessionStorage
- `clearStoredContactId()` - Clears stored contactId

**Features:**
- ✅ Automatically persists `contactId` to localStorage and sessionStorage
- ✅ Handles errors gracefully (non-blocking)
- ✅ Returns typed response with success/error status

**Usage:**
```typescript
import { updateGHLProgress } from '@/lib/ghlProgress';

await updateGHLProgress({
  email: 'user@example.com',
  phone: '+44 7700 900000',
  firstName: 'John',
  lastName: 'Smith',
  tags: ['Lead – Started Quote'],
  custom: {
    'Engagement Type': 'Monthly',
    'Business Type': 'Limited Company',
  },
});
```

### 2. Updated All Step Components

#### Step 1 — Name, Email & Phone Capture
✅ **Changes:**
- Calls `updateGHLProgress()` immediately after form submission
- Stores `contactId` in leadStore and localStorage
- Assigns UID after contact is created
- Tags: `['Lead – Started Quote']`

**Custom Fields:**
- None (just creates/updates contact with name, email, phone)

#### Step 2 — Routing Question (Monthly vs One-Off)
✅ **Changes:**
- Calls `updateGHLProgress()` with engagement type
- Tags: `['Engagement Type – Monthly']` or `['Engagement Type – One-Off']`

**Custom Fields:**
```typescript
custom: {
  'Engagement Type': 'Monthly' | 'One-Off',
}
```

#### Step 2B — Pre-Qualification Questions (Monthly Only)
✅ **Changes:**
- Calls `updateGHLProgress()` with all pre-qual answers
- Tags: `['Monthly – Prequal Complete']`

**Custom Fields:**
```typescript
custom: {
  'Business Type': formData.businessType,
  'Turnover Band': formData.turnoverBand,
  'Team Structure': formData.teamStructure,
  'Current Support': formData.currentSupport,
  'Urgency': formData.urgency,
  'Priorities': formData.priorities.join(', '),
  'Budget Comfort': formData.budgetAlignment,
}
```

#### Step 3 — Package Recommendation
✅ **Changes:**
- Calls `updateGHLProgress()` when recommendation is computed
- Tags: `['Recommended – Gold']` (or Silver/Platinum)

**Custom Fields:**
```typescript
custom: {
  'Recommended Package': 'Gold',
}
```

#### Step 4 — Pricing Page
✅ **Changes:**
- Calls `updateGHLProgress()` when package is selected
- Tags: `['Selected Package – Gold']` (or Silver/Platinum)

**Custom Fields:**
```typescript
custom: {
  'Selected Package': 'Gold',
}
```

#### Step 5 — Payment Style (Monthly vs Annual)
✅ **Changes:**
- Calls `updateGHLProgress()` with payment preference
- Tags: `['Payment Preference – Monthly']` or `['Payment Preference – Annual']`

**Custom Fields:**
```typescript
custom: {
  'Payment Preference': 'Monthly' | 'Annual',
}
```

#### Step 6 — Onboarding Details (Pre-AML)
✅ **Changes:**
- Calls `updateGHLProgress()` with all company details
- Tags: `['Onboarding – Details Complete']`

**Custom Fields:**
```typescript
custom: {
  'Company Name': formData.legalBusinessName,
  'Trading Name': formData.tradingName,
  'Company Number': formData.companyNumber,
  'Business Address': formData.businessAddress,
  'Website': formData.website,
  'Your Role': formData.yourRole,
  'Other Directors/Shareholders': 'Yes' | 'No',
  'UK Residents': 'Yes' | 'No',
  'AML Consent': 'Yes' | 'No',
}
```

#### Step 7 — Commitment Page
✅ **Changes:**
- Calls `updateGHLProgress()` with commitment option
- Tags: `['Ready to Onboard']` or `['Needs Call']`

**Custom Fields:**
```typescript
custom: {
  'Commitment Option': 'set-me-up' | 'book-call',
}
```

#### Step O1 — One-Off Scoping Questions
✅ **Changes:**
- Calls `updateGHLProgress()` with all scoping answers
- Tags: `['One-Off – Scoping Complete']`

**Custom Fields:**
```typescript
custom: {
  'One-Off Job Type': jobTypes.join(', '),
  'One-Off Other Job Type': otherJobType,
  'One-Off Time Period': timePeriod,
  'One-Off Urgency': urgency,
  'One-Off Current Accountant': currentAccountant,
  'One-Off Budget Comfort': budgetComfort,
}
```

#### Step O2 — One-Off Callback Request
✅ **Changes:**
- Calls `updateGHLProgress()` with callback preference
- Tags: `['One-Off – Callback Requested']`

**Custom Fields:**
```typescript
custom: {
  'One-Off Preferred Contact Method': 'Callback',
  'One-Off Preferred Time': callbackTime,
}
```

---

## Tag Progression

**Monthly Flow:**
1. Step 1: `Lead – Started Quote`
2. Step 2: `Engagement Type – Monthly`
3. Step 2B: `Monthly – Prequal Complete`
4. Step 3: `Recommended – Gold` (or Silver/Platinum)
5. Step 4: `Selected Package – Gold` (or Silver/Platinum)
6. Step 5: `Payment Preference – Monthly` (or Annual)
7. Step 6: `Onboarding – Details Complete`
8. Step 7: `Ready to Onboard` or `Needs Call`

**One-Off Flow:**
1. Step 1: `Lead – Started Quote`
2. Step 2: `Engagement Type – One-Off`
3. Step O1: `One-Off – Scoping Complete`
4. Step O2: `One-Off – Callback Requested`

---

## Backward Compatibility

✅ **All steps still call `dispatchToGHL()` for backward compatibility:**
- New endpoint (`/api/ghl/progress`) is called first
- Legacy endpoint (`dispatchToGHL`) is called second
- Both are non-blocking (errors don't stop the flow)
- Legacy endpoint uses old field IDs (from `GHL_CUSTOM_FIELDS`)
- New endpoint uses friendly names (mapped server-side)

**Why keep both?**
- Ensures existing integrations continue to work
- Allows gradual migration
- Provides redundancy if one fails

---

## Contact ID Persistence

✅ **Step 1 stores contactId:**
- In `leadStore.contactId` (React state)
- In `localStorage.getItem('ghl_contact_id')` (persistent)
- In `sessionStorage.getItem('ghl_contact_id')` (session)

**Subsequent steps:**
- Retrieve contactId using `getStoredContactId()`
- Include it implicitly via email lookup in GHL
- Don't need to pass contactId explicitly (GHL upserts by email)

---

## Error Handling

✅ **All GHL calls are non-blocking:**
- Errors are logged (dev mode only)
- Flow continues even if GHL update fails
- User experience is not interrupted
- Failed updates can be retried later (via retry queue)

**Example:**
```typescript
try {
  await updateGHLProgress({ ... });
} catch (error) {
  // Non-blocking - flow continues
  if (process.env.NODE_ENV !== 'production') {
    console.error('GHL progress update error:', error);
  }
}
```

---

## Field Mapping Flow

```
Client (Step Component)
  ↓
updateGHLProgress({ custom: { 'Engagement Type': 'Monthly' } })
  ↓
POST /api/ghl/progress
  ↓
Server: mapCustomFields() uses getFieldMap()
  ↓
getFieldMap() fetches fields from GHL (memoized)
  ↓
Translates 'Engagement Type' → 'cf_123ABC'
  ↓
upsertContact() sends to GHL with field IDs
  ↓
GHL API: POST /contacts/upsert
```

---

## Testing Checklist

- [ ] Step 1 creates contact and stores contactId
- [ ] Step 2 updates Engagement Type
- [ ] Step 2B updates all pre-qual answers
- [ ] Step 3 updates Recommended Package
- [ ] Step 4 updates Selected Package
- [ ] Step 5 updates Payment Preference
- [ ] Step 6 updates onboarding details
- [ ] Step 7 updates Commitment Option
- [ ] Step O1 updates One-Off scoping
- [ ] Step O2 updates One-Off callback
- [ ] All tags are applied correctly
- [ ] ContactId persists across page refreshes
- [ ] Flow continues even if GHL update fails

---

**Status:** ✅ Phase 5 Complete - Ready for Phase 6
