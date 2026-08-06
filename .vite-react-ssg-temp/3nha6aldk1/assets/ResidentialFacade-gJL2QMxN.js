import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, S as SEO, B as Button, C as CTASection } from "../main.mjs";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
import "@radix-ui/react-slot";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@supabase/supabase-js";
import "framer-motion";
import "react-helmet-async";
import "@vercel/speed-insights";
function ResidentialFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Building Facade Contractor India",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "description": "Residential facade contractor in India. Glass railings, ACP cladding, aluminium windows & structural glazing for apartments and villas. Pune & Mumbai projects. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What glass railing is best for apartment balconies in India?", "acceptedAnswer": { "@type": "Answer", "text": "Toughened + laminated glass (10mm + 10mm with PVB interlayer) in a frameless base-channel system is the gold standard for apartment balcony railings. It provides a completely unobstructed view, maximum safety (laminated glass holds in place even if broken), and a premium appearance that enhances property value." } },
      { "@type": "Question", "name": "How much does facade renovation cost for an existing residential building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Residential facade renovation costs depend on scope: ACP re-cladding of an existing building Rs 200-400/sq ft; glass railing replacement Rs 800-1500/running ft; aluminium window replacement Rs 400-800/sq ft. Fine Glaze provides detailed BOQ-based quotations for renovation projects after a site survey." } },
      { "@type": "Question", "name": "What building height requires curtain wall for residential in India?", "acceptedAnswer": { "@type": "Answer", "text": "There is no regulatory height requirement for curtain wall in residential buildings — it is a design and performance choice. For premium residential towers above 15 storeys, curtain wall glazing on the living room bay provides a floor-to-ceiling glass feature that maximises views and natural light. Fine Glaze has installed residential curtain wall elements on towers up to 30 storeys in Pune and Mumbai." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Residential Building Facade Contractor India", "item": "https://fineglaze.com/residential-facade" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Residential Facade Contractor Pune & Mumbai | Apartment & Villa Facades - Fine Glaze",
        description: "Top residential facade contractor in Pune & Mumbai. Glass railings, ACP cladding, aluminium doors & windows for apartment towers & luxury villas.",
        canonical: "https://fineglaze.com/residential-facade",
        keywords: "residential facade contractor, apartment facade, villa facade, residential ACP cladding, residential glass railing, aluminium windows",
        ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Residential Building ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Facade Contractor India" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Residential buildings are increasingly investing in premium facade systems — not just for aesthetics but for thermal comfort, sound insulation, reduced maintenance, and property value. Fine Glaze provides complete residential facade solutions for apartment towers, villas, gated communities, and row houses across Pune and Mumbai." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          alt: "Residential apartment building facade glass railing ACP India Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Premium Facade Systems for Indian Residential Buildings" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "India's residential real estate market is experiencing a strong shift towards premium and luxury segments, driving demand for high-quality facade systems that were previously only seen in commercial buildings. Fine Glaze has been at the forefront of this trend, bringing commercial-grade facade engineering to residential projects across Pune's premium corridors in Koregaon Park, Kalyani Nagar, Kharadi, and Wakad." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "The most popular residential facade systems supplied and installed by Fine Glaze include: ",
        /* @__PURE__ */ jsx("strong", { children: "Frameless glass railings" }),
        " for balconies and terraces — the defining luxury feature for premium apartments; ",
        /* @__PURE__ */ jsx("strong", { children: "Aluminium sliding and casement windows" }),
        " with toughened DGU for thermal comfort and noise reduction; ",
        /* @__PURE__ */ jsx("strong", { children: "ACP cladding" }),
        " for building exterior elevations — a cost-effective way to dramatically transform building appearance; ",
        /* @__PURE__ */ jsx("strong", { children: "Structural glazing" }),
        " for feature elements such as bay windows, lobby entries, and common area facades; and ",
        /* @__PURE__ */ jsx("strong", { children: "Glass partition and feature walls" }),
        " for common lobbies and amenity areas."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "For Pune's residential market, Fine Glaze offers competitive bulk rates for developers and builders constructing multi-tower projects. Our residential project packages include standardised specifications that balance quality and cost, enabling consistent delivery across multiple buildings or phases without compromising finish quality." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Energy efficiency is increasingly important for residential buildings seeking IGBC ratings or targeting lower electricity bills for residents. Fine Glaze's thermally broken aluminium window systems with Low-E DGU can reduce apartment cooling loads by 25-35% compared to standard single-glazed windows, delivering a payback period of 4-7 years through energy savings alone." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Frameless Glass Balcony Railings" })
        ] }, "Frameless Glass Balcony Railings"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Thermally Broken Windows" })
        ] }, "Thermally Broken Windows"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "ACP Building Cladding" })
        ] }, "ACP Building Cladding"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Structural Glazing Features" })
        ] }, "Structural Glazing Features"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Bulk Developer Packages" })
        ] }, "Bulk Developer Packages"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Energy-Efficient DGU Systems" })
        ] }, "Energy-Efficient DGU Systems")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What glass railing is best for apartment balconies in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Toughened + laminated glass (10mm + 10mm with PVB interlayer) in a frameless base-channel system is the gold standard for apartment balcony railings. It provides a completely unobstructed view, maximum safety (laminated glass holds in place even if broken), and a premium appearance that enhances property value." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How much does facade renovation cost for an existing residential building in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Residential facade renovation costs depend on scope: ACP re-cladding of an existing building Rs 200-400/sq ft; glass railing replacement Rs 800-1500/running ft; aluminium window replacement Rs 400-800/sq ft. Fine Glaze provides detailed BOQ-based quotations for renovation projects after a site survey." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What building height requires curtain wall for residential in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "There is no regulatory height requirement for curtain wall in residential buildings — it is a design and performance choice. For premium residential towers above 15 storeys, curtain wall glazing on the living room bay provides a floor-to-ceiling glass feature that maximises views and natural light. Fine Glaze has installed residential curtain wall elements on towers up to 30 storeys in Pune and Mumbai." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/glass-railings", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Glass Railings" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Glass railing systems" })
          ] })
        ] }, "/glass-railings"),
        /* @__PURE__ */ jsxs(Link, { to: "/glass-railing-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Glass Railing Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Glass railings Pune" })
          ] })
        ] }, "/glass-railing-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-aluminium-cladding", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP cladding" })
          ] })
        ] }, "/acp-aluminium-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/aluminium-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Aluminium Facade" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Aluminium windows & facade" })
          ] })
        ] }, "/aluminium-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing" })
          ] })
        ] }, "/structural-glazing-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Facade contractor Pune" })
          ] })
        ] }, "/facade-contractor-pune")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  ResidentialFacade as default
};
