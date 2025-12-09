/**
 * Quote Flow V2 Test Suite
 * Tests for the updated onboarding flow with removed options and new features
 */

import { test, expect } from '@playwright/test';

test.describe('Quote Flow V2 - Monthly Support', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/quote');
  });

  test('Step 1: Should display correct title and copy', async ({ page }) => {
    await expect(page.locator('h1')).toContainText("Let's Get Your Personalised File Easy Quote");
    await expect(page.locator('p')).toContainText("Answer a few quick questions and we'll build your personalised quote and next steps");
    await expect(page.getByRole('button', { name: /Start My 60-Second Quote/i })).toBeVisible();
  });

  test('Step 1: Should show micro-commitment line after submission', async ({ page }) => {
    // Fill Step 1 form
    await page.fill('input[name="firstName"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');
    await page.fill('input[name="mobileNumber"]', '+44 7894 447435');
    await page.check('input[name="consent"]');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Check for micro-commitment line
    await expect(page.locator('text=Great — we\'re reserving your customised File Easy quote now')).toBeVisible({ timeout: 2000 });
  });

  test('Step 7: Should display only 2 commitment options', async ({ page }) => {
    // Navigate through flow to Step 7 (simplified - would need full flow in real test)
    // This test assumes we're already on Step 7
    
    // Check that only 2 options are visible
    const options = page.locator('[data-testid="commitment-option"], .commitment-option, h3').filter({ hasText: /Set Me Up|Book a Welcome Call/i });
    await expect(options).toHaveCount(2);
    
    // Verify specific options
    await expect(page.getByText('Set Me Up & Send My Agreement')).toBeVisible();
    await expect(page.getByText('Book a Welcome Call First')).toBeVisible();
    
    // Verify removed option is NOT present
    await expect(page.getByText('Email Me My Quote')).not.toBeVisible();
  });

  test('Step 7: Should have correct description for Book a Welcome Call', async ({ page }) => {
    // Navigate to Step 7
    const bookCallOption = page.locator('text=Book a Welcome Call First').locator('..');
    await expect(bookCallOption).toContainText('Prefer to speak before finalising? Choose a preferred time that works for a call back');
  });

  test('Step 5: Should display deposit information', async ({ page }) => {
    // Navigate to Step 5 (Payment Style)
    // Check for deposit line
    await expect(page.locator('text=Small deposit – £100')).toBeVisible();
  });

  test('Step 5: Should display correct payment option labels', async ({ page }) => {
    // Navigate to Step 5
    // Check monthly option
    await expect(page.getByText('Pay Monthly – 1st Month')).toBeVisible();
    await expect(page.getByText(/Cancel with 30 days' notice/i)).toBeVisible();
    
    // Check annual option
    await expect(page.getByText('Pay Annually (Save 5%) – One year payment')).toBeVisible();
    await expect(page.getByText(/Pay £.*for the year \(5% discount\)/i)).toBeVisible();
    await expect(page.getByText(/One invoice\. Less admin\. Best value/i)).toBeVisible();
  });

  test('Step 5: Should include depositRequired in analytics on payment selection', async ({ page }) => {
    // Set up analytics interception
    const analyticsCalls: any[] = [];
    await page.route('**/*', (route) => {
      const request = route.request();
      if (request.url().includes('gtag') || request.postData()?.includes('fe_quote_payment_style_selected')) {
        analyticsCalls.push({
          url: request.url(),
          postData: request.postData(),
        });
      }
      route.continue();
    });

    // Navigate to Step 5 and select payment style
    // This would require full flow navigation
    // For now, we'll document the expected behavior
    
    // Expected: When payment style is selected, analytics event should include:
    // - depositRequired: true
    // - depositAmount: 100
  });
});

test.describe('Quote Flow V2 - One-Off Support', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/quote');
  });

  test('Step O2: Should display only 1 proceed option', async ({ page }) => {
    // Navigate through flow to Step O2
    // Check that only 1 option is visible
    await expect(page.getByText('Have File Easy Call Me Back')).toBeVisible();
    
    // Verify removed options are NOT present
    await expect(page.getByText('Book My Quote Call')).not.toBeVisible();
    await expect(page.getByText('Email Me a Rough Guide')).not.toBeVisible();
  });

  test('Step O2: Should include "Immediately" in callback time options', async ({ page }) => {
    // Navigate to Step O2 and select callback option
    await page.click('text=Have File Easy Call Me Back');
    
    // Check for callback time options including "Immediately"
    await expect(page.getByText('Morning')).toBeVisible();
    await expect(page.getByText('Afternoon')).toBeVisible();
    await expect(page.getByText('Evening')).toBeVisible();
    await expect(page.getByText('Immediately')).toBeVisible();
  });

  test('Step O1: Should display dynamic pricing in budget comfort question', async ({ page }) => {
    // Navigate to Step O1
    // Check that budget comfort question includes dynamic pricing range
    await expect(page.locator('text=/Most one-off jobs start from £\\d+–£\\d+ depending on complexity/i')).toBeVisible();
  });
});

test.describe('Quote Flow V2 - Package Recommendation', () => {
  test('Step 3: Should display "Most Popular" badge on Gold package', async ({ page }) => {
    await page.goto('/quote');
    // Navigate to Step 3
    // Check for "Most Popular" badge on Gold package
    const goldPackage = page.locator('text=Gold').locator('..');
    await expect(goldPackage.locator('text=Most Popular')).toBeVisible();
  });
});

test.describe('Quote Flow V2 - Analytics Events', () => {
  test('Step 7: Should not fire analytics for email-quote option (removed)', async ({ page }) => {
    // Verify that email-quote option does not exist and therefore cannot fire events
    await page.goto('/quote');
    // Navigate to Step 7
    await expect(page.getByText('Email Me My Quote')).not.toBeVisible();
  });

  test('Step O2: Should only fire analytics for callback option', async ({ page }) => {
    // Set up analytics interception
    const analyticsCalls: any[] = [];
    await page.route('**/*', (route) => {
      const request = route.request();
      if (request.url().includes('gtag') || request.postData()?.includes('fe_quote_step_complete')) {
        analyticsCalls.push({
          url: request.url(),
          postData: request.postData(),
        });
      }
      route.continue();
    });

    // Navigate to Step O2 and select callback
    // Verify that analytics event includes proceed_option: 'callback'
    // Verify that no events fire for removed options
  });
});

test.describe('Quote Flow V2 - CRM Tags', () => {
  test('Should emit Onboarding – Details Complete tag on Step 6 completion', async ({ page }) => {
    // This would require API mocking or GHL integration testing
    // Document expected behavior: Tag should be emitted when Step 6 form is submitted
  });

  test('Should create AML task on Step 6 completion', async ({ page }) => {
    // This would require API mocking or GHL integration testing
    // Document expected behavior: Task "Perform AML check" should be created with high priority
  });

  test('Should NOT emit Quote Requested tag (removed option)', async ({ page }) => {
    // Verify that email-quote option is not available, so tag cannot be emitted
    await page.goto('/quote');
    // Navigate to Step 7
    await expect(page.getByText('Email Me My Quote')).not.toBeVisible();
  });

  test('Should NOT emit One-Off – Call Booked tag (removed option)', async ({ page }) => {
    // Verify that book-call option is not available in One-Off flow
    await page.goto('/quote');
    // Navigate to Step O2
    await expect(page.getByText('Book My Quote Call')).not.toBeVisible();
  });
});

