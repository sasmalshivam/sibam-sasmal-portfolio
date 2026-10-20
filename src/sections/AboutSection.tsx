import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Github, Linkedin, Mail, Calendar, MapPin } from 'lucide-react';
import { SectionBadge } from '../components/SectionBadge';
import { BlobFrame } from '../components/BlobFrame';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { personal, education } = portfolioData;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background soft red ambient aura */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Typography, Bio, Timeline, Socials & Let's Talk CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          {/* Badge: ABOUT ME */}
          <div className="mb-4">
            <SectionBadge text="ABOUT ME" dotColor="red" />
          </div>

          {/* Heading: Turning Ideas Into Digital Reality (last two words accented in coral-pink) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            Turning Ideas Into <br className="hidden sm:inline" />
            <span className="text-brand-red dark:text-brand-coral">Digital Reality</span>
          </h2>

          {/* Paragraphs drawn strictly from resume */}
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            {personal.detailedBio.map((bioText, i) => (
              <p key={i}>{bioText}</p>
            ))}
          </div>

          {/* Education Timeline */}
          <div className="w-full max-w-2xl mb-8 text-left">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-red dark:text-brand-coral mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education Journey</span>
            </h3>
            
            <div className="space-y-3">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-brand-red/15 dark:border-white/10 backdrop-blur-sm transition-all duration-200 hover:border-brand-red/40"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {item.degree}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-brand-red dark:text-brand-coralLight bg-brand-red/10 px-2 py-0.5 rounded-full w-fit">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{item.institution}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-red/70" />
                      {item.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Icon Buttons (GitHub, LinkedIn placeholder, Email - strictly no unapproved socials per prompt) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-white/80 dark:bg-[#1a0a10] border border-brand-red/20 text-slate-800 dark:text-slate-200 hover:text-white hover:bg-brand-red dark:hover:bg-brand-red hover:scale-110 transition-all duration-200 shadow-sm"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (TODO: User to supply link)"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-white/80 dark:bg-[#1a0a10] border border-brand-red/20 text-slate-800 dark:text-slate-200 hover:text-white hover:bg-brand-red dark:hover:bg-brand-red hover:scale-110 transition-all duration-200 shadow-sm"
              title="LinkedIn (TODO: Placeholder)"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-white/80 dark:bg-[#1a0a10] border border-brand-red/20 text-slate-800 dark:text-slate-200 hover:text-white hover:bg-brand-red dark:hover:bg-brand-red hover:scale-110 transition-all duration-200 shadow-sm"
              title="Email Sibam"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* "Let's Talk" Button with smooth scroll to Contact */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#E50914] text-white font-semibold text-sm sm:text-base shadow-glow-red hover:bg-[#c80812] hover:shadow-glow-red-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Right Column: Avatar inside organic red gradient Blob Frame (matching Screenshot 4) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
        >
          <BlobFrame>
            <img
              src="/avatars/about_avatar.jpg"
              alt="Sibam Sasmal in tailored red blazer with laptop"
              className="w-full h-auto object-cover object-top scale-105"
              loading="lazy"
            />
          </BlobFrame>
        </motion.div>
      </div>
    </section>
  );
};
