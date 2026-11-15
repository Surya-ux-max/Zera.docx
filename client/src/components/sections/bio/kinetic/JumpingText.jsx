import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * JumpingText
 * Renders letters that jump in with spring physics and join together
 * to form words and complete sentences.
 *
 * Props:
 * - phrase: string (e.g. "I am a Computer Science and Engineering Student")
 * - highlightWords: string or array of strings to accent
 * - highlightColor: CSS color variable
 * - className: wrapper styles
 * - style: custom container styles
 */
export const JumpingText = ({
  phrase = '',
  highlightWords = [],
  highlightColor = 'var(--color-blue)',
  className = '',
  style = {}
}) => {
  const [key, setKey] = useState(0);

  const words = phrase.split(' ');
  const highlightList = Array.isArray(highlightWords)
    ? highlightWords.map((w) => w.toLowerCase())
    : [highlightWords.toLowerCase()];

  // Container orchestrating the staggered jumps
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.028,
        delayChildren: 0.1
      }
    }
  };

  // Individual character spring jump-in variant
  const charVariants = {
    hidden: (custom) => ({
      opacity: 0,
      y: -45 - (custom % 4) * 16,
      rotate: (custom % 2 === 0 ? 1 : -1) * ((custom * 5) % 18),
      scale: 0.35
    }),
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 440,
        damping: 15,
        mass: 0.6
      }
    }
  };

  let globalCharIndex = 0;

  return (
    <motion.span
      key={key}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className={`kinetic-jump-container inline-flex ${className}`}
      style={style}
      onClick={() => setKey((prev) => prev + 1)}
    >
      {words.map((word, wordIndex) => {
        // Strip basic punctuation for matching
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const isHighlighted = highlightList.includes(cleanWord);
        const letters = word.split('');

        return (
          <span key={`word-${wordIndex}`} className="kinetic-word relative inline-flex">
            {letters.map((letter) => {
              const currentIdx = globalCharIndex++;

              return (
                <motion.span
                  key={`char-${currentIdx}`}
                  custom={currentIdx}
                  variants={charVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.15,
                    rotate: (currentIdx % 2 === 0 ? 6 : -6),
                    transition: { type: 'spring', stiffness: 450, damping: 12 }
                  }}
                  className="kinetic-char cursor-pointer"
                  style={{
                    color: isHighlighted ? highlightColor : 'var(--color-text)',
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
    </motion.span>
  );
};

export default JumpingText;
