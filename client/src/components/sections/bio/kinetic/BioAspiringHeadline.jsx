import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';
import { JumpingText } from './JumpingText';

/**
 * BioAspiringHeadline
 * Bio section content showcasing "Aspiring Fullstack developer"
 * with interactive jumping characters that join into a cohesive sentence.
 */
export const BioAspiringHeadline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55 }}
      className="w-full flex flex-col items-center justify-center mt-6 sm:mt-10 px-4"
    >
      {/* ── Kinetic Pill Container ── */}
      <div className="kinetic-role-card flex flex-col sm:flex-row items-center gap-3 sm:gap-4 max-w-3xl">
        {/* Animated dot indicator */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[var(--color-blue)] animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-[var(--color-yellow)]" />
          <span className="w-2 h-2 rounded-full bg-[var(--color-green)]" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-muted)] ml-1">
            Focus:
          </span>
        </div>

        {/* ── Jumping Characters Joining Together ── */}
        <div className="font-display tracking-tight text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <JumpingText
            phrase="Aspiring Fullstack developer"
            highlightWord="Fullstack"
            highlightColor="var(--color-blue)"
          />
        </div>

        {/* Subtle replay prompt tooltip on hover */}
        <div className="hidden lg:flex items-center gap-1 text-[10px] font-mono text-[var(--color-muted)] shrink-0 border-l border-[var(--color-beige)] pl-3">
          <Sparkles className="w-3 h-3 text-[var(--color-yellow)]" />
          <span>Interactive</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BioAspiringHeadline;

