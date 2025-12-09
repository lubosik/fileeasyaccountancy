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
  title: 'R&D Tax Credit Eligibility Assessment Services in Kent | File Easy Accountancy',
  description: 'Expert R&D tax credit eligibility assessment in Kent. R&D tax credits UK, R&D tax relief, R&D tax credit eligibility, SME R&D relief. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/r-and-d-tax-credit-eligibility/',
  },
  openGraph: {
    title: 'R&D Tax Credit Eligibility Assessment Services in Kent | File Easy Accountancy',
    description: 'Expert R&D tax credit eligibility assessment in Kent. R&D tax credits UK, R&D tax relief, R&D tax credit eligibility, SME R&D relief.',
    url: 'https://fileeasyaccountancy.co.uk/services/r-and-d-tax-credit-eligibility/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is R&D tax credit?',
    answer: 'R&D tax credits are government tax reliefs that allow companies to reduce their Corporation Tax bill or receive cash credits for qualifying research and development expenditure. Companies doing R&D can claim relief worth 14.7%–27% of qualifying R&D costs depending on which scheme applies (SME relief, RDEC, merged scheme, ERIS). The relief reduces Corporation Tax liability or provides cash credits for loss-making companies. R&D tax credits are designed to incentivize UK companies to invest in innovation and research and development.',
  },
  {
    question: 'Am I eligible for R&D tax credits?',
    answer: 'You\'re eligible for R&D tax credits if: your company is subject to UK Corporation Tax (limited company, PLC, etc.), you do qualifying R&D activities (seeking advance in science or technology, resolving scientific or technological uncertainty), you incur qualifying R&D costs (staff, subcontractors, materials, software, etc.), and your accounting period is within claim deadline (2 years from end of period). The key is whether your work qualifies as R&D—it doesn\'t need to be successful, just genuine R&D seeking a technological advance. We can assess whether your activities qualify for R&D tax credits.',
  },
  {
    question: 'How do I claim R&D tax credits?',
    answer: 'To claim R&D tax credits, you need to: assess whether your activities qualify as R&D for tax purposes, identify all qualifying R&D costs (staff, subcontractors, materials, software), determine which R&D scheme applies (SME relief, RDEC, merged scheme), prepare technical report explaining your R&D activities, complete R&D claim forms in your Corporation Tax return, submit claim to HMRC within 2-year deadline, and provide supporting documentation if requested. Claims are submitted with your Corporation Tax return. We can help you prepare and submit R&D tax credit claims correctly.',
  },
  {
    question: 'What qualifies as R&D for tax credits?',
    answer: 'Qualifying R&D for tax credits must: seek an advance in a field of science or technology (developing something new or appreciably improving something), resolve scientific or technological uncertainty (uncertainty that competent professionals can\'t readily resolve), involve systematic investigation (methodical research and development), and be in field of science or technology (not arts, humanities, or social sciences). R&D doesn\'t need to be successful to qualify—failed projects can still qualify. The key is seeking a technological advance through resolving uncertainty, not just routine work or commercial activities. We can assess whether your work qualifies.',
  },
  {
    question: 'How much R&D tax credit can I claim?',
    answer: 'How much you can claim depends on which R&D scheme applies and your qualifying costs. For accounting periods from April 2024: merged scheme provides ~14.7%–16.2% relief, ERIS provides 12.5%–27% for qualifying SMEs. For periods before April 2024: SME relief provides up to 186% deduction or cash credits, RDEC provides ~15% credit. The amount depends on your qualifying R&D costs (staff, subcontractors, materials, software). For example, £100,000 qualifying costs could generate £14,700–£27,000 in relief depending on scheme. Average SME claims are around £81,000, average large company claims are around £291,000. We can help calculate potential claim value for your company.',
  },
  {
    question: 'What is SME R&D relief?',
    answer: 'SME R&D relief is the R&D tax credit scheme for small and medium-sized enterprises (fewer than 500 employees, turnover less than €100m or balance sheet less than €86m). For accounting periods before April 2024, SME relief provides up to 186% deduction (100% costs + 86% enhancement) or cash credits for loss-making companies. From April 2024, SMEs use the merged scheme (unless eligible for ERIS). SME relief is more generous than large company schemes, providing higher rates of relief. However, eligibility criteria are strict—you must be a genuine SME and not have received certain state aid. We can help determine whether you qualify for SME relief.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'R&D Tax Credit Eligibility', href: '/services/tax/r-and-d-tax-credit-eligibility' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function RandDTaxCreditEligibilityPage() {
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
            serviceType: 'R&D Tax Credit Eligibility',
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
            description: 'Expert R&D tax credit eligibility assessment in Kent. R&D tax credits UK, R&D tax relief, R&D tax credit eligibility, SME R&D relief.',
            name: 'R&D Tax Credit Eligibility',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/r-and-d-tax-credit-eligibility/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Advisory Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'R&D Eligibility Assessment' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'R&D Claim Preparation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'R&D Tax Credit Submission' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="R&D Tax Credit Eligibility"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If your company does research and development work, you might be missing out on R&D tax credits—which can reduce your Corporation Tax bill or give you cash credits worth thousands of pounds. R&D tax credits allow companies to reduce their Corporation Tax bill or receive cash credits for qualifying research and development expenditure (
          <a href="https://www.gov.uk/guidance/corporation-tax-research-and-development-rd-relief" target="_blank" rel="noopener noreferrer">
            gov.uk R&D tax relief
          </a>
          ). SME R&D relief allows small and medium-sized companies to claim 86% enhancement on qualifying R&D costs, or 186% total deduction (100% costs + 86% enhancement). RDEC (Research and Development Expenditure Credit) provides a taxable credit worth 20% of qualifying R&D expenditure for large companies and some SMEs.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>R&D tax credits reduce Corporation Tax or provide cash credits</strong> — Companies can claim relief worth 14.7%–27% of qualifying R&D costs depending on scheme
            </li>
            <li>
              <strong>Qualifying R&D must seek a technological advance</strong> — Through resolving scientific or technological uncertainty, not just routine work
            </li>
            <li>
              <strong>SMEs get enhanced relief</strong> — Small and medium companies can claim higher rates of relief (up to 186% deduction)
            </li>
            <li>
              <strong>Claims must be submitted within 2 years</strong> — Of the end of the accounting period in which R&D expenditure was incurred
            </li>
          </ul>
        </div>

        <p>
          The problem is most companies don&apos;t realize their work qualifies for R&D tax credits. They think R&D is only for scientists in labs, don&apos;t understand what qualifies, or don&apos;t know how to claim. That causes problems—missing out on thousands in tax relief, paying more Corporation Tax than necessary, and not claiming what you&apos;re entitled to.
        </p>

        <p>
          We handle R&D tax credit eligibility assessment for companies doing research and development: R&D eligibility assessment (assessing whether your company&apos;s activities qualify as R&D for tax purposes), qualifying costs identification (identifying all qualifying R&D costs including staff, subcontractors, materials, and software), R&D claim preparation (preparing R&D tax credit claims with supporting documentation and technical reports), scheme selection (determining which R&D scheme applies—SME relief, RDEC, or merged scheme), claim submission (submitting R&D claims to HMRC with Corporation Tax returns), and HMRC enquiry support (supporting you during HMRC R&D enquiries if they arise). Whether you&apos;re a tech company in Medway developing new software, a manufacturing company in Maidstone improving processes, or a company in Canterbury doing innovative work, we&apos;ll handle your R&D tax credit eligibility that works. No missed claims, no overpaid tax—just proper R&D tax credit claims that save you money.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Identify R&D tax credit opportunities</strong> — Assess whether your company&apos;s activities qualify for R&D tax credits. Identifying opportunities means claiming what you&apos;re entitled to.
          </li>
          <li>
            <strong>Claim R&D tax relief</strong> — Claim R&D tax credits to reduce Corporation Tax or receive cash credits. R&D tax relief saves you money and supports innovation.
          </li>
          <li>
            <strong>Maximize qualifying costs</strong> — Identify all qualifying R&D costs to maximize your claim value. Maximizing costs increases the tax relief you receive.
          </li>
          <li>
            <strong>Navigate R&D schemes</strong> — Understand which R&D scheme applies (SME relief, RDEC, merged scheme) and claim accordingly. Correct scheme selection ensures you claim the right relief.
          </li>
          <li>
            <strong>Meet claim deadlines</strong> — Submit R&D claims within 2-year deadline to avoid missing out. Timely submission ensures you don&apos;t lose eligibility.
          </li>
          <li>
            <strong>Support HMRC enquiries</strong> — Get support during HMRC R&D enquiries if they arise. Enquiry support protects your claims and ensures compliance.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for R&D tax credit eligibility assessment:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your R&D situation: what type of company you are (SME or large), what R&D work you do, what problems you&apos;re solving, what costs you incur on R&D, whether you&apos;ve claimed R&D before, and what you want to achieve.
          </li>
          <li>
            <strong>R&D eligibility assessment</strong> — We assess whether your activities qualify:
            <ul>
              <li>
                <strong>Project review</strong> — Review your R&D projects to understand what scientific or technological advances you&apos;re seeking
              </li>
              <li>
                <strong>Qualifying criteria check</strong> — Check whether projects meet R&D qualifying criteria (advance in science/technology, resolving uncertainty)
              </li>
              <li>
                <strong>Work activity analysis</strong> — Analyze which parts of projects qualify as R&D (vs routine or commercial work)
              </li>
              <li>
                <strong>Industry assessment</strong> — Assess whether your industry and activities typically qualify for R&D relief
              </li>
              <li>
                <strong>Eligibility conclusion</strong> — Determine whether your company&apos;s activities qualify for R&D tax credits
              </li>
            </ul>
            R&D eligibility assessment identifies whether you can claim R&D tax credits.
          </li>
          <li>
            <strong>Qualifying costs identification</strong> — We identify all qualifying R&D costs:
            <ul>
              <li>
                <strong>Staff costs</strong> — Identify staff time spent on qualifying R&D (salaries, NI, pensions, expenses)
              </li>
              <li>
                <strong>Subcontractor costs</strong> — Identify R&D work outsourced to subcontractors or freelancers
              </li>
              <li>
                <strong>Materials and consumables</strong> — Identify materials, heat, light, power used in R&D
              </li>
              <li>
                <strong>Software costs</strong> — Identify software licenses, data, and cloud costs used for R&D
              </li>
              <li>
                <strong>Clinical trial costs</strong> — Identify payments to clinical trial subjects (if applicable)
              </li>
              <li>
                <strong>Cost apportionment</strong> — Apportion costs between qualifying R&D and non-qualifying work
              </li>
            </ul>
            Qualifying costs identification ensures you claim for all eligible costs.
          </li>
          <li>
            <strong>Scheme selection</strong> — We determine which R&D scheme applies:
            <ul>
              <li>
                <strong>Company size assessment</strong> — Determine whether you&apos;re SME (fewer than 500 employees, turnover less than €100m or balance sheet less than €86m) or large company
              </li>
              <li>
                <strong>Accounting period check</strong> — Check when your accounting period starts (affects which schemes are available)
              </li>
              <li>
                <strong>Scheme eligibility</strong> — Determine which scheme applies (SME relief, RDEC, merged scheme, ERIS)
              </li>
              <li>
                <strong>Relief rate calculation</strong> — Calculate relief rates available under applicable scheme
              </li>
              <li>
                <strong>Scheme recommendation</strong> — Recommend best scheme for your circumstances
              </li>
            </ul>
            Scheme selection ensures you claim under the correct scheme and get maximum relief.
          </li>
          <li>
            <strong>R&D claim preparation</strong> — We prepare your R&D claim:
            <ul>
              <li>
                <strong>Technical report</strong> — Prepare technical report explaining R&D activities and how they qualify
              </li>
              <li>
                <strong>Cost calculation</strong> — Calculate total qualifying R&D costs and enhancement/credit amounts
              </li>
              <li>
                <strong>Supporting documentation</strong> — Compile supporting documentation (invoices, payroll records, project documentation)
              </li>
              <li>
                <strong>Claim forms</strong> — Complete R&D claim forms for Corporation Tax return
              </li>
              <li>
                <strong>Documentation package</strong> — Prepare comprehensive documentation package for HMRC
              </li>
            </ul>
            R&D claim preparation ensures your claim is properly documented and submitted correctly.
          </li>
          <li>
            <strong>Claim submission</strong> — We submit your R&D claim:
            <ul>
              <li>
                <strong>Corporation Tax return</strong> — Include R&D claim in your Corporation Tax return (CT600)
              </li>
              <li>
                <strong>Claim submission</strong> — Submit claim to HMRC with supporting documentation
              </li>
              <li>
                <strong>Deadline compliance</strong> — Ensure claim submitted within 2-year deadline from end of accounting period
              </li>
              <li>
                <strong>Submission confirmation</strong> — Confirm receipt of claim by HMRC
              </li>
              <li>
                <strong>Processing tracking</strong> — Track claim processing and payment (if applicable)
              </li>
            </ul>
            Claim submission ensures your R&D claim is filed correctly and on time.
          </li>
          <li>
            <strong>HMRC enquiry support</strong> — We support you during enquiries:
            <ul>
              <li>
                <strong>Enquiry handling</strong> — Handle HMRC R&D enquiries and requests for information
              </li>
              <li>
                <strong>Additional documentation</strong> — Provide additional documentation if HMRC requests it
              </li>
              <li>
                <strong>Technical explanations</strong> — Provide technical explanations of R&D activities if needed
              </li>
              <li>
                <strong>Dispute resolution</strong> — Support resolution of any disputes about R&D eligibility or costs
              </li>
              <li>
                <strong>Compliance protection</strong> — Ensure enquiry doesn&apos;t affect other tax matters
              </li>
            </ul>
            HMRC enquiry support protects your claims and ensures compliance.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What R&D tax credit eligibility assessment includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>R&D eligibility assessment (project review, qualifying criteria check, work activity analysis, industry assessment, eligibility conclusion)</li>
            <li>Qualifying costs identification (staff costs, subcontractor costs, materials, software, clinical trials, cost apportionment)</li>
            <li>Scheme selection (company size assessment, accounting period check, scheme eligibility, relief rate calculation, scheme recommendation)</li>
            <li>R&D claim preparation (technical report, cost calculation, supporting documentation, claim forms, documentation package)</li>
            <li>Claim submission (Corporation Tax return, claim submission, deadline compliance, submission confirmation, processing tracking)</li>
            <li>HMRC enquiry support (enquiry handling, additional documentation, technical explanations, dispute resolution, compliance protection)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>R&D tax credit schemes:</h3>
          <h4 style={{ marginTop: '1rem' }}>For accounting periods from 1 April 2024:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Merged R&D Expenditure Credit</strong> — Default scheme for all companies, provides ~14.7%–16.2% relief
            </li>
            <li>
              <strong>Enhanced R&D Intensive Support (ERIS)</strong> — For loss-making SMEs with at least 30% of costs as R&D, provides 12.5%–27% relief
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>For accounting periods before 1 April 2024:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>SME R&D relief</strong> — For small/medium companies, provides up to 186% deduction (100% costs + 86% enhancement) or cash credits
            </li>
            <li>
              <strong>RDEC</strong> — For large companies and some SMEs, provides ~15% net credit
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>SME definition:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Fewer than 500 employees</strong> — AND
            </li>
            <li>
              <strong>Annual turnover less than €100 million</strong> — OR balance sheet less than €86 million
            </li>
            <li>
              Companies not meeting this are large companies
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Qualifying R&D criteria:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Advance in science or technology</strong> — Must seek to achieve an advance
            </li>
            <li>
              <strong>Scientific or technological uncertainty</strong> — Must resolve uncertainty that competent professionals can&apos;t readily resolve
            </li>
            <li>
              <strong>Systematic investigation</strong> — Must involve systematic investigation
            </li>
            <li>
              <strong>Science or technology field</strong> — Must be in field of science or technology (not arts, humanities, social sciences)
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Qualifying costs:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Staff costs</strong> — Salaries, employer NI, pensions, reimbursed expenses for R&D staff
            </li>
            <li>
              <strong>Subcontractors</strong> — Costs for R&D work outsourced
            </li>
            <li>
              <strong>Materials and consumables</strong> — Materials, heat, light, power used in R&D
            </li>
            <li>
              <strong>Software</strong> — Software licenses, data, cloud costs for R&D
            </li>
            <li>
              <strong>Clinical trials</strong> — Payments to clinical trial subjects
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Claim deadlines:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>2-year deadline</strong> — Claims must be submitted within 2 years of end of accounting period in which R&D expenditure was incurred
            </li>
            <li>
              <strong>Late claims</strong> — Claims submitted after deadline are rejected (unless exceptional circumstances)
            </li>
          </ul>
        </div>

        <p>
          We handle all aspects of R&D tax credit eligibility assessment. The key is identifying qualifying R&D activities, maximizing qualifying costs, selecting the right scheme, preparing proper documentation, and submitting claims on time, so you claim all R&D tax credits you&apos;re entitled to.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Company size</strong> — SME claims typically cost less than large company claims (different scheme complexity)
          </li>
          <li>
            <strong>Number of R&D projects</strong> — More projects mean more assessment and documentation, increasing costs
          </li>
          <li>
            <strong>Complexity of R&D</strong> — Complex R&D projects require more detailed technical reports and documentation
          </li>
          <li>
            <strong>Claim value</strong> — Some providers charge percentage of claim value (we charge fixed fees)
          </li>
          <li>
            <strong>Previous claims</strong> — First-time claims may require more work than ongoing claims
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Basic R&D eligibility assessment:</strong> £500–£1,000 for initial assessment of whether activities qualify for R&D tax credits
          </li>
          <li>
            <strong>SME R&D claim preparation (single project):</strong> £1,500–£3,000 for preparing SME R&D claim for single project with standard documentation
          </li>
          <li>
            <strong>SME R&D claim preparation (multiple projects):</strong> £2,500–£5,000+ for preparing SME R&D claim with multiple projects and complex documentation
          </li>
          <li>
            <strong>Large company RDEC claim:</strong> £3,000–£7,000+ for preparing RDEC claim for large companies with complex R&D activities
          </li>
          <li>
            <strong>R&D claim review (existing claims):</strong> £800–£1,500 for reviewing existing R&D claims to ensure they&apos;re maximized and correct
          </li>
          <li>
            <strong>HMRC enquiry support:</strong> £150–£300 per hour for supporting HMRC R&D enquiries
          </li>
        </ul>

        <p>
          <strong>Why R&D tax credit eligibility assessment costs what it does:</strong>
        </p>
        <ul>
          <li>R&D eligibility assessment requires understanding technical projects and applying HMRC R&D criteria correctly</li>
          <li>Qualifying costs identification requires detailed analysis of company costs and apportionment between R&D and non-R&D</li>
          <li>Technical report preparation requires writing detailed technical explanations of R&D activities</li>
          <li>Claim preparation requires compiling comprehensive documentation and completing claim forms correctly</li>
          <li>Scheme selection requires understanding different R&D schemes and determining which applies</li>
          <li>HMRC enquiry support requires responding to detailed technical questions about R&D activities</li>
        </ul>

        <p>
          <strong>Timeline:</strong> R&D eligibility assessment typically takes 2-3 weeks from when we receive project information and documentation. R&D claim preparation takes 4-8 weeks depending on complexity and number of projects. Claims are submitted with Corporation Tax returns (due 12 months after company year-end, or earlier if filing early). HMRC typically processes R&D claims within 28-35 days for straightforward claims, longer for complex claims.
        </p>

        <p>
          <strong>Payment:</strong> R&D eligibility assessment fees are usually charged upfront. R&D claim preparation fees are typically charged 50% upfront and 50% on submission, or in installments. Some providers charge percentage of claim value (we charge fixed fees). We&apos;ll discuss payment options when we understand your needs.
        </p>

        <p>
          <strong>No hidden fees.</strong> R&D tax credit eligibility assessment price includes assessment, costs identification, scheme selection, claim preparation, and submission. HMRC enquiry support is separate if needed. We don&apos;t charge percentage of claim value—fixed fees only.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with companies across Kent who do R&D work: tech companies in Medway developing software, manufacturing companies in Maidstone improving processes, and innovative businesses in Canterbury doing research and development.
        </p>

        <p>
          Kent companies doing R&D face the same eligibility criteria as everyone else—qualifying R&D activities, qualifying costs, and proper claim preparation. The difference is when you get proper help with R&D tax credit eligibility assessment, you identify all qualifying activities, maximize qualifying costs, and prepare proper claims. That&apos;s what helps Kent companies claim all R&D tax credits they&apos;re entitled to and save money on Corporation Tax.
        </p>

        <p>
          <strong>Common Kent R&D scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Software development</strong> — Tech companies developing new software, apps, or platforms
          </li>
          <li>
            <strong>Manufacturing innovation</strong> — Manufacturing companies improving processes, products, or methods
          </li>
          <li>
            <strong>Engineering projects</strong> — Engineering companies solving technical problems or developing new solutions
          </li>
          <li>
            <strong>Pharmaceutical/medical</strong> — Companies doing clinical trials or medical research
          </li>
          <li>
            <strong>Product development</strong> — Companies developing new products or improving existing ones
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent businesses are innovative SMEs doing qualifying R&D work</li>
          <li>Proper R&D tax credit claims help Kent companies reduce Corporation Tax and support innovation</li>
          <li>R&D tax credits provide significant cash flow benefits for loss-making SMEs</li>
          <li>Local R&D expertise helps Kent companies navigate complex R&D eligibility criteria</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent companies doing R&D are dealing with. R&D eligibility assessment, qualifying costs identification, claim preparation, scheme selection—we&apos;ll handle your R&D tax credit eligibility that maximizes your claims and saves you money.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="R&D Tax Credit Eligibility - Frequently Asked Questions"
          subtitle="Common questions about R&D tax credits, eligibility, and claim preparation"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/corporation-tax-ct600-filing/">Corporation Tax CT600 Filing</Link> — Corporation Tax returns where R&D claims are submitted
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning including R&D tax credit optimization
            </li>
            <li>
              <Link href="/services/tax/company-director-tax-returns/">Company Director Tax Returns</Link> — Self Assessment returns for directors of R&D companies
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with R&D tax credit eligibility?" description="Don't miss out on R&D tax credits you're entitled to. We'll assess your eligibility, identify qualifying costs, and prepare claims that maximize your R&D tax relief. No missed claims, no overpaid tax—just proper R&D tax credit claims that save you money." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with R&D tax credit eligibility?" />
    </>
  );
}

