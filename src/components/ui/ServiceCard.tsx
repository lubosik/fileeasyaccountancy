import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features?: string[];
  price?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  features = [],
  price,
  className = ''
}: ServiceCardProps) {
  return (
    <div className={` border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group ${className}`} style={{ backgroundColor: '#F8F8F5' }}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        {price && (
          <div className="text-right">
            <p className="text-sm text-muted-foreground">From</p>
            <p className="text-lg font-bold text-primary">{price}</p>
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={href}
        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group-hover:gap-2 gap-1"
      >
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}