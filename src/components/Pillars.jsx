import React, { useState } from 'react';
import { Layers, Globe, Cpu, BarChart3, CheckCircle2, ArrowRight, Zap, Repeat } from 'lucide-react';

export default function Pillars({ onOpenAudit }) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      number: '01',
      badge: 'FOUNDATION LAYER',
      title: 'High-Conversion Antigravity Web Architecture',
      hook: 'Turn curious clicks into fanatical, high-LTV buyers.',
      icon: Globe,
      color: 'from-cyan-500 to-blue-600',
      accent: 'cyan',
      glow: 'shadow-cyan-500/20',
      description:
        'We engineer hyper-fast, frictionless web experiences optimized purely for conversion rate and customer retention. No bloated templates or brittle plugins. Built on modern Jamstack/React foundations with sub-second global edge delivery.',
      keyMetrics: [
        { label: 'Avg Global Edge Latency', value: '< 800ms' },
        { label: 'Mobile Conversion Lift', value: '+180%' },
        { label: 'Google PageSpeed Score', value: '98 / 100' },
      ],
      capabilities: [
        'Psychology-backed visual hierarchy and conversion-rate-optimized copy',
        'One-tap frictionless checkout flows (Apple Pay, Google Pay, Shop Pay)',
        'Zero layout shifts, instant page transitions, and fluid micro-animations',
        'Deep server-side tracking and analytics instrumentation pre-installed'
      ]
    },
    {
      number: '02',
      badge: 'VELOCITY LAYER',
      title: 'Autonomous AI & Revenue Workflows',
      hook: 'Capture, qualify, and close sales while you sleep.',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-600',
      accent: 'purple',
      glow: 'shadow-purple-500/20',
      description:
        'We build self-orchestrating AI workflows that instantly engage incoming prospects, nurture abandoned funnels, and eliminate manual busywork. Your leads are contacted in seconds, not hours.',
      keyMetrics: [
        { label: 'Inbound Lead Response Time', value: '< 45s' },
        { label: 'Abandoned Cart Recovery', value: '+42%' },
        { label: 'Manual Admin Hours Saved', value: '35 hrs/wk' },
      ],
      capabilities: [
        'Omnichannel AI agents (SMS, WhatsApp, Web Chat) that qualify and book appointments',
        'Multi-tiered customer lifecycle and win-back email automations',
        'Two-way real-time synchronization between CRM, ads, and accounting',
        'Deterministic event-driven webhooks replacing fragile manual tasks'
      ]
    },
    {
      number: '03',
      badge: 'ACCELERATION LAYER',
      title: 'Precision Performance Acquisition & Scale',
      hook: 'Predictable, high-yield traffic injected directly into your funnel.',
      icon: BarChart3,
      color: 'from-emerald-400 to-teal-600',
      accent: 'emerald',
      glow: 'shadow-emerald-500/20',
      description:
        'We deploy statistical creative testing and programmatic media buying across Meta, Google, and TikTok. Every ad dollar is backed by server-side first-party data and directed to dedicated high-converting landing pages.',
      keyMetrics: [
        { label: 'Blended Client ROAS', value: '3.5x – 7.2x' },
        { label: 'Ad Creative Variations/Mo', value: '30+ Tests' },
        { label: 'Server-Side Attribution Match', value: '94%+' },
      ],
      capabilities: [
        'Omnichannel ad spend management (Meta, Google Search/Shopping, TikTok)',
        'Server-Side Conversion API (CAPI) circumventing iOS privacy signal loss',
        'Continuous high-velocity creative sprint testing (hooks, angles, formats)',
        'Algorithmic audience modeling tailored to bottom-line profitability'
      ]
    }
  ];

  return (
    <section id="pillars" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#04060d]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>The SuperScaleX Revenue Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The 3-Pillar Engine: Built to Dominate.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            When Web Architecture, AI Automation, and Performance Acquisition operate as a synchronized machine, your sales compound with zero friction.
          </p>
        </div>

        {/* Pillar Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === idx;
            return (
              <button
                key={pillar.number}
                onClick={() => setActivePillar(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 relative border cursor-pointer ${
                  isSelected
                    ? 'glass-panel bg-[#0d1226] border-cyan-400/50 shadow-xl shadow-cyan-500/10'
                    : 'bg-[#080b18]/60 border-white/10 hover:border-white/20 hover:bg-[#0c1022]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                    Pillar {pillar.number}
                  </span>
                </div>
                <div className="text-[11px] font-mono tracking-wider text-cyan-400 font-bold uppercase mb-1">
                  {pillar.badge}
                </div>
                <div className="text-base font-bold text-white leading-snug">
                  {pillar.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Full Showcase Card */}
        {(() => {
          const current = pillars[activePillar];
          const Icon = current.icon;
          return (
            <div className="glass-panel p-8 sm:p-12 rounded-3xl border-cyan-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                    <span>{current.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-lg font-medium text-cyan-300/90 italic">
                    "{current.hook}"
                  </p>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {current.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3 pt-2">
                    {current.capabilities.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onOpenAudit}
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-sm hover:from-cyan-300 hover:to-white transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Audit My Business for Pillar {current.number}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Key Metric Callouts */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="glass-panel p-6 rounded-2xl border-white/10 bg-[#090d1f]">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span>Benchmark Performance Metrics</span>
                    </div>
                    <div className="space-y-4">
                      {current.keyMetrics.map((metric, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                          <span className="text-sm text-slate-300">{metric.label}</span>
                          <span className="text-xl font-extrabold text-white font-mono text-cyan-300">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flywheel Sync Mini-Card */}
                  <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Repeat className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
                    </div>
                    <div className="text-xs text-slate-300 leading-snug">
                      <strong className="text-white block font-semibold">The Flywheel Effect:</strong>
                      Feeds directly into the other two pillars to multiply ROI and lower customer acquisition costs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
