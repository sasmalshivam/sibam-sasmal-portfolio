import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { SectionBadge } from '../components/SectionBadge';
import { ConcentricRings } from '../components/ConcentricRings';
import { portfolioData, Achievement } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const { achievements } = portfolioData;

  const getAwardIcon = (type: Achievement['awardType']) => {
    switch (type) {
      case 'winner':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'finalist':
      case 'prize':
      case 'runner-up':
        return <Award className="w-5 h-5 text-brand-red dark:text-brand-coral" />;
      case 'certification':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-brand-red" />;
    }
  };

  return (
    <section
      id="certificates"
      className="relative min-h-screen flex items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Avatar in black gown/cap with concentric glowing rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-1"
        >
          <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[420px]">
            {/* Concentric glowing red rings per prompt requirement */}
            <ConcentricRings size={420} glowOpacity={0.35} />

            <img
              src="/avatars/achievements_avatar.jpg"
              alt="Sibam Sasmal in graduation cap and gown holding certificate"
              className="relative z-10 w-full h-auto rounded-3xl drop-shadow-[0_20px_40px_rgba(229,9,20,0.35)] object-cover border border-brand-red/20"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right Column: Achievements & Certifications List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2"
        >
          {/* Badge: Achievements */}
          <div className="mb-4">
            <SectionBadge text="Certifications & Honors" dotColor="red" />
          </div>

          {/* Heading: Honors & Achievements */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
            Recognized <span className="text-brand-red dark:text-brand-coral">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            National hackathon championships, academic laurels, and verified industry credentials earned through proven engineering execution.
          </p>

          {/* List Layout with Date on Right and Optional Verify Link (matching reference) */}
          <div className="w-full space-y-3">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-brand-red/15 dark:border-white/10 backdrop-blur-md hover:border-brand-red/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm group hover:scale-[1.01]"
              >
                <div className="flex items-start gap-3.5 text-left">
                  <div className="p-2 rounded-xl bg-brand-red/10 border border-brand-red/20 group-hover:scale-110 transition-transform duration-200 mt-0.5">
                    {getAwardIcon(item.awardType)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-center shrink-0">
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-brand-red dark:text-brand-coralLight bg-brand-red/10 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>

                  {/* Strictly only show Verify link where URL is provided per prompt instructions */}
                  {item.verifyUrl ? (
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-red hover:underline"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
