import Breadcrumbs, { type BreadcrumbItem } from './Breadcrumbs';
import { Badge } from './Badge';
import { cn } from '@/lib/utils';

interface PageIntroProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: {
    text: string;
    variant?: 'default' | 'secondary' | 'success' | 'warning' | 'info';
  };
  className?: string;
  background?: 'white' | 'muted' | 'gradient';
}

export default function PageIntro({
  title,
  subtitle,
  description,
  breadcrumbs,
  badge,
  className,
  background = 'muted'
}: PageIntroProps) {
  const backgroundClasses = {
    white: 'background-color: #F8F8F5',
    muted: 'bg-muted',
    gradient: 'bg-gradient-to-b from-muted to-background'
  };

  return (
    <section className={cn(backgroundClasses[background], 'py-12', className)}>
      <div className="container mx-auto px-4">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div className="max-w-4xl">
          {badge && (
            <div className="mb-4">
              <Badge variant={badge.variant}>{badge.text}</Badge>
            </div>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              {subtitle}
            </p>
          )}

          {description && (
            <div className="prose max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">{description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}