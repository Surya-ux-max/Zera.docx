import React, { useState, useEffect } from 'react';
import { motion, useTransform, useReducedMotion } from 'framer-motion';

/**
 * BulletTrainTypography
 * Mobile-responsive kinetic entry animation for "Zera Shahadiya S" and "Full Stack Developer".
 * Includes graceful reduced-motion fallbacks and fluid clamp typography.
 */
export const BulletTrainTypography = ({ scrollYProgress }) => {
  const [cycle, setCycle] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setCycle((c) => c + 1), 5000);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  // Scroll scatter transforms (fallbacks if scrollYProgress is not passed)
  // 1. "Zera" -> flies UP and LEFT
  const zeraX = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : -320]);
  const zeraY = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : -180]);
  const zeraRotate = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : -20]);
  const zeraOpacity = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.35], [1, 0]);

  // 2. "Shahadiya" -> flies UP and RIGHT
  const shahadiyaX = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : 320]);
  const shahadiyaY = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : -180]);
  const shahadiyaRotate = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : 20]);
  const shahadiyaOpacity = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.35], [1, 0]);

  // 3. "S" -> flies UP
  const sY = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : -240]);
  const sOpacity = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.35], [1, 0]);

  // 4. "Full Stack" -> flies DOWN and LEFT
  const roleLeftX = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : -260]);
  const roleLeftY = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : 200]);
  const roleLeftRotate = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : -12]);
  const roleOpacity = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.35], [1, 0]);

  // 5. "Developer" -> flies DOWN and RIGHT
  const roleRightX = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : 260]);
  const roleRightY = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : 200]);
  const roleRightRotate = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, shouldReduceMotion ? 0 : 12]);

  return (
    <div className="relative z-20 flex flex-col items-center justify-center text-center px-3 sm:px-6 select-none pointer-events-none w-full max-w-5xl mx-auto -translate-y-4 sm:-translate-y-8">

      {/* ── Primary name — edge-to-edge with scroll scatter ── */}
      <div className="overflow-visible w-full flex items-center justify-center">
        <motion.h1
          key={`name-${cycle}`}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.05, x: '-60vw', skewX: -14, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, skewX: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black leading-[0.96] tracking-tight drop-shadow-xs flex items-center justify-center gap-1.5 sm:gap-3.5 flex-wrap"
          style={{ fontSize: 'clamp(1.75rem, 5.8vw, 5rem)', color: '#111318' }}
        >
          {/* Zera: Up & Left */}
          <motion.span
            style={{
              x: zeraX,
              y: zeraY,
              rotate: zeraRotate,
              opacity: zeraOpacity,
              display: 'inline-block'
            }}
          >
            Zera
          </motion.span>

          {/* Shahadiya: Up & Right */}
          <motion.span
            style={{
              x: shahadiyaX,
              y: shahadiyaY,
              rotate: shahadiyaRotate,
              opacity: shahadiyaOpacity,
              display: 'inline-block'
            }}
          >
            Shahadiya
          </motion.span>

          {/* S: Up */}
          <motion.span
            style={{
              y: sY,
              opacity: sOpacity,
              display: 'inline-block'
            }}
          >
            S
          </motion.span>
        </motion.h1>
      </div>

      {/* ── Sub-headline — Full Stack Developer with scroll scatter ── */}
      <div className="overflow-visible w-full mt-2 sm:mt-3">
        <motion.div
          key={`role-${cycle}`}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.05, x: '60vw', skewX: 14, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, skewX: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.72, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 font-display font-bold tracking-normal leading-none"
          style={{ fontSize: 'clamp(0.95rem, 2.2vw, 2.1rem)' }}
        >
          {/* Full Stack: Down & Left */}
          <motion.span
            style={{
              x: roleLeftX,
              y: roleLeftY,
              rotate: roleLeftRotate,
              opacity: roleOpacity,
              color: '#111318',
              display: 'inline-block'
            }}
          >
            Full Stack
          </motion.span>

          {/* Developer: Down & Right */}
          <motion.span
            className="relative inline-block"
            style={{
              x: roleRightX,
              y: roleRightY,
              rotate: roleRightRotate,
              opacity: roleOpacity,
              color: '#C2185B'
            }}
          >
            Developer
            <span className="absolute -bottom-1 left-0 right-0 h-1 sm:h-1.5 rounded-full bg-[#C2185B]/20" />
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default BulletTrainTypography;
