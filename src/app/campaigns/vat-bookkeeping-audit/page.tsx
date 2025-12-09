import { Metadata } from 'next';
import Link from 'next/link';
import { FileCheck, Shield, Cloud, AlertTriangle, CheckCircle, ArrowRight, Calculator } from 'lucide-react';
import CampaignLayout from '@/components/campaign/CampaignLayout';
import ExitIntentModal from '@/components/campaign/ExitIntentModal';
import MobileStickyCTA from '@/components/campaign/MobileStickyCTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { LocalBusinessSchema } from '@/lib/schema';

// TODO: Set CAMPAIGN_INDEX to true when ready to index
const CAMPAIGN_INDEX = false;

const QUOTE_URL = '/quote/?source=vat-audit';

export const metadata: Metadata = {
  title: 'End the Bookkeeping Stress — Free VAT & Compliance Audit | File Easy Accountancy',
  description: 'Find hidden VAT errors and fix bookkeeping headaches. Free audit + cloud setup for small businesses in Kent.',
  robots: {
    index: CAMPAIGN_INDEX,
    follow: true,
  },
  openGraph: {
    title: 'End the Bookkeeping Stress — Free VAT & Compliance Audit',
    description: 'Find hidden VAT errors and fix bookkeeping headaches. Free audit + cloud setup.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Can you help me change accountants?',
    answer: 'Absolutely. We work with many clients switching from other providers. We handle the transition smoothly, reviewing your current setup and recommending improvements in the free audit.',
  },
  {
    question: 'What if I find issues after the audit?',
    answer: 'We\'ll help you fix them. If we discover errors or compliance issues during the audit, we provide a clear action plan to resolve them quickly and cost-effectively. No obligation to engage us for the fix.',
  },
  {
    question: 'Is the cloud setup really free?',
    answer: 'Yes. If you need QuickBooks or Xero setup as part of the audit recommendations, we provide basic setup at no charge. You only pay for ongoing bookkeeping service if you choose to engage us.',
  },
  {
    question: 'How long does the audit take?',
    answer: 'The audit typically takes 2-3 business days after the initial review call. We examine your current bookkeeping, VAT filings, and identify errors, missed opportunities, and compliance issues.',
  },
];

export default function VATBookkeepingAuditPage() {
  return (
    <>
      <LocalBusinessSchema
        name="File Easy Accountancy"
        description="Professional VAT and bookkeeping audit services for Kent businesses. Free compliance audit."
        address={{
          streetAddress: 'Chatham Business Centre',
          addressLocality: 'Chatham',
          addressRegion: 'Kent',
          postalCode: 'ME4 4AA',
          addressCountry: 'GB',
        }}
        telephone="+447894447435"
        email="info@fileeasyaccountancy.co.uk"
        url="https://fileeasyaccountancy.co.uk"
        serviceArea={{
          name: 'Medway, Kent',
          latitude: 51.3883,
          longitude: 0.5083,
          radius: 15000,
        }}
      />

      <CampaignLayout>
        <article className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl space-y-12">
          {/* Hero Section */}
          <section className="text-center py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              End the Bookkeeping Stress — Free VAT & Compliance Audit
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Discover hidden errors, missed VAT savings, and get a free cloud setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={QUOTE_URL}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Book My Free VAT Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>

          {/* Pain → Relief Hook */}
          <section className="bg-gradient-to-br from-red-50/50 to-primary/5 rounded-xl p-8 border-l-4 border-accent-yellow">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Bookkeeping Nightmares and VAT Headaches
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
                Is bookkeeping taking too much of your time? Are you worried about VAT errors or Making Tax 
                Digital compliance? Many small business owners spend hours wrestling with spreadsheets, 
                trying to keep up with VAT returns and HMRC deadlines, only to discover errors later—often 
                costing hundreds in penalties.
              </p>
              <p>
                The good news: you don't have to handle this alone. Our free audit identifies hidden VAT errors, 
                uncovers missed VAT scheme opportunities (like the Flat Rate Scheme), ensures Making Tax Digital 
                compliance, and we can even set up cloud bookkeeping for free if needed—saving you time and stress.
              </p>
              <Link href={QUOTE_URL} className="inline-flex items-center text-primary font-semibold hover:underline">
                Get your free audit now →
              </Link>
            </div>
          </section>

          {/* Informational SEO Section */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">
              VAT & Bookkeeping Compliance for UK Businesses
            </h2>

            <div className="space-y-8">
              <article className="border-b pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  What Is the VAT Flat Rate Scheme and Should You Switch?
                </h3>
                <p className="text-foreground mb-3">
                  The Flat Rate Scheme lets you pay a fixed percentage of your turnover as VAT instead of 
                  calculating the difference between input and output VAT. For businesses with low expenses, 
                  this can reduce VAT payable and simplify administration.
                </p>
                <p className="text-foreground">
                  However, it's not right for everyone—businesses with high VAT-able expenses may pay more. 
                  We analyze your figures to determine if switching would save you money.
                </p>
                <Link href={QUOTE_URL} className="inline-flex items-center text-primary font-semibold mt-3 hover:underline">
                  Find out if you should switch →
                </Link>
              </article>

              <article className="border-b pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Common VAT Registration Mistakes (and How to Fix Them)
                </h3>
                <p className="text-foreground mb-3">
                  Many businesses make errors in VAT registration—claiming capital items incorrectly, mixing 
                  up zero-rated vs standard-rated supplies, or failing to register for VAT when turnover 
                  exceeds the threshold (£85,000 in 2025/26).
                </p>
                <p className="text-foreground">
                  These mistakes can lead to penalties, interest charges, and compliance headaches. Our audit 
                  identifies and helps you fix these issues before they escalate.
                </p>
                <Link href="https://www.gov.uk/vat-registration" target="_blank" rel="noopener" className="text-primary underline">
                  Learn more from HMRC →
                </Link>
              </article>

              <article className="border-b pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Making Tax Digital (MTD): What You Actually Need to Know
                </h3>
                <p className="text-foreground mb-3">
                  From April 2024, most VAT-registered businesses must use Making Tax Digital compatible 
                  software to keep digital records and file VAT returns. Paper records and manual calculations 
                  are no longer acceptable for most businesses.
                </p>
                <p className="text-foreground">
                  This means you need cloud accounting software like QuickBooks or Xero. Many businesses 
                  are unaware until they try to file their return. We help you get compliant quickly and 
                  make the transition painless.
                </p>
                <Link href="https://www.gov.uk/guidance/vat-making-tax-digital" target="_blank" rel="noopener" className="text-primary underline">
                  Learn more from HMRC →
                </Link>
              </article>

              <article className="border-b pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  How Cloud Bookkeeping Saves You Time (and HMRC Headaches)
                </h3>
                <p className="text-foreground mb-3">
                  Cloud accounting software (like QuickBooks or Xero) automates bank feeds, categorizes 
                  transactions, calculates VAT automatically, and generates real-time reports. You can access 
                  from anywhere, and your accountant can help remotely.
                </p>
                <p className="text-foreground">
                  The result: fewer errors, quicker VAT returns, HMRC compliance, and hours saved monthly. 
                  Many clients report spending just 30 minutes per month on bookkeeping instead of hours 
                  wrestling with spreadsheets.
                </p>
                <Link href={QUOTE_URL} className="inline-flex items-center text-primary font-semibold mt-3 hover:underline">
                  See how we can save you time →
                </Link>
              </article>
            </div>
          </section>

          {/* Offer Section */}
          <section className="bg-gradient-to-br from-accent-yellow/10 to-primary/5 rounded-xl p-8 border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Your Free VAT & Bookkeeping Audit Includes:
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">30-Min Expert Call</h3>
                  <p className="text-sm text-muted-foreground">
                    Discuss your current bookkeeping and VAT challenges
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Review VAT Scheme & Filings</h3>
                  <p className="text-sm text-muted-foreground">
                    Check your VAT calculations and scheme eligibility
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Hidden Error Report</h3>
                  <p className="text-sm text-muted-foreground">
                    Identify mistakes and compliance issues
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Cloud className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Free QuickBooks/Xero Setup</h3>
                  <p className="text-sm text-muted-foreground">
                    If needed, we'll set up cloud bookkeeping at no charge
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href={QUOTE_URL}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors text-lg"
              >
                Book My Free VAT Audit
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </section>

          {/* Trust & Proof */}
          <section className=" border rounded-xl p-8" style={{ backgroundColor: '#F8F8F5' }}>
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Why Choose File Easy Accountancy for VAT & Bookkeeping?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">HMRC Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  We ensure every VAT return meets HMRC standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Cloud Bookkeeping</h3>
                <p className="text-sm text-muted-foreground">
                  We set up QuickBooks or Xero to save you time
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Maximize Savings</h3>
                <p className="text-sm text-muted-foreground">
                  We identify the right VAT schemes to reduce liability
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
            <div className="mt-8 text-center">
              <Link
                href={QUOTE_URL}
                className="inline-flex items-center text-primary font-semibold text-lg hover:underline"
              >
                Ready to end the bookkeeping stress? Book your free audit →
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stop Spending Hours on Bookkeeping. Start Using Your Time for Growth.</h2>
            <p className="mb-6 text-primary-foreground/90">
              Get your free VAT & Bookkeeping Audit today. Identify errors and opportunities in no time.
            </p>
            <Link
              href={QUOTE_URL}
              className="inline-flex items-center justify-center text-primary hover:opacity-90 px-8 py-3 rounded-md font-semibold transition-colors" style={{ backgroundColor: '#F8F8F5' }}
            >
              Book My Free VAT Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </section>
        </article>
      </CampaignLayout>

      {/* Exit Intent Modal */}
      <ExitIntentModal
        title="Don't leave errors unchecked — want a free VAT audit?"
        bullets={[
          'Find issues fast',
          'Save time',
          'Free cloud setup'
        ]}
        ctaLabel="Book My Free VAT Audit"
        ctaUrl={QUOTE_URL}
        campaign="vat-audit"
      />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA
        text="Book My Free VAT & Bookkeeping Audit"
        href={QUOTE_URL}
      />
    </>
  );
}

