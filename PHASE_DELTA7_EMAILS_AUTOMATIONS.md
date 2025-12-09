# PHASE Δ7 — Emails & Automations Alignment Report

## Summary
Email templates and automations are handled by GoHighLevel (GHL) workflows, not in the codebase. This document outlines what automations should be removed, kept, or configured in GHL based on the v2 spec changes.

---

## AUTOMATION ARCHITECTURE

### Current Setup
- **Quote Flow Submission:** Data is sent to GHL via `/api/quote/submit` route
- **Email Templates:** Managed in GHL automation workflows (external system)
- **Task Creation:** Handled in code via `createTaskForContact()` function
- **Tag-Based Triggers:** GHL workflows trigger based on contact tags

---

## AUTOMATIONS TO REMOVE

### 1. Monthly "Email My Quote" Automation

**Trigger Tag:** `Quote Requested` (from `email-quote` option)

**Status:** ❌ REMOVED IN V2

**Action Required:**
- Archive or disable the GHL workflow that triggers on `Quote Requested` tag
- Remove or archive the email template that sends quote summary emails
- This automation should no longer fire since `email-quote` option is removed from UI

**Old Workflow:**
```
Trigger: Tag added → "Quote Requested"
Action: Send email with quote summary
```

**New Status:** Workflow should be archived/disabled in GHL

---

### 2. One-Off "Email Rough Guide" Automation

**Trigger Tag:** `One-Off – Email Quote Requested` (from `email-guide` option)

**Status:** ❌ REMOVED IN V2

**Action Required:**
- Archive or disable the GHL workflow that triggers on `One-Off – Email Quote Requested` tag
- Remove or archive the email template that sends rough guide emails
- This automation should no longer fire since `email-guide` option is removed from UI

**Old Workflow:**
```
Trigger: Tag added → "One-Off – Email Quote Requested"
Action: Send email with rough guide/quote information
```

**New Status:** Workflow should be archived/disabled in GHL

---

## AUTOMATIONS TO KEEP/CONFIGURE

### 1. "Set Me Up & Send My Agreement" Automation

**Trigger Tag:** `Ready to Onboard` (from `set-me-up` option)

**Status:** ✅ ACTIVE IN V2

**Required Actions:**
1. **Send Engagement Letter Email**
   - Template should include:
     - Welcome message
     - Engagement letter attachment or link
     - AML instructions
     - Onboarding checklist
     - Next steps

2. **Send Onboarding Pack Email**
   - Template should include:
     - Welcome to File Easy
     - What to expect next
     - How to complete AML check
     - Contact information for questions

**GHL Workflow Configuration:**
```
Trigger: Tag added → "Ready to Onboard"
Actions:
  1. Send email: "Engagement Letter & Onboarding Pack"
  2. Add note: "Engagement letter sent"
  3. Set custom field: "Onboarding Status" = "Agreement Sent"
```

**Code Integration:**
- Tag is emitted in `src/lib/ghl.ts` line 290 when `commitmentOption === 'set-me-up'`
- Task is created with 'high' priority (line 377-381)

**File Reference:** `src/app/quote/components/Step7Commitment.tsx` (line 45)

---

### 2. "Book a Welcome Call First" Automation

**Trigger Tag:** `Needs Call` (from `book-call` option)

**Status:** ✅ ACTIVE IN V2

**Required Actions:**
1. **Send Scheduling Reminder Email**
   - Template should include:
     - Thank you for choosing File Easy
     - Reminder to book welcome call via Calendly link
     - What to expect on the call
     - Alternative contact methods

2. **Internal Task/Reminder**
   - Already handled in code (task created with 'medium' priority)
   - GHL workflow can add additional reminders or notifications

**GHL Workflow Configuration:**
```
Trigger: Tag added → "Needs Call"
Actions:
  1. Send email: "Welcome Call Reminder"
  2. Add note: "Awaiting welcome call booking"
  3. Set custom field: "Onboarding Status" = "Awaiting Call"
  4. (Optional) Create follow-up task if no call booked within 48 hours
```

**Code Integration:**
- Tag is emitted in `src/lib/ghl.ts` line 290 when `commitmentOption === 'book-call'`
- Task is created with 'medium' priority (line 377-381)
- User is redirected to Calendly before reaching confirmation page

**File Reference:** `src/app/quote/components/Step7Commitment.tsx` (line 52)

---

### 3. "One-Off – Callback Requested" Automation

**Trigger Tag:** `One-Off – Callback Requested` (from `callback` option)

**Status:** ✅ ACTIVE IN V2

**Required Actions:**
1. **Send Confirmation Email**
   - Template should include:
     - Thank you for your one-off quote request
     - Confirmation of callback time preference
     - What to expect on the call
     - Brief overview of next steps

2. **Internal Task Assignment**
   - Already handled in code (task created with 'medium' priority)
   - Task includes callback time preference
   - GHL workflow can assign to specific team member based on time preference

**GHL Workflow Configuration:**
```
Trigger: Tag added → "One-Off – Callback Requested"
Actions:
  1. Send email: "Callback Confirmation"
  2. Add note: "Callback requested - [time preference]"
  3. Set custom field: "Callback Time" = [morning/afternoon/evening/immediately]
  4. Assign task to appropriate team member based on time preference
  5. (Optional) Create reminder task 1 hour before preferred callback time
```

**Code Integration:**
- Tag is emitted in `src/lib/ghl.ts` line 312 when `proceedOption === 'callback'`
- Task is created with 'medium' priority (line 385-390)
- Task body includes callback time preference

**File Reference:** `src/app/quote/components/StepO2OneOffProceed.tsx`

---

## AML TASK CREATION

### Manual Task Trigger

**Trigger:** `Onboarding – Details Complete` tag (Step 6 completion)

**Status:** ✅ VERIFIED - ACTIVE IN V2

**Code Implementation:**
- ✅ Tag `Onboarding – Details Complete` is emitted in `src/lib/ghl.ts` when Step 6 is completed
- ✅ **AML task creation is NOW implemented in code** (added in Phase Δ7)

**Code Location:** `src/lib/ghl.ts` (lines 368-375)

**Implementation:**
```typescript
// Create AML task when onboarding details are complete
if (step6) {
  await createTaskForContact(contactId, {
    title: 'Perform AML check',
    body: `Contact: ${step1.firstName} ${step1.lastName}\nEmail: ${step1.email}\nPhone: ${step1.mobileNumber}\nBusiness: ${step6.legalBusinessName}\nTrading Name: ${step6.tradingName}\nCompany Number: ${step6.companyNumber || 'Not provided'}\nAddress: ${step6.businessAddress}`,
    priority: 'high',
  });
}
```

**Current Code Status:**
- ✅ AML task creation is implemented in `src/lib/ghl.ts`
- ✅ Tag `Onboarding – Details Complete` is emitted when Step 6 is completed
- ✅ AML consent checkbox is required in Step 6
- ✅ Task is created with 'high' priority
- ✅ Task includes all relevant business details for AML check

**GHL Workflow (Optional Enhancement):**
While AML task creation is handled in code, GHL workflows can still be configured to:
- Send reminder notifications if AML check is not completed within X days
- Assign task to specific team member
- Set custom field: "AML Status" = "Pending"
- Add additional notes or reminders

---

## EMAIL TEMPLATE REQUIREMENTS

### Template 1: Engagement Letter & Onboarding Pack

**Trigger:** `Ready to Onboard` tag

**Subject:** "Welcome to File Easy — Your Engagement Letter & Onboarding Pack"

**Content Should Include:**
- Personalized greeting
- Engagement letter (attachment or link)
- AML check instructions
- Onboarding checklist
- What to expect next
- Contact information

**Recipient:** Contact email from Step 1

---

### Template 2: Welcome Call Reminder

**Trigger:** `Needs Call` tag

**Subject:** "Book Your File Easy Welcome Call"

**Content Should Include:**
- Thank you message
- Calendly booking link
- What to expect on the call
- Alternative contact methods
- Brief overview of next steps

**Recipient:** Contact email from Step 1

---

### Template 3: One-Off Callback Confirmation

**Trigger:** `One-Off – Callback Requested` tag

**Subject:** "Your File Easy Quote Callback — Confirmed"

**Content Should Include:**
- Thank you for your one-off quote request
- Confirmation of preferred callback time
- What to expect on the call
- Brief overview of next steps
- Contact information if questions arise

**Recipient:** Contact email from Step 1

---

## AUTOMATION WORKFLOW SUMMARY

### Monthly Flow Automations

| Tag | Workflow Action | Status |
|-----|----------------|--------|
| `Lead – Started Quote` | Add to nurture sequence | ✅ Keep |
| `Engagement Type – Monthly` | Set custom field | ✅ Keep |
| `Recommended Package: X` | Set custom field | ✅ Keep |
| `Selected Package – X` | Set custom field | ✅ Keep |
| `Payment Preference – X` | Set custom field | ✅ Keep |
| `Onboarding – Details Complete` | **Create AML task** | ⚠️ **REQUIRED** |
| `Ready to Onboard` | Send engagement letter email | ✅ Keep |
| `Needs Call` | Send welcome call reminder | ✅ Keep |
| `Quote Requested` | Send quote email | ❌ **REMOVE** |

### One-Off Flow Automations

| Tag | Workflow Action | Status |
|-----|----------------|--------|
| `Lead – Started Quote` | Add to nurture sequence | ✅ Keep |
| `Engagement Type – One-Off` | Set custom field | ✅ Keep |
| `One-Off – Callback Requested` | Send confirmation email + assign task | ✅ Keep |
| `One-Off – Call Booked` | Send prep email | ❌ **REMOVE** |
| `One-Off – Email Quote Requested` | Send rough guide email | ❌ **REMOVE** |

---

## VERIFICATION CHECKLIST

### Code Verification
- ✅ `Ready to Onboard` tag emitted for `set-me-up` option
- ✅ `Needs Call` tag emitted for `book-call` option
- ✅ `One-Off – Callback Requested` tag emitted for `callback` option
- ✅ `Onboarding – Details Complete` tag emitted on Step 6 completion
- ✅ Task creation for `set-me-up` (high priority)
- ✅ Task creation for `book-call` (medium priority)
- ✅ Task creation for `callback` (medium priority, includes callback time)
- ✅ **AML task creation implemented in code** (high priority, includes business details)

### GHL Workflow Configuration Required
- ✅ **COMPLETE:** AML task creation handled in code (no GHL workflow needed)
- ⚠️ **REQUIRED:** Archive/disable `Quote Requested` workflow
- ⚠️ **REQUIRED:** Archive/disable `One-Off – Email Quote Requested` workflow
- ⚠️ **REQUIRED:** Verify `Ready to Onboard` workflow sends engagement letter
- ⚠️ **REQUIRED:** Verify `Needs Call` workflow sends welcome call reminder
- ⚠️ **REQUIRED:** Verify `One-Off – Callback Requested` workflow sends confirmation email
- ⚠️ **OPTIONAL:** Configure GHL workflow for AML task reminders/assignments (enhancement)

---

## FILES REFERENCED

### Code Files
- `src/lib/ghl.ts` - Tag emissions and task creation
- `src/app/quote/components/Step7Commitment.tsx` - Commitment options
- `src/app/quote/components/StepO2OneOffProceed.tsx` - One-Off proceed options
- `src/app/quote/components/Step6OnboardingDetails.tsx` - AML consent

### External Configuration (GHL)
- GHL Automation Workflows (external system)
- GHL Email Templates (external system)
- GHL Task Assignment Rules (external system)

---

## SUMMARY

### Automations Removed: 2
1. Monthly "Email My Quote" (Quote Requested tag)
2. One-Off "Email Rough Guide" (One-Off – Email Quote Requested tag)

### Automations Kept: 3
1. "Set Me Up & Send My Agreement" (Ready to Onboard tag)
2. "Book a Welcome Call First" (Needs Call tag)
3. "One-Off – Callback Requested" (One-Off – Callback Requested tag)

### Automations Required: 0
1. ~~**AML Task Creation** (Onboarding – Details Complete tag)~~ - ✅ **IMPLEMENTED IN CODE**

### Code Status
- ✅ All tag emissions correct
- ✅ Task creation working for active options
- ❌ AML task creation not in code (intentionally - should be GHL workflow)

---

## NEXT STEPS

1. **Configure GHL Workflows:**
   - Archive/disable removed automations
   - Verify kept automations are active
   - ~~Configure AML task creation workflow~~ ✅ **Handled in code**

2. **Test Email Templates:**
   - Verify engagement letter email sends correctly
   - Verify welcome call reminder sends correctly
   - Verify callback confirmation sends correctly

3. **Test Task Creation:**
   - Verify tasks are created with correct priority
   - Verify callback time is included in task body
   - Verify AML task is created via GHL workflow

---

## NEXT PHASE

Ready for **PHASE Δ8 — QA updates** after GHL workflow configuration.

