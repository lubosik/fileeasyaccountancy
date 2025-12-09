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
  title: 'HMRC Enquiry & Investigation Support Services in Kent | File Easy Accountancy',
  description: 'Expert HMRC enquiry and investigation support services in Kent. HMRC enquiry, HMRC investigation, tax investigation support, HMRC compliance. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/hmrc-enquiry-investigation-support/',
  },
  openGraph: {
    title: 'HMRC Enquiry & Investigation Support Services in Kent | File Easy Accountancy',
    description: 'Expert HMRC enquiry and investigation support services in Kent. HMRC enquiry, HMRC investigation, tax investigation support, HMRC compliance.',
    url: 'https://fileeasyaccountancy.co.uk/services/hmrc-enquiry-investigation-support/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is an HMRC enquiry?',
    answer: 'An HMRC enquiry is a compliance check where HMRC reviews your tax returns, records, and accounts to ensure you\'re paying the right amount of tax and complying with tax law. HMRC enquiries can be: aspect enquiries (checking specific aspects of your tax return or accounts), full enquiries (comprehensive review of your tax affairs), compliance checks (routine checks to ensure compliance), random checks (random selection for compliance checks), or targeted enquiries (enquiries targeting specific issues or areas). HMRC has the right to check your tax affairs, and enquiries can result in additional tax, penalties, and interest if issues are found. It\'s worth getting professional help to respond to HMRC enquiries effectively and minimise impact.',
  },
  {
    question: 'What happens in an HMRC investigation?',
    answer: 'In an HMRC investigation, HMRC conducts a detailed review of your tax affairs, typically triggered by concerns about tax compliance, errors, or suspected tax evasion. HMRC investigations involve: detailed review of tax returns, records, and accounts, requests for information and documents, meetings or interviews with HMRC, analysis of your financial affairs, identification of any issues or discrepancies, calculation of additional tax, penalties, and interest if issues are found, and negotiation or appeal if you disagree with findings. HMRC investigations are more serious than routine enquiries and can result in significant additional tax, penalties, and interest. It\'s worth getting professional help to handle HMRC investigations effectively and minimise impact.',
  },
  {
    question: 'How do I handle an HMRC enquiry?',
    answer: 'To handle an HMRC enquiry, you should: review HMRC correspondence carefully (understanding what HMRC is checking and what information they\'re requesting), understand your rights and obligations (knowing what you must do and what your rights are), gather required records (collecting all requested records, documents, and information), prepare professional responses (drafting clear, complete, and accurate responses to HMRC), respond promptly (responding to HMRC requests within deadlines), communicate professionally (maintaining professional communication with HMRC throughout), seek professional help (getting professional support to ensure appropriate handling), and negotiate where appropriate (negotiating settlements to minimise additional tax and penalties). Professional help can ensure HMRC enquiries are handled effectively and minimise impact. It\'s worth getting professional help if you receive an HMRC enquiry.',
  },
  {
    question: 'Do I need help with HMRC investigation?',
    answer: 'You may need help with HMRC investigation if you: have received HMRC correspondence (enquiry letters, investigation notices, requests for information), don\'t understand what HMRC is checking (uncertainty about what\'s being investigated and why), are concerned about potential issues (worried about additional tax, penalties, or consequences), don\'t know how to respond (uncertainty about how to respond appropriately), want to minimise impact (wanting to minimise additional tax, penalties, and interest), need representation (wanting professional representation during meetings or interviews), or want peace of mind (wanting support and advice during what can be a stressful time). Most people benefit from professional help when facing HMRC investigations. It\'s worth getting professional help to handle investigations effectively.',
  },
  {
    question: 'What are HMRC enquiry rights?',
    answer: 'Your rights during HMRC enquiries include: right to representation (you have the right to be represented by a professional advisor), right to fair treatment (HMRC must treat you fairly and reasonably), right to appeal (you can appeal HMRC decisions if you disagree), right to confidentiality (your information should be kept confidential), right to reasonable time (you should be given reasonable time to respond to requests), and right to explanation (you have the right to understand what HMRC is checking and why). Understanding your rights helps ensure fair treatment during HMRC enquiries. It\'s worth getting professional advice on your rights and how to protect them.',
  },
  {
    question: 'How long does an HMRC investigation take?',
    answer: 'HMRC investigations vary significantly in duration: simple compliance checks may be resolved in weeks (typically 4–12 weeks), aspect enquiries may take months (typically 3–6 months), full enquiries or investigations can take much longer (typically 6 months to 2+ years depending on complexity), and investigations can be extended if complex issues are found or appeals are made. Investigation duration depends on: type of enquiry (compliance check vs. full investigation), complexity (simple issues vs. complex tax matters), cooperation (how quickly information is provided), and whether settlement or appeal is needed. It\'s worth getting professional help to resolve investigations as efficiently as possible while ensuring thoroughness.',
  },
  {
    question: 'What should I do if HMRC investigate me?',
    answer: 'If HMRC investigate you, you should: stay calm (enquiries are routine and don\'t necessarily mean you\'ve done anything wrong), review correspondence carefully (understanding what HMRC is checking), understand your rights (knowing your rights and obligations), gather required records (collecting all requested information), respond professionally (preparing clear, complete, and accurate responses), respond promptly (meeting HMRC deadlines), seek professional help (getting professional support to ensure appropriate handling), cooperate with HMRC (providing requested information and cooperating with the enquiry), and negotiate where appropriate (working with HMRC to reach fair settlements). Professional help can ensure investigations are handled effectively and minimise impact. It\'s worth getting professional help if you\'re being investigated by HMRC.',
  },
  {
    question: 'Can I appeal HMRC investigation results?',
    answer: 'Yes, you can appeal HMRC investigation results if you disagree with HMRC\'s findings. Appeals involve: reviewing HMRC\'s decision (understanding what HMRC has decided and why), assessing appeal grounds (determining whether you have valid grounds for appeal), preparing appeal (gathering evidence, preparing appeal arguments, submitting appeal), appeal process (going through appeal process, which may involve review, tribunal, or court), and appeal resolution (resolving appeal, which may result in HMRC decision being changed, upheld, or modified). Appeals can be complex and time-consuming, so it\'s worth getting professional help to assess whether appeal is appropriate and to prepare and represent appeals effectively. Professional help can improve appeal chances of success.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Advisory', href: '/services/advisory' },
  { label: 'HMRC Enquiry Investigation Support', href: '/services/advisory/hmrc-enquiry-investigation-support' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function HMRCEnquiryInvestigationSupportPage() {
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
            serviceType: 'HMRC Enquiry Investigation Support',
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
            description: 'Expert HMRC enquiry and investigation support services in Kent. HMRC enquiry, HMRC investigation, tax investigation support, HMRC compliance.',
            name: 'HMRC Enquiry Investigation Support',
            url: 'https://fileeasyaccountancy.co.uk/services/advisory/hmrc-enquiry-investigation-support/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'HMRC Enquiry Support Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enquiry Review and Assessment' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Response Preparation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Communication with HMRC' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Negotiation and Settlement' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="HMRC Enquiry Investigation Support"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;ve received an HMRC enquiry or investigation, you&apos;re not alone—thousands of businesses and individuals face HMRC enquiries each year, and having the right support makes all the difference. HMRC enquiries are compliance checks where HMRC reviews your tax returns, records, and accounts to ensure you&apos;re paying the right amount of tax and complying with tax law. HMRC investigations are more formal and detailed reviews, typically triggered by concerns about tax compliance, errors, or suspected tax evasion, and can result in additional tax, penalties, and interest. HMRC enquiry and investigation support helps businesses and individuals respond to HMRC enquiries, provide required information, understand their rights, and minimise additional tax, penalties, and interest (
          <a href="https://www.gov.uk/tax-compliance-checks" target="_blank" rel="noopener noreferrer">
            gov.uk Tax Compliance Checks
          </a>
          ).
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>HMRC enquiries review your tax affairs</strong> — HMRC checks tax returns, records, and accounts to ensure correct tax is paid
            </li>
            <li>
              <strong>Investigations are more serious</strong> — Formal, detailed reviews that can result in additional tax, penalties, and interest
            </li>
            <li>
              <strong>Professional support helps minimise impact</strong> — Understanding your rights, responding appropriately, and negotiating settlements can reduce additional tax and penalties
            </li>
            <li>
              <strong>Early action is important</strong> — Responding promptly and professionally helps resolve enquiries more quickly and favourably
            </li>
          </ul>
        </div>

        <p>
          The problem is most people don&apos;t know how to handle HMRC enquiries or investigations effectively. They don&apos;t understand their rights, struggle to respond appropriately, don&apos;t know what information to provide, or find the process stressful and overwhelming. That causes problems—paying more tax than necessary, higher penalties, longer investigations, stress and worry, and potential damage to business reputation.
        </p>

        <p>
          We provide HMRC enquiry and investigation support services for businesses and individuals across Kent: enquiry review and assessment (reviewing HMRC correspondence, understanding what HMRC is checking, assessing the situation, and identifying potential issues), response preparation (preparing professional responses to HMRC, gathering required information and records, and ensuring responses are complete and accurate), record gathering and organisation (gathering and organising all required records, documents, and information to respond to HMRC requests), communication with HMRC (communicating with HMRC on your behalf, handling queries, and ensuring professional communication throughout), rights and obligations advice (explaining your rights and obligations during enquiries, helping you understand what HMRC can and cannot do, and ensuring fair treatment), negotiation and settlement (negotiating settlements with HMRC where appropriate, minimising additional tax and penalties, and reaching fair resolutions), representation and support (representing you during HMRC meetings, interviews, and enquiries, providing ongoing support throughout the process), and appeal support (providing support for appeals if you disagree with HMRC decisions, helping prepare appeals, and representing you during appeals). Whether you&apos;re a business in Medway facing an HMRC enquiry, an individual in Maidstone under HMRC investigation, or a company in Canterbury needing tax investigation support, we&apos;ll provide your HMRC enquiry and investigation support services that work. No confusion, no unnecessary penalties—just professional support that helps you handle HMRC enquiries effectively and minimise impact.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Understand your situation</strong> — We&apos;ll review HMRC correspondence and assess the situation, helping you understand what&apos;s being checked and what&apos;s at stake. Understanding reduces stress.
          </li>
          <li>
            <strong>Respond professionally</strong> — We&apos;ll prepare professional responses to HMRC, ensuring you provide the right information in the right way. Professional responses improve outcomes.
          </li>
          <li>
            <strong>Minimise additional tax and penalties</strong> — We&apos;ll help negotiate settlements and minimise additional tax, penalties, and interest where possible. Minimising impact saves money.
          </li>
          <li>
            <strong>Protect your rights</strong> — We&apos;ll ensure you understand your rights and obligations, helping you get fair treatment during enquiries. Rights protection ensures fairness.
          </li>
          <li>
            <strong>Reduce stress and worry</strong> — We&apos;ll handle communication with HMRC and provide ongoing support, reducing stress and worry. Support reduces anxiety.
          </li>
          <li>
            <strong>Resolve enquiries efficiently</strong> — We&apos;ll help resolve enquiries as quickly and favourably as possible, minimising disruption to your business or life. Efficient resolution saves time.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for HMRC enquiry and investigation support:</strong>
        </p>
        <ol>
          <li>
            <strong>Initial consultation</strong> — We chat about your situation: what HMRC correspondence you&apos;ve received, what type of enquiry or investigation it is, what concerns you have, what your current situation is, and what help you need. Understanding your situation helps us provide appropriate support.
          </li>
          <li>
            <strong>Enquiry review and assessment</strong> — We review and assess the enquiry:
            <ul>
              <li>
                <strong>Correspondence review</strong> — We review all HMRC correspondence, understanding what HMRC is checking and what information they&apos;re requesting.
              </li>
              <li>
                <strong>Enquiry type identification</strong> — We identify the type of enquiry (compliance check, aspect enquiry, full enquiry, investigation, etc.) and what it means.
              </li>
              <li>
                <strong>Situation assessment</strong> — We assess your situation, identifying potential issues, concerns, and areas that may need attention.
              </li>
              <li>
                <strong>Risk assessment</strong> — We assess the risk level and potential outcomes, helping you understand what&apos;s at stake.
              </li>
            </ul>
            Enquiry review provides clarity.
          </li>
          <li>
            <strong>Rights and obligations advice</strong> — We explain your rights and obligations:
            <ul>
              <li>
                <strong>Your rights</strong> — We explain your rights during HMRC enquiries (right to representation, right to appeal, right to fair treatment, etc.).
              </li>
              <li>
                <strong>Your obligations</strong> — We explain your obligations (cooperating with HMRC, providing information, responding to requests, etc.).
              </li>
              <li>
                <strong>HMRC powers</strong> — We explain what HMRC can and cannot do, helping you understand the process.
              </li>
              <li>
                <strong>Fair treatment</strong> — We ensure you understand how to ensure fair treatment throughout the enquiry.
              </li>
            </ul>
            Rights and obligations advice provides confidence.
          </li>
          <li>
            <strong>Record gathering and organisation</strong> — We gather and organise records:
            <ul>
              <li>
                <strong>Required records identification</strong> — We identify what records and documents HMRC is requesting.
              </li>
              <li>
                <strong>Record gathering</strong> — We help gather all required records, documents, and information.
              </li>
              <li>
                <strong>Record organisation</strong> — We organise records professionally, making them easy to review and submit.
              </li>
              <li>
                <strong>Record completeness check</strong> — We check that all required records are available and complete.
              </li>
            </ul>
            Record gathering ensures completeness.
          </li>
          <li>
            <strong>Response preparation</strong> — We prepare responses:
            <ul>
              <li>
                <strong>Response drafting</strong> — We draft professional responses to HMRC, ensuring responses are clear, complete, and accurate.
              </li>
              <li>
                <strong>Information compilation</strong> — We compile all required information and supporting documents.
              </li>
              <li>
                <strong>Response review</strong> — We review responses for accuracy, completeness, and appropriateness before submission.
              </li>
              <li>
                <strong>Response submission</strong> — We submit responses to HMRC on your behalf if needed, ensuring timely submission.
              </li>
            </ul>
            Response preparation ensures professionalism.
          </li>
          <li>
            <strong>Communication with HMRC</strong> — We communicate with HMRC:
            <ul>
              <li>
                <strong>Ongoing communication</strong> — We handle ongoing communication with HMRC, responding to queries and requests professionally.
              </li>
              <li>
                <strong>Meeting preparation</strong> — We prepare you for any HMRC meetings or interviews, ensuring you&apos;re ready.
              </li>
              <li>
                <strong>Meeting representation</strong> — We represent you during HMRC meetings if needed, ensuring professional representation.
              </li>
              <li>
                <strong>Query handling</strong> — We handle HMRC queries and requests, ensuring timely and appropriate responses.
              </li>
            </ul>
            Communication ensures professionalism.
          </li>
          <li>
            <strong>Negotiation and settlement</strong> — We negotiate where appropriate:
            <ul>
              <li>
                <strong>Settlement assessment</strong> — We assess whether settlement is appropriate and what settlement terms might be reasonable.
              </li>
              <li>
                <strong>Negotiation</strong> — We negotiate with HMRC on your behalf, working to minimise additional tax, penalties, and interest.
              </li>
              <li>
                <strong>Settlement agreement</strong> — We help reach settlement agreements where appropriate, ensuring fair terms.
              </li>
              <li>
                <strong>Payment arrangements</strong> — We help arrange payment plans if needed, ensuring manageable payment terms.
              </li>
            </ul>
            Negotiation minimises impact.
          </li>
          <li>
            <strong>Ongoing support</strong> — We provide ongoing support:
            <ul>
              <li>
                <strong>Progress monitoring</strong> — We monitor enquiry progress, keeping you informed of developments.
              </li>
              <li>
                <strong>Ongoing advice</strong> — We provide ongoing advice as the enquiry progresses, helping you make informed decisions.
              </li>
              <li>
                <strong>Stress management</strong> — We provide support to help manage stress and worry during the enquiry.
              </li>
              <li>
                <strong>Resolution support</strong> — We provide support until the enquiry is resolved.
              </li>
            </ul>
            Ongoing support provides peace of mind.
          </li>
          <li>
            <strong>Appeal support</strong> — We provide appeal support if needed:
            <ul>
              <li>
                <strong>Appeal assessment</strong> — We assess whether you have grounds for appeal and whether appeal is appropriate.
              </li>
              <li>
                <strong>Appeal preparation</strong> — We help prepare appeals, ensuring appeals are well-founded and properly presented.
              </li>
              <li>
                <strong>Appeal representation</strong> — We represent you during appeals, ensuring professional representation.
              </li>
              <li>
                <strong>Appeal resolution</strong> — We support you through the appeal process until resolution.
              </li>
            </ul>
            Appeal support protects your interests.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What HMRC enquiry and investigation support includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Enquiry review and assessment (correspondence review, enquiry type identification, situation assessment, risk assessment)</li>
            <li>Rights and obligations advice (your rights, your obligations, HMRC powers, fair treatment)</li>
            <li>Record gathering and organisation (required records identification, record gathering, record organisation, record completeness check)</li>
            <li>Response preparation (response drafting, information compilation, response review, response submission)</li>
            <li>Communication with HMRC (ongoing communication, meeting preparation, meeting representation, query handling)</li>
            <li>Negotiation and settlement (settlement assessment, negotiation, settlement agreement, payment arrangements)</li>
            <li>Ongoing support (progress monitoring, ongoing advice, stress management, resolution support)</li>
            <li>Appeal support (appeal assessment, appeal preparation, appeal representation, appeal resolution)</li>
          </ul>
        </div>

        <p>
          We provide comprehensive HMRC enquiry and investigation support services, from initial assessment to resolution. The key is understanding your situation, protecting your rights, responding professionally, and minimising impact.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Enquiry type and complexity</strong> — Simple compliance checks vs. complex investigations affects time and expertise required significantly.
          </li>
          <li>
            <strong>Scope of enquiry</strong> — Limited aspect enquiries vs. full enquiries or investigations affects time required.
          </li>
          <li>
            <strong>Service scope</strong> — Basic response support vs. comprehensive service (representation, negotiation, appeals) affects cost.
          </li>
          <li>
            <strong>Duration</strong> — Short enquiries resolved quickly vs. long-running investigations affects total cost.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Initial consultation and assessment (one-off):</strong> £200–£500 (includes enquiry review, situation assessment, rights and obligations advice)
          </li>
          <li>
            <strong>Response preparation and submission (one-off):</strong> £500–£1,500+ (includes response drafting, record gathering, response preparation, submission)
          </li>
          <li>
            <strong>Ongoing enquiry support (hourly or fixed fee):</strong> £100–£300+ per hour (depending on complexity) or £1,000–£5,000+ for complete enquiry support (depending on enquiry type and duration)
          </li>
          <li>
            <strong>Comprehensive HMRC enquiry support (full service, from start to resolution):</strong> £2,000–£10,000+ (depending on enquiry type, complexity, duration, and whether settlement or appeal is required)
          </li>
          <li>
            <strong>Appeal support (if required):</strong> £1,500–£5,000+ (depending on appeal complexity and duration)
          </li>
        </ul>

        <p>
          <strong>Why HMRC enquiry support costs what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Tax expertise</strong> — HMRC enquiry support requires expertise in tax law, HMRC procedures, enquiry processes, and negotiation, which is complex and requires specialist knowledge.
          </li>
          <li>
            <strong>Time required</strong> — Enquiry review, response preparation, communication, negotiation, and ongoing support require significant time.
          </li>
          <li>
            <strong>Value provided</strong> — HMRC enquiry support helps minimise additional tax, penalties, and interest, often saving far more than the cost of support, providing substantial value.
          </li>
          <li>
            <strong>Stress reduction</strong> — Professional support reduces stress and worry, providing peace of mind during what can be a difficult time.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> HMRC enquiries and investigations vary significantly in duration. Simple compliance checks may be resolved in weeks, while complex investigations can take months or years. We work to resolve enquiries as efficiently as possible while ensuring thoroughness and protecting your interests.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced upon completion of work, in stages for longer enquiries, or monthly for ongoing support. Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes enquiry review, response preparation, communication with HMRC, negotiation, and ongoing support. Additional services (specialist tax advice, complex appeals, etc.) may be charged separately if not included in standard service.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For businesses and individuals in Kent, whether you&apos;re a business in Medway facing an HMRC enquiry, an individual in Maidstone under HMRC investigation, or a company in Canterbury needing tax investigation support, professional HMRC enquiry support helps you handle enquiries effectively. Many Kent businesses and individuals don&apos;t know how to handle HMRC enquiries or investigations effectively, leading to unnecessary tax, penalties, and stress. We help local businesses and individuals understand their situation, respond professionally, protect their rights, minimise impact, and resolve enquiries efficiently.
        </p>

        <p>
          <strong>Common Kent HMRC enquiry scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Business compliance checks</strong> — Businesses facing HMRC compliance checks on tax returns, VAT returns, or accounts.
          </li>
          <li>
            <strong>Self-assessment enquiries</strong> — Individuals facing HMRC enquiries on self-assessment tax returns.
          </li>
          <li>
            <strong>VAT investigations</strong> — Businesses facing HMRC investigations into VAT returns or VAT compliance.
          </li>
          <li>
            <strong>Corporation tax enquiries</strong> — Companies facing HMRC enquiries into corporation tax returns or tax affairs.
          </li>
          <li>
            <strong>Random checks</strong> — Businesses or individuals selected for random HMRC compliance checks.
          </li>
          <li>
            <strong>Targeted investigations</strong> — Businesses or individuals subject to targeted HMRC investigations.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses and individuals are dealing with. Enquiry review, response preparation, communication with HMRC, negotiation—we&apos;ll provide your HMRC enquiry and investigation support services that help you handle enquiries effectively and minimise impact.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="HMRC Enquiry Investigation Support - Frequently Asked Questions"
          subtitle="Common questions about HMRC enquiries, investigations, and tax compliance checks"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/core/audit-ready-bookkeeping-hmrc-companies-house/">Audit Ready Bookkeeping HMRC Companies House</Link> — Audit ready bookkeeping services
            </li>
            <li>
              <Link href="/services/tax/tax-planning-review-forecast/">Tax Planning Review Forecast</Link> — Tax planning services
            </li>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Sole Traders</Link> — Self-assessment services
            </li>
          </ul>
          <p>
            <Link href="/services/advisory/" className="font-semibold">
              View all advisory services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with an HMRC enquiry or investigation?" description="Don't face HMRC enquiries alone or risk unnecessary tax and penalties. We'll help you understand your situation, respond professionally, protect your rights, and minimise impact. No confusion, no unnecessary penalties—just professional support that helps you handle HMRC enquiries effectively and minimise impact." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with an HMRC enquiry or investigation?" />
    </>
  );
}

