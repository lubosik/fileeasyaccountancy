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
  title: 'Self-Assessment for Uber & Gig Economy Services in Kent | File Easy Accountancy',
  description: 'Expert Self-Assessment for Uber drivers and gig economy workers in Kent. Uber driver tax UK, gig economy tax returns, uber driver Self Assessment, delivery driver tax. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/self-assessment-uber-gig-economy/',
  },
  openGraph: {
    title: 'Self-Assessment for Uber & Gig Economy Services in Kent | File Easy Accountancy',
    description: 'Expert Self-Assessment for Uber drivers and gig economy workers in Kent. Uber driver tax UK, gig economy tax returns, uber driver Self Assessment, delivery driver tax.',
    url: 'https://fileeasyaccountancy.co.uk/services/self-assessment-uber-gig-economy/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Do Uber drivers need to file Self Assessment?',
    answer: 'Yes, Uber drivers need to file Self Assessment if their gross self-employment income exceeds £1,000 per tax year. Uber drivers are classified as self-employed, which means they must register for Self Assessment and file tax returns every year. You must register by 5 October in your second tax year of self-employment, and file returns by 31 January following the end of the tax year. Failure to register and file can result in penalties. From January 2024, Uber and other platforms report driver income directly to HMRC, so accurate reporting is essential to avoid discrepancies and enquiries.',
  },
  {
    question: 'How do Uber drivers pay tax?',
    answer: 'Uber drivers pay tax through Self Assessment. As self-employed individuals, they must: register for Self Assessment (by 5 October in their second tax year), track all income from Uber and other platforms, claim allowable business expenses (fuel, vehicle maintenance, insurance, phone bills, etc.), complete and file Self Assessment returns (by 31 January following the end of the tax year), and pay Income Tax and National Insurance on net profit (income minus expenses). Tax is due by 31 January following the end of the tax year. Drivers have a £1,000 tax-free allowance on self-employment income, with only earnings above this threshold requiring tax.',
  },
  {
    question: 'What expenses can Uber drivers claim?',
    answer: 'Uber drivers can claim allowable business expenses that are wholly and exclusively for business purposes. Common expenses include: fuel costs (petrol or diesel for business journeys), vehicle maintenance and repairs (servicing, repairs, MOTs, tyres), vehicle insurance (premiums for vehicle insurance), license fees (costs of obtaining and renewing taxi or private hire licenses), phone bills (proportion of mobile phone costs used for business), parking and tolls (parking fees and toll charges during business operations), and other business costs (cleaning products, vehicle accessories, protective equipment). For vehicle purchases, drivers can claim capital allowances (Annual Investment Allowance or Writing Down Allowance) instead of expensing the full cost. Claiming all allowable expenses reduces taxable income and saves money on tax.',
  },
  {
    question: 'Do gig economy workers need Self Assessment?',
    answer: 'Yes, gig economy workers need Self Assessment if their gross self-employment income exceeds £1,000 per tax year. Gig economy workers (Uber drivers, food delivery drivers, Amazon Flex drivers, etc.) are classified as self-employed, which means they must register for Self Assessment and file tax returns. You must register by 5 October in your second tax year of self-employment, and file returns by 31 January following the end of the tax year. From January 2024, digital platforms report worker income directly to HMRC, making accurate reporting even more important. An accountant can help you register, track income, claim expenses, and file returns correctly.',
  },
  {
    question: 'How much tax do Uber drivers pay?',
    answer: 'Uber drivers pay Income Tax and National Insurance on their net profit (income minus allowable expenses). Income Tax rates are: 20% (basic rate) on profits between £1,001 and £50,270, 40% (higher rate) on profits between £50,271 and £125,140, and 45% (additional rate) on profits above £125,140. You also pay Class 2 National Insurance (£3.45 per week if profits are above £6,515) and Class 4 National Insurance (9% on profits between £12,570 and £50,270, and 2% on profits above £50,270). The exact amount depends on your total income, expenses claimed, and tax allowances. Drivers have a £1,000 tax-free allowance, so only earnings above this threshold are taxable.',
  },
  {
    question: 'What is the tax-free allowance for self-employed drivers?',
    answer: 'Self-employed drivers have a £1,000 tax-free allowance on self-employment income. This means the first £1,000 of self-employment income is tax-free, and only earnings above this threshold require Self Assessment registration and Income Tax. The allowance is separate from your Personal Allowance (£12,570), which applies to your total income from all sources. So if you only do gig economy work with no other income, you could earn up to £1,000 without needing to register for Self Assessment or pay tax. However, you still need to register if your income exceeds £1,000, even if your total income (after expenses) means you don\'t pay tax.',
  },
  {
    question: 'Do platforms report my income to HMRC?',
    answer: 'Yes, from January 2024, digital platforms like Uber, Deliveroo, and Just Eat are required to record and report worker income directly to HMRC. This means HMRC receives information about your earnings from platforms automatically. It\'s essential to ensure your Self Assessment returns match what platforms report, as discrepancies can trigger HMRC enquiries. This makes accurate record-keeping and truthful tax returns even more important—you can\'t hide income that platforms have already reported. An accountant can help ensure your returns are accurate and match platform reporting, protecting you from HMRC issues.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Self-Assessment for Uber & Gig Economy', href: '/services/tax/self-assessment-uber-gig-economy' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function SelfAssessmentUberGigEconomyPage() {
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
            serviceType: 'Self-Assessment for Uber & Gig Economy',
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
            description: 'Expert Self-Assessment for Uber drivers and gig economy workers in Kent. Uber driver tax UK, gig economy tax returns, uber driver Self Assessment, delivery driver tax.',
            name: 'Self-Assessment for Uber & Gig Economy',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/self-assessment-uber-gig-economy/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Self-Assessment Gig Economy Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Self Assessment Registration' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Income Tracking and Reporting' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Expense Claims' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Return Preparation' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Self-Assessment for Uber & Gig Economy"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re driving for Uber, delivering food, or doing any other gig economy work, you&apos;re classified as self-employed—which means you need to register for Self Assessment and file tax returns every year. Uber drivers and gig economy workers in the UK are classified as self-employed and must register for Self Assessment if their gross self-employment income exceeds £1,000 per tax year (
          <a href="https://www.gov.uk/working-for-yourself" target="_blank" rel="noopener noreferrer">
            gov.uk working for yourself
          </a>
          ). Gig economy workers must register for Self Assessment by 5 October in their second tax year of self-employment, with tax returns due by 31 January following the end of the tax year. Self-employed drivers have a £1,000 tax-free allowance on self-employment income, with only earnings above this threshold requiring Self Assessment registration and Income Tax.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>You must register for Self Assessment if your gig economy income exceeds £1,000 per tax year</strong> — Registration must be completed by 5 October in your second tax year of self-employment, with HMRC sending you a UTR within 10 days
            </li>
            <li>
              <strong>You can claim allowable business expenses</strong> — Fuel costs, vehicle maintenance, insurance, license fees, phone bills, and parking reduce your taxable income and tax liability
            </li>
            <li>
              <strong>Platform reporting means HMRC knows your income</strong> — From January 2024, digital platforms like Uber report driver income directly to HMRC, making accurate record-keeping and truthful tax returns essential
            </li>
            <li>
              <strong>You pay Income Tax and National Insurance</strong> — Self-employed drivers pay Income Tax on profits above the £1,000 allowance, plus Class 2 and Class 4 National Insurance contributions on profits above certain thresholds
            </li>
          </ul>
        </div>

        <p>
          The problem is most gig economy workers don&apos;t realise they need to register for Self Assessment until they get a letter from HMRC, or they struggle with understanding what expenses they can claim, working out how much tax they owe, knowing when to register, and maintaining proper records. That causes problems—missing Self Assessment registration deadlines and penalties, confusion about allowable expenses, incorrect tax calculations, and unexpected tax bills at the end of the year.
        </p>

        <p>
          We handle Self-Assessment for Uber and gig economy workers across Kent: Self Assessment registration (registering you for Self Assessment if needed, ensuring registration by 5 October deadline), income tracking and reporting (helping you track all income from Uber, delivery apps, and other gig platforms, ensuring everything is reported correctly), expense claims (identifying all allowable business expenses including fuel, vehicle costs, insurance, phone bills, and other business expenses), tax return preparation (completing and filing your Self Assessment return by the 31 January deadline, reporting all income and expenses), tax calculations (calculating Income Tax and National Insurance based on your net profit), and ongoing compliance (annual reviews to ensure returns are filed on time and expenses are maximised). Whether you&apos;re an Uber driver in Medway, a food delivery driver in Maidstone, or doing gig work in Canterbury, we&apos;ll handle your Self Assessment that works. No missed deadlines, no expense confusion—just proper gig economy tax compliance that keeps you protected.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Register for Self Assessment correctly</strong> — We&apos;ll ensure you register for Self Assessment if your income exceeds £1,000, meeting the 5 October deadline to avoid late registration penalties. Correct registration protects you from penalties.
          </li>
          <li>
            <strong>Track all your gig economy income</strong> — We&apos;ll help you identify and track all income from Uber, delivery apps, and other platforms, ensuring everything is reported. Tracking all income ensures accuracy and compliance.
          </li>
          <li>
            <strong>Claim all allowable expenses</strong> — We&apos;ll make sure you claim every legitimate business expense, from fuel and vehicle maintenance to insurance and phone bills. Claiming all expenses reduces your taxable income and saves you money.
          </li>
          <li>
            <strong>File returns on time</strong> — We&apos;ll ensure your Self Assessment return is filed by 31 January deadline, avoiding late filing penalties. Timely filing protects you from penalties.
          </li>
          <li>
            <strong>Minimise your tax bill legally</strong> — We&apos;ll help you claim all allowable expenses and use the £1,000 tax-free allowance effectively. Minimising tax legally saves you money.
          </li>
          <li>
            <strong>Stay compliant with platform reporting</strong> — We&apos;ll ensure your returns match what platforms report to HMRC, avoiding discrepancies and enquiries. Compliance protects you from HMRC issues.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for Self-Assessment for Uber &amp; gig economy:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your gig work: what platforms you work for (Uber, Deliveroo, Just Eat, etc.), how much you earn per week or month, how long you&apos;ve been doing gig work, whether you&apos;ve registered for Self Assessment before, what expenses you&apos;re already tracking, and what you want to achieve. Understanding your situation helps us determine what needs to be done.
          </li>
          <li>
            <strong>Self Assessment registration (if needed)</strong> — If you&apos;re not already registered, we register you for Self Assessment:
            <ul>
              <li>
                <strong>Registration requirements</strong> — You must register if your gross self-employment income exceeds £1,000 per tax year.
              </li>
              <li>
                <strong>Registration deadline</strong> — Registration must be completed by 5 October in your second tax year of self-employment (e.g., if you start in August 2025, register before 5 October 2026).
              </li>
              <li>
                <strong>Government Gateway account</strong> — We help you set up a Government Gateway account and complete self-employment registration.
              </li>
              <li>
                <strong>UTR allocation</strong> — HMRC will send you a Unique Taxpayer Reference (UTR) within 10 days (or 21 days if abroad), which is needed for filing returns.
              </li>
            </ul>
            Self Assessment registration ensures you can file returns and access HMRC online services.
          </li>
          <li>
            <strong>Income tracking and reporting</strong> — We help you track and report all gig economy income:
            <ul>
              <li>
                <strong>Platform income</strong> — Income from Uber, Deliveroo, Just Eat, Amazon Flex, and other gig platforms (usually shown on platform dashboards or weekly/monthly statements).
              </li>
              <li>
                <strong>Multiple platforms</strong> — If you work for multiple platforms, we aggregate all income sources.
              </li>
              <li>
                <strong>Income documentation</strong> — We help you organise platform statements, payment confirmations, and bank statements showing gig income.
              </li>
              <li>
                <strong>Platform reporting</strong> — We ensure your reported income matches what platforms report to HMRC (platforms report driver income directly to HMRC from January 2024).
              </li>
            </ul>
            Income tracking ensures accurate reporting and compliance with platform reporting.
          </li>
          <li>
            <strong>Expense identification and claims</strong> — We identify all allowable business expenses:
            <ul>
              <li>
                <strong>Fuel costs</strong> — Petrol or diesel costs for business journeys (keep fuel receipts or use fuel card statements).
              </li>
              <li>
                <strong>Vehicle maintenance and repairs</strong> — Costs of servicing, repairs, MOTs, tyres, and other vehicle maintenance.
              </li>
              <li>
                <strong>Vehicle insurance</strong> — Insurance premiums for your vehicle used for business.
              </li>
              <li>
                <strong>License fees</strong> — Costs of obtaining and renewing taxi or private hire licenses.
              </li>
              <li>
                <strong>Phone bills</strong> — Proportion of mobile phone costs used for business (receiving jobs, navigation, communication with customers).
              </li>
              <li>
                <strong>Parking and tolls</strong> — Parking fees and toll charges incurred during business operations.
              </li>
              <li>
                <strong>Other expenses</strong> — Cleaning products, vehicle accessories, protective equipment, and other business-related costs.
              </li>
              <li>
                <strong>Capital allowances</strong> — For vehicle purchases, you can claim capital allowances (Annual Investment Allowance or Writing Down Allowance) instead of expensing the full cost.
              </li>
            </ul>
            Expense identification ensures you claim everything you&apos;re entitled to.
          </li>
          <li>
            <strong>Tax return preparation and filing</strong> — We prepare and file your Self Assessment return:
            <ul>
              <li>
                <strong>SA100 main return</strong> — We complete the main Self Assessment form (SA100), declaring all gig economy income.
              </li>
              <li>
                <strong>SA103S self-employment pages</strong> — We complete the self-employment supplementary pages (SA103S), reporting income and expenses.
              </li>
              <li>
                <strong>Tax calculation</strong> — We calculate Income Tax and National Insurance based on your net profit (income minus expenses).
              </li>
              <li>
                <strong>Filing deadline</strong> — We file your return online by 31 January following the end of the tax year (or 31 October for paper returns).
              </li>
            </ul>
            Return preparation and filing ensures compliance and accurate reporting.
          </li>
          <li>
            <strong>Tax payment and ongoing compliance</strong> — We coordinate tax payments and ongoing compliance:
            <ul>
              <li>
                <strong>Payment deadline</strong> — Tax is due by 31 January following the end of the tax year, the same date as the filing deadline.
              </li>
              <li>
                <strong>Payment methods</strong> — We guide you on payment methods (bank transfer, direct debit, cheque) and ensure payment is made on time.
              </li>
              <li>
                <strong>Payment on account</strong> — If your tax bill is over £1,000, we explain Payments on Account (advance payments for next year&apos;s tax) and help you plan for these.
              </li>
              <li>
                <strong>Annual reviews</strong> — We review your gig economy income and expenses annually to ensure ongoing compliance and expense optimisation.
              </li>
            </ul>
            Tax payment and ongoing compliance ensures you stay compliant and minimise tax.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What Self-Assessment for Uber &amp; gig economy includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Self Assessment registration (if needed)</li>
            <li>Income tracking and reporting from all gig platforms</li>
            <li>Expense identification and claims (fuel, vehicle, insurance, phone, etc.)</li>
            <li>Tax return preparation and filing (SA100 and SA103S)</li>
            <li>Income Tax and National Insurance calculation</li>
            <li>Tax payment coordination and deadline management</li>
            <li>Annual reviews and ongoing compliance support</li>
          </ul>
        </div>

        <p>
          We handle all aspects of Self-Assessment for Uber and gig economy workers, from registration to ongoing compliance. The key is tracking all income, claiming all allowable expenses, and ensuring returns are filed and tax is paid on time.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of platforms</strong> — Working for multiple gig platforms (Uber, Deliveroo, Just Eat, etc.) increases complexity.
          </li>
          <li>
            <strong>Volume of income and expenses</strong> — Higher volumes require more tracking and calculation time.
          </li>
          <li>
            <strong>Expense complexity</strong> — Simple expenses (just fuel) vs. complex expenses (vehicle purchase, capital allowances, multiple expense categories).
          </li>
          <li>
            <strong>Self Assessment registration</strong> — New registration vs. existing Self Assessment filing (adding gig income to existing return).
          </li>
          <li>
            <strong>Record keeping quality</strong> — Well-organised records (platform statements, receipts) make the process faster; poor records require more reconstruction time.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple gig economy return (single platform, minimal expenses):</strong> £150–£350 (if already filing Self Assessment)
          </li>
          <li>
            <strong>Standard gig economy return (multiple platforms, moderate expenses):</strong> £250–£500 (including expense claims)
          </li>
          <li>
            <strong>Complex gig economy return (high volume, complex expenses, vehicle capital allowances):</strong> £400–£800+ (including detailed expense analysis)
          </li>
          <li>
            <strong>Self Assessment registration (one-off, if not already registered):</strong> £50–£150
          </li>
          <li>
            <strong>Annual gig economy return and compliance:</strong> £300–£600 per year
          </li>
        </ul>

        <p>
          <strong>Why Self-Assessment for Uber &amp; gig economy costs what it does:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding gig economy tax rules, allowable expenses, capital allowances, and Self Assessment requirements requires specialist knowledge.
          </li>
          <li>
            <strong>Income tracking complexity</strong> — Tracking income from multiple platforms and ensuring it matches platform reporting to HMRC requires careful attention.
          </li>
          <li>
            <strong>Expense analysis</strong> — Identifying and quantifying allowable expenses (especially vehicle expenses and capital allowances) requires detailed analysis.
          </li>
          <li>
            <strong>Compliance risk</strong> — Ensuring accurate reporting protects you from HMRC enquiries and penalties, especially with platform reporting now in place.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Self Assessment registration typically takes 1–2 weeks after HMRC processes the application. Return preparation typically takes 2–4 weeks after we receive all income and expense information, depending on complexity. Returns must be filed by 31 January following the end of the tax year (or 31 October for paper returns). Tax is due by 31 January following the end of the tax year.
        </p>

        <p>
          <strong>Payment:</strong> Tax on gig economy income is due by 31 January following the end of the tax year. If your tax bill is over £1,000, you may need to make Payments on Account.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes Self Assessment registration (if needed), income tracking support, expense identification, return preparation (SA100 and SA103S), filing, and payment coordination. Annual reviews may be additional depending on your needs.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For gig economy workers in Kent, whether you&apos;re an Uber driver in Medway, a food delivery driver in Maidstone, or doing delivery work in Canterbury, Self Assessment for gig economy income ensures you stay compliant with tax obligations. Many Kent gig workers don&apos;t realise they need to register for Self Assessment until they get a letter from HMRC, or they struggle with understanding what expenses they can claim and how to track income from multiple platforms. We help local gig workers register correctly, track all income, claim all allowable expenses, and file returns on time, ensuring they stay compliant while minimising tax. It&apos;s worth getting it right—missing Self Assessment registration can result in penalties, and platform reporting means HMRC already knows your income, so accurate reporting is essential.
        </p>

        <p>
          <strong>Common Kent gig economy scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Uber drivers</strong> — Private hire drivers working for Uber and other ride-hailing platforms, needing to report income and claim vehicle expenses.
          </li>
          <li>
            <strong>Food delivery drivers</strong> — Drivers working for Deliveroo, Just Eat, Uber Eats, and other food delivery platforms, needing to track income and expenses.
          </li>
          <li>
            <strong>Multi-platform workers</strong> — Gig workers working for multiple platforms simultaneously, needing to aggregate income and expenses.
          </li>
          <li>
            <strong>Part-time gig workers</strong> — Workers combining gig economy income with employment or other self-employment, needing to report all income sources.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent gig workers are dealing with. Self Assessment registration, income tracking, expense claims, return filing—we&apos;ll handle your Self Assessment for gig economy income that keeps you compliant and minimises your tax bill.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Self-Assessment for Uber & Gig Economy - Frequently Asked Questions"
          subtitle="Common questions about gig economy tax obligations, Self Assessment, and expense claims"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — General Self Assessment returns (gig economy income is reported as self-employment)
            </li>
            <li>
              <Link href="/services/bookkeeping/business-expense-categorisation-tracking/">Business Expense Categorisation & Tracking</Link> — Proper expense tracking for gig economy expense claims
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning including strategies to minimise tax on gig economy income
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with Self Assessment for gig economy work?" description="Don't get caught out by unexpected tax bills. We'll help you register for Self Assessment, track all your gig income, claim all allowable expenses, and file returns on time so you stay compliant while minimising your tax bill. No missed deadlines, no expense confusion—just proper gig economy tax compliance that keeps you protected." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with Self Assessment for gig economy work?" />
    </>
  );
}

