import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { GeometricShape } from '../../common/GeometricShape';

/**
 * LandingBackgroundShapes
 * Ambient low-opacity Google Labs geometric shapes situated behind the interactive canvas.
 * Adds visual depth, composition balance, and a complete look to the Landing hero section.
 *
 * Characteristics:
 * - Low opacity (0.07 - 0.14) so interactive shapes and typography stay crisp in the foreground
 * - Non-interactive (pointer-events-none) so mobile swipe & canvas drag are 100% unobstructed
 * - Subtle parallax shifts on scroll down
 * - Strict palette adherence: Google Blue, Yellow, Green, Coral Orange, Pastel Pink
 */
export const LandingBackgroundShapes = ({ scrollYProgress }) => {
  // Gentle parallax shifts on scroll down
  const yTopLeft = useTransform(scrollYProgress || { get: () => 0 }, [0, 1], [0, -75]);
  const yTopRight = useTransform(scrollYProgress || { get: () => 0 }, [0, 1], [0, -100]);
  const yMidRight = useTransform(scrollYProgress || { get: () => 0 }, [0, 1], [0, -50]);
  const yBottomLeft = useTransform(scrollYProgress || { get: () => 0 }, [0, 1], [0, -65]);
  const yCenterPill = useTransform(scrollYProgress || { get: () => 0 }, [0, 1], [0, -40]);

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* ── 1. Top-Left: Large Ambient Google Blue Circle ── */}
      <motion.div
        className="absolute -top-14 -left-14 sm:-top-24 sm:-left-24"
        style={{ y: yTopLeft }}
      >
        <GeometricShape
          type="circle"
          color="#5B95F9"
          size={320}
          opacity={0.11}
          style={{
            width: 'clamp(180px, 24vw, 340px)',
            height: 'clamp(180px, 24vw, 340px)'
          }}
          animate={true}
        />
      </motion.div>

      {/* ── 2. Top-Right: Warm Golden Yellow Rounded Square ── */}
      <motion.div
        className="absolute top-10 -right-12 sm:top-14 sm:-right-16"
        style={{ y: yTopRight }}
      >
        <GeometricShape
          type="square"
          color="#FFCE35"
          size={280}
          rotate={22}
          opacity={0.12}
          style={{
            width: 'clamp(160px, 20vw, 290px)',
            height: 'clamp(160px, 20vw, 290px)'
          }}
          animate={true}
        />
      </motion.div>

      {/* ── 3. Mid-Right: Soft Coral Orange Geometric Ring ── */}
      <motion.div
        className="absolute top-[36%] -right-10 sm:top-[32%] sm:right-10 hidden min-[480px]:block"
        style={{ y: yMidRight }}
      >
        <GeometricShape
          type="ring"
          color="#FF7E36"
          size={210}
          opacity={0.09}
          style={{
            width: 'clamp(130px, 16vw, 210px)',
            height: 'clamp(130px, 16vw, 210px)'
          }}
          animate={true}
        />
      </motion.div>

      {/* ── 4. Bottom-Left: Soft Pastel Pink Blob / Pill ── */}
      <motion.div
        className="absolute bottom-28 -left-10 sm:bottom-32 sm:left-12"
        style={{ y: yBottomLeft }}
      >
        <GeometricShape
          type="blob"
          color="#F9B7F9"
          size={230}
          rotate={-16}
          opacity={0.13}
          style={{
            width: 'clamp(150px, 18vw, 240px)',
            height: 'clamp(150px, 18vw, 240px)'
          }}
          animate={true}
        />
      </motion.div>

      {/* ── 5. Center-Ambient: Soft Green Pill for Spatial Balance ── */}
      <motion.div
        className="absolute bottom-24 right-[22%] sm:bottom-28 sm:right-[26%] hidden sm:block"
        style={{ y: yCenterPill }}
      >
        <GeometricShape
          type="pill"
          color="#34A853"
          size={180}
          rotate={45}
          opacity={0.08}
          style={{
            width: 'clamp(120px, 14vw, 190px)',
            height: 'clamp(70px, 8vw, 100px)'
          }}
          animate={true}
        />
      </motion.div>

      {/* ── 6. Subtle Center Ring for Visual Anchoring ── */}
      <div className="absolute top-[26%] left-[16%] hidden lg:block opacity-6">
        <GeometricShape
          type="ring"
          color="#5B95F9"
          size={250}
          opacity={0.06}
          animate={false}
        />
      </div>
    </div>
  );
};

export default LandingBackgroundShapes;
