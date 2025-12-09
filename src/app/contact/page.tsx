import { Metadata } from 'next';
import Script from 'next/script';

import PageIntro from '@/components/ui/PageIntro';
import Section from '@/components/ui/Section';
import SimpleLeadForm from '@/components/forms/SimpleLeadForm';
import GoogleMapsEmbed from '@/components/ui/GoogleMapsEmbed';

export const metadata: Metadata = {
  title: 'Contact File Easy Accountancy | UK & Dubai Accountants',
  description: 'Contact File Easy Accountancy. Book a consultation, call us directly, or send a message. Expert accountants with offices in Kent, London, and Dubai serving businesses across the UK and UAE.',
  keywords: 'contact accountants UK, London accountants, Kent accountants, Dubai accounting, Rochester accounting, book consultation, accounting help',
  alternates: {
    canonical: '/contact',
  },
};


export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact File Easy Accountancy"
        subtitle="Ready to get started?"
        description="Get expert accounting help today. Call, WhatsApp, email, or book a free consultation with our team. Offices in Kent, London, and Dubai."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' }
        ]}
        background="gradient"
      />

      <Section padding="xl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Contact Form */}
              <div>
                <SimpleLeadForm
                  title="Send us a Message"
                  subtitle="Tell us what you need help with and we&apos;ll get back to you within 24 hours."
                  source="contact_page"
                />
              </div>

              {/* Booking Section */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" id="booking">Book Your Free Consultation</h2>
                  <p className="text-muted-foreground mb-6">
                    Schedule a 30-minute consultation with our accounting experts. We&apos;ll discuss your needs and show you how we can help.
                  </p>

                  {/* Calendly Embed */}
                  <div className=" rounded-lg p-4 border border-primary/20" style={{ backgroundColor: '#F8F8F5' }}>
                    <div className="calendly-inline-widget" data-url="https://calendly.com/fileeasy/consultation?hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
                    <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="mt-16 pt-12 border-t border-primary/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Our Offices</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Visit us at any of our locations across the UK and Dubai
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Kent Office */}
                <div className=" rounded-lg p-6 border border-primary/10 text-center hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F8F8F5' }}>
                  <h3 className="text-xl font-semibold text-primary mb-3">Kent Office (Rochester)</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>43 Castle Avenue</p>
                    <p>Rochester, Kent</p>
                    <p>ME1 2DU</p>
                    <p className="font-medium mt-2">United Kingdom</p>
                  </div>
                </div>

                {/* London Office */}
                <div className=" rounded-lg p-6 border border-primary/10 text-center hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F8F8F5' }}>
                  <h3 className="text-xl font-semibold text-primary mb-3">London Office</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>124 City Road</p>
                    <p>London</p>
                    <p>EC1V 2NX</p>
                    <p className="font-medium mt-2">United Kingdom</p>
                  </div>
                </div>

                {/* Dubai Office */}
                <div className=" rounded-lg p-6 border border-primary/10 text-center hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F8F8F5' }}>
                  <h3 className="text-xl font-semibold text-primary mb-3">Dubai Office</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Unit No: RET-R5-185</p>
                    <p>Jumeirah Lakes Towers</p>
                    <p>Dubai</p>
                    <p className="font-medium mt-2">United Arab Emirates</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed - GBP alignment for SEO */}
              <div className="mt-12">
                <GoogleMapsEmbed office="kent" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}