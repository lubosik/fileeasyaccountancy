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
  title: 'Registered Office Service in Kent | File Easy Accountancy',
  description: 'Expert registered office service in Kent. Registered office address, registered office service, company registered address, virtual office address. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/registered-office-service/',
  },
  openGraph: {
    title: 'Registered Office Service in Kent | File Easy Accountancy',
    description: 'Expert registered office service in Kent. Registered office address, registered office service, company registered address, virtual office address.',
    url: 'https://fileeasyaccountancy.co.uk/services/registered-office-service/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is a registered office address?',
    answer: 'A registered office address is the official address of a limited company, where Companies House and HMRC send official documents and mail. Limited companies must have a registered office address in the UK, which must be a physical address (not a PO Box) and will be publicly available on Companies House records. The registered office address must be displayed on company letterheads, websites, and other business documents. Companies can use their business address as their registered office address, but many choose to use a registered office service provider to keep their business address private (especially if they work from home). It\'s worth getting professional help to set up registered office address service if you want privacy protection or professional address service.',
  },
  {
    question: 'Do I need a registered office address?',
    answer: 'Yes, if you have a limited company, you must have a registered office address. Limited companies are required by law to have a registered office address in the UK, which must be a physical address (not a PO Box) and will be publicly available on Companies House records. The registered office address is where official company documents and mail from Companies House and HMRC will be sent. If you don\'t have a registered office address, your company cannot be registered, or if you fail to maintain a registered office address, Companies House may take action against your company. It\'s worth getting professional help to set up registered office address service to ensure compliance.',
  },
  {
    question: 'What address can I use as a registered office?',
    answer: 'You can use any physical address in the UK as your registered office address, as long as it\'s: a physical address (not a PO Box), in the same country where your company is registered (England and Wales, Scotland, or Northern Ireland), and suitable for receiving official mail. Companies can use their business address, home address, or a registered office service provider address. Many companies choose to use a registered office service provider to protect privacy (especially home-based businesses) or provide a professional address. The registered office address will be publicly available on Companies House records, so consider privacy implications when choosing an address. It\'s worth getting professional help to choose the right registered office address for your situation.',
  },
  {
    question: 'Can I use my home address as a registered office?',
    answer: 'Yes, you can use your home address as your registered office address, but be aware that: the registered office address will be publicly available on Companies House records (anyone can look up your company and see the registered office address), your home address will be visible to the public (customers, suppliers, competitors, anyone searching Companies House), and you may receive official mail at home (Companies House and HMRC will send mail to your registered office address). Many companies choose to use a registered office service provider instead to protect home address privacy. It\'s worth getting professional advice if you\'re concerned about privacy or want to keep your home address private.',
  },
  {
    question: 'How do I change my registered office address?',
    answer: 'To change your registered office address, you need to: choose a new registered office address (meeting Companies House requirements—UK address, physical address, not PO Box), file a change of address form with Companies House (using Companies House online service or form AD01), file the change within 14 days of the change (Companies House requires notification within 14 days of changing registered office address), and update your company records (update company letterheads, websites, and other business documents with new registered office address). The change will be publicly available on Companies House records. It\'s worth getting professional help to ensure the change is filed correctly and on time.',
  },
  {
    question: 'What happens if I don\'t have a registered office address?',
    answer: 'If you don\'t have a registered office address, your company cannot be registered with Companies House (you need a registered office address to register a company). If you fail to maintain a registered office address after registration, Companies House may take action against your company, including: striking off the company (removing it from the register if Companies House cannot contact the company), prosecution for non-compliance (failure to maintain registered office address can result in prosecution), and inability to receive official mail (Companies House and HMRC cannot send official documents if there\'s no valid registered office address). It\'s essential to have and maintain a valid registered office address. It\'s worth getting professional help to ensure you have a suitable registered office address.',
  },
  {
    question: 'How much does a registered office service cost?',
    answer: 'Registered office service costs vary depending on service provider and service scope: basic service (address provision, basic mail forwarding) typically costs £50–£100 per year, standard service (address provision, mail forwarding, mail notification) typically costs £100–£150 per year, and comprehensive service (address provision, mail forwarding, mail scanning, priority handling) typically costs £150–£300+ per year. Additional services (mail scanning, priority forwarding, document storage) may be charged separately. Costs depend on service scope, mail volume, and additional services required. It\'s worth getting quotes from providers to compare costs and services.',
  },
  {
    question: 'What is the difference between registered office and business address?',
    answer: 'The registered office address is the official address of a limited company where Companies House and HMRC send official documents, must be publicly available on Companies House records, and must be displayed on company letterheads and websites. The business address is where you actually conduct business, may be different from registered office address, doesn\'t have to be publicly available (unless you choose to display it), and can be your office, home, or virtual address. Many companies use a registered office service provider for registered office address (to protect privacy or provide professional address) while using their actual business address for day-to-day operations. The registered office address and business address can be the same or different. It\'s worth understanding the difference to choose addresses that meet your needs.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Core', href: '/services/core' },
  { label: 'Registered Office Service', href: '/services/core/registered-office-service' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function RegisteredOfficeServicePage() {
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
            serviceType: 'Registered Office Service',
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
            description: 'Expert registered office service in Kent. Registered office address, registered office service, company registered address, virtual office address.',
            name: 'Registered Office Service',
            url: 'https://fileeasyaccountancy.co.uk/services/core/registered-office-service/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Registered Office Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Registered Office Address Provision' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mail Handling' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mail Forwarding' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Privacy Protection' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Registered Office Service"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re setting up a limited company or already have one, you need a registered office address—and using a registered office service can help protect your privacy and keep your business address professional. Limited companies must have a registered office address in the UK, which must be a physical address (not a PO Box) and will be publicly available on Companies House records (
          <a href="https://www.gov.uk/government/publications/registered-office-address-and-service-address/registered-office-address-and-service-address" target="_blank" rel="noopener noreferrer">
            gov.uk registered office address
          </a>
          ). The registered office address is where official company documents and mail from Companies House and HMRC will be sent, and must be displayed on company letterheads, websites, and other business documents. Companies can use their business address as their registered office address, but many choose to use a registered office service provider to keep their business address private (especially if they work from home).
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Limited companies must have a registered office address in the UK</strong> — Must be a physical address (not a PO Box), publicly available on Companies House records
            </li>
            <li>
              <strong>Registered office address receives official mail</strong> — Companies House and HMRC send official documents and mail to the registered office address
            </li>
            <li>
              <strong>Many companies use registered office services</strong> — To protect privacy (especially home-based businesses) and provide a professional address
            </li>
            <li>
              <strong>Registered office services typically cost £50–£200 per year</strong> — Depending on the provider and additional services (mail forwarding, mail scanning, etc.)
            </li>
          </ul>
        </div>

        <p>
          The problem is most people don&apos;t understand registered office requirements or how registered office services work. They don&apos;t realise the registered office address will be publicly available, use their home address and expose their privacy, don&apos;t know they can use a registered office service, or struggle to find a suitable registered office service provider. That causes problems—privacy concerns (home address publicly available), professional image issues (home address on public records), mail handling problems (missing important mail from Companies House or HMRC), and stress from trying to protect privacy.
        </p>

        <p>
          We provide registered office service for limited companies across Kent: registered office address provision (providing a professional registered office address in Kent for your limited company, meeting Companies House requirements), mail handling (receiving and handling official mail from Companies House and HMRC, forwarding mail to you or holding it for collection), mail forwarding (forwarding official mail to your preferred address, ensuring you receive important documents on time), mail scanning (scanning and emailing mail to you, providing digital copies of official documents), privacy protection (protecting your privacy by keeping your business address private, especially important for home-based businesses), professional address (providing a professional business address for public records, improving your business image), and address change support (helping you change your registered office address if needed, including filing changes with Companies House). Whether you&apos;re setting up a limited company in Medway needing a registered office address, a home-based business in Maidstone wanting privacy protection, or a company in Canterbury needing professional address service, we&apos;ll provide your registered office service that works. No privacy concerns, no missing mail—just professional registered office service that keeps your address private and your mail handled properly.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet Companies House requirements</strong> — We&apos;ll provide a registered office address that meets Companies House requirements (UK address, physical address, not PO Box). Meeting requirements ensures compliance.
          </li>
          <li>
            <strong>Protect your privacy</strong> — We&apos;ll keep your business address private, especially important for home-based businesses. Privacy protection reduces risk.
          </li>
          <li>
            <strong>Handle official mail professionally</strong> — We&apos;ll receive and handle official mail from Companies House and HMRC, forwarding or scanning it to you. Professional mail handling ensures you don&apos;t miss important documents.
          </li>
          <li>
            <strong>Provide a professional address</strong> — We&apos;ll provide a professional business address for public records, improving your business image. Professional address enhances credibility.
          </li>
          <li>
            <strong>Save time and reduce stress</strong> — Having professional registered office service saves time and reduces stress from mail handling and privacy concerns. Time savings improve efficiency.
          </li>
          <li>
            <strong>Stay compliant</strong> — We&apos;ll help ensure your registered office address is correctly registered with Companies House and updated when needed. Compliance reduces risk.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for registered office service:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your company: whether you&apos;re setting up a new company or need to change existing registered office address, what your current registered office address is (if existing), what your business address is (home-based, office, virtual), what your privacy concerns are, what mail handling you need (forwarding, scanning, collection), and what help you need. Understanding your situation helps us tailor service.
          </li>
          <li>
            <strong>Registered office address setup</strong> — We set up your registered office address:
            <ul>
              <li>
                <strong>Address provision</strong> — We provide a professional registered office address in Kent (meeting Companies House requirements—UK address, physical address, not PO Box).
              </li>
              <li>
                <strong>Companies House registration</strong> — We help register the address as your company&apos;s registered office address with Companies House (if setting up new company, address is registered as part of company formation; if changing existing address, we help file change of address form).
              </li>
              <li>
                <strong>Address verification</strong> — We verify the address meets Companies House requirements and is suitable for use as registered office address.
              </li>
              <li>
                <strong>Documentation</strong> — We provide documentation confirming registered office address service and Companies House registration.
              </li>
            </ul>
            Registered office address setup gets your address registered.
          </li>
          <li>
            <strong>Mail handling setup</strong> — We set up mail handling:
            <ul>
              <li>
                <strong>Mail receipt</strong> — We receive official mail from Companies House and HMRC at your registered office address.
              </li>
              <li>
                <strong>Mail sorting</strong> — We sort mail to identify official documents (Companies House correspondence, HMRC correspondence, statutory notices, etc.) vs. general mail.
              </li>
              <li>
                <strong>Mail forwarding options</strong> — We set up mail forwarding options based on your preferences (forward to your business address, forward to home address, hold for collection, scan and email).
              </li>
              <li>
                <strong>Mail notification</strong> — We notify you when mail is received (email notification, so you know when to expect forwarded mail or when to collect).
              </li>
            </ul>
            Mail handling setup ensures mail is handled properly.
          </li>
          <li>
            <strong>Mail forwarding service</strong> — We provide mail forwarding:
            <ul>
              <li>
                <strong>Mail forwarding</strong> — We forward official mail to your preferred address (business address, home address, or other address you specify).
              </li>
              <li>
                <strong>Forwarding frequency</strong> — We forward mail based on your preferences (immediately when received, weekly batches, monthly batches, or on request).
              </li>
              <li>
                <strong>Forwarding confirmation</strong> — We confirm mail has been forwarded (email confirmation, so you know when to expect mail).
              </li>
              <li>
                <strong>Tracking</strong> — We track forwarded mail to ensure it&apos;s delivered (if using tracked mail service).
              </li>
            </ul>
            Mail forwarding ensures you receive important documents.
          </li>
          <li>
            <strong>Mail scanning service (optional)</strong> — We provide mail scanning (if requested):
            <ul>
              <li>
                <strong>Mail scanning</strong> — We scan official mail and email digital copies to you, providing quick access to documents.
              </li>
              <li>
                <strong>Scanning quality</strong> — We ensure scanned documents are clear and readable (high-quality scans, PDF format).
              </li>
              <li>
                <strong>Email delivery</strong> — We email scanned documents to your preferred email address promptly (typically within 24 hours of receipt).
              </li>
              <li>
                <strong>Original retention</strong> — We retain original documents for a specified period (e.g., 3 months) before secure disposal, or forward originals if requested.
              </li>
            </ul>
            Mail scanning provides quick digital access to documents.
          </li>
          <li>
            <strong>Privacy protection</strong> — We protect your privacy:
            <ul>
              <li>
                <strong>Address privacy</strong> — We keep your business address private (registered office address is publicly available, but your actual business address remains private).
              </li>
              <li>
                <strong>Home address protection</strong> — We protect your home address from being publicly available (especially important for home-based businesses).
              </li>
              <li>
                <strong>Professional separation</strong> — We provide professional separation between your registered office address and your actual business address.
              </li>
              <li>
                <strong>Confidentiality</strong> — We maintain confidentiality of your business information and mail content.
              </li>
            </ul>
            Privacy protection keeps your address private.
          </li>
          <li>
            <strong>Professional address service</strong> — We provide professional address:
            <ul>
              <li>
                <strong>Professional address</strong> — We provide a professional business address for public records (improving your business image and credibility).
              </li>
              <li>
                <strong>Address display</strong> — We ensure the registered office address is suitable for display on company letterheads, websites, and other business documents (professional address enhances credibility).
              </li>
              <li>
                <strong>Business image</strong> — We help maintain a professional business image through use of professional registered office address.
              </li>
            </ul>
            Professional address service enhances business credibility.
          </li>
          <li>
            <strong>Ongoing management and support</strong> — We provide ongoing support:
            <ul>
              <li>
                <strong>Mail monitoring</strong> — We monitor mail received at registered office address, ensuring all official mail is handled properly.
              </li>
              <li>
                <strong>Address updates</strong> — We help update registered office address with Companies House if you need to change it (filing change of address form, ensuring compliance with 14-day notification requirement).
              </li>
              <li>
                <strong>Service updates</strong> — We keep you informed of any changes to registered office service or requirements.
              </li>
              <li>
                <strong>Query support</strong> — We provide support for any queries about registered office service, mail handling, or address requirements.
              </li>
            </ul>
            Ongoing management ensures continued service quality.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What registered office service includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Registered office address provision (professional address in Kent, meeting Companies House requirements)</li>
            <li>Mail handling (receiving and handling official mail from Companies House and HMRC)</li>
            <li>Mail forwarding (forwarding official mail to your preferred address)</li>
            <li>Mail scanning (optional, scanning and emailing mail to you)</li>
            <li>Privacy protection (keeping your business address private)</li>
            <li>Professional address service (professional address for public records)</li>
            <li>Ongoing management and support (mail monitoring, address updates, query support)</li>
          </ul>
        </div>

        <p>
          We provide comprehensive registered office service, from initial setup to ongoing management. The key is providing a professional address that meets Companies House requirements, handling mail properly, protecting privacy, and providing ongoing support.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Service scope</strong> — Basic service (address provision, basic mail forwarding) vs. comprehensive service (address provision, mail forwarding, mail scanning, priority handling) affects scope and cost.
          </li>
          <li>
            <strong>Mail volume</strong> — Low mail volume vs. high mail volume affects handling time and cost.
          </li>
          <li>
            <strong>Mail forwarding frequency</strong> — Standard forwarding vs. priority forwarding (immediate, express) affects cost.
          </li>
          <li>
            <strong>Additional services</strong> — Mail scanning, mail storage, document retention, additional addresses affect cost.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Basic registered office service (address provision, basic mail forwarding, low volume):</strong> £50–£100 per year (includes registered office address, basic mail forwarding, standard mail handling)
          </li>
          <li>
            <strong>Standard registered office service (address provision, mail forwarding, mail notification, medium volume):</strong> £100–£150 per year (includes registered office address, mail forwarding, email notification, standard mail handling)
          </li>
          <li>
            <strong>Comprehensive registered office service (address provision, mail forwarding, mail scanning, priority handling, high volume):</strong> £150–£300+ per year (includes registered office address, mail forwarding, mail scanning, priority handling, email notification, document retention)
          </li>
          <li>
            <strong>Additional services (if needed):</strong> Mail scanning (£5–£15 per scan), priority forwarding (£2–£5 per item), document storage (£10–£30 per year)
          </li>
        </ul>

        <p>
          <strong>Why registered office service costs what it does:</strong>
        </p>
        <ul>
          <li>
            <strong>Address provision</strong> — Providing a professional registered office address that meets Companies House requirements requires suitable premises and ongoing maintenance.
          </li>
          <li>
            <strong>Mail handling</strong> — Receiving, sorting, forwarding, and scanning mail requires time and attention to detail to ensure important documents are handled properly.
          </li>
          <li>
            <strong>Privacy and professionalism</strong> — Protecting privacy and providing professional address service adds value beyond basic address provision.
          </li>
          <li>
            <strong>Ongoing management</strong> — Ongoing mail monitoring, address updates, and support require ongoing time and resources.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Registered office address setup typically takes 1–2 days (address provision, Companies House registration). Mail handling setup typically takes 1 day. Ongoing service is provided throughout the year. Address changes (if needed) typically take 1–2 days (filing change with Companies House).
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced annually in advance, or monthly for ongoing service. Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes registered office address provision, basic mail handling, mail forwarding, and ongoing management. Additional services (mail scanning, priority forwarding, document storage) are typically charged separately if requested.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For limited companies in Kent, whether you&apos;re setting up a limited company in Medway needing a registered office address, a home-based business in Maidstone wanting privacy protection, or a company in Canterbury needing professional address service, registered office service helps you meet Companies House requirements and protect your privacy. Many Kent businesses don&apos;t realise registered office addresses are publicly available or don&apos;t know they can use a registered office service, leading to privacy concerns and professional image issues. We help local companies set up professional registered office addresses, handle official mail properly, protect privacy, and maintain professional business images. The registered office address must be in the same country where the company is registered (England and Wales, Scotland, or Northern Ireland), and cannot be a PO Box number.
        </p>

        <p>
          <strong>Common Kent registered office scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>New companies</strong> — Companies setting up and needing registered office address as part of company formation.
          </li>
          <li>
            <strong>Home-based businesses</strong> — Home-based businesses wanting to protect home address privacy by using registered office service.
          </li>
          <li>
            <strong>Virtual businesses</strong> — Virtual businesses needing professional registered office address for public records.
          </li>
          <li>
            <strong>Address changes</strong> — Companies wanting to change existing registered office address to protect privacy or improve professional image.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses are dealing with. Registered office address provision, mail handling, privacy protection, professional address service—we&apos;ll provide your registered office service that keeps your address private and your mail handled properly.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Registered Office Service - Frequently Asked Questions"
          subtitle="Common questions about registered office addresses, mail handling, and privacy protection"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/core/company-formation-bank-setup/">Company Formation & Bank Setup</Link> — Company formation services
            </li>
            <li>
              <Link href="/services/core/companies-house-filing/">Companies House Filing</Link> — Companies House filing services
            </li>
            <li>
              <Link href="/services/core/business-structure-review/">Business Structure Review</Link> — Business structure advice
            </li>
          </ul>
          <p>
            <Link href="/services/core/" className="font-semibold">
              View all core services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with registered office service?" description="Don't risk privacy exposure or missing important mail. We'll provide a professional registered office address, handle official mail properly, and protect your privacy. No privacy concerns, no missing mail—just professional registered office service that keeps your address private and your mail handled properly." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with registered office service?" />
    </>
  );
}

