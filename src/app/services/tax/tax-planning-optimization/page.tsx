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
  title: 'Tax Planning & Optimization Services in Kent | File Easy Accountancy',
  description: 'Expert tax planning and tax optimization services in Kent. Legitimate tax planning strategies, tax efficiency, tax saving strategies. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/tax-planning-optimization/',
  },
  openGraph: {
    title: 'Tax Planning & Optimization Services in Kent | File Easy Accountancy',
    description: 'Expert tax planning and tax optimization services in Kent. Legitimate tax planning strategies, tax efficiency, tax saving strategies.',
    url: 'https://fileeasyaccountancy.co.uk/services/tax-planning-optimization/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is tax planning?',
    answer: 'Tax planning is about structuring your finances and business to pay the right amount of tax—no more, no less—while using all the allowances, reliefs, and exemptions you\'re entitled to. It\'s legal and encouraged by HMRC when it involves legitimate strategies. Tax planning is different from tax avoidance (which is prohibited)—tax planning uses intended reliefs and allowances, while tax avoidance uses artificial schemes to avoid tax. Good tax planning saves you money legally and helps you build wealth more efficiently.',
  },
  {
    question: 'How can I reduce my tax bill legally?',
    answer: 'There are loads of legitimate ways to reduce your tax bill: use all your personal allowances (£12,570 personal allowance, marriage allowance if applicable), maximize pension contributions (tax relief at your marginal rate), use ISA allowances (£20,000 per year tax-free), claim all allowable business expenses, use capital allowances on qualifying assets, claim R&D relief if you have qualifying activities, and plan the timing of income and expenses. The key is using what you\'re entitled to—these aren\'t loopholes, they\'re intended parts of the tax system. We can help you identify what applies to your situation.',
  },
  {
    question: 'What are legitimate tax planning strategies?',
    answer: 'Legitimate tax planning strategies include: pension contributions (tax relief on contributions, tax-free growth), ISA investments (tax-free savings and investments up to £20,000 per year), business expense claims (reducing taxable profit with legitimate expenses), capital allowances (tax relief on qualifying business assets), marriage allowance (transferring personal allowance between spouses), timing strategies (planning when to receive income or make disposals), and business structure optimization (choosing the most tax-efficient business structure). All of these are intended parts of the tax system and completely legal. We can help you use them effectively.',
  },
  {
    question: 'How do I optimize my tax position?',
    answer: 'To optimize your tax position, start by reviewing your current situation: what income you have, what allowances you\'re claiming, what expenses you\'re deducting, and what reliefs you might be missing. Then develop a strategy: maximize pension contributions, use ISA allowances, claim all allowable expenses, use capital allowances, consider tax-efficient investments, and plan the timing of transactions. Implementation is key—actually make the changes (increase pension contributions, open ISAs, claim expenses, etc.). Finally, review regularly and adjust as your situation changes. We can help you through this process if you want professional guidance.',
  },
  {
    question: 'What tax allowances can I claim?',
    answer: 'There are loads of tax allowances you might be able to claim: personal allowance (£12,570 for 2024/25), marriage allowance (transfer £1,260 to spouse), dividend allowance (£500 for 2024/25), capital gains tax allowance (£3,000 for 2024/25), property allowance (£1,000 for property income), trading allowance (£1,000 for trading income), pension annual allowance (up to £60,000 or 100% of earnings), and ISA allowance (£20,000 per year). For businesses, there are capital allowances, R&D relief, and various business reliefs. The key is understanding what applies to you and claiming everything you\'re entitled to. We can help you identify what you\'re missing.',
  },
  {
    question: 'Is tax planning legal?',
    answer: 'Yes, tax planning is completely legal when it involves using legitimate allowances, reliefs, and exemptions that are built into the tax system. HMRC encourages taxpayers to use what they\'re entitled to—that\'s why these reliefs and allowances exist. Tax planning becomes illegal when it crosses into tax avoidance (using artificial schemes to avoid tax) or tax evasion (deliberately hiding income or not paying tax). The line can be blurry, but if you\'re using intended reliefs and allowances for genuine purposes, you\'re doing legitimate tax planning. If you\'re not sure, ask a qualified accountant—we can help you understand what\'s legal and what\'s not.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Tax Planning & Optimization', href: '/services/tax/tax-planning-optimization' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function TaxPlanningOptimizationPage() {
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
            serviceType: 'Tax Planning & Optimization',
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
            description: 'Expert tax planning and tax optimization services in Kent. Legitimate tax planning strategies, tax efficiency, tax saving strategies.',
            name: 'Tax Planning & Optimization',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/tax-planning-optimization/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Planning Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Personal Tax Planning Review' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Tax Planning' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comprehensive Tax Planning' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Tax Planning & Optimization"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          Tax planning is legal and encouraged by HMRC when it involves using legitimate allowances, reliefs, and exemptions. Tax planning is about structuring your finances and business to pay the right amount of tax—no more, no less—while using all the allowances and reliefs you&apos;re entitled to. Tax planning is legal and encouraged by HMRC when it involves using legitimate allowances, reliefs, and exemptions (
          <a href="https://www.gov.uk/tax-planning" target="_blank" rel="noopener noreferrer">
            gov.uk tax planning
          </a>
          ). Pension contributions receive tax relief at your marginal rate, making pensions one of the most tax-efficient ways to save for retirement. ISAs allow you to invest up to £20,000 per year tax-free, with no income tax or capital gains tax on returns.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Tax planning is legal and encouraged by HMRC</strong> — When it involves using legitimate allowances, reliefs, and exemptions that are built into the tax system
            </li>
            <li>
              <strong>Pension contributions receive tax relief</strong> — At your marginal rate (20%, 40%, or 45%), making pensions highly tax-efficient for retirement savings
            </li>
            <li>
              <strong>ISAs offer tax-free returns</strong> — You can invest up to £20,000 per year with no income tax or capital gains tax on returns
            </li>
            <li>
              <strong>Business expenses and allowances reduce tax</strong> — Legitimate business expenses, capital allowances, and tax reliefs reduce taxable profit and Corporation Tax liability
            </li>
          </ul>
        </div>

        <p>
          The problem is most people don&apos;t understand what legitimate tax planning involves. They think tax planning is dodgy or illegal, don&apos;t know what allowances they can claim, or miss opportunities to reduce tax legally. That causes problems—overpaid tax from not using available reliefs, missed opportunities for tax-efficient savings, and confusion about what&apos;s legal versus what&apos;s tax avoidance.
        </p>

        <p>
          We handle tax planning and optimization for individuals and businesses: tax review (reviewing your current tax position and identifying opportunities), allowance optimization (ensuring you claim all available allowances and reliefs), pension planning (maximizing pension contributions for tax relief), ISA planning (using ISAs for tax-free savings and investments), business tax planning (optimizing business structure, expenses, and reliefs for Corporation Tax efficiency), and tax-efficient investments (exploring tax-efficient investment vehicles like VCTs or EIS). Whether you&apos;re in Medway wanting to reduce your tax bill legally, in Maidstone with a business needing tax planning, or in Canterbury looking to optimize your tax position, we&apos;ll handle your tax planning that works. No dodgy schemes, no tax avoidance—just legitimate tax efficiency that saves you money within the rules.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Reduce your tax bill legally</strong> — Use all available allowances, reliefs, and exemptions to minimize tax within legal limits. Legitimate tax planning saves you money without risk.
          </li>
          <li>
            <strong>Maximize tax-efficient savings</strong> — Use pensions, ISAs, and other tax-efficient vehicles to build wealth with less tax. Tax-efficient savings grow faster with less tax drag.
          </li>
          <li>
            <strong>Claim all available allowances</strong> — Ensure you&apos;re claiming personal allowances, marriage allowance, capital allowances, and other reliefs you&apos;re entitled to. Missing allowances means overpaying tax.
          </li>
          <li>
            <strong>Optimize business tax position</strong> — Structure your business finances to minimize Corporation Tax legally through expenses, allowances, and reliefs. Business tax planning saves significant amounts.
          </li>
          <li>
            <strong>Plan for future tax efficiency</strong> — Consider how timing income, expenses, and disposals can optimize your tax position over time. Forward planning maximizes tax efficiency.
          </li>
          <li>
            <strong>Understand what&apos;s legal</strong> — Learn the difference between legitimate tax planning and prohibited tax avoidance. Understanding the rules helps you make informed decisions.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for tax planning and optimization:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your situation: your income sources, business structure, current tax position, financial goals, risk appetite, and what you want to achieve.
          </li>
          <li>
            <strong>Current tax position review</strong> — We review where you are now:
            <ul>
              <li>
                <strong>Income analysis</strong> — Review all income sources (employment, self-employment, property, investments, pensions, etc.)
              </li>
              <li>
                <strong>Tax liability calculation</strong> — Calculate current tax liability (Income Tax, National Insurance, Corporation Tax if applicable)
              </li>
              <li>
                <strong>Allowance and relief review</strong> — Check what allowances and reliefs you&apos;re currently claiming
              </li>
              <li>
                <strong>Gap analysis</strong> — Identify missed opportunities or unclaimed allowances
              </li>
              <li>
                <strong>Tax efficiency assessment</strong> — Review current tax efficiency and identify areas for improvement
              </li>
            </ul>
            Current position review helps us understand where you are and what opportunities exist.
          </li>
          <li>
            <strong>Tax planning strategy development</strong> — We develop a tailored tax planning strategy:
            <ul>
              <li>
                <strong>Personal allowances</strong> — Ensure you&apos;re using personal allowance, marriage allowance, and other personal reliefs efficiently
              </li>
              <li>
                <strong>Pension planning</strong> — Review pension contributions and tax relief opportunities (maximizing contributions within limits)
              </li>
              <li>
                <strong>ISA planning</strong> — Review ISA usage and opportunities for tax-free savings and investments
              </li>
              <li>
                <strong>Business structure</strong> — Review business structure and whether changes could improve tax efficiency (sole trader vs limited company, etc.)
              </li>
              <li>
                <strong>Expense optimization</strong> — Review business expenses and capital allowances to ensure maximum legitimate claims
              </li>
              <li>
                <strong>Tax-efficient investments</strong> — Explore tax-efficient investment vehicles (VCTs, EIS, SEIS) if appropriate
              </li>
            </ul>
            Strategy development creates a tailored plan to optimize your tax position legally.
          </li>
          <li>
            <strong>Implementation support</strong> — We help you implement the strategy:
            <ul>
              <li>
                <strong>Action plan</strong> — Create a clear action plan with specific steps and deadlines
              </li>
              <li>
                <strong>Documentation</strong> — Help gather documentation needed for claims (expense receipts, pension statements, etc.)
              </li>
              <li>
                <strong>Applications</strong> — Assist with applications for reliefs or allowances if needed
              </li>
              <li>
                <strong>Timing advice</strong> — Advise on timing of income, expenses, or disposals to optimize tax position
              </li>
              <li>
                <strong>Ongoing support</strong> — Provide ongoing support as you implement the strategy
              </li>
            </ul>
            Implementation support ensures the strategy is put into practice effectively.
          </li>
          <li>
            <strong>Review and monitoring</strong> — We review progress and adjust as needed:
            <ul>
              <li>
                <strong>Regular reviews</strong> — Schedule regular reviews to monitor progress and adjust strategy
              </li>
              <li>
                <strong>Tax year planning</strong> — Review tax position before year-end to optimize use of allowances and reliefs
              </li>
              <li>
                <strong>Legislative changes</strong> — Monitor tax law changes and adjust strategy accordingly
              </li>
              <li>
                <strong>Performance tracking</strong> — Track tax savings and efficiency improvements
              </li>
              <li>
                <strong>Strategy refinement</strong> — Refine strategy based on results and changing circumstances
              </li>
            </ul>
            Review and monitoring ensures the strategy continues to work and adapts to changes.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What tax planning and optimization includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Current tax position review (income analysis, tax liability calculation, allowance review, gap analysis, efficiency assessment)</li>
            <li>Strategy development (personal allowances, pension planning, ISA planning, business structure, expense optimization, tax-efficient investments)</li>
            <li>Implementation support (action plan, documentation, applications, timing advice, ongoing support)</li>
            <li>Review and monitoring (regular reviews, tax year planning, legislative monitoring, performance tracking, strategy refinement)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Key tax planning strategies:</h3>
          <h4 style={{ marginTop: '1rem' }}>Personal tax planning:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Personal allowance</strong> — Ensure you&apos;re using your personal allowance (£12,570 for 2024/25) efficiently
            </li>
            <li>
              <strong>Marriage allowance</strong> — Transfer £1,260 of personal allowance to your spouse if one earns less than the threshold
            </li>
            <li>
              <strong>Pension contributions</strong> — Maximize pension contributions for tax relief (up to £60,000 annual allowance, or 100% of earnings if lower)
            </li>
            <li>
              <strong>ISA investments</strong> — Use ISA allowance (£20,000 per year) for tax-free savings and investments
            </li>
            <li>
              <strong>Capital gains tax planning</strong> — Use annual CGT allowance (£3,000) and plan disposals to optimize tax
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Business tax planning:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Business expenses</strong> — Claim all allowable business expenses to reduce taxable profit
            </li>
            <li>
              <strong>Capital allowances</strong> — Claim capital allowances on qualifying assets (plant, machinery, equipment, vehicles, etc.)
            </li>
            <li>
              <strong>R&D relief</strong> — Claim R&D tax relief if your business has qualifying research and development activities
            </li>
            <li>
              <strong>Business structure</strong> — Consider whether sole trader, partnership, or limited company structure is most tax-efficient
            </li>
            <li>
              <strong>Salary and dividend mix</strong> — For company directors, optimize salary and dividend mix to minimize overall tax
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Investment tax planning:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>ISAs</strong> — Use ISA allowance for tax-free savings and investments (£20,000 per year)
            </li>
            <li>
              <strong>Pension contributions</strong> — Contribute to pensions for tax relief and tax-free growth
            </li>
            <li>
              <strong>Tax-efficient investments</strong> — Consider VCTs, EIS, or SEIS for additional tax reliefs (if appropriate for your risk profile)
            </li>
            <li>
              <strong>Capital gains planning</strong> — Plan asset disposals to use annual CGT allowance efficiently
            </li>
          </ul>
        </div>

        <p>
          We handle all aspects of tax planning and optimization. The key is understanding your current position, identifying legitimate opportunities, developing a tailored strategy, implementing it effectively, and reviewing regularly, so you optimize your tax position within legal limits.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Complexity of situation</strong> — Simple situations (single income source, straightforward tax) cost less than complex situations (multiple income sources, business structures, investments)
          </li>
          <li>
            <strong>Scope of planning</strong> — Comprehensive tax planning covering all aspects costs more than focused planning on specific areas
          </li>
          <li>
            <strong>Ongoing support</strong> — If you want ongoing tax planning support (regular reviews, year-end planning), this adds to the cost
          </li>
          <li>
            <strong>Business vs personal</strong> — Business tax planning (Corporation Tax, business structure) may cost more than personal tax planning
          </li>
          <li>
            <strong>Implementation complexity</strong> — If strategy implementation requires complex changes (business restructuring, investment arrangements), this affects pricing
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Personal tax planning review:</strong> £200–£500 for a one-off review of personal tax position and basic planning advice
          </li>
          <li>
            <strong>Comprehensive tax planning:</strong> £500–£1,500 for comprehensive tax planning covering all aspects (personal, business, investments)
          </li>
          <li>
            <strong>Business tax planning:</strong> £400–£1,200 for business tax planning (Corporation Tax optimization, business structure, expenses, allowances)
          </li>
          <li>
            <strong>Ongoing tax planning support:</strong> £300–£800 per year for ongoing tax planning support (quarterly reviews, year-end planning, strategy monitoring)
          </li>
          <li>
            <strong>Pension and ISA planning:</strong> £150–£400 for focused planning on pensions, ISAs, and tax-efficient savings
          </li>
        </ul>

        <p>
          <strong>Why tax planning and optimization costs what it does:</strong>
        </p>
        <ul>
          <li>Tax position review requires detailed analysis of income, expenses, allowances, and current tax liability</li>
          <li>Strategy development requires understanding tax rules, allowances, reliefs, and how they apply to your situation</li>
          <li>Implementation support requires helping you take action, gather documentation, and make changes</li>
          <li>Review and monitoring requires ongoing attention to your tax position and legislative changes</li>
          <li>Professional expertise ensures strategies are legitimate, effective, and compliant with HMRC requirements</li>
        </ul>

        <p>
          <strong>Timeline:</strong> A tax planning review typically takes 1-2 weeks from when we receive all your information. Strategy development may take 2-3 weeks depending on complexity. Implementation can happen immediately for some strategies (ISA contributions, expense claims) or take longer for complex changes (business restructuring). Ongoing reviews are typically quarterly or annually, with year-end planning in March/April before the tax year ends.
        </p>

        <p>
          <strong>Payment:</strong> Tax planning services are typically paid upfront or in installments depending on scope. Ongoing tax planning support is usually billed annually or quarterly. We&apos;ll discuss payment options when we understand your needs.
        </p>

        <p>
          <strong>No hidden fees.</strong> Tax planning price includes review, strategy development, initial implementation support, and one follow-up review. Ongoing support, complex implementation, or additional reviews are separate if you want them.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with people and businesses across Kent who want to optimize their tax position: people in Medway wanting to reduce personal tax, businesses in Maidstone needing Corporation Tax planning, and people in Canterbury looking to maximize tax-efficient savings.
        </p>

        <p>
          Kent taxpayers and businesses face the same tax rules as everyone else—but when you get proper tax planning help, you use all available allowances and reliefs, structure finances efficiently, and plan ahead to minimize tax. That&apos;s what helps Kent taxpayers and businesses save money on tax legally and build wealth more efficiently.
        </p>

        <p>
          <strong>Common Kent tax planning scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Personal tax planning</strong> — Individuals wanting to reduce Income Tax through allowances, pensions, and ISAs
          </li>
          <li>
            <strong>Business tax planning</strong> — Businesses wanting to minimize Corporation Tax through expenses, allowances, and reliefs
          </li>
          <li>
            <strong>Property investors</strong> — Property investors wanting to optimize tax on rental income and capital gains
          </li>
          <li>
            <strong>Company directors</strong> — Directors wanting to optimize salary and dividend mix for tax efficiency
          </li>
          <li>
            <strong>High earners</strong> — High earners wanting to maximize pension contributions and tax relief
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent businesses are SMEs that can benefit from tax planning (expenses, capital allowances, R&D relief)</li>
          <li>Proper tax planning helps Kent businesses minimize Corporation Tax and reinvest savings in growth</li>
          <li>Personal tax planning helps Kent individuals reduce tax and build wealth more efficiently</li>
          <li>Tax-efficient savings (pensions, ISAs) help Kent taxpayers prepare for retirement and financial goals</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent taxpayers and businesses are dealing with. Tax planning, allowance optimization, business structure, pension planning—we&apos;ll handle your tax planning that saves you money within the rules.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Tax Planning & Optimization - Frequently Asked Questions"
          subtitle="Common questions about tax planning and legitimate tax strategies"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Tax return filing where tax planning results are applied
            </li>
            <li>
              <Link href="/services/tax/corporation-tax-ct600-filing/">Corporation Tax (CT600) Filing</Link> — Corporation Tax returns where business tax planning is implemented
            </li>
            <li>
              <Link href="/services/tax/capital-gains-tax-returns/">Capital Gains Tax Returns</Link> — CGT returns where capital gains tax planning is applied
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with tax planning and optimization?" description="Don't let tax planning confusion hold you back. We'll help you reduce your tax bill legally, maximize tax-efficient savings, and optimize your tax position within the rules. No dodgy schemes, no tax avoidance—just legitimate tax efficiency that saves you money within the rules." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with tax planning and optimization?" />
    </>
  );
}

