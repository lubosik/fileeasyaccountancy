/**
 * Progress Tracking Helper
 * 
 * Tracks step completion and updates GHL with progress data.
 * Ensures perfect resume functionality by persisting step data.
 */

import { getLeadStoreData, updateLeadStoreData } from './leadStore';
import { dispatchToGHL } from './dispatchToGHL';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';

/**
 * Step ID to numeric mapping for lastCompletedStep
 */
const STEP_ID_MAP: Record<string | number, number> = {
  1: 1,
  2: 2,
  '2B': 2.5, // Pre-qualification step
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  'O1': 10, // One-Off step 1
  'O2': 11, // One-Off step 2
  'O3': 12, // One-Off confirmation
};

/**
 * Convert step ID to numeric value for lastCompletedStep
 */
function stepIdToNumber(stepId: string | number): number {
  if (typeof stepId === 'number') {
    return stepId;
  }
  return STEP_ID_MAP[stepId] || parseInt(String(stepId)) || 1;
}

/**
 * Build compact JSON snapshot of all progress data
 * 
 * Minifies and caps size to fit in GHL custom field (typically 10KB limit)
 */
function buildResumeSnapshot(fields: Record<string, any>): string {
  try {
    // Get current lead store data
    const currentData = getLeadStoreData();
    
    // Merge with new fields
    const snapshot = {
      ...currentData,
      ...fields,
      // Remove sensitive or unnecessary data
      contactId: undefined, // Don't store contactId in snapshot
      startedAt: currentData.startedAt, // Keep startedAt
    };

    // Stringify and minify
    const json = JSON.stringify(snapshot);
    
    // Cap size at 8KB to leave room (GHL typically allows 10KB)
    const maxSize = 8 * 1024; // 8KB
    if (json.length > maxSize) {
      // If too large, remove less critical fields
      const trimmed = { ...snapshot };
      delete trimmed.customFields; // Remove nested customFields
      const trimmedJson = JSON.stringify(trimmed);
      
      if (trimmedJson.length > maxSize) {
        // Still too large - truncate (shouldn't happen in practice)
        return trimmedJson.substring(0, maxSize - 10) + '..."truncated"}';
      }
      
      return trimmedJson;
    }
    
    return json;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error building resume snapshot:', error);
    }
    // Fallback: return minimal snapshot
    return JSON.stringify({ lastCompletedStep: fields.lastCompletedStep || 1 });
  }
}

/**
 * Mark a step as complete and update progress in GHL
 * 
 * @param stepId - Step identifier (number or string like '2B', 'O1')
 * @param fields - Step-specific data to store
 * @returns Promise that resolves when update is complete (or queued)
 */
export async function markStepComplete(
  stepId: string | number,
  fields: Record<string, any> = {}
): Promise<void> {
  // Get current lead store data
  const leadStore = getLeadStoreData();
  
  // Ensure we have email (required for GHL upsert)
  if (!leadStore.email) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('markStepComplete: No email in leadStore, skipping GHL update');
    }
    // Still update local store
    updateLeadStoreData({
      ...fields,
      lastCompletedStep: stepIdToNumber(stepId),
    });
    return;
  }

  // Convert step ID to number
  const stepNumber = stepIdToNumber(stepId);

  // Build custom fields for GHL
  const customFields: Record<string, any> = {
    [GHL_CUSTOM_FIELDS.lastCompletedStep]: stepNumber.toString(),
    ...fields,
  };

  // Build resume snapshot
  const resumeSnapshot = buildResumeSnapshot({
    ...fields,
    lastCompletedStep: stepNumber,
  });

  // Add snapshot to custom fields
  customFields[GHL_CUSTOM_FIELDS.resumePayloadV1] = resumeSnapshot;

  // Update local store first (immediate)
  updateLeadStoreData({
    ...fields,
    lastCompletedStep: stepNumber,
  });

  // Dispatch to GHL (non-blocking, with retry queue)
  try {
    await dispatchToGHL(
      {
        email: leadStore.email,
        customFields,
      },
      {
        // No additional tags (tags are handled by step-specific components)
      }
    );

    if (process.env.NODE_ENV !== 'production') {
      console.log(`Step ${stepId} marked complete, lastCompletedStep: ${stepNumber}`);
    }
  } catch (error) {
    // Non-blocking - dispatchToGHL handles retry queue
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Error updating progress for step ${stepId}:`, error);
    }
  }
}

/**
 * Get the last completed step number
 * 
 * @returns Last completed step number, or 1 if not set
 */
export function getLastCompletedStep(): number {
  const leadStore = getLeadStoreData();
  return (leadStore.lastCompletedStep as number) || 1;
}

