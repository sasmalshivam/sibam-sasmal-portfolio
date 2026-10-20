import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="fixed z-50 bottom-[88px] sm:bottom-[92px] right-4 sm:right-8 md:right-[max(2rem,calc(50vw-460px))] w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-red bg-white text-slate-900 border border-slate-200 dark:bg-[#12080c] dark:text-amber-400 dark:border-brand-red/40 dark:shadow-[0_0_15px_rgba(229,9,20,0.4)]"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform duration-500 rotate-0 hover:rotate-90 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-500 -rotate-12 hover:rotate-0 text-slate-800" />
      )}
    </button>
  );
};
