import React from 'react';
import { motion } from 'framer-motion';
import { SectionBadge } from '../components/SectionBadge';
import { SkillProgressRing } from '../components/SkillProgressRing';
import { ConcentricRings } from '../components/ConcentricRings';
import { TechIcon } from '../components/TechIcon';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { topSkills, skillCategories } = portfolioData;

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Badge: Expertise */}
        <div className="mb-4">
          <SectionBadge text="Expertise" dotColor="red" />
        </div>

        {/* Heading: My Skills (Skills in coral-pink) */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
          My <span className="text-brand-red dark:text-brand-coral">Skills</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mb-12 leading-relaxed">
          Technical proficiencies honed through end-to-end full-stack software delivery, national hackathons, and deep learning computer vision projects.
        </p>

        {/* Top 6 Skills with Animated Progress Rings & Official Logos (as in reference screenshot 5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full max-w-5xl mb-16">
          {topSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-brand-red/15 dark:border-white/10 backdrop-blur-sm shadow-sm hover:border-brand-red/40 transition-all duration-300"
            >
              <SkillProgressRing
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                size={120}
                strokeWidth={9}
              />
            </div>
          ))}
        </div>

        {/* Skills Section Avatar + Categorized Skill Chips with Logos Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Section Avatar: Sibam in crimson hoodie with floating glowing tech logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[400px]">
              <ConcentricRings size={360} glowOpacity={0.25} />
              <img
                src="/avatars/skills_avatar.jpg"
                alt="Sibam Sasmal surrounded by floating tech logos"
                className="relative z-10 w-full h-auto rounded-3xl drop-shadow-[0_15px_30px_rgba(229,9,20,0.3)] object-cover border border-brand-red/20"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Categorized Skill Chips with Official Logos */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-brand-red/15 dark:border-white/10 backdrop-blur-md hover:border-brand-red/40 transition-all duration-300 shadow-sm"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-red dark:text-brand-coral mb-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-brand-red/10 dark:bg-brand-red/15 text-slate-800 dark:text-slate-200 border border-brand-red/20 hover:border-brand-red/50 hover:scale-105 transition-all duration-200 cursor-default group"
                    >
                      <TechIcon name={skill} className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
