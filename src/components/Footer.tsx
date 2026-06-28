import React from 'react';
import { Mail, Phone, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030610] border-t border-white/[0.06]">
      {/* Main Footer */}
      <div className="container-xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => navigate('home')} className="mb-6 block">
              <Logo size="sm" />
            </button>
            <p className="text-[#A9B0C7] text-sm leading-relaxed max-w-xs mb-6">
              We build dedicated remote sales teams for businesses that demand qualified appointments and measurable growth.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#A9B0C7] hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#A9B0C7] hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold font-display mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                'Cold Calling',
                'Appointment Setting',
                'Lead Qualification',
                'Customer Support',
                'CRM Management',
                'Sales Development',
                'Virtual Assistants',
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => navigate('services')}
                    className="text-[#A9B0C7] text-sm hover:text-white transition-colors duration-150"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold font-display mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About NexDial', page: 'about' },
                { label: 'Industries', page: 'industries' },
                { label: 'Careers', page: 'careers' },
                { label: 'Insights', page: 'insights' },
                { label: 'FAQ', page: 'faq' },
                { label: 'Contact', page: 'contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-[#A9B0C7] text-sm hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold font-display mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@nexdial.com"
                  className="flex items-center gap-2.5 text-[#A9B0C7] text-sm hover:text-white transition-colors duration-150 group"
                >
                  <Mail size={14} className="text-[#1D6EFF] group-hover:text-[#00B8FF] transition-colors" />
                  info@nexdial.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2.5 text-[#A9B0C7] text-sm hover:text-white transition-colors duration-150 group"
                >
                  <Phone size={14} className="text-[#1D6EFF] group-hover:text-[#00B8FF] transition-colors" />
                  +1 (234) 567-890
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <button
                onClick={() => navigate('book')}
                className="btn-primary text-sm py-2.5 px-5 w-full justify-center"
              >
                Book a Call
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-xl py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#A9B0C7] text-sm">
              © 2026 NexDial. All Rights Reserved.
            </p>
            <div className="flex items-center gap-5">
              <button
                onClick={() => navigate('privacy')}
                className="text-[#A9B0C7] text-sm hover:text-white transition-colors duration-150"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate('terms')}
                className="text-[#A9B0C7] text-sm hover:text-white transition-colors duration-150"
              >
                Terms of Service
              </button>
            </div>
            <p className="text-[#A9B0C7]/40 text-xs font-light tracking-wide">
              Powered by HORUS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
