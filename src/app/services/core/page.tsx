import { Metadata } from 'next';
import CategoryPageContent from '@/components/CategoryPageContent';

export const metadata: Metadata = {
  title: 'Core Accounting Services | VAT, Payroll & Company Formation | Kent | File Easy Accountancy',
  description: 'Essential accounting services for Kent businesses. VAT returns, payroll, company formation, and compliance services. Expert support for SMEs.',
  keywords: 'core accounting services Kent, VAT returns, payroll services, company formation Kent, accounting compliance',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/core/',
  },
};

export default function CorePage() {
  return (
    <CategoryPageContent
      category="core"
      categoryDisplayName="Core"
      description="Essential accounting services for Kent businesses. VAT returns, payroll, company formation, and compliance services. Expert support for SMEs."
    />
  );
}

