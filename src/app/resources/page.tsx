import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

import { getAllProgrammaticPages } from '@/lib/programmatic';
import manifest from '@/lib/services.manifest.json';
import PageIntro from '@/components/ui/PageIntro';
import Section from '@/components/ui/Section';
import ResourceFiltersClient from '@/components/resources/ResourceFiltersClient';

export const metadata: Metadata = {
  title: 'Free Resources for Construction Businesses | File Easy Accountancy',
  description: 'Free construction accounting resources for UK contractors, trades, and developers. CIS compliance, VAT reverse charge, project accounting, cash flow management, and more.',
  alternates: {
    canonical: '/resources',
  },
};

export default async function ResourcesPage() {
  const programmaticPages = await getAllProgrammaticPages();
  
  // Convert service manifest to resource format
  const serviceResources = manifest.map((service) => ({
    slug: service.slug,
    title: service.title,
    description: service.description,
    excerpt: service.excerpt,
    category: service.category,
    updated: service.updated,
    url: `/resources/${service.slug}`,
    isResource: true,
    section: 'Resources',
  }));

  // Combine programmatic pages and service resources
  const allResources = [
    ...programmaticPages.map((page) => ({
      slug: page.slug,
      title: page.title,
      description: page.solution,
      excerpt: page.solution,
      category: 'guide',
      updated: page.last_updated,
      url: `/resources/${page.slug}`,
      isResource: true,
      section: 'Resources',
      city: page.city,
      county: page.county,
      audience: page.audience,
      price_note: page.price_note,
    })),
    ...serviceResources,
  ];

  // Map existing categories to construction-focused categories
  const mapToConstructionCategory = (category: string, title: string, description: string): string => {
    const lowerTitle = title.toLowerCase();
    const lowerDesc = (description || '').toLowerCase();
    const combined = `${lowerTitle} ${lowerDesc}`;

    // Payroll/CIS
    if (category === 'payroll' || combined.includes('cis') || combined.includes('construction industry scheme') || 
        combined.includes('payroll') || combined.includes('subcontractor')) {
      return 'payroll-cis';
    }
    
    // VAT
    if (category === 'vat' || combined.includes('vat') || combined.includes('value added tax') || 
        combined.includes('reverse charge')) {
      return 'vat';
    }
    
    // Tax Returns
    if (category === 'tax' || combined.includes('tax return') || combined.includes('self assessment') || 
        combined.includes('corporation tax') || combined.includes('income tax')) {
      return 'tax-returns';
    }
    
    // Bookkeeping
    if (category === 'bookkeeping' || combined.includes('bookkeeping') || combined.includes('bookkeeping') || 
        combined.includes('reconciliation') || combined.includes('accounting')) {
      return 'bookkeeping';
    }
    
    // Dubai/International
    if (combined.includes('dubai') || combined.includes('uae') || combined.includes('international') || 
        combined.includes('dual-country') || combined.includes('cross-border')) {
      return 'dubai-international';
    }
    
    // Strategy
    if (category === 'advisory' || combined.includes('strategy') || combined.includes('planning') || 
        combined.includes('advisory') || combined.includes('consulting') || combined.includes('growth')) {
      return 'strategy';
    }
    
    // Default to Bookkeeping for core services
    if (category === 'core') {
      return 'bookkeeping';
    }
    
    // Guide category stays as guide
    if (category === 'guide') {
      return 'guide';
    }
    
    // Default fallback
    return 'bookkeeping';
  };

  // Map resources to construction categories
  const mappedResources = allResources.map((resource) => ({
    ...resource,
    constructionCategory: mapToConstructionCategory(
      resource.category,
      resource.title,
      resource.description || resource.excerpt || ''
    )
  }));

  // Construction-focused category filter options
  const constructionCategories = [
    'all',
    'bookkeeping',
    'vat',
    'payroll-cis',
    'tax-returns',
    'strategy',
    'dubai-international',
    'guide'
  ];

  const categoryLabels: Record<string, string> = {
    'all': 'All Resources',
    'bookkeeping': 'Bookkeeping',
    'vat': 'VAT',
    'payroll-cis': 'Payroll & CIS',
    'tax-returns': 'Tax Returns',
    'strategy': 'Strategy',
    'dubai-international': 'Dubai & International',
    'guide': 'Guides'
  };

  const categoryCounts = constructionCategories.reduce((acc, cat) => {
    if (cat === 'all') {
      acc[cat] = mappedResources.length;
    } else {
      acc[cat] = mappedResources.filter((r) => r.constructionCategory === cat).length;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      <PageIntro
        title="Free Resources for Construction Businesses"
        subtitle="Expert construction accounting guides"
        description={`Free construction accounting resources covering CIS compliance, VAT reverse charge, project accounting, cash flow management, retentions, and more. ${allResources.length} resources written by qualified accountants for contractors, trades, and developers across the UK and Dubai.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' }
        ]}
        background="gradient"
      />

      <Section padding="xl">
        <div className="container mx-auto px-4">
          <ResourceFiltersClient 
            categories={constructionCategories}
            categoryLabels={categoryLabels}
            categoryCounts={categoryCounts}
            resources={mappedResources}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg" className="text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personal Construction Accounting Advice?</h2>
          <p className="text-xl mb-6 text-primary-foreground/90">
            These free resources provide general information about construction accounting. For advice specific to your construction business,
            book a free consultation with our construction accounting specialists.
          </p>
          <Link
            href="/quote/?source=resources"
            className=" text-primary hover:opacity-90 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center space-x-2" style={{ backgroundColor: '#F8F8F5' }}
          >
            <span>Book Free Construction Accounting Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
}