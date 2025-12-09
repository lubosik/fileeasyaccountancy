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
  title: 'Late or Backdated Tax Returns Services in Kent | File Easy Accountancy',
  description: 'Expert help with late tax returns and backdated tax returns in Kent. Late filing penalties, Self Assessment late filing, overdue tax returns. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/late-or-backdated-tax-returns/',
  },
  openGraph: {
    title: 'Late or Backdated Tax Returns Services in Kent | File Easy Accountancy',
    description: 'Expert help with late tax returns and backdated tax returns in Kent. Late filing penalties, Self Assessment late filing, overdue tax returns.',
    url: 'https://fileeasyaccountancy.co.uk/services/late-or-backdated-tax-returns/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Can I file a late tax return?',
    answer: 'Yes, definitely. You can file a late tax return online via HMRC\'s Government Gateway up to 3 years after the original deadline. However, penalties still apply—the longer you leave it, the more penalties you\'ll pay. It\'s worth filing as soon as possible to stop penalties from escalating. Even if you\'re years late, it\'s better to file now than leave it any longer.',
  },
  {
    question: 'What happens if I file my tax return late?',
    answer: 'If you file late, HMRC charges automatic penalties: £100 for filing 1 day to 3 months late, additional £10 per day for up to 90 days if you\'re 3+ months late, and 5% penalties at 6 months and 12 months late (if tax is due). Late payment penalties also apply if you pay tax late (5% at 30 days, 6 months, and 12 months). Interest is charged on unpaid tax from the payment deadline. The key is penalties apply even if no tax is due, so it\'s worth filing on time if possible.',
  },
  {
    question: 'How much is the penalty for late tax returns?',
    answer: 'For Self Assessment, late filing penalties are: £100 for filing 1 day to 3 months late, additional £10 per day for up to 90 days if you\'re 3+ months late (maximum £900), 5% of tax due or £300 at 6 months late (whichever is greater), and another 5% or £300 at 12 months late. Late payment penalties are separate: 5% of tax outstanding at 30 days, 6 months, and 12 months. Plus interest is charged at 8% annually on unpaid tax. Penalties can add up quickly, so it\'s worth filing and paying as soon as possible.',
  },
  {
    question: 'Can I backdate a tax return?',
    answer: 'Yes, you can file returns for previous tax years you missed. There\'s no time limit for filing backdated returns (though you can only claim refunds going back 4 years). However, penalties still apply for late filing, and the longer you leave it, the more penalties you\'ll pay. If you\'ve missed several years, it\'s worth filing them all to get compliant and stop penalties from accruing further. We can help you file multiple years of backdated returns if needed.',
  },
  {
    question: 'What is the deadline for filing tax returns?',
    answer: 'For Self Assessment, the deadline is 31 January following the tax year end (for online returns) or 31 October (for paper returns). Tax payment is also due by 31 January. For Corporation Tax, the filing deadline is 12 months after your accounting period end, and payment deadline is 9 months and 1 day after period end. Missing these deadlines triggers automatic penalties, so it\'s worth filing on time if possible.',
  },
  {
    question: 'Can I appeal late filing penalties?',
    answer: 'Yes, you can appeal penalties if you have a reasonable excuse. Reasonable excuses include serious illness (yours or close family), bereavement, postal delays outside your control, fire/flood/theft destroying records, HMRC delays or errors, or computer failures at the deadline. You need to provide evidence (medical certificates, death certificates, etc.) and appeal within 30 days of the penalty notice (or as soon as possible). Successful appeals mean penalties are cancelled. We can help you prepare and submit appeals if you have a reasonable excuse.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Late or Backdated Tax Returns', href: '/services/tax/late-or-backdated-tax-returns' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function LateOrBackdatedTaxReturnsPage() {
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
            serviceType: 'Late or Backdated Tax Returns',
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
            description: 'Expert help with late tax returns and backdated tax returns in Kent. Late filing penalties, Self Assessment late filing, overdue tax returns.',
            name: 'Late or Backdated Tax Returns',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/late-or-backdated-tax-returns/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Preparation Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Single Late Tax Return Filing' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multiple Backdated Tax Returns' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penalty Appeal Service' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Late or Backdated Tax Returns"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;ve missed the deadline for filing your tax return, you&apos;re not alone. Loads of people file late—over 1.1 million UK taxpayers missed the 31 January 2025 deadline for the 2023/24 tax year. Late filing penalty for Self Assessment: £100 for filing 1 day to 3 months late, additional penalties at 6 months and 12 months (
          <a href="https://www.gov.uk/self-assessment-penalties" target="_blank" rel="noopener noreferrer">
            gov.uk Self Assessment penalties
          </a>
          ). If you file your tax return more than 3 months late, HMRC may charge an additional £10 per day (up to 90 days) for daily penalties. Late payment interest is charged on any tax due from the payment deadline, currently at 8% annually (base rate plus 4%).
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Late filing penalties apply even if no tax is due</strong> — The £100 penalty applies regardless of whether you owe tax or not
            </li>
            <li>
              <strong>Penalties escalate quickly</strong> — After 3 months late, daily penalties of £10 per day apply (up to £900), plus 5% penalties at 6 months and 12 months
            </li>
            <li>
              <strong>You can file a late tax return online</strong> — Up to 3 years after the original deadline, but penalties still apply
            </li>
            <li>
              <strong>HMRC may waive penalties if you have a reasonable excuse</strong> — Such as serious illness, bereavement, or postal delays (
              <a href="https://www.gov.uk/tax-appeals/penalty" target="_blank" rel="noopener noreferrer">
                gov.uk appeal a penalty
              </a>
              )
            </li>
          </ul>
        </div>

        <p>
          The problem is most people don&apos;t understand what happens when they file late. They think &quot;no tax due, no problem&quot; but that&apos;s not true—penalties apply regardless. They don&apos;t know about daily penalties, or they think it&apos;s too late to file. That causes problems—mounting penalties, interest charges, and stress from HMRC chasing you.
        </p>

        <p>
          We handle late or backdated tax returns for people who&apos;ve missed deadlines: late Self Assessment filing (filing returns that are past the deadline), penalty appeals (appealing penalties if you have a reasonable excuse), backdated tax returns (filing returns for previous tax years you missed), penalty mitigation (minimizing penalties by filing quickly and explaining circumstances), and time to pay arrangements (arranging payment plans if you can&apos;t pay the full tax due immediately). Whether you&apos;re in Medway and missed the 31 January deadline, in Maidstone with multiple years of missed returns, or in Canterbury needing to file backdated returns, we&apos;ll handle your late tax returns that get you compliant. No judgment, no stress—just practical help to sort things out.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Stop the clock on penalties</strong> — File your late return as soon as possible to minimize escalating penalties. The sooner you file, the less you pay.
          </li>
          <li>
            <strong>Appeal penalties if you have a reasonable excuse</strong> — If you had genuine reasons for filing late (serious illness, bereavement, etc.), we&apos;ll help you appeal penalties. Successful appeals mean penalties are cancelled.
          </li>
          <li>
            <strong>Catch up on missed returns</strong> — File backdated returns for previous tax years you missed. Getting up to date means you&apos;re compliant and penalties stop accruing.
          </li>
          <li>
            <strong>Arrange time to pay if needed</strong> — If you can&apos;t pay the full tax due immediately, we&apos;ll help arrange a payment plan with HMRC. Time to pay arrangements stop additional penalties (though interest continues).
          </li>
          <li>
            <strong>Understand what you owe</strong> — We&apos;ll calculate your tax liability, penalties, and interest so you know exactly what you&apos;re dealing with. Clear numbers help you plan and budget.
          </li>
          <li>
            <strong>Get compliant and stay compliant</strong> — Once your late returns are filed, we&apos;ll help you stay on track for future deadlines. Compliance means no more penalties.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for late or backdated tax returns:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your situation: which tax years you&apos;ve missed, why you filed late, whether you have a reasonable excuse, how much tax you think you owe, and what you want to achieve.
          </li>
          <li>
            <strong>Assessment of your situation</strong> — We assess what needs doing:
            <ul>
              <li>
                <strong>Identify missed returns</strong> — Work out which tax years need filing (Self Assessment, Corporation Tax, etc.)
              </li>
              <li>
                <strong>Calculate penalties</strong> — Work out what penalties have already been charged or will be charged
              </li>
              <li>
                <strong>Calculate tax liability</strong> — Estimate tax due based on your circumstances (may need to gather information first)
              </li>
              <li>
                <strong>Assess reasonable excuse</strong> — Review whether you have grounds to appeal penalties
              </li>
              <li>
                <strong>Review options</strong> — Consider filing immediately, appealing penalties, or arranging time to pay
              </li>
            </ul>
            Assessment helps us understand the full picture and plan the best approach.
          </li>
          <li>
            <strong>Gather information for late returns</strong> — We gather all the information needed:
            <ul>
              <li>
                <strong>Income records</strong> — Bank statements, invoices, payslips, P60s, dividend vouchers, etc.
              </li>
              <li>
                <strong>Expense records</strong> — Receipts, invoices, bank statements showing business expenses
              </li>
              <li>
                <strong>Previous returns</strong> — Any previous tax returns filed (if available)
              </li>
              <li>
                <strong>HMRC correspondence</strong> — Letters from HMRC about missing returns or penalties
              </li>
              <li>
                <strong>Supporting evidence</strong> — Medical certificates, death certificates, or other evidence for reasonable excuse appeals
              </li>
            </ul>
            Information gathering ensures we have everything needed to prepare accurate returns.
          </li>
          <li>
            <strong>Prepare and file late returns</strong> — We prepare your returns:
            <ul>
              <li>
                <strong>Return preparation</strong> — Complete Self Assessment returns or Corporation Tax returns for each missed year
              </li>
              <li>
                <strong>Tax calculations</strong> — Calculate tax due for each year (including any tax already paid)
              </li>
              <li>
                <strong>Penalty calculations</strong> — Calculate penalties due (HMRC will confirm, but we can estimate)
              </li>
              <li>
                <strong>Return filing</strong> — File returns online via HMRC&apos;s Government Gateway as quickly as possible
              </li>
              <li>
                <strong>Filing confirmation</strong> — Get confirmation from HMRC that returns have been received
              </li>
            </ul>
            Filing late returns stops penalties from escalating further and gets you compliant.
          </li>
          <li>
            <strong>Appeal penalties (if applicable)</strong> — If you have a reasonable excuse, we appeal:
            <ul>
              <li>
                <strong>Prepare appeal letter</strong> — Write a clear appeal explaining your reasonable excuse with supporting evidence
              </li>
              <li>
                <strong>Submit appeal</strong> — Submit appeal to HMRC within 30 days of penalty notice (or as soon as possible)
              </li>
              <li>
                <strong>Provide evidence</strong> — Include medical certificates, death certificates, or other evidence supporting your excuse
              </li>
              <li>
                <strong>Follow up</strong> — Monitor appeal progress and respond to any HMRC queries
              </li>
              <li>
                <strong>Appeal outcome</strong> — Get confirmation from HMRC whether penalties are cancelled or reduced
              </li>
            </ul>
            Penalty appeals can save you hundreds or thousands of pounds if successful.
          </li>
          <li>
            <strong>Arrange payment (if tax due)</strong> — If you owe tax, we help arrange payment:
            <ul>
              <li>
                <strong>Calculate total amount due</strong> — Work out total tax, penalties, and interest due
              </li>
              <li>
                <strong>Assess ability to pay</strong> — Review your financial situation to see if you can pay in full
              </li>
              <li>
                <strong>Time to pay arrangement</strong> — If needed, negotiate a payment plan with HMRC (monthly installments over 12-24 months)
              </li>
              <li>
                <strong>Payment confirmation</strong> — Confirm payment arrangements with HMRC and ensure payments are made on time
              </li>
              <li>
                <strong>Monitor payments</strong> — Keep track of payments to ensure the arrangement is kept up
              </li>
            </ul>
            Time to pay arrangements stop additional penalties (though interest continues until tax is paid in full).
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What late or backdated tax return filing includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Assessment of situation (missed returns, penalties, tax liability, reasonable excuse, options)</li>
            <li>Information gathering (income records, expense records, previous returns, HMRC correspondence, supporting evidence)</li>
            <li>Return preparation and filing (return preparation, tax calculations, penalty calculations, online filing, filing confirmation)</li>
            <li>Penalty appeals (appeal preparation, submission, evidence, follow-up, outcome)</li>
            <li>Payment arrangements (total calculation, ability to pay assessment, time to pay negotiation, payment confirmation, monitoring)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--warning">
          <h3 style={{ marginTop: 0 }}>Late filing penalties (Self Assessment):</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>1 day to 3 months late</strong> — £100 penalty
            </li>
            <li>
              <strong>3+ months late</strong> — Additional £10 per day for up to 90 days (maximum £900)
            </li>
            <li>
              <strong>6 months late</strong> — Additional penalty of 5% of tax due or £300, whichever is greater
            </li>
            <li>
              <strong>12 months late</strong> — Additional penalty of 5% of tax due or £300, whichever is greater
            </li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>Late payment penalties (Self Assessment):</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>30 days late</strong> — 5% of tax outstanding
            </li>
            <li>
              <strong>6 months late</strong> — Additional 5% of tax outstanding
            </li>
            <li>
              <strong>12 months late</strong> — Additional 5% of tax outstanding
            </li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>Late payment interest:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Currently 8% annually (base rate plus 4%) on unpaid tax from the payment deadline</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Reasonable excuses for late filing:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Serious illness (yours or close family member)</li>
            <li>Bereavement (death of close family member)</li>
            <li>Postal delays or lost documents (outside your control)</li>
            <li>Fire, flood, or theft (destroyed records)</li>
            <li>HMRC delays or errors (if HMRC caused the delay)</li>
            <li>Computer failures (at the deadline, outside your control)</li>
          </ul>
        </div>

        <p>
          We handle all aspects of late or backdated tax returns. The key is filing as quickly as possible, appealing penalties if you have a reasonable excuse, and arranging payment if needed, so you get compliant and minimize the cost.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of missed years</strong> — More missed years means more returns to prepare, so costs are higher
          </li>
          <li>
            <strong>Complexity of returns</strong> — Simple returns (single income source) cost less than complex returns (multiple income sources, expenses, reliefs)
          </li>
          <li>
            <strong>Penalty appeals</strong> — If you need penalty appeals prepared, this adds to the cost
          </li>
          <li>
            <strong>Time to pay arrangements</strong> — If you need help arranging payment plans, this may add to the cost
          </li>
          <li>
            <strong>Urgency</strong> — If you need returns filed urgently (to stop penalties escalating), this may affect pricing
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Single late Self Assessment return (simple):</strong> £200–£400 for filing one late return with straightforward income
          </li>
          <li>
            <strong>Single late Self Assessment return (complex):</strong> £300–£600 for filing one late return with multiple income sources, expenses, or reliefs
          </li>
          <li>
            <strong>Multiple late returns (2-3 years):</strong> £400–£800 for filing 2-3 years of missed returns
          </li>
          <li>
            <strong>Multiple late returns (4+ years):</strong> £600–£1,200+ for filing 4 or more years of missed returns
          </li>
          <li>
            <strong>Penalty appeal preparation:</strong> £150–£300 for preparing and submitting a penalty appeal with supporting evidence
          </li>
          <li>
            <strong>Time to pay arrangement:</strong> £100–£200 for negotiating and setting up a payment plan with HMRC
          </li>
        </ul>

        <p>
          <strong>Why late tax return filing costs what it does:</strong>
        </p>
        <ul>
          <li>Return preparation requires time to gather information, prepare returns, and calculate tax and penalties</li>
          <li>Penalty appeals require careful preparation of appeal letters with supporting evidence</li>
          <li>Time to pay arrangements require negotiation with HMRC and ongoing monitoring</li>
          <li>Urgent work may require prioritization over other work</li>
          <li>Professional expertise helps minimize penalties and ensure accurate filing</li>
        </ul>

        <p>
          <strong>Timeline:</strong> For urgent late returns (to stop penalties escalating), we aim to file within 1-2 weeks from when we receive all your information. For multiple years of backdated returns, this may take 3-4 weeks depending on complexity. Penalty appeals can take 4-8 weeks for HMRC to respond, though we&apos;ll submit them as quickly as possible.
        </p>

        <p>
          <strong>Payment:</strong> If tax is due, payment deadlines still apply—tax should be paid by the original deadline (31 January for Self Assessment). However, if you can&apos;t pay immediately, time to pay arrangements can spread payments over 12-24 months. We can help you understand payment options and negotiate arrangements with HMRC if needed.
        </p>

        <p>
          <strong>No hidden fees.</strong> Late return filing price includes assessment, information gathering, return preparation, filing, and initial penalty estimates. Penalty appeals and time to pay arrangements are separate services if you need them.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with people across Kent who&apos;ve missed tax return deadlines: people in Medway who missed the 31 January deadline, people in Maidstone with multiple years of missed returns, and people in Canterbury needing to file backdated returns.
        </p>

        <p>
          Kent taxpayers face the same late filing penalties as everyone else—£100 penalties, daily penalties, and percentage penalties that can add up quickly. The difference is when you get proper help with late tax returns, you file quickly to stop penalties escalating, appeal penalties if you have a reasonable excuse, and arrange payment if needed. That&apos;s what helps Kent taxpayers get compliant and minimize the cost.
        </p>

        <p>
          <strong>Common Kent late filing scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Missed 31 January deadline</strong> — Self-employed people or property investors who missed the Self Assessment deadline
          </li>
          <li>
            <strong>Multiple missed years</strong> — People who haven&apos;t filed for several years and need to catch up
          </li>
          <li>
            <strong>Backdated returns</strong> — People who need to file returns for previous tax years they missed
          </li>
          <li>
            <strong>Penalty appeals</strong> — People with reasonable excuses (illness, bereavement) wanting to appeal penalties
          </li>
          <li>
            <strong>Payment arrangements</strong> — People who can&apos;t pay tax due immediately and need payment plans
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent taxpayers are self-employed or property investors who need to file Self Assessment returns</li>
          <li>Late filing is common—many people don&apos;t realize they need to file or miss deadlines</li>
          <li>Proper help with late returns helps Kent taxpayers get compliant and avoid escalating penalties</li>
          <li>Time to pay arrangements help Kent taxpayers manage tax payments when cash flow is tight</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent taxpayers are dealing with. Late filing, penalty appeals, backdated returns, payment arrangements—we&apos;ll handle your late tax returns that get you compliant without judgment.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Late or Backdated Tax Returns - Frequently Asked Questions"
          subtitle="Common questions about late filing, penalties, and backdated returns"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Regular Self Assessment filing (on time)
            </li>
            <li>
              <Link href="/services/tax/corporation-tax-ct600-filing/">Corporation Tax (CT600) Filing</Link> — Corporation Tax returns (if you&apos;ve missed CT600 deadlines)
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning to avoid future late filing issues
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with late or backdated tax returns?" description="Don't let late filing penalties stress you out. We'll help you file your late returns, appeal penalties if you have a reasonable excuse, and arrange payment if needed. No judgment, no stress—just practical help to sort things out." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with late or backdated tax returns?" />
    </>
  );
}

