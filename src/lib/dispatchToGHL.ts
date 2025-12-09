/**
 * Dispatch to GHL - Single reusable function for CRM updates
 * 
 * This function:
 * 1. Merges incoming partial data with existing leadStore data
 * 2. Calls /api/ghl/upsert with merged data
 * 3. Stores contactId on success
 * 4. Queues failed requests for background retry
 */

import { getLeadStoreData, updateLeadStoreData } from './leadStore';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';

export interface DispatchPayload {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  customFields?: Record<string, any>;
}

export interface DispatchOptions {
  addTags?: string[];
}

const QUEUE_KEY = 'ghl_dispatch_queue';
const RETRY_INTERVAL = 10000; // 10 seconds

/**
 * Get queued dispatch items from localStorage
 */
function getQueue(): Array<{ payload: DispatchPayload; options?: DispatchOptions; timestamp: number }> {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const stored = localStorage.getItem(QUEUE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Failed to load GHL dispatch queue:', error);
    }
  }

  return [];
}

/**
 * Add item to queue
 */
function addToQueue(payload: DispatchPayload, options?: DispatchOptions): void {
  if (typeof window === 'undefined') {
    return;
  }

  const queue = getQueue();
  queue.push({
    payload,
    options,
    timestamp: Date.now(),
  });

  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Failed to save GHL dispatch queue:', error);
    }
  }
}

/**
 * Remove item from queue
 */
function removeFromQueue(index: number): void {
  if (typeof window === 'undefined') {
    return;
  }

  const queue = getQueue();
  queue.splice(index, 1);

  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Failed to update GHL dispatch queue:', error);
    }
  }
}

/**
 * Process queued items (background retry)
 */
async function processQueue(): Promise<void> {
  if (typeof window === 'undefined') {
    return;
  }

  const queue = getQueue();
  if (queue.length === 0) {
    return;
  }

  // Process items in order
  for (let i = queue.length - 1; i >= 0; i--) {
    const item = queue[i];
    
    try {
      const result = await dispatchToGHL(item.payload, item.options);
      
      // If successful, remove from queue
      if (result.success) {
        removeFromQueue(i);
      }
    } catch (error) {
      // Keep in queue for next retry
      if (process.env.NODE_ENV !== 'production') {
        console.log('Queue item still failing, will retry:', error);
      }
    }
  }
}

/**
 * Start background retry worker
 * Retries queued items every 10 seconds while page is open
 */
let retryWorkerInterval: NodeJS.Timeout | null = null;

export function startRetryWorker(): void {
  if (typeof window === 'undefined' || retryWorkerInterval !== null) {
    return;
  }

  // Process queue immediately
  processQueue();

  // Then retry every 10 seconds
  retryWorkerInterval = setInterval(() => {
    processQueue();
  }, RETRY_INTERVAL);

  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    if (retryWorkerInterval) {
      clearInterval(retryWorkerInterval);
      retryWorkerInterval = null;
    }
  });
}

/**
 * Stop background retry worker
 */
export function stopRetryWorker(): void {
  if (retryWorkerInterval) {
    clearInterval(retryWorkerInterval);
    retryWorkerInterval = null;
  }
}

/**
 * Map lead store data to GHL custom fields
 */
function mapToCustomFields(storeData: any): Record<string, any> {
  const customFields: Record<string, any> = {};

  // Map engagement type
  if (storeData.engagementType) {
    customFields[GHL_CUSTOM_FIELDS.engagementType] = storeData.engagementType;
  }

  // Map Step 2B data (Monthly pre-qualification)
  if (storeData.step2B) {
    const step2B = storeData.step2B;
    if (step2B.businessType) {
      customFields[GHL_CUSTOM_FIELDS.businessType] = step2B.businessType;
    }
    if (step2B.turnoverBand) {
      customFields[GHL_CUSTOM_FIELDS.turnoverBand] = step2B.turnoverBand;
    }
    if (step2B.teamStructure) {
      customFields[GHL_CUSTOM_FIELDS.teamStructure] = step2B.teamStructure;
    }
    if (step2B.currentSupport) {
      customFields[GHL_CUSTOM_FIELDS.currentSupport] = step2B.currentSupport;
    }
    if (step2B.urgency) {
      customFields[GHL_CUSTOM_FIELDS.urgency] = step2B.urgency;
    }
    if (step2B.priorities && Array.isArray(step2B.priorities)) {
      customFields[GHL_CUSTOM_FIELDS.priorities] = step2B.priorities.join(', ');
    }
    if (step2B.budgetAlignment) {
      customFields[GHL_CUSTOM_FIELDS.budgetComfort] = step2B.budgetAlignment;
    }
  }

  // Map package data
  if (storeData.step3?.recommendedPackage) {
    customFields[GHL_CUSTOM_FIELDS.recommendedPackage] = storeData.step3.recommendedPackage;
  }
  if (storeData.step4?.selectedPackage || storeData.step3?.selectedPackage) {
    customFields[GHL_CUSTOM_FIELDS.selectedPackage] = storeData.step4?.selectedPackage || storeData.step3?.selectedPackage;
  }

  // Map payment preference
  if (storeData.step5?.paymentStyle) {
    customFields[GHL_CUSTOM_FIELDS.paymentPreference] = storeData.step5.paymentStyle === 'monthly' ? 'Monthly' : 'Annual';
  }

  // Map Step 6 onboarding details
  if (storeData.step6) {
    const step6 = storeData.step6;
    if (step6.legalBusinessName) {
      customFields[GHL_CUSTOM_FIELDS.companyName] = step6.legalBusinessName;
    }
    if (step6.tradingName) {
      customFields[GHL_CUSTOM_FIELDS.tradingName] = step6.tradingName;
    }
    if (step6.companyNumber) {
      customFields[GHL_CUSTOM_FIELDS.companyNumber] = step6.companyNumber;
    }
    if (step6.businessAddress) {
      customFields[GHL_CUSTOM_FIELDS.businessAddress] = step6.businessAddress;
    }
    if (step6.website) {
      customFields[GHL_CUSTOM_FIELDS.websiteUrl] = step6.website;
    }
    if (step6.yourRole) {
      customFields[GHL_CUSTOM_FIELDS.userRole] = step6.yourRole;
    }
    if (step6.otherDirectorsShareholders) {
      customFields[GHL_CUSTOM_FIELDS.hasOtherDirectors] = step6.otherDirectorsShareholders === 'yes';
    }
    if (step6.ukResidents) {
      customFields[GHL_CUSTOM_FIELDS.allUkResidents] = step6.ukResidents === 'yes';
    }
    if (step6.amlConsent !== undefined) {
      customFields[GHL_CUSTOM_FIELDS.amlConsent] = step6.amlConsent;
    }
  }

  // Map One-Off flow data
  if (storeData.stepO1) {
    const stepO1 = storeData.stepO1;
    if (stepO1.jobTypes && Array.isArray(stepO1.jobTypes)) {
      customFields[GHL_CUSTOM_FIELDS.oneOffJobType] = stepO1.jobTypes.join(', ');
    }
    if (stepO1.urgency) {
      customFields[GHL_CUSTOM_FIELDS.oneOffUrgency] = stepO1.urgency;
    }
    if (stepO1.budgetComfort) {
      customFields[GHL_CUSTOM_FIELDS.oneOffBudget] = stepO1.budgetComfort;
    }
  }

  if (storeData.stepO2?.callbackTime) {
    customFields[GHL_CUSTOM_FIELDS.preferredContactMethod] = storeData.stepO2.callbackTime;
  }

  return customFields;
}

/**
 * Main dispatch function
 * 
 * @param partial Partial data to merge with existing leadStore
 * @param options Optional tags to add
 * @returns Promise with success status and contactId
 */
export async function dispatchToGHL(
  partial: DispatchPayload,
  options?: DispatchOptions
): Promise<{ success: boolean; contactId?: string; error?: string }> {
  // Get current lead store data
  const storeData = getLeadStoreData();

  // Merge incoming partial with store data
  const merged: DispatchPayload = {
    email: partial.email || storeData.email,
    phone: partial.phone || storeData.phone,
    firstName: partial.firstName || storeData.firstName,
    lastName: partial.lastName || storeData.lastName,
    customFields: {
      // Start with mapped custom fields from store
      ...mapToCustomFields(storeData),
      // Override with any new custom fields from partial
      ...partial.customFields,
    },
  };

  // Validate email is present
  if (!merged.email) {
    const error = 'Email is required for GHL dispatch';
    if (process.env.NODE_ENV !== 'production') {
      console.error('dispatchToGHL error:', error);
    }
    return { success: false, error };
  }

  // Prepare request body
  const requestBody: any = {
    email: merged.email,
  };

  if (merged.phone) {
    requestBody.phone = merged.phone;
  }

  if (merged.firstName) {
    requestBody.firstName = merged.firstName;
  }

  if (merged.lastName) {
    requestBody.lastName = merged.lastName;
  }

  if (merged.customFields && Object.keys(merged.customFields).length > 0) {
    requestBody.customFields = merged.customFields;
  }

  if (options?.addTags && options.addTags.length > 0) {
    requestBody.tags = options.addTags;
  }

  try {
    // Call API route
    const response = await fetch('/api/ghl/upsert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    if (result.ok && result.contactId) {
      // Success - store contactId in leadStore
      updateLeadStoreData({ contactId: result.contactId });
      
      // Also update any partial data that was passed in
      if (partial.email) updateLeadStoreData({ email: partial.email });
      if (partial.phone) updateLeadStoreData({ phone: partial.phone });
      if (partial.firstName) updateLeadStoreData({ firstName: partial.firstName });
      if (partial.lastName) updateLeadStoreData({ lastName: partial.lastName });

      if (process.env.NODE_ENV !== 'production') {
        console.log('GHL dispatch success:', result.contactId);
      }

      return { success: true, contactId: result.contactId };
    } else {
      // API returned error
      const error = result.error || result.message || 'Unknown error';
      
      // Queue for retry (unless it's a validation error)
      if (response.status !== 400 && response.status !== 422) {
        addToQueue(partial, options);
      }

      if (process.env.NODE_ENV !== 'production') {
        console.warn('GHL dispatch failed:', error);
      }

      return { success: false, error };
    }
  } catch (error) {
    // Network error or other exception
    const errorMessage = error instanceof Error ? error.message : 'Network error';
    
    // Queue for retry
    addToQueue(partial, options);

    if (process.env.NODE_ENV !== 'production') {
      console.error('GHL dispatch exception:', errorMessage);
    }

    return { success: false, error: errorMessage };
  }
}

