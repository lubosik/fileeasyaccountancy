# Core Web Vitals & Performance Checklist
## Fileeasy Accountancy – 7-Day Quick Wins

**Target Metrics (Mobile):**
- **LCP (Largest Contentful Paint):** <2.5s (Good)
- **FID/INP (First Input Delay / Interaction to Next Paint):** <200ms / <200ms
- **CLS (Cumulative Layout Shift):** <0.1

**Tool:** https://pagespeed.web.dev/ (test both mobile + desktop)

---

## 1. Image Optimisation (High Impact)

### Actions:
- [ ] Convert all images to **WebP** (or AVIF if browser support allows)
- [ ] Use Next.js `<Image>` component with `priority` for hero image
- [ ] Set explicit `width` and `height` on all images (prevents CLS)
- [ ] Lazy-load images below fold (`loading="lazy"`)
- [ ] Compress images: target <100 KB for hero, <50 KB for icons/logos

### Implementation (Next.js):
```tsx
import Image from 'next/image';

// Hero image (above fold)
<Image
  src="/hero.webp"
  alt="Accountant in Medway office"
  width={1200}
  height={600}
  priority // Preload for LCP
  quality={85}
/>

// Below-fold images
<Image
  src="/service-icon.webp"
  alt="Tax return service"
  width={400}
  height={300}
  loading="lazy"
/>
```

### Tools:
- **Squoosh.app** (manual conversion)
- **Sharp** (Node.js batch script for `/public/images/*.jpg → *.webp`)

---

## 2. Font Optimisation (Moderate Impact)

### Actions:
- [ ] Use `font-display: swap` (avoid invisible text during load)
- [ ] Self-host Google Fonts or use Next.js Font Optimization
- [ ] Preload critical font files (e.g., primary sans-serif)
- [ ] Subset fonts (Latin only, remove unused glyphs)

### Implementation (Next.js 13+ with `next/font`):
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevents FOIT (Flash of Invisible Text)
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### Alternative (Tailwind config):
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

**CSS fallback:**
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-display: swap;
  font-weight: 100 900;
}
```

---

## 3. Critical CSS Extraction (Low Effort, High Gain)

### Actions:
- [ ] Inline critical CSS (above-fold styles) in `<head>`
- [ ] Defer non-critical CSS (below-fold components)
- [ ] Remove unused Tailwind classes (PurgeCSS is enabled by default in Tailwind 3+)

### Implementation (Next.js + Tailwind):
Tailwind automatically purges unused styles in production. Verify `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  // Purge is automatic in production build
};
```

**Manual critical CSS (if needed):**
Use [Critical](https://github.com/addyosmani/critical) to extract above-fold CSS:

```bash
npm install critical --save-dev
```

```js
// scripts/generate-critical-css.js
const critical = require('critical');

critical.generate({
  inline: true,
  base: 'out/', // Next.js static export folder
  src: 'index.html',
  target: 'index.html',
  width: 375,
  height: 812,
});
```

---

## 4. JavaScript Optimisation (Moderate Impact)

### Actions:
- [ ] Defer non-critical JS (analytics, chat widgets, etc.)
- [ ] Use dynamic imports for heavy components (e.g., Calendly widget)
- [ ] Remove unused npm packages (audit with `npm-check`)
- [ ] Enable `swcMinify` in Next.js config (default in Next.js 13+)

### Implementation:
```tsx
// Defer analytics (Google Analytics, etc.)
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"
  strategy="afterInteractive" // or "lazyOnload"
/>

// Dynamic import for heavy components
import dynamic from 'next/dynamic';

const CalendlyWidget = dynamic(() => import('@/components/ui/CalendlyWidget'), {
  ssr: false, // Don't render on server
  loading: () => <p>Loading booking widget...</p>,
});
```

---

## 5. Third-Party Scripts (High Impact on INP/FID)

### Actions:
- [ ] Audit all third-party scripts (GTM, Facebook Pixel, Hotjar, etc.)
- [ ] Defer or lazy-load non-essential scripts
- [ ] Use `next/script` with `strategy="lazyOnload"` for non-critical tags
- [ ] Consider using Partytown (web worker isolation for 3rd-party scripts)

### Priority Order:
1. **Essential (load immediately):** SSL, CDN
2. **High priority (defer):** Analytics (GTM, GA4)
3. **Low priority (lazy-load):** Chat widgets, social embeds, A/B testing

---

## 6. Hosting & Caching (Namecheap Specific)

### Actions:
- [ ] Enable Gzip/Brotli compression (usually enabled by default in cPanel)
- [ ] Set cache headers for static assets (images, CSS, JS)
- [ ] Use Cloudflare or Namecheap's Supersonic CDN (free tier)
- [ ] Enable HTTP/2 (usually enabled if SSL is active)

### .htaccess Cache Headers (Apache/Namecheap):
```apache
<IfModule mod_expires.c>
  ExpiresActive On

  # Images
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"

  # CSS & JS
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"

  # Fonts
  ExpiresByType font/woff2 "access plus 1 year"

  # HTML
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_headers.c>
  # Cache static assets
  <FilesMatch "\.(jpg|jpeg|png|webp|gif|ico|css|js|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>

  # Don't cache HTML
  <FilesMatch "\.html$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
  </FilesMatch>
</IfModule>
```

---

## 7. Mobile-Specific Optimisations

### Actions:
- [ ] Test on real mobile device (or Chrome DevTools mobile emulation)
- [ ] Ensure tap targets are ≥44×44px (buttons, links)
- [ ] Avoid horizontal scroll (test with `overflow-x: hidden` on body)
- [ ] Use `viewport-fit=cover` for notched devices (iPhone X+)

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

---

## 8. Cumulative Layout Shift (CLS) Fixes

### Common Causes:
- Images without `width`/`height`
- Web fonts loading (FOUT/FOIT)
- Injected ads or widgets (Calendly, etc.)
- Dynamic content above fold

### Fixes:
- [ ] Set dimensions on all images/iframes
- [ ] Reserve space for dynamic widgets (e.g., `min-height: 600px` for Calendly embed)
- [ ] Use `font-display: swap` (see §2)
- [ ] Avoid inserting content above existing content after page load

---

## 9. Server Response Time (TTFB)

### Target: <600ms (Good), <200ms (Excellent)

### Actions:
- [ ] Use CDN (Cloudflare free tier)
- [ ] Enable server-side caching (Namecheap: LiteSpeed Cache or Memcached)
- [ ] Optimise database queries (if using CMS)
- [ ] Consider switching to Vercel/Netlify for Next.js (faster cold starts)

**Test TTFB:** https://tools.pingdom.com/

---

## 10. Lazy Loading & Code Splitting

### Actions:
- [ ] Lazy-load below-fold images (`loading="lazy"`)
- [ ] Lazy-load below-fold components (React Suspense or `next/dynamic`)
- [ ] Split large JS bundles (Next.js does this automatically via route-based splitting)

### Example:
```tsx
import { lazy, Suspense } from 'react';

const Testimonials = lazy(() => import('@/components/ui/Testimonial'));

<Suspense fallback={<div>Loading...</div>}>
  <Testimonials />
</Suspense>
```

---

## 11. Remove Render-Blocking Resources

### Actions:
- [ ] Inline critical CSS (see §3)
- [ ] Defer non-critical CSS (e.g., FAQ accordion styles loaded on scroll)
- [ ] Use `media="print"` trick for non-critical CSS:

```html
<link rel="stylesheet" href="/non-critical.css" media="print" onload="this.media='all'">
```

---

## 12. Lighthouse CI / Monitoring

### Actions:
- [ ] Run Lighthouse in Chrome DevTools (Incognito mode)
- [ ] Set up PageSpeed Insights monitoring (weekly checks)
- [ ] Use Vercel Analytics or Google Search Console "Core Web Vitals" report
- [ ] Set up performance budgets (e.g., max bundle size 200 KB)

### Tools:
- https://pagespeed.web.dev/
- https://www.webpagetest.org/
- Chrome DevTools → Lighthouse tab

---

## Quick Wins Summary (Priority Order)

| Action | Impact | Effort | Days |
|--------|--------|--------|------|
| Convert images to WebP | High | Low | 1 |
| Add `priority` to hero image | High | Low | 1 |
| Enable `font-display: swap` | Med | Low | 1 |
| Defer analytics scripts | Med | Low | 1 |
| Set cache headers | Med | Low | 1 |
| Lazy-load below-fold images | Med | Low | 1 |
| Dynamic import heavy components | Med | Med | 2 |
| Enable CDN (Cloudflare) | High | Med | 2 |
| Audit & remove unused JS | Med | Med | 2 |
| Set explicit image dimensions | Med | Low | 1 |

**Total:** 7 days for all quick wins (parallelise where possible)

---

## Acceptance Criteria (Launch)

- [ ] Lighthouse score >90 (mobile)
- [ ] LCP <2.5s
- [ ] CLS <0.1
- [ ] INP <200ms
- [ ] No console errors
- [ ] All images WebP format
- [ ] All fonts use `font-display: swap`
- [ ] Analytics deferred
- [ ] Cache headers set

---

## Post-Launch Monitoring

- Weekly: Check Google Search Console "Core Web Vitals" report
- Monthly: Run full Lighthouse audit
- Quarterly: Review and optimise new content/scripts

---

**Reference:**
- https://web.dev/vitals/
- https://nextjs.org/docs/basic-features/image-optimization
- https://nextjs.org/docs/basic-features/font-optimization
