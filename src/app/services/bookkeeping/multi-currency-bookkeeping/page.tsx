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
  title: 'Multi-Currency Bookkeeping Services in Kent | File Easy Accountancy',
  description: 'Multi-currency bookkeeping services in Kent and Dubai. Foreign currency transactions, exchange rate conversion, tax-compliant. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/multi-currency-bookkeeping/',
  },
  openGraph: {
    title: 'Multi-Currency Bookkeeping Services in Kent | File Easy Accountancy',
    description: 'Multi-currency bookkeeping services in Kent and Dubai. Foreign currency transactions, exchange rate conversion, tax-compliant.',
    url: 'https://fileeasyaccountancy.co.uk/services/multi-currency-bookkeeping/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do you handle multi-currency bookkeeping?',
    answer: 'Multi-currency bookkeeping involves: setting up foreign currency accounts (bank accounts, sales accounts, expense accounts), recording transactions in their original currency, converting to GBP using correct exchange rates, accounting for exchange rate gains/losses, and generating foreign currency reports for tax purposes. Most cloud accounting software (Xero, QuickBooks) supports multi-currency, but proper setup and exchange rate management are key.',
  },
  {
    question: 'What is multi-currency accounting?',
    answer: 'Multi-currency accounting is bookkeeping that handles transactions in multiple currencies, converting them to your base currency (GBP for UK businesses) for reporting and tax purposes. It involves tracking foreign currency transactions, using correct exchange rates, accounting for exchange rate fluctuations, and ensuring tax compliance. Essential for businesses with international operations.',
  },
  {
    question: 'How do you record foreign currency transactions?',
    answer: 'Foreign currency transactions are recorded by: recording the transaction in its original currency first (USD, EUR, AED, etc.), converting to GBP using the exchange rate on the transaction date, tracking any exchange rate differences if rates change before payment, and categorising correctly for bookkeeping purposes. The conversion uses HMRC exchange rates or spot rates depending on the situation.',
  },
  {
    question: 'What exchange rate do you use for tax purposes?',
    answer: 'For UK tax purposes, HMRC provides official exchange rates. You can use HMRC rates, spot rates (current market rates), or average rates for the period, depending on the situation. The key is consistency—use the same method throughout and document which rates you\'re using. We\'ll help you choose the right method for your business.',
  },
  {
    question: 'Do I need multi-currency bookkeeping?',
    answer: 'Yes, if you: have overseas suppliers (paying in foreign currencies), sell to international customers (receiving payments in foreign currencies), have operations abroad (Dubai, EU, US, etc.), or deal with any foreign currency transactions. Proper multi-currency bookkeeping ensures accurate tracking, correct exchange rate conversion, and tax compliance. Without it, you risk incorrect tax calculations and HMRC compliance issues.',
  },
  {
    question: 'How do exchange rate gains and losses work?',
    answer: 'Exchange rate gains/losses occur when exchange rates fluctuate. If you have a foreign currency transaction (e.g., invoice in USD), and the exchange rate changes between when you recorded it and when you get paid (or at period-end), you\'ll have an exchange rate gain or loss. If USD strengthens against GBP, you gain; if it weakens, you lose. These gains/losses affect profit and loss, which affects tax. Proper multi-currency bookkeeping accounts for these adjustments.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'Multi-Currency Bookkeeping', href: '/services/bookkeeping/multi-currency-bookkeeping' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'dubai-clients', text: 'Dubai (UAE) clients' },
  { id: 'faqs', text: 'FAQs' },
];

export default function MultiCurrencyBookkeepingPage() {
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
            serviceType: 'Multi-Currency Bookkeeping',
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
            description: 'Multi-currency bookkeeping services in Kent and Dubai. Foreign currency transactions, exchange rate conversion, tax-compliant.',
            name: 'Multi-Currency Bookkeeping',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/multi-currency-bookkeeping/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Currency Account Setup' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exchange Rate Conversion' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Foreign Currency Transaction Tracking' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exchange Rate Gain/Loss Accounting' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Multi-Currency Bookkeeping"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If your business deals with overseas suppliers, customers, or operations, you&apos;re dealing with multiple currencies. That means transactions in USD, EUR, AED, or other currencies that need converting to GBP for UK tax purposes. HMRC requires businesses to convert foreign currency transactions to GBP using official exchange rates for tax purposes—proper multi-currency bookkeeping ensures accurate conversion. Multi-currency bookkeeping tracks transactions in multiple currencies, converting them to GBP for UK tax returns, which is essential for businesses with international operations.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>HMRC requires businesses to convert foreign currency transactions to GBP using official exchange rates for tax purposes</strong> — Proper multi-currency bookkeeping ensures accurate conversion (
              <a href="https://www.gov.uk/guidance/find-a-currency-exchange-rate" target="_blank" rel="noopener noreferrer">
                gov.uk exchange rates
              </a>
              )
            </li>
            <li>
              <strong>Multi-currency bookkeeping tracks transactions in multiple currencies, converting them to GBP for UK tax returns</strong> — Essential for businesses with international operations
            </li>
            <li>
              <strong>Exchange rate fluctuations affect profit and loss</strong> — Proper multi-currency bookkeeping accounts for exchange rate gains and losses
            </li>
            <li>
              <strong>Businesses with overseas suppliers, customers, or operations need multi-currency bookkeeping</strong> — To track foreign currency transactions accurately
            </li>
          </ul>
        </div>

        <p>
          The problem is most businesses don&apos;t handle multi-currency transactions properly. They use wrong exchange rates, don&apos;t account for exchange rate gains/losses, or struggle with foreign currency tax reporting. That causes problems—wrong exchange rates mean incorrect tax calculations, missing exchange rate adjustments means inaccurate profit figures, and poor foreign currency tracking means HMRC compliance issues.
        </p>

        <p>
          We handle multi-currency bookkeeping for businesses with international operations: multi-currency transaction tracking, exchange rate conversion using HMRC rates, tax-compliant foreign currency reporting, and exchange rate gain/loss accounting. Whether you&apos;re a business in Medway with overseas suppliers, a company in Maidstone selling to international customers, or a business in Canterbury with operations in Dubai, we&apos;ll set up multi-currency bookkeeping that works. No exchange rate errors, no tax compliance issues—just accurate multi-currency bookkeeping that keeps you compliant and gives you accurate profit figures.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Track foreign currency transactions accurately</strong> — Record transactions in their original currency, then convert to GBP using correct exchange rates. Accurate tracking means accurate bookkeeping.
          </li>
          <li>
            <strong>Use correct exchange rates for tax purposes</strong> — HMRC has rules about which exchange rates to use. We&apos;ll use the correct rates (HMRC rates, spot rates, or average rates depending on the situation).
          </li>
          <li>
            <strong>Account for exchange rate gains and losses</strong> — Exchange rates fluctuate, which means foreign currency transactions can gain or lose value in GBP terms. Proper multi-currency bookkeeping accounts for these gains/losses.
          </li>
          <li>
            <strong>Ensure tax compliance</strong> — Proper multi-currency bookkeeping ensures foreign currency transactions are reported correctly for tax purposes. No HMRC compliance issues.
          </li>
          <li>
            <strong>Handle international operations easily</strong> — Whether you have overseas suppliers, international customers, or operations abroad, multi-currency bookkeeping makes it easy to track everything accurately.
          </li>
          <li>
            <strong>Get accurate profit figures</strong> — Exchange rate adjustments ensure your profit figures are accurate, reflecting the true value of foreign currency transactions.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for multi-currency bookkeeping:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: what international operations you have (overseas suppliers, international customers, operations abroad), what currencies you deal with (USD, EUR, AED, etc.), what your current foreign currency tracking looks like, what exchange rates you&apos;re using, and what you want to achieve.
          </li>
          <li>
            <strong>Multi-currency account setup</strong> — We set up multi-currency accounts in your bookkeeping system:
            <ul>
              <li>
                <strong>Foreign currency bank accounts</strong> — Bank accounts in different currencies (USD bank account, EUR bank account, AED bank account, etc.)
              </li>
              <li>
                <strong>Foreign currency sales accounts</strong> — Sales income in foreign currencies
              </li>
              <li>
                <strong>Foreign currency expense accounts</strong> — Expenses paid in foreign currencies
              </li>
              <li>
                <strong>Exchange rate gain/loss accounts</strong> — Accounts to track exchange rate fluctuations
              </li>
            </ul>
            Multi-currency accounts ensure foreign currency transactions are tracked separately.
          </li>
          <li>
            <strong>Exchange rate setup</strong> — We set up exchange rate conversion:
            <ul>
              <li>
                <strong>HMRC exchange rates</strong> — For tax purposes, HMRC provides exchange rates (
                <a href="https://www.gov.uk/guidance/find-a-currency-exchange-rate" target="_blank" rel="noopener noreferrer">
                  gov.uk exchange rates
                </a>
                ). We&apos;ll use these where appropriate.
              </li>
              <li>
                <strong>Spot rates</strong> — For day-to-day transactions, we might use spot rates (current market rates) or average rates for the period
              </li>
              <li>
                <strong>Transaction date rates</strong> — Convert transactions using the exchange rate on the transaction date (not the payment date or reporting date)
              </li>
              <li>
                <strong>Period-end rates</strong> — For balance sheet items (foreign currency bank balances, outstanding invoices), we&apos;ll use period-end exchange rates
              </li>
            </ul>
            Exchange rate setup ensures conversions are done correctly for tax purposes.
          </li>
          <li>
            <strong>Transaction recording</strong> — We record foreign currency transactions:
            <ul>
              <li>
                <strong>Record in original currency</strong> — Record transactions in their original currency first (USD 100, EUR 500, AED 1,000, etc.)
              </li>
              <li>
                <strong>Convert to GBP</strong> — Convert to GBP using the correct exchange rate for that transaction date
              </li>
              <li>
                <strong>Track exchange differences</strong> — If exchange rates change between transaction date and payment date, track exchange rate differences
              </li>
              <li>
                <strong>Categorise correctly</strong> — Categorise foreign currency transactions correctly (sales, expenses, transfers, etc.)
              </li>
            </ul>
            Transaction recording ensures all foreign currency transactions are tracked accurately.
          </li>
          <li>
            <strong>Exchange rate adjustments</strong> — We account for exchange rate fluctuations:
            <ul>
              <li>
                <strong>Period-end adjustments</strong> — At month-end or year-end, revalue foreign currency balances (bank accounts, outstanding invoices) using current exchange rates
              </li>
              <li>
                <strong>Exchange rate gains</strong> — If foreign currency increases in value, record exchange rate gains
              </li>
              <li>
                <strong>Exchange rate losses</strong> — If foreign currency decreases in value, record exchange rate losses
              </li>
              <li>
                <strong>Profit and loss impact</strong> — Exchange rate gains/losses affect profit and loss, which affects tax calculations
              </li>
            </ul>
            Exchange rate adjustments ensure profit figures reflect true value of foreign currency transactions.
          </li>
          <li>
            <strong>Foreign currency reporting</strong> — We set up foreign currency reporting:
            <ul>
              <li>
                <strong>Foreign currency transaction reports</strong> — Reports showing all foreign currency transactions, original currency amounts, exchange rates used, GBP equivalent
              </li>
              <li>
                <strong>Exchange rate gain/loss reports</strong> — Reports showing exchange rate gains/losses for the period
              </li>
              <li>
                <strong>Foreign currency balance reports</strong> — Reports showing foreign currency bank balances, outstanding invoices, etc.
              </li>
              <li>
                <strong>Tax return preparation</strong> — All foreign currency transactions converted to GBP for tax return preparation
              </li>
            </ul>
            Foreign currency reporting ensures everything is ready for tax returns.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What multi-currency bookkeeping includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Multi-currency account setup (foreign currency bank accounts, sales accounts, expense accounts)</li>
            <li>Exchange rate setup (HMRC rates, spot rates, transaction date rates, period-end rates)</li>
            <li>Transaction recording (record in original currency, convert to GBP, track exchange differences)</li>
            <li>Exchange rate adjustments (period-end revaluations, gain/loss accounting)</li>
            <li>Foreign currency reporting (transaction reports, exchange rate reports, tax return preparation)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Common currencies we handle:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>USD (US Dollar)</strong> — Common for US suppliers/customers
            </li>
            <li>
              <strong>EUR (Euro)</strong> — Common for EU suppliers/customers
            </li>
            <li>
              <strong>AED (UAE Dirham)</strong> — Common for Dubai operations/clients
            </li>
            <li>
              <strong>Other currencies</strong> — We can handle any currency you need
            </li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>Exchange rate methods:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>HMRC rates</strong> — Official HMRC exchange rates for tax purposes
            </li>
            <li>
              <strong>Spot rates</strong> — Current market exchange rates for transactions
            </li>
            <li>
              <strong>Average rates</strong> — Average exchange rates for the period (useful for multiple transactions)
            </li>
            <li>
              <strong>Transaction date rates</strong> — Exchange rate on the date of the transaction
            </li>
          </ul>
        </div>

        <p>
          We work with cloud accounting software (Xero, QuickBooks, Sage) that supports multi-currency, or we can set up multi-currency tracking in other systems. The key is using correct exchange rates and accounting for exchange rate fluctuations, so you get accurate profit figures and tax compliance.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of currencies</strong> — More currencies mean more complexity (more exchange rates, more conversions, more adjustments)
          </li>
          <li>
            <strong>Transaction volume</strong> — More foreign currency transactions mean more conversion work
          </li>
          <li>
            <strong>Exchange rate complexity</strong> — Simple spot rate conversion costs less than complex average rate or period-end revaluation setups
          </li>
          <li>
            <strong>Reporting requirements</strong> — Basic foreign currency reporting costs less than detailed exchange rate gain/loss reporting
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Multi-currency bookkeeping setup:</strong> £300–£600 depending on number of currencies and complexity
          </li>
          <li>
            <strong>Monthly multi-currency bookkeeping (if we handle it):</strong> £200–£400/month depending on transaction volume and number of currencies
          </li>
          <li>
            <strong>Foreign currency transaction processing (one-off):</strong> £150–£300 for processing existing foreign currency transactions
          </li>
        </ul>

        <p>
          <strong>Why multi-currency bookkeeping costs what it does:</strong>
        </p>
        <ul>
          <li>Multi-currency account setup requires understanding of foreign currency accounting</li>
          <li>Exchange rate setup requires knowledge of HMRC rules and which rates to use</li>
          <li>Transaction recording requires conversion work (record in original currency, convert to GBP)</li>
          <li>Exchange rate adjustments require period-end revaluations and gain/loss accounting</li>
          <li>Foreign currency reporting requires additional reports and tax return preparation</li>
        </ul>

        <p>
          <strong>Timeline:</strong> Setup usually takes 3-5 working days depending on number of currencies and complexity. Once set up, multi-currency bookkeeping is ongoing—record transactions, convert to GBP, account for exchange rate fluctuations. Exchange rate adjustments are usually done monthly or at period-end.
        </p>

        <p>
          <strong>Ongoing support:</strong> If you want ongoing monthly multi-currency bookkeeping (we handle recording and converting foreign currency transactions), that&apos;s separate. Typical monthly multi-currency bookkeeping is £200–£400/month depending on transaction volume and number of currencies. We can also process existing foreign currency transactions if needed.
        </p>

        <p>
          <strong>No hidden fees.</strong> Setup price includes multi-currency account setup, exchange rate setup, transaction recording setup, and exchange rate adjustment setup. Ongoing multi-currency bookkeeping is separate if you want us to handle it.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with businesses across Kent: businesses in Medway with overseas suppliers, companies in Maidstone selling to international customers, and businesses in Canterbury with operations abroad.
        </p>

        <p>
          Kent businesses are increasingly international—whether it&apos;s e-commerce selling globally, manufacturing with overseas suppliers, or professional services with international clients. The difference is when you have proper multi-currency bookkeeping, you track foreign currency transactions accurately, use correct exchange rates for tax purposes, and account for exchange rate fluctuations. That&apos;s what helps Kent businesses handle international operations properly and stay tax compliant.
        </p>

        <p>
          <strong>Common Kent business scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>E-commerce businesses</strong> — Online businesses selling globally, receiving payments in multiple currencies
          </li>
          <li>
            <strong>Manufacturing businesses</strong> — Businesses with overseas suppliers, paying for materials in foreign currencies
          </li>
          <li>
            <strong>Professional services</strong> — Service businesses with international clients, invoicing in foreign currencies
          </li>
          <li>
            <strong>Import/export businesses</strong> — Businesses importing/exporting goods, dealing with multiple currencies
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent businesses have international operations (e-commerce, manufacturing, professional services)</li>
          <li>Multi-currency bookkeeping helps Kent businesses handle foreign currency transactions accurately</li>
          <li>Proper exchange rate conversion ensures Kent businesses meet HMRC requirements and get accurate profit figures</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses are dealing with. Multi-currency transactions, exchange rates, tax compliance—we&apos;ll set up multi-currency bookkeeping that helps you handle international operations properly.
        </p>

        <h2 id="dubai-clients">Dubai (UAE) clients</h2>
        <p>
          If you&apos;re a UK business with operations in Dubai, or a Dubai-based business with UK operations, you&apos;re dealing with AED (UAE Dirham) and GBP. We handle multi-currency bookkeeping for UK↔Dubai operations:
        </p>
        <ul>
          <li>
            <strong>AED↔GBP transactions</strong> — Track transactions in AED, convert to GBP for UK tax purposes
          </li>
          <li>
            <strong>Dubai operations</strong> — Bookkeeping for Dubai operations (company setup, invoicing, expenses)
          </li>
          <li>
            <strong>UK tax compliance</strong> — Ensure Dubai income/expenses are reported correctly for UK tax (NRL, dual residency, Corporation Tax)
          </li>
          <li>
            <strong>Exchange rate conversion</strong> — Use correct exchange rates for AED↔GBP conversion for tax purposes
          </li>
        </ul>

        <p>
          <strong>UK↔Dubai scenarios:</strong>
        </p>
        <ul>
          <li>UK businesses with Dubai operations (offices, clients, suppliers)</li>
          <li>Dubai-based businesses with UK operations (NRL, dual residency, UK tax obligations)</li>
          <li>International clients with UK and Dubai presence</li>
        </ul>

        <p>
          We understand the complexities of UK↔Dubai operations—NRL status, dual residency, Corporation Tax, VAT, and multi-currency transactions. Whether you&apos;re in Kent and have Dubai operations, or you&apos;re in Dubai and have UK tax obligations, we&apos;ll handle multi-currency bookkeeping that works for both jurisdictions.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Multi-Currency Bookkeeping - Frequently Asked Questions"
          subtitle="Common questions about multi-currency bookkeeping"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/">Monthly Bookkeeping with Bank Reconciliation</Link> — Keep bookkeeping current for accurate multi-currency tracking
            </li>
            <li>
              <Link href="/services/tax/corporation-tax-ct600-filing/">Corporation Tax (CT600) Filing</Link> — Foreign currency income/expenses included in Corporation Tax returns
            </li>
            <li>
              <Link href="/services/bookkeeping/bookkeeping-ecommerce-amazon-etsy-shopify/">Bookkeeping for E-commerce</Link> — E-commerce businesses often deal with multiple currencies
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with multi-currency bookkeeping?" description="We'll set up multi-currency accounts, help you use correct exchange rates, and ensure your foreign currency transactions are tracked accurately for tax purposes. No exchange rate errors, no tax compliance issues—just accurate multi-currency bookkeeping." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with multi-currency bookkeeping?" />
    </>
  );
}

