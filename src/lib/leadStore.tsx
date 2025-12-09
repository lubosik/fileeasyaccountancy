/**
 * Lead Store - Centralized state management for quote flow
 * 
 * Uses React Context to manage lead data across the quote flow.
 * Persists to sessionStorage to survive page refreshes.
 * 
 * This is the single source of truth for all lead/contact data.
 */

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Step2BData, Step3Data, Step4Data, Step5Data, Step6Data, Step7Data, StepO1Data, StepO2Data } from '@/app/quote/types';

const STORAGE_KEY = 'fileeasy_lead_store';

export interface LeadStoreData {
  // Contact basics (from Step 1)
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  
  // Branch (from Step 2A)
  engagementType?: 'Monthly' | 'One-Off';
  
  // Monthly flow data
  step2B?: Step2BData;
  step3?: Step3Data;
  step4?: Step4Data;
  step5?: Step5Data;
  step6?: Step6Data;
  step7?: Step7Data;
  
  // One-Off flow data
  stepO1?: StepO1Data;
  stepO2?: StepO2Data;
  
  // GHL contact ID (set after first successful upsert)
  contactId?: string;
  
  // Unique ID for resume functionality (assigned after Step 1)
  uid?: string;
  
  // Deposit payment status (for Monthly flow)
  depositPaid?: boolean;
  
  // Timestamp when quote started
  startedAt?: string;
  
  // All other answer fields from the flow
  [key: string]: any;
}

interface LeadStoreContextType {
  data: LeadStoreData;
  updateData: (partial: Partial<LeadStoreData>) => void;
  clearData: () => void;
}

const LeadStoreContext = createContext<LeadStoreContextType | undefined>(undefined);

/**
 * Load data from sessionStorage
 */
function loadFromStorage(): LeadStoreData {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Failed to load lead store from sessionStorage:', error);
    }
  }

  return {};
}

/**
 * Save data to sessionStorage
 */
function saveToStorage(data: LeadStoreData): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Failed to save lead store to sessionStorage:', error);
    }
  }
}

/**
 * Lead Store Provider Component
 * Wrap the quote flow with this provider
 */
export function LeadStoreProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<LeadStoreData>(() => {
    // Load from sessionStorage on mount
    const loaded = loadFromStorage();
    // Set startedAt if not already set
    if (!loaded.startedAt) {
      loaded.startedAt = new Date().toISOString();
    }
    return loaded;
  });

  // Save to sessionStorage whenever data changes
  useEffect(() => {
    saveToStorage(data);
  }, [data]);

  const updateData = (partial: Partial<LeadStoreData>) => {
    setData(prev => {
      const updated = { ...prev, ...partial };
      return updated;
    });
  };

  const clearData = () => {
    setData({});
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <LeadStoreContext.Provider value={{ data, updateData, clearData }}>
      {children}
    </LeadStoreContext.Provider>
  );
}

/**
 * Hook to use the lead store
 */
export function useLeadStore() {
  const context = useContext(LeadStoreContext);
  if (context === undefined) {
    throw new Error('useLeadStore must be used within a LeadStoreProvider');
  }
  return context;
}

/**
 * Get current lead store data (for use outside React components)
 * This reads directly from sessionStorage
 */
export function getLeadStoreData(): LeadStoreData {
  return loadFromStorage();
}

/**
 * Update lead store data (for use outside React components)
 * This writes directly to sessionStorage
 */
export function updateLeadStoreData(partial: Partial<LeadStoreData>): void {
  const current = loadFromStorage();
  const updated = { ...current, ...partial };
  saveToStorage(updated);
  
  // Dispatch storage event so React components can react to changes
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new StorageEvent('storage', {
      key: STORAGE_KEY,
      newValue: JSON.stringify(updated),
    }));
  }
}

