import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { FAQPageSchema, BreadcrumbSchema } from '@/lib/schema';
import ArticleLayout from '@/components/ArticleLayout';
import ArticleCTA from '@/components/ArticleCTA';

export const metadata: Metadata = {
  title: 'Free CIS Compliance Check | Construction Accountants UK | File Easy',
  description: 'Get a free CIS compliance check for your construction business. CIS-compliant bookkeeping, monthly returns, and HMRC record-keeping. Book a free consultation today.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/construction/cis-compliance/',
  },
  openGraph: {
    title: 'Free CIS Compliance Check | Construction Accountants UK | File Easy',
    description: 'Get a free CIS compliance check for your construction business. CIS-compliant bookkeeping, monthly returns, and HMRC record-keeping. Book a free consultation today.',
    url: 'https://fileeasyaccountancy.co.uk/services/construction/cis-compliance/',
    type: 'website',
  },
};

// Calendly constant
const QUOTE_URL = '/quote/?source=cis-compliance';

const faqs = [
  {
    question: 'What is CIS (Construction Industry Scheme)?',
    answer: 'CIS is a UK tax scheme where contractors deduct money from subcontractor payments (20% for registered, 30% for unregistered) and pass it to HMRC. We handle monthly CIS returns, deduction statements, and HMRC record-keeping for construction businesses. CIS compliance is mandatory for construction industry payments—you can\'t avoid it.',
  },
  {
    question: 'Do I need CIS compliance services?',
    answer: 'Yes, if you\'re a contractor paying subcontractors, you need CIS-compliant bookkeeping to track deductions, verify subcontractors, and submit monthly returns. If you\'re a subcontractor receiving payments with deductions, you need CIS compliance to track what\'s been deducted, reconcile with CIS statements, and prepare for Self Assessment. CIS compliance is mandatory—getting it wrong means penalties, interest, and potentially losing your CIS registration.',
  },
  {
    question: 'How does CIS deduction work?',
    answer: 'If you\'re a contractor, you verify each subcontractor with HMRC before paying them. HMRC tells you the deduction rate (20% if registered, 30% if unregistered). You then deduct that percentage from the labor portion of the payment (not materials). So if you pay £1,000 for labor to a registered subcontractor, you deduct £200 (20%) and pay them £800. You then pay that £200 to HMRC and include it in your monthly CIS return.',
  },
  {
    question: 'What records do contractors need for CIS?',
    answer: 'Contractors need to keep records of: all payments made to subcontractors, the gross amount, materials amount (if applicable), labor amount, deduction rate (20% or 30%), deduction amount, verification status (verified with HMRC or not), monthly CIS returns filed, and payments made to HMRC. Records must be kept for at least 6 years. HMRC can inspect your CIS records at any time, so it\'s worth keeping everything organized.',
  },
  {
    question: 'Can I handle CIS compliance myself?',
    answer: 'Technically yes, but most construction businesses find it\'s worth getting help. CIS compliance is strict—monthly returns, verification requirements, deduction calculations, materials vs labor splits—and mistakes are expensive. A construction accountant who knows CIS helps you stay compliant, avoid penalties, and save time. If you\'re comfortable with CIS requirements and have time to stay on top of monthly returns, you can do it yourself, but most construction businesses find professional help is worth it.',
  },
  {
    question: 'What happens if I get CIS compliance wrong?',
    answer: 'Getting CIS compliance wrong can result in penalties, interest charges, and potentially losing your CIS registration. HMRC can inspect your CIS records at any time, and mistakes can be expensive. We help you stay compliant and avoid penalties by handling monthly CIS returns, deduction statements, and HMRC record-keeping. Book a free CIS compliance check to see how we can help your construction business.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Construction Services', href: '/services/construction' },
  { label: 'CIS Compliance Services', href: '/services/construction/cis-compliance' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'attraction-offer', text: 'Free CIS Compliance Check' },
  { id: 'faqs', text: 'FAQs' },
];

export default function CISCompliancePage() {
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
            serviceType: 'CIS Compliance Services',
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
                { '@type': 'City', name: 'London', containedIn: { '@type': 'AdministrativeArea', name: 'Greater London' } },
              ],
            },
            description: 'CIS-compliant bookkeeping, monthly returns, and HMRC record-keeping for UK construction businesses.',
            name: 'CIS Compliance Services',
            url: 'https://fileeasyaccountancy.co.uk/services/construction/cis-compliance/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Construction Accounting Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CIS Verification' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monthly CIS Returns' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deduction Tracking' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HMRC Record-Keeping' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="CIS Compliance Services for UK Contractors"
        updated="January 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          Running a construction business means dealing with CIS (Construction Industry Scheme). If you're a contractor paying subcontractors, you need to deduct tax before you pay them. If you're a subcontractor, you're getting payments with tax already deducted. Either way, CIS compliance is more complicated than regular business accounting, and getting it wrong can be expensive.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here's what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Construction Industry Scheme (CIS) requires contractors to deduct tax</strong> from payments to subcontractors at 20% (if they're registered) or 30% (if they're unregistered) before payment (
              <a href="https://www.gov.uk/what-is-the-construction-industry-scheme" target="_blank" rel="noopener noreferrer">
                gov.uk CIS guidance
              </a>
              )—you can't just pay subcontractors in full and figure out the tax later
            </li>
            <li>
              <strong>CIS compliance is mandatory</strong> for construction industry payments—you can't avoid it, and getting it wrong means penalties, interest, and potentially losing your CIS registration
            </li>
            <li>
              <strong>Construction businesses need CIS-compliant bookkeeping</strong> to track deductions, verify subcontractors, and submit monthly returns—regular bookkeeping doesn't cover CIS requirements
            </li>
          </ul>
        </div>

        <p>
          The problem is most construction businesses try to use generic accounting that doesn't account for CIS requirements. Contractors miss CIS deductions, subcontractors don't track what's been deducted, and monthly CIS returns get filed late or incorrectly. That leads to compliance issues, missed deductions, and poor decision-making.
        </p>

        <p>
          We provide CIS compliance services for UK construction businesses. We handle monthly CIS returns, deduction statements, and HMRC record-keeping. We verify subcontractors, track deductions, and ensure you stay compliant. No compliance headaches, just results.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>

        <ul>
          <li>
            <strong>Stay compliant with HMRC and CIS requirements</strong> — We handle monthly CIS returns, deduction statements, and HMRC record-keeping. No compliance headaches, just results.
          </li>
          <li>
            <strong>Track CIS deductions accurately</strong> — We verify subcontractors, track deductions, and ensure you're paying the right amount to HMRC. No missed deductions, no penalties.
          </li>
          <li>
            <strong>Save 5–10 hours per month on CIS compliance</strong> — We handle the complexity so you don't have to. Focus on building, not paperwork.
          </li>
          <li>
            <strong>Get audit-ready records for HMRC enquiries</strong> — We prepare your records and handle enquiries so you stay compliant and avoid penalties.
          </li>
          <li>
            <strong>Avoid CIS penalties and interest charges</strong> — We ensure you're filing monthly CIS returns on time and correctly. No late filing penalties, no interest charges.
          </li>
          <li>
            <strong>Reconcile CIS statements with your accounts</strong> — We track what's been deducted, reconcile with CIS statements, and prepare for Self Assessment. No confusion, just clarity.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>

        <p>
          <strong>Step-by-step process for CIS compliance:</strong>
        </p>

        <ol>
          <li>
            <strong>Discovery call</strong> — We review your current CIS setup (contractor or subcontractor, number of subcontractors, current CIS returns, verification status)
          </li>
          <li>
            <strong>Onboarding</strong> — We set up CIS-compliant bookkeeping, verify subcontractors with HMRC, and map your CIS requirements
          </li>
          <li>
            <strong>Ongoing work</strong> — We handle monthly CIS returns, deduction statements, and HMRC record-keeping
          </li>
          <li>
            <strong>Verification and tracking</strong> — We verify subcontractors before payments, track deductions, and ensure you're paying the right amount to HMRC
          </li>
          <li>
            <strong>Reconciliation and reporting</strong> — We reconcile CIS statements with your accounts, track what's been deducted, and prepare for Self Assessment
          </li>
          <li>
            <strong>HMRC support</strong> — We prepare your records and handle enquiries so you stay compliant and avoid penalties
          </li>
        </ol>

        <h2 id="attraction-offer">Free CIS Compliance Check</h2>

        <p>
          Get a free CIS compliance check for your construction business. We'll review your current CIS setup, identify any compliance issues, and show you how we can help your construction business stay compliant and avoid penalties.
        </p>

        <div className="bg-cta-bg/10 border-2 border-cta-bg/20 rounded-lg p-6 my-8">
          <h3 className="text-xl font-bold text-primary mb-4">What's included in your free CIS compliance check:</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-secondary">Review of your current CIS setup</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-secondary">Identification of any compliance issues</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-secondary">Recommendations for improvement</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-secondary">Clear next steps for your business</span>
            </li>
          </ul>
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta-bg text-cta-text px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cta-bg/90 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Your Free CIS Compliance Check</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <h2 id="faqs">Frequently Asked Questions</h2>

        <FAQAccordion
          title="CIS Compliance Services - Frequently Asked Questions"
          subtitle="Common questions about CIS compliance for UK construction businesses"
          faqs={faqs}
          generateJsonLd={false}
        />

        {/* Internal Links */}
        <div className="bg-muted/30 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Related Services</h3>
          <div className="space-y-3">
            <Link
              href="/construction-packages"
              className="text-primary hover:underline font-semibold inline-flex items-center space-x-2"
            >
              <span>View Construction Accounting Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <br />
            <Link
              href="/resources"
              className="text-primary hover:underline font-semibold inline-flex items-center space-x-2"
            >
              <span>Construction Accounting Resources</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Sticky CTA */}
        <ArticleCTA
          title="Ready to Get Started with CIS Compliance?"
          description="Get a free CIS compliance check for your construction business. We'll review your current setup, identify any compliance issues, and show you how we can help."
          buttonText="Get Your Free CIS Compliance Check"
          buttonHref={QUOTE_URL}
        />
      </ArticleLayout>
    </>
  );
}

