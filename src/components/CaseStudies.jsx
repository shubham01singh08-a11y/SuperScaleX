import React, { useState } from 'react';
import { Award, Star, TrendingUp, ArrowRight, Quote, ShieldCheck } from 'lucide-react';

export default function CaseStudies({ onOpenAudit }) {
  const [filter, setFilter] = useState('all');

  const cases = [
    {
      id: 'auravibe',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce / D2C',
      brand: 'AuraVibe Apparel',
      headline: 'From $80,000/mo to $390,000/mo in 120 Days',
      challenge:
        'Stuck at an 80k revenue plateau with sluggish 1.4% mobile conversion, rising Meta ad fatigue, and 72% abandoned cart rate.',
      execution:
        'Rebuilt headless Next.js storefront with one-tap Shop Pay, deployed behavioral Klaviyo AI replenishment flows, and launched high-velocity TikTok UGC creative sprints.',
      metrics: [
        { label: 'Monthly Revenue', value: '$390k/mo', sub: 'Up from $80k/mo (+387%)' },
        { label: 'Blended ROAS', value: '3.8x ROAS', sub: 'Maintained at 5x ad spend scale' },
        { label: 'Store Conversion Rate', value: '3.9%', sub: 'Lifted from 1.4% baseline' },
      ],
      quote:
        'SuperScaleX completely transformed our unit economics. Within 60 days of deploying their 3-pillar ecosystem, our monthly net profit surpassed our previous yearly baseline.',
      author: 'Marcus Vance',
      role: 'Founder & CEO',
    },
    {
      id: 'saasflow',
      category: 'saas',
      categoryLabel: 'B2B SaaS Platform',
      brand: 'SaaSFlow Engine',
      headline: 'Added $1.8M ARR & Slashed Customer Acquisition Cost by 54%',
      challenge:
        '82% onboarding drop-off rate, high CAC on Google search campaigns, and manual sales qualification burning 25 rep hours/week.',
      execution:
        'Zero-friction onboarding flow redesign, multi-touch behavioral AI nurturing automations, and search intent funnel optimization.',
      metrics: [
        { label: 'Trial-to-Paid CVR', value: '14.8%', sub: 'Up from 4.1% industry avg' },
        { label: 'Net ARR Added', value: '+$1.8M ARR', sub: 'Generated in 6 months' },
        { label: 'Customer Acq. Cost', value: '-54% CAC', sub: 'Decreased while doubling pipeline' },
      ],
      quote:
        'The AI automation workflows alone saved our sales reps 25 hours every week. SuperScaleX is the only growth partner that treats engineering and marketing as one unified discipline.',
      author: 'Elena Rostova',
      role: 'VP of Growth',
    },
    {
      id: 'apex',
      category: 'services',
      categoryLabel: 'High-Ticket Advisory',
      brand: 'Apex Capital Advisory',
      headline: '+420% Increase in Qualified Sales Calls Booked',
      challenge:
        'Inbound form submissions took 4+ hours to be contacted manually, resulting in cold leads and erratic deal flow.',
      execution:
        'Instant multi-channel SMS/WhatsApp AI qualification bot, high-authority VSL landing page, and hyper-targeted LinkedIn performance campaigns.',
      metrics: [
        { label: 'Lead Response Time', value: '42 seconds', sub: 'Down from 4.2 hours' },
        { label: 'Qualified Call Rate', value: '+420%', sub: 'Calendar booked 6 weeks out' },
        { label: 'Close Rate', value: '34%', sub: 'Due to pre-educated high-intent leads' },
      ],
      quote:
        'We went from chasing cold prospects to having our calendar fully booked with pre-qualified founders ready to wire funds on the first call.',
      author: 'David Sterling',
      role: 'Managing Partner',
    },
  ];

  const filteredCases =
    filter === 'all' ? cases : cases.filter((c) => c.category === filter);

  return (
    <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Validated Client Proof</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Real Numbers. Real Compounding Returns.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            See how high-growth E-Commerce brands, SaaS companies, and service leaders scaled past their plateaus with SuperScaleX.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Industries' },
            { id: 'ecommerce', label: 'E-Commerce' },
            { id: 'saas', label: 'B2B SaaS' },
            { id: 'services', label: 'High-Ticket Services' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {filteredCases.map((study) => (
            <div
              key={study.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {study.categoryLabel}
                  </span>
                  <span className="text-lg font-extrabold text-white">{study.brand}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {study.headline}
                  </h3>

                  <div className="space-y-2 text-sm text-slate-300">
                    <p>
                      <strong className="text-red-400 font-mono text-xs uppercase mr-2">[The Bottleneck]</strong>
                      {study.challenge}
                    </p>
                    <p>
                      <strong className="text-cyan-400 font-mono text-xs uppercase mr-2">[The Execution]</strong>
                      {study.execution}
                    </p>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 relative mt-4">
                    <Quote className="w-6 h-6 text-cyan-400/40 mb-2" />
                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                      "{study.quote}"
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-white block">{study.author}</span>
                        <span className="text-slate-400 text-[11px]">{study.role}, {study.brand}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified Client
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right 5 cols: Metrics Grid */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  {study.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                        {m.label}
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-200 font-mono mt-1">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">{m.sub}</div>
                    </div>
                  ))}

                  <button
                    onClick={onOpenAudit}
                    className="w-full mt-2 py-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-white hover:text-cyan-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Audit My Business For Similar Results</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
