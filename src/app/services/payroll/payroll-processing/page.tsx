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
  title: 'Payroll Processing Services in Kent | File Easy Accountancy',
  description: 'Expert payroll processing services in Kent. PAYE payroll services, outsourced payroll, payroll services for small business. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/payroll-processing/',
  },
  openGraph: {
    title: 'Payroll Processing Services in Kent | File Easy Accountancy',
    description: 'Expert payroll processing services in Kent. PAYE payroll services, outsourced payroll, payroll services for small business.',
    url: 'https://fileeasyaccountancy.co.uk/services/payroll-processing/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is payroll processing?',
    answer: 'Payroll processing is the task of calculating employee pay, deducting Income Tax and National Insurance, and reporting everything to HMRC in real-time. It includes calculating gross pay, deducting tax and NI using correct tax codes and thresholds, generating payslips, submitting RTI reports to HMRC, and paying Employer\'s National Insurance. All UK employers with employees must operate PAYE (Pay As You Earn) and process payroll correctly to stay compliant with HMRC.',
  },
  {
    question: 'How much does payroll processing cost?',
    answer: 'Payroll processing costs vary depending on number of employees, pay frequency, and complexity. Typically, small businesses (1-5 employees) pay £15–£30 per employee per month for basic monthly payroll. Standard businesses (6-20 employees) pay £10–£25 per employee per month. Large businesses (21+ employees) may pay £8–£20 per employee per month with volume discounts. Weekly payroll usually costs more than monthly due to more pay runs. One-off setup fees are usually £100–£300. Year-end reporting is usually included in monthly fees.',
  },
  {
    question: 'Do I need to do payroll for employees?',
    answer: 'Yes, if you have employees earning above the Lower Earnings Limit, you must operate PAYE and process payroll. This means calculating employee pay, deducting Income Tax and National Insurance, providing payslips, and submitting RTI reports to HMRC on or before each payday. You also need to pay Employer\'s National Insurance on employee earnings. If you don\'t process payroll correctly, you can face penalties and HMRC enquiries. Many employers outsource payroll to avoid the complexity and ensure compliance.',
  },
  {
    question: 'How do I process payroll in UK?',
    answer: 'To process payroll in the UK, you need to: register with HMRC for PAYE, set up employee records with tax codes and NI numbers, calculate gross pay for each employee, deduct Income Tax using correct tax codes, deduct National Insurance using NI thresholds, deduct pension contributions if applicable, calculate net pay (gross minus deductions), generate payslips for employees, submit Full Payment Submission (FPS) to HMRC on or before payday, and pay HMRC for tax, NI, and Employer\'s NI by 22nd of each month. Most employers use payroll software or outsource to payroll providers to handle this correctly.',
  },
  {
    question: 'What is PAYE payroll?',
    answer: 'PAYE (Pay As You Earn) is the UK system where employers deduct Income Tax and National Insurance from employee wages at the point of payment, before paying employees. Employers must operate PAYE for all employees earning above the Lower Earnings Limit. The system requires employers to calculate tax and NI deductions using tax codes and thresholds provided by HMRC, then report everything to HMRC in real-time through RTI (Real Time Information). PAYE ensures employees pay tax and NI gradually throughout the year rather than in a lump sum.',
  },
  {
    question: 'How do small businesses handle payroll?',
    answer: 'Small businesses can handle payroll in different ways: doing it themselves using payroll software (like Xero, QuickBooks, or Sage), outsourcing to payroll service providers (who handle all calculations and reporting), using online payroll platforms (which automate calculations and RTI reporting), or hiring an accountant to process payroll. Most small businesses find outsourcing payroll easiest because it\'s complex, time-consuming, and mistakes can be costly (penalties, incorrect pay, HMRC enquiries). Outsourcing ensures compliance and accuracy without the hassle.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Payroll', href: '/services/payroll' },
  { label: 'Payroll Processing', href: '/services/payroll/payroll-processing' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function PayrollProcessingPage() {
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
            serviceType: 'Payroll Processing',
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
            description: 'Expert payroll processing services in Kent. PAYE payroll services, outsourced payroll, payroll services for small business.',
            name: 'Payroll Processing',
            url: 'https://fileeasyaccountancy.co.uk/services/payroll/payroll-processing/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Payroll Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Small Business Payroll Processing' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Standard Business Payroll Processing' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Large Business Payroll Processing' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Payroll Processing"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you have employees, you need to process payroll—which means calculating their pay, deducting tax and National Insurance, and reporting everything to HMRC in real-time. All UK employers must operate PAYE (Pay As You Earn) for employees earning above the Lower Earnings Limit, deducting Income Tax and National Insurance before paying employees (
          <a href="https://www.gov.uk/paye" target="_blank" rel="noopener noreferrer">
            gov.uk PAYE
          </a>
          ). Employers must submit Real Time Information (RTI) to HMRC on or before each payday, reporting employee payments, deductions, and National Insurance contributions. Employers are responsible for calculating and paying Employer&apos;s National Insurance (Class 1 secondary contributions) on employee earnings above the secondary threshold.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>All UK employers must operate PAYE</strong> — For employees earning above the Lower Earnings Limit, deducting Income Tax and National Insurance before payment
            </li>
            <li>
              <strong>RTI reporting is mandatory</strong> — Employers must submit Real Time Information to HMRC on or before each payday
            </li>
            <li>
              <strong>Employers pay Employer&apos;s National Insurance</strong> — Class 1 secondary contributions on employee earnings above the secondary threshold
            </li>
            <li>
              <strong>Payslips must be provided</strong> — Employers must provide employees with payslips showing gross pay, deductions, and net pay within strict deadlines
            </li>
          </ul>
        </div>

        <p>
          The problem is most employers find payroll processing complex and time-consuming. They struggle with calculating tax and NI correctly, miss RTI reporting deadlines, or make mistakes that cause HMRC penalties. That causes problems—late filing penalties, incorrect employee pay, HMRC enquiries, and the stress of managing compliance manually.
        </p>

        <p>
          We handle payroll processing for employers who want accurate, compliant payroll without the hassle: payroll calculation (calculating employee gross pay, deducting Income Tax and National Insurance using correct tax codes and thresholds), RTI reporting (submitting Full Payment Submissions to HMRC on or before each payday), payslip generation (creating payslips showing gross pay, deductions, and net pay for each employee), employer contributions (calculating and paying Employer&apos;s National Insurance on employee earnings), statutory pay processing (processing statutory sick pay, maternity pay, and adoption pay through payroll), and year-end reporting (producing P60 forms and final reports for HMRC). Whether you&apos;re in Medway with a small team, in Maidstone with multiple employees, or in Canterbury needing reliable payroll processing, we&apos;ll handle your payroll that works. No penalties, no mistakes—just accurate, compliant payroll processing that keeps you right with HMRC.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet PAYE obligations</strong> — Operate PAYE correctly, deducting tax and NI and reporting to HMRC in real-time. Proper PAYE compliance means no penalties or HMRC enquiries.
          </li>
          <li>
            <strong>Submit RTI reports on time</strong> — Submit Full Payment Submissions to HMRC on or before each payday. Timely RTI reporting keeps you compliant and avoids late filing penalties.
          </li>
          <li>
            <strong>Calculate payroll accurately</strong> — Calculate employee pay, tax, and NI deductions correctly using correct tax codes and thresholds. Accurate calculations mean employees get paid correctly.
          </li>
          <li>
            <strong>Provide payslips promptly</strong> — Generate and provide payslips to employees on or before payday. Timely payslips keep employees informed and meet legal requirements.
          </li>
          <li>
            <strong>Process statutory pay correctly</strong> — Handle statutory sick pay, maternity pay, and adoption pay through payroll correctly. Proper statutory pay processing ensures employees receive their entitlements.
          </li>
          <li>
            <strong>Complete year-end reporting</strong> — Produce P60 forms and final reports for HMRC at year-end. Complete year-end reporting closes the tax year correctly.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for payroll processing:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your payroll: how many employees you have, how often you pay them (monthly, weekly, fortnightly), what types of pay you process (salary, overtime, bonuses, commissions), whether you have statutory pay situations, what payroll software you currently use (if any), and what you want to achieve.
          </li>
          <li>
            <strong>Payroll setup</strong> — We set up your payroll:
            <ul>
              <li>
                <strong>Employee records</strong> — Set up employee records with names, addresses, dates of birth, National Insurance numbers, tax codes, and employment details
              </li>
              <li>
                <strong>PAYE scheme registration</strong> — Ensure you&apos;re registered with HMRC for PAYE and have your PAYE reference number
              </li>
              <li>
                <strong>Payroll software setup</strong> — Set up payroll software (or use our cloud payroll system) with employee data and HMRC settings
              </li>
              <li>
                <strong>Tax code verification</strong> — Verify tax codes for all employees with HMRC (using starter checklists or P45 forms)
              </li>
              <li>
                <strong>NI category assignment</strong> — Assign correct National Insurance categories to employees based on their employment status
              </li>
            </ul>
            Payroll setup ensures your payroll system is configured correctly from the start.
          </li>
          <li>
            <strong>Payroll calculation</strong> — We calculate payroll for each pay period:
            <ul>
              <li>
                <strong>Gross pay calculation</strong> — Calculate gross pay for each employee (salary, overtime, bonuses, commissions, etc.)
              </li>
              <li>
                <strong>Tax calculation</strong> — Calculate Income Tax deductions using employee tax codes and HMRC tax tables
              </li>
              <li>
                <strong>NI calculation</strong> — Calculate employee National Insurance contributions using NI categories and thresholds
              </li>
              <li>
                <strong>Pension deductions</strong> — Deduct pension contributions if employees are enrolled in pension schemes (auto-enrolment or otherwise)
              </li>
              <li>
                <strong>Other deductions</strong> — Process other deductions (student loan repayments, attachment of earnings orders, voluntary deductions)
              </li>
              <li>
                <strong>Net pay calculation</strong> — Calculate net pay (gross pay minus all deductions)
              </li>
            </ul>
            Payroll calculation ensures employees are paid accurately with correct deductions.
          </li>
          <li>
            <strong>Payslip generation</strong> — We generate payslips for each employee:
            <ul>
              <li>
                <strong>Payslip content</strong> — Include gross pay, deductions (tax, NI, pension, other), net pay, payment method, hours worked (if applicable)
              </li>
              <li>
                <strong>Payslip delivery</strong> — Provide payslips to employees on or before payday (via email, portal, or printed)
              </li>
              <li>
                <strong>Payslip compliance</strong> — Ensure payslips meet legal requirements and contain all required information
              </li>
            </ul>
            Payslip generation keeps employees informed and meets legal obligations.
          </li>
          <li>
            <strong>RTI reporting</strong> — We submit RTI reports to HMRC:
            <ul>
              <li>
                <strong>Full Payment Submission (FPS)</strong> — Submit FPS to HMRC on or before each payday with all employee pay and deductions
              </li>
              <li>
                <strong>Employer Payment Summary (EPS)</strong> — Submit EPS if needed (for statutory pay recoveries, nil payments, or corrections)
              </li>
              <li>
                <strong>RTI compliance</strong> — Ensure RTI reports are accurate and submitted on time to avoid late filing penalties
              </li>
              <li>
                <strong>RTI corrections</strong> — Correct any errors in RTI reports promptly to avoid compliance issues
              </li>
            </ul>
            RTI reporting keeps HMRC informed in real-time and maintains compliance.
          </li>
          <li>
            <strong>Employer contributions</strong> — We calculate and pay Employer&apos;s National Insurance:
            <ul>
              <li>
                <strong>Employer NI calculation</strong> — Calculate Employer&apos;s National Insurance on employee earnings above the secondary threshold
              </li>
              <li>
                <strong>Payment to HMRC</strong> — Pay Employer&apos;s National Insurance to HMRC along with employee tax and NI (usually by 22nd of each month)
              </li>
              <li>
                <strong>Payment reconciliation</strong> — Reconcile payments to HMRC with payroll calculations to ensure accuracy
              </li>
            </ul>
            Employer contributions ensure you meet your obligations as an employer.
          </li>
          <li>
            <strong>Statutory pay processing</strong> — We process statutory pay when needed:
            <ul>
              <li>
                <strong>Statutory Sick Pay (SSP)</strong> — Process SSP for employees who are sick and eligible
              </li>
              <li>
                <strong>Statutory Maternity Pay (SMP)</strong> — Process SMP for employees on maternity leave
              </li>
              <li>
                <strong>Statutory Adoption Pay (SAP)</strong> — Process SAP for employees on adoption leave
              </li>
              <li>
                <strong>Statutory pay recovery</strong> — Recover statutory pay from HMRC where applicable (through EPS)
              </li>
            </ul>
            Statutory pay processing ensures employees receive their statutory entitlements correctly.
          </li>
          <li>
            <strong>Year-end reporting</strong> — We complete year-end reporting:
            <ul>
              <li>
                <strong>P60 generation</strong> — Generate P60 forms for all employees showing their pay and deductions for the tax year
              </li>
              <li>
                <strong>Final FPS</strong> — Submit final FPS to HMRC to close the tax year
              </li>
              <li>
                <strong>Year-end reconciliation</strong> — Reconcile year-end totals with HMRC records to ensure accuracy
              </li>
            </ul>
            Year-end reporting closes the tax year correctly and provides employees with annual summaries.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What payroll processing includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Payroll setup (employee records, PAYE registration, software setup, tax code verification, NI category assignment)</li>
            <li>Payroll calculation (gross pay, tax, NI, pension, other deductions, net pay)</li>
            <li>Payslip generation (payslip content, delivery, compliance)</li>
            <li>RTI reporting (FPS, EPS, compliance, corrections)</li>
            <li>Employer contributions (Employer NI calculation, payment to HMRC, reconciliation)</li>
            <li>Statutory pay processing (SSP, SMP, SAP, recovery)</li>
            <li>Year-end reporting (P60 generation, final FPS, reconciliation)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>PAYE and RTI rules:</h3>
          <h4 style={{ marginTop: '1rem' }}>PAYE obligations:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>PAYE registration required</strong> — All employers with employees must register for PAYE with HMRC
            </li>
            <li>
              <strong>Tax and NI deductions</strong> — Must deduct Income Tax and National Insurance from employee pay before payment
            </li>
            <li>
              <strong>Tax codes</strong> — Use correct tax codes provided by HMRC for each employee
            </li>
            <li>
              <strong>NI thresholds</strong> — Apply correct National Insurance thresholds based on employee age and employment status
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>RTI reporting:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>FPS deadline</strong> — Must submit Full Payment Submission on or before each payday (no flexibility)
            </li>
            <li>
              <strong>EPS submission</strong> — Submit Employer Payment Summary by 19th of month after payment if claiming reductions or nil payments
            </li>
            <li>
              <strong>Payment deadline</strong> — Pay HMRC by 22nd of each month (or 19th by post) for tax and NI collected
            </li>
            <li>
              <strong>Late filing penalties</strong> — HMRC charges penalties for late or missing RTI reports unless valid reason provided
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Employer&apos;s National Insurance:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Secondary threshold</strong> — Currently £242 per week per employee
            </li>
            <li>
              <strong>Employer NI rate</strong> — 13.8% on earnings above secondary threshold (rate may vary)
            </li>
            <li>
              <strong>Payment with employee deductions</strong> — Employer NI paid to HMRC along with employee tax and NI
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Statutory pay:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Statutory Sick Pay (SSP)</strong> — £94.25 per week for up to 28 weeks (for eligible employees)
            </li>
            <li>
              <strong>Statutory Maternity Pay (SMP)</strong> — 90% of average weekly earnings for first 6 weeks, then lower rate for remaining 33 weeks
            </li>
            <li>
              <strong>Statutory Adoption Pay (SAP)</strong> — Similar to SMP for employees on adoption leave
            </li>
            <li>
              <strong>Recovery</strong> — Employers can recover percentages of statutory pay from HMRC depending on annual NI liability
            </li>
          </ul>
        </div>

        <p>
          We handle all aspects of payroll processing. The key is accurate calculation, timely RTI reporting, proper payslip provision, and correct employer contributions, so you meet PAYE obligations and keep employees paid correctly.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of employees</strong> — More employees mean more calculations and reporting, so costs increase
          </li>
          <li>
            <strong>Pay frequency</strong> — Weekly payroll costs more than monthly (more pay runs per year)
          </li>
          <li>
            <strong>Pay complexity</strong> — Simple salary-only payroll costs less than complex payroll (overtime, bonuses, commissions, multiple pay types)
          </li>
          <li>
            <strong>Statutory pay situations</strong> — If you have frequent statutory pay situations, this adds to complexity and cost
          </li>
          <li>
            <strong>Additional services</strong> — If you need additional services (pension administration, HR support), this affects pricing
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Small business payroll (1-5 employees, monthly):</strong> £15–£30 per employee per month for basic monthly payroll processing
          </li>
          <li>
            <strong>Standard business payroll (6-20 employees, monthly):</strong> £10–£25 per employee per month for standard monthly payroll with RTI reporting
          </li>
          <li>
            <strong>Large business payroll (21+ employees, monthly):</strong> £8–£20 per employee per month for large business payroll (volume discounts may apply)
          </li>
          <li>
            <strong>Weekly payroll:</strong> Usually costs more than monthly (approximately 4.33× monthly rate) due to more pay runs
          </li>
          <li>
            <strong>One-off payroll setup:</strong> £100–£300 for initial payroll setup and employee record creation
          </li>
          <li>
            <strong>Year-end reporting:</strong> Usually included in monthly fee, but may be charged separately (£50–£150) if not included
          </li>
        </ul>

        <p>
          <strong>Why payroll processing costs what it does:</strong>
        </p>
        <ul>
          <li>Payroll calculation requires accurate application of tax codes, NI thresholds, and deductions for each employee</li>
          <li>RTI reporting requires timely submission to HMRC with no margin for error (late filing penalties apply)</li>
          <li>Payslip generation requires creating compliant payslips for each employee every pay period</li>
          <li>Employer contributions require calculating and paying Employer&apos;s National Insurance correctly</li>
          <li>Statutory pay processing requires understanding eligibility and calculating entitlements correctly</li>
          <li>Year-end reporting requires producing P60s and final reports accurately</li>
        </ul>

        <p>
          <strong>Timeline:</strong> Payroll processing happens on or before each payday. We typically process payroll 2-3 days before payday to allow time for RTI submission, payslip generation, and payment processing. Year-end reporting happens after the tax year ends (after 5 April), with P60s typically provided by 31 May.
        </p>

        <p>
          <strong>Payment:</strong> Payroll processing fees are usually charged monthly (alongside each payroll run) or annually (discounted rate). One-off setup fees are charged upfront. We&apos;ll discuss payment options when we understand your needs.
        </p>

        <p>
          <strong>No hidden fees.</strong> Payroll processing price includes calculation, RTI reporting, payslip generation, employer contributions, statutory pay processing, and year-end reporting. Additional services (pension administration, HR support) are separate if needed.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with employers across Kent who need reliable payroll processing: small businesses in Medway with a few employees, growing businesses in Maidstone with expanding teams, and established businesses in Canterbury needing compliant payroll.
        </p>

        <p>
          Kent employers face the same PAYE obligations as everyone else—operating PAYE correctly, submitting RTI reports on time, and calculating payroll accurately. The difference is when you get proper help with payroll processing, you calculate payroll accurately, submit RTI reports on time, and meet all PAYE obligations without stress. That&apos;s what helps Kent employers avoid penalties, keep employees paid correctly, and stay compliant with HMRC.
        </p>

        <p>
          <strong>Common Kent payroll scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Small businesses</strong> — Businesses with 1-10 employees needing reliable monthly payroll
          </li>
          <li>
            <strong>Growing businesses</strong> — Businesses expanding their teams and needing scalable payroll solutions
          </li>
          <li>
            <strong>Multi-site businesses</strong> — Businesses with employees across different Kent locations
          </li>
          <li>
            <strong>Seasonal businesses</strong> — Businesses with fluctuating employee numbers needing flexible payroll
          </li>
          <li>
            <strong>Startups</strong> — New businesses needing payroll setup and ongoing processing
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent businesses are small to medium-sized with manageable employee numbers</li>
          <li>Proper payroll processing helps Kent employers stay compliant and avoid HMRC penalties</li>
          <li>Reliable payroll processing helps Kent employers focus on growing their businesses</li>
          <li>Local payroll expertise helps Kent employers navigate PAYE and RTI requirements</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent employers are dealing with. PAYE obligations, RTI reporting, payroll calculations, statutory pay—we&apos;ll handle your payroll processing that keeps you compliant and your employees paid correctly.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Payroll Processing - Frequently Asked Questions"
          subtitle="Common questions about payroll processing and PAYE obligations"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/payroll/paye-rti-submissions/">PAYE & RTI Submissions</Link> — Detailed RTI reporting and PAYE compliance
            </li>
            <li>
              <Link href="/services/payroll/pension-auto-enrollment/">Pension Auto-Enrollment</Link> — Auto-enrollment pension processing through payroll
            </li>
            <li>
              <Link href="/services/bookkeeping/bookkeeping-setup-making-tax-digital/">Bookkeeping Setup</Link> — Bookkeeping that integrates with payroll
            </li>
          </ul>
          <p>
            <Link href="/services/payroll/" className="font-semibold">
              View all payroll services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with payroll processing?" description="Don't let payroll complexity stress you out. We'll handle all calculations, RTI reporting, and payslip generation so you can focus on running your business. No penalties, no mistakes—just accurate, compliant payroll processing that keeps you right with HMRC." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with payroll processing?" />
    </>
  );
}

