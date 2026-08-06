import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, S as SEO } from "../main.mjs";
import { Shield, Mail, Phone } from "lucide-react";
import "vite-react-ssg";
import "react";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-router-dom";
import "@radix-ui/react-slot";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@supabase/supabase-js";
import "framer-motion";
import "react-helmet-async";
import "@vercel/speed-insights";
const PrivacyPolicy = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Privacy Policy – Fine Glaze",
        description: "Fine Glaze privacy policy. Learn how we collect, use, and protect your personal information when you use our website or contact us for facade services.",
        canonical: "https://fineglaze.com/privacy-policy"
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-50 border-b border-stone-200", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 md:px-16 py-12 md:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-amber-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(Shield, { size: 20, className: "text-amber-600" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase", children: "Legal" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-extrabold text-stone-900 mb-2", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm", children: "Last updated: July 2026" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-5 md:px-16 max-w-3xl", children: /* @__PURE__ */ jsxs("div", { className: "prose prose-stone prose-sm max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "1. Introduction" }),
        /* @__PURE__ */ jsxs("p", { className: "text-stone-600 text-sm leading-relaxed", children: [
          'Fine Glaze ("we", "our", or "us") is committed to protecting the privacy of our website visitors and clients. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit',
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://fineglaze.com", className: "text-amber-700 hover:underline", children: "fineglaze.com" }),
          " ",
          "or contact us for facade, glazing, or cladding services."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "2. Information We Collect" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed mb-3", children: "We collect information that you voluntarily provide to us when you:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-stone-600 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Submit an enquiry through our contact form (name, email, phone number, project type, and message)" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Contact us via phone, email, or WhatsApp" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Request a site visit or project quotation" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed mt-3", children: "We also automatically collect certain technical data when you browse our website, including IP address, browser type, pages visited, and time spent on pages. This data is collected through cookies and analytics tools (such as Microsoft Clarity and Vercel Speed Insights) to help us improve the website experience." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "3. How We Use Your Information" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed mb-3", children: "Your information is used exclusively for:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-stone-600 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Responding to your enquiry and providing quotations" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Scheduling site visits and consultations" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Communicating about ongoing projects" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Improving our website and services based on usage analytics" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed mt-3", children: "We do not sell, rent, or share your personal information with third parties for marketing purposes." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "4. Third-Party Services" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "Our website uses the following third-party services to process data:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-stone-600 text-sm mt-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Web3Forms" }),
              " — to process contact form submissions and deliver them to our team"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Microsoft Clarity" }),
              " — to understand user behavior through session recordings and heatmaps (anonymized)"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Vercel" }),
              " — for website hosting and performance analytics"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold mt-0.5", children: "•" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Google Maps" }),
              " — to display our office location"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed mt-3", children: "Each of these services has its own privacy policy governing how they handle data." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "5. Cookies" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "Our website uses cookies and similar technologies for analytics and to ensure proper functionality. You can control cookie preferences through your browser settings. Disabling cookies may affect some features of the website." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "6. Data Security" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. Our website uses HTTPS encryption for all data transmission. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "7. Data Retention" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "We retain your contact information for as long as necessary to respond to your enquiry and provide our services. Project-related records are retained in accordance with applicable Indian laws and business requirements." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "8. Your Rights" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "You have the right to request access to, correction of, or deletion of your personal information at any time. To exercise these rights, please contact us using the details below." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "9. Changes to This Policy" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 border border-stone-200 p-5 md:p-7 mt-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-4", children: "10. Contact Us" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed mb-4", children: "If you have questions about this Privacy Policy or how we handle your data, please reach out:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-amber-600 shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@fineglaze.com", className: "text-sm text-amber-700 hover:underline", children: "info@fineglaze.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-amber-600 shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+918369233566", className: "text-sm text-amber-700 hover:underline", children: "+91 83692 33566" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-xs mt-4", children: "Fine Glaze · Shop No. 1 & 2, Jagdamba Bhawan Marg, Undri, Pune – 411060, Maharashtra, India" })
      ] })
    ] }) }) })
  ] });
};
export {
  PrivacyPolicy as default
};
