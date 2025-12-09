import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">File Easy Accountancy</h3>
            <p className="text-sm text-muted-foreground">
              Construction accounting specialists for UK and Dubai contractors, trades, and developers. CIS-compliant bookkeeping, project-based accounting, and cash flow management.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <strong>Phone:</strong>{' '}
                <a href="tel:+447894447435" className="text-primary hover:underline">+44 7894 447435</a>
              </p>
              <p className="text-muted-foreground">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@fileeasyaccountancy.co.uk" className="text-primary hover:underline">info@fileeasyaccountancy.co.uk</a>
              </p>
              <p className="text-muted-foreground">
                <strong>Address:</strong><br />
                43 Castle Avenue<br />
                Rochester, Kent ME1 2DU<br />
                United Kingdom
              </p>
            </div>
            <div className="flex space-x-4">
              {/* Add social media icons here if needed */}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/bookkeeping" className="text-muted-foreground hover:text-primary transition-colors">
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services/tax-returns" className="text-muted-foreground hover:text-primary transition-colors">
                  Tax Returns
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  VAT Returns
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Business Advisory
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Company Formation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/construction-packages" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  How We Help
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Free Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/campaigns/self-assessment-rescue" className="text-muted-foreground hover:text-primary transition-colors">
                  Self-Assessment Tax Calculator
                </Link>
              </li>
              <li>
                <Link href="/campaigns/profit-optimization-blueprint" className="text-muted-foreground hover:text-primary transition-colors">
                  Tax Optimization Review
                </Link>
              </li>
              <li>
                <Link href="/campaigns/vat-bookkeeping-audit" className="text-muted-foreground hover:text-primary transition-colors">
                  VAT Audit
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} File Easy Accountancy. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <span>Registered in England & Wales</span>
              <span>•</span>
              <span>Company Number: 16794879</span>
              <span>•</span>
              <span>Construction Accounting Specialists</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 pt-4 border-t">
            <a 
              href="https://ico.org.uk/ESDWebPages/Entry/ZC030782" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <span>ICO Registration: ZC030782</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}