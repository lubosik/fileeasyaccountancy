'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import LeadMagnetForm from '../forms/LeadMagnetForm';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div className="relative bg-raised rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-muted">
          <h2 id="modal-title" className="text-xl font-bold text-primary">
            Get Your Free IR35 Guide
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-secondary" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <LeadMagnetForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}