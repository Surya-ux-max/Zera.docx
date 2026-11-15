import React from 'react';
import { motion } from 'framer-motion';

/**
 * BioQuote
 * Large, expressive typography statement matching the handwritten reference:
 * " I am a Computer Science Student "
 */
export const BioQuote = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full text-center my-8 sm:my-14 px-4 select-none"
    >
      {/* Editorial Quote */}
      <h2 className="font-display font-extrabold text-[var(--color-text)] tracking-tight leading-tight max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
        style={{ fontSize: 'clamp(1.75rem, 4.6vw, 4.25rem)' }}
      >
        <span className="text-[var(--color-muted)] font-serif italic font-normal">“</span>
        <span>I am a</span>
        <span className="relative inline-block text-[var(--color-blue)]">
          Computer Science
          <span className="absolute -bottom-1 left-0 right-0 h-1 sm:h-2 rounded-full bg-[var(--color-blue)]/20" />
        </span>
        <span>Student</span>
        <span className="text-[var(--color-muted)] font-serif italic font-normal">”</span>
      </h2>

      {/* Monospace Subtitle Spec */}
      <p className="mt-4 text-xs sm:text-sm font-mono uppercase tracking-widest text-[var(--color-muted)]">
        Undergraduate Engineering · Systems &amp; Software Architecture
      </p>
    </motion.div>
  );
};

export default BioQuote;

