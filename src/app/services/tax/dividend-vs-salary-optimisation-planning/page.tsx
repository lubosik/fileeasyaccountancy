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
  title: 'Dividend vs Salary Optimisation Planning Services in Kent | File Easy Accountancy',
  description: 'Expert dividend vs salary optimisation planning in Kent. Dividend vs salary UK, dividend tax planning, director remuneration tax, optimal director pay. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/dividend-vs-salary-optimisation-planning/',
  },
  openGraph: {
    title: 'Dividend vs Salary Optimisation Planning Services in Kent | File Easy Accountancy',
    description: 'Expert dividend vs salary optimisation planning in Kent. Dividend vs salary UK, dividend tax planning, director remuneration tax, optimal director pay.',
    url: 'https://fileeasyaccountancy.co.uk/services/dividend-vs-salary-optimisation-planning/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the most tax-efficient way to pay yourself as a director?',
    answer: 'The most tax-efficient way for most directors is a hybrid structure combining a small salary (£12,570 for 2025/26, which is the Personal Allowance threshold) with dividend payments. This approach works because: salary is deductible for Corporation Tax (reducing company tax), salary at the Personal Allowance threshold avoids Income Tax and minimises National Insurance, dividends are taxed at lower rates than salary (8.75% vs 20% at basic rate), and dividends have no National Insurance. This structure typically saves thousands of pounds compared to taking all income as salary. The exact optimal structure depends on your company profits, personal circumstances, and practical needs (like mortgage applications).',
  },
  {
    question: 'Should I take salary or dividends?',
    answer: 'You should take both—a combination of salary and dividends is usually most tax-efficient. Take a small salary (typically £12,570, the Personal Allowance threshold) to maximise Corporation Tax deductions and minimise personal tax, then take the remainder as dividends from post-tax profits. Taking all salary means you pay Income Tax and National Insurance on everything above the Personal Allowance, which costs more. Taking all dividends means you miss out on Corporation Tax deductions for salary, and you might struggle with mortgage applications or pension contributions that prefer salary. The hybrid approach gives you the best of both worlds.',
  },
  {
    question: 'How much salary should a director take?',
    answer: 'Most directors should take salary at the Personal Allowance threshold (£12,570 for 2025/26). This level avoids Income Tax, minimises National Insurance, and maximises Corporation Tax deductions. Taking more salary means you pay Income Tax and National Insurance on the excess, which usually costs more than taking it as dividends. Taking less salary means you miss out on Corporation Tax deductions and might affect pension contributions or mortgage applications. Some directors take higher salary for practical reasons (mortgage applications, pension schemes, visa requirements), but this usually costs more tax. We can calculate the optimal level for your specific situation.',
  },
  {
    question: 'How does dividend tax compare to salary tax?',
    answer: 'Dividends are taxed at lower rates than salary and have no National Insurance. For 2025/26: dividend allowance is £500 (tax-free), after which dividends are taxed at 8.75% (basic rate), 33.75% (higher rate), or 39.35% (additional rate) depending on your Income Tax band. Salary is taxed at 20% (basic rate), 40% (higher rate), or 45% (additional rate) plus employee National Insurance (8% on income between £12,570 and £50,270, 2% above £50,270) and employer National Insurance (13.8% on income above £12,570). So dividends above the allowance are taxed at 8.75% vs 28% (20% Income Tax + 8% employee NI) for salary at basic rate, making dividends more tax-efficient. The company also gets a Corporation Tax deduction for salary (25%), which reduces the overall tax cost.',
  },
  {
    question: 'What is the dividend allowance?',
    answer: 'The dividend allowance is £500 per year (2025/26), which means the first £500 of dividend income is tax-free. After the allowance, dividends are taxed at 8.75% (basic rate), 33.75% (higher rate), or 39.35% (additional rate) depending on your Income Tax band. The allowance applies per person, so if you\'re married and both shareholders, you each get £500. The dividend allowance was reduced from £1,000 in previous years, so it\'s important to factor this into your planning. Dividends still count towards your Income Tax band calculation even if they\'re within the allowance, which can affect your tax rate on other income.',
  },
  {
    question: 'Can I change my salary and dividend structure mid-year?',
    answer: 'Yes, you can change your structure mid-year, but it\'s usually better to plan changes for the start of the tax year (6 April) for simplicity. Salary can be adjusted through PAYE at any time, but frequent changes create more admin. Dividends can be declared at any time as long as there are sufficient distributable profits, but changing dividend patterns mid-year can make tax planning more complex. If you\'re making significant changes, it\'s worth getting advice to ensure you\'re still optimising tax and staying compliant. We can help you plan mid-year changes if needed, especially if company profits have changed significantly.',
  },
  {
    question: 'What if I need a higher salary for mortgage applications?',
    answer: 'Some directors need higher salary for mortgage applications because lenders prefer steady PAYE income over dividend income. If this applies to you, we can help you balance tax efficiency with mortgage needs—you might take higher salary (e.g., £30,000–£50,000) for a few months or years to show income to lenders, then reduce it after securing the mortgage. This costs more tax temporarily but might be necessary for practical reasons. Alternatively, some lenders accept dividend income, so it\'s worth checking with mortgage brokers about your options. We can help you model the tax cost of different salary levels to help you decide.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Dividend vs Salary Optimisation Planning', href: '/services/tax/dividend-vs-salary-optimisation-planning' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function DividendVsSalaryOptimisationPlanningPage() {
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
            serviceType: 'Dividend vs Salary Optimisation Planning',
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
            description: 'Expert dividend vs salary optimisation planning in Kent. Dividend vs salary UK, dividend tax planning, director remuneration tax, optimal director pay.',
            name: 'Dividend vs Salary Optimisation Planning',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/dividend-vs-salary-optimisation-planning/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Dividend vs Salary Optimisation Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Optimal Salary Calculation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dividend Planning' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Efficiency Analysis' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Annual Reviews' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Dividend vs Salary Optimisation Planning"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re a company director, working out how to pay yourself efficiently can save you thousands of pounds in tax each year. The most tax-efficient approach for UK limited company directors is a hybrid structure combining a small salary (£12,570) with dividend payments, rather than taking all income as salary or all as dividends (
          <a href="https://www.gov.uk/running-a-limited-company/taking-money-out-of-a-limited-company" target="_blank" rel="noopener noreferrer">
            gov.uk taking money out
          </a>
          ). Directors taking salary plus dividends typically save thousands of pounds annually compared to taking all income as salary, while the company also benefits from Corporation Tax deductions on salary. Dividends are taxed at lower rates than salary (8.75% basic rate vs 20% Income Tax) and are not subject to National Insurance contributions, making them more tax-efficient than salary above the Personal Allowance threshold (
          <a href="https://www.gov.uk/tax-on-dividends" target="_blank" rel="noopener noreferrer">
            gov.uk dividend tax
          </a>
          ).
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>The optimal director salary is set at the Personal Allowance threshold (£12,570 for 2025/26)</strong> — This avoids Income Tax and minimises National Insurance, with the remainder taken as dividends from post-tax profits
            </li>
            <li>
              <strong>Dividends are more tax-efficient than salary above the Personal Allowance</strong> — Dividends are taxed at 8.75% (basic rate), 33.75% (higher rate), or 39.35% (additional rate) vs 20%, 40%, or 45% for salary, plus dividends have no National Insurance
            </li>
            <li>
              <strong>Your company gets a Corporation Tax deduction for salary</strong> — Salary payments are deductible for Corporation Tax purposes (currently 25%), reducing the overall corporation tax bill
            </li>
            <li>
              <strong>Dividend allowance is £500 per year (tax-free)</strong> — After this, dividends are taxed at lower rates than salary, with no National Insurance contributions
            </li>
          </ul>
        </div>

        <p>
          The problem is most directors either take too much salary (paying unnecessary Income Tax and National Insurance), take too little salary (missing out on Corporation Tax deductions and pension benefits), or don&apos;t understand the optimal structure for their specific situation. That causes problems—paying thousands of pounds more tax than necessary, missing Corporation Tax deductions, confusion about dividend declarations, and not planning for future changes in profits or tax rates.
        </p>

        <p>
          We handle dividend vs salary optimisation planning for limited company directors across Kent: optimal salary calculation (working out the most tax-efficient salary level, typically at the Personal Allowance threshold), dividend planning (calculating how much to take as dividends based on available profits and your tax position), tax efficiency analysis (comparing different salary and dividend combinations to show you the tax savings), annual reviews (reviewing your structure each year as allowances and tax bands change), Corporation Tax optimisation (ensuring salary deductions maximise Corporation Tax savings), and practical considerations (balancing tax efficiency with mortgage applications, pension contributions, and other practical factors). Whether you&apos;re a director in Medway managing a construction company, a director in Maidstone running a professional services firm, or a director in Canterbury heading a tech startup, we&apos;ll handle your dividend vs salary optimisation that works. No unnecessary tax, no missed opportunities—just proper tax-efficient director pay that saves you money.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Save thousands of pounds in tax each year</strong> — We&apos;ll help you structure your director pay to minimise Income Tax, National Insurance, and Corporation Tax. Saving tax means more money in your pocket.
          </li>
          <li>
            <strong>Maximise Corporation Tax deductions</strong> — We&apos;ll ensure your salary structure maximises Corporation Tax deductions while minimising personal tax. Corporation Tax optimisation reduces your overall tax bill.
          </li>
          <li>
            <strong>Plan for changing profits</strong> — We&apos;ll help you adjust your salary and dividend structure as company profits change. Flexible planning means you stay tax-efficient whatever happens.
          </li>
          <li>
            <strong>Balance tax efficiency with practical needs</strong> — We&apos;ll help you balance tax efficiency with mortgage applications, pension contributions, and other practical factors. Balancing factors means you don&apos;t sacrifice important benefits for tax savings.
          </li>
          <li>
            <strong>Stay compliant with dividend rules</strong> — We&apos;ll ensure dividends are declared correctly and only paid from available profits. Compliance avoids HMRC issues and penalties.
          </li>
          <li>
            <strong>Review your structure annually</strong> — We&apos;ll review your director pay structure each year as tax rates and allowances change. Annual reviews ensure you stay optimal.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for dividend vs salary optimisation:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your company: what type of business you run, how much profit you make per year, how much you currently take as salary and dividends, whether you&apos;re applying for mortgages or need to show salary for other reasons, what your pension situation is, and what you want to achieve. Understanding your situation helps us recommend the right structure.
          </li>
          <li>
            <strong>Current structure analysis</strong> — We analyse your current director pay structure:
            <ul>
              <li>
                <strong>Current salary level</strong> — We review your current salary, how much Income Tax and National Insurance you&apos;re paying, and whether you&apos;re maximising Corporation Tax deductions.
              </li>
              <li>
                <strong>Current dividend payments</strong> — We review how much you&apos;re taking as dividends, when dividends are declared, and whether they&apos;re being paid from available profits.
              </li>
              <li>
                <strong>Total tax cost</strong> — We calculate the total tax cost (Income Tax, National Insurance, Corporation Tax) of your current structure.
              </li>
              <li>
                <strong>Tax efficiency gaps</strong> — We identify where you could save tax by adjusting your structure.
              </li>
            </ul>
            Current structure analysis shows you where improvements are possible.
          </li>
          <li>
            <strong>Optimal structure calculation</strong> — We calculate the most tax-efficient structure for your situation:
            <ul>
              <li>
                <strong>Optimal salary level</strong> — Typically set at the Personal Allowance threshold (£12,570 for 2025/26) to avoid Income Tax and minimise National Insurance while maximising Corporation Tax deductions.
              </li>
              <li>
                <strong>Dividend calculations</strong> — We calculate how much to take as dividends based on available profits after Corporation Tax, your total income needs, and your tax position.
              </li>
              <li>
                <strong>Tax comparison</strong> — We compare the tax cost of different structures (all salary, all dividends, salary plus dividends) to show you the savings.
              </li>
              <li>
                <strong>Practical considerations</strong> — We factor in mortgage applications, pension contributions, and other practical needs that might affect your optimal structure.
              </li>
            </ul>
            Optimal structure calculation ensures you save the maximum tax while meeting practical needs.
          </li>
          <li>
            <strong>Implementation planning</strong> — We plan how to implement the optimal structure:
            <ul>
              <li>
                <strong>Salary adjustments</strong> — We work with you (or your payroll provider) to adjust salary levels through PAYE.
              </li>
              <li>
                <strong>Dividend declarations</strong> — We prepare dividend vouchers and board minutes for dividend declarations, ensuring they&apos;re compliant and properly documented.
              </li>
              <li>
                <strong>Timing considerations</strong> — We plan when to make changes (at the start of the tax year is usually best, but we can work with mid-year changes if needed).
              </li>
              <li>
                <strong>Record keeping</strong> — We ensure dividend records, board minutes, and payroll records are properly maintained.
              </li>
            </ul>
            Implementation planning ensures changes happen smoothly and correctly.
          </li>
          <li>
            <strong>Annual reviews</strong> — We review your structure each year:
            <ul>
              <li>
                <strong>Tax rate changes</strong> — We monitor changes in Income Tax rates, dividend tax rates, Corporation Tax rates, and allowances (Personal Allowance, dividend allowance).
              </li>
              <li>
                <strong>Profit changes</strong> — We adjust recommendations if company profits increase or decrease significantly.
              </li>
              <li>
                <strong>Personal circumstances</strong> — We review if your personal circumstances change (mortgage applications, pension changes, other income sources).
              </li>
              <li>
                <strong>Optimisation opportunities</strong> — We identify new opportunities to save tax as rules change.
              </li>
            </ul>
            Annual reviews ensure you stay tax-efficient as circumstances change.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What dividend vs salary optimisation includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Initial analysis of your current director pay structure</li>
            <li>Calculation of the optimal salary and dividend combination for your situation</li>
            <li>Tax comparison showing savings from different structures</li>
            <li>Implementation guidance for salary and dividend adjustments</li>
            <li>Dividend declaration support (vouchers, board minutes)</li>
            <li>Annual reviews to ensure ongoing tax efficiency</li>
            <li>Advice on practical considerations (mortgages, pensions, etc.)</li>
          </ul>
        </div>

        <p>
          We handle all aspects of dividend vs salary optimisation, from initial analysis to ongoing reviews. The key is finding the right balance between tax efficiency and practical needs, then reviewing it regularly as circumstances change.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Complexity of your situation</strong> — Multiple directors, complex shareholdings, or unusual circumstances increase complexity.
          </li>
          <li>
            <strong>Current structure complexity</strong> — If your current structure is simple (just salary or just dividends), analysis is straightforward; complex structures require more time.
          </li>
          <li>
            <strong>Number of scenarios to model</strong> — More scenarios (different profit levels, different salary levels, different personal circumstances) require more calculation time.
          </li>
          <li>
            <strong>Implementation support needed</strong> — If you need help implementing changes (preparing dividend vouchers, board minutes, payroll adjustments), that adds time.
          </li>
          <li>
            <strong>Annual review requirements</strong> — Ongoing annual reviews can be included as part of the service or charged separately.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>One-off analysis and recommendations:</strong> £300–£800 (includes current analysis, optimal structure calculation, tax comparisons, and written recommendations)
          </li>
          <li>
            <strong>Analysis plus implementation support:</strong> £500–£1,200 (includes analysis plus dividend vouchers, board minutes, payroll coordination)
          </li>
          <li>
            <strong>Annual retainer (analysis plus annual reviews):</strong> £400–£1,000 per year (includes initial analysis plus annual reviews and ongoing support)
          </li>
          <li>
            <strong>Hourly rate for complex cases:</strong> £150–£300 per hour
          </li>
        </ul>

        <p>
          <strong>Why dividend vs salary optimisation costs what it does:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding the interaction between salary, dividends, Income Tax, National Insurance, and Corporation Tax requires specialist tax knowledge.
          </li>
          <li>
            <strong>Calculations and modelling</strong> — Modelling different scenarios and calculating tax costs accurately takes time and expertise.
          </li>
          <li>
            <strong>Compliance support</strong> — Ensuring dividend declarations and salary adjustments are compliant requires careful documentation.
          </li>
          <li>
            <strong>Ongoing complexity</strong> — Tax rates and allowances change annually, requiring regular reviews to stay optimal.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Initial analysis and recommendations typically take 1–2 weeks after we receive your current payroll and dividend information. Implementation (salary adjustments, dividend declarations) can usually be done within a few days if needed, but it&apos;s usually best to plan changes for the start of the tax year. Annual reviews typically take a few hours and can be done as part of your annual tax planning process.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced on completion of the analysis and recommendations. For annual retainers, invoiced annually or quarterly depending on arrangement.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes current structure analysis, optimal structure calculation, tax comparisons, written recommendations, and implementation guidance. Dividend vouchers, board minutes, and annual reviews may be additional depending on your needs.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For limited company directors in Kent, whether you&apos;re running a construction company in Medway, a professional services firm in Maidstone, a tech startup in Canterbury, or any other limited company business, dividend vs salary optimisation can save you significant tax each year. Many Kent directors are taking too much salary, paying unnecessary Income Tax and National Insurance, or not understanding how to structure their pay efficiently. We help local directors understand their options, calculate the optimal structure, and implement it correctly, ensuring they save tax while staying compliant. It&apos;s worth getting it right—the tax savings can run into thousands of pounds each year, which makes a real difference to your take-home pay.
        </p>

        <p>
          <strong>Common Kent director scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Construction directors</strong> — Managing construction companies with fluctuating profits, needing to balance tax efficiency with practical cash flow needs.
          </li>
          <li>
            <strong>Professional services directors</strong> — Running professional services firms with steady profits, needing to optimise director pay for maximum tax efficiency.
          </li>
          <li>
            <strong>Tech startup directors</strong> — Managing tech startups with varying profits, needing flexible structures that adapt as the business grows.
          </li>
          <li>
            <strong>Multi-director companies</strong> — Companies with multiple directors, needing structures that work for all directors while maximising overall tax efficiency.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent directors are dealing with. Salary optimisation, dividend planning, tax efficiency, annual reviews—we&apos;ll handle your dividend vs salary optimisation that saves you money while keeping you compliant.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Dividend vs Salary Optimisation Planning - Frequently Asked Questions"
          subtitle="Common questions about dividend vs salary optimisation, tax efficiency, and director remuneration"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/company-director-tax-returns/">Company Director Tax Returns</Link> — Self Assessment returns for directors reporting salary and dividends
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Broader tax planning including dividend vs salary optimisation
            </li>
            <li>
              <Link href="/services/tax/corporation-tax-ct600-filing/">Corporation Tax (CT600) Filing</Link> — Corporation Tax returns where salary deductions affect tax liability
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help optimising your director pay structure?" description="Don't pay more tax than necessary. We'll help you calculate the optimal salary and dividend combination, implement it correctly, and review it annually to ensure you stay tax-efficient. No unnecessary tax, no missed opportunities—just proper tax-efficient director pay that saves you money." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help optimising your director pay structure?" />
    </>
  );
}

