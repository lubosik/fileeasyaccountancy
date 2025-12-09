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
  title: 'Monthly Bookkeeping with Bank Reconciliation in Kent | File Easy Accountancy',
  description: 'Monthly bookkeeping with bank reconciliation for Kent businesses. Stay compliant with HMRC, spot issues early, and save hours each month. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/monthly-bookkeeping-bank-reconciliation/',
  },
  openGraph: {
    title: 'Monthly Bookkeeping with Bank Reconciliation in Kent | File Easy Accountancy',
    description: 'Monthly bookkeeping with bank reconciliation for Kent businesses. Stay compliant with HMRC, spot issues early, and save hours each month.',
    url: 'https://fileeasyaccountancy.co.uk/services/monthly-bookkeeping-bank-reconciliation/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How much does monthly bookkeeping with bank reconciliation cost?',
    answer: 'Commonly reported ranges from local providers are £150–£400/month depending on your transaction volume and complexity. A sole trader with 50–100 transactions/month typically pays around £150–£200/month. A limited company processing 300–500 transactions/month might pay £300–£400/month. Multi-currency, e-commerce platforms, or CIS adds complexity and cost. We\'ll give you a fixed monthly price after reviewing your setup—no hourly billing surprises.',
  },
  {
    question: 'What software do you use?',
    answer: 'We work with Xero, QuickBooks, Sage, and legacy systems (Excel, paper records). Cloud-first where possible because it makes reconciliation automatic—your bank feeds sync daily, and we just verify and categorise. If you\'re still on Excel, we\'ll recommend the best cloud software for your needs and handle the migration. Xero is our most common recommendation for Kent businesses because it integrates well with HMRC\'s MTD systems.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most setups complete within 5–10 working days. That includes connecting your bank feeds (or setting up statement imports), mapping your Chart of Accounts, and doing your first reconciliation. If you\'re migrating from Excel or another system, add a few days for data cleanup. If you\'re behind on bookkeeping, we\'ll do a catch-up phase first (timeline depends on backlog size), then switch to monthly going forward.',
  },
  {
    question: 'Do you work with specific industries or entity types?',
    answer: 'Yes—we support sole traders, limited companies, landlords, contractors (including CIS), e-commerce sellers, construction firms, professional services, and hospitality businesses. If you\'re not sure whether monthly bookkeeping is right for your setup, book a free 30-min review and we\'ll advise honestly—no obligation.',
  },
  {
    question: 'What if I\'m behind on bookkeeping?',
    answer: 'We offer catch-up bookkeeping to bring you current before HMRC deadlines. Timeline depends on backlog size—could be a week for a few months, could be several weeks if you\'ve got years to catch up on. We\'ll give you an honest estimate after reviewing your records. Once you\'re caught up, we switch to monthly reconciliation to keep you current.',
  },
  {
    question: 'Can you help with HMRC enquiries?',
    answer: 'Yes—if HMRC opens an enquiry, we provide the records, explanations, and support you need. When your books are reconciled monthly, enquiries are much less stressful because you\'ve got clean records to show them. For complex disputes or penalty appeals, we work alongside tax advisors or refer you to specialist representation if needed.',
  },
  {
    question: 'What happens if you find discrepancies during reconciliation?',
    answer: 'We flag anything that doesn\'t match your bank statement immediately—could be a duplicate entry, a missed transaction, or a bank error. We\'ll contact you to clarify before finalising the month\'s books. This is where monthly reconciliation pays off—catching issues early means they\'re easier to fix and less likely to cause compliance problems down the line.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'Monthly Bookkeeping with Bank Reconciliation', href: '/services/bookkeeping/monthly-bookkeeping-bank-reconciliation' },
];

// ToC items extracted from headings
const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function MonthlyBookkeepingBankReconciliationPage() {
  return (
    <>
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={breadcrumbs.map((item) => ({
          name: item.label,
          url: `https://fileeasyaccountancy.co.uk${item.href}`,
        }))}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Monthly Bookkeeping with Bank Reconciliation',
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
            description: 'Monthly bookkeeping with bank reconciliation for Kent businesses. Stay compliant with HMRC, spot issues early, and save hours each month.',
            name: 'Monthly Bookkeeping with Bank Reconciliation',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monthly Reconciliation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transaction Categorisation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT-Ready Records' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HMRC Compliance' } },
              ],
            },
          }),
        }}
      />

      {/* Breadcrumbs above ArticleLayout */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Monthly Bookkeeping with Bank Reconciliation"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        {/* Intro paragraph */}
        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>HMRC requires businesses to keep records of all transactions for at least 6 years</strong> (
              <a href="https://www.gov.uk/self-employed-records" target="_blank" rel="noopener noreferrer">
                gov.uk guidance
              </a>
              )—bank reconciliation proves those records are accurate
            </li>
            <li>
              <strong>Limited companies must maintain accurate accounting records</strong> as per Companies Act 2006 (
              <a
                href="https://www.gov.uk/running-a-limited-company/company-and-accounting-records"
                target="_blank"
                rel="noopener noreferrer"
              >
                Companies House requirements
              </a>
              )—monthly reconciliation ensures you&apos;re audit-ready
            </li>
            <li>
              <strong>VAT-registered businesses must use digital bookkeeping software</strong> for MTD compliance (
              <a href="https://www.gov.uk/vat-record-keeping" target="_blank" rel="noopener noreferrer">
                HMRC VAT guidance
              </a>
              )—we work with Xero, QuickBooks, and Sage to keep you compliant
            </li>
          </ul>
        </div>

        <p>
          Keeping your books up to date isn&apos;t just about HMRC compliance—it&apos;s about knowing where your money actually is. When your bank statement and your records don&apos;t match, that&apos;s when problems start. And trust us, problems are much easier to fix when you catch them early.
        </p>

        <p>
          We handle your monthly bookkeeping end-to-end: transaction categorisation, bank reconciliation, VAT-ready records, and HMRC compliance. Whether you&apos;re a sole trader in Medway managing a construction business or a limited company in Maidstone running a consultancy, we keep your books clean and current. No more end-of-year panic, no more HMRC enquiries about missing transactions, and definitely no more wondering if your bank balance is actually what your spreadsheet says it is.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Stay compliant with HMRC and Companies House deadlines</strong> — Your records are always current, so filing deadlines don&apos;t become emergencies
          </li>
          <li>
            <strong>Save 5–10 hours per month on manual reconciliation</strong> — We handle the tedious bits while you focus on your business
          </li>
          <li>
            <strong>Spot cash flow issues before they become crises</strong> — When you see every transaction categorised monthly, you notice patterns (like that client who&apos;s always late)
          </li>
          <li>
            <strong>Get audit-ready records for year-end or HMRC enquiries</strong> — If HMRC asks questions, you&apos;ve got clean, reconciled books to show them
          </li>
          <li>
            <strong>Reduce the risk of costly errors</strong> — Bank reconciliation catches duplicates, missed transactions, and bank fees before they compound
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We review your current setup (Xero, QuickBooks, spreadsheets, or paper records). If you&apos;re not on cloud software yet, we&apos;ll recommend the best fit and handle the migration.
          </li>
          <li>
            <strong>Onboarding</strong> — Grant us read-only access to your bank feeds (secure, via open banking), or send us monthly statements. We map your Chart of Accounts to match how you actually think about your business expenses.
          </li>
          <li>
            <strong>Monthly reconciliation</strong> — We categorise every transaction, match them against your bank statement, and flag anything that doesn&apos;t add up. You&apos;ll see pending transactions, bank charges, and direct debits you&apos;d forgotten about.
          </li>
          <li>
            <strong>Review &amp; reporting</strong> — End of each month, you get a clean P&L, balance sheet, and cash flow forecast. We highlight any anomalies (like an unusually high expense category) so you can investigate.
          </li>
          <li>
            <strong>VAT-ready &amp; HMRC-compliant</strong> — When it&apos;s time to file VAT or your tax return, your books are already sorted. No last-minute scrambling, no guesswork.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What we reconcile:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Current account transactions (sales, expenses, transfers)</li>
            <li>Credit card statements (if you use a business card)</li>
            <li>Business savings accounts</li>
            <li>PayPal, Stripe, and other payment processors (we sync these with your accounting software)</li>
            <li>Petty cash (if you maintain it)</li>
          </ul>
        </div>

        <p>
          We work with Xero, QuickBooks, Sage, and even Excel if that&apos;s where you&apos;re starting. Cloud-first where possible (it makes reconciliation automatic), but we meet you where you are.
        </p>

        {/* Mid-article CTA after second h2 */}
        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines (no surprises)</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Transaction volume</strong> — A sole trader with 50 transactions/month costs less than a limited company processing 500+ transactions/month
          </li>
          <li>
            <strong>Complexity</strong> — Multi-currency, e-commerce platforms (Amazon, Etsy, Shopify), CIS, or crypto transactions add review time
          </li>
          <li>
            <strong>Frequency</strong> — Weekly reconciliation costs more than monthly, but it&apos;s worth it if you need real-time visibility
          </li>
          <li>
            <strong>Software</strong> — Xero/QuickBooks setup included; legacy migrations (Excel to cloud) may require a one-off setup fee
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Monthly bookkeeping with reconciliation:</strong> £150–£400/month depending on transaction volume and complexity
          </li>
          <li>
            <strong>Catch-up bookkeeping (if you&apos;re behind):</strong> £50–£100/hour for backlog cleanup, then switch to monthly retainer
          </li>
          <li>
            <strong>Cloud accounting setup (if needed):</strong> £200–£500 one-off, includes Chart of Accounts mapping and bank feed connection
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Most setups complete within 5–10 working days. Once we&apos;re set up, monthly reconciliation typically takes 2–3 days from when we receive your bank statement. If you&apos;re behind on bookkeeping, we&apos;ll give you an honest estimate after reviewing your backlog—could be a week for a few months, could be longer if you&apos;ve got years to catch up on.
        </p>

        <p>
          <strong>No hidden fees.</strong> All prices exclude VAT. We offer monthly payment plans and can adjust if your transaction volume changes significantly (up or down).
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with sole traders, limited companies, landlords, and contractors across Kent. Whether you&apos;re in Medway managing a construction firm (CIS compliance adds complexity to reconciliation), Canterbury running a hospitality business (lots of card transactions to match), or Maidstone operating a consultancy (expense categorisation matters for tax deductions), we handle your bookkeeping remotely with the same care as if we were in the same office.
        </p>

        <p>
          Kent businesses face the same HMRC deadlines as everyone else—31 January for self-assessment, quarterly VAT returns if you&apos;re registered, Companies House confirmation statements. The difference is that when your books are reconciled monthly, these deadlines aren&apos;t scary. You&apos;re not frantically trying to remember what that £247 payment to &quot;ACME Supplies&quot; was for six months ago—it&apos;s already categorised and explained in your monthly report.
        </p>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), but we understand the local business landscape. Construction CIS rules in Medway, professional services in Maidstone, tourism and hospitality in Canterbury—we&apos;ve seen it all, and we know what HMRC expects when they review your records.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Monthly Bookkeeping with Bank Reconciliation - Frequently Asked Questions"
          subtitle="Common questions about monthly bookkeeping and bank reconciliation"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/catch-up-bookkeeping-hmrc-deadlines/">Catch-Up Bookkeeping</Link> — If you&apos;re behind, we&apos;ll bring you current before deadlines
            </li>
            <li>
              <Link href="/services/bookkeeping/cloud-bookkeeping-xero-quickbooks/">Cloud Accounting Setup</Link> — Get set up on Xero, QuickBooks, or Sage with bank feeds connected
            </li>
            <li>
              <Link href="/services/bookkeeping/vat-ready-bookkeeping-reconciliation/">VAT-Ready Bookkeeping</Link> — Bookkeeping specifically optimised for VAT returns and MTD compliance
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        {/* Final CTA */}
        <ArticleCTA variant="secondary" title="Need help with monthly bookkeeping?" description="Don't risk penalties or errors. We'll handle your monthly reconciliation, ensuring accuracy, compliance, and peace of mind." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with monthly bookkeeping?" />
    </>
  );
}
