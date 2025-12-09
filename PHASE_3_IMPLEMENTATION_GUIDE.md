# Phase 3: Automatic Article Rendering - Implementation Guide

**Status:** ✅ Complete  
**Date:** November 2, 2025  
**Purpose:** Guide for automatically rendering all 86 service articles with consistent layout, spacing, and structure on the **MAIN FILE EASY ACCOUNTANCY SITE** (`fileeasyaccountancy.co.uk`)

---

## What Was Created

### 1. Shared Article Processing Utilities ✅

**Location:** `/src/lib/renderArticle.tsx`

**Functions:**
- `processArticleContent(html: string)` - Main processor that:
  - Adds IDs to H2/H3 headings for ToC
  - Paragraphifies plain text (if no block tags)
  - Normalizes tables (wraps in `.table-wrap`, ensures thead/tbody)
  - Normalizes external links (adds `rel="noopener noreferrer"` or `rel="nofollow noopener noreferrer"`)
  - Builds ToC from H2 headings

**Usage:**
```typescript
import { processArticleContent } from '@/lib/renderArticle';

const { toc, processedContent } = processArticleContent(rawHtml);
```

### 2. Existing Utilities (Already Created) ✅

- **`/src/lib/paragraphify.ts`** - Converts plain text to paragraphs
- **`/src/lib/buildToc.ts`** - Builds ToC from HTML headings
- **`/src/lib/injectCta.ts`** - Injects CTA after second H2

### 3. Article Components (Already Created) ✅

- **`/src/components/ArticleLayout.tsx`** - Main layout wrapper
- **`/src/components/ArticleCTA.tsx`** - CTA component
- **`/src/components/TocHighlight.tsx`** - ToC active state highlighting

### 4. Typography Stylesheet (Already Created) ✅

- **`/src/app/globals.css`** - Complete article typography & layout CSS

---

## How to Use for All Articles

### Current Article Structure (Example)

All articles should follow this pattern:

```tsx
// src/app/services/{category}/{slug}/page.tsx
import ArticleLayout from '@/components/ArticleLayout';
import ArticleCTA from '@/components/ArticleCTA';
import TocHighlight from '@/components/TocHighlight';
import { buildTocFromHtml } from '@/lib/buildToc';

export default function ServicePage() {
  // Extract ToC from headings in your JSX/HTML
  const toc = buildTocFromHeadings(document.querySelectorAll('h2[id]')); // Or hardcode from content
  
  return (
    <>
      <ArticleLayout
        title="Service Title"
        updated="November 2025"
        hero={{ src: "/images/articles/{slug}/hero.webp", alt: "..." }}
        toc={toc}
      >
        {/* Article content here - ensure all H2s have id attributes */}
        <h2 id="section-1">Section 1</h2>
        <p>Content...</p>
        
        {/* Mid-article CTA after second H2 */}
        <ArticleCTA variant="primary" />
        
        <h2 id="section-2">Section 2</h2>
        <p>More content...</p>
        
        {/* Final CTA at end */}
        <ArticleCTA variant="secondary" />
      </ArticleLayout>
      
      <TocHighlight />
    </>
  );
}
```

---

## Key Requirements for All Articles

### 1. **Heading IDs** (Required for ToC)
All H2 headings MUST have `id` attributes:

```tsx
<h2 id="what-this-helps">What this helps you do</h2>
<h2 id="how-it-works">How it works</h2>
```

### 2. **Two CTAs** (Required)
- **Mid-article CTA:** Place `<ArticleCTA variant="primary" />` after the second H2
- **Final CTA:** Place `<ArticleCTA variant="secondary" />` at the end before closing `</ArticleLayout>`

### 3. **Table Wrapping** (For tables with prices/data)
Wrap tables in `.table-wrap` div:

```tsx
<div className="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Service</td>
        <td>£150</td>
      </tr>
    </tbody>
  </table>
  <caption>Figures are indicative and for guidance only.</caption>
</div>
```

### 4. **Hero Images** (Recommended)
Create directory: `/public/images/articles/{slug}/hero.webp`
- Width: 1200px
- Format: WebP
- Alt text: Descriptive

### 5. **External Links**
- Official sources (gov.uk, hmrc.gov.uk): `rel="noopener noreferrer"`
- Other external: `rel="nofollow noopener noreferrer"`
- Internal links: No special rel needed

---

## File Structure for Articles

All 86 articles should be at:

```
src/app/services/{category}/{slug}/page.tsx
```

**Categories:**
- `bookkeeping` (30 articles)
- `tax` (30 articles)
- `core` (16 articles - note: called "Core Compliance" in summary)
- `advisory` (8 articles)

---

## Progress Tracking

**Location:** `/content/.fileeasy_progress.json`

After each article is published:
1. Increment `done` count
2. Remove slug from `queue` array
3. Update `last_published` with full URL
4. Add note in `notes` array

---

## Quick Checklist Per Article

- [ ] Page created at correct route: `src/app/services/{category}/{slug}/page.tsx`
- [ ] All H2 headings have `id` attributes
- [ ] ToC array built from H2 IDs
- [ ] ArticleLayout wraps all content
- [ ] Mid-article CTA after 2nd H2
- [ ] Final CTA at end
- [ ] TocHighlight component added
- [ ] Hero image in `/public/images/articles/{slug}/hero.webp` (optional)
- [ ] Metadata (title, description, canonical) set
- [ ] FAQ schema included (if FAQs present)
- [ ] Service schema included
- [ ] Breadcrumb schema included
- [ ] Tables wrapped in `.table-wrap` div
- [ ] External links have proper `rel` attributes
- [ ] Page tested locally
- [ ] Progress JSON updated

---

## Notes

- Articles are written as TSX/JSX pages (not HTML strings) for better type safety and React integration
- The `renderArticle.tsx` utilities are available if you need to process HTML strings in the future
- All styling is in `globals.css` - no need to import separate stylesheets
- The layout is responsive: ToC becomes static on mobile, sticky on desktop

---

## Next Steps

1. Use the current article (`monthly-bookkeeping-bank-reconciliation`) as a template
2. For each new article, copy the structure and update:
   - Content
   - Slugs
   - Metadata
   - ToC items
   - Hero image path
3. Ensure all 86 articles follow this exact structure
4. All articles will automatically inherit the same layout, spacing, and styling

---

**This ensures all 86 articles on the MAIN FILE EASY ACCOUNTANCY SITE have consistent, professional presentation with proper spacing, sticky ToC, and automatic CTA placement.**

