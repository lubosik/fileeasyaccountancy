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
  title: 'Crypto Transaction Bookkeeping in Kent | File Easy Accountancy',
  description: 'Cryptocurrency bookkeeping and tax compliance for crypto traders in Kent. CGT calculations, transaction tracking, HMRC compliance. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/crypto-transaction-bookkeeping/',
  },
  openGraph: {
    title: 'Crypto Transaction Bookkeeping in Kent | File Easy Accountancy',
    description: 'Cryptocurrency bookkeeping and tax compliance for crypto traders in Kent. CGT calculations, transaction tracking, HMRC compliance.',
    url: 'https://fileeasyaccountancy.co.uk/services/crypto-transaction-bookkeeping/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Do I need to pay tax on cryptocurrency?',
    answer: 'Yes, if you dispose of cryptocurrency (sell, exchange, spend, gift), you might owe Capital Gains Tax on any gains. You don\'t pay tax just for holding crypto, but when you dispose of it, you calculate the gain (or loss) compared to what you paid for it. If your total gains for the tax year exceed the annual CGT allowance (£6,000 for 2024-25, reducing to £3,000 from 2024-25), you\'ll owe CGT. You must report all disposals on your Self Assessment, even if you don\'t owe tax.',
  },
  {
    question: 'How do I track crypto transactions for tax?',
    answer: 'You need to track every crypto transaction with: date, type (buy, sell, exchange, spend, gift), amount of crypto, GBP value at transaction time, wallet addresses, and disposal proceeds. HMRC requires detailed records for at least 6 years. Most people use spreadsheets or crypto tax software to track transactions. We help you gather all your transaction data from exchanges and wallets, convert everything to GBP using historical exchange rates, and maintain proper records for HMRC compliance.',
  },
  {
    question: 'What records do I need for crypto tax?',
    answer: 'HMRC requires records of: date of each transaction, type of transaction, amount of crypto, GBP value at transaction time, wallet addresses (if relevant), disposal proceeds, cost basis (what you paid), and gain/loss calculation. Records must be kept for at least 6 years. You also need records of exchange rates used for GBP conversions. Without proper records, you can\'t calculate gains/losses accurately and risk penalties if HMRC investigates.',
  },
  {
    question: 'Is cryptocurrency taxable in the UK?',
    answer: 'Yes, cryptocurrency is subject to Capital Gains Tax when you dispose of it. Every disposal (sell, exchange, spend, gift) triggers a CGT calculation. Crypto-to-crypto exchanges are taxable events—you\'re disposing of one crypto to acquire another. If your total gains exceed the annual CGT allowance, you\'ll owe tax. For businesses accepting crypto, it\'s treated as a taxable asset (not currency), so you pay tax on profits. The key is tracking every transaction and calculating gains/losses properly.',
  },
  {
    question: 'How do I calculate crypto capital gains tax?',
    answer: 'For each disposal, you calculate: disposal proceeds (what you received in GBP) minus cost basis (what you paid in GBP) equals gain or loss. You add up all gains and losses for the tax year, subtract your annual CGT allowance (£6,000 for 2024-25), and apply CGT rates (10% if you\'re a basic rate taxpayer, 20% if you\'re a higher rate taxpayer). The tricky part is identifying which crypto you\'re disposing of (FIFO or specific identification) and getting accurate GBP values using historical exchange rates. That\'s where proper bookkeeping helps.',
  },
  {
    question: 'Are crypto-to-crypto exchanges taxable?',
    answer: 'Yes, crypto-to-crypto exchanges are taxable events in the UK. When you exchange one crypto for another (like trading Bitcoin for Ethereum), you\'re disposing of the first crypto and acquiring the second. You need to calculate the gain or loss on disposing of the first crypto (its value in GBP minus what you paid for it), even though you didn\'t receive any fiat currency. This catches a lot of people out because they think only selling crypto for GBP is taxable, but that\'s not the case.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'Crypto Transaction Bookkeeping', href: '/services/bookkeeping/crypto-transaction-bookkeeping' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function CryptoTransactionBookkeepingPage() {
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
            serviceType: 'Crypto Transaction Bookkeeping',
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
            description: 'Cryptocurrency bookkeeping and tax compliance for crypto traders in Kent. CGT calculations, transaction tracking, HMRC compliance.',
            name: 'Crypto Transaction Bookkeeping',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/crypto-transaction-bookkeeping/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transaction Tracking' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CGT Calculations' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GBP Valuation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HMRC Compliance' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Crypto Transaction Bookkeeping"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          Dealing with cryptocurrency transactions for tax purposes is complicated. If you&apos;re trading crypto, using it to buy things, or accepting it as payment in your business, you need to track every transaction, calculate Capital Gains Tax on disposals, and keep detailed records for HMRC. Most people don&apos;t realize that crypto-to-crypto exchanges are taxable events, or that you need to record the GBP value of every transaction. Get it wrong and you&apos;re dealing with HMRC penalties and potentially back taxes.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Cryptocurrency transactions are subject to Capital Gains Tax</strong> when you dispose of crypto assets (sell, exchange, spend, gift)—you must report gains and losses on Self Assessment (
              <a href="https://www.gov.uk/guidance/cryptoassets-for-individuals" target="_blank" rel="noopener noreferrer">
                gov.uk cryptoassets guidance
              </a>
              )
            </li>
            <li>
              <strong>HMRC requires detailed records of all crypto transactions</strong> including date, type, amount, value in GBP, wallet addresses, and disposal proceeds for tax compliance (
              <a href="https://www.gov.uk/guidance/cryptoassets-for-individuals" target="_blank" rel="noopener noreferrer">
                gov.uk cryptoassets for individuals
              </a>
              )
            </li>
            <li>
              <strong>Businesses accepting cryptocurrency as payment</strong> must record transactions at market value in GBP and pay tax on profits—crypto is treated as a taxable asset, not currency (
              <a href="https://www.gov.uk/guidance/cryptoassets-for-businesses" target="_blank" rel="noopener noreferrer">
                gov.uk cryptoassets for businesses
              </a>
              )
            </li>
            <li>
              <strong>Crypto-to-crypto exchanges are taxable events</strong> in the UK—each exchange triggers a Capital Gains Tax calculation even if no fiat currency is involved
            </li>
          </ul>
        </div>

        <p>
          The problem is most crypto traders and businesses try to handle crypto bookkeeping themselves, especially if they&apos;re just dabbling or only have a few transactions. That&apos;s fine when it&apos;s simple, but crypto tax is complex—every disposal event needs CGT calculation, you need to track GBP values at transaction time, you need to identify which coins you&apos;re disposing of (FIFO or specific identification), and you need to keep records for at least 6 years. Get it wrong and you&apos;re dealing with HMRC penalties, interest charges, and potentially massive back tax bills.
        </p>

        <p>
          We handle crypto transaction bookkeeping for traders and businesses: transaction tracking, CGT calculations on disposals, disposal event identification, GBP valuation, and record-keeping for HMRC compliance. Whether you&apos;re a crypto trader in Medway doing regular trading, a business in Maidstone accepting crypto payments, or a crypto investor in Canterbury with a portfolio, we&apos;ll track your transactions properly and make sure your tax reporting is accurate. No guesswork, no penalties—just proper crypto bookkeeping that keeps you compliant with HMRC.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Track all crypto transactions</strong> — Every buy, sell, exchange, spend, gift, and disposal recorded with date, type, amount, GBP value, and wallet addresses. Complete transaction history.
          </li>
          <li>
            <strong>Calculate Capital Gains Tax accurately</strong> — Identify disposal events, calculate gains and losses, apply CGT rates, account for annual CGT allowance (£6,000 for 2024-25, reducing to £3,000 from 2024-25). No overpaying or underpaying tax.
          </li>
          <li>
            <strong>Handle crypto-to-crypto exchanges</strong> — Every exchange is a disposal event (selling one crypto to buy another). We&apos;ll track which crypto you&apos;re disposing of, calculate the gain/loss, and record the acquisition of the new crypto.
          </li>
          <li>
            <strong>Value transactions in GBP</strong> — Every crypto transaction needs a GBP value at the time it happened. We&apos;ll use exchange rates to convert crypto amounts to GBP for tax purposes.
          </li>
          <li>
            <strong>Identify disposal method</strong> — FIFO (first in, first out) or specific identification (if you can prove which coins you sold). We&apos;ll help you choose the right method and stick to it consistently.
          </li>
          <li>
            <strong>Stay compliant with HMRC</strong> — Detailed records of all transactions, disposal calculations, CGT calculations, ready for Self Assessment. Avoid penalties and interest.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for crypto bookkeeping:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your crypto activity: what types of crypto you hold, how many transactions you have (roughly), whether you&apos;re trading regularly or just holding, if you&apos;re accepting crypto as business payments, and what your current tracking setup looks like (if you have one).
          </li>
          <li>
            <strong>Transaction data collection</strong> — We gather all your crypto transaction data:
            <ul>
              <li>
                <strong>Exchange statements</strong> — Download CSV files or API connections from exchanges (Coinbase, Binance, Kraken, etc.)
              </li>
              <li>
                <strong>Wallet transactions</strong> — Export transaction history from software wallets (MetaMask, Exodus, etc.) or hardware wallet records
              </li>
              <li>
                <strong>DeFi transactions</strong> — If you&apos;re using DeFi platforms, we&apos;ll need transaction records from blockchain explorers or platform exports
              </li>
              <li>
                <strong>Business crypto payments</strong> — If your business accepts crypto, we&apos;ll need records of payments received
              </li>
            </ul>
          </li>
          <li>
            <strong>Transaction categorization</strong> — We categorize each transaction:
            <ul>
              <li>
                <strong>Acquisition</strong> — Buying crypto with fiat (GBP), receiving crypto as payment, mining, staking rewards
              </li>
              <li>
                <strong>Disposal</strong> — Selling crypto for fiat (GBP), spending crypto, gifting crypto, crypto-to-crypto exchanges
              </li>
              <li>
                <strong>Transfer</strong> — Moving crypto between wallets (not taxable, but needs tracking)
              </li>
            </ul>
          </li>
          <li>
            <strong>GBP valuation</strong> — We convert every transaction to GBP value at the time it happened:
            <ul>
              <li>Use historical exchange rates to get accurate GBP values</li>
              <li>Record the exchange rate used and the source</li>
              <li>Handle different crypto pairs (BTC/GBP, ETH/GBP, etc.)</li>
            </ul>
          </li>
          <li>
            <strong>Disposal identification</strong> — For each disposal event, we identify which crypto you&apos;re disposing of:
            <ul>
              <li>
                <strong>FIFO method</strong> — First coins you acquired are the first ones you dispose of (default method)
              </li>
              <li>
                <strong>Specific identification</strong> — If you can prove which specific coins you sold (requires detailed records), you can choose this method
              </li>
            </ul>
            We&apos;ll help you pick the right method and stick to it consistently (you can&apos;t switch methods once chosen).
          </li>
          <li>
            <strong>Capital Gains Tax calculation</strong> — For each disposal event, we calculate:
            <ul>
              <li>
                <strong>Cost basis</strong> — What you paid for the crypto (acquisition cost in GBP)
              </li>
              <li>
                <strong>Disposal proceeds</strong> — What you received (sale price, exchange value, spending value in GBP)
              </li>
              <li>
                <strong>Gain or loss</strong> — Disposal proceeds minus cost basis
              </li>
              <li>
                <strong>CGT liability</strong> — Apply CGT rates (10% or 20% depending on your income tax band) after annual CGT allowance
              </li>
            </ul>
          </li>
          <li>
            <strong>Record keeping</strong> — We maintain detailed records as required by HMRC:
            <ul>
              <li>Date of each transaction</li>
              <li>Type of transaction (buy, sell, exchange, spend, gift, etc.)</li>
              <li>Amount of crypto involved</li>
              <li>GBP value at transaction time</li>
              <li>Wallet addresses (if relevant)</li>
              <li>Disposal proceeds and cost basis</li>
              <li>Gain or loss calculation</li>
              <li>CGT calculation</li>
            </ul>
          </li>
          <li>
            <strong>Self Assessment prep</strong> — Throughout the year, we keep your records current. When it&apos;s time to file Self Assessment, we provide you with:
            <ul>
              <li>Summary of all disposals for the tax year</li>
              <li>Total gains and losses</li>
              <li>CGT calculation</li>
              <li>Ready for inclusion in your Self Assessment return</li>
            </ul>
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What we track for crypto transactions:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>All crypto transactions (buys, sells, exchanges, spends, gifts, transfers)</li>
            <li>GBP valuations (using historical exchange rates)</li>
            <li>Disposal events (identifying which crypto is being disposed of)</li>
            <li>Capital gains and losses (on each disposal)</li>
            <li>CGT calculations (applying rates and allowances)</li>
            <li>Complete transaction history (for HMRC compliance)</li>
          </ul>
        </div>

        <p>
          We work with whatever data sources you have: exchange CSV files, wallet exports, API connections, blockchain explorers, or even manual transaction lists. The key is capturing everything—missing transactions means inaccurate tax calculations and potential HMRC penalties.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of transactions</strong> — More transactions mean more tracking and calculation work. A few trades per month costs less than hundreds of transactions.
          </li>
          <li>
            <strong>Number of exchanges/wallets</strong> — More sources mean more data gathering and reconciliation work.
          </li>
          <li>
            <strong>Transaction complexity</strong> — Simple buy/sell transactions cost less than complex DeFi transactions, staking rewards, airdrops, or crypto-to-crypto exchanges.
          </li>
          <li>
            <strong>Data organization</strong> — If you&apos;ve got organized records (CSV files, exchange statements), it&apos;s faster. If we&apos;re working from scattered records or blockchain explorers, it takes longer.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Crypto bookkeeping setup (one-off):</strong> £300–£600 depending on number of transactions and data complexity
          </li>
          <li>
            <strong>Annual crypto bookkeeping:</strong> £500–£1,500/year depending on transaction volume and complexity
          </li>
          <li>
            <strong>Monthly crypto bookkeeping:</strong> £100–£300/month if you want ongoing tracking throughout the year
          </li>
        </ul>

        <p>
          <strong>Why crypto bookkeeping costs more than standard bookkeeping:</strong>
        </p>
        <ul>
          <li>Transaction volume is usually higher (lots of small transactions vs few large ones)</li>
          <li>Every disposal needs CGT calculation</li>
          <li>GBP valuation requires historical exchange rate lookups</li>
          <li>Multiple exchanges/wallets mean more data sources to reconcile</li>
          <li>HMRC compliance requirements are strict (detailed records needed)</li>
        </ul>

        <p>
          <strong>Timeline:</strong> Setup usually takes about 2–3 weeks depending on transaction volume and data complexity. Once we&apos;re set up, ongoing monthly bookkeeping typically takes 2–3 days per month. Annual tax prep (for Self Assessment) takes about 1 week once all transactions are tracked.
        </p>

        <p>
          <strong>No hidden fees.</strong> All prices exclude VAT. We offer annual or monthly payment plans and can adjust if your transaction volume changes significantly.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with crypto traders and businesses across Kent: crypto traders in Medway doing regular trading, businesses in Maidstone accepting crypto payments, crypto investors in Canterbury with portfolios, and DeFi users throughout the region.
        </p>

        <p>
          Kent crypto traders face the same HMRC deadlines as everyone else—31 January for Self Assessment, with crypto gains and losses needing to be declared. The difference is when your crypto bookkeeping is organized and current, these deadlines aren&apos;t stressful. You know exactly what disposals you&apos;ve made, what gains/losses you&apos;ve realized, and what your CGT liability is going to be.
        </p>

        <p>
          <strong>Common Kent crypto scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Crypto traders</strong> — Regular buying and selling, multiple exchanges, crypto-to-crypto exchanges, needing CGT calculations on each disposal
          </li>
          <li>
            <strong>Businesses accepting crypto</strong> — Receiving crypto payments, needing to record transactions at market value, pay tax on profits, handle crypto as taxable asset
          </li>
          <li>
            <strong>Crypto investors</strong> — Holding crypto long-term, occasional disposals, needing accurate cost basis tracking and CGT calculations
          </li>
          <li>
            <strong>DeFi users</strong> — Complex transactions (liquidity provision, yield farming, staking), needing transaction tracking across multiple platforms
          </li>
        </ul>

        <p>
          <strong>Kent crypto market context:</strong>
        </p>
        <ul>
          <li>Kent has growing crypto adoption (traders, businesses accepting crypto, investors)</li>
          <li>Crypto tax compliance is mandatory—HMRC is increasingly focused on crypto tax</li>
          <li>Proper bookkeeping prevents penalties, interest, and back tax bills</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent crypto traders and businesses are dealing with. Transaction tracking, CGT calculations, disposal identification, HMRC compliance—we&apos;ve helped loads of Kent crypto users get sorted, and we know how to make crypto bookkeeping simple.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Crypto Transaction Bookkeeping - Frequently Asked Questions"
          subtitle="Common questions about cryptocurrency bookkeeping and tax compliance"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/crypto-tax-returns/">Crypto Tax Returns</Link> — Once your transactions are tracked, we can handle your Self Assessment with crypto gains included
            </li>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns</Link> — Annual tax returns with crypto gains and losses
            </li>
            <li>
              <Link href="/services/tax/capital-gains-tax-returns/">Capital Gains Tax Returns</Link> — For larger crypto disposals needing detailed CGT calculations
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with crypto bookkeeping?" description="Stay compliant with HMRC. We'll track all your crypto transactions, calculate CGT accurately, and keep detailed records for tax compliance." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with crypto bookkeeping?" />
    </>
  );
}

