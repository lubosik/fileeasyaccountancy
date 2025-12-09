'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, X, MessageCircle } from 'lucide-react';

export default function CTASticky() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-16'}`}>
      <div className="max-w-sm mx-auto bg-primary text-primary-foreground rounded-lg shadow-lg p-4">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 hover:bg-primary/20 rounded transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="pr-6">
          <h3 className="font-semibold mb-1">Need Help with Your Accounts?</h3>
          <p className="text-sm text-primary-foreground/90 mb-3">
            Get a free consultation today
          </p>

          <div className="flex space-x-2">
            <Link
              href="/quote/?source=sticky-cta"
              className="flex items-center space-x-1 text-primary px-3 py-2 rounded text-sm font-medium transition-colors hover:opacity-90" style={{ backgroundColor: '#F8F8F5' }}
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'fe_quote_start_cta', {
                    source: 'sticky_cta',
                    event_category: 'Quote',
                    event_label: 'Book Now'
                  });
                }
              }}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </Link>
            <Link
              href="https://wa.me/447894447435?text=Hi, I need help with my construction accounting. Can we discuss my requirements?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-primary/20 hover:bg-primary/30 px-3 py-2 rounded text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}