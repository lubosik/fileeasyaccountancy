/**
 * Validation Utilities
 * 
 * Common validation functions for API endpoints.
 */

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validate phone number format (basic)
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') {
    return false;
  }
  
  // Basic validation: allows digits, spaces, +, -, (, )
  const phoneRegex = /^[\d\s\+\-\(\)]+$/;
  return phoneRegex.test(phone.trim()) && phone.trim().length >= 10;
}

/**
 * Validate required fields in object
 */
export function validateRequiredFields<T extends Record<string, any>>(
  data: T,
  requiredFields: (keyof T)[]
): { valid: boolean; missing: string[] } {
  const missing: string[] = [];

  for (const field of requiredFields) {
    const value = data[field];
    if (value === undefined || value === null || value === '') {
      missing.push(String(field));
    }
  }

  return {
    valid: missing.length === 0,
    missing,
  };
}

/**
 * Validate contactId format (GHL contact IDs)
 */
export function isValidContactId(contactId: string): boolean {
  if (!contactId || typeof contactId !== 'string') {
    return false;
  }
  
  // GHL contact IDs are typically alphanumeric strings
  // Basic validation: non-empty, reasonable length
  return contactId.trim().length > 0 && contactId.trim().length <= 255;
}

/**
 * Validate FirmCheck client ID format
 */
export function isValidFirmCheckClientId(clientId: string): boolean {
  if (!clientId || typeof clientId !== 'string') {
    return false;
  }
  
  // FirmCheck client IDs are typically alphanumeric strings
  // Basic validation: non-empty, reasonable length
  return clientId.trim().length > 0 && clientId.trim().length <= 255;
}

/**
 * Sanitize string input
 */
export function sanitizeString(input: string, maxLength: number = 1000): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input.trim().slice(0, maxLength);
}

/**
 * Validate and sanitize email
 */
export function validateAndSanitizeEmail(email: string): { valid: boolean; sanitized: string } {
  const sanitized = sanitizeString(email, 255);
  return {
    valid: isValidEmail(sanitized),
    sanitized,
  };
}

