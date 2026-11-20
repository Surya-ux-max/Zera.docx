import React from 'react';
import LandingSection from './components/sections/LandingSection';
import BioSection from './components/sections/BioSection';
import SkillsSection from './components/sections/skills/SkillsSection';

export function App() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background)] text-[var(--color-text)] overflow-x-hidden font-sans selection:bg-[#5B95F9] selection:text-white">
      <main>
        <LandingSection />
        <BioSection />
        <SkillsSection />
      </main>
    </div>
  );
}

export default App;
