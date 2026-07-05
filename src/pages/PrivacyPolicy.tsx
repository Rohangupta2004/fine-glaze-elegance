import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Shield, Mail, Phone } from "lucide-react";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy – Fine Glaze"
        description="Fine Glaze privacy policy. Learn how we collect, use, and protect your personal information when you use our website or contact us for facade services."
        canonical="https://fineglaze.com/privacy-policy"
      />

      {/* Header */}
      <section className="bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-5 md:px-16 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-50 flex items-center justify-center">
              <Shield size={20} className="text-amber-600" />
            </div>
            <p className="text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase">
              Legal
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-2">
            Privacy Policy
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
              <h2 className="text-lg font-bold text-stone-900 mb-3">1. Introduction</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Fine Glaze ("we", "our", or "us") is committed to protecting the privacy of our
                website visitors and clients. This Privacy Policy explains how we collect, use,
                and safeguard your personal information when you visit{" "}
                <a href="https://fineglaze.com" className="text-amber-700 hover:underline">
                  fineglaze.com
                </a>{" "}
                or contact us for facade, glazing, or cladding services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">2. Information We Collect</h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                We collect information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span>Submit an enquiry through our contact form (name, email, phone number, project type, and message)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span>Contact us via phone, email, or WhatsApp</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span>Request a site visit or project quotation</span>
                </li>
              </ul>
              <p className="text-stone-600 text-sm leading-relaxed mt-3">
                We also automatically collect certain technical data when you browse our website,
                including IP address, browser type, pages visited, and time spent on pages. This
                data is collected through cookies and analytics tools (such as Microsoft Clarity
                and Vercel Speed Insights) to help us improve the website experience.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                Your information is used exclusively for:
              </p>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span>Responding to your enquiry and providing quotations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span>Scheduling site visits and consultations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span>Communicating about ongoing projects</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span>Improving our website and services based on usage analytics</span>
                </li>
              </ul>
              <p className="text-stone-600 text-sm leading-relaxed mt-3">
                We do not sell, rent, or share your personal information with third parties for
                marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">4. Third-Party Services</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Our website uses the following third-party services to process data:
              </p>
              <ul className="space-y-2 text-stone-600 text-sm mt-3">
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span><strong>Web3Forms</strong> — to process contact form submissions and deliver them to our team</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span><strong>Microsoft Clarity</strong> — to understand user behavior through session recordings and heatmaps (anonymized)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span><strong>Vercel</strong> — for website hosting and performance analytics</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span><strong>Google Maps</strong> — to display our office location</span>
                </li>
              </ul>
              <p className="text-stone-600 text-sm leading-relaxed mt-3">
                Each of these services has its own privacy policy governing how they handle data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">5. Cookies</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Our website uses cookies and similar technologies for analytics and to ensure
                proper functionality. You can control cookie preferences through your browser
                settings. Disabling cookies may affect some features of the website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">6. Data Security</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                We implement reasonable security measures to protect your personal information
                from unauthorized access, alteration, or disclosure. Our website uses HTTPS
                encryption for all data transmission. However, no method of transmission over
                the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">7. Data Retention</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                We retain your contact information for as long as necessary to respond to your
                enquiry and provide our services. Project-related records are retained in
                accordance with applicable Indian laws and business requirements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">8. Your Rights</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                You have the right to request access to, correction of, or deletion of your
                personal information at any time. To exercise these rights, please contact us
                using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-3">9. Changes to This Policy</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted
                on this page with an updated revision date.
              </p>
            </div>

            {/* Contact box */}
            <div className="bg-stone-50 border border-stone-200 p-5 md:p-7 mt-8">
              <h2 className="text-lg font-bold text-stone-900 mb-4">10. Contact Us</h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                If you have questions about this Privacy Policy or how we handle your data,
                please reach out:
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

export default PrivacyPolicy;
