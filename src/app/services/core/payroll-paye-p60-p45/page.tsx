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
  title: 'PAYE, P60 & P45 Forms Services in Kent | File Easy Accountancy',
  description: 'Expert PAYE, P60 and P45 forms services in Kent. P60 form, P45 form, PAYE forms, PAYE P60, PAYE P45. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/payroll-paye-p60-p45/',
  },
  openGraph: {
    title: 'PAYE, P60 & P45 Forms Services in Kent | File Easy Accountancy',
    description: 'Expert PAYE, P60 and P45 forms services in Kent. P60 form, P45 form, PAYE forms, PAYE P60, PAYE P45.',
    url: 'https://fileeasyaccountancy.co.uk/services/payroll-paye-p60-p45/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is a P60 form?',
    answer: 'A P60 form is issued by employers to employees after the end of each tax year (by 31 May), showing total pay, tax deducted, and National Insurance contributions for the tax year. P60 forms must be issued to all employees who were employed on the last day of the tax year (5 April). Employees use P60 forms as proof of income and tax paid for the tax year, which they may need for tax returns, benefits claims, mortgage applications, or loan applications. P60 forms are an official record of income and tax for the tax year. It\'s worth getting professional help to ensure P60 forms are prepared correctly and issued on time.',
  },
  {
    question: 'What is a P45 form?',
    answer: 'A P45 form is issued by employers to employees when they leave their job, containing information about pay and tax deducted in the current tax year. P45 forms must be issued on or before the employee\'s last day of employment. Employees give P45 forms to their new employer so the new employer can use the correct tax code and ensure the right amount of tax is deducted from the employee\'s pay. P45 forms help ensure employees are taxed correctly when starting a new job. It\'s worth getting professional help to ensure P45 forms are prepared correctly and issued on time.',
  },
  {
    question: 'When do I need a P60?',
    answer: 'You need a P60 if you\'re an employee who was employed on the last day of the tax year (5 April). Your employer must issue you a P60 by 31 May after the tax year end. You may need your P60 for: completing self-assessment tax returns, claiming benefits or tax credits, applying for mortgages or loans (as proof of income), and other purposes where proof of income and tax is required. If you lose your P60, you can request a duplicate from your employer, who must provide it within 40 days of your request. It\'s worth keeping your P60 safe as you may need it for various purposes.',
  },
  {
    question: 'When do I need a P45?',
    answer: 'You need a P45 when you leave your job—your employer must issue you a P45 on or before your last day of employment. You should give your P45 to your new employer when you start your new job so they can use the correct tax code and ensure the right amount of tax is deducted from your pay. If you don\'t have a P45 when starting a new job, your new employer will need to complete a Starter Checklist (formerly P46) to determine your tax code. It\'s worth ensuring you receive your P45 when leaving a job and keeping it safe for your new employer.',
  },
  {
    question: 'How do I get a P60 form?',
    answer: 'You get a P60 form from your employer—your employer must issue you a P60 by 31 May after the end of each tax year if you were employed on the last day of the tax year (5 April). Most employers issue P60 forms automatically, either electronically or in paper format. If you haven\'t received your P60 by 31 May, you should contact your employer to request it. If you lose your P60, you can request a duplicate from your employer, who must provide it within 40 days of your request. It\'s worth contacting your employer promptly if you haven\'t received your P60 or need a duplicate.',
  },
  {
    question: 'How do I get a P45 form?',
    answer: 'You get a P45 form from your employer when you leave your job—your employer must issue you a P45 on or before your last day of employment. Most employers issue P45 forms automatically when you leave, either electronically or in paper format. If you haven\'t received your P45 when leaving a job, you should contact your former employer to request it. If you\'ve lost your P45, you may need to contact your former employer to request a copy, though P45 forms are typically only valid for the current tax year. It\'s worth ensuring you receive your P45 when leaving a job so you can give it to your new employer.',
  },
  {
    question: 'What information is on a P60?',
    answer: 'A P60 form shows: your name and address, your National Insurance number, your employer\'s name and PAYE reference, the tax year (e.g., 2024/25), total pay for the tax year, total tax deducted for the tax year, total National Insurance contributions for the tax year, and your tax code used during the tax year. P60 forms provide a summary of your income and tax for the tax year, which you may need for tax returns, benefits claims, or other purposes. It\'s worth keeping your P60 safe as it\'s an official record of your income and tax.',
  },
  {
    question: 'What information is on a P45?',
    answer: 'A P45 form shows: your name and address, your National Insurance number, your former employer\'s name and PAYE reference, the date you left your job, total pay from the start of the tax year to your leaving date, total tax deducted from the start of the tax year to your leaving date, total National Insurance contributions from the start of the tax year to your leaving date, and your tax code. P45 forms help your new employer use the correct tax code and ensure the right amount of tax is deducted from your pay when starting a new job. It\'s worth giving your P45 to your new employer promptly when starting a new job.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Core', href: '/services/core' },
  { label: 'PAYE, P60 & P45 Forms', href: '/services/core/payroll-paye-p60-p45' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function PAYEP60P45FormsPage() {
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
            serviceType: 'PAYE, P60 & P45 Forms',
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
            description: 'Expert PAYE, P60 and P45 forms services in Kent. P60 form, P45 form, PAYE forms, PAYE P60, PAYE P45.',
            name: 'PAYE, P60 & P45 Forms',
            url: 'https://fileeasyaccountancy.co.uk/services/core/payroll-paye-p60-p45/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'PAYE Form Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'P60 Form Preparation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'P45 Form Preparation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Form Verification' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Duplicate Form Requests' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="PAYE, P60 & P45 Forms"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re an employer, you&apos;ve gotta issue P60 and P45 forms to your employees—it&apos;s not optional, and getting it wrong can cause problems. P60 forms are issued by employers to employees after the end of each tax year (by 31 May), showing total pay, tax deducted, and National Insurance contributions for the tax year (
          <a href="https://www.gov.uk/p60-form-payslip" target="_blank" rel="noopener noreferrer">
            gov.uk P60 form
          </a>
          ). P45 forms are issued by employers to employees when they leave their job, containing information about pay and tax deducted in the current tax year, which the employee gives to their new employer. Employees use P60 forms as proof of income and tax paid for the tax year, which they may need for tax returns, benefits claims, mortgage applications, or loan applications.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>P60 forms must be issued by 31 May after the tax year end</strong> — To all employees who were employed on the last day of the tax year (5 April)
            </li>
            <li>
              <strong>P45 forms must be issued when employees leave</strong> — On or before the employee&apos;s last day of employment
            </li>
            <li>
              <strong>P60 forms show total pay, tax deducted, and NI contributions</strong> — For the tax year, which employees need for tax returns and other purposes
            </li>
            <li>
              <strong>P45 forms help new employers use the correct tax code</strong> — Ensuring the right amount of tax is deducted from the employee&apos;s pay
            </li>
          </ul>
        </div>

        <p>
          The problem is most employers find P60 and P45 forms confusing or don&apos;t realise their obligations. They miss the P60 deadline (31 May), issue P45 forms incorrectly or late, don&apos;t understand what information needs to be on the forms, or struggle with the payroll software to generate forms. That causes problems—HMRC penalties for late or incorrect forms, employee complaints about missing or incorrect forms, issues for employees needing forms for tax returns or other purposes, and stress from trying to get it right.
        </p>

        <p>
          We handle PAYE, P60 and P45 forms for employers across Kent: P60 form preparation (preparing P60 forms for all employees by the 31 May deadline, ensuring all information is correct), P45 form preparation (preparing P45 forms when employees leave, ensuring forms are issued on or before the last day of employment), payroll system support (helping you set up payroll systems to generate P60 and P45 forms correctly), form verification (verifying that forms contain correct information—pay, tax, NI contributions, tax codes), duplicate form requests (handling employee requests for duplicate P60 forms within 40 days), and compliance advice (providing advice on PAYE form obligations, deadlines, and requirements). Whether you&apos;re an employer in Medway needing P60 forms prepared, a business in Maidstone struggling with P45 forms, or a company in Canterbury wanting payroll form support, we&apos;ll handle your PAYE, P60 and P45 forms that work. No missed deadlines, no errors—just proper PAYE forms that keep you compliant.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet P60 and P45 deadlines</strong> — We&apos;ll ensure P60 forms are issued by 31 May and P45 forms are issued when employees leave, avoiding HMRC penalties. Meeting deadlines avoids penalties.
          </li>
          <li>
            <strong>Issue correct forms</strong> — We&apos;ll ensure P60 and P45 forms contain correct information (pay, tax, NI contributions, tax codes), preventing errors and employee complaints. Correct forms prevent problems.
          </li>
          <li>
            <strong>Support employees</strong> — We&apos;ll help employees understand their P60 and P45 forms and what they need them for (tax returns, benefits claims, mortgage applications). Supporting employees improves satisfaction.
          </li>
          <li>
            <strong>Stay compliant with HMRC</strong> — We&apos;ll help you stay compliant with PAYE form obligations, deadlines, and requirements, avoiding penalties and issues. Compliance reduces risk.
          </li>
          <li>
            <strong>Handle duplicate requests</strong> — We&apos;ll handle employee requests for duplicate P60 forms within the required 40-day timeframe. Handling requests promptly prevents complaints.
          </li>
          <li>
            <strong>Save time and reduce stress</strong> — Having professional support for PAYE forms saves time and reduces stress from form preparation and compliance concerns.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for PAYE, P60 and P45 forms:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: how many employees you have, what payroll system you use, whether you&apos;ve had any issues with P60 or P45 forms, what your current process is for issuing forms, and what help you need. Understanding your situation helps us tailor support.
          </li>
          <li>
            <strong>Payroll system review</strong> — We review your payroll system:
            <ul>
              <li>
                <strong>System capability</strong> — We check that your payroll system can generate P60 and P45 forms correctly (most payroll software can, but some may need configuration).
              </li>
              <li>
                <strong>Data accuracy</strong> — We verify that payroll data is accurate (pay, tax, NI contributions, tax codes) so forms generated are correct.
              </li>
              <li>
                <strong>Process review</strong> — We review your current process for issuing forms (when forms are generated, how they&apos;re issued, how duplicates are handled).
              </li>
              <li>
                <strong>System setup</strong> — We help set up or configure payroll systems to generate forms correctly if needed.
              </li>
            </ul>
            Payroll system review ensures forms can be generated correctly.
          </li>
          <li>
            <strong>P60 form preparation (annual)</strong> — We prepare P60 forms for all employees:
            <ul>
              <li>
                <strong>Employee identification</strong> — We identify all employees who were employed on the last day of the tax year (5 April) and need P60 forms.
              </li>
              <li>
                <strong>Data collection</strong> — We collect payroll data for the tax year (total pay, tax deducted, NI contributions, tax codes) for each employee.
              </li>
              <li>
                <strong>Form generation</strong> — We generate P60 forms using payroll software or prepare them manually if needed, ensuring all required information is included.
              </li>
              <li>
                <strong>Form verification</strong> — We verify that forms contain correct information (pay, tax, NI contributions match payroll records).
              </li>
              <li>
                <strong>Deadline management</strong> — We ensure forms are ready for issue by 31 May deadline.
              </li>
            </ul>
            P60 form preparation ensures forms are issued on time and correctly.
          </li>
          <li>
            <strong>P45 form preparation (as needed)</strong> — We prepare P45 forms when employees leave:
            <ul>
              <li>
                <strong>Leaver identification</strong> — We identify employees who are leaving and need P45 forms.
              </li>
              <li>
                <strong>Data collection</strong> — We collect current tax year payroll data (pay to date, tax deducted, NI contributions, tax code) for the leaver.
              </li>
              <li>
                <strong>Form generation</strong> — We generate P45 forms using payroll software or prepare them manually if needed, ensuring all required information is included.
              </li>
              <li>
                <strong>Form verification</strong> — We verify that forms contain correct information (pay, tax, NI contributions, tax code match payroll records).
              </li>
              <li>
                <strong>Issue timing</strong> — We ensure forms are issued on or before the employee&apos;s last day of employment.
              </li>
            </ul>
            P45 form preparation ensures forms are issued correctly and on time.
          </li>
          <li>
            <strong>Form verification and quality check</strong> — We verify forms are correct:
            <ul>
              <li>
                <strong>Information accuracy</strong> — We check that all information on forms is accurate (pay, tax, NI contributions, tax codes, employee details).
              </li>
              <li>
                <strong>Format compliance</strong> — We check that forms meet HMRC format requirements (layout, required fields, signatures if needed).
              </li>
              <li>
                <strong>Completeness</strong> — We check that all required information is included (no missing fields, no incomplete sections).
              </li>
              <li>
                <strong>Error identification</strong> — We identify any errors or issues that need correction before issue.
              </li>
            </ul>
            Form verification ensures quality and compliance.
          </li>
          <li>
            <strong>Form issue and distribution</strong> — We help you issue forms:
            <ul>
              <li>
                <strong>P60 distribution</strong> — We help distribute P60 forms to employees by 31 May deadline (electronically or in paper format, depending on employee preferences and system capabilities).
              </li>
              <li>
                <strong>P45 distribution</strong> — We help distribute P45 forms to employees on or before their last day of employment (electronically or in paper format).
              </li>
              <li>
                <strong>Delivery confirmation</strong> — We help confirm forms are delivered to employees (email confirmation, signed receipt, etc.).
              </li>
              <li>
                <strong>Record keeping</strong> — We help maintain records of forms issued (who received forms, when, in what format).
              </li>
            </ul>
            Form issue ensures employees receive forms on time.
          </li>
          <li>
            <strong>Duplicate form requests</strong> — We handle duplicate form requests:
            <ul>
              <li>
                <strong>Request processing</strong> — We process employee requests for duplicate P60 forms (employees may lose forms or need copies).
              </li>
              <li>
                <strong>Form generation</strong> — We generate duplicate forms within 40 days of request (as required by HMRC).
              </li>
              <li>
                <strong>Issue</strong> — We issue duplicate forms to employees promptly.
              </li>
              <li>
                <strong>Record keeping</strong> — We maintain records of duplicate requests and forms issued.
              </li>
            </ul>
            Duplicate form requests ensure employees can get replacements when needed.
          </li>
          <li>
            <strong>Compliance advice and ongoing support</strong> — We provide ongoing support:
            <ul>
              <li>
                <strong>Obligation guidance</strong> — We provide guidance on PAYE form obligations, deadlines, and requirements (when forms must be issued, what information must be included, format requirements).
              </li>
              <li>
                <strong>Deadline reminders</strong> — We provide reminders for P60 deadline (31 May) and help ensure P45 forms are issued on time.
              </li>
              <li>
                <strong>Query support</strong> — We provide support for employee queries about forms (what information means, how to use forms, what forms are needed for).
              </li>
              <li>
                <strong>HMRC liaison</strong> — We help liaise with HMRC if there are any form-related issues or queries.
              </li>
            </ul>
            Ongoing support ensures continued compliance.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What PAYE, P60 and P45 forms includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>P60 form preparation (annual, by 31 May deadline)</li>
            <li>P45 form preparation (when employees leave)</li>
            <li>Payroll system review and support</li>
            <li>Form verification and quality check</li>
            <li>Form issue and distribution</li>
            <li>Duplicate form request handling</li>
            <li>Compliance advice and ongoing support</li>
          </ul>
        </div>

        <p>
          We handle all aspects of PAYE, P60 and P45 forms, from preparation to issue. The key is ensuring forms are issued on time, contain correct information, and meet HMRC requirements.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of employees</strong> — Small businesses with few employees vs. larger businesses with many employees affects time for form preparation.
          </li>
          <li>
            <strong>Form frequency</strong> — P60 forms (annual) vs. P45 forms (as needed) affects frequency of work.
          </li>
          <li>
            <strong>Payroll system complexity</strong> — Simple payroll systems vs. complex systems with multiple pay elements, benefits, or special circumstances affects time.
          </li>
          <li>
            <strong>Service scope</strong> — Form preparation only vs. comprehensive support (preparation, issue, duplicates, compliance advice) affects scope and cost.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Basic P60 form preparation (small business, 1-10 employees, annual):</strong> £50–£150 (includes P60 form preparation for all employees, basic verification)
          </li>
          <li>
            <strong>Standard P60 and P45 form support (small-medium business, form preparation, issue, basic support):</strong> £100–£300 per year + £20–£50 per P45 (includes annual P60 preparation, P45 forms as needed, basic verification and issue)
          </li>
          <li>
            <strong>Comprehensive PAYE form support (medium-large business, full service, ongoing support):</strong> £300–£800 per year + £30–£80 per P45 (includes annual P60 preparation, P45 forms, payroll system support, form verification, issue, duplicates, compliance advice, ongoing support)
          </li>
          <li>
            <strong>Payroll system setup for forms (one-time setup):</strong> £100–£300 (includes payroll system configuration to generate forms correctly)
          </li>
        </ul>

        <p>
          <strong>Why PAYE form support costs what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Time and attention</strong> — Form preparation, verification, and issue require time and attention to detail to ensure accuracy and compliance.
          </li>
          <li>
            <strong>Deadline management</strong> — Ensuring forms are issued by deadlines (P60 by 31 May, P45 on time) requires deadline management and planning.
          </li>
          <li>
            <strong>Value provided</strong> — PAYE form support helps you avoid HMRC penalties, employee complaints, and compliance issues, providing substantial value.
          </li>
          <li>
            <strong>Risk management</strong> — Ensuring correct and timely form issue protects you from penalties and employee issues.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> P60 form preparation typically takes 1–2 weeks before the 31 May deadline. P45 form preparation typically takes 1–2 days when employees leave. Payroll system setup typically takes 1–2 weeks. Ongoing support is provided as needed.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced annually for P60 form preparation (invoiced after forms are issued), and per P45 form (invoiced on completion). Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes form preparation, verification, basic issue support, and compliance advice. Payroll system setup (if needed) is typically charged separately.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For employers in Kent, whether you&apos;re a small business in Medway needing P60 forms prepared, a growing business in Maidstone struggling with P45 forms, or a company in Canterbury wanting comprehensive PAYE form support, PAYE, P60 and P45 forms support helps you meet your obligations and avoid penalties. Many Kent employers find PAYE forms confusing or struggle to meet deadlines, leading to penalties and employee complaints. We help local employers prepare and issue P60 and P45 forms correctly, meet deadlines, handle duplicate requests, and stay compliant with HMRC requirements. If an employee loses their P60, they can request a duplicate from their employer, who must provide it within 40 days of the request.
        </p>

        <p>
          <strong>Common Kent PAYE form scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Small businesses</strong> — Needing help with annual P60 form preparation and occasional P45 forms.
          </li>
          <li>
            <strong>Growing businesses</strong> — Needing support as employee numbers increase and form preparation becomes more complex.
          </li>
          <li>
            <strong>Businesses with high staff turnover</strong> — Needing frequent P45 form preparation and support.
          </li>
          <li>
            <strong>Businesses wanting compliance peace of mind</strong> — Wanting comprehensive support to ensure forms are always correct and on time.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent employers are dealing with. Form preparation, verification, issue, duplicates, compliance advice—we&apos;ll handle your PAYE, P60 and P45 forms that keep you compliant.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="PAYE, P60 & P45 Forms - Frequently Asked Questions"
          subtitle="Common questions about P60 forms, P45 forms, and PAYE form obligations"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/core/payroll-processing/">Payroll Processing</Link> — Monthly payroll processing services
            </li>
            <li>
              <Link href="/services/core/paye-rti-submissions/">PAYE & RTI Submissions</Link> — PAYE and RTI submission services
            </li>
            <li>
              <Link href="/services/core/cis-returns/">CIS Returns</Link> — Construction Industry Scheme returns
            </li>
          </ul>
          <p>
            <Link href="/services/core/" className="font-semibold">
              View all core services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with PAYE, P60 and P45 forms?" description="Don't risk missing deadlines or issuing incorrect forms. We'll help you prepare and issue P60 and P45 forms correctly, meet deadlines, and stay compliant with HMRC requirements. No missed deadlines, no errors—just proper PAYE forms that keep you compliant." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with PAYE, P60 and P45 forms?" />
    </>
  );
}

