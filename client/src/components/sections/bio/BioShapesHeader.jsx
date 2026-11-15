import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * BioShapesHeader
 * Highly reliable, mobile-responsive Google Labs Venn-style interconnected shapes for "B - I - O".
 *
 * Responsiveness Specifications:
 * - 320px–375px (Small Mobile): ~96px circles with -12px overlap (Total width: ~264px, fits with full margin)
 * - 380px–639px (Standard Mobile): ~112px circles with -16px overlap (Total width: ~304px)
 * - 640px–1023px (Tablet): ~192px circles with -32px overlap
 * - 1024px+ (Desktop): ~288px–320px circles with -48px to -56px overlap
 * - Zero horizontal overflow on any device
 */
export const BioShapesHeader = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const shapes = [
    {
      id: 'B',
      letter: 'B',
      className: 'bio-circle-blue',
      defaultZ: 10
    },
    {
      id: 'I',
      letter: 'I',
      className: 'bio-circle-yellow',
      defaultZ: 20
    },
    {
      id: 'O',
      letter: 'O',
      className: 'bio-circle-green',
      defaultZ: 10
    }
  ];

  return (
    <div
      className="w-full max-w-6xl mx-auto py-6 sm:py-12 flex flex-col items-center justify-center select-none overflow-visible px-2 sm:px-4"
      aria-label="BIO Section Header"
    >
      {/* ── Interconnected Circles: Mathematically bounded for 100% mobile fit ── */}
      <div className="bio-shapes-wrapper -space-x-3 min-[380px]:-space-x-4 sm:-space-x-8 md:-space-x-10 lg:-space-x-12 px-1 sm:px-4">
        {shapes.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.75, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              whileHover={{
                scale: 1.05,
                y: -6,
                transition: { type: 'spring', stiffness: 380, damping: 22 }
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`bio-circle-card ${item.className}
                w-24 h-24 min-[380px]:w-28 min-[380px]:h-28 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80`}
              style={{
                zIndex: isHovered ? 30 : item.defaultZ
              }}
            >
              {/* Typography: Scalable white glyph */}
              <div className="relative z-30 flex items-center justify-center w-full h-full text-white pointer-events-none">
                {item.letter === 'I' ? (
                  /* Roman serif "I" matching the hand-drawn sketch with top & bottom crossbars */
                  <svg
                    viewBox="0 0 100 120"
                    className="w-[38%] h-[48%] fill-white bio-letter-glyph"
                    aria-label="I"
                  >
                    <rect x="14" y="10" width="72" height="19" rx="6" />
                    <rect x="37" y="24" width="26" height="72" rx="3" />
                    <rect x="14" y="91" width="72" height="19" rx="6" />
                  </svg>
                ) : (
                  <span
                    className="bio-letter-glyph"
                    style={{
                      fontSize: 'clamp(2.4rem, 12vw, 11rem)'
                    }}
                  >
                    {item.letter}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BioShapesHeader;
