import Link from 'next/link';

interface ArticleCTAProps {
  variant?: 'primary' | 'secondary';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  calendlyHref?: string;
}

export default function ArticleCTA({
  variant = 'primary',
  title = 'Need help from a real accountant?',
  description = 'Book a free 30-min call with File Easy — fixed fees, plain English, Kent-based team.',
  buttonText = 'Schedule a Call',
  buttonHref = '/quote/?source=article',
  calendlyHref = '/quote/?source=article',
}: ArticleCTAProps) {
  return (
    <section className={`cta cta--${variant}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors"
          href={buttonHref}
        >
          Get a Free Consultation
        </Link>
        <Link
          className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-md font-semibold transition-colors"
          href={calendlyHref}
        >
          Book My Free Call
        </Link>
      </div>
      <p className="cta__meta">Fixed fees • HMRC compliant • Based in Kent & Dubai</p>
    </section>
  );
}

