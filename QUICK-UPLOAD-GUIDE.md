# Quick Upload Guide - Namecheap cPanel

## 🚀 5-Minute Deployment

### File Location
**Deployment Package:** `fileeasy-deployment.zip` (11 MB)
**Path:** `/Users/ghost/File Easy/file-easy-accountancy/fileeasy-deployment.zip`

---

## 📋 Quick Steps

### 1️⃣ Access cPanel
- Login → Namecheap Dashboard → Hosting List → **Go to cPanel**

### 2️⃣ Open File Manager
- cPanel → **File Manager** → Navigate to **`public_html`**

### 3️⃣ Backup & Clear (if needed)
- Backup existing files
- Delete old content from `public_html`

### 4️⃣ Upload Zip
- Click **Upload** button
- Select or drag `fileeasy-deployment.zip`
- Wait for upload to complete

### 5️⃣ Extract
- Right-click `fileeasy-deployment.zip` in File Manager
- Click **Extract**
- Extract to `public_html`

### 6️⃣ Verify
- Check that `index.html` is at root of `public_html` ✅
- Delete the zip file from `public_html`

### 7️⃣ Test
- Visit: `https://fileeasyaccountancy.co.uk`
- Test all pages and navigation

---

## ✅ Success Checklist

```
public_html/
  ✓ index.html (at root!)
  ✓ _next/ folder
  ✓ images/ folder
  ✓ services/ folder
  ✓ resources/ folder
  ✓ sitemap.xml
  ✓ robots.txt
```

---

## ⚠️ Important Notes

1. **Lead Magnet Form:** Won't work (needs backend) - remove or replace with Web3Forms
2. **www Redirect:** Configure via cPanel or .htaccess
3. **SSL:** Enable in cPanel (Let's Encrypt)
4. **Sitemap:** Submit to Google Search Console

---

## 🆘 Quick Fixes

**Site not loading?**
- Verify `index.html` at root of `public_html`
- Check file permissions (644 for files, 755 for folders)

**Images broken?**
- Verify `images/` and `_next/` folders extracted
- Check browser console (F12) for errors

**CSS not working?**
- Clear browser cache
- Check `_next/static/css/` exists

---

## 📞 Need Help?
See full instructions in: `DEPLOYMENT-INSTRUCTIONS.md`
