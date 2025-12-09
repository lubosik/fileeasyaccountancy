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
  title: 'Capital Gains Tax Returns Services in Kent | File Easy Accountancy',
  description: 'Expert Capital Gains Tax return services in Kent. CGT returns, capital gains tax calculations, property CGT, CGT allowances. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/capital-gains-tax-returns/',
  },
  openGraph: {
    title: 'Capital Gains Tax Returns Services in Kent | File Easy Accountancy',
    description: 'Expert Capital Gains Tax return services in Kent. CGT returns, capital gains tax calculations, property CGT, CGT allowances.',
    url: 'https://fileeasyaccountancy.co.uk/services/capital-gains-tax-returns/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Do I need to file a capital gains tax return?',
    answer: 'It depends. If you sold UK residential property, you must file a CGT return within 60 days if there\'s tax due (even if you\'ve made a loss or are within the allowance). For other assets, you need to report capital gains on your Self Assessment return if your gains exceed the annual exemption (£3,000) or if total proceeds exceed 4 times the exemption (£12,000). You also need to report if you\'ve made disposals that need to be declared, even if no tax is due. If you\'re not sure, it\'s worth checking—it\'s better to report than risk penalties.',
  },
  {
    question: 'How do I calculate capital gains tax?',
    answer: 'Calculate your gain first: sale proceeds minus purchase cost, improvement costs, and disposal costs. Then deduct your annual exemption (£3,000 for 2024/25). The remaining gain is taxed at 18% if you\'re a basic rate taxpayer, or 24% if you\'re a higher/additional rate taxpayer. If your gain pushes you into a higher tax band, calculate the portion at each rate separately. Don\'t forget to check if any reliefs apply (Private Residence Relief, Business Asset Disposal Relief) as these can significantly reduce your CGT bill. We can help you work through the calculation if you\'re not sure.',
  },
  {
    question: 'What is the capital gains tax rate?',
    answer: 'From October 2024, CGT rates are: 18% for basic rate taxpayers and 24% for higher/additional rate taxpayers (for most assets and residential property). The rate depends on your income tax band—if your total income and gains are below £50,270, you pay 18%. Above that, you pay 24%. If a large gain pushes you into a higher band, part of the gain will be taxed at 18% and part at 24%. Business Asset Disposal Relief (BADR) may reduce the rate to 10% on gains up to £1 million if you qualify.',
  },
  {
    question: 'When do I need to report capital gains?',
    answer: 'For UK residential property sales, you must report and pay CGT within 60 days of completion if there\'s tax due. For other assets (shares, investments, etc.), you report capital gains on your Self Assessment return by 31 January following the tax year end. Even if you\'re within the annual exemption, you may still need to report if total proceeds exceed £12,000 or if HMRC requires it. It\'s worth reporting to avoid penalties—if you\'re not sure, check with an accountant or HMRC.',
  },
  {
    question: 'What is the capital gains tax allowance?',
    answer: 'The annual CGT allowance (annual exempt amount) is £3,000 for the 2024/25 tax year. This means you only pay CGT on gains above this amount. The allowance was reduced from £6,000 in 2023/24 and £12,300 in 2022/23, so more people are now liable for CGT. You can\'t carry the allowance forward if you don\'t use it, so it\'s worth using it if you have gains to report. If you\'re married or in a civil partnership, you each get a £3,000 allowance, so you can transfer assets between you to utilize both allowances.',
  },
  {
    question: 'How do I file a capital gains tax return?',
    answer: 'For UK residential property sales, you file a CGT return online via HMRC\'s Capital Gains Tax on UK property service within 60 days of completion. For other assets, you report capital gains on your Self Assessment return (online or paper) by 31 January. You\'ll need details of your disposals (sale proceeds, purchase costs, improvement costs, disposal costs), your annual exemption, and any relief claims. If you\'re not comfortable doing this yourself, an accountant can file on your behalf. We can help you prepare and file your CGT return if you need assistance.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Capital Gains Tax Returns', href: '/services/tax/capital-gains-tax-returns' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function CapitalGainsTaxReturnsPage() {
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
            serviceType: 'Capital Gains Tax Returns',
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
            description: 'Expert Capital Gains Tax return services in Kent. CGT returns, capital gains tax calculations, property CGT, CGT allowances.',
            name: 'Capital Gains Tax Returns',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/capital-gains-tax-returns/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Preparation Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Simple CGT Return' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Property CGT Return (60-day)' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complex CGT Return with Reliefs' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Capital Gains Tax Returns"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;ve sold or disposed of assets like property, shares, or investments, you might need to pay Capital Gains Tax (CGT) and file a CGT return. You must report capital gains and pay CGT within 60 days of selling a UK residential property if there&apos;s tax due (
          <a href="https://www.gov.uk/report-and-pay-capital-gains-tax" target="_blank" rel="noopener noreferrer">
            gov.uk report and pay CGT
          </a>
          ). Capital Gains Tax rates are 18% (basic rate) or 24% (higher/additional rate) for most assets, and 18% or 24% for residential property (
          <a href="https://www.gov.uk/capital-gains-tax" target="_blank" rel="noopener noreferrer">
            gov.uk Capital Gains Tax
          </a>
          ). The annual CGT allowance for 2024/25 is £3,000 (reduced from £6,000 in 2023/24).
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>You must report capital gains and pay CGT within 60 days</strong> — For UK residential property sales, you need to report and pay CGT within 60 days of completion if there&apos;s tax due
            </li>
            <li>
              <strong>Capital Gains Tax rates are 18% or 24%</strong> — Depending on your income tax band (18% for basic rate taxpayers, 24% for higher/additional rate taxpayers)
            </li>
            <li>
              <strong>The annual CGT allowance is £3,000</strong> — For 2024/25, you only pay CGT on gains above this amount
            </li>
            <li>
              <strong>You only pay CGT on profits, not the full sale price</strong> — You can deduct purchase costs, improvement costs, and disposal costs from your gain
            </li>
          </ul>
        </div>

        <p>
          The problem is most people don&apos;t understand when CGT applies or how to calculate it. They don&apos;t know about the 60-day reporting deadline for property sales, struggle with CGT calculations, or miss allowable costs that reduce their tax. That causes problems—late filing penalties, overpaid tax from incorrect calculations, and stress from HMRC enquiries.
        </p>

        <p>
          We handle Capital Gains Tax returns for people who&apos;ve sold or disposed of assets: CGT calculations (calculating gains correctly with all allowable costs and reliefs), property CGT returns (60-day reporting for UK residential property sales), Self Assessment CGT reporting (reporting capital gains on Self Assessment returns), CGT relief claims (claiming Private Residence Relief, Business Asset Disposal Relief, or other available reliefs), and tax planning (planning asset disposals to minimize CGT within legal limits). Whether you&apos;re in Medway and sold a second property, in Maidstone with share disposals, or in Canterbury needing CGT calculations, we&apos;ll handle your Capital Gains Tax returns that work. No penalties, no overpaid tax—just proper CGT compliance that keeps you right.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet CGT reporting deadlines</strong> — File your CGT return within 60 days for property sales, or report gains on Self Assessment by the deadline. On-time reporting means no penalties or interest.
          </li>
          <li>
            <strong>Calculate CGT correctly</strong> — Work out your gains accurately with all allowable costs and reliefs. Correct calculations mean you pay the right amount of tax.
          </li>
          <li>
            <strong>Claim all available reliefs</strong> — Make sure you&apos;re claiming Private Residence Relief, Business Asset Disposal Relief, or other reliefs you&apos;re entitled to. Maximising reliefs reduces your CGT bill legally.
          </li>
          <li>
            <strong>Minimize CGT through planning</strong> — Plan asset disposals to use your annual allowance efficiently and stay within lower tax bands. Tax planning reduces your overall CGT liability.
          </li>
          <li>
            <strong>Avoid penalties and interest</strong> — Report and pay on time to avoid late filing penalties and interest charges. Compliance means no unexpected costs.
          </li>
          <li>
            <strong>Understand your CGT obligations</strong> — We&apos;ll explain when CGT applies, how much you&apos;ll pay, and what you need to report. Understanding your obligations helps you plan and budget better.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for Capital Gains Tax returns:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your situation: what assets you&apos;ve sold or disposed of, when you sold them, what you bought them for, whether you&apos;ve made other disposals, and what you want to achieve.
          </li>
          <li>
            <strong>CGT calculation</strong> — We calculate your capital gains:
            <ul>
              <li>
                <strong>Sale proceeds</strong> — Amount received from the disposal (sale price, compensation, insurance payouts, etc.)
              </li>
              <li>
                <strong>Purchase cost</strong> — Original purchase price plus incidental costs (legal fees, stamp duty, survey fees, etc.)
              </li>
              <li>
                <strong>Improvement costs</strong> — Costs of capital improvements that enhance the asset&apos;s value (extensions, renovations, etc.)
              </li>
              <li>
                <strong>Disposal costs</strong> — Costs of selling (legal fees, estate agent fees, advertising, etc.)
              </li>
              <li>
                <strong>Allowable deductions</strong> — All costs that can be deducted from the gain
              </li>
              <li>
                <strong>Chargeable gain</strong> — Sale proceeds minus all allowable costs (this is your taxable gain)
              </li>
            </ul>
            CGT calculation ensures your gain is calculated correctly with all allowable costs deducted.
          </li>
          <li>
            <strong>Apply annual exemption</strong> — We apply your CGT allowance:
            <ul>
              <li>
                <strong>Annual exemption (£3,000 for 2024/25)</strong> — Deduct this from your total gains for the tax year
              </li>
              <li>
                <strong>Remaining taxable gain</strong> — Only gains above the annual exemption are subject to CGT
              </li>
              <li>
                <strong>Utilisation</strong> — Use the annual exemption efficiently across multiple disposals if you have them
              </li>
            </ul>
            Annual exemption reduces your taxable gain, so you only pay CGT on gains above £3,000.
          </li>
          <li>
            <strong>Determine tax rate</strong> — We work out your CGT rate:
            <ul>
              <li>
                <strong>Income tax band</strong> — Check which income tax band you&apos;re in (basic rate up to £50,270, higher rate above)
              </li>
              <li>
                <strong>Gain addition</strong> — Add your capital gains to your income to determine your total taxable income
              </li>
              <li>
                <strong>Rate application</strong> — Apply 18% if you&apos;re a basic rate taxpayer, or 24% if you&apos;re a higher/additional rate taxpayer
              </li>
              <li>
                <strong>Mixed rates</strong> — If gains push you into a higher band, calculate the portion at each rate separately
              </li>
            </ul>
            CGT rate depends on your income tax band, so the rate can vary depending on your total income.
          </li>
          <li>
            <strong>Claim available reliefs</strong> — We check what reliefs apply:
            <ul>
              <li>
                <strong>Private Residence Relief</strong> — If you sold your main home, this may exempt all or part of the gain
              </li>
              <li>
                <strong>Business Asset Disposal Relief (BADR)</strong> — If you sold business assets, this may reduce the rate to 10% on gains up to £1 million
              </li>
              <li>
                <strong>Letting Relief</strong> — Limited relief if you let out your main residence (only applies if you lived in it while letting)
              </li>
              <li>
                <strong>Marriage allowance/transfer</strong> — If transferring between spouses, this can defer or eliminate CGT
              </li>
              <li>
                <strong>Other reliefs</strong> — Check for any other applicable reliefs (gifts, inheritance, etc.)
              </li>
            </ul>
            Relief claims can significantly reduce your CGT bill, so it&apos;s worth checking what applies.
          </li>
          <li>
            <strong>Report and pay CGT</strong> — We handle your CGT return:
            <ul>
              <li>
                <strong>60-day property reporting</strong> — For UK residential property sales, submit a CGT return within 60 days via HMRC&apos;s online service
              </li>
              <li>
                <strong>Self Assessment reporting</strong> — Report other capital gains on your Self Assessment return (by 31 January)
              </li>
              <li>
                <strong>Payment calculation</strong> — Calculate CGT due (after annual exemption and reliefs)
              </li>
              <li>
                <strong>Payment arrangement</strong> — Arrange payment with CGT return or through Self Assessment
              </li>
              <li>
                <strong>Filing confirmation</strong> — Get confirmation from HMRC that returns have been received and payments processed
              </li>
            </ul>
            CGT reporting ensures you meet deadlines and pay the right amount of tax on time.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What Capital Gains Tax return filing includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>CGT calculation (sale proceeds, purchase cost, improvement costs, disposal costs, allowable deductions, chargeable gain)</li>
            <li>Annual exemption application (£3,000 allowance, remaining taxable gain, utilization)</li>
            <li>Tax rate determination (income tax band, gain addition, rate application, mixed rates)</li>
            <li>Relief claims (Private Residence Relief, BADR, Letting Relief, marriage allowance, other reliefs)</li>
            <li>Reporting and payment (60-day property reporting, Self Assessment reporting, payment calculation, payment arrangement, filing confirmation)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>CGT rates (from October 2024):</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Basic rate taxpayers</strong> — 18% for most assets, 18% for residential property
            </li>
            <li>
              <strong>Higher/additional rate taxpayers</strong> — 24% for most assets, 24% for residential property
            </li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>Annual CGT exemption:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>2024/25:</strong> £3,000 per person per tax year
            </li>
            <li>
              <strong>Reduced from:</strong> £6,000 in 2023/24, £12,300 in 2022/23
            </li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>60-day reporting deadline:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>UK residential property sales</strong> — Must report and pay CGT within 60 days of completion if there&apos;s tax due
            </li>
            <li>
              <strong>Other assets</strong> — Report on Self Assessment return by 31 January following the tax year end
            </li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>Private Residence Relief:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Main home exemption</strong> — Your main residence is generally exempt from CGT
            </li>
            <li>
              <strong>Partial relief</strong> — If you lived in the property for part of the time, you get partial relief
            </li>
            <li>
              <strong>Conditions</strong> — Property must be your only or main residence during ownership
            </li>
          </ul>
        </div>

        <p>
          We handle all aspects of Capital Gains Tax returns. The key is calculating gains correctly with all allowable costs, applying the annual exemption efficiently, claiming all available reliefs, and reporting on time, so you pay the right amount of tax and avoid penalties.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of disposals</strong> — More disposals mean more calculations, so costs increase
          </li>
          <li>
            <strong>Complexity of assets</strong> — Simple disposals (shares, straightforward property) cost less than complex disposals (business assets, multiple properties, mixed use)
          </li>
          <li>
            <strong>Relief claims</strong> — If you need relief claims (Private Residence Relief, BADR), this may add to the cost
          </li>
          <li>
            <strong>Reporting method</strong> — 60-day property reporting or Self Assessment reporting (different procedures)
          </li>
          <li>
            <strong>Tax planning</strong> — If you need CGT planning advice (timing disposals, using allowances), this is separate
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple CGT return (single disposal):</strong> £150–£300 for straightforward CGT calculation and reporting (single property or share disposal)
          </li>
          <li>
            <strong>Standard CGT return (multiple disposals):</strong> £250–£500 for typical CGT returns (multiple disposals, some relief claims, annual exemption optimization)
          </li>
          <li>
            <strong>Complex CGT return (business assets):</strong> £400–£800 for complex CGT returns (business assets, BADR claims, multiple reliefs, detailed calculations)
          </li>
          <li>
            <strong>60-day property CGT return:</strong> £200–£400 for UK residential property sales requiring 60-day reporting and payment
          </li>
          <li>
            <strong>CGT planning consultation:</strong> £150–£300 for advice on timing disposals and minimizing CGT liability
          </li>
        </ul>

        <p>
          <strong>Why Capital Gains Tax return filing costs what it does:</strong>
        </p>
        <ul>
          <li>CGT calculations require detailed work to identify all allowable costs and calculate gains accurately</li>
          <li>Relief claims require understanding of complex relief rules and preparing proper claims</li>
          <li>Reporting requires understanding different deadlines and procedures (60-day property reporting vs Self Assessment)</li>
          <li>Tax planning requires analyzing your situation and providing strategic advice on timing disposals</li>
          <li>Professional expertise ensures accurate calculations, proper relief claims, and compliance with deadlines</li>
        </ul>

        <p>
          <strong>Timeline:</strong> For 60-day property CGT returns, we aim to calculate and submit within 1-2 weeks from when we receive all your information (allowing time for HMRC processing within the 60-day deadline). For Self Assessment CGT reporting, this is included in your Self Assessment return preparation timeline (usually 2-4 weeks before the 31 January deadline). CGT planning consultations can be arranged as needed.
        </p>

        <p>
          <strong>Payment:</strong> CGT must be paid within 60 days for property sales (along with the return). For other assets, CGT is paid through Self Assessment by 31 January. If you can&apos;t pay immediately, HMRC may accept payment plans, but interest will be charged on late payments. We can help you understand payment options if needed.
        </p>

        <p>
          <strong>No hidden fees.</strong> CGT return price includes calculation, annual exemption application, relief claims, reporting, and payment coordination. CGT planning consultations are separate if you want them.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with people across Kent who&apos;ve sold or disposed of assets: people in Medway who sold a second property, people in Maidstone with share disposals, and people in Canterbury needing CGT calculations and relief claims.
        </p>

        <p>
          Kent taxpayers face the same CGT obligations as everyone else—60-day reporting deadlines for property sales, CGT calculations with annual exemptions, and relief claims for main homes or business assets. The difference is when you get proper help with Capital Gains Tax returns, you calculate gains correctly, claim all reliefs, and report on time. That&apos;s what helps Kent taxpayers minimize their CGT bill and avoid penalties.
        </p>

        <p>
          <strong>Common Kent CGT scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Property disposals</strong> — People selling second homes, buy-to-let properties, or investment properties in Kent
          </li>
          <li>
            <strong>Share disposals</strong> — People selling shares, investments, or business assets
          </li>
          <li>
            <strong>Business asset sales</strong> — Business owners selling assets and claiming Business Asset Disposal Relief
          </li>
          <li>
            <strong>Main home sales</strong> — People selling their main residence and claiming Private Residence Relief
          </li>
          <li>
            <strong>Multiple disposals</strong> — People with several disposals needing annual exemption optimization
          </li>
        </ul>

        <p>
          <strong>Kent property market context:</strong>
        </p>
        <ul>
          <li>Kent has a strong property market with many people buying and selling property (investment properties, second homes)</li>
          <li>Proper CGT help helps Kent property sellers calculate gains correctly and claim reliefs</li>
          <li>60-day reporting deadlines help Kent property sellers avoid penalties for late filing</li>
          <li>CGT planning helps Kent taxpayers minimize tax when disposing of assets</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent taxpayers are dealing with. CGT calculations, relief claims, 60-day reporting, Self Assessment reporting—we&apos;ll handle your Capital Gains Tax returns that keep you compliant and minimize your tax bill.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Capital Gains Tax Returns - Frequently Asked Questions"
          subtitle="Common questions about CGT returns and capital gains calculations"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Self Assessment returns where CGT is reported
            </li>
            <li>
              <Link href="/services/tax/landlord-tax-returns/">Landlord Tax Returns</Link> — Property income tax returns (different from CGT on property sales)
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — CGT planning to minimize tax liability
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with your Capital Gains Tax return?" description="Don't let CGT calculations and deadlines stress you out. We'll help you calculate gains correctly, claim all available reliefs, and file on time to avoid penalties. No penalties, no overpaid tax—just proper CGT compliance that keeps you right." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with Capital Gains Tax returns?" />
    </>
  );
}

