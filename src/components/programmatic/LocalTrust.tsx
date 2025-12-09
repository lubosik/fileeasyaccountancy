import { MapPin, Users, Settings } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface LocalProofData {
  title: string;
  stats: string;
  tech_stack: string[];
  areas_served: string[];
}

interface LocalTrustProps {
  data: LocalProofData;
  city: string;
  county: string;
  className?: string;
}

export default function LocalTrust({
  data,
  city,
  county,
  className = ''
}: LocalTrustProps) {
  return (
    <section className={`py-8 ${className}`}>
      <div className="bg-muted/30 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{data.title}</h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <p className="text-lg text-primary font-semibold">{data.stats}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tech Stack */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Technology We Use</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.tech_stack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Areas Served */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Areas We Serve</h3>
            </div>
            <div className="space-y-2">
              {data.areas_served.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">
                    {area}
                    {area === city && <span className="text-primary font-semibold"> (Our base)</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Proudly serving businesses across {county} with professional accounting services
          </p>
        </div>
      </div>
    </section>
  );
}