# PHASE 0 — CTA Inventory & Plan

## Git Branch Created
✅ `feature/onboarding-flow`

## CTAs to Replace (Navigate to `/quote/`)

### Core Navigation Components
1. **Header** (`src/components/layout/Header.tsx`)
   - Line 110: "Schedule a Call" button → `/quote/`

2. **Mobile CTA Bar** (`src/components/ui/MobileCTABar.tsx`)
   - Line 54: "Book" button → `/quote/`

3. **Sticky CTA** (`src/components/ui/CTASticky.tsx`)
   - Line 41: "Book Now" button → `/quote/`

### Hero Sections
4. **Hero Tagline** (`src/components/sections/HeroTagline.tsx`)
   - Line 27: "Schedule a Free 20-min Consult" → `/quote/`

5. **Homepage Hero** (`src/app/page.tsx`)
   - Line 187: "Book Free Consultation" → `/quote/`
   - Line 550: "Book Free Consultation" → `/quote/`

### Pricing Pages
6. **Pricing Page** (`src/app/pricing/page.tsx`)
   - Line 102: "Book Free Consultation" → `/quote/?source=pricing`
   - Line 226: "Get a Quote" → `/quote/?source=pricing`
   - Line 303: "Book Free Consultation" → `/quote/?source=pricing`

7. **Construction Packages** (`src/app/construction-packages/page.tsx`)
   - Multiple CTAs → `/quote/?source=construction-packages`

### Service Pages
8. **Services Page** (`src/app/services/page.tsx`)
   - Line 120: "Schedule Free Consultation" → `/quote/?source=services`

9. **Category Page Content** (`src/components/CategoryPageContent.tsx`)
   - Line 87: "Schedule Free Consultation" → `/quote/?source=category`

10. **Programmatic CTA** (`src/components/programmatic/ProgrammaticCTA.tsx`)
    - Line 33: "Book Free Construction Accounting Consultation" → `/quote/?source=programmatic`

### Resource Pages
11. **Resources Page** (`src/app/resources/page.tsx`)
    - Line 186: "Book Free Construction Accounting Consultation" → `/quote/?source=resources`

12. **Resource Article** (`src/app/resources/[slug]/page.tsx`)
    - Line 200: "Book Free Construction Accounting Consultation" → `/quote/?source=resource-article`

### Article CTAs
13. **Article CTA** (`src/components/ArticleCTA.tsx`)
    - Line 17: Default `buttonHref` → `/quote/?source=article`
    - Line 18: Default `calendlyHref` → `/quote/?source=article`

### Tools & Calculators
14. **Cash Flow Health Check** (`src/app/tools/cash-flow-health-check/page.tsx`)
    - Line 294: "Book Free Consultation" → `/quote/?source=cash-flow-tool`

15. **IR35 Calculator** (`src/app/ir35-calculator/page.tsx`)
    - Multiple CTAs → `/quote/?source=ir35-calculator`

### Campaign Pages
16. **VAT Bookkeeping Audit** (`src/app/campaigns/vat-bookkeeping-audit/page.tsx`)
    - Multiple CTAs → `/quote/?source=vat-audit`

17. **Profit Optimization Blueprint** (`src/app/campaigns/profit-optimization-blueprint/page.tsx`)
    - Multiple CTAs → `/quote/?source=profit-optimization`

18. **Self Assessment Rescue** (`src/app/campaigns/self-assessment-rescue/page.tsx`)
    - Multiple CTAs → `/quote/?source=self-assessment`

### Service-Specific Pages
19. **CIS Compliance** (`src/app/services/construction/cis-compliance/page.tsx`)
    - Multiple CTAs → `/quote/?source=cis-compliance`

20. **Business Advisory** (`src/app/services/business-advisory/page.tsx`)
    - CTAs → `/quote/?source=business-advisory`

21. **Virtual CFO** (`src/app/services/virtual-cfo/page.tsx`)
    - CTAs → `/quote/?source=virtual-cfo`

### Forms
22. **Signup Form** (`src/components/forms/SignupForm.tsx`)
    - Line 218: "book a free consultation" link → `/quote/?source=signup-form`

### Other Components
23. **Announcement Banner** (`src/components/sections/AnnouncementBanner.tsx`)
    - Default `ctaHref` → `/quote/?source=announcement`

24. **Mobile Sticky Bar** (`src/components/ui/MobileStickyBar.tsx`)
    - Line 26: "Book" action → `/quote/?source=mobile-sticky`

## Files to Create/Modify

### New Files (Onboarding Flow)
- `src/app/quote/page.tsx` - Main quote flow route
- `src/lib/onboarding/types.ts` - TypeScript types for onboarding data
- `src/lib/analytics.ts` - GA4 + Meta Pixel helpers
- `src/lib/ghl.ts` - GoHighLevel API client
- `src/app/api/ghl/upsert-contact/route.ts` - GHL contact endpoint
- `src/app/api/ghl/tag/route.ts` - GHL tagging endpoint
- `src/app/api/ghl/note/route.ts` - GHL notes endpoint
- `src/app/api/ghl/task/route.ts` - GHL tasks endpoint
- `.env.local` - Environment variables (placeholders)

### Modified Files (CTA Updates)
- All 24+ files listed above (update hrefs from Calendly to `/quote/`)

## Routes to Create
- `/quote/` - Main onboarding flow (multi-step wizard)

## Analytics Events to Add
- `fe_quote_start_cta` - When user clicks any CTA to start quote
- `generate_lead` - GA4 event on Step 1 completion
- `Lead` - Meta Pixel event on Step 1 completion
- `onboarding_step` - GA4 event for each step
- `select_item` - GA4 event when package selected
- `add_payment_info` - GA4 event when payment preference selected
- `purchase` - GA4 event on commitment choice (value: 0)
- `sign_up` - GA4 event on confirmation

## Summary
- **31 files** contain Calendly CTAs that need updating
- **24+ components** need href changes
- **1 new route** to create (`/quote/`)
- **8+ new files** to create (lib, API routes, types)
- **Preserve existing styles** - only change hrefs, not button styles

## Next Steps (Phase 1)
1. Create `/quote/` route scaffold
2. Build minimal wizard shell with progress bar
3. Wire initial analytics events

