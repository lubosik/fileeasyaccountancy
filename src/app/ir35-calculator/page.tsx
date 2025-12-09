import { Metadata } from 'next';
import Link from 'next/link';
import IR35Calculator from '@/components/calculators/IR35Calculator';
import LeadMagnetCard from '@/components/ui/LeadMagnetCard';

export const metadata: Metadata = {
  title: 'FREE IR35 Calculator UK 2025 | Compare Inside vs Outside IR35 Take-Home Pay',
  description: 'Free IR35 calculator for UK contractors. Compare take-home pay inside IR35 (PAYE) vs outside IR35 (Limited Company). Instant results, updated 2025/26 tax rates, no signup required. Used by 500+ contractors.',
  keywords: 'IR35 calculator UK, IR35 calculator free, inside IR35 calculator, outside IR35 calculator, contractor tax calculator UK, IR35 take home pay calculator, IR35 calculator 2025, IR35 calculator Kent, IR35 calculator London, off-payroll working calculator',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/ir35-calculator/',
  },
  openGraph: {
    title: 'FREE IR35 Calculator UK 2025 | Compare Inside vs Outside IR35',
    description: 'Free IR35 calculator - Compare take-home pay inside vs outside IR35. Instant results, 2025/26 tax rates, no signup required.',
    url: 'https://fileeasyaccountancy.co.uk/ir35-calculator/',
    type: 'website',
  },
};

export default function IR35CalculatorPage() {
  return (
    <div className="fe-orange-accent min-h-screen bg-page">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 /20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm" style={{ backgroundColor: '#F8F8F5' }}>
              FREE • Instant Results • Updated for 2025/26 Tax Rates
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IR35 Calculator UK
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-medium">
              Compare Inside vs Outside IR35 Take-Home Pay
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              See exactly how much you'll keep inside IR35 (PAYE) vs outside IR35 (Limited Company).
              No signup required. Instant calculations with 2025/26 tax rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-semibold">✓</span>
                  <span>Used by 500+ contractors</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-semibold">Quick</span>
                  <span>2-minute calculation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-semibold">Accurate</span>
                  <span>2025/26 tax rates</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: '#C9A227',
                  color: '#111111',
                }}
              >
                Calculate Your Take-Home Pay →
              </a>
              <Link
                href="/quote/?source=ir35-calculator"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-lg /10 backdrop-blur-sm border-2 border-white/30 hover:background-color: #F8F8F5/20 transition-all" style={{ backgroundColor: '#F8F8F5' }}
              >
                Get Free IR35 Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use This Calculator */}
      <section className="py-8 bg-raised border-b border-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-primary mb-2">See Real Savings</h3>
                <p className="text-sm text-secondary">
                  Compare actual take-home pay for inside vs outside IR35 contracts
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">2025/26 Tax Rates</h3>
                <p className="text-sm text-secondary">
                  Updated with latest UK tax rates, NI, and corporation tax
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Instant Results</h3>
                <p className="text-sm text-secondary">
                  No signup required. Get your comparison in under 2 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <IR35Calculator />
        </div>
      </section>

      {/* Trust Signals & CTAs */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Lead Magnet */}
            <div>
              <LeadMagnetCard variant="small" />
            </div>

            {/* Expert IR35 Advice CTA */}
            <div className="bg-raised rounded-lg p-6 border-2 border-primary/20 shadow-lg">
              <h3 className="text-lg font-bold text-primary mb-3">
                Need Expert IR35 Advice?
              </h3>
              <p className="text-secondary mb-4 text-sm">
                Our qualified accountants help contractors navigate IR35 rules, optimize tax position, and ensure compliance.
              </p>
              <ul className="text-xs text-secondary mb-4 space-y-1">
                <li>✓ IR35 status assessments</li>
                <li>✓ Contract reviews</li>
                <li>✓ Tax optimization strategies</li>
                <li>✓ HMRC compliance support</li>
              </ul>
              <Link
                href="/quote/?source=ir35-calculator"
                className="block w-full text-center px-4 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-md"
                style={{
                  backgroundColor: '#C9A227',
                  color: '#111111',
                }}
              >
                Book Free Consultation →
              </Link>
            </div>

            {/* Important Disclaimer */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Important Disclaimer
              </h3>
              <p className="text-blue-800 text-sm mb-3">
                This calculator provides estimates based on standard UK tax rates and allowances for 2025/26.
              </p>
              <p className="text-blue-700 text-xs">
                Actual tax liability may vary based on individual circumstances, expenses, pension contributions, and other factors. Always consult a qualified accountant for personalized advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assumptions & Disclosures */}
      <section className="py-12 bg-raised border-t border-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Calculation Assumptions & Sources
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Inside IR35 (PAYE)</h3>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>• Employer NI funded from assignment rate (typical umbrella approach)</li>
                  <li>• Umbrella company fees deducted from gross pay</li>
                  <li>• Standard PAYE tax and NI calculations apply</li>
                  <li>• Limited expense allowances</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Outside IR35 (Limited Company)</h3>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>• Corporation tax on company profits</li>
                  <li>• Salary + dividend optimization strategy</li>
                  <li>• Business expenses fully deductible</li>
                  <li>• Dividend allowance and rates applied</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-surface rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Tax Rates & Sources (2025/26)</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-secondary">
                <div>
                  <h4 className="font-medium mb-2">Income Tax:</h4>
                  <p>Personal Allowance: £12,570 (tapers above £100k)</p>
                  <p>Basic rate: 20% to £50,270</p>
                  <p>Higher rate: 40% to £125,140</p>
                  <p>Additional rate: 45% above £125,140</p>
                  <p className="text-xs mt-1">Source: GOV.UK Income Tax rates</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">National Insurance:</h4>
                  <p>Employee: 8% main rate (2% above UEL)</p>
                  <p>Employer: 15% from April 2025</p>
                  <p>Secondary Threshold: £5,000/year</p>
                  <p className="text-xs mt-1">Source: BDO, Sage UK, Moneysoft</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Corporation Tax:</h4>
                  <p>Small profits rate: 19% (≤£50k)</p>
                  <p>Main rate: 25% (≥£250k)</p>
                  <p>Marginal relief between £50k-£250k</p>
                  <p className="text-xs mt-1">Source: GOV.UK Corporation Tax rates</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Dividend Tax:</h4>
                  <p>Allowance: £500</p>
                  <p>Basic rate: 8.75%</p>
                  <p>Higher rate: 33.75%</p>
                  <p>Additional rate: 39.35%</p>
                  <p className="text-xs mt-1">Source: 1st Formations</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-secondary">
                Need personalized IR35 guidance?{' '}
                <Link
                  href="/quote/?source=ir35-calculator"
                  className="text-brand-secondary hover:underline"
                >
                  Book a free consultation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}