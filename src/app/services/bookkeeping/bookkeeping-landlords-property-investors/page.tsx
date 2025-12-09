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
  title: 'Bookkeeping for Landlords & Property Investors in Kent | File Easy Accountancy',
  description: 'Bookkeeping services for landlords and property investors in Kent. Per-property tracking, allowable expenses, tax compliance. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/bookkeeping-landlords-property-investors/',
  },
  openGraph: {
    title: 'Bookkeeping for Landlords & Property Investors in Kent | File Easy Accountancy',
    description: 'Bookkeeping services for landlords and property investors in Kent. Per-property tracking, allowable expenses, tax compliance.',
    url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping-landlords-property-investors/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Do landlords need bookkeeping?',
    answer: 'Yes, definitely. Landlords are running a property rental business (even if it\'s just one property), which means HMRC expects you to keep records of all rental income and expenses. You need proper bookkeeping to file accurate Self Assessment tax returns, claim all allowable expenses (which reduces your tax bill), and prove everything if HMRC investigates. Without proper records, you can\'t maximize your deductions and you risk penalties if HMRC finds errors.',
  },
  {
    question: 'What records do landlords need to keep?',
    answer: 'You need to keep records of: all rental income (rent received, deposit deductions, fees), all property expenses (repairs, maintenance, letting agent fees, insurance, mortgage interest, etc.), receipts and invoices for expenses, bank statements, mortgage statements, tenancy agreements, and any capital expenditure (improvements). Records must be kept for at least 6 years. HMRC can ask to see them at any time, so it\'s worth keeping everything organized.',
  },
  {
    question: 'How much does landlord bookkeeping cost?',
    answer: 'Commonly reported ranges from local providers are £120–£350/month depending on how many properties you have and how complex your expenses are. A landlord with one property and simple expenses might pay around £120–£180/month. A landlord with multiple properties and complex expenses might pay £250–£350/month. Per-property setup (one-off) typically costs £100–£200 per property. Landlord bookkeeping costs more than standard bookkeeping because per-property tracking, expense classification, and mortgage interest calculations add complexity.',
  },
  {
    question: 'What expenses can landlords claim?',
    answer: 'Landlords can claim allowable expenses including: repairs and maintenance (fixing broken things), letting agent fees, property management fees, insurance (buildings and contents), ground rent and service charges (for flats), mortgage interest (restricted—basic rate tax credit instead of full deduction), accountancy and legal fees, advertising costs, and utility bills (if you pay them). You can\'t claim capital expenses (improvements like new kitchens) as revenue expenses—they\'re treated differently. We\'ll help you distinguish between repairs (revenue) and improvements (capital) so you claim everything correctly.',
  },
  {
    question: 'Do property investors need an accountant?',
    answer: 'You don\'t legally need an accountant, but most landlords find it worth it. Landlord bookkeeping is complex—per-property tracking, expense classification, mortgage interest restrictions, capital vs revenue expenses—and mistakes can be expensive. An accountant (or bookkeeper) helps you maximize allowable expenses (reducing your tax bill), stay compliant with HMRC requirements, and avoid penalties. If you\'re comfortable with accounting and tax rules, you can do it yourself, but most landlords find the cost of professional help is worth the tax savings and peace of mind.',
  },
  {
    question: 'How is mortgage interest treated for landlords?',
    answer: 'Since 2020, landlords can\'t deduct mortgage interest in full like they used to. Instead, you get a basic rate tax credit (20%) on your mortgage interest. So if you pay £10,000 in mortgage interest, you get a £2,000 tax credit (20% of £10,000) instead of deducting the full £10,000 from your rental income. This means higher-rate taxpayers pay more tax than they used to. We\'ll calculate this correctly so you\'re not overpaying or underpaying tax.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'Bookkeeping for Landlords and Property Investors', href: '/services/bookkeeping/bookkeeping-landlords-property-investors' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function BookkeepingLandlordsPropertyInvestorsPage() {
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
            serviceType: 'Bookkeeping for Landlords and Property Investors',
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
            description: 'Bookkeeping services for landlords and property investors in Kent. Per-property tracking, allowable expenses, tax compliance.',
            name: 'Bookkeeping for Landlords and Property Investors',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/bookkeeping-landlords-property-investors/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Per-Property Tracking' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Allowable Expense Maximization' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mortgage Interest Calculation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Self Assessment Preparation' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Bookkeeping for Landlords and Property Investors"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Landlords must keep records of all rental income and expenses for at least 6 years</strong> for HMRC tax purposes (
              <a href="https://www.gov.uk/renting-out-a-property/paying-tax" target="_blank" rel="noopener noreferrer">
                gov.uk landlord tax guidance
              </a>
              )—that means tracking income and expenses per property, keeping receipts, and being able to prove everything if HMRC asks
            </li>
            <li>
              <strong>Landlords can claim allowable expenses</strong> including mortgage interest (though it&apos;s restricted now), repairs and maintenance, letting agent fees, insurance, property management costs, and more (
              <a href="https://www.gov.uk/expenses-if-youre-self-employed" target="_blank" rel="noopener noreferrer">
                gov.uk expenses
              </a>
              )—but you need to know what counts and what doesn&apos;t
            </li>
            <li>
              <strong>Rental income from property is taxable</strong> and must be declared on Self Assessment tax returns by 31 January each year (
              <a href="https://www.gov.uk/income-tax/rental-income" target="_blank" rel="noopener noreferrer">
                gov.uk rental income tax
              </a>
              )—clean bookkeeping makes filing straightforward instead of a nightmare
            </li>
          </ul>
        </div>

        <p>
          The problem is most landlords try to handle bookkeeping themselves, especially if they only have one or two properties. That&apos;s fine when it&apos;s simple, but as soon as you&apos;ve got multiple properties, or you&apos;re dealing with repairs vs improvements, or you&apos;re trying to maximize your allowable expenses, it gets complicated fast. You end up spending hours trying to figure out what goes where, and you&apos;re never sure if you&apos;re doing it right.
        </p>

        <p>
          We handle bookkeeping specifically for landlords and property investors: per-property income and expense tracking, allowable expense categorization, mortgage interest calculations (with the current restrictions), capital vs revenue expense classification, and Self Assessment prep. Whether you&apos;re a landlord in Medway with one rental property, a buy-to-let investor in Maidstone with a small portfolio, or a property investor in Canterbury juggling multiple properties, we&apos;ll keep your books organized, compliant, and tax-optimized. No guessing, no stress—just proper bookkeeping that saves you time and tax.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Track income and expenses per property</strong> — See exactly what each property is earning and costing you. Know which properties are profitable and which ones need attention.
          </li>
          <li>
            <strong>Maximize allowable expenses</strong> — We know what landlords can claim (repairs, maintenance, letting agent fees, insurance, mortgage interest restrictions, etc.) and help you claim everything you&apos;re entitled to.
          </li>
          <li>
            <strong>Handle mortgage interest correctly</strong> — Mortgage interest is restricted for landlords now (basic rate tax credit instead of full deduction), and we&apos;ll make sure you&apos;re calculating it right so you don&apos;t overpay tax.
          </li>
          <li>
            <strong>Distinguish repairs from improvements</strong> — Repairs (revenue expenses) are deductible in full. Improvements (capital expenses) are treated differently. We&apos;ll help you classify expenses correctly.
          </li>
          <li>
            <strong>Stay compliant with HMRC deadlines</strong> — Your records are always current, so filing Self Assessment by 31 January is straightforward. No last-minute panic.
          </li>
          <li>
            <strong>Get property portfolio reports</strong> — If you&apos;ve got multiple properties, see portfolio-wide profit and loss, cash flow, and performance per property. Make better decisions about your investments.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for landlords:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your property portfolio: how many properties you own, whether they&apos;re residential or commercial, how they&apos;re structured (personal ownership, limited company, partnership), whether you use letting agents, what your main expenses are (mortgages, repairs, management fees, insurance), and what your current bookkeeping setup looks like.
          </li>
          <li>
            <strong>Per-property setup</strong> — We set up a bookkeeping system that tracks income and expenses per property. This could be cloud accounting (Xero, QuickBooks) if you want automation, or a simple spreadsheet system if you prefer something basic. Each property gets its own income and expense categories so you can see performance individually.
          </li>
          <li>
            <strong>Monthly bookkeeping</strong> — We track:
            <ul>
              <li>
                <strong>Rental income</strong> — Monthly rent received per property, any additional income (deposit deductions, fees, etc.)
              </li>
              <li>
                <strong>Property expenses</strong> — Repairs and maintenance, letting agent fees, property management costs, insurance, ground rent, service charges (for flats), utility bills (if you pay them)
              </li>
              <li>
                <strong>Finance costs</strong> — Mortgage interest (with current restrictions), mortgage arrangement fees, broker fees
              </li>
              <li>
                <strong>Administrative expenses</strong> — Accountancy fees, legal fees (for tenancy agreements), advertising costs
              </li>
              <li>
                <strong>Capital expenses</strong> — Improvements (new kitchen, extension, etc.) which are treated differently from repairs
              </li>
            </ul>
          </li>
          <li>
            <strong>Expense classification</strong> — We help you distinguish between:
            <ul>
              <li>
                <strong>Revenue expenses (repairs)</strong> — Fixing broken things (boiler repairs, roof repairs, plumbing) which are fully deductible
              </li>
              <li>
                <strong>Capital expenses (improvements)</strong> — Making things better (new kitchen, extension, major renovations) which are treated as capital allowances or added to property cost base
              </li>
            </ul>
            This matters because repairs reduce your taxable income immediately, but improvements don&apos;t.
          </li>
          <li>
            <strong>Mortgage interest calculations</strong> — Since 2020, landlords can&apos;t deduct mortgage interest in full. Instead, you get a basic rate tax credit (20%). We&apos;ll calculate this correctly so you&apos;re not overpaying tax or underpaying.
          </li>
          <li>
            <strong>Self Assessment prep</strong> — Throughout the year, we keep your records current per property. When it&apos;s time to file Self Assessment (by 31 January), we provide you with a summary showing total rental income, total allowable expenses, net profit per property, and the tax calculation. We can also handle the filing for you if you prefer.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What we track for landlords:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Rental income per property (monthly rent, additional income)</li>
            <li>Property expenses per property (repairs, maintenance, letting agent fees, insurance, etc.)</li>
            <li>Finance costs (mortgage interest with restrictions, arrangement fees)</li>
            <li>Administrative expenses (accountancy, legal, advertising)</li>
            <li>Capital vs revenue expense classification</li>
            <li>Property portfolio performance (if multiple properties)</li>
          </ul>
        </div>

        <p>
          We work with whatever system suits you: cloud accounting (Xero, QuickBooks) for automation and real-time reports, simple spreadsheets if you prefer, or even starting from scratch if you&apos;ve been winging it. The key is keeping it organized per property—that&apos;s what makes landlord bookkeeping different from regular business bookkeeping.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of properties</strong> — One property costs less than multiple properties because there&apos;s more tracking and reconciliation work with portfolios
          </li>
          <li>
            <strong>Property type</strong> — Residential properties are usually simpler than commercial properties (which might have different expense structures, lease variations, etc.)
          </li>
          <li>
            <strong>Expense complexity</strong> — Simple expenses (repairs, letting agent fees, insurance) cost less than complex cases (extensive renovations, multiple mortgages, complex ownership structures)
          </li>
          <li>
            <strong>Bookkeeping frequency</strong> — Monthly bookkeeping costs more than quarterly, but gives you better financial visibility
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Monthly bookkeeping for landlords:</strong> £120–£350/month depending on number of properties and expense complexity
          </li>
          <li>
            <strong>Per-property setup (one-off):</strong> £100–£200 per property (includes Chart of Accounts setup, initial categorization, historical data import if needed)
          </li>
          <li>
            <strong>Self Assessment preparation:</strong> £150–£400 (separate service, or included if you&apos;re on monthly bookkeeping)
          </li>
        </ul>

        <p>
          <strong>Why landlord bookkeeping costs more than standard bookkeeping:</strong>
        </p>
        <ul>
          <li>Per-property tracking adds complexity (each property needs its own income/expense categories)</li>
          <li>Expense classification matters (repairs vs improvements, capital vs revenue)</li>
          <li>Mortgage interest restrictions need careful calculation</li>
          <li>Multiple properties mean more reconciliation work</li>
        </ul>

        <p>
          <strong>Timeline:</strong> Setup usually takes about 1–2 weeks depending on how many properties you have and whether we&apos;re migrating historical data. Once we&apos;re set up, monthly bookkeeping typically takes 2–3 days from when we receive your records. If you&apos;re behind on bookkeeping, catch-up typically takes 2–4 weeks for a tax year&apos;s worth of records.
        </p>

        <p>
          <strong>No hidden fees.</strong> All prices exclude VAT. We offer monthly payment plans and can adjust if your property portfolio changes significantly.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with landlords and property investors across Kent: buy-to-let investors in Medway, landlords in Maidstone managing multiple properties, property portfolio owners in Canterbury, and small-scale landlords throughout the region.
        </p>

        <p>
          Kent landlords face the same HMRC deadlines as everyone else—31 January for Self Assessment, quarterly VAT returns if you&apos;re VAT registered (uncommon for residential landlords, more common for commercial property). The difference is when your bookkeeping is organized per property and current, these deadlines aren&apos;t stressful. You know exactly what each property is earning, what expenses you can claim, and what your tax liability is going to be.
        </p>

        <p>
          <strong>Common Kent landlord scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Single property landlords</strong> — One buy-to-let property, tracking income and expenses, maximizing allowable deductions
          </li>
          <li>
            <strong>Portfolio landlords</strong> — Multiple properties across Kent (Medway, Maidstone, Canterbury, etc.), needing per-property tracking and portfolio-wide reporting
          </li>
          <li>
            <strong>Residential landlords</strong> — Renting out houses and flats, dealing with repairs, maintenance, letting agent fees
          </li>
          <li>
            <strong>Commercial landlords</strong> — Renting out commercial property, dealing with different lease structures, service charge variations
          </li>
          <li>
            <strong>Accidental landlords</strong> — Inherited property or moved house but kept the old one, now renting it out and trying to figure out the tax implications
          </li>
        </ul>

        <p>
          <strong>Kent property market context:</strong>
        </p>
        <ul>
          <li>Kent has a strong rental market (Medway, Maidstone, Canterbury all have good rental demand)</li>
          <li>Buy-to-let investors are common (both local investors and London investors buying in Kent)</li>
          <li>Property management is often outsourced (letting agents handle day-to-day management, but landlords still need bookkeeping for tax)</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent landlords are dealing with. Per-property tracking, allowable expense maximization, mortgage interest restrictions, Self Assessment deadlines—we&apos;ve helped loads of Kent landlords get sorted, and we know how to make it simple.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Bookkeeping for Landlords and Property Investors - Frequently Asked Questions"
          subtitle="Common questions about landlord bookkeeping and property investment accounting"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/landlord-tax-returns/">Landlord Tax Returns</Link> — Once your books are current, we can handle your Self Assessment filing
            </li>
            <li>
              <Link href="/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/">Monthly Bookkeeping with Bank Reconciliation</Link> — Ongoing monthly bookkeeping to keep you current
            </li>
            <li>
              <Link href="/services/bookkeeping/bookkeeping-sole-traders-freelancers/">Bookkeeping for Sole Traders</Link> — If you&apos;re a landlord operating as a sole trader
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with landlord bookkeeping?" description="Don't miss out on allowable expenses. We'll track income and expenses per property, maximize your deductions, and keep you HMRC compliant." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with landlord bookkeeping?" />
    </>
  );
}

