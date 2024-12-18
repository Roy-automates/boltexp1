import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueSectionProps {
  title: string;
  icon: LucideIcon;
  question: string;
  calculateValue: (input: number) => {
    savings: number;
    description: string;
    source: string;
  };
}

export default function ValueSection({ title, icon: Icon, question, calculateValue }: ValueSectionProps) {
  const [input, setInput] = useState<string>('');
  const value = calculateValue(Number(input) || 0);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 rounded-lg bg-blue-500 bg-opacity-20">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {question}
          </label>
          <input
            type="number"
            min="0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
          />
        </div>

        {input && (
          <div className="p-4 bg-blue-50 dark:bg-slate-700 rounded-lg">
            <p className="text-lg font-semibold text-blue-900 dark:text-blue-300">
              Potential Value: ${value.savings.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {value.description}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Source: {value.source}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}