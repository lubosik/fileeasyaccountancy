# PHASE Δ2 — Remove Deprecated Options & Triggers Report

## Summary
All deprecated option handlers, event tracking, and tag emissions have been removed or commented out. Deprecated types are marked as unused but kept for backward compatibility.

---

## CHANGES MADE

### 1. Monthly Step 7 — Commitment Page

**Removed:**
- ❌ `email-quote` option UI (already removed in Phase Δ1)
- ❌ `email-quote` tag emission from GHL
- ✅ Kept `book-call` handler (still redirects to Calendly)
- ✅ Kept `set-me-up` handler (proceeds to confirmation)

**Files Modified:**
- `src/app/quote/page.tsx` - Updated analytics tracking to skip for `book-call` (redirects before tracking)
- `src/lib/ghl.ts` - Commented out `'email-quote': 'Quote Requested'` tag emission, added conditional check

**Code Changes:**
```typescript
// OLD:
tags.push(commitmentTags[step7.commitmentOption] || 'Quote Requested');

// NEW:
if (step7.commitmentOption === 'set-me-up' || step7.commitmentOption === 'book-call') {
  tags.push(commitmentTags[step7.commitmentOption] || 'Needs Call');
}
```

---

### 2. One-Off Step O2 — Proceed Options

**Removed:**
- ❌ `book-call` option UI (already removed in Phase Δ1)
- ❌ `email-guide` option UI (already removed in Phase Δ1)
- ❌ `book-call` tag emission from GHL
- ❌ `email-guide` tag emission from GHL
- ❌ `book-call` task creation logic

**Files Modified:**
- `src/app/quote/page.tsx` - Removed `book-call` redirect logic, added analytics tracking for `callback` only
- `src/lib/ghl.ts` - Commented out `'book-call'` and `'email-guide'` tag emissions, updated task creation

**Code Changes:**
```typescript
// OLD:
if (data.proceedOption === 'book-call') {
  window.location.href = 'https://calendly.com/fileeasy/consultation';
  return;
} else if (data.proceedOption === 'callback') {
  setCurrentStep('O3' as QuoteStep);
}

// NEW:
if (data.proceedOption === 'callback') {
  setCurrentStep('O3' as QuoteStep);
  // Track step completion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'fe_quote_step_complete', {
      step: 'O2',
      event_category: 'Quote',
      event_label: 'Step O2 Complete - Callback Requested',
      proceed_option: data.proceedOption
    });
  }
}
```

---

### 3. GHL Tag Emissions

**Monthly Flow Tags:**
- ✅ `'set-me-up': 'Ready to Onboard'` - ACTIVE
- ✅ `'book-call': 'Needs Call'` - ACTIVE
- ❌ `'email-quote': 'Quote Requested'` - COMMENTED OUT (unused in v2)

**One-Off Flow Tags:**
- ❌ `'book-call': 'One-Off – Call Booked'` - COMMENTED OUT (unused in v2)
- ✅ `'callback': 'One-Off – Callback Requested'` - ACTIVE
- ❌ `'email-guide': 'One-Off – Email Quote Requested'` - COMMENTED OUT (unused in v2)

**File:** `src/lib/ghl.ts`

**Code Changes:**
```typescript
// Monthly commitment tags
const commitmentTags: Record<string, string> = {
  'set-me-up': 'Ready to Onboard',
  'book-call': 'Needs Call',
  // 'email-quote': 'Quote Requested' // unused in v2 - option removed
};
// Only emit tags for active options
if (step7.commitmentOption === 'set-me-up' || step7.commitmentOption === 'book-call') {
  tags.push(commitmentTags[step7.commitmentOption] || 'Needs Call');
}

// One-Off proceed tags
const proceedTags: Record<string, string> = {
  // 'book-call': 'One-Off – Call Booked', // unused in v2 - option removed
  'callback': 'One-Off – Callback Requested',
  // 'email-guide': 'One-Off – Email Quote Requested' // unused in v2 - option removed
};
// Only emit tags for active options
if (stepO2.proceedOption === 'callback') {
  tags.push(proceedTags[stepO2.proceedOption] || 'One-Off – Callback Requested');
}
```

---

### 4. Task Creation Logic

**Monthly Flow:**
- ✅ `book-call` - Creates task with 'medium' priority
- ✅ `set-me-up` - Creates task with 'high' priority
- ❌ `email-quote` - No task creation (option removed)

**One-Off Flow:**
- ❌ `book-call` - Removed from task creation logic
- ✅ `callback` - Creates task with 'medium' priority, includes callback time
- ❌ `email-guide` - No task creation (option removed)

**File:** `src/lib/ghl.ts`

**Code Changes:**
```typescript
// OLD:
if (stepO2?.proceedOption === 'book-call' || stepO2?.proceedOption === 'callback') {
  await createTaskForContact(contactId, {
    title: 'Follow up on one-off quote request',
    body: `...`,
    priority: stepO2.proceedOption === 'book-call' ? 'high' : 'medium',
  });
}

// NEW:
// Only callback option remains in v2
if (stepO2?.proceedOption === 'callback') {
  await createTaskForContact(contactId, {
    title: 'Follow up on one-off quote request',
    body: `...\nCallback Time: ${stepO2.callbackTime || 'Not specified'}`,
    priority: 'medium',
  });
}
```

---

### 5. Type Definitions

**Deprecated Types (Marked as Unused):**
- `CommitmentOption` - `'email-quote'` marked as unused in v2
- `OneOffProceedOption` - `'book-call'` and `'email-guide'` marked as unused in v2

**File:** `src/app/quote/types.ts`

**Code Changes:**
```typescript
// Step 7 - Commitment Option
// Note: 'email-quote' is unused in v2 (option removed)
export type CommitmentOption = 'set-me-up' | 'book-call' | 'email-quote';

// Note: 'book-call' and 'email-guide' are unused in v2 (options removed)
export type OneOffProceedOption = 'book-call' | 'callback' | 'email-guide';
```

**Rationale:** Types are kept for backward compatibility with existing data, but clearly marked as unused in v2.

---

## SUMMARY

### Files Modified: 3
1. `src/app/quote/page.tsx` - Removed deprecated option handlers, updated analytics
2. `src/lib/ghl.ts` - Commented out unused tag emissions, updated task creation
3. `src/app/quote/types.ts` - Marked deprecated types as unused

### Handlers Removed: 2
- `email-quote` handler (Monthly Step 7)
- `book-call` handler (One-Off Step O2)

### Tag Emissions Removed: 3
- `'Quote Requested'` (from email-quote)
- `'One-Off – Call Booked'` (from book-call)
- `'One-Off – Email Quote Requested'` (from email-guide)

### Analytics Events Updated: 2
- Step 7: Only tracks `set-me-up` (book-call redirects before tracking)
- Step O2: Only tracks `callback` option

### No Linting Errors
All changes compile successfully.

---

## NEXT PHASE

Ready for **PHASE Δ3 — Payment step updates** (already completed in Phase Δ1, but will verify).

