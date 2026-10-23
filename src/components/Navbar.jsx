import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, ArrowRight, Menu, X, Database } from 'lucide-react';
import { isFirebaseConfigured } from '../firebase/config';

export default function Navbar({ onOpenAudit, onOpenBlueprint }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          scrolled
            ? 'glass-panel bg-[#070913]/90 shadow-2xl shadow-cyan-950/40 border-cyan-500/20 py-3 px-5 sm:px-6'
            : 'bg-[#090c1a]/70 backdrop-blur-md border-white/10 py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                SuperScale<span className="text-cyan-400">X</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono -mt-1 hidden sm:block">
                Digital Growth Engine
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#bottlenecks" className="hover:text-cyan-400 transition-colors">
              Bottlenecks
            </a>
            <a href="#pillars" className="hover:text-cyan-400 transition-colors">
              The 3 Pillars
            </a>
            <a href="#calculator" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <span>ROI Calculator</span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-semibold rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                PRO
              </span>
            </a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#results" className="hover:text-cyan-400 transition-colors">
              Results
            </a>
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Firebase Live Status Badge */}
            <div
              title={
                isFirebaseConfigured
                  ? 'Connected to Google Cloud Firestore in live production mode'
                  : 'Running in simulated Firestore mode. Add VITE_FIREBASE_* in .env to go live.'
              }
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border ${
                isFirebaseConfigured
                  ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
                  : 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isFirebaseConfigured ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'
                }`}
              />
              <span className="hidden lg:inline">{isFirebaseConfigured ? 'Firestore Live' : 'Firestore Ready'}</span>
            </div>

            {/* Claim Audit CTA */}
            <button
              onClick={onOpenAudit}
              className="relative group px-4 py-2 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-white transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-cyan-400" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-3 flex flex-col gap-3 text-sm">
            <a
              href="#bottlenecks"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              Bottlenecks
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              The 3 Pillars
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 flex items-center justify-between"
            >
              <span>ROI Calculator</span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-cyan-500/20 text-cyan-300">PRO</span>
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              Services
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              Client Results
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full py-2.5 rounded-xl text-center font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 shadow-md shadow-cyan-500/20"
              >
                Claim Free Growth Audit
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
