# PHASE 9 — Generate Service Landing Pages (Template Ready)

**Date:** 2025-01-31  
**Status:** ✅ Template Created, First Page Generated  
**Branch:** `feat/fe-construction-rebrand-20250131`

---

## Summary

Successfully created a service landing page template and generated the first construction service page (CIS Compliance Services) as an example. The template is ready for generating additional service pages one by one from the Service Map CSV.

---

## Template Created

### Service Landing Page Template
**Location:** `src/app/services/construction/[service-slug]/page.tsx`

**Structure:**
1. **Metadata** - From CSV (meta_title, meta_description)
2. **Hero Section** - Service name with country/segment context
3. **Intro Paragraph** - Pain → clarity → promise using Messaging Blueprint
4. **What this helps you do** - Benefits bullets (not features)
5. **How it works** - Step-by-step process (5-6 steps)
6. **Attraction Offer Block** - Free review/check-up (if attraction_offer = Y)
7. **FAQ Section** - 4-6 questions geared to buyer frictions
8. **Internal Links** - Links to Construction Packages and Resources
9. **Sticky & End CTAs** - Links to Calendly
10. **Schema Markup** - Service + FAQPage + BreadcrumbList

---

## First Service Page Generated

### CIS Compliance Services
**File:** `src/app/services/construction/cis-compliance/page.tsx`

**Features:**
- ✅ Sales-grade landing page (value-first, not article)
- ✅ H1: "CIS Compliance Services for UK Contractors"
- ✅ Intro: 2-3 short paras (pain → clarity → promise)
- ✅ "What this helps you do" bullets: benefits, not features
- ✅ Attraction offer block: "Free CIS Compliance Check"
- ✅ FAQ (6 questions) geared to buyer frictions (CIS, HMRC, compliance)
- ✅ Sticky & end CTAs to Calendly
- ✅ SEO: Uses meta_title, meta_description from CSV
- ✅ Schema: Service + FAQPage + BreadcrumbList
- ✅ Internal links: Construction Packages and Resources

---

## Service Map CSV

**File:** `content/services/_map.csv`

**Total Services:** 40 services
- **UK Services:** 30 services
- **Dubai Services:** 10 services

**Columns:**
- `service_slug` - URL-friendly slug
- `service_name` - Display name
- `country` - UK or UAE
- `segment` - contractors, trades, or developers
- `intent` - BoF (Bottom of Funnel) or MoF (Middle of Funnel)
- `attraction_offer` - Y (Yes) or N (No)
- `meta_title` - SEO-optimized title
- `meta_description` - SEO-optimized description

---

## Template Structure

### Page Components Used
- `ArticleLayout` - Main layout component
- `Breadcrumbs` - Navigation breadcrumbs
- `FAQAccordion` - FAQ section
- `ArticleCTA` - Sticky CTA component
- `FAQPageSchema` - FAQ schema markup
- `BreadcrumbSchema` - Breadcrumb schema markup
- Service schema (inline JSON-LD)

### Content Sections
1. **Intro Hook** - Relatable opening scenario
2. **What this helps you do** - 5-6 benefit bullets
3. **How it works** - 5-6 step-by-step process
4. **Attraction Offer** - Free review/check-up (if applicable)
5. **FAQs** - 4-6 questions with answers
6. **Internal Links** - Construction Packages, Resources
7. **CTAs** - Multiple Calendly CTAs

---

## Next Steps

### To Generate Additional Service Pages

1. **Read CSV row** - Get service data from `content/services/_map.csv`
2. **Create page file** - `src/app/services/construction/[service-slug]/page.tsx`
3. **Use template** - Copy structure from `cis-compliance/page.tsx`
4. **Customize content** - Use Messaging Blueprint for copy
5. **Add to sitemap** - Update `sitemap-services.ts` with new service URL

### Example: Generate Next Service Page

**From CSV:**
```
cis-registration,CIS Registration Services,UK,contractors,MoF,N,...
```

**Create:** `src/app/services/construction/cis-registration/page.tsx`

**Update sitemap:** Add URL to `constructionServices` array in `sitemap-services.ts`

---

## Files Created

1. `src/app/services/construction/cis-compliance/page.tsx` - First service landing page (~400 lines)
2. `PHASE_9_TEMPLATE_READY.md` - This summary document

---

## Files Modified

1. `src/app/sitemap-services.ts` - Updated to include construction services

---

## Template Features

### No Prices
- ✅ No pricing information included
- ✅ CTAs use "Get Your Instant Quote" or "Contact Us for Instant Quote"
- ✅ Psychological SEO versions of CTAs

### Attraction Offers
- ✅ Services with `attraction_offer = Y` include free review/check-up blocks
- ✅ Services with `attraction_offer = N` focus on benefits and CTAs

### Internal Links
- ✅ Links to `/construction-packages`
- ✅ Links to `/resources`
- ✅ Related services section

### Schema Markup
- ✅ Service schema with provider details
- ✅ FAQPage schema with all FAQs
- ✅ BreadcrumbList schema for navigation

---

## Self-QA Checklist

✅ **Service landing page template created**
- Template structure defined
- Components identified
- Content sections mapped

✅ **First service page generated**
- CIS Compliance Services page created
- All sections included
- Schema markup added

✅ **No prices included**
- No pricing information
- CTAs use "Get Your Instant Quote"
- Psychological SEO CTAs

✅ **Attraction offer block**
- Free CIS Compliance Check included
- Benefits listed
- CTA to Calendly

✅ **Internal links**
- Links to Construction Packages
- Links to Resources
- Related services section

✅ **Schema markup**
- Service schema included
- FAQPage schema included
- BreadcrumbList schema included

✅ **Sitemap updated**
- Construction services added to sitemap
- Ready for additional services

---

## Next Steps

The template is ready for generating additional service pages one by one. Each service page can be generated from the CSV data using the template structure.

**Ready for:** Continue generating service pages one by one as needed.

---

**Phase 9 Template Ready** ✅  
**First Service Page:** CIS Compliance Services generated

