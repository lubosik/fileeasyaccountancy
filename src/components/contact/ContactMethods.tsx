'use client';

import { Phone, Mail, Calendar, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us Now',
    subtitle: 'Speak to an expert immediately',
    action: 'tel:+447894447435',
    actionText: '+44 7894 447435',
    description: 'Mon-Fri 9AM-5:30PM, Sat 9AM-1PM'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Us',
    subtitle: 'Quick questions and instant replies',
    action: 'https://wa.me/447894447435?text=Hi, I need help with my accounting.',
    actionText: 'Start WhatsApp Chat',
    description: 'Usually reply within 15 minutes'
  },
  {
    icon: Mail,
    title: 'Email Us',
    subtitle: 'Detailed enquiries welcome',
    action: 'mailto:info@fileeasyaccountancy.co.uk',
    actionText: 'info@fileeasy...',
    description: 'We reply within 4 hours'
  },
  {
    icon: Calendar,
    title: 'Book a Meeting',
    subtitle: 'Free 30-minute consultation',
    action: '#booking',
    actionText: 'Schedule Now',
    description: 'Available slots shown below'
  }
];

export default function ContactMethods() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {contactMethods.map((method, index) => {
        const Icon = method.icon;
        const isExternal = method.action.startsWith('http');
        const trackingProps = {
          onClick: () => {
            if (typeof window !== 'undefined' && window.va) {
              if (method.action.startsWith('tel:')) {
                window.va.track('Click to Call', { location: 'contact_page' });
              } else if (method.action.includes('whatsapp') || method.action.includes('wa.me')) {
                window.va.track('WhatsApp Click', { location: 'contact_page' });
              } else if (method.action.startsWith('mailto:')) {
                window.va.track('Email Click', { location: 'contact_page' });
              }
            }
          }
        };

        if (method.action === '#booking') {
          return (
            <div key={index} className=" border rounded-lg p-6 text-center hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F8F8F5' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{method.subtitle}</p>
              <a
                href="#booking"
                className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => window.va?.track('Book Meeting Click', { location: 'contact_page' })}
              >
                {method.actionText}
              </a>
              <p className="text-xs text-muted-foreground mt-2">{method.description}</p>
            </div>
          );
        }

        return (
          <div key={index} className=" border rounded-lg p-6 text-center hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F8F8F5' }}>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{method.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{method.subtitle}</p>
            <a
              href={method.action}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              {...trackingProps}
            >
              {method.actionText}
            </a>
            <p className="text-xs text-muted-foreground mt-2">{method.description}</p>
          </div>
        );
      })}
    </div>
  );
}