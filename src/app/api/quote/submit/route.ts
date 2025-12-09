import { NextRequest, NextResponse } from 'next/server';
import { upsertContact } from '@/lib/ghl';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Submit to GHL using upsertContact
    if (!data.email) {
      return NextResponse.json({ 
        success: false, 
        message: 'Email is required' 
      }, { status: 400 });
    }
    
    const result = await upsertContact({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      customFields: data.customFields || [],
    });
    
    if (result && result.contactId) {
      return NextResponse.json({ 
        success: true, 
        contactId: result.contactId 
      }, { status: 200 });
    } else {
      // GHL not configured or submission failed - return success anyway
      // so user experience isn't broken
      return NextResponse.json({ 
        success: false, 
        message: 'GHL not configured or submission failed' 
      }, { status: 200 });
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error submitting quote to GHL:', error);
    }
    // Return success even on error so user experience isn't broken
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to submit quote' 
    }, { status: 200 });
  }
}

