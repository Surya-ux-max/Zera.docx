import React, { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';

/**
 * BulletTrainTypography
 * Kinetic bullet-train entry animation for "Zera Shahadiya S" and "Full Stack Developer".
 * When scrolling down towards the Bio section, words scatter in left, right, up, and down
 * directions while fading out.
 */
export const BulletTrainTypography = ({ scrollYProgress }) => {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), 5000);
    return () => clearInterval(id);
  }, []);

  // Scroll scatter transforms (fallbacks if scrollYProgress is not passed)
  // 1. "Zera" -> flies UP and LEFT
  const zeraX = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, -380]);
  const zeraY = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, -220]);
  const zeraRotate = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, -24]);
  const zeraOpacity = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.35], [1, 0]);

  // 2. "Shahadiya" -> flies UP and RIGHT
  const shahadiyaX = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, 380]);
  const shahadiyaY = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, -220]);
  const shahadiyaRotate = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, 24]);
  const shahadiyaOpacity = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.35], [1, 0]);

  // 3. "S" -> flies UP
  const sY = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, -300]);
  const sOpacity = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.35], [1, 0]);

  // 4. "Full Stack" -> flies DOWN and LEFT
  const roleLeftX = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, -320]);
  const roleLeftY = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, 260]);
  const roleLeftRotate = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, -15]);
  const roleOpacity = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.35], [1, 0]);

  // 5. "Developer" -> flies DOWN and RIGHT
  const roleRightX = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, 320]);
  const roleRightY = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, 260]);
  const roleRightRotate = useTransform(scrollYProgress || { get: () => 0 }, [0, 0.45], [0, 15]);

  return (
    <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8 select-none pointer-events-none w-full max-w-5xl mx-auto -translate-y-6 sm:-translate-y-10">

      {/* ── Primary name — edge-to-edge with scroll scatter ── */}
      <div className="overflow-visible w-full flex items-center justify-center">
        <motion.h1
          key={`name-${cycle}`}
          initial={{ opacity: 0.05, x: '-60vw', skewX: -14, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, skewX: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black leading-[0.95] tracking-tight drop-shadow-xs flex items-center justify-center gap-2 sm:gap-4 flex-wrap"
          style={{ fontSize: 'clamp(2.2rem, 6.2vw, 5.25rem)', color: '#111318' }}
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
      <div className="overflow-visible w-full mt-2 sm:mt-3.5">
        <motion.div
          key={`role-${cycle}`}
          initial={{ opacity: 0.05, x: '60vw', skewX: 14, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, skewX: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.72, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-display font-bold tracking-normal leading-none"
          style={{ fontSize: 'clamp(1.05rem, 2.4vw, 2.15rem)' }}
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
