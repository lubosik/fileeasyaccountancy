'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { updateLeadStoreData } from '@/lib/leadStore';

export default function ResumePage() {
  const router = useRouter();
  const [surname, setSurname] = useState('');
  const [uid, setUid] = useState('');
  const [errors, setErrors] = useState<{ surname?: string; uid?: string; general?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    // Validate
    const newErrors: typeof errors = {};
    if (!surname.trim()) {
      newErrors.surname = 'Surname is required';
    }
    if (!uid.trim()) {
      newErrors.uid = 'Unique ID is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      // Call lookup API
      const response = await fetch('/api/resume/lookup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          surname: surname.trim(),
          uid: uid.trim().toUpperCase().replace(/\s+/g, ''),
        }),
      });

      const data = await response.json();

      if (data.ok && data.resumePayload) {
        // Rehydrate local lead store
        updateLeadStoreData(data.resumePayload);

        // Fire analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_resume_success', {
            event_category: 'Quote',
            event_label: 'Resume Success',
            last_step: data.resumePayload.lastCompletedStep || 'unknown',
          });
        }

        // Navigate to quote flow with resume flag
        router.push(`/quote?resume=true&step=${data.resumePayload.lastCompletedStep || 1}`);
      } else {
        // Not found
        setErrors({
          general: data.message || 'No quote found with those details. Please check and try again.',
        });

        // Fire analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_resume_not_found', {
            event_category: 'Quote',
            event_label: 'Resume Not Found',
          });
        }
      }
    } catch (error) {
      setErrors({
        general: 'Something went wrong. Please try again.',
      });
      if (process.env.NODE_ENV !== 'production') {
        console.error('Resume lookup error:', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-page flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-muted sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/brand/logo-fileeasy.png" 
              alt="File Easy Accountancy" 
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
              unoptimized
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg border border-muted p-8">
            <h1 className="text-2xl font-bold text-primary mb-2">
              Resume Your Quote
            </h1>
            <p className="text-muted-foreground mb-6">
              Enter your surname and unique ID to continue where you left off.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Surname */}
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-primary mb-2">
                  Surname *
                </label>
                <input
                  type="text"
                  id="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.surname ? 'border-red-500' : 'border-muted'
                  }`}
                  placeholder="Smith"
                  required
                  disabled={isLoading}
                />
                {errors.surname && (
                  <p className="text-red-600 text-sm mt-1">{errors.surname}</p>
                )}
              </div>

              {/* Unique ID */}
              <div>
                <label htmlFor="uid" className="block text-sm font-medium text-primary mb-2">
                  Unique ID *
                </label>
                <input
                  type="text"
                  id="uid"
                  value={uid}
                  onChange={(e) => setUid(e.target.value.toUpperCase().replace(/\s+/g, ''))}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono ${
                    errors.uid ? 'border-red-500' : 'border-muted'
                  }`}
                  placeholder="F3K8-2JQ9"
                  required
                  disabled={isLoading}
                  maxLength={11}
                />
                {errors.uid && (
                  <p className="text-red-600 text-sm mt-1">{errors.uid}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  Format: XXXXX-XXXXX (check your email for your unique code)
                </p>
              </div>

              {/* General Error */}
              {errors.general && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{errors.general}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <span>Resume Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Help Links */}
            <div className="mt-6 pt-6 border-t border-muted">
              <div className="space-y-2 text-sm">
                <Link
                  href="/resume/reminder"
                  className="text-primary hover:text-primary/80 transition-colors block"
                >
                  I forgot my Unique ID
                </Link>
                <Link
                  href="/resume/reset"
                  className="text-primary hover:text-primary/80 transition-colors block"
                >
                  Reset my Unique ID
                </Link>
              </div>
            </div>

            {/* Back to Quote */}
            <div className="mt-4 text-center">
              <Link
                href="/quote"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Start a new quote instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

