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
function FacadeContractorPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Pune",
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
    "description": "Top-rated facade contractor in Pune. Curtain walls, structural glazing, ACP cladding, glass railings & facade maintenance. Serving Hinjewadi, Kharadi, Baner. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I choose a facade contractor in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Look for: a portfolio of 20+ completed projects with verifiable references; in-house technical team with structural glazing certification; direct relationships with glass and aluminium suppliers; documented quality assurance process; and post-completion AMC capability. Fine Glaze meets all criteria." } },
      { "@type": "Question", "name": "What does facade work cost per sq ft in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Facade costs in Pune vary by system: ACP cladding Rs 180-450/sq ft, structural glazing Rs 300-900/sq ft, curtain wall Rs 350-1200/sq ft, aluminium windows Rs 350-800/sq ft. Fine Glaze provides BOQ-based quotations after a free site assessment." } },
      { "@type": "Question", "name": "Does Fine Glaze handle facade design as well as installation in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our in-house design team prepares facade concepts, shop drawings, structural calculations, and material schedules. We coordinate with architects and structural consultants from concept approval to as-built documentation." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Pune", "item": "https://fineglaze.com/facade-contractor-pune" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Facade Contractor in Pune | Glass, ACP & Curtain Wall – Fine Glaze",
        description: "Top-rated facade contractor in Pune. Curtain walls, structural glazing, ACP cladding, glass railings & facade maintenance. Serving Hinjewadi, Kharadi, Baner. Free site visit.",
        canonical: "https://fineglaze.com/facade-contractor-pune",
        keywords: "facade contractor Pune, building facade Pune, glass facade contractor Pune, curtain wall contractor Pune, ACP cladding Pune, facade company Pune Maharashtra",
        ogImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Facade Contractor ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "in Pune" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze is Pune's most trusted facade contractor, delivering complete building envelope solutions for developers, architects, builders, and corporate clients. From initial design consultation through fabrication, installation, and long-term AMC — we manage every stage of the facade lifecycle." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
          alt: "Facade contractor Pune commercial building Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Complete Facade Solutions for Pune's Buildings" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
        "With over ",
        /* @__PURE__ */ jsx("strong", { children: "5 years of specialised facade experience" }),
        " and ",
        /* @__PURE__ */ jsx("strong", { children: "50+ completed projects" }),
        " across Pune and Maharashtra, Fine Glaze brings contractor-grade reliability with consultant-level technical expertise. Our services span curtain walls, structural glazing, ACP cladding, aluminium windows and doors, glass railings, and facade maintenance and AMC."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Pune's rapid urban expansion — particularly in Hinjewadi (IT), Kharadi (commercial), Wakad (residential), and Undri (mixed-use) — demands facade contractors who can manage complex projects with strict quality, safety, and timeline standards. Fine Glaze operates with an in-house design team, a QHSE-compliant site execution team, and a dedicated procurement desk that sources from certified global suppliers." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Our notable Pune projects include office towers in Hinjewadi IT Park Phases 1 & 2, luxury residential projects in Koregaon Park and Kalyani Nagar, hospital buildings in Kharadi and Viman Nagar, and mixed-use complexes in Magarpatta and Undri." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze maintains a strong Pune team with dedicated roles: project managers, site supervisors, quality inspectors, and a local procurement liaison. This structure allows us to run multiple simultaneous projects in Pune without compromising attention on any single project. Our Pune-based team means faster response times, shorter material lead times, and lower mobilisation costs compared to out-of-city contractors." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "We are a preferred vendor for several Tier-1 Pune developers and have established long-term relationships with major architects and PMC firms operating in the Pune market. Our references are available upon request for all project types and budget ranges." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Curtain Wall Systems" })
        ] }, "Curtain Wall Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Structural Glazing" })
        ] }, "Structural Glazing"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "ACP & Aluminium Cladding" })
        ] }, "ACP & Aluminium Cladding"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Glass Railings" })
        ] }, "Glass Railings"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Facade AMC & Maintenance" })
        ] }, "Facade AMC & Maintenance"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Turnkey Project Management" })
        ] }, "Turnkey Project Management")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How do I choose a facade contractor in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Look for: a portfolio of 20+ completed projects with verifiable references; in-house technical team with structural glazing certification; direct relationships with glass and aluminium suppliers; documented quality assurance process; and post-completion AMC capability. Fine Glaze meets all criteria." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What does facade work cost per sq ft in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Facade costs in Pune vary by system: ACP cladding Rs 180-450/sq ft, structural glazing Rs 300-900/sq ft, curtain wall Rs 350-1200/sq ft, aluminium windows Rs 350-800/sq ft. Fine Glaze provides BOQ-based quotations after a free site assessment." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Does Fine Glaze handle facade design as well as installation in Pune?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. Our in-house design team prepares facade concepts, shop drawings, structural calculations, and material schedules. We coordinate with architects and structural consultants from concept approval to as-built documentation." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Unitized curtain walls" })
          ] })
        ] }, "/curtain-wall-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Frameless glass facades" })
          ] })
        ] }, "/structural-glazing-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/acp-cladding-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "ACP Cladding Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "ACP panel cladding" })
          ] })
        ] }, "/acp-cladding-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/glass-railing-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Glass Railing Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Balcony glass railings" })
          ] })
        ] }, "/glass-railing-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Mumbai facade services" })
          ] })
        ] }, "/facade-contractor-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "AMC and maintenance" })
          ] })
        ] }, "/maintenance-services")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  FacadeContractorPune as default
};
