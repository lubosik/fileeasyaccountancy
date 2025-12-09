/**
 * GHL Progress Update Helper
 * 
 * Client-side helper to call /api/ghl/progress endpoint.
 * Handles contactId persistence and error handling.
 */

export interface GHLProgressParams {
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
  custom?: Record<string, any>; // Friendly field names -> values
}

export interface GHLProgressResponse {
  success: boolean;
  contactId?: string;
  message?: string;
  warning?: string;
  missingFields?: string[];
}

/**
 * Update GHL contact with progress
 * 
 * @param params Progress data with friendly field names
 * @returns Response with contactId
 */
export async function updateGHLProgress(
  params: GHLProgressParams
): Promise<GHLProgressResponse> {
  try {
    const response = await fetch('/api/ghl/progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        message: errorData.message || `HTTP ${response.status}`,
      };
    }

    const result = await response.json();

    // Persist contactId if returned
    if (result.contactId) {
      // Store in localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('ghl_contact_id', result.contactId);
        // Also store in sessionStorage for immediate access
        sessionStorage.setItem('ghl_contact_id', result.contactId);
      }
    }

    return {
      success: result.success || false,
      contactId: result.contactId,
      message: result.message,
      warning: result.warning,
      missingFields: result.missingFields,
    };
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('GHL progress update error:', error);
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Network error',
    };
  }
}

/**
 * Get stored contactId from localStorage or sessionStorage
 */
export function getStoredContactId(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    sessionStorage.getItem('ghl_contact_id') ||
    localStorage.getItem('ghl_contact_id') ||
    null
  );
}

/**
 * Clear stored contactId
 */
export function clearStoredContactId(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('ghl_contact_id');
    localStorage.removeItem('ghl_contact_id');
  }
}

