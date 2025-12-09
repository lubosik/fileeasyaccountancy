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
  title: 'Project-Based & Ad-Hoc Bookkeeping Services in Kent | File Easy Accountancy',
  description: 'Project-based and ad-hoc bookkeeping services for businesses in Kent. Flexible support, project profitability tracking, cost-effective for low volume. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/project-based-ad-hoc-bookkeeping/',
  },
  openGraph: {
    title: 'Project-Based & Ad-Hoc Bookkeeping Services in Kent | File Easy Accountancy',
    description: 'Project-based and ad-hoc bookkeeping services for businesses in Kent. Flexible support, project profitability tracking, cost-effective for low volume.',
    url: 'https://fileeasyaccountancy.co.uk/services/project-based-ad-hoc-bookkeeping/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is project-based bookkeeping?',
    answer: 'Project-based bookkeeping tracks income and expenses for specific projects, so you can see which projects are profitable and which aren\'t. It\'s perfect for businesses that work on projects (construction, consulting, events) and need to understand project profitability. You track income and expenses per project, get project profitability reports, and make better decisions about which projects to take on.',
  },
  {
    question: 'Do I need ongoing bookkeeping or ad-hoc?',
    answer: 'Depends on your business. If you have regular transactions every month, ongoing monthly bookkeeping might be best. If you have irregular income, are a seasonal business, work on projects, or only need occasional help, ad-hoc bookkeeping might be better. Ad-hoc bookkeeping lets you pay only for what you need, when you need it, without monthly commitments.',
  },
  {
    question: 'How much does ad-hoc bookkeeping cost?',
    answer: 'Commonly reported ranges from local providers are £200–£500 per project for project-based bookkeeping, £300–£800 for catch-up work, £150–£400 per one-off task, or £40–£60/hour for flexible ongoing support. Cost depends on work type, volume, and complexity. Ad-hoc bookkeeping can be more cost-effective than monthly packages for businesses with low transaction volumes or irregular activity.',
  },
  {
    question: 'What is ad-hoc accounting?',
    answer: 'Ad-hoc accounting means getting accounting support when you need it, without ongoing monthly commitments. It could be project-based bookkeeping, catch-up work, one-off tasks, or flexible ongoing support on an as-needed basis. You pay for what you need, when you need it, rather than paying monthly fees regardless of whether you need support.',
  },
  {
    question: 'When do I need project-based accounting?',
    answer: 'You need project-based accounting if you work on projects (construction, consulting, events) and want to track project profitability. Project-based accounting tracks income and expenses per project, helps you see which projects are profitable, and makes it easier to price future projects accurately. It\'s perfect for project-based businesses wanting to understand project performance.',
  },
  {
    question: 'Is ad-hoc bookkeeping right for me?',
    answer: 'Ad-hoc bookkeeping is right for you if: you have irregular income, you\'re a seasonal business, you work on projects and need project tracking, you only need occasional help, or you have low transaction volumes. If you have regular monthly transactions and want ongoing support, monthly bookkeeping might be better. Ad-hoc bookkeeping gives you flexibility without monthly commitments.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'Project-Based & Ad-Hoc Bookkeeping', href: '/services/bookkeeping/project-based-ad-hoc-bookkeeping' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function ProjectBasedAdHocBookkeepingPage() {
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
            serviceType: 'Project-Based & Ad-Hoc Bookkeeping',
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
            description: 'Project-based and ad-hoc bookkeeping services for businesses in Kent. Flexible support, project profitability tracking, cost-effective for low volume.',
            name: 'Project-Based & Ad-Hoc Bookkeeping',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/project-based-ad-hoc-bookkeeping/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Project-Based Bookkeeping' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ad-Hoc Catch-Up Work' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'One-Off Bookkeeping Tasks' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flexible Ongoing Support' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Project-Based & Ad-Hoc Bookkeeping"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          Not every business needs ongoing monthly bookkeeping. Some businesses have irregular income, seasonal businesses have quiet periods, project-based businesses only need bookkeeping for specific projects, and some businesses just need occasional help with catch-up work or one-off tasks. Ad-hoc bookkeeping gives you flexible support when you need it, without committing to ongoing monthly services.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Ad-hoc bookkeeping helps businesses that don&apos;t need ongoing monthly bookkeeping</strong> but need help with specific projects or catch-up work—pay for what you need, when you need it
            </li>
            <li>
              <strong>Project-based bookkeeping tracks income and expenses for specific projects</strong>, helping businesses understand project profitability and make better decisions about which projects to take on
            </li>
            <li>
              <strong>Flexible bookkeeping services suit businesses with irregular income</strong>, seasonal businesses, or businesses needing occasional help—perfect for businesses that don&apos;t fit the monthly bookkeeping model
            </li>
            <li>
              <strong>Ad-hoc bookkeeping can be more cost-effective than ongoing monthly services</strong> for businesses with low transaction volumes or irregular activity—no monthly fees when you don&apos;t need ongoing support
            </li>
          </ul>
        </div>

        <p>
          The problem is most bookkeeping services only offer ongoing monthly packages. That works great if you have regular transactions every month, but if your income is irregular, if you&apos;re a seasonal business, or if you only need occasional help, you&apos;re paying for services you don&apos;t need. Ad-hoc bookkeeping solves that.
        </p>

        <p>
          We handle project-based and ad-hoc bookkeeping for businesses that need flexible support: project-based bookkeeping, ad-hoc catch-up work, one-off bookkeeping tasks, and flexible support. Whether you&apos;re a project-based business in Medway needing project profitability tracking, a seasonal business in Maidstone needing occasional help, or a business in Canterbury needing catch-up work, we&apos;ll provide bookkeeping support that fits your needs. No monthly commitments, no paying for services you don&apos;t need—just flexible bookkeeping when you need it.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Pay only for what you need</strong> — No monthly fees when you don&apos;t need ongoing support. Pay for bookkeeping only when you have work to do or projects to track.
          </li>
          <li>
            <strong>Track project profitability</strong> — Project-based bookkeeping tracks income and expenses for specific projects, so you can see which projects are profitable and which aren&apos;t. Make better decisions about which projects to take on.
          </li>
          <li>
            <strong>Get flexible support</strong> — Bookkeeping when you need it, not when you don&apos;t. Perfect for seasonal businesses, irregular income, or businesses needing occasional help.
          </li>
          <li>
            <strong>Handle catch-up work</strong> — Need to catch up on bookkeeping after a busy period or when you&apos;ve fallen behind? Ad-hoc bookkeeping handles catch-up work without requiring ongoing monthly commitment.
          </li>
          <li>
            <strong>One-off tasks</strong> — Need help with a specific task (bank reconciliation, VAT return, year-end preparation)? Ad-hoc bookkeeping handles one-off tasks without ongoing commitment.
          </li>
          <li>
            <strong>Save money on low-volume businesses</strong> — If you have low transaction volumes or irregular activity, ad-hoc bookkeeping is more cost-effective than ongoing monthly services.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for project-based and ad-hoc bookkeeping:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your needs: what type of bookkeeping help you need (project tracking, catch-up work, one-off tasks), how often you need support (occasionally, for specific projects, seasonally), what your business activity looks like (regular, irregular, seasonal), and what your budget is.
          </li>
          <li>
            <strong>Scope definition</strong> — We define exactly what you need:
            <ul>
              <li>
                <strong>Project-based bookkeeping:</strong> Specific projects to track, project duration, what expenses/income to track per project
              </li>
              <li>
                <strong>Ad-hoc catch-up work:</strong> Period to catch up on, what needs doing (transactions, reconciliation, VAT returns)
              </li>
              <li>
                <strong>One-off tasks:</strong> Specific task needed (bank reconciliation, VAT return, year-end prep, etc.)
              </li>
              <li>
                <strong>Flexible ongoing:</strong> How often you&apos;re likely to need support, what triggers bookkeeping work (project completion, busy periods, etc.)
              </li>
            </ul>
            We&apos;ll quote based on the actual work needed, not a generic monthly fee.
          </li>
          <li>
            <strong>Bookkeeping delivery</strong> — We do the work:
            <ul>
              <li>
                <strong>Project-based:</strong> Track income and expenses for specific projects, provide project profitability reports, help with project invoicing and expenses
              </li>
              <li>
                <strong>Ad-hoc catch-up:</strong> Catch up on missed bookkeeping, reconcile accounts, prepare VAT returns, organize records
              </li>
              <li>
                <strong>One-off tasks:</strong> Complete specific tasks (bank reconciliation, VAT return preparation, year-end accounts prep, etc.)
              </li>
              <li>
                <strong>Flexible ongoing:</strong> Support when you need it (during busy periods, for specific projects, when you need help)
              </li>
            </ul>
            We work efficiently and deliver what you need, when you need it.
          </li>
          <li>
            <strong>Reporting and handover</strong> — We provide reports and handover:
            <ul>
              <li>
                <strong>Project reports:</strong> Project profitability, income/expense breakdown, project completion status
              </li>
              <li>
                <strong>Catch-up reports:</strong> Summary of work completed, updated account balances, compliance status
              </li>
              <li>
                <strong>Task completion:</strong> Completed tasks with documentation and explanations
              </li>
              <li>
                <strong>Flexible ongoing:</strong> Regular updates when we do work, summaries of what&apos;s been done
              </li>
            </ul>
            You&apos;ll know exactly what&apos;s been done and what your financial position is.
          </li>
          <li>
            <strong>Ongoing flexibility</strong> — We remain flexible for future needs:
            <ul>
              <li>
                <strong>Project support:</strong> Available for new projects as they come up
              </li>
              <li>
                <strong>Ad-hoc support:</strong> Available for catch-up work or one-off tasks when needed
              </li>
              <li>
                <strong>Flexible ongoing:</strong> Available on an as-needed basis without monthly commitment
              </li>
            </ul>
            Bookkeeping support that adapts to your business needs.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What project-based and ad-hoc bookkeeping includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Project-based bookkeeping (project income/expense tracking, project profitability reporting)</li>
            <li>Ad-hoc catch-up work (period catch-up, reconciliation, VAT returns)</li>
            <li>One-off bookkeeping tasks (bank reconciliation, VAT return prep, year-end prep)</li>
            <li>Flexible ongoing support (as-needed basis, no monthly commitment)</li>
            <li>Reporting and handover (project reports, catch-up summaries, task completion docs)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Common ad-hoc bookkeeping scenarios:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Project-based businesses:</strong> Construction projects, consulting projects, event projects needing project profitability tracking
            </li>
            <li>
              <strong>Seasonal businesses:</strong> Seasonal businesses needing bookkeeping during busy periods, quiet during off-season
            </li>
            <li>
              <strong>Irregular income businesses:</strong> Businesses with irregular income needing occasional bookkeeping support
            </li>
            <li>
              <strong>Catch-up work:</strong> Businesses needing to catch up on bookkeeping after busy periods or when falling behind
            </li>
            <li>
              <strong>One-off tasks:</strong> Businesses needing help with specific tasks (bank reconciliation, VAT return, year-end prep) without ongoing commitment
            </li>
          </ul>
        </div>

        <p>
          We work with whatever bookkeeping system you&apos;re using—Xero, QuickBooks, Sage, spreadsheets, or starting from scratch. The key is providing flexible support that fits your business needs, not forcing you into ongoing monthly services you don&apos;t need.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Type of work</strong> — Project-based tracking costs less than comprehensive catch-up work
          </li>
          <li>
            <strong>Volume of work</strong> — More transactions, more projects, more catch-up work means more cost
          </li>
          <li>
            <strong>Complexity</strong> — Simple tasks (bank reconciliation) cost less than complex work (comprehensive catch-up, year-end prep)
          </li>
          <li>
            <strong>Urgency</strong> — Rush work may cost more due to prioritization
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Project-based bookkeeping:</strong> £200–£500 per project depending on project duration, transaction volume, and reporting needs
          </li>
          <li>
            <strong>Ad-hoc catch-up work:</strong> £300–£800 depending on period to catch up, transaction volume, and complexity
          </li>
          <li>
            <strong>One-off tasks:</strong> £150–£400 per task depending on task complexity (bank reconciliation £150–£250, VAT return £200–£350, year-end prep £300–£600)
          </li>
          <li>
            <strong>Flexible ongoing (hourly):</strong> £40–£60/hour for ad-hoc support when needed
          </li>
        </ul>

        <p>
          <strong>Why ad-hoc bookkeeping can be cost-effective:</strong>
        </p>
        <ul>
          <li>Pay only for what you need (no monthly fees when you don&apos;t need support)</li>
          <li>Suitable for low transaction volumes (more cost-effective than monthly packages)</li>
          <li>Perfect for irregular activity (don&apos;t pay for months with no activity)</li>
          <li>Flexible pricing based on actual work needed</li>
        </ul>

        <p>
          <strong>Timeline:</strong> Depends on the work needed. Simple one-off tasks (bank reconciliation) might take 1–2 days. Project-based bookkeeping depends on project duration. Catch-up work might take 1–2 weeks depending on period and complexity. We&apos;ll give you a timeline when we quote.
        </p>

        <p>
          <strong>No monthly commitments.</strong> All ad-hoc work is quoted and paid for per job. Flexible ongoing support is available on an as-needed basis without monthly commitments.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with businesses across Kent: project-based businesses in Medway needing project profitability tracking, seasonal businesses in Maidstone needing occasional help, and businesses in Canterbury needing catch-up work.
        </p>

        <p>
          Kent businesses have diverse needs—some need ongoing monthly bookkeeping, some need project-based tracking, some need occasional ad-hoc support. The difference is when you use ad-hoc bookkeeping, you get support that fits your needs without paying for services you don&apos;t need. Perfect for businesses with irregular income, seasonal businesses, or businesses needing occasional help.
        </p>

        <p>
          <strong>Common Kent business scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Project-based businesses:</strong> Construction contractors, event organizers, consultants needing project profitability tracking
          </li>
          <li>
            <strong>Seasonal businesses:</strong> Tourism businesses, seasonal retailers, agriculture businesses needing bookkeeping during busy periods
          </li>
          <li>
            <strong>Irregular income businesses:</strong> Freelancers, gig economy workers, businesses with irregular income needing occasional support
          </li>
          <li>
            <strong>Catch-up work:</strong> Businesses needing to catch up on bookkeeping after busy periods or when falling behind
          </li>
          <li>
            <strong>One-off tasks:</strong> Businesses needing help with specific tasks (bank reconciliation, VAT return, year-end prep) without ongoing commitment
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Kent has diverse business types (project-based, seasonal, irregular income) needing flexible bookkeeping</li>
          <li>Ad-hoc bookkeeping suits Kent businesses that don&apos;t fit the monthly bookkeeping model</li>
          <li>Flexible support helps Kent businesses manage costs while getting bookkeeping help when needed</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses are dealing with. Project tracking, catch-up work, occasional help—we&apos;ll provide bookkeeping support that fits your needs without monthly commitments or paying for services you don&apos;t need.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Project-Based & Ad-Hoc Bookkeeping - Frequently Asked Questions"
          subtitle="Common questions about project-based and ad-hoc bookkeeping services"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/">Monthly Bookkeeping with Bank Reconciliation</Link> — If you need ongoing monthly bookkeeping instead
            </li>
            <li>
              <Link href="/services/bookkeeping/catch-up-bookkeeping-hmrc-deadlines/">Catch-Up Bookkeeping for HMRC Deadlines</Link> — If you need to catch up on bookkeeping
            </li>
            <li>
              <Link href="/services/bookkeeping/bookkeeping-startup-businesses/">Bookkeeping for Startup Businesses</Link> — If you&apos;re starting out and need initial setup
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need flexible bookkeeping support?" description="Pay only for what you need, when you need it. We'll provide project-based tracking, catch-up work, or one-off tasks—no monthly commitments." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need flexible bookkeeping support?" />
    </>
  );
}

