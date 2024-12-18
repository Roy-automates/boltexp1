import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-lg bg-blue-500 bg-opacity-10">
          <Icon className="h-8 w-8 text-blue-500" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}