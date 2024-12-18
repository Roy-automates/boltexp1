import React from 'react';

interface FormInputProps {
  type: 'text' | 'email';
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
  disabled?: boolean;
}

export default function FormInput({
  type,
  label,
  value,
  onChange,
  error,
  placeholder,
  disabled
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 rounded-lg border ${
          error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
        } dark:bg-slate-700 focus:ring-2 transition-colors ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      />
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}