/**
 * Get FirmCheck Client ID from GHL Contact
 * 
 * GET /api/aml/get-client-id?contactId=...
 * 
 * Retrieves FirmCheck client ID from GHL contact custom fields.
 * Used by client-side components to start AML status polling.
 * 
 * Returns 503 if GHL/FirmCheck envs are missing or feature flag disabled.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getContact, isGHLConfigured } from '@/lib/ghl';
import { isFirmCheckAMLEnabled } from '@/lib/firmcheck';
import { isValidContactId } from '@/lib/validation';
import { getFieldMap } from '@/lib/ghlFieldMap';

// Force dynamic runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  // Check feature flag
  if (!isFirmCheckAMLEnabled()) {
    return NextResponse.json(
      {
        error: 'FirmCheck AML integration disabled',
        message: 'FE_GHL_AML_ENABLED must be set to "true" and FirmCheck must be configured',
      },
      { status: 503 }
    );
  }

  // Check if GHL is configured
  if (!isGHLConfigured()) {
    return NextResponse.json(
      {
        error: 'GHL not configured',
        message: 'GHL_API_KEY and GHL_LOCATION_ID must be set',
      },
      { status: 503 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const contactId = searchParams.get('contactId');

  if (!contactId) {
    return NextResponse.json(
      {
        error: 'contactId query parameter is required',
        message: 'contactId must be provided as a query parameter',
      },
      { status: 400 }
    );
  }

  // Validate contactId format
  if (!isValidContactId(contactId)) {
    return NextResponse.json(
      {
        error: 'Invalid contactId format',
        message: 'contactId must be a valid GHL contact ID',
      },
      { status: 400 }
    );
  }

  try {
    // Get contact from GHL
    const contact = await getContact(contactId);

    if (!contact) {
      return NextResponse.json(
        {
          error: 'Contact not found',
          message: `No GHL contact found for ID: ${contactId}`,
        },
        { status: 404 }
      );
    }

    // Get field map to find FirmCheck Client ID field
    const fieldMap = await getFieldMap();
    const firmCheckClientIdFieldId = fieldMap.mapping['FirmCheck Client ID'];

    if (!firmCheckClientIdFieldId) {
      return NextResponse.json(
        {
          error: 'FirmCheck Client ID field not found',
          message: 'FirmCheck Client ID custom field not configured in GHL',
        },
        { status: 500 }
      );
    }

    // Extract FirmCheck client ID from custom fields
    const customFields = Array.isArray(contact.customFields)
      ? contact.customFields
      : contact.customField
        ? Array.isArray(contact.customField)
          ? contact.customField
          : Object.entries(contact.customField).map(([field, value]) => ({ field, value }))
        : [];

    const firmCheckClientIdField = customFields.find(
      (cf: any) => cf.field === firmCheckClientIdFieldId || cf.id === firmCheckClientIdFieldId
    );

    const firmCheckClientId = firmCheckClientIdField?.value;

    if (!firmCheckClientId) {
      return NextResponse.json(
        {
          error: 'FirmCheck client ID not found',
          message: 'FirmCheck client has not been created for this contact yet',
          contactId,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        contactId,
        firmCheckClientId: String(firmCheckClientId),
        message: 'FirmCheck client ID retrieved successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error getting FirmCheck client ID:', error);
    }

    return NextResponse.json(
      {
        error: 'Failed to retrieve FirmCheck client ID',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

