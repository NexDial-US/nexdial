import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, Phone, Calendar, Users, BarChart3, CheckCircle, ChevronRight,
  Target, Zap, Shield, TrendingUp, Globe, HeadphonesIcon, Star, Play, ChevronDown
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const useIntersection = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const services = [
  {
    icon: <Phone size={22} />,
    title: 'Cold Calling',
    desc: 'Trained callers who represent your brand with confidence, precision, and consistency across every conversation.',
  },
  {
    icon: <Calendar size={22} />,
    title: 'Appointment Setting',
    desc: 'We identify, qualify, and schedule high-intent prospects directly onto your calendar — ready to close.',
  },
  {
    icon: <Target size={22} />,
    title: 'Lead Qualification',
    desc: 'Rigorous discovery processes that separate genuine buying intent from casual interest before it reaches your team.',
  },
  {
    icon: <HeadphonesIcon size={22} />,
    title: 'Customer Support',
    desc: 'Professional support teams that protect customer relationships and uphold the reputation you have built.',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'CRM Management',
    desc: 'Structured data entry, pipeline hygiene, and follow-up management so nothing falls through the cracks.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Sales Development',
    desc: 'Systematic outbound programs that expand your pipeline across new markets and untapped verticals.',
  },
  {
    icon: <Users size={22} />,
    title: 'Business Development',
    desc: 'Strategic outreach that opens doors, builds partnerships, and accelerates your market presence.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Virtual Assistants',
    desc: 'Dedicated remote professionals who handle operations, scheduling, and communications with executive precision.',
  },
];

const industries = [
  'SaaS & Technology', 'Real Estate', 'Financial Services', 'Healthcare',
  'Insurance', 'Logistics & Freight', 'Legal Services', 'E-Commerce',
  'Consulting', 'Renewable Energy', 'Mortgage & Lending', 'Staffing',
];

const reasons = [
  {
    icon: <Shield size={20} />,
    title: 'Brand-Safe Representation',
    desc: "Every caller is trained to speak as if they're a member of your in-house team — not a vendor.",
  },
  {
    icon: <Globe size={20} />,
    title: 'Global Coverage',
    desc: 'Multi-timezone operations that keep your pipeline active long after your internal team has signed off.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Measurable Output',
    desc: 'Clear KPIs, transparent reporting, and weekly reviews so you always know exactly what you are getting.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Fast Ramp Time',
    desc: 'Operational within days. No lengthy hiring cycles, no onboarding overhead, no buried HR costs.',
  },
  {
    icon: <Users size={20} />,
    title: 'Dedicated Teams',
    desc: 'Your reps work exclusively on your account — full focus, no divided attention across multiple clients.',
  },
  {
    icon: <CheckCircle size={20} />,
    title: 'Quality-First Culture',
    desc: 'Call monitoring, coaching, and performance management are built into every engagement we run.',
  },
];

const steps = [
  { number: '01', title: 'Discovery Call', desc: 'We learn your offer, target market, ideal customer profile, and what a qualified appointment looks like for your team.' },
  { number: '02', title: 'Team Build', desc: 'We recruit, vet, and train callers specifically for your product, industry, and buyer persona.' },
  { number: '03', title: 'Campaign Launch', desc: 'Your outbound program goes live with full infrastructure — dialing, scripts, CRM, and reporting in place from day one.' },
  { number: '04', title: 'Optimize & Scale', desc: 'Weekly reviews, A/B testing, and performance coaching continuously improve results as we grow your program.' },
];

const faqs = [
  { q: 'How quickly can you start?', a: 'Most clients are live within 7 to 14 business days. The timeline depends on your onboarding responsiveness and the complexity of your offer.' },
  { q: 'Do you work with businesses outside the US?', a: 'Yes. We serve clients across North America, the UK, Australia, and other English-speaking markets. Coverage varies by service.' },
  { q: 'What makes NexDial different from other BPOs?', a: 'We operate as an extension of your team, not a call factory. Our callers are trained on your brand, your script, and your standards — and held to them daily.' },
  { q: 'Can I start with a small team and grow?', a: 'Absolutely. Many clients start with one or two dedicated reps and expand as results confirm the model. We are built to scale with you.' },
  { q: 'How is performance measured?', a: 'We track dials, connection rates, conversations, qualified appointments, and pipeline value. You receive structured weekly reporting and a dedicated point of contact.' },
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesSection = useIntersection();
  const industriesSection = useIntersection();
  const reasonsSection = useIntersection();
  const processSection = useIntersection();
  const faqSection = useIntersection();
  const ctaSection = useIntersection();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-dark">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#1D6EFF]/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00B8FF]/[0.03] blur-[100px] pointer-events-none" />

        <div className="container-xl relative z-10 pt-28 pb-20 md:pt-36 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              <div className="section-label animate-[fadeUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
                <span className="glow-dot inline-block" />
                Remote Sales & Appointment Setting
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-display font-bold leading-[1.08] tracking-[-0.03em] mb-6 animate-[fadeUp_0.6s_ease-out_0.2s_forwards] opacity-0"
              >
                We Build
                <span className="block text-gradient">Sales Teams.</span>
                <span className="text-white/90">You Close Deals.</span>
              </h1>

              <p className="text-lg text-[#A9B0C7] leading-relaxed max-w-md mb-8 animate-[fadeUp_0.6s_ease-out_0.35s_forwards] opacity-0">
                Dedicated remote sales professionals who generate qualified appointments
                so your closers can focus on what they do best — closing.
              </p>

              <div className="flex flex-wrap gap-4 mb-12 animate-[fadeUp_0.6s_ease-out_0.45s_forwards] opacity-0">
                <button onClick={() => navigate('book')} className="btn-primary">
                  Book a Discovery Call
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => navigate('services')} className="btn-secondary">
                  See Our Services
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-5 animate-[fadeUp_0.6s_ease-out_0.55s_forwards] opacity-0">
                {[
                  { icon: <CheckCircle size={14} />, text: 'No long-term contracts' },
                  { icon: <CheckCircle size={14} />, text: 'Dedicated account manager' },
                  { icon: <CheckCircle size={14} />, text: 'Operational in 2 weeks' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-[#A9B0C7]">
                    <span className="text-[#00B8FF]">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Live indicator */}
              <div className="mt-6 animate-[fadeUp_0.6s_ease-out_0.65s_forwards] opacity-0">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B8FF] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B8FF]" />
                  </span>
                  <span className="text-[#A9B0C7] text-xs font-medium">Programs active across North America, UK & Australia</span>
                </div>
              </div>
            </div>

            {/* Right — Hero image + stats */}
            <div className="relative animate-[fadeIn_0.8s_ease-out_0.3s_forwards] opacity-0">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Professional sales team at work"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                <div className="absolute inset-0 border border-white/[0.08] rounded-2xl" />
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-5 -left-5 glass rounded-xl p-4 shadow-card">
                <div className="stat-number text-2xl mb-0.5">500+</div>
                <p className="text-[#A9B0C7] text-xs font-medium">Appointments Set Monthly</p>
              </div>

              <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-2 mb-1">
                  <Star size={14} className="text-[#00B8FF] fill-[#00B8FF]" />
                  <span className="text-white font-bold text-sm">4.9 / 5</span>
                </div>
                <p className="text-[#A9B0C7] text-xs">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
            <ChevronDown size={18} className="text-white" />
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="border-y border-white/[0.06] bg-[#080d1f]/60">
        <div className="container-xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-white/[0.06]">
            {[
              { value: '500+', label: 'Appointments / Month' },
              { value: '8+', label: 'Active Industries' },
              { value: '24/7', label: 'Operational Coverage' },
              { value: '14 Days', label: 'Average Launch Time' },
            ].map((stat) => (
              <div key={stat.value} className="text-center px-6">
                <div className="stat-number text-3xl md:text-4xl mb-1">{stat.value}</div>
                <p className="text-[#A9B0C7] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 md:py-32" ref={servicesSection.ref}>
        <div className="container-xl">
          <div className={`text-center mb-14 transition-all duration-700 ${servicesSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="section-label mx-auto">What We Do</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Every Service Built Around
              <span className="text-gradient block">Your Revenue Goals</span>
            </h2>
            <p className="text-[#A9B0C7] max-w-xl mx-auto text-lg">
              From the first dial to the booked meeting, we handle every stage of the outbound process with the care and precision your business deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`service-card transition-all duration-700 ${servicesSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => navigate('services')}
              >
                <div className="icon-box mb-4" aria-hidden="true">
                  <span className="text-[#1D6EFF]">{service.icon}</span>
                </div>
                <h3 className="text-white font-display font-semibold text-base mb-2">{service.title}</h3>
                <p className="text-[#A9B0C7] text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[#00B8FF] text-xs font-semibold">
                  Learn more <ChevronRight size={12} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={() => navigate('services')} className="btn-secondary">
              Explore All Services
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-20 border-y border-white/[0.06] bg-[#080d1f]/40" ref={industriesSection.ref}>
        <div className="container-xl">
          <div className={`text-center mb-10 transition-all duration-700 ${industriesSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="section-label mx-auto">Industries We Serve</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Deep Expertise Across
              <span className="text-gradient"> 12+ Sectors</span>
            </h2>
            <p className="text-[#A9B0C7] max-w-lg mx-auto">
              We have active programs across diverse verticals, each requiring different buyer conversations — and we adapt accordingly.
            </p>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-3 transition-all duration-700 ${industriesSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '200ms' }}
          >
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => navigate('industries')}
                className="industry-pill"
              >
                {ind}
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button onClick={() => navigate('industries')} className="btn-ghost">
              View All Industries <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Why NexDial ── */}
      <section className="py-24 md:py-32" ref={reasonsSection.ref}>
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className={`transition-all duration-700 ${reasonsSection.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
              <div className="section-label">Why NexDial</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                The Standard Other Outsourcing
                <span className="text-gradient block">Partners Don't Meet</span>
              </h2>
              <p className="text-[#A9B0C7] text-lg leading-relaxed mb-8">
                Most outsourcing arrangements fail because the vendor treats your company as one of many accounts. At NexDial, your program runs on dedicated resources, real accountability, and results that show up in your pipeline.
              </p>

              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80"
                  alt="Professional business meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full glass flex items-center justify-center cursor-pointer hover:bg-white/[0.08] transition-all duration-200 group">
                    <Play size={18} className="text-white ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            <div className={`grid grid-cols-1 gap-4 transition-all duration-700 ${reasonsSection.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`} style={{ transitionDelay: '200ms' }}>
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className="glass-card p-5 flex gap-4"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="icon-box flex-shrink-0">
                    <span className="text-[#1D6EFF]">{r.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold text-sm mb-1">{r.title}</h3>
                    <p className="text-[#A9B0C7] text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-24 border-t border-white/[0.06] bg-[#080d1f]/40" ref={processSection.ref}>
        <div className="container-xl">
          <div className={`text-center mb-14 transition-all duration-700 ${processSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="section-label mx-auto">How It Works</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              From Signed Agreement
              <span className="text-gradient block">to Active Pipeline</span>
            </h2>
            <p className="text-[#A9B0C7] max-w-xl mx-auto text-lg">
              A structured onboarding that eliminates ambiguity and gets your program producing results quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative glass-card p-6 transition-all duration-700 ${processSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-9 -right-3 z-10">
                    <ChevronRight size={18} className="text-[#1D6EFF]/40" />
                  </div>
                )}
                <div className="step-number mb-4">{step.number}</div>
                <h3 className="text-white font-display font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-[#A9B0C7] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={() => navigate('book')} className="btn-primary">
              Start Your Engagement
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" ref={faqSection.ref}>
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${faqSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="section-label mx-auto">Common Questions</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Answers Before the
                <span className="text-gradient"> First Conversation</span>
              </h2>
              <p className="text-[#A9B0C7]">
                The questions we hear most often — answered directly and without the sales fluff.
              </p>
            </div>

            <div className={`transition-all duration-700 ${faqSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button
                    className="faq-trigger"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#A9B0C7] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#00B8FF]' : ''}`}
                    />
                  </button>
                  <div className={`faq-content ${openFaq === i ? 'open' : ''}`}>
                    <p className="text-[#A9B0C7] text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button onClick={() => navigate('faq')} className="btn-ghost">
                View All Questions <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 relative overflow-hidden" ref={ctaSection.ref}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d1f] to-[#050816]" />
        <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="container-xl relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${ctaSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="section-label mx-auto">Ready to Start</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Your Pipeline Shouldn't Wait
              <span className="text-gradient block">on a Hiring Cycle</span>
            </h2>
            <p className="text-[#A9B0C7] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a 30-minute discovery call. We will assess your market, your offer, and your growth targets — then show you exactly how NexDial would build and run your outbound program.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('book')} className="btn-primary text-base py-4 px-8">
                Book Your Discovery Call
                <ArrowRight size={18} />
              </button>
              <button onClick={() => navigate('contact')} className="btn-secondary text-base py-4 px-8">
                Send an Inquiry
              </button>
            </div>

            <p className="text-[#A9B0C7]/50 text-sm mt-6">
              No commitment required. No sales pressure. Just a direct conversation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
