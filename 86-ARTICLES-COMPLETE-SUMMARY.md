# File Easy Accountancy - 86 Service Articles Complete Summary

**Project:** File Easy Accountancy Service Pages  
**Date:** January 31, 2025  
**Status:** ✅ All 86 articles published and complete  
**Purpose:** Complete reference document for prompt engineer to create navigation/category pages

---

## Executive Summary

All 86 service articles have been successfully created as TSX pages in the File Easy Accountancy Next.js website. Each article follows a consistent structure with:

- Full content with ArticleLayout component
- Info callout boxes (no anecdotes)
- Detailed sections covering the service
- Two CTAs (mid-article and final)
- FAQ accordion (6-8 FAQs)
- JSON-LD schemas (Service, FAQPage, BreadcrumbList)
- Dubai included in areaServed where applicable
- Proper category routing

**Base URL:** `https://fileeasyaccountancy.co.uk`  
**Local Dev URL:** `http://localhost:3001`

---

## File Structure

All article pages are located in:
```
src/app/services/{category}/{slug}/page.tsx
```

Where `{category}` is one of:
- `bookkeeping` (30 articles)
- `tax` (28 articles)
- `core` (17 articles)
- `vat` (2 articles)
- `advisory` (4 articles)
- `payroll` (1 article)

---

## Complete Article Inventory

### BOOKKEEPING CATEGORY (30 articles)

| # | Title | Slug | File Path | URL | Description |
|---|-------|------|-----------|-----|-------------|
| 1 | Monthly Bookkeeping with Bank Reconciliation | `monthly-bookkeeping-bank-reconciliation` | `src/app/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/page.tsx` | `/services/bookkeeping/monthly-bookkeeping-bank-reconciliation` | Monthly bookkeeping and bank reconciliation services |
| 2 | Weekly Transactional Bookkeeping | `weekly-transactional-bookkeeping` | `src/app/services/bookkeeping/weekly-transactional-bookkeeping/page.tsx` | `/services/bookkeeping/weekly-transactional-bookkeeping` | Weekly bookkeeping for high-volume businesses |
| 3 | Catch-Up Bookkeeping (HMRC Deadlines) | `catch-up-bookkeeping-hmrc-deadlines` | `src/app/services/bookkeeping/catch-up-bookkeeping-hmrc-deadlines/page.tsx` | `/services/bookkeeping/catch-up-bookkeeping-hmrc-deadlines` | Catch-up bookkeeping to meet HMRC deadlines |
| 4 | Bookkeeping for Sole Traders & Freelancers | `bookkeeping-sole-traders-freelancers` | `src/app/services/bookkeeping/bookkeeping-sole-traders-freelancers/page.tsx` | `/services/bookkeeping/bookkeeping-sole-traders-freelancers` | Simplified expenses bookkeeping for sole traders |
| 5 | E-commerce Bookkeeping (Amazon, Etsy, Shopify) | `bookkeeping-ecommerce-amazon-etsy-shopify` | `src/app/services/bookkeeping/bookkeeping-ecommerce-amazon-etsy-shopify/page.tsx` | `/services/bookkeeping/bookkeeping-ecommerce-amazon-etsy-shopify` | Multi-platform e-commerce bookkeeping |
| 6 | Cloud Bookkeeping (Xero, QuickBooks) | `cloud-bookkeeping-xero-quickbooks` | `src/app/services/bookkeeping/cloud-bookkeeping-xero-quickbooks/page.tsx` | `/services/bookkeeping/cloud-bookkeeping-xero-quickbooks` | Cloud accounting software setup and management |
| 7 | Bookkeeping for Landlords & Property Investors | `bookkeeping-landlords-property-investors` | `src/app/services/bookkeeping/bookkeeping-landlords-property-investors/page.tsx` | `/services/bookkeeping/bookkeeping-landlords-property-investors` | Per-property tracking and mortgage interest calculations |
| 8 | Construction Bookkeeping (CIS Compliant) | `construction-bookkeeping-cis-compliant` | `src/app/services/bookkeeping/construction-bookkeeping-cis-compliant/page.tsx` | `/services/bookkeeping/construction-bookkeeping-cis-compliant` | CIS-compliant bookkeeping for construction |
| 9 | Crypto Transaction Bookkeeping | `crypto-transaction-bookkeeping` | `src/app/services/bookkeeping/crypto-transaction-bookkeeping/page.tsx` | `/services/bookkeeping/crypto-transaction-bookkeeping` | Crypto tax compliance and CGT calculations |
| 10 | Franchise Bookkeeping Support | `franchise-bookkeeping-support` | `src/app/services/bookkeeping/franchise-bookkeeping-support/page.tsx` | `/services/bookkeeping/franchise-bookkeeping-support` | Franchise fee tracking and royalty payments |
| 11 | Chart of Accounts Setup for Limited Companies | `chart-of-accounts-setup-limited-companies` | `src/app/services/bookkeeping/chart-of-accounts-setup-limited-companies/page.tsx` | `/services/bookkeeping/chart-of-accounts-setup-limited-companies` | Companies House compliant Chart of Accounts |
| 12 | Bookkeeping for Partnerships & LLPs | `bookkeeping-partnerships-llps` | `src/app/services/bookkeeping/bookkeeping-partnerships-llps/page.tsx` | `/services/bookkeeping/bookkeeping-partnerships-llps` | Partnership tax returns and profit allocation |
| 13 | Bookkeeping for Startup Businesses | `bookkeeping-startup-businesses` | `src/app/services/bookkeeping/bookkeeping-startup-businesses/page.tsx` | `/services/bookkeeping/bookkeeping-startup-businesses` | Proper setup from day one for startups |
| 14 | Financial Dashboards & KPI Tracking | `financial-dashboards-kpi-tracking` | `src/app/services/bookkeeping/financial-dashboards-kpi-tracking/page.tsx` | `/services/bookkeeping/financial-dashboards-kpi-tracking` | Automated financial dashboards and KPIs |
| 15 | Receipt Scanning & Digital Records | `receipt-scanning-digital-records` | `src/app/services/bookkeeping/receipt-scanning-digital-records/page.tsx` | `/services/bookkeeping/receipt-scanning-digital-records` | HMRC-compliant digital receipt management |
| 16 | Industry-Specific Bookkeeping | `industry-specific-bookkeeping` | `src/app/services/bookkeeping/industry-specific-bookkeeping/page.tsx` | `/services/bookkeeping/industry-specific-bookkeeping` | Sector-specific compliance and reporting |
| 17 | Bookkeeping Audits & Data Cleanup | `bookkeeping-audits-data-cleanup` | `src/app/services/bookkeeping/bookkeeping-audits-data-cleanup/page.tsx` | `/services/bookkeeping/bookkeeping-audits-data-cleanup` | HMRC audit preparation and data cleanup |
| 18 | Project-Based Ad-Hoc Bookkeeping | `project-based-ad-hoc-bookkeeping` | `src/app/services/bookkeeping/project-based-ad-hoc-bookkeeping/page.tsx` | `/services/bookkeeping/project-based-ad-hoc-bookkeeping` | Flexible ad-hoc bookkeeping support |
| 19 | Payroll Integration with Bookkeeping | `payroll-integration-with-bookkeeping` | `src/app/services/bookkeeping/payroll-integration-with-bookkeeping/page.tsx` | `/services/bookkeeping/payroll-integration-with-bookkeeping` | Automated payroll and bookkeeping sync |
| 20 | Bookkeeping Migration (Excel to Xero/QuickBooks) | `bookkeeping-migration-excel-to-xero-quickbooks` | `src/app/services/bookkeeping/bookkeeping-migration-excel-to-xero-quickbooks/page.tsx` | `/services/bookkeeping/bookkeeping-migration-excel-to-xero-quickbooks` | Excel to cloud accounting migration |
| 21 | Year-End Reconciliation & Account Prep | `year-end-reconciliation-account-prep` | `src/app/services/bookkeeping/year-end-reconciliation-account-prep/page.tsx` | `/services/bookkeeping/year-end-reconciliation-account-prep` | Companies House filing preparation |
| 22 | Bookkeeping for Contractors (IR35) | `bookkeeping-contractors-ir35` | `src/app/services/bookkeeping/bookkeeping-contractors-ir35/page.tsx` | `/services/bookkeeping/bookkeeping-contractors-ir35` | IR35-compliant contractor bookkeeping |
| 23 | Cash Flow Focused Bookkeeping | `cash-flow-focused-bookkeeping` | `src/app/services/bookkeeping/cash-flow-focused-bookkeeping/page.tsx` | `/services/bookkeeping/cash-flow-focused-bookkeeping` | Real-time cash flow tracking and forecasting |
| 24 | Business Expense Categorisation & Tracking | `business-expense-categorisation-tracking` | `src/app/services/bookkeeping/business-expense-categorisation-tracking/page.tsx` | `/services/bookkeeping/business-expense-categorisation-tracking` | HMRC allowable expense tracking |
| 25 | Multi-Currency Bookkeeping | `multi-currency-bookkeeping` | `src/app/services/bookkeeping/multi-currency-bookkeeping/page.tsx` | `/services/bookkeeping/multi-currency-bookkeeping` | HMRC exchange rates and foreign currency |
| 26 | VAT-Ready Bookkeeping & Reconciliation | `vat-ready-bookkeeping-reconciliation` | `src/app/services/bookkeeping/vat-ready-bookkeeping-reconciliation/page.tsx` | `/services/bookkeeping/vat-ready-bookkeeping-reconciliation` | MTD VAT-compliant bookkeeping |
| 27 | Invoice Processing & Debtor Tracking | `invoice-processing-debtor-tracking` | `src/app/services/bookkeeping/invoice-processing-debtor-tracking/page.tsx` | `/services/bookkeeping/invoice-processing-debtor-tracking` | Accounts receivable management |
| 28 | Budget vs Actual Reporting | `budget-vs-actual-reporting` | `src/app/services/bookkeeping/budget-vs-actual-reporting/page.tsx` | `/services/bookkeeping/budget-vs-actual-reporting` | Budget variance analysis and tracking |
| 29 | Cloud Accounting Training & Onboarding | `cloud-accounting-training-onboarding` | `src/app/services/bookkeeping/cloud-accounting-training-onboarding/page.tsx` | `/services/bookkeeping/cloud-accounting-training-onboarding` | MTD compliance training and software setup |
| 30 | Bookkeeping Setup (Making Tax Digital) | `bookkeeping-setup-making-tax-digital` | `src/app/services/bookkeeping/bookkeeping-setup-making-tax-digital/page.tsx` | `/services/bookkeeping/bookkeeping-setup-making-tax-digital` | MTD software selection and API setup |

### TAX CATEGORY (28 articles)

| # | Title | Slug | File Path | URL | Description |
|---|-------|------|-----------|-----|-------------|
| 31 | Self-Assessment for Sole Traders | `self-assessment-sole-traders` | `src/app/services/tax/self-assessment-sole-traders/page.tsx` | `/services/tax/self-assessment-sole-traders` | Personal tax return preparation for sole traders |
| 32 | Landlord Tax Returns | `landlord-tax-returns` | `src/app/services/tax/landlord-tax-returns/page.tsx` | `/services/tax/landlord-tax-returns` | Property income tax returns |
| 33 | Company Director Tax Returns | `company-director-tax-returns` | `src/app/services/tax/company-director-tax-returns/page.tsx` | `/services/tax/company-director-tax-returns` | Director PAYE, dividend tax, and benefits in kind |
| 34 | Corporation Tax (CT600) Filing | `corporation-tax-ct600-filing` | `src/app/services/tax/corporation-tax-ct600-filing/page.tsx` | `/services/tax/corporation-tax-ct600-filing` | CT600 return preparation and filing |
| 35 | Late or Backdated Tax Returns | `late-or-backdated-tax-returns` | `src/app/services/tax/late-or-backdated-tax-returns/page.tsx` | `/services/tax/late-or-backdated-tax-returns` | Penalty management and reasonable excuses |
| 36 | Amended Tax Returns | `amended-tax-returns` | `src/app/services/tax/amended-tax-returns/page.tsx` | `/services/tax/amended-tax-returns` | Tax return amendments and corrections |
| 37 | Capital Gains Tax Returns | `capital-gains-tax-returns` | `src/app/services/tax/capital-gains-tax-returns/page.tsx` | `/services/tax/capital-gains-tax-returns` | 60-day reporting and CGT calculations |
| 38 | Tax Planning & Optimization | `tax-planning-optimization` | `src/app/services/tax/tax-planning-optimization/page.tsx` | `/services/tax/tax-planning-optimization` | Legal tax reduction strategies |
| 39 | Partnership Tax Returns | `partnership-tax-returns` | `src/app/services/tax/partnership-tax-returns/page.tsx` | `/services/tax/partnership-tax-returns` | SA800 Partnership Statement |
| 40 | Crypto Tax Returns | `crypto-tax-returns` | `src/app/services/tax/crypto-tax-returns/page.tsx` | `/services/tax/crypto-tax-returns` | Crypto CGT and Income Tax reporting |
| 41 | Foreign Income Tax Support | `foreign-income-tax-support` | `src/app/services/tax/foreign-income-tax-support/page.tsx` | `/services/tax/foreign-income-tax-support` | Double taxation relief and worldwide income |
| 42 | Dual UK-Dubai Residency Tax Planning | `dual-uk-dubai-residency-tax-planning` | `src/app/services/tax/dual-uk-dubai-residency-tax-planning/page.tsx` | `/services/tax/dual-uk-dubai-residency-tax-planning` | UK-UAE double taxation agreement |
| 43 | Payroll Processing | `payroll-processing` | `src/app/services/payroll/payroll-processing/page.tsx` | `/services/payroll/payroll-processing` | PAYE, RTI, and Employer's NI |
| 44 | CIS Contractor & Subcontractor Tax Filing | `cis-contractor-subcontractor-tax-filing` | `src/app/services/tax/cis-contractor-subcontractor-tax-filing/page.tsx` | `/services/tax/cis-contractor-subcontractor-tax-filing` | CIS deduction rates and monthly returns |
| 45 | IR35 Tax Status Review & Returns | `ir35-tax-status-review-returns` | `src/app/services/tax/ir35-tax-status-review-returns/page.tsx` | `/services/tax/ir35-tax-status-review-returns` | IR35 status determination and tax treatment |
| 46 | High Earner Tax Planning | `high-earner-tax-planning` | `src/app/services/tax/high-earner-tax-planning/page.tsx` | `/services/tax/high-earner-tax-planning` | Effective 60% tax rate and allowance tapering |
| 47 | Non-Resident Landlord (NRL) Tax Filing | `non-resident-landlord-nrl-tax-filing` | `src/app/services/tax/non-resident-landlord-nrl-tax-filing/page.tsx` | `/services/tax/non-resident-landlord-nrl-tax-filing` | NRL scheme and gross payment approval |
| 48 | PAYE Director Payroll Alignment | `paye-director-payroll-alignment` | `src/app/services/tax/paye-director-payroll-alignment/page.tsx` | `/services/tax/paye-director-payroll-alignment` | Optimal director salary and NI calculation |
| 49 | R&D Tax Credit Eligibility | `r-and-d-tax-credit-eligibility` | `src/app/services/tax/r-and-d-tax-credit-eligibility/page.tsx` | `/services/tax/r-and-d-tax-credit-eligibility` | SME enhanced relief and claim deadlines |
| 50 | Influencer & Creator Tax Returns | `influencer-creator-tax-returns` | `src/app/services/tax/influencer-creator-tax-returns/page.tsx` | `/services/tax/influencer-creator-tax-returns` | Influencer income taxation and expenses |
| 51 | Dividend vs Salary Optimization Planning | `dividend-vs-salary-optimisation-planning` | `src/app/services/tax/dividend-vs-salary-optimisation-planning/page.tsx` | `/services/tax/dividend-vs-salary-optimisation-planning` | Optimal director salary and dividend splits |
| 52 | Trust & Estate Tax Returns | `trust-estate-tax-returns` | `src/app/services/tax/trust-estate-tax-returns/page.tsx` | `/services/tax/trust-estate-tax-returns` | SA900 filing and Trust Registration Service |
| 53 | Pension Tax Relief Claims | `pension-tax-relief-claims` | `src/app/services/tax/pension-tax-relief-claims/page.tsx` | `/services/tax/pension-tax-relief-claims` | Automatic 20% relief and higher-rate claiming |
| 54 | Child Benefit HICBC Support | `child-benefit-hicbc-support` | `src/app/services/tax/child-benefit-hicbc-support/page.tsx` | `/services/tax/child-benefit-hicbc-support` | High Income Child Benefit Charge |
| 55 | Self-Assessment Investment Income | `self-assessment-investment-income` | `src/app/services/tax/self-assessment-investment-income/page.tsx` | `/services/tax/self-assessment-investment-income` | Dividend allowance and CGT reporting |
| 56 | Self-Assessment (Uber/Gig Economy) | `self-assessment-uber-gig-economy` | `src/app/services/tax/self-assessment-uber-gig-economy/page.tsx` | `/services/tax/self-assessment-uber-gig-economy` | Platform reporting and allowable expenses |
| 57 | Student Loan Alignment in Tax Return | `student-loan-alignment-in-tax-return` | `src/app/services/tax/student-loan-alignment-in-tax-return/page.tsx` | `/services/tax/student-loan-alignment-in-tax-return` | Student loan repayment calculation |
| 58 | Sole Trader to Limited Company Tax Transitions | `sole-trader-to-limited-company-tax-transitions` | `src/app/services/tax/sole-trader-to-limited-company-tax-transitions/page.tsx` | `/services/tax/sole-trader-to-limited-company-tax-transitions` | Incorporation and asset transfer planning |
| 59 | Airbnb Short-Term Let Tax Returns | `airbnb-short-term-let-tax-returns` | `src/app/services/tax/airbnb-short-term-let-tax-returns/page.tsx` | `/services/tax/airbnb-short-term-let-tax-returns` | Property income tax for short-term lets |
| 60 | Multiple Income Streams Tax Support | `multiple-income-streams-tax-support` | `src/app/services/tax/multiple-income-streams-tax-support/page.tsx` | `/services/tax/multiple-income-streams-tax-support` | Combined income tax calculation |
| 61 | Tax Planning Review & Forecast | `tax-planning-review-forecast` | `src/app/services/tax/tax-planning-review-forecast/page.tsx` | `/services/tax/tax-planning-review-forecast` | Current tax position and future forecasting |
| 62 | Post-Year-End Tax Saving Strategy | `post-year-end-tax-saving-strategy` | `src/app/services/tax/post-year-end-tax-saving-strategy/page.tsx` | `/services/tax/post-year-end-tax-saving-strategy` | 12-month amendment deadline and overpayment relief |

### CORE CATEGORY (17 articles)

| # | Title | Slug | File Path | URL | Description |
|---|-------|------|-----------|-----|-------------|
| 63 | Companies House Filing | `companies-house-filing` | `src/app/services/core/companies-house-filing/page.tsx` | `/services/core/companies-house-filing` | Annual confirmation statement filing |
| 64 | Cloud Accounting Setup (Xero, QuickBooks, Sage) | `cloud-accounting-setup-xero-quickbooks-sage` | `src/app/services/core/cloud-accounting-setup-xero-quickbooks-sage/page.tsx` | `/services/core/cloud-accounting-setup-xero-quickbooks-sage` | MTD-compliant software setup and migration |
| 65 | MTD Compliance & VAT Bridging | `mtd-compliance-vat-bridging` | `src/app/services/core/mtd-compliance-vat-bridging/page.tsx` | `/services/core/mtd-compliance-vat-bridging` | Bridging software for MTD VAT compliance |
| 66 | Quarterly VAT Returns | `quarterly-vat-returns` | `src/app/services/core/quarterly-vat-returns/page.tsx` | `/services/core/quarterly-vat-returns` | Quarterly VAT return preparation and filing |
| 67 | VAT Registration Advisory | `vat-registration-advisory` | `src/app/services/core/vat-registration-advisory/page.tsx` | `/services/core/vat-registration-advisory` | VAT registration threshold and scheme selection |
| 68 | Payroll (PAYE, P60, P45) | `payroll-paye-p60-p45` | `src/app/services/core/payroll-paye-p60-p45/page.tsx` | `/services/core/payroll-paye-p60-p45` | P60 and P45 form preparation |
| 69 | Auto-Enrolment Pensions | `auto-enrolment-pensions` | `src/app/services/core/auto-enrolment-pensions/page.tsx` | `/services/core/auto-enrolment-pensions` | Employer pension duties and contributions |
| 70 | CIS Payroll & Tax Submissions | `cis-payroll-tax-submissions` | `src/app/services/core/cis-payroll-tax-submissions/page.tsx` | `/services/core/cis-payroll-tax-submissions` | CIS registration and monthly returns |
| 71 | Company Formation & Bank Setup | `company-formation-bank-setup` | `src/app/services/core/company-formation-bank-setup/page.tsx` | `/services/core/company-formation-bank-setup` | Limited company registration and bank account |
| 72 | Business Structure Review | `business-structure-review` | `src/app/services/core/business-structure-review/page.tsx` | `/services/core/business-structure-review` | Limited company vs sole trader comparison |
| 73 | Registered Office Service | `registered-office-service` | `src/app/services/core/registered-office-service/page.tsx` | `/services/core/registered-office-service` | Registered office address and mail handling |
| 74 | Management Accounts & Monthly Reporting | `management-accounts-monthly-reporting` | `src/app/services/core/management-accounts-monthly-reporting/page.tsx` | `/services/core/management-accounts-monthly-reporting` | Internal financial reports and KPIs |
| 75 | Remote Cloud Accounting (UK-Kent) | `remote-cloud-accounting-uk-kent` | `src/app/services/core/remote-cloud-accounting-uk-kent/page.tsx` | `/services/core/remote-cloud-accounting-uk-kent` | Remote accounting services for Kent businesses |
| 76 | International Accounting (UK-Dubai) | `international-accounting-uk-dubai` | `src/app/services/core/international-accounting-uk-dubai/page.tsx` | `/services/core/international-accounting-uk-dubai` | Multi-country accounting and tax planning |
| 77 | Audit-Ready Bookkeeping (HMRC, Companies House) | `audit-ready-bookkeeping-hmrc-companies-house` | `src/app/services/core/audit-ready-bookkeeping-hmrc-companies-house/page.tsx` | `/services/core/audit-ready-bookkeeping-hmrc-companies-house` | HMRC audit preparation and compliance |
| 78 | Dividend Planning for Ltd Directors | `dividend-planning-ltd-directors` | `src/app/services/core/dividend-planning-ltd-directors/page.tsx` | `/services/core/dividend-planning-ltd-directors` | Optimal salary and dividend strategies |
| 79 | VAT Scheme Advisory (Flat Rate, Annual) | `vat-scheme-advisory-flat-rate-annual` | `src/app/services/core/vat-scheme-advisory-flat-rate-annual/page.tsx` | `/services/core/vat-scheme-advisory-flat-rate-annual` | VAT scheme comparison and selection |
| 80 | Ad-Hoc Accounting & Catch-Up Bookkeeping | `ad-hoc-accounting-catch-up-bookkeeping` | `src/app/services/core/ad-hoc-accounting-catch-up-bookkeeping/page.tsx` | `/services/core/ad-hoc-accounting-catch-up-bookkeeping` | Flexible catch-up bookkeeping support |

### VAT CATEGORY (2 articles)

| # | Title | Slug | File Path | URL | Description |
|---|-------|------|-----------|-----|-------------|
| 81 | VAT Compliance Reviews | `vat-compliance-reviews` | `src/app/services/vat/vat-compliance-reviews/page.tsx` | `/services/vat/vat-compliance-reviews` | VAT compliance checks and error identification |
| 82 | Reverse Charge VAT | `reverse-charge-vat` | `src/app/services/vat/reverse-charge-vat/page.tsx` | `/services/vat/reverse-charge-vat` | Construction industry reverse charge |

### ADVISORY CATEGORY (4 articles)

| # | Title | Slug | File Path | URL | Description |
|---|-------|------|-----------|-----|-------------|
| 83 | Financial Health Check & KPI Dashboard | `financial-health-check-kpi-dashboard` | `src/app/services/advisory/financial-health-check-kpi-dashboard/page.tsx` | `/services/advisory/financial-health-check-kpi-dashboard` | Financial position assessment and KPIs |
| 84 | Growth Strategy & Profitability Improvement | `growth-strategy-profitability-improvement` | `src/app/services/advisory/growth-strategy-profitability-improvement/page.tsx` | `/services/advisory/growth-strategy-profitability-improvement` | Growth opportunities and margin improvement |
| 85 | Cost Efficiency & Operational Improvement | `cost-efficiency-operational-improvement` | `src/app/services/advisory/cost-efficiency-operational-improvement/page.tsx` | `/services/advisory/cost-efficiency-operational-improvement` | Cost reduction and process improvement |
| 86 | HMRC Enquiry & Investigation Support | `hmrc-enquiry-investigation-support` | `src/app/services/advisory/hmrc-enquiry-investigation-support/page.tsx` | `/services/advisory/hmrc-enquiry-investigation-support` | HMRC enquiry handling and settlement negotiation |

---

## Category Summary

| Category | Article Count | URL Pattern |
|----------|---------------|-------------|
| Bookkeeping | 30 | `/services/bookkeeping/[slug]` |
| Tax | 28 | `/services/tax/[slug]` |
| Core | 17 | `/services/core/[slug]` |
| VAT | 2 | `/services/vat/[slug]` |
| Advisory | 4 | `/services/advisory/[slug]` |
| Payroll | 1 | `/services/payroll/[slug]` |
| **Total** | **86** | |

---

## Article Structure Details

Each article page follows this consistent structure:

### Components Used:
- `ArticleLayout` - Main layout wrapper
- `Breadcrumbs` - Navigation breadcrumbs
- `FAQAccordion` - FAQ section (6-8 FAQs)
- `ArticleCTA` - Two CTAs (mid-article and final)
- `ContactStrip` - Final contact section
- `TocHighlight` - Table of contents highlighting

### Content Sections:
1. **Introduction** - Overview of the service
2. **Info Callout** - Key information box (no anecdotes)
3. **What this helps you do (fast)** - Benefits list
4. **How it works** - Step-by-step process
5. **Costs & timelines** - Pricing information
6. **Kent (UK) focus** - Local focus section
7. **FAQs** - FAQ accordion (6-8 questions)
8. **Related services** - Links to related articles
9. **CTAs** - Two call-to-action sections

### JSON-LD Schemas:
- **Service Schema** - Service details with areaServed (Kent, UK + Dubai, UAE)
- **FAQPage Schema** - All FAQ questions and answers
- **BreadcrumbList Schema** - Navigation breadcrumbs

---

## URL Format

All articles follow this URL pattern:
```
https://fileeasyaccountancy.co.uk/services/{category}/{slug}/
```

Example:
- `https://fileeasyaccountancy.co.uk/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/`
- `https://fileeasyaccountancy.co.uk/services/tax/self-assessment-sole-traders/`
- `https://fileeasyaccountancy.co.uk/services/core/companies-house-filing/`

---

## File Path Format

All article files are located at:
```
src/app/services/{category}/{slug}/page.tsx
```

Example:
- `src/app/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/page.tsx`
- `src/app/services/tax/self-assessment-sole-traders/page.tsx`
- `src/app/services/core/companies-house-filing/page.tsx`

---

## Next Steps for Prompt Engineer

### Task: Create Category Navigation Pages

The user wants to:
1. **Create category listing pages** that display all services in each category
2. **Add navigation** so users can browse and find all articles
3. **No content changes** - just add navigation/listing functionality

### Required Pages:

1. **Category Index Pages** (already exist but may need updating):
   - `/services/bookkeeping/` - List all 30 bookkeeping articles
   - `/services/tax/` - List all 28 tax articles
   - `/services/core/` - List all 17 core articles
   - `/services/vat/` - List all 2 VAT articles
   - `/services/advisory/` - List all 4 advisory articles
   - `/services/payroll/` - List 1 payroll article

2. **Main Services Page** (`/services/`):
   - Display all 6 categories with article counts
   - Link to each category page

### Implementation Notes:

- **No content changes** - All article content remains exactly as-is
- **Just add navigation** - Create clean category pages that list all services
- **Use existing slugs** - All slugs are already defined in the file paths
- **Maintain consistency** - Use the same design/component structure as existing pages

### Reference Files:

- **Progress Tracker**: `content/.fileeasy_progress.json` - Contains all article notes
- **Example Article**: `src/app/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/page.tsx` - Shows structure
- **Category Pages**: Check existing category index pages for reference

---

## Complete Article List (Sorted by Category)

### Bookkeeping (30)
1. monthly-bookkeeping-bank-reconciliation
2. weekly-transactional-bookkeeping
3. catch-up-bookkeeping-hmrc-deadlines
4. bookkeeping-sole-traders-freelancers
5. bookkeeping-ecommerce-amazon-etsy-shopify
6. cloud-bookkeeping-xero-quickbooks
7. bookkeeping-landlords-property-investors
8. construction-bookkeeping-cis-compliant
9. crypto-transaction-bookkeeping
10. franchise-bookkeeping-support
11. chart-of-accounts-setup-limited-companies
12. bookkeeping-partnerships-llps
13. bookkeeping-startup-businesses
14. financial-dashboards-kpi-tracking
15. receipt-scanning-digital-records
16. industry-specific-bookkeeping
17. bookkeeping-audits-data-cleanup
18. project-based-ad-hoc-bookkeeping
19. payroll-integration-with-bookkeeping
20. bookkeeping-migration-excel-to-xero-quickbooks
21. year-end-reconciliation-account-prep
22. bookkeeping-contractors-ir35
23. cash-flow-focused-bookkeeping
24. business-expense-categorisation-tracking
25. multi-currency-bookkeeping
26. vat-ready-bookkeeping-reconciliation
27. invoice-processing-debtor-tracking
28. budget-vs-actual-reporting
29. cloud-accounting-training-onboarding
30. bookkeeping-setup-making-tax-digital

### Tax (28)
31. self-assessment-sole-traders
32. landlord-tax-returns
33. company-director-tax-returns
34. corporation-tax-ct600-filing
35. late-or-backdated-tax-returns
36. amended-tax-returns
37. capital-gains-tax-returns
38. tax-planning-optimization
39. partnership-tax-returns
40. crypto-tax-returns
41. foreign-income-tax-support
42. dual-uk-dubai-residency-tax-planning
43. cis-contractor-subcontractor-tax-filing
44. ir35-tax-status-review-returns
45. high-earner-tax-planning
46. non-resident-landlord-nrl-tax-filing
47. paye-director-payroll-alignment
48. r-and-d-tax-credit-eligibility
49. influencer-creator-tax-returns
50. dividend-vs-salary-optimisation-planning
51. trust-estate-tax-returns
52. pension-tax-relief-claims
53. child-benefit-hicbc-support
54. self-assessment-investment-income
55. self-assessment-uber-gig-economy
56. student-loan-alignment-in-tax-return
57. sole-trader-to-limited-company-tax-transitions
58. airbnb-short-term-let-tax-returns
59. multiple-income-streams-tax-support
60. tax-planning-review-forecast
61. post-year-end-tax-saving-strategy

### Core (17)
62. companies-house-filing
63. cloud-accounting-setup-xero-quickbooks-sage
64. mtd-compliance-vat-bridging
65. quarterly-vat-returns
66. vat-registration-advisory
67. payroll-paye-p60-p45
68. auto-enrolment-pensions
69. cis-payroll-tax-submissions
70. company-formation-bank-setup
71. business-structure-review
72. registered-office-service
73. management-accounts-monthly-reporting
74. remote-cloud-accounting-uk-kent
75. international-accounting-uk-dubai
76. audit-ready-bookkeeping-hmrc-companies-house
77. dividend-planning-ltd-directors
78. vat-scheme-advisory-flat-rate-annual
79. ad-hoc-accounting-catch-up-bookkeeping

### VAT (2)
80. vat-compliance-reviews
81. reverse-charge-vat

### Advisory (4)
82. financial-health-check-kpi-dashboard
83. growth-strategy-profitability-improvement
84. cost-efficiency-operational-improvement
85. hmrc-enquiry-investigation-support

### Payroll (1)
86. payroll-processing

---

## Technical Details

### Project Root:
```
/Users/ghost/File Easy/file-easy-accountancy/
```

### Key Files:
- **Progress Tracker**: `content/.fileeasy_progress.json`
- **Package Config**: `package.json`
- **Next.js Config**: `next.config.ts`
- **TypeScript Config**: `tsconfig.json`

### Components Location:
```
src/components/
├── ArticleLayout.tsx
├── ArticleCTA.tsx
├── FAQAccordion.tsx
├── ContactStrip.tsx
├── Breadcrumbs.tsx
└── TocHighlight.tsx
```

### Schema Utilities:
```
src/lib/schema.ts
├── FAQPageSchema
├── BreadcrumbSchema
└── ServiceSchema
```

---

## Status Summary

✅ **All 86 articles complete**
✅ **All files created and in correct locations**
✅ **All schemas implemented**
✅ **No linting errors**
✅ **Consistent structure across all articles**
✅ **Ready for navigation/category page implementation**

---

**Document Created:** January 31, 2025  
**Last Updated:** January 31, 2025  
**Status:** Complete and ready for prompt engineer

