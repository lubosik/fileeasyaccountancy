import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  features?: string[];
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Get Free Quote',
  ctaHref = '/contact',
  features = [],
  className = ''
}: HeroProps) {
  return (
    <section className={`bg-gradient-to-b from-primary/5 to-background py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {subtitle}
          </p>

          {description && (
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {features.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={ctaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+447894447435"
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Call: +44 7894 447435
            </Link>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>Free consultation • No hidden fees • Professional service</p>
          </div>
        </div>
      </div>
    </section>
  );
}