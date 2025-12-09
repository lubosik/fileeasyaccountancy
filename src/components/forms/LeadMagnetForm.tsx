'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, FileText } from 'lucide-react';

interface LeadMagnetFormProps {
  onSuccess?: () => void;
}

export default function LeadMagnetForm({ onSuccess }: LeadMagnetFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const pathname = usePathname();

  // Listen for Web3Forms success event
  useEffect(() => {
    const handleSuccess = (e: CustomEvent) => {
      const detail = e.detail || {};
      if (detail.form && detail.form.classList.contains('leadmagnet-form')) {
        setIsSubmitted(true);

        // Fire success analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'leadmagnet_download_redirected', {
            event_category: 'conversion',
            event_label: 'ir35_guide'
          });
        }

        // Call success callback
        if (onSuccess) {
          onSuccess();
        }

        // Redirect to Notion page immediately
        setTimeout(() => {
          const notionUrl = 'https://www.notion.so/The-IR35-Survival-Guide-How-to-Keep-More-of-What-You-Earn-2796d05e192c8053ab1dc30c6d7033a0?source=copy_link&utm_source=file-easy-site&utm_medium=leadmagnet&utm_campaign=ir35-guide';
          window.location.href = notionUrl;
        }, 500);
      }
    };

    document.addEventListener('web3forms:success', handleSuccess as EventListener);
    return () => {
      document.removeEventListener('web3forms:success', handleSuccess as EventListener);
    };
  }, [onSuccess]);

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <FileText className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">
          Opening Your IR35 Survival Guide...
        </h3>
        <p className="text-sm text-secondary">
          Redirecting you to Notion. If you&apos;re not redirected automatically,{' '}
          <a
            href="https://www.notion.so/The-IR35-Survival-Guide-How-to-Keep-More-of-What-You-Earn-2796d05e192c8053ab1dc30c6d7033a0?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary underline"
          >
            click here
          </a>.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Preview */}
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
          <FileText className="w-6 h-6 text-brand-primary" />
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">
          The IR35 Survival Guide
        </h3>
        <p className="text-sm text-secondary">
          How to Keep More of What You Earn
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-surface rounded-lg p-4 mb-6">
        <h4 className="font-medium text-primary mb-3">What you&apos;ll get:</h4>
        <ul className="space-y-2 text-sm text-secondary">
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Plain-English rules contractors actually use
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Avoid common pitfalls before they cost you
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Checklist to prep for HMRC scrutiny
          </li>
        </ul>
      </div>

      {/* Form with Web3Forms */}
      <form className="js-web3form leadmagnet-form space-y-4" action="https://api.web3forms.com/submit" method="POST" noValidate>
        {/* Web3Forms Configuration */}
        <input type="hidden" name="access_key" value="0e065602-9ef6-4ec7-9af4-5bbeeaf64a5a" />
        <input type="hidden" name="from_name" value="Fileeasy Website - Lead Magnet" />
        <input type="hidden" name="subject" value="New IR35 Guide Download — Fileeasy Accountancy" />
        <input type="hidden" name="to" value="info@fileeasyaccountancy.co.uk" />
        <input type="hidden" name="source_page" value={pathname || '/'} />
        {/* Web3Forms Redirect - will redirect after successful submission */}
        <input type="hidden" name="redirect" value="https://www.notion.so/The-IR35-Survival-Guide-How-to-Keep-More-of-What-You-Earn-2796d05e192c8053ab1dc30c6d7033a0?source=copy_link&utm_source=file-easy-site&utm_medium=leadmagnet&utm_campaign=ir35-guide" />
        {/* NOTE: Auto-responder emails require Web3Forms Pro plan.
             Contact support@web3forms.com to set up automated emails to users.
             For now, redirect takes them directly to the Notion guide. */}

        {/* Email - Required */}
        <div>
          <label htmlFor="lead-email" className="block text-sm font-medium text-primary mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="lead-email"
            name="email"
            required
            className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
            placeholder="your.email@company.com"
          />
        </div>

        {/* First Name - Optional */}
        <div>
          <label htmlFor="lead-firstName" className="block text-sm font-medium text-primary mb-2">
            First Name <span className="text-secondary text-sm">(optional)</span>
          </label>
          <input
            type="text"
            id="lead-firstName"
            name="firstName"
            className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
            placeholder="John"
          />
        </div>

        {/* Contractor Question */}
        <div>
          <label htmlFor="lead-isContractor" className="block text-sm font-medium text-primary mb-2">
            Are you a contractor?
          </label>
          <select
            id="lead-isContractor"
            name="isContractor"
            className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="considering">Considering it</option>
          </select>
        </div>

        {/* GDPR Consent - Required */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="lead-gdprConsent"
            name="consent"
            value="I agree"
            required
            className="mt-1 w-4 h-4 text-brand-secondary bg-raised border border-muted rounded focus:ring-brand-secondary focus:ring-2"
          />
          <label htmlFor="lead-gdprConsent" className="text-sm text-secondary">
            I agree to receive the IR35 guide and occasional tips from File Easy. I can unsubscribe anytime. *
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
          className="w-full bg-brand-primary text-inverse px-6 py-3 rounded-lg font-medium hover:bg-brand-primary/90 focus:outline-none focus:ring-4 focus:ring-brand-primary/25 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Get My Free Guide</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>

      {/* Footer note */}
      <p className="text-xs text-secondary text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}