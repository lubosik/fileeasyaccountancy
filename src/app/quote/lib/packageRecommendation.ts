// Package recommendation logic based on Step 2B answers

import { Step2BData } from '../types';

export type PackageType = 'silver' | 'gold' | 'platinum';

export interface PackageInfo {
  type: PackageType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  outcome: string;
}

// Package definitions matching the spec
export const packages: Record<PackageType, PackageInfo> = {
  silver: {
    type: 'silver',
    title: 'Silver – Essential Support',
    subtitle: 'For small businesses and sole traders who need reliable compliance.',
    description: 'Perfect for businesses getting started or those who need core accounting support.',
    features: [
      'Monthly bookkeeping',
      'VAT returns',
      'Self Assessment support',
      'Basic reporting',
      'Email & phone support'
    ],
    outcome: 'Stay compliant, avoid penalties, and keep your finances in order.'
  },
  gold: {
    type: 'gold',
    title: 'Gold – Growth & Tax Planning',
    subtitle: 'For growing firms with staff who want to plan ahead, save tax and keep more profit.',
    description: 'Ideal for businesses that are scaling and need strategic financial guidance.',
    features: [
      'Everything in Silver',
      'Confirmation statement filing',
      'Pre-year-end tax planning meeting',
      'Annual budget',
      'Tax-saving strategy',
      'Monthly management accounts'
    ],
    outcome: 'Plan ahead, save tax, keep more profit.'
  },
  platinum: {
    type: 'platinum',
    title: 'Platinum – Virtual Finance Director',
    subtitle: 'For established businesses who need strategic financial leadership and dedicated support.',
    description: 'Comprehensive financial management with dedicated account management and strategic advisory.',
    features: [
      'Everything in Gold',
      'Dedicated account manager',
      'Virtual Finance Director support',
      'Strategic business advisory',
      'Custom reporting & dashboards',
      'Quarterly business reviews',
      'Priority support'
    ],
    outcome: 'Strategic financial leadership to drive growth and maximize profitability.'
  }
};

/**
 * Recommend a package based on Step 2B answers
 */
export function recommendPackage(data: Step2BData): PackageType {
  // Logic based on business characteristics
  const turnover = data.turnoverBand;
  const teamStructure = data.teamStructure;
  const priorities = data.priorities;
  const urgency = data.urgency;

  // High turnover or complex team structure → Platinum
  if (turnover === 'over-5m' || turnover === '1m-5m') {
    if (teamStructure === 'employees-subcontractors' || priorities.includes('Virtual Finance Director level support')) {
      return 'platinum';
    }
  }

  // Medium turnover with employees or tax planning priorities → Gold
  if (turnover === '250k-1m' || turnover === '1m-5m') {
    if (
      teamStructure === 'me-employees' ||
      teamStructure === 'employees-subcontractors' ||
      priorities.includes('Reduce tax & keep more profit') ||
      priorities.includes('Better finances, cashflow, monthly clarity')
    ) {
      return 'gold';
    }
  }

  // CIS structure or immediate urgency with high priorities → Gold
  if (
    teamStructure === 'subcontractors-cis' ||
    (urgency === 'immediately' && priorities.length >= 2)
  ) {
    return 'gold';
  }

  // Default to Silver for smaller businesses or those just starting
  if (turnover === 'under-250k' || data.businessType === 'not-set-up') {
    return 'silver';
  }

  // Default recommendation
  return 'gold';
}

