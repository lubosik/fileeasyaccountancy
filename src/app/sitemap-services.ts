import { MetadataRoute } from 'next';
import manifest from '@/lib/services.manifest.json';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fileeasyaccountancy.co.uk';
  const currentDate = new Date().toISOString();

  // All service pages from manifest
  const manifestServices = manifest.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: service.updated || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Construction services (from _map.csv)
  const constructionServices = [
    {
      url: `${baseUrl}/services/construction/cis-compliance`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Add more construction services as they are created
  ];

  return [...manifestServices, ...constructionServices];
}

