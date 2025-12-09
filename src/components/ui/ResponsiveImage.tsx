import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  fill = false,
  sizes,
  objectFit = 'cover',
  rounded = 'none',
  placeholder = 'empty',
  blurDataURL
}: ResponsiveImageProps) {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down'
  };

  return (
    <div className={cn('relative overflow-hidden', roundedClasses[rounded])}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={cn(
          'transition-all duration-300',
          objectFitClasses[objectFit],
          className
        )}
      />
    </div>
  );
}