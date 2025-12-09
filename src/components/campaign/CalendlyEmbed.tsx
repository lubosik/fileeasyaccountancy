'use client';

import { useState, useEffect } from 'react';
import CalendlyWidget from '@/components/ui/CalendlyWidget';

interface CalendlyEmbedProps {
  baseUrl?: string;
  utmParams?: Record<string, string>;
}

export default function CalendlyEmbed({ 
  baseUrl = 'https://calendly.com/fileeasy/consultation?hide_gdpr_banner=1',
  utmParams 
}: CalendlyEmbedProps) {
  const [finalUrl, setFinalUrl] = useState(baseUrl);

  useEffect(() => {
    // Append UTM parameters from current page URL if they exist
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const existingParams = new URLSearchParams();
      
      // Preserve existing UTM params from page
      urlParams.forEach((value, key) => {
        if (key.startsWith('utm_')) {
          existingParams.set(key, value);
        }
      });

      // Override with any explicitly passed params
      if (utmParams) {
        Object.entries(utmParams).forEach(([key, value]) => {
          existingParams.set(key, value);
        });
      }

      // Build final URL
      const paramsString = existingParams.toString();
      if (paramsString) {
        setFinalUrl(`${baseUrl}?${paramsString}`);
      } else {
        setFinalUrl(baseUrl);
      }
    }
  }, [baseUrl, utmParams]);

  return (
    <div className="my-8">
      <CalendlyWidget url={finalUrl} />
    </div>
  );
}

