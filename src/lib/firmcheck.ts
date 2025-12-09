/**
 * FirmCheck API Integration Client
 * 
 * Server-side only client for FirmCheck AML services.
 * 
 * IMPORTANT: No top-level side effects. All client instantiation happens inside functions.
 */

// Type definitions only - no imports of external SDKs at top level

/**
 * FirmCheck API Configuration
 */
export interface FirmCheckConfig {
  apiKey: string;
  apiBase: string;
  acceptVersion: string;
}

/**
 * FirmCheck Firm Information
 */
export interface FirmCheckFirm {
  id: string;
  name: string;
  staff?: Array<{ id: string; name: string }>;
  [key: string]: any;
}

/**
 * FirmCheck Client Entity (Individual)
 */
export interface FirmCheckIndividualEntity {
  type: 'individual';
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  email?: string;
  phone?: string;
  address?: {
    line1: string;
    line2?: string;
    city: string;
    postcode: string;
    country: string;
  };
}

/**
 * FirmCheck Client Entity (Organisation)
 */
export interface FirmCheckOrganisationEntity {
  type: 'organisation';
  name: string;
  companyNumber?: string;
  registeredAddress?: {
    line1: string;
    line2?: string;
    city: string;
    postcode: string;
    country: string;
  };
}

/**
 * FirmCheck Client Entity (Sole Trader)
 */
export interface FirmCheckSoleTraderEntity {
  type: 'sole_trader';
  tradingName: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  email?: string;
  phone?: string;
  address?: {
    line1: string;
    line2?: string;
    city: string;
    postcode: string;
    country: string;
  };
}

export type FirmCheckEntity = 
  | FirmCheckIndividualEntity 
  | FirmCheckOrganisationEntity 
  | FirmCheckSoleTraderEntity;

/**
 * FirmCheck Create Client Request
 */
export interface FirmCheckCreateClientRequest {
  status: 'PROSPECT' | 'CLIENT' | 'INACTIVE';
  entity: FirmCheckEntity;
  notes?: string;
}

/**
 * FirmCheck Client Response
 */
export interface FirmCheckClient {
  id: string;
  status: string;
  entity: FirmCheckEntity;
  amlDeterminationStatus?: 'IN_PROGRESS' | 'PASSED' | 'FAILED' | 'IN_REVIEW';
  lastAmlDetermination?: {
    id: string;
    riskLevel?: 'LOW' | 'MEDIUM' | 'HIGH';
    status: string;
    createdAt?: string;
  };
  [key: string]: any;
}

/**
 * FirmCheck AML Determination Request
 */
export interface FirmCheckAMLDeterminationRequest {
  clientId: string;
  [key: string]: any;
}

/**
 * FirmCheck AML Determination Response
 */
export interface FirmCheckAMLDetermination {
  id: string;
  clientId: string;
  status: string;
  riskLevel?: 'LOW' | 'MEDIUM' | 'HIGH';
  [key: string]: any;
}

/**
 * Get FirmCheck configuration from environment variables
 * Returns null if not configured (safe for build time)
 */
export function getFirmCheckConfig(): FirmCheckConfig | null {
  const apiKey = process.env.FIRMCHECK_API_KEY;
  const apiBase = process.env.FIRMCHECK_API_BASE || 'https://api.firmcheck.com';
  const acceptVersion = process.env.FIRMCHECK_ACCEPT_VERSION || '1.0.0';

  if (!apiKey) {
    return null;
  }

  return {
    apiKey,
    apiBase,
    acceptVersion,
  };
}

/**
 * Check if FirmCheck is configured
 * Safe to call at build time (returns false if envs missing)
 */
export function isFirmCheckConfigured(): boolean {
  return getFirmCheckConfig() !== null;
}

/**
 * Check if FirmCheck AML integration is enabled
 * Controlled by feature flag
 */
export function isFirmCheckAMLEnabled(): boolean {
  return process.env.FE_GHL_AML_ENABLED === 'true' && isFirmCheckConfigured();
}

/**
 * Create FirmCheck API client (factory function)
 * Only instantiates when called, not at module load time
 * 
 * @returns Fetch-based client function or null if not configured
 */
export function createFirmCheckClient() {
  const config = getFirmCheckConfig();
  if (!config) {
    return null;
  }

  /**
   * Make authenticated request to FirmCheck API with retry logic
   */
  return async function firmCheckRequest(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' = 'GET',
    body?: any,
    retryOptions?: { maxAttempts?: number }
  ): Promise<Response> {
    const url = `${config.apiBase}${endpoint}`;
    const headers: HeadersInit = {
      'Authorization': `Bearer ${config.apiKey}`,
      'accept-version': config.acceptVersion,
      'accept': 'application/json',
      'Content-Type': 'application/json',
    };

    // Import retry utility (dynamic to avoid top-level side effects)
    const { retryFetch } = await import('./retry');

    return retryFetch(
      url,
      {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      },
      {
        maxAttempts: retryOptions?.maxAttempts || 3,
        initialDelayMs: 1000,
        maxDelayMs: 10000,
      }
    );
  };
}

/**
 * Get firm information (connectivity check)
 */
export async function getFirm(): Promise<FirmCheckFirm | null> {
  const client = createFirmCheckClient();
  if (!client) {
    return null;
  }

  const response = await client('/firm', 'GET');

  if (!response.ok) {
    return null;
  }

  return await response.json();
}

/**
 * Create a new client in FirmCheck
 */
export async function createClient(
  params: FirmCheckCreateClientRequest
): Promise<FirmCheckClient> {
  const client = createFirmCheckClient();
  if (!client) {
    throw new Error('FirmCheck not configured');
  }

  const response = await client('/clients', 'POST', params);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`FirmCheck create client failed: ${response.status} - ${errorText}`);
  }

  return await response.json();
}

/**
 * Get client by ID
 */
export async function getClient(clientId: string): Promise<FirmCheckClient | null> {
  const client = createFirmCheckClient();
  if (!client) {
    return null;
  }

  const response = await client(`/clients/${clientId}`, 'GET');

  if (!response.ok) {
    return null;
  }

  return await response.json();
}

/**
 * Start AML determination for a client
 */
export async function startAMLDetermination(
  params: FirmCheckAMLDeterminationRequest
): Promise<FirmCheckAMLDetermination> {
  const client = createFirmCheckClient();
  if (!client) {
    throw new Error('FirmCheck not configured');
  }

  const response = await client(
    `/clients/${params.clientId}/aml-determinations`,
    'POST',
    params
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`FirmCheck start AML failed: ${response.status} - ${errorText}`);
  }

  return await response.json();
}

