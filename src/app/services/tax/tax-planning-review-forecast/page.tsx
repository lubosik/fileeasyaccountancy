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
  title: 'Tax Planning Review & Forecast Services in Kent | File Easy Accountancy',
  description: 'Expert tax planning review and tax forecasting services in Kent. Tax planning review, tax forecasting, tax year end planning, tax planning strategies UK. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/tax-planning-review-forecast/',
  },
  openGraph: {
    title: 'Tax Planning Review & Forecast Services in Kent | File Easy Accountancy',
    description: 'Expert tax planning review and tax forecasting services in Kent. Tax planning review, tax forecasting, tax year end planning, tax planning strategies UK.',
    url: 'https://fileeasyaccountancy.co.uk/services/tax-planning-review-forecast/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is tax planning review?',
    answer: 'Tax planning review involves assessing your current tax position, identifying opportunities to reduce tax legally and ethically, and forecasting future tax liabilities to help you plan and budget effectively. A tax planning review typically includes reviewing your income, expenses, allowances, and reliefs to understand where you stand now, calculating estimated tax liability for the current tax year, identifying legitimate opportunities to reduce tax through allowances, reliefs, and strategic planning, and forecasting tax liability for future tax years. It\'s worth getting a tax planning review regularly (quarterly or bi-annually) to stay on top of your tax situation and avoid surprises.',
  },
  {
    question: 'How do I forecast my tax liability?',
    answer: 'To forecast your tax liability, you need to: estimate your total income for the tax year (employment, self-employment, rental, dividends, etc.), estimate your allowable expenses and deductions, calculate your taxable income after allowances and reliefs, apply appropriate tax rates (20%, 40%, 45% for Income Tax, plus National Insurance if applicable), and account for any tax already paid (PAYE, payments on account). Tax forecasting can be complex, especially with multiple income sources and changing circumstances, so it\'s worth getting professional help to ensure forecasts are accurate. Professional tax forecasting also includes scenario analysis (showing how different decisions affect tax liability) and payment planning (helping you plan when tax is due).',
  },
  {
    question: 'When should I do tax planning?',
    answer: 'Tax planning should be done throughout the year, not just at year-end. Regular tax planning (quarterly or bi-annually) helps you stay on top of your tax situation, identify opportunities as they arise, and avoid surprises. However, year-end tax planning (before 5 April) is particularly important for maximising last-minute opportunities to reduce tax (pension contributions, charitable donations, expense claims, etc.). It\'s worth starting tax planning early in the tax year and reviewing regularly, so you have time to implement strategies and make informed decisions.',
  },
  {
    question: 'What are tax planning strategies UK?',
    answer: 'Legitimate tax planning strategies in the UK include: pension contributions (which reduce taxable income and provide tax relief at your marginal rate), charitable donations through Gift Aid (which reduce taxable income while supporting causes), utilising tax-efficient investments like ISAs (allowing you to invest up to £20,000 per year tax-free), timing income and expenses strategically (deferring income to following year if beneficial, bringing forward expenses where appropriate), utilising allowances (Personal Allowance, dividend allowance, savings allowance) effectively, and choosing the right business structure (sole trader, partnership, limited company) for tax efficiency. All strategies must be legal and ethical—aggressive tax avoidance or artificial arrangements are not legitimate tax planning and may be challenged by HMRC.',
  },
  {
    question: 'How can I reduce my tax bill legally?',
    answer: 'You can reduce your tax bill legally by: claiming all available allowances (Personal Allowance, dividend allowance, savings allowance, etc.), claiming all legitimate expenses and deductions (business expenses, capital allowances, etc.), making pension contributions (which reduce taxable income and provide tax relief), making charitable donations through Gift Aid (which reduce taxable income), utilising tax-efficient investments (ISAs, VCTs, EIS where appropriate), timing income and expenses strategically (deferring income or bringing forward expenses where beneficial), and choosing the right business structure for tax efficiency. All tax reduction strategies must be legitimate and compliant with HMRC requirements—aggressive tax avoidance or artificial arrangements may be challenged. It\'s worth getting professional advice to identify legitimate opportunities specific to your circumstances.',
  },
  {
    question: 'What is tax year-end planning?',
    answer: 'Tax year-end planning involves reviewing your tax position before the tax year ends (5 April) to maximise last-minute opportunities to reduce tax and claim available reliefs. Year-end planning typically includes: reviewing your income and expenses to date, calculating estimated tax liability for the current tax year, identifying last-minute actions you can take before 5 April (pension contributions, charitable donations, expense claims, ISA contributions, etc.), ensuring you\'ve maximised use of allowances (ISA allowances, pension allowances, etc.), and ensuring all available reliefs are claimed before the deadline. Year-end planning is important because once the tax year ends, opportunities to reduce tax for that year are lost. It\'s worth doing year-end planning in February/March to give yourself time to implement strategies.',
  },
  {
    question: 'Can I forecast Corporation Tax liability for my business?',
    answer: 'Yes, you can forecast Corporation Tax liability for your business. Corporation Tax forecasting involves: estimating your company\'s profits for the accounting period, calculating Corporation Tax at applicable rates (19% for small profits up to £50,000, 25% for profits over £250,000, with marginal relief between), accounting for any reliefs or deductions (capital allowances, R&D tax credits, etc.), and planning payments (Corporation Tax is due 9 months and 1 day after the end of the accounting period). Corporation Tax forecasting helps you plan cash flow, budget for tax payments, and identify opportunities to reduce tax through legitimate reliefs and deductions. It\'s worth getting professional help to ensure forecasts are accurate and to identify tax-saving opportunities specific to your business.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Tax Planning Review & Forecast', href: '/services/tax/tax-planning-review-forecast' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function TaxPlanningReviewForecastPage() {
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
            serviceType: 'Tax Planning Review & Forecast',
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
            description: 'Expert tax planning review and tax forecasting services in Kent. Tax planning review, tax forecasting, tax year end planning, tax planning strategies UK.',
            name: 'Tax Planning Review & Forecast',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/tax-planning-review-forecast/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Planning Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Current Tax Position Review' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Liability Forecast' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Opportunity Identification' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Year-End Planning' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Tax Planning Review & Forecast"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you want to stay on top of your tax situation and avoid surprises, regular tax planning reviews and tax forecasting can help you understand where you stand and plan ahead. Tax planning review involves assessing your current tax position, identifying opportunities to reduce tax legally and ethically, and forecasting future tax liabilities to help you plan and budget effectively (
          <a href="https://www.gov.uk/income-tax" target="_blank" rel="noopener noreferrer">
            gov.uk Income Tax
          </a>
          ). Effective tax planning requires understanding current tax laws, claiming appropriate deductions and reliefs, timing income and expenses strategically, and choosing the right business structure for your circumstances. Tax forecasting helps you predict your tax liability for the current and future tax years, enabling you to plan payments, avoid surprises, and make informed financial decisions throughout the year.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Tax planning review assesses your current tax position</strong> — We review your income, expenses, allowances, and reliefs to identify opportunities and ensure you&apos;re not overpaying tax
            </li>
            <li>
              <strong>Tax forecasting predicts future tax liabilities</strong> — We forecast your tax liability for the current and future tax years, helping you budget and plan payments in advance
            </li>
            <li>
              <strong>Year-end tax planning maximises opportunities</strong> — Reviewing your position before the tax year ends (5 April) helps identify last-minute opportunities to reduce tax and claim available reliefs
            </li>
            <li>
              <strong>Strategic tax planning saves money legally</strong> — Using legitimate strategies like pension contributions, charitable donations, and tax-efficient investments reduces tax within legal limits
            </li>
          </ul>
        </div>

        <p>
          The problem is most people only think about tax when it&apos;s time to file their return, or they don&apos;t realise they can forecast their tax liability in advance. That causes problems—unexpected tax bills and payment difficulties, missed opportunities to reduce tax before the year ends, poor cash flow planning due to unknown tax liabilities, and confusion about what legitimate tax planning strategies are available.
        </p>

        <p>
          We handle tax planning review and forecasting for individuals and businesses across Kent: current tax position review (assessing your income, expenses, allowances, and reliefs to understand where you stand now), tax liability forecast (forecasting your tax liability for current and future tax years based on projected income and expenses), opportunity identification (identifying legitimate opportunities to reduce tax through allowances, reliefs, and strategic planning), year-end planning (reviewing your position before 5 April to maximise last-minute tax-saving opportunities), cash flow planning (helping you plan tax payments in advance to avoid cash flow problems), and ongoing tax planning support (providing regular reviews and updates throughout the year to keep your tax planning on track). Whether you&apos;re an individual in Medway wanting to forecast your tax bill, a business in Maidstone needing tax planning review, or someone in Canterbury looking to optimise tax before year-end, we&apos;ll handle your tax planning review and forecast that works. No surprises, no missed opportunities—just clear tax planning that helps you stay ahead.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Understand your current tax position</strong> — We&apos;ll assess where you stand now, identifying what tax you&apos;ve already paid, what&apos;s due, and what opportunities are available. Understanding your position helps you plan.
          </li>
          <li>
            <strong>Forecast future tax liabilities</strong> — We&apos;ll predict your tax liability for the current and future tax years, helping you budget and plan payments in advance. Forecasting avoids surprises and helps cash flow.
          </li>
          <li>
            <strong>Identify tax-saving opportunities</strong> — We&apos;ll find legitimate opportunities to reduce tax through allowances, reliefs, pension contributions, charitable donations, and strategic planning. Identifying opportunities saves money.
          </li>
          <li>
            <strong>Plan for year-end</strong> — We&apos;ll review your position before the tax year ends (5 April), identifying last-minute opportunities to reduce tax and claim available reliefs. Year-end planning maximises savings.
          </li>
          <li>
            <strong>Avoid unexpected tax bills</strong> — We&apos;ll forecast tax liabilities in advance, helping you plan payments and avoid cash flow problems when tax is due. Avoiding surprises helps you manage cash flow.
          </li>
          <li>
            <strong>Stay compliant and efficient</strong> — We&apos;ll ensure you&apos;re claiming all available reliefs while staying compliant with HMRC requirements. Staying compliant protects you from enquiries.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for tax planning review and forecast:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your tax situation: what income sources you have (employment, self-employment, rental, dividends, etc.), what your expected income and expenses are for the current tax year, what tax planning you&apos;ve done so far, what your goals are (reduce tax, plan payments, forecast liability), and when you&apos;d like to review (mid-year, year-end, ongoing). Understanding your situation helps us tailor the review and forecast.
          </li>
          <li>
            <strong>Current tax position review</strong> — We assess your current tax position:
            <ul>
              <li>
                <strong>Income review</strong> — We review all your income sources (employment, self-employment, rental, dividends, interest, capital gains, etc.) to understand your total taxable income.
              </li>
              <li>
                <strong>Expense review</strong> — We review your expenses (business expenses, allowable deductions, etc.) to identify what can be claimed and what might be missed.
              </li>
              <li>
                <strong>Allowance and relief review</strong> — We review allowances and reliefs you&apos;re entitled to (Personal Allowance, dividend allowance, savings allowance, pension relief, etc.) to ensure you&apos;re claiming everything available.
              </li>
              <li>
                <strong>Tax paid to date</strong> — We review what tax you&apos;ve already paid (PAYE, payments on account, etc.) to understand your current position.
              </li>
              <li>
                <strong>Estimated tax liability</strong> — We calculate your estimated tax liability for the current tax year based on income and expenses to date, identifying any shortfall or overpayment.
              </li>
            </ul>
            Current tax position review establishes where you stand now.
          </li>
          <li>
            <strong>Tax liability forecast</strong> — We forecast your tax liability for current and future tax years:
            <ul>
              <li>
                <strong>Current year forecast</strong> — We forecast your tax liability for the current tax year based on projected income and expenses, accounting for what you&apos;ve already paid and what&apos;s still due.
              </li>
              <li>
                <strong>Future year forecast</strong> — We forecast tax liability for future tax years based on expected income and expenses, helping you plan ahead.
              </li>
              <li>
                <strong>Payment planning</strong> — We help you plan tax payments (including payments on account for Self Assessment) to avoid cash flow problems and ensure payments are made on time.
              </li>
              <li>
                <strong>Scenario analysis</strong> — We run different scenarios (e.g., higher income, lower expenses, pension contributions) to show how different decisions affect your tax liability.
              </li>
            </ul>
            Tax liability forecast helps you plan and budget effectively.
          </li>
          <li>
            <strong>Opportunity identification</strong> — We identify legitimate opportunities to reduce tax:
            <ul>
              <li>
                <strong>Allowance optimisation</strong> — We identify opportunities to use allowances (Personal Allowance, dividend allowance, savings allowance) more effectively.
              </li>
              <li>
                <strong>Relief optimisation</strong> — We identify reliefs you might be missing (pension relief, charitable giving, tax-efficient investments, etc.).
              </li>
              <li>
                <strong>Income timing</strong> — We advise on timing income and expenses to optimise tax bands and reduce overall tax liability (deferring income to following year if beneficial, bringing forward expenses where appropriate).
              </li>
              <li>
                <strong>Pension planning</strong> — We advise on pension contributions to reduce taxable income and maximise tax relief.
              </li>
              <li>
                <strong>Charitable giving</strong> — We advise on charitable donations through Gift Aid to reduce taxable income while supporting causes.
              </li>
              <li>
                <strong>Tax-efficient investments</strong> — We explore tax-efficient investment vehicles (ISAs, VCTs, EIS) where appropriate.
              </li>
            </ul>
            Opportunity identification helps you reduce tax legally.
          </li>
          <li>
            <strong>Year-end planning</strong> — We review your position before the tax year ends (5 April):
            <ul>
              <li>
                <strong>Pre-year-end review</strong> — We review your position in February/March to identify last-minute opportunities before the tax year ends.
              </li>
              <li>
                <strong>Last-minute actions</strong> — We identify actions you can take before 5 April (pension contributions, charitable donations, expense claims, etc.) to reduce tax.
              </li>
              <li>
                <strong>Allowance maximisation</strong> — We ensure you&apos;ve maximised use of allowances (ISA contributions, pension contributions, etc.) before the year ends.
              </li>
              <li>
                <strong>Relief claims</strong> — We ensure all available reliefs are claimed before the deadline.
              </li>
            </ul>
            Year-end planning maximises tax-saving opportunities.
          </li>
          <li>
            <strong>Cash flow planning</strong> — We help you plan tax payments:
            <ul>
              <li>
                <strong>Payment schedule</strong> — We create a payment schedule showing when tax is due (31 January, 31 July for payments on account, etc.) and how much is due.
              </li>
              <li>
                <strong>Cash flow forecast</strong> — We forecast your cash flow including tax payments to help you plan and avoid payment difficulties.
              </li>
              <li>
                <strong>Payment planning</strong> — We advise on spreading payments or making early payments where beneficial.
              </li>
            </ul>
            Cash flow planning helps you manage tax payments effectively.
          </li>
          <li>
            <strong>Ongoing support and regular reviews</strong> — We provide ongoing tax planning support:
            <ul>
              <li>
                <strong>Regular reviews</strong> — We offer quarterly or bi-annual reviews to keep your tax planning on track and update forecasts as circumstances change.
              </li>
              <li>
                <strong>Updates</strong> — We update forecasts and reviews as your income, expenses, or circumstances change throughout the year.
              </li>
              <li>
                <strong>Advice</strong> — We provide ongoing advice on tax planning strategies and opportunities as they arise.
              </li>
              <li>
                <strong>HMRC compliance</strong> — We ensure all tax planning stays compliant with HMRC requirements and avoids aggressive or artificial arrangements.
              </li>
            </ul>
            Ongoing support keeps your tax planning current and effective.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What tax planning review and forecast includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Current tax position review (income, expenses, allowances, reliefs, tax paid, estimated liability)</li>
            <li>Tax liability forecast for current and future tax years</li>
            <li>Opportunity identification (allowances, reliefs, pension planning, charitable giving, tax-efficient investments)</li>
            <li>Year-end planning review and recommendations</li>
            <li>Cash flow planning for tax payments</li>
            <li>Ongoing support and regular reviews</li>
          </ul>
        </div>

        <p>
          We handle all aspects of tax planning review and forecasting, from initial assessment to ongoing support. The key is understanding where you stand, forecasting what&apos;s coming, identifying opportunities to reduce tax legally, and planning payments to avoid surprises.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Complexity of tax situation</strong> — Simple tax situation (single income source, straightforward expenses) vs. complex tax situation (multiple income sources, complex expenses, multiple reliefs) increases complexity.
          </li>
          <li>
            <strong>Number of income sources</strong> — More income sources (employment, self-employment, rental, dividends, etc.) increase complexity and time required.
          </li>
          <li>
            <strong>Forecast requirements</strong> — Single year forecast vs. multi-year forecast and scenario analysis affects time and expertise required.
          </li>
          <li>
            <strong>Review frequency</strong> — One-off review vs. ongoing quarterly/bi-annual reviews affects pricing.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple tax planning review (single income source, basic forecast):</strong> £200–£500 (includes current position review, basic tax forecast, opportunity identification)
          </li>
          <li>
            <strong>Standard tax planning review (multiple income sources, detailed forecast):</strong> £400–£800 (includes comprehensive position review, detailed tax forecast, opportunity identification, year-end planning)
          </li>
          <li>
            <strong>Complex tax planning review (multiple income sources, multi-year forecast, scenario analysis, ongoing support):</strong> £600–£1,500+ (includes comprehensive review, detailed forecasts, scenario analysis, year-end planning, ongoing support)
          </li>
          <li>
            <strong>Ongoing tax planning support (quarterly/bi-annual reviews):</strong> £300–£600 per year (regular reviews, updated forecasts, ongoing advice)
          </li>
        </ul>

        <p>
          <strong>Why tax planning review and forecast cost what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding tax laws, allowances, reliefs, and forecasting tax liabilities requires specialist tax knowledge and expertise.
          </li>
          <li>
            <strong>Time and complexity</strong> — Reviewing current position, forecasting future liabilities, identifying opportunities, and providing ongoing support takes time and attention to detail.
          </li>
          <li>
            <strong>Value provided</strong> — Tax planning reviews and forecasts help you reduce tax legally, avoid surprises, and plan cash flow effectively, providing significant value.
          </li>
          <li>
            <strong>Ongoing support</strong> — Providing regular reviews and updates throughout the year requires ongoing commitment and expertise.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Initial tax planning review and forecast typically takes 1–2 weeks from receiving all information. Year-end planning reviews typically take 1 week if done in February/March. Ongoing reviews can be scheduled quarterly or bi-annually throughout the year.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced on completion of review and forecast, or for ongoing support, invoiced quarterly or annually depending on agreement. Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes current tax position review, tax liability forecast, opportunity identification, year-end planning recommendations, cash flow planning, and ongoing support (if included in package).
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For individuals and businesses in Kent, whether you&apos;re in Medway wanting to forecast your tax bill, a business in Maidstone needing tax planning review, or someone in Canterbury looking to optimise tax before year-end, tax planning review and forecasting helps you stay on top of your tax situation and avoid surprises. Many Kent residents and businesses don&apos;t realise they can forecast their tax liability in advance, or they only think about tax when it&apos;s time to file their return. We help local people and businesses understand their current tax position, forecast future liabilities, identify opportunities to reduce tax legally, plan tax payments in advance, and stay compliant, ensuring they avoid surprises and maximise tax efficiency. It&apos;s worth getting it right—unexpected tax bills can cause cash flow problems, while missed opportunities mean overpaying tax unnecessarily.
        </p>

        <p>
          <strong>Common Kent tax planning scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Employees with additional income</strong> — Employees with freelance, rental, or dividend income wanting to forecast their total tax liability and plan payments.
          </li>
          <li>
            <strong>Self-employed individuals</strong> — Self-employed individuals wanting to forecast Self Assessment tax liability and plan payments on account.
          </li>
          <li>
            <strong>Business owners</strong> — Business owners wanting to review Corporation Tax position, forecast tax liability, and identify tax-saving opportunities.
          </li>
          <li>
            <strong>High earners</strong> — High earners wanting to optimise tax through pension contributions, charitable giving, and tax-efficient investments before year-end.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent residents and businesses are dealing with. Tax position review, tax forecasting, opportunity identification, year-end planning—we&apos;ll handle your tax planning review and forecast that helps you stay ahead and avoid surprises.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Tax Planning Review & Forecast - Frequently Asked Questions"
          subtitle="Common questions about tax planning reviews, forecasting, and year-end planning"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Comprehensive tax planning and optimization services
            </li>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns</Link> — Self Assessment returns if you need to file
            </li>
            <li>
              <Link href="/services/tax/corporation-tax-ct600-filing/">Corporation Tax (CT600) Filing</Link> — Corporation Tax returns for businesses
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with tax planning review and forecasting?" description="Don't let tax surprises catch you off guard. We'll help you understand your current tax position, forecast future liabilities, identify opportunities to reduce tax legally, and plan payments in advance. No surprises, no missed opportunities—just clear tax planning that helps you stay ahead." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with tax planning review and forecasting?" />
    </>
  );
}

