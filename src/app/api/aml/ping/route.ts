/**
 * FirmCheck Connectivity Check API Route
 * 
 * GET /api/aml/ping
 * 
 * Verifies basic auth + routing to FirmCheck.
 * Calls GET /firm to check connectivity.
 * 
 * Returns 503 if FirmCheck envs are missing or feature flag disabled (Vercel build-safe).
 */

import { NextRequest, NextResponse } from 'next/server';
import { getFirm, isFirmCheckAMLEnabled } from '@/lib/firmcheck';

// Force dynamic runtime - never static
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

  try {
    // Test connectivity by getting firm info
    const firm = await getFirm();

    if (!firm) {
      return NextResponse.json(
        {
          error: 'FirmCheck API not responding',
          message: 'Could not retrieve firm information',
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        configured: true,
        firm: {
          id: firm.id,
          name: firm.name,
        },
        message: 'FirmCheck API is accessible',
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('FirmCheck ping error:', error);
    }

    return NextResponse.json(
      {
        error: 'FirmCheck API connection failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 503 }
    );
  }
}
