import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-600 dark:text-slate-500 text-sm flex items-center justify-center gap-2">
          Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Pratik Raval
        </p>
        <p className="text-slate-500 dark:text-slate-600 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;