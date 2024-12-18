import React from 'react';
import { Citation } from '../../../data/citations';

interface CitationsProps {
  citations: Citation[];
}

export default function Citations({ citations }: CitationsProps) {
  return (
    <div className="mt-6 space-y-4 text-sm">
      {citations.map(({ id, text, link }) => (
        <div key={id} className="flex gap-2">
          <span className="text-gray-500 dark:text-gray-400">[{id}]</span>
          <p className="text-gray-600 dark:text-gray-300">
            {text}.{' '}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              Learn more
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}