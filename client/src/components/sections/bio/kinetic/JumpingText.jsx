import React, { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * JumpingText
 * Robust Multidirectional Jump-Bounce-Jump-Join kinetic typography.
 *
 * Reliability & Mobile Enhancements:
 * 1. Accessibility First: Respects prefers-reduced-motion automatically.
 * 2. Mobile Safe Trajectories: Clamped off-axis travel prevents viewport jitter.
 * 3. Parent InView Guarantee: Guaranteed completion with no orphaned mid-air letters.
 * 4. Token Normalization: Robust whitespace handling and zero layout shifts.
 */
export const JumpingText = ({
  phrase = '',
  highlightWords = [],
  highlightColor = 'var(--color-blue)',
  className = '',
  style = {}
}) => {
  const containerRef = useRef(null);
  const [replayCount, setReplayCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Parent observer guarantees animation triggers for all characters simultaneously
  const isInView = useInView(containerRef, { once: true, amount: 0.12 });

  // Robust word tokenization
  const words = phrase.trim().split(/\s+/).filter(Boolean);
  const highlightList = Array.isArray(highlightWords)
    ? highlightWords.map((w) => w.toLowerCase())
    : [highlightWords.toLowerCase()];

  // Multi-axis origin generator (Top, Left, Right) with mobile-safe bounds
  const getOrigin = (idx) => {
    if (shouldReduceMotion) {
      return { x: 0, y: 0, rotate: 0 };
    }

    const axis = idx % 3; // 0 = Top, 1 = Left, 2 = Right
    if (axis === 0) {
      // Top Axis: Drops from above
      return {
        x: (idx % 2 === 0 ? 1 : -1) * (12 + (idx * 5) % 25),
        y: -90 - (idx % 4) * 20,
        rotate: (idx % 2 === 0 ? 1 : -1) * (10 + (idx * 4) % 12)
      };
    } else if (axis === 1) {
      // Left Axis: Shoots in from left
      return {
        x: -85 - (idx % 4) * 20,
        y: -45 - (idx % 3) * 15,
        rotate: -18 - (idx * 3) % 10
      };
    } else {
      // Right Axis: Shoots in from right
      return {
        x: 85 + (idx % 4) * 20,
        y: -45 - (idx % 3) * 15,
        rotate: 18 + (idx * 3) % 10
      };
    }
  };

  // Container variants with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.022,
        delayChildren: shouldReduceMotion ? 0 : 0.04
      }
    }
  };

  // Character variants: Jump -> Bounce -> Jump -> Join
  const charVariants = {
    hidden: (idx) => {
      const origin = getOrigin(idx);
      return {
        x: origin.x,
        y: origin.y,
        rotate: origin.rotate,
        scale: shouldReduceMotion ? 1 : 0.5,
        opacity: 0
      };
    },
    visible: (idx) => {
      const origin = getOrigin(idx);

      if (shouldReduceMotion) {
        return {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          transition: { duration: 0.3 }
        };
      }

      return {
        // [Origin, Jump Impact, 1st Bounce, Floor Return, 2nd Hop, Final Join]
        x: [origin.x, origin.x * 0.25, 0, 0, 0, 0],
        y: [origin.y, 0, -22, 0, -6, 0],
        rotate: [origin.rotate, origin.rotate * 0.3, -3, 0, 1, 0],
        scale: [0.5, 1.12, 0.96, 1.02, 1, 1],
        opacity: [0, 1, 1, 1, 1, 1],
        transition: {
          duration: 0.78,
          times: [0, 0.42, 0.65, 0.8, 0.92, 1],
          ease: ['easeInOut', 'easeOut', 'easeIn', 'easeOut', 'easeIn']
        }
      };
    }
  };

  let globalCharIndex = 0;

  return (
    <motion.span
      key={replayCount}
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`kinetic-jump-container ${className}`}
      style={style}
      onClick={() => setReplayCount((c) => c + 1)}
      title="Click to replay jump-bounce-join animation"
      aria-label={phrase}
    >
      {words.map((word, wordIndex) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const isHighlighted = highlightList.includes(cleanWord);
        const letters = word.split('');

        return (
          <span key={`word-${wordIndex}`} className="kinetic-word">
            {letters.map((letter) => {
              const currentIdx = globalCharIndex++;

              return (
                <motion.span
                  key={`char-${currentIdx}`}
                  custom={currentIdx}
                  variants={charVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                          scale: 1.12,
                          transition: { type: 'spring', stiffness: 500, damping: 14 }
                        }
                  }
                  className="kinetic-char cursor-pointer"
                  style={{
                    color: isHighlighted ? highlightColor : 'var(--color-text)'
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
