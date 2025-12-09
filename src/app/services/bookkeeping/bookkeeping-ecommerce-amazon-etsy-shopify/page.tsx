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
  title: 'E-Commerce Bookkeeping for Amazon, Etsy & Shopify Sellers in Kent | File Easy Accountancy',
  description: 'Bookkeeping for online sellers on Amazon, Etsy, and Shopify in Kent. Multi-platform reconciliation, VAT compliance, inventory tracking. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/bookkeeping-ecommerce-amazon-etsy-shopify/',
  },
  openGraph: {
    title: 'E-Commerce Bookkeeping for Amazon, Etsy & Shopify Sellers in Kent | File Easy Accountancy',
    description: 'Bookkeeping for online sellers on Amazon, Etsy, and Shopify in Kent. Multi-platform reconciliation, VAT compliance, inventory tracking.',
    url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping-ecommerce-amazon-etsy-shopify/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Do Amazon sellers need bookkeeping?',
    answer: 'Yes, definitely. Amazon sellers are self-employed businesses (unless you\'re a limited company), which means HMRC expects you to keep records of all sales, fees, and expenses. Amazon doesn\'t handle your taxes—you\'re responsible for filing Self Assessment and paying income tax on your profits. Proper bookkeeping helps you track profit margins (especially important with Amazon\'s fees), claim all allowable expenses, and stay compliant with HMRC requirements.',
  },
  {
    question: 'How do I keep books for my Etsy shop?',
    answer: 'Etsy sellers need to track sales, Etsy fees (transaction fees, payment processing fees), product costs (materials, supplies), shipping costs, and any other business expenses. The tricky part is Etsy pays out on a schedule (weekly or bi-weekly), so you need to reconcile Etsy payouts with your actual sales. Many Etsy sellers use spreadsheets or accounting software like Xero or QuickBooks. We help Etsy sellers set up proper bookkeeping that tracks everything automatically and gives them monthly profit reports.',
  },
  {
    question: 'What records do Shopify sellers need?',
    answer: 'Shopify sellers need to track sales from their Shopify store, Shopify subscription fees, payment processing fees (Stripe, PayPal), product costs (if buying products to resell), shipping costs, marketing expenses, and any other business expenses. Since Shopify sellers often use multiple payment processors, you need to reconcile Stripe payments, PayPal payments, and bank transfers with your Shopify sales. HMRC expects you to keep records for at least 6 years, so proper bookkeeping from the start saves headaches later.',
  },
  {
    question: 'How much does ecommerce bookkeeping cost?',
    answer: 'Commonly reported ranges from local providers are £150–£400/month depending on how many platforms you\'re selling on, how many transactions you have, and whether you\'re VAT registered. A seller on one platform (just Etsy) with 50 sales per month might pay around £150–£200/month. A seller on multiple platforms (Amazon + Etsy + Shopify) with 500+ sales per month and VAT registration might pay £300–£400/month. Setup (one-off) typically costs £200–£400. E-commerce bookkeeping costs more than regular bookkeeping because multi-platform reconciliation, platform fees, and inventory tracking add complexity.',
  },
  {
    question: 'Do online sellers need an accountant?',
    answer: 'You don\'t legally need an accountant, but most serious online sellers find it worth it. E-commerce bookkeeping is complex—multi-platform reconciliation, platform fees, inventory tracking, VAT compliance—and mistakes can be expensive. An accountant (or bookkeeper) helps you track profit margins properly, claim all allowable expenses, stay VAT compliant, and avoid HMRC penalties. If you\'re comfortable with accounting software and tax rules, you can do it yourself, but many sellers find the cost of professional help is worth the time saved and peace of mind.',
  },
  {
    question: 'When do I need to register for VAT as an online seller?',
    answer: 'You must register for VAT when your turnover (total sales, not profit) exceeds £90,000 in any rolling 12-month period. Many e-commerce sellers hit this threshold faster than they expect because turnover includes all sales before fees and expenses. Once registered, you need to charge 20% VAT on UK sales, file quarterly VAT returns, and can reclaim VAT on business expenses. If you\'re getting close to the threshold, it\'s worth planning ahead—VAT registration adds complexity but can also be beneficial if you have lots of business expenses with VAT.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'E-Commerce Bookkeeping for Amazon, Etsy & Shopify Sellers', href: '/services/bookkeeping/bookkeeping-ecommerce-amazon-etsy-shopify' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function BookkeepingEcommerceAmazonEtsyShopifyPage() {
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
            serviceType: 'E-Commerce Bookkeeping for Amazon, Etsy and Shopify Sellers',
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
            description: 'Bookkeeping for online sellers on Amazon, Etsy, and Shopify in Kent. Multi-platform reconciliation, VAT compliance, inventory tracking.',
            name: 'E-Commerce Bookkeeping for Amazon, Etsy & Shopify Sellers',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/bookkeeping-ecommerce-amazon-etsy-shopify/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Platform Reconciliation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Platform Fee Tracking' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inventory & COGS Calculation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT Compliance' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="E-Commerce Bookkeeping for Amazon, Etsy & Shopify Sellers"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s the thing about e-commerce bookkeeping:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>E-commerce sellers must keep records of all sales across all platforms</strong> (Amazon, Etsy, Shopify) plus fees and expenses—HMRC says you need to keep this stuff for 6 years (
              <a href="https://www.gov.uk/self-employed-records" target="_blank" rel="noopener noreferrer">
                gov.uk guidance
              </a>
              )
            </li>
            <li>
              <strong>Many online sellers hit the VAT registration threshold (£90,000) way faster than they think</strong>—once you hit it, you need to register for VAT and file quarterly returns (
              <a href="https://www.gov.uk/vat-record-keeping" target="_blank" rel="noopener noreferrer">
                gov.uk VAT records
              </a>
              )
            </li>
            <li>
              <strong>Platform fees are deductible</strong>—Amazon FBA fees, Etsy transaction fees, Shopify subscription costs all count as business expenses (
              <a href="https://www.gov.uk/expenses-if-youre-self-employed" target="_blank" rel="noopener noreferrer">
                gov.uk expenses
              </a>
              )
            </li>
          </ul>
        </div>

        <p>
          Running an online shop is hard work. You&apos;re juggling inventory, dealing with customer messages, trying to keep up with orders, and somewhere in the middle of all that you realize you have no idea how much money you&apos;re actually making. Sound familiar?
        </p>

        <p>
          The problem is most e-commerce sellers are trying to do this themselves with spreadsheets or worse, just hoping it all works out. That&apos;s fine when you&apos;re selling a few items on the side, but when you&apos;re serious about it, you need proper bookkeeping that tracks sales from multiple platforms, reconciles them with your bank deposits, tracks your inventory costs, and keeps you VAT compliant.
        </p>

        <p>
          We handle bookkeeping specifically for online sellers: Amazon FBA sellers, Etsy shop owners, Shopify merchants, people selling on multiple platforms at once. We reconcile your sales across platforms, track all the fees, calculate your cost of goods sold (COGS) properly, handle VAT if you&apos;re registered, and give you monthly reports that actually make sense. No more guessing whether you&apos;re making money or just moving inventory around.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Reconcile sales from multiple platforms</strong> — We match Amazon payouts, Etsy payments, Shopify transfers, and PayPal deposits with your actual sales so everything lines up
          </li>
          <li>
            <strong>Track all your fees properly</strong> — Amazon referral fees, FBA fees, Etsy transaction fees, payment processing fees, shipping labels—we categorize everything so you can see where your money is really going
          </li>
          <li>
            <strong>Calculate COGS accurately</strong> — Inventory cost tracking matters. If you&apos;re buying products to resell, we help you track cost of goods sold so your profit numbers are real, not inflated
          </li>
          <li>
            <strong>Stay VAT compliant</strong> — If you&apos;re VAT registered (or getting close to the threshold), we handle quarterly VAT returns and make sure you&apos;re charging VAT correctly on UK sales
          </li>
          <li>
            <strong>Handle inventory valuations</strong> — Year-end inventory counts and valuations can be a pain, we help you do it right so HMRC doesn&apos;t question your numbers
          </li>
          <li>
            <strong>Get reports that make sense</strong> — Monthly profit and loss, cash flow forecasts, platform-by-platform breakdowns—real numbers you can use to make business decisions
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for e-commerce sellers:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: which platforms you&apos;re selling on (Amazon, Etsy, Shopify, eBay, your own website), roughly how many sales you make per month, whether you&apos;re VAT registered, if you&apos;re tracking inventory, and what your current bookkeeping setup looks like (if you have one).
          </li>
          <li>
            <strong>Platform connection</strong> — We set up cloud accounting (usually Xero or QuickBooks) and connect it to your bank accounts. We also get access to your platform seller accounts (Amazon Seller Central, Etsy Shop Manager, Shopify admin) so we can download sales reports directly. If you&apos;re using payment processors like PayPal or Stripe, we connect those too.
          </li>
          <li>
            <strong>Sales reconciliation</strong> — Every month we:
            <ul>
              <li>Download sales reports from each platform (Amazon transaction reports, Etsy CSV exports, Shopify order reports)</li>
              <li>Match sales with bank deposits (Amazon usually pays out every 2 weeks, Etsy pays weekly or bi-weekly, Shopify depends on your payment processor)</li>
              <li>Categorize each sale by product or category if you want more detailed reporting</li>
              <li>Reconcile platform fees and chargebacks</li>
            </ul>
          </li>
          <li>
            <strong>Expense tracking</strong> — We track:
            <ul>
              <li>
                <strong>Product costs</strong> — What you paid for inventory (if you&apos;re buying products to resell)
              </li>
              <li>
                <strong>Platform fees</strong> — Amazon referral fees (usually 8-15%), FBA fees, Etsy transaction fees (6.5%), Shopify subscription fees, payment processing fees (Stripe, PayPal)
              </li>
              <li>
                <strong>Shipping costs</strong> — Postage labels, packaging materials, shipping supplies
              </li>
              <li>
                <strong>Marketing expenses</strong> — Amazon ads, Facebook ads, influencer payments, email marketing tools
              </li>
              <li>
                <strong>Other business expenses</strong> — Photography equipment, software subscriptions, home office (if you work from home)
              </li>
            </ul>
          </li>
          <li>
            <strong>COGS calculation</strong> — For sellers who buy products to resell, we calculate cost of goods sold properly. This means tracking what you paid for inventory, when you bought it, and matching it with sales. There&apos;s different methods (FIFO, average cost) and we&apos;ll help you pick the one that works for your business.
          </li>
          <li>
            <strong>VAT handling</strong> — If you&apos;re VAT registered:
            <ul>
              <li>We track VAT on UK sales (20% VAT on sales to UK customers)</li>
              <li>We handle VAT on international sales (different rules for EU, US, rest of world)</li>
              <li>We track VAT on your expenses (reclaim VAT on business purchases)</li>
              <li>We prepare quarterly VAT returns and file them with HMRC</li>
            </ul>
          </li>
          <li>
            <strong>Monthly reports</strong> — You get monthly reports showing:
            <ul>
              <li>Total sales by platform</li>
              <li>Total expenses by category</li>
              <li>Gross profit (sales minus COGS)</li>
              <li>Net profit (after all expenses)</li>
              <li>Cash flow (money in vs money out)</li>
              <li>Platform-by-platform breakdown if you want it</li>
            </ul>
          </li>
        </ol>

        <p>
          The whole process takes about 3-5 days from when we get your data. If you&apos;re behind on bookkeeping (lots of e-commerce sellers are), we can do catch-up work to get you current.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of platforms</strong> — Selling on one platform (just Amazon) costs less than selling on three platforms (Amazon + Etsy + Shopify) because there&apos;s more reconciliation work
          </li>
          <li>
            <strong>Transaction volume</strong> — 50 sales per month costs less than 500 sales per month
          </li>
          <li>
            <strong>Inventory complexity</strong> — Simple reselling (buy products, sell products) costs less than manufacturing (buy materials, make products, track work-in-progress, sell finished goods)
          </li>
          <li>
            <strong>VAT registration</strong> — VAT-registered sellers pay more because we&apos;re handling quarterly VAT returns on top of monthly bookkeeping
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Monthly bookkeeping for e-commerce sellers:</strong> £150–£400/month depending on platforms, transaction volume, and VAT status
          </li>
          <li>
            <strong>Setup (one-off):</strong> £200–£400 (includes Chart of Accounts setup, platform connections, initial reconciliation)
          </li>
          <li>
            <strong>Catch-up work:</strong> £300–£800 for a full tax year&apos;s worth of bookkeeping (depends on how messy things are)
          </li>
        </ul>

        <p>
          <strong>Why e-commerce bookkeeping costs more than regular bookkeeping:</strong>
        </p>
        <ul>
          <li>Multi-platform reconciliation is more complex than single-source income</li>
          <li>Platform fees need careful tracking and categorization</li>
          <li>Inventory/COGS calculations add complexity</li>
          <li>VAT handling for international sales adds work</li>
          <li>Payment processor reconciliation (PayPal, Stripe) adds another layer</li>
        </ul>

        <p>
          <strong>Timeline:</strong> Setup usually takes about a week (longer if we&apos;re connecting multiple platforms and payment processors). Once we&apos;re set up, monthly bookkeeping takes about 3-5 working days from when we receive your data. If you&apos;re doing catch-up work, expect 2-4 weeks for a full tax year depending on how much data we&apos;re working with.
        </p>

        <p>
          <strong>No hidden fees.</strong> All prices exclude VAT. We offer monthly payment plans and can adjust if your sales volume or platform mix changes significantly.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with e-commerce sellers across Kent: Amazon FBA sellers in Medway storing inventory in Amazon warehouses, Etsy shop owners in Maidstone making handmade products, Shopify merchants in Canterbury running their own websites, and people selling on multiple platforms at once.
        </p>

        <p>
          Kent e-commerce sellers face the same challenges as everyone else—multi-platform sales reconciliation, VAT registration when they hit the threshold, inventory tracking, and trying to figure out if they&apos;re actually making money. The difference is we understand the local business landscape. If you&apos;re storing inventory in Amazon FBA warehouses, shipping from Kent, dealing with UK customers, we get it.
        </p>

        <p>
          <strong>Common Kent e-commerce scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Amazon FBA sellers</strong> — Storing inventory in Amazon warehouses, dealing with FBA fees, referral fees, and trying to track profit margins
          </li>
          <li>
            <strong>Etsy shop owners</strong> — Handmade sellers dealing with Etsy transaction fees, shipping costs, and material expenses
          </li>
          <li>
            <strong>Shopify merchants</strong> — Running their own websites, dealing with Stripe/PayPal fees, Shopify subscription costs, and trying to scale
          </li>
          <li>
            <strong>Multi-platform sellers</strong> — Selling on Amazon + Etsy + Shopify simultaneously, trying to keep everything organized across platforms
          </li>
          <li>
            <strong>Dropshippers</strong> — Ordering products directly from suppliers, dealing with supplier costs, platform fees, and trying to track actual profit
          </li>
        </ul>

        <p>
          <strong>VAT registration is common for Kent e-commerce sellers:</strong>
        </p>
        <ul>
          <li>Many hit the £90,000 threshold faster than they expect</li>
          <li>Once registered, you need to charge 20% VAT on UK sales</li>
          <li>You can reclaim VAT on business expenses (packaging, shipping supplies, inventory if applicable)</li>
          <li>Quarterly VAT returns become mandatory</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what e-commerce sellers in Kent are dealing with. Multi-platform chaos, VAT compliance, inventory tracking—we&apos;ve seen it all, and we know how to make it make sense.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="E-Commerce Bookkeeping for Amazon, Etsy & Shopify Sellers - Frequently Asked Questions"
          subtitle="Common questions about e-commerce bookkeeping and multi-platform reconciliation"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/">Monthly Bookkeeping with Bank Reconciliation</Link> — Ongoing monthly bookkeeping to keep you current
            </li>
            <li>
              <Link href="/services/bookkeeping/vat-ready-bookkeeping-reconciliation/">VAT-Ready Bookkeeping & Reconciliation</Link> — If you&apos;re VAT registered or getting close to the threshold
            </li>
            <li>
              <Link href="/services/bookkeeping/multi-currency-bookkeeping/">Multi-Currency Bookkeeping</Link> — For sellers dealing with international sales and multiple currencies
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with e-commerce bookkeeping?" description="Stop guessing your profit margins. We'll handle multi-platform reconciliation, track all fees, calculate COGS, and keep you VAT compliant." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with e-commerce bookkeeping?" />
    </>
  );
}

