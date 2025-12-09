/**
 * UID Reminder API Route
 * 
 * POST /api/resume/reminder
 * 
 * Sends UID reminder email via GHL automation.
 * Uses Surname + Email to lookup contact and trigger email.
 * 
 * Input: { surname, email }
 * Output: { ok: true } or { ok: false }
 * 
 * Security: Always returns ok:true to prevent email enumeration.
 */

import { NextRequest, NextResponse } from 'next/server';
import { isGHLConfigured, GHL_BASE_URL, GHL_API_KEY, FILE_EASY_LOCATION_ID } from '@/config/ghl';
import { upsertContact } from '@/lib/ghlClient';
import { rateLimitMiddleware } from '@/lib/rateLimit';

// Force dynamic runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Search for contact by email
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
        ok: true, // Still return ok:true to prevent enumeration
        message: 'If your details matched, we\'ve emailed your code.',
      },
      {
        status: 429,
        headers: rateLimitResponse.headers,
      }
    );
  }

  // Check if GHL is configured
  if (!isGHLConfigured()) {
    // Still return ok:true to prevent enumeration
    return NextResponse.json(
      {
        ok: true,
        message: 'If your details matched, we\'ve emailed your code.',
      },
      { status: 200 }
    );
  }

  try {
    // Parse request body
    const body = await request.json();

    // Validate inputs
    if (!body.surname || typeof body.surname !== 'string' || !body.surname.trim()) {
      // Still return ok:true for security
      return NextResponse.json(
        {
          ok: true,
          message: 'If your details matched, we\'ve emailed your code.',
        },
        { status: 200 }
      );
    }

    if (!body.email || typeof body.email !== 'string' || !body.email.trim()) {
      // Still return ok:true for security
      return NextResponse.json(
        {
          ok: true,
          message: 'If your details matched, we\'ve emailed your code.',
        },
        { status: 200 }
      );
    }

    const surname = body.surname.trim();
    const email = body.email.trim().toLowerCase();

    // Search for contact by email
    const contact = await searchContactByEmail(email);

    // Verify surname matches (case-insensitive)
    if (contact) {
      const contactLastName = (contact.lastName || '').trim().toLowerCase();
      const providedSurname = surname.toLowerCase();

      if (contactLastName === providedSurname) {
        // Match found - trigger reminder email via GHL tag
        try {
          await upsertContact({
            email,
            tags: ['UID Reminder – Send'],
          });

          if (process.env.NODE_ENV !== 'production') {
            console.log('UID reminder triggered for:', email);
          }
        } catch (error) {
          // Non-blocking - still return success
          if (process.env.NODE_ENV !== 'production') {
            console.error('Error triggering reminder:', error);
          }
        }
      }
    }

    // Always return ok:true (non-revealing for security)
    return NextResponse.json(
      {
        ok: true,
        message: 'If your details matched, we\'ve emailed your code.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error in reminder request:', error);
    }

    // Still return ok:true for security
    return NextResponse.json(
      {
        ok: true,
        message: 'If your details matched, we\'ve emailed your code.',
      },
      { status: 200 }
    );
  }
}

