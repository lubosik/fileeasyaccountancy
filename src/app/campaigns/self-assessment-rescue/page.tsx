import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Calculator, Shield, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import CampaignLayout from '@/components/campaign/CampaignLayout';
import ExitIntentModal from '@/components/campaign/ExitIntentModal';
import CalendlyEmbed from '@/components/campaign/CalendlyEmbed';
import MobileStickyCTA from '@/components/campaign/MobileStickyCTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import SelfAssessmentCalculator from '@/components/campaign/SelfAssessmentCalculator';
import { LocalBusinessSchema } from '@/lib/schema';

// TODO: Set CAMPAIGN_INDEX to true when ready to index
const CAMPAIGN_INDEX = false;

const QUOTE_URL = '/quote/?source=self-assessment';

export const metadata: Metadata = {
  title: 'Beat the 31 Jan Deadline — File Your Tax Return in 48 Hours | File Easy Accountancy',
  description: 'Stop stressing about fines or missed deductions. Book a free 30-minute Tax Savings Check-Up and file fast with full HMRC compliance.',
  robots: {
    index: CAMPAIGN_INDEX,
    follow: true,
  },
  openGraph: {
    title: 'Beat the 31 Jan Deadline — File Your Tax Return in 48 Hours',
    description: 'Stop stressing about fines or missed deductions. Book a free 30-minute Tax Savings Check-Up.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Can you file for me in time before January 31?',
    answer: 'Yes. If you book your free 30-minute review before January 15, we can ensure your return is filed well before the deadline. We work fast—typically filing within 48 hours once you provide your information.',
  },
  {
    question: 'What if my books are messy or incomplete?',
    answer: 'No problem. We specialize in cleaning up messy books and can work with bank statements, invoices, and receipts to reconstruct your tax position. We\'ll identify every allowable expense you may have missed.',
  },
  {
    question: 'Is the check-up really free with no hidden costs?',
    answer: 'Absolutely free. Our 30-minute consultation costs nothing. You only pay if you choose to engage us to file your return (fixed fee, agreed upfront). No hidden costs, no surprises.',
  },
  {
    question: 'What if I\'ve already received a late filing penalty?',
    answer: 'We can still help. We can file your return and then help you appeal the penalty if you have a reasonable excuse. Many clients save more than the penalty cost through deductions we identify.',
  },
];

export default function SelfAssessmentRescuePage() {
  return (
    <>
      <LocalBusinessSchema
        name="File Easy Accountancy"
        description="Professional Self-Assessment tax return services for Kent. Free 30-minute tax savings review."
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
              Beat the 31 Jan Deadline — File Your Tax Return in 48 Hours
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Stop stressing about fines or missed deductions. Get a{' '}
              <strong>Free Tax Savings Check-Up</strong> before you file.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Limited availability before Jan 15.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={QUOTE_URL}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Book My Free 30-Min Tax Check-Up
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>

          {/* Fear → Relief Hook */}
          <section className="bg-gradient-to-br from-red-50/50 to-primary/5 rounded-xl p-8 border-l-4 border-accent-yellow">
            <h2 className="text-2xl font-bold text-primary mb-4">
              The January 31 Stress Trap
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
                Every year, hundreds of thousands of people scramble in January, worrying about HMRC penalties, 
                searching for missing receipts, and potentially missing valuable deductions because they rushed their 
                return. The late filing penalty alone is £100—even if you owe no tax. After three months, penalties 
                escalate daily, and after six months you face an additional 5% or £300 charge.
              </p>
              <p>
                But here's the relief: you don't have to navigate this alone. Our free 30-minute review helps you 
                identify every deduction you're entitled to, ensures HMRC compliance, and gets your return filed 
                fast—typically within 48 hours after your review.
              </p>
              <Link href={QUOTE_URL} className="inline-flex items-center text-primary font-semibold hover:underline">
                Get your free review now →
              </Link>
            </div>
          </section>

          {/* Self-Assessment Calculator */}
          <section>
            <SelfAssessmentCalculator />
          </section>

          {/* Informational SEO Section */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">
              How to Save on Your Self-Assessment Tax Bill
            </h2>

            <div className="space-y-8">
              <article className="border-b pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Allowable Self-Employed Expenses You Might Be Missing
                </h3>
                <p className="text-foreground mb-3">
                  Many self-employed taxpayers miss allowable expense deductions because they're not aware of what 
                  qualifies. Office supplies, professional subscriptions, business insurance, accounting fees, and 
                  even parts of your phone and internet bills can be deducted if used for business.
                </p>
                <p className="text-foreground mb-3">
                  Additionally, vehicle expenses, travel costs, and equipment depreciation often go unclaimed. 
                  We review every category to ensure you claim the maximum you're legally entitled to.
                </p>
                <p className="text-foreground">
                  <Link href="https://www.gov.uk/expenses-if youre-self-employed" target="_blank" rel="noopener" className="text-primary underline">
                    Learn more from HMRC →
                  </Link>
                </p>
              </article>

              <article className="border-b pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  How Home Office Deductions Work
                </h3>
                <p className="text-foreground mb-3">
                  If you work from home, you may be able to claim a portion of your utility bills, rent, or 
                  mortgage interest based on the percentage of your home used exclusively for business. The key is 
                  having a dedicated workspace that's used purely for work—not your living room sofa.
                </p>
                <p className="text-foreground">
                  We'll help you calculate the correct percentage and identify all eligible expenses under HMRC's 
                  simplified expense rules or the traditional method, whichever saves you more.
                </p>
                <Link href={QUOTE_URL} className="inline-flex items-center text-primary font-semibold mt-3 hover:underline">
                  Find out which applies to you →
                </Link>
              </article>

              <article className="border-b pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  The 31 Jan Self-Assessment Filing Penalties (and How to Avoid Them)
                </h3>
                <p className="text-foreground mb-3">
                  Missing the January 31 deadline triggers immediate penalties: £100 fixed penalty applies even if 
                  you owe no tax. After three months, £10 daily penalties kick in (max £900). After six months, 
                  a 5% or £300 penalty applies. After twelve months, another 5% or £300 penalty.
                </p>
                <p className="text-foreground">
                  The best way to avoid penalties is to file early. File before 15 January and you'll have peace 
                  of mind, time to gather missing documents, and the opportunity to maximize deductions without 
                  rushing.
                </p>
              </article>
            </div>
          </section>

          {/* Attraction Offer Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent-yellow/10 rounded-xl p-8 border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Get Your "Tax Savings Guarantee" Check-Up
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: CheckCircle, text: 'Free 30-minute review call' },
                { icon: Shield, text: 'Identify missed deductions' },
                { icon: FileText, text: 'Quick filing quote (fixed fee)' },
                { icon: AlertTriangle, text: 'Stress-free support through 31 Jan' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href={QUOTE_URL}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors text-lg"
              >
                Book My Free Check-Up Before Jan 15
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </section>

          {/* Trust & Proof */}
          <section className=" border rounded-xl p-8" style={{ backgroundColor: '#F8F8F5' }}>
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Why Choose File Easy Accountancy for Your Self-Assessment?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">HMRC Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  We ensure every return meets HMRC standards and regulations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fast Filing</h3>
                <p className="text-sm text-muted-foreground">
                  Typically filed within 48 hours after you provide documents
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Maximize Savings</h3>
                <p className="text-sm text-muted-foreground">
                  We identify every legitimate deduction you may have missed
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
                Still have questions? Book your free consultation →
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stop Stressing. Start Saving.</h2>
            <p className="mb-6 text-primary-foreground/90">
              Join the thousands who've trusted us with their Self-Assessment. Book your free 
              30-minute Tax Savings Check-Up today.
            </p>
            <Link
              href={QUOTE_URL}
              className="inline-flex items-center justify-center text-primary hover:opacity-90 px-8 py-3 rounded-md font-semibold transition-colors" style={{ backgroundColor: '#F8F8F5' }}
            >
              Book My Free Tax Check-Up
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </section>
        </article>
      </CampaignLayout>

      {/* Exit Intent Modal */}
      <ExitIntentModal
        title="Before you go — want us to check for missed savings?"
        bullets={[
          'Free 30-min review',
          'Avoid penalties',
          'File in 48 hours'
        ]}
        ctaLabel="Book My Free Check-Up"
        ctaUrl={QUOTE_URL}
        campaign="self-assessment"
      />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA
        text="Beat the 31 Jan Rush — Book My Free 30-Min Tax Check-Up"
        href={QUOTE_URL}
      />
    </>
  );
}

