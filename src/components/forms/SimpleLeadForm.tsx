'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

interface SimpleLeadFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  source?: string; // Track form source for analytics
}

export default function SimpleLeadForm({
  title = 'Get Expert Help',
  subtitle = 'Tell us what you need and we&apos;ll get back to you within 24 hours.',
  className = '',
  source = 'unknown'
}: SimpleLeadFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const pathname = usePathname();

  // Listen for the global success event
  React.useEffect(() => {
    const handleSuccess = (e: CustomEvent) => {
      const detail = e.detail || {};
      if (detail.form && detail.form.classList.contains('contact-enquiry')) {
        setIsSubmitted(true);

        // Track form submission in Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'contact_form_submit', {
            event_category: 'engagement',
            event_label: 'contact_page_enquiry'
          });
        }
      }
    };

    document.addEventListener('web3forms:success', handleSuccess as EventListener);
    return () => {
      document.removeEventListener('web3forms:success', handleSuccess as EventListener);
    };
  }, []);

  if (isSubmitted) {
    return (
      <div className={` rounded-lg border p-8 text-center ${className}`} style={{ backgroundColor: '#F8F8F5' }}>
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
        </p>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Need to speak to someone now?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+447894447435"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors"
              onClick={() => window.va?.track('Click to Call', { location: 'form_success' })}
            >
              Call: +44 7894 447435
            </a>
            <a
              href="https://wa.me/447894447435?text=Hi, I just submitted a form and would like to speak with someone about my accounting needs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-md font-medium transition-colors"
              onClick={() => window.va?.track('WhatsApp Click', { location: 'form_success' })}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={` rounded-lg border p-8 ${className}`} style={{ backgroundColor: '#F8F8F5' }}>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      <form className="js-web3form contact-enquiry" action="https://api.web3forms.com/submit" method="POST" noValidate>
        {/* Required by Web3Forms */}
        <input type="hidden" name="access_key" value="0e065602-9ef6-4ec7-9af4-5bbeeaf64a5a" />
        <input type="hidden" name="from_name" value="Fileeasy Website" />
        <input type="hidden" name="subject" value="New contact-page enquiry — Fileeasy Accountancy" />
        <input type="hidden" name="to" value="info@fileeasyaccountancy.co.uk" />
        <input type="hidden" name="source_page" value={source !== 'unknown' ? source : (pathname || '/')} />

        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Smith"
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              What do you need help with? *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="I need help with my bookkeeping and VAT returns..."
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              value="I agree"
              required
              className="mt-1 w-4 h-4 text-primary border-[#B0B2C0] rounded focus:ring-primary"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              I agree to the{' '}
              <a href="/privacy" className="text-primary hover:underline">
                privacy policy
              </a>{' '}
              and consent to being contacted about my enquiry. *
            </label>
          </div>

          {/* Spam protection */}
          <div className="h-captcha" data-captcha="true" suppressHydrationWarning></div>
          <input type="checkbox" name="botcheck" className="hidden" style={{display:'none'}} />

          {/* Inline result area */}
          <p data-web3forms-result className="visually-hidden"></p>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <span>Get Help Now</span>
          </button>
        </div>
      </form>
    </div>
  );
}