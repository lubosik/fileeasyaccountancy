import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Pricing - File Easy Accountancy | Transparent Accounting Fees UK & Dubai',
  description: 'Simple, transparent pricing for accounting services across the UK and Dubai. No hidden fees. Book your free consultation for a custom quote today.',
  keywords: 'accounting fees UK, bookkeeping prices UK, tax return cost, accountant pricing, London accountant fees, Kent accountant fees, Dubai accountant pricing',
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for freelancers and sole traders',
      features: [
        { name: 'Monthly bookkeeping', included: true },
        { name: 'Bank reconciliation', included: true },
        { name: 'Quarterly reports', included: true },
        { name: 'Self Assessment support', included: true },
        { name: 'Phone & email support', included: true },
        { name: 'Advanced reporting', included: false },
        { name: 'Monthly management accounts', included: false },
        { name: 'Dedicated account manager', included: false }
      ],
      ctaText: 'Get a Custom Quote',
      ctaHref: '/quote/?source=pricing'
    },
    {
      name: 'Growing',
      description: 'Ideal for SMEs and limited companies',
      highlighted: true,
      features: [
        { name: 'All Starter features', included: true },
        { name: 'Monthly management accounts', included: true },
        { name: 'VAT returns', included: true },
        { name: 'Corporation Tax support', included: true },
        { name: 'Advanced reporting & analytics', included: true },
        { name: 'Priority support', included: true },
        { name: 'Virtual CFO services', included: false },
        { name: 'Custom integrations', included: false }
      ],
      ctaText: 'Get a Custom Quote',
      ctaHref: '/quote/?source=pricing'
    },
    {
      name: 'Advanced',
      description: 'Virtual CFO services for growth-focused businesses',
      features: [
        { name: 'All Growing features', included: true },
        { name: 'Virtual CFO services', included: true },
        { name: 'Strategic planning support', included: true },
        { name: 'Custom reporting & KPIs', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Monthly strategy calls', included: true },
        { name: 'Business growth advisory', included: true },
        { name: 'Priority implementation', included: true }
      ],
      ctaText: 'Get a Custom Quote',
      ctaHref: '/quote/?source=pricing'
    }
  ];

  const oneOffServices = [
    {
      name: 'Self Assessment',
      description: 'Personal tax return filing with optimization'
    },
    {
      name: 'Corporation Tax Return',
      description: 'Annual company tax filing and compliance'
    },
    {
      name: 'VAT Registration',
      description: 'Complete VAT registration and setup'
    },
    {
      name: 'Company Formation',
      description: 'Limited company setup with Companies House'
    }
  ];

  return (
    <div className="fe-yellow-accent min-h-screen bg-page">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto">
              No hidden fees. No surprises. Just professional accounting services
              at prices that make sense for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/quote/?source=pricing"
                className="cta-button inline-flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/447894447435"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-inverse font-medium rounded-lg transition-colors"
              >
                <span>WhatsApp for Quick Quote</span>
              </a>
            </div>

            <p className="text-sm text-secondary">
              ✓ Free consultation ✓ No setup fees ✓ Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Packages */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Monthly Packages</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto mb-6">
              Choose the plan that fits your business needs. All packages include free consultation and setup support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl border-2 p-8 ${
                  plan.highlighted
                    ? 'border-cta-bg shadow-xl scale-105 bg-raised'
                    : 'border-muted bg-raised'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-cta-bg text-cta-text px-4 py-1 font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                  <p className="text-secondary mb-6">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-0.5">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                        )}
                      </div>
                      <span
                        className={
                          feature.included
                            ? 'text-primary'
                            : 'text-secondary'
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-cta-bg text-cta-text hover:opacity-90'
                      : 'border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-inverse'
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-secondary">
              All plans include free consultation and setup support.
            </p>
          </div>
        </div>
      </section>

      {/* One-Off Services */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">One-Off Services</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Need help with a specific task? Our one-off services are perfect for businesses
              that need occasional support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {oneOffServices.map((service, index) => (
              <div key={index} className="bg-raised rounded-lg p-6 border border-muted hover:shadow-md transition-shadow">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2">{service.name}</h3>
                  <p className="text-sm text-secondary mb-6">{service.description}</p>

                  <Link
                    href="/quote/?source=pricing"
                    className="inline-block w-full text-center py-2 px-4 border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-inverse font-medium rounded transition-colors text-sm"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
              Pricing FAQs
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  How do you price your services?
                </h3>
                <p className="text-secondary mb-6">
                  We provide custom quotes based on your specific business needs and requirements.
                  Book a free consultation to discuss your situation and get a personalized quote.
                </p>

                <h3 className="text-lg font-semibold text-primary mb-3">
                  Are there any setup fees?
                </h3>
                <p className="text-secondary mb-6">
                  No setup fees. We include free consultation and account setup
                  with all our monthly packages.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Can I cancel anytime?
                </h3>
                <p className="text-secondary mb-6">
                  Yes, all our monthly packages are flexible with no long-term
                  contracts. 30 days notice required.
                </p>

                <h3 className="text-lg font-semibold text-primary mb-3">
                  Do you offer payment plans?
                </h3>
                <p className="text-secondary mb-6">
                  Yes, we can arrange quarterly or annual payment plans.
                  Contact us to discuss options that work for your cash flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-brand-primary text-inverse">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your free consultation today and see how we can help streamline
              your business finances.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote/?source=pricing"
                className="bg-cta-bg text-cta-text hover:opacity-90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/447894447435"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover: hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center" style={{ backgroundColor: '#F8F8F5' }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
