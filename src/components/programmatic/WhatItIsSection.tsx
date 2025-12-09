import { Info } from 'lucide-react';

interface WhatItIsData {
  title: string;
  content: string;
  industry_notes: string[];
}

interface WhatItIsSectionProps {
  data: WhatItIsData;
  audience: string;
  className?: string;
}

export default function WhatItIsSection({
  data,
  audience,
  className = ''
}: WhatItIsSectionProps) {
  return (
    <section className={`py-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{data.title}</h2>

      <div className="prose max-w-none mb-8">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {data.content}
        </p>
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Info className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Industry-Specific Notes for {audience}
            </h3>
            <ul className="space-y-3">
              {data.industry_notes.map((note, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">{note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}