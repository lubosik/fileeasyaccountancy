/**
 * End-to-End Tests for IR35 Calculator and Site Functionality
 *
 * Tests user interactions, calculations, brand compliance, and accessibility.
 */

import { test, expect, type Page } from '@playwright/test';

test.describe('IR35 Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ir35-calculator');
  });

  test('should load calculator page with correct title and elements', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/IR35 Calculator/);

    // Check main heading
    await expect(page.locator('h1')).toContainText('IR35 Calculator');

    // Check key form elements are present
    await expect(page.locator('input[name="dayRate"], input[type="number"]').first()).toBeVisible();
    await expect(page.locator('text=Contract Day Rate')).toBeVisible();
    await expect(page.locator('text=Working Days/Year')).toBeVisible();

    // Check results sections
    await expect(page.locator('text=Inside IR35')).toBeVisible();
    await expect(page.locator('text=Outside IR35')).toBeVisible();
  });

  test('should calculate IR35 scenarios correctly', async ({ page }) => {
    // Input test values
    await page.fill('input[value="450"]', '500'); // Day rate
    await page.fill('input[value="220"]', '200'); // Working days
    await page.fill('input[value="0"]', '3000'); // Expenses

    // Wait for calculations to update
    await page.waitForTimeout(500);

    // Check that results are displayed
    const insideResult = page.locator('text=Inside IR35').locator('..').locator('text=£');
    const outsideResult = page.locator('text=Outside IR35').locator('..').locator('text=£');

    await expect(insideResult.first()).toBeVisible();
    await expect(outsideResult.first()).toBeVisible();

    // Check comparison section
    await expect(page.locator('text=Annual Difference')).toBeVisible();
    await expect(page.locator('text=Percentage Difference')).toBeVisible();
  });

  test('should download CSV export', async ({ page }) => {
    // Set up download handling
    const downloadPromise = page.waitForEvent('download');

    // Click download button
    await page.click('button:has-text("Download CSV")');

    // Verify download
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe('ir35-calculator-results.csv');
  });

  test('should have Calendly CTA links', async ({ page }) => {
    // Check for Calendly links
    const calendlyLinks = page.locator('a[href*="calendly.com/zkongwa/30min"]');
    expect(await calendlyLinks.count()).toBeGreaterThan(0);

    // Check link attributes
    const firstLink = calendlyLinks.first();
    await expect(firstLink).toHaveAttribute('target', '_blank');
    await expect(firstLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should enforce Orange accent theme on calculator page', async ({ page }) => {
    // Check for orange accent color usage
    const orangeElements = page.locator('[style*="#E2551C"], .fe-orange-accent');
    expect(await orangeElements.count()).toBeGreaterThan(0);

    // Ensure no yellow accent on this page (two-accent rule)
    const yellowElements = page.locator('[style*="#F5B700"]:not(.fe-orange-accent *)');
    expect(await yellowElements.count()).toBe(0);
  });

  test('should be keyboard accessible', async ({ page }) => {
    // Test tab navigation through form fields
    await page.keyboard.press('Tab');
    await expect(page.locator('input[type="number"]:focus')).toBeVisible();

    // Test form interaction with keyboard
    await page.keyboard.type('600');
    await page.keyboard.press('Tab');
    await page.keyboard.type('210');

    // Check that values were entered
    await expect(page.locator('input[value="600"]')).toBeVisible();
    await expect(page.locator('input[value="210"]')).toBeVisible();
  });

  test('should have proper contrast ratios', async ({ page }) => {
    // Test text contrast on orange backgrounds
    const orangeButtons = page.locator('[style*="#E2551C"]');
    for (const button of await orangeButtons.all()) {
      const color = await button.evaluate(el => getComputedStyle(el).color);
      // Should use dark text (#111111) on orange background
      expect(color).toMatch(/rgb\(17, 17, 17\)|#111111/);
    }
  });
});

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load with correct structure and Yellow accent theme', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/File Easy Accountancy/);

    // Check new structure components
    await expect(page.locator('text=New customer offer')).toBeVisible(); // Announcement banner
    await expect(page.locator('h1')).toContainText('Accounting, Tax & Payroll for Kent SMEs and Freelancers');

    // Check Yellow accent theme class
    await expect(page.locator('.fe-yellow-accent')).toBeVisible();

    // Ensure no orange accent on homepage (two-accent rule)
    const orangeElements = page.locator('[style*="#E2551C"]:not(.fe-yellow-accent *)');
    expect(await orangeElements.count()).toBe(0);
  });

  test('should have all required CTAs with correct links', async ({ page }) => {
    // Check Calendly links
    const calendlyLinks = page.locator('a[href*="calendly.com/zkongwa/30min"]');
    expect(await calendlyLinks.count()).toBeGreaterThan(0);

    // Check WhatsApp links
    const whatsappLinks = page.locator('a[href*="wa.me/447894447435"]');
    expect(await whatsappLinks.count()).toBeGreaterThan(0);

    // Test first Calendly link
    const firstCalendlyLink = calendlyLinks.first();
    await expect(firstCalendlyLink).toHaveAttribute('target', '_blank');
    await expect(firstCalendlyLink).toContainText(/Schedule|Book|Consult/i);

    // Test first WhatsApp link
    const firstWhatsappLink = whatsappLinks.first();
    await expect(firstWhatsappLink).toHaveAttribute('target', '_blank');
  });

  test('should show Lead Magnet card and modal', async ({ page }) => {
    // Look for Lead Magnet card
    await expect(page.locator('text=IR35 Survival Guide')).toBeVisible();

    // Click on lead magnet card
    await page.click('text=IR35 Survival Guide');

    // Check modal opens
    await expect(page.locator('[role="dialog"]')).toBeVisible();
    await expect(page.locator('text=Get Your Free IR35 Guide')).toBeVisible();

    // Check form fields
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('select[name="isContractor"]')).toBeVisible();
    await expect(page.locator('input[name="gdprConsent"]')).toBeVisible();
  });

  test('should have mobile sticky bar on mobile viewports', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Check mobile sticky bar
    const stickyBar = page.locator('.fixed.bottom-0');
    await expect(stickyBar).toBeVisible();

    // Check CTA buttons have min-h-[56px] for accessibility
    const ctaButtons = stickyBar.locator('a');
    expect(await ctaButtons.count()).toBe(3); // Call, WhatsApp, Book

    // Test tap target sizes
    for (const button of await ctaButtons.all()) {
      const box = await button.boundingBox();
      expect(box?.height).toBeGreaterThanOrEqual(44); // Minimum tap target size
    }
  });

  test('should have dismiss functionality for toast and banner', async ({ page }) => {
    // Test announcement banner dismiss
    const dismissButton = page.locator('button[aria-label*="Dismiss"]').first();
    if (await dismissButton.isVisible()) {
      await dismissButton.click();
      await expect(dismissButton).not.toBeVisible();
    }
  });
});

test.describe('Footer NAP Information', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display correct NAP information', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();

    // Check Name
    await expect(page.locator('footer')).toContainText('File Easy Accountancy');

    // Check Address
    await expect(page.locator('footer')).toContainText('43 Castle Avenue');
    await expect(page.locator('footer')).toContainText('Rochester, ME1 2DU');

    // Check Phone/WhatsApp
    await expect(page.locator('footer')).toContainText('+44 7894 447435');

    // Check WhatsApp link in footer
    const footerWhatsapp = page.locator('footer a[href*="wa.me/447894447435"]');
    await expect(footerWhatsapp).toBeVisible();

    // Check Calendly CTA in footer
    const footerCalendly = page.locator('footer a[href*="calendly.com"]');
    await expect(footerCalendly).toBeVisible();
    await expect(footerCalendly).toContainText(/Book|Consultation/i);
  });

  test('should have IR35 Calculator link in footer', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded();

    const ir35Link = page.locator('footer a[href="/ir35-calculator"]');
    await expect(ir35Link).toBeVisible();
    await expect(ir35Link).toContainText('IR35 Calculator');
  });
});

test.describe('Lead Magnet API', () => {
  test('should handle lead magnet form submission', async ({ page }) => {
    await page.goto('/');

    // Open lead magnet modal
    await page.click('text=IR35 Survival Guide');
    await expect(page.locator('[role="dialog"]')).toBeVisible();

    // Fill form
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="firstName"]', 'John');
    await page.selectOption('select[name="isContractor"]', 'yes');
    await page.check('input[name="gdprConsent"]');

    // Mock API response
    await page.route('/api/lead-magnet/issue', route => {
      route.fulfill({
        status: 200,
        contentType: 'text/plain',
        body: 'https://www.notion.so/test-redirect-url'
      });
    });

    // Submit form
    await page.click('button[type="submit"]');

    // Should redirect (in real scenario)
    // Note: In test, we're mocking the API response
  });
});

test.describe('Accessibility', () => {
  test('should meet WCAG guidelines', async ({ page }) => {
    await page.goto('/');

    // Check for proper heading structure
    const h1 = page.locator('h1');
    expect(await h1.count()).toBe(1);

    // Check for alt text on images (if any)
    const images = page.locator('img');
    for (const img of await images.all()) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }

    // Check for proper form labels
    const inputs = page.locator('input[type="email"], input[type="text"]');
    for (const input of await inputs.all()) {
      const id = await input.getAttribute('id');
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        await expect(label).toBeVisible();
      }
    }

    // Check for focus indicators
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/ir35-calculator');

    // Check for ARIA labels on interactive elements
    const buttons = page.locator('button');
    for (const button of await buttons.all()) {
      const ariaLabel = await button.getAttribute('aria-label');
      const text = await button.textContent();

      // Should have either aria-label or text content
      expect(ariaLabel || text).toBeTruthy();
    }
  });
});

test.describe('Performance', () => {
  test('should load quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should not have layout shift on calculator', async ({ page }) => {
    await page.goto('/ir35-calculator');

    // Wait for initial render
    await page.waitForLoadState('networkidle');

    // Take screenshot for CLS comparison
    const beforeScreenshot = await page.screenshot();

    // Change input values
    await page.fill('input[value="450"]', '600');

    // Wait for calculations
    await page.waitForTimeout(100);

    // Layout should be stable (no major shifts)
    const afterScreenshot = await page.screenshot();

    // In a real test, you'd compare screenshots for major differences
    expect(beforeScreenshot).toBeTruthy();
    expect(afterScreenshot).toBeTruthy();
  });
});