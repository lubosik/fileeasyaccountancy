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
  title: 'Reverse Charge VAT Services in Kent | File Easy Accountancy',
  description: 'Expert reverse charge VAT services in Kent. Reverse charge VAT, VAT reverse charge, construction industry reverse charge, reverse charge VAT UK. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/reverse-charge-vat/',
  },
  openGraph: {
    title: 'Reverse Charge VAT Services in Kent | File Easy Accountancy',
    description: 'Expert reverse charge VAT services in Kent. Reverse charge VAT, VAT reverse charge, construction industry reverse charge, reverse charge VAT UK.',
    url: 'https://fileeasyaccountancy.co.uk/services/reverse-charge-vat/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is reverse charge VAT?',
    answer: 'Reverse charge VAT means the customer accounts for VAT on the supply (instead of the supplier), reporting VAT on their VAT return as both output VAT and input VAT simultaneously, resulting in no net VAT payment if the customer can fully reclaim VAT. The domestic reverse charge for construction services applies to most construction services supplied between VAT-registered businesses in the UK, with the customer accounting for VAT instead of the supplier. Reverse charge VAT helps prevent VAT fraud by ensuring VAT is accounted for by the customer rather than the supplier, particularly important in industries like construction. It\'s worth getting professional help to understand when reverse charge VAT applies and how to account for it correctly.',
  },
  {
    question: 'How does reverse charge VAT work?',
    answer: 'Reverse charge VAT works as follows: the supplier issues an invoice showing \'reverse charge\' (or \'domestic reverse charge\' for construction services) and no VAT amount in the invoice total, the customer accounts for VAT on their VAT return by including the VAT amount as both output VAT (Box 1) and input VAT (Box 4), and this results in no net VAT payment if the customer can fully reclaim VAT (output VAT and input VAT cancel out). For construction services, the domestic reverse charge applies when both supplier and customer are VAT-registered, the supply is a construction service subject to standard or reduced rate VAT, and the supply is made in the UK. It\'s worth getting professional help to ensure reverse charge VAT is applied and accounted for correctly.',
  },
  {
    question: 'Who uses reverse charge VAT?',
    answer: 'Reverse charge VAT is used by businesses involved in construction services (supplying or receiving construction services between VAT-registered businesses in the UK), businesses receiving certain goods (specific goods subject to reverse charge rules), businesses receiving services from outside the UK (services from suppliers outside the UK where reverse charge applies), and businesses in other industries where reverse charge VAT rules apply. The most common application is the construction industry reverse charge, which applies to most construction services supplied between VAT-registered businesses. It\'s worth getting professional help to determine if reverse charge VAT applies to your supplies.',
  },
  {
    question: 'What is the construction industry reverse charge?',
    answer: 'The construction industry reverse charge (domestic reverse charge for construction services) was introduced in March 2021 and applies to most construction services supplied between VAT-registered businesses in the UK, with the customer accounting for VAT instead of the supplier. It applies to supplies of construction services that are subject to standard or reduced rate VAT, excluding zero-rated, exempt, or outside scope supplies. The reverse charge means suppliers issue invoices showing \'domestic reverse charge\' and no VAT amount, while customers account for VAT on their VAT return by including the VAT amount as both output VAT and input VAT. The construction industry reverse charge helps prevent VAT fraud in the construction industry. It\'s worth getting professional help to ensure construction industry reverse charge is applied correctly.',
  },
  {
    question: 'How do I account for reverse charge VAT?',
    answer: 'To account for reverse charge VAT, you need to: if you\'re a supplier (issuing reverse charge invoices), issue invoices showing \'reverse charge\' (or \'domestic reverse charge\' for construction services) and no VAT amount in the invoice total, and don\'t include VAT in output VAT (Box 1) on your VAT return. If you\'re a customer (receiving reverse charge supplies), include the VAT amount as both output VAT (Box 1) and input VAT (Box 4) on your VAT return, ensuring the VAT amount is calculated correctly (net amount × VAT rate), and the VAT appears in both boxes, resulting in no net VAT payment if you can fully reclaim VAT. It\'s worth getting professional help to ensure reverse charge VAT is accounted for correctly on your VAT returns.',
  },
  {
    question: 'When does reverse charge VAT apply?',
    answer: 'Reverse charge VAT applies when: both supplier and customer are VAT-registered (reverse charge typically applies only between VAT-registered businesses), the supply is subject to standard or reduced rate VAT (reverse charge typically applies to standard or reduced rate supplies, not zero-rated or exempt), and the supply is covered by reverse charge legislation (e.g., construction services under the domestic reverse charge, certain goods, services from outside the UK). For construction services, the domestic reverse charge applies to most construction services supplied between VAT-registered businesses in the UK, excluding zero-rated, exempt, or outside scope supplies. It\'s worth getting professional help to determine if reverse charge VAT applies to your specific supplies.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'VAT', href: '/services/vat' },
  { label: 'Reverse Charge VAT', href: '/services/vat/reverse-charge-vat' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function ReverseChargeVATPage() {
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
            serviceType: 'Reverse Charge VAT',
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
            description: 'Expert reverse charge VAT services in Kent. Reverse charge VAT, VAT reverse charge, construction industry reverse charge, reverse charge VAT UK.',
            name: 'Reverse Charge VAT',
            url: 'https://fileeasyaccountancy.co.uk/services/vat/reverse-charge-vat/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Reverse Charge VAT Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reverse Charge Assessment' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Invoicing Support' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT Return Preparation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Review' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Reverse Charge VAT"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re in the construction industry or supply services that fall under reverse charge VAT rules, getting your VAT accounting right matters—and getting it wrong can cause compliance issues and errors. The domestic reverse charge for construction services applies to most construction services supplied between VAT-registered businesses in the UK, with the customer accounting for VAT instead of the supplier (
          <a href="https://www.gov.uk/guidance/vat-reverse-charge-for-building-and-construction-services" target="_blank" rel="noopener noreferrer">
            gov.uk VAT reverse charge construction
          </a>
          ). Reverse charge VAT means the customer accounts for VAT on the supply (instead of the supplier), reporting VAT on their VAT return as output VAT and input VAT simultaneously, resulting in no net VAT payment if the customer can fully reclaim VAT. The construction industry reverse charge was introduced in March 2021 and applies to supplies of construction services that are subject to standard or reduced rate VAT, excluding zero-rated, exempt, or outside scope supplies.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>The construction industry reverse charge applies to most construction services</strong> — Supplied between VAT-registered businesses in the UK, with the customer accounting for VAT instead of the supplier
            </li>
            <li>
              <strong>Reverse charge VAT means the customer accounts for VAT</strong> — Reporting VAT as both output VAT and input VAT on their VAT return, resulting in no net VAT payment if fully reclaimable
            </li>
            <li>
              <strong>Suppliers issue invoices showing &apos;reverse charge&apos; and no VAT amount</strong> — Customers account for VAT on their VAT return by including the VAT amount as both output VAT and input VAT
            </li>
            <li>
              <strong>Reverse charge VAT helps prevent VAT fraud</strong> — By ensuring VAT is accounted for by the customer rather than the supplier, particularly important in construction
            </li>
          </ul>
        </div>

        <p>
          The problem is most businesses don&apos;t understand reverse charge VAT rules or struggle to apply them correctly. They issue invoices incorrectly (showing VAT when they shouldn&apos;t, or not clearly stating &apos;reverse charge&apos;), account for reverse charge VAT incorrectly on VAT returns, don&apos;t understand when reverse charge VAT applies (construction services, certain goods, services from outside the UK), or make errors in VAT accounting (double-counting VAT, missing reverse charge entries). That causes problems—VAT compliance errors and potential HMRC penalties, incorrect VAT accounting leading to overpayments or underpayments, confusion about invoicing and VAT return requirements, and stress from trying to get it right.
        </p>

        <p>
          We handle reverse charge VAT for businesses across Kent: reverse charge assessment (reviewing your supplies to determine when reverse charge VAT applies, including construction services and other reverse charge supplies), invoicing support (helping you issue correct invoices showing &apos;reverse charge&apos; and no VAT amount, with proper wording and format), VAT return preparation (preparing your VAT returns with correct reverse charge VAT entries, accounting for reverse charge VAT as both output VAT and input VAT), compliance reviews (reviewing your reverse charge VAT compliance to ensure invoicing and accounting are correct), training and guidance (providing training on reverse charge VAT rules and how to apply them correctly), and ongoing support (providing ongoing support for reverse charge VAT compliance and any HMRC queries). Whether you&apos;re a construction business in Medway needing reverse charge VAT support, a supplier in Maidstone wanting invoicing help, or a customer in Canterbury needing VAT return preparation, we&apos;ll handle your reverse charge VAT that works. No errors, no confusion—just proper reverse charge VAT accounting that keeps you compliant.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Understand when reverse charge VAT applies</strong> — We&apos;ll review your supplies and tell you exactly when reverse charge VAT applies (construction services, certain goods, services from outside the UK). Understanding rules helps you apply them correctly.
          </li>
          <li>
            <strong>Issue correct invoices</strong> — We&apos;ll help you issue invoices showing &apos;reverse charge&apos; and no VAT amount, with proper wording and format. Correct invoicing ensures compliance.
          </li>
          <li>
            <strong>Account for reverse charge VAT correctly</strong> — We&apos;ll help you account for reverse charge VAT on your VAT returns, including VAT as both output VAT and input VAT. Correct accounting prevents errors.
          </li>
          <li>
            <strong>Stay compliant with HMRC</strong> — We&apos;ll help you stay compliant with reverse charge VAT rules, avoiding compliance errors and potential penalties. Compliance reduces risk.
          </li>
          <li>
            <strong>Prevent VAT fraud</strong> — Reverse charge VAT helps prevent VAT fraud by ensuring VAT is accounted for by the customer. Proper implementation supports fraud prevention.
          </li>
          <li>
            <strong>Save time and reduce stress</strong> — Understanding and applying reverse charge VAT correctly saves time and reduces stress from compliance concerns.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for reverse charge VAT:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your business: what supplies you make or receive (construction services, goods, services from outside the UK), whether you&apos;re VAT-registered, whether your customers are VAT-registered, what your current invoicing looks like, whether you&apos;ve had any reverse charge VAT issues, and what help you need. Understanding your situation helps us assess reverse charge VAT requirements.
          </li>
          <li>
            <strong>Reverse charge assessment</strong> — We assess when reverse charge VAT applies to your supplies:
            <ul>
              <li>
                <strong>Construction services review</strong> — We review whether your supplies are construction services covered by the domestic reverse charge (most construction services supplied between VAT-registered businesses in the UK, excluding zero-rated, exempt, or outside scope supplies).
              </li>
              <li>
                <strong>Other reverse charge supplies</strong> — We check if any other reverse charge VAT rules apply (e.g., certain goods, services from outside the UK).
              </li>
              <li>
                <strong>Customer and supplier status</strong> — We verify that both supplier and customer are VAT-registered (reverse charge VAT typically applies only between VAT-registered businesses).
              </li>
              <li>
                <strong>VAT rate check</strong> — We check that supplies are subject to standard or reduced rate VAT (reverse charge VAT typically applies to standard or reduced rate supplies, not zero-rated or exempt).
              </li>
            </ul>
            Reverse charge assessment determines when reverse charge VAT applies.
          </li>
          <li>
            <strong>Invoicing support</strong> — We help you issue correct invoices:
            <ul>
              <li>
                <strong>Invoice format</strong> — We ensure invoices clearly state &apos;reverse charge&apos; (or &apos;domestic reverse charge&apos; for construction services) and show no VAT amount in the invoice total.
              </li>
              <li>
                <strong>Invoice wording</strong> — We ensure invoices include proper wording indicating reverse charge VAT applies (e.g., &apos;Reverse charge: customer to account for VAT&apos;).
              </li>
              <li>
                <strong>Invoice details</strong> — We ensure invoices include all required details (invoice number, date, supplier and customer details, description of supplies, net amount, VAT rate, but no VAT amount in total).
              </li>
              <li>
                <strong>System updates</strong> — We help you update invoicing systems to generate correct reverse charge invoices.
              </li>
            </ul>
            Invoicing support ensures invoices are compliant.
          </li>
          <li>
            <strong>VAT return preparation</strong> — We help you account for reverse charge VAT on your VAT returns:
            <ul>
              <li>
                <strong>Customer side (if you receive reverse charge supplies)</strong> — We include the VAT amount as both output VAT (Box 1) and input VAT (Box 4) on your VAT return, resulting in no net VAT payment if you can fully reclaim VAT.
              </li>
              <li>
                <strong>Supplier side (if you supply reverse charge services)</strong> — We ensure you don&apos;t include VAT in output VAT (Box 1) or invoice totals, as the customer accounts for VAT.
              </li>
              <li>
                <strong>VAT calculations</strong> — We ensure VAT calculations are correct (VAT amount calculated correctly, included in both output and input VAT where applicable).
              </li>
              <li>
                <strong>Return completion</strong> — We complete your VAT return with correct reverse charge VAT entries.
              </li>
            </ul>
            VAT return preparation ensures correct accounting.
          </li>
          <li>
            <strong>Compliance review</strong> — We review your reverse charge VAT compliance:
            <ul>
              <li>
                <strong>Invoice review</strong> — We check that invoices are issued correctly (reverse charge stated, no VAT in total, proper wording).
              </li>
              <li>
                <strong>VAT return review</strong> — We check that VAT returns account for reverse charge VAT correctly (VAT included in both output and input VAT where applicable).
              </li>
              <li>
                <strong>System review</strong> — We check that systems are set up correctly for reverse charge VAT (invoicing systems, accounting systems).
              </li>
              <li>
                <strong>Error identification</strong> — We identify any errors or compliance issues (incorrect invoices, incorrect VAT return entries, system issues).
              </li>
            </ul>
            Compliance review ensures ongoing compliance.
          </li>
          <li>
            <strong>Training and guidance</strong> — We provide training and guidance:
            <ul>
              <li>
                <strong>Reverse charge rules</strong> — We explain when reverse charge VAT applies (construction services, certain goods, services from outside the UK) and how it works.
              </li>
              <li>
                <strong>Invoicing requirements</strong> — We explain invoicing requirements (reverse charge wording, no VAT in total, required invoice details).
              </li>
              <li>
                <strong>VAT return accounting</strong> — We explain how to account for reverse charge VAT on VAT returns (output VAT and input VAT entries).
              </li>
              <li>
                <strong>Ongoing compliance</strong> — We provide guidance on maintaining compliance (regular reviews, system updates, staff training).
              </li>
            </ul>
            Training and guidance helps you manage reverse charge VAT independently.
          </li>
          <li>
            <strong>Ongoing support</strong> — We provide ongoing support:
            <ul>
              <li>
                <strong>Regular reviews</strong> — We conduct regular reviews of reverse charge VAT compliance (invoices, VAT returns, systems).
              </li>
              <li>
                <strong>Query support</strong> — We provide support for reverse charge VAT queries (HMRC enquiries, system issues, compliance questions).
              </li>
              <li>
                <strong>Updates</strong> — We keep you informed of any changes to reverse charge VAT rules or requirements.
              </li>
              <li>
                <strong>Problem resolution</strong> — We help resolve any reverse charge VAT issues (errors, compliance problems, HMRC enquiries).
              </li>
            </ul>
            Ongoing support ensures continued compliance.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What reverse charge VAT includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Reverse charge assessment (determining when reverse charge VAT applies)</li>
            <li>Invoicing support (issuing correct reverse charge invoices)</li>
            <li>VAT return preparation (accounting for reverse charge VAT correctly)</li>
            <li>Compliance review (ensuring ongoing compliance)</li>
            <li>Training and guidance (understanding and applying reverse charge VAT rules)</li>
            <li>Ongoing support (maintaining compliance and resolving issues)</li>
          </ul>
        </div>

        <p>
          We handle all aspects of reverse charge VAT, from initial assessment to ongoing compliance. The key is understanding when reverse charge VAT applies, issuing correct invoices, accounting for reverse charge VAT correctly, and maintaining compliance.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Service scope</strong> — Basic support (invoicing or VAT return preparation) vs. comprehensive support (assessment, invoicing, VAT returns, compliance reviews, training) affects scope and time.
          </li>
          <li>
            <strong>Business complexity</strong> — Simple businesses with straightforward reverse charge supplies vs. complex businesses with multiple supplies, customers, or construction projects increases complexity.
          </li>
          <li>
            <strong>Current compliance status</strong> — Businesses already compliant needing ongoing support vs. businesses with compliance issues needing fixes affects time.
          </li>
          <li>
            <strong>Training requirements</strong> — Minimal training vs. extensive training for staff affects time.
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Basic reverse charge VAT support (invoicing or VAT return preparation, simple business):</strong> £200–£400 (includes invoicing support or VAT return preparation for reverse charge VAT, basic guidance)
          </li>
          <li>
            <strong>Standard reverse charge VAT support (assessment, invoicing, VAT returns, compliance review):</strong> £400–£800 (includes reverse charge assessment, invoicing support, VAT return preparation, compliance review, basic training)
          </li>
          <li>
            <strong>Comprehensive reverse charge VAT support (full service, training, ongoing support):</strong> £800–£1,500+ (includes comprehensive assessment, invoicing support, VAT return preparation, compliance reviews, training, ongoing support)
          </li>
          <li>
            <strong>Ongoing reverse charge VAT support (regular reviews, compliance monitoring):</strong> £150–£300 per quarter (regular compliance reviews, ongoing support, updates)
          </li>
        </ul>

        <p>
          <strong>Why reverse charge VAT support costs what they do:</strong>
        </p>
        <ul>
          <li>
            <strong>Specialist knowledge</strong> — Understanding reverse charge VAT rules, construction industry reverse charge, invoicing requirements, and VAT return accounting requires specialist knowledge.
          </li>
          <li>
            <strong>Time and complexity</strong> — Reverse charge assessment, invoicing support, VAT return preparation, compliance reviews, and training require time and attention to detail.
          </li>
          <li>
            <strong>Value provided</strong> — Reverse charge VAT support helps you avoid compliance errors, HMRC penalties, and VAT accounting mistakes, providing substantial value.
          </li>
          <li>
            <strong>Risk management</strong> — Ensuring correct reverse charge VAT compliance protects you from errors, penalties, and HMRC enquiries.
          </li>
        </ul>

        <p>
          <strong>Timeline:</strong> Basic reverse charge VAT support typically takes 1–2 weeks. Standard support typically takes 2–3 weeks. Comprehensive support typically takes 3–4 weeks. Ongoing support is provided on a quarterly or as-needed basis.
        </p>

        <p>
          <strong>Payment:</strong> Typically invoiced on completion of work, or in stages: assessment (on completion), invoicing support (on completion), VAT return preparation (on completion), training (on completion). Payment terms are typically 14–30 days.
        </p>

        <p>
          <strong>No hidden fees.</strong> Our price includes reverse charge assessment, invoicing support, VAT return preparation, compliance review, and basic training. Ongoing support (if requested) is typically charged separately or included in ongoing support packages.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          For businesses in Kent affected by reverse charge VAT, whether you&apos;re a construction business in Medway supplying construction services, a supplier in Maidstone needing invoicing help, or a customer in Canterbury receiving reverse charge supplies, reverse charge VAT support helps you comply with HMRC rules and avoid errors. Many Kent businesses struggle with reverse charge VAT, especially in construction where the domestic reverse charge applies. We help local businesses understand when reverse charge VAT applies, issue correct invoices, account for reverse charge VAT correctly, and maintain compliance, ensuring they stay on the right side of HMRC. Reverse charge VAT helps prevent VAT fraud by ensuring VAT is accounted for by the customer rather than the supplier, particularly important in industries like construction where fraud has been a problem.
        </p>

        <p>
          <strong>Common Kent reverse charge VAT scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Construction businesses</strong> — Supplying construction services to VAT-registered customers, needing reverse charge invoicing and accounting support.
          </li>
          <li>
            <strong>Businesses receiving reverse charge supplies</strong> — Receiving construction services or other reverse charge supplies, needing VAT return preparation and accounting support.
          </li>
          <li>
            <strong>Businesses with compliance issues</strong> — Having reverse charge VAT compliance problems (incorrect invoices, incorrect VAT returns) needing fixes.
          </li>
          <li>
            <strong>Businesses needing training</strong> — Wanting training on reverse charge VAT rules and how to apply them correctly.
          </li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent businesses are dealing with. Reverse charge assessment, invoicing support, VAT return preparation, compliance reviews—we&apos;ll handle your reverse charge VAT that keeps you compliant.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Reverse Charge VAT - Frequently Asked Questions"
          subtitle="Common questions about reverse charge VAT, construction industry reverse charge, and VAT accounting"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/core/quarterly-vat-returns/">Quarterly VAT Returns</Link> — VAT return filing services
            </li>
            <li>
              <Link href="/services/vat/vat-compliance-reviews/">VAT Compliance Reviews</Link> — VAT compliance review services
            </li>
            <li>
              <Link href="/services/bookkeeping/construction-bookkeeping-cis-compliant/">Construction Bookkeeping - CIS Compliant</Link> — Construction bookkeeping services
            </li>
          </ul>
          <p>
            <Link href="/services/vat/" className="font-semibold">
              View all VAT services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with reverse charge VAT?" description="Don't risk compliance errors or VAT accounting mistakes. We'll help you understand when reverse charge VAT applies, issue correct invoices, and account for reverse charge VAT correctly. No errors, no confusion—just proper reverse charge VAT accounting that keeps you compliant." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with reverse charge VAT?" />
    </>
  );
}

