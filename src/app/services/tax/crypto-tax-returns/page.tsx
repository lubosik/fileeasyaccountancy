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
  title: 'Crypto Tax Returns & Cryptocurrency Tax Services in Kent | File Easy Accountancy',
  description: 'Expert crypto tax return services in Kent. Cryptocurrency tax, crypto capital gains tax, crypto trading tax, Bitcoin tax. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/crypto-tax-returns/',
  },
  openGraph: {
    title: 'Crypto Tax Returns & Cryptocurrency Tax Services in Kent | File Easy Accountancy',
    description: 'Expert crypto tax return services in Kent. Cryptocurrency tax, crypto capital gains tax, crypto trading tax, Bitcoin tax.',
    url: 'https://fileeasyaccountancy.co.uk/services/crypto-tax-returns/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Do I pay tax on cryptocurrency?',
    answer: 'Yes, you pay tax on cryptocurrency in certain situations. If you sell, exchange, or dispose of crypto at a profit, you pay Capital Gains Tax on the gain. If you receive crypto as income (mining, staking, payment for services), you pay Income Tax on it. Buying crypto with fiat currency isn\'t taxable, and transferring between your own wallets isn\'t taxable. But most disposals trigger tax—so if you\'ve sold or exchanged crypto, you probably need to report it. The key is understanding which transactions are taxable and which aren\'t. We can help you work through your transactions if you\'re not sure.',
  },
  {
    question: 'How is cryptocurrency taxed in UK?',
    answer: 'Cryptocurrency is taxed in two ways: Capital Gains Tax (when you dispose of it at a profit) and Income Tax (when you receive it as income). For capital gains, you pay 18% if you\'re a basic rate taxpayer or 24% if you\'re a higher/additional rate taxpayer (from October 2024), but only on gains above the £3,000 annual exemption. For income, you pay Income Tax at your normal rate (20%, 40%, or 45%) on crypto income like mining rewards, staking rewards, or crypto received as payment. If you\'re trading crypto as a business activity, profits may be subject to Income Tax and National Insurance instead of Capital Gains Tax.',
  },
  {
    question: 'Do I need to declare crypto on tax return?',
    answer: 'Yes, you need to declare crypto on your Self Assessment return if: your total gains exceed the £3,000 annual CGT allowance, your total proceeds from disposals exceed £12,000, or you received crypto as income (mining, staking, airdrops, payments). Even if you\'re within the allowance, you may still need to report if HMRC requires it. The key is working out your gains and income accurately, then declaring them on your return. HMRC can check exchange records and blockchain data, so it\'s worth declaring everything properly. We can help you work out what needs to be declared.',
  },
  {
    question: 'Is crypto trading taxable?',
    answer: 'It depends. If you\'re investing in crypto (buying and holding, occasional sales), gains are subject to Capital Gains Tax. But if you\'re trading crypto as a business activity (regular trading, high frequency, seeking to make profit from trading), profits may be subject to Income Tax and National Insurance instead. The line between investment and trading can be blurry—HMRC looks at factors like frequency of trading, organization, profit-seeking motive, and whether it\'s your main activity. If you\'re not sure, it\'s worth getting professional advice. We can help you understand how your crypto activity should be taxed.',
  },
  {
    question: 'What is capital gains tax on crypto?',
    answer: 'Capital Gains Tax on crypto is the tax you pay when you dispose of cryptocurrency at a profit. The tax rate is 18% if you\'re a basic rate taxpayer or 24% if you\'re a higher/additional rate taxpayer (from October 2024). You only pay tax on gains above the £3,000 annual exemption. So if you make a £10,000 gain and you\'re a basic rate taxpayer, you\'d pay 18% on £7,000 (after the £3,000 exemption) = £1,260 in CGT. The calculation can get complex if you have many transactions, as you need to work out cost basis for each disposal. We can help you calculate your crypto CGT accurately.',
  },
  {
    question: 'How do I report crypto on my tax return?',
    answer: 'You report crypto on your Self Assessment return using supplementary pages. For capital gains, you use the SA108 Capital Gains pages and provide details of each disposal (date, amount, proceeds, cost, gain/loss). For crypto income, you report it on your SA100 form. HMRC requires detailed information including transaction dates, amounts, GBP values, and exchange rates. If you have many transactions, this can be time-consuming—that\'s why many people use crypto tax software or get professional help. We can help you prepare and file your crypto tax return with all the details HMRC needs.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Crypto Tax Returns', href: '/services/tax/crypto-tax-returns' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function CryptoTaxReturnsPage() {
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
            serviceType: 'Crypto Tax Returns',
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
            description: 'Expert crypto tax return services in Kent. Cryptocurrency tax, crypto capital gains tax, crypto trading tax, Bitcoin tax.',
            name: 'Crypto Tax Returns',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/crypto-tax-returns/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Preparation Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Simple Crypto Tax Return' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complex Crypto Tax Return' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Crypto Transaction Analysis' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Crypto Tax Returns"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;ve bought, sold, or traded cryptocurrency like Bitcoin, Ethereum, or other cryptoassets, you might need to pay tax and file a crypto tax return. Cryptocurrency is subject to Capital Gains Tax when you dispose of it (sell, exchange, gift, or spend it) (
          <a href="https://www.gov.uk/capital-gains-tax" target="_blank" rel="noopener noreferrer">
            gov.uk Capital Gains Tax
          </a>
          ). If you&apos;re trading cryptocurrency as a business activity, profits are subject to Income Tax instead of Capital Gains Tax. You must report crypto gains on your Self Assessment return if total gains exceed the annual CGT allowance (£3,000 for 2024/25). Each disposal of crypto is a separate transaction—you calculate gain or loss on each one based on purchase price and disposal proceeds.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Cryptocurrency is subject to Capital Gains Tax when you dispose of it</strong> — Selling, exchanging, or spending crypto triggers CGT on any gain
            </li>
            <li>
              <strong>You must report crypto gains on Self Assessment</strong> — If total gains exceed the £3,000 annual CGT allowance (or total proceeds exceed £12,000)
            </li>
            <li>
              <strong>Crypto trading can be subject to Income Tax</strong> — If you&apos;re trading as a business activity, profits are taxed as income rather than capital gains
            </li>
            <li>
              <strong>HMRC requires detailed records</strong> — You need records of all crypto transactions including dates, values, and exchange rates (
              <a href="https://www.gov.uk/government/publications/tax-on-cryptoassets" target="_blank" rel="noopener noreferrer">
                gov.uk cryptoassets tax
              </a>
              )
            </li>
          </ul>
        </div>

        <p>
          The problem is most people don&apos;t understand when crypto tax applies or how to calculate it. They think crypto is tax-free, don&apos;t know about disposal events, or struggle with calculating gains across multiple transactions. That causes problems—undeclared crypto gains mean HMRC enquiries and penalties, incorrect calculations mean overpaid or underpaid tax, and missing records make it hard to prepare accurate returns.
        </p>

        <p>
          We handle crypto tax returns for people who&apos;ve traded or held cryptocurrency: crypto transaction analysis (identifying all taxable transactions and calculating gains/losses), capital gains tax calculation (calculating CGT on crypto disposals with proper cost basis), income tax calculation (calculating Income Tax on crypto income like mining, staking, or airdrops), Self Assessment reporting (reporting crypto gains and income on Self Assessment returns), record keeping support (helping you maintain proper records of all crypto transactions), and tax planning (planning crypto disposals to minimize tax within legal limits). Whether you&apos;re in Medway with Bitcoin gains, in Maidstone trading cryptocurrency, or in Canterbury with mining income, we&apos;ll handle your crypto tax returns that work. No HMRC enquiries, no penalties—just proper crypto tax compliance that keeps you right.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet crypto tax obligations</strong> — Report crypto gains and income correctly on your Self Assessment return. Proper reporting means no HMRC enquiries or penalties.
          </li>
          <li>
            <strong>Calculate crypto tax correctly</strong> — Work out Capital Gains Tax and Income Tax on crypto transactions accurately. Correct calculations mean you pay the right amount of tax.
          </li>
          <li>
            <strong>Maintain proper records</strong> — Keep detailed records of all crypto transactions that HMRC requires. Good records make filing returns easier and protect you in case of enquiries.
          </li>
          <li>
            <strong>Understand when tax applies</strong> — Learn what crypto transactions trigger tax and which don&apos;t. Understanding the rules helps you stay compliant and plan ahead.
          </li>
          <li>
            <strong>Minimize crypto tax legally</strong> — Plan crypto disposals to use your annual CGT allowance efficiently and minimize tax. Tax planning reduces your crypto tax bill legally.
          </li>
          <li>
            <strong>Avoid penalties and HMRC enquiries</strong> — File accurate returns on time to avoid late filing penalties and HMRC investigations. Compliance saves money and stress.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for crypto tax returns:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your crypto activity: what cryptocurrency you&apos;ve bought or sold, when you traded, whether you&apos;ve received crypto as income (mining, staking, airdrops), what records you have, and what you want to achieve.
          </li>
          <li>
            <strong>Crypto transaction analysis</strong> — We analyze all your crypto transactions:
            <ul>
              <li>
                <strong>Transaction identification</strong> — Identify all taxable transactions (sales, exchanges, disposals)
              </li>
              <li>
                <strong>Transaction classification</strong> — Classify transactions as capital gains or income (trading vs investment)
              </li>
              <li>
                <strong>Cost basis calculation</strong> — Calculate cost basis for each transaction (purchase price, fees, etc.)
              </li>
              <li>
                <strong>Gain/loss calculation</strong> — Calculate gain or loss on each transaction (proceeds minus cost basis)
              </li>
              <li>
                <strong>Income identification</strong> — Identify crypto income (mining rewards, staking rewards, airdrops, etc.)
              </li>
              <li>
                <strong>Transaction records</strong> — Review and organize transaction records (exchange statements, wallet transactions, etc.)
              </li>
            </ul>
            Crypto transaction analysis ensures we identify all taxable events and calculate them correctly.
          </li>
          <li>
            <strong>Capital gains tax calculation</strong> — We calculate CGT on crypto disposals:
            <ul>
              <li>
                <strong>Total gains calculation</strong> — Sum all capital gains from crypto disposals during the tax year
              </li>
              <li>
                <strong>Total losses calculation</strong> — Sum all capital losses from crypto disposals (can offset gains)
              </li>
              <li>
                <strong>Net gain calculation</strong> — Calculate net gain (total gains minus total losses)
              </li>
              <li>
                <strong>Annual exemption application</strong> — Apply the £3,000 annual CGT allowance to reduce taxable gain
              </li>
              <li>
                <strong>Taxable gain calculation</strong> — Calculate taxable gain after annual exemption
              </li>
              <li>
                <strong>Tax rate determination</strong> — Determine tax rate (18% for basic rate taxpayers, 24% for higher/additional rate taxpayers from October 2024)
              </li>
              <li>
                <strong>CGT liability</strong> — Calculate CGT due on taxable gain
              </li>
            </ul>
            Capital gains tax calculation ensures CGT is calculated correctly with all disposals accounted for.
          </li>
          <li>
            <strong>Income tax calculation (if applicable)</strong> — If you have crypto income:
            <ul>
              <li>
                <strong>Income identification</strong> — Identify all crypto income (mining, staking, airdrops, payment for services)
              </li>
              <li>
                <strong>Income valuation</strong> — Value crypto income in GBP at the time received (using exchange rates)
              </li>
              <li>
                <strong>Total income calculation</strong> — Sum all crypto income for the tax year
              </li>
              <li>
                <strong>Personal allowance application</strong> — Apply personal allowance (£12,570) if available
              </li>
              <li>
                <strong>Taxable income calculation</strong> — Calculate taxable income after personal allowance
              </li>
              <li>
                <strong>Income tax calculation</strong> — Calculate Income Tax at appropriate rates (20%, 40%, or 45%)
              </li>
              <li>
                <strong>National Insurance</strong> — Calculate Class 2 and Class 4 National Insurance if crypto income is trading income
              </li>
            </ul>
            Income tax calculation ensures crypto income is taxed correctly as income rather than capital gains.
          </li>
          <li>
            <strong>Record keeping support</strong> — We help maintain proper records:
            <ul>
              <li>
                <strong>Transaction documentation</strong> — Organize records of all crypto transactions (dates, amounts, values)
              </li>
              <li>
                <strong>Exchange rate records</strong> — Document exchange rates used for GBP valuations
              </li>
              <li>
                <strong>Cost basis records</strong> — Maintain records of purchase prices and cost basis calculations
              </li>
              <li>
                <strong>Income records</strong> — Document crypto income received (mining, staking, etc.)
              </li>
              <li>
                <strong>Record retention</strong> — Ensure records are kept for at least 5 years as HMRC requires
              </li>
            </ul>
            Record keeping support ensures you have proper documentation to support your tax return and respond to HMRC enquiries.
          </li>
          <li>
            <strong>Self Assessment reporting</strong> — We report crypto tax on your return:
            <ul>
              <li>
                <strong>Capital gains reporting</strong> — Report crypto capital gains on SA108 form (Capital Gains supplementary pages)
              </li>
              <li>
                <strong>Income reporting</strong> — Report crypto income on SA100 form (if applicable)
              </li>
              <li>
                <strong>Detailed transaction reporting</strong> — Provide details of disposals, proceeds, costs, and gains/losses
              </li>
              <li>
                <strong>Return filing</strong> — File your Self Assessment return with crypto tax included
              </li>
              <li>
                <strong>Filing confirmation</strong> — Get confirmation from HMRC that return has been received
              </li>
            </ul>
            Self Assessment reporting ensures crypto gains and income are declared correctly on your tax return.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What crypto tax return filing includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Crypto transaction analysis (transaction identification, classification, cost basis, gain/loss calculation, income identification, record organization)</li>
            <li>Capital gains tax calculation (total gains, total losses, net gain, annual exemption, taxable gain, tax rate, CGT liability)</li>
            <li>Income tax calculation (income identification, valuation, total income, personal allowance, taxable income, Income Tax, National Insurance)</li>
            <li>Record keeping support (transaction documentation, exchange rate records, cost basis records, income records, record retention)</li>
            <li>Self Assessment reporting (capital gains reporting, income reporting, detailed transactions, return filing, filing confirmation)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Crypto tax rules:</h3>
          <h4 style={{ marginTop: '1rem' }}>Capital Gains Tax on crypto:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Taxable events</strong> — Selling crypto, exchanging one crypto for another, spending crypto, gifting crypto (except to spouse or registered charity)
            </li>
            <li>
              <strong>Non-taxable events</strong> — Buying crypto with fiat, transferring between your own wallets, gifting to spouse
            </li>
            <li>
              <strong>Tax rates</strong> — 18% (basic rate) or 24% (higher/additional rate) from October 2024
            </li>
            <li>
              <strong>Annual exemption</strong> — £3,000 per tax year (2024/25)
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Income Tax on crypto:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Taxable income</strong> — Mining rewards, staking rewards, airdrops, crypto received as payment for services
            </li>
            <li>
              <strong>Tax rates</strong> — Income Tax at 20%, 40%, or 45% depending on income band
            </li>
            <li>
              <strong>Personal allowance</strong> — £12,570 per tax year (2024/25)
            </li>
            <li>
              <strong>Trading classification</strong> — If trading as a business, income may be subject to Class 2 and Class 4 National Insurance
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Reporting requirements:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Must report if</strong> — Total gains exceed £3,000 annual exemption, or total proceeds exceed 4 times the exemption (£12,000)
            </li>
            <li>
              <strong>Must report crypto income</strong> — All crypto income must be declared regardless of amount
            </li>
            <li>
              <strong>Self Assessment deadline</strong> — 31 January following the tax year end
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Record keeping:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Required records</strong> — Dates of transactions, amounts of crypto, GBP values, exchange rates, cost basis, purpose of transactions
            </li>
            <li>
              <strong>Retention period</strong> — Keep records for at least 5 years after the 31 January filing deadline
            </li>
            <li>
              <strong>Exchange statements</strong> — Keep records from crypto exchanges and wallets
            </li>
          </ul>
        </div>

        <p>
          We handle all aspects of crypto tax returns. The key is identifying all taxable transactions, calculating gains and income correctly, maintaining proper records, and reporting everything on your Self Assessment return, so you pay the right amount of tax and avoid HMRC enquiries.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of transactions</strong> — More transactions mean more analysis and calculations, so costs increase
          </li>
          <li>
            <strong>Transaction complexity</strong> — Simple transactions (buy and sell) cost less than complex transactions (multiple exchanges, DeFi activities, mining income)
          </li>
          <li>
            <strong>Record availability</strong> — If you have good records, costs are lower than if records need to be reconstructed
          </li>
          <li>
            <strong>Income vs capital gains</strong> — Returns with both income and capital gains may cost more due to additional calculations
          </li>
          <li>
            <strong>Tax planning</strong> — If you need crypto tax planning advice (timing disposals, using allowances), this is separate
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple crypto tax return (few transactions):</strong> £200–£400 for straightforward crypto tax return with a small number of buy/sell transactions
          </li>
          <li>
            <strong>Standard crypto tax return (moderate transactions):</strong> £300–£600 for typical crypto tax return with multiple transactions, some income, basic record keeping
          </li>
          <li>
            <strong>Complex crypto tax return (many transactions):</strong> £500–£1,000+ for complex crypto tax returns (many transactions, multiple exchanges, DeFi activities, mining/staking income, record reconstruction)
          </li>
          <li>
            <strong>Crypto transaction analysis only:</strong> £150–£300 for analysis and calculation only (you file the return yourself)
          </li>
          <li>
            <strong>Ongoing crypto tax support:</strong> £200–£500 per year for ongoing support (transaction tracking, quarterly reviews, year-end filing)
          </li>
        </ul>

        <p>
          <strong>Why crypto tax return filing costs what it does:</strong>
        </p>
        <ul>
          <li>Transaction analysis requires detailed work to identify all taxable events and calculate gains/losses accurately</li>
          <li>Cost basis calculation requires understanding of pooling methods and tracking purchases across multiple transactions</li>
          <li>Income tax calculation requires valuing crypto income in GBP and calculating tax at appropriate rates</li>
          <li>Record keeping support requires organizing and maintaining detailed transaction records</li>
          <li>Self Assessment reporting requires completing forms correctly with all crypto transactions properly declared</li>
        </ul>

        <p>
          <strong>Timeline:</strong> For returns filed before the deadline, crypto tax return preparation usually takes 2-3 weeks from when we receive all your transaction records. If records need to be reconstructed or transactions are complex, this may take longer. We&apos;ll need all records at least 4-6 weeks before the 31 January deadline to ensure on-time filing.
        </p>

        <p>
          <strong>Payment:</strong> Crypto tax is paid through Self Assessment by 31 January following the tax year end. If you can&apos;t pay immediately, HMRC may accept payment plans, but interest will be charged on late payments. We can help you understand payment options if needed.
        </p>

        <p>
          <strong>No hidden fees.</strong> Crypto tax return price includes transaction analysis, CGT and Income Tax calculation, record keeping support, and Self Assessment reporting. Ongoing crypto tax support or complex transaction analysis is separate if needed.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with people across Kent who&apos;ve traded or held cryptocurrency: people in Medway with Bitcoin gains, people in Maidstone trading cryptocurrency, and people in Canterbury with mining or staking income.
        </p>

        <p>
          Kent crypto investors face the same crypto tax obligations as everyone else—reporting capital gains on disposals, declaring crypto income, and maintaining proper records. The difference is when you get proper help with crypto tax returns, you identify all taxable transactions, calculate gains correctly, and report everything accurately. That&apos;s what helps Kent crypto investors stay compliant and avoid HMRC enquiries.
        </p>

        <p>
          <strong>Common Kent crypto tax scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Bitcoin investors</strong> — People who bought and sold Bitcoin or other cryptocurrencies
          </li>
          <li>
            <strong>Crypto traders</strong> — People trading cryptocurrency regularly (may be subject to Income Tax if trading as a business)
          </li>
          <li>
            <strong>Mining/staking income</strong> — People receiving crypto income from mining or staking activities
          </li>
          <li>
            <strong>Crypto payments</strong> — People receiving cryptocurrency as payment for services
          </li>
          <li>
            <strong>DeFi activities</strong> — People involved in decentralized finance activities (lending, yield farming, etc.)
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent businesses and individuals are investing in or using cryptocurrency</li>
          <li>Proper crypto tax help helps Kent taxpayers comply with HMRC requirements</li>
          <li>Accurate reporting helps Kent crypto investors avoid penalties and enquiries</li>
          <li>Tax planning helps Kent taxpayers minimize crypto tax legally</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent crypto investors are dealing with. Crypto transaction analysis, capital gains calculations, income tax calculations, record keeping—we&apos;ll handle your crypto tax returns that keep you compliant and avoid HMRC enquiries.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Crypto Tax Returns - Frequently Asked Questions"
          subtitle="Common questions about crypto tax and cryptocurrency tax obligations"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/capital-gains-tax-returns/">Capital Gains Tax Returns</Link> — Capital Gains Tax returns (crypto is included in this)
            </li>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Self Assessment returns where crypto is reported
            </li>
            <li>
              <Link href="/services/bookkeeping/crypto-transaction-bookkeeping/">Crypto Transaction Bookkeeping</Link> — Bookkeeping for crypto transactions
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with your crypto tax returns?" description="Don't let crypto tax confusion stress you out. We'll help you calculate crypto gains correctly, report everything on your Self Assessment return, and maintain proper records. No HMRC enquiries, no penalties—just proper crypto tax compliance that keeps you right." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with crypto tax returns?" />
    </>
  );
}

