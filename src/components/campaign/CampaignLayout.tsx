import { ReactNode } from 'react';

interface CampaignLayoutProps {
  children: ReactNode;
}

// Note: CampaignLayout doesn't include Header/Footer because root layout already provides them
// This component just provides styling for campaign pages
export default function CampaignLayout({ children }: CampaignLayoutProps) {
  return (
    <div className="min-h-screen bg-page">
      {children}
    </div>
  );
}

