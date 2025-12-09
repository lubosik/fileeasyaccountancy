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
  title: 'Foreign Income Tax Support Services in Kent | File Easy Accountancy',
  description: 'Expert foreign income tax support in Kent. Overseas income tax, foreign income reporting, double taxation relief, UK tax on foreign income. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/foreign-income-tax-support/',
  },
  openGraph: {
    title: 'Foreign Income Tax Support Services in Kent | File Easy Accountancy',
    description: 'Expert foreign income tax support in Kent. Overseas income tax, foreign income reporting, double taxation relief, UK tax on foreign income.',
    url: 'https://fileeasyaccountancy.co.uk/services/foreign-income-tax-support/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Do I pay tax on foreign income in UK?',
    answer: 'Yes, if you\'re UK resident, you generally pay UK tax on all your income worldwide, including foreign income. This includes foreign employment income, rental income from foreign properties, investment income from overseas, and foreign pensions. However, you can claim double taxation relief if you\'ve paid foreign tax on the same income, which prevents you from being taxed twice. Some foreign income may be exempt from UK tax under double taxation agreements, but you still need to declare it on your Self Assessment return.',
  },
  {
    question: 'How do I report foreign income on my tax return?',
    answer: 'You report foreign income on your Self Assessment return using the SA106 foreign pages (supplementary pages for foreign income). You need to: convert all foreign income to GBP using exchange rates at the time you received it, declare all foreign income on the SA106 pages, claim Foreign Tax Credit Relief if you\'ve paid foreign tax, provide details of foreign tax paid (foreign tax certificates or assessments), and file your return by 31 January. Even if your foreign income is exempt from UK tax under a double taxation agreement, you still need to declare it. We can help you complete the SA106 pages correctly.',
  },
  {
    question: 'What is double taxation relief?',
    answer: 'Double taxation relief is relief from UK tax for foreign tax you\'ve already paid on the same income. The UK has double taxation agreements with over 100 countries that allow you to claim Foreign Tax Credit Relief (FTCR). This means if you\'ve paid tax abroad on income that\'s also taxable in the UK, you can credit the foreign tax against your UK tax bill, so you don\'t pay tax twice. The relief is usually limited to the amount of UK tax due on that income, so if foreign tax is higher, you don\'t get a refund—but you don\'t pay extra UK tax either.',
  },
  {
    question: 'Do I pay UK tax on overseas income?',
    answer: 'Yes, if you\'re UK resident, you generally pay UK tax on overseas income. UK residents are taxed on their worldwide income, so foreign income is taxable in the UK even if it\'s already been taxed abroad. However, you can claim double taxation relief to avoid being taxed twice. Some types of foreign income may be exempt from UK tax under double taxation agreements, but most foreign income is taxable. The key is declaring it and claiming relief for any foreign tax paid. If you\'re non-domiciled and claim remittance basis, you may only pay UK tax on foreign income you bring into the UK.',
  },
  {
    question: 'How is foreign income taxed in UK?',
    answer: 'Foreign income is taxed at the same rates as UK income: Income Tax at 20%, 40%, or 45% depending on your income band, and Capital Gains Tax at 18% or 24% for gains on foreign assets. Foreign income is added to your UK income to determine your total taxable income and tax rate. You convert foreign income to GBP using exchange rates at the time you received it, then declare it on your Self Assessment return. If you\'ve paid foreign tax, you can claim Foreign Tax Credit Relief to reduce your UK tax. The effective tax rate depends on whether double taxation relief eliminates UK tax or only reduces it.',
  },
  {
    question: 'What is the foreign income tax rate?',
    answer: 'Foreign income is taxed at the same rates as UK income: Income Tax at 20% (basic rate), 40% (higher rate), or 45% (additional rate), and Capital Gains Tax at 18% or 24% depending on your income tax band. The rate depends on your total income (UK plus foreign income combined). However, if you\'ve paid foreign tax and claim double taxation relief, your effective UK tax rate may be lower—or zero if foreign tax equals or exceeds UK tax. Some foreign income may be exempt from UK tax entirely under double taxation agreements. The key is working out your total income, applying reliefs, and calculating the effective rate you\'ll pay.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Foreign Income Tax Support', href: '/services/tax/foreign-income-tax-support' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function ForeignIncomeTaxSupportPage() {
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
            serviceType: 'Foreign Income Tax Support',
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
            description: 'Expert foreign income tax support in Kent. Overseas income tax, foreign income reporting, double taxation relief, UK tax on foreign income.',
            name: 'Foreign Income Tax Support',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/foreign-income-tax-support/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Preparation Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Simple Foreign Income Tax Return' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complex Foreign Income Tax Support' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Double Taxation Relief Claims' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Foreign Income Tax Support"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re a UK resident with income from overseas—whether it&apos;s a job abroad, rental income from a foreign property, investments, or a pension from another country—you need to report it and may need to pay UK tax on it. UK residents are generally taxed on their worldwide income, including foreign income from employment, investments, property, and pensions (
          <a href="https://www.gov.uk/tax-foreign-income" target="_blank" rel="noopener noreferrer">
            gov.uk tax foreign income
          </a>
          ). You can claim double taxation relief if you&apos;ve paid foreign tax on income that&apos;s also taxable in the UK, preventing you from being taxed twice on the same income. Foreign income must be reported on your Self Assessment return, converted to GBP using the exchange rate at the time you received it.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>UK residents are taxed on worldwide income</strong> — Including foreign income from employment, investments, property, and pensions, regardless of where it&apos;s earned
            </li>
            <li>
              <strong>You can claim double taxation relief</strong> — If you&apos;ve paid foreign tax, you can claim credit against UK tax to avoid being taxed twice (
              <a href="https://www.gov.uk/tax-foreign-income/double-taxation-relief" target="_blank" rel="noopener noreferrer">
                gov.uk double taxation relief
              </a>
              )
            </li>
            <li>
              <strong>Foreign income must be reported on Self Assessment</strong> — All foreign income must be declared, converted to GBP, and reported on your tax return
            </li>
            <li>
              <strong>Tax treaties exist with over 100 countries</strong> — The UK has double taxation agreements that can reduce or eliminate UK tax on certain foreign income
            </li>
          </ul>
        </div>

        <p>
          The problem is most people don&apos;t understand foreign income tax rules. They think foreign income is tax-free, don&apos;t know about double taxation relief, or struggle with reporting foreign income in GBP. That causes problems—undeclared foreign income means HMRC enquiries and penalties, missing double taxation relief means overpaid tax, and incorrect reporting means compliance issues.
        </p>

        <p>
          We handle foreign income tax support for UK residents with overseas income: foreign income identification (identifying all foreign income sources that need reporting), foreign income reporting (reporting foreign income on Self Assessment returns with proper GBP conversions), double taxation relief claims (claiming Foreign Tax Credit Relief to avoid double taxation), tax treaty applications (applying double taxation agreements to reduce or eliminate UK tax), remittance basis advice (advising on remittance basis for non-domiciled UK residents), and tax planning (planning foreign income structures to minimize tax within legal limits). Whether you&apos;re in Medway with rental income from Spain, in Maidstone with employment income from abroad, or in Canterbury with investment income from overseas, we&apos;ll handle your foreign income tax that works. No double taxation, no overpaid tax—just proper foreign income tax compliance that keeps you right.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet foreign income reporting obligations</strong> — Report all foreign income on your Self Assessment return correctly. Proper reporting means no HMRC enquiries or penalties.
          </li>
          <li>
            <strong>Claim double taxation relief</strong> — Claim Foreign Tax Credit Relief to avoid paying tax twice on the same income. Double taxation relief saves you money on foreign income.
          </li>
          <li>
            <strong>Understand your tax obligations</strong> — Learn what foreign income is taxable in the UK and how to report it. Understanding your obligations helps you stay compliant.
          </li>
          <li>
            <strong>Apply tax treaties correctly</strong> — Use double taxation agreements to reduce or eliminate UK tax on foreign income. Tax treaties can significantly reduce your tax bill.
          </li>
          <li>
            <strong>Convert foreign income accurately</strong> — Convert foreign income to GBP using correct exchange rates. Accurate conversions ensure correct tax calculations.
          </li>
          <li>
            <strong>Plan foreign income tax efficiently</strong> — Structure foreign income to minimize tax legally through treaties and reliefs. Tax planning reduces your overall foreign income tax liability.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for foreign income tax support:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your foreign income: what foreign income sources you have (employment, property, investments, pensions), which countries the income comes from, whether you&apos;ve paid foreign tax, whether you&apos;re UK resident or non-domiciled, and what you want to achieve.
          </li>
          <li>
            <strong>Foreign income identification</strong> — We identify all foreign income:
            <ul>
              <li>
                <strong>Employment income</strong> — Foreign employment income (salary, bonuses, benefits from overseas jobs)
              </li>
              <li>
                <strong>Property income</strong> — Rental income from foreign properties (holiday lets, investment properties)
              </li>
              <li>
                <strong>Investment income</strong> — Foreign investment income (dividends, interest, capital gains from overseas investments)
              </li>
              <li>
                <strong>Pension income</strong> — Foreign pension income (pensions from other countries)
              </li>
              <li>
                <strong>Business income</strong> — Foreign business income (trading income from overseas businesses)
              </li>
              <li>
                <strong>Other income</strong> — Any other foreign income sources
              </li>
            </ul>
            Foreign income identification ensures we capture all income that needs reporting.
          </li>
          <li>
            <strong>Foreign income valuation</strong> — We value foreign income in GBP:
            <ul>
              <li>
                <strong>Exchange rate selection</strong> — Use correct exchange rates (usually the rate at the time income was received)
              </li>
              <li>
                <strong>Income conversion</strong> — Convert all foreign income to GBP using appropriate exchange rates
              </li>
              <li>
                <strong>Documentation</strong> — Document exchange rates used and conversion calculations
              </li>
              <li>
                <strong>Verification</strong> — Verify conversions are accurate and supported by evidence
              </li>
            </ul>
            Foreign income valuation ensures income is correctly converted to GBP for UK tax purposes.
          </li>
          <li>
            <strong>Double taxation relief assessment</strong> — We assess what relief is available:
            <ul>
              <li>
                <strong>Foreign tax identification</strong> — Identify foreign tax paid on each income source
              </li>
              <li>
                <strong>Tax treaty review</strong> — Review double taxation agreements between UK and source countries
              </li>
              <li>
                <strong>Relief calculation</strong> — Calculate Foreign Tax Credit Relief available for each income source
              </li>
              <li>
                <strong>Relief limitation</strong> — Check if relief is limited by treaty provisions or UK tax rates
              </li>
              <li>
                <strong>Documentation gathering</strong> — Gather foreign tax certificates and other evidence of foreign tax paid
              </li>
            </ul>
            Double taxation relief assessment ensures you claim all available relief to avoid double taxation.
          </li>
          <li>
            <strong>Self Assessment reporting</strong> — We report foreign income on your return:
            <ul>
              <li>
                <strong>SA106 foreign pages</strong> — Complete foreign income supplementary pages (SA106) with all foreign income
              </li>
              <li>
                <strong>Double taxation relief claim</strong> — Claim Foreign Tax Credit Relief where applicable
              </li>
              <li>
                <strong>Income declaration</strong> — Declare all foreign income (even if exempt under treaty)
              </li>
              <li>
                <strong>Supporting documentation</strong> — Include calculations and documentation supporting foreign income and relief claims
              </li>
              <li>
                <strong>Return filing</strong> — File your Self Assessment return with foreign income properly reported
              </li>
            </ul>
            Self Assessment reporting ensures foreign income is declared correctly and relief is claimed properly.
          </li>
          <li>
            <strong>Tax planning and optimization</strong> — We help optimize your foreign income tax position:
            <ul>
              <li>
                <strong>Tax treaty benefits</strong> — Maximize use of double taxation agreements to reduce UK tax
              </li>
              <li>
                <strong>Timing strategies</strong> — Consider timing of foreign income receipts to optimize tax position
              </li>
              <li>
                <strong>Remittance basis assessment</strong> — Evaluate whether remittance basis is beneficial (for non-domiciled UK residents)
              </li>
              <li>
                <strong>Structure optimization</strong> — Consider whether structuring foreign income differently could reduce tax
              </li>
            </ul>
            Tax planning ensures you minimize foreign income tax legally within available reliefs and treaties.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What foreign income tax support includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Foreign income identification (employment, property, investment, pension, business, other income)</li>
            <li>Foreign income valuation (exchange rate selection, income conversion, documentation, verification)</li>
            <li>Double taxation relief assessment (foreign tax identification, tax treaty review, relief calculation, relief limitation, documentation)</li>
            <li>Self Assessment reporting (SA106 pages, relief claims, income declaration, supporting documentation, return filing)</li>
            <li>Tax planning and optimization (tax treaty benefits, timing strategies, remittance basis, structure optimization)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Foreign income tax rules:</h3>
          <h4 style={{ marginTop: '1rem' }}>UK resident taxation:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Worldwide income taxable</strong> — UK residents are taxed on all income worldwide
            </li>
            <li>
              <strong>Foreign income must be declared</strong> — All foreign income must be reported on Self Assessment
            </li>
            <li>
              <strong>GBP conversion required</strong> — Foreign income must be converted to GBP using exchange rates at time of receipt
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Double taxation relief:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Foreign Tax Credit Relief (FTCR)</strong> — Credit for foreign tax paid against UK tax on the same income
            </li>
            <li>
              <strong>Tax treaties</strong> — Double taxation agreements with over 100 countries can provide relief
            </li>
            <li>
              <strong>Relief limitations</strong> — Relief is limited to UK tax due on the income or treaty provisions
            </li>
            <li>
              <strong>Documentation required</strong> — Foreign tax certificates or assessments needed to claim relief
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Remittance basis (non-domiciled UK residents):</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Only UK-sourced income taxable</strong> — If claiming remittance basis, only foreign income brought into UK is taxable
            </li>
            <li>
              <strong>Annual charge</strong> — Remittance basis requires payment of annual charge (£30,000 or £60,000 depending on years resident)
            </li>
            <li>
              <strong>7-year rule</strong> — No charge for first 7 years of UK residence, then charges apply
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Reporting requirements:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>SA106 foreign pages</strong> — Must complete foreign income supplementary pages on Self Assessment return
            </li>
            <li>
              <strong>All income declared</strong> — Must declare all foreign income even if exempt under treaty or claiming remittance basis
            </li>
            <li>
              <strong>Supporting documentation</strong> — Keep foreign tax certificates and exchange rate records
            </li>
          </ul>
        </div>

        <p>
          We handle all aspects of foreign income tax support. The key is identifying all foreign income, converting it accurately to GBP, claiming available double taxation relief, and reporting everything correctly on your Self Assessment return, so you pay the right amount of tax and avoid double taxation.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of foreign income sources</strong> — More income sources mean more analysis and reporting, so costs increase
          </li>
          <li>
            <strong>Number of countries</strong> — Multiple countries mean multiple tax treaties to review and apply
          </li>
          <li>
            <strong>Complexity of relief claims</strong> — Simple relief claims cost less than complex claims involving multiple treaties or relief limitations
          </li>
          <li>
            <strong>Remittance basis assessment</strong> — If you need remittance basis advice, this adds to the cost
          </li>
          <li>
            <strong>Tax planning complexity</strong> — If you need complex tax planning (multiple countries, complex structures), this affects pricing
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple foreign income return (single country, basic relief):</strong> £300–£600 for straightforward foreign income return with one income source, basic double taxation relief claim
          </li>
          <li>
            <strong>Standard foreign income return (multiple sources):</strong> £500–£1,000 for typical foreign income return with multiple income sources, standard relief claims
          </li>
          <li>
            <strong>Complex foreign income return (multiple countries):</strong> £800–£1,500+ for complex foreign income returns (multiple countries, complex treaties, remittance basis advice, detailed tax planning)
          </li>
          <li>
            <strong>Double taxation relief claim only:</strong> £200–£400 for assistance with claiming Foreign Tax Credit Relief on existing foreign income
          </li>
          <li>
            <strong>Remittance basis assessment:</strong> £300–£600 for advice on whether remittance basis is beneficial and how to claim it
          </li>
        </ul>

        <p>
          <strong>Why foreign income tax support costs what it does:</strong>
        </p>
        <ul>
          <li>Foreign income identification requires analyzing all income sources and determining what&apos;s taxable</li>
          <li>Foreign income valuation requires accurate exchange rate research and conversion calculations</li>
          <li>Double taxation relief assessment requires understanding tax treaties and calculating relief correctly</li>
          <li>Self Assessment reporting requires completing SA106 pages correctly with all foreign income and relief claims</li>
          <li>Tax planning requires analyzing opportunities to minimize tax through treaties and reliefs</li>
        </ul>

        <p>
          <strong>Timeline:</strong> For returns filed before the deadline, foreign income tax return preparation usually takes 2-4 weeks from when we receive all your foreign income information and foreign tax certificates. If multiple countries or complex treaties are involved, this may take longer. We&apos;ll need all information at least 6-8 weeks before the 31 January deadline to ensure on-time filing.
        </p>

        <p>
          <strong>Payment:</strong> Tax on foreign income is paid through Self Assessment by 31 January following the tax year end. Double taxation relief reduces the amount of tax due. If you can&apos;t pay immediately, HMRC may accept payment plans, but interest will be charged on late payments. We can help you understand payment options if needed.
        </p>

        <p>
          <strong>No hidden fees.</strong> Foreign income tax support price includes income identification, valuation, relief assessment, Self Assessment reporting, and basic tax planning. Complex tax planning or remittance basis applications are separate if needed.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with people across Kent who have foreign income: people in Medway with rental income from Spain or France, people in Maidstone with employment income from abroad, and people in Canterbury with investment income or pensions from overseas.
        </p>

        <p>
          Kent residents face the same foreign income tax obligations as everyone else—reporting worldwide income, claiming double taxation relief, and applying tax treaties correctly. The difference is when you get proper help with foreign income tax, you identify all foreign income, claim all available relief, and report everything correctly. That&apos;s what helps Kent residents minimize their foreign income tax and avoid double taxation.
        </p>

        <p>
          <strong>Common Kent foreign income scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Rental income from abroad</strong> — People with holiday homes or investment properties in Spain, France, or other countries
          </li>
          <li>
            <strong>Employment income from abroad</strong> — People working abroad temporarily or with foreign employers
          </li>
          <li>
            <strong>Investment income</strong> — People with investments in overseas companies or funds
          </li>
          <li>
            <strong>Pension income</strong> — People receiving pensions from other countries
          </li>
          <li>
            <strong>Business income</strong> — People with businesses operating overseas
          </li>
          <li>
            <strong>Non-domiciled residents</strong> — People who are UK resident but non-domiciled (may benefit from remittance basis)
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent residents have connections abroad (property, employment, investments, family)</li>
          <li>Proper foreign income tax help helps Kent residents comply with UK tax obligations</li>
          <li>Double taxation relief helps Kent residents avoid paying tax twice on foreign income</li>
          <li>Tax treaty benefits help Kent residents minimize foreign income tax legally</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent residents are dealing with. Foreign income reporting, double taxation relief, tax treaties, remittance basis—we&apos;ll handle your foreign income tax that keeps you compliant and minimizes your tax bill.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Foreign Income Tax Support - Frequently Asked Questions"
          subtitle="Common questions about foreign income tax and double taxation relief"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Self Assessment returns where foreign income is reported
            </li>
            <li>
              <Link href="/services/tax/capital-gains-tax-returns/">Capital Gains Tax Returns</Link> — CGT on foreign assets (included in foreign income)
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning for foreign income structures
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with foreign income tax?" description="Don't let foreign income tax confusion stress you out. We'll help you report foreign income correctly, claim double taxation relief, and minimize your tax bill. No double taxation, no overpaid tax—just proper foreign income tax compliance that keeps you right." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with foreign income tax?" />
    </>
  );
}

