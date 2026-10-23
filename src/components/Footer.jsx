import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Lock, CheckCircle2 } from 'lucide-react';
import { isFirebaseConfigured } from '../firebase/config';

export default function Footer({ onOpenAudit, onOpenBlueprint }) {
  return (
    <footer className="relative bg-[#020307] pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-cyan-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* FINAL CTA SECTION (From Prompt Specification) */}
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border-cyan-500/30 bg-gradient-to-b from-[#0c1228] to-[#050814] text-center mb-20 relative overflow-hidden shadow-2xl shadow-cyan-950/40">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>FINAL CALL · 4 AUDIT SLOTS REMAINING THIS MONTH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Break Past Your Revenue Ceiling?
            <span className="block mt-2 text-gradient-cyan">
              Get Your Free 360° Revenue Leak & Architecture Audit.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-6 mb-8 leading-relaxed">
            In this confidential 30-minute diagnostic session, our growth engineers pinpoint your site conversion blockers, identify 3 high-impact automation quick-wins, and map your 90-day trajectory to triple your sales.
          </p>

          {/* Value Checklist */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 mb-10 max-w-3xl mx-auto">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Full UX Heuristic & Conversion Audit
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              AI Automation Architecture Roadmap
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Ad ROAS & Tracking Signal Scorecard
            </span>
          </div>

          {/* CTA Cluster */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-9 py-4 rounded-xl text-slate-950 font-extrabold text-base bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-white transition-all shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Schedule Your Diagnostic Audit Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenBlueprint}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-white font-semibold text-sm glass-panel hover:bg-white/10 border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Download 8-Figure Scale Blueprint [PDF]</span>
            </button>
          </div>

          {/* Guarantee / Risk Reversal Box */}
          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 max-w-xl mx-auto flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Zero Risk Guarantee:</strong> If we can't show you at least $50,000 in identifiable pipeline improvements, we'll write you a $250 Amazon gift card for your time.
            </span>
          </div>
        </div>

        {/* Footer Links & Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-sm">
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-base">SuperScaleX</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The Antigravity Digital Growth Engine. Unifying high-conversion web development, AI workflow automation, and algorithmic paid traffic.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3">
              The 3 Pillars
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-cyan-300">Web Design & Architecture</a></li>
              <li><a href="#services" className="hover:text-cyan-300">AI & Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Performance Marketing</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Server-Side Tracking (CAPI)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3">
              Conversion Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#calculator" className="hover:text-cyan-300">90-Day ROI Calculator</a></li>
              <li><button onClick={onOpenAudit} className="hover:text-cyan-300 cursor-pointer text-left">Free Revenue Leak Audit</button></li>
              <li><button onClick={onOpenBlueprint} className="hover:text-cyan-300 cursor-pointer text-left">8-Figure Blueprint PDF</button></li>
              <li><a href="#results" className="hover:text-cyan-300">Verified Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3">
              Infrastructure
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isFirebaseConfigured ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
                <span>Backend: Google Cloud Firestore</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>256-Bit SSL Encryption</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Mode: {isFirebaseConfigured ? 'Production Live' : 'Simulation Demo Mode'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} SuperScaleX Growth Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Security Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
