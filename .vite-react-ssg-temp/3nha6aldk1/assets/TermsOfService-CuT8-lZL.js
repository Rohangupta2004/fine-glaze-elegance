import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, S as SEO } from "../main.mjs";
import { FileText, Mail, Phone } from "lucide-react";
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
const TermsOfService = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Terms of Service – Fine Glaze",
        description: "Fine Glaze terms of service. Read the terms and conditions governing use of our website and facade services.",
        canonical: "https://fineglaze.com/terms-of-service"
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-50 border-b border-stone-200", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 md:px-16 py-12 md:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-amber-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(FileText, { size: 20, className: "text-amber-600" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase", children: "Legal" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-extrabold text-stone-900 mb-2", children: "Terms of Service" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm", children: "Last updated: July 2026" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-5 md:px-16 max-w-3xl", children: /* @__PURE__ */ jsxs("div", { className: "prose prose-stone prose-sm max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "1. Agreement to Terms" }),
        /* @__PURE__ */ jsxs("p", { className: "text-stone-600 text-sm leading-relaxed", children: [
          "By accessing and using the Fine Glaze website (",
          /* @__PURE__ */ jsx("a", { href: "https://fineglaze.com", className: "text-amber-700 hover:underline", children: "fineglaze.com" }),
          "), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "2. Our Services" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "Fine Glaze specializes in facade design, fabrication, and installation services including curtain wall systems, structural glazing, ACP cladding, glass railings, aluminium doors & windows, and facade maintenance. Our website provides information about these services, our portfolio, and a means to contact us for project enquiries." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "3. Enquiries & Quotations" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "Information provided on this website — including project images, service descriptions, and indicative pricing — is for general informational purposes only. It does not constitute a binding offer or contract. All project quotations are provided separately after a site assessment and are subject to specific terms agreed upon in writing." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "4. Intellectual Property" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "All content on this website — including text, images, project photographs, logos, designs, and graphics — is the property of Fine Glaze or used with permission. You may not reproduce, distribute, or use any content from this website without our prior written consent." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "5. Accuracy of Information" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "We make reasonable efforts to ensure the accuracy of information on our website. However, specifications, pricing, and availability of services may change without notice. Project images and case studies represent our past work and may not reflect exact outcomes for future projects, as each project is unique." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "6. Third-Party Links" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "Our website may contain links to third-party websites (such as Google Maps, WhatsApp, and social media platforms). These links are provided for convenience only. We do not endorse or assume responsibility for the content or practices of any third-party sites." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "7. Limitation of Liability" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "Fine Glaze shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use this website. This includes, but is not limited to, damages resulting from reliance on any information obtained through the website." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "8. Governing Law" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-3", children: "9. Changes to Terms" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed", children: "We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes are posted constitutes your acceptance of the revised terms." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 border border-stone-200 p-5 md:p-7 mt-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-stone-900 mb-4", children: "10. Contact" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed mb-4", children: "For questions about these Terms of Service, contact us:" }),
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
  TermsOfService as default
};
