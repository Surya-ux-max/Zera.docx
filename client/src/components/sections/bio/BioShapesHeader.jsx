import React from 'react';
import { motion } from 'framer-motion';

/**
 * BioShapesHeader
 * Premium Antigravity Venn-style overlapping circular shapes spelling "B - I - O".
 * Features:
 * - Edge-to-edge expansive scale across the viewport
 * - Consistent, high-contrast crisp white typography across all three shapes
 * - Custom bold Roman-numeral serif "I" matching the hand-drawn sketch
 * - Layered glassmorphic borders and multi-tier diffuse shadows (no muddy multiply)
 * - Interactive 3D hover physics and smooth entrance transitions
 */
export const BioShapesHeader = () => {
  const shapes = [
    {
      id: 'B',
      letter: 'B',
      gradient: 'from-[#4285F4] to-[#2563EB]',
      shadow: 'rgba(66, 133, 244, 0.35)',
      borderColor: 'border-blue-300/40',
      zIndex: 10
    },
    {
      id: 'I',
      letter: 'I',
      gradient: 'from-[#F59E0B] via-[#EAB308] to-[#D97706]',
      shadow: 'rgba(245, 158, 11, 0.35)',
      borderColor: 'border-amber-200/50',
      zIndex: 20
    },
    {
      id: 'O',
      letter: 'O',
      gradient: 'from-[#34A853] to-[#15803D]',
      shadow: 'rgba(52, 168, 83, 0.35)',
      borderColor: 'border-emerald-300/40',
      zIndex: 10
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto overflow-visible py-8 sm:py-14 flex flex-col items-center justify-center select-none">
      {/* ── Subtitle Spec Pill ── */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-10 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-xs border border-[var(--color-beige)] shadow-2xs"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5B95F9] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5B95F9]" />
        </span>
        <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-muted)] font-medium">
          02 // Profile Identity
        </span>
      </motion.div>

      {/* ── Overlapping Circles Container: Spans left to right ── */}
      <div className="w-full flex items-center justify-center -space-x-10 sm:-space-x-20 md:-space-x-28 lg:-space-x-36 xl:-space-x-40 px-2 sm:px-6">
        {shapes.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.65, y: 45 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{
              scale: 1.06,
              y: -8,
              zIndex: 35,
              transition: { type: 'spring', stiffness: 350, damping: 20 }
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`relative rounded-full aspect-square flex items-center justify-center cursor-pointer
              w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem]
              bg-gradient-to-br ${item.gradient}
              border-[3px] sm:border-[5px] ${item.borderColor}
              transition-all duration-300`}
            style={{
              zIndex: item.zIndex,
              boxShadow: `0 24px 60px -12px ${item.shadow}, 0 0 0 1px rgba(255, 255, 255, 0.35) inset, 0 2px 4px rgba(255, 255, 255, 0.4) inset`
            }}
          >
            {/* Top Gloss Reflection */}
            <div className="absolute top-2 left-6 right-6 h-1/3 rounded-t-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

            {/* Typography: Pristine, Consistent White with Subtle Shadow */}
            <div className="relative z-30 flex items-center justify-center w-full h-full text-white pointer-events-none">
              {item.letter === 'I' ? (
                /* Serif Roman "I" matching the hand-drawn sketch with top & bottom crossbars */
                <svg
                  viewBox="0 0 100 120"
                  className="w-[42%] h-[50%] fill-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
                  aria-label="I"
                >
                  {/* Top Crossbar */}
                  <rect x="14" y="10" width="72" height="19" rx="6" />
                  {/* Vertical Column */}
                  <rect x="37" y="24" width="26" height="72" rx="3" />
                  {/* Bottom Crossbar */}
                  <rect x="14" y="91" width="72" height="19" rx="6" />
                </svg>
              ) : (
                <span
                  className="font-display font-black leading-none tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] select-none"
                  style={{
                    fontSize: 'clamp(3.8rem, 16vw, 15rem)'
                  }}
                >
                  {item.letter}
                </span>
              )}
            </div>

            {/* Inner Glass Highlight Edge */}
            <div className="absolute inset-2 sm:inset-3 rounded-full border border-white/25 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BioShapesHeader;
