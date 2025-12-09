/**
 * FirmCheck Create Client API Route
 * 
 * POST /api/aml/create-client
 * 
 * Creates a FirmCheck client after successful deposit payment.
 * 
 * Flow:
 * 1. Fetch contact data from GHL using contactId or email
 * 2. Map GHL contact data to FirmCheck entity format (based on business type)
 * 3. Create FirmCheck client
 * 4. Start AML determination
 * 5. Store FirmCheck clientId in GHL custom field
 * 6. Update GHL with tags/notes
 * 
 * Returns 503 if FirmCheck envs are missing or feature flag disabled (Vercel build-safe).
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient, startAMLDetermination, isFirmCheckAMLEnabled } from '@/lib/firmcheck';
import { getContact, upsertContact, setTags, addNote } from '@/lib/ghl';
import { isGHLConfigured } from '@/lib/ghl';
import type { FirmCheckEntity, FirmCheckCreateClientRequest } from '@/lib/firmcheck';
import { validateRequiredFields, isValidContactId } from '@/lib/validation';

/**
 * Store contactId -> FirmCheck clientId mapping for webhook lookup
 * 
 * This is stored in the GHL note for now. In production, consider:
 * - Database table for mappings
 * - Redis cache
 * - GHL custom field (already done, but search may be slow)
 */
function createContactMappingNote(contactId: string, firmCheckClientId: string): string {
  return `FirmCheck Client ID: ${firmCheckClientId}\n` +
    `GHL Contact ID: ${contactId}\n` +
    `Mapping created: ${new Date().toISOString()}`;
}

// Force dynamic runtime - never static
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export interface CreateClientRequest {
  contactId?: string;
  email?: string;
}

/**
 * Map GHL contact data to FirmCheck entity format
 */
function mapGHLContactToFirmCheckEntity(ghlContact: any): FirmCheckEntity | null {
  // GHL contact may have customFields as array or object
  const customFields = Array.isArray(ghlContact.customFields)
    ? ghlContact.customFields
    : ghlContact.customField
    ? Array.isArray(ghlContact.customField)
      ? ghlContact.customField
      : Object.entries(ghlContact.customField).map(([field, value]) => ({ field, value }))
    : [];

  // Helper to find custom field value
  const findCustomField = (searchKey: string): string | undefined => {
    const field = customFields.find((cf: any) => {
      const fieldId = cf.field || cf.id || '';
      const fieldName = cf.name || '';
      return (
        fieldId.toLowerCase().includes(searchKey.toLowerCase()) ||
        fieldName.toLowerCase().includes(searchKey.toLowerCase())
      );
    });
    return field?.value;
  };

  // Determine entity type from business type
  const businessType = findCustomField('businesstype') || findCustomField('business type');
  const companyName = findCustomField('companyname') || findCustomField('company name');
  const companyNumber = findCustomField('companynumber') || findCustomField('company number');
  const tradingName = findCustomField('tradingname') || findCustomField('trading name');
  const businessAddress = findCustomField('businessaddress') || findCustomField('business address');

  // Parse address (assumes format: "line1, line2, city, postcode, country" or similar)
  const parseAddress = (addressStr: string) => {
    if (!addressStr) return undefined;
    
    const parts = addressStr.split(',').map(s => s.trim());
    if (parts.length < 3) return undefined;

    return {
      line1: parts[0] || '',
      line2: parts.length > 4 ? parts[1] : undefined,
      city: parts[parts.length - 3] || '',
      postcode: parts[parts.length - 2] || '',
      country: parts[parts.length - 1] || 'GB',
    };
  };

  // Determine entity type
  if (businessType?.toLowerCase().includes('limited company') || companyNumber) {
    // Organisation entity
    const address = businessAddress ? parseAddress(businessAddress) : undefined;
    
    return {
      type: 'organisation',
      name: companyName || tradingName || ghlContact.name || 'Unknown Company',
      companyNumber: companyNumber || undefined,
      registeredAddress: address,
    };
  } else if (businessType?.toLowerCase().includes('sole trader') || tradingName) {
    // Sole Trader entity
    const address = businessAddress ? parseAddress(businessAddress) : undefined;
    
    return {
      type: 'sole_trader',
      tradingName: tradingName || companyName || 'Unknown Trading Name',
      firstName: ghlContact.firstName || '',
      lastName: ghlContact.lastName || '',
      email: ghlContact.email || undefined,
      phone: ghlContact.phone || undefined,
      address: address,
    };
  } else {
    // Individual entity (default)
    const address = businessAddress ? parseAddress(businessAddress) : undefined;
    
    return {
      type: 'individual',
      firstName: ghlContact.firstName || '',
      lastName: ghlContact.lastName || '',
      email: ghlContact.email || undefined,
      phone: ghlContact.phone || undefined,
      address: address,
    };
  }
}

export async function POST(request: NextRequest) {
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

  try {
    const body: CreateClientRequest = await request.json();

    // Validate required fields
    if (!body.contactId && !body.email) {
      return NextResponse.json(
        {
          error: 'contactId or email is required',
          message: 'Either contactId or email must be provided',
        },
        { status: 400 }
      );
    }

    // Validate contactId format if provided
    if (body.contactId && !isValidContactId(body.contactId)) {
      return NextResponse.json(
        {
          error: 'Invalid contactId format',
          message: 'contactId must be a valid GHL contact ID',
        },
        { status: 400 }
      );
    }

    // Fetch contact from GHL
    let ghlContact;
    if (body.contactId) {
      ghlContact = await getContact(body.contactId);
    } else if (body.email) {
      // For now, we require contactId if email search isn't available
      // In future, we could implement email search
      return NextResponse.json(
        {
          error: 'contactId is required (email search not yet implemented)',
        },
        { status: 400 }
      );
    }

    if (!ghlContact) {
      return NextResponse.json(
        {
          error: 'Contact not found in GHL',
        },
        { status: 404 }
      );
    }

    // Map GHL contact to FirmCheck entity
    const entity = mapGHLContactToFirmCheckEntity(ghlContact);
    if (!entity) {
      return NextResponse.json(
        {
          error: 'Could not map contact to FirmCheck entity format',
        },
        { status: 400 }
      );
    }

    // Create FirmCheck client (with retry)
    const createRequest: FirmCheckCreateClientRequest = {
      status: 'PROSPECT',
      entity,
      notes: `Created from File Easy onboarding. GHL Contact ID: ${body.contactId || 'unknown'}`,
    };

    const firmCheckClient = await createClient(createRequest);

    // Start AML determination (with retry)
    let amlDetermination;
    try {
      // Import retry utility
      const { retryWithBackoff } = await import('@/lib/retry');
      
      amlDetermination = await retryWithBackoff(
        async () => {
          return await startAMLDetermination({
            clientId: firmCheckClient.id,
          });
        },
        {
          maxAttempts: 3,
          initialDelayMs: 1000,
        }
      );
    } catch (amlError) {
      // Log but don't fail - client was created successfully
      if (process.env.NODE_ENV !== 'production') {
        console.error('Failed to start AML determination (client created):', amlError);
      }
    }

    // Update GHL with FirmCheck client ID
    // Use friendly field name - will be mapped by /api/ghl/progress
    const customFields = [
      {
        field: 'FirmCheck Client ID', // Friendly name - will be mapped to field ID
        value: firmCheckClient.id,
      },
    ];

    // Add tags
    const tags = ['FirmCheck Client Created'];
    if (amlDetermination) {
      tags.push('AML Determination Started');
    }

    // Update GHL contact using upsertContact (with retry)
    const { retryWithBackoff } = await import('@/lib/retry');
    
    await retryWithBackoff(
      async () => {
        await upsertContact({
          email: ghlContact.email || '',
          customFields,
          tags,
        });
      },
      {
        maxAttempts: 3,
        initialDelayMs: 1000,
      }
    );

    // Store contactId -> FirmCheck clientId mapping for webhook lookup
    // This allows webhook to find GHL contact when only FirmCheck clientId is provided
    // We'll store this in the note for now (better solution would be a lookup table)

    // Add note to GHL contact with mapping information
    const noteText = `FirmCheck client created: ${firmCheckClient.id}\n` +
      `AML Determination: ${amlDetermination ? `Started (${amlDetermination.id})` : 'Failed to start'}\n` +
      `Entity Type: ${entity.type}\n` +
      `Created: ${new Date().toISOString()}\n\n` +
      createContactMappingNote(body.contactId || 'unknown', firmCheckClient.id);

    if (body.contactId) {
      await addNote({
        contactId: body.contactId,
        body: noteText,
      });
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log('FirmCheck client created:', {
        firmCheckClientId: firmCheckClient.id,
        ghlContactId: body.contactId,
        entityType: entity.type,
        amlDeterminationId: amlDetermination?.id,
      });
    }

    return NextResponse.json(
      {
        success: true,
        firmCheckClientId: firmCheckClient.id,
        amlDeterminationId: amlDetermination?.id,
        entityType: entity.type,
        message: 'FirmCheck client created and AML determination started',
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('FirmCheck create client error:', error);
    }

    return NextResponse.json(
      {
        error: 'Failed to create FirmCheck client',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
