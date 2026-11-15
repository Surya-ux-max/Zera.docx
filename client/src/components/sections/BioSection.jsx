import React from 'react';
import { BioShapesHeader } from './bio/BioShapesHeader';
import { BioQuote } from './bio/BioQuote';
import { BioContent } from './bio/BioContent';
import { GeometricShape } from '../common/GeometricShape';

/**
 * BioSection
 * Bio section inspired by the hand-drawn concept:
 * - Massive overlapping circular shapes spelling "B - I - O" spanning left to right
 * - Expressive quote: "I am a Computer Science Student"
 * - Clean, structured Computer Science engineering content below
 */
export const BioSection = () => {
  return (
    <section
      id="bio"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F3EFEA] overflow-hidden"
    >
      {/* Decorative Google Geometric Shapes in background */}
      <div className="absolute top-10 -left-12 opacity-25 pointer-events-none">
        <GeometricShape type="circle" color="#5B95F9" size={150} />
      </div>
      <div className="absolute top-1/2 -right-14 opacity-20 pointer-events-none">
        <GeometricShape type="square" color="#FFCE35" size={160} rotate={20} />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* ── 1. Massive B - I - O Overlapping Shapes Banner ── */}
        <BioShapesHeader />

        {/* ── 2. Editorial Quote: "I am a Computer Science Student" ── */}
        <BioQuote />

        {/* ── 3. Academic & Full Stack Content Below ── */}
        <BioContent />
      </div>
    </section>
  );
};

export default BioSection;

