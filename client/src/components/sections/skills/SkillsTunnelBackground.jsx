import React from 'react';

/**
 * SkillsTunnelBackground
 * Renders the near-black charcoal atmosphere and concentric circular outlines
 * in muted burgundy/pink tones that form the signature 3D cylindrical tunnel illusion.
 * Centered precisely in the viewport to surround the 3D gallery cards.
 */
export const SkillsTunnelBackground = () => {
  // Concentric circle diameters radiating outward from the central vanishing point
  const circles = [
    { size: 280, opacity: 0.32, border: '1px solid rgba(224, 78, 122, 0.38)', dash: '0' },
    { size: 480, opacity: 0.25, border: '1px solid rgba(224, 78, 122, 0.30)', dash: '4 4' },
    { size: 720, opacity: 0.20, border: '1px solid rgba(138, 40, 70, 0.25)', dash: '0' },
    { size: 1000, opacity: 0.15, border: '1px solid rgba(224, 78, 122, 0.20)', dash: '8 6' },
    { size: 1320, opacity: 0.10, border: '1px solid rgba(138, 40, 70, 0.16)', dash: '0' },
    { size: 1680, opacity: 0.07, border: '1px solid rgba(224, 78, 122, 0.12)', dash: '0' }
  ];

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 bg-[#1D1D1F]"
      aria-hidden="true"
    >
      {/* ── 1. Atmospheric Radial Gradients in Burgundy, Wine & Charcoal ── */}
      {/* Center Vanishing Point Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[120px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(138, 40, 70, 0.45) 0%, rgba(224, 78, 122, 0.15) 45%, transparent 70%)'
        }}
      />

      {/* Deep Vignette Shadow at Viewport Edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-transparent to-black/75 pointer-events-none" />

      {/* ── 2. Centered Concentric Circular Outlines (3D Cylindrical Tunnel Rings) ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
        {circles.map((c, i) => (
          <div
            key={`tunnel-ring-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${c.size}px`,
              height: `${c.size}px`,
              border: c.border,
              opacity: c.opacity,
              boxShadow: i === 0 ? '0 0 50px rgba(224, 78, 122, 0.25)' : 'none'
            }}
          />
        ))}

        {/* Diagonal Perspective Rays (subtle 3D guidelines toward center) */}
        <div className="absolute w-[1800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(224,78,122,0.12)] to-transparent rotate-[32deg]" />
        <div className="absolute w-[1800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(224,78,122,0.12)] to-transparent -rotate-[32deg]" />
      </div>
    </div>
  );
};

export default SkillsTunnelBackground;
