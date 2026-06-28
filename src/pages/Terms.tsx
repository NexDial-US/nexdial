import React from 'react';

interface TermsProps {
  onNavigate: (page: string) => void;
}

const Terms: React.FC<TermsProps> = ({ onNavigate }) => {
  return (
    <main className="pt-16">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container-xl relative z-10">
          <div className="max-w-2xl">
            <div className="section-label">Legal</div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
            <p className="text-[#A9B0C7]">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container-xl">
          <div className="max-w-3xl">
            <div className="space-y-10 text-[#A9B0C7] leading-relaxed">

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">1. Acceptance of Terms</h2>
                <p>By accessing this website or engaging NexDial services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of this website and do not proceed with any service engagement.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">2. Services</h2>
                <p>NexDial provides outsourced outbound sales services including cold calling, appointment setting, lead qualification, customer support, CRM management, sales development, business development, and virtual assistant services. Specific service terms, deliverables, and performance standards are defined in individual service agreements.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">3. Client Responsibilities</h2>
                <p>Clients are responsible for providing accurate offer documentation, target market criteria, and access to any systems required for service delivery. Clients agree to use NexDial services in compliance with all applicable laws and regulations, including those governing telemarketing, data privacy, and commercial communications.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">4. Intellectual Property</h2>
                <p>All content on this website — including text, graphics, logos, and design elements — is the property of NexDial and may not be reproduced, distributed, or used without prior written permission.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">5. Limitation of Liability</h2>
                <p>NexDial is not liable for indirect, incidental, or consequential damages arising from the use of our services or this website. Our liability in any circumstance is limited to the fees paid for the specific service in question during the period giving rise to the claim.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">6. Confidentiality</h2>
                <p>NexDial treats all client information — including business data, prospecting lists, scripts, and proprietary processes — as strictly confidential. We do not share client information with third parties except as required for service delivery, and only under appropriate data protection agreements.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">7. Termination</h2>
                <p>Either party may terminate a service engagement in accordance with the terms of the signed service agreement. Access to this website may be restricted at NexDial's discretion for any violation of these terms.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">8. Governing Law</h2>
                <p>These terms are governed by applicable law in the jurisdiction in which NexDial operates. Disputes arising from service agreements will be handled in accordance with the dispute resolution terms contained in those agreements.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold text-white mb-3">9. Contact</h2>
                <p>For questions regarding these terms, contact NexDial at <a href="mailto:info@nexdial.com" className="text-[#00B8FF] hover:text-white transition-colors">info@nexdial.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
