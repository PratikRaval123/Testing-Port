"use client";

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference on mount to avoid hydration mismatch
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-all duration-300 border border-slate-200 dark:border-slate-700 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 animate-slide-up" />
      ) : (
        <Moon className="w-5 h-5 animate-slide-up" />
      )}
    </button>
  );
};

export default ThemeToggle;