import React, { useState } from 'react';
import { ArrowRight, Building2, Cpu, Heart, Shield, Truck, Scale, ShoppingBag, Briefcase, Sun, Home, DollarSign, Users } from 'lucide-react';

interface IndustriesProps {
  onNavigate: (page: string) => void;
}

const industries = [
  {
    icon: <Cpu size={24} />,
    name: 'SaaS & Technology',
    challenge: 'Long sales cycles and technical buyers who vet vendors carefully before committing to a demo.',
    approach: 'We craft concise, value-first messaging that respects the buyer\'s technical knowledge and connects your product to specific workflow problems they already have.',
    services: ['Appointment Setting', 'Sales Development', 'Lead Qualification'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
  {
    icon: <Home size={24} />,
    name: 'Real Estate',
    challenge: 'High volume of unqualified leads and buyers who make decisions based on timing and trust.',
    approach: 'Conversational, relationship-focused outreach that establishes credibility and identifies buyers and sellers who are actively ready — not just curious.',
    services: ['Cold Calling', 'Appointment Setting', 'CRM Management'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    icon: <DollarSign size={24} />,
    name: 'Financial Services',
    challenge: 'Strict compliance environments and educated prospects who default to skepticism with outbound calls.',
    approach: 'Professional, compliance-aware communication that leads with value, builds trust over multiple touches, and earns the appointment rather than demanding it.',
    services: ['Cold Calling', 'Lead Qualification', 'Appointment Setting'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
  },
  {
    icon: <Heart size={24} />,
    name: 'Healthcare',
    challenge: 'Decision-makers are protected, time-constrained, and highly skeptical of outsourced communication.',
    approach: 'Respectful, precise outreach with clear value propositions tailored to clinical or administrative outcomes that matter most to healthcare decision-makers.',
    services: ['Appointment Setting', 'Customer Support', 'Lead Qualification'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
  {
    icon: <Shield size={24} />,
    name: 'Insurance',
    challenge: 'High churn on cold outreach and buyers who have been burned by poor-fit coverage in the past.',
    approach: 'Empathetic discovery calls that uncover genuine coverage gaps before presenting any solution — positioning your agents as advisors, not pushers.',
    services: ['Cold Calling', 'Lead Qualification', 'Customer Support'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
  {
    icon: <Truck size={24} />,
    name: 'Logistics & Freight',
    challenge: 'Procurement decisions are driven by reliability metrics and relationships built over time.',
    approach: 'Outreach focused on operational pain points — delays, capacity issues, cost pressures — and a consultative tone that positions your service as a strategic solution, not a commodity.',
    services: ['Cold Calling', 'Business Development', 'Sales Development'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    icon: <Scale size={24} />,
    name: 'Legal Services',
    challenge: 'Referral-driven culture and senior decision-makers who respond poorly to generic outreach.',
    approach: 'Research-driven, personalized outreach that demonstrates understanding of their practice area and connects your service to specific client outcomes or operational needs.',
    services: ['Business Development', 'Virtual Assistants', 'Lead Qualification'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  },
  {
    icon: <ShoppingBag size={24} />,
    name: 'E-Commerce',
    challenge: 'Customer acquisition costs are rising while conversion rates are under constant pressure.',
    approach: 'Retention-focused outreach to lapsed customers and targeted acquisition campaigns for high-value buyer segments — with measurable revenue attribution built in.',
    services: ['Customer Support', 'CRM Management', 'Virtual Assistants'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  },
  {
    icon: <Briefcase size={24} />,
    name: 'Consulting',
    challenge: 'Selling high-value engagements requires multi-touch outreach and strong positioning before the first meeting.',
    approach: 'Thought-leadership-aligned outreach that establishes credibility before the ask, targeting decision-makers at the right organizational level with the right message.',
    services: ['Appointment Setting', 'Business Development', 'Sales Development'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    icon: <Sun size={24} />,
    name: 'Renewable Energy',
    challenge: 'Long decision timelines and a competitive market where differentiation requires a consultative approach.',
    approach: 'Education-first outreach that builds awareness of financial and operational benefits before moving to a sales conversation — creating informed, motivated buyers.',
    services: ['Cold Calling', 'Appointment Setting', 'Sales Development'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  },
  {
    icon: <Building2 size={24} />,
    name: 'Mortgage & Lending',
    challenge: 'Rate-sensitive market where buyers compare multiple lenders and loyalty is earned, not assumed.',
    approach: 'Speed-focused outreach that engages inbound leads within minutes and outbound prospects with compelling rate and service comparisons that create urgency without pressure.',
    services: ['Cold Calling', 'Lead Qualification', 'CRM Management'],
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&q=80',
  },
  {
    icon: <Users size={24} />,
    name: 'Staffing & Recruiting',
    challenge: 'A relationship-driven industry where clients choose partners based on trust, speed, and candidate quality.',
    approach: 'Consistent outreach to hiring managers and HR leaders, focusing on the staffing pain points they face right now — not a generic pitch about your firm\'s capabilities.',
    services: ['Cold Calling', 'Business Development', 'Virtual Assistants'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
];

const Industries: React.FC<IndustriesProps> = ({ onNavigate }) => {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [active, setActive] = useState(industries[0]);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
            <div className="section-label">Industries We Serve</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Built for Your Market.
              <span className="text-gradient block">Not for Everyone.</span>
            </h1>
            <p className="text-[#A9B0C7] text-lg leading-relaxed max-w-2xl">
              Every industry has different buyers, different objections, and different expectations. We adapt our approach to match your market — not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Detail */}
      <section className="py-16">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Industry List */}
            <div className="lg:col-span-1">
              <div className="glass rounded-2xl overflow-hidden sticky top-28">
                <div className="p-4 border-b border-white/[0.06]">
                  <p className="text-[#A9B0C7] text-xs font-semibold uppercase tracking-widest">Select Industry</p>
                </div>
                <div className="max-h-[600px] overflow-y-auto">
                  {industries.map((ind) => (
                    <button
                      key={ind.name}
                      onClick={() => setActive(ind)}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all duration-150 border-b border-white/[0.04] ${
                        active.name === ind.name
                          ? 'bg-[#1D6EFF]/10 text-white border-l-2 border-l-[#1D6EFF]'
                          : 'text-[#A9B0C7] hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      <span className={active.name === ind.name ? 'text-[#1D6EFF]' : 'text-[#A9B0C7]/60'}>
                        {ind.icon}
                      </span>
                      <span className="text-sm font-medium">{ind.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden aspect-video mb-8">
                <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 border border-white/[0.08] rounded-2xl" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="icon-box">
                    <span className="text-[#1D6EFF]">{active.icon}</span>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">{active.name}</h2>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#A9B0C7]/60 mb-3">The Challenge</h3>
                  <p className="text-[#A9B0C7] leading-relaxed">{active.challenge}</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#A9B0C7]/60 mb-3">Our Approach</h3>
                  <p className="text-[#A9B0C7] leading-relaxed">{active.approach}</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#A9B0C7]/60 mb-3">Recommended Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {active.services.map((s) => (
                      <span key={s} className="badge">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button onClick={() => navigate('book')} className="btn-primary">
                    Start in {active.name}
                    <ArrowRight size={16} />
                  </button>
                  <button onClick={() => navigate('services')} className="btn-secondary">
                    View Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container-xl">
          <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-4">
              Don't see your industry?
            </h2>
            <p className="text-[#A9B0C7] mb-8 text-lg">
              We work across many verticals. Book a call and we will assess whether your market is a strong fit for our outbound model.
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

export default Industries;
