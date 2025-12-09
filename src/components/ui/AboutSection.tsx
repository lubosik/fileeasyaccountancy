'use client';

import Image from 'next/image';
import { Building2, Users, Target, Award } from 'lucide-react';

const aboutFeatures = [
  {
    icon: Building2,
    title: 'Local Kent Expertise',
    description: 'Deep understanding of Kent business landscape and regulations'
  },
  {
    icon: Users,
    title: 'SME Specialists',
    description: 'Dedicated focus on small and medium enterprises across the region'
  },
  {
    icon: Target,
    title: 'Tech-Enabled Solutions',
    description: 'Modern tools and processes for efficient, accurate accounting'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Combined 40+ years of experience in accounting and consulting'
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-brand-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About File Easy Accountancy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your trusted Kent accounting partner, dedicated to simplifying your financial journey 
              with expert guidance and modern solutions.
            </p>
          </div>

          {/* Main About Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Company Story */}
            <div className="space-y-6">
              <div className=" rounded-lg p-6 border border-primary/10" style={{ backgroundColor: '#F8F8F5' }}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/about-section.jpg"
                    alt="File Easy Accountancy Office"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Story</h3>
                <div className="prose prose-sm text-muted-foreground">
                  <p>
                    File Easy Accountancy was founded with a simple mission: to make accounting 
                    accessible, understandable, and stress-free for Kent businesses. We believe 
                    that every business owner deserves expert financial guidance without the jargon 
                    and complexity that often comes with traditional accounting services.
                  </p>
                  <p>
                    Based in Rochester, we serve clients across Kent with a modern approach to 
                    accounting that combines traditional expertise with cutting-edge technology. 
                    We bring decades of experience in accounting, tax, and business 
                    consulting to provide comprehensive solutions tailored to your unique needs.
                  </p>
                  <p>
                    Whether you&apos;re a freelancer just starting out, an SME looking to scale, or 
                    a contractor navigating IR35, we&apos;re here to simplify your financial journey 
                    and help you focus on what you do best – running your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">Why Choose File Easy?</h3>
              {aboutFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex space-x-4 rounded-lg p-6 border border-primary/10" style={{ backgroundColor: '#F8F8F5' }}>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
