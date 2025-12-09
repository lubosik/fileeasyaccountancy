'use client';

import { useState, useMemo } from 'react';
import { Download, Calculator, TrendingUp, TrendingDown } from 'lucide-react';
import { calculateInsideIR35, calculateOutsideIR35, type CalculatorInputs } from '@/lib/ir35-calculations';

export default function IR35Calculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    dayRate: 450,
    workingDaysPerYear: 220,
    expenses: 0,
    pensionEmployeePercent: 0,
    umbrellaMarginPerMonth: 30,
    salaryDraw: 12570,
    otherIncome: 0,
  });

  // Calculate results
  const insideResults = useMemo(() => calculateInsideIR35(inputs), [inputs]);
  const outsideResults = useMemo(() => calculateOutsideIR35(inputs), [inputs]);

  const delta = outsideResults.netTakeHome - insideResults.netTakeHome;
  const deltaPercent = ((delta / insideResults.netTakeHome) * 100);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const downloadCSV = () => {
    const csvContent = [
      'IR35 Calculator Results',
      '',
      'Inputs:',
      `Day Rate,£${inputs.dayRate}`,
      `Working Days/Year,${inputs.workingDaysPerYear}`,
      `Annual Income,£${inputs.dayRate * inputs.workingDaysPerYear}`,
      `Expenses,£${inputs.expenses}`,
      `Pension %,${inputs.pensionEmployeePercent}%`,
      `Umbrella Margin,£${inputs.umbrellaMarginPerMonth}/month`,
      `Salary Draw,£${inputs.salaryDraw}`,
      '',
      'Inside IR35 (PAYE):',
      `Gross Income,£${insideResults.grossIncome}`,
      `Income Tax,£${insideResults.incomeTax}`,
      `Employee NI,£${insideResults.employeeNI}`,
      `Employer NI,£${insideResults.employerNI}`,
      `Umbrella Fees,£${insideResults.umbrellaFees}`,
      `Net Take Home,£${insideResults.netTakeHome}`,
      `Effective Rate,${insideResults.effectiveRate}%`,
      '',
      'Outside IR35 (Limited Company):',
      `Company Turnover,£${outsideResults.companyTurnover}`,
      `Corporation Tax,£${outsideResults.corporationTax}`,
      `Salary (net),£${outsideResults.salaryNet}`,
      `Dividends (net),£${outsideResults.dividendsNet}`,
      `Net Take Home,£${outsideResults.netTakeHome}`,
      `Effective Rate,${outsideResults.effectiveRate}%`,
      '',
      'Comparison:',
      `Difference,£${delta}`,
      `Percentage Difference,${deltaPercent.toFixed(1)}%`,
      '',
      `Generated: ${new Date().toLocaleDateString()}`
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ir35-calculator-results.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ir35_csv_download', {
        event_category: 'engagement',
        event_label: 'calculator_export'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-secondary">
          Compare your take-home pay under different IR35 scenarios
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Inputs Column */}
        <div className="lg:col-span-1">
          <div className="bg-raised rounded-lg p-6 border border-muted sticky top-4">
            <h2 className="text-xl font-semibold text-primary mb-6 flex items-center">
              <Calculator className="w-5 h-5 mr-2" />
              Your Details
            </h2>

            <div className="space-y-6">
              {/* Day Rate */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Contract Day Rate (£)
                </label>
                <input
                  type="number"
                  value={inputs.dayRate}
                  onChange={(e) => handleInputChange('dayRate', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                  min="0"
                />
              </div>

              {/* Working Days */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Working Days/Year
                </label>
                <input
                  type="number"
                  value={inputs.workingDaysPerYear}
                  onChange={(e) => handleInputChange('workingDaysPerYear', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                  min="0"
                  max="365"
                />
              </div>

              {/* Expenses */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Business Expenses (£/year)
                </label>
                <input
                  type="number"
                  value={inputs.expenses}
                  onChange={(e) => handleInputChange('expenses', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                  min="0"
                />
                <p className="text-xs text-secondary mt-1">
                  Outside IR35 only (travel, equipment, etc.)
                </p>
              </div>

              {/* Pension */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Pension Contribution (%)
                </label>
                <input
                  type="number"
                  value={inputs.pensionEmployeePercent}
                  onChange={(e) => handleInputChange('pensionEmployeePercent', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                  min="0"
                  max="40"
                  step="0.1"
                />
                <p className="text-xs text-secondary mt-1">
                  Salary sacrifice or personal contribution
                </p>
              </div>

              {/* Umbrella Margin */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Umbrella Margin (£/month)
                </label>
                <input
                  type="number"
                  value={inputs.umbrellaMarginPerMonth}
                  onChange={(e) => handleInputChange('umbrellaMarginPerMonth', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                  min="0"
                />
                <p className="text-xs text-secondary mt-1">
                  Inside IR35 only
                </p>
              </div>

              {/* Salary Draw */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Director Salary (£/year)
                </label>
                <input
                  type="number"
                  value={inputs.salaryDraw}
                  onChange={(e) => handleInputChange('salaryDraw', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                  min="0"
                />
                <p className="text-xs text-secondary mt-1">
                  Outside IR35 only (typically £12,570)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Columns */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {/* Inside IR35 Results */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
              <TrendingDown className="w-5 h-5 mr-2" />
              Inside IR35 (PAYE)
            </h3>

            <div className="space-y-4">
              <div className=" rounded-lg p-4 border" style={{ backgroundColor: '#F8F8F5' }}>
                <div className="text-3xl font-bold text-red-600 mb-1">
                  £{insideResults.netTakeHome.toLocaleString()}
                </div>
                <div className="text-sm text-red-700">Net Take-Home</div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-red-700">Gross Income:</span>
                  <span className="font-medium">£{insideResults.grossIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Income Tax:</span>
                  <span className="font-medium">£{insideResults.incomeTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Employee NI:</span>
                  <span className="font-medium">£{insideResults.employeeNI.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Employer NI:</span>
                  <span className="font-medium">£{insideResults.employerNI.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Umbrella Fees:</span>
                  <span className="font-medium">£{insideResults.umbrellaFees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-red-200">
                  <span className="text-red-700 font-medium">Effective Rate:</span>
                  <span className="font-bold">{insideResults.effectiveRate.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Outside IR35 Results */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Outside IR35 (Ltd Co)
            </h3>

            <div className="space-y-4">
              <div className=" rounded-lg p-4 border" style={{ backgroundColor: '#F8F8F5' }}>
                <div className="text-3xl font-bold text-green-600 mb-1">
                  £{outsideResults.netTakeHome.toLocaleString()}
                </div>
                <div className="text-sm text-green-700">Net Take-Home</div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-green-700">Company Turnover:</span>
                  <span className="font-medium">£{outsideResults.companyTurnover.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Corporation Tax:</span>
                  <span className="font-medium">£{outsideResults.corporationTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Salary (net):</span>
                  <span className="font-medium">£{outsideResults.salaryNet.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Dividends (net):</span>
                  <span className="font-medium">£{outsideResults.dividendsNet.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-green-200">
                  <span className="text-green-700 font-medium">Effective Rate:</span>
                  <span className="font-bold">{outsideResults.effectiveRate.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Summary */}
      <div className="mt-8 bg-raised rounded-lg p-6 border border-muted">
        <h3 className="text-xl font-semibold text-primary mb-4 text-center">
          Outside vs Inside Comparison
        </h3>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-surface rounded-lg p-4">
            <div className={`text-2xl font-bold mb-1 ${delta >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {delta >= 0 ? '+' : ''}£{delta.toLocaleString()}
            </div>
            <div className="text-sm text-secondary">Annual Difference</div>
          </div>

          <div className="bg-surface rounded-lg p-4">
            <div className={`text-2xl font-bold mb-1 ${deltaPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {deltaPercent >= 0 ? '+' : ''}{deltaPercent.toFixed(1)}%
            </div>
            <div className="text-sm text-secondary">Percentage Difference</div>
          </div>

          <div className="bg-surface rounded-lg p-4">
            <button
              onClick={downloadCSV}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-4 focus:ring-opacity-25"
              style={{
                backgroundColor: '#C9A227',
                color: '#111111',
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CSV
            </button>
            <div className="text-xs text-secondary mt-1">Export detailed breakdown</div>
          </div>
        </div>

        {delta > 0 && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-green-800 font-medium">
              Outside IR35 could save you £{delta.toLocaleString()} per year
              ({deltaPercent.toFixed(1)}% more take-home pay)
            </p>
          </div>
        )}

        {delta < 0 && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
            <p className="text-yellow-800 font-medium">
              Inside IR35 may be more beneficial in your situation
              (£{Math.abs(delta).toLocaleString()} difference)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}