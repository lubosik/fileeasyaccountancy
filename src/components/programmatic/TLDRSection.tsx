import { AlertCircle } from 'lucide-react';

interface TLDRSectionProps {
  points: string[];
  className?: string;
}

export default function TLDRSection({ points, className = '' }: TLDRSectionProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-primary/5 to-green-50 rounded-lg" />

      {/* Content */}
      <div className="relative /80 border-l-4 border-primary p-6 rounded-r-lg backdrop-blur-sm" style={{ backgroundColor: '#F8F8F5' }}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
              TL;DR
              <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-normal">
                Quick Summary
              </span>
            </h2>
            <div className="space-y-3">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}