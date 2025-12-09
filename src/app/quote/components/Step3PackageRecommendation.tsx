'use client';

import { useState, useEffect } from 'react';
import { Step2BData } from '../types';
import { recommendPackage, packages, PackageType, PackageInfo } from '../lib/packageRecommendation';
import { CheckCircle2 } from 'lucide-react';
import { useLeadStore } from '@/lib/leadStore';
import { dispatchToGHL } from '@/lib/dispatchToGHL';
import { GHL_CUSTOM_FIELDS } from '@/config/ghlCustomFields';
import { markStepComplete } from '@/lib/progress';
import { updateGHLProgress } from '@/lib/ghlProgress';

interface Step3PackageRecommendationProps {
  onNext: (selectedPackage: PackageType) => void;
  onBack: () => void;
  step2BData: Step2BData;
  firstName?: string;
}

export default function Step3PackageRecommendation({
  onNext,
  step2BData,
  firstName
}: Step3PackageRecommendationProps) {
  const { data: leadStore, updateData: updateLeadStore } = useLeadStore();
  const [recommendedPackage, setRecommendedPackage] = useState<PackageType>('gold');
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('gold');
  const [hasDispatchedRecommendation, setHasDispatchedRecommendation] = useState(false);

  useEffect(() => {
    const recommended = recommendPackage(step2BData);
    setRecommendedPackage(recommended);
    setSelectedPackage(recommended);

    // Dispatch to GHL when recommendation is computed (only once)
    if (!hasDispatchedRecommendation) {
      const packageName = recommended.charAt(0).toUpperCase() + recommended.slice(1); // "gold" -> "Gold"
      
      // Update leadStore
      updateLeadStore({
        recommendedPackage: packageName as 'Silver' | 'Gold' | 'Platinum',
      });

      // Update GHL progress (new field-mapped endpoint)
      if (leadStore.email) {
        updateGHLProgress({
          email: leadStore.email,
          phone: leadStore.phone,
          firstName: leadStore.firstName,
          lastName: leadStore.lastName,
          tags: [`Recommended – ${packageName}`],
          custom: {
            'Recommended Package': packageName,
          },
        }).catch((error) => {
          // Non-blocking
          if (process.env.NODE_ENV !== 'production') {
            console.error('Step 3: GHL progress update error:', error);
          }
        });
      }

      // Also dispatch to GHL (legacy - for backward compatibility)
      dispatchToGHL(
        {
          customFields: {
            [GHL_CUSTOM_FIELDS.recommendedPackage]: packageName,
          },
        },
        {
          addTags: [`Recommended – ${packageName}`],
        }
      ).then((result) => {
        if (process.env.NODE_ENV !== 'production') {
          if (result.success) {
            console.log('Step 3: Recommended package sent to GHL:', packageName);
          } else {
            console.warn('Step 3: GHL dispatch failed (queued for retry):', result.error);
          }
        }
      }).catch((error) => {
        // Non-blocking - queue will retry
        if (process.env.NODE_ENV !== 'production') {
          console.error('Step 3: GHL dispatch error:', error);
        }
      });

      // Fire analytics event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_recommendation_shown', {
          event_category: 'Quote',
          event_label: `Recommended Package: ${packageName}`,
          recommended_tier: recommended,
          recommended_package: packageName,
        });
      }

      setHasDispatchedRecommendation(true);
    }
  }, [step2BData, hasDispatchedRecommendation, updateLeadStore]);

  const handleContinue = async () => {
    // Track package selection
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'fe_quote_package_selected', {
        recommended_package: recommendedPackage,
        selected_package: selectedPackage,
        event_category: 'Quote',
        event_label: `Package Selected: ${selectedPackage}`
      });
    }

    // Mark step 3 as complete
    await markStepComplete(3, {
      step3: { selectedPackage },
      recommendedPackage: selectedPackage,
    });

    onNext(selectedPackage);
  };

  const PackageCard = ({ packageInfo, isRecommended, isSelected }: {
    packageInfo: PackageInfo;
    isRecommended: boolean;
    isSelected: boolean;
  }) => {
    const isGold = packageInfo.type === 'gold';
    const borderColor = isSelected
      ? 'border-primary'
      : isRecommended
      ? 'border-cta-bg'
      : 'border-muted';
    
    const bgColor = isSelected
      ? 'bg-primary/5'
      : isRecommended
      ? 'bg-cta-bg/10'
      : isGold
      ? 'bg-yellow-50/50'
      : 'bg-white';

    return (
      <div
        className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
          isSelected ? 'ring-2 ring-primary' : ''
        } ${borderColor} ${bgColor} ${isGold ? 'relative' : ''}`}
        onClick={() => setSelectedPackage(packageInfo.type)}
      >
        {/* Most Popular badge for Gold */}
        {isGold && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
              Most Popular
            </span>
          </div>
        )}
        {isRecommended && !isGold && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-cta-bg text-cta-text text-xs font-semibold rounded">
              Recommended
            </span>
          </div>
        )}
        {isGold && isRecommended && (
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-cta-bg text-cta-text text-xs font-semibold rounded">
              Recommended
            </span>
          </div>
        )}
        <h3 className="text-xl font-bold text-primary mb-2">{packageInfo.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{packageInfo.subtitle}</p>
        
        <div className="space-y-2 mb-4">
          <p className="text-sm font-semibold text-primary">What You Get:</p>
          <ul className="space-y-1">
            {packageInfo.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-muted">
          <p className="text-sm font-semibold text-primary mb-1">Outcome:</p>
          <p className="text-sm text-muted-foreground">{packageInfo.outcome}</p>
        </div>

        {isSelected && (
          <div className="mt-4 pt-4 border-t border-primary">
            <div className="flex items-center text-primary font-semibold">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              <span>Selected</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">
          {firstName ? `${firstName}, ` : ''}based on your answers, here's the right support level for you.
        </h1>
        <p className="text-muted-foreground text-lg">
          We've tentatively assigned this package for your business. You can confirm or choose another option below.
        </p>
      </div>

      {/* Package Cards - 3 columns */}
      <div className="grid md:grid-cols-3 gap-6">
        <PackageCard
          packageInfo={packages.silver}
          isRecommended={recommendedPackage === 'silver'}
          isSelected={selectedPackage === 'silver'}
        />
        <PackageCard
          packageInfo={packages.gold}
          isRecommended={recommendedPackage === 'gold'}
          isSelected={selectedPackage === 'gold'}
        />
        <PackageCard
          packageInfo={packages.platinum}
          isRecommended={recommendedPackage === 'platinum'}
          isSelected={selectedPackage === 'platinum'}
        />
      </div>

      {/* Submit Button - Hidden, triggered by Continue button in footer */}
      <button 
        type="button" 
        onClick={handleContinue} 
        className="hidden" 
        aria-hidden="true"
        data-step3-continue
      />
    </div>
  );
}

