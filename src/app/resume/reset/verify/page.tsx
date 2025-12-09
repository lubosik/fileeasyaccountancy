'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ResetVerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [errors, setErrors] = useState<{ email?: string; code?: string; general?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [newUid, setNewUid] = useState<string | null>(null);

  // Get email from query param if available
  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);
    setIsSuccess(false);

    // Validate
    const newErrors: typeof errors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!code.trim()) {
      newErrors.code = 'Verification code is required';
    } else if (!/^\d{6}$/.test(code.trim())) {
      newErrors.code = 'Code must be 6 digits';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      // Call reset verify API
      const response = await fetch('/api/resume/reset/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          code: code.trim(),
        }),
      });

      const data = await response.json();

      if (data.ok && data.newUid) {
        setIsSuccess(true);
        setNewUid(data.newUid);

        // Fire analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_uid_reset_success', {
            event_category: 'Quote',
            event_label: 'UID Reset Success',
          });
        }
      } else {
        setErrors({
          general: data.message || 'Invalid code or code has expired. Please request a new code.',
        });
      }
    } catch (error) {
      setErrors({
        general: 'Something went wrong. Please try again.',
      });
      if (process.env.NODE_ENV !== 'production') {
        console.error('Reset verify error:', error);
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
              href="/resume/reset"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>

            <h1 className="text-2xl font-bold text-primary mb-2">
              Enter Verification Code
            </h1>
            <p className="text-muted-foreground mb-6">
              We've sent a 6-digit code to your email. Enter it below to reset your unique ID.
            </p>

            {isSuccess ? (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-800 mb-2">
                      New code emailed. You can resume now.
                    </p>
                    {newUid && (
                      <p className="text-xs text-green-700 font-mono bg-green-100 p-2 rounded mt-2">
                        Your new code: {newUid}
                      </p>
                    )}
                    <div className="mt-4">
                      <Link
                        href="/resume"
                        className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        Resume your quote →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    disabled={isLoading || !!searchParams.get('email')}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Verification Code */}
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-primary mb-2">
                    Verification Code *
                  </label>
                  <input
                    type="text"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-center text-2xl tracking-widest ${
                      errors.code ? 'border-red-500' : 'border-muted'
                    }`}
                    placeholder="123456"
                    required
                    disabled={isLoading}
                    maxLength={6}
                    autoComplete="one-time-code"
                  />
                  {errors.code && (
                    <p className="text-red-600 text-sm mt-1">{errors.code}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter the 6-digit code from your email
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
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Verifying...' : 'Verify & Reset'}
                </button>
              </form>
            )}

            {/* Resend Code */}
            {!isSuccess && (
              <div className="mt-4 text-center">
                <Link
                  href="/resume/reset"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Didn't receive code? Request a new one
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

