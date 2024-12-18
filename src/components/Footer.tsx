import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Roy automates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}