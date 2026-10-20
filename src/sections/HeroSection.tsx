import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronRight } from 'lucide-react';
import { SectionBadge } from '../components/SectionBadge';
import { ConcentricRings } from '../components/ConcentricRings';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { portfolioData } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [personal.roles.length]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 dark:bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-coral/10 dark:bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Avatar with Concentric Glowing Rings (as in reference screenshots 2 & 3) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-6 flex justify-center items-center relative order-1 lg:order-1"
        >
          <div className="relative flex items-center justify-center w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]">
            {/* Glowing Concentric Red Rings behind Avatar */}
            <ConcentricRings size={460} glowOpacity={0.35} />

            {/* User Mandated Portrait Markup with Reserved Aspect Ratio */}
            <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02] aspect-[520/780] w-full max-w-[520px]">
              <img
                src="/animated_3d_portfolio_portrait.svg"
                alt="Sibam Sasmal 3D portfolio portrait"
                width={520}
                height={780}
                className="hero-portrait rounded-2xl drop-shadow-[0_15px_35px_rgba(229,9,20,0.35)] w-full h-auto block"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Content & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2"
        >
          {/* Badge: Available for work */}
          <div className="mb-4">
            <SectionBadge text="Available for work" dotColor="green" />
          </div>

          {/* Heading: Hi, I'm Sibam */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-3">
            Hi, I'm <span className="text-brand-red dark:text-brand-coral">{personal.firstName}</span>
          </h1>

          {/* Rotating Role with < > delimiters */}
          <div className="h-8 sm:h-10 mb-4 flex items-center justify-center lg:justify-start">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-2xl font-mono font-semibold text-brand-red dark:text-brand-coralLight flex items-center gap-1.5"
            >
              <span className="text-brand-red/60 dark:text-brand-coral/60 font-mono">&lt;</span>
              <span>{personal.roles[roleIndex]}</span>
              <span className="text-brand-red/60 dark:text-brand-coral/60 font-mono">&gt;</span>
            </motion.p>
          </div>

          {/* 2-line Intro drawn from resume */}
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
            {personal.summary}
          </p>

          {/* Real Stats from Resume */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 px-3 sm:px-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-brand-red/15 dark:border-white/10 backdrop-blur-md mb-8 w-full max-w-lg shadow-sm">
            {personal.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white flex items-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium text-center lg:text-left mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs matching reference screenshot */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
            {/* Solid Red Pill: Download CV */}
            <a
              href="/Sibam_Sasmal_Resume.pdf"
              download="Sibam_Sasmal_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full bg-[#E50914] text-white font-semibold text-sm sm:text-base shadow-glow-red hover:bg-[#c80812] hover:shadow-glow-red-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            {/* Outlined Red Pill: Hire Me */}
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full border-2 border-[#E50914] text-slate-900 dark:text-white font-semibold text-sm sm:text-base hover:bg-[#E50914]/10 dark:hover:bg-[#E50914]/20 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            >
              <Mail className="w-4 h-4 text-[#E50914]" />
              <span>Hire Me</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
