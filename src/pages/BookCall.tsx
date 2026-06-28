import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calendar, Clock, Video, Shield } from 'lucide-react';

interface BookCallProps {
  onNavigate: (page: string) => void;
}

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM',
];

const getDaysInMonth = () => {
  const today = new Date();
  const days = [];
  for (let i = 0; i < 28; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      days.push(d);
    }
  }
  return days.slice(0, 14);
};

const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

const BookCall: React.FC<BookCallProps> = ({ onNavigate }) => {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const days = getDaysInMonth();
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', service: '', teamSize: '', notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <main className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container-xl relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="section-label mx-auto">Schedule a Call</div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-5 leading-tight">
              Book Your
              <span className="text-gradient block">Discovery Call</span>
            </h1>
            <p className="text-[#A9B0C7] text-lg leading-relaxed">
              A focused 30-minute conversation. We learn about your business, your goals, and whether NexDial is a genuine fit — no pressure, no pitch theatrics.
            </p>
          </div>
        </div>
      </section>

      {/* Call details bar */}
      <div className="border-y border-white/[0.06] bg-[#080d1f]/60">
        <div className="container-xl py-5">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <Clock size={16} />, text: '30 Minutes' },
              { icon: <Video size={16} />, text: 'Video Call (Google Meet or Zoom)' },
              { icon: <Calendar size={16} />, text: 'Mon–Fri, 9am–5pm EST' },
              { icon: <Shield size={16} />, text: 'No obligation' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-[#A9B0C7] text-sm">
                <span className="text-[#1D6EFF]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container-xl">
          {step === 3 ? (
            /* Confirmation */
            <div className="max-w-lg mx-auto glass-card p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-[#1D6EFF]/20 border border-[#1D6EFF]/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={36} className="text-[#1D6EFF]" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-3">You're Confirmed</h2>
              <p className="text-[#A9B0C7] mb-5">
                Your discovery call has been scheduled for:
              </p>
              <div className="glass rounded-xl p-4 mb-6">
                <p className="text-white font-semibold text-lg">{selectedDay ? formatDate(selectedDay) : ''}</p>
                <p className="text-[#00B8FF] font-medium">{selectedTime} EST</p>
              </div>
              <p className="text-[#A9B0C7] text-sm mb-8">
                A calendar invitation has been sent to <span className="text-white">{formData.email}</span>. We look forward to speaking with you.
              </p>
              <button onClick={() => navigate('home')} className="btn-primary w-full justify-center">
                Back to Home
              </button>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              {/* Progress */}
              <div className="flex items-center justify-center gap-2 mb-12">
                {[1, 2].map((s) => (
                  <React.Fragment key={s}>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-all duration-300 ${
                      step >= s ? 'bg-[#1D6EFF] text-white' : 'bg-white/[0.05] text-[#A9B0C7]'
                    }`}>
                      {s}
                    </div>
                    {s < 2 && <div className={`w-16 h-0.5 transition-all duration-300 ${step >= 2 ? 'bg-[#1D6EFF]' : 'bg-white/[0.08]'}`} />}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex justify-center gap-16 mb-10 -mt-6">
                <span className={`text-xs font-semibold ${step >= 1 ? 'text-white' : 'text-[#A9B0C7]'}`}>Select Time</span>
                <span className={`text-xs font-semibold ${step >= 2 ? 'text-white' : 'text-[#A9B0C7]'}`}>Your Details</span>
              </div>

              {step === 1 && (
                <div className="glass-card p-8">
                  <h2 className="text-xl font-display font-bold mb-6">Choose a Date & Time</h2>

                  {/* Days */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-[#A9B0C7]/60 uppercase tracking-widest mb-3">Select Date</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
                      {days.map((d, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDay(d)}
                          className={`p-3 rounded-xl text-center transition-all duration-150 border ${
                            selectedDay?.toDateString() === d.toDateString()
                              ? 'bg-[#1D6EFF] border-[#1D6EFF] text-white shadow-brand-sm'
                              : 'border-white/[0.08] text-[#A9B0C7] hover:border-white/20 hover:text-white hover:bg-white/[0.04]'
                          }`}
                        >
                          <p className="text-xs font-semibold">
                            {d.toLocaleDateString('en-US', { weekday: 'short' })}
                          </p>
                          <p className="text-lg font-bold leading-tight">{d.getDate()}</p>
                          <p className="text-xs opacity-70">
                            {d.toLocaleDateString('en-US', { month: 'short' })}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Times */}
                  <div className="mb-8">
                    <p className="text-xs font-semibold text-[#A9B0C7]/60 uppercase tracking-widest mb-3">Select Time (EST)</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          disabled={!selectedDay}
                          className={`py-2.5 px-3 rounded-lg text-sm font-medium text-center transition-all duration-150 border ${
                            selectedTime === t
                              ? 'bg-[#1D6EFF] border-[#1D6EFF] text-white'
                              : !selectedDay
                              ? 'border-white/[0.04] text-[#A9B0C7]/30 cursor-not-allowed'
                              : 'border-white/[0.08] text-[#A9B0C7] hover:border-white/20 hover:text-white hover:bg-white/[0.04]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      disabled={!selectedDay || !selectedTime}
                      className={`btn-primary ${(!selectedDay || !selectedTime) ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      Continue
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form className="glass-card p-8 space-y-5" onSubmit={handleSubmit}>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-display font-bold">Your Details</h2>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[#A9B0C7] text-sm hover:text-white transition-colors"
                    >
                      ← Change time
                    </button>
                  </div>

                  {/* Summary */}
                  {selectedDay && selectedTime && (
                    <div className="glass rounded-xl p-4 flex items-center gap-3 mb-2">
                      <Calendar size={16} className="text-[#1D6EFF]" />
                      <div>
                        <p className="text-white text-sm font-semibold">{formatDate(selectedDay)} at {selectedTime} EST</p>
                        <p className="text-[#A9B0C7] text-xs">30-minute discovery call</p>
                      </div>
                    </div>
                  )}

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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        <option>Not Sure Yet</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Current Sales Team Size</label>
                      <select className="form-select" name="teamSize" value={formData.teamSize} onChange={handleChange}>
                        <option value="">Select size</option>
                        <option>Just me</option>
                        <option>2–5 people</option>
                        <option>6–15 people</option>
                        <option>16–50 people</option>
                        <option>50+ people</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Anything we should know beforehand?</label>
                    <textarea
                      className="form-input resize-none"
                      name="notes"
                      placeholder="Context that will help us make the most of our 30 minutes together."
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
                    Confirm Booking
                    <CheckCircle size={16} />
                  </button>

                  <p className="text-[#A9B0C7]/50 text-xs text-center">
                    A calendar invitation will be sent to your email. No commitment required.
                  </p>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BookCall;
