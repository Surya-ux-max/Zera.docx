import React from 'react';
import { SkillsTunnelCard } from './SkillsTunnelCard';

/**
 * SkillsTunnelGallery
 * Signature 3D Perspective Tunnel Viewport.
 * Maps the scroll-driven virtualIndex to a cylindrical 3D trajectory
 * for every skill card simultaneously.
 */
export const SkillsTunnelGallery = ({
  skills,
  virtualIndex,
  activeIndex,
  onCardClick
}) => {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-visible z-20"
      style={{
        perspective: '1200px',
        perspectiveOrigin: '55% 50%'
      }}
    >
      {/* ── 3D Gallery Cylinder Stage ── */}
      <div
        className="relative w-0 h-0 pointer-events-auto"
        style={{
          transformStyle: 'preserve-3d',
          // Offset center stage: right-of-center on desktop, center on mobile
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-[15%] md:translate-y-[-4%]">
          {skills.map((skill, index) => {
            const delta = index - virtualIndex;
            const absDelta = Math.abs(delta);
            const isDominant = index === activeIndex;

            // Cull cards beyond the tunnel horizon for high performance
            if (absDelta > 3.4) return null;

            let x = 0;
            let y = 0;
            let z = 0;
            let scale = 1;
            let rotateY = 0;
            let rotateX = 0;
            let rotateZ = 0;
            let opacity = 1;
            let blur = 0;
            let zIndex = 50;

            if (delta === 0) {
              // ── Dominant Foreground Card ──
              z = 60;
              scale = 1.0;
              opacity = 1.0;
              blur = 0;
              x = 0;
              y = 0;
              rotateY = -4;
              rotateX = 2;
              rotateZ = 1;
              zIndex = 50;
            } else if (delta > 0) {
              // ── Upcoming Cards: Moving from Deep Tunnel Forward ──
              z = -delta * 320;
              scale = Math.max(0.32, 1 - delta * 0.22);
              x = Math.sin(delta * 0.58) * 160;
              y = -delta * 26;
              rotateY = -4 - delta * 16;
              rotateX = 2 + delta * 3;
              rotateZ = -delta * 3;
              opacity = Math.max(0, 1 - delta * 0.28);
              blur = Math.min(10, delta * 2.8);
              zIndex = Math.max(1, 50 - Math.round(delta * 10));
            } else {
              // ── Past Cards: Receding into Distance Along Cylinder Arc ──
              z = delta * 290;
              scale = Math.max(0.28, 1 + delta * 0.25);
              x = delta * 155;
              y = delta * 24;
              rotateY = -4 - delta * 18;
              rotateX = 2 - delta * 2;
              rotateZ = delta * 4;
              opacity = Math.max(0, 1 + delta * 0.44);
              blur = Math.min(12, absDelta * 3.2);
              zIndex = Math.max(1, 50 - Math.round(absDelta * 10));
            }

            const transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;

            return (
              <div
                key={skill.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  zIndex,
                  transformStyle: 'preserve-3d'
                }}
              >
                <SkillsTunnelCard
                  skill={skill}
                  index={index}
                  depth={z}
                  isActive={isDominant}
                  onClick={() => onCardClick?.(index)}
                  style={{
                    transform,
                    opacity,
                    filter: blur > 0.4 ? `blur(${blur}px)` : 'none'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsTunnelGallery;
