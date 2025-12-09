import { Metadata } from 'next';
import Link from 'next/link';
import manifest from '@/lib/services.manifest.json';
import { FileText } from 'lucide-react';
import PageIntro from '@/components/ui/PageIntro';
import Section from '@/components/ui/Section';
import ContactStrip from '@/components/ui/ContactStrip';

interface CategoryPageProps {
  category: string;
  categoryDisplayName: string;
  description: string;
}

function CategoryPageContent({ category, categoryDisplayName, description }: CategoryPageProps) {
  const services = manifest.filter((service) => service.category === category);

  return (
    <>
      <PageIntro
        title={`${categoryDisplayName} Services`}
        subtitle={`Expert ${categoryDisplayName.toLowerCase()} services for Kent businesses`}
        description={description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: categoryDisplayName, href: `/services/${category}` },
        ]}
        background="gradient"
      />

      <Section padding="xl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <p className="text-lg text-muted-foreground">
                Browse all {services.length} {categoryDisplayName.toLowerCase()} services we offer. Each service includes detailed information, pricing, and FAQs.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
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

            <div className="mt-12 bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Service?</h2>
              <p className="text-muted-foreground mb-6">
                Book a free 30-minute consultation to discuss your {categoryDisplayName.toLowerCase()} needs.
              </p>
              <Link
                href="/quote/?source=category"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <ContactStrip title={`Ready to get started with ${categoryDisplayName.toLowerCase()} services?`} />
    </>
  );
}

export default CategoryPageContent;

