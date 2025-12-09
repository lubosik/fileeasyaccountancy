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
  title: 'Child Benefit HICBC Support Services in Kent | File Easy Accountancy',
  description: 'Expert High Income Child Benefit Charge (HICBC) support in Kent. HICBC, child benefit tax charge, high income child benefit charge, pay child benefit charge. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/child-benefit-hicbc-support/',
  },
  openGraph: {
    title: 'Child Benefit HICBC Support Services in Kent | File Easy Accountancy',
    description: 'Expert High Income Child Benefit Charge (HICBC) support in Kent. HICBC, child benefit tax charge, high income child benefit charge, pay child benefit charge.',
    url: 'https://fileeasyaccountancy.co.uk/services/child-benefit-hicbc-support/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the High Income Child Benefit Charge?',
    answer: 'The High Income Child Benefit Charge (HICBC) is a tax charge that claws back Child Benefit payments from higher-earning households. It applies when you or your partner receive Child Benefit and have adjusted net income exceeding £60,000 (from April 2024). The charge is calculated at 1% of Child Benefit for every £200 of income over £60,000, with full clawback (100% of Child Benefit) occurring when income reaches £80,000. The person with higher income in a couple is liable to pay the charge if both partners exceed the threshold. HICBC ensures that families with higher incomes don\'t retain full Child Benefit while lower-income families receive it.',
  },
  {
    question: 'How much is the child benefit charge?',
    answer: 'The amount of HICBC you pay depends on your adjusted net income. If your income is between £60,000 and £80,000, you pay 1% of Child Benefit for every £200 over £60,000. For example, if you earn £70,000 and receive £2,212 Child Benefit per year, the charge would be approximately £1,106 (50% of Child Benefit). If your income is £80,000 or more, you pay 100% of Child Benefit received, meaning you don\'t keep any of it. The exact amount depends on how much Child Benefit you receive (currently £25.60 per week for first child, £16.95 per week for additional children) and where your income falls between the thresholds.',
  },
  {
    question: 'Do I need to pay HICBC?',
    answer: 'You need to pay HICBC if you or your partner receive Child Benefit and your adjusted net income (or your partner\'s, whichever is higher) exceeds £60,000. Adjusted net income includes employment income, self-employment income, savings interest, dividends, rental income, and other taxable income, but excludes pension contributions, Gift Aid donations, and trading losses. If both partners\' incomes exceed £60,000, the person with higher income is liable for the entire charge. If your income is below £60,000, you don\'t need to pay HICBC. If you\'re unsure, an accountant can help you calculate your adjusted net income and determine if HICBC applies.',
  },
  {
    question: 'How do I pay the High Income Child Benefit Charge?',
    answer: 'You pay HICBC through Self Assessment. If you\'re liable for HICBC, you must register for Self Assessment (if not already registered) and include the charge on your tax return. The charge is calculated and included in your total tax liability, which is due by 31 January following the end of the tax year. For example, for the 2024/25 tax year, HICBC would be due by 31 January 2026. Alternatively, you can opt out of receiving Child Benefit payments (while still claiming to protect your National Insurance record) to avoid HICBC entirely. An accountant can help you register for Self Assessment, calculate HICBC, and include it on your return.',
  },
  {
    question: 'What is the income threshold for child benefit charge?',
    answer: 'The income threshold for HICBC is £60,000 adjusted net income (from April 2024). This increased from £50,000 on 6 April 2024. If your adjusted net income is between £60,000 and £80,000, you pay 1% of Child Benefit for every £200 over £60,000. If your income reaches £80,000 or more, you pay 100% of Child Benefit (full clawback). The threshold applies to the person with higher income in a couple—if both partners exceed £60,000, only the higher earner pays the charge. Adjusted net income includes all taxable income but excludes pension contributions, Gift Aid donations, and trading losses.',
  },
  {
    question: 'How is HICBC calculated?',
    answer: 'HICBC is calculated based on your adjusted net income and how much Child Benefit you receive. If your income is between £60,000 and £80,000, the charge is 1% of total Child Benefit for every £200 of income over £60,000. For example, if you earn £70,000 (£10,000 over the threshold), you pay 50% of Child Benefit (10,000 ÷ 200 = 50). If your income is £80,000 or more, you pay 100% of Child Benefit (full clawback). The calculation uses adjusted net income, which includes all taxable income (employment, self-employment, savings, dividends, rental) but excludes pension contributions, Gift Aid, and trading losses. The charge is included on your Self Assessment return and paid by 31 January following the end of the tax year.',
  },
  {
    question: 'Can I opt out of Child Benefit to avoid HICBC?',
    answer: 'Yes, you can opt out of receiving Child Benefit payments to avoid HICBC, but you should still claim Child Benefit to protect your National Insurance record. When you opt out, you complete the Child Benefit claim form but state you don\'t want to receive payments. This means you won\'t receive any Child Benefit payments, so there\'s no HICBC to pay. However, claiming (even without receiving payments) maintains your qualifying years for National Insurance purposes, which protects your state pension entitlement. Many parents choose to opt out if their income is close to or above £80,000, as they\'d lose all Child Benefit anyway through HICBC. An accountant can help you decide whether to pay HICBC or opt out based on your circumstances.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Child Benefit HICBC Support', href: '/services/tax/child-benefit-hicbc-support' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function ChildBenefitHicbcSupportPage() {
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
            serviceType: 'Child Benefit HICBC Support',
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
            description: 'Expert High Income Child Benefit Charge (HICBC) support in Kent. HICBC, child benefit tax charge, high income child benefit charge, pay child benefit charge.',
            name: 'Child Benefit HICBC Support',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/child-benefit-hicbc-support/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Child Benefit HICBC Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HICBC Eligibility Assessment' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Adjusted Net Income Calculation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HICBC Calculation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Self Assessment Registration and Filing' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Child Benefit HICBC Support"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you or your partner receive Child Benefit and have a high income, you might need to pay the High Income Child Benefit Charge (HICBC)—which is basically a tax that claws back some or all of your Child Benefit payments. The High Income Child Benefit Charge (HICBC) is a tax charge that claws back Child Benefit payments from higher-earning households when adjusted net income exceeds £60,000 (from April 2024) (
          <a href="https://www.gov.uk/child-benefit-tax-charge" target="_blank" rel="noopener noreferrer">
            gov.uk child benefit tax charge
          </a>
          ). HICBC thresholds increased from £50,000 to £60,000 on 6 April 2024, with full clawback now occurring at £80,000 (previously £60,000). The charge is calculated at 1% of Child Benefit for every £200 of income over £60,000, with the person with higher income in a couple being liable to pay the charge.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>HICBC applies if adjusted net income exceeds £60,000</strong> — From April 2024, the threshold increased from £50,000 to £60,000, with the charge calculated at 1% of Child Benefit for every £200 over the threshold
            </li>
            <li>
              <strong>Full clawback occurs at £80,000</strong> — If adjusted net income reaches £80,000, you&apos;ll pay back 100% of Child Benefit received, meaning you don&apos;t keep any of it
            </li>
            <li>
              <strong>The higher-earning partner pays the charge</strong> — If both partners exceed the threshold, the person with higher income is liable for the entire charge, not split between partners
            </li>
            <li>
              <strong>You must register for Self Assessment to pay HICBC</strong> — Taxpayers liable for HICBC must register for Self Assessment and pay by 31 January following the end of the tax year, or opt out of receiving Child Benefit payments to avoid the charge
            </li>
          </ul>
        </div>

        <p>
          The problem is most higher-earning parents don&apos;t realise they need to pay HICBC until they get a letter from HMRC, or they struggle with working out adjusted net income, understanding the calculation, deciding whether to opt out of Child Benefit, and ensuring they register for Self Assessment in time. That causes problems—missing Self Assessment registration deadlines and penalties, confusion about whether to pay the charge or opt out, unexpected tax bills at the end of the year, and missing out on National Insurance credits if they opt out incorrectly.
        </p>

        <p>
          We handle Child Benefit HICBC support for parents across Kent: HICBC eligibility assessment (reviewing your adjusted net income to determine if HICBC applies and how much you&apos;ll owe), adjusted net income calculation (calculating your adjusted net income including all taxable income sources, excluding pension contributions and Gift Aid), HICBC calculation (working out exactly how much HICBC you&apos;ll pay based on your income and Child Benefit received), Self Assessment registration and filing (registering you for Self Assessment and including HICBC on your return), opt-out advice (helping you decide whether to pay the charge or opt out of Child Benefit payments while maintaining your National Insurance record), and ongoing compliance (annual reviews to ensure HICBC is calculated and paid correctly). Whether you&apos;re a high-earning parent in Medway receiving Child Benefit, a couple in Maidstone where one partner earns over the threshold, or a parent in Canterbury unsure whether HICBC applies, we&apos;ll handle your HICBC support that works. No missed deadlines, no unexpected charges—just proper HICBC compliance that keeps you protected.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Understand if HICBC applies to you</strong> — We&apos;ll review your adjusted net income and Child Benefit situation to determine if you&apos;re liable for HICBC and how much you&apos;ll owe. Understanding your liability helps you plan ahead.
          </li>
          <li>
            <strong>Calculate HICBC accurately</strong> — We&apos;ll work out exactly how much HICBC you&apos;ll pay based on your income and Child Benefit received, ensuring calculations are correct. Accurate calculations prevent overpayments or underpayments.
          </li>
          <li>
            <strong>Register for Self Assessment on time</strong> — We&apos;ll ensure you register for Self Assessment if you&apos;re liable for HICBC, avoiding late registration penalties. Timely registration protects you from penalties.
          </li>
          <li>
            <strong>Decide whether to pay or opt out</strong> — We&apos;ll help you work out whether it&apos;s better to pay HICBC or opt out of Child Benefit payments, considering National Insurance credits and your circumstances. Informed decisions save you money and hassle.
          </li>
          <li>
            <strong>Avoid unexpected tax bills</strong> — We&apos;ll help you understand your HICBC liability throughout the year, so there are no surprises at tax return time. Avoiding surprises helps you budget better.
          </li>
          <li>
            <strong>Maintain your National Insurance record</strong> — If you opt out, we&apos;ll ensure you still claim Child Benefit to protect your National Insurance record for state pension purposes. Protecting your record ensures future benefits.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for Child Benefit HICBC support:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your situation: whether you or your partner receive Child Benefit, how many children you claim for, what your total income is (employment, self-employment, savings interest, dividends), whether your partner has income and how much, whether you&apos;ve received HICBC notices from HMRC, and what you want to achieve. Understanding your situation helps us determine if HICBC applies.
          </li>
          <li>
            <strong>Adjusted net income calculation</strong> — We calculate your adjusted net income for HICBC:
            <ul>
              <li>
                <strong>Income sources included</strong> — Employment income (from P60 or payslips), self-employment income (from tax returns), savings interest (from bank statements), dividend income (from investment statements), rental income (from property income), other taxable income sources.
              </li>
              <li>
                <strong>Exclusions</strong> — Pension contributions (not included in adjusted net income), Gift Aid charity donations (not included), trading losses (for self-employed individuals, not included).
              </li>
              <li>
                <strong>Partner income check</strong> — We also calculate your partner&apos;s adjusted net income to determine who has the higher income (if both exceed threshold, the higher earner pays the charge).
              </li>
            </ul>
            Adjusted net income calculation determines if HICBC applies and who&apos;s liable.
          </li>
          <li>
            <strong>HICBC liability assessment</strong> — We assess your HICBC liability:
            <ul>
              <li>
                <strong>Threshold check</strong> — We check if adjusted net income exceeds £60,000 (the threshold from April 2024).
              </li>
              <li>
                <strong>Charge calculation</strong> — If income is between £60,000 and £80,000, we calculate the charge at 1% of Child Benefit for every £200 over £60,000. If income is £80,000 or more, the charge equals 100% of Child Benefit received.
              </li>
              <li>
                <strong>Child Benefit amounts</strong> — We confirm how much Child Benefit you receive (currently £25.60 per week for first child, £16.95 per week for additional children).
              </li>
              <li>
                <strong>Annual charge</strong> — We calculate the total annual HICBC based on weekly Child Benefit received multiplied by number of weeks, then apply the percentage charge.
              </li>
            </ul>
            HICBC liability assessment shows you exactly what you&apos;ll pay.
          </li>
          <li>
            <strong>Pay vs. opt-out analysis</strong> — We help you decide whether to pay HICBC or opt out:
            <ul>
              <li>
                <strong>Pay HICBC option</strong> — Continue receiving Child Benefit and pay the tax charge through Self Assessment. This maintains automatic payments but requires Self Assessment registration and payment.
              </li>
              <li>
                <strong>Opt-out option</strong> — Claim Child Benefit (to protect National Insurance record) but choose not to receive payments, avoiding HICBC entirely. This avoids the charge but means no Child Benefit payments received.
              </li>
              <li>
                <strong>National Insurance considerations</strong> — We explain that opting out still allows you to claim Child Benefit to maintain National Insurance credits for state pension purposes.
              </li>
            </ul>
            Pay vs. opt-out analysis helps you make the best decision for your circumstances.
          </li>
          <li>
            <strong>Self Assessment registration and filing</strong> — If you choose to pay HICBC, we handle Self Assessment:
            <ul>
              <li>
                <strong>Registration</strong> — We register you for Self Assessment if you&apos;re not already registered, ensuring you&apos;re registered before the deadline.
              </li>
              <li>
                <strong>Return preparation</strong> — We include HICBC on your Self Assessment return, calculating the charge and including it in your tax liability.
              </li>
              <li>
                <strong>Filing deadline</strong> — We file your return by 31 January following the end of the tax year, ensuring HICBC is paid on time.
              </li>
              <li>
                <strong>Payment</strong> — We ensure HICBC is paid by 31 January, avoiding late payment interest and penalties.
              </li>
            </ul>
            Self Assessment registration and filing ensures compliance and avoids penalties.
          </li>
          <li>
            <strong>Ongoing support and reviews</strong> — We provide ongoing support:
            <ul>
              <li>
                <strong>Annual reviews</strong> — We review your income and Child Benefit situation annually to ensure HICBC is calculated correctly.
              </li>
              <li>
                <strong>Threshold monitoring</strong> — We monitor if your income crosses thresholds, triggering HICBC liability or changes in charge amount.
              </li>
              <li>
                <strong>Opt-out changes</strong> — If you want to change from paying to opting out (or vice versa), we guide you through the process.
              </li>
              <li>
                <strong>HMRC correspondence</strong> — We help with any HMRC letters or enquiries about HICBC.
              </li>
            </ul>
            Ongoing support ensures you stay compliant as circumstances change.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What Child Benefit HICBC support includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Adjusted net income calculation for HICBC purposes</li>
            <li>HICBC liability assessment and calculation</li>
            <li>Advice on whether to pay HICBC or opt out of Child Benefit payments</li>
            <li>Self Assessment registration (if needed)</li>
            <li>HICBC inclusion on Self Assessment returns</li>
            <li>Payment coordination and deadline management</li>
            <li>Annual reviews and ongoing compliance support</li>
          </ul>
        </div>

        <p>
          We handle all aspects of Child Benefit HICBC support, from initial assessment to ongoing compliance. The key is understanding your liability, making informed decisions about paying or opting out, and ensuring you stay compliant with Self Assessment requirements.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Complexity of income</strong> — Simple employment income vs. multiple income sources (employment, self-employment, investments, rental) increases complexity.
          </li>
          <li>
            <strong>Self Assessment requirements</strong> — If you already file Self Assessment, adding HICBC is simpler than registering for the first time.
          </li>
          <li>
            <strong>Number of partners</strong> — Single parents vs. couples where both partners need income calculations.
          </li>
          <li>
            <strong>Ongoing support needs</strong> — One-off assessment vs. annual reviews and ongoing compliance.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>One-off HICBC assessment and calculation:</strong> £100–£250 (includes adjusted net income calculation, HICBC calculation, and pay vs. opt-out advice)
          </li>
          <li>
            <strong>HICBC Self Assessment inclusion (if already filing):</strong> £50–£150 (adding HICBC to existing Self Assessment return)
          </li>
          <li>
            <strong>Full Self Assessment including HICBC (new registration):</strong> £200–£500 (registration, return preparation, HICBC calculation, and filing)
          </li>
          <li>
            <strong>Annual HICBC review and compliance:</strong> £150–£300 per year (includes annual income review, HICBC calculation, and return filing)
          </li>
        </ul>

        <p>
          <strong>Why Child Benefit HICBC support costs what it does:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding HICBC rules, adjusted net income calculations, and Self Assessment requirements requires specialist knowledge.
          </li>
          <li>
            <strong>Calculation complexity</strong> — Calculating adjusted net income (excluding pension contributions, Gift Aid) and applying HICBC rates requires careful calculation.
          </li>
          <li>
            <strong>Administrative time</strong> — Registering for Self Assessment, preparing returns, and coordinating payments takes time.
          </li>
          <li>
            <strong>Compliance risk</strong> — Ensuring HICBC is calculated and paid correctly protects you from HMRC penalties and interest charges.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> One-off HICBC assessments typically take 1–2 weeks after we receive your income information. Self Assessment registration takes 1–2 weeks (HMRC processing time). Return preparation and filing typically takes 2–4 weeks after we receive all information, with returns filed by 31 January following the end of the tax year. HICBC payment is due by 31 January following the end of the tax year.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced on completion of assessment or return preparation. For annual retainer services, invoiced annually or quarterly depending on arrangement.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes adjusted net income calculation, HICBC calculation, pay vs. opt-out advice, Self Assessment registration (if needed), return preparation and filing, and payment coordination. Annual reviews may be additional depending on your needs.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For parents in Kent, whether you&apos;re a high-earning parent in Medway receiving Child Benefit, a couple in Maidstone where one partner earns over the threshold, or a parent in Canterbury unsure whether HICBC applies, understanding and managing HICBC can save you from unexpected tax bills and penalties. Many Kent parents don&apos;t realise they need to pay HICBC until they get a letter from HMRC, or they struggle with working out adjusted net income and deciding whether to pay or opt out. We help local parents understand their HICBC liability, calculate it correctly, and either pay it through Self Assessment or opt out strategically, ensuring they make informed decisions that work for their circumstances. It&apos;s worth getting it right—HICBC can be thousands of pounds per year, and missing Self Assessment registration can result in penalties.
        </p>

        <p>
          <strong>Common Kent HICBC scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>High-earning employees</strong> — Employees earning over £60,000 receiving Child Benefit, needing to register for Self Assessment and pay HICBC.
          </li>
          <li>
            <strong>Self-employed parents</strong> — Self-employed individuals with income over thresholds, needing HICBC calculated and included on Self Assessment returns.
          </li>
          <li>
            <strong>Couples with varying incomes</strong> — Couples where one partner earns over the threshold and the other doesn&apos;t, needing to determine who&apos;s liable for the charge.
          </li>
          <li>
            <strong>Parents considering opting out</strong> — Parents wanting to understand whether to pay HICBC or opt out of Child Benefit payments while maintaining National Insurance credits.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent parents are dealing with. HICBC assessment, adjusted net income calculation, Self Assessment registration, pay vs. opt-out advice—we&apos;ll handle your Child Benefit HICBC support that keeps you compliant and helps you make informed decisions.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Child Benefit HICBC Support - Frequently Asked Questions"
          subtitle="Common questions about HICBC, adjusted net income, and payment options"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Self Assessment returns where HICBC is included and paid
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning including strategies to manage adjusted net income for HICBC purposes
            </li>
            <li>
              <Link href="/services/tax/high-earner-tax-planning/">High Earner Tax Planning</Link> — Tax planning for high earners including HICBC considerations
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with Child Benefit HICBC?" description="Don't get caught out by unexpected tax bills. We'll help you understand if HICBC applies, calculate it correctly, and either pay it through Self Assessment or opt out strategically to avoid the charge. No missed deadlines, no unexpected charges—just proper HICBC compliance that keeps you protected." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with Child Benefit HICBC?" />
    </>
  );
}

