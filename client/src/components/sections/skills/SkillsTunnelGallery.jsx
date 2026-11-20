import React from 'react';
import { SkillsTunnelCard } from './SkillsTunnelCard';

/**
 * SkillsTunnelGallery
 * Continuous 3D Cylindrical Spiral Tunnel.
 * Cards are arranged around the center concentric rings at distinct depths and angles,
 * populating the 3D space with zero empty voids and rolling continuously with scroll.
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
        perspective: '1300px',
        perspectiveOrigin: '50% 50%'
      }}
    >
      {/* ── 3D Gallery Stage (Centered at screen focal point) ── */}
      <div
        className="relative w-0 h-0 pointer-events-auto"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {skills.map((skill, index) => {
            const delta = index - virtualIndex;
            const absDelta = Math.abs(delta);
            const isDominant = index === activeIndex;

            // Render up to 5 active/upcoming/past cards for maximum depth continuity
            if (absDelta > 3.8) return null;

            let x = 0;
            let y = 0;
            let z = 0;
            let scale = 1;
            let rotateX = 0;
            let rotateY = 0;
            let rotateZ = 0;
            let opacity = 1;
            let blur = 0;
            let zIndex = 50;

            if (delta === 0) {
              // ── 0. Dominant Foreground Center Card ──
              x = 0;
              y = 0;
              z = 80;
              scale = 1.05;
              rotateX = 0;
              rotateY = 0;
              rotateZ = 0;
              opacity = 1;
              blur = 0;
              zIndex = 60;
            } else if (delta > 0) {
              // ── Upcoming Cards: Spiraling in from Deep Cylindrical Tunnel ──
              // We distribute upcoming cards around distinct angular quadrants (spiral tunnel)
              // so every quadrant of the concentric tunnel rings has framed cards visible.
              const angle = delta * 1.35; // ~77 degrees per step
              const baseRadius = 240;
              const radius = baseRadius * Math.max(0.4, 1 - delta * 0.16);

              x = Math.sin(angle) * radius;
              y = -Math.cos(angle) * (radius * 0.65);
              z = -delta * 280;

              scale = Math.max(0.3, 1 - delta * 0.20);
              rotateX = Math.sin(angle) * 12;
              rotateY = -Math.cos(angle) * 18;
              rotateZ = -delta * 4;

              opacity = Math.max(0.12, 1 - delta * 0.24);
              blur = Math.min(8, delta * 2.2);
              zIndex = Math.max(1, 50 - Math.round(delta * 10));
            } else {
              // ── Past Cards (delta < 0): Swooping forward and out past the viewer ──
              const outAngle = delta * 1.1;
              x = Math.sin(outAngle) * 320;
              y = -Math.cos(outAngle) * 180 + delta * 20;
              z = -delta * 220; // moves forward past camera

              scale = Math.max(0.4, 1 + delta * 0.15);
              rotateX = delta * 10;
              rotateY = delta * 16;
              rotateZ = delta * 6;

              opacity = Math.max(0, 1 + delta * 0.6);
              blur = Math.min(10, absDelta * 2.5);
              zIndex = Math.max(1, 40 - Math.round(absDelta * 10));
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
                  isActive={isDominant}
                  onClick={() => onCardClick?.(index)}
                  style={{
                    transform,
                    opacity,
                    filter: blur > 0.5 ? `blur(${blur}px)` : 'none'
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
