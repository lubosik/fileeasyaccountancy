/**
 * AML Status Display Component
 * 
 * Displays FirmCheck AML status with polling for real-time updates.
 * 
 * Usage:
 * - Pass contactId or firmCheckClientId to start polling
 * - Component automatically polls for status updates
 * - Shows different UI based on AML status
 */

'use client';

import { useEffect, useState } from 'react';

export interface AMLStatusDisplayProps {
  contactId?: string;
  firmCheckClientId?: string;
  onStatusChange?: (status: string, riskLevel?: string) => void;
  showDetails?: boolean;
  className?: string;
}

export type AMLStatus = 'UNKNOWN' | 'IN_PROGRESS' | 'PASSED' | 'FAILED' | 'IN_REVIEW';

export interface AMLStatusData {
  status: AMLStatus;
  riskLevel?: string;
  determinationId?: string;
  lastUpdated?: string;
}

const POLL_INTERVAL = 10000; // 10 seconds
const MAX_POLL_ATTEMPTS = 60; // 10 minutes max (60 * 10s)

export default function AMLStatusDisplay({
  contactId,
  firmCheckClientId,
  onStatusChange,
  showDetails = true,
  className = '',
}: AMLStatusDisplayProps) {
  const [statusData, setStatusData] = useState<AMLStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pollCount, setPollCount] = useState(0);

  // Fetch AML status
  const fetchAMLStatus = async (clientId: string) => {
    try {
      const response = await fetch(`/api/aml/status?clientId=${encodeURIComponent(clientId)}`);
      const result = await response.json();

      if (result.success) {
        const newStatusData: AMLStatusData = {
          status: result.amlStatus || 'UNKNOWN',
          riskLevel: result.riskLevel,
          determinationId: result.determinationId,
          lastUpdated: new Date().toISOString(),
        };

        setStatusData(newStatusData);
        setError(null);
        setLoading(false);

        // Notify parent of status change
        if (onStatusChange) {
          onStatusChange(newStatusData.status, newStatusData.riskLevel);
        }

        // Stop polling if status is final (PASSED or FAILED)
        return newStatusData.status === 'PASSED' || newStatusData.status === 'FAILED';
      } else {
        setError(result.message || 'Failed to fetch AML status');
        setLoading(false);
        return false; // Continue polling on error
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setLoading(false);
      return false; // Continue polling on error
    }
  };

  // Get FirmCheck client ID from contactId
  const getFirmCheckClientId = async (contactId: string): Promise<string | null> => {
    try {
      const response = await fetch(`/api/aml/get-client-id?contactId=${encodeURIComponent(contactId)}`);
      const result = await response.json();

      if (result.success && result.firmCheckClientId) {
        return result.firmCheckClientId;
      }

      return null;
    } catch (err) {
      console.error('Error getting FirmCheck client ID:', err);
      return null;
    }
  };

  // Polling effect
  useEffect(() => {
    if (!firmCheckClientId && !contactId) {
      setLoading(false);
      setError('No contact ID or FirmCheck client ID provided');
      return;
    }

    let clientIdToUse = firmCheckClientId;
    let intervalId: NodeJS.Timeout | null = null;

    const startPolling = async () => {
      // If we have contactId but not firmCheckClientId, try to get it
      if (contactId && !firmCheckClientId) {
        const fetchedClientId = await getFirmCheckClientId(contactId);
        if (fetchedClientId) {
          clientIdToUse = fetchedClientId;
        } else {
          setError('FirmCheck client ID not found. AML check may not have started yet.');
          setLoading(false);
          return;
        }
      }

      if (!clientIdToUse) {
        setError('FirmCheck client ID is required');
        setLoading(false);
        return;
      }

      // At this point, clientIdToUse is guaranteed to be non-null
      const finalClientId = clientIdToUse;

      // Initial fetch
      const shouldStop = await fetchAMLStatus(finalClientId);
      setPollCount(1);

      // If status is final, stop polling
      if (shouldStop) {
        return;
      }

      // Start polling interval
      intervalId = setInterval(async () => {
        setPollCount(prev => {
          const newCount = prev + 1;
          
          // Stop polling after max attempts
          if (newCount >= MAX_POLL_ATTEMPTS) {
            if (intervalId) {
              clearInterval(intervalId);
            }
            setError('AML check is taking longer than expected. Please contact support.');
            return newCount;
          }

          return newCount;
        });

        const stopPolling = await fetchAMLStatus(finalClientId);
        if (stopPolling && intervalId) {
          clearInterval(intervalId);
        }
      }, POLL_INTERVAL);
    };

    startPolling();

    // Cleanup
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [contactId, firmCheckClientId, onStatusChange]);

  // Status display helpers
  const getStatusColor = (status: AMLStatus): string => {
    switch (status) {
      case 'PASSED':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'FAILED':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'IN_PROGRESS':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'IN_REVIEW':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusLabel = (status: AMLStatus): string => {
    switch (status) {
      case 'PASSED':
        return 'AML Check Passed';
      case 'FAILED':
        return 'AML Check Failed';
      case 'IN_PROGRESS':
        return 'AML Check In Progress';
      case 'IN_REVIEW':
        return 'AML Check Under Review';
      default:
        return 'AML Status Unknown';
    }
  };

  const getStatusIcon = (status: AMLStatus) => {
    switch (status) {
      case 'PASSED':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'FAILED':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'IN_PROGRESS':
        return (
          <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case 'IN_REVIEW':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (loading && !statusData) {
    return (
      <div className={`p-4 rounded-lg border ${className}`}>
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          <span className="text-sm text-gray-600">Checking AML status...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-4 rounded-lg border border-yellow-200 bg-yellow-50 ${className}`}>
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-yellow-800">AML Status Check</p>
            <p className="text-sm text-yellow-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!statusData) {
    return null;
  }

  return (
    <div className={`p-4 rounded-lg border ${getStatusColor(statusData.status)} ${className}`}>
      <div className="flex items-center gap-3">
        {getStatusIcon(statusData.status)}
        <div className="flex-1">
          <p className="text-sm font-medium">{getStatusLabel(statusData.status)}</p>
          {showDetails && statusData.riskLevel && (
            <p className="text-xs mt-1 opacity-75">Risk Level: {statusData.riskLevel}</p>
          )}
          {statusData.status === 'IN_PROGRESS' && (
            <p className="text-xs mt-1 opacity-75">
              This may take a few minutes. We'll update you automatically.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

