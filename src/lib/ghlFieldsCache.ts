/**
 * GHL Custom Fields Cache
 * 
 * In-memory cache for GHL custom fields to avoid repeated API calls.
 * Cache expires after 10 minutes per server instance.
 */

import { GHLCustomField } from './ghl';

interface CacheEntry {
  fields: GHLCustomField[];
  expiresAt: number;
}

// In-memory cache (clears on server restart)
let cache: CacheEntry | null = null;

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Get cached custom fields if still valid
 */
export function getCachedFields(): GHLCustomField[] | null {
  if (!cache) {
    return null;
  }

  const now = Date.now();
  if (now > cache.expiresAt) {
    // Cache expired
    cache = null;
    return null;
  }

  return cache.fields;
}

/**
 * Set cached custom fields
 */
export function setCachedFields(fields: GHLCustomField[]): void {
  cache = {
    fields,
    expiresAt: Date.now() + CACHE_TTL_MS,
  };
}

/**
 * Clear cache (useful for testing or forced refresh)
 */
export function clearCache(): void {
  cache = null;
}

