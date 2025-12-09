import Link from 'next/link';
import { Check, X } from 'lucide-react';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

interface PricingTableProps {
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
  className?: string;
}

export default function PricingTable({
  title,
  subtitle,
  plans,
  className = ''
}: PricingTableProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border-2 p-8 ${
        plan.highlighted
         ? 'border-primary shadow-lg scale-105'
         : 'border-border'
       } `} style={{ backgroundColor: '#F8F8F5' }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-0.5">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <span
                      className={
                        feature.included
                          ? 'text-foreground'
                          : 'text-muted-foreground line-through'
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref || '/contact'}
                className={`block w-full text-center py-3 px-6 rounded-md font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
                }`}
              >
                {plan.ctaText || 'Get Started'}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            All plans include free consultation and setup support
          </p>
        </div>
      </div>
    </section>
  );
}