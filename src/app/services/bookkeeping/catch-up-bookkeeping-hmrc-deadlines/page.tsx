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
  title: 'Catch-Up Bookkeeping for HMRC Deadlines in Kent | File Easy Accountancy',
  description: 'Catch-up bookkeeping for Kent businesses facing HMRC deadlines. Avoid penalties, get compliant fast, peace of mind. Clear pricing, urgent turnaround available.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/catch-up-bookkeeping-hmrc-deadlines/',
  },
  openGraph: {
    title: 'Catch-Up Bookkeeping for HMRC Deadlines in Kent | File Easy Accountancy',
    description: 'Catch-up bookkeeping for Kent businesses facing HMRC deadlines. Avoid penalties, get compliant fast, peace of mind.',
    url: 'https://fileeasyaccountancy.co.uk/services/catch-up-bookkeeping-hmrc-deadlines/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How much does catch-up bookkeeping cost?',
    answer: 'Commonly reported ranges from local providers are £50–£100/hour, with total cost depending on your backlog size. A business 3–6 months behind with simple transactions might pay £500–£1,500 total. A business 1–2 years behind with high transaction volume might pay £3,500–£6,000. We\'ll give you a fixed quote after reviewing your backlog—no hourly billing surprises. The cost is often less than the penalties you\'d face for late filing, and it gets you compliant going forward.',
  },
  {
    question: 'How long does catch-up bookkeeping take?',
    answer: 'Timeline depends on backlog size: 3–6 months behind typically takes 1–2 weeks, 6–12 months takes 2–4 weeks, 1–2 years takes 4–8 weeks, and 2+ years can take 8–12 weeks or longer. We\'ll give you an honest estimate after reviewing your records. If you\'re facing an imminent deadline (within 2–4 weeks), we can prioritise your work, though very tight deadlines may require premium pricing for evening/weekend work.',
  },
  {
    question: 'What if I\'m missing receipts or records?',
    answer: 'We can work with whatever you\'ve got—bank statements, invoices, expense notes, or even just your memory of what transactions were for. If records are incomplete, we\'ll reconstruct missing transactions from bank statements and ask you to clarify anything unclear. While complete records are ideal, we\'ve caught up businesses with minimal documentation—we\'ll be honest about what we can and can\'t do with incomplete records.',
  },
  {
    question: 'Can you help me avoid HMRC penalties?',
    answer: 'Yes—if we catch you up before your filing deadline, you can avoid late filing penalties (typically £100 minimum for self-assessment, £150 for Companies House accounts). However, if you\'re already past the deadline, we can still help you get compliant and may be able to help you appeal penalties in certain circumstances (e.g., reasonable excuse). The sooner you start catch-up work, the better your chances of avoiding penalties.',
  },
  {
    question: 'What software do you use?',
    answer: 'We work with Xero, QuickBooks, Sage, Excel, or even starting from scratch if you\'re not on any system yet. If you\'re not on cloud software, we\'ll recommend the best option for your business and handle the setup as part of the catch-up. Cloud software (Xero, QuickBooks) makes ongoing bookkeeping much easier and prevents future backlogs.',
  },
  {
    question: 'Will you set up ongoing bookkeeping after catching me up?',
    answer: 'Yes—once you\'re caught up, we\'ll offer ongoing monthly or weekly bookkeeping to keep you current and prevent future backlogs. Many catch-up clients transition to ongoing bookkeeping because they don\'t want to fall behind again. We\'ll quote ongoing bookkeeping separately, and you can decide whether to continue with us or handle it yourself going forward.',
  },
  {
    question: 'What if my deadline is in 2 weeks?',
    answer: 'We can prioritise urgent cases, though very tight deadlines (within 2 weeks) may require premium pricing for evening/weekend work. We\'ll assess your backlog honestly and tell you if we can meet the deadline—we won\'t promise the impossible, but we\'ll do everything we can to help you avoid penalties. If your deadline is extremely tight, we may focus on getting the most critical records current (e.g., the tax year in question) and finish the rest afterwards.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'Catch-Up Bookkeeping for HMRC Deadlines', href: '/services/bookkeeping/catch-up-bookkeeping-hmrc-deadlines' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function CatchUpBookkeepingHMRCDeadlinesPage() {
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
            serviceType: 'Catch-Up Bookkeeping for HMRC Deadlines',
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
            description: 'Catch-up bookkeeping for Kent businesses facing HMRC deadlines. Avoid penalties, get compliant fast, peace of mind.',
            name: 'Catch-Up Bookkeeping for HMRC Deadlines',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/catch-up-bookkeeping-hmrc-deadlines/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Catch-Up Bookkeeping' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Backlog Reconciliation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deadline Support' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penalty Avoidance' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Catch-Up Bookkeeping for HMRC Deadlines"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <div className="article-callout article-callout--warning">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what&apos;s at stake:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>HMRC charges £100 minimum penalty for late Self Assessment filing</strong>, plus additional daily penalties after 3 months (
              <a href="https://www.gov.uk/self-assessment-tax-returns/penalties" target="_blank" rel="noopener noreferrer">
                HMRC penalty guidance
              </a>
              )—catching up before filing can reduce or eliminate these penalties
            </li>
            <li>
              <strong>Limited companies face automatic penalties of £150</strong> for late filing of accounts with Companies House, increasing after 3 and 6 months (
              <a
                href="https://www.gov.uk/running-a-limited-company/company-and-accounting-records"
                target="_blank"
                rel="noopener noreferrer"
              >
                Companies House requirements
              </a>
              )
            </li>
            <li>
              <strong>Late payment penalties apply on top of late filing penalties</strong>—HMRC charges 5% of tax owed if payment is more than 30 days late (
              <a href="https://www.gov.uk/penalties-late-filing-payments" target="_blank" rel="noopener noreferrer">
                gov.uk penalty guidance
              </a>
              )
            </li>
          </ul>
        </div>

        <p>
          You&apos;re behind on your bookkeeping. Maybe it&apos;s been a few months, maybe it&apos;s been a year or two. The pile of receipts is growing, your bank statements are stacking up, and HMRC deadlines are getting closer. The good news? You&apos;re not alone—and it&apos;s fixable.
        </p>

        <p>
          We specialise in catch-up bookkeeping: taking your backlog (whether it&apos;s 3 months or 3 years), organising it, reconciling it, and getting you current before deadlines. Whether you&apos;re a sole trader in Medway who&apos;s fallen behind on self-assessment records, a limited company in Maidstone facing Companies House penalties, or a contractor in Canterbury struggling with IR35 compliance, we&apos;ll bring your books up to date. No judgment, no lectures—just practical help to get you compliant and penalty-free.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Avoid costly HMRC and Companies House penalties</strong> — Get your records current before filing deadlines to reduce or eliminate automatic penalties
          </li>
          <li>
            <strong>Get compliant with minimal stress</strong> — We handle the backlog while you focus on your business; no need to take time off to sort through years of paperwork
          </li>
          <li>
            <strong>Peace of mind before filing</strong> — When HMRC deadlines approach, you&apos;ll have clean, reconciled books ready—not a panic-inducing pile of receipts
          </li>
          <li>
            <strong>Clean records for future</strong> — Once you&apos;re caught up, we can set up monthly or weekly bookkeeping to keep you current going forward
          </li>
          <li>
            <strong>Reduced risk of HMRC enquiries</strong> — Clean, organised records reduce the likelihood of HMRC opening an investigation into your accounts
          </li>
          <li>
            <strong>Better business decisions</strong> — When your books are current, you can see your actual financial position and make informed decisions
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step catch-up process:</strong>
        </p>
        <ol>
          <li>
            <strong>Urgent assessment call</strong> — We review your backlog: how many months/years behind, what records you have (receipts, bank statements, invoices), what&apos;s missing, and your deadline date. This gives us a realistic timeline and cost estimate. If you&apos;re facing an imminent deadline (e.g., 31 January Self Assessment), we&apos;ll prioritise you.
          </li>
          <li>
            <strong>Record collection &amp; organisation</strong> — Send us everything you&apos;ve got: bank statements, receipts (digital photos are fine), invoices, expense notes, payroll records. We&apos;ll organise it chronologically and identify what&apos;s missing. If records are incomplete, we&apos;ll work with bank statements and help you reconstruct missing transactions.
          </li>
          <li>
            <strong>Catch-up bookkeeping</strong> — We process your backlog month by month (or year by year if it&apos;s been a while): categorise every transaction, reconcile bank statements, match invoices to payments, and build your P&L and balance sheet. We&apos;ll flag any anomalies (unmatched transactions, unusual expenses) for your review.
          </li>
          <li>
            <strong>Review &amp; corrections</strong> — You review the catch-up work, answer any questions about unclear transactions, and approve before we finalise. This is your chance to clarify anything we&apos;re uncertain about.
          </li>
          <li>
            <strong>Bring current &amp; handover</strong> — Once the backlog is done, we bring you current with one final month&apos;s work. Then we hand over clean, reconciled books ready for your tax return or accountant. If you want ongoing bookkeeping, we&apos;ll set that up too—monthly or weekly—to prevent future backlogs.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What we handle in catch-up:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Historical bank statement reconciliation (going back as far as needed)</li>
            <li>Transaction categorisation (sales, expenses, transfers)</li>
            <li>Invoice matching and debtors tracking</li>
            <li>Expense categorisation (with receipt matching where available)</li>
            <li>VAT reconciliation (if you&apos;re VAT-registered)</li>
            <li>Year-end adjustments (if catching up through year-ends)</li>
            <li>Missing transaction reconstruction (using bank statements and memory)</li>
          </ul>
        </div>

        <p>
          <strong>Timeline depends on backlog:</strong>
        </p>
        <ul>
          <li>
            <strong>3–6 months behind:</strong> Typically 1–2 weeks
          </li>
          <li>
            <strong>6–12 months behind:</strong> Typically 2–4 weeks
          </li>
          <li>
            <strong>1–2 years behind:</strong> Typically 4–8 weeks
          </li>
          <li>
            <strong>2+ years behind:</strong> Typically 8–12 weeks (or longer for very complex cases)
          </li>
        </ul>

        <p>
          We work with whatever system you&apos;re using: Xero, QuickBooks, Sage, Excel, or even starting from scratch. If you&apos;re not on cloud software yet, we&apos;ll recommend the best option and handle the setup as part of the catch-up.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines (no surprises)</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Backlog size</strong> — 3 months costs less than 3 years (obviously)
          </li>
          <li>
            <strong>Transaction volume</strong> — A business with 50 transactions/month costs less than one with 500+/month
          </li>
          <li>
            <strong>Record completeness</strong> — If you&apos;ve got receipts and invoices organised, it&apos;s faster. If we&apos;re working mostly from bank statements and reconstructing missing info, it takes longer.
          </li>
          <li>
            <strong>Complexity</strong> — Multi-currency, e-commerce platforms, CIS, crypto, or complex expense structures add time
          </li>
          <li>
            <strong>Urgency</strong> — If you&apos;re facing an imminent deadline (within 2 weeks), we may need to work evenings/weekends, which adds a premium
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Catch-up bookkeeping:</strong> £50–£100/hour, total cost depends on backlog size
          </li>
          <li>
            <strong>3–6 months behind (simple business):</strong> £500–£1,500 total
          </li>
          <li>
            <strong>6–12 months behind (medium complexity):</strong> £1,500–£3,500 total
          </li>
          <li>
            <strong>1–2 years behind:</strong> £3,500–£6,000 total
          </li>
          <li>
            <strong>2+ years behind:</strong> £6,000+ (quoted case-by-case)
          </li>
        </ul>

        <p>
          <strong>Why catch-up costs more than ongoing:</strong>
        </p>
        <ul>
          <li>Less efficient (working with historical data, incomplete records, reconstruction)</li>
          <li>More complex (year-end adjustments, missing transactions, anomalies to resolve)</li>
          <li>Time pressure (deadlines mean we can&apos;t spread work as efficiently)</li>
        </ul>

        <p>
          <strong>But catch-up saves you money by:</strong>
        </p>
        <ul>
          <li>Reducing or eliminating HMRC/Companies House penalties (often £100–£1,500+)</li>
          <li>Preventing interest charges on late tax payments</li>
          <li>Reducing risk of HMRC enquiries (which can be costly and stressful)</li>
          <li>Getting you current so ongoing bookkeeping is cheaper going forward</li>
        </ul>

        <p>
          <strong>Timeline:</strong> We&apos;ll give you an honest estimate after reviewing your backlog. If you&apos;re facing an imminent deadline, we&apos;ll do everything possible to meet it (though very tight deadlines may require premium pricing for evening/weekend work). Most catch-up work completes within the timelines above, but complex cases (multiple years, incomplete records, multi-entity structures) can take longer.
        </p>

        <p>
          <strong>No hidden fees.</strong> All prices exclude VAT. We&apos;ll give you a fixed quote after the assessment call, so you know exactly what it&apos;ll cost before we start.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with Kent businesses who&apos;ve fallen behind: sole traders in Medway who&apos;ve been too busy to keep up with self-assessment records, limited companies in Maidstone facing Companies House filing deadlines, contractors in Canterbury struggling with IR35 compliance, and landlords across Kent managing rental property records.
        </p>

        <p>
          Kent businesses face the same HMRC deadlines as everyone else—31 January for self-assessment, quarterly VAT returns if you&apos;re VAT-registered, Companies House confirmation statements and accounts. The difference is that when you&apos;re behind, these deadlines become terrifying. But they don&apos;t have to be. We&apos;ll assess your backlog honestly, give you a realistic timeline and cost, and get you current before the deadline hits.
        </p>

        <p>
          <strong>Common Kent scenarios we handle:</strong>
        </p>
        <ul>
          <li>
            <strong>Sole traders</strong> — Behind on self-assessment records, facing 31 January deadline
          </li>
          <li>
            <strong>Limited companies</strong> — Late filing with Companies House, facing automatic penalties
          </li>
          <li>
            <strong>Contractors</strong> — IR35 compliance backlog, need clean records for status determination
          </li>
          <li>
            <strong>Landlords</strong> — Rental income and expense records behind, facing self-assessment deadline
          </li>
          <li>
            <strong>New businesses</strong> — Started trading but never set up proper bookkeeping, now need to catch up
          </li>
        </ul>

        <p>
          <strong>Remote-first, urgent turnaround available.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand that when you&apos;re behind, time is of the essence. If you&apos;re facing a deadline within 2–4 weeks, let us know and we&apos;ll prioritise you. We&apos;ve helped Kent businesses avoid thousands of pounds in penalties by getting them current just in time.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Catch-Up Bookkeeping for HMRC Deadlines - Frequently Asked Questions"
          subtitle="Common questions about catch-up bookkeeping and deadline support"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/">Monthly Bookkeeping with Bank Reconciliation</Link> — Once you&apos;re caught up, stay current with monthly bookkeeping
            </li>
            <li>
              <Link href="/services/bookkeeping/weekly-transactional-bookkeeping/">Weekly Transactional Bookkeeping</Link> — For high-transaction businesses, weekly bookkeeping prevents future backlogs
            </li>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns</Link> — Once your books are current, we can handle your tax return filing
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need urgent catch-up bookkeeping?" description="Don't risk penalties. We'll handle your backlog, get you compliant, and help you avoid costly HMRC and Companies House penalties." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need urgent catch-up bookkeeping?" />
    </>
  );
}

