import React from 'react';
import { motion } from 'framer-motion';

/**
 * BioShapesHeader
 * Three massive overlapping Venn-style circular shapes spelling "B - I - O".
 * Sized to stretch across the viewport from left to right with vivid Google Labs colors
 * and optical intersection blending.
 */
export const BioShapesHeader = () => {
  const shapes = [
    {
      letter: 'B',
      color: '#5B95F9', // Google Blue
      textColor: '#FFFFFF',
      border: 'border-[#437fe8]',
      zIndex: 10,
      xOffset: -20
    },
    {
      letter: 'I',
      color: '#FFCE35', // Google Yellow
      textColor: '#111318',
      border: 'border-[#e6b522]',
      zIndex: 20,
      xOffset: 0
    },
    {
      letter: 'O',
      color: '#34A853', // Google Green
      textColor: '#FFFFFF',
      border: 'border-[#298d44]',
      zIndex: 10,
      xOffset: 20
    }
  ];

  return (
    <div className="w-full max-w-full overflow-hidden py-6 sm:py-10 flex flex-col items-center justify-center">
      {/* ── Overlapping Circles Container: Spans left to right ── */}
      <div className="w-full flex items-center justify-center -space-x-8 sm:-space-x-16 md:-space-x-24 lg:-space-x-32 xl:-space-x-36 px-2 sm:px-6 select-none">
        {shapes.map((item, index) => (
          <motion.div
            key={item.letter}
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`relative rounded-full aspect-square flex items-center justify-center shadow-lg cursor-pointer transition-shadow duration-300 hover:shadow-2xl border-4 sm:border-[6px] ${item.border}
              w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem]`}
            style={{
              backgroundColor: item.color,
              zIndex: item.zIndex,
              mixBlendMode: index === 1 ? 'multiply' : 'normal'
            }}
          >
            {/* Letter Typography */}
            <span
              className="font-display font-black leading-none tracking-tighter drop-shadow-sm"
              style={{
                color: item.textColor,
                fontSize: 'clamp(3.8rem, 16vw, 15rem)'
              }}
            >
              {item.letter}
            </span>

            {/* Subtle inner reflective light ring */}
            <div className="absolute inset-2 sm:inset-4 rounded-full border border-white/20 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BioShapesHeader;

