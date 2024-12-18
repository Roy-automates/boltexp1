// Utility functions for calculations
export const calculateSavings = (currentBudget: number, savingsPercentage: number): number => {
  return currentBudget * (savingsPercentage / 100);
};

export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};