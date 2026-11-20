import React from 'react';
import { motion } from 'framer-motion';
import { SkillsCardArtwork } from './SkillsCardArtwork';

/**
 * SkillsTunnelCard
 * Implements the thick light-grey/off-white picture framed card
 * with realistic 3D perspective depth, dynamic tilts, blur, and scale.
 */
export const SkillsTunnelCard = ({
  skill,
  index,
  isActive,
  style,
  onClick
}) => {
  const isLandscape = skill.aspect === 'landscape';

  return (
    <motion.div
      onClick={onClick}
      className="absolute cursor-pointer will-change-transform select-none"
      style={{
        ...style,
        transformStyle: 'preserve-3d'
      }}
      whileHover={
        isActive
          ? {
              scale: (style.scale || 1) * 1.03,
              transition: { duration: 0.2, ease: 'easeOut' }
            }
          : undefined
      }
      aria-label={`${skill.name} - ${skill.category}`}
    >
      {/* ── Thick Off-White / Light-Grey Museum Picture Frame ── */}
      <div
        className={`relative rounded-md transition-shadow duration-300 ${
          isLandscape
            ? 'w-[310px] h-[230px] min-[420px]:w-[360px] min-[420px]:h-[265px] sm:w-[440px] sm:h-[310px] md:w-[480px] md:h-[335px]'
            : 'w-[260px] h-[320px] min-[420px]:w-[300px] min-[420px]:h-[370px] sm:w-[350px] sm:h-[430px] md:w-[380px] md:h-[470px]'
        }`}
        style={{
          backgroundColor: '#EAEAEA',
          padding: '11px 11px 26px 11px',
          boxShadow: isActive
            ? '0 30px 75px -15px rgba(0, 0, 0, 0.95), 0 0 50px -5px rgba(224, 78, 122, 0.32), inset 0 1px 2px rgba(255, 255, 255, 0.85), inset 0 -2px 4px rgba(0, 0, 0, 0.3)'
            : '0 20px 45px -10px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.45)'
        }}
      >
        {/* Inner Museum Mat Border */}
        <div className="relative w-full h-full rounded-[3px] overflow-hidden bg-black shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border border-black/50">
          <SkillsCardArtwork skill={skill} />
        </div>

        {/* ── Frame Bottom Placard (Museum Plaque) ── */}
        <div className="absolute bottom-1.5 left-3.5 right-3.5 flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-neutral-600 tracking-wider uppercase font-semibold">
          <span className="truncate max-w-[75%]">{skill.badge}</span>
          <span className="text-neutral-500 font-bold">{skill.sequence}</span>
        </div>

        {/* Active Frame Halo Glow */}
        {isActive && (
          <div
            className="absolute -inset-1.5 rounded-lg pointer-events-none -z-10 opacity-70 blur-lg transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle, ${skill.accentColor} 0%, rgba(224,78,122,0.45) 55%, transparent 80%)`
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default SkillsTunnelCard;
