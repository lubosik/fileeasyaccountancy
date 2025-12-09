/**
 * GoHighLevel (GHL) API Configuration
 * 
 * This file exports GHL API configuration constants.
 * Environment variables are loaded from .env.local or .env
 */

export const GHL_BASE_URL = "https://rest.gohighlevel.com/v1";

/**
 * GHL API Key
 * Get this from: GHL Dashboard → Settings → Integrations → API Keys
 */
export const GHL_API_KEY = process.env.GHL_API_KEY || '';

/**
 * File Easy Location ID
 * Get this from: GHL Dashboard → Settings → Locations → [Your Location] → ID
 */
export const FILE_EASY_LOCATION_ID = process.env.GHL_LOCATION_ID || '';

/**
 * Check if GHL is configured
 * Returns true if both API key and location ID are present
 */
export function isGHLConfigured(): boolean {
  return !!(GHL_API_KEY && FILE_EASY_LOCATION_ID);
}

