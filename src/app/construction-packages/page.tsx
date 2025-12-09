import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, X } from 'lucide-react';
import { FAQPageSchema, BreadcrumbSchema, LocalBusinessSchema } from '@/lib/schema';
import CalendlyWidget from '@/components/ui/CalendlyWidget';

export const metadata: Metadata = {
  title: 'Construction Accounting Packages | Silver, Gold & Platinum | Fileeasy Accountancy',
  description: 'Choose the right construction accounting package for your business. Silver for small contractors, Gold for growing businesses, Platinum for established developers. CIS-compliant, project-based accounting with real-time profitability tracking.',
  alternates: {
    canonical: '/construction-packages',
  },
};

// Quote flow URL
const QUOTE_URL = '/quote/?source=construction-packages';

export default function ConstructionPackagesPage() {
  // Construction-specific FAQs
  const constructionFAQs = [
    {
      question: "Which construction accounting package is right for my business?",
      answer: "Silver is ideal for small contractors and sole traders. Gold suits growing contractors and developers who need real-time project profitability. Platinum is for established developers and large contractors who need dedicated account management and strategic advisory."
    },
    {
      question: "Do all packages include CIS compliance?",
      answer: "Yes, all packages include CIS-compliant bookkeeping, monthly CIS returns, deduction statements, and HMRC record-keeping. We handle the complexity so you don't have to."
    },
    {
      question: "What is project-based accounting?",
      answer: "Project-based accounting tracks profitability by individual job, not just overall business performance. Gold and Platinum packages include real-time job costing that shows which projects are making money and which are losing it."
    },
    {
      question: "Can I upgrade or downgrade my package?",
      answer: "Yes, you can change your package at any time. We'll prorate the difference and ensure a smooth transition. Book a free consultation to discuss which package best fits your current needs."
    },
    {
      question: "Do you offer custom packages?",
      answer: "Yes, we can create custom packages for businesses with unique requirements. Book a free consultation to discuss your specific needs and we'll design a package that works for you."
    }
  ];

  // Package definitions with outcome-focused bullets
  const packages = [
    {
      name: 'Silver',
      tagline: 'Essential construction accounting',
      description: 'Perfect for small contractors and sole traders who need CIS-compliant bookkeeping and basic project tracking.',
      color: 'silver',
      features: [
        { text: 'CIS-compliant bookkeeping with monthly returns', outcome: 'Stay compliant with HMRC, avoid penalties' },
        { text: 'Monthly project costing', outcome: 'See which jobs are profitable' },
        { text: 'VAT returns (quarterly)', outcome: 'Meet MTD requirements, reclaim VAT on materials' },
        { text: 'Basic cash flow tracking', outcome: 'Know when money is coming in and going out' },
        { text: 'Email and phone support', outcome: 'Get answers when you need them' },
        { text: 'Cloud accounting software setup (Xero/QuickBooks)', outcome: 'Access your accounts 24/7 from anywhere' }
      ],
      notIncluded: [
        'Real-time project profitability',
        'Cash flow forecasting',
        'HMRC audit support',
        'Dedicated account manager'
      ]
    },
    {
      name: 'Gold',
      tagline: 'Complete construction accounting',
      description: 'Ideal for growing contractors and developers who need real-time project profitability and cash flow forecasting.',
      color: 'gold',
      highlighted: true,
      features: [
        { text: 'Everything in Silver', outcome: 'All essential construction accounting services' },
        { text: 'Real-time project profitability tracking', outcome: 'See which jobs are making money and which are losing it' },
        { text: 'Cash flow forecasting', outcome: 'Predict gaps before they become crises' },
        { text: 'Retention management', outcome: 'Track retentions, ensure you\'re paid what you\'re owed' },
        { text: 'HMRC audit support', outcome: 'We prepare your records and handle enquiries' },
        { text: 'VAT reverse charge expertise', outcome: 'We handle the complexity so you don\'t have to' },
        { text: 'Priority support', outcome: 'Faster response times when you need help' }
      ],
      notIncluded: [
        'Dedicated account manager',
        'Strategic business advisory',
        'Priority support (24/7)'
      ]
    },
    {
      name: 'Platinum',
      tagline: 'Premium construction accounting',
      description: 'For established developers and large contractors who need dedicated account management and strategic advisory.',
      color: 'platinum',
      features: [
        { text: 'Everything in Gold', outcome: 'All complete construction accounting services' },
        { text: 'Dedicated account manager', outcome: 'One point of contact who knows your business' },
        { text: 'Strategic business advisory', outcome: 'Growth planning, efficiency improvements, financial guidance' },
        { text: 'Priority support (24/7)', outcome: 'Get help whenever you need it' },
        { text: 'Custom reporting and dashboards', outcome: 'See exactly what matters to your business' },
        { text: 'Quarterly business reviews', outcome: 'Regular check-ins to ensure you\'re on track' },
        { text: 'Tax planning and optimization', outcome: 'Minimize tax legally, maximize profitability' }
      ],
      notIncluded: []
    }
  ];

  // Comparison table data
  const comparisonFeatures = [
    { feature: 'CIS-compliant bookkeeping', silver: true, gold: true, platinum: true },
    { feature: 'Monthly CIS returns', silver: true, gold: true, platinum: true },
    { feature: 'Monthly project costing', silver: true, gold: true, platinum: true },
    { feature: 'VAT returns', silver: true, gold: true, platinum: true },
    { feature: 'Real-time project profitability', silver: false, gold: true, platinum: true },
    { feature: 'Cash flow forecasting', silver: false, gold: true, platinum: true },
    { feature: 'Retention management', silver: false, gold: true, platinum: true },
    { feature: 'HMRC audit support', silver: false, gold: true, platinum: true },
    { feature: 'VAT reverse charge expertise', silver: false, gold: true, platinum: true },
    { feature: 'Dedicated account manager', silver: false, gold: false, platinum: true },
    { feature: 'Strategic business advisory', silver: false, gold: false, platinum: true },
    { feature: 'Priority support', silver: false, gold: true, platinum: true },
    { feature: 'Custom reporting and dashboards', silver: false, gold: false, platinum: true },
    { feature: 'Quarterly business reviews', silver: false, gold: false, platinum: true }
  ];

  return (
    <div className="fe-yellow-accent">
      {/* Schema markup for SEO */}
      <LocalBusinessSchema
        name="File Easy Accountancy"
        description="Construction accounting specialists for UK contractors, trades, and developers. CIS-compliant bookkeeping, project-based accounting, VAT reverse charge, and HMRC compliance."
        address={{
          streetAddress: "43 Castle Avenue",
          addressLocality: "Rochester",
          addressRegion: "Kent",
          postalCode: "ME1 2DU",
          addressCountry: "GB"
        }}
        telephone="+447894447435"
        email="info@fileeasyaccountancy.co.uk"
        url="https://fileeasyaccountancy.co.uk"
      />
      <FAQPageSchema faqs={constructionFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://fileeasyaccountancy.co.uk/' },
          { name: 'Construction Packages', url: 'https://fileeasyaccountancy.co.uk/construction-packages' }
        ]}
      />

      {/* Section 1: Package Cards */}
      <section id="packages" className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Choose Your Construction Accounting Package
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                All packages include CIS-compliant bookkeeping, project-based accounting, and HMRC compliance. Choose the level of support that fits your business.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl border-2 p-8 ${
                    pkg.highlighted
                      ? 'border-cta-bg shadow-xl scale-105 bg-raised'
                      : 'border-muted bg-raised'
                  }`}
                  style={{
                    borderColor: pkg.color === 'silver' ? '#94a3b8' : pkg.color === 'gold' ? '#fbbf24' : pkg.highlighted ? undefined : '#1e3a8a'
                  }}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cta-bg text-cta-text px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-primary mb-2">{pkg.name}</h3>
                    <p className="text-sm font-semibold text-secondary mb-2">{pkg.tagline}</p>
                    <p className="text-secondary text-sm mb-4">{pkg.description}</p>
                    <Link
                      href={QUOTE_URL}
                      className="inline-block text-lg font-semibold text-primary hover:underline mb-6"
                    >
                      Get Your Instant Quote →
                    </Link>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-foreground">{feature.text}</span>
                          <p className="text-xs text-secondary mt-1">{feature.outcome}</p>
                        </div>
                      </li>
                    ))}
                    {pkg.notIncluded.length > 0 && (
                      <>
                        {pkg.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3 opacity-50">
                            <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground line-through">{item}</span>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                  <Link
                    href={QUOTE_URL}
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                      pkg.highlighted
                        ? 'bg-cta-bg text-cta-text hover:bg-cta-bg/90'
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    Get Your Instant Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Compare Construction Accounting Packages
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                See exactly what's included in each package. All packages include CIS compliance and project-based accounting.
              </p>
            </div>
            <div className="bg-raised rounded-lg overflow-hidden border border-muted">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50 border-b border-muted">
                      <th className="text-left p-4 font-semibold text-primary">Feature</th>
                      <th className="text-center p-4 font-semibold text-primary">Silver</th>
                      <th className="text-center p-4 font-semibold text-primary bg-cta-bg/10">Gold</th>
                      <th className="text-center p-4 font-semibold text-primary">Platinum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((item, index) => (
                      <tr key={index} className="border-b border-muted hover:bg-muted/30 transition-colors">
                        <td className="p-4 text-sm text-foreground">{item.feature}</td>
                        <td className="p-4 text-center">
                          {item.silver ? (
                            <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center bg-cta-bg/5">
                          {item.gold ? (
                            <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {item.platinum ? (
                            <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Our Packages */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Our Construction Accounting Packages?
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                Construction accounting expertise—we understand your world, not just general accounting.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Construction-Specific</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  All packages are designed for construction businesses. We understand CIS, retentions, project margins, and cash flow.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">CIS-Compliant</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Every package includes CIS-compliant bookkeeping, monthly returns, and HMRC record-keeping. No compliance headaches.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Project-Based</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Track profitability by job, not just overall business. See which projects are making money and which are losing it.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Transparent Pricing</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  No surprises. Get your instant quote tailored to your business needs. Transparent, fixed-fee pricing with no hidden costs.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Cloud-First</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  We use Xero, QuickBooks, and modern tools. Access your accounts 24/7 from anywhere.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">No Jargon</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  We speak your language. No accounting jargon, just clear communication that helps you understand your numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                Common questions about our construction accounting packages.
              </p>
            </div>
            <div className="space-y-6">
              {constructionFAQs.map((faq, index) => (
                <div key={index} className="bg-raised p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Book a Call CTA with Booking Widget */}
      <section id="book-call" className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Book a free 30-minute construction accounting consultation. We'll discuss your needs, answer your questions, and help you choose the right package for your business.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Free Consultation</h3>
                      <p className="text-white/80 text-sm">No obligation, just expert advice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Package Recommendation</h3>
                      <p className="text-white/80 text-sm">We'll recommend the right package for your business</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Clear Next Steps</h3>
                      <p className="text-white/80 text-sm">We'll outline exactly how we can help your business</p>
                    </div>
                  </div>
                </div>
                <Link
                  href={QUOTE_URL}
                  className="bg-cta-bg text-cta-text px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cta-bg/90 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Book Your Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className=" /10 rounded-lg p-6 backdrop-blur-sm" style={{ backgroundColor: '#F8F8F5' }}>
                <p className="text-muted-foreground text-center">
                  Start your quote to get a personalized consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Related Links */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Learn More About Construction Accounting
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/resources"
                className="text-primary hover:underline font-semibold inline-flex items-center space-x-2"
              >
                <span>Construction Accounting Resources</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                href="/about"
                className="text-primary hover:underline font-semibold inline-flex items-center space-x-2"
              >
                <span>About Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                href="/contact"
                className="text-primary hover:underline font-semibold inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Footer - Already exists in layout.tsx */}
      {/* Section 9: SEO & Metadata - Already handled above */}
    </div>
  );
}

