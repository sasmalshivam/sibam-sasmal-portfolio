import React from 'react';

interface SectionBadgeProps {
  text: string;
  dotColor?: 'red' | 'green';
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  text,
  dotColor = 'red',
  className = ''
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide border transition-all duration-300 ${
        dotColor === 'green'
          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 dark:text-emerald-300 shadow-sm'
          : 'bg-brand-red/10 border-brand-red/30 text-brand-red dark:text-brand-coral shadow-sm'
      } ${className}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          dotColor === 'green'
            ? 'bg-emerald-500 animate-pulse'
            : 'bg-brand-red dark:bg-brand-coral shadow-[0_0_8px_rgba(229,9,20,0.8)]'
        }`}
      />
      <span>{text}</span>
    </div>
  );
};
