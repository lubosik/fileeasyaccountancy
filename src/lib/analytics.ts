/**
 * Analytics helpers for GA4 and Meta Pixel
 * Centralized tracking functions for consistent event tracking
 */

// GA4 Event Types
export interface GA4EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  [key: string]: string | number | boolean | undefined;
}

// Meta Pixel Event Types
export interface MetaPixelParams {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Check if GA4 is available
 */
export const isGA4Available = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Check if Meta Pixel is available
 */
export const isMetaPixelAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
};

/**
 * Track GA4 event
 */
export const trackGA4Event = (
  eventName: string,
  params?: GA4EventParams
): void => {
  if (!isGA4Available()) {
    console.warn('GA4 not available');
    return;
  }

  // Filter out undefined values
  const cleanParams: Record<string, string | number | boolean> = params ? Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined) as [string, string | number | boolean][]
  ) : {};

  window.gtag!('event', eventName, cleanParams);
};

/**
 * Track Meta Pixel event
 */
export const trackMetaPixelEvent = (
  eventName: string,
  params?: MetaPixelParams
): void => {
  if (!isMetaPixelAvailable()) {
    console.warn('Meta Pixel not available');
    return;
  }

  // Filter out undefined values
  const cleanParams: Record<string, string | number | boolean> = params ? Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined) as [string, string | number | boolean][]
  ) : {};

  window.fbq!('track', eventName, cleanParams);
};

/**
 * Track both GA4 and Meta Pixel events
 */
export const trackEvent = (
  eventName: string,
  ga4Params?: GA4EventParams,
  metaParams?: MetaPixelParams
): void => {
  trackGA4Event(eventName, ga4Params);
  trackMetaPixelEvent(eventName, metaParams);
};

/**
 * Quote Flow Specific Events
 */

// Track quote flow start
export const trackQuoteStart = (source: string = 'unknown'): void => {
  trackGA4Event('fe_quote_start_cta', {
    source,
    event_category: 'Quote',
    event_label: 'Quote Flow Started'
  });

  trackGA4Event('view_item_list', {
    item_list_id: 'quote_onboarding',
    item_list_name: 'Quote Onboarding Flow',
    step: 0,
    source
  });

  trackMetaPixelEvent('PageView', {
    content_name: 'Quote Onboarding',
    content_category: 'Onboarding',
    source
  });
};

// Track step completion
export const trackStepComplete = (
  step: number,
  stepName: string,
  additionalParams?: GA4EventParams
): void => {
  trackGA4Event('fe_quote_step_complete', {
    step,
    event_category: 'Quote',
    event_label: stepName,
    ...additionalParams
  });
};

// Track commitment option selection
export const trackCommitmentOption = (option: string): void => {
  trackGA4Event('fe_quote_commitment_option_selected', {
    option,
    event_category: 'Quote',
    event_label: `Commitment Option: ${option}`
  });
};

// Track quote completion
export const trackQuoteCompleted = (
  commitmentOption: string,
  email: string,
  packageType?: string,
  paymentStyle?: string
): void => {
  trackGA4Event('fe_quote_completed', {
    event_category: 'Quote',
    event_label: 'Quote Flow Completed',
    commitment_option: commitmentOption,
    email,
    package_type: packageType,
    payment_style: paymentStyle
  });

  trackMetaPixelEvent('Lead', {
    content_name: 'Quote Completed',
    content_category: 'Onboarding',
    value: 1,
    currency: 'GBP'
  });
};

// Track package selection
export const trackPackageSelection = (
  packageType: string,
  isRecommended: boolean = false
): void => {
  trackGA4Event('fe_quote_package_selected', {
    package_type: packageType,
    is_recommended: isRecommended,
    event_category: 'Quote',
    event_label: `Package Selected: ${packageType}`
  });
};

// Track payment style selection
export const trackPaymentStyleSelection = (
  paymentStyle: string,
  savings?: number
): void => {
  trackGA4Event('fe_quote_payment_style_selected', {
    payment_style: paymentStyle,
    savings,
    event_category: 'Quote',
    event_label: `Payment Style: ${paymentStyle}`
  });
};

