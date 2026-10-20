import React from 'react';

interface ConcentricRingsProps {
  size?: number; // Size in pixels
  className?: string;
  glowOpacity?: number;
}

export const ConcentricRings: React.FC<ConcentricRingsProps> = ({
  size = 500,
  className = '',
  glowOpacity = 0.4
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none flex items-center justify-center select-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      {/* Central radial soft halo glow */}
      <div
        className="absolute rounded-full transition-all duration-700 blur-2xl"
        style={{
          width: `${size * 0.85}px`,
          height: `${size * 0.85}px`,
          background: `radial-gradient(circle, rgba(229, 9, 20, ${glowOpacity}) 0%, rgba(229, 9, 20, 0.08) 55%, transparent 75%)`,
        }}
      />

      {/* Outer concentric ring */}
      <div
        className="absolute rounded-full border border-brand-red/30 dark:border-brand-red/40 animate-ring-pulse"
        style={{
          width: `${size * 0.95}px`,
          height: `${size * 0.95}px`,
          boxShadow: '0 0 15px rgba(229, 9, 20, 0.15)',
        }}
      />

      {/* Middle concentric ring */}
      <div
        className="absolute rounded-full border border-brand-red/50 dark:border-brand-red/60 animate-ring-pulse-delayed"
        style={{
          width: `${size * 0.8}px`,
          height: `${size * 0.8}px`,
          boxShadow: '0 0 20px rgba(229, 9, 20, 0.25)',
        }}
      />

      {/* Inner concentric ring */}
      <div
        className="absolute rounded-full border-2 border-brand-red/70 dark:border-brand-red/80"
        style={{
          width: `${size * 0.65}px`,
          height: `${size * 0.65}px`,
          boxShadow: '0 0 25px rgba(229, 9, 20, 0.35)',
        }}
      />
    </div>
  );
};
