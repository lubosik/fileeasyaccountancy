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
  title: 'Trust & Estate Tax Returns Services in Kent | File Easy Accountancy',
  description: 'Expert trust and estate tax returns in Kent. Trust tax returns UK, estate tax returns UK, trust Self Assessment, trust income tax. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/trust-estate-tax-returns/',
  },
  openGraph: {
    title: 'Trust & Estate Tax Returns Services in Kent | File Easy Accountancy',
    description: 'Expert trust and estate tax returns in Kent. Trust tax returns UK, estate tax returns UK, trust Self Assessment, trust income tax.',
    url: 'https://fileeasyaccountancy.co.uk/services/trust-estate-tax-returns/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What are trust tax returns?',
    answer: 'Trust tax returns (form SA900) are annual tax returns that trustees must file to report the trust\'s income, gains, and distributions to beneficiaries. Trustees must file returns every year the trust has income or gains, reporting rental income, dividend income, interest income, capital gains, and any distributions made to beneficiaries. The return calculates the tax due at special trust rates (20% income tax, 45% dividend tax, 20% CGT) and ensures beneficiaries receive the correct tax information (form R185) to complete their own tax returns. Trust tax returns are separate from personal tax returns—trustees file for the trust, and beneficiaries report trust income on their personal returns.',
  },
  {
    question: 'Who needs to file trust tax returns?',
    answer: 'Trustees need to file trust tax returns. If there are multiple trustees, one must be nominated as the "principal acting trustee" to manage tax affairs, but all trustees are jointly and severally liable for any tax due. Trustees must file returns for any trust that has income or gains during the tax year, even if no distributions are made. The trust must first be registered with HMRC\'s Trust Registration Service (TRS) to obtain a UTR before filing returns. Most UK express trusts (trusts deliberately created, usually in writing) must register and file returns, though some trusts (like charitable trusts) are exempt.',
  },
  {
    question: 'How do I file a trust tax return?',
    answer: 'To file a trust tax return, you need to: register the trust with HMRC\'s Trust Registration Service (TRS) to get a UTR (if not already registered), gather all trust income and expense records (rental income, dividends, interest, capital gains, expenses), complete form SA900 (Trust and Estate Tax Return) reporting all income, gains, and distributions, file the return by 31 October (paper) or 31 January (online) following the end of the tax year, pay any tax due by 31 January, and provide beneficiaries with R185 forms showing their share of income and tax credit. Many trustees get an accountant to handle this because trust tax rules are complex and trustee liability means mistakes affect all trustees.',
  },
  {
    question: 'What is the deadline for trust tax returns?',
    answer: 'The deadline for Trust and Estate Tax Returns (SA900) is 31 October (paper filing) or 31 January (online filing) following the end of the tax year. For example, for the 2024/25 tax year, the deadline is 31 October 2025 (paper) or 31 January 2026 (online). Tax is due by 31 January following the end of the tax year, regardless of filing method. Late filing penalties apply if returns are filed after the deadline, and interest charges apply if tax is paid late. It\'s worth filing on time to avoid penalties and interest, especially since trustees are jointly and severally liable for any tax due.',
  },
  {
    question: 'What tax do trusts pay?',
    answer: 'Trusts pay tax at special trust rates, which are generally higher than personal rates: Income Tax at 20% (basic rate band) on income, Dividend Tax at 45% (additional rate) on dividend income for discretionary trusts, Capital Gains Tax at 20% on gains (or 28% for residential property), with an annual CGT exemption of £3,000 (2024/25). These rates apply because trusts don\'t get personal allowances like individuals. When trust income is distributed to beneficiaries, the trust tax paid acts as a tax credit that beneficiaries can use to offset their own tax liability. Beneficiaries receiving trust income may need to pay additional tax if their personal tax rate is lower, or they may get a refund if trust tax exceeds their personal tax liability.',
  },
  {
    question: 'Do beneficiaries pay tax on trust income?',
    answer: 'Yes, beneficiaries pay tax on trust income they receive, but they get a tax credit for tax already paid by the trust. When a trust distributes income to a beneficiary, the trust pays tax at trust rates (20% income tax, 45% dividend tax). The beneficiary receives an R185 form showing their share of income and the tax credit. The beneficiary then reports this income on their personal tax return, using the tax credit to offset their own tax liability. If the beneficiary\'s personal tax rate is lower than the trust rate, they may get a refund. If it\'s higher, they pay additional tax. The key is that beneficiaries report trust income on their personal returns, not on separate trust returns.',
  },
  {
    question: 'What if I\'m a trustee and don\'t understand trust tax?',
    answer: 'If you\'re a trustee and don\'t understand trust tax, it\'s worth getting professional help because trustees are jointly and severally liable for any tax due. This means if the trust doesn\'t pay tax, HMRC can pursue any trustee for the full amount, even if other trustees were responsible for managing tax affairs. Many trustees are family members who\'ve been appointed without fully understanding the obligations, or they\'re dealing with complex trusts with multiple income sources and beneficiaries. An accountant can help you understand trustee responsibilities, register the trust correctly, file returns on time, provide beneficiaries with correct tax information, and keep HMRC updated about trust changes. Getting help protects you and all other trustees from liability.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Trust & Estate Tax Returns', href: '/services/tax/trust-estate-tax-returns' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function TrustEstateTaxReturnsPage() {
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
            serviceType: 'Trust & Estate Tax Returns',
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
            description: 'Expert trust and estate tax returns in Kent. Trust tax returns UK, estate tax returns UK, trust Self Assessment, trust income tax.',
            name: 'Trust & Estate Tax Returns',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/trust-estate-tax-returns/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Trust & Estate Tax Return Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trust Registration' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trust and Estate Tax Return Filing' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Beneficiary Reporting (R185)' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inheritance Tax Reporting' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Trust & Estate Tax Returns"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re a trustee, you have legal responsibilities to file tax returns for the trust and ensure all tax obligations are met. Trustees must file a Trust and Estate Tax Return (SA900) annually to report the trust&apos;s income and gains, with deadlines of 31 October (paper) or 31 January (online) following the end of the tax year (
          <a href="https://www.gov.uk/trusts-taxes/trustees-tax-responsibilities" target="_blank" rel="noopener noreferrer">
            gov.uk trustees tax responsibilities
          </a>
          ). Most UK express trusts must register with HMRC&apos;s Trust Registration Service (TRS) before filing tax returns, even if the trust has no immediate tax liability. Trustees must provide beneficiaries with form R185 (trust) detailing the trust&apos;s income distributed to them and the taxes paid, enabling beneficiaries to complete their own tax returns.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Trustees must file a Trust and Estate Tax Return (SA900) annually</strong> — To report the trust&apos;s income and gains, with strict deadlines: 31 October (paper) or 31 January (online) following the end of the tax year
            </li>
            <li>
              <strong>Trusts must register with HMRC&apos;s Trust Registration Service (TRS) first</strong> — Most UK express trusts must register before filing tax returns, even if the trust has no immediate tax liability
            </li>
            <li>
              <strong>Trustees are jointly and severally liable for any tax due</strong> — HMRC can pursue any trustee for unpaid tax and interest if the trust does not pay, meaning all trustees share responsibility
            </li>
            <li>
              <strong>Trusts pay tax at special trust rates</strong> — 20% (basic rate) on income, 45% (additional rate) on dividends, and Capital Gains Tax at 20% (or 28% for residential property), with an annual CGT exemption of £3,000
            </li>
          </ul>
        </div>

        <p>
          The problem is most trustees don&apos;t realise the complexity of trust tax returns until they&apos;re facing deadlines, or they struggle with trust registration, understanding what income to report, working out beneficiary distributions, and ensuring beneficiaries receive the right tax information. That causes problems—missing filing deadlines and penalties, incorrect registration or missing TRS updates, beneficiaries unable to complete their own tax returns, HMRC enquiries and interest charges, and stress about trustee responsibilities.
        </p>

        <p>
          We handle trust and estate tax returns for trustees across Kent: trust registration (registering the trust with HMRC&apos;s Trust Registration Service and obtaining a UTR), Trust and Estate Tax Return filing (completing and submitting SA900 returns by the deadline, reporting all income, gains, and distributions), beneficiary reporting (preparing R185 forms for beneficiaries showing income distributed and tax paid), trust updates (keeping HMRC informed about trust changes including trustees, beneficiaries, settlors, and assets), Inheritance Tax reporting (completing IHT100 forms when required for discretionary and interest in possession trusts), and ongoing compliance (annual reviews and filing to ensure ongoing compliance). Whether you&apos;re a trustee managing a family trust in Medway, administering an estate in Maidstone, or handling a discretionary trust in Canterbury, we&apos;ll handle your trust tax returns that work. No missed deadlines, no beneficiary confusion—just proper trust tax compliance that keeps you and the beneficiaries protected.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet filing deadlines</strong> — We&apos;ll ensure your Trust and Estate Tax Returns are filed on time (31 October paper or 31 January online), avoiding late filing penalties. Meeting deadlines protects you from penalties and interest charges.
          </li>
          <li>
            <strong>Register correctly with HMRC</strong> — We&apos;ll handle trust registration with the Trust Registration Service (TRS) and ensure you have a UTR before filing. Registration ensures you can file returns and access online services.
          </li>
          <li>
            <strong>Report all income and gains accurately</strong> — We&apos;ll identify and report all trust income (rental income, dividends, interest) and gains, ensuring nothing is missed. Accurate reporting avoids HMRC enquiries.
          </li>
          <li>
            <strong>Provide beneficiaries with correct tax information</strong> — We&apos;ll prepare R185 forms for each beneficiary showing their share of income and tax paid. Beneficiary reporting helps them complete their own tax returns correctly.
          </li>
          <li>
            <strong>Stay compliant with trustee obligations</strong> — We&apos;ll keep HMRC updated about trust changes (trustees, beneficiaries, settlors, assets) and handle Inheritance Tax reporting when needed. Compliance protects all trustees from liability.
          </li>
          <li>
            <strong>Simplify complex trust tax rules</strong> — We&apos;ll explain trust tax rates, beneficiary distributions, and trustee responsibilities in plain English. Understanding your obligations helps you make informed decisions.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for trust and estate tax returns:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your trust: what type of trust it is (discretionary, interest in possession, will trust, etc.), when the trust was created, whether it&apos;s registered with HMRC, what income and assets the trust has, how many beneficiaries there are, whether distributions have been made, and what you want to achieve. Understanding your trust helps us provide the right support.
          </li>
          <li>
            <strong>Trust registration (if needed)</strong> — If the trust isn&apos;t registered yet, we&apos;ll handle registration:
            <ul>
              <li>
                <strong>Trust Registration Service (TRS)</strong> — We&apos;ll register the trust with HMRC&apos;s Trust Registration Service, providing details about settlors, trustees, and beneficiaries.
              </li>
              <li>
                <strong>UTR allocation</strong> — HMRC will allocate a Unique Taxpayer Reference (UTR) for the trust, which is required before filing tax returns.
              </li>
              <li>
                <strong>Registration deadlines</strong> — For trusts created on or after 1 September 2022, registration must be within 90 days of creation. Older trusts may have different deadlines depending on when they became registrable.
              </li>
            </ul>
            Trust registration ensures you can file tax returns and access HMRC online services.
          </li>
          <li>
            <strong>Income and gain identification</strong> — We identify all trust income and gains:
            <ul>
              <li>
                <strong>Income types</strong> — Rental income from trust property, dividend income from trust investments, interest income from trust savings, other income (trading income, etc.).
              </li>
              <li>
                <strong>Capital gains</strong> — Gains from selling trust assets (property, shares, investments), calculated after deducting the annual CGT exemption (£3,000 for 2024/25).
              </li>
              <li>
                <strong>Trust expenses</strong> — Allowable expenses that reduce taxable income (management fees, professional fees, property expenses, etc.).
              </li>
            </ul>
            Income and gain identification ensures everything is reported accurately.
          </li>
          <li>
            <strong>Tax calculation</strong> — We calculate trust tax:
            <ul>
              <li>
                <strong>Income tax</strong> — Trust income is taxed at 20% (basic rate band) on income, with dividend income taxed at 45% (additional rate) for discretionary trusts.
              </li>
              <li>
                <strong>Capital gains tax</strong> — CGT is charged at 20% on gains (or 28% for residential property), after the annual exemption (£3,000 for 2024/25).
              </li>
              <li>
                <strong>Tax on distributions</strong> — Tax paid by the trust on income distributed to beneficiaries, which beneficiaries can use to offset their own tax liability.
              </li>
            </ul>
            Tax calculation ensures correct tax payments and beneficiary tax positions.
          </li>
          <li>
            <strong>Beneficiary reporting</strong> — We prepare R185 forms for beneficiaries:
            <ul>
              <li>
                <strong>Income distributions</strong> — We calculate each beneficiary&apos;s share of trust income distributed during the tax year.
              </li>
              <li>
                <strong>Tax credit</strong> — We calculate the tax credit for each beneficiary based on the trust tax paid on their share.
              </li>
              <li>
                <strong>R185 forms</strong> — We prepare R185 (trust) forms for each beneficiary showing their income and tax credit, which they use to complete their own tax returns.
              </li>
            </ul>
            Beneficiary reporting ensures beneficiaries can accurately report trust income on their returns.
          </li>
          <li>
            <strong>Trust and Estate Tax Return filing</strong> — We complete and file the SA900 return:
            <ul>
              <li>
                <strong>SA900 form</strong> — We complete the Trust and Estate Tax Return (SA900), reporting all income, gains, expenses, and distributions.
              </li>
              <li>
                <strong>Supporting schedules</strong> — We complete any necessary supplementary pages (e.g., SA901 for income, SA904 for CGT).
              </li>
              <li>
                <strong>Filing deadline</strong> — We file by 31 October (paper) or 31 January (online) following the end of the tax year.
              </li>
              <li>
                <strong>Payment</strong> — We ensure any tax due is paid by 31 January following the end of the tax year.
              </li>
            </ul>
            Return filing ensures compliance and avoids penalties.
          </li>
          <li>
            <strong>Ongoing compliance and updates</strong> — We handle ongoing trust compliance:
            <ul>
              <li>
                <strong>Trust changes</strong> — We notify HMRC about changes to trustees, beneficiaries, settlors, or significant asset changes.
              </li>
              <li>
                <strong>Annual reviews</strong> — We review the trust&apos;s tax position annually and ensure returns are filed on time.
              </li>
              <li>
                <strong>Inheritance Tax reporting</strong> — We complete IHT100 forms when required for Inheritance Tax events (e.g., chargeable lifetime transfers).
              </li>
            </ul>
            Ongoing compliance ensures the trust stays compliant as circumstances change.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What trust and estate tax returns includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Trust registration with HMRC&apos;s Trust Registration Service (if needed)</li>
            <li>Identification and reporting of all trust income and gains</li>
            <li>Calculation of trust tax at special trust rates</li>
            <li>Preparation of R185 forms for beneficiaries</li>
            <li>Completion and filing of Trust and Estate Tax Returns (SA900)</li>
            <li>Notification of trust changes to HMRC</li>
            <li>Inheritance Tax reporting (IHT100) when required</li>
            <li>Annual reviews and ongoing compliance support</li>
          </ul>
        </div>

        <p>
          We handle all aspects of trust and estate tax returns, from registration to ongoing compliance. The key is understanding trustee responsibilities, ensuring accurate reporting, and keeping beneficiaries informed.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Type of trust</strong> — Discretionary trusts, interest in possession trusts, will trusts, and other types have different complexities.
          </li>
          <li>
            <strong>Number of beneficiaries</strong> — More beneficiaries require more R185 forms and distribution calculations.
          </li>
          <li>
            <strong>Volume of income and gains</strong> — Higher volumes of income, multiple income sources, and frequent capital gains increase complexity.
          </li>
          <li>
            <strong>Trust changes</strong> — Frequent changes to trustees, beneficiaries, or assets require more updates to HMRC.
          </li>
          <li>
            <strong>First-time filing vs. ongoing</strong> — First-time returns often require more setup work (registration, understanding the trust structure).
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple trust return (minimal income, few beneficiaries):</strong> £400–£800 (annual)
          </li>
          <li>
            <strong>Standard trust return (moderate income, multiple beneficiaries):</strong> £600–£1,200 (annual)
          </li>
          <li>
            <strong>Complex trust return (high income, multiple beneficiaries, frequent changes):</strong> £1,000–£2,500+ (annual)
          </li>
          <li>
            <strong>Trust registration (one-off):</strong> £200–£400
          </li>
          <li>
            <strong>Beneficiary R185 forms (per beneficiary):</strong> £50–£100
          </li>
          <li>
            <strong>IHT100 reporting (when required):</strong> £300–£600
          </li>
        </ul>

        <p>
          <strong>Why trust and estate tax returns cost what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Trust tax rules are complex and require specialist knowledge of trust taxation, trustee responsibilities, and beneficiary reporting.
          </li>
          <li>
            <strong>Administrative complexity</strong> — Preparing SA900 returns, R185 forms, and managing trust registration requires careful attention to detail.
          </li>
          <li>
            <strong>Trustee liability</strong> — The joint and several liability of trustees means accuracy is crucial to protect all trustees.
          </li>
          <li>
            <strong>Regulatory compliance</strong> — Trust registration and ongoing updates to HMRC require staying current with changing regulations.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Trust registration typically takes 1–2 weeks after HMRC processes the application. Tax return preparation typically takes 2–4 weeks after we receive trust records, depending on complexity. Returns must be filed by 31 October (paper) or 31 January (online) following the end of the tax year. Tax is due by 31 January following the end of the tax year.
        </p>

        <p>
          <strong>Payment:</strong> Trust tax is due by 31 January following the end of the tax year. Trustees are jointly and severally liable, meaning HMRC can pursue any trustee for unpaid tax.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes trust registration (if needed), income and gain identification, tax calculation, beneficiary R185 forms, SA900 return preparation and filing, and ongoing compliance updates. IHT100 reporting may be additional depending on your needs.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For trustees in Kent, whether you&apos;re managing a family trust in Medway, administering an estate in Maidstone, or handling a discretionary trust in Canterbury, trust tax returns require careful attention to deadlines and trustee responsibilities. Many Kent trustees are family members who&apos;ve been appointed as trustees without fully understanding the tax obligations, or they&apos;re dealing with complex trusts that have multiple beneficiaries and income sources. We help local trustees understand their responsibilities, register trusts correctly, file returns on time, and keep beneficiaries informed, ensuring everyone stays compliant. It&apos;s worth getting it right—trustee liability means mistakes can affect all trustees, and late filing penalties can add up quickly.
        </p>

        <p>
          <strong>Common Kent trust scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Family trusts</strong> — Trusts set up for family members, often with multiple beneficiaries and income from property or investments.
          </li>
          <li>
            <strong>Will trusts</strong> — Trusts created under wills, requiring ongoing administration and tax returns after probate.
          </li>
          <li>
            <strong>Discretionary trusts</strong> — Trusts where trustees have discretion over distributions, requiring careful tax planning and beneficiary reporting.
          </li>
          <li>
            <strong>Estate administration</strong> — Administering estates during probate, requiring trust tax returns until the estate is fully distributed.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent trustees are dealing with. Trust registration, tax return filing, beneficiary reporting, ongoing compliance—we&apos;ll handle your trust tax returns that keep you compliant and protect all trustees.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Trust & Estate Tax Returns - Frequently Asked Questions"
          subtitle="Common questions about trust tax returns, trustee responsibilities, and beneficiary reporting"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning including trust tax planning and beneficiary distributions
            </li>
            <li>
              <Link href="/services/tax/capital-gains-tax-returns/">Capital Gains Tax Returns</Link> — CGT returns (trusts also pay CGT on asset disposals)
            </li>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Personal tax returns for beneficiaries reporting trust income
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with trust and estate tax returns?" description="Don't let trustee responsibilities stress you out. We'll help you register the trust, file returns on time, provide beneficiaries with correct tax information, and stay compliant with trustee obligations. No missed deadlines, no beneficiary confusion—just proper trust tax compliance that keeps you and the beneficiaries protected." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with trust and estate tax returns?" />
    </>
  );
}

