import React from 'react';
import { motion } from 'framer-motion';
import { JumpingText } from './kinetic/JumpingText';

/**
 * BioQuote
 * Clean, expressive bio statements with kinetic jumping & joining characters.
 * Preserves the exact typography from the reference without extra filler words:
 * 1. "I am a Computer Science and Engineering Student"
 * 2. "Aspiring Fullstack developer"
 */
export const BioQuote = () => {
  return (
    <div className="w-full text-center my-10 sm:my-16 px-4 select-none max-w-5xl mx-auto flex flex-col items-center justify-center">
      {/* ── Primary Quote: "I am a Computer Science and Engineering Student" ── */}
      <h2
        className="font-display font-extrabold text-[var(--color-text)] tracking-tight leading-tight flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-1"
        style={{ fontSize: 'clamp(1.75rem, 4.4vw, 4rem)' }}
      >
        <span className="text-[var(--color-muted)] font-serif italic font-normal">“</span>
        <JumpingText
          phrase="I am a Computer Science and Engineering Student"
          highlightWords={['Computer', 'Science', 'and', 'Engineering']}
          highlightColor="var(--color-blue)"
        />
        <span className="text-[var(--color-muted)] font-serif italic font-normal">”</span>
      </h2>

      {/* ── Secondary Sub-headline: "Aspiring Fullstack developer" ── */}
      <div
        className="mt-4 sm:mt-6 font-display font-bold text-[var(--color-text)] tracking-tight flex items-center justify-center"
        style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.15rem)' }}
      >
        <JumpingText
          phrase="Aspiring Fullstack developer"
          highlightWords={['Fullstack']}
          highlightColor="var(--color-blue)"
        />
      </div>
    </div>
  );
};

export default BioQuote;
