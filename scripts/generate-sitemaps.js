const fs = require('fs');
const path = require('path');

const baseUrl = 'https://fileeasyaccountancy.co.uk';
const currentDate = new Date().toISOString();
const outDir = path.join(__dirname, '..', 'out');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Read services manifest
const manifestPath = path.join(__dirname, '..', 'src', 'lib', 'services.manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Read resources
const programmaticDir = path.join(__dirname, '..', 'data', 'programmatic');
const resourceFiles = fs.readdirSync(programmaticDir)
  .filter(file => file.endsWith('.json') && file !== 'services.manifest.json')
  .map(file => {
    const content = JSON.parse(fs.readFileSync(path.join(programmaticDir, file), 'utf8'));
    return {
      slug: file.replace('.json', ''),
      last_updated: content.last_updated || currentDate,
    };
  });

// Generate main sitemap (static pages)
const mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>${baseUrl}</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>${baseUrl}/services</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.9</priority>
</url>
<url>
<loc>${baseUrl}/services/bookkeeping</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>${baseUrl}/services/tax</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>${baseUrl}/services/core</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>${baseUrl}/services/vat</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>${baseUrl}/services/advisory</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>${baseUrl}/services/payroll</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>${baseUrl}/ir35-calculator</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.9</priority>
</url>
<url>
<loc>${baseUrl}/resources</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>${baseUrl}/pricing</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>${baseUrl}/about</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>${baseUrl}/contact</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>${baseUrl}/privacy</loc>
<lastmod>${currentDate}</lastmod>
<changefreq>yearly</changefreq>
<priority>0.3</priority>
</url>
</urlset>`;

// Generate services sitemap
const servicesSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${manifest.map(service => `<url>
<loc>${baseUrl}/services/${service.slug}</loc>
<lastmod>${service.updated || currentDate}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>`).join('\n')}
</urlset>`;

// Generate resources sitemap
const resourcesSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${resourceFiles.map(page => `<url>
<loc>${baseUrl}/resources/${page.slug}</loc>
<lastmod>${page.last_updated}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>`).join('\n')}
</urlset>`;

// Write sitemaps
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), mainSitemap);
fs.writeFileSync(path.join(outDir, 'sitemap-services.xml'), servicesSitemap);
fs.writeFileSync(path.join(outDir, 'sitemap-resources.xml'), resourcesSitemap);

console.log('✅ Generated sitemaps:');
console.log(`   - sitemap.xml (${mainSitemap.split('<url>').length - 1} URLs)`);
console.log(`   - sitemap-services.xml (${manifest.length} URLs)`);
console.log(`   - sitemap-resources.xml (${resourceFiles.length} URLs)`);

