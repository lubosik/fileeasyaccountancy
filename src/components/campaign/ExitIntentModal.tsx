'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

interface ExitIntentModalProps {
  title: string;
  bullets: string[];
  ctaLabel: string;
  ctaUrl: string;
  campaign: string;
}

export default function ExitIntentModal({ title, bullets, ctaLabel, ctaUrl, campaign }: ExitIntentModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if already dismissed in this session
    if (typeof window !== 'undefined' && sessionStorage.getItem(`${campaign}ExitDismissed`)) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Detect exit intent when mouse leaves near top of page
      if (e.clientY <= 5 && e.clientX !== 0) {
        if (!sessionStorage.getItem(`${campaign}ExitDismissed`)) {
          setIsVisible(true);
        }
      }
    };

    const handleLinkClick = (e: MouseEvent) => {
      // Check if clicking on any link (except modal links)
      const target = e.target as HTMLElement;
      const link = target.closest('a[href]');
      
      if (link && !link.closest('#exit-modal') && !link.closest('[data-skip-exit]')) {
        // Check if it's an internal link
        const href = link.getAttribute('href');
        if (href && (href.startsWith('/') || href.includes(window.location.hostname))) {
          // Show exit intent before navigating
          if (!sessionStorage.getItem(`${campaign}ExitDismissed`)) {
            e.preventDefault();
            e.stopPropagation();
            setIsVisible(true);
            
            // After modal interaction, navigate if user dismisses
            setTimeout(() => {
              if (!sessionStorage.getItem(`${campaign}ExitDismissed`)) {
                window.location.href = href;
              }
            }, 100);
          }
        }
      }
    };

    // Only trigger on desktop
    if (window.innerWidth >= 768) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('click', handleLinkClick, true);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, [campaign]);

  const handleClose = () => {
    setIsVisible(false);
    // Store dismissal in session storage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(`${campaign}ExitDismissed`, 'true');
    }
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isVisible) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      // Trap focus within modal
      const modal = document.getElementById('exit-modal');
      if (modal) {
        const focusableElements = modal.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        const trapFocus = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        };
        
        modal.addEventListener('keydown', trapFocus);
        return () => {
          modal.removeEventListener('keydown', trapFocus);
          document.removeEventListener('keydown', handleEscape);
        };
      }
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      id="exit-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
    >
      <div className=" rounded-lg shadow-xl max-w-md w-full p-6 relative" style={{ backgroundColor: '#F8F8F5' }}>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded transition-colors hover:opacity-80"
          style={{ backgroundColor: '#E0E2E8' }}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 id="exit-modal-title" className="text-2xl font-bold text-primary mb-4 pr-8">
          {title}
        </h2>

        {/* Bullets */}
        <ul className="space-y-3 mb-6">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="text-primary font-bold">✓</span>
              <span className="text-foreground">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={ctaUrl}
          data-skip-exit
          className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => {
            // Track exit intent conversion
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'campaign_exit_cta_click', {
                campaign,
                source: 'exit_intent'
              });
            }
            handleClose();
          }}
        >
          {ctaLabel}
        </Link>

        <button
          onClick={handleClose}
          className="mt-3 text-center w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          No thanks, I'll pass
        </button>
      </div>
    </div>
  );
}
