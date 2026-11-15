import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * JumpingText
 * Renders text where individual characters jump in sequentially with spring physics
 * and join together seamlessly to form words and sentences.
 *
 * Props:
 * - phrase: string (e.g. "Aspiring Fullstack developer")
 * - highlightWord: string to accent (e.g. "Fullstack")
 * - highlightColor: string CSS color (defaults to var(--color-blue))
 * - className: custom styling string
 */
export const JumpingText = ({
  phrase = 'Aspiring Fullstack developer',
  highlightWord = 'Fullstack',
  highlightColor = 'var(--color-blue)',
  className = ''
}) => {
  const [key, setKey] = useState(0);

  const words = phrase.split(' ');

  // Container orchestrating the staggered jumps
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.032,
        delayChildren: 0.12
      }
    }
  };

  // Individual character spring jump-in variant
  const charVariants = {
    hidden: (custom) => ({
      opacity: 0,
      y: -50 - (custom % 4) * 18, // staggered dynamic jump height
      rotate: (custom % 2 === 0 ? 1 : -1) * ((custom * 6) % 20),
      scale: 0.35
    }),
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 420,
        damping: 14,
        mass: 0.65
      }
    }
  };

  let globalCharIndex = 0;

  return (
    <motion.div
      key={key}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      className={`kinetic-jump-container ${className}`}
      onClick={() => setKey((prev) => prev + 1)}
      title="Click to replay jump animation"
    >
      {words.map((word, wordIndex) => {
        const isHighlighted = word.toLowerCase() === (highlightWord || '').toLowerCase();
        const letters = word.split('');

        return (
          <span key={`word-${wordIndex}`} className="kinetic-word">
            {letters.map((letter, letterIndex) => {
              const currentIdx = globalCharIndex++;
              const isFirstChar = letterIndex === 0;

              return (
                <motion.span
                  key={`char-${currentIdx}`}
                  custom={currentIdx}
                  variants={charVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.18,
                    rotate: (currentIdx % 2 === 0 ? 8 : -8),
                    transition: { type: 'spring', stiffness: 500, damping: 12 }
                  }}
                  className={`kinetic-char cursor-pointer ${
                    isHighlighted ? 'font-black' : 'font-extrabold'
                  }`}
                  style={{
                    color: isHighlighted ? highlightColor : 'var(--color-text)',
                    // Slight extra scale on first character of each word for dynamic typography
                    transformOrigin: 'bottom center'
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </motion.div>
  );
};

export default JumpingText;

