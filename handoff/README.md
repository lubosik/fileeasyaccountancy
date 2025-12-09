# SEO Audit & Handoff Packet
## Fileeasy Accountancy – Single Landing Page Strategy

**Prepared by:** Claude Code (SEO Technical Lead)
**Date:** 2025-10-13
**Target:** Cursor AI for execution
**Timeline:** 7-day sprint to launch

---

## 📦 What's in This Handoff

This directory contains everything Cursor needs to implement a lean, white-hat, local-SEO-optimised website for Fileeasy Accountancy in Medway, Kent.

### Directory Structure:

```
handoff/
├── README.md (this file)
├── keyword_map.md (SERP intel, keywords, competitor analysis)
├── copy_outline.md (landing page IA + copy prompts, UK spelling)
├── execution_phases.md (7-day sprint plan with acceptance criteria)
├── tasks.csv (granular task list for Cursor, 60+ items)
├── schema/
│   ├── README.md (implementation guide)
│   ├── accounting_service_schema.json (primary LocalBusiness/AccountingService)
│   ├── faq_schema.json (FAQPage for 12 Q&As)
│   ├── organization_schema.json (Organization with branding/founders)
│   └── website_schema.json (WebSite with search action)
├── tech/
│   ├── robots.txt (crawl control template)
│   ├── sitemap.xml (static XML template OR see comments for Next.js dynamic)
│   ├── redirects.txt (canonical domain, HTTPS, trailing slash rules)
│   └── performance_checklist.md (Core Web Vitals guide, image/font/JS optimisation)
├── media/
│   └── unsplash_candidates.json (12 curated image IDs + alt text, ready for WebP conversion)
└── tracking/
    └── checklist.md (GSC, GA4, GBP setup step-by-step)
```

---

## 🎯 Objectives

1. **Single Landing Page:** Consolidate all services, FAQs, and trust signals into one high-converting homepage (plus legally required privacy/terms pages).
2. **Local SEO Focus:** Dominate "accountant Medway" and supporting queries (tax returns, bookkeeping, Chatham, Rochester, Gillingham).
3. **White-Hat Only:** No fake reviews, doorway pages, or keyword stuffing. E-E-A-T compliant.
4. **Fast Wins in 7 Days:** Technical foundation → schema → content → performance → launch.
5. **Handoff to Cursor:** Crystal-clear execution plan with file targets and acceptance criteria.

---

## 🚀 Quick Start (Cursor)

### Day 1-2: Foundation
1. Read [`execution_phases.md`](./execution_phases.md) **Phase 1** (Foundation & Technical Setup)
2. Configure DNS, SSL, redirects, sitemap, robots.txt per [`tech/`](./tech/) folder
3. Set up GSC, GA4, GBP per [`tracking/checklist.md`](./tracking/checklist.md)
4. Run baseline Lighthouse audit

### Day 3: Schema
1. Read **Phase 2** in [`execution_phases.md`](./execution_phases.md)
2. Fill placeholders in all 4 JSON-LD files ([`schema/`](./schema/))
3. Implement schemas in `app/layout.tsx` (Organization + WebSite) and `app/page.tsx` (AccountingService + FAQPage)
4. Validate with Google Rich Results Test

### Day 4-5: Content
1. Read **Phase 3** in [`execution_phases.md`](./execution_phases.md)
2. Refactor homepage per [`copy_outline.md`](./copy_outline.md) (9 sections, 900-1,400 words)
3. Write 12 FAQs from [`keyword_map.md`](./keyword_map.md)
4. Audit NAP consistency (footer, schema, GBP)
5. Add scroll anchors for single-page nav

### Day 6: Performance
1. Read **Phase 4** in [`execution_phases.md`](./execution_phases.md)
2. Download + convert Unsplash images to WebP ([`media/unsplash_candidates.json`](./media/unsplash_candidates.json))
3. Optimise fonts (Next.js Font with `display: swap`)
4. Defer analytics, lazy-load images, enable CDN
5. Run Lighthouse → fix top 3 issues → target score >90 mobile

### Day 7: Launch
1. Read **Phase 5** in [`execution_phases.md`](./execution_phases.md)
2. Cross-browser QA (Chrome, Firefox, Safari, Edge)
3. Submit to GSC + Bing, request indexing
4. Complete GBP (100% profile, 5+ photos, first post)
5. Set up review collection workflow

---

## 📊 Key Deliverables

### Technical:
- ✅ HTTPS with canonical domain (apex or www)
- ✅ 301 redirects (HTTP→HTTPS, www→apex, trailing slash)
- ✅ Sitemap + robots.txt deployed
- ✅ GSC verified, sitemap submitted
- ✅ GA4 tracking live with conversions
- ✅ Lighthouse score >90 (mobile)

### Schema (JSON-LD):
- ✅ AccountingService (primary LocalBusiness schema with NAP, geo, services, areas)
- ✅ FAQPage (12 Q&As for People Also Ask targeting)
- ✅ Organization (branding, founders, social links)
- ✅ WebSite (site search action)
- ✅ All validated with 0 errors (Rich Results Test + Schema.org validator)

### Content:
- ✅ Single landing page with 9 sections (hero, services, process, industries, why-us, testimonials, FAQs, pricing, contact)
- ✅ 12 FAQs targeting PAA queries (e.g., "How much does an accountant cost in Medway?")
- ✅ Primary keyword "accountant Medway" naturally injected (3-5x)
- ✅ Supporting keywords (tax returns, bookkeeping, Chatham, Rochester, Gillingham) in service cards + FAQs
- ✅ UK spelling throughout (organised, optimise, licence, VAT, HMRC)
- ✅ NAP consistent across footer, schema, GBP

### Performance:
- ✅ All images WebP format, compressed (<100 KB hero, <50 KB cards)
- ✅ Hero image preloaded (`priority={true}`)
- ✅ Below-fold images lazy-loaded
- ✅ Fonts optimised with `font-display: swap`
- ✅ Analytics deferred (`strategy="afterInteractive"`)
- ✅ CDN enabled (Cloudflare or Namecheap)
- ✅ LCP <2.5s, CLS <0.1, INP <200ms

### Google Business Profile:
- ✅ Profile 100% complete (categories, hours, service areas)
- ✅ NAP matches website exactly
- ✅ 5+ photos uploaded (logo, cover, office, team)
- ✅ First post published (launch announcement)
- ✅ Review link obtained and added to email signature

---

## 📋 Task List Summary

Total tasks: **60+** (see [`tasks.csv`](./tasks.csv) for full list)

**Breakdown by phase:**
- Phase 1 (Foundation): 11 tasks, ~8 hours
- Phase 2 (Schema): 9 tasks, ~4 hours
- Phase 3 (Content): 19 tasks, ~15 hours
- Phase 4 (Performance): 11 tasks, ~9 hours
- Phase 5 (Launch): 15 tasks, ~8 hours
- Post-Launch (Monitoring): 7 tasks, ~3 hours

**Total estimated time:** 47 hours (~6 days at 8 hrs/day, buffer for QA)

---

## 🛡️ Guardrails (White-Hat Only)

### ❌ Do NOT:
- Fake reviews, ratings, or testimonials
- Create doorway pages for each town (e.g., separate pages for "Chatham accountant," "Rochester accountant")
- Keyword stuff (density >2% is suspicious)
- Use hidden text, cloaking, or sneaky redirects
- Buy links or use PBNs
- Claim fake accreditations (ICAEW, ACCA, Xero Gold) if not member/partner
- Add `aggregateRating` to schema without real reviews

### ✅ DO:
- Use real NAP (name, address, phone) — exact match everywhere
- Only display trust badges for genuine memberships (ICAEW, ACCA, ATT, Xero, QuickBooks)
- Request reviews organically from real clients (post-service emails)
- Write for humans first, search engines second (plain English, no jargon)
- Follow UK spelling and terminology (VAT not sales tax, HMRC not IRS, organised not organized)
- Provide real value in FAQs (answer queries thoroughly, cite HMRC deadlines/rules)

---

## 📈 Success Metrics (30-Day Check-In)

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Homepage indexed | Yes | `site:fileeasyaccountancy.co.uk` in Google |
| Lighthouse score (mobile) | >90 | https://pagespeed.web.dev/ |
| GBP Local Pack visibility | Appears for "accountant medway" | Incognito search from Medway IP |
| GSC impressions | >100/mo | GSC Performance report |
| GSC clicks | >5/mo | GSC Performance report |
| GBP reviews | ≥3 | GBP dashboard |
| GA4 sessions | >50/mo | GA4 Traffic Acquisition |
| Conversions (form/call) | ≥2 | GA4 Conversions |

**Note:** Local SEO matures over 3–6 months. Day 30 is baseline; expect exponential growth by Month 3.

---

## 🔧 Tools & Resources

### Validation:
- **Lighthouse:** https://pagespeed.web.dev/ (Core Web Vitals)
- **Rich Results Test:** https://search.google.com/test/rich-results (schema validation)
- **Schema.org Validator:** https://validator.schema.org/
- **Redirect Checker:** https://www.redirect-checker.org/ (test 301s)
- **SSL Test:** https://www.ssllabs.com/ssltest/ (check certificate)

### Monitoring:
- **Google Search Console:** https://search.google.com/search-console/
- **Google Analytics 4:** https://analytics.google.com/
- **Google Business Profile:** https://business.google.com/

### Image Optimisation:
- **Squoosh:** https://squoosh.app/ (WebP conversion)
- **Sharp CLI:** `npm install sharp-cli` (batch convert)

### Copy Quality:
- **Hemingway Editor:** https://hemingwayapp.com/ (readability, target grade 8-10)
- **Grammarly:** https://www.grammarly.com/ (UK English spell check)

---

## 📞 Support & Questions

### If Stuck:
1. **Check execution_phases.md:** Step-by-step guide with acceptance criteria
2. **Check relevant file:** Each folder has a README or comments
3. **Validate with tools:** Use Lighthouse, Rich Results Test, Redirect Checker
4. **Cross-reference Web.dev:** https://web.dev/ for best practices

### For Schema Issues:
- https://schema.org/AccountingService (official spec)
- https://developers.google.com/search/docs/appearance/structured-data/local-business (Google guide)

### For Next.js Optimisation:
- https://nextjs.org/docs/basic-features/image-optimization
- https://nextjs.org/docs/basic-features/font-optimization

---

## 🎓 Background: Why Single-Page Strategy?

### Strategic Rationale:
1. **Focus:** One page = all link equity concentrated, faster to rank
2. **Conversion:** All info on one page = shorter path to CTA (consultation booking)
3. **Mobile:** Single-page scrolling is native mobile UX (vs multi-page nav)
4. **Speed:** Fewer pages = easier to maintain CWV targets
5. **Local SEO:** Google Local Pack prioritises businesses with strong homepage (not diluted across 10 service pages)

### When to Expand:
After 3–6 months, if ranking for primary terms (accountant medway, tax returns medway), **then** consider:
- Blog/guides (e.g., "IR35 Guide for Medway Contractors")
- Case studies (real client results, anonymised)
- Seasonal content (e.g., "Beat the Self-Assessment Deadline")

But **not yet**. Launch lean, validate traction, then expand.

---

## ✅ Pre-Launch Checklist (Final Sign-Off)

Before going live, verify:

### Technical:
- [ ] HTTPS loads (both apex and www if applicable)
- [ ] All HTTP → HTTPS (301 redirects working)
- [ ] Canonical domain chosen and enforced (www → apex or vice versa)
- [ ] Trailing slashes redirect to no-slash (e.g., `/privacy/` → `/privacy`)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] GSC verified and sitemap submitted

### Schema:
- [ ] All 4 JSON-LD schemas implemented (AccountingService, FAQPage, Organization, WebSite)
- [ ] All `[INSERT]` placeholders replaced with real data
- [ ] Rich Results Test shows 0 errors
- [ ] NAP in schema matches GBP exactly

### Content:
- [ ] Homepage has 9 sections per copy_outline.md
- [ ] H1 includes primary keyword ("accountant Medway" or variant)
- [ ] 12 FAQs written and match faq_schema.json
- [ ] NAP consistent across footer, contact section, schema, GBP
- [ ] UK spelling throughout (no US English)
- [ ] No fake claims (reviews, awards, testimonials must be real)

### Performance:
- [ ] All images WebP format
- [ ] Hero image has `priority={true}` and <100 KB
- [ ] Below-fold images have `loading="lazy"`
- [ ] Fonts use `font-display: swap`
- [ ] Analytics scripts deferred (`strategy="afterInteractive"`)
- [ ] Lighthouse mobile score >90
- [ ] LCP <2.5s, CLS <0.1, INP <200ms

### Tracking:
- [ ] GA4 tracking live (verified in Realtime)
- [ ] GA4 conversions set up (book_consultation, phone_call)
- [ ] GBP profile 100% complete
- [ ] GBP has 5+ photos
- [ ] First GBP post published
- [ ] Review link obtained

### QA:
- [ ] Tested on Chrome, Firefox, Safari, Edge (desktop + mobile)
- [ ] All CTAs clickable (buttons, phone, email)
- [ ] Mobile menu works
- [ ] FAQ accordion expands/collapses
- [ ] No console errors
- [ ] No layout shift (CLS)

---

## 🎯 Post-Launch (Weeks 2–4)

### Week 1:
- Monitor GSC for indexing (homepage should appear in 3 days)
- Check GA4 Realtime for traffic
- Respond to any GBP questions/reviews
- Fix any user-reported bugs

### Week 2:
- Run Lighthouse again (ensure scores stable)
- Check GSC Performance for first queries ranking
- Add 1–2 GBP posts (e.g., "Tax return deadline approaching")
- Request reviews from 2–3 recent clients

### Week 3:
- Check Local Pack ranking for "accountant medway" (incognito search from Medway IP)
- Audit backlinks (Ahrefs free or Moz Link Explorer)
- Identify 1–2 local link opportunities (Medway directories, Kent chamber of commerce)

### Week 4:
- Review GA4: top landing pages, bounce rate, conversions
- Check Core Web Vitals in GSC (data available by now)
- Plan Phase 6 (content expansion): 1 guide/blog per month (e.g., "Self-Assessment Checklist for Medway Sole Traders")

---

## 📚 Further Reading

### Local SEO:
- **Whitespark Local SEO Guide:** https://whitespark.ca/local-seo-guide/
- **Moz Local SEO Learning Center:** https://moz.com/learn/seo/local

### Technical SEO:
- **Web.dev SEO Guide:** https://web.dev/learn/#seo
- **Google Search Central:** https://developers.google.com/search

### Core Web Vitals:
- **Web Vitals Guide:** https://web.dev/vitals/
- **Next.js Performance:** https://nextjs.org/docs/advanced-features/measuring-performance

### Schema.org:
- **AccountingService:** https://schema.org/AccountingService
- **LocalBusiness:** https://schema.org/LocalBusiness
- **FAQPage:** https://schema.org/FAQPage

---

## 🙏 Acknowledgements

**Built for:** Fileeasy Accountancy, Medway, Kent
**Prepared by:** Claude Code (Anthropic)
**Execution:** Cursor AI
**Timeline:** 7-day sprint (13 Oct 2025 – 19 Oct 2025)

**Philosophy:** Quality > speed. White-hat > shortcuts. Real value > fake signals.

---

**Let's launch this cleanly. Good luck, Cursor.** 🚀
