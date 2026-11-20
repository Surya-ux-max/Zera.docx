import React from 'react';
import { Terminal, Database, Cpu, Layers, Cloud, Sparkles, Activity, ShieldCheck } from 'lucide-react';

/**
 * SkillsCardArtwork
 * Generates custom, high-fidelity editorial visual art for each Full-Stack skill card.
 * Embedded inside the museum picture frame with realistic dark atmospheric lighting.
 */
export const SkillsCardArtwork = ({ skill }) => {
  const { id, accentColor, secondaryAccent, frameworks, metrics, codeSnippet, aspect } = skill;

  // Icon mapping
  const renderSkillIcon = () => {
    switch (id) {
      case 'react-next':
        return <Layers className="w-6 h-6" style={{ color: accentColor }} />;
      case 'node-express':
        return <Terminal className="w-6 h-6" style={{ color: accentColor }} />;
      case 'postgres-prisma':
        return <Database className="w-6 h-6" style={{ color: accentColor }} />;
      case 'ts-python':
        return <Cpu className="w-6 h-6" style={{ color: accentColor }} />;
      case 'docker-devops':
        return <Cloud className="w-6 h-6" style={{ color: accentColor }} />;
      case 'genai-agents':
        return <Sparkles className="w-6 h-6" style={{ color: accentColor }} />;
      default:
        return <Layers className="w-6 h-6" style={{ color: accentColor }} />;
    }
  };

  return (
    <div className="relative w-full h-full bg-[#111215] overflow-hidden rounded-[4px] flex flex-col justify-between p-4 sm:p-5 select-none text-left">
      {/* ── Background Cyber Ambient Glow & Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, ${accentColor} 0%, transparent 60%),
                            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 20px 20px, 20px 20px'
        }}
      />

      {/* ── Visual Art Top Bar: Holographic Status & Badge ── */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-white/5 border border-white/10">
            {renderSkillIcon()}
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-white/50 leading-tight">
              {skill.category}
            </div>
            <div className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>{skill.title.split(' ')[0]}</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
          <Activity className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
          <span>LIVE</span>
        </div>
      </div>

      {/* ── Visual Centerpiece: Interactive Code & Architecture Visual ── */}
      <div className="relative z-10 my-auto py-2">
        {/* Terminal Code Snippet Container */}
        <div className="rounded-lg bg-[#0C0D10]/90 border border-white/8 p-3 shadow-inner">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/5 text-[9px] font-mono text-white/40">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/70 inline-block" />
              <span className="w-2 h-2 rounded-full bg-amber-500/70 inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/70 inline-block" />
            </div>
            <span>spec.engine.v2</span>
          </div>

          <pre className="text-[9px] sm:text-[10px] font-mono text-white/80 leading-relaxed overflow-x-hidden line-clamp-4">
            <code>{codeSnippet}</code>
          </pre>
        </div>

        {/* Telemetry Architecture Metric Badges */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-mono">
          <div className="px-2 py-1.5 rounded bg-white/5 border border-white/8 flex flex-col">
            <span className="text-[8px] uppercase tracking-wider text-white/40">Throughput</span>
            <span className="font-semibold text-white/90 truncate">{metrics.score}</span>
          </div>
          <div className="px-2 py-1.5 rounded bg-white/5 border border-white/8 flex flex-col">
            <span className="text-[8px] uppercase tracking-wider text-white/40">Response</span>
            <span className="font-semibold truncate" style={{ color: secondaryAccent }}>
              {metrics.latency}
            </span>
          </div>
        </div>
      </div>

      {/* ── Visual Bottom Bar: Tech Stack Framework Badges ── */}
      <div className="relative z-10 pt-2 border-t border-white/10">
        <div className="flex flex-wrap gap-1">
          {frameworks.slice(0, 3).map((fw, idx) => (
            <span
              key={idx}
              className="text-[9px] font-mono px-1.5 py-0.5 rounded-sm bg-white/5 text-white/70 border border-white/5"
            >
              #{fw}
            </span>
          ))}
          {frameworks.length > 3 && (
            <span className="text-[9px] font-mono px-1.5 py-0.5 text-white/40">
              +{frameworks.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Subtle Corner Vignette */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-black/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default SkillsCardArtwork;
