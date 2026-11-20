import React from 'react';
import { motion } from 'framer-motion';

/**
 * SkillsTunnelBackground
 * Renders the near-black charcoal atmosphere and concentric circular outlines
 * in muted burgundy/pink tones that form the signature 3D cylindrical tunnel illusion.
 */
export const SkillsTunnelBackground = () => {
  // Concentric circle diameters ranging from focal core to outer viewport
  const circles = [
    { size: 260, opacity: 0.28, border: '1px solid rgba(224, 78, 122, 0.35)', dash: '0' },
    { size: 440, opacity: 0.22, border: '1px solid rgba(224, 78, 122, 0.28)', dash: '4 4' },
    { size: 660, opacity: 0.18, border: '1px solid rgba(138, 40, 70, 0.24)', dash: '0' },
    { size: 920, opacity: 0.14, border: '1px solid rgba(224, 78, 122, 0.20)', dash: '8 6' },
    { size: 1220, opacity: 0.10, border: '1px solid rgba(138, 40, 70, 0.16)', dash: '0' },
    { size: 1560, opacity: 0.07, border: '1px solid rgba(224, 78, 122, 0.12)', dash: '0' }
  ];

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 bg-[#1D1D1F]"
      aria-hidden="true"
    >
      {/* ── 1. Atmospheric Radial Gradients in Burgundy, Wine & Charcoal ── */}
      {/* Central Tunnel Core Glow */}
      <div
        className="absolute top-1/2 left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[110px] pointer-events-none opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(138, 40, 70, 0.35) 0%, rgba(224, 78, 122, 0.12) 40%, transparent 70%)'
        }}
      />

      {/* Ambient Top Left Atmospheric Violet / Wine Highlight */}
      <div
        className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full blur-[90px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(224, 78, 122, 0.25) 0%, transparent 70%)'
        }}
      />

      {/* Deep Vignette Shadow at Viewport Edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 pointer-events-none" />

      {/* ── 2. Concentric Circular Outlines (3D Cylindrical Tunnel Rings) ── */}
      <div className="absolute top-1/2 left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
        {circles.map((c, i) => (
          <motion.div
            key={`tunnel-ring-${i}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: [1, 1.015, 0.99, 1],
              opacity: c.opacity
            }}
            transition={{
              scale: { repeat: Infinity, duration: 12 + i * 2, ease: 'easeInOut' },
              opacity: { duration: 1.2 }
            }}
            className="absolute rounded-full"
            style={{
              width: `${c.size}px`,
              height: `${c.size}px`,
              border: c.border,
              boxShadow: i === 0 ? '0 0 40px rgba(224, 78, 122, 0.2)' : 'none'
            }}
          />
        ))}

        {/* Diagonal Perspective Rays (subtle 3D guidelines) */}
        <div className="absolute w-[1800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(224,78,122,0.12)] to-transparent rotate-[32deg]" />
        <div className="absolute w-[1800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(224,78,122,0.12)] to-transparent -rotate-[32deg]" />
      </div>
    </div>
  );
};

export default SkillsTunnelBackground;
