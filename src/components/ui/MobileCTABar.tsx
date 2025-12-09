'use client';

import Link from 'next/link';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileCTABar() {
  const handleCallClick = () => {
    if (typeof window !== 'undefined' && window.va) {
      window.va.track('Click to Call', { location: 'mobile_cta_bar' });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && window.va) {
      window.va.track('WhatsApp Click', { location: 'mobile_cta_bar' });
    }
  };

  const handleBookClick = () => {
    if (typeof window !== 'undefined' && window.va) {
      window.va.track('Book Meeting Click', { location: 'mobile_cta_bar' });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border shadow-lg" style={{ backgroundColor: '#F8F8F5' }}>
      <div className="grid grid-cols-3 gap-0">
        {/* Call Button */}
        <Link
          href="tel:+447894447435"
          onClick={handleCallClick}
          className="flex flex-col items-center justify-center py-3 px-2 text-center hover:bg-muted transition-colors active:bg-muted/80"
          style={{ minHeight: '44px' }}
        >
          <Phone className="w-5 h-5 text-primary mb-1" />
          <span className="text-xs font-medium text-foreground">Call</span>
        </Link>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/447894447435?text=Hi, I need help with my accounting. Can we discuss my requirements?"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex flex-col items-center justify-center py-3 px-2 text-center hover:bg-muted transition-colors active:bg-muted/80"
          style={{ minHeight: '44px' }}
        >
          <MessageCircle className="w-5 h-5 text-green-600 mb-1" />
          <span className="text-xs font-medium text-foreground">WhatsApp</span>
        </Link>

        {/* Book Button */}
        <Link
          href="/quote/?source=mobile-cta-bar"
          onClick={() => {
            handleBookClick();
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'fe_quote_start_cta', {
                source: 'mobile_cta_bar',
                event_category: 'Quote',
                event_label: 'Book'
              });
            }
          }}
          className="flex flex-col items-center justify-center py-3 px-2 text-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors active:bg-primary/80"
          style={{ minHeight: '44px' }}
        >
          <Calendar className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Book</span>
        </Link>
      </div>

      {/* Safe area for phones with home indicators */}
      <div className="h-safe-bottom " style={{ backgroundColor: '#F8F8F5' }} />
    </div>
  );
}