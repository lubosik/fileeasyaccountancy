/**
 * Resume Lookup API Route
 * 
 * POST /api/resume/lookup
 * 
 * Looks up a contact by Surname + Unique ID and returns resume payload.
 * 
 * Input: { surname, uid }
 * Output: { ok: true, resumePayload: {...} } or { ok: false, message: string }
 */

import { NextRequest, NextResponse } from 'next/server';
import { isGHLConfigured, GHL_BASE_URL, GHL_API_KEY, FILE_EASY_LOCATION_ID } from '@/config/ghl';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { normalizeUID, isValidUID } from '@/lib/uid';
import { rateLimitMiddleware } from '@/lib/rateLimit';

// Force dynamic runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Search for contact by UID custom field
 * 
 * Note: GHL API may not support direct custom field search.
 * This implementation uses a workaround by fetching contacts and filtering.
 */
async function searchContactByUID(uid: string): Promise<any | null> {
  if (!isGHLConfigured()) {
    return null;
  }

  try {
    // Normalize UID
    const normalizedUid = normalizeUID(uid);
    if (!isValidUID(normalizedUid)) {
      return null;
    }

    // GHL API: Search contacts
    // Note: GHL may require email for search, so we'll use a different approach
    // Try to get contacts and filter by custom field
    // For now, we'll use a simplified approach: search by email if available,
    // or use a different GHL endpoint if available
    
    // Alternative: Use GHL's contact search with custom field filter
    // This may require GHL API v2 or specific endpoint
    // For now, we'll implement a basic search that can be enhanced later
    
    const response = await fetch(`${GHL_BASE_URL}/contacts/`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    
    // Search through contacts for matching UID in custom fields
    if (result.contacts && Array.isArray(result.contacts)) {
      for (const contact of result.contacts) {
        // Check custom fields for UID match
        if (contact.customField && Array.isArray(contact.customField)) {
          for (const field of contact.customField) {
            if (field.field === GHL_CUSTOM_FIELDS.uniqueId && 
                normalizeUID(field.value) === normalizedUid) {
              return contact;
            }
          }
        }
      }
    }

    return null;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error searching contact by UID:', error);
    }
    return null;
  }
}

/**
 * Build resume payload from GHL contact data
 */
function buildResumePayload(contact: any): any {
  const payload: any = {
    // Contact basics
    firstName: contact.firstName || '',
    lastName: contact.lastName || '',
    email: contact.email || '',
    phone: contact.phone || contact.phoneNumber || '',
    contactId: contact.id || '',
    
    // Extract custom fields
    lastCompletedStep: null,
  };

  // Extract custom fields
  if (contact.customField && Array.isArray(contact.customField)) {
    const customFields: Record<string, any> = {};
    
    for (const field of contact.customField) {
      customFields[field.field] = field.value;
      
      // Map known custom fields to resume payload
      if (field.field === GHL_CUSTOM_FIELDS.lastCompletedStep) {
        payload.lastCompletedStep = parseInt(field.value) || 1;
      }
      if (field.field === GHL_CUSTOM_FIELDS.engagementType) {
        payload.engagementType = field.value;
      }
      if (field.field === GHL_CUSTOM_FIELDS.selectedPackage) {
        payload.selectedPackage = field.value;
      }
      if (field.field === GHL_CUSTOM_FIELDS.paymentPreference) {
        payload.paymentPreference = field.value;
      }
      if (field.field === GHL_CUSTOM_FIELDS.uniqueId) {
        payload.uid = field.value;
      }
      // Add other fields as needed
    }
    
    payload.customFields = customFields;
  }

  // Extract from resumePayloadV1 if available (JSON snapshot)
  if (contact.customField) {
    const resumePayloadField = contact.customField.find(
      (f: any) => f.field === GHL_CUSTOM_FIELDS.resumePayloadV1
    );
    if (resumePayloadField && resumePayloadField.value) {
      try {
        const snapshot = JSON.parse(resumePayloadField.value);
        // Merge snapshot data into payload
        Object.assign(payload, snapshot);
      } catch (e) {
        // Ignore parse errors
      }
    }
  }

  // Default to step 1 if no lastCompletedStep
  if (!payload.lastCompletedStep) {
    payload.lastCompletedStep = 1;
  }

  return payload;
}

export async function POST(request: NextRequest) {
  // Rate limiting: 5 requests per minute per IP
  const rateLimitResponse = rateLimitMiddleware(request, 5, 60 * 1000);
  if (rateLimitResponse) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Too many requests. Please try again later.',
      },
      {
        status: 429,
        headers: rateLimitResponse.headers,
      }
    );
  }

  // Check if GHL is configured
  if (!isGHLConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Resume functionality is not available at this time.',
      },
      { status: 503 }
    );
  }

  try {
    // Parse request body
    const body = await request.json();

    // Validate inputs
    if (!body.surname || typeof body.surname !== 'string' || !body.surname.trim()) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Surname is required',
        },
        { status: 400 }
      );
    }

    if (!body.uid || typeof body.uid !== 'string' || !body.uid.trim()) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Unique ID is required',
        },
        { status: 400 }
      );
    }

    const surname = body.surname.trim();
    const uid = normalizeUID(body.uid);

    // Validate UID format
    if (!isValidUID(uid)) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Invalid Unique ID format',
        },
        { status: 400 }
      );
    }

    // Search for contact by UID
    const contact = await searchContactByUID(uid);

    if (!contact) {
      return NextResponse.json(
        {
          ok: false,
          message: 'No quote found with those details. Please check and try again.',
        },
        { status: 404 }
      );
    }

    // Verify surname matches (case-insensitive)
    const contactLastName = (contact.lastName || '').trim().toLowerCase();
    const providedSurname = surname.toLowerCase();

    if (contactLastName !== providedSurname) {
      return NextResponse.json(
        {
          ok: false,
          message: 'No quote found with those details. Please check and try again.',
        },
        { status: 404 }
      );
    }

    // Build resume payload
    const resumePayload = buildResumePayload(contact);

    // Return success with resume payload
    return NextResponse.json(
      {
        ok: true,
        resumePayload,
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error in resume lookup:', error);
    }

    return NextResponse.json(
      {
        ok: false,
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}

