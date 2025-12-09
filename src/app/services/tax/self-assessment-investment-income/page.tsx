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
  title: 'Self-Assessment for Investment Income Services in Kent | File Easy Accountancy',
  description: 'Expert Self-Assessment for investment income in Kent. Investment income tax returns, dividend tax Self Assessment, savings interest tax UK, investment income tax. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/self-assessment-investment-income/',
  },
  openGraph: {
    title: 'Self-Assessment for Investment Income Services in Kent | File Easy Accountancy',
    description: 'Expert Self-Assessment for investment income in Kent. Investment income tax returns, dividend tax Self Assessment, savings interest tax UK, investment income tax.',
    url: 'https://fileeasyaccountancy.co.uk/services/self-assessment-investment-income/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Do I need to declare investment income on Self Assessment?',
    answer: 'You need to declare investment income on Self Assessment if: your dividend income exceeds £10,000, you have untaxed savings interest that needs reporting, you\'ve made capital gains above the CGT allowance (£3,000 for 2024/25), or you\'re already registered for Self Assessment for other reasons. Investment income includes dividends from shares, interest from savings accounts, and capital gains from selling investments. However, investment income within ISAs is tax-free and doesn\'t need to be reported. If you\'re unsure whether you need to file, an accountant can help you determine your obligations based on your investment income.',
  },
  {
    question: 'How do I report investment income on my tax return?',
    answer: 'You report investment income on your Self Assessment tax return (SA100) in the relevant sections: dividend income is reported in the dividend section, savings interest is reported in the savings income section, and capital gains are reported using supplementary pages SA108 (Capital Gains Tax summary). You\'ll need to provide details of all investment income sources, amounts received, and any tax already deducted. If you have capital gains, you\'ll need to calculate gains (sale price minus purchase price) and apply the CGT allowance. An accountant can help you complete the return correctly, ensuring all income is reported and tax is calculated accurately.',
  },
  {
    question: 'What is the dividend tax allowance?',
    answer: 'The dividend tax allowance is £1,000 per year (tax-free), which means the first £1,000 of dividend income is tax-free. After the allowance, dividends are taxed at 8.75% (basic rate), 33.75% (higher rate), or 39.35% (additional rate) depending on your Income Tax band. Combined with your Personal Allowance (£12,570), this means you can earn up to £14,570 in dividends with no tax if you have no other income. The dividend allowance applies per person, so if you\'re married and both receive dividends, you each get £1,000. Dividends still count towards your Income Tax band calculation even if they\'re within the allowance, which can affect your tax rate on other income.',
  },
  {
    question: 'How much tax do I pay on investment income?',
    answer: 'Tax on investment income depends on the type of income and your Income Tax band. Dividend tax is 8.75% (basic rate), 33.75% (higher rate), or 39.35% (additional rate) after the £1,000 Dividend Allowance. Savings interest is taxed at normal Income Tax rates (20%, 40%, or 45%) after your Personal Allowance (£12,570). Capital Gains Tax is 10% or 20% (or 18% or 24% for residential property) on gains above the £3,000 annual allowance, depending on your Income Tax band. Your total income (employment, self-employment, investments) determines your tax band, which then determines the rates you pay. An accountant can help you calculate exactly how much tax you\'ll pay based on all your income sources.',
  },
  {
    question: 'Do I need to pay tax on savings interest?',
    answer: 'Whether you need to pay tax on savings interest depends on your total income and tax allowances. If your total income (including savings interest) is below your Personal Allowance (£12,570), you won\'t pay tax on savings interest. If your income exceeds the Personal Allowance, you\'ll pay tax on savings interest at your Income Tax rate (20%, 40%, or 45%). Some savings income may be within the starting rate for savings, which provides additional tax-free allowance for savings interest if your other income is low. You must report savings interest on Self Assessment if it needs to be declared, even if no tax is due. An accountant can help you determine if you need to pay tax on your savings interest.',
  },
  {
    question: 'When do I need to file Self Assessment for investment income?',
    answer: 'You need to register for Self Assessment by 5 October following the end of the tax year (6 April to 5 April) if you have investment income that needs reporting. Your Self Assessment return must be filed by 31 January following the end of the tax year (or 31 October for paper returns). For example, for the 2024/25 tax year, registration deadline is 5 October 2025, and filing deadline is 31 January 2026. Tax is also due by 31 January. If you miss the registration deadline, you may face late registration penalties, and if you miss the filing deadline, you\'ll face late filing penalties (£100 plus additional penalties for continued delays). It\'s important to register and file on time.',
  },
  {
    question: 'Is investment income in ISAs taxable?',
    answer: 'No, investment income in ISAs is completely tax-free and doesn\'t need to be reported on Self Assessment. Income from ISAs (including dividends, interest, and capital gains) is exempt from Income Tax and Capital Gains Tax, and you don\'t need to declare it on your tax return. The ISA allowance is £20,000 per year, meaning you can invest up to £20,000 into ISAs each tax year and receive tax-free returns. This makes ISAs an attractive option for tax-efficient investing. If you have investment income outside ISAs, that\'s what needs to be reported on Self Assessment. An accountant can help you understand which investment income is taxable and which is tax-free.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Self-Assessment for Investment Income', href: '/services/tax/self-assessment-investment-income' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function SelfAssessmentInvestmentIncomePage() {
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
            serviceType: 'Self-Assessment for Investment Income',
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
            description: 'Expert Self-Assessment for investment income in Kent. Investment income tax returns, dividend tax Self Assessment, savings interest tax UK, investment income tax.',
            name: 'Self-Assessment for Investment Income',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/self-assessment-investment-income/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Self-Assessment Investment Income Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Investment Income Review' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Self Assessment Registration' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Return Preparation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Calculation' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Self-Assessment for Investment Income"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you receive income from investments—whether it&apos;s dividends from shares, interest from savings accounts, or profits from selling investments—you might need to declare it on a Self Assessment tax return. You must file a Self Assessment tax return if you have untaxed investment income (dividends, savings interest, capital gains) that exceeds certain thresholds, with dividend income over £10,000 requiring Self Assessment filing (
          <a href="https://www.gov.uk/self-assessment-tax-returns" target="_blank" rel="noopener noreferrer">
            gov.uk Self Assessment
          </a>
          ). Investment income is taxed at different rates: dividends are taxed at 8.75% (basic rate), 33.75% (higher rate), or 39.35% (additional rate) after the dividend allowance of £1,000, while savings interest is taxed at normal Income Tax rates (
          <a href="https://www.gov.uk/tax-on-dividends" target="_blank" rel="noopener noreferrer">
            gov.uk tax on dividends
          </a>
          ). You receive a Dividend Allowance of £1,000 per year (tax-free) and a Personal Allowance of £12,570, meaning you can earn up to £14,570 in dividends with no tax if you have no other income.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>You must file Self Assessment if dividend income exceeds £10,000</strong> — Higher dividend income requires Self Assessment registration and filing to report and pay tax on dividends
            </li>
            <li>
              <strong>Dividend allowance is £1,000 per year (tax-free)</strong> — After the allowance, dividends are taxed at 8.75% (basic rate), 33.75% (higher rate), or 39.35% (additional rate) depending on your Income Tax band
            </li>
            <li>
              <strong>Capital Gains Tax applies when you sell investments at a profit</strong> — With an annual CGT allowance of £3,000 (2024/25), gains above this threshold must be reported on Self Assessment using form SA108 (
              <a href="https://www.gov.uk/capital-gains-tax" target="_blank" rel="noopener noreferrer">
                gov.uk Capital Gains Tax
              </a>
              )
            </li>
            <li>
              <strong>Investment income within ISAs is completely tax-free</strong> — Income from ISAs doesn&apos;t need to be reported on Self Assessment, with an ISA allowance of £20,000 per year providing tax-free investment returns
            </li>
          </ul>
        </div>

        <p>
          The problem is most investors don&apos;t realise they need to file Self Assessment until they get a letter from HMRC, or they struggle with understanding what investment income to report, working out tax rates and allowances, knowing when to register, and completing the right forms. That causes problems—missing Self Assessment registration deadlines and penalties, confusion about what income to declare, incorrect tax calculations, and unexpected tax bills at the end of the year.
        </p>

        <p>
          We handle Self-Assessment for investment income for investors across Kent: investment income review (identifying all your investment income sources including dividends, savings interest, and capital gains), Self Assessment registration (registering you for Self Assessment if needed, ensuring registration by 5 October following the end of the tax year), tax return preparation (completing SA100 main return and SA108 capital gains pages if needed, reporting all investment income correctly), tax calculations (calculating tax due on dividends, savings interest, and capital gains based on your Income Tax band and allowances), allowance optimisation (ensuring you use Personal Allowance, Dividend Allowance, and CGT allowance effectively), and deadline management (filing returns by 31 January deadline and ensuring tax is paid on time). Whether you&apos;re an investor in Medway receiving share dividends, a saver in Maidstone earning interest income, or someone in Canterbury selling investments with capital gains, we&apos;ll handle your Self Assessment for investment income that works. No missed deadlines, no tax confusion—just proper investment income reporting that keeps you compliant.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Understand what investment income to report</strong> — We&apos;ll help you identify all investment income that needs declaring, from dividends and savings interest to capital gains. Understanding your obligations helps you stay compliant.
          </li>
          <li>
            <strong>Register for Self Assessment correctly</strong> — We&apos;ll ensure you register for Self Assessment if needed, meeting the 5 October deadline to avoid late registration penalties. Correct registration protects you from penalties.
          </li>
          <li>
            <strong>Calculate tax accurately</strong> — We&apos;ll work out exactly how much tax you owe on dividends, savings interest, and capital gains, using the right allowances and tax rates. Accurate calculations prevent overpayments or underpayments.
          </li>
          <li>
            <strong>Maximise your allowances</strong> — We&apos;ll ensure you use Personal Allowance (£12,570), Dividend Allowance (£1,000), and CGT allowance (£3,000) effectively to minimise tax. Maximising allowances saves you money.
          </li>
          <li>
            <strong>File returns on time</strong> — We&apos;ll ensure your Self Assessment return is filed by 31 January deadline, avoiding late filing penalties. Timely filing protects you from penalties.
          </li>
          <li>
            <strong>Simplify complex investment income</strong> — We&apos;ll handle the paperwork and calculations, so you don&apos;t have to worry about forms, deadlines, or tax rates. Simplifying the process saves you time and stress.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for Self-Assessment for investment income:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your investments: what types of investments you have (shares, savings accounts, investment funds, etc.), how much income you receive from dividends, how much interest you earn from savings, whether you&apos;ve sold any investments during the tax year, whether you&apos;re already registered for Self Assessment, and what you want to achieve. Understanding your situation helps us determine what needs reporting.
          </li>
          <li>
            <strong>Investment income identification</strong> — We identify all investment income that needs reporting:
            <ul>
              <li>
                <strong>Dividend income</strong> — Dividends from shares, investment funds, and other investments (excluding ISAs which are tax-free).
              </li>
              <li>
                <strong>Savings interest</strong> — Interest from savings accounts, bonds, and other interest-bearing investments (excluding ISAs).
              </li>
              <li>
                <strong>Capital gains</strong> — Profits from selling investments (shares, property investments, etc.) after deducting purchase price and CGT allowance.
              </li>
              <li>
                <strong>Other investment income</strong> — Any other investment-related income that&apos;s taxable.
              </li>
            </ul>
            Investment income identification ensures nothing is missed.
          </li>
          <li>
            <strong>Self Assessment registration (if needed)</strong> — If you&apos;re not already registered, we register you for Self Assessment:
            <ul>
              <li>
                <strong>Registration requirements</strong> — We provide your National Insurance number, contact details, and other required information to HMRC.
              </li>
              <li>
                <strong>Registration deadline</strong> — We ensure registration by 5 October following the end of the tax year to avoid late registration penalties.
              </li>
              <li>
                <strong>UTR allocation</strong> — HMRC will allocate a Unique Taxpayer Reference (UTR) which is needed for filing returns.
              </li>
            </ul>
            Self Assessment registration ensures you can file returns and access HMRC online services.
          </li>
          <li>
            <strong>Tax calculation</strong> — We calculate tax due on your investment income:
            <ul>
              <li>
                <strong>Dividend tax</strong> — Dividends are taxed at 8.75% (basic rate), 33.75% (higher rate), or 39.35% (additional rate) after the £1,000 Dividend Allowance, based on your total income (other income plus dividends).
              </li>
              <li>
                <strong>Savings interest tax</strong> — Savings interest is taxed at normal Income Tax rates (20%, 40%, or 45%) after Personal Allowance, with some savings income potentially within the starting rate for savings.
              </li>
              <li>
                <strong>Capital gains tax</strong> — CGT is charged on gains above the £3,000 annual allowance (2024/25), at 10% or 20% (or 18% or 24% for residential property) depending on your Income Tax band.
              </li>
              <li>
                <strong>Allowance application</strong> — We ensure Personal Allowance, Dividend Allowance, and CGT allowance are applied correctly to minimise tax.
              </li>
            </ul>
            Tax calculation ensures accurate tax liability.
          </li>
          <li>
            <strong>Return preparation and filing</strong> — We prepare and file your Self Assessment return:
            <ul>
              <li>
                <strong>SA100 main return</strong> — We complete the main Self Assessment form (SA100), declaring all investment income in the relevant sections.
              </li>
              <li>
                <strong>SA108 capital gains pages</strong> — If you have capital gains to report, we complete supplementary pages SA108 (Capital Gains Tax summary).
              </li>
              <li>
                <strong>Other supplementary pages</strong> — We complete any other relevant supplementary pages if needed (e.g., SA102 for employment income if applicable).
              </li>
              <li>
                <strong>Filing deadline</strong> — We file your return online by 31 January following the end of the tax year (or 31 October for paper returns).
              </li>
            </ul>
            Return preparation and filing ensures compliance and accurate reporting.
          </li>
          <li>
            <strong>Tax payment coordination</strong> — We coordinate tax payments:
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
            </ul>
            Tax payment coordination ensures tax is paid on time, avoiding interest and penalties.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What Self-Assessment for investment income includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Review of all investment income sources (dividends, savings interest, capital gains)</li>
            <li>Self Assessment registration (if needed)</li>
            <li>Tax calculation on dividends, savings interest, and capital gains</li>
            <li>Completion of SA100 main return and SA108 capital gains pages</li>
            <li>Application of Personal Allowance, Dividend Allowance, and CGT allowance</li>
            <li>Filing of Self Assessment return by deadline</li>
            <li>Tax payment coordination and deadline management</li>
          </ul>
        </div>

        <p>
          We handle all aspects of Self-Assessment for investment income, from identification to filing. The key is understanding what needs reporting, calculating tax correctly, and ensuring returns are filed and tax is paid on time.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Volume of investment income</strong> — Higher volumes of dividends, savings interest, or capital gains increase complexity.
          </li>
          <li>
            <strong>Number of income sources</strong> — Multiple investment sources (different shares, savings accounts, investment funds) require more tracking and reporting.
          </li>
          <li>
            <strong>Capital gains complexity</strong> — Multiple investment disposals, calculations of purchase prices, and CGT allowance applications increase complexity.
          </li>
          <li>
            <strong>Self Assessment registration</strong> — New registration vs. existing Self Assessment filing (adding investment income to existing return).
          </li>
          <li>
            <strong>Supplementary pages needed</strong> — SA108 capital gains pages and other supplementary pages add to complexity.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple investment income return (dividends or savings interest only, minimal income):</strong> £150–£400 (if already filing Self Assessment)
          </li>
          <li>
            <strong>Standard investment income return (multiple income sources, moderate income):</strong> £250–£600 (including capital gains if applicable)
          </li>
          <li>
            <strong>Complex investment income return (high volumes, multiple sources, complex capital gains):</strong> £400–£1,000+ (including detailed capital gains calculations)
          </li>
          <li>
            <strong>Self Assessment registration (one-off, if not already registered):</strong> £50–£150
          </li>
          <li>
            <strong>Annual investment income review and return filing:</strong> £300–£800 per year
          </li>
        </ul>

        <p>
          <strong>Why Self-Assessment for investment income costs what it does:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding investment income tax rules, dividend tax rates, CGT calculations, and Self Assessment requirements requires specialist knowledge.
          </li>
          <li>
            <strong>Calculation complexity</strong> — Calculating tax on dividends, savings interest, and capital gains, applying allowances correctly, and determining tax bands requires careful calculation.
          </li>
          <li>
            <strong>Administrative time</strong> — Preparing returns, completing supplementary pages, and coordinating payments takes time.
          </li>
          <li>
            <strong>Compliance risk</strong> — Ensuring accurate reporting protects you from HMRC enquiries, penalties, and interest charges.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Self Assessment registration typically takes 1–2 weeks after HMRC processes the application. Return preparation typically takes 2–4 weeks after we receive all investment income information, depending on complexity. Returns must be filed by 31 January following the end of the tax year (or 31 October for paper returns). Tax is due by 31 January following the end of the tax year.
        </p>

        <p>
          <strong>Payment:</strong> Tax on investment income is due by 31 January following the end of the tax year. If your tax bill is over £1,000, you may need to make Payments on Account.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes investment income review, tax calculation, return preparation (SA100 and SA108 if needed), filing, and payment coordination. Self Assessment registration may be additional if you&apos;re not already registered.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For investors in Kent, whether you&apos;re receiving share dividends in Medway, earning savings interest in Maidstone, or selling investments with capital gains in Canterbury, Self Assessment for investment income ensures you stay compliant with tax obligations. Many Kent investors don&apos;t realise they need to file Self Assessment until they get a letter from HMRC, or they struggle with understanding what income to report and how to calculate tax correctly. We help local investors identify their investment income, register for Self Assessment if needed, calculate tax accurately, and file returns on time, ensuring they stay compliant while maximising allowances. It&apos;s worth getting it right—missing Self Assessment registration can result in penalties, and incorrect tax calculations can lead to overpayments or underpayments.
        </p>

        <p>
          <strong>Common Kent investment income scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Share investors</strong> — Investors receiving dividends from UK and overseas shares, needing to report dividend income and calculate dividend tax.
          </li>
          <li>
            <strong>Savings account holders</strong> — Savers earning interest from multiple savings accounts, needing to report interest income and calculate tax.
          </li>
          <li>
            <strong>Investment fund investors</strong> — Investors in investment funds receiving dividends and capital gains, needing to report both types of income.
          </li>
          <li>
            <strong>Property investors</strong> — Property investors selling investment properties with capital gains, needing to report CGT on disposals.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent investors are dealing with. Investment income review, Self Assessment registration, tax calculation, return filing—we&apos;ll handle your Self Assessment for investment income that keeps you compliant and maximises your allowances.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Self-Assessment for Investment Income - Frequently Asked Questions"
          subtitle="Common questions about investment income reporting, dividend tax, and Self Assessment requirements"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — General Self Assessment returns (investment income can be included in these)
            </li>
            <li>
              <Link href="/services/tax/capital-gains-tax-returns/">Capital Gains Tax Returns</Link> — CGT returns for investment disposals (capital gains from investments)
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning including strategies to minimise tax on investment income
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with Self Assessment for investment income?" description="Don't get caught out by unexpected tax bills. We'll help you identify what investment income to report, calculate tax accurately, and file returns on time so you stay compliant while maximising your allowances. No missed deadlines, no tax confusion—just proper investment income reporting that keeps you compliant." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with Self Assessment for investment income?" />
    </>
  );
}

