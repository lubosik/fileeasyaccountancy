import { Metadata } from 'next';
import CategoryPageContent from '@/components/CategoryPageContent';

export const metadata: Metadata = {
  title: 'Professional Bookkeeping Services | Kent & Rochester | File Easy Accountancy',
  description: 'Expert bookkeeping services for Kent businesses. Monthly financial records, Xero setup, VAT preparation, and Making Tax Digital compliance. Free consultation.',
  keywords: 'bookkeeping Kent, bookkeeping Rochester, Xero bookkeeping, small business accounting, monthly bookkeeping, Making Tax Digital',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/bookkeeping/',
  },
};

export default function BookkeepingPage() {
  return (
    <CategoryPageContent
      category="bookkeeping"
      categoryDisplayName="Bookkeeping"
      description="From monthly record-keeping to Making Tax Digital compliance, we keep your books accurate, compliant, and tax-ready. Serving SMEs across Rochester, Maidstone, and Canterbury."
    />
  );
}