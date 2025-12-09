/**
 * GHL Custom Fields Discovery API Route
 * 
 * GET /api/ghl/fields
 * 
 * Fetches all custom fields from GHL with their IDs for mapping.
 * Uses the discovery endpoint: GET https://rest.gohighlevel.com/v1/custom-fields/
 * 
 * Returns 503 if GHL discovery envs are missing (Vercel build-safe).
 * Caches results in memory for 10 minutes per server instance.
 */

import { NextRequest, NextResponse } from 'next/server';
import { GHLCustomField } from '@/lib/ghl';
import { getCachedFields, setCachedFields } from '@/lib/ghlFieldsCache';

// Force dynamic runtime - never static
export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Normalize GHL custom field response to our format
 */
function normalizeField(field: any): GHLCustomField {
  return {
    id: field.id || field.fieldId || '',
    name: field.name || field.label || '',
    fieldType: field.fieldType || field.type || 'text',
    options: field.options || field.choices || undefined,
  };
}

export async function GET(request: NextRequest) {
  // Check if discovery envs are present
  const discoveryBase = process.env.GHL_CF_DISCOVERY_BASE;
  const discoveryPath = process.env.GHL_CF_DISCOVERY_PATH || '/v1/custom-fields/';
  const apiKey = process.env.GHL_API_KEY;

  if (!discoveryBase || !apiKey) {
    return NextResponse.json(
      {
        error: 'GHL custom-field discovery disabled',
        message: 'GHL_CF_DISCOVERY_BASE and GHL_API_KEY must be set',
      },
      { status: 503 }
    );
  }

  // Check cache first
  const cached = getCachedFields();
  if (cached) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('GHL custom fields: returning cached result');
    }
    return NextResponse.json(
      {
        fields: cached,
        cached: true,
      },
      { status: 200 }
    );
  }

  try {
    // Build discovery URL
    const url = `${discoveryBase}${discoveryPath}`.replace(/\/+/g, '/').replace(/^https?:\//, 'https://');

    // Fetch custom fields from GHL
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (process.env.NODE_ENV !== 'production') {
        console.error('GHL custom fields API error:', response.status, errorText);
      }
      return NextResponse.json(
        {
          error: 'Failed to fetch custom fields from GHL',
          message: `GHL API returned ${response.status}`,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Normalize response - GHL may return fields in different formats
    let fields: any[] = [];
    
    if (Array.isArray(data)) {
      // Direct array response
      fields = data;
    } else if (data.customFields && Array.isArray(data.customFields)) {
      // Wrapped in customFields property
      fields = data.customFields;
    } else if (data.fields && Array.isArray(data.fields)) {
      // Wrapped in fields property
      fields = data.fields;
    } else if (data.data && Array.isArray(data.data)) {
      // Wrapped in data property
      fields = data.data;
    } else {
      // Try to find any array property
      const arrayKeys = Object.keys(data).filter(key => Array.isArray(data[key]));
      if (arrayKeys.length > 0) {
        fields = data[arrayKeys[0]];
      }
    }

    // Normalize all fields
    const normalizedFields: GHLCustomField[] = fields
      .map(normalizeField)
      .filter(field => field.id && field.name); // Filter out invalid fields

    // Cache the result
    setCachedFields(normalizedFields);

    if (process.env.NODE_ENV !== 'production') {
      console.log(`GHL custom fields: fetched ${normalizedFields.length} fields`);
    }

    return NextResponse.json(
      {
        fields: normalizedFields,
        cached: false,
        count: normalizedFields.length,
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('GHL custom fields fetch error:', error);
    }

    return NextResponse.json(
      {
        error: 'Failed to fetch custom fields',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

