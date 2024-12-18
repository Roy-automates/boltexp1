import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import BudgetInput from './BudgetInput';
import ResultsDisplay from './ResultsDisplay';
import Citations from './Citations';
import { calculateSavings } from '../../../utils/calculations';
import { customerServiceCitations } from '../../../data/citations';

const SAVINGS_PERCENTAGE = 70;

export default function CustomerServiceCalculator() {
  const [budget, setBudget] = useState<string>('');
  const currentBudget = Number(budget) || 0;
  const savings = calculateSavings(currentBudget, SAVINGS_PERCENTAGE);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 rounded-lg bg-blue-500 bg-opacity-20">
          <MessageSquare className="h-6 w-6 text-blue-500" />
        </div>
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Customer Service AI Agent
        </h2>
      </div>

      <div className="space-y-6">
        <BudgetInput 
          value={budget}
          onChange={setBudget}
        />

        {budget && (
          <>
            <ResultsDisplay 
              currentBudget={currentBudget}
              savings={savings}
              savingsPercentage={SAVINGS_PERCENTAGE}
            />
            <Citations citations={customerServiceCitations} />
          </>
        )}
      </div>
    </div>
  );
}