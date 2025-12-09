// One-Off Job Pricing Configuration
// Used for dynamic pricing display in Step O1 Budget Comfort question

export const ONE_OFF_PRICING = {
  LOW: 150,
  HIGH: 1500
};

/**
 * Get pricing range for one-off jobs
 */
export function getOneOffPricingRange(): { low: number; high: number } {
  return {
    low: ONE_OFF_PRICING.LOW,
    high: ONE_OFF_PRICING.HIGH
  };
}

/**
 * Format pricing range for display
 */
export function formatOneOffPricingRange(): string {
  const { low, high } = getOneOffPricingRange();
  return `£${low}–£${high}`;
}

