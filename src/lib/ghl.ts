/**
 * GoHighLevel (GHL) Integration Client
 * 
 * Server-side only client for GHL API operations.
 * Uses the LeadConnector API (services.leadconnectorhq.com) with Version header.
 * 
 * IMPORTANT: No top-level side effects. All client instantiation happens inside functions.
 */

// Type definitions only - no imports of external SDKs at top level

/**
 * GHL API Configuration
 */
export interface GHLConfig {
  apiKey: string;
  locationId: string;
  apiBase: string;
  apiVersion: string;
}

/**
 * GHL Custom Field Definition
 */
export interface GHLCustomField {
  id: string;
  name: string;
  fieldType: string;
  options?: Array<{ id: string; label: string; value?: string }>;
}

/**
 * GHL Contact Data
 */
export interface GHLContact {
  id: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
  customFields?: Record<string, any>;
  [key: string]: any;
}

/**
 * GHL Upsert Contact Request
 */
export interface GHLUpsertContactRequest {
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  locationId: string;
  tags?: string[];
  customFields?: Array<{ field: string; value: any }>;
}

/**
 * GHL Upsert Contact Response
 */
export interface GHLUpsertContactResponse {
  contactId: string;
  contact?: GHLContact;
  [key: string]: any;
}

/**
 * GHL Note Request
 */
export interface GHLNoteRequest {
  contactId: string;
  body: string;
  userId?: string;
}

/**
 * Get GHL configuration from environment variables
 * Returns null if not configured (safe for build time)
 */
export function getGHLConfig(): GHLConfig | null {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  const apiBase = process.env.GHL_API_BASE || 'https://services.leadconnectorhq.com';
  const apiVersion = process.env.GHL_API_VERSION || '2021-07-28';

  if (!apiKey || !locationId) {
    return null;
  }

  return {
    apiKey,
    locationId,
    apiBase,
    apiVersion,
  };
}

/**
 * Check if GHL is configured
 * Safe to call at build time (returns false if envs missing)
 */
export function isGHLConfigured(): boolean {
  return getGHLConfig() !== null;
}

/**
 * Create GHL API client (factory function)
 * Only instantiates when called, not at module load time
 * 
 * @returns Fetch-based client function or null if not configured
 */
export function createGHLClient() {
  const config = getGHLConfig();
  if (!config) {
    return null;
  }

  /**
   * Make authenticated request to GHL LeadConnector API with retry logic
   */
  return async function ghlRequest(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' = 'GET',
    body?: any,
    retryOptions?: { maxAttempts?: number }
  ): Promise<Response> {
    const url = `${config.apiBase}${endpoint}`;
    const headers: HeadersInit = {
      'Authorization': `Bearer ${config.apiKey}`,
      'Version': config.apiVersion,
      'Content-Type': 'application/json',
    };

    // Import retry utility (dynamic to avoid top-level side effects)
    const { retryFetch } = await import('./retry');

    return retryFetch(
      url,
      {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      },
      {
        maxAttempts: retryOptions?.maxAttempts || 3,
        initialDelayMs: 1000,
        maxDelayMs: 10000,
      }
    );
  };
}

/**
 * Upsert contact in GHL
 * Creates or updates contact by email/phone
 * 
 * Uses LeadConnector API: POST /contacts/upsert
 * with Version: 2021-07-28 header
 */
export async function upsertContact(
  params: Omit<GHLUpsertContactRequest, 'locationId'>
): Promise<GHLUpsertContactResponse> {
  const client = createGHLClient();
  if (!client) {
    throw new Error('GHL not configured');
  }

  const config = getGHLConfig()!;
  
  // Build payload for GHL LeadConnector API
  // GHL expects customFields as array of { field: string, value: any }
  const payload: GHLUpsertContactRequest = {
    email: params.email,
    phone: params.phone,
    firstName: params.firstName,
    lastName: params.lastName,
    locationId: config.locationId,
    tags: params.tags || [],
    customFields: params.customFields || [],
  };

  const response = await client('/contacts/upsert', 'POST', payload);

  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage = `GHL upsert failed: ${response.status}`;
    
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
        payload,
      });
    }

    throw new Error(errorMessage);
  }

  const result = await response.json();
  
  // Extract contact ID from response
  // GHL may return contact in different formats
  const contactId = result.contact?.id || result.id || result.contactId;

  if (!contactId) {
    throw new Error('GHL API returned response without contact ID');
  }

  return {
    contactId,
    ...result,
  };
}

/**
 * Get contact by ID
 */
export async function getContact(contactId: string): Promise<GHLContact | null> {
  const client = createGHLClient();
  if (!client) {
    return null;
  }

  const response = await client(`/contacts/${contactId}`, 'GET');

  if (!response.ok) {
    return null;
  }

  const result = await response.json();
  return result.contact || result;
}

/**
 * Add note to contact
 */
export async function addNote(params: GHLNoteRequest): Promise<boolean> {
  const client = createGHLClient();
  if (!client) {
    throw new Error('GHL not configured');
  }

  const response = await client(
    `/contacts/${params.contactId}/notes`,
    'POST',
    { body: params.body, userId: params.userId }
  );

  return response.ok;
}

/**
 * Set tags on contact (append without wiping existing)
 */
export async function setTags(contactId: string, tags: string[]): Promise<boolean> {
  const client = createGHLClient();
  if (!client) {
    throw new Error('GHL not configured');
  }

  // First get current contact to preserve existing tags
  const contact = await getContact(contactId);
  if (!contact) {
    throw new Error('Contact not found');
  }

  const existingTags = contact.tags || [];
  const newTags = [...new Set([...existingTags, ...tags])]; // Merge and dedupe

  const response = await client(
    `/contacts/${contactId}`,
    'PUT',
    { tags: newTags }
  );

  return response.ok;
}
