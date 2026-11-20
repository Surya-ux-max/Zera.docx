import React from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';

/**
 * SkillsHeader
 * Upper-left visual layer:
 * - Bold editorial heading & descriptive paragraph
 * - Prominent rounded coral-red CTA button
 * - Secondary underlined text link
 */
export const SkillsHeader = ({ onExploreClick }) => {
  return (
    <header className="relative z-30 flex flex-col items-start max-w-xl text-left select-none pt-4 sm:pt-6 md:pt-10 px-4 sm:px-8">
      {/* Category Eyebrow Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(224,78,122,0.12)] border border-[rgba(224,78,122,0.3)] text-[11px] font-mono tracking-widest text-[#FF758F] uppercase mb-3 sm:mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D6D] animate-ping" />
        <span>Full-Stack Ecosystem</span>
      </div>

      {/* Large Bold Editorial Heading */}
      <h2
        className="font-display font-extrabold text-white tracking-tight leading-[1.08] mb-3 sm:mb-4"
        style={{ fontSize: 'clamp(2rem, 4.4vw, 3.8rem)' }}
      >
        Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5D0DD] to-[#FF758F]">Framework</span> Tunnel
      </h2>

      {/* Short Descriptive Paragraph */}
      <p className="text-xs sm:text-base text-neutral-300 font-normal leading-relaxed max-w-md mb-4 sm:mb-7 line-clamp-2 sm:line-clamp-none">
        A continuous scroll-driven exploration through production-tested architectures, reactive frontend systems, asynchronous runtimes, and resilient cloud infrastructure.
      </p>

      {/* CTA Actions Group: Prominent Coral-Red CTA & Underlined Link */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        {/* Prominent Rounded Coral-Red CTA Button */}
        <button
          onClick={onExploreClick}
          className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#FF4D6D] hover:bg-[#FF3358] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_8px_25px_rgba(255,77,109,0.38)] hover:shadow-[0_10px_35px_rgba(255,77,109,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>Explore Arsenal</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {/* Secondary Underlined Text Link */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-[rgba(224,78,122,0.6)] hover:decoration-[#FF4D6D]"
        >
          <Code2 className="w-3.5 h-3.5 text-[#FF758F]" />
          <span>Inspect Architecture Repos</span>
        </a>
      </div>
    </header>
  );
};

export default SkillsHeader;
