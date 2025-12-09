/**
 * GHL Progress Update API Route
 * 
 * POST /api/ghl/progress
 * 
 * Upserts contact in GHL with latest onboarding progress.
 * Called on every "Next/Continue" button in the wizard.
 * 
 * Uses field mapping to translate friendly names to GHL field IDs.
 * Uses LeadConnector API: POST /contacts/upsert with Version header.
 * 
 * Returns 503 if GHL envs are missing (Vercel build-safe).
 */

import { NextRequest, NextResponse } from 'next/server';
import { upsertContact } from '@/lib/ghl';
import { getFieldMap, FieldMappingError } from '@/lib/ghlFieldMap';
import { isGHLConfigured } from '@/lib/ghl';
import { validateAndSanitizeEmail, validateRequiredFields } from '@/lib/validation';

// Force dynamic runtime - never static
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export interface GHLProgressRequest {
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
  custom?: Record<string, any>; // Friendly field names -> values
}

/**
 * Map friendly field names to GHL field IDs
 */
async function mapCustomFields(
  customFields: Record<string, any>
): Promise<Array<{ field: string; value: any }>> {
  if (!customFields || Object.keys(customFields).length === 0) {
    return [];
  }

  try {
    // Get field mapping
    const fieldMap = await getFieldMap();
    const mapped: Array<{ field: string; value: any }> = [];

    // Translate each friendly name to field ID
    for (const [friendlyName, value] of Object.entries(customFields)) {
      // Try to find field ID for this friendly name
      const fieldId = fieldMap.mapping[friendlyName as keyof typeof fieldMap.mapping];
      
      if (fieldId) {
        // Convert value to string if needed (GHL expects strings)
        const stringValue = Array.isArray(value) 
          ? value.join(', ') 
          : value === null || value === undefined 
            ? '' 
            : String(value);
        
        mapped.push({
          field: fieldId,
          value: stringValue,
        });
      } else {
        // Field not found in mapping - log warning but don't fail
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Custom field "${friendlyName}" not found in field mapping. Skipping.`);
        }
      }
    }

    return mapped;
  } catch (error) {
    // If field mapping fails, log but don't block progress update
    if (process.env.NODE_ENV !== 'production') {
      console.error('Field mapping error (continuing without custom fields):', error);
    }
    // Return empty array - contact will be updated without custom fields
    return [];
  }
}

export async function POST(request: NextRequest) {
  // Check if GHL is configured
  if (!isGHLConfigured()) {
    return NextResponse.json(
      {
        error: 'GHL progress updates disabled',
        message: 'GHL_API_KEY and GHL_LOCATION_ID must be set',
      },
      { status: 503 }
    );
  }

  // Parse body once (we'll need it for error handling)
  let body: GHLProgressRequest;
  try {
    body = await request.json();
  } catch (parseError) {
    return NextResponse.json(
      {
        error: 'Invalid request body',
        message: 'Request body must be valid JSON',
      },
      { status: 400 }
    );
  }

  try {

    // Validate required fields
    const requiredValidation = validateRequiredFields(body, ['email']);
    if (!requiredValidation.valid) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          message: `Required fields: ${requiredValidation.missing.join(', ')}`,
          missing: requiredValidation.missing,
        },
        { status: 400 }
      );
    }

    // Validate and sanitize email
    const emailValidation = validateAndSanitizeEmail(body.email);
    if (!emailValidation.valid) {
      return NextResponse.json(
        {
          error: 'Invalid email format',
          message: 'Email must be a valid email address',
        },
        { status: 400 }
      );
    }

    // Map custom fields from friendly names to GHL field IDs
    const customFieldsArray = body.custom 
      ? await mapCustomFields(body.custom)
      : [];

    // Build upsert params (use sanitized email)
    const upsertParams = {
      email: emailValidation.sanitized,
      phone: body.phone?.trim(),
      firstName: body.firstName?.trim(),
      lastName: body.lastName?.trim(),
      tags: body.tags?.filter(tag => typeof tag === 'string' && tag.trim()) || [],
      customFields: customFieldsArray,
    };

    // Upsert contact in GHL (with retry)
    const { retryWithBackoff } = await import('@/lib/retry');
    
    const result = await retryWithBackoff(
      async () => {
        return await upsertContact(upsertParams);
      },
      {
        maxAttempts: 3,
        initialDelayMs: 1000,
      }
    );

    if (process.env.NODE_ENV !== 'production') {
      console.log('GHL progress update successful:', {
        contactId: result.contactId,
        email: body.email,
        tagsCount: upsertParams.tags.length,
        customFieldsCount: customFieldsArray.length,
      });
    }

    // Return success with contact ID
    return NextResponse.json(
      {
        success: true,
        contactId: result.contactId,
        message: 'Contact updated in GHL',
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('GHL progress update error:', error);
    }

    // Handle field mapping errors gracefully
    if (error instanceof FieldMappingError) {
      // Still try to update contact without custom fields (body already parsed)
      try {
        const upsertParams = {
          email: body.email.trim(),
          phone: body.phone?.trim(),
          firstName: body.firstName?.trim(),
          lastName: body.lastName?.trim(),
          tags: body.tags?.filter(tag => typeof tag === 'string' && tag.trim()) || [],
          customFields: [], // Skip custom fields if mapping fails
        };

        const result = await upsertContact(upsertParams);
        
        return NextResponse.json(
          {
            success: true,
            contactId: result.contactId,
            warning: 'Contact updated but some custom fields could not be mapped',
            missingFields: error.missingFields,
          },
          { status: 200 }
        );
      } catch (retryError) {
        // If retry also fails, return error
        return NextResponse.json(
          {
            error: 'Failed to update contact',
            message: error.message,
          },
          { status: 500 }
        );
      }
    }

    // Other errors
    return NextResponse.json(
      {
        error: 'Failed to update contact',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

