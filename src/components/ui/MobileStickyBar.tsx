'use client';

import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  className?: string;
}

export default function MobileStickyBar({ className = "" }: MobileStickyBarProps) {
  const actions = [
    {
      icon: Phone,
      label: "Call",
      href: "tel:+447894447435",
      color: "bg-brand-primary text-inverse"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      href: "https://wa.me/447894447435",
      color: "bg-green-600 text-white"
    },
    {
      icon: Calendar,
      label: "Book",
      href: "/quote/?source=mobile-sticky",
      color: "bg-cta-bg text-cta-text"
    }
  ];

  return (
    <>
      {/* Spacer to prevent content from being hidden behind the sticky bar */}
      <div className="h-16 md:hidden" />

      {/* Sticky Bottom Bar - Mobile Only */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-50
          bg-raised border-t border-muted
          shadow-lg md:hidden
          safe-area-insets
          ${className}
        `.trim()}
        role="toolbar"
        aria-label="Quick contact actions"
      >
        <div className="flex divide-x divide-muted">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <a
                key={index}
                href={action.href}
                target={action.href.startsWith('http') && !action.href.startsWith('/') ? '_blank' : '_self'}
                rel={action.href.startsWith('http') && !action.href.startsWith('/') ? 'noopener noreferrer' : undefined}
                className={`
                  flex-1 flex flex-col items-center justify-center
                  py-3 px-2 min-h-[56px]
                  ${action.color}
                  hover:opacity-90
                  active:scale-95
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50
                `.trim()}
                aria-label={`${action.label}${action.href.startsWith('http') && !action.href.startsWith('/') ? ' - Opens in new tab' : ''}`}
                onClick={() => {
                  if (action.href.startsWith('/quote/') && typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'fe_quote_start_cta', {
                      source: 'mobile_sticky',
                      event_category: 'Quote',
                      event_label: action.label
                    });
                  }
                }}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{action.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}