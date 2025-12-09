/**
 * Resume Progress - Check for existing progress by email/phone
 * 
 * When a user enters their email/phone, we check if they have existing progress
 * and restore it automatically.
 */

import { getLeadStoreData, updateLeadStoreData } from './leadStore';

export interface ResumeProgressResult {
  hasProgress: boolean;
  data?: any;
  message?: string;
}

/**
 * Check if user has existing progress based on email/phone
 * 
 * @param email User's email address
 * @param phone User's phone number (optional)
 * @returns Resume progress result
 */
export function checkForExistingProgress(
  email: string,
  phone?: string
): ResumeProgressResult {
  if (!email) {
    return { hasProgress: false };
  }

  // Check sessionStorage for existing progress
  const currentData = getLeadStoreData();
  
  // If email matches and we have progress data, return it
  if (currentData.email === email.toLowerCase().trim()) {
    // Also check phone if provided
    if (phone && currentData.phone) {
      const normalizedPhone = phone.replace(/\s+/g, '').replace(/[^\d+]/g, '');
      const storedPhone = currentData.phone.replace(/\s+/g, '').replace(/[^\d+]/g, '');
      
      if (normalizedPhone === storedPhone) {
        return {
          hasProgress: true,
          data: currentData,
          message: 'We found your previous progress. Continuing where you left off...',
        };
      }
    } else if (!phone || !currentData.phone) {
      // Email match is enough if phone not provided or not stored
      return {
        hasProgress: true,
        data: currentData,
        message: 'We found your previous progress. Continuing where you left off...',
      };
    }
  }

  // Check localStorage for step-specific saved data
  const step1Data = localStorage.getItem('quote_step1');
  if (step1Data) {
    try {
      const parsed = JSON.parse(step1Data);
      if (parsed.email?.toLowerCase().trim() === email.toLowerCase().trim()) {
        return {
          hasProgress: true,
          data: parsed,
          message: 'We found your previous progress. Continuing where you left off...',
        };
      }
      } catch {
        // Ignore parse errors
      }
  }

  return { hasProgress: false };
}

/**
 * Restore progress data to lead store
 * 
 * @param data Progress data to restore
 */
export function restoreProgress(data: any): void {
  updateLeadStoreData(data);
  
  // Also restore step-specific localStorage if available
  if (data.step1) {
    localStorage.setItem('quote_step1', JSON.stringify(data.step1));
  }
  if (data.step2) {
    localStorage.setItem('quote_step2', JSON.stringify(data.step2));
  }
  if (data.step2B) {
    localStorage.setItem('quote_step2b', JSON.stringify(data.step2B));
  }
  if (data.stepO1) {
    localStorage.setItem('quote_stepO1', JSON.stringify(data.stepO1));
  }
  if (data.stepO2) {
    localStorage.setItem('quote_stepO2', JSON.stringify(data.stepO2));
  }
  if (data.step6) {
    localStorage.setItem('quote_step6', JSON.stringify(data.step6));
  }
  if (data.step5) {
    localStorage.setItem('quote_step5', JSON.stringify(data.step5));
  }
}

