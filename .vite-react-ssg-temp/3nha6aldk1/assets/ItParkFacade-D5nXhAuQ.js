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
function ItParkFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Park Facade Contractor India",
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
    "description": "Specialist facade contractor for IT parks and tech campuses in India. LEED-compliant curtain walls, DGU Low-E glass, fast installation for Hinjewadi, Kharadi & Mahape. Free site visit."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is standard for IT parks in India?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain wall with DGU Low-E glass (SHGC 0.25-0.35) is the industry standard for IT parks in India. It delivers LEED energy performance credits, fast installation to meet tight occupier timelines, factory-controlled quality, and the premium glass aesthetic that MNC occupiers expect." } },
      { "@type": "Question", "name": "Does Fine Glaze have experience with LEED facade compliance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze has completed multiple LEED-targeted IT park projects, providing glass with certified SHGC and U-value test reports, aluminium with low-VOC PVDF coating certification, and facade performance documentation required for LEED EAc1 and IEQc8.1 credits." } },
      { "@type": "Question", "name": "How does Fine Glaze handle large multi-building IT campus projects?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze assigns a dedicated project director for campus projects, runs parallel fabrication for multiple blocks, maintains a dedicated on-site quality team, and provides weekly progress reporting with Gantt chart tracking. Our largest single project is the LTIMindtree campus in Navi Mumbai covering multiple buildings." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "IT Park Facade Contractor India", "item": "https://fineglaze.com/it-park-facade" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "IT Park Facade Contractor Pune & Mumbai | Corporate Curtain Walls - Fine Glaze",
        description: "Specialist IT park facade contractor in Pune & Mumbai. Unitized curtain walls & energy-efficient DGU Low-E glass facades for tech campuses & corporate towers.",
        canonical: "https://fineglaze.com/it-park-facade",
        keywords: "IT park facade contractor, office facade contractor, corporate building facade, technology park facade, curtain wall IT park",
        ogImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "IT Park Facade ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Contractor India" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Fine Glaze is a specialist facade contractor for IT parks, technology campuses, and corporate office complexes across India. Our LEED-compatible curtain wall systems, energy-efficient glazing specifications, and track record of large-scale campus projects make us the preferred choice for India's top IT real estate developers." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
          alt: "IT park campus curtain wall facade India LEED Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "What IT Parks Demand from Facade Contractors" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
        "IT parks and technology campuses have unique facade requirements that distinguish them from standard commercial buildings. Key requirements include: ",
        /* @__PURE__ */ jsx("strong", { children: "LEED certification compliance" }),
        " — most MNC occupiers mandate LEED Gold or Platinum; ",
        /* @__PURE__ */ jsx("strong", { children: "tight construction schedules" }),
        " — IT park developers frequently work to aggressive timelines driven by occupier pre-commitments; ",
        /* @__PURE__ */ jsx("strong", { children: "large-scale simultaneous multi-block execution" }),
        "; and ",
        /* @__PURE__ */ jsx("strong", { children: "long-term performance guarantees" }),
        " to satisfy institutional building owners."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "Fine Glaze has directly addressed these requirements through our landmark IT park projects. The ",
        /* @__PURE__ */ jsx("strong", { children: "LTIMindtree Mensa Campus in Mahape, Navi Mumbai" }),
        " — one of our flagship projects — required coordinated facade execution across multiple buildings with unitized curtain wall systems, DGU Low-E glazing for LEED energy compliance, and strict quality control to satisfy the building owner's international standards."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "For IT park facades, Fine Glaze consistently specifies: ",
        /* @__PURE__ */ jsx("strong", { children: "unitized curtain wall" }),
        " for buildings above 6 storeys; ",
        /* @__PURE__ */ jsx("strong", { children: "DGU with Low-E glass" }),
        " (SHGC 0.25–0.35, U-value below 2.0 W/m2K); ",
        /* @__PURE__ */ jsx("strong", { children: "6063-T6 aluminium extrusions" }),
        " with PVDF coating for 20+ year performance; and ",
        /* @__PURE__ */ jsx("strong", { children: "stainless steel anchors and EPDM gaskets" }),
        " for long-term weather resistance."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "We serve all major IT park corridors in India: Hinjewadi IT Park Phases 1-3 (Pune), Kharadi EON IT Park (Pune), Mahape MIDC (Navi Mumbai), Airoli (Navi Mumbai), Whitefield (Bangalore), HITEC City (Hyderabad), and Rajiv Gandhi IT Corridor (Chennai). Fine Glaze's experience in each of these locations translates into faster mobilisation, better local supplier relationships, and more competitive pricing." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "LEED Gold/Platinum Compliance" })
        ] }, "LEED Gold/Platinum Compliance"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "DGU Low-E Glass Specification" })
        ] }, "DGU Low-E Glass Specification"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Unitized Curtain Wall Systems" })
        ] }, "Unitized Curtain Wall Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Multi-Block Campus Projects" })
        ] }, "Multi-Block Campus Projects"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "LTIMindtree Campus Reference" })
        ] }, "LTIMindtree Campus Reference"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Fast-Track Installation Programs" })
        ] }, "Fast-Track Installation Programs")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What facade system is standard for IT parks in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Unitized curtain wall with DGU Low-E glass (SHGC 0.25-0.35) is the industry standard for IT parks in India. It delivers LEED energy performance credits, fast installation to meet tight occupier timelines, factory-controlled quality, and the premium glass aesthetic that MNC occupiers expect." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Does Fine Glaze have experience with LEED facade compliance?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes. Fine Glaze has completed multiple LEED-targeted IT park projects, providing glass with certified SHGC and U-value test reports, aluminium with low-VOC PVDF coating certification, and facade performance documentation required for LEED EAc1 and IEQc8.1 credits." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How does Fine Glaze handle large multi-building IT campus projects?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fine Glaze assigns a dedicated project director for campus projects, runs parallel fabrication for multiple blocks, maintains a dedicated on-site quality team, and provides weekly progress reporting with Gantt chart tracking. Our largest single project is the LTIMindtree campus in Navi Mumbai covering multiple buildings." })
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
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Facade services Pune" })
          ] })
        ] }, "/facade-contractor-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-navi-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Navi Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Navi Mumbai facade" })
          ] })
        ] }, "/facade-contractor-navi-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/commercial-building-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Commercial Facade Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Commercial facade overview" })
          ] })
        ] }, "/commercial-building-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-cost-guide", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Cost Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall cost guide" })
          ] })
        ] }, "/curtain-wall-cost-guide"),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Get a Quote" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Free consultation" })
          ] })
        ] }, "/contact")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  ItParkFacade as default
};
