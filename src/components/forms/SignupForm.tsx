'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

interface SignupFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function SignupForm({
  className = "",
  title = "Ready to Get Started?",
  subtitle = "Tell us about your accounting needs and we'll be in touch within 24 hours."
}: SignupFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const pathname = usePathname();

  // Listen for the global success event
  React.useEffect(() => {
    const handleSuccess = (e: CustomEvent) => {
      const detail = e.detail || {};
      if (detail.form && detail.form.classList.contains('home-enquiry')) {
        setIsSubmitted(true);

        // Track form submission in Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'contact_form_submit', {
            event_category: 'engagement',
            event_label: 'homepage_enquiry'
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
      <section className={`py-12 md:py-16 lg:py-20 bg-raised ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-8 h-8 text-brand-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Thank You!
            </h2>
            <p className="text-secondary text-lg mb-6">
              We&apos;ve received your inquiry and will be in touch within 24 hours to discuss your accounting needs.
            </p>
            <p className="text-sm text-secondary">
              Need immediate assistance? WhatsApp us at{' '}
              <a
                href="https://wa.me/447894447435"
                className="text-brand-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +44 7894 447435
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 md:py-16 lg:py-20 bg-raised ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-lg text-secondary">
              {subtitle}
            </p>
          </div>

          {/* Form */}
          <form className="js-web3form home-enquiry" action="https://api.web3forms.com/submit" method="POST" noValidate>
            {/* Required by Web3Forms */}
            <input type="hidden" name="access_key" value="0e065602-9ef6-4ec7-9af4-5bbeeaf64a5a" />
            <input type="hidden" name="from_name" value="Fileeasy Website" />
            <input type="hidden" name="subject" value="New homepage enquiry — Fileeasy Accountancy" />
            <input type="hidden" name="to" value="info@fileeasyaccountancy.co.uk" />
            <input type="hidden" name="source_page" value={pathname || '/'} />

            <div className="space-y-6">
              {/* Email - Required */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Name fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-primary mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-primary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
              </div>

              {/* Business Name - Optional */}
              <div>
                <label htmlFor="business_name" className="block text-sm font-medium text-primary mb-2">
                  Business Name <span className="text-secondary text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  id="business_name"
                  name="business_name"
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                  placeholder="Your Company Ltd"
                />
              </div>

              {/* Help With - Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  What do you need help with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent resize-vertical"
                  placeholder="Tell us about your accounting needs, current challenges, or specific services you're interested in..."
                />
              </div>

              {/* Consent - Required */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  value="I agree"
                  required
                  className="mt-1 w-4 h-4 text-brand-secondary bg-raised border border-muted rounded focus:ring-brand-secondary focus:ring-2"
                />
                <label htmlFor="consent" className="text-sm text-secondary">
                  I agree to be contacted by Fileeasy Accountancy regarding my inquiry. I understand I can unsubscribe at any time.
                  <a href="/privacy" className="text-brand-secondary hover:underline">View our privacy policy.</a>
                </label>
              </div>

              {/* Spam protection */}
              <div className="h-captcha" data-captcha="true" suppressHydrationWarning></div>
              <input type="checkbox" name="botcheck" className="hidden" style={{display:'none'}} />

              {/* Inline result area */}
              <p data-web3forms-result className="visually-hidden"></p>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full cta-button flex items-center justify-center space-x-2"
              >
                <span>Send My Inquiry</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Additional info */}
          <div className="text-center mt-8 pt-6 border-t border-muted">
            <p className="text-sm text-secondary">
              Prefer to call? Reach us at{' '}
              <a
                href="https://wa.me/447894447435"
                className="text-brand-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +44 7894 447435
              </a>{' '}
              or{' '}
              <Link
                href="/quote/?source=signup-form"
                className="text-brand-secondary hover:underline"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'fe_quote_start_cta', {
                      source: 'signup_form',
                      event_category: 'Quote',
                      event_label: 'book a free consultation'
                    });
                  }
                }}
              >
                book a free consultation
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}