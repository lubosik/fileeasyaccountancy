import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { promises as fs } from 'fs';
import path from 'path';

import {
  getProgrammaticPageData,
  getAllProgrammaticSlugs,
  generateBreadcrumbs,
  generateMetadata as generateProgrammaticMetadata
} from '@/lib/programmatic';
import manifest from '@/lib/services.manifest.json';

import PageIntro from '@/components/ui/PageIntro';
import Section from '@/components/ui/Section';
import FAQAccordion from '@/components/ui/FAQAccordion';

// Programmatic components
import TLDRSection from '@/components/programmatic/TLDRSection';
import WhatItIsSection from '@/components/programmatic/WhatItIsSection';
import ChecklistSection from '@/components/programmatic/ChecklistSection';
import PriceNote from '@/components/programmatic/PriceNote';
import LocalTrust from '@/components/programmatic/LocalTrust';
import ProgrammaticCTA from '@/components/programmatic/ProgrammaticCTA';

import { FAQPageSchema, BreadcrumbSchema } from '@/lib/schema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const programmaticSlugs = await getAllProgrammaticSlugs();
  const serviceSlugs = manifest.map((service) => service.slug);
  const allSlugs = [...programmaticSlugs, ...serviceSlugs];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if it's a service page
  const service = manifest.find((s) => s.slug === slug);
  if (service) {
    return {
      title: `${service.title} | File Easy Accountancy`,
      description: service.excerpt || service.description,
      alternates: {
        canonical: `https://fileeasyaccountancy.co.uk/resources/${slug}`,
      },
      openGraph: {
        title: `${service.title} | File Easy Accountancy`,
        description: service.excerpt || service.description,
        url: `https://fileeasyaccountancy.co.uk/resources/${slug}`,
        type: 'article',
      },
    };
  }
  
  // Check if it's a programmatic page
  const data = await getProgrammaticPageData(slug);
  if (!data) {
    return {
      title: 'Page Not Found',
      description: 'The requested resource could not be found.',
    };
  }
  return generateProgrammaticMetadata(data);
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  
  // Check if it's a service page
  const service = manifest.find((s) => s.slug === slug);
  if (service) {
    // For service pages, we'll render them at /resources/{slug}
    // by importing the service page component
    // Since we're using static export, we need to handle this differently
    // For now, we'll create a client-side redirect
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
          <script
            dangerouslySetInnerHTML={{
              __html: `window.location.replace("${service.url}");`,
            }}
          />
          <p>Redirecting to service page...</p>
        </div>
      </>
    );
  }
  
  // Check if it's a programmatic page
  const data = await getProgrammaticPageData(slug);
  if (!data) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs(data);
  const breadcrumbItems = breadcrumbs.map(crumb => ({
    label: crumb.name,
    href: crumb.href
  }));

  return (
    <>
      {/* Schema markup */}
      <FAQPageSchema faqs={data.faq.map(faq => ({ question: faq.q, answer: faq.a }))} />
      <BreadcrumbSchema
        items={breadcrumbItems.map(item => ({
          name: item.label,
          url: `https://fileeasyaccountancy.co.uk${item.href}`
        }))}
      />

      {/* Back navigation */}
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

      {/* Page header */}
      <PageIntro
        title={data.title}
        description={`${data.solution} ${data.price_note}.`}
        breadcrumbs={breadcrumbItems}
        badge={{
          text: `${data.city}, ${data.county}`,
          variant: 'info'
        }}
        background="gradient"
      />

      <div className="container mx-auto px-4">
        {/* TL;DR Section */}
        <TLDRSection points={data.tldr} className="mb-8" />

        {/* What it is / Who it's for */}
        <WhatItIsSection
          data={data.what_it_is}
          audience={data.audience}
          className="mb-8"
        />

        {/* Step-by-step checklist */}
        <ChecklistSection
          items={data.checklist}
          className="mb-8"
        />

        {/* Pricing & Timeframes */}
        <PriceNote
          data={data.pricing_timeframes}
          priceNote={data.price_note}
          className="mb-8"
        />

        {/* Local proof */}
        <LocalTrust
          data={data.local_proof}
          city={data.city}
          county={data.county}
          className="mb-8"
        />

        {/* Mid-page CTA */}
        <Section padding="lg" background="primary" className="text-primary-foreground mb-8">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Personal Construction Accounting Advice?
              </h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                These guides provide general information. For advice specific to your construction business,
                book a free consultation with our construction accounting specialists.
              </p>
              <Link
                href="/quote/?source=resource-article"
                className=" text-primary hover:opacity-90 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2" style={{ backgroundColor: '#F8F8F5' }}
              >
                <span>Book Free Construction Accounting Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section padding="lg">
          <FAQAccordion
            title={`${data.title.replace(' (2025 Guide)', '')} - Frequently Asked Questions`}
            subtitle={`Common questions about ${data.primary_kw.toLowerCase()} in ${data.county}`}
            faqs={data.faq.map(faq => ({ question: faq.q, answer: faq.a }))}
            generateJsonLd={false} // Already generated above
          />
        </Section>

        {/* Internal links */}
        <Section padding="sm" background="muted">
          <div>
            <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-4">
              {data.internal_links.map((link, index) => (
                <Link
                  key={index}
                  href={link}
                  className="inline-flex items-center text-primary hover:text-primary/80 text-sm underline hover:no-underline transition-colors"
                >
                  {getLinkTitle(link)}
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Final CTA */}
      <ProgrammaticCTA
        ctaText={data.cta_text}
        primaryKeyword={data.primary_kw}
        city={data.city}
        county={data.county}
      />

      {/* Last updated */}
      <Section padding="sm" className="bg-muted/20">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground text-center">
            Last updated: {new Date(data.last_updated).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </Section>
    </>
  );
}

// Helper function to generate human-readable link titles
function getLinkTitle(href: string): string {
  const segments = href.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  // Convert kebab-case to title case
  return lastSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}