import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Loader2, ShieldCheck, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitAuditRequest } from '../firebase/services';

export default function AuditModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form Fields
  const [formData, setFormData] = useState({
    companyName: '',
    websiteUrl: '',
    businessType: 'ecommerce',
    monthlyRevenue: '$25k-$50k',
    primaryBottleneck: 'conversion_leak',
    fullName: '',
    workEmail: '',
    phone: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.companyName || !formData.websiteUrl) {
        setErrorMsg('Please enter your company name and website URL.');
        return;
      }
      setErrorMsg('');
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.fullName) {
      setErrorMsg('Please enter your full name and work email.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await submitAuditRequest({
        ...formData,
        submittedAt: new Date().toISOString(),
      });

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#7928ca', '#00ffa3'],
      });

      setIsSuccess(true);
    } catch (err) {
      console.error('Audit submission error:', err);
      setErrorMsg('Unable to submit audit. Please check your inputs or try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    setFormData({
      companyName: '',
      websiteUrl: '',
      businessType: 'ecommerce',
      monthlyRevenue: '$25k-$50k',
      primaryBottleneck: 'conversion_leak',
      fullName: '',
      workEmail: '',
      phone: '',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-2xl rounded-3xl border-cyan-500/30 bg-[#090d1e] shadow-2xl shadow-cyan-950/50 relative overflow-hidden p-6 sm:p-10">
        {/* Background glow orb */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Confidential Diagnostic Session · Value $1,500</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Claim Your Free Revenue Leak Audit
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Our growth engineers will audit your store UX, identify 3 high-impact automation quick-wins, and map your 90-day trajectory.
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 flex items-center gap-2">
                  <div
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      step >= s ? 'bg-cyan-400 shadow-sm shadow-cyan-400/50' : 'bg-slate-800'
                    }`}
                  />
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      step === s ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  >
                    0{s}
                  </span>
                </div>
              ))}
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Step 1: Business Details */}
            {step === 1 && (
              <form onSubmit={handleNextStep} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Brands Co."
                    value={formData.companyName}
                    onChange={(e) => handleChange('companyName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Website or Store URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://yourstore.com"
                    value={formData.websiteUrl}
                    onChange={(e) => handleChange('websiteUrl', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Primary Business Category
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleChange('businessType', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="ecommerce">E-Commerce / D2C Brand</option>
                    <option value="saas">B2B SaaS / Software Platform</option>
                    <option value="services">High-Ticket Agency / Consulting</option>
                    <option value="other">Other High-Growth Model</option>
                  </select>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-sm hover:from-cyan-300 hover:to-white transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Next: Scale Metrics</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Revenue & Bottlenecks */}
            {step === 2 && (
              <form onSubmit={handleNextStep} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Current Monthly Revenue Bracket
                  </label>
                  <select
                    value={formData.monthlyRevenue}
                    onChange={(e) => handleChange('monthlyRevenue', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="under_$25k">Under $25,000 / month</option>
                    <option value="$25k-$50k">$25,000 – $50,000 / month</option>
                    <option value="$50k-$100k">$50,000 – $100,000 / month</option>
                    <option value="$100k-$250k">$100,000 – $250,000 / month</option>
                    <option value="$250k+">$250,000+ / month (Enterprise Scale)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    What is Your #1 Growth Bottleneck Right Now?
                  </label>
                  <select
                    value={formData.primaryBottleneck}
                    onChange={(e) => handleChange('primaryBottleneck', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="conversion_leak">Leaky Funnel (Low Website Conversion Rate / High Bounce)</option>
                    <option value="manual_ops">Manual Operational Drag (Need AI Lead & CRM Automation)</option>
                    <option value="ad_fatigue">High CAC & Poor Ad ROAS (Meta / Google Ad Waste)</option>
                    <option value="all_three">All Three (Need Complete 3-Pillar Ecosystem Overhaul)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Specific Challenge / Goal (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you want to achieve over the next 90 days..."
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-sm hover:from-cyan-300 hover:to-white transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Contact & Delivery */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Work Email * (Audit Delivered Here)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@yourbrand.com"
                    value={formData.workEmail}
                    onChange={(e) => handleChange('workEmail', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Direct Phone / WhatsApp (For Calendar SMS Confirmation)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict NDA Guarantee. Your data is never shared or sold.</span>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-extrabold text-sm hover:from-cyan-300 hover:to-white transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting to Growth Engine...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit & Request Diagnostic Audit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Diagnostic Audit Request Received!
            </h3>

            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Our senior growth engineers are initiating the preliminary UX heuristic and funnel diagnostic for <span className="text-cyan-400 font-mono">{formData.websiteUrl}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="font-mono text-cyan-300 font-bold uppercase text-[11px]">
                ⚡ What Happens In The Next 24 Hours:
              </div>
              <p className="text-slate-300">
                1. Full sub-second load time & conversion friction inspection.
              </p>
              <p className="text-slate-300">
                2. AI automation teardown mapping top 3 immediate labor saves.
              </p>
              <p className="text-slate-300">
                3. Direct calendar link dispatched to <strong className="text-white">{formData.workEmail}</strong>.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-white transition-all cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
