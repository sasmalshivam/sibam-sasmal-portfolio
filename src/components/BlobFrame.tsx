import React from 'react';

interface BlobFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const BlobFrame: React.FC<BlobFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-4 bg-brand-red/30 rounded-full blur-2xl pointer-events-none opacity-60 dark:opacity-80" />

      {/* Blob container with organic border-radius matching screenshot 4 */}
      <div
        className="relative w-[280px] h-[340px] sm:w-[360px] sm:h-[440px] md:w-[420px] md:h-[500px] overflow-hidden bg-gradient-to-tr from-[#990011] via-[#D80027] to-[#E50914] shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
        style={{
          borderRadius: '46% 54% 63% 37% / 40% 43% 57% 60%',
          boxShadow: '0 20px 50px rgba(229, 9, 20, 0.4), inset 0 0 30px rgba(0,0,0,0.2)'
        }}
      >
        {/* Subtle highlight inner rim */}
        <div className="absolute inset-0 border border-white/20 pointer-events-none rounded-[inherit]" />
        
        {/* Children (Avatar image) positioned inside */}
        <div className="w-full h-full flex items-end justify-center overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
