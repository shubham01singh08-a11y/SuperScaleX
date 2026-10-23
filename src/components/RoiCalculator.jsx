import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Sparkles, ArrowRight, CheckCircle2, Clock, DollarSign, Send, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitCalculatorLead } from '../firebase/services';

export default function RoiCalculator({ onOpenAudit }) {
  const [adSpend, setAdSpend] = useState(15000);
  const [currentRevenue, setCurrentRevenue] = useState(65000);
  const [cvr, setCvr] = useState(1.8);

  // Form submission state
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic calculations
  const projections = useMemo(() => {
    // SuperScaleX benchmark lifts:
    // Web UX optimization lifts CVR by ~1.7x to 2.2x
    // AI Automations reclaim abandoned carts (+18-35% revenue recovery)
    // Performance ad optimization lifts ROAS by +35-65%
    const cvrLiftFactor = Math.min(2.1, 1 + (3.5 - cvr) * 0.35);
    const automationRecoveryBoost = currentRevenue * 0.22;
    const adEfficiencyGain = adSpend * 1.45;

    const projectedRevenue = Math.round(
      currentRevenue * cvrLiftFactor + automationRecoveryBoost + adEfficiencyGain
    );
    const monthlyGain = Math.max(0, projectedRevenue - currentRevenue);
    const ninetyDayGain = monthlyGain * 3;
    const hoursSaved = Math.round(28 + (currentRevenue / 20000) * 8);
    const projectedRoas = adSpend > 0 ? ((projectedRevenue * 0.6) / adSpend).toFixed(1) : '4.2';

    return {
      projectedRevenue,
      monthlyGain,
      ninetyDayGain,
      hoursSaved,
      projectedRoas,
    };
  }, [adSpend, currentRevenue, cvr]);

  const handleSubmitProjection = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await submitCalculatorLead({
        company: company || 'Not specified',
        email,
        adSpend,
        currentRevenue,
        currentCvr: cvr,
        projectedRevenue: projections.projectedRevenue,
        monthlyGain: projections.monthlyGain,
        ninetyDayGain: projections.ninetyDayGain,
      });

      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00f0ff', '#a855f7', '#00ffa3'],
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Lead submission failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Conversion Strategy #2 · Interactive Growth Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Calculate Your 90-Day Revenue Upside.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Adjust the sliders below to benchmark how much additional cash-flow the SuperScaleX 3-pillar ecosystem unlocks for your business model.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Input Panel */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border-white/10 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Your Current Business Inputs</span>
            </h3>

            {/* Slider 1: Monthly Ad Spend */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-300">
                  Monthly Paid Ad Spend:
                </label>
                <span className="font-mono text-cyan-400 font-extrabold text-lg">
                  ${adSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>$1k/mo</span>
                <span>$50k/mo</span>
                <span>$100k+/mo</span>
              </div>
            </div>

            {/* Slider 2: Current Monthly Revenue */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-300">
                  Current Gross Monthly Revenue:
                </label>
                <span className="font-mono text-cyan-400 font-extrabold text-lg">
                  ${currentRevenue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="350000"
                step="5000"
                value={currentRevenue}
                onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>$5k/mo</span>
                <span>$150k/mo</span>
                <span>$350k+/mo</span>
              </div>
            </div>

            {/* Slider 3: Current Conversion Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-300">
                  Current Store/Website Conversion Rate:
                </label>
                <span className="font-mono text-cyan-400 font-extrabold text-lg">
                  {cvr.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="4.5"
                step="0.1"
                value={cvr}
                onChange={(e) => setCvr(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>0.5% (Severe Leak)</span>
                <span>2.0% (Average)</span>
                <span>4.5% (High)</span>
              </div>
            </div>

            {/* Micro Breakdown of Engine Levers */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs text-slate-400">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 block font-mono text-[10px] uppercase">Pillar 1 Impact</span>
                <span className="text-white font-semibold">+60% to +140% CVR boost</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 block font-mono text-[10px] uppercase">Pillar 2 Impact</span>
                <span className="text-white font-semibold">20-30% cart/lead recovery</span>
              </div>
            </div>
          </div>

          {/* Realtime Projected Output Panel */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border-cyan-500/40 bg-gradient-to-br from-[#0c1228] to-[#060914] relative overflow-hidden shadow-2xl shadow-cyan-950/30">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-white text-base">Projected 90-Day Trajectory</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Ecosystem Synchronized
              </span>
            </div>

            {/* Big Projected Revenue Gain */}
            <div className="py-6 space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Projected New Monthly Run-Rate:
              </span>
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 font-mono tracking-tight">
                ${projections.projectedRevenue.toLocaleString()}
                <span className="text-sm font-normal text-slate-400 ml-2">/ month</span>
              </div>
              <div className="text-sm font-semibold text-emerald-400 font-mono flex items-center gap-1.5 pt-1">
                <TrendingUp className="w-4 h-4" />
                <span>+${projections.monthlyGain.toLocaleString()} / mo Net Gain (+{Math.round((projections.monthlyGain / currentRevenue) * 100)}%)</span>
              </div>
            </div>

            {/* Metric Callouts */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[11px] font-mono text-slate-400 uppercase">90-Day Compounded Net</div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5 text-cyan-300">
                  +${projections.ninetyDayGain.toLocaleString()}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Reclaimed Ops Time</div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5 text-emerald-400 flex items-center gap-1">
                  <span>~{projections.hoursSaved} hrs</span>
                  <span className="text-xs font-normal text-slate-400">/mo</span>
                </div>
              </div>
            </div>

            {/* Email Capture / Lead Form */}
            <div className="mt-6 pt-2">
              {!isSubmitted ? (
                <form onSubmit={handleSubmitProjection} className="space-y-3">
                  <p className="text-xs text-slate-300 font-medium">
                    Email this custom 90-day growth roadmap to your inbox:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="work@yourcompany.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-sm hover:from-cyan-300 hover:to-white transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <span>Save Projection</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 block">
                    ⚡ Stored securely in Cloud Firestore · Instant email dispatch
                  </span>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Projection Saved Successfully!</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    We've saved your blueprint. Want our team to review your live site and confirm these numbers?
                  </p>
                  <button
                    onClick={onOpenAudit}
                    className="mt-1 text-xs font-bold text-cyan-300 underline hover:text-white inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Claim Your Free Diagnostic Audit Call →</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
