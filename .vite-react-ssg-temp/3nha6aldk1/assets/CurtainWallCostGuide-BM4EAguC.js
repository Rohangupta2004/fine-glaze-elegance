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
function CurtainWallCostGuide() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Cost in India 2024",
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
    "description": "Complete curtain wall cost guide India 2024. Stick system vs unitized pricing, glass types, installation factors. All prices explained. Get a custom quote from Fine Glaze."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cheapest curtain wall system in India?", "acceptedAnswer": { "@type": "Answer", "text": "The most cost-effective option is a basic stick system with 6mm SGU clear float glass, starting from Rs 350/sq ft supplied and installed. However, for LEED certification, thermal performance, or high-rise safety compliance, DGU or laminated options are necessary and add Rs 100-300/sq ft." } },
      { "@type": "Question", "name": "Should I choose unitized or stick system for my building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Use stick system for: buildings under 8 storeys; irregular bay sizes; refurbishment projects; or budget-constrained projects. Use unitized for: buildings above 10 storeys; tight installation timelines; LEED certification; and coastal or high-wind zones." } },
      { "@type": "Question", "name": "How much does curtain wall cost for a typical 10-storey office building?", "acceptedAnswer": { "@type": "Answer", "text": "For a 10-storey building with 300 sq m of curtain wall per floor (3000 sq m total), at Rs 600/sq ft stick DGU = approximately Rs 1.67 crore total; at Rs 900/sq ft unitized = approximately Rs 2.5 crore total, before interface and contingency." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall Cost in India 2024", "item": "https://fineglaze.com/curtain-wall-cost-guide" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Curtain Wall Cost in India 2024 | Complete Price Guide – Fine Glaze",
        description: "Complete curtain wall cost guide India 2024. Stick system vs unitized pricing, glass types, installation factors. All prices explained. Get a custom quote from Fine Glaze.",
        canonical: "https://fineglaze.com/curtain-wall-cost-guide",
        keywords: "curtain wall cost India, curtain wall price per sq ft, unitized curtain wall cost, stick system curtain wall price, glass facade cost India, curtain wall budget India 2024",
        ogImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Curtain Wall Cost ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Guide India 2024" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Planning a curtain wall for your commercial building? This comprehensive guide breaks down curtain wall costs in India — covering all system types, glass specifications, installation factors, and real pricing ranges based on Fine Glaze's extensive project experience across Pune, Mumbai, and Maharashtra." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
          alt: "Curtain wall cost guide India glass facade pricing Fine Glaze",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Curtain Wall Cost Ranges India 2024" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Curtain wall costs in India vary widely depending on system type, glass specification, building height, site complexity, and contractor quality. As a specialist facade contractor with 50+ completed projects, Fine Glaze has compiled this transparent pricing guide." }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto mt-6", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse text-sm", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-muted", children: [
          /* @__PURE__ */ jsx("th", { className: "border border-border p-3 text-left font-semibold", children: "System Type" }),
          /* @__PURE__ */ jsx("th", { className: "border border-border p-3 text-left font-semibold", children: "Price Range (per sq ft)" }),
          /* @__PURE__ */ jsx("th", { className: "border border-border p-3 text-left font-semibold", children: "Best For" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Stick System (SGU)" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 350–550" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Low-rise, smaller projects" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "bg-muted/30", children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Stick System (DGU)" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 450–650" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Energy-efficient low-rise" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Semi-Unitized System" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 550–850" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Mid-rise 8–20 storeys" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "bg-muted/30", children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Unitized System (SGU)" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 700–950" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "High-rise 20+ storeys" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Unitized System (DGU Low-E)" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "Rs 900–1,200" }),
            /* @__PURE__ */ jsx("td", { className: "border border-border p-3", children: "LEED / premium high-rise" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mt-10", children: "Key Factors That Affect Curtain Wall Cost" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-muted-foreground space-y-3 mt-4", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Building height:" }),
          " Every additional floor adds scaffold and gondola complexity. Above 15 storeys, installation costs increase by approximately Rs 25-50/sq ft per floor band."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Wind zone:" }),
          " Coastal Mumbai (Zone IV/V) requires heavier sections and more sealant, adding Rs 50-100/sq ft compared to inland Pune (Zone II)."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Glass specification:" }),
          " DGU Low-E adds Rs 100-200/sq ft over SGU. Laminated safety glass adds Rs 80-150/sq ft. Acoustic glass for airport proximity adds Rs 100-200/sq ft."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Panel size:" }),
          " Large format panels (2m x 3.5m+) require specialist handling equipment and safety glass specifications, increasing material cost by 15-25%."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Corner and jamb conditions:" }),
          " Complex geometry — corner mullions, sloped glazing, curved sections — can add 20-40% to system cost."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Spandrel treatment:" }),
          " Insulated spandrel panels with aluminium face add Rs 150-300/sq ft to areas requiring opaque treatment between floors."
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mt-10", children: "Curtain Wall Budget Planning Tips" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "For early-stage project budgeting, use Rs 600-800/sq ft as a standard DGU stick system curtain wall benchmark for Pune and other inland Maharashtra cities. Add 15% for Mumbai coastal requirements. Add 20% for unitized systems. Add 10-15% contingency for interface work with the structural frame. Always obtain a detailed BOQ-based quotation before finalising your facade budget — preliminary estimates can vary by 30-40% from actual tender prices." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Transparent Price Ranges" })
        ] }, "Transparent Price Ranges"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "All System Types Covered" })
        ] }, "All System Types Covered"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Glass Spec Cost Impact" })
        ] }, "Glass Spec Cost Impact"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Regional Cost Variations" })
        ] }, "Regional Cost Variations"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "LEED Cost Analysis" })
        ] }, "LEED Cost Analysis"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Free Custom Quotation" })
        ] }, "Free Custom Quotation")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What is the cheapest curtain wall system in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "The most cost-effective option is a basic stick system with 6mm SGU clear float glass, starting from Rs 350/sq ft supplied and installed. However, for LEED certification, thermal performance, or high-rise safety compliance, DGU or laminated options are necessary and add Rs 100-300/sq ft." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Should I choose unitized or stick system for my building in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Use stick system for: buildings under 8 storeys; irregular bay sizes; refurbishment projects; or budget-constrained projects. Use unitized for: buildings above 10 storeys; tight installation timelines; LEED certification; and coastal or high-wind zones." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How much does curtain wall cost for a typical 10-storey office building?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "For a 10-storey building with 300 sq m of curtain wall per floor (3000 sq m total), at Rs 600/sq ft stick DGU = approximately Rs 1.67 crore total; at Rs 900/sq ft unitized = approximately Rs 2.5 crore total, before interface and contingency." })
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
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Our curtain wall services" })
          ] })
        ] }, "/curtain-wall-systems"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-pune", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Pune" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall contractor Pune" })
          ] })
        ] }, "/curtain-wall-pune"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall contractor Mumbai" })
          ] })
        ] }, "/curtain-wall-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/aluminium-vs-acp-cladding", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Aluminium vs ACP Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "System comparison guide" })
          ] })
        ] }, "/aluminium-vs-acp-cladding"),
        /* @__PURE__ */ jsxs(Link, { to: "/commercial-building-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Commercial Facade Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Commercial facade overview" })
          ] })
        ] }, "/commercial-building-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Get a Quote" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Free custom quotation" })
          ] })
        ] }, "/contact")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  CurtainWallCostGuide as default
};
