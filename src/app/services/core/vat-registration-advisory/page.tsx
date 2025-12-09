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
  title: 'VAT Registration Advisory Services in Kent | File Easy Accountancy',
  description: 'Expert VAT registration advisory services in Kent. VAT registration, register for VAT, VAT registration threshold, VAT registration UK, VAT registration process. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/vat-registration-advisory/',
  },
  openGraph: {
    title: 'VAT Registration Advisory Services in Kent | File Easy Accountancy',
    description: 'Expert VAT registration advisory services in Kent. VAT registration, register for VAT, VAT registration threshold, VAT registration UK.',
    url: 'https://fileeasyaccountancy.co.uk/services/vat-registration-advisory/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'When do I need to register for VAT?',
    answer: 'You must register for VAT if your VAT taxable turnover exceeds £90,000 in a rolling 12-month period (2024/25 threshold), or if you expect it to exceed £90,000 in the next 30 days. The threshold is calculated on a rolling basis, not a calendar year—you need to check your turnover over the past 12 months continuously. If you exceed the threshold, you must register within 30 days, with registration effective from the date you exceeded the threshold or from a future date you specify. You can also register voluntarily even if your turnover is below £90,000, which may be beneficial if you want to reclaim VAT on purchases. It\'s worth getting professional advice to understand your specific registration requirements and timing.',
  },
  {
    question: 'What is the VAT registration threshold?',
    answer: 'The VAT registration threshold is £90,000 for 2024/25. This means you must register for VAT if your VAT taxable turnover exceeds £90,000 in a rolling 12-month period (calculated continuously, not per calendar year), or if you expect it to exceed £90,000 in the next 30 days. The threshold applies to VAT taxable turnover (sales that are subject to VAT at standard, reduced, or zero rates—exempt supplies don\'t count). The threshold is reviewed annually and may change. You can register voluntarily even if your turnover is below the threshold, which may be beneficial if you have significant VAT on purchases that you could reclaim.',
  },
  {
    question: 'How do I register for VAT?',
    answer: 'To register for VAT, you need to: calculate your VAT taxable turnover to determine if you need to register (or if voluntary registration makes sense), gather required information (business details, turnover figures, bank details, business activities, etc.), complete VAT registration online via HMRC website (or use an accountant to complete it on your behalf), choose your VAT accounting scheme (Standard, Flat Rate, Cash Accounting, or Annual Accounting), submit your registration application to HMRC, and wait for confirmation (typically 2–4 weeks) and receive your VAT registration number. Once registered, you must charge VAT on taxable supplies, issue VAT invoices, maintain VAT records, and submit VAT returns. It\'s worth getting professional help to ensure registration is completed correctly and you choose the right VAT scheme.',
  },
  {
    question: 'Can I register for VAT voluntarily?',
    answer: 'Yes, you can register for VAT voluntarily even if your turnover is below the threshold (£90,000). Voluntary registration may be beneficial if: you have significant VAT on purchases that you could reclaim (equipment, stock, services, etc.), you want your business to appear more established to customers (some customers prefer dealing with VAT-registered businesses), you want to prepare for future growth (registering early makes it easier when you do exceed the threshold), or you\'re in an industry where customers expect VAT registration. However, voluntary registration also means you must charge VAT on sales, maintain VAT records, and submit VAT returns, so there\'s an administrative burden. It\'s worth getting professional advice to assess whether voluntary registration makes sense for your specific situation.',
  },
  {
    question: 'What happens if I register for VAT late?',
    answer: 'If you register for VAT late (after the 30-day deadline), you may face penalties. HMRC can charge penalties of up to 100% of VAT due if they believe you should have registered earlier and were aware of the requirement. The penalty amount depends on whether the failure was deliberate or not, and whether you disclosed it voluntarily or HMRC discovered it. In addition to penalties, you\'ll still need to pay VAT on sales from when you should have registered (backdated), which can be a significant amount if you\'ve been trading above the threshold for a while. Late registration can be costly, so it\'s important to monitor your turnover and register on time. It\'s worth getting professional help if you think you might have missed the registration deadline.',
  },
  {
    question: 'Do I need to register for VAT if I\'m below the threshold?',
    answer: 'You don\'t need to register for VAT if your turnover is below the threshold (£90,000), but you can register voluntarily if it makes sense for your business. Voluntary registration may be beneficial if you have significant VAT on purchases that you could reclaim, you want to appear more established to customers, or you want to prepare for future growth. However, voluntary registration means you must charge VAT on sales, maintain VAT records, and submit VAT returns, so there\'s an administrative burden. You need to weigh the benefits (VAT reclaims, business image) against the costs (admin burden, charging VAT on sales). It\'s worth getting professional advice to assess whether voluntary registration makes sense for your specific situation.',
  },
  {
    question: 'What VAT scheme should I choose?',
    answer: 'The best VAT scheme depends on your business circumstances: Standard VAT scheme (pay VAT on sales, reclaim VAT on purchases, submit quarterly returns) is best for most businesses with straightforward VAT and regular VAT on purchases to reclaim. Flat Rate VAT scheme (pay fixed percentage of turnover as VAT, simplified) may be beneficial for businesses with few VAT purchases (you can\'t reclaim VAT on most purchases), but you need to check if your industry qualifies. Cash Accounting VAT scheme (account for VAT when you pay/receive money) may help cash flow for businesses with slow-paying customers. Annual Accounting VAT scheme (submit one VAT return per year with advance payments) may reduce admin but requires advance payments and may not suit all businesses. It\'s worth getting professional advice to choose the right scheme for your specific circumstances, as choosing the wrong scheme can cost money or create unnecessary admin.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Core', href: '/services/core' },
  { label: 'VAT Registration Advisory', href: '/services/core/vat-registration-advisory' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function VATRegistrationAdvisoryPage() {
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
            serviceType: 'VAT Registration Advisory',
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
            description: 'Expert VAT registration advisory services in Kent. VAT registration, register for VAT, VAT registration threshold, VAT registration UK.',
            name: 'VAT Registration Advisory',
            url: 'https://fileeasyaccountancy.co.uk/services/core/vat-registration-advisory/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'VAT Registration Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Registration Requirement Assessment' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Voluntary Registration Advice' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT Scheme Selection' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Registration Process Support' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="VAT Registration Advisory"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If your business is growing and your turnover is getting close to £90,000, you might need to register for VAT—and getting the timing right matters. You must register for VAT if your VAT taxable turnover exceeds £90,000 in a rolling 12-month period (2024/25 threshold), or if you expect it to exceed £90,000 in the next 30 days (
          <a href="https://www.gov.uk/vat-registration" target="_blank" rel="noopener noreferrer">
            gov.uk VAT registration
          </a>
          ). VAT registration must be completed within 30 days of exceeding the threshold or realising you need to register, with registration effective from the date you exceeded the threshold or from a future date you specify. You can register for VAT voluntarily even if your turnover is below the threshold (£90,000), which may be beneficial if you want to reclaim VAT on purchases or if you want to appear more established to customers.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>You must register for VAT if turnover exceeds £90,000</strong> — In a rolling 12-month period, or if you expect it to exceed £90,000 in the next 30 days
            </li>
            <li>
              <strong>Registration deadline is 30 days after exceeding threshold</strong> — Late registration can result in penalties up to 100% of VAT due if HMRC believes you should have registered earlier
            </li>
            <li>
              <strong>You can register voluntarily below the threshold</strong> — This may be beneficial if you want to reclaim VAT on purchases or appear more established
            </li>
            <li>
              <strong>Once registered, you must charge VAT on taxable supplies</strong> — You&apos;ll need to issue VAT invoices, maintain VAT records, and submit VAT returns quarterly
            </li>
          </ul>
        </div>

        <p>
          The problem is most businesses don&apos;t realise they need to register for VAT until it&apos;s too late, or they don&apos;t understand the registration process and deadlines. They miss the registration deadline, don&apos;t understand when voluntary registration makes sense, or struggle with the registration process itself. That causes problems—late registration penalties up to 100% of VAT due, missing out on VAT reclaims by not registering voluntarily when beneficial, confusion about registration requirements and deadlines, and stress from realising you should have registered earlier.
        </p>

        <p>
          We handle VAT registration advisory for businesses across Kent: registration requirement assessment (reviewing your turnover to determine if and when you need to register for VAT), voluntary registration advice (advising on whether voluntary registration below the threshold makes sense for your business), registration deadline planning (calculating when you&apos;ll exceed the threshold and ensuring registration happens on time), registration process support (helping you complete VAT registration online, including all required information and documents), VAT scheme selection (advising on which VAT accounting scheme (Standard, Flat Rate, Cash Accounting, Annual Accounting) is best for your business), and post-registration setup (helping you set up VAT invoicing, record keeping, and systems after registration). Whether you&apos;re a business in Medway approaching the threshold, a company in Maidstone wanting voluntary registration advice, or a business in Canterbury needing help with the registration process, we&apos;ll handle your VAT registration advisory that works. No missed deadlines, no penalties—just practical advice that gets you registered at the right time.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Understand when you need to register</strong> — We&apos;ll review your turnover and tell you exactly when you need to register, avoiding late registration penalties. Understanding requirements helps you plan ahead.
          </li>
          <li>
            <strong>Register at the right time</strong> — We&apos;ll help you register within the 30-day deadline, ensuring registration is effective from the correct date. Timely registration avoids penalties.
          </li>
          <li>
            <strong>Decide if voluntary registration makes sense</strong> — We&apos;ll advise on whether registering voluntarily below the threshold is beneficial for your business. Voluntary registration can save money if you have significant VAT on purchases.
          </li>
          <li>
            <strong>Choose the right VAT scheme</strong> — We&apos;ll help you choose between Standard, Flat Rate, Cash Accounting, and Annual Accounting schemes based on your circumstances. Choosing the right scheme saves money and simplifies admin.
          </li>
          <li>
            <strong>Complete registration correctly</strong> — We&apos;ll help you complete VAT registration with all required information, ensuring the process goes smoothly. Correct registration avoids delays and issues.
          </li>
          <li>
            <strong>Set up VAT systems after registration</strong> — We&apos;ll help you set up VAT invoicing, record keeping, and systems needed after registration. Proper setup ensures compliance from day one.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for VAT registration advisory:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: what your current turnover is, how your turnover has changed over the past 12 months, whether you expect turnover to increase, what purchases you make (and whether they include VAT), whether you want to register voluntarily, and what you want to achieve. Understanding your situation helps us assess your registration requirements.
          </li>
          <li>
            <strong>Turnover review and registration requirement assessment</strong> — We review your turnover to determine if and when you need to register:
            <ul>
              <li>
                <strong>Rolling 12-month turnover calculation</strong> — We calculate your VAT taxable turnover over the past 12 months (rolling calculation, not calendar year) to see if you&apos;ve exceeded £90,000.
              </li>
              <li>
                <strong>Future turnover projection</strong> — We project whether you&apos;ll exceed £90,000 in the next 30 days based on current trading.
              </li>
              <li>
                <strong>Registration requirement determination</strong> — We determine if you must register (mandatory) or if voluntary registration might be beneficial.
              </li>
              <li>
                <strong>Registration deadline calculation</strong> — If you need to register, we calculate when registration must be completed (30 days after exceeding threshold or realising you need to register).
              </li>
            </ul>
            Turnover review determines your registration requirements.
          </li>
          <li>
            <strong>Voluntary registration assessment (if applicable)</strong> — If you&apos;re below the threshold, we assess whether voluntary registration makes sense:
            <ul>
              <li>
                <strong>VAT reclaim analysis</strong> — We analyse whether you have significant VAT on purchases that could be reclaimed if you register voluntarily.
              </li>
              <li>
                <strong>Business image considerations</strong> — We consider whether VAT registration would help your business appear more established to customers.
              </li>
              <li>
                <strong>Administrative burden assessment</strong> — We assess the administrative burden of VAT registration (invoicing, record keeping, returns) versus benefits.
              </li>
              <li>
                <strong>Recommendation</strong> — We provide a recommendation on whether voluntary registration is beneficial for your specific situation.
              </li>
            </ul>
            Voluntary registration assessment helps you make informed decisions.
          </li>
          <li>
            <strong>VAT scheme selection advice</strong> — We advise on which VAT accounting scheme is best for your business:
            <ul>
              <li>
                <strong>Standard VAT scheme</strong> — Pay VAT on sales, reclaim VAT on purchases, submit quarterly returns. Best for most businesses with straightforward VAT.
              </li>
              <li>
                <strong>Flat Rate VAT scheme</strong> — Pay fixed percentage of turnover as VAT (simplified), but can&apos;t reclaim VAT on most purchases. May be beneficial for businesses with few VAT purchases.
              </li>
              <li>
                <strong>Cash Accounting VAT scheme</strong> — Account for VAT when you pay/receive money, not when invoices are issued. May help cash flow for businesses with slow-paying customers.
              </li>
              <li>
                <strong>Annual Accounting VAT scheme</strong> — Submit one VAT return per year with advance payments. May reduce admin but requires advance payments.
              </li>
              <li>
                <strong>Scheme comparison</strong> — We compare schemes and recommend the best one for your business.
              </li>
            </ul>
            VAT scheme selection ensures you choose the most suitable scheme.
          </li>
          <li>
            <strong>Registration process support</strong> — We help you complete VAT registration:
            <ul>
              <li>
                <strong>Information gathering</strong> — We gather all information needed for registration (business details, turnover, bank details, business activities, etc.).
              </li>
              <li>
                <strong>Online registration</strong> — We guide you through online VAT registration via HMRC website, or complete it on your behalf with your authority.
              </li>
              <li>
                <strong>Registration form completion</strong> — We ensure all required information is provided correctly, including business details, turnover figures, VAT scheme selection, and effective date.
              </li>
              <li>
                <strong>Documentation</strong> — We help gather any required documentation (proof of identity, business registration, bank statements, etc.).
              </li>
              <li>
                <strong>Submission</strong> — We submit your VAT registration application to HMRC.
              </li>
            </ul>
            Registration process support ensures registration is completed correctly.
          </li>
          <li>
            <strong>Registration confirmation and VAT number</strong> — We help you manage registration confirmation:
            <ul>
              <li>
                <strong>Confirmation tracking</strong> — We track your registration application and confirm when it&apos;s processed (typically 2–4 weeks).
              </li>
              <li>
                <strong>VAT number receipt</strong> — We ensure you receive your VAT registration number and understand what it means.
              </li>
              <li>
                <strong>Effective date confirmation</strong> — We confirm your VAT registration effective date (date you exceeded threshold or future date you specified).
              </li>
              <li>
                <strong>Certificate</strong> — We ensure you receive your VAT registration certificate.
              </li>
            </ul>
            Registration confirmation ensures you have everything you need.
          </li>
          <li>
            <strong>Post-registration setup and advice</strong> — We help you set up VAT systems after registration:
            <ul>
              <li>
                <strong>VAT invoicing setup</strong> — We help you set up VAT invoices with correct VAT registration number, VAT rates, and invoice format requirements.
              </li>
              <li>
                <strong>Record keeping setup</strong> — We help you set up VAT record keeping systems (digital records as required by MTD, VAT accounts, etc.).
              </li>
              <li>
                <strong>VAT return preparation</strong> — We explain VAT return requirements (quarterly filing, deadlines, what to include).
              </li>
              <li>
                <strong>VAT payment planning</strong> — We help you plan for VAT payments and understand cash flow implications.
              </li>
              <li>
                <strong>Ongoing support</strong> — We provide ongoing support for VAT returns and compliance after registration.
              </li>
            </ul>
            Post-registration setup ensures compliance from day one.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What VAT registration advisory includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Turnover review and registration requirement assessment</li>
            <li>Voluntary registration advice (if applicable)</li>
            <li>VAT scheme selection advice</li>
            <li>Registration process support and completion</li>
            <li>Registration confirmation and VAT number management</li>
            <li>Post-registration setup and ongoing advice</li>
          </ul>
        </div>

        <p>
          We handle all aspects of VAT registration advisory, from initial assessment to post-registration setup. The key is understanding when you need to register, choosing the right VAT scheme, completing registration on time, and setting up systems for compliance.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Registration complexity</strong> — Simple registration (straightforward business, standard scheme) vs. complex registration (multiple activities, complex VAT schemes, backdated registration) increases complexity.
          </li>
          <li>
            <strong>Voluntary registration assessment</strong> — Assessment of voluntary registration benefits adds time and analysis.
          </li>
          <li>
            <strong>VAT scheme selection</strong> — Advice on VAT scheme selection and comparison adds value.
          </li>
          <li>
            <strong>Post-registration setup</strong> — Amount of post-registration setup required affects time and cost.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple VAT registration advisory (mandatory registration, standard scheme, basic setup):</strong> £200–£400 (includes turnover review, registration requirement assessment, registration process support, basic post-registration advice)
          </li>
          <li>
            <strong>Standard VAT registration advisory (voluntary registration assessment, scheme selection, registration support):</strong> £300–£600 (includes comprehensive turnover review, voluntary registration assessment, VAT scheme selection advice, registration process support, post-registration setup)
          </li>
          <li>
            <strong>Complex VAT registration advisory (backdated registration, complex schemes, extensive setup):</strong> £500–£1,000+ (includes comprehensive assessment, complex registration support, extensive post-registration setup, ongoing support)
          </li>
          <li>
            <strong>Ongoing VAT support (post-registration):</strong> £100–£300 per quarter (ongoing VAT return support, compliance advice, scheme reviews)
          </li>
        </ul>

        <p>
          <strong>Why VAT registration advisory costs what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding VAT registration requirements, thresholds, deadlines, and VAT schemes requires specialist knowledge.
          </li>
          <li>
            <strong>Time and complexity</strong> — Turnover review, registration assessment, scheme selection, registration process support, and post-registration setup take time and attention to detail.
          </li>
          <li>
            <strong>Value provided</strong> — VAT registration advisory helps you avoid penalties, choose the right VAT scheme, and register at the right time, providing substantial value.
          </li>
          <li>
            <strong>Risk management</strong> — Ensuring timely and correct registration protects you from late registration penalties (up to 100% of VAT due).
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Turnover review and registration assessment typically takes 1 week. Registration process typically takes 1–2 weeks. HMRC processes VAT registration applications typically within 2–4 weeks. Overall process typically takes 4–6 weeks from initial assessment to registration confirmation.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced on completion of registration or in stages: assessment (on completion), registration (on completion), post-registration setup (on completion). Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes turnover review, registration requirement assessment, voluntary registration advice (if applicable), VAT scheme selection advice, registration process support, registration confirmation, and post-registration setup advice.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For businesses in Kent, whether you&apos;re a business in Medway approaching the £90,000 threshold, a company in Maidstone wanting voluntary registration advice, or a business in Canterbury needing help with the registration process, VAT registration advisory helps you understand when and how to register for VAT. Many Kent businesses don&apos;t realise they need to register until it&apos;s too late, or they don&apos;t understand the registration process and deadlines. We help local businesses understand their registration requirements, assess whether voluntary registration makes sense, choose the right VAT scheme, complete registration on time, and set up VAT systems properly, ensuring they avoid penalties and make informed decisions. It&apos;s worth getting it right—late registration can result in penalties up to 100% of VAT due, while choosing the wrong VAT scheme can cost you money or create unnecessary admin burden.
        </p>

        <p>
          <strong>Common Kent VAT registration scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Businesses approaching threshold</strong> — Businesses with turnover approaching £90,000 needing advice on when to register.
          </li>
          <li>
            <strong>Voluntary registration candidates</strong> — Businesses below threshold considering voluntary registration to reclaim VAT or appear more established.
          </li>
          <li>
            <strong>Late registration cases</strong> — Businesses who&apos;ve already exceeded the threshold and need help registering (potentially backdated).
          </li>
          <li>
            <strong>VAT scheme selection</strong> — Businesses needing advice on which VAT accounting scheme is best for their circumstances.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses are dealing with. Registration assessment, voluntary registration advice, scheme selection, registration support, post-registration setup—we&apos;ll handle your VAT registration advisory that gets you registered at the right time with the right scheme.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="VAT Registration Advisory - Frequently Asked Questions"
          subtitle="Common questions about VAT registration, thresholds, and schemes"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/core/quarterly-vat-returns/">Quarterly VAT Returns</Link> — VAT return filing services after registration
            </li>
            <li>
              <Link href="/services/core/mtd-compliance-vat-bridging/">MTD Compliance & VAT Bridging</Link> — MTD compliance setup for VAT returns
            </li>
            <li>
              <Link href="/services/core/cloud-accounting-setup-xero-quickbooks-sage/">Cloud Accounting Setup</Link> — Cloud accounting setup for VAT record keeping
            </li>
          </ul>
          <p>
            <Link href="/services/core/" className="font-semibold">
              View all core services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with VAT registration?" description="Don't risk late registration penalties or miss out on voluntary registration benefits. We'll help you understand when you need to register, choose the right VAT scheme, and complete registration on time. No missed deadlines, no penalties—just practical advice that gets you registered at the right time." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with VAT registration?" />
    </>
  );
}

