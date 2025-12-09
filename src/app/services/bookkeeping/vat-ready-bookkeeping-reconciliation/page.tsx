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
  title: 'VAT-Ready Bookkeeping & Reconciliation Services in Kent | File Easy Accountancy',
  description: 'VAT-ready bookkeeping and reconciliation services in Kent. Making Tax Digital VAT compliant, accurate VAT returns, proper records. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/vat-ready-bookkeeping-reconciliation/',
  },
  openGraph: {
    title: 'VAT-Ready Bookkeeping & Reconciliation Services in Kent | File Easy Accountancy',
    description: 'VAT-ready bookkeeping and reconciliation services in Kent. Making Tax Digital VAT compliant, accurate VAT returns, proper records.',
    url: 'https://fileeasyaccountancy.co.uk/services/vat-ready-bookkeeping-reconciliation/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is VAT-ready bookkeeping?',
    answer: 'VAT-ready bookkeeping is bookkeeping set up to track VAT correctly from the start. It includes: separate accounts for output VAT (VAT on sales) and input VAT (VAT on purchases), VAT codes for different VAT rates, VAT tracking on all transactions, and digital records that comply with Making Tax Digital VAT (MTD VAT) requirements. VAT-ready bookkeeping ensures VAT is tracked correctly and VAT returns are easier to prepare.',
  },
  {
    question: 'How do you reconcile VAT?',
    answer: 'VAT reconciliation involves checking VAT records against bank statements and invoices to ensure accuracy. It includes: reconciling bank statements with VAT records (ensuring all VAT transactions are recorded), checking invoices have correct VAT codes and VAT amounts, reconciling VAT control accounts (output VAT, input VAT) to ensure totals are correct, and reconciling VAT return figures against bookkeeping records before submission. VAT reconciliation catches errors before VAT returns are submitted.',
  },
  {
    question: 'What is Making Tax Digital VAT?',
    answer: 'Making Tax Digital VAT (MTD VAT) is HMRC\'s requirement for VAT-registered businesses to keep digital records and submit VAT returns using compatible software. It requires: digital record-keeping (using MTD VAT-compatible software), API submission (submitting VAT returns via API from compatible software), digital links (no manual data entry between systems), and record keeping (keeping VAT records digitally for at least 6 years). MTD VAT applies to most VAT-registered businesses.',
  },
  {
    question: 'What records do I need for VAT?',
    answer: 'For VAT, you need to keep records of: all sales (invoices, receipts) with VAT amounts, all purchases (invoices, receipts) with VAT amounts, VAT returns submitted to HMRC, VAT calculations (how VAT amounts were calculated), and supporting documents (bank statements, invoices, receipts). VAT records must be kept for at least 6 years. For MTD VAT, records must be kept digitally using compatible software.',
  },
  {
    question: 'How do you prepare for VAT returns?',
    answer: 'Preparing for VAT returns involves: ensuring bookkeeping is VAT-ready (VAT tracked correctly on all transactions), reconciling VAT records (checking VAT records against bank statements and invoices), extracting VAT return data (output VAT, input VAT, VAT due or refund), reviewing VAT return figures (checking for accuracy before submission), and submitting VAT returns via API from compatible software (for MTD VAT compliance). VAT-ready bookkeeping makes VAT return preparation straightforward.',
  },
  {
    question: 'Do I need VAT-ready bookkeeping?',
    answer: 'Yes, definitely if you\'re VAT-registered or approaching VAT registration. VAT-ready bookkeeping ensures: VAT is tracked correctly from the start, VAT reconciliation is straightforward, MTD VAT compliance is met, and VAT returns are easier to prepare. Without VAT-ready bookkeeping, you risk VAT errors, HMRC compliance issues, and penalties. It\'s worth getting it right—VAT errors can be costly.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'VAT-Ready Bookkeeping & Reconciliation', href: '/services/bookkeeping/vat-ready-bookkeeping-reconciliation' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function VatReadyBookkeepingReconciliationPage() {
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
            serviceType: 'VAT-Ready Bookkeeping & Reconciliation',
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
            description: 'VAT-ready bookkeeping and reconciliation services in Kent. Making Tax Digital VAT compliant, accurate VAT returns, proper records.',
            name: 'VAT-Ready Bookkeeping & Reconciliation',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/vat-ready-bookkeeping-reconciliation/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT-Ready Bookkeeping Setup' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT Reconciliation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MTD VAT Compliance' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT Return Preparation Support' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="VAT-Ready Bookkeeping & Reconciliation"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re VAT-registered, your bookkeeping needs to be VAT-ready. That means tracking VAT on sales and purchases separately, reconciling VAT records, and keeping digital records that comply with Making Tax Digital VAT (MTD VAT). HMRC&apos;s Making Tax Digital VAT requires businesses to keep digital records and submit VAT returns using compatible software—VAT-ready bookkeeping ensures compliance with MTD VAT requirements. VAT reconciliation involves checking VAT records against bank statements and invoices to ensure accuracy, which ensures VAT returns are correct.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>HMRC&apos;s Making Tax Digital VAT requires businesses to keep digital records and submit VAT returns using compatible software</strong> — VAT-ready bookkeeping ensures compliance with MTD VAT requirements (
              <a href="https://www.gov.uk/guidance/get-your-business-ready-for-making-tax-digital-for-vat" target="_blank" rel="noopener noreferrer">
                gov.uk Making Tax Digital VAT
              </a>
              )
            </li>
            <li>
              <strong>VAT reconciliation involves checking VAT records against bank statements and invoices to ensure accuracy</strong> — Proper reconciliation ensures VAT returns are correct
            </li>
            <li>
              <strong>VAT-ready bookkeeping tracks VAT on sales (output VAT) and purchases (input VAT) separately</strong> — Accurate VAT tracking makes VAT return preparation straightforward
            </li>
            <li>
              <strong>Businesses must keep VAT records for at least 6 years</strong> — VAT-ready bookkeeping maintains proper records for HMRC compliance (
              <a href="https://www.gov.uk/vat-record-keeping" target="_blank" rel="noopener noreferrer">
                gov.uk VAT record keeping
              </a>
              )
            </li>
          </ul>
        </div>

        <p>
          The problem is most businesses don&apos;t set up bookkeeping that&apos;s VAT-ready from the start. They mix VAT with non-VAT transactions, don&apos;t track output VAT and input VAT separately, or struggle with VAT reconciliation. That causes problems—wrong VAT calculations mean incorrect VAT returns, missing VAT records mean HMRC compliance issues, and poor VAT reconciliation means errors and penalties.
        </p>

        <p>
          We handle VAT-ready bookkeeping and reconciliation for VAT-registered businesses: VAT-ready bookkeeping setup (tracking output VAT and input VAT separately), VAT reconciliation (checking VAT records against bank statements and invoices), MTD VAT compliance (digital records using compatible software), and VAT return preparation support. Whether you&apos;re a VAT-registered business in Medway needing MTD VAT-compliant bookkeeping, a company in Maidstone wanting accurate VAT returns, or a business in Canterbury needing VAT reconciliation, we&apos;ll set up VAT-ready bookkeeping that works. No VAT errors, no compliance issues—just accurate VAT tracking and reconciliation that keeps you compliant.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Comply with Making Tax Digital VAT</strong> — MTD VAT requires digital records and compatible software. VAT-ready bookkeeping ensures you meet MTD VAT requirements and can submit VAT returns digitally.
          </li>
          <li>
            <strong>Prepare accurate VAT returns</strong> — VAT reconciliation ensures VAT records are accurate, which means VAT returns are correct. No errors, no HMRC enquiries, no penalties.
          </li>
          <li>
            <strong>Track VAT correctly</strong> — VAT-ready bookkeeping tracks VAT on sales (output VAT) and purchases (input VAT) separately. Accurate tracking means accurate VAT calculations.
          </li>
          <li>
            <strong>Maintain proper VAT records</strong> — HMRC requires VAT records to be kept for at least 6 years. VAT-ready bookkeeping maintains proper digital records for compliance.
          </li>
          <li>
            <strong>Reconcile VAT easily</strong> — VAT reconciliation checks VAT records against bank statements and invoices. Proper reconciliation catches errors early, before VAT returns are submitted.
          </li>
          <li>
            <strong>Save time on VAT returns</strong> — VAT-ready bookkeeping means VAT returns are easier to prepare. All VAT information is already tracked and reconciled, so VAT return preparation is straightforward.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for VAT-ready bookkeeping and reconciliation:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: whether you&apos;re VAT-registered (or need to be), what your current bookkeeping looks like, what VAT scheme you&apos;re on (standard VAT, flat rate, cash accounting), whether you&apos;re already MTD VAT compliant, and what you want to achieve.
          </li>
          <li>
            <strong>VAT-ready bookkeeping setup</strong> — We set up bookkeeping that&apos;s VAT-ready:
            <ul>
              <li>
                <strong>VAT accounts</strong> — Set up separate accounts for output VAT (VAT on sales) and input VAT (VAT on purchases)
              </li>
              <li>
                <strong>VAT codes</strong> — Set up VAT codes for different VAT rates (standard rate 20%, reduced rate 5%, zero rate 0%, exempt, outside scope)
              </li>
              <li>
                <strong>VAT tracking</strong> — Ensure every sale and purchase has the correct VAT code and VAT amount recorded
              </li>
              <li>
                <strong>Digital records</strong> — Use MTD VAT-compatible software (Xero, QuickBooks, Sage) that meets HMRC&apos;s digital record-keeping requirements
              </li>
            </ul>
            VAT-ready bookkeeping ensures VAT is tracked correctly from the start.
          </li>
          <li>
            <strong>VAT reconciliation setup</strong> — We set up VAT reconciliation:
            <ul>
              <li>
                <strong>Bank reconciliation</strong> — Reconcile bank statements with VAT records, ensuring all VAT transactions are recorded correctly
              </li>
              <li>
                <strong>Invoice reconciliation</strong> — Check that all invoices have correct VAT codes and VAT amounts recorded
              </li>
              <li>
                <strong>VAT control account reconciliation</strong> — Reconcile VAT control accounts (output VAT, input VAT) to ensure totals are correct
              </li>
              <li>
                <strong>VAT return reconciliation</strong> — Before submitting VAT returns, reconcile VAT figures against bookkeeping records to ensure accuracy
              </li>
            </ul>
            VAT reconciliation catches errors before VAT returns are submitted.
          </li>
          <li>
            <strong>MTD VAT compliance</strong> — We ensure MTD VAT compliance:
            <ul>
              <li>
                <strong>Digital records</strong> — Ensure bookkeeping uses MTD VAT-compatible software that meets HMRC&apos;s digital record-keeping requirements (
                <a href="https://www.gov.uk/guidance/get-your-business-ready-for-making-tax-digital-for-vat" target="_blank" rel="noopener noreferrer">
                  gov.uk Making Tax Digital VAT
                </a>
                )
              </li>
              <li>
                <strong>API submission</strong> — Ensure VAT returns can be submitted via API (application programming interface) from compatible software to HMRC
              </li>
              <li>
                <strong>Digital links</strong> — Ensure there are digital links throughout the bookkeeping process (no manual data entry between systems)
              </li>
              <li>
                <strong>Record keeping</strong> — Ensure VAT records are kept digitally for at least 6 years as required by HMRC
              </li>
            </ul>
            MTD VAT compliance ensures you meet HMRC&apos;s Making Tax Digital VAT requirements.
          </li>
          <li>
            <strong>VAT return preparation support</strong> — We support VAT return preparation:
            <ul>
              <li>
                <strong>VAT return data</strong> — Extract VAT return data from bookkeeping (output VAT, input VAT, VAT due or refund)
              </li>
              <li>
                <strong>VAT return checking</strong> — Review VAT return figures before submission to ensure accuracy
              </li>
              <li>
                <strong>VAT return submission</strong> — Submit VAT returns via API from compatible software to HMRC (if we&apos;re handling it)
              </li>
              <li>
                <strong>VAT return filing</strong> — Ensure VAT returns are filed on time (usually quarterly) to avoid late filing penalties
              </li>
            </ul>
            VAT return preparation support ensures VAT returns are accurate and submitted on time.
          </li>
          <li>
            <strong>Ongoing VAT reconciliation</strong> — We set up ongoing VAT reconciliation:
            <ul>
              <li>
                <strong>Monthly VAT reconciliation</strong> — Reconcile VAT records monthly to catch errors early
              </li>
              <li>
                <strong>Quarterly VAT reconciliation</strong> — Reconcile VAT records quarterly before VAT return submission
              </li>
              <li>
                <strong>VAT error correction</strong> — Correct any VAT errors found during reconciliation before VAT returns are submitted
              </li>
              <li>
                <strong>VAT record maintenance</strong> — Maintain proper VAT records throughout the year
              </li>
            </ul>
            Ongoing VAT reconciliation ensures VAT records stay accurate.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What VAT-ready bookkeeping and reconciliation includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>VAT-ready bookkeeping setup (VAT accounts, VAT codes, VAT tracking, digital records)</li>
            <li>VAT reconciliation setup (bank reconciliation, invoice reconciliation, VAT control account reconciliation)</li>
            <li>MTD VAT compliance (digital records, API submission, digital links, record keeping)</li>
            <li>VAT return preparation support (data extraction, checking, submission, filing)</li>
            <li>Ongoing VAT reconciliation (monthly, quarterly, error correction, record maintenance)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Common VAT schemes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Standard VAT</strong> — Charge VAT on sales, claim VAT on purchases, pay difference to HMRC
            </li>
            <li>
              <strong>Flat rate VAT</strong> — Pay fixed percentage of turnover to HMRC, simpler but less flexible
            </li>
            <li>
              <strong>Cash accounting VAT</strong> — Account for VAT when cash is received/paid, not when invoices are issued/received
            </li>
            <li>
              <strong>Annual accounting VAT</strong> — Make advance payments throughout year, submit annual VAT return
            </li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>MTD VAT-compatible software:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Xero</strong> — Cloud accounting software with MTD VAT compliance built-in
            </li>
            <li>
              <strong>QuickBooks</strong> — Cloud accounting software with MTD VAT compliance
            </li>
            <li>
              <strong>Sage</strong> — Accounting software with MTD VAT compliance options
            </li>
            <li>
              <strong>Other software</strong> — Various accounting software packages with MTD VAT compatibility
            </li>
          </ul>
        </div>

        <p>
          We work with MTD VAT-compatible software (Xero, QuickBooks, Sage) that meets HMRC&apos;s requirements. The key is setting up VAT-ready bookkeeping from the start, so VAT is tracked correctly and VAT reconciliation is straightforward.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>VAT scheme</strong> — Standard VAT is simpler than flat rate or cash accounting (fewer calculations, simpler reconciliation)
          </li>
          <li>
            <strong>Transaction volume</strong> — More transactions mean more VAT reconciliation work
          </li>
          <li>
            <strong>MTD VAT compliance</strong> — Setting up MTD VAT-compliant bookkeeping costs more than basic VAT tracking
          </li>
          <li>
            <strong>Ongoing support</strong> — Monthly VAT reconciliation and VAT return preparation costs more than one-off setup
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>VAT-ready bookkeeping setup:</strong> £300–£600 depending on VAT scheme and transaction volume
          </li>
          <li>
            <strong>Monthly VAT-ready bookkeeping (if we handle it):</strong> £200–£400/month depending on transaction volume and reconciliation needs
          </li>
          <li>
            <strong>VAT reconciliation (one-off):</strong> £150–£300 for reconciling existing VAT records
          </li>
          <li>
            <strong>VAT return preparation (per return):</strong> £100–£200 per VAT return depending on complexity
          </li>
        </ul>

        <p>
          <strong>Why VAT-ready bookkeeping and reconciliation costs what it does:</strong>
        </p>
        <ul>
          <li>VAT-ready bookkeeping setup requires understanding of VAT rules and MTD VAT requirements</li>
          <li>VAT reconciliation requires checking VAT records against bank statements and invoices</li>
          <li>MTD VAT compliance requires compatible software setup and digital record-keeping</li>
          <li>VAT return preparation requires extracting data, checking figures, and submitting returns</li>
          <li>Ongoing VAT reconciliation requires regular monitoring and error correction</li>
        </ul>

        <p>
          <strong>Timeline:</strong> Setup usually takes 3-5 working days depending on VAT scheme and complexity. Once set up, VAT-ready bookkeeping is ongoing—track VAT on transactions, reconcile VAT records regularly, prepare VAT returns quarterly. VAT reconciliation is usually done monthly or quarterly before VAT return submission.
        </p>

        <p>
          <strong>Ongoing support:</strong> If you want ongoing monthly VAT-ready bookkeeping and VAT reconciliation (we handle tracking and reconciling VAT), that&apos;s separate. Typical monthly VAT-ready bookkeeping is £200–£400/month depending on transaction volume. We can also handle VAT return preparation quarterly if needed (£100–£200 per return).
        </p>

        <p>
          <strong>No hidden fees.</strong> Setup price includes VAT-ready bookkeeping setup, VAT reconciliation setup, MTD VAT compliance setup, and VAT return preparation setup. Ongoing VAT-ready bookkeeping and VAT return preparation are separate if you want us to handle it.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with VAT-registered businesses across Kent: businesses in Medway needing MTD VAT-compliant bookkeeping, companies in Maidstone wanting accurate VAT returns, and businesses in Canterbury needing VAT reconciliation.
        </p>

        <p>
          Kent businesses face the same VAT rules as everyone else—VAT registration (if turnover exceeds threshold), MTD VAT compliance (digital records and API submission), VAT returns (usually quarterly), and VAT record keeping (6 years). The difference is when your bookkeeping is VAT-ready from the start, you track VAT correctly, reconcile VAT accurately, and submit VAT returns without errors. That&apos;s what helps Kent businesses stay VAT compliant and avoid penalties.
        </p>

        <p>
          <strong>Common Kent business scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>VAT-registered businesses</strong> — Businesses with turnover above VAT threshold (£85,000), needing MTD VAT-compliant bookkeeping
          </li>
          <li>
            <strong>Businesses preparing for VAT registration</strong> — Businesses approaching VAT threshold, wanting VAT-ready bookkeeping setup before registration
          </li>
          <li>
            <strong>Businesses with VAT errors</strong> — Businesses with previous VAT errors, needing VAT reconciliation and correction
          </li>
          <li>
            <strong>Businesses switching VAT schemes</strong> — Businesses changing from one VAT scheme to another, needing bookkeeping adjustments
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent businesses are VAT-registered (or approaching VAT threshold)</li>
          <li>VAT-ready bookkeeping helps Kent businesses comply with MTD VAT and submit accurate VAT returns</li>
          <li>Proper VAT reconciliation ensures Kent businesses avoid VAT errors and penalties</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses are dealing with. VAT-ready bookkeeping, MTD VAT compliance, VAT reconciliation—we&apos;ll set up bookkeeping that helps you stay VAT compliant and submit accurate VAT returns.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="VAT-Ready Bookkeeping & Reconciliation - Frequently Asked Questions"
          subtitle="Common questions about VAT-ready bookkeeping and reconciliation"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/">Monthly Bookkeeping with Bank Reconciliation</Link> — Keep bookkeeping current for accurate VAT tracking
            </li>
            <li>
              <Link href="/services/tax/vat-registration-advisory/">VAT Registration & MTD VAT Setup</Link> — VAT registration and MTD VAT setup support
            </li>
            <li>
              <Link href="/services/tax/quarterly-vat-returns/">VAT Returns & Reconciliation</Link> — VAT return preparation and reconciliation services
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with VAT-ready bookkeeping?" description="We'll set up VAT-ready bookkeeping, ensure MTD VAT compliance, and help you reconcile VAT records accurately. No VAT errors, no compliance issues—just accurate VAT tracking and reconciliation." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with VAT-ready bookkeeping?" />
    </>
  );
}

