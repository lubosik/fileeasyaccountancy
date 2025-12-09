export interface ProgrammaticPageData {
  slug: string;
  title: string;
  primary_kw: string;
  secondary_kws: string[];
  city: string;
  county: string;
  audience: string;
  problem: string;
  solution: string;
  price_note: string;
  cta_text: string;
  internal_links: string[];
  last_updated: string;
  tldr: string[];
  what_it_is: {
    title: string;
    content: string;
    industry_notes: string[];
  };
  checklist: Array<{
    step: number;
    title: string;
    description: string;
    action: string;
  }>;
  pricing_timeframes: {
    [key: string]: string;
    timeframe: string;
    note: string;
  };
  local_proof: {
    title: string;
    stats: string;
    tech_stack: string[];
    areas_served: string[];
  };
  faq: Array<{
    q: string;
    a: string;
  }>;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}