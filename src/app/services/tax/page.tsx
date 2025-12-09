import { Metadata } from 'next';
import CategoryPageContent from '@/components/CategoryPageContent';

export const metadata: Metadata = {
  title: 'Tax Returns Services | Self Assessment & Corporation Tax | Kent | File Easy Accountancy',
  description: 'Professional tax return services in Kent. Self Assessment, Corporation Tax, and tax planning for individuals and businesses. Qualified chartered accountants.',
  keywords: 'tax returns Kent, Self Assessment Rochester, Corporation Tax Kent, tax planning, HMRC compliance, chartered accountants Kent',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/tax/',
  },
};

export default function TaxPage() {
  return (
    <CategoryPageContent
      category="tax"
      categoryDisplayName="Tax"
      description="Professional tax return services in Kent. Self Assessment, Corporation Tax, and tax planning for individuals and businesses. Qualified chartered accountants."
    />
  );
}
