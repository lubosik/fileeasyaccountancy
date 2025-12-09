'use client';

import { useState } from 'react';
import { CheckCircle2, FileText, Phone } from 'lucide-react';
import { CommitmentOption } from '../types';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { markStepComplete } from '@/lib/progress';
import { updateGHLProgress } from '@/lib/ghlProgress';

interface Step7CommitmentProps {
  onNext: (option: CommitmentOption) => void;
  onBack: () => void;
  firstName?: string;
}

export default function Step7Commitment({
  onNext,
  firstName
}: Step7CommitmentProps) {
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [selectedOption, setSelectedOption] = useState<CommitmentOption | null>(
    (leadStore.step7?.commitmentOption as CommitmentOption) || null
  );

  const handleSelect = (option: CommitmentOption) => {
    setSelectedOption(option);
    
    // Track option selection
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'fe_quote_commitment_option_selected', {
        option: option,
        event_category: 'Quote',
        event_label: `Commitment Option: ${option}`
      });
    }
  };

  const handleContinue = async () => {
    if (!selectedOption) {
      return;
    }

    // Find the selected option's CRM tag
    const selectedOptionData = options.find(opt => opt.id === selectedOption);
    const crmTag = selectedOptionData?.crmTag;

    // Update leadStore
    updateLeadStore({
      step7: {
        commitmentOption: selectedOption,
      },
    });

    // Dispatch to GHL with appropriate tag
    if (crmTag) {
      try {
        const result = await dispatchToGHL(
          {},
          {
            addTags: [crmTag],
          }
        );

        if (process.env.NODE_ENV !== 'production') {
          if (result.success) {
            console.log('Step 7: Commitment option sent to GHL:', selectedOption, 'Tag:', crmTag);
          } else {
            console.warn('Step 7: GHL dispatch failed (queued for retry):', result.error);
          }
        }
      } catch (error) {
        // Non-blocking - queue will retry
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step 7: GHL dispatch error:', error);
        }
      }
    }

    // Fire analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_commitment_selected', {
        event_category: 'Quote',
        event_label: `Commitment: ${selectedOption}`,
        commitment_option: selectedOption,
        ...(crmTag && { crm_tag: crmTag }),
      });
    }

    // Mark step 7 as complete
    await markStepComplete(7, {
      step7: { commitmentOption: selectedOption },
    });

    onNext(selectedOption);
  };

  const options = [
    {
      id: 'set-me-up' as CommitmentOption,
      title: 'Set Me Up & Send My Agreement',
      icon: FileText,
      description: 'Perfect — we\'ll prepare your engagement letter, AML instructions and your onboarding pack. You\'ll receive everything by email shortly.',
      crmTag: 'Ready to Onboard'
    },
    {
      id: 'book-call' as CommitmentOption,
      title: 'Book a Welcome Call First',
      icon: Phone,
      description: 'Prefer to speak before finalising? Choose a preferred time that works for a call back.',
      crmTag: 'Needs Call'
    }
  ];

  const OptionCard = ({ option }: { option: typeof options[0] }) => {
    const Icon = option.icon;
    const isSelected = selectedOption === option.id;

    return (
      <div
        className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
          isSelected
            ? 'border-primary bg-primary/5 ring-2 ring-primary'
            : 'border-muted hover:border-primary/50'
        }`}
        onClick={() => handleSelect(option.id)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg ${
              isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-primary'
            }`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2">{option.title}</h3>
              <p className="text-muted-foreground">{option.description}</p>
            </div>
          </div>
          {isSelected && (
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">
          You&apos;re almost all set, {firstName ? firstName : 'there'}. Choose how you&apos;d like to complete your onboarding.
        </h1>
      </div>

      {/* Commitment Options */}
      <div className="space-y-4">
        {options.map((option) => (
          <OptionCard key={option.id} option={option} />
        ))}
      </div>

      {!selectedOption && (
        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            Please select an option to continue
          </p>
        </div>
      )}

      {/* Submit Button - Hidden, triggered by Continue button in footer */}
      <button 
        type="button" 
        onClick={handleContinue} 
        className="hidden" 
        aria-hidden="true"
        data-step7-continue
        disabled={!selectedOption}
      />
    </div>
  );
}

