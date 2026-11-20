import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { skillsData } from './skillsData';
import { SkillsTunnelBackground } from './SkillsTunnelBackground';
import { SkillsHeader } from './SkillsHeader';
import { SkillsInfoPanel } from './SkillsInfoPanel';
import { SkillsTunnelGallery } from './SkillsTunnelGallery';

/**
 * SkillsSection
 * Cinematic 3D Scroll-Driven Image Tunnel Gallery.
 * Orchestrates pinned/sticky scroll container, 3D tunnel gallery,
 * concentric backgrounds, synchronized info panel, and horizontal progress indicator.
 */
export const SkillsSection = () => {
  const containerRef = useRef(null);
  const total = skillsData.length;

  // Track vertical scroll progress across the pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Smooth continuous spring physics for frictionless 3D travel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
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

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative w-full bg-[#1D1D1F] text-[#F5F5F7] select-none selection:bg-[#FF4D6D] selection:text-white"
      style={{ height: '420vh' }}
      aria-label="Skills & Frameworks 3D Tunnel Gallery"
    >
      {/* ── Sticky Fullscreen Viewport Layer ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* 1. Atmospheric Dark Background & Concentric Burgundy/Pink Tunnel Rings */}
        <SkillsTunnelBackground />

        {/* 2. Upper-Left Visual Layer: Editorial Header & Coral CTA */}
        <div className="relative z-30 w-full flex justify-between items-start">
          <SkillsHeader onExploreClick={() => handleScrollToCard(1)} />
        </div>

        {/* 3. Central Visual Layer: Signature 3D Cylindrical Tunnel Gallery */}
        <SkillsTunnelGallery
          skills={skillsData}
          virtualIndex={virtualIndex}
          activeIndex={activeIndex}
          onCardClick={handleScrollToCard}
        />

        {/* 4. Bottom-Left Visual Layer: Active Skill Info & Framework Badges */}
        <div className="relative z-30 w-full flex justify-between items-end">
          <SkillsInfoPanel
            activeSkill={skillsData[activeIndex]}
            activeIndex={activeIndex}
            total={total}
          />

          {/* Quick Jump Dot Nav (Bottom-Right on Desktop) */}
          <div className="hidden md:flex items-center gap-2 pb-6 sm:pb-8 md:pb-12 px-8 z-30 pointer-events-auto">
            {skillsData.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => handleScrollToCard(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeIndex
                    ? 'w-7 h-2 bg-[#FF4D6D] shadow-[0_0_10px_#FF4D6D]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Jump to ${s.title}`}
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
