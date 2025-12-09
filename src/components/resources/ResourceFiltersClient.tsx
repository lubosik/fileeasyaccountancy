'use client';

import { useState } from 'react';
import ResourceFilters from './ResourceFilters';
import ResourceGrid from './ResourceGrid';

interface Resource {
  slug: string;
  title: string;
  description?: string;
  excerpt?: string;
  category: string;
  updated: string;
  url: string;
  city?: string;
  county?: string;
  audience?: string;
  price_note?: string;
}

interface ResourceFiltersClientProps {
  categories: string[];
  categoryLabels?: Record<string, string>;
  categoryCounts: Record<string, number>;
  resources: Resource[];
}

export default function ResourceFiltersClient({ categories, categoryLabels, categoryCounts, resources }: ResourceFiltersClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <ResourceFilters
        categories={categories}
        categoryLabels={categoryLabels}
        categoryCounts={categoryCounts}
        onFilterChange={setActiveCategory}
      />
      <ResourceGrid resources={resources} activeCategory={activeCategory} />
    </>
  );
}

