import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Star, Hammer, Building2, Users, Shield, TrendingUp } from 'lucide-react';
import { FAQPageSchema, BreadcrumbSchema, LocalBusinessSchema } from '@/lib/schema';
import Testimonial from '@/components/ui/Testimonial';
import TeamMemberCard from '@/components/ui/TeamMemberCard';

export const metadata: Metadata = {
  title: 'Construction Accountants - CIS • VAT • Project Accounting | Fileeasy Accountancy',
  description: 'Construction Accountants Who Understand CIS, Retentions & Project Margins. CIS-compliant bookkeeping, real-time project costing, and cash flow management for UK construction businesses. We handle retentions, VAT reverse charge, and HMRC compliance so you can focus on building.',
  alternates: {
    canonical: '/',
  },
};

// Quote flow URL
const QUOTE_URL = '/quote/?source=homepage';

export default function Home() {
  // Construction-specific FAQs for schema
  const constructionFAQs = [
    {
      question: "What is CIS (Construction Industry Scheme)?",
      answer: "CIS is a UK tax scheme where contractors deduct money from subcontractor payments (20% for registered, 30% for unregistered) and pass it to HMRC. We handle monthly CIS returns, deduction statements, and HMRC record-keeping for construction businesses."
    },
    {
      question: "How do you handle retentions in construction accounting?",
      answer: "Retentions are amounts held back (typically 5-10%) until project completion. We track retentions separately, ensure you're paid what you're owed when due, and manage the cash flow impact of held-back funds on your working capital."
    },
    {
      question: "What is project-based accounting?",
      answer: "Project-based accounting tracks profitability by individual job, not just overall business performance. We provide real-time job costing that shows which projects are making money and which are losing it, helping you make better pricing and resource decisions."
    },
    {
      question: "How do you handle VAT reverse charge for construction?",
      answer: "VAT reverse charge shifts VAT liability from supplier to recipient. We handle the complex accounting for VAT on subcontractor invoices, ensure correct treatment, and help you avoid cash flow issues and HMRC penalties."
    },
    {
      question: "Do you provide cash flow forecasting for construction businesses?",
      answer: "Yes. We provide cash flow forecasting that predicts gaps before they become crises, accounting for delayed payments, retentions, and material cost volatility. This helps you manage working capital and avoid cash flow problems."
    },
    {
      question: "What construction accounting software do you use?",
      answer: "We use Xero, QuickBooks, and Sage—all MTD-compliant cloud accounting platforms. We provide real-time project costing, CIS compliance tracking, and cash flow management tools designed specifically for construction businesses."
    }
  ];

  return (
    <div className="fe-yellow-accent">
      {/* Schema markup for SEO */}
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
          name: 'Medway, Kent',
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
            "Construction Accounting", "CIS Compliance", "Project-Based Accounting", "VAT Reverse Charge",
            "Construction Industry Scheme", "Retentions", "Project Margins", "Job Costing",
            "Construction Cash Flow", "HMRC Compliance", "Making Tax Digital", "Xero", "QuickBooks", "Sage"
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
      <FAQPageSchema faqs={constructionFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://fileeasyaccountancy.co.uk/' }
        ]}
      />

      {/* Section 1: Hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image - Behind text */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1628900941064-ba8df8b51e4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Construction accounting blueprint"
            fill
            className="object-cover"
            style={{ mixBlendMode: 'overlay' }}
            priority
            unoptimized
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Construction Accountants Who Understand CIS, Retentions & Project Margins
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              CIS-compliant bookkeeping, real-time project costing, and cash flow management for UK construction businesses. We handle retentions, VAT reverse charge, and HMRC compliance so you can focus on building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/construction-packages"
                className="bg-cta-bg text-cta-text px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cta-bg/90 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>See How it Works</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#book-call"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Free Cash Flow Health Check Tool */}
      <section className="py-16 bg-gradient-to-br from-cta-bg/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Free Cash Flow Health Check
            </h2>
            <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
              Find out when your cash will run out, discover trapped cash (retentions, CIS over-withheld), and identify payment gaps. Get your personalized cash flow report in 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/tools/cash-flow-health-check"
                className="bg-cta-bg text-cta-text px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cta-bg/90 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Get My Free Cash Flow Report</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/quote/?source=homepage"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Built for Construction */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Built for Construction
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                Construction accounting is different. We understand your world: CIS deductions, retentions, project margins, delayed payments, and HMRC compliance. No jargon, just results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-raised p-6 rounded-lg text-center">
                <Hammer className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">CIS Compliance</h3>
                <p className="text-secondary text-sm">
                  Monthly CIS returns, deduction statements, and HMRC record-keeping. We handle the complexity so you don't have to.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Project Profitability</h3>
                <p className="text-secondary text-sm">
                  Real-time job costing that shows which projects are making money and which are losing it.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg text-center">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Retention Management</h3>
                <p className="text-secondary text-sm">
                  Track retentions, ensure you're paid what you're owed, and manage the cash flow impact.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">HMRC Support</h3>
                <p className="text-secondary text-sm">
                  We prepare your records and handle enquiries so you stay compliant and avoid penalties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 3-Tier Packages Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Construction Accounting Packages
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                From sole traders to developers—we provide construction accounting that keeps you compliant, profitable, and in control.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-raised p-8 rounded-lg border-2 border-muted">
                <h3 className="text-2xl font-bold text-primary mb-4">Silver</h3>
                <p className="text-secondary mb-6">
                  Essential construction accounting for small contractors and trades.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">CIS-compliant bookkeeping</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">Monthly project costing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">VAT returns</span>
                  </li>
                </ul>
                <Link
                  href="/construction-packages"
                  className="block text-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  View Silver Package
                </Link>
              </div>
              <div className="bg-raised p-8 rounded-lg border-2 border-cta-bg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cta-bg text-cta-text px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Gold</h3>
                <p className="text-secondary mb-6">
                  Complete construction accounting for growing contractors and developers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">Everything in Silver</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">Real-time project profitability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">Cash flow forecasting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">HMRC audit support</span>
                  </li>
                </ul>
                <Link
                  href="/construction-packages"
                  className="block text-center bg-cta-bg text-cta-text px-6 py-3 rounded-lg font-semibold hover:bg-cta-bg/90 transition-colors"
                >
                  View Gold Package
                </Link>
              </div>
              <div className="bg-raised p-8 rounded-lg border-2 border-muted">
                <h3 className="text-2xl font-bold text-primary mb-4">Platinum</h3>
                <p className="text-secondary mb-6">
                  Premium construction accounting for established developers and large contractors.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">Everything in Gold</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">Strategic business advisory</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary">Priority support</span>
                  </li>
                </ul>
                <Link
                  href="/construction-packages"
                  className="block text-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  View Platinum Package
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/construction-packages"
                className="text-primary hover:underline font-semibold inline-flex items-center space-x-2"
              >
                <span>Compare all packages</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose File Easy for Construction Accounting?
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                Construction accounting expertise—we understand your world, not just general accounting.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Construction-Specific Expertise</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  We specialize in construction accounting: CIS, retentions, project margins, and cash flow. We're construction accountants, not generalists.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Real-Time Project Profitability</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  See which jobs are making money and which are losing it. Real-time job costing that helps you make better pricing decisions.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">CIS-Compliant Bookkeeping</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  We handle monthly CIS returns, deduction statements, and HMRC record-keeping. No compliance headaches, just results.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Cash Flow Forecasting</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Predict gaps before they become crises. We account for delayed payments, retentions, and material cost volatility.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">HMRC Audit Support</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  We prepare your records and handle enquiries so you stay compliant and avoid penalties. Peace of mind, guaranteed.
                </p>
              </div>
              <div className="bg-raised p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">No Jargon, Just Results</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  We speak your language. No accounting jargon, just clear communication that helps you understand your numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Meet the Founders */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Meet the Founders
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                Experienced construction accounting professionals dedicated to simplifying your financial journey.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TeamMemberCard
                name="Zara Kongwa"
                role="Principal Accountant"
                description="A seasoned accountant with over 20 years of experience in helping construction businesses navigate complex financial landscapes. Zara specializes in CIS compliance, VAT reverse charge, and construction cash flow management."
                photoUrl="/zara-kongwa.jpg"
                email="info@fileeasyaccountancy.co.uk"
                linkedinUrl="https://linkedin.com/in/zara-kongwa"
                isMan={false}
              />
              <TeamMemberCard
                name="Lucy Whitmore"
                role="Junior Accountant"
                description="Lucy supports construction contractors across Medway with CIS-compliant bookkeeping, project costing, and VAT returns. She's detail-driven, Xero-confident, and focused on fast, accurate filings."
                photoUrl="/img/team/lucy-whitmore.webp"
                email="lucy@fileeasyaccountancy.co.uk"
                isMan={false}
                altText="Lucy Whitmore — Junior Accountant at Fileeasy Accountancy, Medway."
              />
              <TeamMemberCard
                name="Ben Harrington"
                role="Junior Management Accountant"
                description="Ben helps construction businesses make sense of monthly numbers—project profitability, cash flow forecasting, and KPI tracking that flags what matters for contractors and developers."
                photoUrl="/img/team/ben-harrington.webp"
                email="ben@fileeasyaccountancy.co.uk"
                isMan={true}
                altText="Ben Harrington — Junior Management Accountant at Fileeasy Accountancy, Medway."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What Our Construction Clients Say
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                Construction businesses trust us with their accounting—from sole traders to developers.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Testimonial
                name="James Mitchell"
                company="Mitchell Construction Ltd"
                role="Director"
                content="File Easy Accountancy transformed our construction accounting in Medway. Their CIS-compliant bookkeeping and project profitability tracking helped us identify which jobs were actually profitable. The real-time job costing saved us thousands by catching overruns early. As a contractor in Kent, having accountants who understand construction industry schemes and VAT reverse charge is invaluable."
                rating={5}
              />
              <Testimonial
                name="Sarah Thompson"
                company="Thompson Builders"
                role="Sole Trader"
                content="Switching to File Easy Accountancy in Rochester was the best decision for my construction business. They handle all my CIS returns, VAT returns, and HMRC compliance without any stress. The cash flow forecasting they provide helps me manage retentions and delayed payments. Their construction accounting expertise in Medway and Kent is unmatched—highly recommend for any trades or contractors."
                rating={5}
              />
              <Testimonial
                name="David Chen"
                company="Chen Developments"
                role="Managing Director"
                content="As a property developer in Chatham, Kent, we needed construction accountants who understand project-based accounting and retention management. File Easy Accountancy delivers exactly that. Their team handles our complex construction accounting, ensures HMRC compliance, and provides strategic advice that's helped us scale. The best construction accounting service in Medway—professional, knowledgeable, and results-driven."
                rating={5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Book a Call CTA */}
      <section id="book-call" className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Book a free 30-minute construction accounting consultation. We'll discuss your needs, answer your questions, and show you how we can help your construction business stay compliant and profitable.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Free Consultation</h3>
                      <p className="text-white/80 text-sm">No obligation, just expert advice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Construction Expertise</h3>
                      <p className="text-white/80 text-sm">Specialist knowledge in CIS, retentions, and project accounting</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Clear Next Steps</h3>
                      <p className="text-white/80 text-sm">We'll outline exactly how we can help your business</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href={QUOTE_URL}
                    className="bg-cta-bg text-cta-text px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cta-bg/90 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Book Your Free Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-center text-muted-foreground">
                  <p>Start your quote to get a personalized consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Footer - Already exists in layout.tsx */}
      {/* Section 9: SEO & Metadata - Already handled above */}
    </div>
  );
}
