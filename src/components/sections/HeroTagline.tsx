import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import TrustBar from '@/components/ui/TrustBar';

interface HeroTaglineProps {
  className?: string;
}

export default function HeroTagline({ className = "" }: HeroTaglineProps) {
  return (
    <section className={`py-12 md:py-16 lg:py-20 fe-yellow-accent ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Accounting, Tax & Payroll for Kent SMEs and Freelancers
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
            We handle the numbers—so you can focus on growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Primary CTA - Quote Flow */}
            <Link
              href="/quote/?source=hero"
              className="cta-button inline-flex items-center justify-center space-x-2 min-h-[44px]"
              aria-label="Schedule a Free 20-min Consult"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'fe_quote_start_cta', {
                    source: 'hero',
                    event_category: 'Quote',
                    event_label: 'Schedule a Free 20-min Consult'
                  });
                }
              }}
            >
              <span>Schedule a Free 20-min Consult</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Secondary CTA - WhatsApp */}
            <a
              href="https://wa.me/447894447435"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-inverse font-medium rounded-lg transition-colors duration-200 min-h-[44px] focus:outline-none focus:ring-4 focus:ring-brand-secondary focus:ring-opacity-25"
              aria-label="WhatsApp us - Opens in new tab"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp us</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="text-sm text-secondary mb-8">
            <p>✓ Free consultation ✓ No hidden fees ✓ Kent-focused service</p>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <TrustBar title="Trusted by businesses using:" />
    </section>
  );
}