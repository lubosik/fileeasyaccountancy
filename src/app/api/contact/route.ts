import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact API Route - Stub implementation
 * 
 * This route was previously used with Resend for email sending.
 * The site now uses Web3Forms for contact forms, so this route
 * is kept as a stub to prevent build errors.
 * 
 * If you need to restore email functionality via Resend:
 * 1. Install: npm install resend
 * 2. Set RESEND_API_KEY in environment variables
 * 3. Implement the email sending logic here
 */

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  // Return a 501 (Not Implemented) since this route is no longer used
  // Contact forms now use Web3Forms directly
  return NextResponse.json(
    {
      success: false,
      message: 'This endpoint is no longer used. Contact forms use Web3Forms.',
    },
    { status: 501 }
  );
}

export async function GET() {
  return NextResponse.json(
    {
      message: 'Contact API endpoint (not implemented - using Web3Forms)',
    },
    { status: 200 }
  );
}

