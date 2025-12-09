import { MetadataRoute } from 'next';
import { getAllProgrammaticPages } from '@/lib/programmatic';
import manifest from '@/lib/services.manifest.json';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fileeasyaccountancy.co.uk';
  const currentDate = new Date().toISOString();

  // Programmatic resource pages
  const programmaticPages = await getAllProgrammaticPages();
  const programmaticUrls = programmaticPages.map((page) => ({
    url: `${baseUrl}/resources/${page.slug}`,
    lastModified: page.last_updated || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service articles (now in Resources)
  const serviceUrls = manifest.map((service) => ({
    url: `${baseUrl}/resources/${service.slug}`,
    lastModified: service.updated || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Resources hub page
  const resourcesHub = {
    url: `${baseUrl}/resources`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  };

  return [resourcesHub, ...programmaticUrls, ...serviceUrls];
}

