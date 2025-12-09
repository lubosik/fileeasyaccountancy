const fs = require('fs');
const path = require('path');
const manifest = require('../src/lib/services.manifest.json');

// Generate HTML redirect pages for each service
// These will be placed in the out/ directory after build

const outDir = path.join(__dirname, '../out/resources');

// Ensure directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

manifest.forEach((service) => {
  const slug = service.slug;
  const redirectUrl = service.url;
  
  // Create HTML redirect page
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0; url=${redirectUrl}">
  <link rel="canonical" href="${redirectUrl}">
  <script>window.location.href = "${redirectUrl}";</script>
</head>
<body>
  <p>If you are not redirected, <a href="${redirectUrl}">click here</a>.</p>
</body>
</html>`;

  const filePath = path.join(outDir, `${slug}.html`);
  fs.writeFileSync(filePath, html);
  
  console.log(`Generated redirect: /resources/${slug} → ${redirectUrl}`);
});

console.log(`\nGenerated ${manifest.length} redirect pages.`);

