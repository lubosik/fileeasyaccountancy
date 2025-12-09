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
  title: 'Construction Bookkeeping - CIS Compliant in Kent | File Easy Accountancy',
  description: 'CIS compliant bookkeeping for construction contractors and subcontractors in Kent. CIS deductions, monthly returns, compliance. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/construction-bookkeeping-cis-compliant/',
  },
  openGraph: {
    title: 'Construction Bookkeeping - CIS Compliant in Kent | File Easy Accountancy',
    description: 'CIS compliant bookkeeping for construction contractors and subcontractors in Kent. CIS deductions, monthly returns, compliance.',
    url: 'https://fileeasyaccountancy.co.uk/services/construction-bookkeeping-cis-compliant/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is CIS in construction?',
    answer: 'CIS stands for Construction Industry Scheme. It\'s an HMRC scheme that requires contractors to deduct tax from payments to subcontractors before paying them. The deduction rate is 20% if the subcontractor is registered with CIS, or 30% if they\'re unregistered. CIS deductions only apply to labor costs, not materials. Contractors must verify subcontractors with HMRC before making payments and submit monthly CIS returns. It\'s mandatory for construction industry payments—you can\'t avoid it.',
  },
  {
    question: 'Do I need CIS bookkeeping?',
    answer: 'Yes, if you\'re a contractor paying subcontractors, you need CIS-compliant bookkeeping to track deductions, verify subcontractors, and submit monthly returns. If you\'re a subcontractor receiving payments with deductions, you need CIS bookkeeping to track what\'s been deducted, reconcile with CIS statements, and prepare for Self Assessment. CIS compliance is mandatory—getting it wrong means penalties, interest, and potentially losing your CIS registration. Proper CIS bookkeeping keeps you compliant and saves you money.',
  },
  {
    question: 'How does CIS deduction work?',
    answer: 'If you\'re a contractor, you verify each subcontractor with HMRC before paying them. HMRC tells you the deduction rate (20% if registered, 30% if unregistered). You then deduct that percentage from the labor portion of the payment (not materials). So if you pay £1,000 for labor to a registered subcontractor, you deduct £200 (20%) and pay them £800. You then pay that £200 to HMRC and include it in your monthly CIS return. If you\'re a subcontractor, the contractor does the deduction before paying you, and you track it for your Self Assessment.',
  },
  {
    question: 'What records do contractors need for CIS?',
    answer: 'Contractors need to keep records of: all payments made to subcontractors, the gross amount, materials amount (if applicable), labor amount, deduction rate (20% or 30%), deduction amount, verification status (verified with HMRC or not), monthly CIS returns filed, and payments made to HMRC. Records must be kept for at least 6 years. HMRC can inspect your CIS records at any time, so it\'s worth keeping everything organized.',
  },
  {
    question: 'How much does CIS accounting cost?',
    answer: 'Commonly reported ranges from local providers are £200–£500/month for contractors (depending on number of subcontractors and transaction volume) or £150–£300/month for subcontractors (depending on number of contractors and transaction volume). CIS setup (one-off) typically costs £250–£450. CIS bookkeeping costs more than standard bookkeeping because CIS compliance, verification, deduction calculations, and monthly returns add complexity. But getting CIS wrong costs more in penalties, so it\'s worth doing it right.',
  },
  {
    question: 'Can I handle CIS bookkeeping myself?',
    answer: 'Technically yes, but most construction businesses find it\'s worth getting help. CIS compliance is strict—monthly returns, verification requirements, deduction calculations, materials vs labor splits—and mistakes are expensive. A bookkeeper or accountant who knows CIS helps you stay compliant, avoid penalties, and save time. If you\'re comfortable with CIS requirements and have time to stay on top of monthly returns, you can do it yourself, but most construction businesses find professional help is worth it.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'Construction Bookkeeping - CIS Compliant', href: '/services/bookkeeping/construction-bookkeeping-cis-compliant' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function ConstructionBookkeepingCisCompliantPage() {
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
            serviceType: 'Construction Bookkeeping - CIS Compliant',
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
            description: 'CIS compliant bookkeeping for construction contractors and subcontractors in Kent. CIS deductions, monthly returns, compliance.',
            name: 'Construction Bookkeeping - CIS Compliant',
            url: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/construction-bookkeeping-cis-compliant/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Bookkeeping Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CIS Verification' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monthly CIS Returns' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deduction Tracking' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Materials vs Labor Split' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Construction Bookkeeping - CIS Compliant"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          Running a construction business means dealing with CIS (Construction Industry Scheme). If you&apos;re a contractor paying subcontractors, you need to deduct tax before you pay them. If you&apos;re a subcontractor, you&apos;re getting payments with tax already deducted. Either way, CIS bookkeeping is more complicated than regular business bookkeeping, and getting it wrong can be expensive.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Construction Industry Scheme (CIS) requires contractors to deduct tax</strong> from payments to subcontractors at 20% (if they&apos;re registered) or 30% (if they&apos;re unregistered) before payment (
              <a href="https://www.gov.uk/what-is-the-construction-industry-scheme" target="_blank" rel="noopener noreferrer">
                gov.uk CIS guidance
              </a>
              )—you can&apos;t just pay subcontractors in full and figure out the tax later
            </li>
            <li>
              <strong>Contractors must verify subcontractors with HMRC before making payments</strong> and submit monthly CIS returns by the 19th of each month (
              <a href="https://www.gov.uk/guidance/construction-industry-scheme-cis" target="_blank" rel="noopener noreferrer">
                gov.uk CIS compliance
              </a>
              )—missing deadlines means penalties and interest
            </li>
            <li>
              <strong>Subcontractors must register with HMRC for CIS</strong> to receive payments at 20% deduction rate instead of 30% (
              <a href="https://www.gov.uk/construction-industry-scheme/register-as-a-contractor-or-subcontractor" target="_blank" rel="noopener noreferrer">
                gov.uk CIS registration
              </a>
              )—unregistered means you&apos;re losing 10% of every payment to higher deductions
            </li>
          </ul>
        </div>

        <p>
          The problem is most construction businesses try to handle CIS bookkeeping themselves, especially smaller contractors or subcontractors. That&apos;s fine when it&apos;s simple, but CIS compliance is strict—monthly returns, verification requirements, deduction calculations, materials vs labor splits. Get it wrong and you&apos;re dealing with HMRC penalties, interest charges, and potentially getting your CIS registration suspended.
        </p>

        <p>
          We handle CIS-compliant bookkeeping for construction contractors and subcontractors: CIS verification, deduction tracking, monthly CIS return preparation, materials and labor cost tracking, and reconciliation. Whether you&apos;re a contractor in Medway paying subcontractors, a subcontractor in Maidstone receiving payments with deductions, or a building company in Canterbury dealing with both sides, we&apos;ll keep your CIS bookkeeping compliant and your returns filed on time. No penalties, no stress—just proper bookkeeping that keeps you on the right side of HMRC.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Stay CIS compliant</strong> — Monthly CIS returns filed on time (by the 19th of each month), subcontractors verified before payment, deductions calculated correctly. Avoid penalties and interest.
          </li>
          <li>
            <strong>Track CIS deductions accurately</strong> — Know exactly what&apos;s been deducted from payments, what&apos;s been paid to HMRC, and what&apos;s been refunded. No confusion, no errors.
          </li>
          <li>
            <strong>Handle contractor obligations</strong> — Verify subcontractors with HMRC, deduct tax at the right rate (20% or 30%), submit monthly returns, pay deductions to HMRC on time.
          </li>
          <li>
            <strong>Handle subcontractor obligations</strong> — Track deductions from payments, claim refunds if over-deducted, reconcile with your Self Assessment. Get your 20% rate instead of 30% if you&apos;re registered.
          </li>
          <li>
            <strong>Separate materials from labor</strong> — CIS deductions only apply to labor, not materials. We&apos;ll help you split costs correctly so you&apos;re not deducting tax on materials.
          </li>
          <li>
            <strong>Get accurate financial reports</strong> — See your actual profit after CIS deductions, track materials costs separately from labor, understand your cash flow with deductions factored in.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for construction bookkeeping:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your construction business: are you a contractor (paying subcontractors) or subcontractor (receiving payments with deductions), how many subcontractors you work with (if you&apos;re a contractor), how many contractors you work for (if you&apos;re a subcontractor), what your typical monthly payments are, and what your current CIS bookkeeping setup looks like.
          </li>
          <li>
            <strong>CIS registration check</strong> — We verify your CIS registration status. If you&apos;re a contractor, you need to be registered to pay subcontractors. If you&apos;re a subcontractor, you need to be registered to get the 20% deduction rate (instead of 30%). If you&apos;re not registered, we&apos;ll help you get registered.
          </li>
          <li>
            <strong>CIS bookkeeping setup</strong> — We set up a bookkeeping system that tracks:
            <ul>
              <li>
                <strong>For contractors:</strong> Subcontractor payments, CIS deductions (20% or 30%), materials costs (separate from labor), monthly CIS return data
              </li>
              <li>
                <strong>For subcontractors:</strong> Payments received, CIS deductions suffered, materials costs, reconciliation with CIS statements
              </li>
            </ul>
          </li>
          <li>
            <strong>Monthly CIS compliance (for contractors):</strong>
            <ul>
              <li>
                <strong>Verify subcontractors</strong> — Before making payments, verify each subcontractor with HMRC to get their deduction rate (20% if registered, 30% if unregistered)
              </li>
              <li>
                <strong>Calculate deductions</strong> — Deduct tax from labor payments only (not materials) at the correct rate
              </li>
              <li>
                <strong>Track payments</strong> — Record each payment to subcontractors, the gross amount, materials amount, labor amount, and deduction amount
              </li>
              <li>
                <strong>Prepare monthly return</strong> — By the 19th of each month, prepare and submit the monthly CIS return showing all payments made and deductions calculated
              </li>
              <li>
                <strong>Pay HMRC</strong> — Pay the deducted tax to HMRC by the 22nd of each month (or 19th if filing electronically)
              </li>
            </ul>
          </li>
          <li>
            <strong>Monthly reconciliation (for subcontractors):</strong>
            <ul>
              <li>
                <strong>Track deductions</strong> — Record each payment received, the gross amount, materials amount (if applicable), labor amount, and deduction amount
              </li>
              <li>
                <strong>Reconcile CIS statements</strong> — Match deductions from CIS statements with your records
              </li>
              <li>
                <strong>Claim refunds if needed</strong> — If you&apos;ve been over-deducted (paid more than you owe), claim refunds from HMRC
              </li>
              <li>
                <strong>Prepare for Self Assessment</strong> — Track all deductions suffered so you can reconcile with your annual Self Assessment
              </li>
            </ul>
          </li>
          <li>
            <strong>Materials vs labor split</strong> — CIS deductions only apply to labor costs, not materials. We&apos;ll help you:
            <ul>
              <li>Identify materials costs (bricks, timber, cement, etc.) which aren&apos;t subject to CIS deductions</li>
              <li>Identify labor costs (subcontractor labor, your own labor if applicable) which are subject to CIS deductions</li>
              <li>Split costs correctly so you&apos;re not over-deducting or under-deducting</li>
            </ul>
          </li>
          <li>
            <strong>Ongoing bookkeeping</strong> — We handle monthly CIS returns (for contractors), monthly reconciliation (for subcontractors), materials and labor cost tracking, and regular financial reports showing your actual profit after CIS deductions.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What we track for construction businesses:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>CIS deductions (for contractors: deductions made; for subcontractors: deductions suffered)</li>
            <li>Subcontractor payments and verification (for contractors)</li>
            <li>Materials costs (separate from labor)</li>
            <li>Labor costs (subject to CIS deductions)</li>
            <li>Monthly CIS return preparation and filing (for contractors)</li>
            <li>Reconciliation with CIS statements (for subcontractors)</li>
            <li>Self Assessment prep (with CIS deductions factored in)</li>
          </ul>
        </div>

        <p>
          We work with whatever system suits you: cloud accounting (Xero, QuickBooks) for automation, simple spreadsheets if you prefer, or even starting from scratch if you&apos;ve been winging it. The key is staying CIS compliant—that&apos;s what makes construction bookkeeping different from regular business bookkeeping.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Contractor vs subcontractor</strong> — Contractors typically pay more because they&apos;re handling CIS returns and verification, which adds complexity
          </li>
          <li>
            <strong>Number of subcontractors</strong> — More subcontractors means more verification work, more payments to track, more complex monthly returns
          </li>
          <li>
            <strong>Transaction volume</strong> — Higher monthly payment volumes mean more reconciliation work
          </li>
          <li>
            <strong>Materials vs labor complexity</strong> — Simple jobs with clear materials/labor splits cost less than complex jobs where costs are mixed
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Monthly CIS bookkeeping for contractors:</strong> £200–£500/month depending on number of subcontractors and transaction volume
          </li>
          <li>
            <strong>Monthly CIS bookkeeping for subcontractors:</strong> £150–£300/month depending on number of contractors and transaction volume
          </li>
          <li>
            <strong>CIS setup (one-off):</strong> £250–£450 (includes CIS registration check, bookkeeping system setup, initial training on CIS requirements)
          </li>
        </ul>

        <p>
          <strong>Why CIS bookkeeping costs more than standard bookkeeping:</strong>
        </p>
        <ul>
          <li>CIS compliance adds complexity (verification, deduction calculations, monthly returns)</li>
          <li>Materials vs labor splitting requires careful tracking</li>
          <li>Monthly CIS returns (for contractors) add ongoing compliance work</li>
          <li>Penalty risk is higher if you get CIS wrong, so accuracy matters more</li>
        </ul>

        <p>
          <strong>Timeline:</strong> Setup usually takes about 1–2 weeks. Once we&apos;re set up, monthly CIS bookkeeping typically takes 2–3 days per month. CIS returns (for contractors) must be filed by the 19th of each month, so we work to that deadline.
        </p>

        <p>
          <strong>No hidden fees.</strong> All prices exclude VAT. We offer monthly payment plans and can adjust if your subcontractor count or transaction volume changes significantly.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with construction businesses across Kent: contractors in Medway paying subcontractors, subcontractors in Maidstone receiving payments with deductions, building companies in Canterbury dealing with both sides, and construction workers throughout the region.
        </p>

        <p>
          Kent construction businesses face the same CIS deadlines as everyone else—monthly CIS returns by the 19th, payments to HMRC by the 22nd (or 19th if filing electronically). The difference is when your CIS bookkeeping is organized and current, these deadlines aren&apos;t stressful. You know exactly what deductions you&apos;ve made (or suffered), what you owe HMRC (or what&apos;s been deducted), and your monthly returns are filed on time.
        </p>

        <p>
          <strong>Common Kent construction scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Building contractors</strong> — Paying multiple subcontractors (plumbers, electricians, carpenters), needing CIS verification and monthly returns
          </li>
          <li>
            <strong>Trade subcontractors</strong> — Receiving payments from contractors with CIS deductions, needing to track deductions and reconcile with Self Assessment
          </li>
          <li>
            <strong>Small building companies</strong> — Mix of own labor and subcontractors, needing to separate materials from labor, handle both contractor and subcontractor obligations
          </li>
          <li>
            <strong>Construction workers</strong> — Self-employed construction workers receiving payments with deductions, needing CIS registration and deduction tracking
          </li>
        </ul>

        <p>
          <strong>Kent construction industry context:</strong>
        </p>
        <ul>
          <li>Kent has a busy construction industry (new builds, renovations, extensions across Medway, Maidstone, Canterbury)</li>
          <li>Lots of contractors and subcontractors working on residential and commercial projects</li>
          <li>CIS compliance is mandatory—you can&apos;t avoid it if you&apos;re in construction</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent construction businesses are dealing with. CIS verification, deduction tracking, monthly returns, materials vs labor splits—we&apos;ve helped loads of Kent construction businesses get sorted, and we know how to make CIS compliance simple.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Construction Bookkeeping - CIS Compliant - Frequently Asked Questions"
          subtitle="Common questions about CIS bookkeeping for construction businesses"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/bookkeeping/bookkeeping-contractors-ir35/">Bookkeeping for Contractors - IR35</Link> — For contractors dealing with both CIS and IR35
            </li>
            <li>
              <Link href="/services/bookkeeping/monthly-bookkeeping-bank-reconciliation/">Monthly Bookkeeping with Bank Reconciliation</Link> — Ongoing monthly bookkeeping to keep you current
            </li>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns</Link> — Once your books are current, we can handle your Self Assessment with CIS deductions factored in
            </li>
          </ul>
          <p>
            <Link href="/services/bookkeeping/" className="font-semibold">
              View all bookkeeping services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with CIS bookkeeping?" description="Stay compliant, avoid penalties. We'll handle CIS verification, monthly returns, and deduction tracking for contractors and subcontractors." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with CIS bookkeeping?" />
    </>
  );
}

