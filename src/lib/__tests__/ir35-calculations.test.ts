/**
 * Unit Tests for IR35 Tax Calculations
 *
 * Tests UK tax calculation functions with golden scenarios and edge cases.
 * Based on 2025/26 tax year rates and thresholds.
 */

import {
  calculateInsideIR35,
  calculateOutsideIR35,
  type CalculatorInputs
} from '../ir35-calculations';

describe('IR35 Tax Calculations', () => {
  // Test scenarios with expected results
  const testScenarios = [
    {
      name: 'Standard contractor - £450/day',
      inputs: {
        dayRate: 450,
        workingDaysPerYear: 220,
        expenses: 3000,
        pensionEmployeePercent: 0,
        umbrellaMarginPerMonth: 30,
        salaryDraw: 12570,
        otherIncome: 0,
      } as CalculatorInputs,
      expectedInside: {
        grossIncome: 99000,
        netTakeHome: 61000, // Approximate
        effectiveRate: 38, // Approximate percentage
      },
      expectedOutside: {
        companyTurnover: 99000,
        netTakeHome: 70000, // Approximate
        effectiveRate: 29, // Approximate percentage
      },
    },
    {
      name: 'High-rate contractor - £700/day',
      inputs: {
        dayRate: 700,
        workingDaysPerYear: 200,
        expenses: 5000,
        pensionEmployeePercent: 5,
        umbrellaMarginPerMonth: 50,
        salaryDraw: 12570,
        otherIncome: 0,
      } as CalculatorInputs,
      expectedInside: {
        grossIncome: 140000,
        netTakeHome: 79000, // Approximate
        effectiveRate: 43, // Approximate percentage
      },
      expectedOutside: {
        companyTurnover: 140000,
        netTakeHome: 95000, // Approximate
        effectiveRate: 32, // Approximate percentage
      },
    },
    {
      name: 'Lower-rate contractor - £300/day',
      inputs: {
        dayRate: 300,
        workingDaysPerYear: 240,
        expenses: 1500,
        pensionEmployeePercent: 3,
        umbrellaMarginPerMonth: 25,
        salaryDraw: 12570,
        otherIncome: 0,
      } as CalculatorInputs,
      expectedInside: {
        grossIncome: 72000,
        netTakeHome: 47000, // Approximate
        effectiveRate: 35, // Approximate percentage
      },
      expectedOutside: {
        companyTurnover: 72000,
        netTakeHome: 52000, // Approximate
        effectiveRate: 28, // Approximate percentage
      },
    },
  ];

  describe('Inside IR35 Calculations', () => {
    testScenarios.forEach(scenario => {
      it(`should calculate correctly for ${scenario.name} (Inside IR35)`, () => {
        const result = calculateInsideIR35(scenario.inputs);

        // Check gross income
        expect(result.grossIncome).toBe(scenario.expectedInside.grossIncome);

        // Check net take-home is within reasonable range (±10%)
        const expectedNet = scenario.expectedInside.netTakeHome;
        const tolerance = expectedNet * 0.1;
        expect(result.netTakeHome).toBeGreaterThan(expectedNet - tolerance);
        expect(result.netTakeHome).toBeLessThan(expectedNet + tolerance);

        // Check effective rate is reasonable
        expect(result.effectiveRate).toBeGreaterThan(25);
        expect(result.effectiveRate).toBeLessThan(50);

        // Ensure all values are positive and realistic
        expect(result.incomeTax).toBeGreaterThanOrEqual(0);
        expect(result.employeeNI).toBeGreaterThanOrEqual(0);
        expect(result.employerNI).toBeGreaterThanOrEqual(0);
        expect(result.netTakeHome).toBeLessThan(result.grossIncome);
      });
    });

    it('should handle edge case: minimum wage equivalent', () => {
      const inputs: CalculatorInputs = {
        dayRate: 100,
        workingDaysPerYear: 200,
        expenses: 0,
        pensionEmployeePercent: 0,
        umbrellaMarginPerMonth: 20,
        salaryDraw: 12570,
        otherIncome: 0,
      };

      const result = calculateInsideIR35(inputs);

      expect(result.grossIncome).toBe(20000);
      expect(result.netTakeHome).toBeGreaterThan(0);
      expect(result.netTakeHome).toBeLessThan(result.grossIncome);
      expect(result.effectiveRate).toBeGreaterThan(0);
      expect(result.effectiveRate).toBeLessThan(100);
    });

    it('should handle pension contributions correctly', () => {
      const inputs: CalculatorInputs = {
        dayRate: 400,
        workingDaysPerYear: 220,
        expenses: 0,
        pensionEmployeePercent: 10, // 10% pension
        umbrellaMarginPerMonth: 30,
        salaryDraw: 12570,
        otherIncome: 0,
      };

      const result = calculateInsideIR35(inputs);

      expect(result.pensionContribution).toBeGreaterThan(0);
      expect(result.pensionContribution).toBe(Math.round((result.taxableIncome) * 0.1));
    });
  });

  describe('Outside IR35 Calculations', () => {
    testScenarios.forEach(scenario => {
      it(`should calculate correctly for ${scenario.name} (Outside IR35)`, () => {
        const result = calculateOutsideIR35(scenario.inputs);

        // Check company turnover
        expect(result.companyTurnover).toBe(scenario.expectedOutside.companyTurnover);

        // Check net take-home is within reasonable range (±10%)
        const expectedNet = scenario.expectedOutside.netTakeHome;
        const tolerance = expectedNet * 0.1;
        expect(result.netTakeHome).toBeGreaterThan(expectedNet - tolerance);
        expect(result.netTakeHome).toBeLessThan(expectedNet + tolerance);

        // Check effective rate is reasonable
        expect(result.effectiveRate).toBeGreaterThan(20);
        expect(result.effectiveRate).toBeLessThan(45);

        // Ensure all values are positive and realistic
        expect(result.corporationTax).toBeGreaterThanOrEqual(0);
        expect(result.salaryNet).toBeGreaterThanOrEqual(0);
        expect(result.dividendsNet).toBeGreaterThanOrEqual(0);
        expect(result.netTakeHome).toBeLessThan(result.companyTurnover);
      });
    });

    it('should handle expenses correctly', () => {
      const baseInputs: CalculatorInputs = {
        dayRate: 500,
        workingDaysPerYear: 200,
        expenses: 0,
        pensionEmployeePercent: 0,
        umbrellaMarginPerMonth: 30,
        salaryDraw: 12570,
        otherIncome: 0,
      };

      const withExpenses = { ...baseInputs, expenses: 5000 };

      const resultWithoutExpenses = calculateOutsideIR35(baseInputs);
      const resultWithExpenses = calculateOutsideIR35(withExpenses);

      // With expenses, should have lower corp tax and higher net take-home
      expect(resultWithExpenses.corporationTax).toBeLessThan(resultWithoutExpenses.corporationTax);
      expect(resultWithExpenses.netTakeHome).toBeGreaterThan(resultWithoutExpenses.netTakeHome);
    });

    it('should apply corporation tax rates correctly', () => {
      // Test small company rate (19%)
      const smallCompany: CalculatorInputs = {
        dayRate: 200,
        workingDaysPerYear: 200, // £40k turnover
        expenses: 0,
        pensionEmployeePercent: 0,
        umbrellaMarginPerMonth: 0,
        salaryDraw: 12570,
        otherIncome: 0,
      };

      const result = calculateOutsideIR35(smallCompany);
      // Should be in 19% corp tax band
      expect(result.effectiveRate).toBeLessThan(35);
    });
  });

  describe('Comparison Tests', () => {
    it('should show Outside IR35 advantage for typical scenarios', () => {
      const inputs: CalculatorInputs = {
        dayRate: 500,
        workingDaysPerYear: 220,
        expenses: 2000,
        pensionEmployeePercent: 0,
        umbrellaMarginPerMonth: 30,
        salaryDraw: 12570,
        otherIncome: 0,
      };

      const insideResult = calculateInsideIR35(inputs);
      const outsideResult = calculateOutsideIR35(inputs);

      // Outside should typically be more tax-efficient
      expect(outsideResult.netTakeHome).toBeGreaterThan(insideResult.netTakeHome);
      expect(outsideResult.effectiveRate).toBeLessThan(insideResult.effectiveRate);
    });

    it('should handle edge case where Inside might be better', () => {
      // Very low day rate where overhead costs make Inside potentially better
      const inputs: CalculatorInputs = {
        dayRate: 150,
        workingDaysPerYear: 200,
        expenses: 0,
        pensionEmployeePercent: 0,
        umbrellaMarginPerMonth: 20, // Low umbrella fee
        salaryDraw: 12570,
        otherIncome: 0,
      };

      const insideResult = calculateInsideIR35(inputs);
      const outsideResult = calculateOutsideIR35(inputs);

      // Both should produce reasonable results
      expect(insideResult.netTakeHome).toBeGreaterThan(0);
      expect(outsideResult.netTakeHome).toBeGreaterThan(0);

      // The difference should be relatively small for low incomes
      const difference = Math.abs(outsideResult.netTakeHome - insideResult.netTakeHome);
      expect(difference).toBeLessThan(5000);
    });
  });

  describe('Input Validation & Edge Cases', () => {
    it('should handle zero day rate', () => {
      const inputs: CalculatorInputs = {
        dayRate: 0,
        workingDaysPerYear: 220,
        expenses: 0,
        pensionEmployeePercent: 0,
        umbrellaMarginPerMonth: 30,
        salaryDraw: 12570,
        otherIncome: 0,
      };

      const insideResult = calculateInsideIR35(inputs);
      const outsideResult = calculateOutsideIR35(inputs);

      expect(insideResult.grossIncome).toBe(0);
      expect(insideResult.netTakeHome).toBeLessThanOrEqual(0);
      expect(outsideResult.companyTurnover).toBe(0);
    });

    it('should handle very high day rates', () => {
      const inputs: CalculatorInputs = {
        dayRate: 2000, // £2000/day
        workingDaysPerYear: 200,
        expenses: 10000,
        pensionEmployeePercent: 0,
        umbrellaMarginPerMonth: 100,
        salaryDraw: 12570,
        otherIncome: 0,
      };

      const insideResult = calculateInsideIR35(inputs);
      const outsideResult = calculateOutsideIR35(inputs);

      expect(insideResult.grossIncome).toBe(400000);
      expect(outsideResult.companyTurnover).toBe(400000);

      // Should be in higher tax bands
      expect(insideResult.effectiveRate).toBeGreaterThan(40);
      expect(outsideResult.effectiveRate).toBeGreaterThan(30);

      // Outside should still be more efficient even at high rates
      expect(outsideResult.netTakeHome).toBeGreaterThan(insideResult.netTakeHome);
    });

    it('should handle maximum pension contributions', () => {
      const inputs: CalculatorInputs = {
        dayRate: 500,
        workingDaysPerYear: 220,
        expenses: 0,
        pensionEmployeePercent: 40, // 40% pension (annual allowance limit)
        umbrellaMarginPerMonth: 30,
        salaryDraw: 12570,
        otherIncome: 0,
      };

      const result = calculateInsideIR35(inputs);

      expect(result.pensionContribution).toBeGreaterThan(0);
      expect(result.pensionContribution).toBeLessThan(result.taxableIncome);
    });
  });
});