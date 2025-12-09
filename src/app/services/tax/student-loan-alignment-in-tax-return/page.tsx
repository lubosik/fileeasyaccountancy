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
  title: 'Student Loan Alignment in Tax Return Services in Kent | File Easy Accountancy',
  description: 'Expert student loan alignment in tax returns in Kent. Student loan Self Assessment, student loan repayment tax return, student loan tax UK, student loan repayment calculation. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/student-loan-alignment-in-tax-return/',
  },
  openGraph: {
    title: 'Student Loan Alignment in Tax Return Services in Kent | File Easy Accountancy',
    description: 'Expert student loan alignment in tax returns in Kent. Student loan Self Assessment, student loan repayment tax return, student loan tax UK, student loan repayment calculation.',
    url: 'https://fileeasyaccountancy.co.uk/services/student-loan-alignment-in-tax-return/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I repay student loan through Self Assessment?',
    answer: 'If you file a Self Assessment tax return and your student loan repayments were due to start on or before 6 April of the tax year, you must complete the student loan section on your return. Repayments are calculated at 9% of total Self Assessment income above the threshold for Plan 1/2/4 loans, or 6% for postgraduate loans. If you were employed and had student loan deductions through PAYE, you can claim credit for these, so you don\'t pay twice. Student loan repayments are included in your Self Assessment payment, due on 31 January following the end of the tax year. If you file before 30 September, HMRC can calculate repayments for you.',
  },
  {
    question: 'Do I need to declare student loan on tax return?',
    answer: 'Yes, you need to declare your student loan on your Self Assessment tax return if the Student Loans Company has told you that your repayments were due to start on or before 6 April of the tax year. You must complete the student loan section even if your income is below the threshold—you just mark the box to indicate you have a student loan. This ensures HMRC knows about your loan and can calculate repayments correctly. If you don\'t declare your student loan, you might face incorrect charges or miss out on claiming credit for PAYE deductions.',
  },
  {
    question: 'How is student loan repayment calculated?',
    answer: 'Student loan repayments are calculated on your total Self Assessment income above the threshold for your plan type. For Plan 1, Plan 2, or Plan 4 loans, repayments are 9% of total income above the threshold. For postgraduate loans, repayments are 6% of total income above the threshold. If you have both a student loan and a postgraduate loan, combined repayments are 15% (9% + 6%) of total income above the threshold. Total income includes employment income, self-employed profits, property income, and unearned income over £2,000. If you had student loan deductions through PAYE from employment, these are deducted from your Self Assessment repayment, so you don\'t pay twice.',
  },
  {
    question: 'What are the student loan repayment thresholds?',
    answer: 'Student loan repayment thresholds vary by plan type and tax year. Thresholds change each tax year, so it\'s important to use the correct threshold for the year you\'re filing. For example, Plan 2 threshold is typically around £27,000–£28,000 per year (exact figures depend on tax year). Plan 1 threshold is typically lower, and Plan 4 (Scottish students) has its own threshold. Postgraduate loans have a separate threshold. You only repay on income above the threshold for your plan type. The Student Loans Company provides information on thresholds to HMRC, so they know which threshold applies to you.',
  },
  {
    question: 'Do I pay student loan on Self Assessment?',
    answer: 'Yes, if you file a Self Assessment tax return and your student loan repayments were due to start on or before 6 April of the tax year, you must include student loan repayments on your return. Repayments are calculated on your total Self Assessment income and included in your total payment, due on 31 January following the end of the tax year. If you were employed and had student loan deductions through PAYE, you can claim credit for these, so the amount you pay through Self Assessment is reduced. Student loan repayments are treated the same as tax for Self Assessment purposes—they\'re due on the same date and subject to the same payment rules.',
  },
  {
    question: 'What is the difference between Plan 1 and Plan 2 student loans?',
    answer: 'Plan 1 and Plan 2 student loans have different thresholds and eligibility criteria. Plan 1 loans are typically for students who started university before 1 September 2012 (England and Wales) or before 1 September 1998 (Scotland), with a lower repayment threshold. Plan 2 loans are typically for students who started university on or after 1 September 2012 (England and Wales), with a higher repayment threshold (around £27,000–£28,000). Both plans have a 9% repayment rate on income above the threshold, but the threshold differs. Plan 4 is for Scottish students with their own threshold. The Student Loans Company determines your plan type based on when you started university and where you studied, and provides this information to HMRC.',
  },
  {
    question: 'Can I claim credit for student loan repayments already paid through PAYE?',
    answer: 'Yes, you can claim credit for student loan repayments already deducted through PAYE from your employment income. When you complete your Self Assessment return, you enter the total of all student loan deductions taken through PAYE during the tax year (found on your P60 or by adding up deductions from payslips). HMRC then deducts these PAYE repayments from the amount you need to repay through Self Assessment, so you don\'t pay twice. This is especially important if you have both employment and self-employment income—you\'ll have paid student loan through PAYE on your employment income, and you\'ll need to pay additional student loan through Self Assessment on your self-employment income, but you\'ll only pay on the combined income above the threshold, not separately on each source.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Student Loan Alignment in Tax Return', href: '/services/tax/student-loan-alignment-in-tax-return' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function StudentLoanAlignmentInTaxReturnPage() {
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
            serviceType: 'Student Loan Alignment in Tax Return',
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
            description: 'Expert student loan alignment in tax returns in Kent. Student loan Self Assessment, student loan repayment tax return, student loan tax UK, student loan repayment calculation.',
            name: 'Student Loan Alignment in Tax Return',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/student-loan-alignment-in-tax-return/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Student Loan Tax Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Student Loan Identification' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Repayment Calculation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PAYE Credit Claims' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Self Assessment Declaration' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Student Loan Alignment in Tax Return"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you have a student loan and you&apos;re filing a Self Assessment tax return, you need to tell HMRC about your student loan so they can calculate the correct repayments. Student loan repayments on Self Assessment are calculated at 9% of total Self Assessment income above the threshold for Plan 1, Plan 2, or Plan 4 loans, with postgraduate loans at 6% above threshold (
          <a href="https://www.gov.uk/guidance/tell-hmrc-about-a-student-loan-in-your-tax-return" target="_blank" rel="noopener noreferrer">
            gov.uk student loan tax return
          </a>
          ). If you&apos;re repaying both a Plan 1/2/4 student loan and a postgraduate loan, combined repayments are 15% of total income above the threshold (9% + 6%). Self-employed individuals must include student loan repayments on Self Assessment returns, with repayments due on 31 January following the tax year, and HMRC can calculate repayments if returns are filed before 30 September.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>You must declare student loans on Self Assessment if repayments were due to start on or before 6 April</strong> — You complete the student or postgraduate loan section on your tax return, even if your income is below the threshold
            </li>
            <li>
              <strong>Student loan repayments are calculated on total Self Assessment income</strong> — Including employment income, self-employed profits, property income, and unearned income over £2,000, with repayments at 9% (Plan 1/2/4) or 6% (postgraduate) above thresholds
            </li>
            <li>
              <strong>You can claim credit for PAYE deductions</strong> — If you were employed and had student loan deductions through PAYE, these are deducted from your Self Assessment repayment, preventing double payment
            </li>
            <li>
              <strong>Student loan repayments are not tax-deductible</strong> — Repayments reduce your loan balance but don&apos;t reduce your taxable income, and they&apos;re due on 31 January alongside your tax payment
            </li>
          </ul>
        </div>

        <p>
          The problem is most people with student loans don&apos;t realise they need to declare them on Self Assessment, or they struggle with understanding which plan they&apos;re on, working out repayment calculations, claiming credit for PAYE deductions, and ensuring repayments align with their tax return. That causes problems—missing student loan declarations on returns, incorrect repayment calculations, double-paying student loan (paying through PAYE and Self Assessment without claiming credit), and unexpected student loan charges at the end of the year.
        </p>

        <p>
          We handle student loan alignment in tax returns for taxpayers across Kent: student loan identification (determining which student loan plan you&apos;re on and whether postgraduate loans apply), Self Assessment declaration (including student loan information on your tax return, completing the relevant boxes correctly), repayment calculation (calculating student loan repayments based on your total Self Assessment income and plan type), PAYE credit claims (claiming credit for student loan repayments already deducted through PAYE from employment income), repayment alignment (ensuring repayments align correctly with your tax return and don&apos;t result in overpayment), and deadline management (ensuring student loan repayments are included in your Self Assessment payment by 31 January). Whether you&apos;re self-employed in Medway with a student loan, combining employment and self-employment in Maidstone, or filing Self Assessment in Canterbury with student loan obligations, we&apos;ll handle your student loan alignment that works. No double payments, no repayment confusion—just proper student loan alignment that keeps you compliant.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Declare student loans correctly on Self Assessment</strong> — We&apos;ll ensure you complete the student loan section on your tax return correctly, declaring your plan type and repayment status. Correct declaration ensures accurate repayment calculations.
          </li>
          <li>
            <strong>Calculate repayments accurately</strong> — We&apos;ll work out exactly how much you need to repay based on your total income and plan type, using the right thresholds and rates. Accurate calculations prevent overpayments or underpayments.
          </li>
          <li>
            <strong>Claim credit for PAYE deductions</strong> — We&apos;ll ensure you claim credit for any student loan repayments already deducted through PAYE from employment income, preventing double payment. Claiming credit saves you money.
          </li>
          <li>
            <strong>Align repayments with your tax return</strong> — We&apos;ll ensure student loan repayments are calculated correctly and included in your Self Assessment payment, avoiding discrepancies. Alignment prevents HMRC enquiries.
          </li>
          <li>
            <strong>Understand your student loan obligations</strong> — We&apos;ll explain which plan you&apos;re on, how repayments work, and what thresholds apply. Understanding obligations helps you plan ahead.
          </li>
          <li>
            <strong>Avoid unexpected charges</strong> — We&apos;ll ensure student loan repayments are included in your Self Assessment return and payment, so there are no surprises. Avoiding surprises helps you budget better.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for student loan alignment in tax return:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your student loan situation: whether you have a student loan and which plan type (Plan 1, Plan 2, Plan 4, or postgraduate), whether you were employed during the tax year and had student loan deductions through PAYE, whether you&apos;re self-employed or have other income, how much you earned from all sources, whether you&apos;ve filed Self Assessment before, and what you want to achieve. Understanding your situation helps us determine student loan obligations.
          </li>
          <li>
            <strong>Student loan identification</strong> — We identify your student loan details:
            <ul>
              <li>
                <strong>Plan type</strong> — We determine which student loan plan you&apos;re on (Plan 1, Plan 2, Plan 4) and whether you have a postgraduate loan.
              </li>
              <li>
                <strong>Repayment start date</strong> — We confirm when your student loan repayments started (if repayments started on or before 6 April of the tax year, you must declare on Self Assessment).
              </li>
              <li>
                <strong>PAYE deductions</strong> — We review P60 forms and payslips to identify any student loan repayments already deducted through PAYE from employment income.
              </li>
            </ul>
            Student loan identification ensures correct declaration on your tax return.
          </li>
          <li>
            <strong>Total income calculation</strong> — We calculate your total Self Assessment income for student loan purposes:
            <ul>
              <li>
                <strong>Employment income</strong> — Income from all employments (even if individually under threshold, combined income may exceed threshold).
              </li>
              <li>
                <strong>Self-employed profits</strong> — Net profit from self-employment (income minus expenses).
              </li>
              <li>
                <strong>Property income</strong> — Rental income from property (if applicable).
              </li>
              <li>
                <strong>Unearned income</strong> — Interest, dividends, and other unearned income over £2,000.
              </li>
              <li>
                <strong>Other income</strong> — Any other income included in your Self Assessment return.
              </li>
            </ul>
            Total income calculation determines the base for student loan repayment calculations.
          </li>
          <li>
            <strong>Student loan repayment calculation</strong> — We calculate your student loan repayments:
            <ul>
              <li>
                <strong>Plan 1/2/4 repayments</strong> — 9% of total income above the threshold for your plan type (thresholds vary by plan and tax year).
              </li>
              <li>
                <strong>Postgraduate loan repayments</strong> — 6% of total income above the postgraduate loan threshold.
              </li>
              <li>
                <strong>Combined repayments</strong> — If you have both a student loan (Plan 1/2/4) and a postgraduate loan, combined repayments are 15% (9% + 6%) of total income above the threshold.
              </li>
              <li>
                <strong>PAYE credit</strong> — We deduct any student loan repayments already paid through PAYE from your employment income, so you don&apos;t pay twice.
              </li>
            </ul>
            Repayment calculation ensures accurate student loan charges.
          </li>
          <li>
            <strong>Self Assessment declaration</strong> — We complete the student loan section on your tax return:
            <ul>
              <li>
                <strong>Box 1</strong> — We mark &apos;X&apos; if repayments started on or before 6 April of the tax year (even if income is below threshold).
              </li>
              <li>
                <strong>Box 2</strong> — We enter total student loan Plan 1/2/4 deductions taken through PAYE (from P60 or payslips).
              </li>
              <li>
                <strong>Box 3</strong> — We enter total postgraduate loan deductions taken through PAYE (if applicable).
              </li>
              <li>
                <strong>Pre-populated information</strong> — If filing online, we check pre-populated information against your records and correct any discrepancies.
              </li>
            </ul>
            Self Assessment declaration ensures student loans are properly included on your return.
          </li>
          <li>
            <strong>Payment coordination and alignment</strong> — We coordinate student loan repayments with your tax payment:
            <ul>
              <li>
                <strong>Payment deadline</strong> — Student loan repayments are due on 31 January following the tax year, the same date as your tax payment.
              </li>
              <li>
                <strong>Combined payment</strong> — Student loan repayments are included in your total Self Assessment payment (tax + student loan + National Insurance).
              </li>
              <li>
                <strong>Payment on account</strong> — If your total Self Assessment bill (including student loan) is over £1,000, Payments on Account apply for next year&apos;s payment.
              </li>
              <li>
                <strong>HMRC calculation</strong> — If you file before 30 September, HMRC can calculate repayments for you (though we still check calculations are correct).
              </li>
            </ul>
            Payment coordination ensures repayments align with your tax return and are paid on time.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What student loan alignment in tax return includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Student loan plan type identification</li>
            <li>Total income calculation for student loan purposes</li>
            <li>Student loan repayment calculation (Plan 1/2/4 at 9%, postgraduate at 6%, combined at 15%)</li>
            <li>PAYE credit claims (deducting repayments already paid through PAYE)</li>
            <li>Completion of student loan section on Self Assessment return</li>
            <li>Payment coordination ensuring repayments are included in Self Assessment payment</li>
            <li>Verification of pre-populated information (if filing online)</li>
          </ul>
        </div>

        <p>
          We handle all aspects of student loan alignment in tax returns, from identification to payment. The key is understanding your plan type, calculating repayments correctly, claiming PAYE credits, and ensuring everything aligns with your tax return.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Complexity of income</strong> — Simple income (just employment or just self-employment) vs. multiple income sources (employment + self-employment + property) increases complexity.
          </li>
          <li>
            <strong>Number of loan plans</strong> — Single student loan vs. student loan plus postgraduate loan (combined repayments).
          </li>
          <li>
            <strong>PAYE deduction complexity</strong> — Single employment vs. multiple employments with different PAYE deductions increases complexity.
          </li>
          <li>
            <strong>Self Assessment complexity</strong> — Simple Self Assessment return vs. complex return with multiple income sources and deductions.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Student loan alignment (simple, single plan, single income source):</strong> £50–£150 (if already filing Self Assessment, just adding student loan section)
          </li>
          <li>
            <strong>Student loan alignment (standard, multiple income sources, PAYE credits):</strong> £100–£250 (including repayment calculations and PAYE credit claims)
          </li>
          <li>
            <strong>Student loan alignment (complex, multiple plans, multiple employments, complex income):</strong> £150–£400 (including detailed calculations and alignment)
          </li>
          <li>
            <strong>Full Self Assessment including student loan (if not already filing):</strong> £200–£500 (registration, return preparation, student loan alignment)
          </li>
        </ul>

        <p>
          <strong>Why student loan alignment in tax return costs what it does:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding student loan plan types, thresholds, repayment rates, and Self Assessment requirements requires specialist knowledge.
          </li>
          <li>
            <strong>Calculation complexity</strong> — Calculating repayments on total income, applying thresholds correctly, and claiming PAYE credits requires careful calculation.
          </li>
          <li>
            <strong>Alignment verification</strong> — Ensuring repayments align correctly with tax return and PAYE deductions requires verification.
          </li>
          <li>
            <strong>Compliance risk</strong> — Ensuring accurate student loan declarations protects you from incorrect charges and overpayments.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Student loan alignment typically takes 1–2 weeks after we receive your income information and P60/payslip details. If you&apos;re filing Self Assessment, alignment is included in return preparation (typically 2–4 weeks after receiving all information). Returns must be filed by 31 January following the end of the tax year (or 31 October for paper returns). Student loan repayments are due by 31 January following the end of the tax year, included in your Self Assessment payment.
        </p>

        <p>
          <strong>Payment:</strong> Student loan repayments are due on 31 January following the end of the tax year, included in your total Self Assessment payment (tax + student loan + National Insurance).
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes student loan identification, repayment calculation, PAYE credit claims, Self Assessment declaration, and payment coordination. If you&apos;re not already filing Self Assessment, full return preparation may be additional.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For taxpayers in Kent with student loans, whether you&apos;re self-employed in Medway, combining employment and self-employment in Maidstone, or filing Self Assessment in Canterbury, student loan alignment in tax returns ensures you repay correctly and don&apos;t overpay. Many Kent taxpayers don&apos;t realise they need to declare student loans on Self Assessment, or they struggle with understanding plan types, calculating repayments, and claiming PAYE credits. We help local taxpayers identify their student loan obligations, calculate repayments correctly, claim PAYE credits to avoid double payment, and ensure everything aligns with their tax return. It&apos;s worth getting it right—incorrect student loan declarations can lead to overpayments or underpayments, and claiming PAYE credits prevents double payment.
        </p>

        <p>
          <strong>Common Kent student loan scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Self-employed with student loans</strong> — Self-employed individuals with student loans, needing to calculate repayments on self-employment profits.
          </li>
          <li>
            <strong>Mixed employment and self-employment</strong> — Taxpayers with both employment and self-employment income, needing to claim PAYE credits and calculate additional repayments.
          </li>
          <li>
            <strong>Multiple plan holders</strong> — Taxpayers with both student loans (Plan 1/2/4) and postgraduate loans, needing combined repayment calculations.
          </li>
          <li>
            <strong>First-time Self Assessment filers</strong> — Taxpayers filing Self Assessment for the first time with student loans, needing help with declaration and calculations.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent taxpayers are dealing with. Student loan identification, repayment calculation, PAYE credit claims, Self Assessment declaration—we&apos;ll handle your student loan alignment that keeps you compliant and prevents overpayment.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Student Loan Alignment in Tax Return - Frequently Asked Questions"
          subtitle="Common questions about student loan repayments, Self Assessment, and PAYE credits"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Self Assessment returns where student loan repayments are included
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning including strategies that may affect student loan repayment calculations
            </li>
            <li>
              <Link href="/services/tax/self-assessment-investment-income/">Self-Assessment for Investment Income</Link> — Self Assessment for investment income (also included in total income for student loan calculations)
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with student loan alignment in your tax return?" description="Don't overpay on student loans or miss PAYE credits. We'll help you declare student loans correctly, calculate repayments accurately, claim PAYE credits, and ensure everything aligns with your tax return. No double payments, no repayment confusion—just proper student loan alignment that keeps you compliant." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with student loan alignment in your tax return?" />
    </>
  );
}

