import React from 'react';
import { formatCurrency } from '../../../utils/calculations';

interface ResultsDisplayProps {
  currentBudget: number;
  savings: number;
  savingsPercentage: number;
}

export default function ResultsDisplay({ 
  currentBudget, 
  savings, 
  savingsPercentage 
}: ResultsDisplayProps) {
  return (
    <div className="p-6 bg-blue-50 dark:bg-slate-700 rounded-lg space-y-4">
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300">
          Current Annual Cost: {formatCurrency(currentBudget)}
        </h4>
        <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">
          Potential Annual Savings: {formatCurrency(savings)}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Based on industry average of {savingsPercentage}% cost reduction through AI implementation
        </p>
      </div>
      
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 transition-all duration-500"
          style={{ width: `${savingsPercentage}%` }}
        />
      </div>
    </div>
  );
}