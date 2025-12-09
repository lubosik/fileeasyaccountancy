'use client';

import { useState, useEffect } from 'react';
import { X, Tag } from 'lucide-react';

interface DiscountToastProps {
  message?: string;
  sticky?: boolean;
  dismissible?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
}

export default function DiscountToast({
  message = "New customer offer — 20% off your first month — save £35",
  sticky = true,
  dismissible = true,
  autoHide = false,
  autoHideDelay = 10000
}: DiscountToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoHide && autoHideDelay) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoHideDelay);

      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay]);

  if (!isVisible) {
    return null;
  }

  const baseClasses = `
    w-full
    bg-cta-bg
    text-cta-text
    border-b
    border-cta-text/10
    shadow-sm
    z-50
    transition-all
    duration-300
    ease-in-out
  `;

  const stickyClasses = sticky ? 'sticky top-0' : '';

  return (
    <div
      className={`${baseClasses} ${stickyClasses}`.trim()}
      role="alert"
      aria-live="polite"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center text-center relative">
          {/* Icon */}
          <Tag className="w-4 h-4 mr-2 flex-shrink-0 hidden sm:block" />

          {/* Message */}
          <div className="flex-1">
            <span className="text-sm sm:text-base font-medium">
              {message}
            </span>
          </div>

          {/* Dismiss button */}
          {dismissible && (
            <button
              onClick={() => setIsVisible(false)}
              className="ml-4 p-1 hover:bg-cta-text/10 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cta-text/50 flex-shrink-0"
              aria-label="Dismiss discount offer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}