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
  title: 'Company Formation & Bank Setup Services in Kent | File Easy Accountancy',
  description: 'Expert company formation and bank setup services in Kent. Set up limited company, company registration UK, company formation UK, company bank account setup. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/company-formation-bank-setup/',
  },
  openGraph: {
    title: 'Company Formation & Bank Setup Services in Kent | File Easy Accountancy',
    description: 'Expert company formation and bank setup services in Kent. Set up limited company, company registration UK, company formation UK, company bank account setup.',
    url: 'https://fileeasyaccountancy.co.uk/services/company-formation-bank-setup/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I set up a limited company?',
    answer: 'To set up a limited company, you need to: choose a company name (checking availability and ensuring it meets Companies House requirements), provide required details (registered office address, director details, shareholder details, share capital), register with Companies House (online typically costs £12 and takes 24 hours, or by post typically costs £40 and takes longer), receive your certificate of incorporation and company number, prepare company documents (memorandum and articles of association), and understand ongoing compliance requirements (annual accounts, confirmation statements, corporation tax). Limited companies must have at least one director and one shareholder. It\'s worth getting professional help to ensure company formation is completed correctly and you understand ongoing requirements.',
  },
  {
    question: 'How much does it cost to set up a limited company?',
    answer: 'The cost to set up a limited company depends on how you do it: Companies House registration fees are £12 if done online or £40 if done by post. Professional company formation services typically cost £50–£500+ depending on service scope (formation only vs. comprehensive service including bank setup, compliance setup, ongoing support). Additional costs may include registered office service (if needed, typically £50–£150 per year), business bank account fees (monthly fees, minimum deposits—varies by bank), and ongoing compliance costs (annual accounts, confirmation statements, corporation tax returns). It\'s worth getting quotes from providers to compare costs and services.',
  },
  {
    question: 'What do I need to set up a limited company?',
    answer: 'To set up a limited company, you need: a company name (available and meeting Companies House requirements), a registered office address (in the UK, can be different from business address, will be publicly available), at least one director (with name, address, date of birth, nationality, occupation), at least one shareholder (with name, address, number of shares held—directors can also be shareholders), share capital (number and value of shares, typically £1 per share for small companies), and company objects (what the company will do, typically \'any lawful business\'). You\'ll also need to understand ongoing compliance requirements (annual accounts, confirmation statements, corporation tax). It\'s worth getting professional help to ensure you have everything you need and formation is completed correctly.',
  },
  {
    question: 'How do I register a company in the UK?',
    answer: 'To register a company in the UK, you need to: choose a company name and check it\'s available, gather required details (registered office address, director details, shareholder details, share capital), register online with Companies House (typically £12, takes 24 hours) or by post (typically £40, takes longer), and receive your certificate of incorporation and company number. Registration is done through Companies House, and you can register online or by post. After registration, you\'ll need to set up company records, understand ongoing compliance, and may want to open a business bank account. It\'s worth getting professional help to ensure registration is completed correctly and you understand next steps.',
  },
  {
    question: 'Do I need a business bank account for a limited company?',
    answer: 'Yes, you should have a business bank account for a limited company. Limited companies are separate legal entities from their owners, so having a separate business bank account helps keep company finances separate from personal finances, makes accounting easier, and is often required by banks and customers. Most banks require limited companies to provide company registration documents, director and shareholder details, proof of identity and address, and business information before opening a business bank account. Opening a business bank account typically takes 1–2 weeks. It\'s worth getting professional help to open a business bank account, as requirements vary by bank and the process can be complex.',
  },
  {
    question: 'How long does it take to set up a limited company?',
    answer: 'Setting up a limited company typically takes: 24 hours if registered online with Companies House (fastest option, typically £12), or longer if registered by post (typically £40, can take several days or weeks). However, the overall process (including company name checking, gathering details, preparing documents, opening bank account, setting up compliance) typically takes 1–3 weeks depending on complexity and service scope. Simple company formation (registration only) can be done in 24 hours, while comprehensive service (formation, bank setup, compliance setup) typically takes 2–3 weeks. It\'s worth getting professional help to ensure the process goes smoothly and you understand timelines.',
  },
  {
    question: 'What is the difference between a limited company and sole trader?',
    answer: 'The main differences between a limited company and sole trader are: limited liability (limited companies provide limited liability protection for owners\' personal assets, while sole traders have unlimited liability), tax treatment (limited companies pay corporation tax on profits, while sole traders pay income tax and National Insurance on profits), legal status (limited companies are separate legal entities, while sole traders are the same legal entity as the business), administration (limited companies have more administrative requirements—annual accounts, confirmation statements, company records—while sole traders have fewer requirements), and business structure (limited companies can have multiple directors and shareholders, while sole traders are single-person businesses). It\'s worth getting professional advice to understand which structure is best for your business.',
  },
  {
    question: 'How do I open a business bank account for a limited company?',
    answer: 'To open a business bank account for a limited company, you need to: choose a suitable bank (considering fees, features, requirements, accessibility), prepare required documents (certificate of incorporation, memorandum and articles of association, director and shareholder details, proof of identity and address, business plan or information about your business), complete bank application forms, provide supporting documentation, and wait for account opening (typically takes 1–2 weeks). Requirements vary by bank, and some banks may require a minimum deposit or charge monthly fees. It\'s worth getting professional help to choose a bank, prepare documents, and complete applications, as the process can be complex and requirements vary.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Core', href: '/services/core' },
  { label: 'Company Formation & Bank Setup', href: '/services/core/company-formation-bank-setup' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function CompanyFormationBankSetupPage() {
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
            serviceType: 'Company Formation & Bank Setup',
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
            description: 'Expert company formation and bank setup services in Kent. Set up limited company, company registration UK, company formation UK, company bank account setup.',
            name: 'Company Formation & Bank Setup',
            url: 'https://fileeasyaccountancy.co.uk/services/core/company-formation-bank-setup/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Company Formation Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company Registration' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bank Account Setup' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Setup' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ongoing Support' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Company Formation & Bank Setup"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re starting a business, setting up a limited company can give you limited liability and tax benefits—but the process can be confusing if you don&apos;t know where to start. To set up a limited company in the UK, you need to register with Companies House, which typically costs £12 if done online or £40 if done by post, and takes 24 hours if done online (
          <a href="https://www.gov.uk/set-up-limited-company" target="_blank" rel="noopener noreferrer">
            gov.uk set up limited company
          </a>
          ). Limited companies must have at least one director (who can also be a shareholder) and at least one shareholder, and must provide details including company name, registered office address, director details, shareholder details, and share capital. Most banks require limited companies to provide company registration documents (certificate of incorporation, memorandum and articles of association), director and shareholder details, proof of identity and address, and business plan or information about the business before opening a business bank account.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Limited company registration costs £12 online or £40 by post</strong> — And typically takes 24 hours if done online
            </li>
            <li>
              <strong>Limited companies need at least one director and one shareholder</strong> — And must provide company details, registered office address, and share capital
            </li>
            <li>
              <strong>Limited companies are separate legal entities</strong> — Meaning owners have limited liability and company profits are subject to corporation tax
            </li>
            <li>
              <strong>Business bank accounts typically take 1–2 weeks to open</strong> — With requirements varying by bank, including company registration documents and director details
            </li>
          </ul>
        </div>

        <p>
          The problem is most people find company formation confusing or don&apos;t understand the requirements. They don&apos;t know what information they need to provide, struggle to choose a company name (checking availability, avoiding restricted words), don&apos;t understand share capital requirements, or find it difficult to open a business bank account (understanding requirements, choosing a bank, providing documents). That causes problems—delays in company registration, rejection of company names or applications, issues opening bank accounts, confusion about ongoing compliance requirements, and stress from trying to get it right.
        </p>

        <p>
          We handle company formation and bank setup for businesses across Kent: company formation (helping you set up a limited company, including name checking, registration with Companies House, preparing required documents, and completing registration), bank account setup (helping you open a business bank account, including bank selection, document preparation, application support, and account opening), company structure advice (advising on company structure, share capital, director and shareholder arrangements, and ongoing compliance requirements), registered office service (providing registered office address service if needed, ensuring address is suitable for Companies House requirements), document preparation (preparing memorandum and articles of association, shareholder agreements, and other required documents), compliance setup (helping you understand and set up ongoing compliance requirements—annual accounts, confirmation statements, corporation tax, company records), and ongoing support (providing ongoing support for company administration, compliance, and any changes needed). Whether you&apos;re starting a business in Medway needing company formation, a new company in Maidstone wanting bank account setup, or a business in Canterbury needing company formation and bank setup support, we&apos;ll handle your company formation and bank setup that works. No delays, no confusion—just proper company formation and bank setup that gets you started right.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Set up your limited company quickly</strong> — We&apos;ll help you register your limited company with Companies House, typically in 24 hours if done online. Quick registration gets you started fast.
          </li>
          <li>
            <strong>Choose the right company name</strong> — We&apos;ll help you choose a company name, check availability, and ensure it meets Companies House requirements. Right name prevents rejection.
          </li>
          <li>
            <strong>Open a business bank account</strong> — We&apos;ll help you open a business bank account, including bank selection, document preparation, and application support. Business bank account keeps company finances separate.
          </li>
          <li>
            <strong>Understand your compliance requirements</strong> — We&apos;ll help you understand ongoing compliance requirements (annual accounts, confirmation statements, corporation tax) so you know what to expect. Understanding requirements prevents surprises.
          </li>
          <li>
            <strong>Set up proper company structure</strong> — We&apos;ll help you set up proper company structure, share capital, and director/shareholder arrangements. Proper structure prevents issues later.
          </li>
          <li>
            <strong>Save time and reduce stress</strong> — Having professional support for company formation and bank setup saves time and reduces stress from registration and bank account processes.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for company formation and bank setup:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: what type of business you&apos;re starting, whether you&apos;ve chosen a company name, whether you understand limited company requirements, whether you need a business bank account, what your timeline is, and what help you need. Understanding your situation helps us tailor support.
          </li>
          <li>
            <strong>Company name check and selection</strong> — We help you choose and check your company name:
            <ul>
              <li>
                <strong>Name availability check</strong> — We check if your chosen company name is available (using Companies House name checker) and not already registered or too similar to existing companies.
              </li>
              <li>
                <strong>Name requirements</strong> — We ensure your company name meets Companies House requirements (no restricted words, appropriate endings like &apos;Limited&apos; or &apos;Ltd&apos;, no sensitive words without approval).
              </li>
              <li>
                <strong>Name suggestions</strong> — We provide name suggestions if your first choice isn&apos;t available or doesn&apos;t meet requirements.
              </li>
              <li>
                <strong>Name reservation</strong> — We help reserve your company name if needed (though not required for UK company registration).
              </li>
            </ul>
            Company name check ensures your name is suitable and available.
          </li>
          <li>
            <strong>Company details collection</strong> — We collect all required company details:
            <ul>
              <li>
                <strong>Registered office address</strong> — We confirm your registered office address (must be in the UK, can be different from business address, will be publicly available on Companies House).
              </li>
              <li>
                <strong>Director details</strong> — We collect details of all directors (names, addresses, dates of birth, nationality, occupation), ensuring at least one director is required.
              </li>
              <li>
                <strong>Shareholder details</strong> — We collect details of all shareholders (names, addresses, number of shares held), ensuring at least one shareholder is required (directors can also be shareholders).
              </li>
              <li>
                <strong>Share capital</strong> — We determine share capital (number and value of shares, typically £1 per share for small companies).
              </li>
              <li>
                <strong>Company objects</strong> — We confirm company objects (what the company will do, typically &apos;any lawful business&apos; for flexibility).
              </li>
            </ul>
            Company details collection ensures all required information is gathered.
          </li>
          <li>
            <strong>Company registration</strong> — We register your company with Companies House:
            <ul>
              <li>
                <strong>Document preparation</strong> — We prepare required documents (memorandum of association, articles of association) or use standard templates if appropriate.
              </li>
              <li>
                <strong>Online registration</strong> — We complete company registration online with Companies House (typically £12, takes 24 hours) or by post if preferred (typically £40, takes longer).
              </li>
              <li>
                <strong>Application submission</strong> — We submit your company registration application with all required information (company name, registered office, director details, shareholder details, share capital).
              </li>
              <li>
                <strong>Registration confirmation</strong> — We confirm successful registration and provide you with your certificate of incorporation and company number.
              </li>
            </ul>
            Company registration gets your company set up officially.
          </li>
          <li>
            <strong>Company documents</strong> — We provide you with company documents:
            <ul>
              <li>
                <strong>Certificate of incorporation</strong> — We provide your certificate of incorporation (issued by Companies House upon successful registration).
              </li>
              <li>
                <strong>Memorandum and articles of association</strong> — We provide your memorandum and articles of association (governing documents for your company).
              </li>
              <li>
                <strong>Company number</strong> — We provide your company number (unique identifier for your company).
              </li>
              <li>
                <strong>Company records</strong> — We help set up initial company records (register of directors, register of shareholders, register of persons with significant control) if needed.
              </li>
            </ul>
            Company documents ensure you have everything you need.
          </li>
          <li>
            <strong>Business bank account setup</strong> — We help you open a business bank account:
            <ul>
              <li>
                <strong>Bank selection</strong> — We help you choose a suitable bank (considering fees, features, requirements, accessibility) based on your business needs.
              </li>
              <li>
                <strong>Document preparation</strong> — We prepare required documents for bank account opening (certificate of incorporation, memorandum and articles of association, director and shareholder details, proof of identity and address, business plan or information about your business).
              </li>
              <li>
                <strong>Application support</strong> — We help you complete bank account application forms and provide supporting documentation.
              </li>
              <li>
                <strong>Bank liaison</strong> — We liaise with the bank on your behalf if needed, providing additional information or clarification.
              </li>
              <li>
                <strong>Account opening</strong> — We help ensure your business bank account is opened successfully (typically takes 1–2 weeks).
              </li>
            </ul>
            Business bank account setup gets your company finances sorted.
          </li>
          <li>
            <strong>Compliance setup and advice</strong> — We help you understand ongoing compliance:
            <ul>
              <li>
                <strong>Annual accounts</strong> — We explain annual accounts filing requirements (companies must file annual accounts with Companies House within 9 months of year end).
              </li>
              <li>
                <strong>Confirmation statements</strong> — We explain confirmation statements (companies must file confirmation statements with Companies House at least once per year, confirming company details are up to date).
              </li>
              <li>
                <strong>Corporation tax</strong> — We explain corporation tax requirements (companies must register for corporation tax with HMRC, file corporation tax returns, and pay corporation tax on profits).
              </li>
              <li>
                <strong>Company records</strong> — We explain company record-keeping requirements (register of directors, register of shareholders, register of persons with significant control, meeting minutes if applicable).
              </li>
              <li>
                <strong>PAYE and VAT</strong> — We explain PAYE and VAT registration if applicable (if you have employees or turnover exceeds thresholds).
              </li>
            </ul>
            Compliance setup ensures you understand ongoing requirements.
          </li>
          <li>
            <strong>Ongoing support</strong> — We provide ongoing support:
            <ul>
              <li>
                <strong>Company administration</strong> — We provide ongoing support for company administration (director changes, shareholder changes, address changes, share transfers).
              </li>
              <li>
                <strong>Compliance support</strong> — We provide ongoing support for compliance (annual accounts, confirmation statements, corporation tax returns).
              </li>
              <li>
                <strong>Business advice</strong> — We provide ongoing business advice as your company grows (tax planning, business structure, compliance changes).
              </li>
            </ul>
            Ongoing support ensures continued compliance and growth.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What company formation and bank setup includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Company name check and selection</li>
            <li>Company details collection (registered office, directors, shareholders, share capital)</li>
            <li>Company registration with Companies House</li>
            <li>Company documents (certificate of incorporation, memorandum, articles)</li>
            <li>Business bank account setup (bank selection, document preparation, application support, account opening)</li>
            <li>Compliance setup and advice (annual accounts, confirmation statements, corporation tax, company records)</li>
            <li>Ongoing support (company administration, compliance, business advice)</li>
          </ul>
        </div>

        <p>
          We handle all aspects of company formation and bank setup, from initial registration to ongoing support. The key is understanding requirements, preparing documents correctly, completing registration, opening a bank account, and setting up compliance processes.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Service scope</strong> — Company formation only vs. comprehensive service (formation, bank setup, compliance setup) affects scope and cost.
          </li>
          <li>
            <strong>Company complexity</strong> — Simple companies (single director/shareholder) vs. complex companies (multiple directors/shareholders, complex share structures) affects time.
          </li>
          <li>
            <strong>Bank account requirements</strong> — Simple bank account applications vs. complex applications (specialist banks, complex business structures) affects time.
          </li>
          <li>
            <strong>Additional services</strong> — Registered office service, nominee services, additional document preparation affect cost.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Company formation only (simple company, online registration):</strong> £50–£150 (includes name check, company registration, basic documents, certificate of incorporation)
          </li>
          <li>
            <strong>Company formation + bank setup (standard service):</strong> £200–£500 (includes company formation, bank selection, document preparation, bank application support, account opening)
          </li>
          <li>
            <strong>Comprehensive company formation + bank setup (full service, compliance setup):</strong> £400–£1,000+ (includes company formation, bank setup, compliance setup, registered office service if needed, ongoing support for first year)
          </li>
          <li>
            <strong>Registered office service (if needed):</strong> £50–£150 per year (provides registered office address service)
          </li>
          <li>
            <strong>Ongoing company administration (if needed):</strong> £100–£300 per year (ongoing support for company administration, compliance, changes)
          </li>
        </ul>

        <p>
          <strong>Why company formation and bank setup costs what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Time and expertise</strong> — Company formation, bank setup, and compliance setup require time and expertise to ensure everything is done correctly.
          </li>
          <li>
            <strong>Value provided</strong> — Company formation and bank setup help you start your business properly, with limited liability, separate company finances, and compliance set up correctly, providing substantial value.
          </li>
          <li>
            <strong>Risk management</strong> — Ensuring correct company formation and bank setup protects you from delays, rejection, compliance issues, and bank account problems.
          </li>
          <li>
            <strong>Ongoing support</strong> — Comprehensive service includes ongoing support for compliance and administration, providing long-term value.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Company formation typically takes 24 hours if done online (or longer if done by post). Bank account setup typically takes 1–2 weeks. Comprehensive service (formation, bank setup, compliance setup) typically takes 2–3 weeks overall.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced on completion of company formation, or in stages: company formation (on registration), bank setup (on account opening), compliance setup (on completion). Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes company formation, bank account setup support, compliance setup, and basic documents. Companies House registration fee (£12 online or £40 by post) is typically included in the price or charged separately. Bank account fees (monthly fees, minimum deposits) are separate and paid directly to the bank.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For businesses starting in Kent, whether you&apos;re starting a business in Medway needing company formation, a new company in Maidstone wanting bank account setup, or a business in Canterbury needing comprehensive company formation and bank setup support, company formation and bank setup help you start your business properly. Many Kent businesses struggle with company formation or find bank account opening difficult, leading to delays and confusion. We help local businesses set up limited companies correctly, open business bank accounts, understand compliance requirements, and get started on the right foot. Limited companies must file annual accounts and confirmation statements with Companies House, submit corporation tax returns to HMRC, and maintain company records including register of directors, register of shareholders, and register of persons with significant control.
        </p>

        <p>
          <strong>Common Kent company formation scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>New businesses</strong> — Businesses just starting out, needing company formation and bank account setup to get started properly.
          </li>
          <li>
            <strong>Sole traders converting</strong> — Sole traders converting to limited companies, needing company formation and understanding of differences.
          </li>
          <li>
            <strong>Existing businesses restructuring</strong> — Existing businesses restructuring as limited companies, needing company formation and bank account setup.
          </li>
          <li>
            <strong>Partnerships incorporating</strong> — Partnerships incorporating as limited companies, needing company formation and bank account setup.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses are dealing with. Company formation, bank setup, compliance setup, ongoing support—we&apos;ll handle your company formation and bank setup that gets you started right.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Company Formation & Bank Setup - Frequently Asked Questions"
          subtitle="Common questions about limited company formation, bank account setup, and compliance"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/core/companies-house-filing/">Companies House Filing</Link> — Companies House filing services
            </li>
            <li>
              <Link href="/services/core/business-structure-review/">Business Structure Review</Link> — Business structure advice
            </li>
            <li>
              <Link href="/services/core/registered-office-service/">Registered Office Service</Link> — Registered office address service
            </li>
          </ul>
          <p>
            <Link href="/services/core/" className="font-semibold">
              View all core services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with company formation and bank setup?" description="Don't risk delays or confusion. We'll help you set up your limited company, open a business bank account, and understand your compliance requirements. No delays, no confusion—just proper company formation and bank setup that gets you started right." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with company formation and bank setup?" />
    </>
  );
}

