/**
 * GHL Upsert Contact API Route
 * 
 * Server-side API endpoint for upserting contacts to GoHighLevel.
 * This route is server-side only to protect API keys.
 * 
 * NOTE: This route requires server-side execution and will not work with static export.
 * For Vercel/Netlify deployments, API routes work automatically.
 * For static hosting, use serverless functions or proxy to external API.
 * 
 * POST /api/ghl/upsert
 * Body: { email, phone?, firstName?, lastName?, tags?: string[], customFields?: Record<string, any> }
 */

// Mark as dynamic to prevent static generation
export const dynamic = 'force-dynamic';
// Prevent static export from trying to build this route
export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { upsertContact, UpsertContactParams, createTaskForContact } from '@/lib/ghlClient';
import { isGHLConfigured } from '@/config/ghl';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';

export async function POST(request: NextRequest) {
  // Check if GHL is configured
  if (!isGHLConfigured()) {
    return NextResponse.json(
      { 
        ok: false, 
        error: 'GHL not configured',
        message: 'GHL_API_KEY and GHL_LOCATION_ID must be set in environment variables'
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
          message: 'Email field must be provided and non-empty'
        },
        { status: 400 }
      );
    }

    // Build upsert params
    const params: UpsertContactParams = {
      email: body.email.trim(),
    };

    if (body.phone) {
      params.phone = String(body.phone).trim();
    }

    if (body.firstName) {
      params.firstName = String(body.firstName).trim();
    }

    if (body.lastName) {
      params.lastName = String(body.lastName).trim();
    }

    if (body.tags && Array.isArray(body.tags)) {
      params.tags = body.tags.filter((tag: any) => typeof tag === 'string' && tag.trim());
    }

    if (body.customFields && typeof body.customFields === 'object') {
      params.customFields = body.customFields;
    }

    // Call GHL client
    const result = await upsertContact(params);

    // Check if we need to create an AML task
    // Create AML task when "Onboarding – Details Complete" tag is added and amlConsent is true
    const hasOnboardingCompleteTag = params.tags?.includes('Onboarding – Details Complete');
    const amlConsent = params.customFields?.[GHL_CUSTOM_FIELDS.amlConsent];
    const hasAmlConsent = amlConsent === 'Yes' || amlConsent === true;

    if (hasOnboardingCompleteTag && hasAmlConsent && result.contactId) {
      try {
        // Get contact details for task body
        const firstName = params.firstName || '';
        const lastName = params.lastName || '';
        const email = params.email;
        const companyName = params.customFields?.[GHL_CUSTOM_FIELDS.companyName] || 'N/A';
        const tradingName = params.customFields?.[GHL_CUSTOM_FIELDS.tradingName] || 'N/A';
        const companyNumber = params.customFields?.[GHL_CUSTOM_FIELDS.companyNumber] || 'N/A';
        const businessAddress = params.customFields?.[GHL_CUSTOM_FIELDS.businessAddress] || 'N/A';
        const userRole = params.customFields?.[GHL_CUSTOM_FIELDS.userRole] || 'N/A';

        const taskBody = `Contact: ${firstName} ${lastName}
Email: ${email}
Legal Business Name: ${companyName}
Trading Name: ${tradingName}
Company Number: ${companyNumber}
Business Address: ${businessAddress}
User Role: ${userRole}`;

        await createTaskForContact({
          contactId: result.contactId,
          title: 'Perform AML check for new client',
          body: taskBody,
          priority: 'high',
        });

        if (process.env.NODE_ENV !== 'production') {
          console.log('AML task created for contact:', result.contactId);
        }
      } catch (taskError) {
        // Log but don't fail the upsert if task creation fails
        if (process.env.NODE_ENV !== 'production') {
          console.error('Failed to create AML task:', taskError);
        }
      }
    }

    // Log success (server-side only, not in production)
    if (process.env.NODE_ENV !== 'production') {
      console.log('GHL upsert success:', {
        contactId: result.contactId,
        email: params.email,
        tags: params.tags?.length || 0,
        customFields: Object.keys(params.customFields || {}).length,
        amlTaskCreated: hasOnboardingCompleteTag && hasAmlConsent,
      });
    }

    // Return success response (never expose API key)
    return NextResponse.json({
      ok: true,
      contactId: result.contactId,
    });

  } catch (error) {
    // Log error (server-side only)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    if (process.env.NODE_ENV !== 'production') {
      console.error('GHL upsert API error:', errorMessage);
    }

    // Return error response (never expose API key or internal details)
    return NextResponse.json(
      { 
        ok: false, 
        error: 'Failed to upsert contact',
        message: process.env.NODE_ENV === 'production' 
          ? 'Contact sync failed. Please try again.' 
          : errorMessage
      },
      { status: 500 }
    );
  }
}

// Only allow POST method
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  );
}

