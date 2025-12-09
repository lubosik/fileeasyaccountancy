#!/usr/bin/env node
/**
 * Build-time script to scan for nested anchor tags
 * Prevents accessibility issues and HTML validation errors
 */

const fs = require('fs');
const path = require('path');
const manifest = require('../src/lib/services.manifest.json');

console.log('🔍 Scanning for nested anchor tags...\n');

let issues = [];
let checked = 0;

/**
 * Check for nested anchors in file content
 * Looks for <a> inside <a> or <Link> inside <Link> patterns
 */
function checkNestedAnchors(filePath, content) {
  const lines = content.split('\n');
  const issues = [];
  
  // Track opening/closing tags
  let anchorStack = [];
  
  lines.forEach((line, lineNum) => {
    // Find all anchor tags in this line
    const anchorMatches = [
      ...line.matchAll(/<a\s+[^>]*>/gi),
      ...line.matchAll(/<Link\s+[^>]*>/gi),
      ...line.matchAll(/<\/a>/gi),
      ...line.matchAll(/<\/Link>/gi),
    ];
    
    anchorMatches.forEach((match) => {
      const tag = match[0];
      const isOpening = !tag.startsWith('</');
      const isClosing = tag.startsWith('</');
      const isLink = tag.toLowerCase().includes('<link');
      
      if (isOpening) {
        // Check if we're already inside an anchor
        if (anchorStack.length > 0) {
          issues.push({
            line: lineNum + 1,
            column: match.index + 1,
            message: `Nested anchor detected: ${tag.trim()} inside another anchor`,
            context: line.trim(),
          });
        }
        anchorStack.push({ tag, isLink, line: lineNum + 1 });
      } else if (isClosing) {
        // Pop from stack
        if (anchorStack.length > 0) {
          anchorStack.pop();
        }
      }
    });
  });
  
  return issues;
}

// Check all service articles
for (const service of manifest) {
  const articlePath = path.join(process.cwd(), service.srcPath);
  
  if (!fs.existsSync(articlePath)) {
    continue;
  }
  
  const content = fs.readFileSync(articlePath, 'utf8');
  const fileIssues = checkNestedAnchors(articlePath, content);
  
  if (fileIssues.length > 0) {
    issues.push({
      file: service.srcPath,
      slug: service.slug,
      issues: fileIssues,
    });
  }
  
  checked++;
}

// Report results
if (issues.length === 0) {
  console.log(`✅ No nested anchor issues found in ${checked} articles`);
  process.exit(0);
} else {
  console.log(`⚠️  Found nested anchor issues in ${issues.length} article(s):\n`);
  
  issues.forEach(({ file, slug, issues: fileIssues }) => {
    console.log(`  ${slug}`);
    console.log(`  File: ${file}`);
    fileIssues.slice(0, 3).forEach((issue) => {
      console.log(`    Line ${issue.line}, Col ${issue.column}: ${issue.message}`);
      console.log(`    Context: ${issue.context.substring(0, 80)}...`);
    });
    if (fileIssues.length > 3) {
      console.log(`    ... and ${fileIssues.length - 3} more issue(s)`);
    }
    console.log('');
  });
  
  console.log(`\n❌ Total issues: ${issues.reduce((sum, item) => sum + item.issues.length, 0)}`);
  console.log('\n💡 Fix: Ensure no <a> or <Link> tags are nested inside other anchor tags.');
  process.exit(1);
}

