import React, { useRef, useEffect, useState } from 'react';
import {
  Phone, Calendar, Target, HeadphonesIcon, BarChart3, TrendingUp,
  Users, Zap, CheckCircle, ArrowRight, ChevronRight
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    id: 'cold-calling',
    icon: <Phone size={28} />,
    title: 'Cold Calling',
    tagline: 'The first conversation done right.',
    description: 'Cold calling remains one of the highest-ROI outbound activities when executed with precision. Our callers are trained on your offer, your buyer, and your objections before making a single dial. Every call reflects your brand — not a generic script.',
    benefits: [
      'Brand-consistent caller training for every rep',
      'Targeted prospecting lists built to your ICP',
      'Real-time CRM logging with structured call notes',
      'Daily activity reporting and weekly performance reviews',
    ],
    outcomes: [
      'More qualified conversations in less time',
      'Reduced cost-per-appointment vs. in-house teams',
      'Consistent daily outreach volume regardless of season',
    ],
    industries: ['SaaS', 'Financial Services', 'Insurance', 'Real Estate', 'Logistics'],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80',
  },
  {
    id: 'appointment-setting',
    icon: <Calendar size={28} />,
    title: 'Appointment Setting',
    tagline: 'Qualified meetings, not just calls.',
    description: 'We identify prospects who match your ideal customer profile, engage them through structured multi-touch outreach, and schedule confirmed appointments directly onto your calendar. Your closers receive everything they need to open strong.',
    benefits: [
      'Multi-touch sequences across phone, voicemail, and email',
      'Qualification criteria aligned to your sales process',
      'Calendar integration with pre-call briefing notes',
      'No-show management and automated follow-up',
    ],
    outcomes: [
      'Closers spend more time selling, less time prospecting',
      'Higher show rates through professional preparation',
      'Predictable weekly meeting volume for accurate forecasting',
    ],
    industries: ['Consulting', 'Technology', 'Healthcare', 'Staffing', 'Renewable Energy'],
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=700&q=80',
  },
  {
    id: 'lead-qualification',
    icon: <Target size={28} />,
    title: 'Lead Qualification',
    tagline: 'Protect your closers from wasted conversations.',
    description: 'Not every inbound lead deserves your senior salesperson\'s time. We run structured discovery conversations that uncover budget, authority, need, and timing — then pass only the leads that genuinely match your criteria.',
    benefits: [
      'BANT and custom qualification frameworks',
      'Structured intake for inbound and outbound leads',
      'Disqualification logging with reason tracking',
      'Warm handoff protocol to your internal team',
    ],
    outcomes: [
      'Higher close rates on qualified pipeline',
      'Reduced time wasted on low-fit prospects',
      'Cleaner CRM data for accurate forecasting',
    ],
    industries: ['SaaS', 'Financial Services', 'Legal Services', 'E-Commerce', 'Mortgage'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80',
  },
  {
    id: 'customer-support',
    icon: <HeadphonesIcon size={28} />,
    title: 'Customer Support',
    tagline: "Your reputation deserves professionals.",
    description: 'Customer support handled poorly destroys retention. Our support teams are trained on your product, your tone, and your escalation paths — delivering consistent, professional responses that keep customers confident in your brand.',
    benefits: [
      'Product and brand-specific onboarding for all agents',
      'Multi-channel support: phone, email, and chat',
      'Defined escalation protocols and SLA adherence',
      'Quality monitoring and regular coaching sessions',
    ],
    outcomes: [
      'Improved customer satisfaction scores',
      'Faster resolution times without increasing headcount',
      'Protected brand reputation through consistent service standards',
    ],
    industries: ['E-Commerce', 'SaaS', 'Healthcare', 'Insurance', 'Logistics'],
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=700&q=80',
  },
  {
    id: 'crm-management',
    icon: <BarChart3 size={28} />,
    title: 'CRM Management',
    tagline: "Data integrity is a revenue decision.",
    description: 'A CRM full of stale data, missed follow-ups, and incomplete contact records is a liability. Our CRM specialists maintain your pipeline with structured entries, accurate stage tracking, and proactive task management so your team has full visibility.',
    benefits: [
      'Daily data entry and contact enrichment',
      'Pipeline hygiene and stage progression monitoring',
      'Follow-up task management and reminder systems',
      'Reporting configuration and dashboard maintenance',
    ],
    outcomes: [
      'Accurate pipeline data for confident sales forecasting',
      'More follow-ups completed on time',
      'Reduced revenue leakage from overlooked opportunities',
    ],
    industries: ['All Industries', 'SaaS', 'Real Estate', 'Financial Services', 'Consulting'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
  },
  {
    id: 'sales-development',
    icon: <TrendingUp size={28} />,
    title: 'Sales Development',
    tagline: 'Systematic outbound at scale.',
    description: 'Sales Development Representatives are the engine behind predictable pipeline growth. We build, train, and manage dedicated SDR teams that run structured outbound programs across your target market — consistently feeding qualified opportunities into your closing pipeline.',
    benefits: [
      'Dedicated SDRs focused exclusively on your account',
      'Sequence design, A/B testing, and continuous refinement',
      'Outbound channel management: phone, email, LinkedIn',
      'Weekly pipeline reviews with sales leadership',
    ],
    outcomes: [
      'Predictable pipeline growth with consistent volume',
      'Lower cost-per-opportunity than a fully internal SDR team',
      'Faster market penetration into new verticals',
    ],
    industries: ['SaaS', 'Technology', 'Financial Services', 'Consulting', 'Manufacturing'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80',
  },
  {
    id: 'business-development',
    icon: <Users size={28} />,
    title: 'Business Development',
    tagline: "Open doors that matter.",
    description: 'Business development is about building strategic relationships, not just booking calls. Our BDRs conduct research-driven outreach to decision-makers, position your company effectively, and open conversations that lead to partnerships and long-term contracts.',
    benefits: [
      'Executive-level outreach and relationship building',
      'Account-based strategies for high-value targets',
      'Partnership and referral channel development',
      'Detailed activity tracking and outcome reporting',
    ],
    outcomes: [
      'Access to decision-makers that are otherwise hard to reach',
      'Expanded market presence in new geographies and segments',
      'Strategic partnerships that compound over time',
    ],
    industries: ['Technology', 'Consulting', 'Manufacturing', 'Logistics', 'Professional Services'],
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80',
  },
  {
    id: 'virtual-assistants',
    icon: <Zap size={28} />,
    title: 'Virtual Assistants',
    tagline: 'Executive-level support, remote.',
    description: 'Our Virtual Assistants are experienced remote professionals who handle the operational tasks that consume your team\'s productive hours — scheduling, research, inbox management, and administrative workflows — so your people can concentrate on high-value work.',
    benefits: [
      'Dedicated VA assigned to your account full-time',
      'Calendar and inbox management with defined protocols',
      'Research, data gathering, and report preparation',
      'Process documentation and workflow optimization',
    ],
    outcomes: [
      'Hours recovered weekly for your senior team',
      'Lower overhead than a full-time administrative hire',
      'Consistent execution of routine tasks without supervision',
    ],
    industries: ['Executives', 'Consulting', 'Real Estate', 'E-Commerce', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
  },
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [activeService, setActiveService] = useState(services[0]);
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
            <div className="section-label">Our Services</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              The Outbound Engine
              <span className="text-gradient block">Your Business Needs</span>
            </h1>
            <p className="text-[#A9B0C7] text-lg leading-relaxed max-w-2xl">
              Eight services. One objective. Build qualified pipeline so your sales team can close more business, faster.
            </p>
          </div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="py-4 sticky top-16 z-30 bg-[#050816]/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="container-xl">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveService(s)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeService.id === s.id
                    ? 'bg-[#1D6EFF] text-white shadow-brand-sm'
                    : 'text-[#A9B0C7] hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Detail */}
      <section className="py-20">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Content */}
            <div>
              <div className="icon-box mb-6 w-14 h-14">
                <span className="text-[#1D6EFF]">{activeService.icon}</span>
              </div>
              <p className="text-[#00B8FF] text-sm font-semibold mb-2 tracking-wide">{activeService.tagline}</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">{activeService.title}</h2>
              <p className="text-[#A9B0C7] text-lg leading-relaxed mb-8">{activeService.description}</p>

              <div className="mb-8">
                <h3 className="text-white font-display font-semibold text-sm mb-4 uppercase tracking-widest opacity-60">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {activeService.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#1D6EFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#A9B0C7] text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-white font-display font-semibold text-sm mb-4 uppercase tracking-widest opacity-60">
                  Business Outcomes
                </h3>
                <ul className="space-y-3">
                  {activeService.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span className="text-[#00B8FF] font-bold text-xs mt-1 flex-shrink-0">→</span>
                      <span className="text-[#A9B0C7] text-base">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-white font-display font-semibold text-sm mb-3 uppercase tracking-widest opacity-60">
                  Industries Served
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeService.industries.map((ind) => (
                    <span key={ind} className="industry-pill text-xs">{ind}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button onClick={() => navigate('book')} className="btn-primary">
                  Start This Service
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => navigate('contact')} className="btn-secondary">
                  Ask a Question
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sticky top-32">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-white/[0.08] rounded-2xl" />

              <div className="absolute bottom-5 left-5 right-5 glass rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="glow-dot" />
                  <span className="text-white text-xs font-semibold">Program Ready</span>
                </div>
                <p className="text-[#A9B0C7] text-xs">
                  This service can be launched within 14 business days of agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 border-t border-white/[0.06] bg-[#080d1f]/40">
        <div className="container-xl">
          <h2 className="text-2xl font-display font-bold mb-8">All Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveService(s);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`service-card text-left ${activeService.id === s.id ? 'border-[#1D6EFF]/40 bg-[rgba(29,110,255,0.1)]' : ''}`}
              >
                <div className="icon-box mb-4">
                  <span className="text-[#1D6EFF]">{s.icon}</span>
                </div>
                <h3 className="text-white font-display font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-[#A9B0C7] text-xs leading-relaxed line-clamp-2">{s.tagline}</p>
                <div className="mt-3 flex items-center gap-1 text-[#00B8FF] text-xs font-semibold">
                  View details <ChevronRight size={11} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-xl">
          <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Not sure which service fits?
            </h2>
            <p className="text-[#A9B0C7] text-lg mb-8">
              Book a 30-minute call and we will map the right outbound program to your revenue goals.
            </p>
            <button onClick={() => navigate('book')} className="btn-primary text-base py-3.5 px-8">
              Book a Discovery Call
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
