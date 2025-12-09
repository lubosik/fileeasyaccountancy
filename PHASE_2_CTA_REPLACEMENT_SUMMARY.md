# PHASE 2 — CTA Replacement Summary

## ✅ Completed

All CTAs across the site have been updated to navigate to `/quote/` instead of Calendly.

### Files Updated (24+ components and pages)

#### Core Navigation Components
1. ✅ `src/components/layout/Header.tsx` → `/quote/?source=header`
2. ✅ `src/components/ui/MobileCTABar.tsx` → `/quote/?source=mobile-cta-bar`
3. ✅ `src/components/ui/CTASticky.tsx` → `/quote/?source=sticky-cta`
4. ✅ `src/components/sections/HeroTagline.tsx` → `/quote/?source=hero`
5. ✅ `src/components/ui/MobileStickyBar.tsx` → `/quote/?source=mobile-sticky`

#### Main Pages
6. ✅ `src/app/page.tsx` → `/quote/?source=homepage` (2 CTAs)
7. ✅ `src/app/pricing/page.tsx` → `/quote/?source=pricing` (4 CTAs)
8. ✅ `src/app/construction-packages/page.tsx` → `/quote/?source=construction-packages` (4 CTAs)
9. ✅ `src/app/services/page.tsx` → `/quote/?source=services`
10. ✅ `src/app/resources/page.tsx` → `/quote/?source=resources`
11. ✅ `src/app/resources/[slug]/page.tsx` → `/quote/?source=resource-article`

#### Tools & Calculators
12. ✅ `src/app/tools/cash-flow-health-check/page.tsx` → `/quote/?source=cash-flow-tool`
13. ✅ `src/app/ir35-calculator/page.tsx` → `/quote/?source=ir35-calculator` (3 CTAs)

#### Campaign Pages
14. ✅ `src/app/campaigns/vat-bookkeeping-audit/page.tsx` → `/quote/?source=vat-audit` (all CTAs)
15. ✅ `src/app/campaigns/profit-optimization-blueprint/page.tsx` → `/quote/?source=profit-optimization` (all CTAs)
16. ✅ `src/app/campaigns/self-assessment-rescue/page.tsx` → `/quote/?source=self-assessment` (all CTAs)

#### Service Pages
17. ✅ `src/app/services/construction/cis-compliance/page.tsx` → `/quote/?source=cis-compliance`

#### Reusable Components
18. ✅ `src/components/ArticleCTA.tsx` → `/quote/?source=article` (default hrefs)
19. ✅ `src/components/CategoryPageContent.tsx` → `/quote/?source=category`
20. ✅ `src/components/programmatic/ProgrammaticCTA.tsx` → `/quote/?source=programmatic`
21. ✅ `src/components/sections/AnnouncementBanner.tsx` → `/quote/?source=announcement` (default)
22. ✅ `src/components/forms/SignupForm.tsx` → `/quote/?source=signup-form`

### Changes Made

1. **URL Updates**: All Calendly URLs replaced with `/quote/` or `/quote/?source=X`
2. **Removed External Link Attributes**: Removed `target="_blank"` and `rel="noopener noreferrer"` from internal links
3. **Component Updates**: Changed `<a>` tags to Next.js `<Link>` components where appropriate
4. **Analytics**: Source tracking via URL parameters (analytics handled in quote page on mount)

### Source Parameters Used

- `header` - Header navigation
- `mobile-cta-bar` - Mobile bottom bar
- `sticky-cta` - Sticky CTA component
- `hero` - Hero section
- `homepage` - Homepage CTAs
- `pricing` - Pricing page CTAs
- `construction-packages` - Construction packages page
- `services` - Services page
- `category` - Category pages
- `resources` - Resources listing page
- `resource-article` - Individual resource articles
- `article` - Article CTAs
- `programmatic` - Programmatic CTAs
- `announcement` - Announcement banner
- `mobile-sticky` - Mobile sticky bar
- `signup-form` - Signup form
- `cash-flow-tool` - Cash flow health check tool
- `ir35-calculator` - IR35 calculator
- `vat-audit` - VAT audit campaign
- `profit-optimization` - Profit optimization campaign
- `self-assessment` - Self assessment campaign
- `cis-compliance` - CIS compliance service page

### Analytics

- `fe_quote_start_cta` event is tracked in the quote page on mount with the source parameter
- This provides accurate attribution for all CTA clicks

### Build Status

✅ Build successful - All pages compile without errors
✅ No linting errors
✅ All CTAs properly updated

### Notes

- Contact page Calendly embed is preserved (as per spec - only Welcome Call in Step 7 should use Calendly)
- CalendlyWidget and CalendlyEmbed components remain for future use (Step 7 Welcome Call option)
- All button styles preserved - only hrefs changed

