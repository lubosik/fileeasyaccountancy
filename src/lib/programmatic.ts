import { promises as fs } from 'fs';
import path from 'path';
import { ProgrammaticPageData } from '@/types/programmatic';

const PROGRAMMATIC_DATA_DIR = path.join(process.cwd(), 'data', 'programmatic');

export async function getAllProgrammaticSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(PROGRAMMATIC_DATA_DIR);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
  } catch (error) {
    console.error('Error reading programmatic data directory:', error);
    return [];
  }
}

export async function getProgrammaticPageData(slug: string): Promise<ProgrammaticPageData | null> {
  try {
    const filePath = path.join(PROGRAMMATIC_DATA_DIR, `${slug}.json`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const data: ProgrammaticPageData = JSON.parse(fileContent);

    // Validate required fields
    if (!data.slug || !data.title || !data.primary_kw) {
      throw new Error(`Invalid programmatic data for slug: ${slug}`);
    }

    return data;
  } catch (error) {
    console.error(`Error loading programmatic data for slug ${slug}:`, error);
    return null;
  }
}

export async function getAllProgrammaticPages(): Promise<ProgrammaticPageData[]> {
  const slugs = await getAllProgrammaticSlugs();
  const pages: ProgrammaticPageData[] = [];

  for (const slug of slugs) {
    const data = await getProgrammaticPageData(slug);
    if (data) {
      pages.push(data);
    }
  }

  return pages;
}

export function generateBreadcrumbs(data: ProgrammaticPageData) {
  return [
    { name: 'Home', href: '/' },
    { name: 'Resources', href: '/resources' },
    { name: data.title.replace(` (2025 Guide)`, ''), href: `/resources/${data.slug}` }
  ];
}

export function generateMetadata(data: ProgrammaticPageData) {
  const description = `${data.solution} Expert ${data.primary_kw} advice for ${data.audience} in ${data.city}, ${data.county}. ${data.price_note}.`;

  return {
    title: data.title,
    description: description.length > 160 ? description.substring(0, 157) + '...' : description,
    keywords: [data.primary_kw, ...data.secondary_kws].join(', '),
    openGraph: {
      title: data.title,
      description,
      type: 'article',
      publishedTime: data.last_updated,
      authors: ['File Easy Accountancy'],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description,
    },
    alternates: {
      canonical: `/resources/${data.slug}`,
    },
  };
}