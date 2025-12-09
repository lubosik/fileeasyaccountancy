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
  title: 'Year-End Reconciliation & Account Preparation in Kent | File Easy Accountancy',
  description: 'Year-end reconciliation and account preparation services for limited companies in Kent. Companies House filing ready, Corporation Tax ready. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/year-end-reconciliation-account-prep/',
  },
  openGraph: {
    title: 'Year-End Reconciliation & Account Preparation in Kent | File Easy Accountancy',
    description: 'Year-end reconciliation and account preparation services for limited companies in Kent. Companies House filing ready, Corporation Tax ready.',
    url: 'https://fileeasyaccountancy.co.uk/services/year-end-reconciliation-account-prep/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is year-end reconciliation?',
    answer: 'Year-end reconciliation is a thorough review and reconciliation of all accounts at the end of your financial year. It involves reconciling bank accounts, verifying account balances, reviewing transactions, identifying errors, and ensuring all accounts are accurate before preparing accounts for Companies House filing and Corporation Tax returns. It\'s like a health check for your books at year-end.',
  },
  {
    question: 'What is account preparation?',
    answer: 'Account preparation means preparing statutory accounts (balance sheet, profit and loss account, notes to accounts) required for Companies House filing and Corporation Tax returns. It involves taking reconciled year-end data and preparing accounts in the correct format for filing. Account preparation ensures accounts meet Companies House requirements and are ready for filing.',
  },
  {
    question: 'Do I need year-end reconciliation?',
    answer: 'Yes, definitely if you\'re a limited company. Year-end reconciliation ensures your accounts are accurate before preparing statutory accounts for Companies House filing and Corporation Tax returns. Without proper reconciliation, you risk errors in accounts filing, missing transactions, or discrepancies that cause problems with Companies House or HMRC. It\'s worth getting it done properly.',
  },
  {
    question: 'How long does account preparation take?',
    answer: 'Usually 5-10 working days for account preparation depending on company size and account complexity. Simple accounts (basic balance sheet, profit and loss) might take 5-7 days. Complex accounts (consolidated accounts, multiple entities) might take 1-2 weeks. Combined with year-end reconciliation, the whole process might take 1-2 weeks depending on company size and complexity.',
  },
  {
    question: 'What is included in year-end reconciliation?',
    answer: 'Year-end reconciliation includes: bank account reconciliation to year-end, account balance verification (debtors, creditors, assets, liabilities, equity), transaction review for accuracy and completeness, missing transaction identification, balance sheet reconciliation (assets = liabilities + equity), and profit and loss verification. It\'s a complete check of all accounts to ensure accuracy before account preparation.',
  },
  {
    question: 'When do I need to file accounts with Companies House?',
    answer: 'Limited companies must file annual accounts with Companies House within 9 months of year-end. For example, if your year-end is 31 March, accounts must be filed by 31 December. Late filing can result in penalties. Year-end reconciliation and account preparation should be done well before the filing deadline to ensure accounts are ready in time.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'Year-End Reconciliation & Account Preparation', href: '/services/bookkeeping/year-end-reconciliation-account-prep' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function YearEndReconciliationAccountPrepPage() {
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
            serviceType: 'Year-End Reconciliation & Account Preparation',
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
            description: 'Year-end reconciliation and account preparation services for limited companies in Kent. Companies House filing ready, Corporation Tax ready.',
            name: 'Year-End Reconciliation & Account Preparation',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/year-end-reconciliation-account-prep/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Year-End Reconciliation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Account Preparation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Companies House Filing Preparation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporation Tax Filing Preparation' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Year-End Reconciliation & Account Preparation"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          Year-end is stressful enough without worrying about whether your accounts are accurate. Limited companies must prepare and file annual accounts with Companies House within 9 months of year-end, and those accounts need to be spot-on. Year-end reconciliation reconciles all accounts, verifies balances, and ensures financial records are accurate before preparing accounts for Companies House and Corporation Tax filing.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Limited companies must prepare and file annual accounts with Companies House within 9 months of year-end</strong> — Year-end reconciliation ensures accounts are accurate before filing (
              <a href="https://www.gov.uk/prepare-file-for-companies-house" target="_blank" rel="noopener noreferrer">
                gov.uk Companies House filing
              </a>
              )
            </li>
            <li>
              <strong>Year-end reconciliation reconciles all accounts, verifies balances, and ensures financial records are accurate</strong> before preparing accounts for Companies House and Corporation Tax filing
            </li>
            <li>
              <strong>Account preparation involves preparing statutory accounts</strong> (balance sheet, profit and loss, notes) required for Companies House filing and Corporation Tax returns (
              <a href="https://www.gov.uk/corporation-tax" target="_blank" rel="noopener noreferrer">
                gov.uk Corporation Tax
              </a>
              )
            </li>
            <li>
              <strong>Year-end reconciliation identifies errors, missing transactions, and discrepancies</strong> before they cause problems in accounts filing or tax returns
            </li>
          </ul>
        </div>

        <p>
          The problem is most businesses try to do year-end reconciliation themselves, but it&apos;s time-consuming, complex, and easy to miss things. Missing transactions, unreconciled accounts, incorrect balances—these problems cause delays in account preparation, errors in Companies House filing, or issues with Corporation Tax returns. That&apos;s stressful, expensive to fix, and can lead to penalties.
        </p>

        <p>
          We handle year-end reconciliation and account preparation for limited companies: year-end reconciliation, balance verification, account preparation, Companies House filing preparation, and Corporation Tax filing preparation. Whether you&apos;re a limited company in Medway needing year-end reconciliation, a company in Maidstone preparing accounts for Companies House, or a business in Canterbury needing Corporation Tax filing prep, we&apos;ll reconcile your accounts properly and prepare them for filing. No delays, no errors, no stress—just accurate accounts ready for Companies House and HMRC.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Get accurate accounts</strong> — Year-end reconciliation ensures all accounts are reconciled, balances are verified, and financial records are accurate. No errors, no missing transactions, no discrepancies.
          </li>
          <li>
            <strong>Meet Companies House deadlines</strong> — Accounts are prepared and ready for Companies House filing within the 9-month deadline. No last-minute panic, no rushed preparation, no filing delays.
          </li>
          <li>
            <strong>Prepare for Corporation Tax filing</strong> — Year-end reconciliation ensures accounts are accurate for Corporation Tax return preparation. Proper accounts make CT600 filing straightforward.
          </li>
          <li>
            <strong>Identify errors early</strong> — Year-end reconciliation catches errors, missing transactions, and discrepancies before they cause problems. Fix issues before filing accounts or tax returns.
          </li>
          <li>
            <strong>Reduce stress</strong> — Know your accounts are accurate and ready for filing. No worrying about errors, missing transactions, or filing delays. Peace of mind that everything is correct.
          </li>
          <li>
            <strong>Avoid penalties</strong> — Accurate accounts reduce risk of Companies House penalties or HMRC enquiries. Proper reconciliation and preparation keep you compliant.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for year-end reconciliation and account preparation:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your year-end: what your year-end date is, what your current bookkeeping looks like, whether accounts are up to date, what accounts need preparing (balance sheet, profit and loss, notes), and whether you need Companies House filing or Corporation Tax filing preparation.
          </li>
          <li>
            <strong>Year-end reconciliation</strong> — We reconcile all accounts:
            <ul>
              <li>
                <strong>Bank reconciliation</strong> — Reconcile all bank accounts to year-end, verify all transactions are recorded, resolve unreconciled items
              </li>
              <li>
                <strong>Account balance verification</strong> — Verify all account balances are correct (debtors, creditors, assets, liabilities, equity)
              </li>
              <li>
                <strong>Transaction review</strong> — Review all transactions for accuracy, completeness, and proper categorization
              </li>
              <li>
                <strong>Missing transaction identification</strong> — Identify any missing transactions that need recording
              </li>
              <li>
                <strong>Balance sheet reconciliation</strong> — Ensure balance sheet balances (assets = liabilities + equity)
              </li>
              <li>
                <strong>Profit and loss verification</strong> — Verify profit and loss accounts are accurate
              </li>
            </ul>
            This ensures all accounts are reconciled and accurate before account preparation.
          </li>
          <li>
            <strong>Error correction</strong> — We correct any errors found:
            <ul>
              <li>
                <strong>Missing transaction entry</strong> — Record any missing transactions
              </li>
              <li>
                <strong>Categorization corrections</strong> — Fix incorrect categorizations
              </li>
              <li>
                <strong>Balance corrections</strong> — Correct any incorrect account balances
              </li>
              <li>
                <strong>Reconciliation fixes</strong> — Fix any unreconciled items
              </li>
            </ul>
            We&apos;ll fix everything before preparing accounts.
          </li>
          <li>
            <strong>Account preparation</strong> — We prepare statutory accounts:
            <ul>
              <li>
                <strong>Balance sheet preparation</strong> — Prepare balance sheet showing assets, liabilities, and equity at year-end
              </li>
              <li>
                <strong>Profit and loss preparation</strong> — Prepare profit and loss account showing income, expenses, and profit/loss for the year
              </li>
              <li>
                <strong>Notes to accounts</strong> — Prepare notes explaining accounting policies, significant transactions, and other required disclosures
              </li>
              <li>
                <strong>Directors&apos; report</strong> — Prepare directors&apos; report (if required) summarizing company performance and compliance
              </li>
            </ul>
            Accounts will be prepared in the correct format for Companies House filing.
          </li>
          <li>
            <strong>Companies House filing preparation</strong> — We prepare accounts for Companies House filing:
            <ul>
              <li>
                <strong>Format verification</strong> — Ensure accounts are in correct format for Companies House filing
              </li>
              <li>
                <strong>Filing deadline check</strong> — Verify filing deadline (9 months from year-end) and ensure accounts are ready in time
              </li>
              <li>
                <strong>Filing readiness</strong> — Ensure all required documents are prepared and ready for filing
              </li>
            </ul>
            Accounts will be ready for Companies House filing.
          </li>
          <li>
            <strong>Corporation Tax filing preparation</strong> — We prepare accounts for Corporation Tax return:
            <ul>
              <li>
                <strong>CT600 preparation support</strong> — Ensure accounts provide information needed for CT600 Corporation Tax return
              </li>
              <li>
                <strong>Tax adjustments</strong> — Identify any tax adjustments needed (capital allowances, disallowable expenses, etc.)
              </li>
              <li>
                <strong>Filing readiness</strong> — Ensure accounts are accurate for Corporation Tax return preparation
              </li>
            </ul>
            Accounts will be ready for Corporation Tax filing.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What year-end reconciliation and account preparation includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Complete year-end reconciliation (bank reconciliation, account balance verification, transaction review)</li>
            <li>Error correction (missing transactions, categorizations, balances)</li>
            <li>Statutory account preparation (balance sheet, profit and loss, notes)</li>
            <li>Companies House filing preparation</li>
            <li>Corporation Tax filing preparation support</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Common year-end reconciliation tasks:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Bank account reconciliation to year-end</li>
            <li>Debtors and creditors reconciliation</li>
            <li>Fixed asset reconciliation (depreciation, additions, disposals)</li>
            <li>Stock/inventory reconciliation (if applicable)</li>
            <li>Accruals and prepayments reconciliation</li>
            <li>Balance sheet balancing (assets = liabilities + equity)</li>
            <li>Profit and loss verification</li>
          </ul>
        </div>

        <p>
          We work with whatever bookkeeping system you&apos;re using—Xero, QuickBooks, Sage, spreadsheets, or other systems. The key is thorough reconciliation and proper account preparation for Companies House compliance.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Company size</strong> — Larger companies with more transactions and complex structures cost more than smaller companies
          </li>
          <li>
            <strong>Data quality</strong> — Clean, well-organized bookkeeping costs less than messy data with errors or missing transactions
          </li>
          <li>
            <strong>Account complexity</strong> — Simple accounts (basic balance sheet, profit and loss) cost less than complex accounts (consolidated accounts, multiple entities, etc.)
          </li>
          <li>
            <strong>Reconciliation complexity</strong> — Simple reconciliation (basic accounts) costs less than complex reconciliation (multiple bank accounts, complex transactions, etc.)
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Year-end reconciliation (no account preparation):</strong> £300–£600 depending on company size and complexity
          </li>
          <li>
            <strong>Account preparation (after reconciliation):</strong> £400–£1,000 depending on company size and account complexity
          </li>
          <li>
            <strong>Combined reconciliation and account preparation:</strong> £600–£1,500 depending on company size, data quality, and account complexity
          </li>
        </ul>

        <p>
          <strong>Why year-end reconciliation and account preparation costs what it does:</strong>
        </p>
        <ul>
          <li>Thorough reconciliation requires careful review of all accounts and transactions</li>
          <li>Account preparation requires expertise in Companies House requirements and accounting standards</li>
          <li>Error correction takes time to identify and fix issues</li>
          <li>Companies House filing preparation ensures compliance with filing requirements</li>
        </ul>

        <p>
          <strong>Timeline:</strong> Year-end reconciliation usually takes 3-5 working days depending on company size and complexity. Account preparation usually takes 5-10 working days depending on account complexity. Combined reconciliation and account preparation might take 1-2 weeks depending on company size and complexity.
        </p>

        <p>
          <strong>Deadlines:</strong> Companies House filing deadline is 9 months from year-end. We&apos;ll work to your deadline and ensure accounts are ready in time for filing.
        </p>

        <p>
          <strong>No hidden fees.</strong> Reconciliation and account preparation prices include complete year-end reconciliation, error correction, account preparation, and Companies House/Corporation Tax filing preparation. Companies House filing fees are separate (paid directly to Companies House).
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with limited companies across Kent: companies in Medway needing year-end reconciliation, businesses in Maidstone preparing accounts for Companies House, and companies in Canterbury needing Corporation Tax filing prep.
        </p>

        <p>
          Kent limited companies face the same Companies House deadlines as everyone else—annual accounts must be filed within 9 months of year-end. The difference is when your accounts are properly reconciled and prepared, meeting these deadlines is straightforward. Your accounts are accurate, ready for filing, and compliant with Companies House requirements.
        </p>

        <p>
          <strong>Common Kent company scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Limited companies</strong> — Companies needing year-end reconciliation and account preparation for Companies House filing
          </li>
          <li>
            <strong>Growing companies</strong> — Companies that have grown and need professional year-end reconciliation and account preparation
          </li>
          <li>
            <strong>Companies switching accountants</strong> — Companies switching accountants and needing year-end reconciliation before account preparation
          </li>
          <li>
            <strong>Companies preparing for filing</strong> — Companies preparing accounts for Companies House filing and Corporation Tax returns
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Kent has many limited companies needing year-end reconciliation and account preparation</li>
          <li>Professional year-end reconciliation helps Kent companies meet Companies House deadlines and stay compliant</li>
          <li>Accurate account preparation reduces risk of Companies House penalties or HMRC enquiries</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent limited companies are dealing with. Year-end reconciliation, account preparation, Companies House filing—we&apos;ll reconcile your accounts properly and prepare them for filing so you can meet deadlines without stress.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Year-End Reconciliation & Account Preparation - Frequently Asked Questions"
          subtitle="Common questions about year-end reconciliation and account preparation for limited companies"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/">Monthly Bookkeeping with Bank Reconciliation</Link> — Keep bookkeeping current to make year-end easier
            </li>
            <li>
              <Link href="/services/bookkeeping/bookkeeping-audits-data-cleanup/">Bookkeeping Audits & Data Cleanup</Link> — Fix errors before year-end reconciliation
            </li>
            <li>
              <Link href="/services/core/companies-house-filing/">Companies House Filing</Link> — File accounts after preparation
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with year-end reconciliation?" description="We'll reconcile all your accounts, prepare statutory accounts, and get everything ready for Companies House filing and Corporation Tax returns. No delays, no errors—just accurate accounts ready for filing." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with year-end reconciliation?" />
    </>
  );
}

