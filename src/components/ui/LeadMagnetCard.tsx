'use client';

import { useState } from 'react';
import { FileText, CheckCircle, Download } from 'lucide-react';
import LeadMagnetModal from './LeadMagnetModal';

interface LeadMagnetCardProps {
  variant?: 'default' | 'small' | 'compact';
  className?: string;
}

export default function LeadMagnetCard({
  variant = 'default',
  className = ""
}: LeadMagnetCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    "Plain-English rules contractors actually use",
    "Avoid common pitfalls before they cost you",
    "Checklist to prep for HMRC scrutiny"
  ];

  const handleCardClick = () => {
    // Fire analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'leadmagnet_card_view', {
        event_category: 'engagement',
        event_label: 'ir35_guide'
      });
    }
    setIsModalOpen(true);
  };

  if (variant === 'compact') {
    return (
      <>
        <div
          className={`
            fixed bottom-20 left-4 right-4 md:hidden
            bg-cta-bg text-cta-text
            rounded-lg shadow-lg border-2 border-cta-text/20
            p-4 cursor-pointer
            transform transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-xl
            z-40
            ${className}
          `.trim()}
          onClick={handleCardClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
          aria-label="Download IR35 Survival Guide"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cta-text/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm leading-tight">
                Free IR35 Survival Guide
              </h3>
              <p className="text-xs opacity-90 mt-1">
                Keep more of what you earn →
              </p>
            </div>
          </div>
        </div>
        <LeadMagnetModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  if (variant === 'small') {
    return (
      <>
        <div
          className={`
            bg-raised border border-muted rounded-lg p-6
            cursor-pointer transition-all duration-200
            hover:shadow-md hover:border-brand-secondary
            ${className}
          `.trim()}
          onClick={handleCardClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-brand-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-primary mb-2">
                The IR35 Survival Guide
              </h3>
              <p className="text-sm text-secondary mb-3">
                How to Keep More of What You Earn
              </p>
              <div className="space-y-1 mb-4">
                {benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-start text-xs text-secondary">
                    <CheckCircle className="w-3 h-3 text-brand-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center text-brand-secondary font-medium text-sm">
                <Download className="w-4 h-4 mr-1" />
                Free Download
              </div>
            </div>
          </div>
        </div>
        <LeadMagnetModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  // Default variant
  return (
    <>
      <div
        className={`
          bg-raised border-2 border-brand-secondary/20 rounded-xl p-8
          cursor-pointer transition-all duration-200
          hover:shadow-xl hover:border-brand-secondary
          hover:scale-105 transform
          ${className}
        `.trim()}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      >
        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-brand-primary" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-primary mb-3">
            The IR35 Survival Guide
          </h3>
          <p className="text-lg text-secondary mb-6">
            How to Keep More of What You Earn
          </p>

          {/* Benefits */}
          <div className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start text-left">
                <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-secondary">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-brand-primary text-inverse rounded-lg font-medium hover:bg-brand-primary/90 transition-colors">
            <Download className="w-5 h-5" />
            <span>Get Your Free Guide</span>
          </div>
        </div>
      </div>
      <LeadMagnetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}