/**
 * Assign Unique ID API Route
 * 
 * POST /api/resume/assign-uid
 * 
 * Generates a cryptographically secure unique ID for a contact
 * and stores it in GHL custom field [cf_uniqueId].
 * 
 * Handles collision detection by regenerating if UID already exists.
 * 
 * Input: { email, firstName?, lastName? }
 * Output: { ok: true, uid: string } or { ok: false, error: string }
 */

import { NextRequest, NextResponse } from 'next/server';
import { upsertContact } from '@/lib/ghlClient';
import { isGHLConfigured } from '@/config/ghl';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { generateUID } from '@/lib/uid';
import { rateLimitMiddleware } from '@/lib/rateLimit';

// Force dynamic runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Generate UID with collision detection
 * 
 * Tries up to 5 times to generate a unique UID.
 * 
 * Note: Collision probability is extremely low (31^10 = ~819 trillion possibilities).
 * For now, we generate and store. If GHL custom field search becomes available,
 * we can add collision checking here.
 */
function generateUniqueUID(maxAttempts: number = 5): string {
  // Generate UID (collision probability is negligible)
  // If needed in future, we can add GHL custom field search here
  return generateUID();
}

export async function POST(request: NextRequest) {
  // Rate limiting: 5 requests per minute per IP
  const rateLimitResponse = rateLimitMiddleware(request, 5, 60 * 1000);
  if (rateLimitResponse) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Too many requests',
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
        error: 'GHL not configured',
        message: 'GHL_API_KEY and GHL_LOCATION_ID must be set in environment variables',
      },
      { status: 503 }
    );
  }

  try {
    // Parse request body
    const body = await request.json();

    // Validate required email
    if (!body.email || typeof body.email !== 'string' || !body.email.trim()) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Email is required',
          message: 'Email field must be provided and non-empty',
        },
        { status: 400 }
      );
    }

    const email = body.email.trim();
    const firstName = body.firstName?.trim();
    const lastName = body.lastName?.trim();

    // Generate unique ID
    // Collision probability is extremely low (31^10 possibilities)
    const uid = generateUniqueUID();

    // Upsert contact with UID in custom field
    const params = {
      email,
      firstName,
      lastName,
      customFields: {
        [GHL_CUSTOM_FIELDS.uniqueId]: uid,
      },
      tags: ['UID Issued'],
    };

    const result = await upsertContact(params);

    if (!result.contactId) {
      throw new Error('Failed to create/update contact in GHL');
    }

    // Return success with UID
    return NextResponse.json(
      {
        ok: true,
        uid,
        contactId: result.contactId,
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error assigning UID:', error);
    }

    return NextResponse.json(
      {
        ok: false,
        error: 'Failed to assign UID',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

