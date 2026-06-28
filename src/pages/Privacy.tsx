import React from 'react';

interface PrivacyProps {
  onNavigate: (page: string) => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onNavigate }) => {
  return (
    <main className="pt-16">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container-xl relative z-10">
          <div className="max-w-2xl">
            <div className="section-label">Legal</div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
            <p className="text-[#A9B0C7]">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container-xl">
          <div className="max-w-3xl prose-custom">
            <div className="space-y-10 text-[#A9B0C7] leading-relaxed">

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">1. Information We Collect</h2>
                <p>NexDial collects information that you provide directly when you submit a contact form, book a call, apply for a position, or subscribe to communications. This includes your name, email address, phone number, company name, and any information you choose to include in free-text fields.</p>
                <p className="mt-3">We also collect limited technical data through standard web analytics tools, including your IP address, browser type, device type, pages visited, and time spent on pages. This data is collected in aggregated, anonymized form and is used solely to improve site performance.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">2. How We Use Your Information</h2>
                <p>We use the information you provide to respond to your inquiries, process your booking requests, review employment applications, and deliver communications you have subscribed to. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">3. Data Retention</h2>
                <p>We retain contact inquiry data for a period of 24 months. Job application data is retained for 12 months following the close of a recruitment process. You may request deletion of your data at any time by contacting us at <a href="mailto:info@nexdial.com" className="text-[#00B8FF] hover:text-white transition-colors">info@nexdial.com</a>.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">4. Cookies</h2>
                <p>This website uses essential cookies necessary for basic functionality. We do not use advertising or behavioral tracking cookies. You may disable cookies in your browser settings, though certain site features may not function correctly as a result.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">5. Third-Party Services</h2>
                <p>We use reputable third-party tools for analytics and communication. These providers operate under their own privacy policies and data processing agreements. We select providers that meet applicable data protection standards.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">6. Security</h2>
                <p>We implement reasonable technical and organizational measures to protect the information we hold against unauthorized access, loss, or misuse. No method of data transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">7. Your Rights</h2>
                <p>Depending on your location, you may have the right to access, correct, or request deletion of your personal data. To exercise any of these rights, contact us at <a href="mailto:info@nexdial.com" className="text-[#00B8FF] hover:text-white transition-colors">info@nexdial.com</a>. We will respond to valid requests within 30 days.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">8. Changes to This Policy</h2>
                <p>We may update this Privacy Policy periodically. Material changes will be reflected in a revised date at the top of this page. We encourage you to review this policy occasionally.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">9. Contact</h2>
                <p>For privacy-related inquiries, contact NexDial at <a href="mailto:info@nexdial.com" className="text-[#00B8FF] hover:text-white transition-colors">info@nexdial.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
