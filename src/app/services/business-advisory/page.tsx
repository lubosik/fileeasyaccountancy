import { Metadata } from 'next';
import Link from 'next/link';
import { Lightbulb, Target, TrendingUp, Shield, CheckCircle, ArrowRight } from 'lucide-react';

import PageIntro from '@/components/ui/PageIntro';
import Section from '@/components/ui/Section';
import ContactStrip from '@/components/ui/ContactStrip';

export const metadata: Metadata = {
  title: 'Business Advisory Services | Strategic Consulting | Kent | File Easy Accountancy',
  description: 'Strategic business advisory services for Kent SMEs. Business planning, growth strategies, efficiency improvements, and financial guidance from experienced advisors.',
  keywords: 'business advisory Kent, strategic consulting Rochester, business planning, growth strategy, business efficiency, SME advisory services'
};

const advisoryServices = [
  'Strategic business planning and goal setting',
  'Business efficiency audits and improvements',
  'Cash flow management and working capital optimisation',
  'Pricing strategy and profitability analysis',
  'Business structure and tax efficiency reviews',
  'Growth planning and market expansion strategies',
  'Exit planning and business valuation',
  'Succession planning and family business advice'
];

const benefits = [
  {
    icon: Lightbulb,
    title: 'Fresh Perspectives',
    description: 'External viewpoint to identify opportunities and challenges'
  },
  {
    icon: Target,
    title: 'Strategic Clarity',
    description: 'Clear roadmaps for achieving your business objectives'
  },
  {
    icon: TrendingUp,
    title: 'Growth Focus',
    description: 'Strategies to scale sustainably and profitably'
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Identify and manage business risks before they impact you'
  }
];

const advisoryAreas = [
  {
    title: 'Business Health Check',
    description: 'Comprehensive review of operations, finances, and strategy',
    deliverables: ['Financial analysis', 'Operational review', 'Strategic recommendations', 'Action plan'],
    price: 'From £750'
  },
  {
    title: 'Growth Strategy',
    description: 'Planning for sustainable business expansion',
    deliverables: ['Market analysis', 'Growth roadmap', 'Financial projections', 'Implementation support'],
    price: 'From £1,200'
  },
  {
    title: 'Efficiency Review',
    description: 'Identify cost savings and operational improvements',
    deliverables: ['Process analysis', 'Cost review', 'Efficiency recommendations', 'ROI calculations'],
    price: 'From £900'
  }
];

const typicalClients = [
  'SMEs seeking sustainable growth strategies',
  'Businesses facing operational challenges',
  'Companies considering major changes or investments',
  'Family businesses planning succession',
  'Entrepreneurs seeking strategic guidance',
  'Businesses preparing for sale or investment'
];

const relevantResources = [
  {
    title: 'Limited Company vs Sole Trader',
    href: '/resources/limited-company-vs-sole-trader-kent',
    description: 'Business structure strategy and tax implications'
  },
  {
    title: 'VAT Registration Guide',
    href: '/resources/vat-registration-rochester',
    description: 'Strategic timing for VAT registration'
  }
];

export default function BusinessAdvisoryPage() {
  return (
    <>
      <PageIntro
        title="Strategic Business Advisory"
        subtitle="Guidance for growth and efficiency"
        description="Independent business advice to help you make better decisions, grow sustainably, and improve profitability. Strategic guidance from experienced advisors who understand Kent businesses."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Business Advisory', href: '/services/business-advisory' }
        ]}
        background="gradient"
      />

      <Section padding="xl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="mb-12 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every business faces strategic decisions that can make or break its future. Our advisory team provides the independent guidance and practical solutions you need to navigate challenges and capitalise on opportunities.
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

            {/* Advisory Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center">Advisory Packages</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {advisoryAreas.map((area, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary/5 to-blue-50/50 rounded-xl p-6 border border-primary/20">
                    <h3 className="text-xl font-bold mb-3 text-primary">{area.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                    <ul className="space-y-2 mb-4">
                      {area.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg font-semibold text-primary">{area.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who We Help */}
            <div className="bg-gradient-to-br from-green-50/50 to-primary/5 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Who We Help</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {typicalClients.map((client, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{client}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gradient-to-br from-primary/5 to-blue-50/50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Strategic Advisory Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {advisoryServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing CTA */}
            <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Ready for Strategic Guidance?</h2>
              <p className="mb-6 text-primary-foreground/90">
                Get independent advice to drive your business forward. Initial consultations from £750.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-primary hover:opacity-90 px-8 py-3 rounded-md font-semibold transition-colors" style={{ backgroundColor: '#F8F8F5' }}
                >
                  Book Advisory Consultation
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

      <ContactStrip title="Need strategic business advice?" />
    </>
  );
}