# Structured Data (JSON-LD) Implementation Guide

## Files in This Directory

1. **accounting_service_schema.json** – Primary AccountingService schema with NAP, services, areas served
2. **faq_schema.json** – FAQPage schema for on-page Q&A section
3. **organization_schema.json** – Organization schema with branding, founders, reviews
4. **website_schema.json** – WebSite schema with site search action

---

## Implementation Instructions (for Cursor)

### Option A: Inline in `layout.tsx` or `page.tsx` (Next.js)

Add each schema as a `<script type="application/ld+json">` tag in the `<head>` or body.

**Example in `app/layout.tsx`:**

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        {/* Organization + WebSite schemas (site-wide) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Example in `app/page.tsx` (homepage only):**

```tsx
import accountingServiceSchema from '@/handoff/schema/accounting_service_schema.json';
import faqSchema from '@/handoff/schema/faq_schema.json';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingServiceSchema) }}
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

### Option B: Use Existing Schema Components in `src/lib/schema.tsx`

You already have helper components. Migrate the JSON to props:

**Example:**

```tsx
import { LocalBusinessSchema, FAQPageSchema, OrganizationSchema } from '@/lib/schema';

<LocalBusinessSchema
  name="Fileeasy Accountancy"
  description="Professional accountancy services for Medway businesses"
  address={{
    streetAddress: "[INSERT]",
    addressLocality: "Chatham",
    addressRegion: "Kent",
    postalCode: "[INSERT]",
    addressCountry: "GB"
  }}
  telephone="+44-1634-XXXXXX"
  email="hello@fileeasyaccountancy.co.uk"
  url="https://fileeasyaccountancy.co.uk"
  priceRange="££"
  openingHours={['Mo-Fr 09:00-17:30', 'Sa 09:00-13:00']}
  serviceArea={{
    name: 'Medway, Kent',
    latitude: [INSERT],
    longitude: [INSERT],
    radius: 15000
  }}
  sameAs={[
    'https://www.facebook.com/fileeasyaccountancy',
    'https://www.linkedin.com/company/fileeasy-accountancy',
    'https://www.google.com/maps?cid=[INSERT]'
  ]}
  additionalProperties={{
    knowsAbout: ['Tax Returns', 'Bookkeeping', 'VAT', 'Payroll', ...],
    slogan: 'Stress-Free Accounting for Medway Businesses'
  }}
/>

<FAQPageSchema
  faqs={[
    {
      question: 'How much does an accountant cost in Medway?',
      answer: 'Fees vary by service. Self-assessment typically starts from £150+VAT...'
    },
    // ... rest of FAQs from faq_schema.json
  ]}
/>
```

---

## Placeholders to Fill Before Launch

Replace these tokens with real data:

### In `accounting_service_schema.json` + `organization_schema.json`:
- `[INSERT STREET ADDRESS]`
- `[INSERT POSTCODE]`
- `[INSERT LATITUDE]` / `[INSERT LONGITUDE]` (get from Google Maps)
- `+44-1634-XXXXXX` → real phone number
- `[INSERT_GOOGLE_BUSINESS_PROFILE_CID]` → get from GBP share URL
- Social URLs (Facebook, LinkedIn, Twitter) if they exist; remove if not
- `[YYYY-MM-DD]` → founding date (optional)
- `[FOUNDER NAME]` → real name or remove `founders` array

### In `organization_schema.json` only:
- `aggregateRating` → **CRITICAL**: Only include if you have real Google/Trustpilot reviews. Remove entire `aggregateRating` block if not.

### Logo and Image URLs:
- `https://fileeasyaccountancy.co.uk/logo.png` → actual logo path
- `https://fileeasyaccountancy.co.uk/office-photo.jpg` → actual hero/office image

---

## Validation

After implementation:

1. **Google Rich Results Test:**
   https://search.google.com/test/rich-results

2. **Schema.org Validator:**
   https://validator.schema.org/

3. **Google Search Console:**
   - Check "Enhancements" for FAQs, Organization, LocalBusiness errors

---

## Schema Layering Strategy

Use **separate `<script>` blocks** for each schema type (not one giant nested object). Google prefers:

```html
<script type="application/ld+json">{ AccountingService schema }</script>
<script type="application/ld+json">{ FAQPage schema }</script>
<script type="application/ld+json">{ Organization schema }</script>
<script type="application/ld+json">{ WebSite schema }</script>
```

**Avoid** embedding one schema inside another unless using `@id` references (which we do for Organization ↔ WebSite link).

---

## Mobile & Performance Notes

- JSON-LD scripts don't block rendering (safe to put in `<head>`)
- Total schema payload: ~3–4 KB (negligible)
- No need to async/defer JSON-LD scripts

---

## Future Enhancements

- **BreadcrumbList:** Add if you create legal pages (Home > Privacy)
- **Review Schema:** When you collect real reviews, add individual `Review` objects to `AccountingService`
- **Video:** If you create explainer videos, add `VideoObject` schema
- **HowTo Schema:** For "How to prepare for your tax return" content pieces

---

## Questions?

Refer to:
- Schema.org docs: https://schema.org/AccountingService
- Google guidelines: https://developers.google.com/search/docs/appearance/structured-data/local-business
