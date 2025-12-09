import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: 'white' | 'muted' | 'primary' | 'transparent';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({
  children,
  className,
  containerClassName,
  id,
  background = 'transparent',
  padding = 'lg'
}: SectionProps) {
  const backgroundClasses = {
    white: 'background-color: #F8F8F5',
    muted: 'bg-muted',
    primary: 'bg-primary text-primary-foreground',
    transparent: ''
  };

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  };

  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className={cn('container mx-auto px-4', containerClassName)}>
        {children}
      </div>
    </section>
  );
}