import { Metadata } from 'next';
import Link from 'next/link';
import manifest from '@/lib/services.manifest.json';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Services | File Easy Accountancy',
  description: 'Browse all 86 accounting services offered by File Easy Accountancy. Bookkeeping, tax returns, VAT, payroll, and advisory services for Kent businesses.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/',
  },
};

interface ServiceItem {
  slug: string;
  title: string;
  category: string;
  url: string;
  description: string;
  excerpt: string;
}

export default function ServicesPage() {
  // Group services by category
  const servicesByCategory = manifest.reduce((acc, service) => {
    const category = service.category.charAt(0).toUpperCase() + service.category.slice(1);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, ServiceItem[]>);

  const categoryOrder = ['Bookkeeping', 'Tax', 'Core', 'VAT', 'Advisory', 'Payroll'];
  const sortedCategories = categoryOrder.filter(cat => servicesByCategory[cat]);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">All Services</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Browse all {manifest.length} accounting and tax services we offer. Each service includes detailed information, pricing, and FAQs.
          </p>

          {/* Category Tabs/Filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            <a
              href="#all"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              All ({manifest.length})
            </a>
            {sortedCategories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase()}`}
                className="px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
              >
                {category} ({servicesByCategory[category].length})
              </a>
            ))}
          </div>

          {/* Services by Category */}
          {sortedCategories.map((category) => (
            <section key={category} id={category.toLowerCase()} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-border">
                {category} ({servicesByCategory[category].length})
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {servicesByCategory[category].map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all block" style={{ backgroundColor: '#F8F8F5' }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-primary text-sm font-medium mt-4">
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* Summary */}
          <div className="mt-12 bg-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Service?</h2>
            <p className="text-muted-foreground mb-6">
              Book a free 30-minute consultation to discuss your accounting needs.
            </p>
            <Link
              href="/quote/?source=services"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
