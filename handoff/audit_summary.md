# SEO Audit Summary
## Fileeasy Accountancy – Quick Reference

**Date:** 2025-10-13
**Prepared by:** Claude Code (SEO Technical Lead)
**Site:** https://fileeasyaccountancy.co.uk (Namecheap hosting)

---

## 🎯 Current State Analysis

### Site Architecture:
- **Status:** Multi-page Next.js 15 site (homepage, services pages, about, contact, privacy, resources, IR35 calculator, pricing)
- **Recommendation:** Consolidate to **single landing page** + legal pages (privacy, terms) for faster local SEO wins
- **Rationale:** Link equity concentration, faster CWV targets, mobile-first UX, simpler maintenance

### Existing Components (Good Foundation):
- ✅ Next.js 15 with App Router
- ✅ TypeScript, Tailwind CSS, shadcn/ui
- ✅ Schema helpers in `src/lib/schema.tsx` (LocalBusiness, FAQPage, Service, Organization, Breadcrumb)
- ✅ Mobile-responsive layout
- ✅ Basic SEO structure (metadata in layout)

### Gaps Identified:
- ❌ No structured data currently populated on homepage (schema components exist but not used with real data)
- ❌ Missing robots.txt and sitemap.xml (Next.js can generate dynamically but not configured)
- ❌ No GSC/GA4/GBP integration documented
- ❌ NAP (Name, Address, Phone) not visible on current homepage
- ❌ No FAQs on homepage (critical for PAA targeting)
- ❌ Images not optimised (no WebP conversion evident)
- ❌ Fonts not using `font-display: swap` (may cause FOIT)
- ❌ Multi-page structure dilutes focus for local "accountant Medway" query

---

## 🔍 SERP Competitive Landscape

### Top 3 Competitors (Medway Local Pack):

1. **AK Tax & Accountancy**
   - Title: "Accountants in Medway Kent - AK Tax & Accountancy Ltd"
   - Strengths: Xero Gold Partner, 4.9★ (13 reviews), clear NAP, service list
   - Weaknesses: Generic meta description, no structured FAQs

2. **Carleys (Chartered Accountants)**
   - Title: "Carleys - Chartered Accountants in Medway, Kent"
   - Strengths: ICAEW Chartered, 70+ years experience, Historic Dockyard Chatham address (prestige location)
   - Weaknesses: Poetic H1 ("Accountable for your success" = poor keyword targeting), no visible meta description, thin on-page content

3. **ML Accounting Services**
   - Title: "ML Accounting Services Ltd | Medway, Kent | Chartered Tax Accountant"
   - Strengths: Chartered Tax Adviser (ATT), Xero/QB certified, specific service detail
   - Weaknesses: Basic site design, limited FAQs, low review count

### Competitor Weaknesses to Exploit:
- Thin meta descriptions (Carleys has none)
- Lack of structured FAQ sections (only Orchard Accountants has dedicated FAQ page)
- Vague H1s (poetic vs keyword-optimised)
- Low review counts (AK Tax: 13 reviews = beatable with proactive review campaign)
- No People Also Ask targeting (missing long-tail FAQ content)

### Fileeasy's Competitive Advantages (to emphasise):
- Modern tech stack (Next.js, cloud accounting integrations)
- Comprehensive FAQs targeting PAA queries
- Fixed-fee pricing transparency (competitor pain point: "no surprises")
- Plain-English communication (vs jargon-heavy accountancy sites)
- Strong structured data (4 schema types vs competitors' basic LocalBusiness)

---

## 🗂️ Prioritised Fix List

### 🔴 Critical (Must-Fix for Launch):

| Issue | Impact | Fix Location | Priority |
|-------|--------|--------------|----------|
| No NAP on homepage | Can't rank in Local Pack | `app/page.tsx` footer/contact section | P0 |
| No structured data populated | Missing rich snippets | Implement schema from `handoff/schema/` | P0 |
| Multi-page dilutes focus | Slow to rank primary keyword | Consolidate to single landing page | P0 |
| No robots.txt/sitemap | Crawlability issues | Deploy from `handoff/tech/` | P0 |
| No GSC/GA4/GBP setup | Can't measure/optimise | Follow `handoff/tracking/checklist.md` | P0 |
| No FAQs | Missing PAA opportunities | Add 12 FAQs from `handoff/copy_outline.md` | P0 |

### 🟡 High Priority (Fast Wins):

| Issue | Impact | Fix Location | Priority |
|-------|--------|--------------|----------|
| Images not WebP | Slow LCP | Convert from `handoff/media/unsplash_candidates.json` | P1 |
| Fonts may cause FOIT | CLS penalty | Implement `next/font` with `display: swap` | P1 |
| Analytics not deferred | Slow INP | Update `layout.tsx` Script strategy | P1 |
| No CDN enabled | Slow TTFB | Enable Cloudflare or Namecheap CDN | P1 |
| Hero image not preloaded | Slow LCP | Add `priority={true}` to hero Image | P1 |
| Trailing slash inconsistency | Duplicate content risk | Configure redirects in `next.config.ts` | P1 |

### 🟢 Medium Priority (Post-Launch):

| Issue | Impact | Fix Location | Priority |
|-------|--------|--------------|----------|
| No testimonials | Weak trust signals | Add real client quotes (no fakes) | P2 |
| No GBP posts | Lower Local Pack visibility | Publish 1-2 posts/week | P2 |
| Missing OG tags | Poor social sharing | Add OpenGraph metadata | P2 |
| No review collection workflow | Slow review growth | Set up email template + GBP link | P2 |
| No UTM tracking for ads | Can't measure paid ROI | Add UTM parameters if running ads | P2 |

### 🔵 Low Priority (Month 2+):

| Issue | Impact | Fix Location | Priority |
|-------|--------|--------------|----------|
| No blog/guides | Limited content depth | Plan 1 post/month (e.g., IR35 guide) | P3 |
| No video content | Engagement opportunity | Create 2-min "How We Work" video | P3 |
| No directory listings | Missing local citations | Submit to Yell, Thomson Local, FreeIndex | P3 |
| No social media presence | Limited brand awareness | Set up Facebook, LinkedIn if not active | P3 |

---

## 📊 Keyword Strategy Summary

### Primary Target:
- **"accountant medway"** (~480/mo, high commercial intent)

### Supporting Terms (6 core):
1. chartered accountant medway (~170/mo)
2. tax return medway (~260/mo)
3. bookkeeping medway (~140/mo)
4. accountant chatham (~210/mo)
5. small business accountant kent (~320/mo)
6. xero accountant medway (~50/mo)

### Long-Tail (12 PAA queries):
- "How much does an accountant cost in Medway?"
- "Do I need a chartered accountant for self-assessment?"
- "What's the difference between bookkeeper and accountant?"
- "When do I submit my tax return for 2024/25?"
- "Can accountant help with VAT returns?"
- "What is MTD and do I need it?"
- "How do I choose an accountant in Medway?"
- "What accounting software do Medway accountants use?"
- "Do accountants offer remote services?"
- "What's included in year-end accounts?"
- "How can accountant save me tax?"
- "What is IR35 and does it affect me?"

**Full detail:** See [`handoff/keyword_map.md`](./keyword_map.md)

---

## 🏗️ Recommended IA (Single Landing Page)

### Sections (top to bottom):

1. **Hero** – H1, value prop, CTA, trust badges
2. **Services Grid** – 6-8 service cards (tax, bookkeeping, VAT, payroll, etc.)
3. **Process** – 3-step visual (Consultation → Proposal → Support)
4. **Industries** – SMEs, contractors, landlords, professional services
5. **Why Choose Fileeasy** – 5 benefit bullets (local, fixed-fee, cloud-first, proactive, plain-English)
6. **Testimonials** – 2-3 real client quotes (or stub if none yet)
7. **FAQs** – 12 Q&As (accordion)
8. **Pricing Philosophy** – Transparency, no surprises
9. **Contact** – NAP, map, hours, coverage, CTA

**Target word count:** 900–1,400 words
**Full copy prompts:** See [`handoff/copy_outline.md`](./copy_outline.md)

---

## 📈 Performance Baseline & Targets

### Current State (Pre-Optimisation):
- **Not measured yet** – baseline Lighthouse audit required in Phase 1

### Target Metrics (Post-Optimisation):
| Metric | Target | Good Threshold |
|--------|--------|----------------|
| Lighthouse (mobile) | >90 | >90 |
| LCP (Largest Contentful Paint) | <2.5s | <2.5s |
| FID/INP (Interaction) | <200ms | <200ms |
| CLS (Cumulative Layout Shift) | <0.1 | <0.1 |
| TTFB (Time to First Byte) | <600ms | <800ms |

**How to achieve:**
- Convert images to WebP, compress <100 KB (hero), <50 KB (cards)
- Preload hero image (`priority={true}`)
- Lazy-load below-fold images
- Use `font-display: swap`
- Defer analytics scripts
- Enable CDN (Cloudflare free tier)
- Set cache headers for static assets

**Full checklist:** See [`handoff/tech/performance_checklist.md`](./tech/performance_checklist.md)

---

## 🗓️ 7-Day Sprint Timeline

| Phase | Days | Focus | Key Deliverables |
|-------|------|-------|------------------|
| **Phase 1: Foundation** | 1-2 | DNS, SSL, redirects, sitemap, GSC/GA4/GBP | HTTPS live, tracking configured, baseline audit |
| **Phase 2: Schema** | 3 | JSON-LD structured data | 4 schemas validated, NAP consistent |
| **Phase 3: Content** | 4-5 | Landing page refactor, FAQs, copy | 9 sections, 12 FAQs, UK spelling, NAP |
| **Phase 4: Performance** | 6 | Images, fonts, JS, CDN, CWV | Lighthouse >90, LCP <2.5s, CLS <0.1 |
| **Phase 5: Launch** | 7 | QA, submit to search engines, GBP | Live site, indexed, GBP 100%, reviews |

**Total estimated time:** 47 hours (~6 days at 8 hrs/day)

**Full phased plan:** See [`handoff/execution_phases.md`](./execution_phases.md)

---

## 🛡️ White-Hat Compliance Checklist

### ✅ Allowed:
- Real NAP (exact match across site, schema, GBP)
- Real accreditations (ICAEW, ACCA, ATT, Xero, QuickBooks) – only if member/partner
- Real testimonials (with client consent)
- Organic review requests (post-service emails with GBP link)
- Fixed-fee pricing ranges (transparency)
- UK spelling and terminology (VAT, HMRC, organised, optimise)

### ❌ Prohibited:
- Fake reviews, ratings, testimonials
- Doorway pages (separate pages for "Chatham accountant," "Rochester accountant," etc.)
- Keyword stuffing (>2% density)
- Hidden text, cloaking, sneaky redirects
- Link buying, PBNs, spammy directories
- Fake "limited time" discounts (unless genuine)
- `aggregateRating` in schema without ≥5 real reviews

---

## 📦 Handoff Package Contents

### Core Documents:
1. **[README.md](./README.md)** – This overview (start here)
2. **[execution_phases.md](./execution_phases.md)** – 7-day sprint plan (60+ tasks, acceptance criteria)
3. **[keyword_map.md](./keyword_map.md)** – SERP intel, keywords, competitor analysis
4. **[copy_outline.md](./copy_outline.md)** – Landing page IA, copy prompts, FAQs (UK spelling)
5. **[tasks.csv](./tasks.csv)** – Granular task list for Cursor (60+ items, ~47 hours)

### Technical:
6. **[tech/robots.txt](./tech/robots.txt)** – Crawl control template
7. **[tech/sitemap.xml](./tech/sitemap.xml)** – Static sitemap OR Next.js dynamic guidance
8. **[tech/redirects.txt](./tech/redirects.txt)** – Canonical domain, HTTPS, trailing slash rules
9. **[tech/performance_checklist.md](./tech/performance_checklist.md)** – CWV guide, 12 optimisation actions

### Schema:
10. **[schema/README.md](./schema/README.md)** – Implementation guide
11. **[schema/accounting_service_schema.json](./schema/accounting_service_schema.json)** – Primary LocalBusiness/AccountingService
12. **[schema/faq_schema.json](./schema/faq_schema.json)** – FAQPage (12 Q&As)
13. **[schema/organization_schema.json](./schema/organization_schema.json)** – Organization (branding, founders)
14. **[schema/website_schema.json](./schema/website_schema.json)** – WebSite (search action)

### Media:
15. **[media/unsplash_candidates.json](./media/unsplash_candidates.json)** – 12 curated images (IDs, alt text, use cases)

### Tracking:
16. **[tracking/checklist.md](./tracking/checklist.md)** – GSC, GA4, GBP setup (step-by-step)

---

## 🎓 Key Recommendations (TL;DR)

1. **Consolidate to single landing page** – Homepage with 9 sections (hero → services → process → FAQs → contact) + legal pages only
2. **Target "accountant Medway" + 6 supporting terms** – Natural keyword injection, no stuffing
3. **12 FAQs for PAA domination** – Answer "How much," "What is," "When do I" queries
4. **4 JSON-LD schemas** – AccountingService, FAQPage, Organization, WebSite (all validated)
5. **NAP consistency 100%** – Exact match across site, schema, GBP (no abbreviations)
6. **WebP all images** – Hero <100 KB, cards <50 KB, lazy-load below fold
7. **Lighthouse >90** – LCP <2.5s, CLS <0.1, INP <200ms (use CDN, defer scripts)
8. **GBP 100% complete** – Categories, hours, service areas, 5+ photos, first post
9. **Review collection workflow** – Post-service emails with GBP link (no fake reviews)
10. **Launch Day 7** – QA, submit to GSC/Bing, monitor indexing

---

## 🚀 Next Steps for Cursor

1. **Read [`execution_phases.md`](./execution_phases.md)** – Start with Phase 1 (Foundation)
2. **Import [`tasks.csv`](./tasks.csv)** – Track progress (60+ items, ~47 hours)
3. **Follow file targets** – Each task specifies exact file to edit
4. **Validate as you go** – Use Lighthouse, Rich Results Test, Redirect Checker
5. **No shortcuts** – Quality > speed, white-hat > tricks

**Launch clean. Launch compliant. Launch to win.**

---

## 📞 Support

- **Schema issues:** https://schema.org/AccountingService
- **Performance:** https://web.dev/vitals/
- **Next.js:** https://nextjs.org/docs
- **Local SEO:** https://moz.com/learn/seo/local

**Good luck, Cursor.** 🎯
