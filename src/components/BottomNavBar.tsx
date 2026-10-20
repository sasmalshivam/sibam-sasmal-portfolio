import React from 'react';
import { Home, User, Code2, Award, FolderGit2, Mail } from 'lucide-react';

interface BottomNavBarProps {
  activeSection: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'certificates', label: 'Achievements', icon: Award },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed z-40 bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 w-[95%] max-w-[920px] px-2 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#E50914] text-white shadow-nav-bar flex items-center justify-around sm:justify-between safe-bottom border border-red-400/30 backdrop-blur-md"
      role="navigation"
      aria-label="Portfolio sections"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`relative flex flex-col items-center justify-center py-1 px-1.5 sm:px-4 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white group ${
              isActive ? 'text-white font-semibold' : 'text-white/75 hover:text-white'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {/* White top indicator bar for active item (as shown in reference screenshots) */}
            {isActive && (
              <span
                className="absolute -top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-[3px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)] transition-all duration-300"
                aria-hidden="true"
              />
            )}

            <Icon
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
                isActive ? 'scale-110' : 'group-hover:scale-105 opacity-85 group-hover:opacity-100'
              }`}
            />
            
            <span className="text-[10px] sm:text-xs mt-0.5 tracking-tight sm:tracking-normal whitespace-nowrap">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
