import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPage]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navigate = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Services', page: 'services', hasDropdown: true },
    { label: 'Industries', page: 'industries' },
    { label: 'About', page: 'about' },
    { label: 'Careers', page: 'careers' },
    { label: 'Insights', page: 'insights' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  const serviceLinks = [
    'Cold Calling',
    'Appointment Setting',
    'Lead Qualification',
    'Customer Support',
    'CRM Management',
    'Sales Development',
    'Virtual Assistants',
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050816]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <button
              onClick={() => navigate('home')}
              className="flex-shrink-0 focus-visible:outline-none"
              aria-label="NexDial Home"
            >
              <Logo size="sm" />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} className="relative">
                    <button
                      className={`nav-link flex items-center gap-1 ${currentPage === item.page ? 'active' : ''}`}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 glass rounded-xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                        {serviceLinks.map((s) => (
                          <button
                            key={s}
                            onClick={() => { navigate('services'); }}
                            className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-[#A9B0C7] hover:text-white hover:bg-white/[0.05] transition-colors duration-150"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => navigate(item.page)}
                    className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button onClick={() => navigate('contact')} className="btn-secondary text-sm py-2.5 px-5">
                Get in Touch
              </button>
              <button onClick={() => navigate('book')} className="btn-primary text-sm py-2.5 px-5">
                Book a Call
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#A9B0C7] hover:text-white hover:bg-white/[0.05] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#050816]/98 backdrop-blur-xl flex flex-col pt-20 pb-8 px-6 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.page)}
                className={`text-left py-4 text-lg font-semibold border-b border-white/[0.06] transition-colors duration-150 ${
                  currentPage === item.page ? 'text-white' : 'text-[#A9B0C7]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <button onClick={() => navigate('contact')} className="btn-secondary justify-center">
              Get in Touch
            </button>
            <button onClick={() => navigate('book')} className="btn-primary justify-center">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
