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
function CommercialBuildingFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Building Facade Systems India",
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
    "description": "Complete guide to commercial building facade systems in India. Curtain walls, structural glazing, ACP cladding, costs, and regulatory requirements. Expert advice by Fine Glaze."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is best for an IT park in India?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain wall with DGU Low-E glass is the industry standard for large IT campuses. It delivers LEED energy performance, fast installation, factory quality, and the premium glass aesthetic MNC occupiers expect." } },
      { "@type": "Question", "name": "How much should I budget for a commercial building facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade cost is typically 8-15% of total building construction cost. For a premium Grade-A commercial tower, facade represents 12-18% of construction cost. Budget Rs 500-1200/sq ft for curtain wall and structural glazing, plus 10-15% for coordination and testing." } },
      { "@type": "Question", "name": "How long does commercial facade installation take in India?", "acceptedAnswer": { "@type": "Answer", "text": "A 15-storey commercial building facade typically takes 5-7 months from order to practical completion: 8-14 weeks fabrication, then 1-2 weeks installation per storey." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Commercial Building Facade Systems India", "item": "https://fineglaze.com/commercial-building-facade" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Commercial Building Facade Contractor Pune & Mumbai | Office Facades - Fine Glaze",
        description: "Top commercial building facade contractor in Pune & Mumbai. Curtain walls, structural glazing & ACP cladding for corporate office buildings.",
        canonical: "https://fineglaze.com/commercial-building-facade",
        keywords: "commercial building facade contractor, commercial facade company, office building facade, glass facade commercial building, facade engineering",
        ogImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Commercial Building ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Facade Systems India" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "The facade is the most visible — and often the most technically complex — element of any commercial building. This comprehensive guide covers all major commercial facade types, cost benchmarks, design considerations, and regulatory requirements for India, drawn from Fine Glaze's 50+ commercial projects." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
          alt: "Commercial building glass facade curtain wall India Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Facade Systems for Commercial Buildings in India" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "A commercial building facade serves multiple critical functions simultaneously: structural support, weather protection, thermal regulation, acoustic attenuation, fire safety, and architectural expression. Modern commercial facades are engineered systems — selecting the right system requires balancing technical performance, budget, timeline, and long-term operating costs." }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-muted-foreground space-y-3 mt-6", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Unitized Curtain Wall:" }),
          " Factory-assembled glass and aluminium panels. Industry standard for high-rise commercial towers. Fast installation, guaranteed quality. Rs 700–1,200/sq ft."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Stick System Curtain Wall:" }),
          " Site-assembled aluminium frame with glass infill. Suitable for low-to-mid-rise. More flexible for irregular geometries. Rs 350–650/sq ft."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Structural Glazing (SSG):" }),
          " Frameless glass bonded with structural silicone. Premium aesthetic for showrooms, lobbies, and statement buildings. Rs 300–900/sq ft."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "ACP Composite Cladding:" }),
          " Lightweight aluminium sandwich panels for opaque cladding zones. Cost-effective solution for large facade areas. Rs 180–450/sq ft."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Aluminium Louvres & Brise-Soleils:" }),
          " Solar shading elements that reduce cooling load by 20–35%. Increasingly specified in India's hot climate. Rs 250–600/sq ft."
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mt-10", children: "Regulatory Requirements for Commercial Facades in India" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Commercial building facades in India must comply with NBC 2016 (National Building Code), IS:875 Parts 1–5 (structural loads), IS:2553 (glass safety), and state-specific fire safety regulations. Key mandatory requirements include FR-grade panels above 15m height, structural calculations for wind and seismic zones, and fire compartmentation at each floor level. For LEED or GRIHA rated buildings, additional thermal performance standards (SHGC and U-value targets) apply." }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mt-10", children: "Facade Design Best Practices for Indian Climate" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "India's diverse climate zones demand thoughtful facade design. In Pune's mild climate, large glazed areas with DGU Low-E glass are feasible without excessive cooling loads. In Mumbai's hot-humid coastal climate, solar control glass (SHGC below 0.35) is essential. In Delhi's composite climate, high thermal mass cladding with good insulation performs best. Fine Glaze's design team works with energy modellers to optimise facade glass ratios for each location and building orientation." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "All Commercial Facade Systems" })
        ] }, "All Commercial Facade Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "NBC 2016 Compliance Guide" })
        ] }, "NBC 2016 Compliance Guide"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "LEED & Green Building Tips" })
        ] }, "LEED & Green Building Tips"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Climate-Optimised Design" })
        ] }, "Climate-Optimised Design"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "IT Park & Office Expertise" })
        ] }, "IT Park & Office Expertise"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Hotel & Retail Facade Guidance" })
        ] }, "Hotel & Retail Facade Guidance")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What facade system is best for an IT park in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Unitized curtain wall with DGU Low-E glass is the industry standard for large IT campuses. It delivers LEED energy performance, fast installation, factory quality, and the premium glass aesthetic MNC occupiers expect." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How much should I budget for a commercial building facade in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Facade cost is typically 8-15% of total building construction cost. For a premium Grade-A commercial tower, facade represents 12-18% of construction cost. Budget Rs 500-1200/sq ft for curtain wall and structural glazing, plus 10-15% for coordination and testing." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How long does commercial facade installation take in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "A 15-storey commercial building facade typically takes 5-7 months from order to practical completion: 8-14 weeks fabrication, then 1-2 weeks installation per storey." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-systems", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Systems" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall service" })
          ] })
        ] }, "/curtain-wall-systems"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing" })
          ] })
        ] }, "/structural-glazing"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-aluminium-cladding", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP cladding" })
          ] })
        ] }, "/acp-aluminium-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/it-park-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "IT Park Facade" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "IT campus facade guide" })
          ] })
        ] }, "/it-park-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Facade contractor Pune" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-cost-guide", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Cost Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Detailed cost analysis" })
          ] })
        ] }, "/curtain-wall-cost-guide")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  CommercialBuildingFacade as default
};
