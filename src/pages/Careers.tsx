import React, { useState } from 'react';
import { ArrowRight, MapPin, Clock, Wifi, TrendingUp, Heart, Zap, CheckCircle, ChevronDown } from 'lucide-react';

interface CareersProps {
  onNavigate: (page: string) => void;
}

const openings = [
  {
    title: 'Outbound Sales Representative',
    type: 'Full-time',
    location: 'Remote',
    department: 'Sales',
    description: 'Conduct structured outbound calls on behalf of NexDial clients. Generate qualified appointments and accurately document all activity in the client CRM.',
    requirements: [
      'At least 1 year of outbound sales or cold calling experience',
      'Clear, professional spoken English communication',
      'Self-directed with the ability to maintain daily call volume targets',
      'Comfortable with CRM systems and structured call scripts',
      'Reliable internet connection and a quiet workspace',
    ],
  },
  {
    title: 'Appointment Setting Specialist',
    type: 'Full-time',
    location: 'Remote',
    department: 'Sales',
    description: 'Run multi-touch outreach campaigns to identify, qualify, and schedule appointments for client sales teams. Own the full top-of-funnel process.',
    requirements: [
      'Experience in appointment setting or business development',
      'Proven ability to handle objections and maintain professional persistence',
      'Organized and detail-oriented with strong documentation habits',
      'Comfortable managing a personal pipeline across multiple clients',
      'Strong written communication for email sequences',
    ],
  },
  {
    title: 'Customer Support Agent',
    type: 'Full-time',
    location: 'Remote',
    department: 'Support',
    description: 'Handle inbound customer inquiries across phone, email, and chat for client accounts. Resolve issues efficiently and represent client brands with professionalism.',
    requirements: [
      'Experience in customer service or support roles',
      'Calm, empathetic communication under pressure',
      'Ability to follow structured support protocols and escalation paths',
      'Comfortable with ticketing systems and multi-channel communication tools',
      'Consistent schedule availability during client operating hours',
    ],
  },
  {
    title: 'Sales Team Manager',
    type: 'Full-time',
    location: 'Remote',
    department: 'Operations',
    description: 'Lead and develop a team of outbound sales representatives. Own performance metrics, coaching cadences, and client reporting for assigned accounts.',
    requirements: [
      'Minimum 3 years of outbound sales management experience',
      'Proven track record of developing rep performance through structured coaching',
      'Strong analytical skills and comfort with KPI-based management',
      'Experience managing remote teams across multiple time zones',
      'Excellent written and verbal communication for client-facing reporting',
    ],
  },
  {
    title: 'Virtual Assistant',
    type: 'Full-time / Part-time',
    location: 'Remote',
    department: 'Operations',
    description: 'Provide professional administrative and operational support to NexDial clients. Manage schedules, communications, research tasks, and workflow coordination.',
    requirements: [
      'Experience in an executive assistant or virtual assistant role',
      'Exceptional organizational skills and attention to detail',
      'Proficiency in Google Workspace and common productivity tools',
      'Proactive communication and ability to anticipate client needs',
      'Discretion with confidential business information',
    ],
  },
];

const benefits = [
  { icon: <Wifi size={18} />, title: '100% Remote', desc: 'Work from wherever you are most productive.' },
  { icon: <TrendingUp size={18} />, title: 'Performance Bonuses', desc: 'Consistent performance is recognized and rewarded.' },
  { icon: <Heart size={18} />, title: 'Supportive Culture', desc: 'A team that invests in your growth, not just your output.' },
  { icon: <Zap size={18} />, title: 'Fast Advancement', desc: 'Clear paths from rep to lead to manager within the organization.' },
  { icon: <Clock size={18} />, title: 'Flexible Schedules', desc: 'Structured but accommodating to different time zones and lifestyles.' },
  { icon: <CheckCircle size={18} />, title: 'Structured Onboarding', desc: 'A proper training program — not a sink-or-swim first week.' },
];

const Careers: React.FC<CareersProps> = ({ onNavigate }) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', role: '', linkedin: '', experience: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              <div className="section-label">Join NexDial</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Build a Career in
                <span className="text-gradient block">Remote Sales</span>
              </h1>
              <p className="text-[#A9B0C7] text-lg leading-relaxed mb-8">
                We are looking for professionals who take pride in their work, communicate clearly, and want to grow within a structured, supportive environment that rewards consistent performance.
              </p>
              <a href="#openings" className="btn-primary">
                View Open Positions
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80"
                alt="Remote professional working"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-white/[0.08] rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#080d1f]/40 border-y border-white/[0.06]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="section-label mx-auto">Why Work With Us</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              More Than a Remote Job
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="glass-card p-6 flex gap-4">
                <div className="icon-box flex-shrink-0">
                  <span className="text-[#1D6EFF]">{b.icon}</span>
                </div>
                <div>
                  <h3 className="text-white font-display font-semibold text-sm mb-1">{b.title}</h3>
                  <p className="text-[#A9B0C7] text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="section-label mx-auto">Open Positions</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Current Opportunities
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  className="w-full flex items-start justify-between p-6 text-left"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="badge text-xs">{job.department}</span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#A9B0C7] bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
                        <Clock size={10} /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#A9B0C7] bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
                        <MapPin size={10} /> {job.location}
                      </span>
                    </div>
                    <h3 className="text-white font-display font-semibold text-lg">{job.title}</h3>
                    <p className="text-[#A9B0C7] text-sm mt-1">{job.description}</p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-[#A9B0C7] ml-4 flex-shrink-0 mt-1 transition-transform duration-300 ${expanded === i ? 'rotate-180 text-[#00B8FF]' : ''}`}
                  />
                </button>

                {expanded === i && (
                  <div className="px-6 pb-6 border-t border-white/[0.06] pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#A9B0C7]/60 mb-3">Requirements</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2.5">
                          <CheckCircle size={14} className="text-[#1D6EFF] flex-shrink-0 mt-0.5" />
                          <span className="text-[#A9B0C7] text-sm">{r}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#apply"
                      onClick={(e) => {
                        e.preventDefault();
                        setFormData({ ...formData, role: job.title });
                        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-primary text-sm py-2.5 px-5 inline-flex"
                    >
                      Apply for This Role
                      <ArrowRight size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-[#080d1f]/40 border-t border-white/[0.06]">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="section-label mx-auto">Apply Now</div>
              <h2 className="text-3xl font-display font-bold mb-3">Submit Your Application</h2>
              <p className="text-[#A9B0C7]">
                We review every application personally and respond within 3–5 business days.
              </p>
            </div>

            {submitted ? (
              <div className="glass-card p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1D6EFF]/20 border border-[#1D6EFF]/30 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-[#1D6EFF]" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">Application Received</h3>
                <p className="text-[#A9B0C7]">
                  Thank you for applying to NexDial. We will review your information and follow up within 3–5 business days.
                </p>
              </div>
            ) : (
              <form className="glass-card p-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      placeholder="+1 (000) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="form-label">Position Applying For *</label>
                    <select
                      className="form-select"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a position</option>
                      {openings.map((o) => (
                        <option key={o.title} value={o.title}>{o.title}</option>
                      ))}
                      <option value="Other">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">LinkedIn Profile URL</label>
                  <input
                    className="form-input"
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="form-label">Relevant Experience *</label>
                  <textarea
                    className="form-input resize-none"
                    name="experience"
                    placeholder="Briefly describe your relevant experience in sales, support, or operations."
                    rows={3}
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Why NexDial?</label>
                  <textarea
                    className="form-input resize-none"
                    name="message"
                    placeholder="Tell us what draws you to this role and this company."
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
                  Submit Application
                  <ArrowRight size={16} />
                </button>

                <p className="text-[#A9B0C7]/50 text-xs text-center">
                  By submitting, you agree to NexDial's Privacy Policy. We do not share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
