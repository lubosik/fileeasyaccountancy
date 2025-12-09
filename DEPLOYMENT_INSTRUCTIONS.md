# File Easy Accountancy - Deployment Instructions for Namecheap

**Date:** 2025-01-31  
**Package:** `fileeasy-construction-FINAL.zip`  
**Build Type:** Static Export (Next.js)

---

## 📦 Package Contents

The zip file contains the complete static website ready for upload to Namecheap cPanel.

**Contents:**
- All HTML pages
- CSS and JavaScript bundles
- Images and assets
- Sitemaps (sitemap.xml, sitemap-services.xml, sitemap-resources.xml)
- robots.txt
- All public assets

---

## 🚀 Upload Steps (cPanel File Manager)

### Step 1: Access cPanel
1. Log in to your Namecheap cPanel
2. Navigate to **File Manager**

### Step 2: Backup Current Site (IMPORTANT!)
1. Select all files in your `public_html` directory (or your domain's root directory)
2. Right-click → **Compress** → Create a backup zip file
3. Download the backup zip file to your computer

### Step 3: Delete Old Files
1. In File Manager, navigate to your domain's root directory (usually `public_html`)
2. Select all files and folders (except `.htaccess` if you have custom rules)
3. Delete them (or move to a backup folder)

### Step 4: Upload New Files
1. Click **Upload** in cPanel File Manager
2. Upload `fileeasy-construction-FINAL.zip`
3. Wait for upload to complete

### Step 5: Extract Files
1. Right-click on `fileeasy-construction-FINAL.zip`
2. Select **Extract**
3. Extract to the root directory (public_html)
4. **IMPORTANT:** After extraction, you'll have an `out` folder. Move all contents from `out/` to the root directory (`public_html/`)

### Step 6: Verify Permissions
1. Set folder permissions to **755**
2. Set file permissions to **644**
3. Ensure `.htaccess` (if present) has **644** permissions

### Step 7: Test the Site
Visit your domain and test:
- ✅ Homepage loads correctly
- ✅ Navigation works
- ✅ All pages load (Pricing, Resources, Services, etc.)
- ✅ Images display correctly
- ✅ Forms work (test a form submission)
- ✅ CTAs link to Calendly correctly

---

## 📋 Post-Deployment Checklist

### Immediate Checks
- [ ] Homepage loads: `https://fileeasyaccountancy.co.uk/`
- [ ] Pricing page: `https://fileeasyaccountancy.co.uk/construction-packages`
- [ ] Cash Flow Tool: `https://fileeasyaccountancy.co.uk/tools/cash-flow-health-check`
- [ ] IR35 Calculator: `https://fileeasyaccountancy.co.uk/ir35-calculator`
- [ ] Resources hub: `https://fileeasyaccountancy.co.uk/resources`
- [ ] Logo displays in header
- [ ] Favicon displays in browser tab
- [ ] All navigation links work
- [ ] Mobile menu works

### SEO Checks
- [ ] Sitemaps accessible:
  - `https://fileeasyaccountancy.co.uk/sitemap.xml`
  - `https://fileeasyaccountancy.co.uk/sitemap-services.xml`
  - `https://fileeasyaccountancy.co.uk/sitemap-resources.xml`
- [ ] robots.txt accessible: `https://fileeasyaccountancy.co.uk/robots.txt`
- [ ] Meta titles and descriptions display correctly
- [ ] Canonical tags present on all pages

### Functionality Checks
- [ ] All CTAs link to Calendly
- [ ] Contact forms submit correctly
- [ ] Email delivery works (test form submission)
- [ ] No console errors in browser DevTools
- [ ] Mobile responsive design works

---

## 🔧 Troubleshooting

### Issue: Pages show 404 errors
**Solution:** Ensure all files from `out/` folder are in the root directory, not in an `out/` subfolder.

### Issue: Images not loading
**Solution:** Check that `/public/` folder contents are in the root directory. Verify file permissions (644 for files, 755 for folders).

### Issue: CSS/JS not loading
**Solution:** Clear browser cache and check that `_next/` folder is present in root directory.

### Issue: Forms not submitting
**Solution:** Verify Web3Forms access key is set correctly. Check browser console for errors.

---

## 📊 Build Information

**Build Date:** 2025-01-31  
**Next.js Version:** 15.5.4  
**Output Type:** Static Export  
**Total Pages:** 100+ pages  
**Sitemaps:** 3 (main, services, resources)

---

## 🔗 Important URLs to Test

- Homepage: `/`
- Pricing: `/construction-packages`
- Cash Flow Tool: `/tools/cash-flow-health-check`
- IR35 Calculator: `/ir35-calculator`
- Resources: `/resources`
- Services: `/services`
- About: `/about`
- Contact: `/contact`

---

## 📝 Notes

- All pages are pre-rendered as static HTML
- No server-side rendering required
- Works with standard cPanel hosting
- No Node.js server needed
- All images are optimized for web
- Favicon and logo updated to new brand assets

---

**Ready for deployment!** 🚀

