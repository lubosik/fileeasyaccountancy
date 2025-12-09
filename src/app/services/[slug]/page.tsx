import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import manifest from '@/lib/services.manifest.json';
import RedirectComponent from '@/components/ServiceRedirect';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return manifest.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = manifest.find((item) => item.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | File Easy Accountancy',
    };
  }
  
  return {
    title: `${service.title} | File Easy Accountancy`,
    description: service.excerpt,
    alternates: {
      canonical: `https://fileeasyaccountancy.co.uk/services/${slug}/`,
    },
    openGraph: {
      title: `${service.title} | File Easy Accountancy`,
      description: service.excerpt,
      url: `https://fileeasyaccountancy.co.uk/services/${slug}/`,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = manifest.find((item) => item.slug === slug);
  
  if (!service) {
    notFound();
  }
  
  return <RedirectComponent url={service.url} title={service.title} />;
}
