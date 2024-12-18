import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
}

export default function TestimonialCard({ quote, author, position }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
      <p className="text-gray-700 dark:text-gray-300 mb-4">"{quote}"</p>
      <div className="text-blue-500">
        <p className="font-semibold">{author}</p>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
}