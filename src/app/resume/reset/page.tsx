'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export default function ResetRequestPage() {
  const router = useRouter();
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ surname?: string; email?: string; general?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);
    setIsSuccess(false);

    // Validate
    const newErrors: typeof errors = {};
    if (!surname.trim()) {
      newErrors.surname = 'Surname is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      // Call reset request API
      const response = await fetch('/api/resume/reset/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          surname: surname.trim(),
          email: email.trim().toLowerCase(),
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setIsSuccess(true);

        // Fire analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_uid_reset_requested', {
            event_category: 'Quote',
            event_label: 'UID Reset Requested',
          });
        }

        // Redirect to verification page after 2 seconds
        setTimeout(() => {
          router.push(`/resume/reset/verify?email=${encodeURIComponent(email.trim().toLowerCase())}`);
        }, 2000);
      } else {
        setErrors({
          general: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setErrors({
        general: 'Something went wrong. Please try again.',
      });
      if (process.env.NODE_ENV !== 'production') {
        console.error('Reset request error:', error);
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
            <Link
              href="/resume"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to resume
            </Link>

            <h1 className="text-2xl font-bold text-primary mb-2">
              Reset Your Unique ID
            </h1>
            <p className="text-muted-foreground mb-6">
              Enter your surname and email address. We'll send you a verification code to reset your unique ID.
            </p>

            {isSuccess ? (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm font-medium text-green-800">
                  Verification code sent! Please check your email and enter the code on the next page.
                </p>
              </div>
            ) : (
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

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-muted'
                    }`}
                    placeholder="you@example.com"
                    required
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
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
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending Code...' : 'Send Verification Code'}
                </button>
              </form>
            )}

            {/* Back to Resume */}
            <div className="mt-6 text-center">
              <Link
                href="/resume"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Back to resume page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

