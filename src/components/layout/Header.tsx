'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Free Tools', 
      href: '#',
      submenu: [
        { name: 'Cash Flow Health Check', href: '/tools/cash-flow-health-check' },
        { name: 'IR35 Calculator', href: '/ir35-calculator' },
      ]
    },
    { name: 'Pricing', href: '/construction-packages' },
    { name: 'Resources', href: '/resources' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <Link
                href="tel:+447894447435"
                className="flex items-center space-x-1 hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>+44 7894 447435</span>
              </Link>
              <Link
                href="https://wa.me/447894447435"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <span>Construction Accountants • CIS • VAT • Project Accounting</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/brand/logo-fileeasy.png" 
              alt="File Easy Accountancy" 
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/resume"
              className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
            >
              Resume your quote
            </Link>
            {navigation.map((item) => (
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <span className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer">
                    {item.name}
                  </span>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-muted opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-8 lg:ml-8">
            <Link
              href="/quote/?source=header"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'fe_quote_start_cta', {
                    source: 'header',
                    event_category: 'Quote',
                    event_label: 'Schedule a Call'
                  });
                }
              }}
            >
              Schedule a Call
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/resume"
                className="text-primary hover:text-primary/80 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume your quote
              </Link>
              {navigation.map((item) => (
                item.submenu ? (
                  <div key={item.name} className="space-y-2">
                    <div className="text-foreground font-medium py-2">{item.name}</div>
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="text-foreground hover:text-primary transition-colors font-medium py-2 pl-4 block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}