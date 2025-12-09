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
  title: 'Companies House Filing Services in Kent | File Easy Accountancy',
  description: 'Expert Companies House filing services in Kent. Companies House filing, confirmation statement Companies House, Companies House returns, Companies House compliance. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/companies-house-filing/',
  },
  openGraph: {
    title: 'Companies House Filing Services in Kent | File Easy Accountancy',
    description: 'Expert Companies House filing services in Kent. Companies House filing, confirmation statement Companies House, Companies House returns, Companies House compliance.',
    url: 'https://fileeasyaccountancy.co.uk/services/companies-house-filing/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is a Companies House confirmation statement?',
    answer: 'A confirmation statement is a document that all UK companies must file with Companies House at least once every 12 months, confirming that corporate information held on the public register is accurate and up to date as of the confirmation date. The confirmation statement confirms information including registered office address, registered email address, director and secretary details, shareholder details, share capital, SIC codes, PSC information, and location of statutory registers. You must file a confirmation statement even if no changes have occurred, as it confirms existing information is still accurate. The filing deadline is 14 days after your confirmation date (the day before your company\'s anniversary or the anniversary of your last confirmation statement).',
  },
  {
    question: 'When do I need to file with Companies House?',
    answer: 'You need to file a confirmation statement with Companies House at least once every 12 months. The filing deadline is 14 days after your confirmation date, which is the day before your company\'s anniversary (the date your company was incorporated) or the day before the anniversary of your last confirmation statement filing, whichever is later. For example, if your company was incorporated on 15 June, your confirmation date would be 14 June each year, and your filing deadline would be 28 June. You should also file other forms with Companies House whenever company information changes (director changes, shareholder changes, registered office changes, etc.).',
  },
  {
    question: 'What happens if I don\'t file a confirmation statement?',
    answer: 'Failure to file a confirmation statement is a criminal offence, and Companies House may take serious action including: issuing financial penalties for late filing, striking your company off the Companies House register (which means your company ceases to exist legally), prosecuting directors for criminal offences, and making it difficult or impossible to do business (banks, suppliers, and customers may refuse to deal with a company that\'s not in good standing). It\'s important to file confirmation statements on time to avoid these consequences. Getting professional help ensures filing is done correctly and on time.',
  },
  {
    question: 'How do I file a confirmation statement?',
    answer: 'You file a confirmation statement online with Companies House using your company\'s authentication code. You need to log into the Companies House online filing system, select "File a confirmation statement", confirm all company information is accurate, update any information that has changed (SIC codes, statement of capital, shareholder information, etc.), include your registered email address (required from March 2024), include the lawfulness statement confirming intended future activities will be lawful (required from March 2024), and submit the confirmation statement. The process typically takes 15–30 minutes if all information is accurate. It\'s worth getting professional help to ensure filing is done correctly and all requirements are met.',
  },
  {
    question: 'What information does a confirmation statement include?',
    answer: 'A confirmation statement confirms the following company information: registered office address, registered email address (required from March 2024), SAIL address (if applicable), director and company secretary details, shareholder details and shareholdings, issued share capital, statement of capital, SIC codes (Standard Industrial Classification codes describing business activities), People with Significant Control (PSC) information, location of statutory company registers and records, and lawfulness statement (required from March 2024, confirming intended future activities will be lawful). The confirmation statement confirms this information is accurate as of the confirmation date. You can update certain information (SIC codes, statement of capital, shareholder information) when filing the confirmation statement, but other changes (director changes, registered office changes) must be filed separately before the confirmation statement.',
  },
  {
    question: 'Do I need to file a confirmation statement if nothing has changed?',
    answer: 'Yes, you must file a confirmation statement even if nothing has changed. The confirmation statement confirms that existing company information held on the public register is still accurate as of the confirmation date. Even if no changes have occurred, you still need to file a confirmation statement at least once every 12 months to confirm information is up to date. Failure to file a confirmation statement, even if nothing has changed, is a criminal offence and may result in financial penalties or company strike-off. It\'s important to file on time regardless of whether changes have occurred.',
  },
  {
    question: 'What are the new requirements for confirmation statements from March 2024?',
    answer: 'From 5 March 2024, confirmation statements must include: a registered email address (Companies House uses this to contact your company, and it won\'t be published on the public register), and a lawfulness statement (confirming that intended future activities of the company will be lawful—this must be made every year, and you cannot file a confirmation statement without it). These requirements apply to all confirmation statements with a statement date of 5 March 2024 onwards. In the future, companies will also need to provide full names of all shareholders and submit a complete new list of shareholders when filing (though this won\'t apply to traded companies subject to DTR5, which only need to report shareholders holding 5% or more). It\'s important to ensure your confirmation statements include these new requirements to avoid rejection.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Core', href: '/services/core' },
  { label: 'Companies House Filing', href: '/services/core/companies-house-filing' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function CompaniesHouseFilingPage() {
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
            serviceType: 'Companies House Filing',
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
            description: 'Expert Companies House filing services in Kent. Companies House filing, confirmation statement Companies House, Companies House returns, Companies House compliance.',
            name: 'Companies House Filing',
            url: 'https://fileeasyaccountancy.co.uk/services/core/companies-house-filing/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Companies House Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Confirmation Statement Filing' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company Information Updates' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Support' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Companies House Filing"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you run a UK limited company, you&apos;ve gotta file certain documents with Companies House every year—it&apos;s not optional, and missing deadlines can cause serious problems. All UK companies must file a confirmation statement with Companies House at least once every 12 months, confirming that corporate information held on the public register is accurate and up to date as of the confirmation date (
          <a href="https://www.gov.uk/guidance/confirmation-statement-guidance" target="_blank" rel="noopener noreferrer">
            gov.uk confirmation statement
          </a>
          ). The confirmation statement filing deadline is 14 days after the day before the anniversary of company formation or the anniversary of your last confirmation statement filing, whichever is later. Failure to file a confirmation statement is a criminal offence, and Companies House may issue financial penalties or strike your company off the register.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>All UK companies must file a confirmation statement at least once every 12 months</strong> — This confirms that company information on the public register is accurate and up to date
            </li>
            <li>
              <strong>Filing deadline is 14 days after your confirmation date</strong> — The confirmation date is the day before your company&apos;s anniversary or the anniversary of your last confirmation statement
            </li>
            <li>
              <strong>Failure to file is a criminal offence</strong> — Companies House may issue financial penalties or strike your company off the register if you don&apos;t file on time
            </li>
            <li>
              <strong>You must file even if nothing has changed</strong> — A confirmation statement confirms existing information is still accurate, even if no changes occurred
            </li>
          </ul>
        </div>

        <p>
          The problem is most companies don&apos;t understand their Companies House filing obligations properly. They miss deadlines, forget to update information, or don&apos;t realise what needs to be confirmed. That causes problems—criminal offences, financial penalties, company strike-off, and damage to your company&apos;s reputation.
        </p>

        <p>
          We handle Companies House filing for companies needing proper compliance: confirmation statement filing (preparing and filing your annual confirmation statement with Companies House on time), information updates (updating company information including directors, shareholders, registered office, SIC codes, and PSC details), registered email address filing (ensuring your registered email address is filed with Companies House as required from March 2024), lawfulness statement (confirming that intended future activities will be lawful as required from March 2024), deadline management (tracking your confirmation statement deadlines and ensuring filing on time), and compliance support (providing ongoing support to ensure all Companies House filing obligations are met). Whether you&apos;re a company in Medway needing help with confirmation statements, a company in Maidstone wanting to update company information, or a company in Canterbury needing ongoing Companies House compliance support, we&apos;ll handle your Companies House filing that works. No penalties, no strike-off risks—just proper compliance that keeps your company in good standing.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet your Companies House filing obligations</strong> — File confirmation statements and other required documents correctly and on time, avoiding penalties and strike-off risks. Proper filing means your company stays in good standing.
          </li>
          <li>
            <strong>Keep company information accurate</strong> — Update directors, shareholders, registered office, and other company information when changes occur, ensuring the public register is always accurate. Accurate information protects your company&apos;s reputation.
          </li>
          <li>
            <strong>Avoid criminal offences and penalties</strong> — File on time and correctly, avoiding criminal offences, financial penalties, and company strike-off. Avoiding penalties protects your company and directors.
          </li>
          <li>
            <strong>Comply with new requirements</strong> — Meet new requirements including registered email address and lawfulness statements introduced from March 2024. Compliance ensures you meet all obligations.
          </li>
          <li>
            <strong>Save time and stress</strong> — Let us handle Companies House filing while you focus on running your business. Saving time lets you focus on what matters.
          </li>
          <li>
            <strong>Stay compliant throughout the year</strong> — Get ongoing support to ensure all Companies House filing obligations are met as they arise. Staying compliant protects your company.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for Companies House filing:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your company: when your company was incorporated, when your last confirmation statement was filed (if applicable), whether you&apos;ve made any changes to company information (directors, shareholders, registered office, etc.), what Companies House filing support you need, and what you want to achieve. Understanding your situation helps us determine what needs to be done.
          </li>
          <li>
            <strong>Confirmation statement deadline check</strong> — We check your confirmation statement deadlines:
            <ul>
              <li>
                <strong>Confirmation date calculation</strong> — We calculate your confirmation date (the day before your company&apos;s anniversary or the anniversary of your last confirmation statement, whichever is later).
              </li>
              <li>
                <strong>Filing deadline</strong> — We calculate your filing deadline (14 days after your confirmation date).
              </li>
              <li>
                <strong>Deadline tracking</strong> — We set up deadline tracking to ensure you never miss a filing deadline.
              </li>
              <li>
                <strong>Reminder system</strong> — We set up reminders to ensure filing is completed on time.
              </li>
            </ul>
            Confirmation statement deadline check ensures you know when to file.
          </li>
          <li>
            <strong>Company information review</strong> — We review your company information to ensure it&apos;s accurate:
            <ul>
              <li>
                <strong>Registered office address</strong> — We verify your registered office address is correct and up to date.
              </li>
              <li>
                <strong>Registered email address</strong> — We ensure your registered email address is filed (required from March 2024) and check it&apos;s correct.
              </li>
              <li>
                <strong>Director and secretary details</strong> — We verify director and company secretary details are accurate.
              </li>
              <li>
                <strong>Shareholder information</strong> — We verify shareholder details and shareholdings are correct.
              </li>
              <li>
                <strong>SIC codes</strong> — We verify Standard Industrial Classification (SIC) codes accurately reflect your business activities.
              </li>
              <li>
                <strong>PSC information</strong> — We verify People with Significant Control (PSC) information is accurate.
              </li>
              <li>
                <strong>Statement of capital</strong> — We verify statement of capital information is correct.
              </li>
            </ul>
            Company information review ensures accuracy before filing.
          </li>
          <li>
            <strong>Information updates (if needed)</strong> — If company information needs updating, we file the necessary forms:
            <ul>
              <li>
                <strong>Director changes</strong> — We file AP01 (appoint director), TM01 (terminate director), or CH01 (change director details) forms as needed.
              </li>
              <li>
                <strong>Secretary changes</strong> — We file AP03 (appoint secretary), TM02 (terminate secretary), or CH03 (change secretary details) forms as needed.
              </li>
              <li>
                <strong>Registered office changes</strong> — We file AD01 (change registered office address) forms as needed.
              </li>
              <li>
                <strong>Shareholder changes</strong> — We file appropriate forms for shareholder changes as needed.
              </li>
              <li>
                <strong>PSC changes</strong> — We file PSC01-PSC09 forms as needed for People with Significant Control changes.
              </li>
              <li>
                <strong>SIC code changes</strong> — We update SIC codes through the confirmation statement if needed.
              </li>
            </ul>
            Information updates ensure the register is accurate before confirming.
          </li>
          <li>
            <strong>Confirmation statement preparation and filing</strong> — We prepare and file your confirmation statement:
            <ul>
              <li>
                <strong>Information confirmation</strong> — We confirm all company information is accurate as of the confirmation date.
              </li>
              <li>
                <strong>Registered email address</strong> — We ensure your registered email address is included (required from March 2024).
              </li>
              <li>
                <strong>Lawfulness statement</strong> — We include the lawfulness statement confirming intended future activities will be lawful (required from March 2024).
              </li>
              <li>
                <strong>Additional information updates</strong> — We update SIC codes, statement of capital, trading status of shares, or shareholder information if needed.
              </li>
              <li>
                <strong>Online filing</strong> — We file your confirmation statement online with Companies House using your authentication code, ensuring filing is completed before the deadline.
              </li>
              <li>
                <strong>Filing confirmation</strong> — We confirm filing is successful and provide you with confirmation.
              </li>
            </ul>
            Confirmation statement preparation and filing ensures compliance on time.
          </li>
          <li>
            <strong>Other Companies House filings (as needed)</strong> — We handle other Companies House filing requirements:
            <ul>
              <li>
                <strong>Annual accounts filing</strong> — We can help with annual accounts filing if needed (though this is usually handled separately).
              </li>
              <li>
                <strong>Change of accounting reference date</strong> — We file AA01 forms if you need to change your accounting reference date.
              </li>
              <li>
                <strong>Company name changes</strong> — We file NM01 forms if you need to change your company name.
              </li>
              <li>
                <strong>Other statutory filings</strong> — We handle other Companies House filing requirements as they arise.
              </li>
            </ul>
            Other filings ensure all Companies House obligations are met.
          </li>
          <li>
            <strong>Ongoing compliance support</strong> — We provide ongoing Companies House compliance support:
            <ul>
              <li>
                <strong>Deadline tracking</strong> — We track all Companies House filing deadlines and remind you when filings are due.
              </li>
              <li>
                <strong>Information update support</strong> — We help you update company information whenever changes occur.
              </li>
              <li>
                <strong>Compliance monitoring</strong> — We monitor your company&apos;s Companies House compliance status and alert you to any issues.
              </li>
              <li>
                <strong>Annual review</strong> — We provide annual reviews to ensure all filing obligations are met and information is up to date.
              </li>
            </ul>
            Ongoing support keeps your company compliant throughout the year.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What Companies House filing includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Confirmation statement deadline check and tracking</li>
            <li>Company information review and verification</li>
            <li>Information updates (directors, shareholders, registered office, PSC, etc.)</li>
            <li>Confirmation statement preparation and filing</li>
            <li>Registered email address and lawfulness statement compliance</li>
            <li>Other Companies House filings as needed</li>
            <li>Ongoing compliance support and deadline tracking</li>
          </ul>
        </div>

        <p>
          We handle all aspects of Companies House filing, from initial review to ongoing compliance. The key is understanding deadlines, keeping information accurate, and filing on time to avoid penalties and strike-off risks.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Complexity of company structure</strong> — Simple company (few shareholders, straightforward structure) vs. complex company (multiple shareholders, complex structure, multiple PSCs) increases complexity.
          </li>
          <li>
            <strong>Number of information updates</strong> — More information updates (director changes, shareholder changes, etc.) increase work required.
          </li>
          <li>
            <strong>Filing frequency</strong> — One-off confirmation statement filing vs. ongoing compliance support affects pricing.
          </li>
          <li>
            <strong>Company age and filing history</strong> — New companies vs. established companies with filing history affects setup requirements.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple confirmation statement filing (no changes, straightforward):</strong> £50–£150 (includes deadline check, information review, confirmation statement preparation and filing)
          </li>
          <li>
            <strong>Standard confirmation statement filing (some information updates, registered email address, lawfulness statement):</strong> £100–£250 (includes information updates, confirmation statement preparation and filing)
          </li>
          <li>
            <strong>Complex confirmation statement filing (multiple information updates, complex structure, ongoing support):</strong> £200–£400+ (includes comprehensive information updates, confirmation statement preparation and filing, ongoing compliance support)
          </li>
          <li>
            <strong>Ongoing Companies House compliance support (annual):</strong> £150–£300 per year (deadline tracking, information update support, annual confirmation statement filing)
          </li>
        </ul>

        <p>
          <strong>Why Companies House filing cost what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding Companies House filing requirements, deadlines, and compliance obligations requires specialist knowledge.
          </li>
          <li>
            <strong>Time and complexity</strong> — Reviewing company information, preparing filings, updating information, and ensuring compliance takes time and attention to detail.
          </li>
          <li>
            <strong>Risk management</strong> — Ensuring accurate filing and compliance protects your company from penalties, strike-off, and criminal offences.
          </li>
          <li>
            <strong>Ongoing support</strong> — Providing deadline tracking and ongoing compliance support requires ongoing commitment and expertise.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Confirmation statement filing typically takes 1–2 weeks from review to filing, depending on whether information updates are needed. Information updates typically take 1–2 weeks depending on complexity. Companies House processes filings within a few days, and confirmation is usually received within 1 week of filing.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced on completion of filing, or for ongoing support, invoiced annually or quarterly depending on agreement. Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes confirmation statement deadline check, company information review, information updates (if needed), confirmation statement preparation and filing, registered email address and lawfulness statement compliance, and ongoing compliance support (if included in package).
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For companies in Kent, whether you&apos;re a company in Medway needing help with confirmation statements, a company in Maidstone wanting to update company information, or a company in Canterbury needing ongoing Companies House compliance support, Companies House filing is essential for staying compliant and avoiding penalties. Many Kent companies don&apos;t realise their Companies House filing obligations, or they struggle with understanding deadlines, updating information, and filing correctly. We help local companies understand their obligations, track deadlines, review and update company information, file confirmation statements on time, and stay compliant throughout the year, ensuring they avoid penalties, strike-off risks, and criminal offences. It&apos;s worth getting it right—missing Companies House filing deadlines can result in criminal offences, financial penalties, and company strike-off, while proper compliance keeps your company in good standing.
        </p>

        <p>
          <strong>Common Kent Companies House filing scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Annual confirmation statements</strong> — Companies needing help with annual confirmation statement filing and deadline management.
          </li>
          <li>
            <strong>Company information updates</strong> — Companies needing to update director, shareholder, registered office, or other company information.
          </li>
          <li>
            <strong>New requirements compliance</strong> — Companies needing to comply with new requirements including registered email address and lawfulness statements from March 2024.
          </li>
          <li>
            <strong>Ongoing compliance support</strong> — Companies wanting ongoing support to ensure all Companies House filing obligations are met throughout the year.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent companies are dealing with. Confirmation statement filing, information updates, deadline tracking, ongoing compliance—we&apos;ll handle your Companies House filing that keeps your company compliant and in good standing.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Companies House Filing - Frequently Asked Questions"
          subtitle="Common questions about confirmation statements, filing deadlines, and compliance requirements"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/compliance/annual-accounts-preparation/">Annual Accounts Preparation</Link> — Annual accounts filing with Companies House
            </li>
            <li>
              <Link href="/services/company-admin/company-formation-uk/">Company Formation UK</Link> — Setting up a new UK company
            </li>
            <li>
              <Link href="/services/company-admin/confirmation-statements/">Confirmation Statements</Link> — Annual confirmation statement filing service
            </li>
          </ul>
          <p>
            <Link href="/services/core/" className="font-semibold">
              View all core services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with Companies House filing?" description="Don't risk penalties or company strike-off. We'll help you file confirmation statements on time, update company information, and stay compliant with all Companies House requirements. No penalties, no strike-off risks—just proper compliance that keeps your company in good standing." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with Companies House filing?" />
    </>
  );
}

