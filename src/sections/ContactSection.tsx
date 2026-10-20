import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Heart } from 'lucide-react';
import { SectionBadge } from '../components/SectionBadge';
import { ConcentricRings } from '../components/ConcentricRings';
import { ContactForm } from '../components/ContactForm';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-between pt-20 sm:pt-28 pb-32 sm:pb-36 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4">
            <SectionBadge text="Get In Touch" dotColor="red" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
            Let's <span className="text-brand-red dark:text-brand-coral">Connect</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            I'm currently available for full-stack engineering roles, internship opportunities, and innovative product collaborations.
          </p>
        </div>

        {/* Content Grid: Left side Contact details & Avatar, Right side Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Direct Info & Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Contact Avatar: Sibam in red sweater holding smartphone & waving */}
            <div className="relative flex items-center justify-center w-[240px] sm:w-[280px] mb-8">
              <ConcentricRings size={280} glowOpacity={0.3} />
              <img
                src="/avatars/contact_avatar.jpg"
                alt="Sibam Sasmal holding phone and waving warmly"
                className="relative z-10 w-full h-auto rounded-3xl drop-shadow-[0_15px_30px_rgba(229,9,20,0.35)] object-cover border border-brand-red/20"
                loading="lazy"
              />
            </div>

            {/* Direct Info Pills */}
            <div className="space-y-4 w-full max-w-md">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-brand-red/15 dark:border-white/10 backdrop-blur-sm hover:border-brand-red/40 transition-all duration-200 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red dark:text-brand-coral group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Direct Email
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-red transition-colors">
                    {personal.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-brand-red/15 dark:border-white/10 backdrop-blur-sm shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red dark:text-brand-coral">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex justify-center lg:justify-end"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Footer: User Mandated "© 2026 Sibam Sasmal" plus Social Icons */}
        <footer className="pt-8 border-t border-brand-red/15 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-1.5">
            <span>© 2026 Sibam Sasmal. All rights reserved.</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-red transition-colors"
              aria-label="Sibam Sasmal on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-red transition-colors"
              aria-label="Sibam Sasmal on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-400 hover:text-brand-red transition-colors"
              aria-label="Email Sibam Sasmal"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
