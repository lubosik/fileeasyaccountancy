/**
 * Health Check API Route
 * 
 * GET /api/health
 * 
 * Returns health status of all integrations (GHL, FirmCheck, Stripe).
 * Used for monitoring and debugging.
 * 
 * Returns 200 if all critical services are healthy.
 * Returns 503 if any critical service is unavailable.
 */

import { NextRequest, NextResponse } from 'next/server';
import { isGHLConfigured, getGHLConfig } from '@/lib/ghl';
import { isFirmCheckConfigured, isFirmCheckAMLEnabled, getFirmCheckConfig } from '@/lib/firmcheck';
import { isStripeConfigured, getStripeClient } from '@/config/stripe';

// Force dynamic runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  services: {
    ghl: {
      configured: boolean;
      healthy?: boolean;
      error?: string;
    };
    firmcheck: {
      configured: boolean;
      enabled: boolean;
      healthy?: boolean;
      error?: string;
    };
    stripe: {
      configured: boolean;
      healthy?: boolean;
      error?: string;
    };
  };
}

export async function GET(request: NextRequest) {
  const health: HealthStatus = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    services: {
      ghl: {
        configured: isGHLConfigured(),
      },
      firmcheck: {
        configured: isFirmCheckConfigured(),
        enabled: isFirmCheckAMLEnabled(),
      },
      stripe: {
        configured: isStripeConfigured(),
      },
    },
  };

  // Check GHL connectivity
  if (health.services.ghl.configured) {
    try {
      const config = getGHLConfig();
      if (config) {
        // Simple connectivity check - try to get custom fields
        const response = await fetch(
          `${config.apiBase}/contacts/search`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${config.apiKey}`,
              'Version': config.apiVersion,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ limit: 1 }),
          }
        );

        health.services.ghl.healthy = response.ok;
        if (!response.ok) {
          health.services.ghl.error = `HTTP ${response.status}`;
          health.status = 'degraded';
        }
      }
    } catch (error) {
      health.services.ghl.healthy = false;
      health.services.ghl.error = error instanceof Error ? error.message : 'Unknown error';
      health.status = 'degraded';
    }
  }

  // Check FirmCheck connectivity (if enabled)
  if (health.services.firmcheck.configured && health.services.firmcheck.enabled) {
    try {
      const config = getFirmCheckConfig();
      if (config) {
        // Simple connectivity check - try to get firm info
        const { getFirm } = await import('@/lib/firmcheck');
        const firm = await getFirm();
        
        health.services.firmcheck.healthy = firm !== null;
        if (!firm) {
          health.services.firmcheck.error = 'Firm info not available';
          health.status = 'degraded';
        }
      }
    } catch (error) {
      health.services.firmcheck.healthy = false;
      health.services.firmcheck.error = error instanceof Error ? error.message : 'Unknown error';
      health.status = 'degraded';
    }
  }

  // Check Stripe connectivity
  if (health.services.stripe.configured) {
    try {
      const stripe = getStripeClient();
      
      // Simple connectivity check - try to get account info
      await stripe.accounts.retrieve();
      health.services.stripe.healthy = true;
    } catch (error) {
      health.services.stripe.healthy = false;
      health.services.stripe.error = error instanceof Error ? error.message : 'Unknown error';
      health.status = 'degraded';
    }
  }

  // Determine overall status
  const criticalServices = [
    health.services.ghl.configured && health.services.ghl.healthy !== false,
  ];

  if (health.services.firmcheck.enabled) {
    criticalServices.push(
      health.services.firmcheck.configured && health.services.firmcheck.healthy !== false
    );
  }

  if (health.services.stripe.configured) {
    criticalServices.push(
      health.services.stripe.healthy !== false
    );
  }

  const allHealthy = criticalServices.every(healthy => healthy === true);
  if (!allHealthy) {
    health.status = 'unhealthy';
  }

  const statusCode = health.status === 'healthy' ? 200 : 503;

  return NextResponse.json(health, { status: statusCode });
}

