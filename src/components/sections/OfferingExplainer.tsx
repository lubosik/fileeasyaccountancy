import { CheckCircle, Calendar, Settings, TrendingUp } from 'lucide-react';

interface OfferingExplainerProps {
  className?: string;
}

export default function OfferingExplainer({ className = "" }: OfferingExplainerProps) {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Simple, fast, all online",
      description: "Cloud-based accounting systems with real-time access to your financial data anywhere, anytime."
    },
    {
      icon: CheckCircle,
      title: "Sorted by an accredited accountant",
      description: "Professional service from qualified accountants who understand UK compliance and business needs."
    },
    {
      icon: CheckCircle,
      title: "Filed in as little as 48 hours",
      description: "Quick turnaround on tax returns, VAT submissions, and other compliance requirements."
    }
  ];

  const processSteps = [
    {
      number: 1,
      icon: Calendar,
      title: "Book",
      description: "Schedule your free 20-minute consultation to discuss your accounting needs."
    },
    {
      number: 2,
      icon: Settings,
      title: "Set-up/Clean-up",
      description: "We'll configure your systems and organize any existing accounting records."
    },
    {
      number: 3,
      icon: TrendingUp,
      title: "Monthly reporting & advice",
      description: "Receive regular financial reports and proactive business guidance."
    }
  ];

  return (
    <section className={`py-12 md:py-16 lg:py-20 bg-surface ${className}`}>
      <div className="container mx-auto px-4">
        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Why Choose File Easy Accountancy?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            How It Works
          </h3>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-border-muted"></div>

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Step number badge */}
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto relative z-10">
                      <Icon className="w-8 h-8 text-inverse" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-cta-bg text-cta-text rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-primary mb-3">
                    {step.title}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}