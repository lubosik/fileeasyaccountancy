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
  title: 'Business Structure Review Services in Kent | File Easy Accountancy',
  description: 'Expert business structure review services in Kent. Sole trader vs limited company, business structure UK, business structure advice, limited company vs sole trader. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/business-structure-review/',
  },
  openGraph: {
    title: 'Business Structure Review Services in Kent | File Easy Accountancy',
    description: 'Expert business structure review services in Kent. Sole trader vs limited company, business structure UK, business structure advice, limited company vs sole trader.',
    url: 'https://fileeasyaccountancy.co.uk/services/business-structure-review/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the best business structure for me?',
    answer: 'The best business structure for you depends on your specific situation, including: profit levels (limited companies may be more tax-efficient for higher profits, sole traders may be better for lower profits), personal liability concerns (limited companies provide limited liability protection, sole traders have unlimited liability), tax efficiency (limited companies pay corporation tax at 19-25%, sole traders pay income tax at 20-45% plus National Insurance), administrative capacity (limited companies have more administrative requirements, sole traders have simpler requirements), and business growth plans (limited companies can have multiple directors and shareholders, sole traders are single-person businesses). It\'s worth getting professional advice to understand which structure is best for your specific circumstances.',
  },
  {
    question: 'What is the difference between sole trader and limited company?',
    answer: 'The main differences between sole trader and limited company are: liability (limited companies provide limited liability protection for owners\' personal assets, while sole traders have unlimited liability—personal assets are at risk), tax treatment (limited companies pay corporation tax on profits at 19-25%, while sole traders pay income tax on profits at 20-45% plus National Insurance), legal status (limited companies are separate legal entities, while sole traders are the same legal entity as the business), administration (limited companies have more administrative requirements—annual accounts, confirmation statements, company records, corporation tax returns—while sole traders have simpler requirements—self-assessment only), and business structure (limited companies can have multiple directors and shareholders, while sole traders are single-person businesses). It\'s worth getting professional advice to understand which structure is best for your situation.',
  },
  {
    question: 'Should I be a sole trader or limited company?',
    answer: 'Whether you should be a sole trader or limited company depends on your specific situation: sole traders may be better if you have lower profits (simpler administration, no corporation tax), want simpler administration (self-assessment only, no Companies House requirements), are a single-person business with no growth plans, and want to avoid company compliance requirements. Limited companies may be better if you have higher profits (corporation tax at 19-25% may be more tax-efficient than income tax at 20-45%), want limited liability protection (personal assets protected), plan to grow and take on partners or investors, and can handle administrative requirements (annual accounts, confirmation statements, company records). It\'s worth getting professional advice to understand which structure is best for your specific circumstances and goals.',
  },
  {
    question: 'What are the tax differences between sole trader and limited company?',
    answer: 'Tax differences between sole trader and limited company are: sole traders pay income tax on profits (20% on income £12,571-£50,270, 40% on income £50,271-£125,140, 45% on income above £125,140) plus Class 2 National Insurance (£3.45 per week in 2024/25) and Class 4 National Insurance (9% on profits £12,570-£50,270, 2% on profits above £50,270), with personal allowances and tax planning opportunities. Limited companies pay corporation tax on profits (19% for small companies with profits up to £50,000, 25% for larger companies with profits above £250,000, marginal relief for profits £50,000-£250,000) plus income tax and National Insurance on salary/dividends taken from company, with tax planning opportunities (salary vs dividends, tax-efficient extraction, pension contributions). Limited companies can be more tax-efficient for higher profits, but sole traders may be better for lower profits. It\'s worth getting professional advice to understand tax implications for your specific situation.',
  },
  {
    question: 'What are the advantages of a limited company?',
    answer: 'Advantages of a limited company include: limited liability protection (personal assets are protected if company has financial problems, subject to certain exceptions like personal guarantees), tax efficiency for higher profits (corporation tax at 19-25% vs income tax rates up to 45% for sole traders), business credibility (limited companies may appear more established and credible to customers, suppliers, and investors), growth potential (limited companies can have multiple directors and shareholders, raise investment, issue shares, attract investors), tax planning opportunities (salary vs dividends, tax-efficient extraction, pension contributions, tax planning for extraction), and separate legal entity (company is separate from owners, can own assets, enter contracts, sue and be sued in its own name). It\'s worth getting professional advice to understand if limited company is right for your situation.',
  },
  {
    question: 'What are the disadvantages of a limited company?',
    answer: 'Disadvantages of a limited company include: more administrative requirements (annual accounts filing with Companies House, confirmation statements, company records maintenance, corporation tax returns, PAYE and VAT if applicable), higher compliance costs (accountant fees, Companies House fees, compliance time and effort), public disclosure (company information is publicly available on Companies House, including accounts, director details, shareholder details), less flexibility (company structure less flexible than sole trader, changes require formal processes), and tax on extraction (income tax and National Insurance on salary/dividends taken from company, in addition to corporation tax on profits). It\'s worth getting professional advice to understand if limited company disadvantages outweigh advantages for your situation.',
  },
  {
    question: 'When should I convert from sole trader to limited company?',
    answer: 'You should consider converting from sole trader to limited company when: your profits are high enough that corporation tax (19-25%) would be more tax-efficient than income tax (20-45%) plus National Insurance, you want limited liability protection (to protect personal assets from business risks), you plan to grow and take on partners or investors (limited companies can have multiple directors and shareholders), you want to build business credibility (limited companies may appear more established), you can handle administrative requirements (annual accounts, confirmation statements, company records), or you want tax planning opportunities (salary vs dividends, tax-efficient extraction). However, conversion involves costs (company formation, asset transfer, compliance setup) and ongoing administrative requirements. It\'s worth getting professional advice to understand if and when conversion makes sense for your situation.',
  },
  {
    question: 'How do I change business structure?',
    answer: 'To change business structure (e.g., from sole trader to limited company), you need to: assess whether change makes sense (considering tax, liability, administration, costs, benefits), form new company (if converting to limited company, register with Companies House, typically £12 online, takes 24 hours), transfer assets (transfer business assets from sole trader to limited company, including property, equipment, goodwill, stocks, considering tax implications and valuations), notify HMRC (notify HMRC of structure change, register for corporation tax if converting to limited company, close self-assessment if converting from sole trader), set up compliance (set up compliance for new structure—annual accounts, confirmation statements, company records if limited company), notify customers and suppliers (notify customers and suppliers of structure change, update contracts, invoices, bank accounts), and update business details (update business name, bank accounts, insurance, contracts, websites, marketing materials). It\'s worth getting professional help to ensure structure change is done correctly and you understand implications.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Core', href: '/services/core' },
  { label: 'Business Structure Review', href: '/services/core/business-structure-review' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function BusinessStructureReviewPage() {
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
            serviceType: 'Business Structure Review',
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
            description: 'Expert business structure review services in Kent. Sole trader vs limited company, business structure UK, business structure advice, limited company vs sole trader.',
            name: 'Business Structure Review',
            url: 'https://fileeasyaccountancy.co.uk/services/core/business-structure-review/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Business Structure Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structure Comparison' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Analysis' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Liability Assessment' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structure Recommendation' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Business Structure Review"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re starting a business or thinking about changing your business structure, choosing the right structure matters—and getting it wrong can affect your tax, liability, and business growth. Limited companies provide limited liability protection for owners&apos; personal assets, meaning personal assets are protected if the company has financial problems, while sole traders have unlimited liability (
          <a href="https://www.gov.uk/set-up-business" target="_blank" rel="noopener noreferrer">
            gov.uk set up business
          </a>
          ). Tax treatment differs: limited companies pay corporation tax on profits (currently 19% for small companies, 25% for larger companies from April 2023), while sole traders pay income tax and National Insurance on profits (income tax rates 20%, 40%, 45% depending on income, plus Class 2 and Class 4 National Insurance). The decision between sole trader and limited company depends on factors including profit levels, personal liability concerns, tax efficiency, administrative capacity, and business growth plans.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Limited companies provide limited liability protection</strong> — Personal assets are protected if the company has financial problems, while sole traders have unlimited liability
            </li>
            <li>
              <strong>Tax treatment differs significantly</strong> — Limited companies pay corporation tax (19-25%), while sole traders pay income tax (20-45%) plus National Insurance
            </li>
            <li>
              <strong>Administrative requirements differ</strong> — Limited companies have more requirements (annual accounts, confirmation statements, company records), while sole traders have simpler requirements (self-assessment only)
            </li>
            <li>
              <strong>The right structure depends on your situation</strong> — Profit levels, liability concerns, tax efficiency, administrative capacity, and growth plans all matter
            </li>
          </ul>
        </div>

        <p>
          The problem is most people don&apos;t understand the differences between business structures or how to choose the right one for their situation. They don&apos;t understand tax implications, don&apos;t realise liability differences, don&apos;t know when to change structure, or struggle to compare options. That causes problems—paying more tax than necessary, exposing personal assets to business risks, missing growth opportunities, choosing the wrong structure for their situation, and stress from trying to figure it out.
        </p>

        <p>
          We handle business structure reviews for businesses across Kent: structure comparison (comparing sole trader vs limited company, including tax, liability, administration, and growth implications), tax analysis (analysing tax implications for each structure, including income tax vs corporation tax, National Insurance, and overall tax efficiency), liability assessment (assessing liability implications, including limited liability protection vs unlimited liability, and personal asset protection), administrative review (reviewing administrative requirements for each structure, including compliance obligations, record-keeping, and ongoing maintenance), growth planning (considering business growth plans and how structure affects growth, investment, and expansion opportunities), structure recommendation (providing a recommendation on the best structure for your specific situation, based on your circumstances and goals), and structure change support (helping you change business structure if needed, including sole trader to limited company conversion, and understanding implications of changes). Whether you&apos;re starting a business in Medway needing structure advice, a sole trader in Maidstone considering converting to limited company, or a business in Canterbury wanting a structure review, we&apos;ll handle your business structure review that works. No confusion, no wrong choices—just clear advice that helps you choose the right structure for your situation.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Understand your options</strong> — We&apos;ll compare sole trader vs limited company, explaining tax, liability, administration, and growth implications so you understand your options. Understanding options helps you make informed decisions.
          </li>
          <li>
            <strong>Choose the right structure</strong> — We&apos;ll provide a recommendation on the best structure for your specific situation, based on your circumstances, goals, and plans. Right structure optimises tax and liability.
          </li>
          <li>
            <strong>Save money on tax</strong> — We&apos;ll help you understand tax implications and choose a structure that&apos;s tax-efficient for your situation. Tax efficiency saves money.
          </li>
          <li>
            <strong>Protect your personal assets</strong> — We&apos;ll help you understand liability implications and choose a structure that protects your personal assets if appropriate. Asset protection reduces risk.
          </li>
          <li>
            <strong>Plan for growth</strong> — We&apos;ll consider your business growth plans and how structure affects growth, investment, and expansion opportunities. Growth planning supports business development.
          </li>
          <li>
            <strong>Make informed decisions</strong> — Having professional advice on business structure helps you make informed decisions based on your specific situation. Informed decisions prevent costly mistakes.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for business structure review:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: whether you&apos;re starting a new business or reviewing an existing structure, what your current structure is (if existing), what your business does, what your profit levels are (or expected to be), what your growth plans are, what your concerns are (tax, liability, administration), and what you want to achieve. Understanding your situation helps us tailor advice.
          </li>
          <li>
            <strong>Current structure assessment</strong> — We assess your current structure (if existing):
            <ul>
              <li>
                <strong>Structure identification</strong> — We identify your current business structure (sole trader, limited company, partnership, etc.).
              </li>
              <li>
                <strong>Current compliance review</strong> — We review your current compliance obligations (tax returns, accounts, records) and how well you&apos;re meeting them.
              </li>
              <li>
                <strong>Current tax analysis</strong> — We analyse your current tax situation (tax paid, tax efficiency, tax planning opportunities).
              </li>
              <li>
                <strong>Current issues identification</strong> — We identify any issues or concerns with your current structure (tax inefficiency, liability exposure, administrative burden, growth limitations).
              </li>
            </ul>
            Current structure assessment identifies starting point.
          </li>
          <li>
            <strong>Structure comparison</strong> — We compare business structure options:
            <ul>
              <li>
                <strong>Sole trader analysis</strong> — We analyse sole trader structure (tax treatment—income tax and National Insurance, liability—unlimited liability, administration—self-assessment only, growth—single-person business, setup—simple, no registration required).
              </li>
              <li>
                <strong>Limited company analysis</strong> — We analyse limited company structure (tax treatment—corporation tax, liability—limited liability, administration—annual accounts, confirmation statements, company records, corporation tax returns, growth—can have multiple directors and shareholders, setup—Companies House registration required).
              </li>
              <li>
                <strong>Partnership analysis</strong> — We analyse partnership structure (if applicable, including general partnerships, limited partnerships, LLPs).
              </li>
              <li>
                <strong>Comparison summary</strong> — We provide a comparison summary highlighting key differences, advantages, and disadvantages of each structure.
              </li>
            </ul>
            Structure comparison helps you understand options.
          </li>
          <li>
            <strong>Tax analysis</strong> — We analyse tax implications:
            <ul>
              <li>
                <strong>Sole trader tax</strong> — We calculate tax implications for sole trader structure (income tax at 20%, 40%, 45% depending on income, plus Class 2 National Insurance (£3.45 per week in 2024/25) and Class 4 National Insurance (9% on profits between £12,570-£50,270, 2% on profits above £50,270), personal allowances, and tax planning opportunities).
              </li>
              <li>
                <strong>Limited company tax</strong> — We calculate tax implications for limited company structure (corporation tax at 19% for small companies (profits up to £50,000), 25% for larger companies (profits above £250,000), marginal relief for profits between £50,000-£250,000, plus income tax and National Insurance on salary/dividends taken from company, and tax planning opportunities).
              </li>
              <li>
                <strong>Tax efficiency comparison</strong> — We compare tax efficiency between structures, showing which structure is more tax-efficient for your specific profit levels and circumstances.
              </li>
              <li>
                <strong>Tax planning opportunities</strong> — We identify tax planning opportunities for each structure (salary vs dividends, tax-efficient extraction, pension contributions, etc.).
              </li>
            </ul>
            Tax analysis shows tax implications clearly.
          </li>
          <li>
            <strong>Liability assessment</strong> — We assess liability implications:
            <ul>
              <li>
                <strong>Sole trader liability</strong> — We explain sole trader liability (unlimited liability—personal assets are at risk if business has financial problems, personal liability for business debts, no separation between personal and business assets).
              </li>
              <li>
                <strong>Limited company liability</strong> — We explain limited company liability (limited liability—personal assets are protected (subject to certain exceptions like personal guarantees), company is separate legal entity, personal assets separate from company assets).
              </li>
              <li>
                <strong>Risk assessment</strong> — We assess your personal liability risk based on your business type, activities, and circumstances.
              </li>
              <li>
                <strong>Asset protection</strong> — We assess how structure affects protection of your personal assets (home, savings, investments, etc.).
              </li>
            </ul>
            Liability assessment shows liability implications clearly.
          </li>
          <li>
            <strong>Administrative review</strong> — We review administrative requirements:
            <ul>
              <li>
                <strong>Sole trader administration</strong> — We review sole trader administration (self-assessment tax returns annually, simple record-keeping, no Companies House requirements, minimal compliance obligations).
              </li>
              <li>
                <strong>Limited company administration</strong> — We review limited company administration (annual accounts filing with Companies House within 9 months of year end, confirmation statements at least once per year, company records maintenance—register of directors, shareholders, persons with significant control, corporation tax returns to HMRC, PAYE and VAT if applicable).
              </li>
              <li>
                <strong>Administrative burden comparison</strong> — We compare administrative burden between structures, showing time, cost, and complexity differences.
              </li>
              <li>
                <strong>Administrative capacity assessment</strong> — We assess your capacity to handle administrative requirements (time, expertise, resources, support available).
              </li>
            </ul>
            Administrative review shows administrative implications clearly.
          </li>
          <li>
            <strong>Growth planning</strong> — We consider growth implications:
            <ul>
              <li>
                <strong>Growth opportunities</strong> — We consider how structure affects growth opportunities (raising investment, taking on partners, expanding business, scaling operations).
              </li>
              <li>
                <strong>Investment considerations</strong> — We consider how structure affects ability to raise investment (limited companies can have multiple shareholders, issue shares, attract investors, while sole traders are single-person businesses).
              </li>
              <li>
                <strong>Partnership opportunities</strong> — We consider how structure affects ability to take on partners (limited companies can have multiple directors and shareholders, partnerships can have multiple partners).
              </li>
              <li>
                <strong>Expansion planning</strong> — We consider how structure affects business expansion (hiring employees, opening new locations, diversifying activities).
              </li>
            </ul>
            Growth planning shows growth implications clearly.
          </li>
          <li>
            <strong>Structure recommendation</strong> — We provide a recommendation:
            <ul>
              <li>
                <strong>Recommendation rationale</strong> — We provide a clear recommendation on the best structure for your specific situation, explaining why this structure is best for you.
              </li>
              <li>
                <strong>Key factors</strong> — We highlight key factors that influenced the recommendation (tax efficiency, liability protection, administrative capacity, growth plans).
              </li>
              <li>
                <strong>Comparison summary</strong> — We provide a summary comparing recommended structure vs alternatives, showing advantages of recommended structure.
              </li>
              <li>
                <strong>Next steps</strong> — We outline next steps if you want to implement the recommendation (company formation if converting to limited company, structure change process, compliance setup).
              </li>
            </ul>
            Structure recommendation provides clear guidance.
          </li>
          <li>
            <strong>Structure change support (if applicable)</strong> — We provide support if you want to change structure:
            <ul>
              <li>
                <strong>Change process</strong> — We explain the process for changing structure (e.g., sole trader to limited company conversion, including company formation, asset transfer, tax implications, compliance setup).
              </li>
              <li>
                <strong>Change implications</strong> — We explain implications of changing structure (tax, liability, administration, timing, costs).
              </li>
              <li>
                <strong>Change support</strong> — We provide support for structure changes (company formation, asset transfer, compliance setup, ongoing support).
              </li>
            </ul>
            Structure change support helps you make changes smoothly.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What business structure review includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Current structure assessment (if existing)</li>
            <li>Structure comparison (sole trader vs limited company vs partnerships)</li>
            <li>Tax analysis (tax implications and efficiency for each structure)</li>
            <li>Liability assessment (liability implications and asset protection)</li>
            <li>Administrative review (administrative requirements and burden)</li>
            <li>Growth planning (growth implications and opportunities)</li>
            <li>Structure recommendation (best structure for your situation)</li>
            <li>Structure change support (if applicable)</li>
          </ul>
        </div>

        <p>
          We handle all aspects of business structure review, from initial assessment to structure recommendation and change support. The key is understanding your situation, comparing options clearly, analysing tax and liability implications, and providing a recommendation that&apos;s right for you.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Review scope</strong> — Basic review (structure comparison, basic recommendation) vs. comprehensive review (detailed tax analysis, liability assessment, growth planning, structure recommendation, change support) affects scope and time.
          </li>
          <li>
            <strong>Business complexity</strong> — Simple businesses vs. complex businesses (multiple income streams, complex tax situations, partnership considerations) affects time.
          </li>
          <li>
            <strong>Change support</strong> — Review only vs. review plus structure change support (company formation, asset transfer, compliance setup) affects scope and cost.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Basic business structure review (structure comparison, basic recommendation):</strong> £150–£300 (includes structure comparison, basic tax analysis, structure recommendation, basic advice)
          </li>
          <li>
            <strong>Standard business structure review (comprehensive analysis, detailed recommendation):</strong> £300–£600 (includes comprehensive structure comparison, detailed tax analysis, liability assessment, administrative review, growth planning, structure recommendation, detailed advice)
          </li>
          <li>
            <strong>Comprehensive business structure review (full service, change support):</strong> £500–£1,000+ (includes comprehensive review, detailed analysis, structure recommendation, structure change support if needed—company formation, asset transfer, compliance setup)
          </li>
          <li>
            <strong>Structure change support (if needed):</strong> £200–£500+ (support for changing structure, e.g., sole trader to limited company conversion, including company formation, asset transfer, compliance setup)
          </li>
        </ul>

        <p>
          <strong>Why business structure review costs what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding business structures, tax implications, liability implications, and compliance requirements requires specialist knowledge.
          </li>
          <li>
            <strong>Time and analysis</strong> — Comprehensive structure comparison, tax analysis, liability assessment, and recommendation require time and detailed analysis.
          </li>
          <li>
            <strong>Value provided</strong> — Business structure review helps you choose the right structure, optimise tax, protect assets, and plan for growth, providing substantial value.
          </li>
          <li>
            <strong>Risk management</strong> — Choosing the right structure protects you from tax inefficiency, liability exposure, and growth limitations.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Basic structure review typically takes 1–2 weeks. Standard review typically takes 2–3 weeks. Comprehensive review typically takes 3–4 weeks. Structure change support (if needed) typically takes 4–6 weeks depending on complexity.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced on completion of review report, or in stages: initial assessment (on completion), detailed analysis (on completion), recommendation (on completion). Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes structure comparison, tax analysis, liability assessment, administrative review, growth planning, and structure recommendation. Structure change support (if requested) is typically charged separately or included in comprehensive review packages.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For businesses in Kent, whether you&apos;re starting a business in Medway needing structure advice, a sole trader in Maidstone considering converting to limited company, or a business in Canterbury wanting a structure review, business structure review helps you choose the right structure for your situation. Many Kent businesses don&apos;t understand the differences between business structures or choose the wrong structure, leading to tax inefficiency, liability exposure, or missed growth opportunities. We help local businesses understand their options, compare structures clearly, analyse tax and liability implications, and choose the right structure for their circumstances. The decision between sole trader and limited company depends on factors including profit levels, personal liability concerns, tax efficiency, administrative capacity, and business growth plans.
        </p>

        <p>
          <strong>Common Kent business structure scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>New businesses</strong> — Businesses just starting out, needing advice on choosing the right structure from the start.
          </li>
          <li>
            <strong>Sole traders considering conversion</strong> — Sole traders considering converting to limited company, needing advice on whether conversion makes sense and how to do it.
          </li>
          <li>
            <strong>Growing businesses</strong> — Growing businesses reviewing structure as they grow, needing advice on whether structure is still appropriate.
          </li>
          <li>
            <strong>Tax optimisation</strong> — Businesses wanting to optimise tax efficiency, needing advice on which structure is more tax-efficient for their situation.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses are dealing with. Structure comparison, tax analysis, liability assessment, growth planning, structure recommendation—we&apos;ll handle your business structure review that helps you choose the right structure.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Business Structure Review - Frequently Asked Questions"
          subtitle="Common questions about sole trader vs limited company, tax differences, and structure changes"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/core/company-formation-bank-setup/">Company Formation & Bank Setup</Link> — Company formation services
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning services
            </li>
            <li>
              <Link href="/services/core/companies-house-filing/">Companies House Filing</Link> — Companies House filing services
            </li>
          </ul>
          <p>
            <Link href="/services/core/" className="font-semibold">
              View all core services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with business structure review?" description="Don't risk choosing the wrong structure. We'll help you understand your options, compare structures, analyse tax and liability implications, and choose the right structure for your situation. No confusion, no wrong choices—just clear advice that helps you choose the right structure for your situation." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with business structure review?" />
    </>
  );
}

