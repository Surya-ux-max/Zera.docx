import React from 'react';
import { ArrowDown } from 'lucide-react';
import { BioShapesHeader } from './bio/BioShapesHeader';
import { BioQuote } from './bio/BioQuote';
import { GeometricShape } from '../common/GeometricShape';

/**
 * BioSection
 * Clean Bio section:
 * - Massive overlapping circular shapes spelling "B - I - O" spanning left to right
 * - Kinetic jumping letters forming:
 *   "I am a Computer Science and Engineering Student"
 *   "Aspiring Fullstack developer"
 */
export const BioSection = () => {
  return (
    <section
      id="bio"
      className="relative w-full min-h-[90vh] py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F3EFEA] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Subtle Background Google Geometric Shapes for Spatial Depth */}
      <div className="absolute -top-20 -left-20 opacity-15 pointer-events-none">
        <GeometricShape type="circle" color="#5B95F9" size={260} />
      </div>
      <div className="absolute -bottom-20 -right-20 opacity-15 pointer-events-none">
        <GeometricShape type="square" color="#FFCE35" size={240} rotate={18} />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center">
        {/* ── 1. Massive B - I - O Overlapping Shapes Banner ── */}
        <BioShapesHeader />

        {/* ── 2. Kinetic Jumping Content: "I am a Computer Science and Engineering Student" & "Aspiring Fullstack developer" ── */}
        <BioQuote />

        {/* ── 3. Scroll Cue to 3D Skills Tunnel Gallery ── */}
        <a
          href="#skills"
          className="mt-8 sm:mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 hover:bg-white text-xs font-mono text-[var(--color-muted)] hover:text-[var(--color-text)] transition-all border border-[var(--color-beige)] shadow-xs select-none"
          aria-label="Scroll to 3D Skills Tunnel Gallery"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D6D] animate-pulse" />
          <span>Next: 3D Skills Tunnel Gallery</span>
          <ArrowDown className="w-3.5 h-3.5 text-[var(--color-muted)] animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default BioSection;
