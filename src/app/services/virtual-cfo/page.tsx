import { Metadata } from 'next';
import Link from 'next/link';
import { Target, TrendingUp, DollarSign, Users, CheckCircle, ArrowRight } from 'lucide-react';

import PageIntro from '@/components/ui/PageIntro';
import Section from '@/components/ui/Section';
import ContactStrip from '@/components/ui/ContactStrip';

export const metadata: Metadata = {
  title: 'Virtual CFO Services | Strategic Finance Director | Kent | File Easy Accountancy',
  description: 'Part-time CFO services for growing Kent businesses. Strategic planning, fundraising support, financial modelling, and board-level financial guidance.',
  keywords: 'virtual CFO Kent, part-time finance director, strategic financial planning, fundraising support, financial modelling Rochester'
};

const cfoServices = [
  'Strategic financial planning and budgeting',
  'Business model development and validation',
  'Fundraising strategy and investor presentations',
  'Financial modelling and scenario planning',
  'Board reporting and stakeholder communication',
  'M&A due diligence and transaction support',
  'Risk management and internal controls',
  'Performance improvement and cost optimisation'
];

const benefits = [
  {
    icon: Target,
    title: 'Strategic Focus',
    description: 'Long-term planning aligned with business objectives'
  },
  {
    icon: TrendingUp,
    title: 'Growth Enablement',
    description: 'Scale efficiently with proper financial frameworks'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'CFO-level expertise at a fraction of full-time cost'
  },
  {
    icon: Users,
    title: 'Board Ready',
    description: 'Professional reporting for investors and stakeholders'
  }
];

const cfoPackages = [
  {
    title: 'Strategic Advisor',
    description: 'Monthly strategic reviews and planning sessions',
    features: ['4 hours monthly', 'Board reports', 'Strategic planning', 'Email support'],
    price: 'From £800/month'
  },
  {
    title: 'Growth Partner',
    description: 'Active involvement in growth initiatives',
    features: ['8 hours monthly', 'Fundraising support', 'Financial modelling', 'Investor relations'],
    price: 'From £1,500/month'
  },
  {
    title: 'Finance Director',
    description: 'Comprehensive CFO services and leadership',
    features: ['16 hours monthly', 'Team management', 'M&A support', 'Full strategic input'],
    price: 'From £2,800/month'
  }
];

const suitableFor = [
  'Growing businesses (£500k+ turnover)',
  'Companies seeking investment or funding',
  'Businesses considering acquisitions or exits',
  'Scale-ups needing strategic financial guidance',
  'Companies with complex financial structures',
  'Boards requiring independent financial expertise'
];

const relevantResources = [
  {
    title: 'Limited Company vs Sole Trader',
    href: '/resources/limited-company-vs-sole-trader-kent',
    description: 'Choosing structures for growth and investment'
  },
  {
    title: 'VAT Registration Guide',
    href: '/resources/vat-registration-rochester',
    description: 'Tax considerations for growing businesses'
  }
];

export default function VirtualCFOPage() {
  return (
    <>
      <PageIntro
        title="Virtual CFO Services"
        subtitle="Strategic finance leadership for growing businesses"
        description="Get CFO-level financial expertise without the full-time cost. Strategic planning, fundraising support, and board-level reporting for Kent's ambitious businesses."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Virtual CFO', href: '/services/virtual-cfo' }
        ]}
        background="gradient"
      />

      <Section padding="xl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="mb-12 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every growing business needs strategic financial leadership. Our Virtual CFO services provide the expertise of a senior finance director on a part-time basis, helping you make better decisions and achieve your growth ambitions.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className=" border rounded-lg p-6 text-center hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F8F8F5' }}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Service Packages */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center">Virtual CFO Packages</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {cfoPackages.map((pkg, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary/5 to-blue-50/50 rounded-xl p-6 border border-primary/20">
                    <h3 className="text-xl font-bold mb-3 text-primary">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <ul className="space-y-2 mb-4">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg font-semibold text-primary">{pkg.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who It's For */}
            <div className="bg-gradient-to-br from-green-50/50 to-primary/5 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Is Virtual CFO Right for You?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {suitableFor.map((criteria, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gradient-to-br from-primary/5 to-blue-50/50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Strategic CFO Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cfoServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing CTA */}
            <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Ready for Strategic Financial Leadership?</h2>
              <p className="mb-6 text-primary-foreground/90">
                Get CFO-level expertise from £800/month. Book a consultation to discuss your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-primary hover:opacity-90 px-8 py-3 rounded-md font-semibold transition-colors" style={{ backgroundColor: '#F8F8F5' }}
                >
                  Book CFO Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="tel:+447894447435"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover: hover:text-primary px-8 py-3 rounded-md font-semibold transition-colors" style={{ backgroundColor: '#F8F8F5' }}
                >
                  Call: +44 7894 447435
                </Link>
              </div>
            </div>

            {/* Related Resources */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relevantResources.map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.href}
                    className="group border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all" style={{ backgroundColor: '#F8F8F5' }}
                  >
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{resource.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ContactStrip title="Ready to scale with strategic CFO support?" />
    </>
  );
}