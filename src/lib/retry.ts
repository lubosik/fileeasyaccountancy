/**
 * Retry Utility Functions
 * 
 * Generic retry logic with exponential backoff for API calls.
 * Used by GHL, FirmCheck, and other integrations.
 */

/**
 * Sleep helper
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry options
 */
export interface RetryOptions {
  maxAttempts?: number;
  initialDelayMs?: number;
  maxDelayMs?: number;
  backoffMultiplier?: number;
  retryableStatusCodes?: number[];
  retryableErrors?: string[];
}

/**
 * Default retry options
 */
const DEFAULT_RETRY_OPTIONS: Required<RetryOptions> = {
  maxAttempts: 3,
  initialDelayMs: 1000,
  maxDelayMs: 10000,
  backoffMultiplier: 2,
  retryableStatusCodes: [500, 502, 503, 504, 429], // Server errors and rate limits
  retryableErrors: ['ECONNRESET', 'ETIMEDOUT', 'ENOTFOUND', 'ECONNREFUSED'],
};

/**
 * Check if an error is retryable
 */
function isRetryableError(error: any, options: Required<RetryOptions>): boolean {
  // Check HTTP status codes
  if (error.status && options.retryableStatusCodes.includes(error.status)) {
    return true;
  }

  // Check error codes
  if (error.code && options.retryableErrors.includes(error.code)) {
    return true;
  }

  // Check error message for network issues
  if (error.message) {
    const message = error.message.toLowerCase();
    if (
      message.includes('network') ||
      message.includes('timeout') ||
      message.includes('connection') ||
      message.includes('econnreset') ||
      message.includes('etimedout')
    ) {
      return true;
    }
  }

  return false;
}

/**
 * Retry a function with exponential backoff
 * 
 * @param fn Function to retry
 * @param options Retry options
 * @returns Result of function call
 * @throws Last error if all retries fail
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const opts = { ...DEFAULT_RETRY_OPTIONS, ...options };
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < opts.maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Don't retry on last attempt
      if (attempt === opts.maxAttempts - 1) {
        break;
      }

      // Check if error is retryable
      if (!isRetryableError(error, opts)) {
        // Not retryable - throw immediately
        throw lastError;
      }

      // Calculate delay with exponential backoff
      const delay = Math.min(
        opts.initialDelayMs * Math.pow(opts.backoffMultiplier, attempt),
        opts.maxDelayMs
      );

      if (process.env.NODE_ENV !== 'production') {
        console.log(
          `Retry attempt ${attempt + 1}/${opts.maxAttempts} after ${delay}ms`,
          error instanceof Error ? error.message : String(error)
        );
      }

      await sleep(delay);
    }
  }

  throw lastError || new Error('Operation failed after retries');
}

/**
 * Retry a fetch request with exponential backoff
 * 
 * @param url Request URL
 * @param init Fetch options
 * @param options Retry options
 * @returns Response
 */
export async function retryFetch(
  url: string,
  init: RequestInit = {},
  options: RetryOptions = {}
): Promise<Response> {
  return retryWithBackoff(async () => {
    const response = await fetch(url, init);

    // Don't retry on client errors (4xx) except 429 (rate limit)
    if (response.status >= 400 && response.status < 500 && response.status !== 429) {
      return response;
    }

    // Retry on server errors (5xx) and rate limits (429)
    if (response.status >= 500 || response.status === 429) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response;
  }, options);
}

