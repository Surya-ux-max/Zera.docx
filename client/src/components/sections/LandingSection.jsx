import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import GravityShapesCanvas from '../interactive/GravityShapesCanvas';
import BulletTrainTypography from './BulletTrainTypography';

/**
 * LandingSection
 * Fullscreen hero featuring:
 * - Interactive Google Labs geometric shapes with physics
 * - Looping Bullet Train kinetic typography
 * - Smooth scroll-driven page transition: typography scatters in left/right/up/down
 *   while canvas shapes fade out and descend towards the Bio section.
 */
export const LandingSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Shapes fade out and move down toward the Bio section on scroll
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const canvasY = useTransform(scrollYProgress, [0, 0.45], [0, 140]);
  const canvasScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[100dvh] max-w-full overflow-hidden bg-[#F3EFEA] flex items-center justify-center"
    >
      {/* Interactive Movable Google Shapes Canvas with Gravity & Collision Dispersion */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{
          opacity: canvasOpacity,
          y: canvasY,
          scale: canvasScale
        }}
      >
        <GravityShapesCanvas />
      </motion.div>

      {/* Massive Bullet Train Looping Typography with Scroll Scatter Transition */}
      <BulletTrainTypography scrollYProgress={scrollYProgress} />

      {/* ── Mobile & Desktop Scroll Prompt ── */}
      <a
        href="#bio"
        className="absolute bottom-5 sm:bottom-8 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xs border border-[var(--color-beige)] text-[11px] font-mono text-[var(--color-muted)] hover:text-[var(--color-text)] transition-all shadow-xs cursor-pointer select-none"
        aria-label="Scroll down to Bio section"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)] animate-pulse" />
        <span>Scroll to Bio</span>
        <ArrowDown className="w-3 h-3 text-[var(--color-muted)] animate-bounce" />
      </a>
    </section>
  );
};

export default LandingSection;
