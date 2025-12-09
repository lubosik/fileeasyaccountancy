import { Metadata } from 'next';
import CategoryPageContent from '@/components/CategoryPageContent';

export const metadata: Metadata = {
  title: 'Payroll Services | PAYE & Auto Enrolment | Kent | File Easy Accountancy',
  description: 'Complete payroll services for Kent businesses. PAYE, Auto Enrolment pensions, RTI submissions, and payroll compliance. From £15 per employee per month.',
  keywords: 'payroll services Kent, PAYE Kent, Auto Enrolment pensions, payroll bureau Rochester, RTI submissions, payroll compliance',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/payroll/',
  },
};

export default function PayrollPage() {
  return (
    <CategoryPageContent
      category="payroll"
      categoryDisplayName="Payroll"
      description="Complete payroll services for Kent businesses. PAYE, Auto Enrolment pensions, RTI submissions, and payroll compliance. From £15 per employee per month."
    />
  );
}
