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
  title: 'Dividend Planning Services for Limited Company Directors | File Easy Accountancy',
  description: 'Expert dividend planning services for limited company directors. Dividend planning, limited company dividends, director dividends, dividend tax. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/dividend-planning-ltd-directors/',
  },
  openGraph: {
    title: 'Dividend Planning Services for Limited Company Directors | File Easy Accountancy',
    description: 'Expert dividend planning services for limited company directors. Dividend planning, limited company dividends, director dividends, dividend tax.',
    url: 'https://fileeasyaccountancy.co.uk/services/dividend-planning-ltd-directors/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is dividend planning?',
    answer: 'Dividend planning helps limited company directors take money out of their company tax-efficiently, using dividends (distributions of company profits to shareholders) instead of or in combination with salary. Dividend planning typically involves balancing salary and dividends to optimise tax efficiency, considering income tax, National Insurance contributions, corporation tax, and dividend tax, while ensuring sufficient profits are available for dividends. Proper dividend planning can reduce overall tax liability compared to taking all income as salary, especially for directors in the basic rate and higher rate tax bands, while ensuring compliance with dividend tax rules. It\'s worth getting professional help to understand dividend planning and develop an optimal strategy.',
  },
  {
    question: 'How do dividends work for limited company directors?',
    answer: 'Dividends work for limited company directors as follows: dividends are distributions of company profits to shareholders (typically directors who are shareholders), dividends can only be paid when the company has sufficient distributable reserves (profits available for distribution), dividends are declared by the company (typically through board resolution or written resolution), dividends are paid to shareholders according to shareholdings (typically directors who own shares receive dividends in proportion to their shareholdings), dividends are taxed differently to salary (dividend tax rates: 8.75% basic rate, 33.75% higher rate, 39.35% additional rate, plus dividend allowance £500 per tax year), and dividends must be properly documented (dividend vouchers, board minutes, dividend records). Dividends can be a tax-efficient way for directors to take money out of their company. It\'s worth getting professional help to understand how dividends work and ensure compliance.',
  },
  {
    question: 'What is dividend tax?',
    answer: 'Dividend tax is tax payable on dividends received. Dividend tax works as follows: dividend allowance (£500 per tax year from 2024-25) allows you to receive dividends tax-free up to the allowance amount, dividend tax rates are lower than equivalent income tax rates (8.75% for basic rate taxpayers, 33.75% for higher rate taxpayers, 39.35% for additional rate taxpayers), dividend tax is calculated on dividend income above the dividend allowance, dividend tax is paid through self-assessment tax returns, and dividend tax is in addition to corporation tax (corporation tax is paid by the company on profits before dividends are paid). Dividend tax rates and allowance can change each tax year, so it\'s important to stay up-to-date. It\'s worth getting professional help to understand dividend tax and plan dividends tax-efficiently.',
  },
  {
    question: 'How much can I take in dividends?',
    answer: 'You can take dividends up to the amount of distributable reserves (profits available for distribution) your company has. Distributable reserves are calculated as: company profits (after corporation tax) plus retained profits from previous years minus dividends already paid. You can take dividends when distributable reserves are available, but dividends cannot exceed distributable reserves (taking dividends in excess of distributable reserves is illegal). The amount you can take depends on company profits, corporation tax paid, previous dividends, and company financial position. Dividend planning should consider profit availability, cash flow, and tax efficiency. It\'s worth getting professional help to determine how much you can take in dividends and plan dividends properly.',
  },
  {
    question: 'What is the dividend allowance?',
    answer: 'The dividend allowance is the amount of dividend income you can receive tax-free each tax year. The dividend allowance is currently £500 per tax year (from 2024-25, reduced from £1,000 previously). The dividend allowance reduces dividend tax liability—dividend income up to the allowance amount is tax-free, and dividend tax is only payable on dividend income above the allowance amount. The dividend allowance applies to all dividend income you receive (not per company or per shareholding), and the allowance cannot be carried forward to future tax years if unused. Utilising dividend allowance effectively can reduce dividend tax liability. It\'s worth getting professional help to plan dividends to utilise dividend allowance effectively.',
  },
  {
    question: 'How do I plan dividends tax-efficiently?',
    answer: 'To plan dividends tax-efficiently, you should: balance salary and dividends (finding optimal mix of salary and dividends to minimise total tax liability, considering income tax, National Insurance, corporation tax, and dividend tax), utilise dividend allowance effectively (planning dividends to utilise dividend allowance £500 per tax year, ensuring allowance is used optimally), consider tax bands (planning dividends to stay within desired tax bands, avoiding unnecessary higher rate tax), plan throughout tax year (planning dividends throughout tax year, optimising tax efficiency and cash flow), consider other income (considering other income sources, ensuring dividend planning considers overall tax situation), ensure profit availability (ensuring sufficient profits are available for dividends when planned), and maintain compliance (ensuring dividends are taken correctly, in compliance with company law and tax rules). Professional help can ensure dividend planning is tax-efficient and compliant.',
  },
  {
    question: 'What is the difference between salary and dividends?',
    answer: 'The main differences between salary and dividends are: tax treatment (salary is subject to income tax and National Insurance contributions, while dividends are subject to dividend tax only, with no National Insurance on dividends), tax rates (salary income tax rates: 20% basic rate, 40% higher rate, 45% additional rate, plus National Insurance, while dividend tax rates: 8.75% basic rate, 33.75% higher rate, 39.35% additional rate), availability (salary can be taken regardless of company profits, while dividends can only be taken when company has sufficient distributable reserves), documentation (salary requires PAYE and payslips, while dividends require dividend vouchers and board minutes), and company tax (salary is deductible expense for corporation tax purposes, while dividends are not deductible, but dividends are paid from after-tax profits). The optimal mix of salary and dividends depends on your situation and tax efficiency. It\'s worth getting professional advice on the best mix for your situation.',
  },
  {
    question: 'When should I take dividends?',
    answer: 'You should take dividends when: company has sufficient distributable reserves (profits available for distribution), dividend planning indicates it\'s tax-efficient (dividends reduce overall tax liability compared to salary), you need to take money out of company (cash flow needs, personal financial needs), dividend allowance is available (utilising dividend allowance £500 per tax year), tax year planning suggests it (planning dividends throughout tax year to optimise tax efficiency), and company financial position allows it (ensuring dividends don\'t affect company cash flow or financial stability). Dividend planning should consider when to take dividends throughout the tax year, balancing tax efficiency, cash flow, and company needs. It\'s worth getting professional advice on when to take dividends.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Core', href: '/services/core' },
  { label: 'Dividend Planning Ltd Directors', href: '/services/core/dividend-planning-ltd-directors' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function DividendPlanningLtdDirectorsPage() {
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
            serviceType: 'Dividend Planning Ltd Directors',
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
            description: 'Expert dividend planning services for limited company directors. Dividend planning, limited company dividends, director dividends, dividend tax.',
            name: 'Dividend Planning Ltd Directors',
            url: 'https://fileeasyaccountancy.co.uk/services/core/dividend-planning-ltd-directors/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Dividend Planning Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dividend Strategy Planning' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Optimal Salary and Dividend Calculation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dividend Tax Planning' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dividend Declaration and Paperwork' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Dividend Planning Ltd Directors"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re a limited company director, taking money out of your company tax-efficiently matters—and dividend planning helps you balance salary and dividends to reduce overall tax liability. Dividend planning helps limited company directors take money out of their company tax-efficiently, using dividends (distributions of company profits to shareholders) instead of or in combination with salary. Dividends are taxed differently to salary—dividends have their own tax rates (dividend tax rates: 8.75% for basic rate taxpayers, 33.75% for higher rate taxpayers, 39.35% for additional rate taxpayers) and a dividend allowance (£500 per tax year from 2024-25, reduced from £1,000 previously), making them potentially more tax-efficient than salary for many directors (
          <a href="https://www.gov.uk/tax-on-dividends" target="_blank" rel="noopener noreferrer">
            gov.uk Dividend Tax
          </a>
          ,{' '}
          <a href="https://www.gov.uk/running-a-limited-company/taking-money-out-of-a-limited-company" target="_blank" rel="noopener noreferrer">
            gov.uk Taking Money Out
          </a>
          ).
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Dividends are distributions of company profits</strong> — Dividends are paid to shareholders (typically directors who are shareholders) when the company has sufficient distributable reserves
            </li>
            <li>
              <strong>Dividend tax rates are lower than income tax rates</strong> — Dividend tax rates (8.75% basic rate, 33.75% higher rate, 39.35% additional rate) are lower than equivalent income tax rates, making dividends potentially more tax-efficient
            </li>
            <li>
              <strong>Dividend allowance reduces tax</strong> — Dividend allowance (£500 per tax year from 2024-25) allows you to receive dividends tax-free up to the allowance amount
            </li>
            <li>
              <strong>Balancing salary and dividends optimises tax</strong> — Proper dividend planning balances salary and dividends to optimise tax efficiency, considering income tax, National Insurance, corporation tax, and dividend tax
            </li>
          </ul>
        </div>

        <p>
          The problem is most limited company directors don&apos;t understand dividend planning or how to balance salary and dividends tax-efficiently. They don&apos;t know how dividends are taxed, struggle to calculate optimal salary and dividend mix, don&apos;t understand dividend allowance, or find the process confusing. That causes problems—paying more tax than necessary, missing tax-saving opportunities, taking dividends incorrectly (without sufficient profits), compliance issues, and stress from trying to manage dividends properly.
        </p>

        <p>
          We provide dividend planning services for limited company directors across Kent: dividend strategy planning (helping you develop a dividend strategy that balances salary and dividends to optimise tax efficiency, considering your personal tax situation, company profits, dividend allowance, and other income), optimal salary and dividend calculation (calculating the optimal mix of salary and dividends for your situation, considering income tax, National Insurance contributions, corporation tax, and dividend tax), dividend tax planning (helping you plan dividends to utilise dividend allowance effectively, minimise dividend tax, and optimise overall tax efficiency), profit availability assessment (assessing company profits and distributable reserves to determine how much can be taken as dividends, ensuring dividends are only taken when sufficient profits are available), dividend declaration and paperwork (helping you declare dividends correctly, prepare dividend vouchers, and maintain proper dividend records), tax return support (helping you report dividends correctly on self-assessment tax returns, ensuring dividend tax is calculated and paid correctly), ongoing dividend planning (providing ongoing dividend planning advice as your situation changes, company profits change, or tax rules change), and dividend compliance (ensuring dividends are taken correctly, in compliance with company law and tax rules, avoiding illegal dividends and compliance issues). Whether you&apos;re a director in Medway needing dividend strategy planning, a company director in Maidstone wanting optimal salary and dividend calculation, or a director in Canterbury needing dividend tax planning, we&apos;ll provide your dividend planning services that work. No confusion, no tax waste—just efficient dividend planning that helps you take money out of your company tax-efficiently.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Reduce overall tax liability</strong> — We&apos;ll help you balance salary and dividends to reduce overall tax liability, optimising tax efficiency. Tax planning saves money.
          </li>
          <li>
            <strong>Utilise dividend allowance effectively</strong> — We&apos;ll help you plan dividends to utilise dividend allowance (£500 per tax year) effectively, reducing dividend tax. Allowance utilisation saves tax.
          </li>
          <li>
            <strong>Take dividends correctly</strong> — We&apos;ll help you take dividends correctly, ensuring dividends are only taken when sufficient profits are available, and dividends are declared and documented properly. Correct dividends avoid compliance issues.
          </li>
          <li>
            <strong>Calculate optimal salary and dividend mix</strong> — We&apos;ll calculate the optimal mix of salary and dividends for your situation, considering all tax implications. Optimal mix saves tax.
          </li>
          <li>
            <strong>Plan dividends strategically</strong> — We&apos;ll help you plan dividends strategically throughout the tax year, optimising tax efficiency and cash flow. Strategic planning improves efficiency.
          </li>
          <li>
            <strong>Maintain compliance</strong> — We&apos;ll ensure dividends are taken correctly, in compliance with company law and tax rules, avoiding illegal dividends and compliance issues. Compliance avoids penalties.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for dividend planning:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your situation: what your current salary and dividend situation is, what your company profits are, what your personal tax situation is (other income, tax bands, personal allowance), what your concerns are (tax efficiency, dividend planning, compliance), and what help you need. Understanding your situation helps us tailor dividend planning services.
          </li>
          <li>
            <strong>Current situation assessment</strong> — We assess your current situation:
            <ul>
              <li>
                <strong>Company profits</strong> — We review company profits and distributable reserves, determining how much is available for dividends.
              </li>
              <li>
                <strong>Current salary and dividends</strong> — We review your current salary and dividend situation, assessing tax efficiency.
              </li>
              <li>
                <strong>Personal tax situation</strong> — We assess your personal tax situation (other income, tax bands, personal allowance, dividend allowance usage).
              </li>
              <li>
                <strong>Tax efficiency analysis</strong> — We analyse current tax efficiency, identifying opportunities for improvement.
              </li>
            </ul>
            Current situation assessment identifies opportunities.
          </li>
          <li>
            <strong>Optimal salary and dividend calculation</strong> — We calculate optimal salary and dividend mix:
            <ul>
              <li>
                <strong>Tax modelling</strong> — We model different salary and dividend scenarios, calculating total tax liability (income tax, National Insurance, corporation tax, dividend tax) for each scenario.
              </li>
              <li>
                <strong>Optimal mix identification</strong> — We identify the optimal mix of salary and dividends that minimises total tax liability while ensuring compliance and practicality.
              </li>
              <li>
                <strong>Dividend allowance planning</strong> — We plan how to utilise dividend allowance (£500 per tax year) effectively, ensuring allowance is used optimally.
              </li>
              <li>
                <strong>Personal allowance consideration</strong> — We consider personal allowance and other tax allowances, ensuring they&apos;re used effectively.
              </li>
            </ul>
            Optimal calculation identifies best strategy.
          </li>
          <li>
            <strong>Dividend strategy development</strong> — We develop dividend strategy:
            <ul>
              <li>
                <strong>Strategy recommendations</strong> — We provide recommendations on dividend strategy (when to take dividends, how much to take, frequency of dividends, etc.).
              </li>
              <li>
                <strong>Tax year planning</strong> — We plan dividends throughout the tax year, optimising tax efficiency and cash flow.
              </li>
              <li>
                <strong>Profit availability planning</strong> — We plan how to ensure sufficient profits are available for dividends when needed.
              </li>
              <li>
                <strong>Long-term planning</strong> — We consider long-term financial planning, ensuring dividend strategy supports your financial goals.
              </li>
            </ul>
            Strategy development provides roadmap.
          </li>
          <li>
            <strong>Dividend declaration and paperwork</strong> — We help with dividend declaration:
            <ul>
              <li>
                <strong>Dividend vouchers</strong> — We prepare dividend vouchers, ensuring dividends are properly documented.
              </li>
              <li>
                <strong>Board minutes</strong> — We help prepare board minutes for dividend declarations (if required), ensuring dividends are declared correctly.
              </li>
              <li>
                <strong>Dividend records</strong> — We help maintain proper dividend records, ensuring records are complete and accurate.
              </li>
              <li>
                <strong>Compliance</strong> — We ensure dividend declarations comply with company law and tax rules.
              </li>
            </ul>
            Proper declaration ensures compliance.
          </li>
          <li>
            <strong>Tax return support</strong> — We provide tax return support:
            <ul>
              <li>
                <strong>Dividend reporting</strong> — We help you report dividends correctly on self-assessment tax returns, ensuring dividends are included in tax returns.
              </li>
              <li>
                <strong>Dividend tax calculation</strong> — We calculate dividend tax correctly, considering dividend allowance and tax rates.
              </li>
              <li>
                <strong>Tax return filing</strong> — We help file tax returns on time, ensuring dividend tax is calculated and paid correctly.
              </li>
              <li>
                <strong>Tax queries</strong> — We help with tax queries related to dividends, providing explanations and support.
              </li>
            </ul>
            Tax return support ensures correct reporting.
          </li>
          <li>
            <strong>Ongoing dividend planning</strong> — We provide ongoing dividend planning:
            <ul>
              <li>
                <strong>Regular reviews</strong> — We conduct regular reviews of dividend strategy (annually or as needed), assessing whether strategy remains optimal.
              </li>
              <li>
                <strong>Tax updates</strong> — We keep you informed of changes to tax rules (dividend tax rates, dividend allowance, tax bands) and how they affect your dividend planning.
              </li>
              <li>
                <strong>Profit monitoring</strong> — We monitor company profits and distributable reserves, advising on dividend availability and planning.
              </li>
              <li>
                <strong>Strategy adjustments</strong> — We adjust dividend strategy as your situation changes, company profits change, or tax rules change.
              </li>
            </ul>
            Ongoing planning keeps strategy optimal.
          </li>
          <li>
            <strong>Compliance monitoring</strong> — We monitor compliance:
            <ul>
              <li>
                <strong>Dividend compliance</strong> — We ensure dividends are taken correctly, in compliance with company law and tax rules, avoiding illegal dividends.
              </li>
              <li>
                <strong>Profit availability</strong> — We monitor profit availability, ensuring dividends are only taken when sufficient profits are available.
              </li>
              <li>
                <strong>Record keeping</strong> — We ensure dividend records are maintained properly, meeting company law and tax requirements.
              </li>
              <li>
                <strong>Tax compliance</strong> — We ensure dividend tax is calculated and paid correctly, meeting HMRC requirements.
              </li>
            </ul>
            Compliance monitoring reduces risk.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What dividend planning includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Current situation assessment (company profits, current salary and dividends, personal tax situation, tax efficiency analysis)</li>
            <li>Optimal salary and dividend calculation (tax modelling, optimal mix identification, dividend allowance planning, personal allowance consideration)</li>
            <li>Dividend strategy development (strategy recommendations, tax year planning, profit availability planning, long-term planning)</li>
            <li>Dividend declaration and paperwork (dividend vouchers, board minutes, dividend records, compliance)</li>
            <li>Tax return support (dividend reporting, dividend tax calculation, tax return filing, tax queries)</li>
            <li>Ongoing dividend planning (regular reviews, tax updates, profit monitoring, strategy adjustments)</li>
            <li>Compliance monitoring (dividend compliance, profit availability, record keeping, tax compliance)</li>
          </ul>
        </div>

        <p>
          We provide comprehensive dividend planning services, from strategy development to ongoing planning. The key is balancing salary and dividends to optimise tax efficiency, utilising dividend allowance effectively, and ensuring compliance with company law and tax rules.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Service scope</strong> — One-off dividend planning and calculation vs. comprehensive service (planning, ongoing support, tax return support, compliance monitoring) affects scope and cost.
          </li>
          <li>
            <strong>Complexity</strong> — Simple situations (single director, straightforward profits) vs. complex situations (multiple directors, complex profit structures, multiple income sources) affects time and expertise required.
          </li>
          <li>
            <strong>Ongoing support level</strong> — One-off planning vs. ongoing support (annual reviews, ongoing planning, tax return support) affects ongoing cost.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Dividend planning and calculation (one-off):</strong> £300–£800 (includes situation assessment, optimal salary and dividend calculation, dividend strategy development, dividend declaration support)
          </li>
          <li>
            <strong>Dividend tax planning (one-off, comprehensive):</strong> £500–£1,200 (includes comprehensive planning, tax modelling, strategy development, dividend declaration, tax return support)
          </li>
          <li>
            <strong>Ongoing dividend planning service (annual reviews and support):</strong> £400–£1,000+ per year (includes annual planning, regular reviews, tax updates, profit monitoring, strategy adjustments, tax return support)
          </li>
          <li>
            <strong>Comprehensive dividend planning service (full service, ongoing support):</strong> £600–£1,500+ per year (includes comprehensive planning, ongoing support, tax return support, compliance monitoring, regular reviews)
          </li>
        </ul>

        <p>
          <strong>Why dividend planning costs what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Tax expertise</strong> — Dividend planning requires expertise in tax law, dividend tax, income tax, National Insurance, and corporation tax, which is complex and requires specialist knowledge.
          </li>
          <li>
            <strong>Time and analysis</strong> — Situation assessment, tax modelling, optimal calculation, and strategy development require time and detailed analysis.
          </li>
          <li>
            <strong>Value provided</strong> — Dividend planning helps you reduce overall tax liability, potentially saving thousands of pounds in tax each year, providing substantial value.
          </li>
          <li>
            <strong>Ongoing support</strong> — Ongoing dividend planning requires ongoing time and resources to stay up-to-date with tax rules and provide ongoing advice.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Dividend planning and calculation typically takes 1–2 weeks. Dividend strategy development typically takes 1–2 weeks. Ongoing planning is provided throughout the year, with annual reviews typically taking 1–2 weeks.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced upon completion of work or annually for ongoing services. Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes situation assessment, optimal calculation, strategy development, dividend declaration support, tax return support, and ongoing planning. Additional services (complex tax planning, specialist advice, etc.) may be charged separately if not included in standard service.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For limited company directors in Kent, whether you&apos;re a director in Medway needing dividend strategy planning, a company director in Maidstone wanting optimal salary and dividend calculation, or a director in Canterbury needing dividend tax planning, dividend planning helps you take money out of your company tax-efficiently. Many Kent directors don&apos;t understand dividend planning or how to balance salary and dividends tax-efficiently, leading to paying more tax than necessary and missing tax-saving opportunities. We help local directors develop dividend strategies, calculate optimal salary and dividend mixes, utilise dividend allowance effectively, and maintain compliance with company law and tax rules.
        </p>

        <p>
          <strong>Common Kent dividend planning scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>New directors</strong> — Directors just starting out, needing dividend planning to take money out of company tax-efficiently.
          </li>
          <li>
            <strong>Directors with growing profits</strong> — Directors with growing company profits, needing dividend planning to optimise tax efficiency.
          </li>
          <li>
            <strong>Directors with tax concerns</strong> — Directors concerned about tax efficiency, wanting to reduce overall tax liability.
          </li>
          <li>
            <strong>Directors needing compliance help</strong> — Directors needing help with dividend declaration, dividend records, and compliance.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent directors are dealing with. Dividend strategy planning, optimal calculation, dividend declaration, tax return support—we&apos;ll provide your dividend planning services that help you take money out of your company tax-efficiently.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Dividend Planning Ltd Directors - Frequently Asked Questions"
          subtitle="Common questions about dividend planning, dividend tax, and salary vs dividends"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/dividend-vs-salary-optimisation-planning/">Dividend vs Salary Optimisation Planning</Link> — Dividend vs salary optimisation services
            </li>
            <li>
              <Link href="/services/tax/company-director-tax-returns/">Company Director Tax Returns</Link> — Company director tax return services
            </li>
            <li>
              <Link href="/services/tax/corporation-tax-ct600-filing/">Corporation Tax CT600 Filing</Link> — Corporation tax filing services
            </li>
          </ul>
          <p>
            <Link href="/services/core/" className="font-semibold">
              View all core services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with dividend planning?" description="Don't pay more tax than necessary or miss out on tax-saving opportunities. We'll help you balance salary and dividends to reduce overall tax liability and take money out of your company tax-efficiently. No confusion, no tax waste—just efficient dividend planning that helps you take money out of your company tax-efficiently." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with dividend planning?" />
    </>
  );
}

