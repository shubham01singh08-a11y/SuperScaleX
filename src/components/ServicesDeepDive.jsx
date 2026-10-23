import React, { useState } from 'react';
import { Layout, Cpu, Target, CheckCircle2, ArrowRight, Sparkles, Zap, Shield, Rocket } from 'lucide-react';

export default function ServicesDeepDive({ onOpenAudit }) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'web',
      icon: Layout,
      title: 'Web Design & Development',
      badge: 'PILLAR 01 · CONVERSION ARCHITECTURE',
      tagline: 'High-speed, friction-free digital storefronts engineered for maximum conversion velocity.',
      whatWeDo:
        'We design and develop custom, modern web applications and headless storefronts built from scratch for speed and sales. By replacing slow, bloated themes and fragile plugins with modern React/Next.js frameworks and ultra-clean UX hierarchies, we ensure your site operates with instantaneous responsiveness.',
      howItIncreasesSales: [
        {
          title: 'Sub-800ms Edge Load Times',
          desc: 'Every 100ms improvement in page speed lifts conversion rates by 8%. We eliminate bounce-inducing latency across mobile and desktop.'
        },
        {
          title: 'Zero-Friction Checkout & Micro-Commitments',
          desc: 'One-click wallet payments (Apple Pay, Google Pay, Shop Pay) and frictionless form design that captures impulsive buyers before hesitation sets in.'
        },
        {
          title: 'Psychological Visual Hierarchy',
          desc: 'Strategic typography, directional cues, social proof placements, and sticky action triggers that guide attention directly to your checkout CTA.'
        }
      ],
      deliverables: [
        'Complete bespoke Figma UI/UX system (Desktop, Tablet, Mobile)',
        'Modern Jamstack/React/Next.js frontend development with 98+ Lighthouse score',
        'Conversion-Rate-Optimized copywriting and headline engineering on every page',
        'Headless CMS integration (Sanity, Shopify, Webflow, or WordPress)',
        'Server-Side analytics & behavioral heatmapping (GA4, PostHog, Hotjar)',
        'Full Antigravity kinetic animations, micro-interactions, and glassmorphism styling'
      ]
    },
    {
      id: 'automation',
      icon: Cpu,
      title: 'AI & Revenue Automation',
      badge: 'PILLAR 02 · AUTONOMOUS OPERATIONS',
      tagline: 'Self-orchestrating sales workflows, instant inbound engagement, and zero payroll bloat.',
      whatWeDo:
        'We construct an intelligent autonomous operating system for your business. We connect your advertising, website forms, CRM, and communication channels using state-of-the-art AI agents and deterministic API webhooks, ensuring no lead falls through the cracks and repetitive tasks are fully automated.',
      howItIncreasesSales: [
        {
          title: 'Under 45-Second Inbound Lead Engagement',
          desc: 'Leads contacted within 60 seconds are 391% more likely to convert than those contacted after 30 minutes. Our AI agents qualify and book calls instantly.'
        },
        {
          title: 'Automated Lifecycle Recovery Workflows',
          desc: 'Hyper-personalized SMS and email sequences recover up to 42% of abandoned carts, failed checkouts, and dormant subscriptions on autopilot.'
        },
        {
          title: '30+ Hours Reclaimed Weekly per Rep',
          desc: 'By eliminating manual CRM data entry, calendar scheduling, and invoice follow-ups, your team focuses 100% of their energy on closing deals.'
        }
      ],
      deliverables: [
        'End-to-end CRM architecture setup & optimization (HubSpot, GoHighLevel, Salesforce, Klaviyo)',
        'Custom multi-channel conversational AI qualification bots (Web, WhatsApp, SMS)',
        'Behavior-triggered email & SMS nurturing sequences (Welcome, Abandonment, Win-Back)',
        'Custom event-driven webhook middleware (Make.com, Zapier, Google Cloud Functions)',
        'Executive Real-Time Pipeline Dashboard tracking CAC, LTV, and sales velocity',
        'Self-healing database synchronization eliminating duplicate entries and data loss'
      ]
    },
    {
      id: 'performance',
      icon: Target,
      title: 'Performance Marketing & Scale',
      badge: 'PILLAR 03 · HIGH-YIELD ACQUISITION',
      tagline: 'Algorithmic paid ads and full-funnel acquisition tailored for bottom-line profit.',
      whatWeDo:
        'We engineer predictable, high-yield traffic acquisition engines across Meta, Google Search/Shopping, TikTok, and programmatic networks. Rather than focusing on vanity clicks, every campaign is tuned for net return on ad spend (ROAS) and lifetime customer value (LTV).',
      howItIncreasesSales: [
        {
          title: 'High-Velocity Creative Testing Engine',
          desc: 'We launch and iterate 20-40 unique creative hooks, UGC concepts, and static ads every month to consistently discover breakout winners before fatigue sets in.'
        },
        {
          title: 'Server-Side Conversion Tracking (CAPI)',
          desc: 'We bypass iOS 14+ tracking signal degradation with direct server-to-server event tracking, providing ad algorithms with complete, uncorrupted conversion data.'
        },
        {
          title: 'Dedicated Full-Funnel Congruency',
          desc: 'Every ad hook lands on a dedicated, tailored landing page built to continue that specific message, maximizing ad relevance scores and slashing CAC.'
        }
      ],
      deliverables: [
        'Full omnichannel paid ad management across Meta, Google Ads, YouTube, and TikTok',
        'Monthly high-converting creative package: UGC scripts, video edits, and static graphic assets',
        'Server-Side Conversion API (CAPI) and Google Tag Manager server container deployment',
        'High-intent audience modeling, custom lookalikes, and exclusion hierarchies',
        'Comprehensive weekly transparent ROI, ROAS, and contribution margin reporting',
        'Continuous landing page A/B split-testing (offers, hooks, price points)'
      ]
    }
  ];

  const current = services[activeTab];
  const Icon = current.icon;

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#04060b]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>Core Service Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered For Immediate Revenue Lift.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Explore the exact scope, mechanics, and deliverables powering each of our 3 core growth pillars.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {services.map((svc, idx) => {
            const TabIcon = svc.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2.5 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{svc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-white/10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                {current.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {current.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-md italic">
              "{current.tagline}"
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 pt-8">
            {/* Left 6 cols: What We Do & How It Increases Sales */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>1. What We Do</span>
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {current.whatWeDo}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>2. How It Increases Your Sales</span>
                </h4>
                <div className="space-y-4">
                  {current.howItIncreasesSales.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="font-bold text-white text-sm flex items-center gap-2">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6 cols: Deliverables Checklist */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>3. Tangible Deliverables</span>
                </h4>
                <div className="space-y-3">
                  {current.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenAudit}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-sm hover:from-cyan-300 hover:to-white transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Scope & Audit for {current.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
