import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TechIcon } from './TechIcon';

interface SkillProgressRingProps {
  name: string;
  percentage: number;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export const SkillProgressRing: React.FC<SkillProgressRingProps> = ({
  name,
  percentage,
  color = '#38bdf8',
  size = 140,
  strokeWidth = 10,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 group"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background track circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-slate-800/40 dark:text-slate-800"
            fill="transparent"
          />

          {/* Animated progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: targetOffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            strokeLinecap="round"
            fill="transparent"
            style={{
              filter: `drop-shadow(0 0 6px ${color}80)`,
            }}
          />
        </svg>

        {/* Center: Tech Logo + Percentage */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="p-1.5 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm mb-0.5 group-hover:scale-110 transition-transform">
            <TechIcon name={name} className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white"
          >
            {percentage}%
          </motion.span>
        </div>
      </div>

      {/* Label underneath with matching Logo */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        <span className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 text-center tracking-wide">
          {name}
        </span>
      </div>
    </div>
  );
};
