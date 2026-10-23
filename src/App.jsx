import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bottlenecks from './components/Bottlenecks';
import Pillars from './components/Pillars';
import RoiCalculator from './components/RoiCalculator';
import ServicesDeepDive from './components/ServicesDeepDive';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import BlueprintModal from './components/BlueprintModal';

export default function App() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05050a] text-slate-100 selection:bg-cyan-400 selection:text-slate-950 font-sans relative">
      {/* Dynamic Background Noise / Antigravity ambient particle canvas */}
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-40">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute top-2/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating Navigation Pill */}
      <Navbar
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero
          onOpenAudit={() => setIsAuditOpen(true)}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* Section 2: Problem & Bottlenecks */}
        <Bottlenecks onOpenAudit={() => setIsAuditOpen(true)} />

        {/* Section 3: The 3-Pillar Solution Ecosystem */}
        <Pillars onOpenAudit={() => setIsAuditOpen(true)} />

        {/* Section 4: Interactive ROI Calculator (Lead Magnet #2) */}
        <RoiCalculator onOpenAudit={() => setIsAuditOpen(true)} />

        {/* Section 5: Services Deep-Dive Breakdown */}
        <ServicesDeepDive onOpenAudit={() => setIsAuditOpen(true)} />

        {/* Section 6: Verified Results & Case Studies */}
        <CaseStudies onOpenAudit={() => setIsAuditOpen(true)} />
      </main>

      {/* Section 7: Final CTA & Footer */}
      <Footer
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
      />

      {/* Interactive Modals */}
      <AuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />

      <BlueprintModal
        isOpen={isBlueprintOpen}
        onClose={() => setIsBlueprintOpen(false)}
      />
    </div>
  );
}
