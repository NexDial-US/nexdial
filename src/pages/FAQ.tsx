import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FAQProps {
  onNavigate: (page: string) => void;
}

const faqCategories = [
  {
    category: 'Getting Started',
    faqs: [
      {
        q: 'How quickly can NexDial launch my outbound program?',
        a: 'Most programs go live within 7 to 14 business days from signed agreement. The timeline depends primarily on how quickly you can provide offer documentation, scripts, and access to your CRM. We handle the rest.',
      },
      {
        q: 'Do I need to have a script ready before we start?',
        a: 'Not necessarily. If you have existing call materials, we will adapt and refine them. If you are starting from scratch, our team will work with you during onboarding to build a script aligned to your offer and buyer profile.',
      },
      {
        q: 'What information do you need from me to get started?',
        a: 'We typically need your offer documentation, ideal customer profile, target market, existing scripts or talk tracks if available, and access to your CRM or a decision on which platform we should use.',
      },
      {
        q: 'Is there a minimum contract commitment?',
        a: 'We offer both month-to-month and longer-term engagement options. Month-to-month arrangements allow you to test the model before committing. Longer commitments come with benefits we can discuss during your discovery call.',
      },
    ],
  },
  {
    category: 'Operations',
    faqs: [
      {
        q: 'Who manages the callers and how is performance monitored?',
        a: 'Each account has a dedicated team manager who conducts daily check-ins, listens to recorded calls, provides coaching, and delivers weekly performance reports to you. You have full visibility into what is happening without needing to manage it yourself.',
      },
      {
        q: 'Can I listen to call recordings?',
        a: 'Yes. All calls are recorded and accessible to you. We encourage clients to listen regularly — not to micromanage, but to understand how their brand is being represented and to provide feedback we can build into ongoing coaching.',
      },
      {
        q: 'What CRM systems do you support?',
        a: 'We have experience working with Salesforce, HubSpot, GoHighLevel, Zoho, Pipedrive, and other common platforms. If you use a proprietary system, our team will assess compatibility during onboarding.',
      },
      {
        q: 'How do you handle no-shows for scheduled appointments?',
        a: 'We implement a structured follow-up protocol for no-shows — including same-day rescheduling attempts and re-qualification to confirm the appointment remains viable before rebooking.',
      },
    ],
  },
  {
    category: 'Results & Reporting',
    faqs: [
      {
        q: 'What KPIs do you report on?',
        a: 'We report weekly on dials made, connection rate, conversations held, qualification rate, appointments set, and appointment show rate. Monthly summaries also include trend analysis and recommendations.',
      },
      {
        q: 'How long before I see results?',
        a: 'Most clients begin seeing appointments in the first two to three weeks. Full program optimization — where appointment quality and volume stabilize — typically takes 30 to 60 days as we refine the script, targeting, and caller performance based on real data.',
      },
      {
        q: 'What if results are below expectations?',
        a: 'We review performance weekly and will initiate a structured improvement plan if metrics fall below agreed targets. If after a defined remediation period performance does not improve, we will have an honest conversation about whether the program is the right fit — including an exit if that is the appropriate outcome.',
      },
    ],
  },
  {
    category: 'Working Relationship',
    faqs: [
      {
        q: 'Who will I be working with at NexDial?',
        a: 'You will have a dedicated Account Manager as your primary point of contact, a Team Manager responsible for daily caller operations, and access to a senior leadership contact for escalations or strategic discussions.',
      },
      {
        q: 'Can I scale my team up or down?',
        a: 'Yes. We accommodate ramp-ups as your program grows and reductions when market conditions or strategy change. Scale decisions are managed collaboratively with reasonable notice periods.',
      },
      {
        q: 'Do you work with businesses outside the United States?',
        a: 'Yes. We serve clients across North America, the UK, and Australia with dedicated English-language teams. Coverage for other markets varies by service type — please raise your specific geography during the discovery call.',
      },
      {
        q: 'How do you ensure callers represent our brand correctly?',
        a: 'Every caller goes through a brand-specific onboarding before their first dial. This includes your company background, product knowledge, tone guidelines, objection handling, and escalation protocols. Performance is continuously monitored against these standards.',
      },
    ],
  },
];

const FAQ: React.FC<FAQProps> = ({ onNavigate }) => {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
          <div className="section-label mx-auto">Frequently Asked Questions</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight">
            Answers Before the
            <span className="text-gradient block">First Conversation</span>
          </h1>
          <p className="text-[#A9B0C7] text-lg leading-relaxed">
            Straightforward answers to the questions we hear most often. No marketing spin, no evasive non-answers.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 pb-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-display font-bold mb-6 pb-3 border-b border-white/[0.08]">
                  {cat.category}
                </h2>
                <div className="space-y-0">
                  {cat.faqs.map((faq, i) => {
                    const key = `${cat.category}-${i}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={i} className="faq-item">
                        <button
                          className="faq-trigger"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            size={18}
                            className={`text-[#A9B0C7] flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00B8FF]' : ''}`}
                          />
                        </button>
                        <div className={`faq-content ${isOpen ? 'open' : ''}`}>
                          <p className="text-[#A9B0C7] text-base leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="glass-card p-8 text-center">
              <h2 className="text-2xl font-display font-bold mb-3">Still have questions?</h2>
              <p className="text-[#A9B0C7] mb-6">
                The best way to get a direct answer is a brief discovery call. No commitment, no sales pressure — just a genuine conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => navigate('book')} className="btn-primary">
                  Book a Discovery Call
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => navigate('contact')} className="btn-secondary">
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

export default FAQ;
