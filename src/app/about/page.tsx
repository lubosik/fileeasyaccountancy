import { Metadata } from 'next';
import PageIntro from '@/components/ui/PageIntro';
import Section from '@/components/ui/Section';
import AboutSection from '@/components/ui/AboutSection';
import TeamMemberCard from '@/components/ui/TeamMemberCard';
import { Building2, Target, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About File Easy Accountancy | UK & Dubai Accountants',
  description: 'Learn about File Easy Accountancy, trusted accounting firm serving businesses across the UK and Dubai, UAE. Discover our story, mission, and meet our experienced team.',
  keywords: 'about accountants UK, Dubai accounting firm, UK accounting team, Zara Kongwa accountant, international accounting services, London accountants, Kent accountants',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Client-First Approach',
      description: 'We always put our clients\' needs first, providing personalized solutions that fit each business perfectly.'
    },
    {
      icon: Building2,
      title: 'International Presence',
      description: 'Serving businesses across the UK and Dubai, UAE with offices in Kent, London, and Dubai for local expertise and international reach.'
    },
    {
      icon: Users,
      title: 'SME Specialists',
      description: 'Dedicated focus on small and medium enterprises, understanding their unique challenges and opportunities.'
    },
    {
      icon: Award,
      title: 'Tech-Enabled Solutions',
      description: 'Modern tools and processes for efficient, accurate accounting that keeps you ahead of the curve.'
    }
  ];

  return (
    <>
      <PageIntro
        title="About File Easy Accountancy"
        subtitle="Your trusted UK & Dubai accounting partner"
        description="Discover our story, values, and meet our experienced team dedicated to simplifying your financial journey with expert guidance and modern solutions across the UK and Dubai."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]}
        background="gradient"
      />

      {/* About Section */}
      <AboutSection />

      <Section padding="xl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Our Values Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  These principles guide everything we do, ensuring we deliver exceptional value and build lasting relationships with our clients.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className=" rounded-lg p-6 border border-primary/10 text-center hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F8F8F5' }}>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Meet Our Team Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Experienced professionals dedicated to simplifying your accounting journey with expert guidance and modern solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Zara Kongwa */}
                <TeamMemberCard
                  name="Zara Kongwa"
                  role="Principal Accountant"
                  description="A seasoned accountant with over 20 years of experience in helping SMEs navigate complex financial landscapes. Zara specializes in VAT, IR35 compliance, and business growth strategy. She brings deep knowledge of Kent's business community and modern accounting solutions to every client relationship."
                  photoUrl="/zara-kongwa.jpg"
                  email="info@fileeasyaccountancy.co.uk"
                  linkedinUrl="https://linkedin.com/in/zara-kongwa"
                  isMan={false}
                />

                {/* Lucy Whitmore */}
                <TeamMemberCard
                  name="Lucy Whitmore"
                  role="Junior Accountant"
                  description="Lucy supports owner-managed businesses across Medway with day-to-day bookkeeping, VAT returns and self-assessment prep. She's detail-driven, Xero-confident, and focused on fast, accurate filings so clients can get back to running their business."
                  photoUrl="/img/team/lucy-whitmore.webp"
                  email="lucy@fileeasyaccountancy.co.uk"
                  isMan={false}
                  altText="Lucy Whitmore — Junior Accountant at Fileeasy Accountancy, Medway."
                />

                {/* Ben Harrington */}
                <TeamMemberCard
                  name="Ben Harrington"
                  role="Junior Management Accountant (SME Advisory)"
                  description="Ben helps SMEs make sense of monthly numbers—management accounts, KPI tracking and simple dashboards that flag what matters. He partners with our senior team to turn data into decisions that improve cash flow and profitability."
                  photoUrl="/img/team/ben-harrington.webp"
                  email="ben@fileeasyaccountancy.co.uk"
                  isMan={true}
                  altText="Ben Harrington — Junior Management Accountant at Fileeasy Accountancy, Medway."
                />
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gradient-to-br from-primary/5 to-brand-secondary/10 rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose File Easy?</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We combine traditional accounting expertise with modern technology to deliver exceptional value to businesses across the UK and Dubai.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+ Years</div>
                  <div className="text-sm text-muted-foreground">Combined accounting experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">127+</div>
                  <div className="text-sm text-muted-foreground">Happy businesses served across UK & Dubai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Average client satisfaction rating</div>
                </div>


              </div>

              <div className="text-center mt-8">
                <a
                  href="/contact"
                  className="cta-button inline-flex items-center space-x-2 px-8 py-3"
                >
                  <span>Get Started Today</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
