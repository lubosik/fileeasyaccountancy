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
  title: 'High Earner Tax Planning Services in Kent | File Easy Accountancy',
  description: 'Expert tax planning for high earners in Kent. Tax efficiency for high income, pension tax relief, salary sacrifice, tax planning over £100k. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/high-earner-tax-planning/',
  },
  openGraph: {
    title: 'High Earner Tax Planning Services in Kent | File Easy Accountancy',
    description: 'Expert tax planning for high earners in Kent. Tax efficiency for high income, pension tax relief, salary sacrifice, tax planning over £100k.',
    url: 'https://fileeasyaccountancy.co.uk/services/high-earner-tax-planning/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I reduce tax on high income?',
    answer: 'There are several ways to reduce tax on high income: make pension contributions (get tax relief at your marginal rate, reducing taxable income), use salary sacrifice (exchange salary for tax-free benefits, reducing Income Tax and NI), invest in ISAs (tax-free growth and withdrawals, up to £20,000 per year), keep income below £100,000 (protect your personal allowance), claim all available tax relief (pension tax relief, gift aid, etc.), and plan your tax position annually (review opportunities before tax year-end). The most effective strategy depends on your circumstances, but pension contributions and salary sacrifice typically provide the biggest savings for high earners.',
  },
  {
    question: 'What is the tax rate for high earners in UK?',
    answer: 'High earners in the UK pay different tax rates depending on income: higher rate taxpayers (income £50,271–£125,140) pay 40% Income Tax plus National Insurance, additional rate taxpayers (income over £125,140) pay 45% Income Tax plus National Insurance. However, there\'s an effective 60% tax rate on income between £100,000 and £125,140 because the personal allowance reduces by £1 for every £2 of income over £100,000. So someone earning £120,000 effectively pays 60% tax on income between £100,000 and £125,140. That\'s why tax planning is so important for high earners—you can reduce your effective tax rate significantly with proper planning.',
  },
  {
    question: 'How much can high earners contribute to pensions?',
    answer: 'High earners can contribute up to £60,000 per year to pensions (or 100% of earnings, whichever is lower) and receive tax relief. However, if your adjusted income exceeds £260,000, your annual allowance is tapered—reduced by £1 for every £2 of adjusted income over £260,000, with a minimum of £10,000. You can also carry forward unused annual allowance from the previous three tax years if you haven\'t used it all. Pension contributions get tax relief at your marginal rate (40% for higher rate taxpayers, 45% for additional rate taxpayers), making them highly tax-efficient for high earners.',
  },
  {
    question: 'What is salary sacrifice?',
    answer: 'Salary sacrifice is an arrangement where you agree with your employer to exchange part of your salary for tax-free benefits. Common benefits include pension contributions, cycle-to-work schemes, electric cars, childcare vouchers, and health insurance. By reducing your salary, you pay less Income Tax and National Insurance, while the employer saves on employer NI. For example, if you sacrifice £10,000 of salary for pension contributions, you save Income Tax (40% or 45%) and employee NI (10% or 2%) on that amount. Salary sacrifice is one of the most tax-efficient ways for high earners to reduce tax and NI.',
  },
  {
    question: 'How do I avoid paying 60% tax?',
    answer: 'The 60% effective tax rate applies to income between £100,000 and £125,140 because your personal allowance reduces. To avoid it, you can: make pension contributions (reduce taxable income below £100,000), use salary sacrifice (reduce salary for tax-free benefits), make charitable donations with gift aid (reduce adjusted net income), defer income to another tax year (if possible), or plan bonuses strategically (contribute bonuses to pensions). The key is reducing your taxable income below £100,000 to keep your full personal allowance. For someone earning £120,000, a £20,000 pension contribution could save thousands in tax by avoiding the 60% rate.',
  },
  {
    question: 'What tax relief can high earners claim?',
    answer: 'High earners can claim several types of tax relief: pension tax relief (40% or 45% depending on tax rate, claimed through Self Assessment), gift aid on charitable donations (40% or 45% relief on donations), venture capital trust (VCT) relief (30% Income Tax relief up to £200,000 investment), enterprise investment scheme (EIS) relief (30% Income Tax relief up to £2 million investment), seed enterprise investment scheme (SEIS) relief (50% Income Tax relief up to £100,000 investment). The most common and valuable for high earners is pension tax relief, which can save thousands of pounds per year. Other reliefs depend on your investment strategy and risk tolerance.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'High Earner Tax Planning', href: '/services/tax/high-earner-tax-planning' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function HighEarnerTaxPlanningPage() {
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
            serviceType: 'High Earner Tax Planning',
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
            description: 'Expert tax planning for high earners in Kent. Tax efficiency for high income, pension tax relief, salary sacrifice, tax planning over £100k.',
            name: 'High Earner Tax Planning',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/high-earner-tax-planning/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Planning Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pension Tax Relief Planning' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salary Sacrifice Planning' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Personal Allowance Protection' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="High Earner Tax Planning"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re earning over £50,270 (higher rate threshold) or especially over £100,000, you&apos;re probably paying a lot in tax—which means tax planning becomes really important to keep more of what you earn. High earners face marginal tax rates of 40% (higher rate) or 45% (additional rate) on income above certain thresholds, plus National Insurance contributions (
          <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer">
            gov.uk Income Tax rates
          </a>
          ). The personal allowance is reduced by £1 for every £2 of income above £100,000, creating an effective 60% tax rate on income between £100,000 and £125,140. Pension contributions receive tax relief at the taxpayer&apos;s marginal rate, making them highly tax-efficient for high earners subject to higher rate or additional rate tax.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>High earners pay 40% or 45% Income Tax</strong> — Plus National Insurance, on income above £50,270 (higher rate) or £125,140 (additional rate)
            </li>
            <li>
              <strong>Personal allowance tapers above £100,000</strong> — Your allowance reduces by £1 for every £2 of income above £100,000, creating a 60% effective tax rate
            </li>
            <li>
              <strong>Pension tax relief works at your marginal rate</strong> — Higher rate taxpayers get 40% relief, additional rate taxpayers get 45% relief
            </li>
            <li>
              <strong>Salary sacrifice can reduce tax and NI</strong> — Exchanging salary for tax-free benefits like pension contributions reduces both Income Tax and National Insurance
            </li>
          </ul>
        </div>

        <p>
          The problem is most high earners don&apos;t take advantage of tax planning opportunities. They don&apos;t claim pension tax relief, don&apos;t use salary sacrifice, or don&apos;t understand how to reduce their effective tax rate. That causes problems—overpaid tax, missed tax relief opportunities, and less money in their pocket than they could have with proper planning.
        </p>

        <p>
          We handle high earner tax planning for people earning over £50,270 who want to reduce their tax bill: pension tax relief claims (claiming higher rate and additional rate pension tax relief through Self Assessment), salary sacrifice planning (setting up salary sacrifice arrangements to exchange salary for tax-free benefits), personal allowance protection (strategies to keep your personal allowance if you&apos;re earning around £100,000), pension contribution planning (maximizing pension contributions to benefit from tax relief and reduce taxable income), tax-efficient investment strategies (investing in tax-efficient vehicles like ISAs and pensions), and annual tax planning reviews (reviewing your tax position annually to optimize tax efficiency). Whether you&apos;re in Medway earning £80,000 and paying higher rate tax, in Maidstone earning £120,000 facing the 60% effective rate, or in Canterbury earning £150,000 and paying additional rate tax, we&apos;ll handle your high earner tax planning that works. No overpaid tax, no missed opportunities—just proper tax planning that keeps more money in your pocket.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Reduce your effective tax rate</strong> — Use pension contributions, salary sacrifice, and other strategies to reduce your taxable income and effective tax rate. Tax planning saves you money.
          </li>
          <li>
            <strong>Claim pension tax relief</strong> — Claim higher rate and additional rate pension tax relief you&apos;re entitled to through Self Assessment. Pension tax relief reduces your tax bill significantly.
          </li>
          <li>
            <strong>Protect your personal allowance</strong> — Keep your personal allowance if you&apos;re earning around £100,000 through strategic tax planning. Personal allowance protection saves thousands in tax.
          </li>
          <li>
            <strong>Maximize tax-efficient investments</strong> — Invest in tax-efficient vehicles like ISAs and pensions that reduce your tax liability. Tax-efficient investing builds wealth faster.
          </li>
          <li>
            <strong>Optimize salary sacrifice</strong> — Use salary sacrifice to exchange salary for tax-free benefits, reducing both Income Tax and National Insurance. Salary sacrifice saves tax and NI.
          </li>
          <li>
            <strong>Plan your tax position annually</strong> — Review your tax position each year to identify opportunities and optimize tax efficiency. Annual planning ensures you&apos;re always maximizing opportunities.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for high earner tax planning:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your tax situation: what you earn (salary, bonuses, dividends, other income), what tax you&apos;re currently paying (Income Tax, NI, other taxes), what pension contributions you&apos;re making, what tax relief you&apos;re claiming, what investments you have, and what you want to achieve.
          </li>
          <li>
            <strong>Tax position analysis</strong> — We analyze your current tax position:
            <ul>
              <li>
                <strong>Income assessment</strong> — Assess all sources of income (employment, self-employment, dividends, interest, rental income, etc.)
              </li>
              <li>
                <strong>Tax rate calculation</strong> — Calculate your effective tax rate and marginal tax rate
              </li>
              <li>
                <strong>Allowance analysis</strong> — Check whether your personal allowance is being reduced (if earning over £100,000)
              </li>
              <li>
                <strong>Pension relief check</strong> — Check whether you&apos;re claiming all available pension tax relief
              </li>
              <li>
                <strong>Tax efficiency review</strong> — Review your current tax planning strategies for efficiency
              </li>
            </ul>
            Tax position analysis identifies opportunities to reduce your tax bill.
          </li>
          <li>
            <strong>Pension tax relief planning</strong> — We plan your pension contributions:
            <ul>
              <li>
                <strong>Contribution optimization</strong> — Calculate optimal pension contributions to maximize tax relief
              </li>
              <li>
                <strong>Annual allowance check</strong> — Check your annual allowance (standard £60,000 or tapered if high earner)
              </li>
              <li>
                <strong>Tax relief claims</strong> — Ensure you&apos;re claiming higher rate or additional rate tax relief through Self Assessment
              </li>
              <li>
                <strong>Carry forward planning</strong> — Use carry forward provisions if you have unused annual allowance from previous years
              </li>
              <li>
                <strong>Employer contributions</strong> — Consider employer pension contributions as an alternative to salary
              </li>
            </ul>
            Pension tax relief planning maximizes the tax relief you receive on pension contributions.
          </li>
          <li>
            <strong>Salary sacrifice planning</strong> — We plan salary sacrifice arrangements:
            <ul>
              <li>
                <strong>Eligibility assessment</strong> — Assess whether salary sacrifice is available through your employer
              </li>
              <li>
                <strong>Benefit selection</strong> — Select appropriate tax-free benefits (pension contributions, cycle-to-work, electric cars, etc.)
              </li>
              <li>
                <strong>Tax and NI savings calculation</strong> — Calculate Income Tax and National Insurance savings from salary sacrifice
              </li>
              <li>
                <strong>Arrangement setup</strong> — Help set up salary sacrifice arrangements with your employer
              </li>
              <li>
                <strong>Ongoing monitoring</strong> — Monitor salary sacrifice arrangements to ensure they remain optimal
              </li>
            </ul>
            Salary sacrifice planning reduces both Income Tax and National Insurance through tax-free benefits.
          </li>
          <li>
            <strong>Personal allowance protection</strong> — We help protect your personal allowance:
            <ul>
              <li>
                <strong>Allowance reduction analysis</strong> — Analyze how your personal allowance is being reduced if earning over £100,000
              </li>
              <li>
                <strong>Income reduction strategies</strong> — Implement strategies to reduce taxable income below £100,000 (pension contributions, salary sacrifice, etc.)
              </li>
              <li>
                <strong>60% tax rate mitigation</strong> — Mitigate the 60% effective tax rate on income between £100,000 and £125,140
              </li>
              <li>
                <strong>Planning for bonus years</strong> — Plan for years with bonuses or other additional income that might push you over thresholds
              </li>
            </ul>
            Personal allowance protection keeps your full personal allowance and avoids the 60% effective tax rate.
          </li>
          <li>
            <strong>Tax-efficient investment planning</strong> — We plan tax-efficient investments:
            <ul>
              <li>
                <strong>ISA maximization</strong> — Maximize ISA contributions (£20,000 per year, tax-free growth and withdrawals)
              </li>
              <li>
                <strong>Pension investment</strong> — Invest in pensions for tax relief and tax-free growth (tax on withdrawal)
              </li>
              <li>
                <strong>Capital gains tax planning</strong> — Plan capital gains to use annual allowance and minimize CGT
              </li>
              <li>
                <strong>Dividend tax planning</strong> — Optimize dividend income to use dividend allowance and minimize dividend tax
              </li>
              <li>
                <strong>Tax wrapper selection</strong> — Select appropriate tax wrappers (ISAs, pensions, VCTs, EIS, etc.) for different investments
              </li>
            </ul>
            Tax-efficient investment planning minimizes tax on investments and builds wealth faster.
          </li>
          <li>
            <strong>Annual tax planning review</strong> — We review your tax position annually:
            <ul>
              <li>
                <strong>Tax year-end planning</strong> — Review tax position before tax year-end (5 April) to optimize opportunities
              </li>
              <li>
                <strong>Opportunity identification</strong> — Identify new tax planning opportunities based on changes in your circumstances
              </li>
              <li>
                <strong>Strategy adjustment</strong> — Adjust tax planning strategies based on tax law changes or personal circumstances
              </li>
              <li>
                <strong>Tax efficiency monitoring</strong> — Monitor tax efficiency of existing strategies and identify improvements
              </li>
              <li>
                <strong>Forecasting</strong> — Forecast tax position for coming tax year to plan ahead
              </li>
            </ul>
            Annual tax planning review ensures you&apos;re always maximizing tax efficiency.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What high earner tax planning includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Tax position analysis (income assessment, tax rate calculation, allowance analysis, pension relief check, tax efficiency review)</li>
            <li>Pension tax relief planning (contribution optimization, annual allowance check, tax relief claims, carry forward planning, employer contributions)</li>
            <li>Salary sacrifice planning (eligibility assessment, benefit selection, tax and NI savings calculation, arrangement setup, ongoing monitoring)</li>
            <li>Personal allowance protection (allowance reduction analysis, income reduction strategies, 60% tax rate mitigation, bonus year planning)</li>
            <li>Tax-efficient investment planning (ISA maximization, pension investment, CGT planning, dividend tax planning, tax wrapper selection)</li>
            <li>Annual tax planning review (tax year-end planning, opportunity identification, strategy adjustment, tax efficiency monitoring, forecasting)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>High earner tax rates and thresholds:</h3>
          <h4 style={{ marginTop: '1rem' }}>Income Tax rates (2024/25):</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Basic rate (20%)</strong> — Income from £12,570 to £50,270
            </li>
            <li>
              <strong>Higher rate (40%)</strong> — Income from £50,271 to £125,140
            </li>
            <li>
              <strong>Additional rate (45%)</strong> — Income over £125,140
            </li>
            <li>
              <strong>Personal allowance</strong> — £12,570 (reduced by £1 for every £2 of income over £100,000)
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Effective 60% tax rate:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Income between £100,000 and £125,140</strong> — Personal allowance reduces, creating effective 60% tax rate
            </li>
            <li>
              <strong>Reduction mechanism</strong> — Personal allowance reduces by £1 for every £2 of income over £100,000
            </li>
            <li>
              <strong>Full allowance lost</strong> — Personal allowance completely lost at £125,140
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>National Insurance:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Employee NI (Class 1)</strong> — 10% on earnings between £12,570 and £50,270, then 2% above £50,270
            </li>
            <li>
              <strong>Employer NI (Class 1)</strong> — 13.8% on earnings above £12,570 per employee
            </li>
            <li>
              <strong>Self-employed NI (Class 4)</strong> — 9% on profits between £12,570 and £50,270, then 2% above £50,270
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Pension tax relief:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Basic rate relief</strong> — Automatic 20% relief from pension provider
            </li>
            <li>
              <strong>Higher rate relief</strong> — Additional 20% relief claimed through Self Assessment (total 40% relief)
            </li>
            <li>
              <strong>Additional rate relief</strong> — Additional 25% relief claimed through Self Assessment (total 45% relief)
            </li>
            <li>
              <strong>Annual allowance</strong> — £60,000 per year (or 100% of earnings, whichever is lower)
            </li>
            <li>
              <strong>Tapered annual allowance</strong> — Reduced for high earners (adjusted income over £260,000), minimum £10,000
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>High Income Child Benefit Charge:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Applies when</strong> — One partner&apos;s income exceeds £60,000
            </li>
            <li>
              <strong>Charge calculation</strong> — Charge increases as income rises, fully withdrawing benefit at £80,000
            </li>
            <li>
              <strong>Planning opportunity</strong> — Pension contributions can reduce adjusted net income and mitigate the charge
            </li>
          </ul>
        </div>

        <p>
          We handle all aspects of high earner tax planning. The key is maximizing tax relief opportunities, optimizing salary sacrifice, protecting your personal allowance, and planning tax-efficient investments, so you keep more of what you earn and build wealth faster.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Income level</strong> — Higher income may require more complex planning, affecting pricing
          </li>
          <li>
            <strong>Complexity of circumstances</strong> — More income sources, investments, or tax planning needs increase complexity
          </li>
          <li>
            <strong>Number of tax planning strategies</strong> — More strategies (pension planning, salary sacrifice, investment planning, etc.) may affect pricing
          </li>
          <li>
            <strong>Ongoing support</strong> — If you need ongoing tax planning support throughout the year, this affects pricing
          </li>
          <li>
            <strong>Tax return filing</strong> — If you need tax return filing as part of tax planning, this adds to the cost
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Basic high earner tax planning review:</strong> £300–£600 for initial tax position analysis and basic tax planning recommendations
          </li>
          <li>
            <strong>Standard high earner tax planning:</strong> £500–£1,000 for comprehensive tax planning including pension relief, salary sacrifice, and investment planning
          </li>
          <li>
            <strong>Complex high earner tax planning:</strong> £800–£1,500+ for complex tax planning with multiple income sources, investments, and sophisticated strategies
          </li>
          <li>
            <strong>Pension tax relief claims:</strong> £100–£200 for claiming higher rate or additional rate pension tax relief through Self Assessment
          </li>
          <li>
            <strong>Annual tax planning review:</strong> £200–£400 per year for annual tax planning review and strategy adjustment
          </li>
          <li>
            <strong>Ongoing tax planning support:</strong> £100–£200 per month for ongoing tax planning support throughout the year
          </li>
        </ul>

        <p>
          <strong>Why high earner tax planning costs what it does:</strong>
        </p>
        <ul>
          <li>Tax position analysis requires careful assessment of all income sources and tax rates</li>
          <li>Pension tax relief planning requires understanding annual allowances, tapered allowances, and relief mechanisms</li>
          <li>Salary sacrifice planning requires understanding employer arrangements and tax benefits</li>
          <li>Personal allowance protection requires strategic income reduction planning</li>
          <li>Tax-efficient investment planning requires understanding different tax wrappers and investment vehicles</li>
          <li>Annual tax planning review requires staying current with tax law changes and identifying opportunities</li>
        </ul>

        <p>
          <strong>Timeline:</strong> Initial tax planning review typically takes 2-3 weeks from when we receive all your financial information. Pension tax relief claims can be processed alongside Self Assessment returns (typically by 31 January deadline). Salary sacrifice arrangements may take 1-2 months to set up depending on employer processes. Annual tax planning reviews typically happen before tax year-end (before 5 April) or early in the new tax year.
        </p>

        <p>
          <strong>Payment:</strong> Tax planning fees are usually charged upfront or in installments. Ongoing support fees are charged monthly. We&apos;ll discuss payment options when we understand your needs.
        </p>

        <p>
          <strong>No hidden fees.</strong> High earner tax planning price includes tax position analysis, pension planning, salary sacrifice planning, personal allowance protection, and initial investment planning. Annual tax planning reviews and ongoing support are separate if needed.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with high earners across Kent who want to reduce their tax bill: professionals in Medway earning £60,000–£80,000 paying higher rate tax, executives in Maidstone earning £100,000–£125,140 facing the 60% effective rate, and business owners in Canterbury earning over £125,140 paying additional rate tax.
        </p>

        <p>
          Kent high earners face the same tax rates as everyone else—40% higher rate, 45% additional rate, personal allowance tapering, and NI contributions. The difference is when you get proper help with high earner tax planning, you claim pension tax relief, use salary sacrifice, protect your personal allowance, and invest tax-efficiently. That&apos;s what helps Kent high earners keep more of what they earn and build wealth faster.
        </p>

        <p>
          <strong>Common Kent high earner scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Higher rate taxpayers (£50,271–£100,000)</strong> — Claiming pension tax relief, using salary sacrifice, maximizing ISAs
          </li>
          <li>
            <strong>Personal allowance tapering (£100,000–£125,140)</strong> — Reducing taxable income to keep personal allowance, avoiding 60% effective rate
          </li>
          <li>
            <strong>Additional rate taxpayers (over £125,140)</strong> — Maximizing pension contributions, tax-efficient investments, complex planning
          </li>
          <li>
            <strong>Bonus recipients</strong> — Planning for bonus years to optimize tax position
          </li>
          <li>
            <strong>Multiple income sources</strong> — Planning for employment income, dividends, rental income, investments
          </li>
        </ul>

        <p>
          <strong>Kent high earner market context:</strong>
        </p>
        <ul>
          <li>Many Kent residents work in London or the South East with higher salaries</li>
          <li>Proper tax planning helps Kent high earners reduce tax and build wealth</li>
          <li>Pension tax relief and salary sacrifice help Kent high earners save significantly on tax</li>
          <li>Local tax planning expertise helps Kent high earners navigate complex tax rules</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent high earners are dealing with. Pension tax relief, salary sacrifice, personal allowance protection, tax-efficient investments—we&apos;ll handle your high earner tax planning that keeps more money in your pocket.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="High Earner Tax Planning - Frequently Asked Questions"
          subtitle="Common questions about tax planning for high earners and reducing tax on high income"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — General tax planning strategies
            </li>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns</Link> — Self Assessment returns where pension tax relief is claimed
            </li>
            <li>
              <Link href="/services/tax/company-director-tax-returns/">Company Director Tax Returns</Link> — Tax returns for directors who are high earners
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with high earner tax planning?" description="Don't let high taxes eat into your income. We'll help you claim pension tax relief, use salary sacrifice, protect your personal allowance, and invest tax-efficiently to keep more of what you earn. No overpaid tax, no missed opportunities—just proper tax planning that keeps more money in your pocket." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with high earner tax planning?" />
    </>
  );
}

