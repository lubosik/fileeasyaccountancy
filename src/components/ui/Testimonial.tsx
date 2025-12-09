import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  company?: string;
  role?: string;
  content: string;
  rating?: number;
  avatar?: string;
  className?: string;
}

export default function Testimonial({
  name,
  company,
  role,
  content,
  rating = 5,
  avatar,
  className = ''
}: TestimonialProps) {
  return (
    <div className={`background-color: #F8F8F5 border rounded-lg p-6 shadow-sm ${className}`}>
      <div className="mb-4">
        <Quote className="w-8 h-8 text-primary/20" />
      </div>

      <blockquote className="text-foreground mb-6 leading-relaxed">
        &quot;{content}&quot;
      </blockquote>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            {avatar ? (
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">
                  {name.charAt(0)}
                </span>
              </div>
            ) : (
              <span className="text-primary font-semibold text-lg">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            {(company || role) && (
              <p className="text-sm text-muted-foreground">
                {role && role}
                {role && company && ', '}
                {company && company}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-[#B0B2C0]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}