import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * SkillsInfoPanel
 * Bottom-left visual layer:
 * Displays active image sequence number, title, creator info, description, and framework tags.
 * Synchronized with the active dominant image in the 3D tunnel.
 */
export const SkillsInfoPanel = ({ activeSkill, activeIndex, total }) => {
  if (!activeSkill) return null;

  return (
    <div className="relative z-30 max-w-lg text-left select-none pb-6 sm:pb-8 md:pb-12 px-4 sm:px-8 pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSkill.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2.5 sm:gap-3"
        >
          {/* ── Sequence Number & Creator Role ── */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm sm:text-base font-bold text-[#FF758F] tracking-widest bg-[rgba(224,78,122,0.12)] px-2.5 py-0.5 rounded border border-[rgba(224,78,122,0.25)]">
              {activeSkill.sequence}
            </span>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <span>{activeSkill.creator}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span className="text-neutral-500">{activeSkill.category}</span>
            </span>
          </div>

          {/* ── Active Skill Title ── */}
          <h3
            className="font-display font-extrabold text-white tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)' }}
          >
            {activeSkill.title}
          </h3>

          {/* ── Short Description ── */}
          <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed line-clamp-2 sm:line-clamp-3">
            {activeSkill.description}
          </p>

          {/* ── Framework Badges Group ── */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
            {activeSkill.frameworks.map((fw, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-200 flex items-center gap-1"
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-[#FF758F]" />
                <span>{fw}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkillsInfoPanel;
