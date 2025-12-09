#!/usr/bin/env python3
"""
Create comprehensive knowledge base document for File Easy Accountancy AI Assistant
This document will be used to generate insightful YouTube comments while subtly promoting File Easy.
"""

import json
import os
import re
from pathlib import Path
from datetime import datetime

# Read the services manifest
manifest_path = Path(__file__).parent.parent / "src" / "lib" / "services.manifest.json"
with open(manifest_path, 'r') as f:
    services = json.load(f)

# Knowledge base content
kb_content = []

kb_content.append("# FILE EASY ACCOUNTANCY - AI ASSISTANT KNOWLEDGE BASE")
kb_content.append("=" * 80)
kb_content.append(f"\nDocument Created: {datetime.now().strftime('%B %d, %Y')}\n")
kb_content.append("Purpose: This document provides comprehensive information about File Easy Accountancy")
kb_content.append("for an AI Assistant to create valuable, insightful comments on YouTube videos")
kb_content.append("while subtly promoting File Easy's services.\n")
kb_content.append("=" * 80)

# COMPANY OVERVIEW
kb_content.append("\n\n# COMPANY OVERVIEW")
kb_content.append("=" * 80)
kb_content.append("""
## File Easy Accountancy
**Location:** Rochester, Kent, UK (with offices in London and Dubai)
**Founded:** 2025
**Founders:** Ben Acolatse & Zara Kongwa (Management Accountants)
**Website:** https://fileeasyaccountancy.co.uk
**Phone:** +44 7894 447435
**Email:** zara@fileeasyaccountancy.co.uk
**Calendly:** https://calendly.com/zkongwa/30min

## Vision & Mission
- **Vision:** Kent's most-trusted accounting partner by 2028
- **Mission:** Empowering SMEs, freelancers, and individuals with expert accounting services 
  that drive business growth and financial confidence.

## Core Values
- **Client-First Approach:** Personalized solutions that fit each business perfectly
- **International Presence:** Serving businesses across the UK and Dubai, UAE
- **SME Specialists:** Dedicated focus on small and medium enterprises
- **Tech-Enabled Solutions:** Modern tools (Xero, QuickBooks, Sage) for efficient, accurate accounting

## Service Areas
- **UK Locations:** Medway (Chatham, Rochester, Gillingham), Kent (Maidstone, Canterbury, Ashford, Dartford), London, Nationwide remote services
- **International:** Dubai & UAE businesses, Global remote services

## Key Statistics
- 20+ years combined accounting experience
- 127+ happy businesses served across UK & Dubai
- 4.9/5 average client satisfaction rating
- 86 specialized service offerings
""")

# SERVICE CATEGORIES
kb_content.append("\n\n# SERVICE CATEGORIES & EXPERTISE AREAS")
kb_content.append("=" * 80)

# Group services by category
categories = {}
for service in services:
    cat = service.get('category', 'other')
    if cat not in categories:
        categories[cat] = []
    categories[cat].append(service)

# Define category descriptions
category_descriptions = {
    'bookkeeping': {
        'name': 'Bookkeeping Services',
        'description': 'Comprehensive bookkeeping services for businesses of all types, ensuring accurate financial records and HMRC compliance.',
        'key_expertise': ['Monthly bookkeeping', 'Bank reconciliation', 'Cloud accounting (Xero, QuickBooks, Sage)', 'MTD compliance', 'Industry-specific bookkeeping', 'Catch-up bookkeeping']
    },
    'tax': {
        'name': 'Tax Services',
        'description': 'Expert tax return preparation, tax planning, and tax optimization services for individuals, contractors, and businesses.',
        'key_expertise': ['Self Assessment', 'Corporation Tax', 'IR35 compliance', 'Tax planning', 'Capital Gains Tax', 'Landlord tax returns']
    },
    'core': {
        'name': 'Core Compliance Services',
        'description': 'Essential compliance services including VAT returns, payroll, Companies House filing, and business setup.',
        'key_expertise': ['VAT returns', 'Payroll (PAYE, CIS)', 'Companies House filing', 'Company formation', 'MTD compliance', 'Cloud accounting setup']
    },
    'advisory': {
        'name': 'Business Advisory Services',
        'description': 'Strategic financial guidance to help businesses grow, optimize operations, and improve profitability.',
        'key_expertise': ['Financial health checks', 'Growth strategy', 'Cost efficiency', 'HMRC enquiry support', 'KPI dashboards']
    },
    'payroll': {
        'name': 'Payroll Services',
        'description': 'Comprehensive payroll processing including PAYE, RTI submissions, auto-enrolment pensions, and CIS.',
        'key_expertise': ['PAYE processing', 'RTI submissions', 'Auto-enrolment pensions', 'P60/P45 forms', 'CIS returns']
    },
    'vat': {
        'name': 'VAT Services',
        'description': 'VAT compliance, registration, scheme advisory, and return preparation services.',
        'key_expertise': ['VAT registration', 'VAT returns', 'VAT scheme advisory', 'Reverse charge VAT', 'VAT compliance reviews']
    },
    'tax-returns': {
        'name': 'Tax Return Services',
        'description': 'Specialized tax return preparation for various business types and individual circumstances.',
        'key_expertise': ['Self Assessment', 'Corporation Tax returns', 'Partnership returns', 'Landlord tax returns']
    },
    'financial-reporting': {
        'name': 'Financial Reporting',
        'description': 'Management accounts, financial dashboards, and KPI tracking for better business insights.',
        'key_expertise': ['Management accounts', 'Financial dashboards', 'KPI tracking', 'Budget vs actual reporting']
    },
    'virtual-cfo': {
        'name': 'Virtual CFO Services',
        'description': 'Strategic financial leadership and advisory services for growing businesses.',
        'key_expertise': ['Strategic planning', 'Financial forecasting', 'Cash flow management', 'Business growth advisory']
    },
    'business-advisory': {
        'name': 'Business Advisory',
        'description': 'Strategic business advisory services to help businesses optimize operations and grow.',
        'key_expertise': ['Growth strategy', 'Profitability improvement', 'Cost efficiency', 'Operational improvement']
    }
}

for cat_key, cat_info in sorted(categories.items()):
    cat_desc = category_descriptions.get(cat_key, {'name': cat_key.title(), 'description': '', 'key_expertise': []})
    kb_content.append(f"\n## {cat_desc['name']}")
    kb_content.append(f"\n{cat_desc['description']}")
    kb_content.append(f"\n**Services in this category ({len(cat_info)}):**")
    
    for service in sorted(cat_info, key=lambda x: x.get('title', '')):
        kb_content.append(f"- **{service.get('title', 'N/A')}**: {service.get('description', service.get('excerpt', 'N/A'))[:100]}...")
        kb_content.append(f"  - URL: https://fileeasyaccountancy.co.uk{service.get('url', '')}")
    
    if cat_desc.get('key_expertise'):
        kb_content.append(f"\n**Key Expertise Areas:**")
        for expertise in cat_desc['key_expertise']:
            kb_content.append(f"- {expertise}")

# DETAILED SERVICE DESCRIPTIONS
kb_content.append("\n\n# DETAILED SERVICE DESCRIPTIONS")
kb_content.append("=" * 80)
kb_content.append(f"\nTotal Services: {len(services)}\n")

for service in sorted(services, key=lambda x: x.get('title', '')):
    kb_content.append(f"\n## {service.get('title', 'N/A')}")
    kb_content.append(f"**Category:** {service.get('category', 'N/A').title()}")
    kb_content.append(f"**URL:** https://fileeasyaccountancy.co.uk{service.get('url', '')}")
    kb_content.append(f"**Description:** {service.get('excerpt', service.get('description', 'N/A'))}")
    kb_content.append("")

# COMMON QUESTIONS & ANSWERS
kb_content.append("\n\n# COMMON QUESTIONS & ANSWERS")
kb_content.append("=" * 80)
kb_content.append("""
## Pricing Questions

**Q: How much does bookkeeping cost in Kent?**
A: Bookkeeping services start from £150/month for sole traders, with monthly packages available for limited companies. 
Pricing depends on transaction volume and complexity. File Easy offers transparent, fixed-fee pricing—no hourly billing surprises.
Website: https://fileeasyaccountancy.co.uk/services/bookkeeping/

**Q: How much does a tax return cost?**
A: Self-assessment tax returns start from £150+VAT for simple returns, rising to £400+ for complex cases with multiple income sources. 
Corporation Tax returns start from £600+VAT annually for small companies. File Easy provides fixed quotes upfront with no hidden fees.
Website: https://fileeasyaccountancy.co.uk/services/tax/

**Q: How much does it cost to form a company?**
A: UK company formation costs from £12 (Companies House fee) if you do it yourself, or from £150+VAT if you use an accountant 
who handles the paperwork, registered office, and sets up your accounting systems. Formation typically takes 24-48 hours.
Website: https://fileeasyaccountancy.co.uk/services/core/company-formation-bank-setup/

**Q: How much do payroll services cost?**
A: Payroll services start from £15-£25 per employee per month for basic PAYE and RTI submissions. 
Full-service payroll including pension auto-enrollment, P60s, and P45s costs from £30+ per employee per month. 
File Easy offers fixed-fee packages with no per-run charges.
Website: https://fileeasyaccountancy.co.uk/services/payroll/

## Tax & Compliance Questions

**Q: When is the self assessment deadline?**
A: Online deadline: 31 January 2026. Paper (if eligible): 31 October 2025. We recommend filing by December to avoid the January rush 
and any technical glitches on HMRC systems. Late filing incurs automatic penalties starting at £100.
Website: https://fileeasyaccountancy.co.uk/services/tax/

**Q: What is the VAT threshold?**
A: The UK VAT registration threshold is £90,000 in annual taxable turnover. Once you exceed this, VAT registration becomes mandatory. 
You can also register voluntarily below the threshold to reclaim VAT on business purchases.
Website: https://fileeasyaccountancy.co.uk/services/core/vat-registration-advisory/

**Q: What is Making Tax Digital?**
A: Making Tax Digital (MTD) is HMRC's initiative to digitize tax records. MTD for VAT has been mandatory since April 2022 for businesses 
above the £85,000 threshold. MTD for Income Tax becomes mandatory from April 2026. File Easy helps set up MTD-compliant software like Xero or QuickBooks.
Website: https://fileeasyaccountancy.co.uk/services/core/mtd-compliance-vat-bridging/

**Q: What is IR35?**
A: IR35 (off-payroll working) determines whether contractors working through limited companies should be treated as employees for tax purposes. 
If inside IR35, contractors pay Income Tax and NI as employees. If outside IR35, contractors pay tax through their company. 
File Easy offers IR35 status assessments, contract reviews, and tax optimization.
Website: https://fileeasyaccountancy.co.uk/services/tax/ir35-tax-status-review-returns/
Free Calculator: https://fileeasyaccountancy.co.uk/ir35-calculator/

**Q: What is corporation tax?**
A: Corporation Tax is a tax on limited companies' profits. The current rate is 19% for profits up to £50,000, rising to 25% for profits over £250,000 
(marginal relief applies). Companies must file a CT600 return within 12 months of the year-end.
Website: https://fileeasyaccountancy.co.uk/services/tax/corporation-tax-ct600-filing/

## Service Questions

**Q: Which accounting software do Kent accountants use?**
A: File Easy recommends Xero, QuickBooks Online, and Sage Business Cloud—all MTD-compliant cloud accounting platforms. 
Xero is the preferred choice for real-time bank feeds, mobile apps, and seamless HMRC integration. 
File Easy provides full setup and training.
Website: https://fileeasyaccountancy.co.uk/services/core/cloud-accounting-setup-xero-quickbooks-sage/

**Q: Do I need an accountant for self assessment?**
A: Not legally required, but an accountant helps ensure accuracy, maximize deductions, avoid penalties, and saves you time. 
File Easy handles HMRC correspondence and deadline reminders, reducing stress during tax season.
Website: https://fileeasyaccountancy.co.uk/services/tax/self-assessment-sole-traders/

**Q: Can I do my own tax return?**
A: Yes, you can file your own Self Assessment online via HMRC's portal. However, an accountant ensures accuracy, claims all allowable expenses, 
minimizes tax legally, handles HMRC queries, and reduces the risk of penalties. Most clients find the cost worthwhile.
Website: https://fileeasyaccountancy.co.uk/services/tax/

**Q: How can I reduce my tax bill?**
A: Legal tax reduction strategies include claiming all allowable business expenses, optimizing dividend vs salary splits, using capital allowances, 
claiming R&D tax credits (up to 25% cash back), pension contributions, and timing income/expenses. Proactive tax planning throughout the year is key.
File Easy offers tax planning and optimization services.
Website: https://fileeasyaccountancy.co.uk/services/tax/tax-planning-optimization/
""")

# HOW TO REFERENCE FILE EASY IN COMMENTS
kb_content.append("\n\n# HOW TO REFERENCE FILE EASY IN YOUTUBE COMMENTS")
kb_content.append("=" * 80)
kb_content.append("""
## Principles for Commenting

1. **Provide Value First**: Always offer genuine, helpful information before mentioning File Easy
2. **Be Subtle**: Natural mentions work better than hard sales pitches
3. **Be Contextual**: Only mention File Easy when it's genuinely relevant to the conversation
4. **Use Examples**: Reference specific services when they directly address the commenter's question
5. **Include Links**: When relevant, provide links to specific service pages or resources

## Comment Templates

### Template 1: Direct Question Answer
"Great question! [Answer the question with specific information]. If you need help with [specific service], 
File Easy Accountancy specializes in [service area] and offers [specific benefit]. They have a free consultation 
at calendly.com/zkongwa/30min if you want to discuss your specific situation."

### Template 2: Adding Value to Existing Discussion
"That's a really important point about [topic]. Many businesses struggle with [related challenge]. 
File Easy Accountancy helps businesses in Kent and across the UK with [relevant service], particularly 
for [specific scenario]. Their website has a helpful guide at fileeasyaccountancy.co.uk/services/[relevant-service]/"

### Template 3: IR35 Calculator Promotion
"If you're a contractor, File Easy has a free IR35 calculator that compares take-home pay inside vs outside IR35. 
It's updated for 2025/26 tax rates and takes about 2 minutes. Really helpful for understanding your options: 
fileeasyaccountancy.co.uk/ir35-calculator/"

### Template 4: Tax Planning Advice
"Tax planning is crucial! File Easy Accountancy specializes in helping businesses optimize their tax position legally. 
They offer services like [specific service] and can help with [specific benefit]. Worth a free consultation: 
calendly.com/zkongwa/30min"

### Template 5: Compliance Support
"Staying compliant can be tricky, especially with MTD requirements. File Easy Accountancy helps businesses in Kent 
and across the UK navigate VAT, payroll, and tax compliance. They're experts in cloud accounting setup (Xero, QuickBooks) 
and can help ensure you're meeting all HMRC requirements. More info: fileeasyaccountancy.co.uk/services/core/"

## Key Phrases to Use Naturally

- "File Easy Accountancy specializes in..."
- "I know File Easy Accountancy helps businesses with..."
- "File Easy Accountancy offers [service] for businesses in Kent..."
- "There's a free IR35 calculator at File Easy Accountancy that..."
- "File Easy Accountancy can help with [specific challenge]..."
- "File Easy Accountancy serves businesses across Kent and the UK..."
- "File Easy Accountancy offers free consultations if you need..."

## What NOT to Do

- Don't spam links without context
- Don't make unsupported claims
- Don't comment on every video - only when genuinely relevant
- Don't be overly promotional - provide value first
- Don't promise specific outcomes without qualification
""")

# KEY MESSAGING POINTS
kb_content.append("\n\n# KEY MESSAGING POINTS")
kb_content.append("=" * 80)
kb_content.append("""
## Core Value Propositions

1. **Expertise**: 20+ years combined experience, qualified accountants
2. **Local Knowledge**: Based in Kent, serving businesses across the UK and Dubai
3. **Technology**: Modern cloud accounting software (Xero, QuickBooks, Sage)
4. **Transparency**: Clear pricing, no hidden fees, fixed quotes upfront
5. **Accessibility**: Free consultations, responsive support, no jargon
6. **Comprehensive**: 86 specialized services covering all accounting needs
7. **IR35 Specialists**: Free calculator and expert IR35 advice for contractors
8. **MTD Compliant**: Making Tax Digital setup and compliance support

## Target Audience Pain Points

### SMEs & Businesses
- Complex compliance requirements
- Cash flow management challenges
- Growth planning needs
- Time-consuming accounting tasks
- Technology overwhelm

### Freelancers & Contractors
- IR35 compliance confusion
- VAT registration questions
- Tax optimization needs
- Record keeping challenges
- Self Assessment complexity

### Property Investors
- Landlord tax returns
- Property income tracking
- Expense claims
- Capital Gains Tax planning
- Airbnb/Short-term let taxation

### High Earners
- Tax optimization strategies
- Pension tax relief
- Dividend vs salary planning
- Multiple income streams
- Tax planning throughout the year

## Solutions File Easy Provides

- **Bookkeeping**: Monthly bookkeeping, bank reconciliation, cloud accounting setup
- **Tax Returns**: Self Assessment, Corporation Tax, landlord tax returns
- **VAT**: Registration, returns, scheme advisory, compliance reviews
- **Payroll**: PAYE, RTI, auto-enrolment pensions, CIS
- **IR35**: Status assessments, contract reviews, tax optimization
- **Business Setup**: Company formation, bank setup, registered office
- **Advisory**: Tax planning, growth strategy, financial health checks
- **Compliance**: MTD setup, Companies House filing, HMRC compliance

## Trust Signals

- Free consultations available
- Transparent pricing
- 4.9/5 client satisfaction rating
- 127+ businesses served
- 20+ years combined experience
- Qualified accountants (Management Accountants)
- MTD compliant
- Local Kent presence with UK-wide and Dubai services
""")

# LINKS & RESOURCES
kb_content.append("\n\n# LINKS & RESOURCES")
kb_content.append("=" * 80)
kb_content.append(f"""
## Main Website Links

- **Homepage**: https://fileeasyaccountancy.co.uk/
- **Services Overview**: https://fileeasyaccountancy.co.uk/services/
- **Pricing**: https://fileeasyaccountancy.co.uk/pricing/
- **About**: https://fileeasyaccountancy.co.uk/about/
- **Contact**: https://fileeasyaccountancy.co.uk/contact/
- **IR35 Calculator**: https://fileeasyaccountancy.co.uk/ir35-calculator/
- **Resources**: https://fileeasyaccountancy.co.uk/resources/

## Contact Information

- **Phone**: +44 7894 447435
- **Email**: zara@fileeasyaccountancy.co.uk
- **Calendly**: https://calendly.com/zkongwa/30min
- **WhatsApp**: https://wa.me/447894447435

## Service Category Pages

- **Bookkeeping**: https://fileeasyaccountancy.co.uk/services/bookkeeping/
- **Tax Services**: https://fileeasyaccountancy.co.uk/services/tax/
- **Core Compliance**: https://fileeasyaccountancy.co.uk/services/core/
- **Business Advisory**: https://fileeasyaccountancy.co.uk/services/advisory/
- **Payroll**: https://fileeasyaccountancy.co.uk/services/payroll/
- **VAT**: https://fileeasyaccountancy.co.uk/services/vat/
- **Financial Reporting**: https://fileeasyaccountancy.co.uk/services/financial-reporting/
- **Virtual CFO**: https://fileeasyaccountancy.co.uk/services/virtual-cfo/

## Key Service Pages (Top 20 Most Relevant)

1. **IR35 Calculator**: https://fileeasyaccountancy.co.uk/ir35-calculator/
2. **IR35 Tax Status Review**: https://fileeasyaccountancy.co.uk/services/tax/ir35-tax-status-review-returns/
3. **Self Assessment**: https://fileeasyaccountancy.co.uk/services/tax/self-assessment-sole-traders/
4. **Bookkeeping Services**: https://fileeasyaccountancy.co.uk/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/
5. **VAT Returns**: https://fileeasyaccountancy.co.uk/services/core/quarterly-vat-returns/
6. **Corporation Tax**: https://fileeasyaccountancy.co.uk/services/tax/corporation-tax-ct600-filing/
7. **Company Formation**: https://fileeasyaccountancy.co.uk/services/core/company-formation-bank-setup/
8. **Cloud Accounting Setup**: https://fileeasyaccountancy.co.uk/services/core/cloud-accounting-setup-xero-quickbooks-sage/
9. **Payroll Services**: https://fileeasyaccountancy.co.uk/services/core/payroll-paye-p60-p45/
10. **Tax Planning**: https://fileeasyaccountancy.co.uk/services/tax/tax-planning-optimization/
11. **Landlord Tax Returns**: https://fileeasyaccountancy.co.uk/services/tax/landlord-tax-returns/
12. **VAT Registration**: https://fileeasyaccountancy.co.uk/services/core/vat-registration-advisory/
13. **MTD Compliance**: https://fileeasyaccountancy.co.uk/services/core/mtd-compliance-vat-bridging/
14. **Contractor Bookkeeping**: https://fileeasyaccountancy.co.uk/services/bookkeeping/bookkeeping-contractors-ir35/
15. **Management Accounts**: https://fileeasyaccountancy.co.uk/services/core/management-accounts-monthly-reporting/
16. **Dividend Planning**: https://fileeasyaccountancy.co.uk/services/core/dividend-planning-ltd-directors/
17. **Catch-Up Bookkeeping**: https://fileeasyaccountancy.co.uk/services/bookkeeping/catch-up-bookkeeping-hmrc-deadlines/
18. **HMRC Enquiry Support**: https://fileeasyaccountancy.co.uk/services/advisory/hmrc-enquiry-investigation-support/
19. **CIS Payroll**: https://fileeasyaccountancy.co.uk/services/core/cis-payroll-tax-submissions/
20. **E-commerce Bookkeeping**: https://fileeasyaccountancy.co.uk/services/bookkeeping/bookkeeping-ecommerce-amazon-etsy-shopify/

## All {len(services)} Service Pages Available

For complete list of all services, visit: https://fileeasyaccountancy.co.uk/services/
""")

# Write to file
output_file = Path.home() / "Downloads" / f"File_Easy_Knowledge_Base_{datetime.now().strftime('%Y%m%d')}.md"
with open(output_file, 'w', encoding='utf-8') as f:
    f.write('\n'.join(kb_content))

print(f"✓ Knowledge base created: {output_file}")
print(f"✓ Total services documented: {len(services)}")
print(f"✓ Categories covered: {len(categories)}")
print(f"\nFile size: {output_file.stat().st_size / 1024:.1f} KB")

