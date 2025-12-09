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
  title: 'CIS Payroll Tax Submissions Services in Kent | File Easy Accountancy',
  description: 'Expert CIS payroll tax submissions services in Kent. CIS returns, CIS payroll, Construction Industry Scheme, CIS tax returns. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/cis-payroll-tax-submissions/',
  },
  openGraph: {
    title: 'CIS Payroll Tax Submissions Services in Kent | File Easy Accountancy',
    description: 'Expert CIS payroll tax submissions services in Kent. CIS returns, CIS payroll, Construction Industry Scheme, CIS tax returns.',
    url: 'https://fileeasyaccountancy.co.uk/services/cis-payroll-tax-submissions/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is CIS?',
    answer: 'CIS (Construction Industry Scheme) requires contractors to deduct tax from payments made to subcontractors in the construction industry, with deductions typically at 20% for registered subcontractors or 30% for unregistered subcontractors. CIS applies to most construction work, including building, alterations, repairs, demolition, installation, and site preparation. Contractors must file CIS returns monthly, reporting all subcontractors paid and deductions made. Subcontractors can register for CIS to receive payments with lower deduction rates (20% instead of 30%). It\'s worth getting professional help to understand CIS and ensure compliance.',
  },
  {
    question: 'What are CIS returns?',
    answer: 'CIS returns are monthly returns that contractors must file with HMRC, reporting all subcontractors paid and deductions made during the month. CIS returns must include details of all subcontractors paid (names, addresses, CIS registration numbers), gross amounts paid, deduction amounts, and deduction rates applied. Returns must be filed by the 19th of each month for the previous month\'s payments (e.g., January return due by 19 February). Contractors who fail to file CIS returns on time can face penalties from HMRC. It\'s worth getting professional help to prepare and file CIS returns correctly and on time.',
  },
  {
    question: 'How do I file CIS returns?',
    answer: 'To file CIS returns, you need to: gather details of all subcontractors paid during the month (names, addresses, CIS registration numbers, payment dates), calculate gross amounts paid, deduction amounts, and deduction rates for each subcontractor, complete the CIS return with all required information (subcontractor details, payment details, deduction details), and file the return online to HMRC by the 19th of each month for the previous month\'s payments. Most contractors use HMRC\'s online service or compatible software to file returns. It\'s worth getting professional help to ensure returns are complete and filed on time.',
  },
  {
    question: 'What are CIS deductions?',
    answer: 'CIS deductions are tax deductions that contractors must make from payments to subcontractors in the construction industry. Deduction rates are: 20% for registered subcontractors (subcontractors who have registered with HMRC for CIS), and 30% for unregistered subcontractors (subcontractors who have not registered for CIS). Deductions are calculated as a percentage of the gross payment (before deductions), and the deducted amount is paid to HMRC by the contractor. Subcontractors can offset CIS deductions against their tax and National Insurance liabilities. It\'s worth getting professional help to calculate and make deductions correctly.',
  },
  {
    question: 'Who needs to register for CIS?',
    answer: 'Contractors need to register for CIS if they pay subcontractors for construction work. Subcontractors may also register for CIS to receive payments with lower deduction rates (20% instead of 30%). Registration is completed online with HMRC, and contractors must register before they start paying subcontractors. Subcontractors can register at any time, and registration helps them receive payments with lower deduction rates. It\'s worth getting professional help to register correctly and understand registration requirements.',
  },
  {
    question: 'How often do I need to file CIS returns?',
    answer: 'Contractors must file CIS returns monthly, with returns due by the 19th of each month for the previous month\'s payments. For example, January\'s return (covering payments made in January) must be filed by 19 February. Even if no subcontractors were paid in a month, contractors must still file a \'nil\' return (a return showing no payments or deductions). Failure to file returns on time can result in penalties from HMRC. It\'s worth getting professional help to ensure returns are filed monthly and on time.',
  },
  {
    question: 'What happens if I don\'t file CIS returns?',
    answer: 'If you don\'t file CIS returns on time or correctly, you can face penalties from HMRC: fixed penalties for late returns (typically £100 for each late return), penalties for incorrect returns (penalties based on the nature and extent of errors), and potential prosecution for serious or deliberate non-compliance. The severity of penalties depends on the nature and extent of non-compliance. In addition to penalties, non-compliance can result in HMRC enquiries, reputational damage, and issues with subcontractors. It\'s worth getting professional help to ensure returns are filed correctly and on time to avoid penalties.',
  },
  {
    question: 'How do I register for CIS?',
    answer: 'To register for CIS, you need to: determine if you need to register (contractors must register if they pay subcontractors for construction work; subcontractors may register to receive lower deduction rates), complete CIS registration online with HMRC (providing business details, contact information, and confirming you\'re in the construction industry), receive confirmation from HMRC (typically within a few days), and start complying with CIS requirements (contractors start making deductions and filing returns; subcontractors receive payments with lower deduction rates). Registration is free and can be completed online. It\'s worth getting professional help to ensure registration is completed correctly and you understand your CIS obligations.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Core', href: '/services/core' },
  { label: 'CIS Payroll Tax Submissions', href: '/services/core/cis-payroll-tax-submissions' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function CISPayrollTaxSubmissionsPage() {
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
            serviceType: 'CIS Payroll Tax Submissions',
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
                { '@type': 'City', name: 'Dubai', containedIn: { '@type': 'Country', name: 'UAE' } },
              ],
            },
            description: 'Expert CIS payroll tax submissions services in Kent. CIS returns, CIS payroll, Construction Industry Scheme, CIS tax returns.',
            name: 'CIS Payroll Tax Submissions',
            url: 'https://fileeasyaccountancy.co.uk/services/core/cis-payroll-tax-submissions/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'CIS Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CIS Registration' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CIS Deduction Calculation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CIS Return Preparation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CIS Return Filing' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="CIS Payroll Tax Submissions"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re a contractor in the construction industry, you&apos;ve gotta file CIS returns monthly and make deductions from subcontractor payments—it&apos;s not optional, and failing to comply can mean penalties and issues. The Construction Industry Scheme (CIS) requires contractors to deduct tax from payments made to subcontractors in the construction industry, with deductions typically at 20% for registered subcontractors or 30% for unregistered subcontractors (
          <a href="https://www.gov.uk/government/collections/construction-industry-scheme-cis" target="_blank" rel="noopener noreferrer">
            gov.uk Construction Industry Scheme
          </a>
          ). Contractors must file CIS returns monthly, reporting all subcontractors paid and deductions made, with returns due by the 19th of each month for the previous month&apos;s payments. Contractors who fail to file CIS returns on time can face penalties from HMRC, including fixed penalties for late returns and penalties for incorrect returns or failure to file.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>CIS requires contractors to deduct tax from subcontractor payments</strong> — At 20% for registered subcontractors or 30% for unregistered subcontractors
            </li>
            <li>
              <strong>CIS returns must be filed monthly</strong> — By the 19th of each month for the previous month&apos;s payments
            </li>
            <li>
              <strong>Contractors must register for CIS</strong> — If they pay subcontractors for construction work
            </li>
            <li>
              <strong>Subcontractors can register for CIS</strong> — To receive payments with lower deduction rates (20% instead of 30%)
            </li>
          </ul>
        </div>

        <p>
          The problem is most contractors find CIS confusing or don&apos;t understand their obligations. They don&apos;t register for CIS when they should, don&apos;t make deductions correctly (wrong rates, missing deductions), file CIS returns late or incorrectly, don&apos;t understand which subcontractors to include, or struggle with CIS compliance. That causes problems—HMRC penalties for late or incorrect returns, incorrect deductions leading to overpayments or underpayments, issues with subcontractors about deduction rates, and stress from trying to get it right.
        </p>

        <p>
          We handle CIS payroll tax submissions for contractors across Kent: CIS registration (helping contractors and subcontractors register for CIS, understanding registration requirements, and completing registration correctly), CIS deduction calculation (calculating CIS deductions at the correct rates—20% for registered subcontractors, 30% for unregistered—and ensuring deductions are made correctly), CIS return preparation (preparing monthly CIS returns with all subcontractors paid, gross amounts, deduction amounts, and deduction rates, ensuring returns are complete and accurate), CIS return filing (filing CIS returns monthly by the 19th deadline, submitting returns online to HMRC, and ensuring filing is timely and correct), subcontractor management (managing subcontractor records, verifying CIS registration status, and ensuring correct deduction rates are applied), compliance support (helping contractors stay compliant with CIS requirements, handle HMRC queries, and avoid penalties), and ongoing support (providing ongoing support for CIS compliance, including monthly return preparation and filing, deduction management, and compliance advice). Whether you&apos;re a contractor in Medway needing CIS return preparation, a construction business in Maidstone struggling with deductions, or a company in Canterbury wanting ongoing CIS support, we&apos;ll handle your CIS payroll tax submissions that work. No penalties, no errors—just proper CIS compliance that keeps you on the right side of HMRC.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Register for CIS correctly</strong> — We&apos;ll help contractors and subcontractors register for CIS, ensuring registration is completed correctly and on time. Correct registration ensures compliance.
          </li>
          <li>
            <strong>Make correct deductions</strong> — We&apos;ll help calculate and make CIS deductions at the correct rates (20% for registered, 30% for unregistered), ensuring deductions are accurate. Correct deductions prevent overpayments or underpayments.
          </li>
          <li>
            <strong>File CIS returns on time</strong> — We&apos;ll prepare and file CIS returns monthly by the 19th deadline, avoiding late filing penalties. On-time filing prevents penalties.
          </li>
          <li>
            <strong>Stay compliant with HMRC</strong> — We&apos;ll help you stay compliant with CIS requirements, handle HMRC queries, and avoid penalties. Compliance reduces risk.
          </li>
          <li>
            <strong>Manage subcontractors effectively</strong> — We&apos;ll help manage subcontractor records, verify CIS registration status, and ensure correct deduction rates. Effective management prevents errors.
          </li>
          <li>
            <strong>Save time and reduce stress</strong> — Having professional support for CIS saves time and reduces stress from return preparation, filing, and compliance concerns.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for CIS payroll tax submissions:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: whether you&apos;re a contractor or subcontractor, whether you&apos;re registered for CIS, how many subcontractors you pay (or if you&apos;re a subcontractor, how many contractors you work for), what your current CIS process is (if any), whether you&apos;ve had any CIS issues, and what help you need. Understanding your situation helps us tailor support.
          </li>
          <li>
            <strong>CIS registration assessment</strong> — We assess your CIS registration status:
            <ul>
              <li>
                <strong>Contractor registration</strong> — We check if you&apos;re registered as a contractor (contractors must register if they pay subcontractors for construction work).
              </li>
              <li>
                <strong>Subcontractor registration</strong> — We check if you&apos;re registered as a subcontractor (subcontractors can register to receive payments with 20% deduction instead of 30%).
              </li>
              <li>
                <strong>Registration requirements</strong> — We review registration requirements and help complete registration if needed.
              </li>
              <li>
                <strong>Registration verification</strong> — We verify registration status with HMRC and ensure it&apos;s up to date.
              </li>
            </ul>
            CIS registration assessment ensures you&apos;re registered correctly.
          </li>
          <li>
            <strong>Subcontractor management and verification</strong> — We help manage subcontractors:
            <ul>
              <li>
                <strong>Subcontractor records</strong> — We help maintain records of all subcontractors paid, including names, addresses, CIS registration numbers (if registered), and payment details.
              </li>
              <li>
                <strong>CIS registration verification</strong> — We verify each subcontractor&apos;s CIS registration status with HMRC (using HMRC&apos;s verification service) to determine correct deduction rates (20% for registered, 30% for unregistered).
              </li>
              <li>
                <strong>Payment tracking</strong> — We track payments made to subcontractors, including gross amounts, deduction amounts, and deduction rates applied.
              </li>
              <li>
                <strong>Record keeping</strong> — We help maintain records of all payments, deductions, and CIS returns for HMRC compliance.
              </li>
            </ul>
            Subcontractor management ensures correct deductions are made.
          </li>
          <li>
            <strong>CIS deduction calculation</strong> — We help calculate CIS deductions:
            <ul>
              <li>
                <strong>Deduction rate determination</strong> — We determine the correct deduction rate for each subcontractor (20% for registered subcontractors, 30% for unregistered subcontractors) based on their CIS registration status.
              </li>
              <li>
                <strong>Gross payment calculation</strong> — We calculate gross payments made to subcontractors (before deductions).
              </li>
              <li>
                <strong>Deduction calculation</strong> — We calculate deduction amounts (gross payment × deduction rate) for each subcontractor.
              </li>
              <li>
                <strong>Net payment calculation</strong> — We calculate net payments to subcontractors (gross payment minus deduction).
              </li>
              <li>
                <strong>Verification</strong> — We verify deduction calculations are correct before payments are made.
              </li>
            </ul>
            CIS deduction calculation ensures deductions are accurate.
          </li>
          <li>
            <strong>CIS return preparation</strong> — We prepare monthly CIS returns:
            <ul>
              <li>
                <strong>Subcontractor details</strong> — We include details of all subcontractors paid during the month (names, addresses, CIS registration numbers, payment dates).
              </li>
              <li>
                <strong>Payment details</strong> — We include gross amounts paid, deduction amounts, and deduction rates applied for each subcontractor.
              </li>
              <li>
                <strong>Return completion</strong> — We complete all required sections of the CIS return, ensuring all information is accurate and complete.
              </li>
              <li>
                <strong>Return verification</strong> — We verify the return is complete and accurate before filing.
              </li>
            </ul>
            CIS return preparation ensures returns are ready for filing.
          </li>
          <li>
            <strong>CIS return filing</strong> — We file CIS returns monthly:
            <ul>
              <li>
                <strong>Filing deadline</strong> — We ensure returns are filed by the 19th of each month for the previous month&apos;s payments (e.g., January return due by 19 February).
              </li>
              <li>
                <strong>Online filing</strong> — We file returns online to HMRC (using HMRC&apos;s online service or compatible software).
              </li>
              <li>
                <strong>Filing confirmation</strong> — We confirm successful filing and provide proof of filing.
              </li>
              <li>
                <strong>Deadline management</strong> — We manage filing deadlines to ensure returns are always filed on time.
              </li>
            </ul>
            CIS return filing ensures returns are submitted on time.
          </li>
          <li>
            <strong>CIS deduction payment</strong> — We help manage CIS deduction payments:
            <ul>
              <li>
                <strong>Payment calculation</strong> — We calculate total CIS deductions due to HMRC for each month.
              </li>
              <li>
                <strong>Payment deadline</strong> — We ensure deductions are paid to HMRC by the 19th of each month (same deadline as return filing).
              </li>
              <li>
                <strong>Payment processing</strong> — We help process payments to HMRC (via BACS, bank transfer, or other approved methods).
              </li>
              <li>
                <strong>Payment tracking</strong> — We track payments made to HMRC and ensure they&apos;re received on time.
              </li>
            </ul>
            CIS deduction payment ensures deductions are paid correctly.
          </li>
          <li>
            <strong>Compliance support and ongoing management</strong> — We provide ongoing support:
            <ul>
              <li>
                <strong>Compliance monitoring</strong> — We monitor CIS compliance, including return filing deadlines, deduction payments, and registration status.
              </li>
              <li>
                <strong>HMRC liaison</strong> — We help liaise with HMRC if there are any queries or issues.
              </li>
              <li>
                <strong>Penalty avoidance</strong> — We help ensure compliance to avoid penalties (fixed penalties for late returns, penalties for incorrect returns).
              </li>
              <li>
                <strong>Ongoing advice</strong> — We provide ongoing advice on CIS requirements, changes to legislation, and best practices.
              </li>
              <li>
                <strong>Annual reconciliation</strong> — We help reconcile CIS deductions with subcontractor tax and NI liabilities (subcontractors can offset deductions against their liabilities).
              </li>
            </ul>
            Compliance support maintains ongoing compliance.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What CIS payroll tax submissions includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>CIS registration (contractor and subcontractor registration)</li>
            <li>Subcontractor management and verification (CIS registration status, records, payment tracking)</li>
            <li>CIS deduction calculation (correct rates, gross payments, deduction amounts)</li>
            <li>CIS return preparation (monthly returns with all required information)</li>
            <li>CIS return filing (monthly filing by 19th deadline)</li>
            <li>CIS deduction payment (payment to HMRC by 19th deadline)</li>
            <li>Compliance support and ongoing management (monitoring, HMRC liaison, advice)</li>
          </ul>
        </div>

        <p>
          We handle all aspects of CIS payroll tax submissions, from registration to ongoing compliance. The key is understanding your CIS obligations, making correct deductions, filing returns on time, paying deductions on time, and staying compliant.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of subcontractors</strong> — Small businesses with few subcontractors vs. larger businesses with many subcontractors affects time for return preparation.
          </li>
          <li>
            <strong>Service scope</strong> — Return preparation only vs. comprehensive support (registration, deductions, returns, payments, compliance) affects scope and cost.
          </li>
          <li>
            <strong>Return frequency</strong> — Monthly returns (standard) vs. occasional returns affects frequency of work.
          </li>
          <li>
            <strong>Current compliance status</strong> — Businesses already compliant needing ongoing support vs. businesses needing full setup affects time.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>CIS return preparation (small business, 1-5 subcontractors, monthly):</strong> £50–£150 per month (includes monthly return preparation and filing for small number of subcontractors)
          </li>
          <li>
            <strong>Standard CIS support (small-medium business, 5-20 subcontractors, comprehensive service):</strong> £100–£300 per month (includes subcontractor management, deduction calculation, return preparation, filing, payment processing, basic compliance support)
          </li>
          <li>
            <strong>Comprehensive CIS support (medium-large business, 20+ subcontractors, full service):</strong> £250–£600+ per month (includes comprehensive subcontractor management, deduction calculation, return preparation, filing, payment processing, compliance monitoring, HMRC liaison, ongoing support)
          </li>
          <li>
            <strong>CIS registration (one-time setup):</strong> £100–£300 (includes contractor or subcontractor registration, verification, setup)
          </li>
        </ul>

        <p>
          <strong>Why CIS support costs what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Time and complexity</strong> — Subcontractor management, deduction calculation, return preparation, filing, and compliance require time and attention to detail, especially for businesses with many subcontractors.
          </li>
          <li>
            <strong>Monthly frequency</strong> — CIS returns are filed monthly, meaning regular ongoing work rather than one-off tasks.
          </li>
          <li>
            <strong>Value provided</strong> — CIS support helps you avoid HMRC penalties (fixed penalties for late returns, penalties for incorrect returns), incorrect deductions, and compliance issues, providing substantial value.
          </li>
          <li>
            <strong>Risk management</strong> — Ensuring correct deductions and timely filing protects you from penalties and HMRC issues.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> CIS return preparation typically takes 2–3 days per month before the filing deadline. CIS registration typically takes 1–2 weeks. Ongoing support is provided monthly. Return filing is completed by the 19th of each month.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced monthly for ongoing support, or as a one-time fee for registration. Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes CIS return preparation, filing, deduction calculation, payment processing, and basic compliance support. CIS registration (if needed) is typically charged separately or included in initial setup.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For construction contractors in Kent, whether you&apos;re a contractor in Medway needing CIS return preparation, a construction business in Maidstone struggling with deductions, or a company in Canterbury wanting ongoing CIS support, CIS payroll tax submissions help you comply with HMRC requirements and avoid penalties. Many Kent construction contractors find CIS confusing or struggle to understand their obligations, leading to penalties and compliance issues. We help local contractors register for CIS correctly, make correct deductions, file returns on time, pay deductions on time, manage subcontractors effectively, and stay compliant with HMRC. CIS applies to most construction work, including building, alterations, repairs, demolition, installation, and site preparation, but excludes certain activities like architecture, surveying, and scaffolding hire.
        </p>

        <p>
          <strong>Common Kent CIS scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Construction contractors</strong> — Contractors paying subcontractors for construction work, needing CIS registration, deduction calculation, and monthly return filing.
          </li>
          <li>
            <strong>Subcontractors</strong> — Subcontractors wanting to register for CIS to receive payments with lower deduction rates (20% instead of 30%).
          </li>
          <li>
            <strong>Businesses with many subcontractors</strong> — Construction businesses with many subcontractors needing comprehensive CIS management and return preparation.
          </li>
          <li>
            <strong>Businesses with compliance issues</strong> — Construction businesses with CIS compliance problems (late returns, incorrect deductions) needing fixes and ongoing support.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent construction contractors are dealing with. CIS registration, deduction calculation, return preparation, filing, payment processing, compliance support—we&apos;ll handle your CIS payroll tax submissions that keep you compliant.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="CIS Payroll Tax Submissions - Frequently Asked Questions"
          subtitle="Common questions about CIS returns, deductions, and compliance"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/construction-bookkeeping-cis-compliant/">Construction Bookkeeping - CIS Compliant</Link> — Construction bookkeeping services
            </li>
            <li>
              <Link href="/services/core/payroll-processing/">Payroll Processing</Link> — Monthly payroll processing services
            </li>
            <li>
              <Link href="/services/tax/cis-contractor-subcontractor-tax-filing/">CIS Contractor Subcontractor Tax Filing</Link> — CIS tax filing services
            </li>
          </ul>
          <p>
            <Link href="/services/core/" className="font-semibold">
              View all core services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with CIS payroll tax submissions?" description="Don't risk penalties or compliance issues. We'll help you register for CIS, make correct deductions, file returns on time, and stay compliant with HMRC requirements. No penalties, no errors—just proper CIS compliance that keeps you on the right side of HMRC." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with CIS payroll tax submissions?" />
    </>
  );
}

