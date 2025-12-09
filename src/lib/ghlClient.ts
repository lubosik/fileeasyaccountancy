/**
 * GoHighLevel (GHL) HTTP Client
 * 
 * Server-side only client for GHL API operations.
 * Uses fetch with retry logic and proper error handling.
 */

import { GHL_BASE_URL, GHL_API_KEY, FILE_EASY_LOCATION_ID, isGHLConfigured } from '@/config/ghl';

export interface UpsertContactParams {
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
  customFields?: Record<string, any>;
}

export interface UpsertContactResponse {
  contactId: string;
  [key: string]: any;
}

/**
 * Sleep helper for retry delays
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Make authenticated request to GHL API with retry logic
 */
async function ghlRequestWithRetry(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' = 'POST',
  body?: any,
  retries: number = 2
): Promise<Response> {
  const url = `${GHL_BASE_URL}${endpoint}`;
  const headers: HeadersInit = {
    'Authorization': `Bearer ${GHL_API_KEY}`,
    'Content-Type': 'application/json',
  };

  if (FILE_EASY_LOCATION_ID) {
    headers['X-Location-Id'] = FILE_EASY_LOCATION_ID;
  }

  // For GET requests, body should be undefined
  const requestBody = method === 'GET' ? undefined : body;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: requestBody ? JSON.stringify(requestBody) : undefined,
      });

      // If successful or client error (4xx), don't retry
      if (response.ok || (response.status >= 400 && response.status < 500)) {
        return response;
      }

      // Server error (5xx) - retry with exponential backoff
      if (response.status >= 500 && attempt < retries) {
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s...
        if (process.env.NODE_ENV !== 'production') {
          console.log(`GHL API retry ${attempt + 1}/${retries} after ${delay}ms`);
        }
        await sleep(delay);
        continue;
      }

      return response;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      // Retry on network errors
      if (attempt < retries) {
        const delay = Math.pow(2, attempt) * 1000;
        if (process.env.NODE_ENV !== 'production') {
          console.log(`GHL API network error, retry ${attempt + 1}/${retries} after ${delay}ms`);
        }
        await sleep(delay);
        continue;
      }
    }
  }

  throw lastError || new Error('GHL API request failed after retries');
}

/**
 * Search for contact by first name and last name
 * 
 * @param firstName First name to search for
 * @param lastName Last name to search for
 * @returns Contact ID if found, null otherwise
 */
export async function searchContactByName(
  firstName: string,
  lastName: string
): Promise<string | null> {
  if (!isGHLConfigured()) {
    return null;
  }

  if (!firstName || !lastName) {
    return null;
  }

  try {
    // GHL search endpoint - search by name
    // GHL API uses POST with search criteria
    const searchPayload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    };

    const response = await ghlRequestWithRetry(
      '/contacts/search',
      'POST',
      searchPayload
    );

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    
    // GHL returns contacts array, find exact match
    if (result.contacts && Array.isArray(result.contacts)) {
      const exactMatch = result.contacts.find((contact: any) => 
        contact.firstName?.toLowerCase().trim() === firstName.toLowerCase().trim() &&
        contact.lastName?.toLowerCase().trim() === lastName.toLowerCase().trim()
      );
      
      if (exactMatch?.id) {
        return exactMatch.id;
      }
    }

    return null;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('GHL searchContactByName exception:', error);
    }
    return null;
  }
}

/**
 * Upsert contact (create or update by email or name)
 * 
 * First searches for existing contact by first/last name.
 * If found, updates that contact. If not found, creates new contact.
 * 
 * @param params Contact data including email (required), phone, name, tags, customFields
 * @returns Contact ID and raw response data
 */
export async function upsertContact(
  params: UpsertContactParams
): Promise<UpsertContactResponse> {
  if (!isGHLConfigured()) {
    throw new Error('GHL not configured: Missing GHL_API_KEY or GHL_LOCATION_ID');
  }

  if (!params.email) {
    throw new Error('Email is required for contact upsert');
  }

  // First, try to find existing contact by first and last name
  let existingContactId: string | null = null;
  if (params.firstName && params.lastName) {
    existingContactId = await searchContactByName(params.firstName, params.lastName);
  }

  // Build contact payload for GHL API
  const contactPayload: any = {
    email: params.email,
  };

  if (params.phone) {
    contactPayload.phone = params.phone;
  }

  if (params.firstName) {
    contactPayload.firstName = params.firstName;
  }

  if (params.lastName) {
    contactPayload.lastName = params.lastName;
  }

  // Add tags if provided
  if (params.tags && params.tags.length > 0) {
    contactPayload.tags = params.tags;
  }

  // Add custom fields if provided
  // GHL expects custom fields as an array of { field: string, value: any }
  if (params.customFields && Object.keys(params.customFields).length > 0) {
    contactPayload.customField = Object.entries(params.customFields).map(([field, value]) => ({
      field,
      value: Array.isArray(value) ? value.join(', ') : String(value),
    }));
  }

  // Add locationId to payload
  contactPayload.locationId = FILE_EASY_LOCATION_ID;

  try {
    let response: Response;
    
    // If we found an existing contact, update it; otherwise create new
    if (existingContactId) {
      // Update existing contact
      response = await ghlRequestWithRetry(
        `/contacts/${existingContactId}`,
        'PUT',
        contactPayload
      );
    } else {
      // Create new contact
      response = await ghlRequestWithRetry('/contacts/', 'POST', contactPayload);
    }

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `GHL API error: ${response.status}`;
      
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorJson.error || errorMessage;
      } catch {
        errorMessage = errorText || errorMessage;
      }

      if (process.env.NODE_ENV !== 'production') {
        console.error('GHL upsertContact failed:', {
          status: response.status,
          error: errorMessage,
          payload: contactPayload,
        });
      }

      throw new Error(errorMessage);
    }

    const result = await response.json();
    const contactId = result.contact?.id || result.id;

    if (!contactId) {
      throw new Error('GHL API returned contact without ID');
    }

    return {
      contactId,
      ...result,
    };
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('GHL upsertContact exception:', error);
    }
    throw error;
  }
}

export interface CreateTaskParams {
  contactId: string;
  title: string;
  body?: string;
  assignedTo?: string;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
}

/**
 * Create a task for a contact
 * 
 * @param params Task data including contactId (required) and title (required)
 * @returns Task ID and raw response data
 */
export async function createTaskForContact(
  params: CreateTaskParams
): Promise<{ taskId: string; [key: string]: any }> {
  if (!isGHLConfigured()) {
    throw new Error('GHL not configured: Missing GHL_API_KEY or GHL_LOCATION_ID');
  }

  if (!params.contactId || !params.title) {
    throw new Error('contactId and title are required for task creation');
  }

  // Build task payload for GHL API
  const taskPayload: any = {
    title: params.title,
  };

  if (params.body) {
    taskPayload.body = params.body;
  }

  if (params.assignedTo) {
    taskPayload.assignedTo = params.assignedTo;
  }

  if (params.dueDate) {
    taskPayload.dueDate = params.dueDate;
  }

  if (params.priority) {
    taskPayload.priority = params.priority;
  }

  try {
    const response = await ghlRequestWithRetry(
      `/contacts/${params.contactId}/tasks`,
      'POST',
      taskPayload
    );

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `GHL API error: ${response.status}`;
      
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorJson.error || errorMessage;
      } catch {
        errorMessage = errorText || errorMessage;
      }

      if (process.env.NODE_ENV !== 'production') {
        console.error('GHL createTaskForContact failed:', {
          status: response.status,
          error: errorMessage,
          payload: taskPayload,
        });
      }

      throw new Error(errorMessage);
    }

    const result = await response.json();
    const taskId = result.task?.id || result.id;

    if (!taskId) {
      throw new Error('GHL API returned task without ID');
    }

    return {
      taskId,
      ...result,
    };
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('GHL createTaskForContact exception:', error);
    }
    throw error;
  }
}

