import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactStripProps {
  title?: string;
  showTitle?: boolean;
  className?: string;
}

export default function ContactStrip({
  title = 'Get in Touch Today',
  showTitle = true,
  className = ''
}: ContactStripProps) {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+44 7894 447435',
      href: 'tel:+447894447435',
      description: 'Speak to an expert'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'info@fileeasyaccountancy.co.uk',
      href: 'mailto:info@fileeasyaccountancy.co.uk',
      description: 'Get a quick response'
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Rochester, Kent ME1 2DU',
      href: '/contact',
      description: 'Find our office'
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Mon-Fri: 9AM-5:30PM',
      href: '/contact',
      description: 'When we&apos;re available'
    }
  ];

  return (
    <section className={`py-12 bg-primary text-primary-foreground ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            <p className="text-primary-foreground/90">
              Ready to simplify your accounting? We&apos;re here to help.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="group flex flex-col items-center text-center p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 bg-primary-foreground/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-sm mb-2 font-medium">{item.value}</p>
                <p className="text-xs text-primary-foreground/80">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block text-primary px-8 py-3 rounded-md font-semibold transition-colors hover:opacity-90" style={{ backgroundColor: '#F8F8F5' }}
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}