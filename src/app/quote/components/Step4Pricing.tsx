'use client';

import { useState } from 'react';
import { Step2BData, PackageType } from '../types';
import { getPackagePrice, formatPriceRange, getPackageBenefits } from '../lib/pricing';
import { packages } from '../lib/packageRecommendation';
import { CheckCircle2 } from 'lucide-react';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { markStepComplete } from '@/lib/progress';
import { updateGHLProgress } from '@/lib/ghlProgress';

interface Step4PricingProps {
  onNext: (selectedPackage: PackageType) => void;
  onBack: () => void;
  step2BData: Step2BData;
  step3SelectedPackage?: PackageType;
}

export default function Step4Pricing({
  onNext,
  step2BData,
  step3SelectedPackage
}: Step4PricingProps) {
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [selectedPackage, setSelectedPackage] = useState<PackageType>(
    step3SelectedPackage || (leadStore.selectedPackage?.toLowerCase() as PackageType) || 'gold'
  );

  const handleSelect = (packageType: PackageType) => {
    setSelectedPackage(packageType);
    
    // Track package selection
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'fe_quote_package_selected', {
        package: packageType,
        event_category: 'Quote',
        event_label: `Selected Package: ${packageType}`,
        turnover_band: step2BData.turnoverBand
      });
    }
  };

  const handleContinue = async () => {
    const packageName = selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1); // "gold" -> "Gold"

    // Update leadStore
    updateLeadStore({
      selectedPackage: packageName as 'Silver' | 'Gold' | 'Platinum',
    });

    // Update GHL progress (new field-mapped endpoint)
    if (leadStore.email) {
      try {
        await updateGHLProgress({
          email: leadStore.email,
          phone: leadStore.phone,
          firstName: leadStore.firstName,
          lastName: leadStore.lastName,
          tags: [`Selected Package – ${packageName}`],
          custom: {
            'Selected Package': packageName,
          },
        });
      } catch (error) {
        // Non-blocking
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step 4: GHL progress update error:', error);
        }
      }
    }

    // Also dispatch to GHL (legacy - for backward compatibility)
    try {
      const result = await dispatchToGHL(
        {
          customFields: {
            [GHL_CUSTOM_FIELDS.selectedPackage]: packageName,
          },
        },
        {
          addTags: [`Selected Package – ${packageName}`],
        }
      );

      if (process.env.NODE_ENV !== 'production') {
        if (result.success) {
          console.log('Step 4: Selected package sent to GHL:', packageName);
        } else {
          console.warn('Step 4: GHL dispatch failed (queued for retry):', result.error);
        }
      }
    } catch (error) {
      // Non-blocking - queue will retry
      if (process.env.NODE_ENV !== 'production') {
        console.error('Step 4: GHL dispatch error:', error);
      }
    }

    // Fire analytics event on continue
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_package_selected', {
        event_category: 'Quote',
        event_label: `Selected Package: ${packageName}`,
        selected_package: packageName,
        selected_tier: selectedPackage,
        turnover_band: step2BData.turnoverBand,
      });
    }

    // Mark step 4 as complete
    await markStepComplete(4, {
      step4: { selectedPackage },
      selectedPackage: selectedPackage,
    });

    onNext(selectedPackage);
  };

  const PackageCard = ({ packageType }: { packageType: PackageType }) => {
    const packageInfo = packages[packageType];
    const pricing = getPackagePrice(step2BData.turnoverBand, packageType);
    const benefits = getPackageBenefits(packageType);
    const isSelected = selectedPackage === packageType;

    return (
      <div
        className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
          isSelected
            ? 'border-primary bg-primary/5 ring-2 ring-primary'
            : 'border-muted hover:border-primary/50'
        }`}
        onClick={() => handleSelect(packageType)}
      >
        <h3 className="text-xl font-bold text-primary mb-2">{packageInfo.title}</h3>
        
        {/* Price */}
        <div className="mb-4">
          <div className="text-3xl font-bold text-primary">
            {formatPriceRange(pricing.min, pricing.max)}
          </div>
          <div className="text-sm text-muted-foreground">per month</div>
        </div>

        {/* 3 Short Benefits */}
        <div className="space-y-2 mb-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Select Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleSelect(packageType);
          }}
          className={`w-full py-3 px-4 rounded-md font-semibold transition-colors ${
            isSelected
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-muted text-primary hover:bg-muted/80'
          }`}
        >
          {isSelected ? 'Selected' : `Select ${packageInfo.title.split('–')[0].trim()}`}
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Choose Your File Easy Package
        </h1>
        <p className="text-muted-foreground text-lg">
          You're nearly there — select the support level that fits your business.
        </p>
      </div>

      {/* Package Cards - 3 columns */}
      <div className="grid md:grid-cols-3 gap-6">
        <PackageCard packageType="silver" />
        <PackageCard packageType="gold" />
        <PackageCard packageType="platinum" />
      </div>

      {/* Submit Button - Hidden, triggered by Continue button in footer */}
      <button 
        type="button" 
        onClick={handleContinue} 
        className="hidden" 
        aria-hidden="true"
        data-step4-continue
      />
    </div>
  );
}

