'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, CheckCircle2, TrendingDown, Calendar, DollarSign, Clock, FileText } from 'lucide-react';

export default function CashFlowHealthCheckPage() {
  const [step, setStep] = useState<'form' | 'results'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    monthlyRevenue: '',
    invoicePaymentDays: '',
    supplierPaymentDays: '',
    materialInventoryDays: '',
    monthlyPayroll: '',
    monthlyOverheads: '',
    outstandingRetentions: '',
    cisOverWithheld: '',
    activeProjects: '',
    averageProjectDuration: '',
    currentCashBalance: '',
  });

  const [results, setResults] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCashFlow = () => {
    // Parse inputs
    const revenue = parseFloat(formData.monthlyRevenue) || 0;
    const invoiceDays = parseFloat(formData.invoicePaymentDays) || 0;
    const supplierDays = parseFloat(formData.supplierPaymentDays) || 0;
    const inventoryDays = parseFloat(formData.materialInventoryDays) || 0;
    const payroll = parseFloat(formData.monthlyPayroll) || 0;
    const overheads = parseFloat(formData.monthlyOverheads) || 0;
    const retentions = parseFloat(formData.outstandingRetentions) || 0;
    const cisOver = parseFloat(formData.cisOverWithheld) || 0;
    const currentCash = parseFloat(formData.currentCashBalance) || 0;
    const activeProjects = parseFloat(formData.activeProjects) || 0;
    const projectDuration = parseFloat(formData.averageProjectDuration) || 0;

    // Calculate cash conversion cycle
    const cashConversionCycle = invoiceDays + inventoryDays - supplierDays;
    
    // Calculate monthly cash outflows
    const monthlyOutflows = payroll + overheads;
    
    // Calculate daily cash burn rate
    const dailyBurnRate = monthlyOutflows > 0 ? monthlyOutflows / 30 : 0;
    
    // Calculate average daily revenue (based on payment terms)
    const averageDailyRevenue = invoiceDays > 0 ? revenue / invoiceDays : 0;
    
    // Calculate net daily cash flow
    const netDailyCashFlow = averageDailyRevenue - dailyBurnRate;
    
    // Calculate days until cash runs out
    let daysUntilCashOut = Infinity;
    if (netDailyCashFlow < 0 && Math.abs(netDailyCashFlow) > 0) {
      daysUntilCashOut = Math.floor(currentCash / Math.abs(netDailyCashFlow));
    } else if (netDailyCashFlow >= 0) {
      daysUntilCashOut = Infinity; // Positive cash flow
    }
    
    // Calculate payment term gap
    const paymentTermGap = Math.max(0, invoiceDays - supplierDays);
    const workingCapitalNeeded = paymentTermGap > 0 && revenue > 0 ? (revenue * paymentTermGap) / 30 : 0;
    
    // Calculate trapped cash
    const totalTrappedCash = retentions + cisOver;
    
    // Determine risk level
    let riskLevel = 'low';
    let riskColor = 'green';
    if (daysUntilCashOut !== Infinity) {
      if (daysUntilCashOut < 0) {
        riskLevel = 'critical';
        riskColor = 'red';
      } else if (daysUntilCashOut < 30) {
        riskLevel = 'critical';
        riskColor = 'red';
      } else if (daysUntilCashOut < 60) {
        riskLevel = 'high';
        riskColor = 'orange';
      } else if (daysUntilCashOut < 90) {
        riskLevel = 'medium';
        riskColor = 'yellow';
      }
    }

    // Calculate cash run-out date
    const runOutDate = new Date();
    if (daysUntilCashOut !== Infinity) {
      runOutDate.setDate(runOutDate.getDate() + daysUntilCashOut);
    }

    return {
      cashConversionCycle,
      monthlyOutflows,
      dailyBurnRate,
      netDailyCashFlow,
      daysUntilCashOut,
      runOutDate,
      paymentTermGap,
      workingCapitalNeeded,
      totalTrappedCash,
      retentions,
      cisOver,
      riskLevel,
      riskColor,
      currentCash,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      alert('Please enter your name and email to get your personalized report.');
      return;
    }

    // Calculate results
    const calculatedResults = calculateCashFlow();
    setResults(calculatedResults);
    setStep('results');
  };

  if (step === 'results' && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Your Cash Flow Health Check Results
              </h1>
              <p className="text-xl text-secondary">
                Personalized analysis for {formData.name}
              </p>
            </div>

            {/* Risk Level Alert */}
            <div className={`rounded-lg p-6 mb-8 border-2 ${
              results.riskLevel === 'critical' ? 'bg-red-50 border-red-500' :
              results.riskLevel === 'high' ? 'bg-orange-50 border-orange-500' :
              results.riskLevel === 'medium' ? 'bg-yellow-50 border-yellow-500' :
              'bg-green-50 border-green-500'
            }`}>
              <div className="flex items-start space-x-4">
                {results.riskLevel === 'critical' || results.riskLevel === 'high' ? (
                  <AlertTriangle className={`w-8 h-8 flex-shrink-0 ${
                    results.riskLevel === 'critical' ? 'text-red-600' : 'text-orange-600'
                  }`} />
                ) : (
                  <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                )}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    Risk Level: {results.riskLevel.toUpperCase()}
                  </h2>
                  {results.daysUntilCashOut !== Infinity ? (
                    <p className="text-lg text-secondary">
                      {results.daysUntilCashOut < 0 
                        ? 'Your cash has already run out. Immediate action required.'
                        : `You'll run out of cash in ${results.daysUntilCashOut} days (${results.runOutDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })})`
                      }
                    </p>
                  ) : (
                    <p className="text-lg text-secondary">
                      You have positive cash flow. Great job managing your working capital!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className=" rounded-lg p-6 border border-muted shadow-sm" style={{ backgroundColor: '#F8F8F5' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Cash Conversion Cycle</h3>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">{results.cashConversionCycle.toFixed(0)} days</p>
                <p className="text-sm text-secondary">
                  Time from paying suppliers to receiving customer payments
                </p>
              </div>

              <div className=" rounded-lg p-6 border border-muted shadow-sm" style={{ backgroundColor: '#F8F8F5' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Daily Cash Burn</h3>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">£{results.dailyBurnRate.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                <p className="text-sm text-secondary">
                  Average daily cash outflow (payroll + overheads)
                </p>
              </div>

              {results.totalTrappedCash > 0 && (
                <div className=" rounded-lg p-6 border border-muted shadow-sm" style={{ backgroundColor: '#F8F8F5' }}>
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">Trapped Cash</h3>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">£{results.totalTrappedCash.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                  <p className="text-sm text-secondary">
                    {results.retentions > 0 && `Retentions: £${results.retentions.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}
                    {results.retentions > 0 && results.cisOver > 0 && ' • '}
                    {results.cisOver > 0 && `CIS Over-withheld: £${results.cisOver.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}
                  </p>
                </div>
              )}

              {results.paymentTermGap > 0 && (
                <div className=" rounded-lg p-6 border border-muted shadow-sm" style={{ backgroundColor: '#F8F8F5' }}>
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingDown className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">Payment Term Gap</h3>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">{results.paymentTermGap.toFixed(0)} days</p>
                  <p className="text-sm text-secondary">
                    Working capital needed: £{results.workingCapitalNeeded.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>
              )}
            </div>

            {/* Action Steps */}
            <div className=" rounded-lg p-8 border border-muted shadow-sm mb-8" style={{ backgroundColor: '#F8F8F5' }}>
              <h2 className="text-2xl font-bold text-primary mb-6">Your Action Steps</h2>
              <div className="space-y-4">
                {results.totalTrappedCash > 0 && (
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Recover Trapped Cash</h3>
                      <p className="text-secondary text-sm">
                        You have £{results.totalTrappedCash.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} in trapped cash.
                        {results.retentions > 0 && ` £${results.retentions.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} in retentions`}
                        {results.cisOver > 0 && ` and £${results.cisOver.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} in CIS over-withheld`}.
                        This cash should be in your bank account.
                      </p>
                    </div>
                  </div>
                )}

                {results.paymentTermGap > 0 && (
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Address Payment Term Gap</h3>
                      <p className="text-secondary text-sm">
                        Your customers pay in {formData.invoicePaymentDays} days while your suppliers need payment in {formData.supplierPaymentDays} days.
                        This {results.paymentTermGap}-day gap requires £{results.workingCapitalNeeded.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} in working capital.
                      </p>
                    </div>
                  </div>
                )}

                {results.daysUntilCashOut !== Infinity && results.daysUntilCashOut < 90 && (
                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Urgent: Cash Flow Crisis</h3>
                      <p className="text-secondary text-sm">
                        {results.daysUntilCashOut < 0 
                          ? 'Your cash has already run out. You need immediate help to avoid insolvency.'
                          : `You'll run out of cash in ${results.daysUntilCashOut} days. You need to take action now to secure working capital or renegotiate payment terms.`
                        }
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-lg p-8 text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Expert Help to Fix Your Cash Flow</h2>
              <p className="text-xl mb-6 text-white/90">
                Book a free 30-minute consultation with our construction accounting specialists.
                We'll show you exactly how to recover trapped cash, address payment gaps, and prevent cash flow crises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote/?source=cash-flow-tool"
                  className="bg-cta-bg text-cta-text px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cta-bg/90 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </Link>
                <Link
                  href="/construction-packages"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover: hover:text-primary transition-colors inline-flex items-center justify-center space-x-2" style={{ backgroundColor: '#F8F8F5' }}
                >
                  <span>View Construction Packages</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Back to Calculator */}
            <div className="text-center">
              <button
                onClick={() => {
                  setStep('form');
                  setResults(null);
                }}
                className="text-primary hover:underline font-semibold"
              >
                ← Calculate Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Free Construction Cash Flow Calculator UK
            </h1>
            <p className="text-xl text-secondary mb-6">
              Find out when your cash will run out, discover trapped cash, and identify payment gaps.
              Get your personalized cash flow report in 2 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-secondary">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>

          {/* Calculator Form */}
          <div className=" rounded-lg p-8 border border-muted shadow-lg" style={{ backgroundColor: '#F8F8F5' }}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="border-b border-muted pb-6">
                <h2 className="text-2xl font-bold text-primary mb-4">Your Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <p className="text-xs text-secondary mt-2">
                  We'll send your personalized cash flow report to this email address.
                </p>
              </div>

              {/* Cash Flow Inputs */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Cash Flow Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-primary mb-2">
                      Average Monthly Revenue (£)
                    </label>
                    <input
                      type="number"
                      id="monthlyRevenue"
                      value={formData.monthlyRevenue}
                      onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="50000"
                    />
                  </div>
                  <div>
                    <label htmlFor="currentCashBalance" className="block text-sm font-medium text-primary mb-2">
                      Current Cash Balance (£)
                    </label>
                    <input
                      type="number"
                      id="currentCashBalance"
                      value={formData.currentCashBalance}
                      onChange={(e) => handleInputChange('currentCashBalance', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="25000"
                    />
                  </div>
                  <div>
                    <label htmlFor="invoicePaymentDays" className="block text-sm font-medium text-primary mb-2">
                      Average Invoice Payment Days
                    </label>
                    <input
                      type="number"
                      id="invoicePaymentDays"
                      value={formData.invoicePaymentDays}
                      onChange={(e) => handleInputChange('invoicePaymentDays', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="54"
                    />
                    <p className="text-xs text-secondary mt-1">How many days until customers pay invoices?</p>
                  </div>
                  <div>
                    <label htmlFor="supplierPaymentDays" className="block text-sm font-medium text-primary mb-2">
                      Average Supplier Payment Days
                    </label>
                    <input
                      type="number"
                      id="supplierPaymentDays"
                      value={formData.supplierPaymentDays}
                      onChange={(e) => handleInputChange('supplierPaymentDays', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="14"
                    />
                    <p className="text-xs text-secondary mt-1">How many days until suppliers need payment?</p>
                  </div>
                  <div>
                    <label htmlFor="materialInventoryDays" className="block text-sm font-medium text-primary mb-2">
                      Material Inventory Days
                    </label>
                    <input
                      type="number"
                      id="materialInventoryDays"
                      value={formData.materialInventoryDays}
                      onChange={(e) => handleInputChange('materialInventoryDays', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="7"
                    />
                    <p className="text-xs text-secondary mt-1">How many days of materials do you hold?</p>
                  </div>
                  <div>
                    <label htmlFor="monthlyPayroll" className="block text-sm font-medium text-primary mb-2">
                      Monthly Payroll (£)
                    </label>
                    <input
                      type="number"
                      id="monthlyPayroll"
                      value={formData.monthlyPayroll}
                      onChange={(e) => handleInputChange('monthlyPayroll', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="20000"
                    />
                  </div>
                  <div>
                    <label htmlFor="monthlyOverheads" className="block text-sm font-medium text-primary mb-2">
                      Monthly Overheads (£)
                    </label>
                    <input
                      type="number"
                      id="monthlyOverheads"
                      value={formData.monthlyOverheads}
                      onChange={(e) => handleInputChange('monthlyOverheads', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="5000"
                    />
                    <p className="text-xs text-secondary mt-1">Rent, utilities, insurance, etc.</p>
                  </div>
                </div>
              </div>

              {/* Trapped Cash */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Trapped Cash</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="outstandingRetentions" className="block text-sm font-medium text-primary mb-2">
                      Outstanding Retentions (£)
                    </label>
                    <input
                      type="number"
                      id="outstandingRetentions"
                      value={formData.outstandingRetentions}
                      onChange={(e) => handleInputChange('outstandingRetentions', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="0"
                    />
                    <p className="text-xs text-secondary mt-1">Amount held back by clients (typically 5-10%)</p>
                  </div>
                  <div>
                    <label htmlFor="cisOverWithheld" className="block text-sm font-medium text-primary mb-2">
                      CIS Over-withheld (£)
                    </label>
                    <input
                      type="number"
                      id="cisOverWithheld"
                      value={formData.cisOverWithheld}
                      onChange={(e) => handleInputChange('cisOverWithheld', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="0"
                    />
                    <p className="text-xs text-secondary mt-1">CIS tax over-withheld by contractors (if applicable)</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Project Information (Optional)</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="activeProjects" className="block text-sm font-medium text-primary mb-2">
                      Number of Active Projects
                    </label>
                    <input
                      type="number"
                      id="activeProjects"
                      value={formData.activeProjects}
                      onChange={(e) => handleInputChange('activeProjects', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="5"
                    />
                  </div>
                  <div>
                    <label htmlFor="averageProjectDuration" className="block text-sm font-medium text-primary mb-2">
                      Average Project Duration (weeks)
                    </label>
                    <input
                      type="number"
                      id="averageProjectDuration"
                      value={formData.averageProjectDuration}
                      onChange={(e) => handleInputChange('averageProjectDuration', e.target.value)}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="12"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-muted">
                <button
                  type="submit"
                  className="w-full bg-cta-bg text-cta-text px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cta-bg/90 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get My Free Cash Flow Report</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-secondary text-center mt-4">
                  By submitting, you agree to receive your personalized cash flow report and occasional construction accounting tips.
                  You can unsubscribe at any time.
                </p>
              </div>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-secondary mb-4">
              Trusted by UK construction contractors, trades, and developers
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary">
              <div>✓ CIS-Compliant</div>
              <div>✓ HMRC Registered</div>
              <div>✓ Construction Specialists</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

