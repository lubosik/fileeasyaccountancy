# Namecheap cPanel Deployment Instructions for File Easy Accountancy

## Package Ready for Upload

Your static website has been successfully built and packaged for Namecheap hosting!

**Deployment Package:** `fileeasy-deployment.zip` (11 MB)
**Location:** `/Users/ghost/File Easy/file-easy-accountancy/fileeasy-deployment.zip`

---

## Step-by-Step Upload Instructions

### 1. Access Your Namecheap cPanel

1. Log into your Namecheap account at https://www.namecheap.com
2. Navigate to **Dashboard** → **Hosting List**
3. Find your hosting plan and click **"Go to cPanel"**

### 2. Navigate to File Manager

1. In cPanel, find and click on **"File Manager"** (usually in the "Files" section)
2. Navigate to the **`public_html`** directory
   - This is the root folder for your main domain website
   - If deploying to a subdomain, navigate to the appropriate folder instead

### 3. Backup Existing Files (Optional but Recommended)

1. If you have existing files in `public_html`, consider backing them up first
2. You can download them or move them to a backup folder

### 4. Clear the public_html Directory

1. Select all files in `public_html` (if any)
2. Delete them to start fresh
   - **IMPORTANT:** Make sure `index.html` will be at the root level after extraction

### 5. Upload the Deployment Zip File

1. Click the **"Upload"** button in the File Manager toolbar
2. Click **"Select File"** or drag-and-drop `fileeasy-deployment.zip`
3. Wait for the upload to complete (11 MB should upload quickly)
4. Close the upload dialog when complete

### 6. Extract the Zip File

1. Go back to File Manager and navigate to `public_html`
2. Find `fileeasy-deployment.zip` in the file list
3. **Right-click** on the zip file (or select it and use the toolbar)
4. Click **"Extract"**
5. Confirm extraction to the current directory (`public_html`)
6. Wait for extraction to complete

### 7. Verify File Structure

After extraction, your `public_html` should contain:
```
public_html/
├── index.html          (homepage - MUST be at root!)
├── about.html
├── contact.html
├── pricing.html
├── privacy.html
├── resources.html
├── ir35-calculator.html
├── services.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── _next/              (Next.js assets folder)
├── images/             (image assets)
├── services/           (service pages)
├── resources/          (resource pages)
└── [other files]
```

**CRITICAL:** Ensure `index.html` is at the root of `public_html`, not inside a subfolder!

### 8. Clean Up

1. Delete the `fileeasy-deployment.zip` file from `public_html` (no longer needed)
2. You can also delete any `.txt` files if they were extracted

### 9. Test Your Website

1. Open your browser and visit: `https://fileeasyaccountancy.co.uk`
2. Verify the homepage loads correctly
3. Test navigation to different pages:
   - About page: `/about`
   - Services: `/services`
   - Contact: `/contact`
   - IR35 Calculator: `/ir35-calculator`
4. Check that images and styles are loading properly

---

## Important Notes

### ✅ Lead Magnet Feature - WORKING

The **lead magnet download feature** has been updated to use **Web3Forms** and is fully functional on static hosting!

**How it works:**
1. User fills out the form (email, name, contractor status)
2. Form submits to Web3Forms (using your existing access key)
3. Email notification is sent to you via Web3Forms
4. User is automatically redirected to the Notion IR35 Guide page with UTM tracking
5. No server-side code required - works perfectly on static hosting!

### 🔧 Redirects and Headers

The following features from your Next.js config won't work on static hosting:
- WWW to apex redirects (configure via cPanel or DNS instead)
- Custom security headers (configure via `.htaccess` instead)

### 📝 .htaccess Configuration (Optional)

To add security headers and redirects, create a `.htaccess` file in `public_html`:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirect www to non-www
RewriteCond %{HTTP_HOST} ^www\.fileeasyaccountancy\.co\.uk [NC]
RewriteRule ^(.*)$ https://fileeasyaccountancy.co.uk/$1 [L,R=301]

# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "DENY"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
```

### 🔍 SEO Considerations

1. **Submit sitemap to Google Search Console:**
   - URL: `https://fileeasyaccountancy.co.uk/sitemap.xml`

2. **Verify robots.txt:**
   - URL: `https://fileeasyaccountancy.co.uk/robots.txt`

3. **Set up Google Analytics** (if not already configured)

### 🌐 DNS and SSL

1. Ensure your domain DNS points to Namecheap's nameservers
2. Enable SSL certificate in cPanel (usually auto-provisioned via Let's Encrypt)
3. Force HTTPS via the `.htaccess` file above

---

## Troubleshooting

### Site shows "404 Not Found"
- Verify `index.html` is at the root of `public_html`
- Check file permissions (should be 644 for files, 755 for folders)

### Images not loading
- Check that the `images/` folder extracted properly
- Verify file paths are correct (case-sensitive on Linux servers)

### Pages show blank or broken
- Check browser console for JavaScript errors
- Verify `_next/` folder extracted with all files intact
- Clear browser cache and try again

### CSS not applying
- Check that `_next/static/css/` folder exists
- Verify CSS files are present
- Check browser console for 404 errors

---

## What Changed from Vercel Deployment

### ✅ What Works
- All static pages render correctly
- Client-side navigation works
- SEO meta tags are intact
- Forms that use client-side validation
- IR35 calculator (fully client-side)
- Sitemap and robots.txt

### ❌ What Doesn't Work (Requires Alternative)
- Server-side API routes (e.g., lead magnet API)
- Image optimization (now using unoptimized images)
- Dynamic redirects (use .htaccess instead)
- Custom headers (use .htaccess instead)
- Edge functions
- Incremental Static Regeneration (ISR)

---

## Post-Deployment Checklist

- [ ] Website loads at main domain
- [ ] All pages are accessible
- [ ] Images and assets load correctly
- [ ] Navigation works properly
- [ ] Forms display correctly (even if not functional)
- [ ] Mobile responsiveness works
- [ ] SSL certificate is active
- [ ] Sitemap submitted to Google Search Console
- [ ] Google Analytics is tracking (if configured)
- [ ] .htaccess file added for security headers
- [ ] WWW redirect configured (if desired)

---

## Future Updates

To update the website in the future:

1. Make changes to your local files
2. Run `npm run build` to rebuild
3. Create new zip: `cd out && zip -r ../fileeasy-deployment.zip . -x "*.DS_Store" "*.txt"`
4. Upload and extract the new zip to `public_html`
5. Clear old files first or overwrite

---

## Support

If you encounter issues:

1. Check cPanel error logs (File Manager → `public_html` → error_log)
2. Check browser console for errors (F12 → Console tab)
3. Contact Namecheap support for hosting-specific issues
4. Review this documentation for common solutions

---

**Deployment Date:** October 17, 2025
**Package Version:** Static Export v1.0
**Next.js Version:** 15.5.4
