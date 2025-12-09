import { Metadata } from 'next';
import CategoryPageContent from '@/components/CategoryPageContent';

export const metadata: Metadata = {
  title: 'VAT Services | Registration & Returns | Making Tax Digital | Kent | File Easy Accountancy',
  description: 'Complete VAT services in Kent. VAT registration, quarterly returns, Making Tax Digital compliance, and VAT planning. Expert VAT accountants in Rochester.',
  keywords: 'VAT services Kent, VAT registration Rochester, Making Tax Digital, VAT returns Kent, VAT compliance, Flat Rate Scheme',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/vat/',
  },
};

export default function VATPage() {
  return (
    <CategoryPageContent
      category="vat"
      categoryDisplayName="VAT"
      description="Complete VAT services in Kent. VAT registration, quarterly returns, Making Tax Digital compliance, and VAT planning. Expert VAT accountants in Rochester."
    />
  );
}
