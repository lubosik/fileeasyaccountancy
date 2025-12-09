#!/usr/bin/env node

/**
 * Brand Compliance CI Guard
 *
 * Enforces File Easy Accountancy brand guidelines:
 * - Two-accent discipline: Yellow OR Orange per page, not both
 * - Proper contrast ratios on accent colors
 * - Calendly and WhatsApp link validation
 */

const fs = require('fs');
const path = require('path');

// Brand color constants
const YELLOW_ACCENT = '#F5B700';
const ORANGE_ACCENT = '#E2551C';
const CALENDLY_URL = 'https://calendly.com/zkongwa/30min';
const WHATSAPP_URL = 'https://wa.me/447894447435';

// Files to check
const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];
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

function checkTwoAccentRule(content, filePath) {
  const violations = [];

  // Check for both yellow and orange in the same file
  const hasYellow = content.includes(YELLOW_ACCENT) || content.includes('.fe-yellow-accent');
  const hasOrange = content.includes(ORANGE_ACCENT) || content.includes('.fe-orange-accent');

  if (hasYellow && hasOrange) {
    violations.push({
      type: 'TWO_ACCENT_VIOLATION',
      file: filePath,
      message: 'File contains both Yellow and Orange accents - violates two-accent discipline',
      severity: 'error'
    });
  }

  return violations;
}

function checkContrastCompliance(content, filePath) {
  const violations = [];

  // Check for white text on yellow/orange (accessibility violation)
  const whiteOnYellowPattern = new RegExp(`(color:\\s*white|color:\\s*#fff|color:\\s*#ffffff)[^}]*background[^}]*${YELLOW_ACCENT.replace('#', '\\#')}`, 'gi');
  const whiteOnOrangePattern = new RegExp(`(color:\\s*white|color:\\s*#fff|color:\\s*#ffffff)[^}]*background[^}]*${ORANGE_ACCENT.replace('#', '\\#')}`, 'gi');

  if (whiteOnYellowPattern.test(content)) {
    violations.push({
      type: 'CONTRAST_VIOLATION',
      file: filePath,
      message: 'White text on yellow background detected - use dark text (#0F141A) instead',
      severity: 'error'
    });
  }

  if (whiteOnOrangePattern.test(content)) {
    violations.push({
      type: 'CONTRAST_VIOLATION',
      file: filePath,
      message: 'White text on orange background detected - use dark text (#111111) instead',
      severity: 'error'
    });
  }

  return violations;
}

function checkCTALinks(content, filePath) {
  const violations = [];

  // Check for old/incorrect Calendly URLs
  const calendlyPattern = /https:\/\/calendly\.com\/[^"'\s]+/g;
  const calendlyMatches = content.match(calendlyPattern) || [];

  calendlyMatches.forEach(url => {
    if (url !== CALENDLY_URL) {
      violations.push({
        type: 'INCORRECT_CALENDLY_URL',
        file: filePath,
        message: `Incorrect Calendly URL found: ${url}. Should be: ${CALENDLY_URL}`,
        severity: 'warning'
      });
    }
  });

  // Check for old/incorrect WhatsApp URLs
  const whatsappPattern = /https:\/\/wa\.me\/[^"'\s]+/g;
  const whatsappMatches = content.match(whatsappPattern) || [];

  whatsappMatches.forEach(url => {
    if (url !== WHATSAPP_URL) {
      violations.push({
        type: 'INCORRECT_WHATSAPP_URL',
        file: filePath,
        message: `Incorrect WhatsApp URL found: ${url}. Should be: ${WHATSAPP_URL}`,
        severity: 'warning'
      });
    }
  });

  return violations;
}

function checkNAPConsistency(content, filePath) {
  const violations = [];

  // Check for old address formats
  const oldAddresses = [
    'Rochester Business Centre',
    'Rochester, Kent ME1 1AA',
    'ME1 1AA'
  ];

  oldAddresses.forEach(oldAddr => {
    if (content.includes(oldAddr)) {
      violations.push({
        type: 'INCORRECT_ADDRESS',
        file: filePath,
        message: `Old address format found: "${oldAddr}". Should be: "43 Castle Avenue, Rochester, ME1 2DU"`,
        severity: 'error'
      });
    }
  });

  // Check for old phone numbers
  const oldPhonePattern = /01634\s?\d{6}/g;
  if (oldPhonePattern.test(content)) {
    violations.push({
      type: 'INCORRECT_PHONE',
      file: filePath,
      message: 'Old phone number format found. Should use WhatsApp: +44 7894 447435',
      severity: 'error'
    });
  }

  return violations;
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const violations = [];

  // Run all checks
  violations.push(...checkTwoAccentRule(content, filePath));
  violations.push(...checkContrastCompliance(content, filePath));
  violations.push(...checkCTALinks(content, filePath));
  violations.push(...checkNAPConsistency(content, filePath));

  return violations;
}

function main() {
  const projectRoot = process.cwd();
  console.log(`🎨 Checking brand compliance in: ${projectRoot}`);

  const files = getAllFiles(projectRoot);
  console.log(`📁 Checking ${files.length} files for brand compliance...`);

  let totalViolations = 0;
  let errorCount = 0;
  let warningCount = 0;

  files.forEach(filePath => {
    const violations = checkFile(filePath);

    if (violations.length > 0) {
      totalViolations += violations.length;

      console.log(`\n❌ ${path.relative(projectRoot, filePath)}:`);
      violations.forEach(violation => {
        const icon = violation.severity === 'error' ? '🚨' : '⚠️';
        console.log(`  ${icon} ${violation.type}: ${violation.message}`);

        if (violation.severity === 'error') {
          errorCount++;
        } else {
          warningCount++;
        }
      });
    }
  });

  // Summary
  console.log(`\n📊 Brand Compliance Summary:`);
  console.log(`- Files checked: ${files.length}`);
  console.log(`- Total violations: ${totalViolations}`);
  console.log(`- Errors: ${errorCount}`);
  console.log(`- Warnings: ${warningCount}`);

  if (totalViolations === 0) {
    console.log(`\n✅ All brand compliance checks passed!`);
    process.exit(0);
  } else {
    console.log(`\n❌ Brand compliance violations found.`);

    if (errorCount > 0) {
      console.log(`\n🚨 ${errorCount} error(s) must be fixed before proceeding.`);
      process.exit(1);
    } else {
      console.log(`\n⚠️ ${warningCount} warning(s) should be addressed.`);
      process.exit(0);
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = { checkFile, checkTwoAccentRule, checkContrastCompliance, checkCTALinks, checkNAPConsistency };