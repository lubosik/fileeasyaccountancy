'use client';

import { useState } from 'react';

interface ResourceFiltersProps {
  categories: string[];
  categoryLabels?: Record<string, string>;
  categoryCounts: Record<string, number>;
  onFilterChange: (category: string) => void;
}

export default function ResourceFilters({ categories, categoryLabels, categoryCounts, onFilterChange }: ResourceFiltersProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleFilterClick = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  const getCategoryLabel = (category: string): string => {
    if (categoryLabels && categoryLabels[category]) {
      return categoryLabels[category];
    }
    return category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
  };

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleFilterClick(category)}
          className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
            activeCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-primary/10 text-primary hover:bg-primary/20'
          }`}
        >
          {getCategoryLabel(category)} ({categoryCounts[category] || 0})
        </button>
      ))}
    </div>
  );
}

