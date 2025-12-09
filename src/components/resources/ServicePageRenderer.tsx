import { notFound } from 'next/navigation';
import manifest from '@/lib/services.manifest.json';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Section from '@/components/ui/Section';

interface ServicePageRendererProps {
  slug: string;
}

export default function ServicePageRenderer({ slug }: ServicePageRendererProps) {
  const service = manifest.find((s) => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  // Import the service page component dynamically
  // We'll need to create a mapping of slugs to component imports
  // For now, redirect to the service page URL
  // This will be handled by the redirects in next.config.ts or HTML redirects
  
  return (
    <>
      <Section padding="sm" className="bg-muted/30">
        <div className="container mx-auto px-4">
          <Link
            href="/resources"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to Resources</span>
          </Link>
        </div>
      </Section>
      <div className="container mx-auto px-4 py-8">
        <p>Loading service page...</p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = "${service.url}";`,
          }}
        />
      </div>
    </>
  );
}

