import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { skillsData } from './skillsData';
import { SkillsTunnelBackground } from './SkillsTunnelBackground';
import { SkillsTunnelGallery } from './SkillsTunnelGallery';

/**
 * SkillsSection
 * Clean, full-bleed Cinematic 3D Scroll-Driven Tunnel Gallery.
 * Left-side content removed — the cards speak for themselves.
 * Centered cylindrical tunnel with smooth scroll roll and bottom progress bar.
 */
export const SkillsSection = () => {
  const containerRef = useRef(null);
  const total = skillsData.length;

  // Track vertical scroll progress across the pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Smooth spring physics for continuous, frictionless 3D travel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 22,
    mass: 0.5,
    restDelta: 0.0001
  });

  const [virtualIndex, setVirtualIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Synchronize continuous virtual index and active dominant card
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    const rawV = latest * (total - 1);
    setVirtualIndex(rawV);
    const rounded = Math.min(Math.max(0, Math.round(rawV)), total - 1);
    if (rounded !== activeIndex) {
      setActiveIndex(rounded);
    }
  });

  // Scroll to specific skill card index
  const handleScrollToCard = (targetIndex) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (targetIndex / (total - 1)) * containerHeight;
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const activeSkill = skillsData[activeIndex];

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative w-full bg-[#1D1D1F] text-[#F5F5F7] select-none selection:bg-[#FF4D6D] selection:text-white"
      style={{ height: '420vh' }}
      aria-label="Skills 3D Tunnel Gallery"
    >
      {/* ── Sticky Fullscreen Viewport Layer ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* 1. Atmospheric Dark Background & Centered Concentric Burgundy/Pink Tunnel Rings */}
        <SkillsTunnelBackground />

        {/* 2. Top Minimal Tunnel Eyebrow & Sequence Indicator */}
        <div className="relative z-30 w-full flex items-center justify-between pt-6 sm:pt-8 px-6 sm:px-12 pointer-events-none">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono tracking-widest text-[#FF758F] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF4D6D] animate-ping" />
            <span>3D Skills Tunnel</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-neutral-400 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <span className="text-white font-bold">{activeSkill?.sequenceFull}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
            <span className="text-neutral-300 hidden min-[480px]:inline">{activeSkill?.name}</span>
          </div>
        </div>

        {/* 3. Central 3D Cylindrical Spiral Tunnel Gallery */}
        <SkillsTunnelGallery
          skills={skillsData}
          virtualIndex={virtualIndex}
          activeIndex={activeIndex}
          onCardClick={handleScrollToCard}
        />

        {/* 4. Bottom Nav Bar: Interactive Dots & Scroll Hint */}
        <div className="relative z-30 w-full flex items-center justify-between pb-6 sm:pb-8 px-6 sm:px-12 pointer-events-auto">
          {/* Subtle Scroll Traverse Cue */}
          <div className="text-[11px] font-mono tracking-wider text-neutral-500 uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <span>Scroll to traverse tunnel</span>
          </div>

          {/* Jump Dots */}
          <div className="flex items-center gap-2">
            {skillsData.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => handleScrollToCard(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeIndex
                    ? 'w-7 h-2 bg-[#FF4D6D] shadow-[0_0_12px_#FF4D6D]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Jump to ${s.name}`}
              />
            ))}
          </div>
        </div>

        {/* ── 5. Signature Thin Horizontal Progress Indicator with Pink Fill ── */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-40 overflow-hidden">
          <motion.div
            style={{
              scaleX: smoothProgress,
              transformOrigin: '0%'
            }}
            className="w-full h-full bg-gradient-to-r from-[#FF4D6D] via-[#E04E7A] to-[#FF758F] shadow-[0_0_12px_#FF4D6D]"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
