import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    </section>
  );
};

export default LandingSection;
