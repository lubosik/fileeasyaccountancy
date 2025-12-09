'use client';

import Link from 'next/link';
import { Calendar, MapPin, FileText, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface Resource {
  slug: string;
  title: string;
  description?: string;
  excerpt?: string;
  category: string;
  constructionCategory?: string;
  updated: string;
  url: string;
  city?: string;
  county?: string;
  audience?: string;
  price_note?: string;
}

interface ResourceGridProps {
  resources: Resource[];
  activeCategory: string;
}

export default function ResourceGrid({ resources, activeCategory }: ResourceGridProps) {
  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter((r) => (r.constructionCategory || r.category) === activeCategory);

  if (filteredResources.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          No resources found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredResources.map((resource) => (
        <Link
          key={resource.slug}
          href={resource.url}
          className="group block border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col" style={{ backgroundColor: '#F8F8F5' }}
        >
          <div className="flex items-start justify-between mb-4">
            <Badge variant="secondary" className="text-xs">
              {resource.city && resource.county ? (
                <>
                  <MapPin className="w-3 h-3 mr-1" />
                  {resource.city}, {resource.county}
                </>
              ) : (
                <>
                  <FileText className="w-3 h-3 mr-1" />
                  {(resource.constructionCategory || resource.category).charAt(0).toUpperCase() + (resource.constructionCategory || resource.category).slice(1).replace(/-/g, ' ')}
                </>
              )}
            </Badge>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>

          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {resource.title.replace(' (2025 Guide)', '')}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
            {(resource.excerpt || resource.description || '').length > 150 
              ? (resource.excerpt || resource.description || '').substring(0, 147) + '...' 
              : (resource.excerpt || resource.description || '')}
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>
                Updated {new Date(resource.updated).toLocaleDateString('en-GB')}
              </span>
            </div>
            {resource.audience && (
              <Badge variant="outline" className="text-xs">
                {resource.audience}
              </Badge>
            )}
          </div>

          {(resource.price_note || resource.category) && (
            <div className="mt-4 pt-4 border-t border-border">
              {resource.price_note ? (
                <p className="text-xs text-primary font-medium">
                  {resource.price_note}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)} Resource
                </p>
              )}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

