import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Trophy, Calendar } from 'lucide-react';
import { SectionBadge } from '../components/SectionBadge';
import { ConcentricRings } from '../components/ConcentricRings';
import { TechIcon } from '../components/TechIcon';
import { portfolioData, Project } from '../data/portfolioData';

type FilterTab = 'All' | 'AI-ML' | 'Web' | 'Hackathon';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 sm:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Badge: Featured Work */}
        <div className="mb-4">
          <SectionBadge text="Portfolio Highlights" dotColor="red" />
        </div>

        {/* Heading: Turning Ideas Into Code */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4 text-center">
          Featured <span className="text-brand-red dark:text-brand-coral">Projects</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed text-center">
          End-to-end applications spanning deep learning diagnostics, real-time safety automation, NASA telemetry dashboards, and offline PWAs.
        </p>

        {/* Section Avatar Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center mb-10 w-full max-w-md"
        >
          <div className="relative flex items-center justify-center w-[260px] sm:w-[320px]">
            <ConcentricRings size={300} glowOpacity={0.25} />
            <img
              src="/avatars/projects_avatar.jpg"
              alt="Sibam Sasmal demonstrating holographic tech project screen"
              className="relative z-10 w-full h-auto rounded-3xl drop-shadow-[0_15px_30px_rgba(229,9,20,0.3)] object-cover border border-brand-red/20"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Filter Tabs (All / AI-ML / Web / Hackathon) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/70 dark:bg-white/5 border border-brand-red/20 dark:border-white/10 backdrop-blur-md mb-12 shadow-sm">
          {(['All', 'AI-ML', 'Web', 'Hackathon'] as FilterTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                activeTab === tab
                  ? 'bg-[#E50914] text-white shadow-glow-red'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab === 'All' ? 'All Projects' : tab === 'AI-ML' ? 'AI & Deep Learning' : tab === 'Web' ? 'Web & APIs' : 'Hackathon Winners'}
            </button>
          ))}
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/75 dark:bg-[#13070b]/80 border transition-all duration-300 backdrop-blur-md shadow-sm group hover:-translate-y-1.5 ${
                  project.featured
                    ? 'border-brand-red dark:border-brand-red/60 shadow-[0_0_25px_rgba(229,9,20,0.25)]'
                    : 'border-brand-red/15 dark:border-white/10 hover:border-brand-red/40'
                }`}
              >
                <div>
                  {/* Top Row: Category, Date, Featured Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brand-red dark:text-brand-coral font-semibold">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-500 dark:text-amber-400">
                          <Trophy className="w-3 h-3" />
                          <span>Winner</span>
                        </span>
                      )}
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-brand-red dark:group-hover:text-brand-coral transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Short Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key bullet points from resume */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-500 dark:text-slate-400 list-disc list-inside">
                    {project.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-normal">
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Tags Chip Row with Official Tech Logos */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-brand-red/10 dark:border-white/5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-brand-red/10 dark:bg-brand-red/15 text-slate-700 dark:text-slate-300 border border-brand-red/15 hover:border-brand-red/40 transition-colors"
                      >
                        <TechIcon name={tag} className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Actions: Live Demo & GitHub */}
                  <div className="flex items-center gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#E50914] text-white text-xs font-semibold shadow-glow-red hover:bg-[#c80812] transition-all duration-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <div className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 text-xs font-medium text-center border border-slate-200 dark:border-white/5">
                        <span>Demo On Request</span>
                      </div>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub Repository for ${project.title}`}
                        className="inline-flex items-center justify-center p-2.5 rounded-xl border border-brand-red/20 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-brand-red dark:hover:bg-brand-red transition-all duration-200"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
