import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';

/**
 * BioContent
 * Structured, clean portfolio details for a Computer Science student:
 * - Academic & engineering foundation
 * - Core computing pillars (Data Structures, Full-Stack, AI Experiments)
 * - Quick contact/explore triggers
 */
export const BioContent = () => {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Cpu,
      title: 'Systems & Foundations',
      tag: 'CORE CS',
      accent: '#5B95F9',
      accentBg: 'rgba(91, 149, 249, 0.12)',
      description:
        'Rigorous study of Data Structures, Algorithmic Complexity, Operating Systems, Memory Management, and Computer Networking.',
      skills: ['Algorithms', 'Data Structures', 'OS Architecture', 'C++', 'Python', 'SQL']
    },
    {
      icon: Code2,
      title: 'Full Stack Engineering',
      tag: 'APPLIED DEV',
      accent: '#34A853',
      accentBg: 'rgba(52, 168, 83, 0.12)',
      description:
        'Building production-ready web applications, reactive user interfaces, resilient REST/GraphQL APIs, and scalable databases.',
      skills: ['React 19', 'JavaScript / TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Docker']
    },
    {
      icon: Sparkles,
      title: 'Experimental & Edge Labs',
      tag: 'EXPLORATION',
      accent: '#FFCE35',
      accentBg: 'rgba(255, 206, 53, 0.18)',
      description:
        'Investigating browser-based edge inference, WebAssembly, HTML5 2D/3D physics engines, and creative human-computer interaction.',
      skills: ['TensorFlow.js', 'WebAssembly', 'Canvas 2D Physics', 'FastAPI', 'Framer Motion']
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 sm:space-y-12">
      {/* ── Summary Narrative Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5 }}
        className="labs-surface p-6 sm:p-8 md:p-10 relative overflow-hidden"
      >
        {/* Google Labs 4-Color top indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <span className="flex-1 bg-[#5B95F9]" />
          <span className="flex-1 bg-[#FFCE35]" />
          <span className="flex-1 bg-[#F6B4F0]" />
          <span className="flex-1 bg-[#34A853]" />
        </div>

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DED2]/50 border border-[var(--color-beige)] text-[11px] font-mono text-[var(--color-muted)]">
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            <span>Undergraduate Scholar &amp; Full Stack Builder</span>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[var(--color-text)] tracking-tight">
            Bridging theoretical computer science with high-impact, tactile software engineering.
          </h3>

          <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
            As a Computer Science student, I enjoy unpacking how software operates beneath the abstractions — from algorithmic efficiency and network protocols to fluid, 60fps physics-driven user experiences. I combine rigorous academic foundations with practical full-stack development to build systems that are robust, responsive, and intuitive.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="pill-button active text-xs px-5 py-2.5 shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="pill-button text-xs px-5 py-2.5"
            >
              <Terminal className="w-3.5 h-3.5 text-[var(--color-blue)]" />
              <span>GitHub Repositories</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── 3 Core CS & Development Pillars ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="labs-surface p-5 sm:p-6 flex flex-col justify-between group hover:border-[var(--color-blue)]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: pillar.accentBg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: pillar.accent }} />
                  </div>

                  <span
                    className="label-filter px-2 py-0.5 rounded-full border text-[10px]"
                    style={{
                      backgroundColor: pillar.accentBg,
                      color: pillar.accent,
                      borderColor: `${pillar.accent}40`
                    }}
                  >
                    {pillar.tag}
                  </span>
                </div>

                <h4 className="card-title text-base sm:text-lg mb-2 text-[var(--color-text)] group-hover:text-[var(--color-blue)] transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mb-5">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-beige)]/70">
                <div className="flex flex-wrap gap-1.5">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF8F5] text-[var(--color-text)] border border-[var(--color-beige)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BioContent;

