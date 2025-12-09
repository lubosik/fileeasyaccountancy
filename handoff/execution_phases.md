# Execution Phases – 7-Day SEO Sprint
## Fileeasy Accountancy (Cursor Implementation)

**Objective:** Launch a lean, local-SEO-optimised single landing page (plus legal pages) in 7 days. No fake claims, no doorway pages, white-hat only.

---

## Phase 1: Foundation & Technical Setup (Days 1–2)

### Goals:
- Configure hosting, canonical domain, SSL, redirects
- Deploy sitemap and robots.txt
- Set up tracking (GSC, GA4, GBP)

### Tasks:

#### 1.1 Hosting & DNS Configuration
- [ ] **Choose canonical domain:** `https://fileeasyaccountancy.co.uk` (apex) vs `https://www.fileeasyaccountancy.co.uk` (www)
  - **Recommendation:** Use apex (no www) for cleaner branding
- [ ] **DNS setup (Namecheap):**
  - A record: `@` → server IP
  - CNAME: `www` → `fileeasyaccountancy.co.uk`
- [ ] **SSL certificate:** Enable in Namecheap cPanel (Let's Encrypt free)
- [ ] **Test HTTPS:** Verify https://fileeasyaccountancy.co.uk loads

**Acceptance:**
- ✅ Site loads on HTTPS (both apex and www)
- ✅ SSL Labs score A/A+ (https://www.ssllabs.com/ssltest/)

---

#### 1.2 Redirects & Canonicals
- [ ] **Implement 301 redirects:**
  - `http://` → `https://` (force HTTPS)
  - `www.` → apex (or vice versa if using www as canonical)
  - Trailing slash → no trailing slash (e.g., `/privacy/` → `/privacy`)
- [ ] **Method:** Use Next.js `next.config.ts` (see `handoff/tech/redirects.txt`) OR `.htaccess` (Apache/Namecheap)
- [ ] **Add canonical tags:** Update `layout.tsx` metadata with canonical URLs
- [ ] **Test:** Use https://www.redirect-checker.org/

**Acceptance:**
- ✅ All HTTP → HTTPS (301)
- ✅ All www → apex (301, if apex is canonical)
- ✅ Canonical tags present on all pages

---

#### 1.3 Sitemap & Robots.txt
- [ ] **Deploy `robots.txt`:** Copy from `handoff/tech/robots.txt` to `/public/robots.txt`
- [ ] **Deploy sitemap:**
  - **Option A (static):** Copy `handoff/tech/sitemap.xml` to `/public/sitemap.xml`
  - **Option B (dynamic):** Create `app/sitemap.ts` for Next.js (see sitemap.xml comments)
- [ ] **Update sitemap:** Include homepage + privacy + terms pages only (no service sub-pages if going single-page)
- [ ] **Test:** Visit https://fileeasyaccountancy.co.uk/robots.txt and /sitemap.xml

**Acceptance:**
- ✅ `robots.txt` accessible and allows `/`
- ✅ `sitemap.xml` accessible and lists all public pages

---

#### 1.4 Tracking & Analytics Setup
- [ ] **Google Search Console:**
  - Add property (use apex domain as canonical)
  - Verify via DNS TXT record or HTML file upload
  - Submit sitemap via GSC
- [ ] **Google Analytics 4:**
  - Create GA4 property
  - Add tracking code via `next/script` in `layout.tsx` (defer or afterInteractive)
- [ ] **Google Business Profile (GBP):**
  - Claim/verify GBP listing (if not already done)
  - Ensure NAP (Name, Address, Phone) matches site exactly
  - Add website URL, categories (Accountant, Tax Preparation Service, Bookkeeping Service)
  - Add opening hours, service areas (Medway, Chatham, Rochester, Gillingham, Strood, Rainham)

**Acceptance:**
- ✅ GSC verified and sitemap submitted
- ✅ GA4 tracking events firing (test with real-time view)
- ✅ GBP listing claimed and website linked

---

#### 1.5 Performance Baseline
- [ ] Run Lighthouse audit (mobile + desktop): https://pagespeed.web.dev/
- [ ] Document baseline scores (LCP, FID/INP, CLS, Lighthouse overall)
- [ ] Identify top 3 performance bottlenecks (images, JS, fonts)

**Acceptance:**
- ✅ Baseline Lighthouse scores recorded (target >70 before optimisation)

---

**Phase 1 Deliverables:**
- Live site on HTTPS with SSL A rating
- Redirects and canonicals functional
- Sitemap and robots.txt deployed
- GSC, GA4, GBP configured and verified
- Performance baseline documented

**Time Estimate:** 2 days (1 day tech setup, 1 day tracking/validation)

---

## Phase 2: Schema & Structured Data (Day 3)

### Goals:
- Implement JSON-LD for AccountingService, FAQPage, Organization, WebSite
- Validate with Google Rich Results Test
- Fill placeholders (NAP, GBP CID, geo coordinates)

### Tasks:

#### 2.1 Populate Schema Placeholders
- [ ] **Collect real data:**
  - Full business address (street, postcode)
  - Phone number (format: +44-1634-XXXXXX)
  - Email (hello@fileeasyaccountancy.co.uk or actual)
  - Latitude/longitude (get from Google Maps: right-click pin → coordinates)
  - Google Business Profile CID (from GBP share URL: `?cid=XXXX`)
  - Founding date (if known, optional)
  - Social media URLs (Facebook, LinkedIn, Twitter – only if active; remove if not)
  - Logo URL (`/logo.png` or actual path)
  - Office photo URL (hero image path)
- [ ] **Update JSON files:**
  - `handoff/schema/accounting_service_schema.json`
  - `handoff/schema/organization_schema.json`
  - `handoff/schema/faq_schema.json`
  - `handoff/schema/website_schema.json`

**Critical:** Remove `aggregateRating` from `organization_schema.json` if no real reviews exist yet. Add later when reviews are collected.

---

#### 2.2 Implement Schema on Site
- [ ] **Option A (Inline JSON-LD):** Add `<script type="application/ld+json">` to `app/page.tsx` and `app/layout.tsx`
  - `layout.tsx`: Organization + WebSite schemas (site-wide)
  - `page.tsx` (homepage): AccountingService + FAQPage schemas
- [ ] **Option B (Use existing helpers):** Migrate to `LocalBusinessSchema`, `FAQPageSchema`, `OrganizationSchema` components in `src/lib/schema.tsx`

**Example (inline):**
```tsx
// app/page.tsx
import accountingSchema from '@/handoff/schema/accounting_service_schema.json';
import faqSchema from '@/handoff/schema/faq_schema.json';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Page content */}
    </>
  );
}
```

---

#### 2.3 Validate Schema
- [ ] **Google Rich Results Test:** https://search.google.com/test/rich-results
  - Test homepage URL
  - Fix any errors (missing required fields, invalid formats)
- [ ] **Schema.org Validator:** https://validator.schema.org/
  - Paste JSON-LD source
  - Ensure no warnings
- [ ] **Google Search Console:**
  - Check "Enhancements" tab after indexing (may take 1–3 days)
  - Monitor for FAQ, LocalBusiness, Organization errors

**Acceptance:**
- ✅ All 4 schemas (AccountingService, FAQPage, Organization, WebSite) pass validation
- ✅ No critical errors in Rich Results Test
- ✅ NAP matches GBP exactly

---

**Phase 2 Deliverables:**
- JSON-LD schemas live on homepage
- All placeholders filled with real data
- Rich Results Test green (0 errors)

**Time Estimate:** 1 day

---

## Phase 3: Content & Copy Migration (Days 4–5)

### Goals:
- Refactor homepage to single-page landing model (per `handoff/copy_outline.md`)
- Inject keywords naturally (accountant medway, tax returns, bookkeeping, etc.)
- Write/migrate FAQs with target PAA queries
- Ensure NAP consistency (footer, contact section, schema)

### Tasks:

#### 3.1 Homepage Structure (Single-Page IA)
- [ ] **Reorganise homepage sections** (use `handoff/copy_outline.md` as template):
  1. Hero (H1, value prop, CTA, trust badges)
  2. Services grid (6–8 service cards, ~30–40 words each)
  3. Process (3-step visual: Consultation → Proposal → Support)
  4. Industries served (SMEs, contractors, landlords, etc.)
  5. Why Choose Fileeasy (5 benefit bullets)
  6. Testimonials (only if real; otherwise remove or stub)
  7. FAQs (12 Q&As from keyword_map.md)
  8. Pricing philosophy (transparency, fixed-fee approach)
  9. Contact (NAP, map, hours, coverage, CTA)

**Target word count:** 900–1,400 words total (prioritise FAQs for long-tail keyword coverage)

---

#### 3.2 SEO Copywriting
- [ ] **H1:** "Stress-Free Accounting for Medway Businesses" (or approved variant)
- [ ] **Title tag:** "Accountant in Medway, Kent | Fileeasy Accountancy" (55–60 chars)
- [ ] **Meta description:** "Professional accountancy for Medway businesses & individuals. Tax returns, bookkeeping, VAT, payroll. Serving Chatham, Rochester, Gillingham. Free consult." (145–155 chars)
- [ ] **Keyword injection (natural):**
  - Primary: "accountant Medway" (H1, first paragraph, footer)
  - Supporting: "tax returns," "bookkeeping," "Chatham," "Rochester," "Gillingham" (service cards, FAQs)
  - Long-tail: FAQ questions (e.g., "How much does an accountant cost in Medway?")
- [ ] **UK spelling:** organised, optimise, licence, VAT (not sales tax), HMRC (not IRS)
- [ ] **Plain English:** Avoid jargon; explain terms (e.g., "MTD = Making Tax Digital")

**Acceptance:**
- ✅ Primary keyword appears 3–5 times naturally (not stuffed)
- ✅ All copy is UK spelling
- ✅ Readability: Hemingway grade 8–10 (use https://hemingwayapp.com/)

---

#### 3.3 FAQ Section (High Priority for PAA)
- [ ] **Write 12 FAQs** from `handoff/keyword_map.md` (see copy_outline.md §7)
- [ ] **Format:** Use `<h3>` for questions (or Radix Accordion with data-question attribute)
- [ ] **Length:** 25–40 words per answer (concise but complete)
- [ ] **Structure:** Answer format for featured snippets:
  - Lead with direct answer (1 sentence)
  - Add supporting detail (1–2 sentences)
  - End with CTA if relevant (e.g., "Book a free consultation")
- [ ] **Sync with FAQ schema:** Ensure questions/answers match `faq_schema.json` exactly

**Example:**
```markdown
### How much does an accountant cost in Medway?

Fees vary by service. Self-assessment typically starts from £150+VAT, limited company accounts from £600+VAT annually. We'll give you a fixed quote upfront with no hourly billing surprises.
```

**Acceptance:**
- ✅ 12 FAQs live on homepage
- ✅ FAQ text matches `faq_schema.json`
- ✅ Accordion component functional (mobile + desktop)

---

#### 3.4 NAP Consistency
- [ ] **Audit NAP across all locations:**
  - Homepage footer
  - Contact section
  - Schema JSON-LD (all 4 files)
  - Google Business Profile
  - Any directory listings (Yell, Thomson Local, etc.)
- [ ] **Ensure exact match:**
  - Name: "Fileeasy Accountancy" (or "File Easy Accountancy" – pick one, use everywhere)
  - Address: Full street address with postcode (no abbreviations)
  - Phone: Same format everywhere (e.g., +44 1634 XXX XXX or 01634 XXX XXX)
- [ ] **Fix discrepancies:** Update any mismatches

**Acceptance:**
- ✅ NAP identical in footer, schema, GBP
- ✅ No abbreviations or variations (e.g., "Chatham, Kent" vs "Chatham" – standardise)

---

#### 3.5 Internal Linking (On-Page Anchors)
- [ ] **Add scroll anchors for single-page navigation:**
  - Hero CTA → `#services` or `#contact`
  - Services → `#faqs`
  - FAQs → `#contact`
- [ ] **Smooth scroll:** Enable via CSS (`scroll-behavior: smooth`) or JS
- [ ] **Legal page links:** Footer links to `/privacy`, `/terms` (if exists)

**Acceptance:**
- ✅ CTA buttons link to on-page sections (#contact, #services)
- ✅ Smooth scroll enabled
- ✅ Legal pages linked from footer

---

#### 3.6 Trust & Conversion Elements
- [ ] **Trust badges (only if true):**
  - Xero Partner / QuickBooks Certified (logos)
  - ICAEW / ACCA / ATT member (logos or text)
  - "X years serving Medway" (if applicable)
  - "Trusted by X businesses" (only if true)
- [ ] **Testimonials:**
  - If real reviews exist: Add 2–3 short quotes with first name + business type
  - If no reviews: Remove section or replace with "Be our next success story" CTA
- [ ] **CTA optimisation:**
  - Primary: "Book Your Free Consultation" (prominent button, Calendly link)
  - Secondary: Click-to-call phone (mobile sticky bar)
  - Tertiary: Email link (mailto:)

**Acceptance:**
- ✅ No fake trust signals (awards, ratings, testimonials)
- ✅ CTAs clickable and tracked (GA4 events)
- ✅ Accreditation logos only if member/partner

---

**Phase 3 Deliverables:**
- Homepage refactored to single-page landing model
- 12 FAQs live with schema sync
- NAP 100% consistent across site/schema/GBP
- Trust elements vetted (no fake claims)
- Copy is UK spelling, plain English, keyword-optimised

**Time Estimate:** 2 days (1 day structure, 1 day copy/FAQs)

---

## Phase 4: Performance & Mobile Optimisation (Day 6)

### Goals:
- Achieve Lighthouse score >90 (mobile)
- LCP <2.5s, CLS <0.1, INP <200ms
- Convert images to WebP, lazy-load, set dimensions
- Optimise fonts, defer scripts

### Tasks:

#### 4.1 Image Optimisation
- [ ] **Download Unsplash images:** Use `handoff/media/unsplash_candidates.json` IDs
  - Hero (5fNmWej4tAA)
  - Service cards (ZVprbBmT8QA, npxXWgQ33ZQ, KdeqA3aTnBY, etc.)
  - Process/about (8mn0OWRxm3g, wawEfYdpkag)
- [ ] **Convert to WebP:** Use Squoosh.app or Sharp CLI
  - Hero: max 1920×1080, <100 KB
  - Service cards: max 800×600, <50 KB
  - Icons: max 400×400, <20 KB
- [ ] **Save to `/public/images/`:** Organised subfolders (hero/, services/, about/)
- [ ] **Update `<Image>` components:**
  - Use Next.js `<Image>` with `width`, `height`, `alt`
  - Hero image: `priority={true}` (preload for LCP)
  - Below-fold: `loading="lazy"`
- [ ] **Alt text:** Use SEO-friendly alts from `unsplash_candidates.json` (include "Medway," "Kent," service terms)

**Example:**
```tsx
import Image from 'next/image';

<Image
  src="/images/hero/accountant-medway-office.webp"
  alt="Accountant in Medway office assisting small business owner"
  width={1920}
  height={1080}
  priority
  quality={85}
/>
```

**Acceptance:**
- ✅ All images WebP format
- ✅ Hero image <100 KB and has `priority`
- ✅ Explicit width/height set (prevents CLS)
- ✅ Alt text includes geo/service keywords

---

#### 4.2 Font Optimisation
- [ ] **Use Next.js Font Optimization:**
  - Update `layout.tsx` to use `next/font/google` (e.g., Inter or system font)
  - Set `display: 'swap'` to prevent FOIT
  - Subset to `['latin']`
- [ ] **Preload critical fonts:** Next.js handles this automatically if using `next/font`
- [ ] **Fallback stack:** Include system fonts (e.g., `font-family: var(--font-inter), system-ui, sans-serif`)

**Example:**
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

**Acceptance:**
- ✅ `font-display: swap` enabled
- ✅ No FOIT (Flash of Invisible Text)
- ✅ Font files <50 KB total

---

#### 4.3 JavaScript Optimisation
- [ ] **Defer analytics:** Use `next/script` with `strategy="afterInteractive"` or `"lazyOnload"`
- [ ] **Dynamic imports for heavy components:**
  - Calendly widget: `const Calendly = dynamic(() => import('./CalendlyWidget'), { ssr: false })`
  - Map embeds (if any)
  - Testimonial sliders (if using carousel)
- [ ] **Remove unused packages:** Run `npm-check` or audit `package.json`
- [ ] **Enable SWC minification:** Verify `next.config.ts` has `swcMinify: true` (default in Next.js 13+)

**Example (defer GA4):**
```tsx
import Script from 'next/script';

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"
  strategy="afterInteractive"
/>
```

**Acceptance:**
- ✅ Analytics loads after page interactive
- ✅ Heavy components lazy-loaded
- ✅ No console errors

---

#### 4.4 Caching & CDN
- [ ] **Enable Cloudflare (free tier):**
  - Point Namecheap DNS nameservers to Cloudflare
  - Enable "Auto Minify" (HTML, CSS, JS)
  - Enable "Brotli" compression
  - Set cache level: Standard
- [ ] **OR use Namecheap Supersonic CDN** (if available in cPanel)
- [ ] **Set cache headers:** Use `.htaccess` or `next.config.ts` headers (see `handoff/tech/performance_checklist.md` §6)

**Acceptance:**
- ✅ Static assets (images, CSS, JS) served with `Cache-Control: max-age=31536000`
- ✅ Brotli/Gzip enabled (test via https://tools.pingdom.com/)
- ✅ CDN active (check response headers for `cf-ray` or CDN signature)

---

#### 4.5 Mobile Optimisation
- [ ] **Test on real mobile device** (or Chrome DevTools mobile emulation)
- [ ] **Tap target size:** Buttons/links min 44×44px
- [ ] **No horizontal scroll:** Test with `overflow-x: hidden` on body
- [ ] **Sticky CTA bar (mobile):** Add bottom-fixed "Call Now" or "Book Consult" button
- [ ] **Viewport meta:** Ensure `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />`

**Acceptance:**
- ✅ No horizontal scroll
- ✅ Tap targets ≥44×44px
- ✅ Mobile sticky CTA visible and functional

---

#### 4.6 Performance Validation
- [ ] **Run Lighthouse (mobile):** https://pagespeed.web.dev/
  - Target: >90 overall, LCP <2.5s, CLS <0.1, INP <200ms
- [ ] **Fix top issues:**
  - If LCP slow: Check hero image size, defer JS, enable CDN
  - If CLS high: Ensure all images have width/height, fonts use `swap`
  - If INP high: Reduce JS, defer 3rd-party scripts
- [ ] **Run WebPageTest:** https://www.webpagetest.org/ (optional, for TTFB check)

**Acceptance:**
- ✅ Lighthouse mobile score >90
- ✅ All Core Web Vitals "Good" (green)
- ✅ No critical errors in PageSpeed Insights

---

**Phase 4 Deliverables:**
- All images WebP, lazy-loaded, dimensions set
- Fonts optimised with `font-display: swap`
- Analytics/scripts deferred
- CDN enabled with cache headers
- Mobile sticky CTA active
- Lighthouse score >90 (mobile)

**Time Estimate:** 1 day

---

## Phase 5: Final QA & Launch (Day 7)

### Goals:
- Pre-launch QA checklist (all browsers, devices)
- Submit to search engines
- Monitor initial indexing
- Set up review collection workflow (no fake reviews)

### Tasks:

#### 5.1 Pre-Launch QA
- [ ] **Cross-browser testing:** Chrome, Firefox, Safari, Edge (mobile + desktop)
- [ ] **Functional checks:**
  - [ ] All CTAs clickable (buttons, phone, email)
  - [ ] Forms working (if any contact forms)
  - [ ] Calendly embed loading (if using)
  - [ ] Mobile menu functional
  - [ ] Accordion FAQs expand/collapse
  - [ ] Smooth scroll anchors working
  - [ ] Footer links to privacy/terms pages working
- [ ] **Visual checks:**
  - [ ] No layout shift (CLS)
  - [ ] Images load (no broken src)
  - [ ] Fonts render correctly (no FOIT/FOUT)
  - [ ] Colours accessible (WCAG AA contrast: use https://webaim.org/resources/contrastchecker/)
- [ ] **No console errors:** Open DevTools → Console (should be clean)

**Acceptance:**
- ✅ Site functional on all major browsers/devices
- ✅ No visual or functional bugs
- ✅ No console errors

---

#### 5.2 SEO Final Checks
- [ ] **Title tags:** Unique, 55–60 chars, include keyword + brand
- [ ] **Meta descriptions:** Unique, 145–155 chars, include CTA
- [ ] **Heading hierarchy:** H1 (one per page) → H2 → H3 (logical structure)
- [ ] **Alt text:** All images have descriptive, keyword-rich alt attributes
- [ ] **Canonical tags:** Present on all pages
- [ ] **Open Graph:** Add OG tags for social sharing (optional but recommended)
  ```tsx
  export const metadata = {
    openGraph: {
      title: 'Accountant in Medway, Kent | Fileeasy Accountancy',
      description: 'Professional accountancy for Medway businesses...',
      url: 'https://fileeasyaccountancy.co.uk',
      siteName: 'Fileeasy Accountancy',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
      locale: 'en_GB',
      type: 'website',
    },
  };
  ```

**Acceptance:**
- ✅ All pages have unique title/meta
- ✅ H1 present and keyword-optimised
- ✅ All images have alt text
- ✅ OG tags present (test with https://opengraphcheck.com/)

---

#### 5.3 Submit to Search Engines
- [ ] **Google Search Console:**
  - Request indexing for homepage (Inspect URL → Request Indexing)
  - Submit sitemap (if not done in Phase 1)
- [ ] **Bing Webmaster Tools:**
  - Add site (https://www.bing.com/webmasters/)
  - Submit sitemap
- [ ] **Monitor indexing:** Check `site:fileeasyaccountancy.co.uk` in Google (may take 1–3 days)

**Acceptance:**
- ✅ Indexing requested in GSC
- ✅ Sitemap submitted to Google + Bing
- ✅ Homepage appears in `site:` search within 3 days

---

#### 5.4 Google Business Profile Optimisation
- [ ] **Complete GBP profile:**
  - [ ] Business name, address, phone (exact NAP match)
  - [ ] Website URL
  - [ ] Categories: Primary: "Accountant" | Secondary: "Tax Preparation Service," "Bookkeeping Service"
  - [ ] Opening hours (Mo-Fr 09:00-17:30, Sa 09:00-13:00, or actual)
  - [ ] Service areas: Medway, Chatham, Rochester, Gillingham, Strood, Rainham
  - [ ] Business description (750 chars max, include services + keywords)
  - [ ] Photos: Office exterior/interior, team, logo (min 5 photos)
- [ ] **Add attributes:**
  - "Identifies as women-owned" (if applicable)
  - "Online appointments" (if offering remote consults)
  - "Free consultation" (if true)
- [ ] **Create first GBP post:** e.g., "We're now live! Book your free accountancy consultation in Medway."

**Acceptance:**
- ✅ GBP 100% complete (no missing fields)
- ✅ NAP matches website exactly
- ✅ 5+ photos uploaded
- ✅ First post published

---

#### 5.5 Review Collection Workflow (White-Hat Only)
- [ ] **Set up review request system (no fake reviews):**
  - After service delivery, send email: "Thanks for working with us. If you're happy, we'd appreciate a Google review: [GBP review link]"
  - Add to email signature: "Leave us a review on Google"
- [ ] **GBP review link:** Get from GBP dashboard → "Get more reviews" → copy short link
- [ ] **Monitor reviews:** Respond to all reviews (positive + negative) within 48 hours
- [ ] **Schema:** DO NOT add `aggregateRating` until you have ≥5 real reviews

**Acceptance:**
- ✅ Review request email template created
- ✅ GBP review link obtained
- ✅ Process documented for ongoing review collection

---

#### 5.6 Tracking & Monitoring Setup
- [ ] **Google Analytics 4:**
  - Verify events firing (pageview, click_cta, form_submit)
  - Set up conversions: "book_consultation," "phone_call"
  - Add UTM parameters to any paid ads (e.g., `?utm_source=google&utm_medium=cpc&utm_campaign=medway`)
- [ ] **Google Search Console:**
  - Check "Performance" report weekly (queries, clicks, impressions)
  - Monitor "Coverage" for indexing issues
  - Check "Core Web Vitals" monthly
- [ ] **Set calendar reminders:**
  - Weekly: Check GSC performance, respond to GBP reviews
  - Monthly: Run Lighthouse audit, check for broken links
  - Quarterly: Content refresh (update FAQs, add new services if needed)

**Acceptance:**
- ✅ GA4 conversions tracked
- ✅ GSC showing data (may take 1–3 days after launch)
- ✅ Monitoring calendar set

---

#### 5.7 Launch Announcement (Optional)
- [ ] **Announce on social media:**
  - "We're live! Visit our new website for stress-free accounting in Medway: [URL]"
  - Share on Facebook, LinkedIn, Twitter (if active)
- [ ] **Email existing clients (if any):** "Check out our new website and book your next consultation online."
- [ ] **Local directories (optional, for link building):**
  - Yell.com
  - Thomson Local
  - FreeIndex
  - Medway.gov.uk business directory (if exists)

**Acceptance:**
- ✅ Social posts published (if applicable)
- ✅ Client email sent (if list exists)

---

**Phase 5 Deliverables:**
- QA complete (cross-browser, functional, visual)
- Submitted to Google + Bing
- GBP 100% complete with photos + posts
- Review collection workflow active
- GA4/GSC tracking verified
- Launch announcement (if applicable)

**Time Estimate:** 1 day

---

## Post-Launch Monitoring (Weeks 2–4)

### Week 1 Post-Launch:
- [ ] Monitor GSC for indexing (homepage should index within 3 days)
- [ ] Check GA4 for traffic (expect low initially; build over time)
- [ ] Respond to any GBP questions or reviews
- [ ] Fix any bugs reported by users

### Week 2:
- [ ] Run Lighthouse again (ensure scores stable)
- [ ] Check GSC "Performance" for first queries ranking
- [ ] Add 1–2 GBP posts (e.g., "Tax return deadline approaching – book now")
- [ ] Request reviews from 2–3 recent clients

### Week 3:
- [ ] Check Local Pack ranking for "accountant medway" (may not rank yet; expect 3–6 months for top 3)
- [ ] Audit backlinks (use Ahrefs free or Moz Link Explorer)
- [ ] Identify 1–2 local link opportunities (e.g., Medway business directories, Kent chamber of commerce)

### Week 4:
- [ ] Review GA4 data: top landing pages, bounce rate, conversions
- [ ] Check Core Web Vitals in GSC (should have data by now)
- [ ] Plan Phase 6 (content expansion): Add 1 blog post/guide per month (e.g., "IR35 Guide for Medway Contractors")

---

## Success Metrics (30-Day Check-In)

| Metric | Target (Day 30) | How to Measure |
|--------|-----------------|----------------|
| Homepage indexed | Yes | `site:fileeasyaccountancy.co.uk` in Google |
| Lighthouse score (mobile) | >90 | https://pagespeed.web.dev/ |
| GBP ranking "accountant medway" | Local Pack visible (position varies) | Incognito search from Medway IP |
| Impressions (GSC) | >100/mo | GSC Performance report |
| Clicks (GSC) | >5/mo | GSC Performance report |
| GBP reviews | ≥3 | GBP dashboard |
| GA4 sessions | >50/mo | GA4 Traffic Acquisition |
| Conversions (form/call) | ≥2 | GA4 Conversions |

**Note:** Local SEO takes 3–6 months to fully mature. Day 30 is baseline; expect growth over 3 months.

---

## Phase 6: Content Expansion (Month 2+, Optional)

Once foundations are solid, expand with high-value content:

### Potential Additions:
1. **Guides/Resources:**
   - "Self-Assessment Checklist for Medway Sole Traders"
   - "IR35 Guide for Contractors"
   - "MTD VAT: What Medway Businesses Need to Know"
2. **Case Studies (real only):**
   - "How We Saved a Rochester Contractor £5,000 in Tax"
   - Format: Challenge → Solution → Result (anonymised if needed)
3. **Seasonal Content:**
   - Jan: "Beat the Self-Assessment Deadline"
   - Apr: "Company Year-End: What You Need to File"
4. **Video (optional):**
   - 2-min explainer: "How We Work" or "What to Expect from Your Accountant"
   - Host on YouTube, embed on site

**Strategy:** Publish 1 piece/month, promote via GBP posts + social, monitor GSC for ranking.

---

## Guardrails & Compliance (All Phases)

### White-Hat Only:
- ❌ No fake reviews, ratings, testimonials
- ❌ No doorway pages (e.g., separate pages for "Chatham accountant," "Rochester accountant")
- ❌ No keyword stuffing (natural density ~1–2%)
- ❌ No hidden text, cloaking, or sneaky redirects
- ❌ No link buying or PBNs
- ✅ Real NAP (no virtual offices unless disclosed)
- ✅ Real accreditations only (ICAEW, ACCA, ATT, Xero, QB)
- ✅ Genuine testimonials with consent
- ✅ Transparent pricing philosophy (ranges OK; fake "limited time" discounts NOT OK)

### GDPR & Legal:
- [ ] Privacy policy live at `/privacy`
- [ ] Cookie consent (if using analytics beyond GA4 basic)
- [ ] Terms & conditions (optional but recommended)
- [ ] Email marketing opt-in (if collecting leads)

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `handoff/keyword_map.md` | Keywords, volumes, competitor analysis |
| `handoff/copy_outline.md` | Page structure, copy prompts, FAQs |
| `handoff/schema/*.json` | JSON-LD structured data templates |
| `handoff/tech/robots.txt` | Crawl control |
| `handoff/tech/sitemap.xml` | URL list for search engines |
| `handoff/tech/redirects.txt` | Canonical, HTTPS, www → apex rules |
| `handoff/tech/performance_checklist.md` | CWV optimisation guide |
| `handoff/media/unsplash_candidates.json` | Image IDs + alt text |
| `handoff/tracking/checklist.md` | GSC, GA4, GBP setup |
| `handoff/tasks.csv` | Cursor task list (see §9) |

---

## Questions or Blockers?

If stuck:
1. Check relevant file in `handoff/` folder
2. Validate with tools: Lighthouse, Rich Results Test, Redirect Checker
3. Cross-reference with Web.dev guides: https://web.dev/
4. For schema issues: https://schema.org/AccountingService

**No shortcuts.** Quality > speed. Better to launch Day 8 with 100% compliance than Day 6 with fake reviews or broken schema.

---

**Good luck. Let's launch this cleanly.**
