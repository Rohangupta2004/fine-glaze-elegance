import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { FileText, Mail, Phone } from "lucide-react";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service – Fine Glaze"
        description="Fine Glaze terms of service. Read the terms and conditions governing use of our website and facade services."
        canonical="https://fineglaze.com/terms-of-service"
      />

      {/* Header */}
      <section className="bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-5 md:px-16 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-50 flex items-center justify-center">
              <FileText size={20} className="text-amber-600" />
            </div>
            <p className="text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase">
              Legal
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-2">
            Terms of Service
          </h1>
          <p className="text-stone-500 text-sm">
            Last updated: July 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5 md:px-16 max-w-3xl">
          <div className="prose prose-stone prose-sm max-w-none space-y-8">

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">1. Agreement to Terms</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                By accessing and using the Fine Glaze website (
                <a href="https://fineglaze.com" className="text-amber-700 hover:underline">
                  fineglaze.com
                </a>
                ), you agree to be bound by these Terms of Service. If you do not agree with any
                part of these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">2. Our Services</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Fine Glaze specializes in facade design, fabrication, and installation services
                including curtain wall systems, structural glazing, ACP cladding, glass railings,
                aluminium doors & windows, and facade maintenance. Our website provides
                information about these services, our portfolio, and a means to contact us for
                project enquiries.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">3. Enquiries & Quotations</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Information provided on this website — including project images, service
                descriptions, and indicative pricing — is for general informational purposes only.
                It does not constitute a binding offer or contract. All project quotations are
                provided separately after a site assessment and are subject to specific terms
                agreed upon in writing.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">4. Intellectual Property</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                All content on this website — including text, images, project photographs, logos,
                designs, and graphics — is the property of Fine Glaze or used with permission.
                You may not reproduce, distribute, or use any content from this website without
                our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">5. Accuracy of Information</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                We make reasonable efforts to ensure the accuracy of information on our website.
                However, specifications, pricing, and availability of services may change without
                notice. Project images and case studies represent our past work and may not reflect
                exact outcomes for future projects, as each project is unique.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">6. Third-Party Links</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Our website may contain links to third-party websites (such as Google Maps,
                WhatsApp, and social media platforms). These links are provided for convenience
                only. We do not endorse or assume responsibility for the content or practices of
                any third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">7. Limitation of Liability</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Fine Glaze shall not be liable for any direct, indirect, incidental, or
                consequential damages arising from the use of or inability to use this website.
                This includes, but is not limited to, damages resulting from reliance on any
                information obtained through the website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">8. Governing Law</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws
                of India. Any disputes arising from the use of this website shall be subject to
                the exclusive jurisdiction of the courts in Pune, Maharashtra.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">9. Changes to Terms</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                We reserve the right to update these Terms of Service at any time. Changes will
                be posted on this page with an updated revision date. Continued use of the
                website after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            {/* Contact box */}
            <div className="bg-stone-50 border border-stone-200 p-5 md:p-7 mt-8">
              <h2 className="text-lg font-bold text-stone-900 mb-4">10. Contact</h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                For questions about these Terms of Service, contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-amber-600 shrink-0" />
                  <a href="mailto:info@fineglaze.com" className="text-sm text-amber-700 hover:underline">
                    info@fineglaze.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-amber-600 shrink-0" />
                  <a href="tel:+918369233566" className="text-sm text-amber-700 hover:underline">
                    +91 83692 33566
                  </a>
                </div>
              </div>
              <p className="text-stone-500 text-xs mt-4">
                Fine Glaze · Shop No. 1 & 2, Jagdamba Bhawan Marg, Undri, Pune – 411060, Maharashtra, India
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
