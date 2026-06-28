import React from 'react';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';

interface InsightsProps {
  onNavigate: (page: string) => void;
}

const articles = [
  {
    category: 'Outbound Sales',
    title: 'Why Cold Calling Still Works in 2025 — And Why Most Teams Do It Wrong',
    excerpt: 'Despite predictions of its decline, outbound calling consistently outperforms most digital channels for high-ticket B2B sales. The issue is almost never the channel — it is the execution.',
    readTime: '6 min read',
    date: 'May 2025',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
    featured: true,
  },
  {
    category: 'Appointment Setting',
    title: 'The Seven Mistakes That Kill Your Appointment Show Rate',
    excerpt: 'Getting a prospect to say yes is only half the job. What happens between the booking and the meeting determines whether your closer has a real conversation or an empty calendar block.',
    readTime: '5 min read',
    date: 'Apr 2025',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80',
    featured: true,
  },
  {
    category: 'Outsourcing',
    title: "What to Look for When Hiring an Outbound Sales BPO (And What to Avoid)",
    excerpt: 'Not all outsourcing relationships are built the same. Here is what separates a productive external sales team from one that burns your budget and your brand reputation simultaneously.',
    readTime: '7 min read',
    date: 'Mar 2025',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
    featured: true,
  },
  {
    category: 'Lead Generation',
    title: 'Building a Prospect List That Actually Converts',
    excerpt: 'The quality of your outbound results is determined before the first dial. List building is a strategic exercise, not a data entry task — and most teams treat it exactly backwards.',
    readTime: '5 min read',
    date: 'Feb 2025',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
  },
  {
    category: 'CRM Management',
    title: 'CRM Hygiene Is a Revenue Decision, Not an Admin Task',
    excerpt: 'A well-maintained CRM is one of the most underrated revenue drivers a sales organization can have. Here is how to think about pipeline data differently.',
    readTime: '4 min read',
    date: 'Jan 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    category: 'Sales Development',
    title: 'SDR vs. BDR: Understanding the Distinction and When Each Matters',
    excerpt: 'The difference between a Sales Development Representative and a Business Development Representative is more than a title. Here is when each role is the right investment.',
    readTime: '5 min read',
    date: 'Dec 2024',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
  },
];

const Insights: React.FC<InsightsProps> = ({ onNavigate }) => {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container-xl relative z-10">
          <div className="max-w-2xl">
            <div className="section-label">Insights</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight">
              Perspectives on
              <span className="text-gradient block">Outbound Sales</span>
            </h1>
            <p className="text-[#A9B0C7] text-lg leading-relaxed">
              Practical thinking on cold calling, appointment setting, and building sales programs that produce consistent results — without the noise.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Large featured */}
            <div className="lg:col-span-2 group cursor-pointer" onClick={() => navigate('insights')}>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-5">
                <img
                  src={featured[0].image}
                  alt={featured[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-[#050816]/30 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="badge">{featured[0].category}</span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-3 group-hover:text-[#00B8FF] transition-colors leading-snug">
                {featured[0].title}
              </h2>
              <p className="text-[#A9B0C7] leading-relaxed text-sm mb-3">{featured[0].excerpt}</p>
              <div className="flex items-center gap-3 text-[#A9B0C7]/60 text-xs">
                <Clock size={12} />
                <span>{featured[0].readTime}</span>
                <span>·</span>
                <span>{featured[0].date}</span>
              </div>
            </div>

            {/* Stack of two */}
            <div className="flex flex-col gap-6">
              {featured.slice(1).map((art) => (
                <div key={art.title} className="group cursor-pointer flex gap-4" onClick={() => navigate('insights')}>
                  <div className="relative w-28 flex-shrink-0 rounded-xl overflow-hidden aspect-square">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[#050816]/40" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="badge text-xs mb-2 inline-block">{art.category}</span>
                      <h3 className="text-white text-sm font-display font-semibold leading-snug group-hover:text-[#00B8FF] transition-colors">
                        {art.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-[#A9B0C7]/60 text-xs mt-2">
                      <Clock size={11} />
                      <span>{art.readTime}</span>
                      <span>·</span>
                      <span>{art.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More articles */}
          {rest.length > 0 && (
            <>
              <h2 className="text-xl font-display font-bold mb-6 pb-3 border-b border-white/[0.08]">More Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {rest.map((art) => (
                  <div key={art.title} className="group cursor-pointer" onClick={() => navigate('insights')}>
                    <div className="relative rounded-xl overflow-hidden aspect-video mb-4">
                      <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="badge text-xs">{art.category}</span>
                      </div>
                    </div>
                    <h3 className="text-white font-display font-semibold text-sm leading-snug mb-2 group-hover:text-[#00B8FF] transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-[#A9B0C7] text-xs leading-relaxed mb-3 line-clamp-2">{art.excerpt}</p>
                    <div className="flex items-center gap-2 text-[#A9B0C7]/60 text-xs">
                      <Clock size={11} />
                      <span>{art.readTime}</span>
                      <span>·</span>
                      <span>{art.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 border-t border-white/[0.06] bg-[#080d1f]/40">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label mx-auto">Stay Informed</div>
            <h2 className="text-3xl font-display font-bold mb-4">
              Practical Outbound Insights
              <span className="text-gradient block">Delivered Monthly</span>
            </h2>
            <p className="text-[#A9B0C7] mb-8">
              One email per month. No filler, no promotions — just actionable thinking on building and running effective outbound sales programs.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="form-input flex-1"
                required
              />
              <button type="submit" className="btn-primary flex-shrink-0">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-[#A9B0C7]/40 text-xs mt-4">Unsubscribe anytime. No spam.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Insights;
