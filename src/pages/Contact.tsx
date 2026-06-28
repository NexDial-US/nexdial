import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Twitter, ArrowRight, CheckCircle, MessageSquare, Clock } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', service: '', message: '',
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
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container-xl relative z-10">
          <div className="max-w-2xl">
            <div className="section-label">Contact Us</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight">
              Let's Start a
              <span className="text-gradient block">Real Conversation</span>
            </h1>
            <p className="text-[#A9B0C7] text-lg leading-relaxed">
              Whether you have a specific requirement or are simply exploring what outsourced sales could mean for your business, we are here to give you a direct, honest answer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Get in Touch</h2>
              </div>

              <a
                href="mailto:info@nexdial.com"
                className="glass-card p-5 flex items-center gap-4 hover:border-[#1D6EFF]/30 transition-all duration-200"
              >
                <div className="icon-box flex-shrink-0">
                  <Mail size={18} className="text-[#1D6EFF]" />
                </div>
                <div>
                  <p className="text-xs text-[#A9B0C7]/60 font-semibold uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-white font-medium text-sm">info@nexdial.com</p>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                className="glass-card p-5 flex items-center gap-4 hover:border-[#1D6EFF]/30 transition-all duration-200"
              >
                <div className="icon-box flex-shrink-0">
                  <Phone size={18} className="text-[#1D6EFF]" />
                </div>
                <div>
                  <p className="text-xs text-[#A9B0C7]/60 font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-white font-medium text-sm">+1 (234) 567-890</p>
                </div>
              </a>

              <div className="glass-card p-5 flex items-center gap-4">
                <div className="icon-box flex-shrink-0">
                  <Clock size={18} className="text-[#1D6EFF]" />
                </div>
                <div>
                  <p className="text-xs text-[#A9B0C7]/60 font-semibold uppercase tracking-wider mb-0.5">Response Time</p>
                  <p className="text-white font-medium text-sm">Within 24 business hours</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-center gap-4">
                <div className="icon-box flex-shrink-0">
                  <MessageSquare size={18} className="text-[#1D6EFF]" />
                </div>
                <div>
                  <p className="text-xs text-[#A9B0C7]/60 font-semibold uppercase tracking-wider mb-0.5">Social</p>
                  <div className="flex items-center gap-3 mt-1">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#A9B0C7] hover:text-white transition-colors">
                      <Linkedin size={16} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#A9B0C7] hover:text-white transition-colors">
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="divider" />

              <div>
                <p className="text-[#A9B0C7] text-sm leading-relaxed mb-4">
                  Prefer to schedule a call directly? Use our booking page for a structured 30-minute discovery session.
                </p>
                <button onClick={() => navigate('book')} className="btn-primary text-sm py-2.5 px-5 w-full justify-center">
                  Book a Discovery Call
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px]">
                  <div className="w-16 h-16 rounded-full bg-[#1D6EFF]/20 border border-[#1D6EFF]/30 flex items-center justify-center mb-5">
                    <CheckCircle size={28} className="text-[#1D6EFF]" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">Message Sent</h3>
                  <p className="text-[#A9B0C7] max-w-sm">
                    Thank you for reaching out. A member of our team will review your inquiry and respond within 24 business hours.
                  </p>
                </div>
              ) : (
                <form className="glass-card p-8 space-y-5" onSubmit={handleSubmit}>
                  <h2 className="text-xl font-display font-bold mb-2">Send an Inquiry</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="form-label">Business Email *</label>
                      <input className="form-input" type="email" name="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Company Name *</label>
                      <input className="form-input" type="text" name="company" placeholder="Your company" value={formData.company} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" type="tel" name="phone" placeholder="+1 (000) 000-0000" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Service of Interest</label>
                    <select className="form-select" name="service" value={formData.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option>Cold Calling</option>
                      <option>Appointment Setting</option>
                      <option>Lead Qualification</option>
                      <option>Customer Support</option>
                      <option>CRM Management</option>
                      <option>Sales Development</option>
                      <option>Business Development</option>
                      <option>Virtual Assistants</option>
                      <option>Multiple Services</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Tell us about your business *</label>
                    <textarea
                      className="form-input resize-none"
                      name="message"
                      placeholder="What does your business do, who do you sell to, and what are you hoping to achieve with NexDial?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
                    Send Inquiry
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-[#A9B0C7]/50 text-xs text-center">
                    We treat all business information with strict confidentiality. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
