#!/usr/bin/env node

/**
 * File Easy Accountancy - Hex Color Replacement Script
 *
 * This script finds hardcoded hex colors in TypeScript/JSX files
 * and suggests replacements with semantic brand classes.
 */

const fs = require('fs');
const path = require('path');

// Brand color mapping - hex to semantic class
const COLOR_MAPPING = {
  // Brand colors
  '#0E2A47': 'brand-primary',
  '#2D6AA6': 'brand-secondary',

  // Accent colors
  '#F5B700': 'accent-yellow',
  '#E2551C': 'accent-orange',

  // Neutral colors
  '#F2F4F7': 'page',
  '#E5E7EB': 'surface',
  '#FFFFFF': 'raised',
  '#0F141A': 'text-primary',
  '#0A0D11': 'text-secondary',
  '#ACADB0': 'border-muted',

  // Common semantic colors that should use brand system
  '#000000': 'text-primary',
  '#FEFEFE': 'raised',
  '#F9F9F9': 'surface',
};

// File extensions to process
const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];

// Directories to exclude
const EXCLUDE_DIRS = ['node_modules', '.next', '.git', 'dist', 'build'];

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!EXCLUDE_DIRS.includes(file)) {
        getAllFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

function findHexColors(content) {
  // Regex to find hex colors (3, 4, 6, or 8 digit)
  const hexRegex = /#([0-9A-Fa-f]{3,8})\b/g;
  const matches = [];
  let match;

  while ((match = hexRegex.exec(content)) !== null) {
    matches.push({
      hex: match[0],
      position: match.index
    });
  }

  return matches;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const hexColors = findHexColors(content);

  if (hexColors.length === 0) {
    return null;
  }

  const suggestions = [];
  let newContent = content;

  // Process in reverse order to maintain correct indices
  hexColors.reverse().forEach(({ hex, position }) => {
    const upperHex = hex.toUpperCase();

    if (COLOR_MAPPING[upperHex]) {
      const suggestion = {
        hex,
        position,
        replacement: COLOR_MAPPING[upperHex],
        context: content.substring(Math.max(0, position - 20), position + 40)
      };
      suggestions.push(suggestion);

      // Replace in content (for automatic replacement)
      // For text colors: text-{color}
      // For background colors: bg-{color}
      // For border colors: border-{color}
      const beforeChar = content[position - 1];
      const afterContext = content.substring(position - 10, position + 50);

      let replacement;
      if (afterContext.includes('background') || afterContext.includes('bg')) {
        replacement = `bg-${COLOR_MAPPING[upperHex]}`;
      } else if (afterContext.includes('border')) {
        replacement = `border-${COLOR_MAPPING[upperHex]}`;
      } else if (afterContext.includes('color') || afterContext.includes('text')) {
        replacement = `text-${COLOR_MAPPING[upperHex]}`;
      } else {
        // Default to text color for standalone hex values
        replacement = `text-${COLOR_MAPPING[upperHex]}`;
      }

      // For className replacements, wrap in proper syntax
      if (afterContext.includes('className') || afterContext.includes('class=')) {
        replacement = replacement;
      } else {
        // For style objects, need to convert to CSS variable
        replacement = `var(--color-${COLOR_MAPPING[upperHex]})`;
      }

      newContent = newContent.substring(0, position) + replacement + newContent.substring(position + hex.length);
    } else {
      suggestions.push({
        hex,
        position,
        replacement: 'MANUAL_REVIEW_NEEDED',
        context: content.substring(Math.max(0, position - 20), position + 40)
      });
    }
  });

  return {
    filePath,
    originalContent: content,
    newContent,
    suggestions
  };
}

function main() {
  const projectRoot = process.cwd();
  console.log(`🔍 Scanning for hex colors in: ${projectRoot}`);

  const files = getAllFiles(projectRoot);
  console.log(`📁 Found ${files.length} files to process`);

  const results = [];
  let totalHexFound = 0;
  let filesWithHex = 0;

  files.forEach(filePath => {
    const result = processFile(filePath);
    if (result && result.suggestions.length > 0) {
      results.push(result);
      totalHexFound += result.suggestions.length;
      filesWithHex++;
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`- Files scanned: ${files.length}`);
  console.log(`- Files with hex colors: ${filesWithHex}`);
  console.log(`- Total hex colors found: ${totalHexFound}`);

  if (results.length > 0) {
    console.log(`\n🎨 Hex colors found:`);
    results.forEach(({ filePath, suggestions }) => {
      console.log(`\n📄 ${path.relative(projectRoot, filePath)}:`);
      suggestions.forEach(({ hex, replacement, context }) => {
        console.log(`  ${hex} → ${replacement}`);
        console.log(`    Context: ...${context.trim()}...`);
      });
    });

    // Ask if user wants to apply replacements
    console.log(`\n❓ Would you like to apply automatic replacements? (Note: Manual review recommended)`);
    console.log(`   To apply: node scripts/replace-hex-colors.js --apply`);
  } else {
    console.log(`\n✅ No hex colors found that need replacement!`);
  }

  // If --apply flag is passed, apply the replacements
  if (process.argv.includes('--apply')) {
    console.log(`\n🔧 Applying replacements...`);
    results.forEach(({ filePath, newContent }) => {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Updated: ${path.relative(projectRoot, filePath)}`);
    });
    console.log(`\n🎉 All replacements applied!`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { processFile, findHexColors, COLOR_MAPPING };