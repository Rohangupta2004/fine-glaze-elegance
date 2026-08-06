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
function HotelFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hotel & Hospitality Building Facade Contractor India – Fine Glaze",
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
    "description": "Specialist hotel facade contractor in India. Structural glazing, curtain wall & ACP cladding for 3-star to 5-star hotels. Leela Hotel reference project. Pune & Mumbai."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is used in 5-star hotels in India?", "acceptedAnswer": { "@type": "Answer", "text": "5-star hotels in India predominantly use unitized curtain wall systems with DGU and specialty glass on guest room floors, structural glazing for entrance lobbies and atrium walls, and custom aluminium louvres for sun shading on south and west facades. Fine Glaze has delivered this combination for hospitality clients including the Leela Hotel." } },
      { "@type": "Question", "name": "How does Fine Glaze ensure facade quality standards for hotel projects?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze's hotel project quality protocol includes: factory mock-up installation for owner approval before production; 100% visual inspection of all panels; independent third-party water penetration testing; colour-match certification for all aluminium extrusions; and a dedicated quality inspector assigned full-time to the project." } },
      { "@type": "Question", "name": "What glass is used for hotel guest room facades?", "acceptedAnswer": { "@type": "Answer", "text": "Hotel guest room facades typically use DGU with outer tinted or reflective glass for solar control and privacy, inner clear glass for outward views, Low-E coating for thermal comfort, and acoustic laminated inner pane where road or aircraft noise is a concern. Fine Glaze specifies glass packages optimised for each hotel's orientation and location." } }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Hotel & Hospitality Building Facade Contractor India – Fine Glaze", "item": "https://fineglaze.com/hotel-facade" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Hotel Facade Contractor Pune & Mumbai | Hotel Glass Facades & Canopies - Fine Glaze",
        description: "Top hotel facade contractor in Pune & Mumbai. Acoustic glass facades, curtain walls, entrance canopies & ACP cladding for luxury hotels & resorts.",
        canonical: "https://fineglaze.com/hotel-facade",
        keywords: "hotel facade contractor, hotel glass facade, hotel ACP cladding, hotel curtain wall, hotel entrance canopy",
        ogImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
          "Hotel & Hospitality ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Facade Specialist India" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 mb-8", children: "Hotel and hospitality facades are among the most demanding in the construction industry — combining premium aesthetics, iconic architectural identity, high-performance weather protection, and luxurious material finishes. Fine Glaze has delivered facade systems for hospitality projects including the Leela Hotel, establishing our credentials in India's premier hotel construction sector." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-amber-600 hover:bg-amber-700", children: "Get Free Quote" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "View Projects" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
          alt: "Hotel hospitality building facade curtain wall India Fine Glaze Leela",
          className: "rounded-xl shadow-2xl object-cover h-[420px] w-full",
          loading: "eager",
          width: "600",
          height: "420"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "What Sets Hotel Facade Projects Apart" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Hotel and hospitality buildings set the highest standard for facade quality in the construction industry. Every facade element — from the entrance canopy to the room-floor curtain wall — must project luxury, permanence, and architectural distinction. Fine Glaze brings a track record at this level, having completed the Leela Hotel facade project as a reference installation of the highest quality." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Hotel facades demand precision in every detail: glass with consistent colour, reflectivity, and flatness across hundreds of panels; aluminium extrusions with tight tolerance on colour matching and surface finish; silicone sealant lines that are perfectly straight with consistent tooling profile; and zero visible defects that would be immediately noticed by design-conscious hotel guests and owners. Fine Glaze's quality management system for hotel projects includes 100% visual inspection of every panel before despatch and mandatory 5-year workmanship warranty." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
        "The most common facade systems for Indian hotels by category: ",
        /* @__PURE__ */ jsx("strong", { children: "5-star hotels:" }),
        " Unitized curtain wall with DGU and specialty glass (frosted, patterned, or ceramic frit); structural glazing for entrance canopies; custom aluminium louvers and screens. ",
        /* @__PURE__ */ jsx("strong", { children: "4-star hotels:" }),
        " Stick system curtain wall with DGU; ACP cladding for service zones; glass railings for balconies. ",
        /* @__PURE__ */ jsx("strong", { children: "3-star and business hotels:" }),
        " ACP cladding with aluminium window systems; feature glass entrance canopy."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Fine Glaze works closely with hotel architects and international hotel brands' design standards teams to ensure facade materials, glass specifications, and aluminium finishes comply with brand design guidelines. Our experience with global hotel brands' specifications makes us a reliable partner for developers working within brand standards." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "What We Offer" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Leela Hotel Reference Project" })
        ] }, "Leela Hotel Reference Project"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "5-Star Quality Standards" })
        ] }, "5-Star Quality Standards"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Unitized Curtain Wall Systems" })
        ] }, "Unitized Curtain Wall Systems"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Specialty Glass Options" })
        ] }, "Specialty Glass Options"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Hotel Brand Spec Compliance" })
        ] }, "Hotel Brand Spec Compliance"),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "5-Year Workmanship Warranty" })
        ] }, "5-Year Workmanship Warranty")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What facade system is used in 5-star hotels in India?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "5-star hotels in India predominantly use unitized curtain wall systems with DGU and specialty glass on guest room floors, structural glazing for entrance lobbies and atrium walls, and custom aluminium louvres for sun shading on south and west facades. Fine Glaze has delivered this combination for hospitality clients including the Leela Hotel." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "How does Fine Glaze ensure facade quality standards for hotel projects?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fine Glaze's hotel project quality protocol includes: factory mock-up installation for owner approval before production; 100% visual inspection of all panels; independent third-party water penetration testing; colour-match certification for all aluminium extrusions; and a dedicated quality inspector assigned full-time to the project." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "What glass is used for hotel guest room facades?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Hotel guest room facades typically use DGU with outer tinted or reflective glass for solar control and privacy, inner clear glass for outward views, Low-E coating for thermal comfort, and acoustic laminated inner pane where road or aircraft noise is a concern. Fine Glaze specifies glass packages optimised for each hotel's orientation and location." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800 mb-5", children: "Explore Related Services" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/structural-glazing", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Structural Glazing" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Structural glazing systems" })
          ] })
        ] }, "/structural-glazing"),
        /* @__PURE__ */ jsxs(Link, { to: "/curtain-wall-systems", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Curtain Wall Systems" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Curtain wall service" })
          ] })
        ] }, "/curtain-wall-systems"),
        /* @__PURE__ */ jsxs(Link, { to: "/facade-contractor-mumbai", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Contractor Mumbai" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Mumbai facade services" })
          ] })
        ] }, "/facade-contractor-mumbai"),
        /* @__PURE__ */ jsxs(Link, { to: "/commercial-building-facade", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Commercial Facade Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Commercial facade overview" })
          ] })
        ] }, "/commercial-building-facade"),
        /* @__PURE__ */ jsxs(Link, { to: "/maintenance-services", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Facade Maintenance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "AMC & maintenance" })
          ] })
        ] }, "/maintenance-services"),
        /* @__PURE__ */ jsxs(Link, { to: "/portfolio", className: "group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white", children: [
          /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-800 text-sm", children: "Portfolio" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "View completed projects" })
          ] })
        ] }, "/portfolio")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  HotelFacade as default
};
