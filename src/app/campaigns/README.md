# Campaign Landing Pages

This directory contains three high-intent Google Ads landing pages for File Easy Accountancy:

1. **Self-Assessment Rescue** (`/campaigns/self-assessment-rescue/`)
2. **Profit Optimization Blueprint** (`/campaigns/profit-optimization-blueprint/`)
3. **VAT & Bookkeeping Audit** (`/campaigns/vat-bookkeeping-audit/`)

## Overview

These pages are designed to:
- Match Google Ads ad copy for high conversion rates
- Provide valuable information without fully satisfying the query (nudges to Calendly)
- Maintain identical styling to the main website (Header, Footer, brand tokens)
- Include exit-intent popups tailored to each campaign
- Remain hidden from main navigation and sitemap until launch

## Directory Structure

```
src/app/campaigns/
├── self-assessment-rescue/
│   └── page.tsx          # Self-Assessment landing page
├── profit-optimization-blueprint/
│   └── page.tsx          # Profit optimization landing page
├── vat-bookkeeping-audit/
│   └── page.tsx          # VAT audit landing page
└── README.md             # This file

src/components/campaign/
├── CampaignLayout.tsx    # Shared layout wrapper (Header + Footer)
├── CalendlyEmbed.tsx     # Calendly widget with UTM passthrough
├── ExitIntentModal.tsx   # Desktop exit-intent popup
└── MobileStickyCTA.tsx   # Mobile sticky footer CTA
```

## Campaign Indexing (Robots Meta Tag)

Each page has a `CAMPAIGN_INDEX` flag at the top that controls whether the page is indexed by search engines:

```typescript
const CAMPAIGN_INDEX = false;  // Set to false while testing, true to go live
```

**To enable indexing:**
1. Open each page's `.tsx` file
2. Change `const CAMPAIGN_INDEX = false;` to `const CAMPAIGN_INDEX = true;`
3. Save the file

## Adding to Sitemap

By default, these pages are **excluded** from the sitemap. To include them when ready to launch:

### Option 1: Static Sitemap (Current Setup)

Edit `public/sitemap.xml` and add entries:

```xml
<url>
  <loc>https://fileeasyaccountancy.co.uk/campaigns/self-assessment-rescue</loc>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
<url>
  <loc>https://fileeasyaccountancy.co.uk/campaigns/profit-optimization-blueprint</loc>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
<url>
  <loc>https://fileeasyaccountancy.co.uk/campaigns/vat-bookkeeping-audit</loc>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
```

### Option 2: Dynamic Sitemap (Future Enhancement)

Create `src/app/sitemap.ts` for dynamic sitemap generation with filtering.

## UTM Parameter Pass-Through

The pages automatically capture UTM parameters from the page URL and pass them to Calendly:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

**How it works:**
1. User arrives at `https://fileeasyaccountancy.co.uk/campaigns/self-assessment-rescue?utm_source=google&utm_medium=cpc&utm_campaign=self-assessment-jan`
2. The `CalendlyEmbed` component detects these parameters
3. When user clicks a Calendly link, parameters are appended: `https://calendly.com/zkongwa/30min?utm_source=google&utm_medium=cpc&utm_campaign=self-assessment-jan`

## Analytics Tracking

Each page fires tracking events:

### Page View Event
```javascript
gtag('event', 'campaign_view', {
  campaign: 'self-assessment' | 'profit-optimization' | 'vat-audit',
  utm: { /* UTM parameters */ }
});
```

### CTA Click Events
```javascript
gtag('event', 'campaign_cta_click', {
  campaign: 'self-assessment' | 'profit-optimization' | 'vat-audit',
  location: 'hero' | 'inline' | 'footer' | 'exit_intent' | 'mobile_sticky',
  utm: { /* UTM parameters */ }
});
```

### Exit Intent Event
```javascript
gtag('event', 'campaign_exit_cta_click', {
  campaign: 'self-assessment' | 'profit-optimization' | 'vat-audit',
  source: 'exit_intent'
});
```

## Exit Intent Modal

Each page includes a desktop-only exit-intent popup that:
- Triggers when mouse leaves near the top of the page
- Shows once per session (dismissed state stored in `sessionStorage`)
- Is keyboard accessible (Tab navigation, ESC to close)
- Reuses site's CTA button styling

**To customize per page:**
Edit the `<ExitIntentModal>` component at the bottom of each page:

```typescript
<ExitIntentModal
  title="Your custom title"
  bullets={['Bullet 1', 'Bullet 2']}
  ctaLabel="Your CTA text"
  ctaUrl="https://calendly.com/zkongwa/30min"
  campaign="campaign-name"
/>
```

## Mobile Sticky CTA

Each page includes a mobile-only sticky footer CTA that appears at the bottom of the screen on mobile devices.

**To customize per page:**
Edit the `<MobileStickyCTA>` component at the bottom:

```typescript
<MobileStickyCTA
  text="Your mobile CTA text"
  href="https://calendly.com/zkongwa/30min"
/>
```

## Components Reused

These components are reused from the main site to maintain consistency:

- **Header** (`components/layout/Header.tsx`) - Main navigation (campaign pages NOT added to nav)
- **Footer** (`components/layout/Footer.tsx`) - Site footer
- **MobileCTABar** (`components/ui/MobileCTABar.tsx`) - Site-wide mobile CTA bar
- **FAQAccordion** (`components/ui/FAQAccordion.tsx`) - FAQ component
- **Brand Colors & Styles** - All colors from `src/styles/tokens.css` and `src/app/globals.css`
- **LocalBusinessSchema** (`lib/schema.tsx`) - Structured data for SEO

## Testing

### Local Development
```bash
cd file-easy-accountancy
npm run dev
```

Visit:
- http://localhost:3000/campaigns/self-assessment-rescue
- http://localhost:3000/campaigns/profit-optimization-blueprint
- http://localhost:3000/campaigns/vat-bookkeeping-audit

### QA Checklist

Before launching ads, verify:

- [ ] All pages load without errors
- [ ] Calendly links work and pass UTM parameters
- [ ] Exit-intent modal shows once, dismisses correctly
- [ ] Mobile sticky CTA appears on mobile devices
- [ ] No pages appear in main navigation menu
- [ ] All buttons use brand colors and styling
- [ ] Typography matches site (H1, H2, body text)
- [ ] Robots meta tag set to `noindex,follow` (until launch)
- [ ] Analytics events fire correctly (check Google Analytics)
- [ ] Lighthouse scores meet targets (90+ performance, accessibility, best practices, SEO)

## Launch Checklist

When ready to go live with Google Ads:

1. **Enable Indexing:**
   - Set `CAMPAIGN_INDEX = true` in all three page files
   - This changes robots meta tag to `index,follow`

2. **Add to Sitemap:**
   - Edit `public/sitemap.xml`
   - Add entries for all three campaign pages
   - Deploy sitemap update

3. **Submit to Google Search Console:**
   - Resubmit sitemap if using static
   - Wait for indexing (24-48 hours typically)

4. **Verify Tracking:**
   - Test UTM parameter passthrough
   - Verify Google Analytics events are firing
   - Check Calendly integration is receiving UTM params

5. **Launch Ads:**
   - Pause ad campaigns until indexing confirmed
   - Launch Google Ads campaigns pointing to new URLs
   - Monitor conversion rates and adjust as needed

## Troubleshooting

### Calendly Widget Not Loading
- Check that `CalendlyWidget` component loads the Calendly script
- Verify network tab shows script loading from `https://assets.calendly.com/`

### UTM Parameters Not Passing
- Check browser dev tools network tab
- Verify UTM params exist in page URL
- Check `CalendlyEmbed.tsx` component logic

### Exit Intent Not Triggering
- Only works on desktop (screen width >= 768px)
- Check `sessionStorage` for dismissed flag
- Verify mouse event listener is attached

### Lighthouse Scores Low
- Check for large images (optimize with Next.js Image component)
- Verify scripts load efficiently
- Check for render-blocking resources

## Support

For questions or issues with campaign pages:
- Check this README first
- Review component implementations in `src/components/campaign/`
- Verify brand tokens in `src/styles/tokens.css`
- Consult main site styling in `src/app/globals.css`

