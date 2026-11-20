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
  depth,
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
              rotateZ: 0,
              transition: { duration: 0.25, ease: 'easeOut' }
            }
          : undefined
      }
      aria-label={`${skill.title} - ${skill.category}`}
    >
      {/* ── Thick Off-White / Light-Grey Museum Picture Frame ── */}
      <div
        className={`relative rounded-md transition-shadow duration-300 ${
          isLandscape
            ? 'w-[290px] h-[210px] min-[400px]:w-[330px] min-[400px]:h-[240px] sm:w-[420px] sm:h-[300px] md:w-[460px] md:h-[330px]'
            : 'w-[230px] h-[290px] min-[400px]:w-[260px] min-[400px]:h-[330px] sm:w-[330px] sm:h-[420px] md:w-[360px] md:h-[460px]'
        }`}
        style={{
          backgroundColor: '#EAEAEA',
          padding: '10px 10px 24px 10px',
          boxShadow: isActive
            ? '0 30px 70px -15px rgba(0, 0, 0, 0.9), 0 0 45px -5px rgba(224, 78, 122, 0.28), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -2px 4px rgba(0, 0, 0, 0.25)'
            : '0 20px 45px -10px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.4)'
        }}
      >
        {/* Inner Museum Mat Bevel Border */}
        <div className="relative w-full h-full rounded-[3px] overflow-hidden bg-black shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border border-black/40">
          <SkillsCardArtwork skill={skill} />
        </div>

        {/* ── Frame Bottom Placard (Museum Plaque) ── */}
        <div className="absolute bottom-1.5 left-3 right-3 flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-neutral-600 tracking-wider uppercase font-semibold">
          <span className="truncate max-w-[70%]">{skill.badge || skill.title}</span>
          <span className="text-neutral-500 font-bold">{skill.sequence.split(' ')[0]}</span>
        </div>

        {/* Active Frame Halo Glow */}
        {isActive && (
          <div
            className="absolute -inset-1 rounded-lg pointer-events-none -z-10 opacity-60 blur-md transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle, ${skill.accentColor} 0%, rgba(224,78,122,0.4) 50%, transparent 80%)`
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default SkillsTunnelCard;
