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
  title: 'Company Director Tax Returns & Self Assessment Services in Kent | File Easy Accountancy',
  description: 'Company director tax return services in Kent. Director Self Assessment, salary tax, dividend tax, benefits in kind. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/company-director-tax-returns/',
  },
  openGraph: {
    title: 'Company Director Tax Returns & Self Assessment Services in Kent | File Easy Accountancy',
    description: 'Company director tax return services in Kent. Director Self Assessment, salary tax, dividend tax, benefits in kind.',
    url: 'https://fileeasyaccountancy.co.uk/services/company-director-tax-returns/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Do company directors need to file tax returns?',
    answer: 'Yes, usually. Company directors typically need to file Self Assessment tax returns because they receive dividends from their company (which must be declared), may have benefits in kind (which must be reported), or need to reconcile PAYE tax. Even if all income is through PAYE, HMRC may still require directors to file returns. It\'s worth checking—directors have specific tax obligations that differ from regular employees.',
  },
  {
    question: 'How do directors pay tax on their salary?',
    answer: 'Directors pay tax on salary through PAYE (Pay As You Earn)—tax is deducted at source by the company when salary is paid. However, directors must still declare salary on Self Assessment returns to reconcile PAYE tax deducted with actual tax liability. If PAYE tax doesn\'t match actual liability (due to other income like dividends or benefits), additional tax may be due or refunds may be available.',
  },
  {
    question: 'What tax do company directors pay?',
    answer: 'Company directors pay Income Tax on salary and dividends, plus National Insurance contributions on salary (Class 1 NIC through PAYE). Dividend tax is calculated separately (basic rate 8.75%, higher rate 33.75%, additional rate 39.35%), and benefits in kind are added to income and taxed at marginal rate. The total tax liability depends on salary level, dividend amounts, benefits, and other income.',
  },
  {
    question: 'Do directors need Self Assessment?',
    answer: 'Yes, usually. Directors typically need Self Assessment because: they receive dividends (which must be declared on Self Assessment), they have benefits in kind (which must be reported), they need to reconcile PAYE tax, or HMRC requires them to file. Even if all income is through PAYE, directors may still need to file returns to declare dividends and benefits.',
  },
  {
    question: 'What is the tax rate for company directors?',
    answer: 'Company directors pay tax at their marginal Income Tax rate (basic rate 20%, higher rate 40%, additional rate 45%) on salary and benefits. Dividend tax is separate (8.75%, 33.75%, or 39.35% depending on tax band), and National Insurance is paid on salary (Class 1 NIC through PAYE). The effective tax rate depends on the combination of salary, dividends, benefits, and other income.',
  },
  {
    question: 'What about benefits in kind for directors?',
    answer: 'Benefits in kind (company car, private medical insurance, fuel benefit, etc.) are taxable benefits that must be declared on Self Assessment returns. Benefits are valued (usually shown on P11D form) and added to income, then taxed at your marginal Income Tax rate. Common benefits include company car (benefit based on car value and CO2 emissions), fuel benefit (if company pays for private fuel), and private medical insurance (if company pays for insurance). Benefits in kind can significantly affect tax liability.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Company Director Tax Returns', href: '/services/tax/company-director-tax-returns' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function CompanyDirectorTaxReturnsPage() {
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
            serviceType: 'Company Director Tax Returns',
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
            description: 'Company director tax return services in Kent. Director Self Assessment, salary tax, dividend tax, benefits in kind.',
            name: 'Company Director Tax Returns',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/company-director-tax-returns/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Director Income Gathering' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PAYE Reconciliation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dividend Tax Calculation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Benefits in Kind Reporting' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Self Assessment Filing' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Company Director Tax Returns"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re a company director, you need to file a Self Assessment tax return every year. Directors have specific tax obligations—you receive salary through PAYE, dividends from your company, and possibly benefits in kind, all of which need declaring. Company directors must file Self Assessment tax returns if they receive salary, dividends, or benefits from their company—directors have specific tax obligations that differ from employees. Directors pay Income Tax on salary and dividends, plus National Insurance contributions on salary—director tax calculations can be complex due to salary and dividend combinations.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Company directors must file Self Assessment tax returns if they receive salary, dividends, or benefits from their company</strong> — Directors have specific tax obligations that differ from employees (
              <a href="https://www.gov.uk/self-assessment-tax-returns" target="_blank" rel="noopener noreferrer">
                gov.uk Self Assessment
              </a>
              )
            </li>
            <li>
              <strong>Directors pay Income Tax on salary and dividends, plus National Insurance contributions on salary</strong> — Director tax calculations can be complex due to salary and dividend combinations
            </li>
            <li>
              <strong>Directors receive salary through PAYE but may also receive dividends which must be declared on Self Assessment</strong> — Proper tax return filing ensures all director income is declared
            </li>
            <li>
              <strong>Company directors may have benefits in kind (company car, private medical insurance) which must be reported on Self Assessment</strong> — Benefits in kind are taxable and affect tax liability (
              <a href="https://www.gov.uk/expenses-benefits" target="_blank" rel="noopener noreferrer">
                gov.uk expenses and benefits
              </a>
              )
            </li>
          </ul>
        </div>

        <p>
          The problem is most directors don&apos;t understand their tax obligations properly. They don&apos;t declare dividends, miss benefits in kind, or don&apos;t reconcile PAYE correctly. That causes problems—undeclared dividends mean HMRC enquiries, missing benefits in kind means incorrect tax calculations, and PAYE errors mean tax underpayments or overpayments.
        </p>

        <p>
          We handle company director tax returns for directors needing proper tax filing: director income gathering (salary, dividends, benefits), PAYE reconciliation (checking PAYE tax deducted matches actual liability), dividend reporting (declaring all dividends received from your company), benefits in kind reporting (declaring taxable benefits like company car, medical insurance), and Self Assessment filing (completing your Self Assessment return with all director income). Whether you&apos;re a company director in Medway with salary and dividends, a director in Maidstone with benefits in kind, or a director in Canterbury needing PAYE reconciliation, we&apos;ll handle your director tax returns that work. No undeclared income, no overpaid tax—just proper tax return filing that keeps you compliant.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet your director tax obligations</strong> — File your Self Assessment tax return correctly, declaring all director income (salary, dividends, benefits). Proper filing means no HMRC enquiries or penalties.
          </li>
          <li>
            <strong>Declare all income correctly</strong> — Ensure salary, dividends, and benefits in kind are all declared on your tax return. Declaring all income means correct tax calculations.
          </li>
          <li>
            <strong>Reconcile PAYE correctly</strong> — Check that PAYE tax deducted matches your actual tax liability. Proper PAYE reconciliation means you don&apos;t overpay or underpay tax.
          </li>
          <li>
            <strong>Avoid penalties and HMRC enquiries</strong> — Proper income declaration and accurate tax calculations mean no penalties or HMRC enquiries. Avoiding penalties saves money and stress.
          </li>
          <li>
            <strong>Understand director tax obligations</strong> — We&apos;ll explain what you need to declare and why. Understanding your tax obligations helps you plan and budget better.
          </li>
          <li>
            <strong>Optimize director tax position</strong> — We&apos;ll help you understand how salary and dividend combinations affect tax, so you can plan tax-efficiently (within HMRC rules).
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for company director tax returns:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your situation: what your director salary is, whether you receive dividends from your company, what benefits in kind you have (company car, medical insurance, etc.), whether you&apos;ve filed Self Assessment before, and what you want to achieve.
          </li>
          <li>
            <strong>Director income gathering</strong> — We gather all your director income:
            <ul>
              <li>
                <strong>Salary income</strong> — Director salary received through PAYE (from P60, payslips, or payroll records)
              </li>
              <li>
                <strong>Dividend income</strong> — All dividends received from your company (dividend vouchers, company records)
              </li>
              <li>
                <strong>Benefits in kind</strong> — Taxable benefits (company car, private medical insurance, fuel benefit, interest-free loans, etc.) from P11D or company records
              </li>
              <li>
                <strong>Other income</strong> — Any other income (property, savings, investments, etc.) that needs reporting
              </li>
              <li>
                <strong>Supporting documents</strong> — P60, P11D, dividend vouchers, payslips, and other documents
              </li>
            </ul>
            Director income gathering ensures we have all the information needed for your tax return.
          </li>
          <li>
            <strong>PAYE reconciliation</strong> — We reconcile PAYE tax:
            <ul>
              <li>
                <strong>PAYE tax deducted</strong> — Check PAYE tax deducted during the tax year (from P60 or payslips)
              </li>
              <li>
                <strong>Tax liability calculation</strong> — Calculate actual tax liability on all income (salary, dividends, benefits, other income)
              </li>
              <li>
                <strong>Tax reconciliation</strong> — Reconcile PAYE tax deducted with actual tax liability (identify underpayments or overpayments)
              </li>
              <li>
                <strong>Tax adjustments</strong> — Adjust tax calculations if PAYE tax doesn&apos;t match actual liability
              </li>
            </ul>
            PAYE reconciliation ensures you pay the right amount of tax.
          </li>
          <li>
            <strong>Dividend tax calculation</strong> — We calculate dividend tax:
            <ul>
              <li>
                <strong>Dividend income reporting</strong> — Report all dividends received during the tax year
              </li>
              <li>
                <strong>Dividend allowance</strong> — Apply dividend allowance (£1,000 for 2023/24, reducing to £500 for 2024/25)
              </li>
              <li>
                <strong>Dividend tax calculation</strong> — Calculate dividend tax at appropriate rates (basic rate 8.75%, higher rate 33.75%, additional rate 39.35%)
              </li>
              <li>
                <strong>Total dividend tax</strong> — Calculate total dividend tax due
              </li>
            </ul>
            Dividend tax calculation ensures dividend tax is calculated correctly.
          </li>
          <li>
            <strong>Benefits in kind reporting</strong> — We report benefits in kind:
            <ul>
              <li>
                <strong>P11D benefits</strong> — Review P11D form showing taxable benefits received
              </li>
              <li>
                <strong>Benefits reporting</strong> — Report all taxable benefits on Self Assessment return (company car, fuel, medical insurance, etc.)
              </li>
              <li>
                <strong>Benefits tax calculation</strong> — Calculate tax on benefits in kind (benefits are added to income and taxed at marginal rate)
              </li>
              <li>
                <strong>Benefit values</strong> — Use correct benefit values from P11D (company car benefit, fuel benefit, etc.)
              </li>
            </ul>
            Benefits in kind reporting ensures all taxable benefits are declared.
          </li>
          <li>
            <strong>Self Assessment filing</strong> — We prepare and file your Self Assessment return:
            <ul>
              <li>
                <strong>Return completion</strong> — Complete all relevant sections (employment pages for salary, dividend pages, benefits pages)
              </li>
              <li>
                <strong>Income reporting</strong> — Report all director income (salary, dividends, benefits, other income)
              </li>
              <li>
                <strong>Tax calculation</strong> — Calculate total tax liability (Income Tax, National Insurance, dividend tax)
              </li>
              <li>
                <strong>PAYE reconciliation</strong> — Include PAYE reconciliation in tax calculation
              </li>
              <li>
                <strong>Return filing</strong> — File Self Assessment return online via HMRC&apos;s Government Gateway
              </li>
            </ul>
            Self Assessment filing ensures your director tax return is submitted correctly and on time.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What company director tax return filing includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Director income gathering (salary, dividends, benefits, other income, supporting documents)</li>
            <li>PAYE reconciliation (PAYE tax deducted, tax liability calculation, reconciliation, adjustments)</li>
            <li>Dividend tax calculation (dividend income, dividend allowance, dividend tax rates, total dividend tax)</li>
            <li>Benefits in kind reporting (P11D benefits, benefits reporting, benefits tax calculation, benefit values)</li>
            <li>Self Assessment filing (return completion, income reporting, tax calculation, PAYE reconciliation, filing)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Director tax obligations:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Salary</strong> — Director salary is paid through PAYE, tax deducted at source, but must be declared on Self Assessment
            </li>
            <li>
              <strong>Dividends</strong> — Dividends must be declared on Self Assessment, dividend tax calculated and paid
            </li>
            <li>
              <strong>Benefits in kind</strong> — Taxable benefits must be declared on Self Assessment, tax calculated on benefit values
            </li>
            <li>
              <strong>National Insurance</strong> — Class 1 National Insurance on salary (PAYE), Class 2 and Class 4 if self-employed income also
            </li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>Dividend tax rates (2023/24):</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Dividend allowance</strong> — First £1,000 of dividends is tax-free (reducing to £500 for 2024/25)
            </li>
            <li>
              <strong>Basic rate</strong> — Dividends above allowance taxed at 8.75% (if total income in basic rate band)
            </li>
            <li>
              <strong>Higher rate</strong> — Dividends above allowance taxed at 33.75% (if total income in higher rate band)
            </li>
            <li>
              <strong>Additional rate</strong> — Dividends above allowance taxed at 39.35% (if total income in additional rate band)
            </li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>Benefits in kind:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Company car</strong> — Taxable benefit based on car value and CO2 emissions
            </li>
            <li>
              <strong>Fuel benefit</strong> — Taxable benefit if company pays for private fuel
            </li>
            <li>
              <strong>Private medical insurance</strong> — Taxable benefit if company pays for medical insurance
            </li>
            <li>
              <strong>Interest-free loans</strong> — Taxable benefit on loans over £10,000
            </li>
            <li>
              <strong>Other benefits</strong> — Any other benefits provided by company
            </li>
          </ul>
        </div>

        <p>
          We handle all aspects of company director tax returns. The key is gathering all director income, reconciling PAYE correctly, calculating dividend tax properly, and declaring benefits in kind, so you meet your obligations and pay the right amount of tax.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Return complexity</strong> — Simple returns (salary only, no dividends or benefits) cost less than complex returns (salary, dividends, benefits, multiple income sources)
          </li>
          <li>
            <strong>Benefits in kind</strong> — Returns with benefits in kind require more work (P11D review, benefit calculations)
          </li>
          <li>
            <strong>Dividend complexity</strong> — Multiple dividend payments or complex dividend arrangements require more work
          </li>
          <li>
            <strong>PAYE reconciliation</strong> — Complex PAYE reconciliation (multiple employments, underpayments/overpayments) requires more work
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple director tax return (salary only):</strong> £200–£400 for basic director return with salary and straightforward PAYE
          </li>
          <li>
            <strong>Standard director tax return (salary + dividends):</strong> £300–£600 for typical director return with salary and dividends
          </li>
          <li>
            <strong>Complex director tax return (salary + dividends + benefits):</strong> £500–£1,000+ for complex returns (salary, dividends, benefits in kind, multiple income sources)
          </li>
          <li>
            <strong>Director tax return with PAYE issues:</strong> £400–£800 if PAYE reconciliation is complex (underpayments, overpayments, multiple employments)
          </li>
        </ul>

        <p>
          <strong>Why company director tax return filing costs what it does:</strong>
        </p>
        <ul>
          <li>Director income gathering requires time to review P60, P11D, dividend vouchers, and other documents</li>
          <li>PAYE reconciliation requires checking PAYE tax deducted against actual tax liability</li>
          <li>Dividend tax calculation requires knowledge of dividend tax rules and rates</li>
          <li>Benefits in kind reporting requires P11D review and benefit tax calculations</li>
          <li>Self Assessment filing requires completing all relevant sections accurately</li>
        </ul>

        <p>
          <strong>Timeline:</strong> For returns filed before the deadline, preparation usually takes 1-2 weeks from when we receive all your documents. We&apos;ll need your documents at least 2-3 weeks before the 31 January deadline to ensure on-time filing. If you provide documents very close to the deadline, we may not be able to guarantee on-time filing due to high demand.
        </p>

        <p>
          <strong>Payment:</strong> Tax due must be paid by 31 January (same as filing deadline). If you can&apos;t pay in full, HMRC offers payment plans, but you need to arrange this before the deadline. We can help you understand payment options if needed.
        </p>

        <p>
          <strong>No hidden fees.</strong> Return preparation price includes director income gathering, PAYE reconciliation, dividend tax calculation, benefits in kind reporting, and Self Assessment filing. Ongoing support and tax planning are separate if you want them.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with company directors across Kent: company directors in Medway with salary and dividends, directors in Maidstone with benefits in kind, and directors in Canterbury needing PAYE reconciliation.
        </p>

        <p>
          Kent company directors face the same director tax obligations as everyone else—declaring salary, dividends, and benefits in kind on Self Assessment returns. The difference is when you get proper help with director tax returns, you declare all income correctly, reconcile PAYE properly, and calculate tax accurately. That&apos;s what helps Kent directors stay compliant and pay the right amount of tax.
        </p>

        <p>
          <strong>Common Kent director scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Directors with salary and dividends</strong> — Directors receiving salary through PAYE and dividends from their company
          </li>
          <li>
            <strong>Directors with benefits in kind</strong> — Directors with company car, medical insurance, or other taxable benefits
          </li>
          <li>
            <strong>Directors with PAYE issues</strong> — Directors needing PAYE reconciliation or dealing with tax underpayments/overpayments
          </li>
          <li>
            <strong>New directors</strong> — New company directors needing first Self Assessment return
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent businesses have company directors (limited companies, directors taking salary and dividends)</li>
          <li>Proper director tax return filing helps Kent directors stay compliant and pay the right amount of tax</li>
          <li>On-time filing helps Kent directors avoid penalties and interest</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent company directors are dealing with. Director income reporting, PAYE reconciliation, dividend tax, benefits in kind—we&apos;ll handle your director tax returns that keep you compliant.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Company Director Tax Returns - Frequently Asked Questions"
          subtitle="Common questions about director tax returns and Self Assessment"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/corporation-tax-ct600-filing/">Corporation Tax (CT600) Filing</Link> — Company tax returns that affect dividend availability
            </li>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Self Assessment filing (similar process for directors)
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning for salary and dividend optimization
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with your company director tax returns?" description="We'll gather all your director income, reconcile PAYE correctly, calculate dividend tax properly, and declare benefits in kind. No undeclared income, no overpaid tax—just proper tax return filing that keeps you compliant." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with company director tax returns?" />
    </>
  );
}
