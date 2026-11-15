import React from 'react';
import { JumpingText } from './kinetic/JumpingText';

/**
 * BioQuote
 * Clean, mobile-responsive bio statements with kinetic jumping & joining characters.
 *
 * Responsiveness Specifications:
 * - Fluid font sizing with mobile safety thresholds
 * - Seamless line wrapping on small screens without hyphenation
 * - True baseline anchoring for quotation marks
 */
export const BioQuote = () => {
  return (
    <div className="w-full text-center my-8 sm:my-14 px-3 sm:px-6 select-none max-w-5xl mx-auto flex flex-col items-center justify-center">
      {/* ── Primary Quote: "I am a Computer Science and Engineering Student" ── */}
      <h2
        className="font-display font-extrabold text-[var(--color-text)] tracking-tight leading-[1.18] sm:leading-tight text-center"
        style={{ fontSize: 'clamp(1.35rem, 4.2vw, 3.6rem)' }}
      >
        <span className="font-serif italic font-normal text-[var(--color-muted)] mr-1 select-none inline-block">“</span>
        <JumpingText
          phrase="I am a Computer Science and Engineering Student"
          highlightWords={['Computer', 'Science', 'and', 'Engineering']}
          highlightColor="var(--color-blue)"
        />
        <span className="font-serif italic font-normal text-[var(--color-muted)] ml-1 select-none inline-block">”</span>
      </h2>

      {/* ── Secondary Sub-headline: "Aspiring Fullstack developer" ── */}
      <div
        className="mt-3.5 sm:mt-5 font-display font-bold text-[var(--color-text)] tracking-tight text-center"
        style={{ fontSize: 'clamp(1rem, 2.2vw, 1.85rem)' }}
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
