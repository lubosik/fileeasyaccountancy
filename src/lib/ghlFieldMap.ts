/**
 * GHL Field Mapping Registry
 * 
 * Maps friendly field names to actual GHL custom field IDs at runtime.
 * Uses the discovery endpoint to fetch field IDs dynamically.
 * 
 * IMPORTANT: No top-level side effects. All calls happen inside functions.
 */

import { GHLCustomField } from './ghl';

/**
 * Friendly field names used in our onboarding flow
 * These are the labels we use internally to reference fields
 */
export interface FieldMapping {
  // Step 2A: Routing
  'Engagement Type': string;
  
  // Step 2B: Pre-Qualification (Monthly)
  'Business Type': string;
  'Turnover Band': string;
  'Team Structure': string;
  'Current Support': string;
  'Urgency': string;
  'Priorities': string;
  'Budget Comfort': string;
  
  // Step 3-4: Packages
  'Recommended Package': string;
  'Selected Package': string;
  
  // Step 5: Payment
  'Payment Preference': string;
  
  // Step 6: Onboarding Details
  'Company Name': string;
  'Trading Name': string;
  'Company Number': string;
  'Business Address': string;
  'Website URL': string;
  'User Role': string;
  'Has Other Directors': string;
  'All UK Residents': string;
  'AML Consent': string;
  
  // One-Off Flow
  'One-Off Job Type': string;
  'One-Off Urgency': string;
  'One-Off Budget': string;
  'Preferred Contact Method': string;
  
  // Resume & UID
  'Unique ID': string;
  'Last Completed Step': string;
  'Resume Payload V1': string;
  
  // Stripe Deposit
  'Deposit Status': string;
  'Stripe Session ID': string;
  'Stripe Payment Intent ID': string;
  'Deposit Paid At': string;
  
  // UID Reset
  'UID Reset Token Hash': string;
  'UID Reset Token Expiry': string;
  
  // AML Fields (FirmCheck)
  'AML Decision Status': string;
  'FirmCheck Client ID': string;
  'FirmCheck Determination ID': string;
}

/**
 * Required fields that must exist in GHL
 * If any of these are missing, getFieldMap() will return an error
 */
export const REQUIRED_FIELDS: Array<keyof FieldMapping> = [
  'Engagement Type',
  'Business Type',
  'Turnover Band',
  'Team Structure',
  'Current Support',
  'Urgency',
  'Priorities',
  'Budget Comfort',
  'Recommended Package',
  'Selected Package',
  'Payment Preference',
  'Company Name',
  'Trading Name',
  'Company Number',
  'Business Address',
  'User Role',
  'Has Other Directors',
  'All UK Residents',
  'AML Consent',
  'Unique ID',
  'Last Completed Step',
  'Deposit Status',
  'AML Decision Status',
];

/**
 * Optional fields (nice to have, but won't error if missing)
 */
export const OPTIONAL_FIELDS: Array<keyof FieldMapping> = [
  'Website URL',
  'One-Off Job Type',
  'One-Off Urgency',
  'One-Off Budget',
  'Preferred Contact Method',
  'Resume Payload V1',
  'Stripe Session ID',
  'Stripe Payment Intent ID',
  'Deposit Paid At',
  'UID Reset Token Hash',
  'UID Reset Token Expiry',
  'FirmCheck Client ID',
  'FirmCheck Determination ID',
];

/**
 * Field mapping error
 */
export class FieldMappingError extends Error {
  constructor(
    public missingFields: string[],
    message?: string
  ) {
    super(message || `Missing required GHL custom fields: ${missingFields.join(', ')}`);
    this.name = 'FieldMappingError';
  }
}

/**
 * Field mapping result
 */
export interface FieldMappingResult {
  mapping: FieldMapping;
  missingRequired: string[];
  missingOptional: string[];
  allFields: GHLCustomField[];
}

// Memoized field map (per server instance)
let cachedFieldMap: FieldMappingResult | null = null;

/**
 * Normalize field name for matching
 * Handles variations in naming (case-insensitive, whitespace, etc.)
 */
function normalizeFieldName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[^a-z0-9\s]/g, '');
}

/**
 * Find field by name (fuzzy matching)
 * Tries exact match first, then normalized match
 */
function findFieldByName(
  fields: GHLCustomField[],
  friendlyName: string
): GHLCustomField | null {
  const normalized = normalizeFieldName(friendlyName);
  
  // Try exact match first (case-insensitive)
  let match = fields.find(f => 
    f.name.toLowerCase().trim() === friendlyName.toLowerCase().trim()
  );
  
  if (match) return match;
  
  // Try normalized match
  match = fields.find(f => 
    normalizeFieldName(f.name) === normalized
  );
  
  if (match) return match;
  
  // Try partial match (contains)
  match = fields.find(f => 
    normalizeFieldName(f.name).includes(normalized) ||
    normalized.includes(normalizeFieldName(f.name))
  );
  
  return match || null;
}

/**
 * Fetch custom fields directly from GHL (server-side only)
 * Reuses the same logic as /api/ghl/fields but without HTTP overhead
 */
async function fetchGHLFields(): Promise<GHLCustomField[]> {
  // Check if discovery envs are present
  const discoveryBase = process.env.GHL_CF_DISCOVERY_BASE;
  const discoveryPath = process.env.GHL_CF_DISCOVERY_PATH || '/v1/custom-fields/';
  const apiKey = process.env.GHL_API_KEY;

  if (!discoveryBase || !apiKey) {
    throw new Error('GHL custom-field discovery not configured');
  }

  // Build discovery URL
  const url = `${discoveryBase}${discoveryPath}`.replace(/\/+/g, '/').replace(/^https?:\//, 'https://');

  // Fetch custom fields from GHL
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GHL API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();

  // Normalize response - GHL may return fields in different formats
  let fields: any[] = [];
  
  if (Array.isArray(data)) {
    fields = data;
  } else if (data.customFields && Array.isArray(data.customFields)) {
    fields = data.customFields;
  } else if (data.fields && Array.isArray(data.fields)) {
    fields = data.fields;
  } else if (data.data && Array.isArray(data.data)) {
    fields = data.data;
  } else {
    const arrayKeys = Object.keys(data).filter(key => Array.isArray(data[key]));
    if (arrayKeys.length > 0) {
      fields = data[arrayKeys[0]];
    }
  }

  // Normalize all fields
  return fields
    .map((field: any) => ({
      id: field.id || field.fieldId || '',
      name: field.name || field.label || '',
      fieldType: field.fieldType || field.type || 'text',
      options: field.options || field.choices || undefined,
    }))
    .filter((field: GHLCustomField) => field.id && field.name);
}

/**
 * Get field mapping from GHL custom fields
 * 
 * Fetches custom fields from GHL once (memoized) and builds a dictionary
 * mapping friendly names to field IDs.
 * 
 * @returns Field mapping result with mapping, missing fields, and all fields
 * @throws FieldMappingError if required fields are missing
 */
export async function getFieldMap(): Promise<FieldMappingResult> {
  // Return cached result if available
  if (cachedFieldMap) {
    return cachedFieldMap;
  }

  try {
    // Fetch custom fields directly from GHL (server-side)
    const fields: GHLCustomField[] = await fetchGHLFields();

    // Build mapping dictionary
    const mapping: Partial<FieldMapping> = {};
    const missingRequired: string[] = [];
    const missingOptional: string[] = [];

    // Map all required fields
    for (const friendlyName of REQUIRED_FIELDS) {
      const field = findFieldByName(fields, friendlyName);
      if (field) {
        mapping[friendlyName] = field.id;
      } else {
        missingRequired.push(friendlyName);
      }
    }

    // Map optional fields
    for (const friendlyName of OPTIONAL_FIELDS) {
      const field = findFieldByName(fields, friendlyName);
      if (field) {
        mapping[friendlyName] = field.id;
      } else {
        missingOptional.push(friendlyName);
      }
    }

    // Build result
    const result: FieldMappingResult = {
      mapping: mapping as FieldMapping,
      missingRequired,
      missingOptional,
      allFields: fields,
    };

    // Cache the result
    cachedFieldMap = result;

    // If required fields are missing, throw error (but still return result for debugging)
    if (missingRequired.length > 0) {
      throw new FieldMappingError(
        missingRequired,
        `Missing required GHL custom fields: ${missingRequired.join(', ')}. Please create these fields in GHL.`
      );
    }

    return result;
  } catch (error) {
    if (error instanceof FieldMappingError) {
      // Re-throw field mapping errors
      throw error;
    }

    // For other errors, throw with context
    throw new Error(
      `Failed to build field mapping: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

/**
 * Get field ID by friendly name
 * 
 * @param friendlyName Friendly field name (e.g., "Engagement Type")
 * @returns Field ID (e.g., "cf_123ABC") or null if not found
 */
export async function getFieldId(friendlyName: keyof FieldMapping): Promise<string | null> {
  const fieldMap = await getFieldMap();
  return fieldMap.mapping[friendlyName] || null;
}

/**
 * Clear cached field map (useful for testing or forced refresh)
 */
export function clearFieldMapCache(): void {
  cachedFieldMap = null;
}

