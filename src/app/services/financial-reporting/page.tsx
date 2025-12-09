import { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, TrendingUp, PieChart, Target, CheckCircle, ArrowRight } from 'lucide-react';

import PageIntro from '@/components/ui/PageIntro';
import Section from '@/components/ui/Section';
import ContactStrip from '@/components/ui/ContactStrip';

export const metadata: Metadata = {
  title: 'Financial Reporting & Management Accounts | Kent | File Easy Accountancy',
  description: 'Professional financial reporting services. Management accounts, KPI dashboards, cash flow forecasts, and business performance analysis for Kent SMEs.',
  keywords: 'financial reporting Kent, management accounts Rochester, KPI dashboards, cash flow forecasting, business performance analysis'
};

const reportingServices = [
  'Monthly management accounts preparation',
  'Cash flow forecasting and analysis',
  'KPI dashboards and performance metrics',
  'Budget vs actual variance reporting',
  'Profit and loss trend analysis',
  'Balance sheet review and commentary',
  'Financial ratio analysis and benchmarking',
  'Board reporting and investor presentations'
];

const benefits = [
  {
    icon: BarChart3,
    title: 'Clear Insights',
    description: 'Understand your business performance with visual reports'
  },
  {
    icon: TrendingUp,
    title: 'Spot Trends',
    description: 'Identify opportunities and threats before they impact cash'
  },
  {
    icon: PieChart,
    title: 'Cost Analysis',
    description: 'See exactly where your money goes and optimise spending'
  },
  {
    icon: Target,
    title: 'Hit Targets',
    description: 'Track progress against budgets and strategic goals'
  }
];

const reportTypes = [
  {
    title: 'Management Accounts',
    description: 'Monthly P&L, balance sheet, and cash flow with commentary',
    features: ['Variance analysis', 'Key ratios', 'Action points'],
    price: 'From £200/month'
  },
  {
    title: 'KPI Dashboard',
    description: 'Real-time business metrics and performance indicators',
    features: ['Visual charts', 'Trend analysis', 'Alerts & notifications'],
    price: 'From £150/month'
  },
  {
    title: 'Cash Flow Forecast',
    description: '13-week rolling cash flow projections',
    features: ['Scenario planning', 'Working capital analysis', 'Funding requirements'],
    price: 'From £300/quarter'
  }
];

const relevantResources = [
  {
    title: 'Limited Company vs Sole Trader',
    href: '/resources/limited-company-vs-sole-trader-kent',
    description: 'Financial reporting requirements by business structure'
  },
  {
    title: 'VAT Registration Guide',
    href: '/resources/vat-registration-rochester',
    description: 'Cash flow impact of VAT registration'
  }
];

export default function FinancialReportingPage() {
  return (
    <>
      <PageIntro
        title="Financial Reporting & Analysis"
        subtitle="Management accounts & KPI dashboards"
        description="Transform your financial data into actionable insights. Monthly management accounts, cash flow forecasts, and KPI dashboards to drive better business decisions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Financial Reporting', href: '/services/financial-reporting' }
        ]}
        background="gradient"
      />

      <Section padding="xl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="mb-12 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Don&apos;t wait until year-end to understand your business performance. Our financial reporting services provide the insights you need to make informed decisions and drive growth.
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

            {/* Report Types */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center">Reporting Solutions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {reportTypes.map((report, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary/5 to-blue-50/50 rounded-xl p-6 border border-primary/20">
                    <h3 className="text-xl font-bold mb-3 text-primary">{report.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                    <ul className="space-y-2 mb-4">
                      {report.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg font-semibold text-primary">{report.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gradient-to-br from-primary/5 to-green-50/50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Comprehensive Financial Analysis</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {reportingServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing CTA */}
            <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Make Data-Driven Decisions</h2>
              <p className="mb-6 text-primary-foreground/90">
                Get the financial insights you need to grow your business confidently. Monthly reports from £200.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-primary hover:opacity-90 px-8 py-3 rounded-md font-semibold transition-colors" style={{ backgroundColor: '#F8F8F5' }}
                >
                  Get Reporting Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="tel:+447894447435"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover: hover:text-primary px-8 py-3 rounded-md font-semibold transition-colors" style={{ backgroundColor: '#F8F8F5' }}
                >
                  Discuss Requirements
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

      <ContactStrip title="Ready for better financial insights?" />
    </>
  );
}