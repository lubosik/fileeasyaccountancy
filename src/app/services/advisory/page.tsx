import { Metadata } from 'next';
import CategoryPageContent from '@/components/CategoryPageContent';

export const metadata: Metadata = {
  title: 'Business Advisory Services | Financial Planning & Growth Strategy | Kent | File Easy Accountancy',
  description: 'Expert business advisory services in Kent. Financial health checks, growth strategy, profitability improvement, and HMRC enquiry support. Strategic accounting advice.',
  keywords: 'business advisory Kent, financial planning Kent, growth strategy, profitability improvement, HMRC enquiry support',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/advisory/',
  },
};

export default function AdvisoryPage() {
  return (
    <CategoryPageContent
      category="advisory"
      categoryDisplayName="Advisory"
      description="Expert business advisory services in Kent. Financial health checks, growth strategy, profitability improvement, and HMRC enquiry support. Strategic accounting advice."
    />
  );
}

