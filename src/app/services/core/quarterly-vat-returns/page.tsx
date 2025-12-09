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
  title: 'Quarterly VAT Returns Services in Kent | File Easy Accountancy',
  description: 'Expert quarterly VAT return services in Kent. Quarterly VAT returns, VAT return filing, VAT return preparation, VAT return UK, VAT return submission. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/quarterly-vat-returns/',
  },
  openGraph: {
    title: 'Quarterly VAT Returns Services in Kent | File Easy Accountancy',
    description: 'Expert quarterly VAT return services in Kent. Quarterly VAT returns, VAT return filing, VAT return preparation, VAT return UK.',
    url: 'https://fileeasyaccountancy.co.uk/services/quarterly-vat-returns/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'When are VAT returns due?',
    answer: 'VAT returns must be filed by 1 month and 7 days after the end of each VAT accounting period. For quarterly returns, this means if your VAT period ends on 31 March, your return must be filed by 7 May. Payment deadlines are also 1 month and 7 days after the end of the VAT period, so if VAT is due, it must be paid by the same date. Late filing results in penalty points (1 point per late return), with £200 penalty after reaching the points threshold (4 points for monthly filers, 5 for quarterly filers). It\'s important to file on time to avoid penalties.',
  },
  {
    question: 'How do I file a VAT return?',
    answer: 'To file a VAT return, you need to: gather all sales and purchase records for the VAT period, calculate VAT due on sales (Box 1), calculate VAT reclaimed on purchases (Box 4), calculate net VAT to pay or reclaim (Box 5), include total sales excluding VAT (Box 6), include total purchases excluding VAT (Box 7), include EU transactions if applicable (Box 8 and Box 9), prepare your VAT return with all 9 boxes completed, and file your VAT return online using MTD-compatible software (manual submission via government gateway is no longer accepted). The process requires digital record keeping and digital submission as part of Making Tax Digital for VAT. It\'s worth getting professional help to ensure returns are accurate and MTD-compliant.',
  },
  {
    question: 'What is the deadline for VAT returns?',
    answer: 'The deadline for VAT returns is 1 month and 7 days after the end of each VAT accounting period. For quarterly returns, this means deadlines typically fall on the 7th of the month (if period ends on last day of month). For example, if your VAT period ends on 31 March, your return must be filed by 7 May. If your period ends on 30 June, your return must be filed by 7 August. Payment deadlines are the same as filing deadlines—if VAT is due, it must be paid by 1 month and 7 days after the end of the VAT period. Late filing and payment result in penalties and interest.',
  },
  {
    question: 'How do I prepare a VAT return?',
    answer: 'To prepare a VAT return, you need to: collect all sales invoices and income records for the VAT period, calculate total sales including VAT (Box 6: total value of sales excluding VAT), calculate VAT due on sales (Box 1: VAT due on sales), collect all purchase invoices and expense records for the VAT period, calculate total purchases excluding VAT (Box 7: total value of purchases excluding VAT), calculate VAT reclaimed on purchases (Box 4: VAT reclaimed on purchases), calculate net VAT to pay or reclaim (Box 5: Box 3 - Box 4), include EU transactions if applicable (Box 8: EU sales, Box 9: EU purchases), review all figures for accuracy, and prepare your VAT return with all 9 boxes completed. The process requires digital record keeping as part of MTD for VAT. It\'s worth getting professional help to ensure calculations are correct and returns are accurate.',
  },
  {
    question: 'What information do I need for a VAT return?',
    answer: 'For a VAT return, you need: all sales invoices and income records for the VAT period (to calculate total sales and VAT due on sales), all purchase invoices and expense records for the VAT period (to calculate total purchases and VAT reclaimed), details of any zero-rated or exempt sales if applicable, details of any EU sales or purchases if applicable, your VAT registration number, and your VAT accounting period dates. The information must be maintained digitally as part of Making Tax Digital for VAT requirements. Having well-organised records makes VAT return preparation much faster and easier. It\'s worth getting professional help if your records are disorganised or if you\'re unsure what to include.',
  },
  {
    question: 'Can I file VAT returns online?',
    answer: 'Yes, you must file VAT returns online using Making Tax Digital (MTD) compatible software. Manual submission via the government gateway is no longer accepted for MTD-compliant businesses. MTD-compatible software includes cloud accounting software (Xero, QuickBooks, Sage), bridging software (for use with spreadsheets), and other HMRC-approved MTD software. The software must maintain digital records and submit returns digitally to HMRC. It\'s worth getting professional help to ensure you\'re using MTD-compatible software correctly and meeting all MTD requirements.',
  },
  {
    question: 'What happens if I file my VAT return late?',
    answer: 'If you file your VAT return late, you receive penalty points (1 point per late return). When you reach the points threshold (4 points for monthly filers, 5 points for quarterly filers, 6 points for annual filers), you receive a £200 penalty. Additional penalties apply if you continue to file late after reaching the threshold. On top of filing penalties, if you also pay VAT late, you receive late payment penalties (2% of unpaid VAT after 15 days, plus 2% after 30 days, then 4% per year daily interest). Late filing and payment can be costly, so it\'s important to file and pay on time. It\'s worth getting professional help to ensure you meet deadlines and avoid penalties.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Core', href: '/services/core' },
  { label: 'Quarterly VAT Returns', href: '/services/core/quarterly-vat-returns' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function QuarterlyVATReturnsPage() {
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
            serviceType: 'Quarterly VAT Returns',
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
            description: 'Expert quarterly VAT return services in Kent. Quarterly VAT returns, VAT return filing, VAT return preparation, VAT return UK.',
            name: 'Quarterly VAT Returns',
            url: 'https://fileeasyaccountancy.co.uk/services/core/quarterly-vat-returns/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'VAT Return Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT Return Preparation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT Calculations' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MTD-Compatible Filing' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deadline Management' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Quarterly VAT Returns"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re VAT-registered, you&apos;ve gotta file VAT returns every quarter—it&apos;s not optional, and missing deadlines means penalties and interest. VAT returns must be filed quarterly (every 3 months) for most businesses, with filing deadlines falling 1 month and 7 days after the end of each VAT accounting period, and payment deadlines also 1 month and 7 days after the end of the period (
          <a href="https://www.gov.uk/vat-returns" target="_blank" rel="noopener noreferrer">
            gov.uk VAT returns
          </a>
          ). All VAT returns must be filed online using Making Tax Digital (MTD) compatible software, as manual submission via the government gateway is no longer accepted for MTD-compliant businesses. VAT returns must include total sales and income (Box 6), total purchases and expenses excluding VAT (Box 7), total VAT due on sales (Box 1), total VAT you can reclaim (Box 4), net VAT to pay or reclaim (Box 5), and total value of sales and purchases to other EU countries if applicable.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>VAT returns must be filed quarterly (every 3 months)</strong> — Most businesses file quarterly, though some may file monthly or annually depending on turnover
            </li>
            <li>
              <strong>Filing deadline is 1 month and 7 days after period end</strong> — Payment deadline is also 1 month and 7 days after the end of the VAT period
            </li>
            <li>
              <strong>All returns must be filed online using MTD-compatible software</strong> — Manual submission via government gateway is no longer accepted
            </li>
            <li>
              <strong>Late filing results in penalty points</strong> — 1 point per late return, with £200 penalty after reaching the points threshold (4 points for monthly, 5 for quarterly)
            </li>
          </ul>
        </div>

        <p>
          The problem is most businesses find VAT returns confusing. They don&apos;t understand what figures to include, struggle with VAT calculations, miss filing deadlines, or don&apos;t realise they need MTD-compatible software. That causes problems—penalty points and £200 penalties for late filing, late payment penalties and interest charges, incorrect calculations leading to overpayment or underpayment, and HMRC enquiries into errors.
        </p>

        <p>
          We handle quarterly VAT returns for VAT-registered businesses across Kent: VAT return preparation (gathering sales and purchase records, calculating VAT figures, preparing VAT return boxes), VAT calculations (calculating VAT due on sales, VAT reclaimable on purchases, and net VAT to pay or reclaim), MTD-compatible filing (filing VAT returns online using MTD-compatible software, ensuring digital record keeping and submission requirements are met), deadline management (tracking VAT return deadlines and ensuring filing and payment on time), error checking (reviewing VAT returns for accuracy before submission to avoid errors and HMRC enquiries), and ongoing support (providing quarterly support for VAT return filing and any HMRC queries). Whether you&apos;re a VAT-registered business in Medway needing quarterly VAT returns, a business in Maidstone struggling with VAT calculations, or a company in Canterbury needing MTD-compliant filing, we&apos;ll handle your quarterly VAT returns that work. No penalties, no errors—just proper VAT return filing that keeps you compliant.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>File VAT returns on time</strong> — We&apos;ll prepare and file your VAT returns by the deadline, avoiding penalty points and £200 penalties. On-time filing means no penalties and no stress.
          </li>
          <li>
            <strong>Calculate VAT correctly</strong> — We&apos;ll calculate VAT due on sales, VAT reclaimable on purchases, and net VAT to pay or reclaim accurately. Correct calculations mean you pay the right amount.
          </li>
          <li>
            <strong>Meet MTD requirements</strong> — We&apos;ll file VAT returns using MTD-compatible software, ensuring digital record keeping and submission requirements are met. MTD compliance avoids penalties and keeps you legal.
          </li>
          <li>
            <strong>Avoid late payment penalties</strong> — We&apos;ll ensure VAT is paid on time, avoiding late payment penalties (2% after 15 days, plus 2% after 30 days, then 4% per year interest). Avoiding penalties saves money.
          </li>
          <li>
            <strong>Get accurate returns</strong> — We&apos;ll review VAT returns for accuracy before submission, avoiding errors and potential HMRC enquiries. Accurate returns protect you from enquiries.
          </li>
          <li>
            <strong>Save time</strong> — Let us handle VAT return preparation and filing while you focus on running your business. Saving time lets you focus on what matters.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for quarterly VAT returns:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your VAT situation: when you registered for VAT, what your VAT accounting periods are (quarterly, monthly, or annual), what system you use for bookkeeping (spreadsheets, cloud accounting, manual records), whether you&apos;re already registered for MTD for VAT, what VAT return support you need, and what you want to achieve. Understanding your situation helps us determine what needs to be done.
          </li>
          <li>
            <strong>VAT period review and deadline check</strong> — We review your VAT periods and deadlines:
            <ul>
              <li>
                <strong>VAT period identification</strong> — We identify your VAT accounting periods and when each period ends.
              </li>
              <li>
                <strong>Filing deadline calculation</strong> — We calculate filing deadlines (1 month and 7 days after period end) for each VAT return.
              </li>
              <li>
                <strong>Payment deadline calculation</strong> — We calculate payment deadlines (also 1 month and 7 days after period end) for each VAT payment.
              </li>
              <li>
                <strong>Deadline tracking</strong> — We set up deadline tracking to ensure you never miss a VAT return or payment deadline.
              </li>
              <li>
                <strong>Reminder system</strong> — We set up reminders to ensure VAT returns are prepared and filed on time.
              </li>
            </ul>
            VAT period review ensures you know when returns are due.
          </li>
          <li>
            <strong>Sales and income data collection</strong> — We collect data on your sales and income:
            <ul>
              <li>
                <strong>Sales records review</strong> — We review all sales invoices, receipts, and income records for the VAT period.
              </li>
              <li>
                <strong>VAT-inclusive sales</strong> — We identify total sales including VAT (Box 6: total value of sales and all other outputs excluding any VAT).
              </li>
              <li>
                <strong>VAT on sales calculation</strong> — We calculate total VAT due on sales (Box 1: VAT due in the period on sales and other outputs).
              </li>
              <li>
                <strong>Zero-rated and exempt sales</strong> — We identify zero-rated and exempt sales if applicable.
              </li>
              <li>
                <strong>EU sales</strong> — We identify sales to other EU countries if applicable (Box 8 and Box 9).
              </li>
            </ul>
            Sales data collection ensures all income is included correctly.
          </li>
          <li>
            <strong>Purchases and expenses data collection</strong> — We collect data on your purchases and expenses:
            <ul>
              <li>
                <strong>Purchase records review</strong> — We review all purchase invoices, receipts, and expense records for the VAT period.
              </li>
              <li>
                <strong>Purchases excluding VAT</strong> — We identify total purchases excluding VAT (Box 7: total value of purchases and all other inputs excluding any VAT).
              </li>
              <li>
                <strong>VAT on purchases calculation</strong> — We calculate total VAT you can reclaim (Box 4: VAT reclaimed in the period on purchases and other inputs including imports).
              </li>
              <li>
                <strong>VAT reclaimable items</strong> — We identify items where VAT can be reclaimed (business expenses, capital purchases, etc.).
              </li>
              <li>
                <strong>VAT non-reclaimable items</strong> — We identify items where VAT cannot be reclaimed (entertainment, certain cars, etc.).
              </li>
              <li>
                <strong>EU purchases</strong> — We identify purchases from other EU countries if applicable (Box 9).
              </li>
            </ul>
            Purchases data collection ensures all expenses are included correctly.
          </li>
          <li>
            <strong>VAT return calculation and preparation</strong> — We calculate and prepare your VAT return:
            <ul>
              <li>
                <strong>Box 1 (VAT due on sales)</strong> — We calculate total VAT due on sales and other outputs for the period.
              </li>
              <li>
                <strong>Box 2 (VAT due on acquisitions from EU)</strong> — We calculate VAT due on acquisitions from other EU countries if applicable.
              </li>
              <li>
                <strong>Box 3 (Total VAT due)</strong> — We calculate total VAT due (Box 1 + Box 2).
              </li>
              <li>
                <strong>Box 4 (VAT reclaimed)</strong> — We calculate total VAT reclaimed on purchases and other inputs.
              </li>
              <li>
                <strong>Box 5 (Net VAT)</strong> — We calculate net VAT to pay to HMRC or reclaim (Box 3 - Box 4).
              </li>
              <li>
                <strong>Box 6 (Total sales)</strong> — We include total value of sales and all other outputs excluding VAT.
              </li>
              <li>
                <strong>Box 7 (Total purchases)</strong> — We include total value of purchases and all other inputs excluding VAT.
              </li>
              <li>
                <strong>Box 8 (EU sales)</strong> — We include total value of all supplies of goods and related costs, excluding any VAT, to other EU countries if applicable.
              </li>
              <li>
                <strong>Box 9 (EU purchases)</strong> — We include total value of all acquisitions of goods and related costs, excluding any VAT, from other EU countries if applicable.
              </li>
              <li>
                <strong>Accuracy check</strong> — We review all figures for accuracy before submission.
              </li>
            </ul>
            VAT return calculation ensures correct figures.
          </li>
          <li>
            <strong>MTD-compatible filing</strong> — We file your VAT return using MTD-compatible software:
            <ul>
              <li>
                <strong>Digital record verification</strong> — We verify all records are maintained digitally as required by MTD.
              </li>
              <li>
                <strong>MTD software</strong> — We use MTD-compatible software (cloud accounting, bridging software, or other MTD-compliant systems) to file your return.
              </li>
              <li>
                <strong>Online submission</strong> — We submit your VAT return online through MTD-compatible software, ensuring digital submission requirements are met.
              </li>
              <li>
                <strong>Filing confirmation</strong> — We confirm filing is successful and provide you with confirmation.
              </li>
            </ul>
            MTD-compatible filing ensures compliance with MTD requirements.
          </li>
          <li>
            <strong>VAT payment processing and ongoing support</strong> — We help with VAT payment and provide ongoing support:
            <ul>
              <li>
                <strong>Payment calculation</strong> — We confirm the VAT amount to pay (if Box 5 shows VAT due) or reclaim (if Box 5 shows VAT reclaimable).
              </li>
              <li>
                <strong>Payment deadline reminder</strong> — We remind you of payment deadlines (1 month and 7 days after period end) if VAT is due.
              </li>
              <li>
                <strong>Payment processing support</strong> — We provide support for VAT payment processing if needed.
              </li>
              <li>
                <strong>HMRC correspondence</strong> — We help with any HMRC queries or correspondence related to VAT returns.
              </li>
              <li>
                <strong>Ongoing support</strong> — We provide quarterly support for future VAT returns and ongoing compliance.
              </li>
            </ul>
            Payment processing ensures VAT is paid on time.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What quarterly VAT returns includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>VAT period review and deadline tracking</li>
            <li>Sales and income data collection and VAT calculation</li>
            <li>Purchases and expenses data collection and VAT calculation</li>
            <li>VAT return calculation and preparation (all 9 boxes)</li>
            <li>MTD-compatible online filing</li>
            <li>VAT payment processing support</li>
            <li>Ongoing quarterly support</li>
          </ul>
        </div>

        <p>
          We handle all aspects of quarterly VAT returns, from data collection to final filing. The key is accurate calculations, MTD-compliant filing, and meeting deadlines to avoid penalties.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Complexity of business</strong> — Simple business (few transactions, straightforward VAT) vs. complex business (many transactions, complex VAT, EU sales/purchases) increases complexity.
          </li>
          <li>
            <strong>Volume of transactions</strong> — More transactions require more data collection and processing time.
          </li>
          <li>
            <strong>Data organisation</strong> — Well-organised records vs. disorganised records affects time required for data collection.
          </li>
          <li>
            <strong>VAT complexity</strong> — Simple VAT (standard rate) vs. complex VAT (multiple rates, zero-rated, exempt, EU transactions) increases complexity.
          </li>
          <li>
            <strong>Filing frequency</strong> — Quarterly filing vs. monthly filing affects pricing per return.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple quarterly VAT return (few transactions, straightforward VAT):</strong> £100–£250 per return (includes data collection, VAT calculation, return preparation, MTD-compatible filing)
          </li>
          <li>
            <strong>Standard quarterly VAT return (moderate transactions, standard VAT):</strong> £150–£350 per return (includes comprehensive data collection, VAT calculation, return preparation, MTD-compatible filing)
          </li>
          <li>
            <strong>Complex quarterly VAT return (many transactions, complex VAT, EU transactions):</strong> £250–£500+ per return (includes extensive data collection, complex VAT calculations, return preparation, MTD-compatible filing)
          </li>
          <li>
            <strong>Annual VAT return package (4 quarterly returns):</strong> £600–£1,400 per year (includes all 4 quarterly returns with ongoing support)
          </li>
        </ul>

        <p>
          <strong>Why quarterly VAT returns cost what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding VAT rules, MTD requirements, and VAT return calculations requires specialist knowledge.
          </li>
          <li>
            <strong>Time and complexity</strong> — Data collection, VAT calculations, return preparation, and MTD-compatible filing take time and attention to detail.
          </li>
          <li>
            <strong>Compliance requirements</strong> — Ensuring accurate returns and MTD compliance protects you from penalties and HMRC enquiries.
          </li>
          <li>
            <strong>Value provided</strong> — Proper VAT return filing helps you avoid penalties, pay the correct amount of VAT, and stay compliant, providing substantial value.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> VAT return preparation typically takes 1–2 weeks from receiving all information, depending on complexity. VAT returns must be filed by 1 month and 7 days after the end of the VAT period. VAT payments must be made by 1 month and 7 days after the end of the VAT period if VAT is due.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced per VAT return on completion of filing, or annually for package deals. Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes data collection, VAT calculations, return preparation, MTD-compatible filing, and ongoing support (if included in package).
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For VAT-registered businesses in Kent, whether you&apos;re a business in Medway needing quarterly VAT returns, a company in Maidstone struggling with VAT calculations, or a business in Canterbury needing MTD-compliant filing, quarterly VAT returns are essential for staying compliant and avoiding penalties. Many Kent businesses don&apos;t understand VAT return requirements, or they struggle with VAT calculations, MTD compliance, and meeting deadlines. We help local businesses prepare and file VAT returns accurately, calculate VAT correctly, meet MTD requirements, file on time, and get ongoing support, ensuring they avoid penalties and stay compliant. It&apos;s worth getting it right—late filing results in penalty points and £200 penalties, while late payment results in additional penalties and interest charges.
        </p>

        <p>
          <strong>Common Kent quarterly VAT return scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Standard quarterly filers</strong> — Businesses filing quarterly VAT returns with standard rate VAT on most transactions.
          </li>
          <li>
            <strong>Complex VAT businesses</strong> — Businesses with multiple VAT rates, zero-rated sales, exempt supplies, or EU transactions.
          </li>
          <li>
            <strong>MTD compliance</strong> — Businesses needing MTD-compliant VAT return filing using compatible software.
          </li>
          <li>
            <strong>Businesses wanting support</strong> — Businesses wanting ongoing quarterly support for VAT return preparation and filing.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses are dealing with. VAT return preparation, VAT calculations, MTD-compatible filing, deadline tracking, ongoing support—we&apos;ll handle your quarterly VAT returns that keep you compliant and penalty-free.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Quarterly VAT Returns - Frequently Asked Questions"
          subtitle="Common questions about VAT return filing, deadlines, and MTD compliance"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/core/mtd-compliance-vat-bridging/">MTD Compliance & VAT Bridging</Link> — MTD compliance and bridging software setup for VAT returns
            </li>
            <li>
              <Link href="/services/core/vat-registration-advisory/">VAT Registration Advisory</Link> — Help with VAT registration and requirements
            </li>
            <li>
              <Link href="/services/bookkeeping/vat-ready-bookkeeping-reconciliation/">VAT-Ready Bookkeeping & Reconciliation</Link> — Bookkeeping services that prepare for VAT returns
            </li>
          </ul>
          <p>
            <Link href="/services/core/" className="font-semibold">
              View all core services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with quarterly VAT returns?" description="Don't risk penalties or errors. We'll prepare and file your VAT returns accurately, calculate VAT correctly, and ensure MTD-compliant filing on time. No penalties, no errors—just proper VAT return filing that keeps you compliant." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with quarterly VAT returns?" />
    </>
  );
}

