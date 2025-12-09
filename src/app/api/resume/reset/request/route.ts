/**
 * UID Reset Request API Route
 * 
 * POST /api/resume/reset/request
 * 
 * Initiates UID reset by generating a 6-digit verification code
 * and sending it via GHL email automation.
 * 
 * Input: { surname, email }
 * Output: { ok: true } or { ok: false, message: string }
 */

import { NextRequest, NextResponse } from 'next/server';
import { isGHLConfigured, GHL_BASE_URL, GHL_API_KEY, FILE_EASY_LOCATION_ID } from '@/config/ghl';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { generateResetCode, hashResetCode, generateExpiry } from '@/lib/resetCode';
import { upsertContact } from '@/lib/ghlClient';
import { rateLimitMiddleware } from '@/lib/rateLimit';

// Force dynamic runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Search for contact by email (helper)
 */
async function searchContactByEmail(email: string): Promise<any | null> {
  if (!isGHLConfigured()) {
    return null;
  }

  try {
    const headers: HeadersInit = {
      'Authorization': `Bearer ${GHL_API_KEY}`,
      'Content-Type': 'application/json',
    };

    if (FILE_EASY_LOCATION_ID) {
      headers['X-Location-Id'] = FILE_EASY_LOCATION_ID;
    }

    const response = await fetch(`${GHL_BASE_URL}/contacts/`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    
    // Search through contacts for matching email
    if (result.contacts && Array.isArray(result.contacts)) {
      const normalizedEmail = email.toLowerCase().trim();
      const match = result.contacts.find((contact: any) => 
        contact.email?.toLowerCase().trim() === normalizedEmail
      );
      return match || null;
    }

    return null;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error searching contact by email:', error);
    }
    return null;
  }
}

export async function POST(request: NextRequest) {
  // Rate limiting: 5 requests per minute per IP
  const rateLimitResponse = rateLimitMiddleware(request, 5, 60 * 1000);
  if (rateLimitResponse) {
    return NextResponse.json(
      {
        ok: false,
        message: 'If your details matched, a verification code has been sent.',
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
        message: 'Reset functionality is not available at this time.',
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

    if (!body.email || typeof body.email !== 'string' || !body.email.trim()) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Email is required',
        },
        { status: 400 }
      );
    }

    const surname = body.surname.trim();
    const email = body.email.trim().toLowerCase();

    // Search for contact by email
    const contact = await searchContactByEmail(email);

    if (!contact) {
      // Return generic error (don't reveal if contact exists)
      return NextResponse.json(
        {
          ok: false,
          message: 'If your details matched, a verification code has been sent.',
        },
        { status: 200 } // Return 200 to prevent enumeration
      );
    }

    // Verify surname matches (case-insensitive)
    const contactLastName = (contact.lastName || '').trim().toLowerCase();
    const providedSurname = surname.toLowerCase();

    if (contactLastName !== providedSurname) {
      // Return generic error (don't reveal mismatch)
      return NextResponse.json(
        {
          ok: false,
          message: 'If your details matched, a verification code has been sent.',
        },
        { status: 200 } // Return 200 to prevent enumeration
      );
    }

    // Generate 6-digit code
    const resetCode = generateResetCode();
    const codeHash = hashResetCode(resetCode);
    const expiry = generateExpiry();

    // Store hashed code and expiry in GHL custom fields
    // Also store in server memory as fallback (for this implementation, we'll use GHL only)
    await upsertContact({
      email,
      customFields: {
        [GHL_CUSTOM_FIELDS.uidResetTokenHash]: codeHash,
        [GHL_CUSTOM_FIELDS.uidResetTokenExpiry]: expiry.toString(),
      },
      tags: ['UID Reset Code – Send'],
    });

    // Note: The actual code (not hashed) needs to be sent via GHL email
    // GHL automation should use a merge field that we set temporarily
    // For now, we'll store the code in a temporary custom field that GHL can use
    // In production, you might want to use GHL's merge field system differently
    
    // Store code temporarily in resumePayloadV1 (as JSON) for GHL email merge
    // This is a workaround - ideally GHL would support dynamic merge fields
    const tempPayload = {
      resetCode: resetCode,
      expiresAt: new Date(expiry).toISOString(),
    };
    
    await upsertContact({
      email,
      customFields: {
        [GHL_CUSTOM_FIELDS.resumePayloadV1]: JSON.stringify(tempPayload),
      },
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log('Reset code generated for:', email, 'Code:', resetCode);
    }

    // Return success
    return NextResponse.json(
      {
        ok: true,
        message: 'Verification code sent to your email.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error in reset request:', error);
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

