// Pricing logic based on turnover band

import { PackageType } from '../types';

export interface PackagePricing {
  silver: { min: number; max: number };
  gold: { min: number; max: number };
  platinum: { min: number; max: number };
}

// Pricing ranges by turnover band
export const pricingByTurnover: Record<string, PackagePricing> = {
  'under-250k': {
    silver: { min: 150, max: 250 },
    gold: { min: 275, max: 450 },
    platinum: { min: 495, max: 750 }
  },
  '250k-1m': {
    silver: { min: 250, max: 350 },
    gold: { min: 450, max: 600 },
    platinum: { min: 750, max: 1000 }
  },
  '1m-5m': {
    silver: { min: 350, max: 450 },
    gold: { min: 600, max: 750 },
    platinum: { min: 1000, max: 1300 }
  },
  'over-5m': {
    silver: { min: 450, max: 495 },
    gold: { min: 750, max: 795 },
    platinum: { min: 1300, max: 1495 }
  }
};

/**
 * Get pricing for a specific package based on turnover band
 */
export function getPackagePrice(turnoverBand: string, packageType: PackageType): { min: number; max: number } {
  const pricing = pricingByTurnover[turnoverBand] || pricingByTurnover['under-250k'];
  return pricing[packageType];
}

/**
 * Format price range for display
 */
export function formatPriceRange(min: number, max: number): string {
  if (min === max) {
    return `£${min}/month`;
  }
  return `£${min}–£${max}/month`;
}

/**
 * Get 3 short benefits for each package (for pricing page)
 */
export function getPackageBenefits(packageType: PackageType): string[] {
  const benefits: Record<PackageType, string[]> = {
    silver: [
      'Stay compliant & avoid penalties',
      'Monthly bookkeeping & VAT returns',
      'Self Assessment support included'
    ],
    gold: [
      'Save tax & keep more profit',
      'Tax planning & annual budget',
      'Monthly management accounts'
    ],
    platinum: [
      'Virtual Finance Director support',
      'Dedicated account manager',
      'Strategic business advisory'
    ]
  };
  return benefits[packageType];
}

/**
 * Calculate annual price with 5% discount
 */
export function calculateAnnualPrice(monthlyPrice: number): number {
  return Math.round(monthlyPrice * 12 * 0.95);
}

/**
 * Format annual price for display
 */
export function formatAnnualPrice(annualPrice: number): string {
  return `£${annualPrice.toLocaleString()}`;
}

