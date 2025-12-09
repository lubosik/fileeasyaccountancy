'use client';

import { useState } from 'react';
import { Calculator, CheckCircle, AlertCircle } from 'lucide-react';

interface CalculatorResults {
  taxableProfit: number;
  estimatedTax: number;
  savingsRange: string;
  additionalSuggestions: string[];
}

export default function SelfAssessmentCalculator() {
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [hasResults, setHasResults] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState<CalculatorResults>({
    taxableProfit: 0,
    estimatedTax: 0,
    savingsRange: '',
    additionalSuggestions: []
  });

  const calculateTax = () => {
    if (income === 0 && expenses === 0) {
      alert('Please enter your income and/or expenses');
      return;
    }

    const taxableProfit = Math.max(0, income - expenses);
    
    // UK Income Tax rates for 2024-25
    const personalAllowance = 12570; // £12,570
    const basicRate = 0.20; // 20%
    const basicRateUpper = 50270; // £50,270
    const higherRate = 0.40; // 40%
    const higherRateUpper = 125140; // £125,140
    const additionalRate = 0.45; // 45%

    let estimatedTax = 0;
    const taxableAfterAllowance = Math.max(0, taxableProfit - personalAllowance);

    if (taxableAfterAllowance <= 0) {
      estimatedTax = 0;
    } else if (taxableAfterAllowance <= basicRateUpper - personalAllowance) {
      // Basic rate: 20%
      estimatedTax = taxableAfterAllowance * basicRate;
    } else if (taxableAfterAllowance <= higherRateUpper - personalAllowance) {
      // Higher rate: 40%
      estimatedTax = (basicRateUpper - personalAllowance) * basicRate + 
                     (taxableAfterAllowance - (basicRateUpper - personalAllowance)) * higherRate;
    } else {
      // Additional rate: 45%
      estimatedTax = (basicRateUpper - personalAllowance) * basicRate + 
                     (higherRateUpper - basicRateUpper) * higherRate + 
                     (taxableAfterAllowance - (higherRateUpper - personalAllowance)) * additionalRate;
    }

    // National Insurance for self-employed (Class 2 and Class 4)
    let nationalInsurance = 0;
    if (taxableProfit > 6725) { // Class 4 threshold
      const class4Profit = Math.max(0, taxableProfit - 6725);
      nationalInsurance += Math.min(class4Profit, 50270 - 6725) * 0.09; // 9% on profits between £6,725 and £50,270
      if (taxableProfit > 50270) {
        nationalInsurance += (taxableProfit - 50270) * 0.02; // 2% on profits above £50,270
      }
    }

    const totalTax = Math.round(estimatedTax + nationalInsurance);
    
    // Estimate potential savings range (assuming 20-30% of expenses might be missed)
    const potentialExtraExpenses = Math.round(expenses * 0.25);
    const potentialSavings = Math.round(potentialExtraExpenses * 0.20); // Assume 20% tax rate on savings
    
    const savingsRange = potentialSavings > 0 
      ? `£${Math.max(500, potentialSavings - 1000)} - £${potentialSavings + 1000}`
      : '£1,000 - £3,000';

    const additionalSuggestions: string[] = [];
    
    if (expenses === 0) {
      additionalSuggestions.push('💡 You may be missing £2,000-£5,000 in allowable expenses');
    }
    
    if (expenses / income < 0.10 && income > 20000) {
      additionalSuggestions.push('💡 Business expenses look low—you may have significant unclaimed deductions');
    }
    
    if (taxableProfit > 50000) {
      additionalSuggestions.push('💡 Consider pension contributions to reduce higher rate tax');
    }

    setResults({
      taxableProfit,
      estimatedTax: totalTax,
      savingsRange,
      additionalSuggestions
    });

    setHasResults(true);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Form will be submitted via Web3Forms automatically
    // We just need to track the submission
    setIsSubmitted(true);
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calculator_form_submit', {
        campaign: 'self-assessment',
        result_data: JSON.stringify(results)
      });
    }

    // Success state will be handled by Web3Forms success event
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-4">
          Your results have been calculated and emailed to you. Check your inbox for your personalized tax report.
        </p>
        <p className="text-sm text-muted-foreground">
          A copy has also been sent to our team. We'll be in touch within 24 hours to discuss how we can help you maximize your savings.
        </p>
      </div>
    );
  }

  return (
    <div className=" border rounded-xl p-8" style={{ backgroundColor: '#F8F8F5' }}>
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Self-Assessment Tax Calculator</h2>
      </div>

      {!hasResults ? (
        <>
          <p className="text-muted-foreground mb-6">
            Get a rough estimate of your tax liability and potential savings. This calculator uses UK tax rates for 2024-25.
          </p>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="income" className="block text-sm font-medium mb-2">
                Total Business Income (before expenses) *
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <input
                  type="number"
                  id="income"
                  value={income || ''}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  placeholder="50000"
                  className="w-full pl-8 pr-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label htmlFor="expenses" className="block text-sm font-medium mb-2">
                Total Business Expenses (allowable deductions) *
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <input
                  type="number"
                  id="expenses"
                  value={expenses || ''}
                  onChange={(e) => setExpenses(Number(e.target.value))}
                  placeholder="10000"
                  className="w-full pl-8 pr-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Include office costs, travel, professional fees, etc.
              </p>
            </div>

            <button
              onClick={calculateTax}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Calculate My Tax Estimate
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gradient-to-br from-blue-50/50 to-primary/5 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Your Tax Estimate</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Taxable Profit</p>
                <p className="text-2xl font-bold text-primary">£{results.taxableProfit.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Tax</p>
                <p className="text-2xl font-bold text-accent-orange">£{results.estimatedTax.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Potential Savings</p>
                <p className="text-2xl font-bold text-green-600">{results.savingsRange}</p>
              </div>
            </div>

            {results.additionalSuggestions.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <div className="flex items-start space-x-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <h4 className="font-semibold text-yellow-900">Opportunities Found:</h4>
                </div>
                <ul className="space-y-1 text-sm text-yellow-800">
                  {results.additionalSuggestions.map((suggestion, idx) => (
                    <li key={idx}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-xs text-muted-foreground mt-4 text-center">
              ⚠️ This is an estimate only. We'll confirm your actual position on the free 30-minute review.
            </p>
          </div>

          {showForm && (
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Get Your Detailed Report</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Enter your details to receive a personalized report via email plus a copy of your results.
              </p>

              <form className="js-web3form calculator-results" action="https://api.web3forms.com/submit" method="POST" noValidate onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="0e065602-9ef6-4ec7-9af4-5bbeeaf64a5a" />
                <input type="hidden" name="from_name" value="Fileeasy Website" />
                <input type="hidden" name="subject" value="Self-Assessment Calculator Results — Tax Estimate" />
                
                {/* Include results in email */}
                <input type="hidden" name="taxable_profit" value={results.taxableProfit.toString()} />
                <input type="hidden" name="estimated_tax" value={results.estimatedTax.toString()} />
                <input type="hidden" name="savings_range" value={results.savingsRange} />

                <div className="space-y-4">
                  <div>
                    <label htmlFor="calc_name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="calc_name"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label htmlFor="calc_email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="calc_email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label htmlFor="calc_phone" className="block text-sm font-medium mb-2">
                      Phone <span className="text-xs text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="calc_phone"
                      name="phone"
                      placeholder="+44 7894 123456"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div className="h-captcha" data-captcha="true" suppressHydrationWarning></div>
                  <input type="checkbox" name="botcheck" className="hidden" style={{display:'none'}} />
                  
                  <p data-web3forms-result className="visually-hidden"></p>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-semibold transition-colors"
                  >
                    Send My Results
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
}

