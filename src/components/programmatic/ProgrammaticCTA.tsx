import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

interface ProgrammaticCTAProps {
  ctaText: string;
  primaryKeyword: string;
  city: string;
  county: string;
  className?: string;
}

export default function ProgrammaticCTA({
  ctaText,
  primaryKeyword,
  city,
  county,
  className = ''
}: ProgrammaticCTAProps) {
  return (
    <section className={`py-12 bg-primary text-primary-foreground ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Expert Help?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Don&apos;t navigate {primaryKeyword.toLowerCase()} alone. Get professional construction accounting guidance
            from {city}&apos;s trusted construction accounting specialists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/quote/?source=programmatic"
              className=" text-primary px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2 hover:opacity-90" style={{ backgroundColor: '#F8F8F5' }}
            >
              <span>Book Free Construction Accounting Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="tel:+447894447435"
              className="border-2 border-white text-white hover: hover:text-primary px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2" style={{ backgroundColor: '#F8F8F5' }}
            >
              <Phone className="w-5 h-5" />
              <span>Call: +44 7894 447435</span>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-primary-foreground/80">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>{county}-focused service</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70">
              <strong>Alternative contact:</strong>{' '}
              <Link
                href="https://wa.me/447894447435"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                WhatsApp us
              </Link>{' '}
              or email{' '}
              <Link
                href="mailto:info@fileeasyaccountancy.co.uk"
                className="underline hover:no-underline"
              >
                info@fileeasyaccountancy.co.uk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}