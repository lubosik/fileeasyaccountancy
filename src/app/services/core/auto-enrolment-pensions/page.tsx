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
  title: 'Auto-Enrolment Pensions Services in Kent | File Easy Accountancy',
  description: 'Expert auto-enrolment pensions services in Kent. Pension auto enrolment, auto enrolment pensions, automatic enrolment, workplace pensions. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/auto-enrolment-pensions/',
  },
  openGraph: {
    title: 'Auto-Enrolment Pensions Services in Kent | File Easy Accountancy',
    description: 'Expert auto-enrolment pensions services in Kent. Pension auto enrolment, auto enrolment pensions, automatic enrolment, workplace pensions.',
    url: 'https://fileeasyaccountancy.co.uk/services/auto-enrolment-pensions/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is pension auto-enrolment?',
    answer: 'Pension auto-enrolment (automatic enrolment) requires employers to automatically enrol eligible employees into a workplace pension scheme and make contributions, with employees also making contributions unless they opt out. Auto-enrolment applies to all employers with at least one employee, and employers must comply with duties including assessing employees, enrolling eligible workers, making contributions, providing information to employees, and completing re-enrolment every 3 years. Minimum contributions are currently 8% of qualifying earnings (with employers paying at least 3% and employees paying at least 5%, or employers can pay the full 8%). It\'s worth getting professional help to understand your auto-enrolment duties and ensure compliance.',
  },
  {
    question: 'Who needs to set up auto-enrolment?',
    answer: 'All employers with at least one employee need to set up auto-enrolment. Your staging date (when duties begin) depends on when your business was set up or when you first employ someone—most employers are now subject to immediate duties if they employ someone for the first time. You need to set up auto-enrolment before your staging date, including choosing a qualifying pension scheme, setting up processes for assessing and enrolling employees, and establishing contribution arrangements. It\'s worth getting professional help to determine your staging date and set up auto-enrolment correctly.',
  },
  {
    question: 'How does auto-enrolment work?',
    answer: 'Auto-enrolment works as follows: employers must assess employees to determine eligibility (aged 22 to State Pension age, earning above £10,000 per year), automatically enrol eligible employees into a qualifying workplace pension scheme, make minimum contributions (8% of qualifying earnings, with employer paying at least 3%), provide required information to employees (about auto-enrolment, contributions, how to opt out), and complete re-enrolment every 3 years (re-assessing employees and re-enrolling those who previously opted out). Employees can opt out within one month of being enrolled, and if they do, contributions will be refunded. It\'s worth getting professional help to ensure auto-enrolment is set up and managed correctly.',
  },
  {
    question: 'What are the auto-enrolment duties?',
    answer: 'Auto-enrolment duties include: assessing employees to determine eligibility for auto-enrolment (aged 22 to State Pension age, earning above £10,000 per year), automatically enrolling eligible employees into a qualifying workplace pension scheme, making minimum contributions (8% of qualifying earnings, with employer paying at least 3%), providing required information to employees about auto-enrolment, contributions, and how to opt out, handling opt-outs (employees can opt out within one month, with contributions refunded), completing re-enrolment every 3 years (re-assessing employees and re-enrolling eligible workers who previously opted out), and maintaining records and completing declarations to The Pensions Regulator. It\'s worth getting professional help to ensure all duties are met correctly.',
  },
  {
    question: 'How much do I need to pay into auto-enrolment?',
    answer: 'Minimum contributions for auto-enrolment are currently 8% of qualifying earnings (earnings between £6,240 and £50,270 per year in 2024/25). Employers must pay at least 3% of qualifying earnings, and employees must pay at least 5% (or employers can pay the full 8% if they choose). For example, if an employee earns £30,000 per year, qualifying earnings are £30,000 (within the £6,240-£50,270 range), minimum total contributions are 8% of £30,000 = £2,400 per year (£200 per month), with employer paying at least 3% (£900 per year, £75 per month) and employee paying at least 5% (£1,500 per year, £125 per month). Employers can choose to pay more than the minimum if they want. It\'s worth getting professional help to calculate contributions correctly.',
  },
  {
    question: 'What happens if I don\'t comply with auto-enrolment?',
    answer: 'If you don\'t comply with auto-enrolment duties, you can face fines from The Pensions Regulator: fixed penalties (£400) for failure to comply with duties, escalating penalties (£50-£10,000 per day) for continued non-compliance or serious breaches, and potential prosecution for serious or deliberate non-compliance. The severity of penalties depends on the nature and extent of non-compliance. In addition to fines, non-compliance can result in employee complaints, reputational damage, and issues with pension scheme providers. It\'s worth getting professional help to ensure compliance and avoid fines.',
  },
  {
    question: 'Can employees opt out of auto-enrolment?',
    answer: 'Yes, employees can opt out of auto-enrolment within one month of being enrolled. If an employee opts out, their contributions will be refunded. However, employers must still re-enrol eligible employees every 3 years even if they previously opted out (unless they opt out again within one month). Employees aged 16-21 or earning £6,240-£10,000 per year can also opt in to auto-enrolment if they want. It\'s worth getting professional help to handle opt-outs correctly and ensure re-enrolment is completed every 3 years.',
  },
  {
    question: 'How do I set up auto-enrolment?',
    answer: 'To set up auto-enrolment, you need to: determine your staging date (when duties begin), choose a qualifying pension scheme (e.g., NEST or other qualifying schemes that meet The Pensions Regulator\'s standards), set up processes for assessing employees (to determine eligibility), set up processes for enrolling employees (automatically enrolling eligible workers), set up contribution arrangements (calculating and making minimum contributions of 8% of qualifying earnings), integrate with your payroll system (so contributions are calculated and deducted automatically), provide information to employees (about auto-enrolment, contributions, how to opt out), and register with The Pensions Regulator and complete required declarations. It\'s worth getting professional help to set up auto-enrolment correctly and ensure compliance.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Core', href: '/services/core' },
  { label: 'Auto-Enrolment Pensions', href: '/services/core/auto-enrolment-pensions' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function AutoEnrolmentPensionsPage() {
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
            serviceType: 'Auto-Enrolment Pensions',
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
            description: 'Expert auto-enrolment pensions services in Kent. Pension auto enrolment, auto enrolment pensions, automatic enrolment, workplace pensions.',
            name: 'Auto-Enrolment Pensions',
            url: 'https://fileeasyaccountancy.co.uk/services/core/auto-enrolment-pensions/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Auto-Enrolment Pension Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto-Enrolment Setup' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Employee Assessment' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pension Enrolment' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contribution Management' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Auto-Enrolment Pensions"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re an employer, you&apos;ve gotta comply with auto-enrolment pension duties—it&apos;s not optional, and failing to comply can mean fines and penalties. Automatic enrolment (auto-enrolment) requires employers to automatically enrol eligible employees into a workplace pension scheme and make contributions, with employees also making contributions unless they opt out (
          <a href="https://www.gov.uk/workplace-pensions/automatic-enrolment" target="_blank" rel="noopener noreferrer">
            gov.uk automatic enrolment
          </a>
          ). Employers must comply with auto-enrolment duties, including assessing employees, enrolling eligible employees, making contributions, providing information to employees, and completing re-enrolment every 3 years. Minimum contributions for auto-enrolment are currently 8% of qualifying earnings (with employers paying at least 3% and employees paying at least 5%, or employers can pay the full 8% if they choose).
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Auto-enrolment requires employers to enrol eligible employees</strong> — Into a workplace pension scheme and make contributions automatically
            </li>
            <li>
              <strong>Minimum contributions are currently 8% of qualifying earnings</strong> — With employers paying at least 3% and employees paying at least 5% (or employers can pay the full 8%)
            </li>
            <li>
              <strong>Employers must assess employees, enrol eligible workers, and make contributions</strong> — Plus provide information to employees and complete re-enrolment every 3 years
            </li>
            <li>
              <strong>Non-compliance can result in fines</strong> — From The Pensions Regulator, ranging from £400 fixed penalties to escalating penalties up to £10,000 per day
            </li>
          </ul>
        </div>

        <p>
          The problem is most employers find auto-enrolment confusing or don&apos;t realise their duties. They don&apos;t know when their staging date is (when duties begin), don&apos;t understand how to assess employees, struggle to choose a pension scheme, miss enrolment deadlines, or don&apos;t understand contribution requirements. That causes problems—fines from The Pensions Regulator (£400 fixed penalties, escalating penalties up to £10,000 per day), employee complaints about missing pensions or incorrect contributions, issues with pension scheme providers, and stress from trying to get it right.
        </p>

        <p>
          We handle auto-enrolment pensions for employers across Kent: auto-enrolment setup (helping you understand your staging date, choose a qualifying pension scheme, set up auto-enrolment processes, and prepare for duties), employee assessment (assessing employees to determine who&apos;s eligible for auto-enrolment, who can opt in, and who can be excluded), pension enrolment (enrolling eligible employees into your chosen pension scheme, providing required information to employees, and handling opt-outs), contribution management (calculating and making minimum contributions (8% of qualifying earnings, with employer paying at least 3%), ensuring contributions are paid on time, and handling contribution changes), re-enrolment (completing re-enrolment every 3 years, re-assessing employees, and re-enrolling eligible employees who previously opted out), compliance support (helping you stay compliant with auto-enrolment duties, complete required declarations to The Pensions Regulator, and handle any compliance issues), and ongoing management (providing ongoing support for auto-enrolment, including new employee assessments, contribution management, and scheme administration). Whether you&apos;re an employer in Medway needing auto-enrolment setup, a business in Maidstone struggling with employee assessments, or a company in Canterbury wanting ongoing auto-enrolment support, we&apos;ll handle your auto-enrolment pensions that work. No fines, no confusion—just proper auto-enrolment compliance that keeps you on the right side of The Pensions Regulator.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Understand your auto-enrolment duties</strong> — We&apos;ll help you understand when your staging date is, what your duties are, and how to comply. Understanding duties helps you prepare.
          </li>
          <li>
            <strong>Choose the right pension scheme</strong> — We&apos;ll help you choose a qualifying pension scheme (e.g., NEST or other qualifying schemes) that meets your needs. Choosing the right scheme makes compliance easier.
          </li>
          <li>
            <strong>Assess and enrol employees correctly</strong> — We&apos;ll help you assess employees to determine eligibility, enrol eligible employees, and handle opt-outs. Correct assessment and enrolment prevents issues.
          </li>
          <li>
            <strong>Calculate and make contributions</strong> — We&apos;ll help you calculate minimum contributions (8% of qualifying earnings) and ensure contributions are paid on time. Correct contributions keep you compliant.
          </li>
          <li>
            <strong>Complete re-enrolment every 3 years</strong> — We&apos;ll help you complete re-enrolment every 3 years, re-assess employees, and re-enrol eligible workers. Re-enrolment maintains compliance.
          </li>
          <li>
            <strong>Stay compliant and avoid fines</strong> — We&apos;ll help you stay compliant with auto-enrolment duties, complete required declarations, and avoid fines from The Pensions Regulator. Compliance prevents penalties.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for auto-enrolment pensions:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: how many employees you have, whether you&apos;ve set up auto-enrolment before, what your current pension arrangements are (if any), when your staging date is (or if you need to find out), what help you need, and what concerns you have. Understanding your situation helps us tailor support.
          </li>
          <li>
            <strong>Staging date and duties assessment</strong> — We assess your auto-enrolment duties:
            <ul>
              <li>
                <strong>Staging date determination</strong> — We determine when your staging date is (when auto-enrolment duties begin), which depends on when your business was set up or when you first employ someone.
              </li>
              <li>
                <strong>Duties review</strong> — We review your auto-enrolment duties (assessing employees, enrolling eligible workers, making contributions, providing information, re-enrolment every 3 years).
              </li>
              <li>
                <strong>Current compliance status</strong> — We assess your current compliance status (whether you&apos;ve set up auto-enrolment, whether you&apos;re complying with duties, whether there are any issues).
              </li>
              <li>
                <strong>Gap analysis</strong> — We identify any gaps or issues that need to be addressed.
              </li>
            </ul>
            Staging date and duties assessment determines what you need to do.
          </li>
          <li>
            <strong>Pension scheme selection</strong> — We help you choose a qualifying pension scheme:
            <ul>
              <li>
                <strong>Scheme options</strong> — We explain pension scheme options (NEST, other qualifying schemes, master trusts, etc.) and help you choose the right one for your business.
              </li>
              <li>
                <strong>Scheme comparison</strong> — We compare different schemes (costs, features, administration, compatibility with payroll systems) to help you decide.
              </li>
              <li>
                <strong>Scheme setup</strong> — We help you set up your chosen pension scheme and establish processes for enrolling employees and making contributions.
              </li>
              <li>
                <strong>Scheme registration</strong> — We help you register with The Pensions Regulator and complete required declarations.
              </li>
            </ul>
            Pension scheme selection ensures you have a qualifying scheme.
          </li>
          <li>
            <strong>Employee assessment and enrolment</strong> — We help you assess and enrol employees:
            <ul>
              <li>
                <strong>Employee assessment</strong> — We assess employees to determine who&apos;s eligible for auto-enrolment (aged 22 to State Pension age, earning above £10,000 per year in 2024/25), who can opt in (aged 16-21 or earning £6,240-£10,000 per year), and who can be excluded (under 16, over State Pension age, or earning below £6,240 per year).
              </li>
              <li>
                <strong>Eligible employee identification</strong> — We identify all eligible employees who must be enrolled automatically.
              </li>
              <li>
                <strong>Enrolment process</strong> — We help you enrol eligible employees into your chosen pension scheme, providing required information to employees (what auto-enrolment means, how much they&apos;ll contribute, how to opt out if they want).
              </li>
              <li>
                <strong>Opt-out handling</strong> — We help you handle opt-outs (employees can opt out within one month of being enrolled, and contributions will be refunded if they do).
              </li>
            </ul>
            Employee assessment and enrolment ensures eligible employees are enrolled correctly.
          </li>
          <li>
            <strong>Contribution calculation and payment</strong> — We help you calculate and make contributions:
            <ul>
              <li>
                <strong>Contribution calculation</strong> — We calculate minimum contributions (8% of qualifying earnings, with employer paying at least 3% and employee paying at least 5%, or employer can pay the full 8%). Qualifying earnings are earnings between £6,240 and £50,270 per year (2024/25 thresholds).
              </li>
              <li>
                <strong>Payroll integration</strong> — We help integrate contributions with your payroll system so contributions are calculated and deducted automatically.
              </li>
              <li>
                <strong>Payment processing</strong> — We help ensure contributions are paid to your pension scheme provider on time (typically monthly or with each pay period).
              </li>
              <li>
                <strong>Contribution tracking</strong> — We help track contributions to ensure they&apos;re being paid correctly and on time.
              </li>
            </ul>
            Contribution calculation and payment ensures contributions are correct and timely.
          </li>
          <li>
            <strong>Ongoing compliance and management</strong> — We provide ongoing support:
            <ul>
              <li>
                <strong>New employee assessments</strong> — We help assess new employees when they join to determine if they need to be enrolled.
              </li>
              <li>
                <strong>Contribution management</strong> — We help manage contributions, including handling changes (pay rises, bonuses, etc.) and ensuring contributions remain correct.
              </li>
              <li>
                <strong>Employee communication</strong> — We help provide required information to employees about auto-enrolment, contributions, and their pension scheme.
              </li>
              <li>
                <strong>Record keeping</strong> — We help maintain records of employee assessments, enrolments, contributions, and opt-outs (as required by The Pensions Regulator).
              </li>
            </ul>
            Ongoing compliance and management maintains compliance.
          </li>
          <li>
            <strong>Re-enrolment (every 3 years)</strong> — We help you complete re-enrolment:
            <ul>
              <li>
                <strong>Re-enrolment date</strong> — We help identify when re-enrolment is due (every 3 years from your staging date or last re-enrolment date).
              </li>
              <li>
                <strong>Employee re-assessment</strong> — We help re-assess employees, including those who previously opted out, to determine if they&apos;re now eligible.
              </li>
              <li>
                <strong>Re-enrolment process</strong> — We help re-enrol eligible employees who previously opted out (unless they opt out again within one month).
              </li>
              <li>
                <strong>Re-enrolment declaration</strong> — We help complete the re-enrolment declaration to The Pensions Regulator.
              </li>
            </ul>
            Re-enrolment maintains compliance every 3 years.
          </li>
          <li>
            <strong>Compliance support and declarations</strong> — We provide compliance support:
            <ul>
              <li>
                <strong>Regulator declarations</strong> — We help complete required declarations to The Pensions Regulator (staging declaration, re-enrolment declaration, etc.).
              </li>
              <li>
                <strong>Compliance monitoring</strong> — We help monitor compliance with auto-enrolment duties and identify any issues.
              </li>
              <li>
                <strong>Issue resolution</strong> — We help resolve any compliance issues or queries from The Pensions Regulator.
              </li>
              <li>
                <strong>Penalty avoidance</strong> — We help ensure compliance to avoid fines (fixed penalties £400, escalating penalties up to £10,000 per day).
              </li>
            </ul>
            Compliance support prevents fines and issues.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What auto-enrolment pensions includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Auto-enrolment setup (staging date, pension scheme selection, processes)</li>
            <li>Employee assessment and enrolment (eligibility determination, enrolment, opt-outs)</li>
            <li>Contribution calculation and payment (minimum contributions, payroll integration, payment processing)</li>
            <li>Ongoing compliance and management (new employees, contributions, communication, record keeping)</li>
            <li>Re-enrolment (every 3 years, re-assessment, re-enrolment)</li>
            <li>Compliance support (declarations, monitoring, issue resolution)</li>
          </ul>
        </div>

        <p>
          We handle all aspects of auto-enrolment pensions, from initial setup to ongoing compliance. The key is understanding your duties, choosing the right scheme, assessing and enrolling employees correctly, making contributions on time, and staying compliant.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of employees</strong> — Small businesses with few employees vs. larger businesses with many employees affects time for assessment and enrolment.
          </li>
          <li>
            <strong>Service scope</strong> — Setup only vs. comprehensive support (setup, ongoing management, re-enrolment, compliance) affects scope and cost.
          </li>
          <li>
            <strong>Pension scheme complexity</strong> — Simple schemes vs. complex schemes with multiple features or special requirements affects time.
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
            <strong>Auto-enrolment setup (small business, 1-10 employees, one-time setup):</strong> £300–£600 (includes staging date assessment, pension scheme selection, employee assessment, initial enrolment, contribution setup, basic compliance advice)
          </li>
          <li>
            <strong>Standard auto-enrolment support (small-medium business, setup + ongoing management):</strong> £500–£1,200 per year (includes setup, employee assessments, enrolment, contribution management, ongoing compliance, re-enrolment every 3 years)
          </li>
          <li>
            <strong>Comprehensive auto-enrolment support (medium-large business, full service, ongoing support):</strong> £1,000–£2,500+ per year (includes comprehensive setup, ongoing management, payroll integration, employee communication, compliance monitoring, re-enrolment, regulatory support)
          </li>
          <li>
            <strong>Payroll integration for auto-enrolment (one-time setup):</strong> £200–£500 (includes payroll system integration for contribution calculation and deduction)
          </li>
        </ul>

        <p>
          <strong>Why auto-enrolment support costs what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding auto-enrolment duties, pension schemes, contribution requirements, and compliance obligations requires specialist knowledge.
          </li>
          <li>
            <strong>Time and complexity</strong> — Employee assessment, enrolment, contribution management, re-enrolment, and compliance require time and attention to detail.
          </li>
          <li>
            <strong>Value provided</strong> — Auto-enrolment support helps you avoid fines (fixed penalties £400, escalating penalties up to £10,000 per day), employee complaints, and compliance issues, providing substantial value.
          </li>
          <li>
            <strong>Risk management</strong> — Ensuring compliance with auto-enrolment duties protects you from fines and regulatory issues.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Auto-enrolment setup typically takes 2–4 weeks. Employee assessment and enrolment typically takes 1–2 weeks. Ongoing management is provided monthly or as needed. Re-enrolment (every 3 years) typically takes 2–3 weeks.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced monthly or annually for ongoing support, or as a one-time fee for setup. Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes auto-enrolment setup, employee assessment, enrolment, contribution management, ongoing compliance support, and re-enrolment. Pension scheme provider fees (if applicable) are typically separate and paid directly to the provider.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For employers in Kent, whether you&apos;re a small business in Medway needing auto-enrolment setup, a growing business in Maidstone struggling with employee assessments, or a company in Canterbury wanting ongoing auto-enrolment support, auto-enrolment pensions help you comply with your duties and avoid fines. Many Kent employers find auto-enrolment confusing or struggle to understand their duties, leading to fines and compliance issues. We help local employers understand their duties, choose the right pension scheme, assess and enrol employees correctly, make contributions on time, complete re-enrolment every 3 years, and stay compliant with The Pensions Regulator. Employers who fail to comply with auto-enrolment duties can face fines from The Pensions Regulator, ranging from fixed penalties (£400) to escalating penalties (£50-£10,000 per day) depending on the severity of non-compliance.
        </p>

        <p>
          <strong>Common Kent auto-enrolment scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>New employers</strong> — Employers setting up auto-enrolment for the first time, needing help with staging date, scheme selection, and setup.
          </li>
          <li>
            <strong>Small businesses</strong> — Small businesses with few employees needing help with assessment, enrolment, and contribution management.
          </li>
          <li>
            <strong>Growing businesses</strong> — Growing businesses with increasing employee numbers needing ongoing support for new employee assessments and enrolment.
          </li>
          <li>
            <strong>Businesses with compliance issues</strong> — Businesses with auto-enrolment compliance problems needing fixes and ongoing support.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent employers are dealing with. Auto-enrolment setup, employee assessment, enrolment, contribution management, re-enrolment, compliance support—we&apos;ll handle your auto-enrolment pensions that keep you compliant.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Auto-Enrolment Pensions - Frequently Asked Questions"
          subtitle="Common questions about pension auto-enrolment, duties, and compliance"
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
              <Link href="/services/core/payroll-paye-p60-p45/">PAYE, P60 & P45 Forms</Link> — PAYE forms services
            </li>
            <li>
              <Link href="/services/core/paye-rti-submissions/">PAYE & RTI Submissions</Link> — PAYE and RTI submission services
            </li>
          </ul>
          <p>
            <Link href="/services/core/" className="font-semibold">
              View all core services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with auto-enrolment pensions?" description="Don't risk fines or compliance issues. We'll help you understand your duties, choose the right pension scheme, assess and enrol employees correctly, and stay compliant with The Pensions Regulator. No fines, no confusion—just proper auto-enrolment compliance that keeps you on the right side of The Pensions Regulator." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with auto-enrolment pensions?" />
    </>
  );
}

