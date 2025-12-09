'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';

interface MobileStickyCTAProps {
  text: string;
  href: string;
}

export default function MobileStickyCTA({ text, href }: MobileStickyCTAProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-t border-primary/20 shadow-lg">
      <Link
        href={href}
        className="flex items-center justify-center py-4 px-4 hover:bg-primary/90 transition-colors"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'campaign_mobile_cta_click');
          }
        }}
      >
        <Calendar className="w-5 h-5 mr-2" />
        <span className="text-sm font-semibold">{text}</span>
      </Link>
      {/* Safe area for phones with home indicators */}
      <div className="h-safe-bottom bg-primary" />
    </div>
  );
}

