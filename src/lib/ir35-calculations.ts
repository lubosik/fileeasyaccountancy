/**
 * IR35 Tax Calculations for 2025/26 Tax Year
 *
 * Sources and Citations:
 * - Income Tax rates & Personal Allowances: GOV.UK (https://www.gov.uk/income-tax-rates)
 * - Employer NI 15% from 6 Apr 2025: GOV.UK Budget updates, Sage UK, Moneysoft
 * - Employee NI 8% to UEL, 2% above: BDO explainer
 * - Corporation Tax rates: GOV.UK (https://www.gov.uk/corporation-tax-rates)
 * - Dividend allowance £500; rates 8.75%/33.75%/39.35%: 1st Formations, GOV.UK
 */

export interface CalculatorInputs {
  dayRate: number;
  workingDaysPerYear: number;
  expenses: number;
  pensionEmployeePercent: number;
  umbrellaMarginPerMonth: number;
  salaryDraw: number;
  otherIncome: number;
}

export interface InsideIR35Results {
  grossIncome: number;
  employerNI: number;
  umbrellaFees: number;
  taxableIncome: number;
  incomeTax: number;
  employeeNI: number;
  pensionContribution: number;
  netTakeHome: number;
  effectiveRate: number;
}

export interface OutsideIR35Results {
  companyTurnover: number;
  allowableExpenses: number;
  salaryGross: number;
  employerNI: number;
  companyProfit: number;
  corporationTax: number;
  postTaxProfit: number;
  dividendsGross: number;
  salaryNet: number;
  dividendsNet: number;
  netTakeHome: number;
  effectiveRate: number;
}

// 2025/26 Tax Constants with Citations
// Source: GOV.UK Income Tax rates & Personal Allowances
const INCOME_TAX_PERSONAL_ALLOWANCE = 12570;
const INCOME_TAX_BASIC_RATE = 0.20;
const INCOME_TAX_HIGHER_RATE = 0.40;
const INCOME_TAX_ADDITIONAL_RATE = 0.45;
const INCOME_TAX_BASIC_THRESHOLD = 50270;
const INCOME_TAX_HIGHER_THRESHOLD = 125140;
const INCOME_TAX_PA_TAPER_START = 100000; // PA tapers by £1 per £2 above £100k

// Source: BDO - Employee NI 8% main rate, 2% above UEL
const EMPLOYEE_NI_RATE = 0.08;
const EMPLOYEE_NI_ADDITIONAL_RATE = 0.02;
const EMPLOYEE_NI_THRESHOLD = 12570;
const EMPLOYEE_NI_UEL = 50270;

// Source: Sage UK, Moneysoft - Employer NI 15% from 6 Apr 2025, Secondary Threshold £5,000
const EMPLOYER_NI_RATE = 0.15;
const EMPLOYER_NI_SECONDARY_THRESHOLD = 5000;

// Source: GOV.UK Corporation Tax rates
const CORP_TAX_SMALL_RATE = 0.19; // ≤£50k
const CORP_TAX_MAIN_RATE = 0.25; // ≥£250k
const CORP_TAX_SMALL_LIMIT = 50000;
const CORP_TAX_MAIN_LIMIT = 250000;

// Source: 1st Formations, GOV.UK - Dividend allowance £500; rates 8.75%/33.75%/39.35%
const DIVIDEND_ALLOWANCE = 500;
const DIVIDEND_TAX_BASIC_RATE = 0.0875;
const DIVIDEND_TAX_HIGHER_RATE = 0.3375;
const DIVIDEND_TAX_ADDITIONAL_RATE = 0.3935;

/**
 * Calculate income tax with personal allowance taper
 * Source: GOV.UK Income Tax rules
 */
function calculateIncomeTax(grossIncome: number): number {
  // Calculate personal allowance with taper
  let personalAllowance = INCOME_TAX_PERSONAL_ALLOWANCE;
  if (grossIncome > INCOME_TAX_PA_TAPER_START) {
    const reduction = Math.floor((grossIncome - INCOME_TAX_PA_TAPER_START) / 2);
    personalAllowance = Math.max(0, INCOME_TAX_PERSONAL_ALLOWANCE - reduction);
  }

  const taxableIncome = Math.max(0, grossIncome - personalAllowance);
  let tax = 0;

  if (taxableIncome <= INCOME_TAX_BASIC_THRESHOLD) {
    tax = taxableIncome * INCOME_TAX_BASIC_RATE;
  } else if (taxableIncome <= INCOME_TAX_HIGHER_THRESHOLD) {
    tax = INCOME_TAX_BASIC_THRESHOLD * INCOME_TAX_BASIC_RATE +
          (taxableIncome - INCOME_TAX_BASIC_THRESHOLD) * INCOME_TAX_HIGHER_RATE;
  } else {
    tax = INCOME_TAX_BASIC_THRESHOLD * INCOME_TAX_BASIC_RATE +
          (INCOME_TAX_HIGHER_THRESHOLD - INCOME_TAX_BASIC_THRESHOLD) * INCOME_TAX_HIGHER_RATE +
          (taxableIncome - INCOME_TAX_HIGHER_THRESHOLD) * INCOME_TAX_ADDITIONAL_RATE;
  }

  return Math.round(tax);
}

/**
 * Calculate employee National Insurance
 * Source: BDO - 8% main rate to UEL, 2% above
 */
function calculateEmployeeNI(grossIncome: number): number {
  if (grossIncome <= EMPLOYEE_NI_THRESHOLD) {
    return 0;
  }

  let ni = 0;
  const above_threshold = grossIncome - EMPLOYEE_NI_THRESHOLD;

  if (grossIncome <= EMPLOYEE_NI_UEL) {
    ni = above_threshold * EMPLOYEE_NI_RATE;
  } else {
    const main_rate_income = EMPLOYEE_NI_UEL - EMPLOYEE_NI_THRESHOLD;
    const additional_rate_income = grossIncome - EMPLOYEE_NI_UEL;
    ni = main_rate_income * EMPLOYEE_NI_RATE + additional_rate_income * EMPLOYEE_NI_ADDITIONAL_RATE;
  }

  return Math.round(ni);
}

/**
 * Calculate employer National Insurance
 * Source: Sage UK, Moneysoft - 15% rate, £5,000 Secondary Threshold
 */
function calculateEmployerNI(grossIncome: number): number {
  if (grossIncome <= EMPLOYER_NI_SECONDARY_THRESHOLD) {
    return 0;
  }
  return Math.round((grossIncome - EMPLOYER_NI_SECONDARY_THRESHOLD) * EMPLOYER_NI_RATE);
}

/**
 * Calculate corporation tax with marginal relief
 * Source: GOV.UK Corporation Tax rates and marginal relief
 */
function calculateCorporationTax(profit: number): number {
  if (profit <= CORP_TAX_SMALL_LIMIT) {
    return Math.round(profit * CORP_TAX_SMALL_RATE);
  } else if (profit >= CORP_TAX_MAIN_LIMIT) {
    return Math.round(profit * CORP_TAX_MAIN_RATE);
  } else {
    // Marginal relief calculation
    // Effective rate increases gradually from 19% to 25%
    const marginal_relief_fraction = (CORP_TAX_MAIN_LIMIT - profit) / (CORP_TAX_MAIN_LIMIT - CORP_TAX_SMALL_LIMIT);
    const marginal_relief = (CORP_TAX_MAIN_RATE - CORP_TAX_SMALL_RATE) * marginal_relief_fraction * profit;
    const tax_at_main_rate = profit * CORP_TAX_MAIN_RATE;
    return Math.round(tax_at_main_rate - marginal_relief);
  }
}

/**
 * Calculate dividend tax
 * Source: 1st Formations, GOV.UK - £500 allowance, banded rates
 */
function calculateDividendTax(dividendAmount: number, otherTaxableIncome: number): number {
  if (dividendAmount <= DIVIDEND_ALLOWANCE) {
    return 0;
  }

  const taxableDividends = dividendAmount - DIVIDEND_ALLOWANCE;
  let tax = 0;

  // Determine which tax band the dividends fall into based on total income
  const totalIncome = otherTaxableIncome + dividendAmount;

  if (totalIncome <= INCOME_TAX_BASIC_THRESHOLD) {
    tax = taxableDividends * DIVIDEND_TAX_BASIC_RATE;
  } else if (totalIncome <= INCOME_TAX_HIGHER_THRESHOLD) {
    const basicRateDividends = Math.max(0, INCOME_TAX_BASIC_THRESHOLD - otherTaxableIncome);
    const higherRateDividends = taxableDividends - basicRateDividends;

    tax = basicRateDividends * DIVIDEND_TAX_BASIC_RATE +
          higherRateDividends * DIVIDEND_TAX_HIGHER_RATE;
  } else {
    const basicRateDividends = Math.max(0, INCOME_TAX_BASIC_THRESHOLD - otherTaxableIncome);
    const higherRateDividends = Math.max(0, Math.min(taxableDividends - basicRateDividends,
                                                     INCOME_TAX_HIGHER_THRESHOLD - INCOME_TAX_BASIC_THRESHOLD));
    const additionalRateDividends = Math.max(0, taxableDividends - basicRateDividends - higherRateDividends);

    tax = basicRateDividends * DIVIDEND_TAX_BASIC_RATE +
          higherRateDividends * DIVIDEND_TAX_HIGHER_RATE +
          additionalRateDividends * DIVIDEND_TAX_ADDITIONAL_RATE;
  }

  return Math.round(tax);
}

/**
 * Calculate Inside IR35 scenario (PAYE via umbrella)
 * Models typical umbrella company treatment where employer NI is funded from assignment rate
 */
export function calculateInsideIR35(inputs: CalculatorInputs): InsideIR35Results {
  const assignmentIncome = inputs.dayRate * inputs.workingDaysPerYear;

  // Employer NI deducted from assignment income (typical umbrella approach)
  const employerNI = calculateEmployerNI(assignmentIncome);
  const umbrellaFees = inputs.umbrellaMarginPerMonth * 12;

  // Taxable salary after employer costs
  const taxableIncome = assignmentIncome - employerNI - umbrellaFees;

  // Employee deductions
  const pensionContribution = Math.round(taxableIncome * (inputs.pensionEmployeePercent / 100));
  const salaryAfterPension = taxableIncome - pensionContribution;

  const incomeTax = calculateIncomeTax(salaryAfterPension);
  const employeeNI = calculateEmployeeNI(salaryAfterPension);

  const netTakeHome = salaryAfterPension - incomeTax - employeeNI;
  const effectiveRate = ((assignmentIncome - netTakeHome) / assignmentIncome) * 100;

  return {
    grossIncome: assignmentIncome,
    employerNI,
    umbrellaFees,
    taxableIncome,
    incomeTax,
    employeeNI,
    pensionContribution,
    netTakeHome,
    effectiveRate
  };
}

/**
 * Calculate Outside IR35 scenario (Limited Company with salary + dividends)
 * Standard small company setup with optimal salary + dividend strategy
 */
export function calculateOutsideIR35(inputs: CalculatorInputs): OutsideIR35Results {
  const companyTurnover = inputs.dayRate * inputs.workingDaysPerYear;
  const allowableExpenses = inputs.expenses;
  const salaryGross = inputs.salaryDraw;

  // Company side calculations
  const employerNI = calculateEmployerNI(salaryGross);
  const companyProfit = companyTurnover - allowableExpenses - salaryGross - employerNI;
  const corporationTax = calculateCorporationTax(companyProfit);
  const postTaxProfit = companyProfit - corporationTax;

  // Available for dividends
  const dividendsGross = postTaxProfit;

  // Personal side calculations
  // Salary
  const salaryIncomeTax = calculateIncomeTax(salaryGross);
  const salaryEmployeeNI = calculateEmployeeNI(salaryGross);
  const salaryNet = salaryGross - salaryIncomeTax - salaryEmployeeNI;

  // Dividends (use salary as other taxable income for banding)
  const dividendTax = calculateDividendTax(dividendsGross, salaryGross);
  const dividendsNet = dividendsGross - dividendTax;

  const netTakeHome = salaryNet + dividendsNet;
  const effectiveRate = ((companyTurnover - netTakeHome) / companyTurnover) * 100;

  return {
    companyTurnover,
    allowableExpenses,
    salaryGross,
    employerNI,
    companyProfit,
    corporationTax,
    postTaxProfit,
    dividendsGross,
    salaryNet,
    dividendsNet,
    netTakeHome,
    effectiveRate
  };
}