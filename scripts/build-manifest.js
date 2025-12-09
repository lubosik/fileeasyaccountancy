const fs = require('fs');
const path = require('path');

const summaryPath = path.join(__dirname, '..', '86-ARTICLES-COMPLETE-SUMMARY.md');
const summary = fs.readFileSync(summaryPath, 'utf8');

const manifest = [];
const lines = summary.split('\n');

let currentCategory = '';
let inTable = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Detect category headers
  if (line.match(/^### (BOOKKEEPING|TAX|CORE|VAT|ADVISORY|PAYROLL) CATEGORY/)) {
    const match = line.match(/^### (\w+) CATEGORY/);
    if (match) {
      currentCategory = match[1];
      // Normalize category names
      if (currentCategory === 'BOOKKEEPING') currentCategory = 'bookkeeping';
      else if (currentCategory === 'TAX') currentCategory = 'tax';
      else if (currentCategory === 'CORE') currentCategory = 'core';
      else if (currentCategory === 'VAT') currentCategory = 'vat';
      else if (currentCategory === 'ADVISORY') currentCategory = 'advisory';
      else if (currentCategory === 'PAYROLL') currentCategory = 'payroll';
    }
    continue;
  }
  
  // Detect table start
  if (line.includes('|') && line.includes('Slug')) {
    inTable = true;
    continue;
  }
  
  // Parse table rows
  if (inTable && line.match(/^\| \d+ \|/)) {
    const parts = line.split('|').map(p => p.trim()).filter(p => p && p !== '');
    if (parts.length >= 6) {
      const title = parts[1];
      const slug = parts[2].replace(/`/g, '').trim();
      const filePath = parts[3].replace(/`/g, '').trim();
      const url = parts[4].replace(/`/g, '').trim();
      const description = parts[5];
      
      // Extract slug from URL if slug field is empty
      let finalSlug = slug;
      if (!finalSlug && url) {
        const urlParts = url.split('/').filter(Boolean);
        finalSlug = urlParts[urlParts.length - 1];
      }
      
      // Try to get better excerpt from actual article file
      let excerpt = description;
      let updated = '2025-01-31';
      
      try {
        const articlePath = path.join(__dirname, '..', filePath);
        if (fs.existsSync(articlePath)) {
          const articleContent = fs.readFileSync(articlePath, 'utf8');
          // Extract description from metadata
          const descMatch = articleContent.match(/description:\s*['\"]([^'\"]+)['\"]/);
          if (descMatch && descMatch[1]) {
            excerpt = descMatch[1];
            // Trim to 155 chars for meta description
            if (excerpt.length > 155) {
              excerpt = excerpt.substring(0, 152) + '...';
            }
          }
        }
      } catch (err) {
        // If file doesn't exist or can't be read, use description
        excerpt = description.length > 155 ? description.substring(0, 152) + '...' : description;
      }
      
      manifest.push({
        slug: finalSlug,
        title: title,
        category: currentCategory.toLowerCase(),
        srcPath: filePath,
        url: url,
        description: description,
        updated: updated,
        excerpt: excerpt,
        ogImage: `/images/services/${finalSlug}.jpg`
      });
    }
  }
  
  // Stop table parsing when we hit a new section
  if (inTable && (line.match(/^###|^##/) && !line.includes('CATEGORY'))) {
    inTable = false;
  }
}

// Sort by slug alphabetically
manifest.sort((a, b) => a.slug.localeCompare(b.slug));

// Write manifest file
const manifestPath = path.join(__dirname, '..', 'src', 'lib', 'services.manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

console.log(`✅ Manifest created: ${manifest.length} items`);
console.log(`\nFirst 3 entries:`);
console.log(JSON.stringify(manifest.slice(0, 3), null, 2));
console.log(`\nLast 3 entries:`);
console.log(JSON.stringify(manifest.slice(-3), null, 2));
