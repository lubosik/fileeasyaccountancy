import { Metadata } from 'next';
import { LeadStoreProvider } from '@/lib/leadStore';

export const metadata: Metadata = {
  title: 'Get Your Custom Quote | File Easy Accountancy',
  description: 'Get a personalized quote for accounting services. Answer a few quick questions and receive your custom pricing.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LeadStoreProvider>
      {children}
    </LeadStoreProvider>
  );
}

