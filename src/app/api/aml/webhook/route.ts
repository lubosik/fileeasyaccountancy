/**
 * FirmCheck AML Webhook Handler API Route
 * 
 * POST /api/aml/webhook
 * 
 * Receives webhook events from FirmCheck for AML status updates.
 * 
 * Expected webhook payload format:
 * {
 *   type: 'aml.determination.updated' | 'aml.determination.completed' | etc.,
 *   clientId: 'fc_client_123',
 *   determination: {
 *     id: 'aml_det_456',
 *     status: 'PASSED' | 'FAILED' | 'IN_PROGRESS' | 'IN_REVIEW',
 *     riskLevel: 'LOW' | 'MEDIUM' | 'HIGH',
 *     ...
 *   }
 * }
 * 
 * Flow:
 * 1. Parse webhook payload
 * 2. Extract clientId and AML status
 * 3. Find GHL contact by FirmCheck client ID (custom field search)
 * 4. Update GHL with AML status, tags, and notes
 * 
 * Returns 503 if FirmCheck envs are missing or feature flag disabled (Vercel build-safe).
 */

import { NextRequest, NextResponse } from 'next/server';
import { getClient, isFirmCheckAMLEnabled } from '@/lib/firmcheck';
import { isGHLConfigured } from '@/lib/ghl';
import { upsertContact, addNote, setTags, getContact } from '@/lib/ghl';
import { searchContactByFirmCheckClientId } from '@/lib/ghlContactSearch';
import { isValidFirmCheckClientId, isValidContactId } from '@/lib/validation';

// Force dynamic runtime - never static
export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Find GHL contact by FirmCheck client ID
 * 
 * Uses searchContactByFirmCheckClientId utility which searches custom fields.
 * Falls back gracefully if search is not available.
 */
async function findGHLContactByFirmCheckClientId(firmCheckClientId: string): Promise<string | null> {
  try {
    return await searchContactByFirmCheckClientId(firmCheckClientId);
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error finding GHL contact by FirmCheck client ID:', error);
    }
    return null;
  }
}

/**
 * Update GHL contact with AML status
 */
async function updateGHLWithAMLStatus(
  contactId: string,
  amlStatus: string,
  riskLevel?: string,
  determinationId?: string,
  firmCheckClientId?: string
): Promise<void> {
  // Map AML status to GHL tags
  const statusTags: string[] = [];
  const statusMap: Record<string, string> = {
    'IN_PROGRESS': 'AML – In Progress',
    'PASSED': 'AML – Passed',
    'FAILED': 'AML – Failed',
    'IN_REVIEW': 'AML – In Review',
  };

  if (statusMap[amlStatus]) {
    statusTags.push(statusMap[amlStatus]);
  }

  // Add risk level tag if available
  if (riskLevel) {
    statusTags.push(`AML Risk – ${riskLevel}`);
  }

  // Update tags
  if (statusTags.length > 0) {
    await setTags(contactId, statusTags);
  }

  // Get contact to get email for upsert
  const contact = await getContact(contactId);
  if (!contact || !contact.email) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Cannot update GHL: contact not found or missing email', contactId);
    }
    return;
  }

  // Update custom fields with AML status
  const customFields = [
    {
      field: 'AML Status', // Friendly name - will be mapped by field discovery
      value: amlStatus,
    },
  ];

  if (riskLevel) {
    customFields.push({
      field: 'AML Risk Level', // Friendly name
      value: riskLevel,
    });
  }

  if (determinationId) {
    customFields.push({
      field: 'AML Determination ID', // Friendly name
      value: determinationId,
    });
  }

  // Update contact with custom fields
  await upsertContact({
    email: contact.email,
    customFields,
    tags: statusTags,
  });

  // Add note
  const noteText = `AML Status Update: ${amlStatus}\n` +
    (riskLevel ? `Risk Level: ${riskLevel}\n` : '') +
    (determinationId ? `Determination ID: ${determinationId}\n` : '') +
    (firmCheckClientId ? `FirmCheck Client ID: ${firmCheckClientId}\n` : '') +
    `Updated: ${new Date().toISOString()}`;

  await addNote({
    contactId,
    body: noteText,
  });
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
    const body = await request.json();

    // Extract webhook data
    // FirmCheck webhook format may vary - handle multiple formats
    const clientId = body.clientId || body.data?.clientId || body.client?.id;
    const determination = body.determination || body.data?.determination || body.amlDetermination;
    const contactId = body.contactId || body.metadata?.contactId; // GHL contact ID (if provided)

    if (!clientId) {
      return NextResponse.json(
        {
          error: 'Missing clientId in webhook payload',
          message: 'clientId is required in webhook payload',
        },
        { status: 400 }
      );
    }

    // Validate clientId format
    if (!isValidFirmCheckClientId(clientId)) {
      return NextResponse.json(
        {
          error: 'Invalid clientId format',
          message: 'clientId must be a valid FirmCheck client ID',
        },
        { status: 400 }
      );
    }

    // Validate contactId format if provided
    if (contactId && !isValidContactId(contactId)) {
      return NextResponse.json(
        {
          error: 'Invalid contactId format',
          message: 'contactId must be a valid GHL contact ID',
        },
        { status: 400 }
      );
    }

    // Extract AML status
    const amlStatus = determination?.status || body.status || 'UNKNOWN';
    const riskLevel = determination?.riskLevel || body.riskLevel;
    const determinationId = determination?.id || body.determinationId;

    // Find GHL contact
    let ghlContactId: string | null = null;

    if (contactId) {
      // Use provided contactId (preferred)
      ghlContactId = contactId;
    } else {
      // Try to find by FirmCheck client ID (requires custom field search)
      ghlContactId = await findGHLContactByFirmCheckClientId(clientId);
    }

    if (!ghlContactId) {
      // Log but don't fail - webhook may be received before contact is created
      if (process.env.NODE_ENV !== 'production') {
        console.warn('GHL contact not found for FirmCheck client:', clientId);
      }

      return NextResponse.json(
        {
          received: true,
          warning: 'GHL contact not found - status not updated',
          clientId,
          amlStatus,
        },
        { status: 200 }
      );
    }

    // Update GHL with AML status (with retry)
    try {
      const { retryWithBackoff } = await import('@/lib/retry');
      
      await retryWithBackoff(
        async () => {
          await updateGHLWithAMLStatus(
            ghlContactId,
            amlStatus,
            riskLevel,
            determinationId,
            clientId
          );
        },
        {
          maxAttempts: 3,
          initialDelayMs: 1000,
        }
      );
    } catch (updateError) {
      // Log but don't fail webhook - FirmCheck expects 200
      if (process.env.NODE_ENV !== 'production') {
        console.error('Failed to update GHL with AML status (after retries):', updateError);
      }
      // Continue - webhook was received successfully
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log('AML status updated in GHL:', {
        ghlContactId,
        firmCheckClientId: clientId,
        amlStatus,
        riskLevel,
        determinationId,
      });
    }

    return NextResponse.json(
      {
        received: true,
        updated: true,
        ghlContactId,
        amlStatus,
        riskLevel,
        message: 'AML status updated in GHL',
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('FirmCheck webhook error:', error);
    }

    return NextResponse.json(
      {
        error: 'Webhook processing failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

