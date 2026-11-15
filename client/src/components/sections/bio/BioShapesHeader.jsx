import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * BioShapesHeader
 * Clean, modern Google Labs Venn-style interconnected shapes for "B - I - O".
 * - Uses exact website color tokens: var(--color-blue), var(--color-yellow), var(--color-green)
 * - Spacious, balanced overlap (~10-12%) so no circle is hidden or cramped
 * - Keeps the bold typography & Roman serif "I" from the hand-drawn sketch
 * - Ordered CSS classes centralized in index.css
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
    <div className="w-full max-w-6xl mx-auto py-8 sm:py-14 flex flex-col items-center justify-center select-none">
      {/* ── Interconnected Circles: Balanced, Spacious Overlap ── */}
      <div className="bio-shapes-wrapper -space-x-5 sm:-space-x-8 md:-space-x-12 lg:-space-x-14 px-4">
        {shapes.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.75, y: 35 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{
                scale: 1.05,
                y: -6,
                transition: { type: 'spring', stiffness: 380, damping: 22 }
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`bio-circle-card ${item.className}
                w-36 h-36 sm:w-56 sm:h-56 md:w-68 md:h-68 lg:w-80 lg:h-80 xl:w-88 xl:h-88`}
              style={{
                zIndex: isHovered ? 30 : item.defaultZ
              }}
            >
              {/* Typography: Razor-sharp white glyph */}
              <div className="relative z-30 flex items-center justify-center w-full h-full text-white pointer-events-none">
                {item.letter === 'I' ? (
                  /* Roman serif "I" matching the hand-drawn sketch with top & bottom crossbars */
                  <svg
                    viewBox="0 0 100 120"
                    className="w-[42%] h-[52%] fill-white bio-letter-glyph"
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
                      fontSize: 'clamp(3.8rem, 15vw, 13.5rem)'
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
