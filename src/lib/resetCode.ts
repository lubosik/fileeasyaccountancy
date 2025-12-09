/**
 * Reset Code Generation & Verification
 * 
 * Generates 6-digit verification codes for UID reset.
 * Uses crypto for secure code generation.
 */

import crypto from 'crypto';

/**
 * Generate a 6-digit verification code
 * 
 * @returns 6-digit code as string (e.g., "123456")
 */
export function generateResetCode(): string {
  // Generate random number between 100000 and 999999
  const min = 100000;
  const max = 999999;
  
  // Use crypto for secure randomness
  const randomBytes = crypto.randomBytes(4);
  const randomNumber = randomBytes.readUInt32BE(0);
  const code = min + (randomNumber % (max - min + 1));
  
  return code.toString().padStart(6, '0');
}

/**
 * Hash a reset code using SHA-256
 * 
 * @param code - 6-digit code to hash
 * @returns Hashed code (hex string)
 */
export function hashResetCode(code: string): string {
  return crypto.createHash('sha256').update(code).digest('hex');
}

/**
 * Verify a reset code against a hash
 * 
 * @param code - Code to verify
 * @param hash - Stored hash to compare against
 * @returns true if code matches hash
 */
export function verifyResetCode(code: string, hash: string): boolean {
  const codeHash = hashResetCode(code);
  return crypto.timingSafeEqual(
    Buffer.from(codeHash),
    Buffer.from(hash)
  );
}

/**
 * Check if reset code has expired
 * 
 * @param expiryTimestamp - Expiry timestamp (ISO string or number)
 * @returns true if expired
 */
export function isResetCodeExpired(expiryTimestamp: string | number): boolean {
  const expiry = typeof expiryTimestamp === 'string' 
    ? new Date(expiryTimestamp).getTime()
    : expiryTimestamp;
  const now = Date.now();
  return now > expiry;
}

/**
 * Generate expiry timestamp (10 minutes from now)
 * 
 * @returns Expiry timestamp (milliseconds since epoch)
 */
export function generateExpiry(): number {
  const now = Date.now();
  const tenMinutes = 10 * 60 * 1000; // 10 minutes in milliseconds
  return now + tenMinutes;
}

