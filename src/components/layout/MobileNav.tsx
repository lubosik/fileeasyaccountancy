'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Briefcase, Phone } from 'lucide-react';

interface MobileNavProps {
  className?: string;
}

export default function MobileNav({ className = '' }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Construction Packages', href: '/construction-packages', icon: Briefcase },
    { name: 'Resources', href: '/resources', icon: Briefcase },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'About', href: '/about', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`md:hidden p-2 rounded-md hover:bg-muted transition-colors ${className}`}
        aria-label="Open mobile menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[90vw] bg-background shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-primary">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t">
            <Link
              href="/contact"
              className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>Phone:</strong> +44 7894 447435
            </p>
            <p>
              <strong>Email:</strong> info@fileeasyaccountancy.co.uk
            </p>
          </div>
        </div>
      </div>
    </>
  );
}