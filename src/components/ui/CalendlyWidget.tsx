'use client';

import { useEffect } from 'react';

interface CalendlyWidgetProps {
  url?: string;
  className?: string;
}

export default function CalendlyWidget({ url = 'https://calendly.com/fileeasy/consultation?hide_gdpr_banner=1', className = '' }: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div 
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
