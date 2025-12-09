# Deployment Package V2 - Updated with 3 Offices & UK-Wide Branding

**Date:** October 18, 2025
**Package:** `fileeasy-deployment-v2.zip` (11 MB)
**Location:** `/Users/ghost/File Easy/file-easy-accountancy/fileeasy-deployment-v2.zip`

---

## 🆕 What's New in V2

### Three Office Locations

The website now features **three office addresses**:

1. **Kent Office (Rochester)**
   - 43 Castle Avenue
   - Rochester, Kent
   - ME1 2DU
   - United Kingdom

2. **London Office**
   - 124 City Road
   - London
   - EC1V 2NX
   - United Kingdom

3. **Dubai Office**
   - Unit No: RET-R5-185
   - Jumeirah Lakes Towers
   - Dubai
   - United Arab Emirates

---

### UK-Wide Branding (Changed from "Kent, UK")

All references to "Kent, UK" have been updated to emphasize **UK-wide coverage**:

- **Homepage Hero:** "Medway-based accountants serving businesses across the UK and Dubai"
- **SEO Targeting:** Changed from Kent-only to nationwide UK coverage while maintaining Medway local presence
- **Metadata:** Updated all page titles and descriptions to show "UK & Dubai" instead of "Kent & Dubai"
- **Service Areas:** Now emphasizes UK-wide service with local offices in Kent, London, and Dubai

---

## 📄 Updated Pages

### 1. Homepage ([page.tsx](src/app/page.tsx))

**Changes:**
- Hero section now says "Medway-based accountants serving businesses across the UK and Dubai"
- Contact section displays all 3 office addresses
- Service areas updated to show UK-wide coverage

**SEO Updates:**
- Title: "Accountant in UK & Dubai | Fileeasy Accountancy"
- Keywords include: London accountant, Kent accountant, UK accountant

---

### 2. About Page ([about/page.tsx](src/app/about/page.tsx))

**Changes:**
- Subtitle: "Your trusted UK & Dubai accounting partner"
- International Presence value updated to mention all 3 offices
- "Why Choose File Easy" section references UK and Dubai instead of just Kent

**SEO Updates:**
- Title: "About File Easy Accountancy | UK & Dubai Accountants"
- Description updated to show UK-wide service
- Keywords: UK accounting team, London accountants, Kent accountants

---

### 3. Contact Page ([contact/page.tsx](src/app/contact/page.tsx))

**Changes:**
- Added dedicated "Our Offices" section displaying all 3 locations
- Description mentions "Offices in Kent, London, and Dubai"

**SEO Updates:**
- Title: "Contact File Easy Accountancy | UK & Dubai Accountants"
- Description: "offices in Kent, London, and Dubai serving businesses across the UK and UAE"
- Keywords: contact accountants UK, London accountants, Kent accountants, Dubai accounting

---

### 4. Resources Page ([resources/page.tsx](src/app/resources/page.tsx))

**Changes:**
- Subtitle: "Expert guides for UK businesses"
- Description: "Written by qualified accountants for SMEs and freelancers across the UK"

**SEO Updates:**
- Title: "Resources - Accounting Guides for UK Businesses"
- Description updated for UK-wide targeting

---

### 5. Pricing Page ([pricing/page.tsx](src/app/pricing/page.tsx))

**SEO Updates:**
- Title: "Pricing - File Easy Accountancy | Transparent Accounting Fees UK & Dubai"
- Description: "pricing for accounting services across the UK and Dubai"
- Keywords: accounting fees UK, London accountant fees, Kent accountant fees

---

### 6. IR35 Calculator ([ir35-calculator/page.tsx](src/app/ir35-calculator/page.tsx))

**SEO Updates:**
- Title: "IR35 Calculator - Compare Inside vs Outside IR35 | File Easy Accountancy UK"
- Description: "works best for UK contractors"
- Keywords: IR35 calculator UK, IR35 calculator London, IR35 calculator Kent

---

### 7. Root Layout ([layout.tsx](src/app/layout.tsx))

**SEO Updates:**
- Title: "Accountant in UK & Dubai | Fileeasy Accountancy"
- Description: "Professional accountancy serving businesses across the UK and Dubai"
- Keywords: accountant UK, UK accountant, London accountant, Kent accountant, Dubai accountant
- OpenGraph & Twitter cards updated with UK-wide messaging

---

## 🔧 Technical Details

### Updated Metadata Strategy

**Before (V1):**
- Target: "Kent, UK" or "Kent & Dubai"
- Service Area: Primarily Kent with some Dubai references
- Local Focus: Chatham, Rochester, Gillingham, Medway

**After (V2):**
- Target: "UK" and "Dubai"
- Service Area: UK-wide with offices in Kent, London, and Dubai
- Local Focus: Maintained Medway/Rochester local presence while expanding to nationwide UK
- SEO Balance: Local SEO for Medway + National SEO for UK

---

## 📦 What's Still Included (From V1)

All fixes from the previous version remain:

✅ Resources page directory listing fix
✅ Services page directory listing fix
✅ IR35 form redirect to Notion
✅ 404 error fixes for all pages
✅ .htaccess configuration
✅ Web3Forms integration
✅ Google Analytics (G-VK0JMW8SEC)
✅ Email: zara@fileeasyaccountancy.co.uk

---

## 🚀 Deployment Instructions

### Step 1: Download the Package
The new deployment package is located at:
```
/Users/ghost/File Easy/file-easy-accountancy/fileeasy-deployment-v2.zip
```

### Step 2: Access Namecheap cPanel
1. Login to Namecheap
2. Dashboard → Hosting List → "Go to cPanel"

### Step 3: Backup Existing Site (Optional)
1. File Manager → `public_html`
2. Download or move existing files to a backup folder

### Step 4: Clear public_html
1. Delete all files in `public_html` directory
2. Keep folder empty for fresh deployment

### Step 5: Upload & Extract
1. Upload `fileeasy-deployment-v2.zip` to `public_html`
2. Right-click → Extract
3. Extract to `public_html` (current directory)
4. Delete the zip file after extraction

### Step 6: Verify Structure
Ensure `public_html` contains:
```
public_html/
├── .htaccess          ← CRITICAL FILE!
├── index.html         ← Must be at root!
├── about.html         ← Updated with 3 offices
├── contact.html       ← Updated with 3 offices
├── pricing.html
├── resources.html
├── services.html
├── ir35-calculator.html
├── _next/
├── images/
├── resources/         (folder with sub-pages)
├── services/          (folder with sub-pages)
└── sitemap.xml
```

### Step 7: Test Updated Pages
Navigate to:
- https://fileeasyaccountancy.co.uk/ ✅ (Check hero section says UK & Dubai)
- https://fileeasyaccountancy.co.uk/about ✅ (Check for 3 offices mention)
- https://fileeasyaccountancy.co.uk/contact ✅ (Check "Our Offices" section displays all 3)
- https://fileeasyaccountancy.co.uk/pricing ✅
- https://fileeasyaccountancy.co.uk/services ✅
- https://fileeasyaccountancy.co.uk/resources ✅
- https://fileeasyaccountancy.co.uk/ir35-calculator ✅

---

## ✅ Verification Checklist

### Functionality (From V1)
- [ ] Homepage loads correctly
- [ ] About page accessible (no 404)
- [ ] Contact page accessible (no 404)
- [ ] Pricing page accessible (no 404)
- [ ] Resources page shows grid (not directory listing)
- [ ] Services page shows grid (not directory listing)
- [ ] IR35 Calculator works and calculates
- [ ] Lead magnet form redirects to Notion
- [ ] Navigation works across all pages
- [ ] Contact forms submit via Web3Forms

### New Content (V2)
- [ ] Homepage hero mentions "UK and Dubai"
- [ ] Homepage contact section shows 3 offices
- [ ] About page mentions UK-wide coverage
- [ ] Contact page displays "Our Offices" section with all 3 addresses
- [ ] Kent office address is 43 Castle Avenue, Rochester, ME1 2DU
- [ ] London office address is 124 City Road, London, EC1V 2NX
- [ ] Dubai office address is Unit No: RET-R5-185, JLT, Dubai
- [ ] Page titles reference "UK & Dubai" instead of "Kent & Dubai"

---

## 📝 Key Changes Summary

| Aspect | V1 (Old) | V2 (New) |
|--------|----------|----------|
| **Offices** | Kent (Chatham) + Dubai | Kent (Rochester) + London + Dubai |
| **Branding** | "Kent, UK" | "UK" (nationwide) |
| **Hero Message** | Kent-focused | Medway-based, serving UK & Dubai |
| **SEO Target** | Kent businesses | UK businesses + Dubai |
| **Contact Info** | 2 offices | 3 offices |
| **Kent Address** | Chatham | Rochester (43 Castle Avenue) |

---

## 🎯 SEO Impact

### Improved Rankings For:
- "UK accountant"
- "London accountant"
- "accountant UK"
- Nationwide contractor services
- Dubai accounting services

### Maintained Rankings For:
- "Medway accountant"
- "Rochester accountant"
- "Kent accountant"
- Local Medway searches

---

## 📞 Support

**If you encounter issues:**

1. Check browser console (F12) for JavaScript errors
2. Verify all 3 office addresses display correctly
3. Check that .htaccess uploaded correctly
4. Contact Namecheap support for server-specific issues

---

**Ready to Deploy! 🚀**

The site now properly reflects File Easy Accountancy's presence across the UK and Dubai with offices in Kent (Rochester), London, and Dubai while maintaining strong local Medway SEO.
