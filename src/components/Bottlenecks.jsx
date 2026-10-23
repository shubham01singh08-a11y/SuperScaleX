import React, { useState } from 'react';
import { AlertTriangle, Clock, TrendingDown, Flame, DollarSign, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

export default function Bottlenecks({ onOpenAudit }) {
  const [activeTab, setActiveTab] = useState(0);

  const bottlenecks = [
    {
      id: 'funnel',
      title: 'The "Leaky Funnel" Trap',
      subtitle: 'Web Fragility & Friction-Heavy UX',
      icon: TrendingDown,
      color: 'from-amber-500 to-red-500',
      borderColor: 'border-amber-500/30',
      glowColor: 'bg-amber-500/10',
      textColor: 'text-amber-400',
      symptom: '68% of visitors abandon before checkout because page load speeds drag and mobile UX creates cognitive hesitation.',
      businessCost: '$12,000 – $85,000 / month',
      costLabel: 'in uncaptured sales slipping through checkout cracks',
      diagnosis: 'Your ads are winning the click, but your storefront is repelling the buyer. A 1-second delay erodes 7-11% of conversions.',
      fix: 'Antigravity Headless Web Architecture with sub-800ms response times and one-tap checkout friction removal.'
    },
    {
      id: 'manual',
      title: 'The "Manual Grind" Trap',
      subtitle: 'Automation Deficit & Payroll Drag',
      icon: Clock,
      color: 'from-red-500 to-purple-500',
      borderColor: 'border-red-500/30',
      glowColor: 'bg-red-500/10',
      textColor: 'text-red-400',
      symptom: 'Inbound inquiries sit unanswered for 30+ minutes while sales reps burn 25+ hours each week manually keying CRM data.',
      businessCost: '35+ Hours Wasted Weekly',
      costLabel: 'plus 391% drop in lead qualification rate when response lag exceeds 5 minutes',
      diagnosis: 'High-intent buyers move to your competitor in the 20 minutes it takes your team to see the form submission.',
      fix: 'Autonomous AI Inbound Agents & Webhook Workflows that qualify, respond, and book calls in under 45 seconds.'
    },
    {
      id: 'spend',
      title: 'The "Blind Spend" Trap',
      subtitle: 'Siloed Agencies & Vanishing ROAS',
      icon: Flame,
      color: 'from-purple-500 to-cyan-500',
      borderColor: 'border-purple-500/30',
      glowColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
      symptom: 'Traditional ad agencies obsess over impressions and CTR while your real Customer Acquisition Cost (CAC) doubles.',
      businessCost: 'Up to 40% Ad Spend Burned',
      costLabel: 'into broken iOS attribution, bot traffic, and unoptimized creative fatigue',
      diagnosis: 'Pumping paid ad volume into an uninstrumented funnel is the fastest way to bleed capital without compounding scale.',
      fix: 'Server-Side Omnichannel Tracking (CAPI) + High-Velocity Creative Testing Engine tuned for net cash-flow.'
    }
  ];

  return (
    <section id="bottlenecks" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Bottlenecks Killing Your Scale</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            More Ads Won't Fix a Broken Engine.
            <span className="block text-slate-400 font-semibold text-2xl sm:text-3xl mt-2">
              Here is why most brands get stuck at the revenue plateau:
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Scaling is not about spending more; it is about eliminating friction. When any of these 3 bottlenecks exist, your marketing budget leaks out before it reaches your bottom line.
          </p>
        </div>

        {/* 3 Bottleneck Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {bottlenecks.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeTab === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`glass-panel p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? `border-cyan-400/50 shadow-xl shadow-cyan-500/15 -translate-y-1.5 bg-[#0e1222]`
                    : `border-white/10 hover:border-white/20 hover:-translate-y-1`
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400">
                    Trap 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs font-medium text-slate-400 mb-4">{item.subtitle}</p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.symptom}
                </p>

                {/* Quantified Cost Box */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                    Estimated Drain:
                  </div>
                  <div className={`text-lg sm:text-xl font-extrabold ${item.textColor} font-mono mt-0.5`}>
                    {item.businessCost}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                    {item.costLabel}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-cyan-400">
                  <span>{isSelected ? 'Viewing Diagnostic Solution' : 'Click to inspect fix'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Bottleneck Solution Drawer */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-[#070914] relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  SuperScaleX Neutralization Strategy
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                How We Solve {bottlenecks[activeTab].title}
              </h4>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
                {bottlenecks[activeTab].fix}
              </p>
            </div>

            <button
              onClick={onOpenAudit}
              className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-sm hover:from-cyan-300 hover:to-white transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Scan My Business For This Leak</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
