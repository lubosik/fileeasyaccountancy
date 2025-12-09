/**
 * GHL Contact Search Utilities
 * 
 * Helper functions for searching GHL contacts by custom field values.
 * Used primarily for finding contacts by FirmCheck Client ID or other identifiers.
 */

import { createGHLClient, getGHLConfig, isGHLConfigured } from '@/lib/ghl';
import { getFieldMap } from '@/lib/ghlFieldMap';

/**
 * Search for GHL contact by custom field value
 * 
 * Note: GHL API may not support direct custom field search.
 * This implementation uses a workaround by fetching contacts and filtering.
 * 
 * For production use, consider:
 * 1. Storing contactId -> FirmCheck clientId mapping in a database
 * 2. Using GHL's search API if it supports custom field filters
 * 3. Including contactId in webhook metadata (preferred approach)
 * 
 * @param customFieldName Friendly name of custom field (e.g., 'FirmCheck Client ID')
 * @param value Value to search for
 * @returns Contact ID if found, null otherwise
 */
export async function searchContactByCustomField(
  customFieldName: string,
  value: string
): Promise<string | null> {
  if (!isGHLConfigured()) {
    return null;
  }

  if (!value || !customFieldName) {
    return null;
  }

  try {
    // Get field map to find the actual field ID
    const fieldMap = await getFieldMap();
    const fieldId = fieldMap.mapping[customFieldName as keyof typeof fieldMap.mapping];

    if (!fieldId) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Custom field "${customFieldName}" not found in field map`);
      }
      return null;
    }

    const client = createGHLClient();
    if (!client) {
      return null;
    }

    const config = getGHLConfig()!;

    // GHL LeadConnector API: Search contacts
    // Note: This is a simplified search - for production, consider pagination
    // and more efficient search methods if GHL API supports them
    
    // Try to use GHL's search endpoint if available
    // For now, we'll use a basic approach that can be enhanced
    const searchResponse = await client('/contacts/search', 'POST', {
      locationId: config.locationId,
      // Note: GHL search may not support custom field filters directly
      // This is a placeholder for future enhancement
    });

    if (!searchResponse.ok) {
      // If search endpoint doesn't work, return null
      // In production, you might want to implement a different strategy
      if (process.env.NODE_ENV !== 'production') {
        console.warn('GHL contact search endpoint not available or failed');
      }
      return null;
    }

    const result = await searchResponse.json();
    
    // Search through contacts for matching custom field value
    const contacts = result.contacts || result.data || [];
    
    if (Array.isArray(contacts)) {
      for (const contact of contacts) {
        // Check custom fields for match
        const customFields = contact.customFields || contact.customField || [];
        const fieldsArray = Array.isArray(customFields) 
          ? customFields 
          : Object.entries(customFields).map(([field, value]) => ({ field, value }));

        for (const field of fieldsArray) {
          const fieldIdMatch = field.field === fieldId || field.id === fieldId;
          const valueMatch = String(field.value || '').trim() === String(value).trim();
          
          if (fieldIdMatch && valueMatch) {
            return contact.id || contact.contactId;
          }
        }
      }
    }

    return null;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error searching contact by custom field:', error);
    }
    return null;
  }
}

/**
 * Search for GHL contact by FirmCheck Client ID
 * 
 * Convenience wrapper for searchContactByCustomField
 * 
 * @param firmCheckClientId FirmCheck client ID to search for
 * @returns Contact ID if found, null otherwise
 */
export async function searchContactByFirmCheckClientId(
  firmCheckClientId: string
): Promise<string | null> {
  return searchContactByCustomField('FirmCheck Client ID', firmCheckClientId);
}

