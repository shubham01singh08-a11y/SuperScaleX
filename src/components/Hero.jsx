import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenAudit, onScrollToCalculator }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Antigravity Ambient Background Gradients / Energy Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-purple-600/20 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute -top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Subtle Starfield / Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-glow text-cyan-300 text-xs sm:text-sm font-semibold mb-8 hover:scale-105 transition-transform duration-300">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>THE ZERO-FRICTION REVENUE ACCELERATOR FOR E-COMMERCE, SAAS & B2B</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-5xl mx-auto">
          Scale Past Your Plateau.
          <span className="block mt-2 text-gradient-cyan">
            We Build the Machine That Triples Your Revenue.
          </span>
        </h1>

        {/* Subheadline (Persuasive CRO Body) */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Stop burning capital on disconnected ad agencies and slow, fragile websites.
          <span className="text-white font-medium"> SuperScaleX</span> unifies high-converting web architecture, 
          autonomous AI workflows, and algorithmic performance acquisition into a synchronized growth flywheel 
          engineered to capture, convert, and multiply your sales on autopilot.
        </p>

        {/* Action Button Cluster */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-950 font-bold text-base bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-white transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Claim Your Free Revenue Leak Audit</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onScrollToCalculator}
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-white font-semibold text-base glass-panel hover:bg-white/10 border-white/15 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Calculate 90-Day ROI</span>
            <span className="text-cyan-400">📊</span>
          </button>
        </div>

        {/* Sub-CTA Risk Reversal */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 mb-16">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            100% Confidential
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Identifies Top 3 Leaks in 5 Mins
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            No Credit Card Required
          </span>
        </div>

        {/* Levitating Floating Trust Cards (Antigravity Themed) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="glass-panel glass-card-hover p-5 rounded-2xl text-left border-cyan-500/20 relative overflow-hidden group animate-float">
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all" />
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              $48.6M+
            </div>
            <p className="text-xs text-slate-400 mt-1">Client Revenue Generated</p>
            <div className="mt-2 text-[11px] font-mono text-cyan-300/80 font-medium flex items-center gap-1">
              <span>↑ +312% YoY Average</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel glass-card-hover p-5 rounded-2xl text-left border-purple-500/20 relative overflow-hidden group animate-float-reverse">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all" />
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              3.8x
            </div>
            <p className="text-xs text-slate-400 mt-1">Average Return on Ad Spend</p>
            <div className="mt-2 text-[11px] font-mono text-purple-300/80 font-medium flex items-center gap-1">
              <span>Meta, Google & TikTok</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel glass-card-hover p-5 rounded-2xl text-left border-emerald-500/20 relative overflow-hidden group animate-float">
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all" />
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              14,200+
            </div>
            <p className="text-xs text-slate-400 mt-1">Hours Reclaimed via AI</p>
            <div className="mt-2 text-[11px] font-mono text-emerald-300/80 font-medium flex items-center gap-1">
              <span>Zero Manual Pipeline Lag</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-panel glass-card-hover p-5 rounded-2xl text-left border-teal-500/20 relative overflow-hidden group animate-float-reverse">
            <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/10 rounded-full blur-xl group-hover:bg-teal-500/20 transition-all" />
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              +214%
            </div>
            <p className="text-xs text-slate-400 mt-1">Conversion Rate Lift</p>
            <div className="mt-2 text-[11px] font-mono text-teal-300/80 font-medium flex items-center gap-1">
              <span>Sub-800ms Web Latency</span>
            </div>
          </div>
        </div>

        {/* Authority / Platform Ecosystem strip */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-mono mb-6">
            ENGINEERED FOR MODERN TECH STACKS & ECOSYSTEMS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-500 font-semibold text-sm">
            <span className="hover:text-slate-300 transition-colors">Shopify Plus</span>
            <span className="hover:text-slate-300 transition-colors">Next.js & React</span>
            <span className="hover:text-slate-300 transition-colors">Google Cloud & Firebase</span>
            <span className="hover:text-slate-300 transition-colors">Meta CAPI & TikTok</span>
            <span className="hover:text-slate-300 transition-colors">HubSpot & Klaviyo</span>
            <span className="hover:text-slate-300 transition-colors">Stripe Billing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
