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
  title: 'Pension Tax Relief Claims Services in Kent | File Easy Accountancy',
  description: 'Expert pension tax relief claims in Kent. Pension tax relief claims, pension tax relief UK, pension contributions tax relief, claim pension tax relief. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/pension-tax-relief-claims/',
  },
  openGraph: {
    title: 'Pension Tax Relief Claims Services in Kent | File Easy Accountancy',
    description: 'Expert pension tax relief claims in Kent. Pension tax relief claims, pension tax relief UK, pension contributions tax relief, claim pension tax relief.',
    url: 'https://fileeasyaccountancy.co.uk/services/pension-tax-relief-claims/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I claim pension tax relief?',
    answer: 'How you claim pension tax relief depends on your tax rate and employment status. Basic-rate taxpayers (20%) get automatic 20% relief added by their pension provider, so no further action is needed. Higher-rate taxpayers (40%) and additional-rate taxpayers (45%) must claim additional relief themselves—you can do this by including pension contributions on your Self Assessment return (if you file one) or by using HMRC\'s online service (available from February 2025). Self-employed individuals must claim all pension tax relief through Self Assessment, as they don\'t get automatic relief. The key is identifying what relief you\'re entitled to and claiming it through the right method.',
  },
  {
    question: 'How much pension tax relief can I claim?',
    answer: 'The amount of pension tax relief you can claim depends on your income tax rate. Basic-rate taxpayers (20%) get 20% relief automatically—for every £800 you contribute, the government adds £200. Higher-rate taxpayers (40%) can claim up to 40% total relief—20% automatic plus 20% additional that must be claimed. Additional-rate taxpayers (45%) can claim up to 45% total relief—20% automatic plus 25% additional that must be claimed. However, you can only receive tax relief on contributions up to the annual allowance (£60,000 for 2025/26 or 100% of your salary if lower), and you must have sufficient income tax liability at the higher or additional rate to claim the full relief. The maximum contribution you can get relief on is also limited to the higher of 100% of your UK taxable earnings or £3,600.',
  },
  {
    question: 'What is pension tax relief?',
    answer: 'Pension tax relief is a government incentive that adds money to your pension when you make contributions, effectively giving you back some of the tax you\'ve paid. The government provides tax relief because pension contributions reduce your taxable income, meaning you pay less tax. Basic-rate taxpayers get 20% relief automatically (contributing £800 gets £200 added), higher-rate taxpayers get 40% total relief (20% automatic plus 20% claimed), and additional-rate taxpayers get 45% total relief (20% automatic plus 25% claimed). Tax relief encourages people to save for retirement by making pension contributions more affordable. The relief is subject to annual allowance limits (£60,000 for 2025/26) and you must have relevant UK earnings to qualify.',
  },
  {
    question: 'How does pension tax relief work?',
    answer: 'Pension tax relief works in different ways depending on your pension scheme. For workplace pensions, your employer deducts contributions before Income Tax, so you automatically get tax relief. For personal pensions with "relief at source", your pension provider claims 20% basic-rate relief from the government and adds it to your pension—so if you contribute £800, £200 is added automatically. Higher-rate and additional-rate taxpayers then need to claim the additional relief (20% or 25%) themselves through Self Assessment or HMRC\'s online service. For self-employed individuals, there\'s no automatic relief—all relief must be claimed through Self Assessment based on trading income. The relief reduces your tax bill or results in a refund, effectively making pension contributions cheaper.',
  },
  {
    question: 'Do I need to claim pension tax relief?',
    answer: 'Whether you need to claim pension tax relief depends on your tax rate. Basic-rate taxpayers (20%) don\'t need to claim anything—20% relief is added automatically by your pension provider or employer. Higher-rate taxpayers (40%) and additional-rate taxpayers (45%) must claim the additional relief themselves (20% or 25% extra), as only basic-rate relief is automatic. Self-employed individuals must claim all pension tax relief through Self Assessment, as they don\'t get automatic relief. If you\'re a higher-rate or additional-rate taxpayer and you\'re not claiming the additional relief, you\'re missing out on significant tax savings each year. It\'s worth checking if you need to claim—an accountant can help you identify your entitlement.',
  },
  {
    question: 'Can I claim pension tax relief on Self Assessment?',
    answer: 'Yes, you can claim pension tax relief on Self Assessment. Higher-rate and additional-rate taxpayers can include pension contributions on their Self Assessment return to claim additional relief (20% or 25% extra beyond the automatic 20%). Self-employed individuals must claim all pension tax relief through Self Assessment, as they don\'t get automatic relief. When you include pension contributions on your Self Assessment return, HMRC calculates the relief and either reduces your tax bill or issues a refund. If you don\'t file Self Assessment but need to claim relief, you can use HMRC\'s online service (available from February 2025) instead. The key is ensuring your contributions are included on your return and that relief is calculated correctly.',
  },
  {
    question: 'What is the pension annual allowance?',
    answer: 'The pension annual allowance is the maximum amount of pension contributions you can receive tax relief on each tax year. For 2025/26, the standard annual allowance is £60,000 (or 100% of your salary if lower). If you contribute more than this, you\'ll face an annual allowance charge. However, you can carry forward unused annual allowance from the previous three tax years, which means you might be able to contribute more than £60,000 in a single year if you didn\'t use your full allowance in previous years. There\'s also a "money purchase annual allowance" of £10,000 that applies if you\'ve flexibly accessed any of your pension benefits. The annual allowance helps ensure tax relief is targeted and prevents excessive contributions from high earners.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Pension Tax Relief Claims', href: '/services/tax/pension-tax-relief-claims' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function PensionTaxReliefClaimsPage() {
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
            serviceType: 'Pension Tax Relief Claims',
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
            description: 'Expert pension tax relief claims in Kent. Pension tax relief claims, pension tax relief UK, pension contributions tax relief, claim pension tax relief.',
            name: 'Pension Tax Relief Claims',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/pension-tax-relief-claims/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Pension Tax Relief Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pension Tax Relief Calculation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Self Assessment Claims' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Annual Allowance Checks' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carry-Forward Calculations' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Pension Tax Relief Claims"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re making pension contributions, you&apos;re entitled to tax relief—which basically means the government adds money to your pension based on the tax you&apos;ve paid. Pension tax relief is a government incentive that adds money to your pension when you make contributions, with basic-rate taxpayers (20%) receiving automatic relief of 20% (contributing £800 gets £200 tax relief added) (
          <a href="https://www.gov.uk/tax-on-your-private-pension/pension-tax-relief" target="_blank" rel="noopener noreferrer">
            gov.uk pension tax relief
          </a>
          ). Higher-rate taxpayers (40%) and additional-rate taxpayers (45%) must claim additional tax relief themselves through Self Assessment or HMRC&apos;s online service, as only basic-rate relief (20%) is automatic. The maximum amount of pension contributions you can receive tax relief on is the higher of 100% of your UK taxable earnings or £3,600, with the annual allowance set at £60,000 for 2025/26 (or 100% of salary if lower) (
          <a href="https://www.gov.uk/government/publications/rates-and-allowances-pension-schemes/pension-schemes-rates" target="_blank" rel="noopener noreferrer">
            gov.uk pension schemes rates
          </a>
          ).
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Basic-rate taxpayers get automatic 20% tax relief</strong> — For every £800 you contribute, the government adds £200, giving you £1,000 in your pension
            </li>
            <li>
              <strong>Higher-rate and additional-rate taxpayers must claim additional relief</strong> — Only 20% relief is automatic; you must claim the extra 20% (higher rate) or 25% (additional rate) through Self Assessment or HMRC&apos;s online service
            </li>
            <li>
              <strong>Annual allowance is £60,000 for 2025/26</strong> — You can receive tax relief on contributions up to £60,000 or 100% of your salary (whichever is lower), with unused allowance from previous three years available to carry forward
            </li>
            <li>
              <strong>Self-employed individuals must claim all tax relief through Self Assessment</strong> — Unlike employees with workplace pensions, self-employed people must claim all pension tax relief through their tax return based on their trading income
            </li>
          </ul>
        </div>

        <p>
          The problem is most higher-rate and additional-rate taxpayers don&apos;t realise they need to claim the additional tax relief themselves, or they struggle with working out how much relief they&apos;re entitled to, when to claim it, and ensuring they don&apos;t exceed the annual allowance. That causes problems—missing out on thousands of pounds of tax relief each year, confusion about claiming methods, annual allowance charges if contributions exceed limits, and HMRC enquiries if relief is claimed incorrectly.
        </p>

        <p>
          We handle pension tax relief claims for taxpayers across Kent: pension contribution analysis (reviewing your pension contributions to identify what relief you&apos;re entitled to), tax relief calculations (calculating how much additional tax relief you can claim if you&apos;re a higher-rate or additional-rate taxpayer), Self Assessment claims (including pension contributions on your Self Assessment return to claim additional relief), HMRC online service claims (helping you claim through HMRC&apos;s online service if you don&apos;t file Self Assessment), annual allowance checks (ensuring your contributions don&apos;t exceed the annual allowance and checking carry-forward availability), and carry-forward calculations (calculating unused allowance from previous three years that you can use in the current year). Whether you&apos;re a higher-rate taxpayer in Medway missing out on relief, a self-employed individual in Maidstone making pension contributions, or a director in Canterbury optimising pension contributions, we&apos;ll handle your pension tax relief claims that work. No missed relief, no annual allowance issues—just proper pension tax relief that saves you money.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Claim all the tax relief you&apos;re entitled to</strong> — We&apos;ll help you identify and claim all pension tax relief, especially if you&apos;re a higher-rate or additional-rate taxpayer who needs to claim additional relief. Claiming all relief saves you money.
          </li>
          <li>
            <strong>Maximise your pension contributions</strong> — We&apos;ll help you work out the maximum you can contribute while getting tax relief, using annual allowances and carry-forward. Maximising contributions boosts your pension pot.
          </li>
          <li>
            <strong>Avoid annual allowance charges</strong> — We&apos;ll check that your contributions don&apos;t exceed the annual allowance (£60,000 or 100% of salary), avoiding charges. Avoiding charges saves you from unexpected tax bills.
          </li>
          <li>
            <strong>Simplify the claiming process</strong> — We&apos;ll handle the paperwork and claiming process for you, whether through Self Assessment or HMRC&apos;s online service. Simplifying the process saves you time and stress.
          </li>
          <li>
            <strong>Use carry-forward effectively</strong> — We&apos;ll calculate unused annual allowance from previous three years that you can use in the current year. Using carry-forward maximises your contribution potential.
          </li>
          <li>
            <strong>Stay compliant with pension rules</strong> — We&apos;ll ensure your claims meet HMRC requirements and that relief is calculated correctly. Compliance avoids HMRC enquiries and repayment requests.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for pension tax relief claims:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your pension: what type of pension scheme you have (workplace pension, personal pension, SIPP), how much you&apos;re contributing per year, what your income tax rate is (basic, higher, or additional rate), whether you&apos;re employed or self-employed, whether you&apos;ve claimed tax relief before, and what you want to achieve. Understanding your situation helps us identify what relief you&apos;re entitled to.
          </li>
          <li>
            <strong>Pension contribution review</strong> — We review your pension contributions:
            <ul>
              <li>
                <strong>Contribution amounts</strong> — We identify how much you&apos;ve contributed to pensions during the tax year (from payslips, pension statements, or records).
              </li>
              <li>
                <strong>Automatic relief received</strong> — We check what automatic relief you&apos;ve already received (usually 20% basic rate relief added by your pension provider or employer).
              </li>
              <li>
                <strong>Tax position</strong> — We confirm your income tax rate (basic 20%, higher 40%, or additional 45%) to determine if you&apos;re entitled to additional relief.
              </li>
            </ul>
            Pension contribution review identifies what relief you&apos;re entitled to.
          </li>
          <li>
            <strong>Tax relief calculation</strong> — We calculate your pension tax relief:
            <ul>
              <li>
                <strong>Basic-rate taxpayers</strong> — Automatic 20% relief is already added, so no further action needed (unless contributions exceed annual allowance).
              </li>
              <li>
                <strong>Higher-rate taxpayers</strong> — We calculate additional 20% relief (the difference between 20% automatic and 40% marginal rate) that needs to be claimed.
              </li>
              <li>
                <strong>Additional-rate taxpayers</strong> — We calculate additional 25% relief (the difference between 20% automatic and 45% marginal rate) that needs to be claimed.
              </li>
              <li>
                <strong>Self-employed</strong> — We calculate all relief based on trading income, as self-employed individuals don&apos;t get automatic relief.
              </li>
            </ul>
            Tax relief calculation shows you how much you can claim.
          </li>
          <li>
            <strong>Annual allowance check</strong> — We check annual allowance limits:
            <ul>
              <li>
                <strong>Standard annual allowance</strong> — £60,000 for 2025/26 (or 100% of salary if lower), with any excess subject to annual allowance charge.
              </li>
              <li>
                <strong>Carry-forward availability</strong> — We calculate unused annual allowance from previous three tax years that can be used in the current year.
              </li>
              <li>
                <strong>Money purchase annual allowance</strong> — If you&apos;ve flexibly accessed pension benefits, the £10,000 money purchase annual allowance applies instead.
              </li>
              <li>
                <strong>Excess contribution charges</strong> — We identify if contributions exceed allowance and calculate any charges due.
              </li>
            </ul>
            Annual allowance check ensures compliance and maximises contribution potential.
          </li>
          <li>
            <strong>Claim preparation</strong> — We prepare your pension tax relief claim:
            <ul>
              <li>
                <strong>Self Assessment method</strong> — If you file Self Assessment, we include pension contributions on your return to claim additional relief automatically.
              </li>
              <li>
                <strong>HMRC online service</strong> — If you don&apos;t file Self Assessment, we help you claim through HMRC&apos;s online service (available from February 2025).
              </li>
              <li>
                <strong>Documentation</strong> — We ensure you have pension contribution statements and records to support your claim.
              </li>
              <li>
                <strong>Claim calculations</strong> — We calculate the exact relief amount to claim based on your contributions and tax rate.
              </li>
            </ul>
            Claim preparation ensures accurate and timely relief claims.
          </li>
          <li>
            <strong>Submission and follow-up</strong> — We submit your claim and follow up:
            <ul>
              <li>
                <strong>Return submission</strong> — We file your Self Assessment return including pension relief claim, or guide you through HMRC&apos;s online service.
              </li>
              <li>
                <strong>Relief receipt</strong> — We monitor for tax relief refunds or tax code adjustments from HMRC.
              </li>
              <li>
                <strong>Annual review</strong> — We review your pension contributions annually to ensure ongoing relief claims and annual allowance compliance.
              </li>
            </ul>
            Submission and follow-up ensures you receive all entitled relief.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What pension tax relief claims includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Review of pension contributions and automatic relief received</li>
            <li>Calculation of additional tax relief entitlement (higher-rate and additional-rate taxpayers)</li>
            <li>Annual allowance checks and carry-forward calculations</li>
            <li>Preparation and submission of Self Assessment claims or HMRC online service claims</li>
            <li>Monitoring of relief payments and tax code adjustments</li>
            <li>Annual reviews to ensure ongoing compliance and relief claims</li>
          </ul>
        </div>

        <p>
          We handle all aspects of pension tax relief claims, from identifying entitlement to submitting claims. The key is understanding what relief you&apos;re entitled to, claiming it correctly, and ensuring you stay within annual allowance limits.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Method of claiming</strong> — Self Assessment claims (if you already file Self Assessment) are simpler than standalone HMRC online service claims.
          </li>
          <li>
            <strong>Complexity of pension arrangements</strong> — Multiple pension schemes, carry-forward calculations, or annual allowance issues increase complexity.
          </li>
          <li>
            <strong>Number of tax years</strong> — Claims for current year vs. backdated claims for previous years (within time limits).
          </li>
          <li>
            <strong>Annual review requirements</strong> — One-off claims vs. ongoing annual reviews and claims.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>One-off pension tax relief claim (Self Assessment):</strong> £100–£300 (if already filing Self Assessment)
          </li>
          <li>
            <strong>Standalone pension tax relief claim (HMRC online service):</strong> £150–£400 (if not filing Self Assessment)
          </li>
          <li>
            <strong>Annual allowance check and carry-forward calculation:</strong> £100–£250
          </li>
          <li>
            <strong>Annual pension tax relief review (ongoing):</strong> £200–£500 per year (includes annual allowance checks and claims)
          </li>
          <li>
            <strong>Backdated claims (multiple years):</strong> £150–£300 per year, depending on complexity
          </li>
        </ul>

        <p>
          <strong>Why pension tax relief claims cost what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding pension tax relief rules, annual allowances, and claiming methods requires specialist knowledge.
          </li>
          <li>
            <strong>Calculation complexity</strong> — Calculating additional relief, carry-forward, and annual allowance charges requires careful calculation.
          </li>
          <li>
            <strong>Administrative time</strong> — Preparing claims, checking annual allowances, and submitting to HMRC takes time.
          </li>
          <li>
            <strong>Compliance risk</strong> — Ensuring claims are accurate and within limits protects you from HMRC enquiries and repayment requests.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> One-off pension tax relief claims typically take 1–2 weeks after we receive your pension contribution records. If claiming through Self Assessment, claims are submitted with your return (deadline 31 January). If using HMRC&apos;s online service, claims can be submitted throughout the year. HMRC usually processes claims within 4–6 weeks, issuing refunds or adjusting tax codes. Annual reviews are typically done as part of your annual tax planning process.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced on completion of the claim preparation and submission. For annual retainer services, invoiced annually or quarterly depending on arrangement.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes contribution review, tax relief calculation, annual allowance checks, claim preparation, and submission. Carry-forward calculations and annual reviews may be additional depending on your needs.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For taxpayers in Kent, whether you&apos;re a higher-rate taxpayer in Medway missing out on pension tax relief, a self-employed individual in Maidstone making pension contributions, or a director in Canterbury optimising pension planning, pension tax relief claims can save you significant money each year. Many Kent taxpayers don&apos;t realise they need to claim additional relief if they&apos;re higher-rate or additional-rate taxpayers, or they struggle with working out carry-forward and annual allowance limits. We help local taxpayers identify their entitlement, calculate relief correctly, and submit claims properly, ensuring they receive all the tax relief they&apos;re entitled to. It&apos;s worth checking—missing out on pension tax relief can cost you thousands of pounds each year, which adds up over time.
        </p>

        <p>
          <strong>Common Kent pension tax relief scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Higher-rate employees</strong> — Employees earning over £50,270 making workplace pension contributions, needing to claim additional 20% relief.
          </li>
          <li>
            <strong>Self-employed individuals</strong> — Self-employed people making personal pension contributions, needing to claim all relief through Self Assessment.
          </li>
          <li>
            <strong>Company directors</strong> — Directors making pension contributions, needing to optimise contributions within annual allowance limits.
          </li>
          <li>
            <strong>Multiple pension schemes</strong> — Taxpayers with workplace pensions and personal pensions, needing to aggregate contributions for annual allowance checks.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent taxpayers are dealing with. Pension contribution review, tax relief calculations, claim submission, annual allowance checks—we&apos;ll handle your pension tax relief claims that save you money and keep you compliant.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Pension Tax Relief Claims - Frequently Asked Questions"
          subtitle="Common questions about pension tax relief, claiming methods, and annual allowances"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Self Assessment returns where pension tax relief is claimed
            </li>
            <li>
              <Link href="/services/tax/high-earner-tax-planning/">High Earner Tax Planning</Link> — Tax planning including pension tax relief optimisation for high earners
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — General tax planning including pension contribution strategies
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help claiming pension tax relief?" description="Don't miss out on valuable tax relief. We'll help you identify what relief you're entitled to, calculate it correctly, and submit claims properly so you save money on your pension contributions. No missed relief, no annual allowance issues—just proper pension tax relief that saves you money." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help claiming pension tax relief?" />
    </>
  );
}

