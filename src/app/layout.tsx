import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTABar from '@/components/ui/MobileCTABar';
import { LocalBusinessSchema, OrganizationSchema } from '@/lib/schema';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Construction Accountants UK & Dubai | Fileeasy Accountancy",
  description: "Construction accounting specialists for UK and Dubai contractors, trades, and developers. CIS-compliant bookkeeping, project-based accounting, VAT compliance. Offices in Kent, London & Dubai. Free consultation.",
  keywords: "accountant UK, UK accountant, London accountant, Kent accountant, Dubai accountant, tax returns UK, bookkeeping UK, VAT registration UK, payroll services UK, Rochester accountant, Medway accountant",
  authors: [{ name: "Fileeasy Accountancy" }],
  creator: "Fileeasy Accountancy",
  publisher: "Fileeasy Accountancy",
  metadataBase: new URL('https://fileeasyaccountancy.co.uk'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://fileeasyaccountancy.co.uk',
    title: 'Construction Accountants UK & Dubai | Fileeasy Accountancy',
    description: 'Construction accounting specialists for UK and Dubai contractors, trades, and developers. CIS-compliant bookkeeping, project-based accounting, VAT compliance. Offices in Kent, London & Dubai.',
    siteName: 'Fileeasy Accountancy',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Fileeasy Accountancy - Professional accounting services across UK & Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Accountants UK & Dubai | Fileeasy Accountancy',
    description: 'Construction accounting specialists for UK and Dubai contractors, trades, and developers. CIS-compliant bookkeeping, project-based accounting, VAT compliance. Offices in Kent, London & Dubai.',
    images: ['/og-image.webp'],
  },
  verification: {
    google: 'google-site-verification-code-here', // To be updated with actual GSC verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        {/* Google Analytics - GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VK0JMW8SEC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VK0JMW8SEC');
            `
          }}
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3959450267652116');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=3959450267652116&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Performance optimizations - preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        
        {/* Preload critical font */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preload hero image for LCP optimization */}
        <link
          rel="preload"
          href="/images/hero-image.webp"
          as="image"
          type="image/webp"
        />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon-192.png" />
        <link rel="manifest" href="/brand/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        <LocalBusinessSchema
          name="File Easy Accountancy"
          description="Construction accounting specialists for UK contractors, trades, and developers. CIS-compliant bookkeeping, project-based accounting, VAT reverse charge, and HMRC compliance. Real-time project profitability tracking."
          address={{
            streetAddress: "43 Castle Avenue",
            addressLocality: "Rochester",
            addressRegion: "Kent",
            postalCode: "ME1 2DU",
            addressCountry: "GB"
          }}
          telephone="+447894447435"
          email="info@fileeasyaccountancy.co.uk"
          url="https://fileeasyaccountancy.co.uk"
          priceRange="££"
          openingHours={[
            'Mo-Fr 09:00-17:30',
            'Sa 09:00-13:00'
          ]}
          serviceArea={{
            name: "Medway, Kent",
            latitude: 51.3883,
            longitude: 0.5083,
            radius: 15000
          }}
          sameAs={[
            'https://www.linkedin.com/company/fileeasy-accountancy',
            'https://www.google.com/maps?cid=0x47d8cd14844b6e53:0x4d94bad817be51bb',
            'https://fileeasyaccountancy.co.uk'
          ]}
          additionalProperties={{
            "@id": "https://fileeasyaccountancy.co.uk/uk-kent/#organization",
            alternateName: "Fileeasy Accountancy",
            logo: "https://fileeasyaccountancy.co.uk/brand/logo-fileeasy.png",
            image: "https://fileeasyaccountancy.co.uk/images/kent-office.webp",
            geo: {
              "@type": "GeoCoordinates",
              latitude: "51.3883",
              longitude: "0.5083"
            },
            areaServed: [
              { "@type": "City", "name": "Rochester" },
              { "@type": "City", "name": "Chatham" },
              { "@type": "City", "name": "Gillingham" },
              { "@type": "City", "name": "Maidstone" },
              { "@type": "City", "name": "Medway" },
              { "@type": "City", "name": "Canterbury" },
              { "@type": "City", "name": "Gravesend" },
              { "@type": "City", "name": "Dartford" },
              { "@type": "AdministrativeArea", "name": "Kent" },
              { "@type": "AdministrativeArea", "name": "Southeast England" }
            ],
            hasMap: "https://www.google.com/maps?cid=0x47d8cd14844b6e53:0x4d94bad817be51bb",
            knowsAbout: [
              "Bookkeeping", "Tax Preparation", "Self Assessment", "Corporation Tax",
              "VAT Compliance", "Making Tax Digital", "Payroll Management", "PAYE",
              "CIS Returns", "Company Formation", "Annual Accounts", "Business Advisory",
              "HMRC Compliance", "Xero", "QuickBooks", "Sage", "IR35", "SME Accounting",
              "Contractor Accounting"
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "0"
            },
            paymentAccepted: "Bank Transfer, Card, PayPal",
            currenciesAccepted: "GBP",
            slogan: "Construction Accounting Built for Contractors, Trades & Developers"
          }}
        />
        
        {/* Organization Schema */}
        <OrganizationSchema
          name="File Easy Accountancy"
          description="Construction accounting specialists for UK contractors, trades, and developers. CIS-compliant bookkeeping, project-based accounting, and HMRC compliance."
          url="https://fileeasyaccountancy.co.uk"
          logo="https://fileeasyaccountancy.co.uk/brand/logo-fileeasy.png"
          address={{
            streetAddress: "43 Castle Avenue",
            addressLocality: "Rochester",
            addressRegion: "Kent",
            postalCode: "ME1 2DU",
            addressCountry: "GB"
          }}
          telephone="+447894447435"
          email="info@fileeasyaccountancy.co.uk"
          sameAs={[
            'https://www.linkedin.com/company/fileeasy-accountancy',
            'https://www.google.com/maps?cid=0x47d8cd14844b6e53:0x4d94bad817be51bb'
          ]}
          additionalProperties={{
            "@id": "https://fileeasyaccountancy.co.uk/#organization",
            alternateName: "Fileeasy Accountancy"
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://fileeasyaccountancy.co.uk/#website",
              "url": "https://fileeasyaccountancy.co.uk",
              "name": "Fileeasy Accountancy",
              "description": "Construction accounting specialists serving UK and Dubai contractors, trades, and developers. CIS-compliant bookkeeping, project-based accounting, VAT compliance, and HMRC support.",
              "publisher": {
                "@id": "https://fileeasyaccountancy.co.uk/#organization"
              },
              "inLanguage": "en-GB",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://fileeasyaccountancy.co.uk/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <Header />
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileCTABar />
        <Analytics />
        
        {/* Web3Forms client script */}
        <script src="https://web3forms.com/client/script.js" async defer></script>
        
        {/* Web3Forms inline JS handler */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form.js-web3form');

  forms.forEach((form) => {
    // Where to show messages; if not present, JS will create one after submit
    let resultEl = form.querySelector('[data-web3forms-result]');

    form.addEventListener('submit', async (e) => {
      // If the form has no action to Web3Forms, skip
      if (!form.action || !form.action.includes('web3forms')) return;

      // Intercept to do AJAX submit; remove this block to use plain POST + redirect
      e.preventDefault();

      // Ensure we show messages
      if (!resultEl) {
        resultEl = document.createElement('p');
        resultEl.setAttribute('data-web3forms-result','');
        resultEl.style.marginTop = '0.75rem';
        form.appendChild(resultEl);
      }

      // Optional: ensure replyto if email input name ≠ "email"
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.name !== 'email') {
        let replyto = form.querySelector('input[name="replyto"]');
        if (!replyto) {
          replyto = document.createElement('input');
          replyto.type = 'hidden';
          replyto.name = 'replyto';
          form.appendChild(replyto);
        }
        replyto.value = emailInput.value;
      }

      // hCaptcha check (if present)
      const hasHCaptcha = !!form.querySelector('.h-captcha');
      const captchaToken = form.querySelector('textarea[name="h-captcha-response"]');
      if (hasHCaptcha && (!captchaToken || !captchaToken.value)) {
        resultEl.textContent = 'Please complete the captcha.';
        resultEl.style.color = '#DC2626';
        return;
      }

      // Honeypot check
      const botcheck = form.querySelector('[name="botcheck"]');
      if (botcheck && (botcheck.checked || botcheck.value)) {
        resultEl.textContent = 'Bot detected.';
        resultEl.style.color = '#DC2626';
        return;
      }

      // Collect and send JSON payload
      const formData = new FormData(form);
      const payload = JSON.stringify(Object.fromEntries(formData));

      resultEl.textContent = 'Sending…';
      resultEl.style.color = '#64748B';

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: payload
        });
        const data = await res.json();

        if (res.status === 200 && data && (data.success || data.message)) {
          resultEl.textContent = (data.body && data.body.message) || data.message || 'Message sent successfully.';
          resultEl.style.color = '#16A34A';
          form.reset();

          // Emit success event for inline success UI
          const msg = (data?.body?.message) || data?.message || 'Message sent successfully.';
          document.dispatchEvent(new CustomEvent('web3forms:success', {
            detail: { form, message: msg }
          }));

          // Handle redirect if specified in form
          const redirectInput = form.querySelector('input[name="redirect"]');
          if (redirectInput && redirectInput.value) {
            setTimeout(() => {
              window.location.href = redirectInput.value;
            }, 500);
          }
        } else {
          resultEl.textContent = (data.body && data.body.message) || data.message || 'Sorry, something went wrong.';
          resultEl.style.color = '#DC2626';
        }
      } catch (err) {
        resultEl.textContent = 'Network error. Please try again.';
        resultEl.style.color = '#DC2626';
      }
    });
  });
});
            `
          }}
        />
        
        {/* INLINE SUCCESS UI — Helper (site-wide) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
// INLINE SUCCESS UI — Helper (site-wide)
// Requires: Web3Forms submission JS already intercepts <form.js-web3form> submit.
// Listens for a custom event to render success UI without changing layout.

(function () {
  function mountInlineSuccess(form, messageText) {
    const msg = messageText || 'Thanks — your message has been sent!';

    // Wrapper card
    const wrapper = document.createElement('div');
    wrapper.setAttribute('role', 'status');
    wrapper.setAttribute('aria-live', 'polite');
    wrapper.style.background = '#F0FDF4';
    wrapper.style.border = '1px solid #86EFAC';
    wrapper.style.borderRadius = '12px';
    wrapper.style.padding = '20px';
    wrapper.style.marginTop = '12px';

    // Title (focus target)
    const h = document.createElement('h2');
    h.textContent = 'Message sent';
    h.id = 'success-title';
    h.tabIndex = -1; // ensure focusable for screen readers
    h.style.margin = '0 0 8px 0';
    h.style.fontSize = '1.125rem';
    h.style.color = '#14532D';

    // Body
    const p = document.createElement('p');
    p.textContent = msg;
    p.style.margin = '0 0 16px 0';
    p.style.color = '#14532D';

    // Back to Home
    const btn = document.createElement('a');
    btn.href = '/';
    btn.textContent = 'Back to Home';
    btn.style.display = 'inline-block';
    btn.style.padding = '10px 16px';
    btn.style.borderRadius = '8px';
    btn.style.textDecoration = 'none';
    btn.style.border = '1px solid #14532D';
    btn.style.color = '#14532D';
    btn.style.background = 'transparent';
    btn.style.fontWeight = '600';

    wrapper.appendChild(h);
    wrapper.appendChild(p);
    wrapper.appendChild(btn);

    // Replace the form with the success card while avoiding layout jump
    const container = form.parentElement;
    const lockHeight = container.getBoundingClientRect().height;
    container.style.minHeight = lockHeight + 'px';

    form.replaceWith(wrapper);

    // Move focus to the heading for accessibility
    setTimeout(() => { document.getElementById('success-title')?.focus?.(); }, 50);
  }

  // Listen for success events emitted by the Web3Forms handler
  document.addEventListener('web3forms:success', (e) => {
    const detail = e.detail || {};
    if (detail.form) {
      mountInlineSuccess(detail.form, detail.message);
    }
  });
})();
            `
          }}
        />
      </body>
    </html>
  );
}
