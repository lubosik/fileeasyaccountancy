# PHASE 0 — Repository Sanity & Safety Snapshot

**Date:** 2025-01-31  
**Branch:** `feat/fe-construction-rebrand-20250131`  
**Status:** ✅ Complete

---

## 1. Framework Detection

**Framework:** Next.js 15.5.4  
**Build Type:** Static Export (`output: 'export'` in `next.config.ts`)  
**Language:** TypeScript  
**Styling:** Tailwind CSS 4

**Root Paths:**
- `/src/app/` - App Router pages and routes
- `/src/components/` - React components
- `/src/lib/` - Utilities and helpers
- `/public/` - Static assets
- `/data/programmatic/` - JSON data for programmatic pages
- `/out/` - Static export output (generated)

---

## 2. Git Branch Created

✅ **Branch:** `feat/fe-construction-rebrand-20250131`  
**Base:** `seo/ia-scaffold`  
**Status:** Active working branch

---

## 3. Content Structure Inventory

### Services (86 Articles)
**Location:** `src/app/services/{category}/{slug}/page.tsx`

**Categories & Counts:**
- `bookkeeping/` - 30 service pages
- `tax/` - 28 service pages  
- `core/` - 17 service pages
- `vat/` - 2 service pages
- `advisory/` - 4 service pages
- `payroll/` - 1 service page
- **Total:** 86 service pages (98 files including category index pages)

**Manifest:** `src/lib/services.manifest.json` (contains all 86 services with metadata)

### Resources (Programmatic Pages)
**Location:** `data/programmatic/*.json` → rendered at `/resources/[slug]`

**Current Files:**
- `ir35-contractors-kent.json`
- `limited-company-setup-kent.json`
- `limited-company-vs-sole-trader-kent.json`
- `vat-registration-rochester-kent.json`
- `vat-registration-rochester.json`

**Rendering:** `src/app/resources/[slug]/page.tsx` (reads JSON from `data/programmatic/`)

### Content Folders
- `/content/` - Exists but empty
- `/data/programmatic/` - Contains 5 JSON files for programmatic resource pages

---

## 4. Navigation & Routes

### Main Navigation (Header.tsx)
```typescript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'IR35 Calculator', href: '/ir35-calculator' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
```

### Static Routes
- `/` - Homepage (`src/app/page.tsx`)
- `/services` - Services hub (`src/app/services/page.tsx`)
- `/services/{category}` - Category pages (bookkeeping, tax, core, vat, advisory, payroll)
- `/services/{category}/{slug}` - Individual service pages (86 total)
- `/resources` - Resources hub (`src/app/resources/page.tsx`)
- `/resources/{slug}` - Individual resource pages (from `data/programmatic/`)
- `/pricing` - Pricing page
- `/about` - About page
- `/contact` - Contact page
- `/ir35-calculator` - IR35 Calculator
- `/privacy` - Privacy policy
- `/campaigns/*` - Campaign landing pages

### Sitemaps
- `src/app/sitemap.ts` - Main sitemap (static pages)
- `src/app/sitemap-services.ts` - Services sitemap
- `src/app/sitemap-resources.ts` - Resources sitemap

---

## 5. Favicon & Logo References

### Logo
**File:** `public/logo.jpg`  
**References:**
- `src/app/layout.tsx` (lines 134, 177) - Schema JSON-LD
- `src/app/page.tsx` (line 98) - Schema JSON-LD
- Schema URLs: `https://fileeasyaccountancy.co.uk/logo.png` (note: references `.png` but file is `.jpg`)

### Favicon
**Status:** ❌ No favicon files found in `/public/`  
**Expected locations:** 
- `/public/favicon.ico`
- `/public/favicon-16x16.png`
- `/public/favicon-32x32.png`
- `/public/apple-touch-icon.png`
- `/public/site.webmanifest`

**Current:** No favicon references found in `layout.tsx` or HTML head

---

## 6. Email References

**Current Email:** `zara@fileeasyaccountancy.co.uk`  
**Target Email:** `info@fileeasyaccountancy.co.uk`

**Found in:**
- `src/app/layout.tsx` (lines 113, 186) - Schema JSON-LD
- `src/app/page.tsx` (lines 77, 366, 403) - Contact info
- `src/components/layout/Footer.tsx` (line 23) - Footer contact
- All 86 service pages - Schema JSON-LD (email field)
- `scripts/create-knowledge-base.py` (lines 39, 381)

**Total occurrences:** 105 matches (including all service pages)

---

## 7. Site Configuration

### SEO & Metadata
- **Base URL:** `https://fileeasyaccountancy.co.uk`
- **Metadata:** Defined in `src/app/layout.tsx` (lines 16-56)
- **Schema:** LocalBusiness, Organization, WebSite schemas in `layout.tsx`
- **Robots:** `public/robots.txt` exists

### Forms
- **Web3Forms:** Used for contact forms (script in `layout.tsx`)
- **Calendly:** Referenced in services page (`https://calendly.com/zkongwa/30min`)

### Address (LocalBusiness Schema)
```
43 Castle Avenue
Rochester, Kent ME1 2DU
United Kingdom
```

---

## 8. Key File Locations

### Configuration
- `next.config.ts` - Next.js config (static export)
- `tsconfig.json` - TypeScript config
- `package.json` - Dependencies
- `tailwind.config.js` - Tailwind config (if exists)

### Components
- `src/components/layout/Header.tsx` - Main navigation
- `src/components/layout/Footer.tsx` - Footer
- `src/components/layout/MobileNav.tsx` - Mobile navigation

### Utilities
- `src/lib/services.manifest.json` - All 86 services manifest
- `src/lib/programmatic.ts` - Programmatic page utilities
- `src/lib/schema.tsx` - Schema components

### Scripts
- `scripts/generate-sitemaps.js` - Sitemap generation
- `scripts/check-nested-anchors.js` - Anchor validation
- `scripts/build-manifest.js` - Build manifest

---

## 9. Current State Summary

### Services Structure
- ✅ 86 service pages exist as TSX components
- ✅ Services organized by category (bookkeeping, tax, core, vat, advisory, payroll)
- ✅ Manifest file tracks all services
- ✅ Sitemap includes all services

### Resources Structure
- ⚠️ Only 5 programmatic resource pages exist (not 86)
- ⚠️ Resources are JSON-based, not MDX
- ✅ Resources hub page exists at `/resources`

### Email
- ⚠️ All references use `zara@fileeasyaccountancy.co.uk` (needs update to `info@`)

### Branding
- ⚠️ Logo exists but schema references `.png` while file is `.jpg`
- ❌ No favicon files found

---

## 10. Next Steps (Phase 1)

1. **Identify 86 service articles** - Currently in `src/app/services/` as TSX pages
2. **Move to Resources** - Need to determine if these should become MDX/JSON or remain TSX
3. **Update front-matter** - Add `section: "Resources"` and `isResource: true`
4. **Create Resources index** - Update `/resources` to show all 86
5. **Implement redirects** - 301 from `/services/{slug}` to `/resources/{slug}`

---

**Phase 0 Complete** ✅  
**Ready for:** PHASE 1 — Move 86 service articles → Resources

