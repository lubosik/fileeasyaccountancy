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
  title: 'IR35 Tax Status Review & Returns Services in Kent | File Easy Accountancy',
  description: 'Expert IR35 tax status review services in Kent. IR35 compliance, IR35 review, off-payroll working rules, IR35 determination, employment status for tax. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/ir35-tax-status-review-returns/',
  },
  openGraph: {
    title: 'IR35 Tax Status Review & Returns Services in Kent | File Easy Accountancy',
    description: 'Expert IR35 tax status review services in Kent. IR35 compliance, IR35 review, off-payroll working rules, IR35 determination, employment status for tax.',
    url: 'https://fileeasyaccountancy.co.uk/services/ir35-tax-status-review-returns/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is IR35?',
    answer: 'IR35 (also called off-payroll working) is tax legislation that determines whether contractors working through limited companies should be treated as employees for tax purposes. If IR35 applies (inside IR35), contractors must pay Income Tax and National Insurance as if they were employees, even though they\'re self-employed for employment law purposes. If IR35 doesn\'t apply (outside IR35), contractors pay tax normally through their company (corporation tax, dividends, etc.). IR35 rules apply on a contract-by-contract basis, so you might be inside IR35 for some contracts and outside for others.',
  },
  {
    question: 'How do I know if IR35 applies to me?',
    answer: 'IR35 status depends on your working relationship with clients, not just what your contract says. Key factors include: control (how much control the client has over your work), substitution (whether you can send a substitute), mutuality of obligation (whether the client must offer work and you must accept it), and whether you\'re in business on your own account (multiple clients, equipment, financial risk). HMRC provides the CEST tool to help determine status, though professional assessment is often recommended for complex situations. Since April 2021, medium and large private sector clients determine your status; for small clients, you determine your own status.',
  },
  {
    question: 'What happens if I\'m inside IR35?',
    answer: 'If you\'re inside IR35, you\'re treated as an employee for tax purposes. This means the client (or agency) must operate PAYE on payments to your limited company, deducting Income Tax and employee National Insurance at source. The client also pays employer National Insurance and may pay Apprenticeship Levy. You\'ll receive net payments after deductions, similar to employees. However, you remain self-employed for employment law purposes (no employment rights, sick pay, holiday pay, etc.). The tax treatment means you pay more tax than if you were outside IR35 (where you\'d pay corporation tax and dividends).',
  },
  {
    question: 'How do I determine my IR35 status?',
    answer: 'You can determine your IR35 status using HMRC\'s Check Employment Status for Tax (CEST) tool, which asks questions about your working relationship and gives an assessment. However, CEST doesn\'t cover all scenarios, so professional assessment is often recommended. Factors to consider include: control (how, when, where you work), substitution (can you send someone else?), mutuality of obligation (must client offer work, must you accept?), and business-on-own-account (multiple clients, equipment, financial risk). If you\'re working for small clients, you determine your own status. If working for medium/large clients, they determine your status and must provide a Status Determination Statement.',
  },
  {
    question: 'Do I need to review my IR35 status?',
    answer: 'Yes, it\'s worth reviewing your IR35 status regularly, especially when: you start new contracts, your working arrangements change, your clients change, or you\'re unsure about existing determinations. If you\'re working for small clients and determining your own status, you should review status for each contract. If working for medium/large clients, review any Status Determination Statements they provide to ensure they\'re correct. Incorrect IR35 status can mean underpaid tax (if inside IR35 but treated as outside) or overpaid tax (if outside IR35 but treated as inside), so regular review helps ensure you\'re paying the right tax.',
  },
  {
    question: 'What are the off-payroll working rules?',
    answer: 'The off-payroll working rules (IR35) apply to contractors working through intermediaries like limited companies, partnerships, or managed service companies. The rules ensure contractors pay broadly the same Income Tax and National Insurance as employees would if they were working directly for clients. Since April 2021, medium and large private sector clients are responsible for determining IR35 status and operating PAYE if inside IR35. Public sector clients have been responsible since April 2017. Small private sector clients are exempt, and contractors determine their own status. The rules apply on a contract-by-contract basis, so status can vary between contracts.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'IR35 Tax Status Review & Returns', href: '/services/tax/ir35-tax-status-review-returns' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function Ir35TaxStatusReviewReturnsPage() {
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
            serviceType: 'IR35 Tax Status Review & Returns',
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
            description: 'Expert IR35 tax status review services in Kent. IR35 compliance, IR35 review, off-payroll working rules, IR35 determination, employment status for tax.',
            name: 'IR35 Tax Status Review & Returns',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/ir35-tax-status-review-returns/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Advisory Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IR35 Status Determination' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IR35 Contract Review' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IR35 Tax Return Filing' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="IR35 Tax Status Review & Returns"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re a contractor working through a limited company, you&apos;ve probably heard of IR35—which determines whether you should be treated as an employee for tax purposes, even though you&apos;re working through your own company. IR35 (off-payroll working) rules determine whether contractors working through limited companies should be treated as employees for tax purposes (
          <a href="https://www.gov.uk/guidance/check-employment-status-for-tax" target="_blank" rel="noopener noreferrer">
            gov.uk check employment status
          </a>
          ). From April 2021, medium and large private sector clients are responsible for determining IR35 status, while contractors working for small clients remain responsible for their own status determination. If IR35 applies (inside IR35), contractors must pay Income Tax and National Insurance as if they were employees, even though they remain self-employed for employment law purposes.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>IR35 rules apply to contractors working through intermediaries</strong> — Limited companies, partnerships, or managed service companies that contractors control
            </li>
            <li>
              <strong>Status determination depends on the working relationship</strong> — Factors include control, substitution rights, mutuality of obligation, and whether you&apos;re in business on your own account
            </li>
            <li>
              <strong>Medium and large clients determine status since April 2021</strong> — Small clients remain exempt, and contractors determine their own status for small clients
            </li>
            <li>
              <strong>Inside IR35 means tax as an employee</strong> — You pay Income Tax and NI as if you were an employee, even though you&apos;re self-employed for employment law
            </li>
          </ul>
        </div>

        <p>
          The problem is most contractors don&apos;t understand IR35. They think it doesn&apos;t apply to them, don&apos;t know who determines their status, or struggle with understanding if they&apos;re inside or outside IR35. That causes problems—incorrect status determination means underpaid tax and penalties, HMRC enquiries and investigations, and confusion about tax obligations.
        </p>

        <p>
          We handle IR35 tax status review and returns for contractors who need proper IR35 compliance: IR35 status determination (determining whether contracts are inside or outside IR35 using HMRC&apos;s CEST tool and professional assessment), status review (reviewing existing contracts to ensure correct IR35 status determination), status determination statements (helping clients produce Status Determination Statements with documented reasoning), tax return filing (filing tax returns correctly based on IR35 status—inside IR35 requires PAYE treatment, outside IR35 allows normal company tax treatment), IR35 compliance (ensuring IR35 obligations are met, records are maintained, and determinations are correct), and appeals support (helping contractors appeal incorrect IR35 determinations if needed). Whether you&apos;re a contractor in Medway working for medium/large clients, a contractor in Maidstone determining your own status for small clients, or a contractor in Canterbury needing IR35 review, we&apos;ll handle your IR35 tax status that works. No penalties, no confusion—just proper IR35 compliance that keeps you right with HMRC.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Determine IR35 status correctly</strong> — Understand whether your contracts are inside or outside IR35 using professional assessment and HMRC&apos;s CEST tool. Correct status determination ensures you pay the right amount of tax.
          </li>
          <li>
            <strong>Review existing contracts</strong> — Review your existing contracts to ensure IR35 status is determined correctly. Contract review identifies any incorrect determinations that need correction.
          </li>
          <li>
            <strong>Meet IR35 compliance obligations</strong> — Ensure you meet IR35 obligations including status determination, record-keeping, and tax return filing. Compliance avoids penalties and HMRC enquiries.
          </li>
          <li>
            <strong>File tax returns correctly</strong> — File tax returns based on correct IR35 status (inside IR35 requires PAYE treatment, outside IR35 allows company tax treatment). Correct filing ensures you pay the right tax.
          </li>
          <li>
            <strong>Understand your responsibilities</strong> — Understand who&apos;s responsible for determining your IR35 status (you or your client). Understanding responsibilities helps you manage IR35 correctly.
          </li>
          <li>
            <strong>Appeal incorrect determinations</strong> — Appeal incorrect IR35 determinations if your client gets it wrong. Appeals ensure you&apos;re not incorrectly taxed as an employee when you&apos;re genuinely self-employed.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for IR35 tax status review and returns:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your IR35 situation: what type of contractor you are (limited company, partnership, other), who your clients are (public sector, medium/large private sector, small private sector), whether you&apos;ve had IR35 status determinations from clients, what your working arrangements are (control, substitution, mutuality of obligation), and what you want to achieve.
          </li>
          <li>
            <strong>IR35 status determination</strong> — We determine your IR35 status:
            <ul>
              <li>
                <strong>Contract review</strong> — Review your contracts (written, verbal, or implied) to understand the working relationship
              </li>
              <li>
                <strong>CEST tool assessment</strong> — Use HMRC&apos;s Check Employment Status for Tax (CEST) tool to get an initial assessment
              </li>
              <li>
                <strong>Professional assessment</strong> — Apply professional IR35 expertise to assess factors like control, substitution, mutuality of obligation, and business-on-own-account
              </li>
              <li>
                <strong>Status conclusion</strong> — Determine whether each contract is inside IR35 (employed for tax) or outside IR35 (genuinely self-employed)
              </li>
              <li>
                <strong>Documentation</strong> — Document the reasoning for each determination with evidence
              </li>
            </ul>
            IR35 status determination ensures you understand your tax obligations correctly.
          </li>
          <li>
            <strong>Status review for existing contracts</strong> — We review your existing contracts:
            <ul>
              <li>
                <strong>Contract identification</strong> — Identify all contracts you&apos;re currently working under
              </li>
              <li>
                <strong>Status check</strong> — Check whether existing status determinations are correct
              </li>
              <li>
                <strong>Client determination review</strong> — Review any Status Determination Statements from clients
              </li>
              <li>
                <strong>Error identification</strong> — Identify any incorrect determinations that need correction
              </li>
              <li>
                <strong>Recommendations</strong> — Recommend actions if determinations are incorrect (appeals, contract changes, etc.)
              </li>
            </ul>
            Status review ensures existing contracts have correct IR35 status.
          </li>
          <li>
            <strong>Status Determination Statement support (for clients)</strong> — We help clients produce Status Determination Statements:
            <ul>
              <li>
                <strong>Determination documentation</strong> — Document whether worker is employed or self-employed for tax
              </li>
              <li>
                <strong>Reasoning documentation</strong> — Document specific reasons supporting the determination
              </li>
              <li>
                <strong>Evidence compilation</strong> — Compile evidence considered in reaching the conclusion
              </li>
              <li>
                <strong>Statement production</strong> — Produce the Status Determination Statement for the worker
              </li>
            </ul>
            Status Determination Statement support ensures clients meet their IR35 obligations correctly.
          </li>
          <li>
            <strong>Tax return filing based on IR35 status</strong> — We file tax returns correctly:
            <ul>
              <li>
                <strong>Inside IR35 treatment</strong> — If inside IR35, ensure PAYE is operated correctly (Income Tax and NI deducted at source)
              </li>
              <li>
                <strong>Outside IR35 treatment</strong> — If outside IR35, file normal company tax returns (corporation tax, dividend planning, etc.)
              </li>
              <li>
                <strong>Mixed status handling</strong> — Handle situations where some contracts are inside IR35 and others are outside
              </li>
              <li>
                <strong>Tax calculation</strong> — Calculate tax correctly based on IR35 status
              </li>
              <li>
                <strong>Return filing</strong> — File returns by appropriate deadlines
              </li>
            </ul>
            Tax return filing ensures you pay the right tax based on your IR35 status.
          </li>
          <li>
            <strong>IR35 compliance monitoring</strong> — We help maintain IR35 compliance:
            <ul>
              <li>
                <strong>Record maintenance</strong> — Maintain records of IR35 determinations, contracts, and working arrangements
              </li>
              <li>
                <strong>Status monitoring</strong> — Monitor changes in working arrangements that might affect IR35 status
              </li>
              <li>
                <strong>Client communication</strong> — Help communicate with clients about IR35 status determinations
              </li>
              <li>
                <strong>Compliance checking</strong> — Check compliance with IR35 obligations regularly
              </li>
              <li>
                <strong>HMRC enquiry support</strong> — Support you during HMRC IR35 enquiries or investigations
              </li>
            </ul>
            IR35 compliance monitoring protects you from penalties and enquiries.
          </li>
          <li>
            <strong>Appeals support</strong> — We help appeal incorrect determinations:
            <ul>
              <li>
                <strong>Appeal assessment</strong> — Assess whether an IR35 determination can be appealed
              </li>
              <li>
                <strong>Appeal preparation</strong> — Prepare appeal documentation and evidence
              </li>
              <li>
                <strong>Client negotiation</strong> — Negotiate with clients to correct incorrect determinations
              </li>
              <li>
                <strong>HMRC dispute resolution</strong> — Support you in resolving disputes with HMRC about IR35 status
              </li>
            </ul>
            Appeals support ensures you&apos;re not incorrectly taxed as an employee.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What IR35 tax status review and returns includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>IR35 status determination (contract review, CEST tool assessment, professional assessment, status conclusion, documentation)</li>
            <li>Status review for existing contracts (contract identification, status check, client determination review, error identification, recommendations)</li>
            <li>Status Determination Statement support (determination documentation, reasoning documentation, evidence compilation, statement production)</li>
            <li>Tax return filing based on IR35 status (inside IR35 treatment, outside IR35 treatment, mixed status handling, tax calculation, return filing)</li>
            <li>IR35 compliance monitoring (record maintenance, status monitoring, client communication, compliance checking, HMRC enquiry support)</li>
            <li>Appeals support (appeal assessment, appeal preparation, client negotiation, HMRC dispute resolution)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>IR35 rules:</h3>
          <h4 style={{ marginTop: '1rem' }}>Who determines IR35 status:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Public sector clients</strong> — Always responsible for determining IR35 status (since April 2017)
            </li>
            <li>
              <strong>Medium and large private sector clients</strong> — Responsible for determining IR35 status (since April 2021)
            </li>
            <li>
              <strong>Small private sector clients</strong> — Exempt from responsibility; contractors determine their own status
            </li>
            <li>
              <strong>Agencies</strong> — Have specific responsibilities and may be deemed employers in some cases
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Inside IR35 (employed for tax):</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>PAYE treatment</strong> — Income Tax and employee NI deducted at source by deemed employer
            </li>
            <li>
              <strong>Employer NI</strong> — Deemed employer pays employer NI contributions
            </li>
            <li>
              <strong>Apprenticeship Levy</strong> — Deemed employer may pay Apprenticeship Levy if applicable
            </li>
            <li>
              <strong>Tax treatment</strong> — Treated as employment income for tax purposes
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Outside IR35 (genuinely self-employed):</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Company tax treatment</strong> — Normal corporation tax, dividend planning, company tax returns
            </li>
            <li>
              <strong>No PAYE</strong> — No PAYE deductions at source
            </li>
            <li>
              <strong>Tax management</strong> — Contractor manages own tax affairs through company
            </li>
            <li>
              <strong>Business expenses</strong> — Can claim business expenses through company
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>IR35 status factors:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Control</strong> — How much control the client has over how, when, and where work is done
            </li>
            <li>
              <strong>Substitution</strong> — Whether the contractor can send a substitute to do the work
            </li>
            <li>
              <strong>Mutuality of obligation</strong> — Whether the client is obliged to offer work and contractor is obliged to accept it
            </li>
            <li>
              <strong>Business-on-own-account</strong> — Whether the contractor is genuinely running a business (multiple clients, equipment, financial risk, etc.)
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Status Determination Statement:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Required by clients</strong> — Clients must produce SDS when determining IR35 status
            </li>
            <li>
              <strong>Must include</strong> — Whether worker is employed or self-employed, reasons for determination, evidence considered
            </li>
            <li>
              <strong>Must be provided</strong> — To the worker and their intermediary (limited company, etc.)
            </li>
          </ul>
        </div>

        <p>
          We handle all aspects of IR35 tax status review and returns. The key is accurate status determination, proper contract review, correct tax return filing, and ongoing compliance monitoring, so you pay the right tax and avoid penalties.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of contracts</strong> — More contracts mean more determinations and reviews, so costs increase
          </li>
          <li>
            <strong>Status determination complexity</strong> — Simple determinations cost less than complex determinations requiring detailed analysis
          </li>
          <li>
            <strong>Client responsibility</strong> — If you&apos;re determining your own status (small clients), costs are different than if clients determine status
          </li>
          <li>
            <strong>Tax return filing</strong> — Tax return filing costs depend on whether inside or outside IR35 (different tax treatment)
          </li>
          <li>
            <strong>Appeals or disputes</strong> — If you need appeals support or dispute resolution, this adds to the cost
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>IR35 status determination (single contract):</strong> £200–£400 for determining IR35 status for one contract using CEST and professional assessment
          </li>
          <li>
            <strong>IR35 status review (multiple contracts):</strong> £300–£600 for reviewing multiple existing contracts and checking status determinations
          </li>
          <li>
            <strong>Status Determination Statement support (for clients):</strong> £150–£300 for helping clients produce SDS with documented reasoning
          </li>
          <li>
            <strong>Tax return filing (outside IR35):</strong> £300–£600 for normal company tax returns (corporation tax, dividends, etc.)
          </li>
          <li>
            <strong>Tax return filing (inside IR35):</strong> £200–£400 for ensuring PAYE is operated correctly and tax returns filed appropriately
          </li>
          <li>
            <strong>IR35 compliance monitoring (ongoing):</strong> £100–£200 per month for ongoing IR35 compliance monitoring and support
          </li>
          <li>
            <strong>IR35 appeals support:</strong> £400–£800 for preparing and supporting appeals against incorrect determinations
          </li>
        </ul>

        <p>
          <strong>Why IR35 tax status review costs what it does:</strong>
        </p>
        <ul>
          <li>IR35 status determination requires careful analysis of contracts, working arrangements, and IR35 factors</li>
          <li>Status review requires reviewing all contracts and checking client determinations for accuracy</li>
          <li>Status Determination Statement support requires documenting determinations with evidence and reasoning</li>
          <li>Tax return filing requires different treatment depending on IR35 status (inside vs. outside)</li>
          <li>Compliance monitoring requires ongoing attention to IR35 obligations and changes in working arrangements</li>
          <li>Appeals support requires preparing evidence and negotiating with clients or HMRC</li>
        </ul>

        <p>
          <strong>Timeline:</strong> IR35 status determination for a single contract typically takes 3-5 days from when we receive contract details and working arrangement information. Status review for multiple contracts may take 1-2 weeks depending on number of contracts. Tax return filing follows standard deadlines (31 January for Self Assessment, 12 months after company year-end for corporation tax). Appeals can take several weeks or months depending on complexity.
        </p>

        <p>
          <strong>Payment:</strong> IR35 status determination and review fees are usually charged upfront or on completion. Tax return filing fees follow standard payment terms. Ongoing compliance monitoring is charged monthly. Appeals support is charged as work progresses. We&apos;ll discuss payment options when we understand your needs.
        </p>

        <p>
          <strong>No hidden fees.</strong> IR35 tax status review price includes determination, status review, documentation, and initial compliance support. Tax return filing and ongoing compliance monitoring are separate if needed. Appeals support is separate if required.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with contractors across Kent who need IR35 tax status review: contractors in Medway working for medium/large clients, contractors in Maidstone determining their own status for small clients, and contractors in Canterbury needing IR35 compliance support.
        </p>

        <p>
          Kent contractors face the same IR35 obligations as everyone else—determining status correctly, filing tax returns based on status, and meeting IR35 compliance obligations. The difference is when you get proper help with IR35 tax status review, you determine status correctly, file tax returns appropriately, and maintain IR35 compliance without stress. That&apos;s what helps Kent contractors avoid penalties, pay the right tax, and stay compliant with HMRC.
        </p>

        <p>
          <strong>Common Kent IR35 scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Contractors for medium/large clients</strong> — Contractors whose clients determine IR35 status (need to review client determinations)
          </li>
          <li>
            <strong>Contractors for small clients</strong> — Contractors who determine their own IR35 status (need professional determination help)
          </li>
          <li>
            <strong>Public sector contractors</strong> — Contractors working for public sector clients (clients determine status)
          </li>
          <li>
            <strong>Multiple contract contractors</strong> — Contractors with contracts both inside and outside IR35 (need mixed status handling)
          </li>
          <li>
            <strong>IR35 review</strong> — Contractors needing review of existing contracts to ensure correct status
          </li>
        </ul>

        <p>
          <strong>Kent contractor market context:</strong>
        </p>
        <ul>
          <li>Many Kent contractors work for clients across London and the South East (mix of small, medium, and large clients)</li>
          <li>Proper IR35 status review helps Kent contractors understand their tax obligations and avoid penalties</li>
          <li>Accurate IR35 determination helps Kent contractors pay the right tax and avoid underpayment or overpayment</li>
          <li>Local IR35 expertise helps Kent contractors navigate complex IR35 rules and compliance requirements</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent contractors are dealing with. IR35 status determination, contract review, tax return filing, compliance monitoring—we&apos;ll handle your IR35 tax status that keeps you compliant and pays the right tax.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="IR35 Tax Status Review & Returns - Frequently Asked Questions"
          subtitle="Common questions about IR35 status determination and off-payroll working rules"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/bookkeeping-contractors-ir35/">Bookkeeping for Contractors - IR35</Link> — Bookkeeping that accounts for IR35 status
            </li>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Self Assessment returns for contractors
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning considering IR35 status
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with IR35 tax status?" description="Don't let IR35 confusion stress you out. We'll help you determine your IR35 status, review your contracts, and ensure you pay the right tax. No penalties, no confusion—just proper IR35 compliance that keeps you right with HMRC." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with IR35 tax status?" />
    </>
  );
}

