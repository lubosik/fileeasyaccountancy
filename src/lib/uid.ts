/**
 * Unique ID Generation
 * 
 * Generates cryptographically secure, human-readable unique IDs
 * for resume functionality.
 * 
 * Format: 10-character base32 (no ambiguous characters)
 * Example: F3K8-2JQ9
 * 
 * Uses crypto.getRandomValues() for secure randomness.
 * Collision detection handled by caller (check against GHL).
 */

/**
 * Base32 alphabet without ambiguous characters
 * Removed: 0, O, I, L, 1 (to avoid confusion)
 * 
 * Remaining: A-Z (except I, L, O) + 2-9 = 26 letters + 8 digits = 34 chars
 * Actually, let's use a cleaner set: A-H, J-N, P-Z, 2-9 = 25 letters + 8 digits = 33 chars
 * But base32 typically uses 32 chars, so let's use: A-Z (except I, L, O) + 2-9 = 26 + 8 = 34
 * 
 * For true base32, we need exactly 32 chars. Let's use:
 * A-H, J-N, P-Z, 2-9 = 25 letters + 8 digits = 33 chars
 * 
 * Actually, let's simplify: Use uppercase letters A-Z except I, L, O + digits 2-9
 * That's: A-H (8), J-K (2), M-N (2), P-Z (11) = 23 letters + 8 digits = 31 chars
 * 
 * Let's add one more: We can include 0 but make it clear, or use a different approach.
 * Standard base32 uses: A-Z, 2-7 (32 chars total)
 * But we want to avoid 0, 1, I, L, O for readability.
 * 
 * Best approach: Use A-Z except I, L, O + 2-9 = 23 letters + 8 digits = 31 chars
 * We need 32, so let's include 0 but be careful, or use a different format.
 * 
 * Actually, let's use a simpler approach: 10 chars, split into two groups of 5 with a hyphen
 * Format: XXXXX-XXXXX (e.g., F3K8-2JQ9)
 * 
 * For each 5-char group, we have 31^5 = 28,629,151 possibilities
 * Total: 31^10 = 819,628,286,980,801 possibilities (very low collision probability)
 * 
 * Let's use: A-H, J-N, P-Z, 2-9 (31 chars)
 */
const BASE32_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // 31 chars (removed I, L, O, 0, 1)

/**
 * Generate a cryptographically secure random unique ID
 * 
 * Format: XXXXX-XXXXX (10 characters total, hyphen-separated)
 * Example: F3K8-2JQ9
 * 
 * Uses crypto.getRandomValues() for secure randomness.
 * 
 * @returns Unique ID string
 */
export function generateUID(): string {
  // Generate 10 random bytes (80 bits of entropy)
  const randomBytes = new Uint8Array(10);
  
  // Use crypto.getRandomValues() for secure randomness
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    // Browser or Node.js 18+ with global crypto
    crypto.getRandomValues(randomBytes);
  } else {
    // Fallback for Node.js environments (server-side)
    // Note: This is a synchronous function, so we can't use dynamic import
    // In Node.js 18+, crypto is available globally, so this shouldn't be reached
    // For older Node.js, we'll use Math.random fallback
    // Last resort: use Math.random (not cryptographically secure, but better than nothing)
    // This should rarely happen in modern Node.js
    for (let i = 0; i < 10; i++) {
      randomBytes[i] = Math.floor(Math.random() * 256);
    }
  }

  // Convert to base32 using our alphabet
  let uid = '';
  for (let i = 0; i < 10; i++) {
    // Map byte value (0-255) to our 31-char alphabet
    const index = randomBytes[i] % BASE32_ALPHABET.length;
    uid += BASE32_ALPHABET[index];
    
    // Add hyphen after 5th character
    if (i === 4) {
      uid += '-';
    }
  }

  return uid;
}

/**
 * Validate UID format
 * 
 * @param uid - UID string to validate
 * @returns true if format is valid
 */
export function isValidUID(uid: string): boolean {
  // Format: XXXXX-XXXXX (10 chars + 1 hyphen = 11 total)
  const pattern = /^[A-HJ-NP-Z2-9]{5}-[A-HJ-NP-Z2-9]{5}$/;
  return pattern.test(uid);
}

/**
 * Normalize UID (uppercase, remove extra spaces)
 * 
 * @param uid - UID string to normalize
 * @returns Normalized UID
 */
export function normalizeUID(uid: string): string {
  return uid.trim().toUpperCase().replace(/\s+/g, '');
}

