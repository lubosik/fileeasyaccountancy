import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Construction Cash Flow Calculator UK | Cash Flow Health Check Tool | File Easy',
  description: 'Free construction cash flow calculator for UK contractors. Calculate when your cash will run out, discover trapped cash (retentions, CIS over-withheld), and identify payment gaps. Get your personalized cash flow forecast in 2 minutes. 100% free, no credit card required.',
  keywords: 'construction cash flow calculator, free cash flow calculator UK, construction cash flow forecast, cash flow health check tool, contractor cash flow calculator UK, construction cash flow analysis, UK cash flow calculator for contractors, building cash flow estimator, cash flow management tool construction',
  alternates: {
    canonical: '/tools/cash-flow-health-check',
  },
  openGraph: {
    title: 'Free Construction Cash Flow Calculator UK | Cash Flow Health Check Tool | File Easy',
    description: 'Free construction cash flow calculator for UK contractors. Calculate when your cash will run out, discover trapped cash, and identify payment gaps. Get your personalized cash flow forecast in 2 minutes.',
    url: 'https://fileeasyaccountancy.co.uk/tools/cash-flow-health-check',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Construction Cash Flow Calculator UK | File Easy',
    description: 'Free construction cash flow calculator for UK contractors. Calculate when your cash will run out, discover trapped cash, and identify payment gaps.',
  },
};

export default function CashFlowHealthCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

