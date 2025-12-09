# Tracking & Analytics Setup Checklist
## Fileeasy Accountancy

---

## Google Search Console Setup

### Step 1: Add Property
- [ ] Go to https://search.google.com/search-console/
- [ ] Click "Add property"
- [ ] Choose property type: **URL prefix** (recommended)
- [ ] Enter: `https://fileeasyaccountancy.co.uk` (use canonical domain)
- [ ] Click "Continue"

### Step 2: Verify Ownership
Choose one verification method:

**Option A: DNS Verification (Recommended)**
- [ ] Copy TXT record provided by GSC
- [ ] Log in to Namecheap DNS settings
- [ ] Add TXT record: Host=`@`, Value=`google-site-verification=XXXX`
- [ ] Wait 5–15 mins for propagation
- [ ] Click "Verify" in GSC

**Option B: HTML File Upload**
- [ ] Download verification file (e.g., `google1234.html`)
- [ ] Upload to `/public/` folder (Next.js) or root directory
- [ ] Verify file accessible: `https://fileeasyaccountancy.co.uk/google1234.html`
- [ ] Click "Verify" in GSC

**Option C: HTML Tag (Next.js)**
- [ ] Copy meta tag: `<meta name="google-site-verification" content="XXXX" />`
- [ ] Add to `app/layout.tsx` in `<head>`:
  ```tsx
  export const metadata = {
    verification: {
      google: 'XXXX', // Paste code here
    },
  };
  ```
- [ ] Deploy, then click "Verify" in GSC

### Step 3: Submit Sitemap
- [ ] In GSC, go to "Sitemaps" (left sidebar)
- [ ] Enter sitemap URL: `https://fileeasyaccountancy.co.uk/sitemap.xml`
- [ ] Click "Submit"
- [ ] Wait 24–48 hours for indexing to begin

### Step 4: Monitor
- [ ] Check "Coverage" report (indexed pages)
- [ ] Check "Performance" report (queries, clicks, impressions)
- [ ] Set up email alerts for critical issues (Settings → Users and permissions)

---

## Google Analytics 4 Setup

### Step 1: Create GA4 Property
- [ ] Go to https://analytics.google.com/
- [ ] Click "Admin" (gear icon, bottom-left)
- [ ] Under "Property," click "Create Property"
- [ ] Property name: `Fileeasy Accountancy`
- [ ] Time zone: `United Kingdom`
- [ ] Currency: `Pound Sterling (GBP)`
- [ ] Click "Next"
- [ ] Business details: Industry = "Finance," Size = "Small"
- [ ] Click "Create" and accept ToS

### Step 2: Set Up Data Stream
- [ ] Choose platform: **Web**
- [ ] Website URL: `https://fileeasyaccountancy.co.uk`
- [ ] Stream name: `Fileeasy Website`
- [ ] Enhanced measurement: **Enable** (tracks scrolls, clicks, video, file downloads)
- [ ] Click "Create stream"
- [ ] Copy **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Install Tracking Code (Next.js)
- [ ] Create `/src/lib/gtag.ts`:
  ```typescript
  export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your ID

  export const pageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  };

  export const event = ({ action, category, label, value }: {
    action: string;
    category: string;
    label: string;
    value?: number;
  }) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };
  ```

- [ ] Add to `app/layout.tsx`:
  ```tsx
  import Script from 'next/script';
  import { GA_TRACKING_ID } from '@/lib/gtag';

  export default function RootLayout({ children }) {
    return (
      <html lang="en-GB">
        <head>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </head>
        <body>{children}</body>
      </html>
    );
  }
  ```

### Step 4: Test Tracking
- [ ] Deploy site
- [ ] Visit homepage in browser
- [ ] Open GA4 → "Reports" → "Realtime"
- [ ] Verify your visit appears (may take 30 secs)

### Step 5: Set Up Conversions
- [ ] In GA4, go to "Admin" → "Events"
- [ ] Click "Create event"
- [ ] Create custom events:
  - **book_consultation** (when user clicks CTA)
  - **phone_call** (when user clicks phone number)
  - **email_click** (when user clicks email)
- [ ] Mark events as conversions:
  - Go to "Admin" → "Conversions"
  - Toggle "Mark as conversion" for each event

**Track CTA Clicks (Example):**
```tsx
import { event } from '@/lib/gtag';

<button onClick={() => {
  event({
    action: 'click',
    category: 'CTA',
    label: 'Book Consultation',
  });
  window.open('https://calendly.com/yourlink', '_blank');
}}>
  Book Your Free Consultation
</button>
```

---

## Google Business Profile (GBP) Setup

### Step 1: Claim/Create Profile
- [ ] Go to https://www.google.com/business/
- [ ] Search for "Fileeasy Accountancy" (may already exist if auto-created)
- [ ] If exists: **Claim it** | If not: **Create new**
- [ ] Follow verification steps (postcard to address, phone, email, instant if already verified domain)

### Step 2: Complete Profile (100%)
- [ ] **Business name:** Fileeasy Accountancy (exact match to website)
- [ ] **Primary category:** Accountant
- [ ] **Additional categories:** Tax Preparation Service, Bookkeeping Service
- [ ] **Address:** [Full street address, Chatham, Kent, ME4 XXX] (exact NAP match)
- [ ] **Service area:** Add Medway, Chatham, Rochester, Gillingham, Strood, Rainham
- [ ] **Phone:** +44 1634 XXX XXX (exact match)
- [ ] **Website:** https://fileeasyaccountancy.co.uk
- [ ] **Opening hours:**
  - Monday–Friday: 09:00–17:30
  - Saturday: 09:00–13:00 (or "By appointment")
  - Sunday: Closed
- [ ] **Business description (750 chars max):**
  ```
  Professional accountancy services for Medway businesses and individuals. We offer tax returns, bookkeeping, VAT, payroll, and business advisory for SMEs, contractors, and landlords. Based in Chatham, Kent, we serve clients across Medway including Rochester, Gillingham, Strood, and Rainham. Our services include self-assessment, limited company accounts, Making Tax Digital compliance, IR35 reviews, and cloud accounting setup (Xero, QuickBooks). Free initial consultation available. Contact us today for stress-free accounting.
  ```

### Step 3: Add Photos (Min 5, Recommended 10+)
- [ ] **Logo:** Square format, 250×250px min
- [ ] **Cover photo:** 1024×576px (16:9), shows office exterior or branded image
- [ ] **Office interior:** 3–5 photos (desk, meeting room, reception)
- [ ] **Team photos:** 2–3 (founders, staff – real only)
- [ ] **Product/service photos:** Laptops, documents, consultation scenes

**Photo Guidelines:**
- High resolution (min 720px wide)
- Well-lit, professional
- No stock photos (Google penalises generic images)
- Include location clues (Medway signage if possible)

### Step 4: Add Attributes
- [ ] "Online appointments" (if offering)
- [ ] "Free consultation" (if true)
- [ ] "Identifies as women-owned" (if applicable)
- [ ] "Identifies as LGBTQ+-friendly" (if applicable)

### Step 5: Create First Post
- [ ] Go to "Posts" in GBP dashboard
- [ ] Click "Add update"
- [ ] Example post:
  ```
  🎉 We're live! Our new website is ready. Book your free accountancy consultation in Medway today.
  👉 https://fileeasyaccountancy.co.uk
  📞 01634 XXX XXX
  ```
- [ ] Add photo (hero image or office)
- [ ] Add CTA button: "Learn more" or "Call now"
- [ ] Publish

### Step 6: Get Review Link
- [ ] In GBP dashboard, click "Get more reviews"
- [ ] Copy short URL (format: `https://g.page/r/XXXX/review`)
- [ ] Use in email signatures, thank-you emails, invoices

---

## UTM Parameters for Paid Ads (Optional)

If running Google Ads, Facebook Ads, or any paid campaigns:

### UTM Structure:
```
https://fileeasyaccountancy.co.uk/?utm_source=google&utm_medium=cpc&utm_campaign=medway_accountant&utm_content=ad_variant_1
```

### Parameters:
- **utm_source:** Platform (google, facebook, bing)
- **utm_medium:** Channel (cpc, email, social)
- **utm_campaign:** Campaign name (medway_accountant, tax_returns_jan)
- **utm_content:** Ad variant (ad1, ad2, blue_cta)

### Generate UTMs:
- Use https://ga-dev-tools.google/campaign-url-builder/
- Track in GA4 → "Reports" → "Acquisition" → "Traffic acquisition"

---

## Weekly Monitoring Routine

### Monday (10 mins):
- [ ] Check GSC "Performance" → last 7 days (queries, clicks, impressions)
- [ ] Check GA4 "Realtime" → verify tracking still working
- [ ] Check GBP "Insights" → views, clicks, direction requests

### Friday (15 mins):
- [ ] Respond to any GBP reviews/questions
- [ ] Check GSC "Coverage" for new indexing errors
- [ ] Review top 3 landing pages in GA4

### Monthly (30 mins):
- [ ] Run Lighthouse audit (check CWV stability)
- [ ] Review GA4 "Acquisition" report (traffic sources)
- [ ] Check GBP ranking for "accountant medway" (incognito search)
- [ ] Export GSC data to spreadsheet (track queries gaining/losing impressions)

---

## Tools & Logins (Keep Secure)

| Tool | URL | Login |
|------|-----|-------|
| Google Search Console | https://search.google.com/search-console/ | [Google Account] |
| Google Analytics 4 | https://analytics.google.com/ | [Google Account] |
| Google Business Profile | https://business.google.com/ | [Google Account] |
| Namecheap DNS | https://www.namecheap.com/ | [Namecheap Account] |
| Cloudflare (if used) | https://dash.cloudflare.com/ | [Cloudflare Account] |

**Best Practice:** Use same Google account for GSC, GA4, GBP for easy cross-linking.

---

## Acceptance Criteria (Launch Day)

- ✅ GSC property verified and sitemap submitted
- ✅ GA4 tracking live and events firing
- ✅ GBP profile 100% complete with 5+ photos
- ✅ First GBP post published
- ✅ Review link obtained and added to email signature
- ✅ Tracking tested (visit site → see in GA4 Realtime)

---

## Post-Launch: First 30 Days

- **Day 1:** Verify tracking (GSC, GA4, GBP)
- **Day 3:** Check if homepage indexed (`site:fileeasyaccountancy.co.uk`)
- **Day 7:** First GSC performance data available
- **Day 14:** Check GBP insights (views, clicks)
- **Day 30:** Run full analytics review (traffic, conversions, top queries)

---

## Privacy & Compliance

- [ ] **GA4 anonymize IP:** Enabled by default in GA4
- [ ] **Cookie consent:** If using cookies beyond GA4, add consent banner (e.g., CookieYes, OneTrust)
- [ ] **Privacy policy:** Link GA4 usage in `/privacy` page
- [ ] **GDPR:** If collecting emails (forms), add opt-in checkbox + double opt-in

---

**Reference:**
- GA4 Setup Guide: https://support.google.com/analytics/answer/9304153
- GSC Setup: https://support.google.com/webmasters/answer/9008080
- GBP Help: https://support.google.com/business/
