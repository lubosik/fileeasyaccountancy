import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Calculator, FileCheck, CheckCircle, ArrowRight, Coins } from 'lucide-react';
import CampaignLayout from '@/components/campaign/CampaignLayout';
import ExitIntentModal from '@/components/campaign/ExitIntentModal';
import MobileStickyCTA from '@/components/campaign/MobileStickyCTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { LocalBusinessSchema } from '@/lib/schema';

// TODO: Set CAMPAIGN_INDEX to true when ready to index
const CAMPAIGN_INDEX = false;

const QUOTE_URL = '/quote/?source=profit-optimization';

export const metadata: Metadata = {
  title: 'Maximise Your Take-Home Pay — Free Tax Optimization Review | File Easy Accountancy',
  description: 'Find your most tax-efficient salary/dividend mix and structure. Free 30-min review for directors and small business owners in Kent.',
  robots: {
    index: CAMPAIGN_INDEX,
    follow: true,
  },
  openGraph: {
    title: 'Maximise Your Take-Home Pay — Free Tax Optimization Review',
    description: 'Find the most tax-efficient way to pay yourself and save £1,000s legally.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Is this plan legal and HMRC-compliant?',
    answer: 'Absolutely. We work within HMRC rules and regulations. Our recommendations are 100% legal and compliant. We never suggest aggressive tax avoidance—only legitimate optimization.',
  },
  {
    question: 'What if I\'m not sure about my current numbers?',
    answer: 'No problem. We can work with estimated figures in the free review, then refine once we have your actual numbers. The important thing is understanding the strategy, which we can discuss even without exact figures.',
  },
  {
    question: 'Can you help me switch my current accounting approach?',
    answer: 'Yes. We work with many clients switching from DIY accounting or other providers. We\'ll review your current structure and recommend changes that maximize take-home pay going forward.',
  },
  {
    question: 'How much could I realistically save?',
    answer: 'Savings vary by income level and current structure, but many clients save £2,000–£5,000 annually through better salary/dividend optimization. Our free review gives you a personalized estimate.',
  },
];

export default function ProfitOptimizationPage() {
  return (
    <>
      <LocalBusinessSchema
        name="File Easy Accountancy"
        description="Professional tax optimization services for Kent directors and business owners. Free profit optimization blueprint."
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
              Maximise Your Take-Home Pay — Free Tax Optimization Review
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Find out the most tax-efficient way to pay yourself (and save £1,000s legally).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={QUOTE_URL}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Book My Free 30-Min Review
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>

          {/* Empathy + Expertise Hook */}
          <section className="bg-gradient-to-br from-blue-50/50 to-primary/5 rounded-xl p-8 border-l-4 border-primary">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Are You Paying Yourself the Tax-Smart Way?
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
                Many limited company directors and small business owners don't realize they could be keeping 
                significantly more of their income simply by optimizing their salary/dividend mix. The difference 
                between a basic approach and a tax-optimized structure can easily be £2,000–£5,000 annually—and 
                it's completely legal.
              </p>
              <p>
                The challenge is that tax rules change frequently, and what worked five years ago may not be optimal 
                today. Personal allowances, dividend allowances, and corporation tax rates all impact the best 
                strategy. Our expertise helps you navigate this complexity and unlock maximum take-home pay.
              </p>
            </div>
          </section>

          {/* Informational SEO Section */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Tax Optimization Strategies for Business Owners
            </h2>

            <div className="space-y-8">
              <article className="border-b pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Salary vs Dividends: What's the Right Mix in 2025?
                </h3>
                <p className="text-foreground mb-3">
                  With the dividend allowance reduced and National Insurance changes, the optimal 
                  salary/dividend split has shifted. For 2025/26, most directors should take a small salary 
                  (around £12,570 to qualify for state pension credits) and the remainder as dividends to 
                  minimize combined tax and National Insurance.
                </p>
                <p className="text-foreground">
                  However, your specific circumstances matter—extra income, pension contributions, and other 
                  factors affect the ideal split. We calculate your personalized optimal mix.
                </p>
                <Link href={QUOTE_URL} className="inline-flex items-center text-primary font-semibold mt-3 hover:underline">
                  Find your optimal mix →
                </Link>
              </article>

              <article className="border-b pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Sole Trader vs Limited Company — Which Saves You More Tax?
                </h3>
                <p className="text-foreground mb-3">
                  The choice between sole trader and limited company structure has tax implications that change 
                  as your income grows. Generally, limited companies become more tax-efficient above £50,000 
                  annual profits due to corporation tax rates vs income tax rates.
                </p>
                <p className="text-foreground">
                  But it's not always straightforward. Administrative costs, IR35 considerations, and future 
                  plans matter too. We help you weigh the pros and cons for your specific situation.
                </p>
                <Link href={QUOTE_URL} className="inline-flex items-center text-primary font-semibold mt-3 hover:underline">
                  See which structure saves you more →
                </Link>
              </article>

              <article className="border-b pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Common Director Expenses You Might Be Missing
                </h3>
                <p className="text-foreground mb-3">
                  Limited company directors often miss legitimate expense claims that reduce their corporation 
                  tax. Common areas include: home office (if exclusively business use), professional subscriptions, 
                  training courses, equipment, business insurance, and even certain travel costs.
                </p>
                <p className="text-foreground">
                  <Link href="https://www.gov.uk/expenses-and-benefits-a-to-z" target="_blank" rel="noopener" className="text-primary underline">
                    Learn more from HMRC →
                  </Link>
                </p>
              </article>
            </div>
          </section>

          {/* Offer Section */}
          <section className="bg-gradient-to-br from-accent-yellow/10 to-primary/5 rounded-xl p-8 border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Your Free "Profit Optimization Blueprint"
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Personal Tax Efficiency Audit</h3>
                <p className="text-sm text-muted-foreground">
                  We review your current structure and identify optimization opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Salary/Dividend Plan</h3>
                <p className="text-sm text-muted-foreground">
                  We calculate your optimal salary vs dividend split to maximize take-home pay
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1-Page Summary</h3>
                <p className="text-sm text-muted-foreground">
                  We provide a clear, one-page blueprint you can follow immediately
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href={QUOTE_URL}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors text-lg"
              >
                Get My Free Blueprint
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </section>

          {/* Trust & Proof */}
          <section className=" border rounded-xl p-8" style={{ backgroundColor: '#F8F8F5' }}>
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Why File Easy Accountancy for Tax Optimization?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Legal & Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  Every recommendation is fully HMRC-compliant
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">
                  Thousands of clients have maximized their take-home pay
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Personalized</h3>
                <p className="text-sm text-muted-foreground">
                  Calculations tailored to your exact income and circumstances
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
                Ready to maximize your take-home pay? Book your free consultation →
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stop Overpaying Tax. Start Maximizing Take-Home Pay.</h2>
            <p className="mb-6 text-primary-foreground/90">
              Get your personalized Profit Optimization Blueprint today. Free 30-minute review.
            </p>
            <Link
              href={QUOTE_URL}
              className="inline-flex items-center justify-center text-primary hover:opacity-90 px-8 py-3 rounded-md font-semibold transition-colors" style={{ backgroundColor: '#F8F8F5' }}
            >
              Get My Free Blueprint
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </section>
        </article>
      </CampaignLayout>

      {/* Exit Intent Modal */}
      <ExitIntentModal
        title="Quick question — want your personalised take-home plan?"
        bullets={[
          'Free 30-min review',
          'Clear, legal plan',
          'Written summary'
        ]}
        ctaLabel="Get My Free Blueprint"
        ctaUrl={QUOTE_URL}
        campaign="profit-optimization"
      />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA
        text="Get My Free Tax Optimization Blueprint"
        href={QUOTE_URL}
      />
    </>
  );
}

