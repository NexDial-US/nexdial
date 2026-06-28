import React from 'react';
import { ArrowRight, Target, Eye, Heart, Zap, Globe, Shield } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const values = [
  {
    icon: <Target size={20} />,
    title: 'Results Over Activity',
    desc: 'We measure ourselves by the outcomes we deliver — not the hours logged or calls placed. Pipelines grow, or we improve the program.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Represent With Integrity',
    desc: 'Every conversation carried out on behalf of a client reflects two brands. We protect both with the same standards we would apply to our own name.',
  },
  {
    icon: <Heart size={20} />,
    title: 'People Are the Product',
    desc: 'Our callers, managers, and support staff are the service. We invest in them continuously through training, coaching, and career development.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Move with Urgency',
    desc: 'Slow ramp times and bureaucratic delays cost clients revenue. We build programs fast, iterate quickly, and never let process stand in the way of results.',
  },
  {
    icon: <Globe size={20} />,
    title: 'Think Long Term',
    desc: 'The best client relationships compound over time. We build programs designed to scale, not campaigns designed to impress on paper for thirty days.',
  },
  {
    icon: <Eye size={20} />,
    title: 'Radical Transparency',
    desc: "We report every metric, including the uncomfortable ones. If something isn't working, you will hear it from us before you notice it in your pipeline.",
  },
];

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container-xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">About NexDial</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Built by People Who
                <span className="text-gradient block">Know Sales</span>
              </h1>
              <p className="text-[#A9B0C7] text-lg leading-relaxed mb-6">
                NexDial was founded on a straightforward premise: most businesses struggle with outbound sales not because their offer lacks merit, but because they lack the people and infrastructure to execute at scale.
              </p>
              <p className="text-[#A9B0C7] text-lg leading-relaxed">
                We exist to close that gap — by building dedicated remote sales teams that generate qualified appointments, protect your brand in every conversation, and deliver measurable results from the first month of operation.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80"
                  alt="NexDial team at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 border border-white/[0.08] rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10">
              <div className="icon-box mb-5">
                <Target size={22} className="text-[#1D6EFF]" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-4">Mission</h2>
              <p className="text-[#A9B0C7] text-lg leading-relaxed">
                To provide businesses with the outbound sales infrastructure they need to grow their pipeline without the overhead, delays, and risk of building an internal team from scratch.
              </p>
            </div>

            <div className="glass-card p-10">
              <div className="icon-box mb-5">
                <Eye size={22} className="text-[#1D6EFF]" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-4">Vision</h2>
              <p className="text-[#A9B0C7] text-lg leading-relaxed">
                To become the most trusted remote sales team provider for growing businesses — known for the quality of our people, the rigour of our process, and the consistency of our results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#080d1f]/40 border-y border-white/[0.06]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="section-label mx-auto">Our Values</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The Principles We
              <span className="text-gradient"> Operate By</span>
            </h2>
            <p className="text-[#A9B0C7] max-w-xl mx-auto">
              Values are only meaningful when they inform daily decisions. These are ours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-6 flex gap-4">
                <div className="icon-box flex-shrink-0">
                  <span className="text-[#1D6EFF]">{v.icon}</span>
                </div>
                <div>
                  <h3 className="text-white font-display font-semibold text-sm mb-2">{v.title}</h3>
                  <p className="text-[#A9B0C7] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                  alt="NexDial team culture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent" />
              </div>
            </div>

            <div>
              <div className="section-label">Culture</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">
                A Remote Team
                <span className="text-gradient block">That Performs Like an Office</span>
              </h2>
              <p className="text-[#A9B0C7] text-lg leading-relaxed mb-5">
                NexDial operates remotely by design — not by default. Our culture is built around structured accountability, clear communication channels, and a genuine belief that professional growth and flexible work are not in conflict.
              </p>
              <p className="text-[#A9B0C7] text-lg leading-relaxed mb-8">
                We hire people who are self-directed, coachable, and take pride in representing client brands with the same care they would bring to their own. And we invest in them — through training, mentorship, and real opportunities for advancement.
              </p>
              <button onClick={() => navigate('careers')} className="btn-primary">
                Join the Team
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container-xl">
          <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to work with a team that takes ownership?
              </h2>
              <p className="text-[#A9B0C7] mb-8 text-lg">
                Book a discovery call and see how NexDial approaches your program differently.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => navigate('book')} className="btn-primary text-base py-3.5 px-8">
                  Book a Discovery Call
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => navigate('contact')} className="btn-secondary text-base py-3.5 px-8">
                  Send an Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
