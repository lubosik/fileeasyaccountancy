'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface AnnouncementBannerProps {
  message?: string;
  ctaText?: string;
  ctaHref?: string;
  dismissible?: boolean;
}

export default function AnnouncementBanner({
  message = "New customer offer — 20% off your first month — save £35",
  ctaText = "Claim Offer",
  ctaHref = "/quote/?source=announcement",
  dismissible = true
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-full bg-brand-secondary text-inverse relative" role="banner">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-center text-center relative">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="text-sm sm:text-base font-medium">
              {message}
            </span>
            {ctaHref && (
              <a
                href={ctaHref}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-white text-white text-sm font-medium rounded-md hover: hover:text-brand-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-secondary" style={{ backgroundColor: '#F8F8F5' }}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'fe_quote_start_cta', {
                      source: 'announcement',
                      event_category: 'Quote',
                      event_label: ctaText || 'Claim Offer'
                    });
                  }
                }}
              >
                {ctaText}
              </a>
            )}
          </div>

          {dismissible && (
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-2 sm:right-4 p-1 hover: /10 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white" style={{ backgroundColor: '#F8F8F5' }}
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}