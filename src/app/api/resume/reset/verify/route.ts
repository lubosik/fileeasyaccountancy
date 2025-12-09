/**
 * UID Reset Verify API Route
 * 
 * POST /api/resume/reset/verify
 * 
 * Verifies the 6-digit code and resets the UID if valid.
 * 
 * Input: { email, code }
 * Output: { ok: true, newUid: string } or { ok: false, message: string }
 */

import { NextRequest, NextResponse } from 'next/server';
import { isGHLConfigured, GHL_BASE_URL, GHL_API_KEY, FILE_EASY_LOCATION_ID } from '@/config/ghl';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { verifyResetCode, isResetCodeExpired } from '@/lib/resetCode';
import { generateUID } from '@/lib/uid';
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
        message: 'Reset functionality is not available at this time.',
      },
      { status: 503 }
    );
  }

  try {
    // Parse request body
    const body = await request.json();

    // Validate inputs
    if (!body.email || typeof body.email !== 'string' || !body.email.trim()) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Email is required',
        },
        { status: 400 }
      );
    }

    if (!body.code || typeof body.code !== 'string' || !body.code.trim()) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Verification code is required',
        },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();
    const code = body.code.trim();

    // Validate code format (6 digits)
    if (!/^\d{6}$/.test(code)) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Invalid code format',
        },
        { status: 400 }
      );
    }

    // Search for contact by email
    const contact = await searchContactByEmail(email);

    if (!contact) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Invalid code or code has expired. Please request a new code.',
        },
        { status: 404 }
      );
    }

    // Extract reset token hash and expiry from custom fields
    let tokenHash: string | null = null;
    let tokenExpiry: string | null = null;

    if (contact.customField && Array.isArray(contact.customField)) {
      for (const field of contact.customField) {
        if (field.field === GHL_CUSTOM_FIELDS.uidResetTokenHash) {
          tokenHash = field.value;
        }
        if (field.field === GHL_CUSTOM_FIELDS.uidResetTokenExpiry) {
          tokenExpiry = field.value;
        }
      }
    }

    // Check if token exists
    if (!tokenHash || !tokenExpiry) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Invalid code or code has expired. Please request a new code.',
        },
        { status: 400 }
      );
    }

    // Check if token has expired
    if (isResetCodeExpired(parseInt(tokenExpiry))) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Code has expired. Please request a new code.',
        },
        { status: 400 }
      );
    }

    // Verify code against hash
    if (!verifyResetCode(code, tokenHash)) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Invalid code. Please check and try again.',
        },
        { status: 400 }
      );
    }

    // Code is valid - generate new UID
    const newUid = generateUID();

    // Update contact with new UID and clear reset token fields
    await upsertContact({
      email,
      customFields: {
        [GHL_CUSTOM_FIELDS.uniqueId]: newUid,
        [GHL_CUSTOM_FIELDS.uidResetTokenHash]: '', // Clear
        [GHL_CUSTOM_FIELDS.uidResetTokenExpiry]: '', // Clear
        [GHL_CUSTOM_FIELDS.resumePayloadV1]: '', // Clear temp reset code
      },
      tags: ['UID Reset – Done', 'UID Email – Send'], // Tag to trigger confirmation email
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log('UID reset successful for:', email, 'New UID:', newUid);
    }

    // Return success with new UID
    return NextResponse.json(
      {
        ok: true,
        newUid,
        message: 'Your unique ID has been reset successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error in reset verify:', error);
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

