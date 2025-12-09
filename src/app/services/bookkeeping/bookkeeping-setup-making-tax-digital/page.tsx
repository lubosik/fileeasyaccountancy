import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ContactStrip from '@/components/ui/ContactStrip';
import { FAQPageSchema, BreadcrumbSchema } from '@/lib/schema';
import ArticleLayout from '@/components/ArticleLayout';
import ArticleCTA from '@/components/ArticleCTA';
import TocHighlight from '@/components/TocHighlight';

export const metadata: Metadata = {
  title: 'Making Tax Digital Setup & Bookkeeping Services in Kent | File Easy Accountancy',
  description: 'Making Tax Digital setup and MTD-compliant bookkeeping services in Kent. MTD software requirements, digital record keeping, MTD compliance. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/bookkeeping-setup-making-tax-digital/',
  },
  openGraph: {
    title: 'Making Tax Digital Setup & Bookkeeping Services in Kent | File Easy Accountancy',
    description: 'Making Tax Digital setup and MTD-compliant bookkeeping services in Kent. MTD software requirements, digital record keeping, MTD compliance.',
    url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping-setup-making-tax-digital/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is Making Tax Digital setup?',
    answer: 'Making Tax Digital setup is the process of configuring your bookkeeping and accounting software to meet HMRC\'s Making Tax Digital requirements. It includes: choosing HMRC-approved MTD-compatible software, setting up digital record keeping (maintaining records digitally as required), configuring API submission (connecting software to HMRC for digital returns), and verifying compliance (ensuring setup meets all MTD requirements). Proper setup ensures you can submit returns digitally and meet all MTD compliance requirements.',
  },
  {
    question: 'How do you set up bookkeeping for MTD?',
    answer: 'Setting up bookkeeping for MTD involves: assessing your MTD requirements (VAT MTD is mandatory, Income Tax MTD becomes mandatory April 2026), selecting HMRC-approved MTD-compatible software, configuring digital record keeping (all records kept digitally, digital links between systems), setting up API submission (authorize software to submit returns to HMRC), and verifying compliance (check all MTD requirements are met). Proper setup ensures MTD-compliant bookkeeping from day one.',
  },
  {
    question: 'What software do you need for MTD?',
    answer: 'For MTD, you need HMRC-approved compatible software. HMRC provides a list of approved software (Xero, QuickBooks, Sage, FreeAgent, and others). The software must: maintain digital records, submit returns via API to HMRC, support digital links between systems, and meet HMRC\'s MTD requirements. Free and paid options are available—we\'ll help you choose software that works for your business and budget.',
  },
  {
    question: 'How do you prepare for Making Tax Digital?',
    answer: 'Preparing for Making Tax Digital involves: understanding MTD requirements (VAT MTD is mandatory, Income Tax MTD starts April 2026), selecting HMRC-approved MTD-compatible software, setting up digital record keeping (configure software for digital records), testing API submission (ensure software can submit returns to HMRC), and ensuring compliance (verify all MTD requirements are met). Early preparation ensures you\'re ready when MTD becomes mandatory.',
  },
  {
    question: 'What records do you need for MTD?',
    answer: 'For MTD, you need to maintain digital records of all business transactions (sales, purchases, expenses, income). For MTD for Income Tax, digital records are required for self-employment and property income (other income doesn\'t need digital records but must be reported on tax return). All records must be kept digitally throughout the accounting period (not just converted to digital at year-end). Digital records must be stored in MTD-compatible format and accessible for HMRC inspection.',
  },
  {
    question: 'Do I need MTD bookkeeping setup?',
    answer: 'Yes, definitely if you\'re VAT-registered (MTD for VAT is mandatory since November 2022) or if you\'re a sole trader or landlord with £50,000+ turnover (MTD for Income Tax becomes mandatory April 2026). MTD bookkeeping setup ensures you meet HMRC requirements, can submit returns digitally, and avoid penalties. Without proper setup, you can\'t submit returns or face compliance issues. It\'s worth getting it right—MTD compliance is mandatory, so proper setup is essential.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'Bookkeeping Setup - Making Tax Digital', href: '/services/bookkeeping/bookkeeping-setup-making-tax-digital' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function BookkeepingSetupMakingTaxDigitalPage() {
  return (
    <>
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={breadcrumbs.map((item) => ({
          name: item.label,
          url: `https://fileeasyaccountancy.co.uk${item.href}`,
        }))}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Bookkeeping Setup - Making Tax Digital',
            provider: {
              '@type': 'AccountingService',
              name: 'File Easy Accountancy',
              url: 'https://fileeasyaccountancy.co.uk',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+44-7894-447435',
                contactType: 'customer service',
                email: 'info@fileeasyaccountancy.co.uk',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '43 Castle Avenue',
                addressLocality: 'Rochester',
                addressRegion: 'Kent',
                postalCode: 'ME1 2DU',
                addressCountry: 'GB',
              },
              areaServed: [
                { '@type': 'City', name: 'Medway', containedIn: { '@type': 'AdministrativeArea', name: 'Kent' } },
                { '@type': 'City', name: 'Maidstone', containedIn: { '@type': 'AdministrativeArea', name: 'Kent' } },
                { '@type': 'City', name: 'Canterbury', containedIn: { '@type': 'AdministrativeArea', name: 'Kent' } },
                { '@type': 'City', name: 'Ashford', containedIn: { '@type': 'AdministrativeArea', name: 'Kent' } },
                { '@type': 'City', name: 'Dartford', containedIn: { '@type': 'AdministrativeArea', name: 'Kent' } },
              ],
            },
            description: 'Making Tax Digital setup and MTD-compliant bookkeeping services in Kent. MTD software requirements, digital record keeping, MTD compliance.',
            name: 'Bookkeeping Setup - Making Tax Digital',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/bookkeeping-setup-making-tax-digital/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MTD Software Selection' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Record Keeping Setup' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Submission Setup' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Verification' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Bookkeeping Setup - Making Tax Digital"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          Making Tax Digital (MTD) is mandatory for VAT-registered businesses and is rolling out for Income Tax. Without proper MTD setup, you can&apos;t submit returns, face penalties, and struggle with compliance. Making Tax Digital requires businesses to keep digital records and use compatible software—proper MTD bookkeeping setup ensures compliance with HMRC requirements. MTD setup involves configuring compatible software for digital record keeping and API submission—effective setup ensures businesses can submit returns digitally to HMRC.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Making Tax Digital requires businesses to keep digital records and use compatible software</strong> — Proper MTD bookkeeping setup ensures compliance with HMRC requirements (
              <a href="https://www.gov.uk/guidance/get-your-business-ready-for-making-tax-digital-for-vat" target="_blank" rel="noopener noreferrer">
                gov.uk Making Tax Digital
              </a>
              )
            </li>
            <li>
              <strong>MTD setup involves configuring compatible software for digital record keeping and API submission</strong> — Effective setup ensures businesses can submit returns digitally to HMRC
            </li>
            <li>
              <strong>Digital record keeping under MTD requires businesses to maintain records digitally throughout the accounting period</strong> — Proper setup ensures all records are MTD-compliant (
              <a href="https://www.gov.uk/self-employed-records" target="_blank" rel="noopener noreferrer">
                gov.uk digital records
              </a>
              )
            </li>
            <li>
              <strong>MTD-compliant bookkeeping setup ensures businesses meet HMRC&apos;s digital record keeping and submission requirements</strong> — Proper setup prevents compliance issues and penalties
            </li>
          </ul>
        </div>

        <p>
          The problem is most businesses don&apos;t set up MTD properly. They choose incompatible software, don&apos;t configure digital record keeping correctly, or miss API submission setup. That causes problems—incompatible software means you can&apos;t submit returns, wrong setup means compliance issues, and missed configuration means penalties.
        </p>

        <p>
          We handle MTD bookkeeping setup for businesses needing Making Tax Digital compliance: MTD software selection (choosing HMRC-compatible software), digital record keeping setup (configuring MTD-compliant record keeping), API submission setup (connecting software to HMRC for digital submissions), and compliance verification (ensuring setup meets all MTD requirements). Whether you&apos;re a VAT-registered business in Medway needing MTD for VAT setup, a sole trader in Maidstone preparing for MTD for Income Tax (starting April 2026), or a business in Canterbury needing MTD-compliant bookkeeping, we&apos;ll set up MTD bookkeeping that works. No compliance issues, no penalties—just proper MTD setup that keeps you compliant.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet MTD compliance requirements</strong> — Proper MTD setup ensures you meet HMRC&apos;s Making Tax Digital requirements for VAT and Income Tax. Compliance means you can submit returns and avoid penalties.
          </li>
          <li>
            <strong>Submit returns digitally</strong> — MTD setup enables digital submission of VAT returns and quarterly Income Tax updates via API. Digital submission is faster and more reliable than manual filing.
          </li>
          <li>
            <strong>Maintain digital records correctly</strong> — MTD-compliant bookkeeping setup ensures all records are kept digitally as required by HMRC. Digital records meet MTD requirements and support digital submissions.
          </li>
          <li>
            <strong>Avoid penalties and compliance issues</strong> — Proper MTD setup prevents compliance issues and penalties. You&apos;ll meet all HMRC requirements, so you don&apos;t face fines or investigation.
          </li>
          <li>
            <strong>Use compatible software</strong> — MTD setup ensures you use HMRC-compatible software that works with MTD. Compatible software enables digital submissions and meets all MTD requirements.
          </li>
          <li>
            <strong>Prepare for MTD for Income Tax</strong> — If you&apos;re preparing for MTD for Income Tax (starting April 2026), proper setup ensures you&apos;re ready when it becomes mandatory. Early setup means smoother transition.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for MTD bookkeeping setup:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: whether you&apos;re VAT-registered (MTD for VAT is already mandatory), whether you need MTD for Income Tax setup (becomes mandatory April 2026 for sole traders/landlords with £50,000+ turnover), what your current bookkeeping setup looks like, what software you&apos;re currently using, and what you want to achieve.
          </li>
          <li>
            <strong>MTD eligibility assessment</strong> — We assess your MTD requirements:
            <ul>
              <li>
                <strong>VAT MTD</strong> — If you&apos;re VAT-registered, MTD for VAT is mandatory (since November 2022). We&apos;ll assess your current VAT compliance and setup needs.
              </li>
              <li>
                <strong>Income Tax MTD</strong> — If you&apos;re a sole trader or landlord, we&apos;ll assess whether you need MTD for Income Tax (mandatory from April 2026 if turnover is £50,000+)
              </li>
              <li>
                <strong>Exemptions</strong> — Check if you qualify for any MTD exemptions (disability, location, religious beliefs, insolvency)
              </li>
            </ul>
            MTD eligibility assessment ensures you understand what&apos;s required.
          </li>
          <li>
            <strong>MTD software selection</strong> — We help you choose compatible software:
            <ul>
              <li>
                <strong>HMRC-approved software</strong> — Select from HMRC&apos;s list of approved MTD-compatible software (Xero, QuickBooks, Sage, FreeAgent, and others)
              </li>
              <li>
                <strong>Software features</strong> — Choose software with features you need (bank feeds, VAT management, Income Tax tracking, reporting)
              </li>
              <li>
                <strong>Integration options</strong> — Consider software that integrates with your existing systems (if you use spreadsheets, consider bridging software)
              </li>
              <li>
                <strong>Cost considerations</strong> — Balance software cost with features needed (free options available, but paid options often have better features)
              </li>
            </ul>
            MTD software selection ensures you use HMRC-compatible software that works for your business.
          </li>
          <li>
            <strong>Digital record keeping setup</strong> — We set up MTD-compliant digital record keeping:
            <ul>
              <li>
                <strong>Digital records configuration</strong> — Configure software to maintain digital records as required by MTD (all transactions recorded digitally, no manual paper records)
              </li>
              <li>
                <strong>Record storage</strong> — Ensure records are stored digitally in MTD-compatible format (digital records throughout accounting period, not just at year-end)
              </li>
              <li>
                <strong>Digital links</strong> — Set up digital links between systems (if using multiple software packages, ensure digital links between them—no manual data entry)
              </li>
              <li>
                <strong>Record keeping for Income Tax MTD</strong> — For MTD for Income Tax, set up digital records for self-employment and property income (other income doesn&apos;t need digital records but must be reported)
              </li>
            </ul>
            Digital record keeping setup ensures all records meet MTD requirements.
          </li>
          <li>
            <strong>API submission setup</strong> — We set up API submission to HMRC:
            <ul>
              <li>
                <strong>Software authorization</strong> — Authorize software to submit returns to HMRC on your behalf (connect software to HMRC via API)
              </li>
              <li>
                <strong>API connection</strong> — Test API connection to ensure software can submit returns successfully
              </li>
              <li>
                <strong>Submission verification</strong> — Verify that submissions are received by HMRC (get confirmation of successful submission)
              </li>
              <li>
                <strong>Ongoing submission setup</strong> — For MTD for Income Tax, set up quarterly update submissions (quarterly updates required, annual return by January 31)
              </li>
            </ul>
            API submission setup enables digital submission of returns to HMRC.
          </li>
          <li>
            <strong>Compliance verification</strong> — We verify MTD compliance:
            <ul>
              <li>
                <strong>Record keeping check</strong> — Verify all records are kept digitally as required
              </li>
              <li>
                <strong>Software compatibility check</strong> — Confirm software is HMRC-approved and compatible with MTD
              </li>
              <li>
                <strong>Submission test</strong> — Test submission to ensure it works correctly
              </li>
              <li>
                <strong>Compliance documentation</strong> — Document setup to show MTD compliance (useful for HMRC inspections)
              </li>
            </ul>
            Compliance verification ensures your setup meets all MTD requirements.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What MTD bookkeeping setup includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>MTD eligibility assessment (VAT MTD, Income Tax MTD, exemptions)</li>
            <li>MTD software selection (HMRC-approved software, features, integration, cost)</li>
            <li>Digital record keeping setup (digital records configuration, storage, digital links, Income Tax records)</li>
            <li>API submission setup (software authorization, API connection, submission verification, quarterly updates)</li>
            <li>Compliance verification (record keeping check, software compatibility, submission test, documentation)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>MTD for VAT (mandatory since November 2022):</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>All VAT-registered businesses must use MTD</li>
            <li>Digital records required</li>
            <li>VAT returns submitted via API from compatible software</li>
            <li>Digital links required between systems</li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>MTD for Income Tax (mandatory from April 2026):</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Applies to sole traders and landlords with £50,000+ turnover</li>
            <li>Digital records required for self-employment and property income</li>
            <li>Quarterly updates required (submitted digitally)</li>
            <li>Annual return by January 31</li>
          </ul>
        </div>

        <p>
          We work with any HMRC-approved MTD software. The key is choosing software that works for your business, setting up digital record keeping correctly, and ensuring API submission works, so you meet all MTD requirements and avoid compliance issues.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>MTD type</strong> — MTD for VAT setup is simpler than MTD for Income Tax (more complex requirements, quarterly submissions)
          </li>
          <li>
            <strong>Software cost</strong> — Software costs vary (free options available, paid options £10-£50/month or more depending on features)
          </li>
          <li>
            <strong>Current setup</strong> — If you already have compatible software, setup costs less than if you need new software
          </li>
          <li>
            <strong>Complexity</strong> — More complex businesses (multiple income streams, complex records) require more setup work
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>MTD for VAT setup:</strong> £300–£600 depending on software and current setup
          </li>
          <li>
            <strong>MTD for Income Tax setup:</strong> £400–£800 depending on software and income complexity
          </li>
          <li>
            <strong>Full MTD setup (VAT + Income Tax):</strong> £600–£1,200 for comprehensive MTD setup
          </li>
          <li>
            <strong>MTD software migration:</strong> £400–£800 if migrating from non-compatible software
          </li>
        </ul>

        <p>
          <strong>Why MTD bookkeeping setup costs what it does:</strong>
        </p>
        <ul>
          <li>MTD eligibility assessment requires understanding of MTD requirements and your business situation</li>
          <li>Software selection requires knowledge of HMRC-approved options and business needs</li>
          <li>Digital record keeping setup requires configuration of MTD-compliant record keeping</li>
          <li>API submission setup requires technical knowledge of HMRC API and software integration</li>
          <li>Compliance verification requires checking all MTD requirements are met</li>
        </ul>

        <p>
          <strong>Timeline:</strong> MTD for VAT setup usually takes 3-5 working days depending on software and current setup. MTD for Income Tax setup usually takes 5-7 working days (more complex requirements). Full MTD setup (both VAT and Income Tax) can take 1-2 weeks. Setup is usually done before MTD becomes mandatory, so you&apos;re ready when it&apos;s required.
        </p>

        <p>
          <strong>Ongoing support:</strong> If you want ongoing MTD support (help with submissions, software updates, compliance checks), that&apos;s separate. Typical ongoing MTD support is £100–£200/month depending on support needs. We can also provide one-off support for specific MTD issues if needed.
        </p>

        <p>
          <strong>No hidden fees.</strong> Setup price includes MTD eligibility assessment, software selection, digital record keeping setup, API submission setup, and compliance verification. Ongoing MTD support and software costs are separate if you want them.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with businesses across Kent: VAT-registered businesses in Medway needing MTD for VAT setup, sole traders in Maidstone preparing for MTD for Income Tax, and businesses in Canterbury needing MTD-compliant bookkeeping.
        </p>

        <p>
          Kent businesses face the same MTD requirements as everyone else—MTD for VAT is mandatory (since November 2022), and MTD for Income Tax is coming (April 2026 for businesses with £50,000+ turnover). The difference is when you get proper MTD setup, you choose compatible software, configure digital record keeping correctly, and set up API submission properly. That&apos;s what helps Kent businesses meet MTD requirements and avoid compliance issues.
        </p>

        <p>
          <strong>Common Kent business scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>VAT-registered businesses</strong> — Businesses needing MTD for VAT setup (mandatory since November 2022)
          </li>
          <li>
            <strong>Sole traders preparing for MTD</strong> — Sole traders preparing for MTD for Income Tax (mandatory from April 2026 if turnover is £50,000+)
          </li>
          <li>
            <strong>Landlords preparing for MTD</strong> — Landlords preparing for MTD for Income Tax (mandatory from April 2026)
          </li>
          <li>
            <strong>Businesses migrating to MTD software</strong> — Businesses using non-compatible software needing to migrate to MTD-compliant software
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent businesses are VAT-registered and need MTD for VAT compliance</li>
          <li>Sole traders and landlords in Kent need to prepare for MTD for Income Tax (April 2026)</li>
          <li>Proper MTD setup helps Kent businesses meet HMRC requirements and avoid penalties</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses are dealing with. MTD setup, digital record keeping, API submission—we&apos;ll set up MTD bookkeeping that helps you meet HMRC requirements and stay compliant.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Bookkeeping Setup - Making Tax Digital - Frequently Asked Questions"
          subtitle="Common questions about Making Tax Digital setup and bookkeeping"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/vat-ready-bookkeeping-reconciliation/">VAT-Ready Bookkeeping & Reconciliation</Link> — MTD-compliant VAT bookkeeping and reconciliation
            </li>
            <li>
              <Link href="/services/bookkeeping/cloud-accounting-training-onboarding/">Cloud Accounting Training & Onboarding</Link> — Training on MTD-compatible cloud accounting software
            </li>
            <li>
              <Link href="/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/">Monthly Bookkeeping with Bank Reconciliation</Link> — Monthly bookkeeping that meets MTD requirements
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with MTD bookkeeping setup?" description="We'll assess your MTD requirements, choose compatible software, set up digital record keeping, and ensure API submission works. No compliance issues, no penalties—just proper MTD setup that keeps you compliant." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with MTD bookkeeping setup?" />
    </>
  );
}

