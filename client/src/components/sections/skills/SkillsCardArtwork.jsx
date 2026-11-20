import React from 'react';
import { Layers, Terminal, Database, Cpu, Cloud, Sparkles } from 'lucide-react';

/**
 * SkillsCardArtwork
 * Pure, bold, high-impact visual artwork for each Full-Stack skill card.
 * Zero explanations or code text — only the skill name, category, and core frameworks.
 */
export const SkillsCardArtwork = ({ skill }) => {
  const { id, name, category, frameworks, accentColor, secondaryAccent, sequence } = skill;

  // Icon mapping
  const renderSkillIcon = () => {
    const iconClass = "w-7 h-7 sm:w-9 sm:h-9";
    switch (id) {
      case 'react-next':
        return <Layers className={iconClass} style={{ color: accentColor }} />;
      case 'node-express':
        return <Terminal className={iconClass} style={{ color: accentColor }} />;
      case 'postgres-prisma':
        return <Database className={iconClass} style={{ color: accentColor }} />;
      case 'ts-python':
        return <Cpu className={iconClass} style={{ color: accentColor }} />;
      case 'docker-devops':
        return <Cloud className={iconClass} style={{ color: accentColor }} />;
      case 'genai-agents':
        return <Sparkles className={iconClass} style={{ color: accentColor }} />;
      default:
        return <Layers className={iconClass} style={{ color: accentColor }} />;
    }
  };

  return (
    <div className="relative w-full h-full bg-[#121317] overflow-hidden rounded-[4px] flex flex-col justify-between p-5 sm:p-7 select-none text-left">
      {/* ── Background Cyber Ambient Glow & Geometry ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, ${accentColor} 0%, transparent 65%),
                            radial-gradient(circle at 20% 85%, ${secondaryAccent} 0%, transparent 70%),
                            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 100% 100%, 22px 22px, 22px 22px'
        }}
      />

      {/* ── Top Header: Sequence ID & Category Eyebrow ── */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: accentColor }}
          />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 font-medium">
            {category}
          </span>
        </div>

        <div className="font-mono text-xs sm:text-sm font-bold text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
          {sequence}
        </div>
      </div>

      {/* ── Centerpiece: Bold Skill Name & Iconic Emblem ── */}
      <div className="relative z-10 my-auto py-3 sm:py-5 flex flex-col gap-3">
        {/* Glowing Icon Emblem */}
        <div
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center border shadow-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(255, 255, 255, 0.12)',
            boxShadow: `0 0 25px -5px ${accentColor}40`
          }}
        >
          {renderSkillIcon()}
        </div>

        {/* Large Prominent Skill Name */}
        <h3
          className="font-display font-black text-white tracking-tight leading-tight"
          style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.2rem)' }}
        >
          {name}
        </h3>
      </div>

      {/* ── Bottom Section: Core Frameworks Badges List ── */}
      <div className="relative z-10 pt-3 border-t border-white/10">
        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
          Frameworks & Libraries
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {frameworks.map((fw, idx) => (
            <span
              key={idx}
              className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/8 text-white font-medium border border-white/10 shadow-xs"
              style={{
                borderColor: idx === 0 ? `${accentColor}50` : 'rgba(255,255,255,0.1)'
              }}
            >
              {fw}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Corner Vignette */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-black/70 to-transparent pointer-events-none" />
    </div>
  );
};

export default SkillsCardArtwork;
