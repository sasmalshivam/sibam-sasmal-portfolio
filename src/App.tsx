import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { BottomNavBar } from './components/BottomNavBar';
import { ThemeToggle } from './components/ThemeToggle';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = ['home', 'about', 'skills', 'certificates', 'projects', 'contact'];

export const App: React.FC = () => {
  const activeSection = useScrollSpy(SECTION_IDS, 250);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] via-[#FEECEF] to-[#FDE4E8] dark:from-[#080205] dark:via-[#100408] dark:to-[#18050c] text-slate-900 dark:text-slate-100 transition-colors duration-500 relative">
      {/* Background visual texture overlays */}
      <div className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[radial-gradient(#E50914_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AchievementsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Floating Theme Toggle (Above Nav Bar Right End) */}
      <ThemeToggle />

      {/* Floating Rounded Red Bottom Navigation Bar */}
      <BottomNavBar activeSection={activeSection} />
    </div>
  );
};

export default App;
