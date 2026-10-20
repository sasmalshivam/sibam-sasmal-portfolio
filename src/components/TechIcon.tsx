import React from 'react';
import {
  SiPython,
  SiDjango,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiC,
  SiFlask,
  SiJsonwebtokens,
  SiNasa,
  SiHtml5,
  SiCss,
  SiPwa,
  SiPytorch,
  SiOpencv,
  SiTensorflow
} from 'react-icons/si';
import { FaJava, FaBrain, FaServer, FaNetworkWired } from 'react-icons/fa6';
import { Code2, Cpu, Sparkles } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4', style }) => {
  const iconKey = name.toLowerCase().trim();

  // Languages
  if (iconKey.includes('python')) return <SiPython className={className} style={{ color: '#3776AB', ...style }} />;
  if (iconKey.includes('java') && !iconKey.includes('javascript')) return <FaJava className={className} style={{ color: '#ED8B00', ...style }} />;
  if (iconKey.includes('javascript') || iconKey.includes('js')) return <SiJavascript className={className} style={{ color: '#F7DF1E', ...style }} />;
  if (iconKey === 'c' || iconKey.includes(' c ') || iconKey.startsWith('c ') || iconKey.endsWith(' c')) {
    return <SiC className={className} style={{ color: '#A8B9CC', ...style }} />;
  }

  // Backend & APIs
  if (iconKey.includes('django')) return <SiDjango className={className} style={{ color: '#092E20', ...style }} />;
  if (iconKey.includes('flask')) return <SiFlask className={className} style={{ color: '#000000', ...style }} />;
  if (iconKey.includes('jwt') || iconKey.includes('json web token')) return <SiJsonwebtokens className={className} style={{ color: '#D63AFF', ...style }} />;
  if (iconKey.includes('nasa')) return <SiNasa className={className} style={{ color: '#E03C31', ...style }} />;
  if (iconKey.includes('rest') || iconKey.includes('api')) return <FaServer className={className} style={{ color: '#38BDF8', ...style }} />;

  // Frontend
  if (iconKey.includes('react')) return <SiReact className={className} style={{ color: '#61DAFB', ...style }} />;
  if (iconKey.includes('tailwind')) return <SiTailwindcss className={className} style={{ color: '#06B6D4', ...style }} />;
  if (iconKey.includes('html')) return <SiHtml5 className={className} style={{ color: '#E34F26', ...style }} />;
  if (iconKey.includes('css')) return <SiCss className={className} style={{ color: '#1572B6', ...style }} />;
  if (iconKey.includes('pwa') || iconKey.includes('progressive web')) return <SiPwa className={className} style={{ color: '#5A0FC8', ...style }} />;

  // AI & ML
  if (iconKey.includes('deep learning')) return <SiPytorch className={className} style={{ color: '#EE4C2C', ...style }} />;
  if (iconKey.includes('computer vision')) return <SiOpencv className={className} style={{ color: '#5C3EE8', ...style }} />;
  if (iconKey.includes('classification')) return <SiTensorflow className={className} style={{ color: '#FF6F00', ...style }} />;
  if (iconKey.includes('recommendation')) return <FaNetworkWired className={className} style={{ color: '#EC4899', ...style }} />;
  if (iconKey.includes('ai') || iconKey.includes('ml')) return <FaBrain className={className} style={{ color: '#F43F5E', ...style }} />;

  // Default fallback
  return <Code2 className={className} style={style} />;
};
