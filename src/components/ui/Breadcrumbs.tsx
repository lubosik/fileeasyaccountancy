import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

export default function Breadcrumbs({
  items,
  className,
  showHome = true
}: BreadcrumbsProps) {
  const allItems = showHome
    ? [{ label: 'Home', href: '/' }, ...items]
    : items;

  return (
    <nav
      className={cn('flex items-center space-x-1 text-sm', className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isHome = index === 0 && showHome;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
              )}

              {isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || '/'}
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  {isHome && <Home className="w-4 h-4 mr-1" />}
                  {!isHome && item.label}
                  {isHome && (
                    <span className="sr-only">{item.label}</span>
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}