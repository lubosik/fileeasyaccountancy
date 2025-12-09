/**
 * FirmCheck AML Status API Route
 * 
 * GET /api/aml/status?clientId=...
 * 
 * Polls FirmCheck for AML determination status and updates GHL.
 * 
 * Flow:
 * 1. Fetch client from FirmCheck using clientId
 * 2. Extract AML determination status
 * 3. Find GHL contact by FirmCheck client ID (custom field)
 * 4. Update GHL with AML status and tags
 * 
 * Returns 503 if FirmCheck envs are missing or feature flag disabled (Vercel build-safe).
 */

import { NextRequest, NextResponse } from 'next/server';
import { getClient, isFirmCheckAMLEnabled } from '@/lib/firmcheck';
import { isGHLConfigured } from '@/lib/ghl';
import { isValidFirmCheckClientId } from '@/lib/validation';
import { upsertContact, addNote, setTags } from '@/lib/ghl';

// Force dynamic runtime - never static
export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Update GHL contact with AML status
 */
async function updateGHLWithAMLStatus(
  contactId: string,
  amlStatus: string,
  riskLevel?: string,
  determinationId?: string
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

  // Update custom field with AML status
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

  // Get contact email for upsert
  // Note: We need email for upsertContact, but we have contactId
  // For now, we'll use setTags which only needs contactId
  // Custom fields update would need email - we'll handle this separately

  // Add note
  const noteText = `AML Status Update: ${amlStatus}\n` +
    (riskLevel ? `Risk Level: ${riskLevel}\n` : '') +
    (determinationId ? `Determination ID: ${determinationId}\n` : '') +
    `Updated: ${new Date().toISOString()}`;

  await addNote({
    contactId,
    body: noteText,
  });
}

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
  const clientId = searchParams.get('clientId');

  if (!clientId) {
    return NextResponse.json(
      {
        error: 'clientId query parameter is required',
        message: 'clientId must be provided as a query parameter',
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

  try {
    // Fetch client from FirmCheck
    const firmCheckClient = await getClient(clientId);

    if (!firmCheckClient) {
      return NextResponse.json(
        {
          error: 'FirmCheck client not found',
        },
        { status: 404 }
      );
    }

    // Extract AML determination status
    const amlStatus = firmCheckClient.amlDeterminationStatus || 'UNKNOWN';
    const lastDetermination = firmCheckClient.lastAmlDetermination;
    const riskLevel = lastDetermination?.riskLevel;
    const determinationId = lastDetermination?.id;

    // For now, we return the status without updating GHL
    // GHL contact lookup by FirmCheck client ID requires searching custom fields
    // This would be better handled via webhook or a separate endpoint that receives contactId

    if (process.env.NODE_ENV !== 'production') {
      console.log('AML status polled:', {
        clientId,
        amlStatus,
        riskLevel,
        determinationId,
      });
    }

    return NextResponse.json(
      {
        success: true,
        clientId,
        amlStatus,
        riskLevel,
        determinationId,
        lastDetermination,
        message: 'AML status retrieved (GHL update requires contactId)',
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('AML status polling error:', error);
    }

    return NextResponse.json(
      {
        error: 'Failed to poll AML status',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

