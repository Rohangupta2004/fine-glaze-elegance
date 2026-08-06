import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, S as SEO, c as cn, B as Button, C as CTASection } from "../main.mjs";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Shield, Clock, Award, Wrench, MapPin, ChevronDown } from "lucide-react";
import { u as useScrollAnimation } from "./useScrollAnimation-BUkRNC2S.js";
import { useState } from "react";
import "vite-react-ssg";
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
function FadeIn({
  children,
  className,
  delay = 0
}) {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      ),
      style: { transitionDelay: `${delay}ms` },
      children
    }
  );
}
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-stone-200", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(!open),
        className: "w-full flex items-center justify-between py-4 text-left group",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-[15px] font-semibold text-stone-800 pr-8 group-hover:text-amber-700 transition-colors", children: q }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              size: 18,
              className: cn(
                "text-stone-400 shrink-0 transition-transform duration-300",
                open && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-4" : "max-h-0"
        ),
        children: /* @__PURE__ */ jsx("p", { className: "text-stone-500 leading-relaxed text-sm", children: a })
      }
    )
  ] });
}
const IMG = {
  hero: "/acp-building.webp",
  pvdf: "/acp-cladding.webp",
  pe: "/acp-panels.webp",
  wood: "/acp-finishes.webp",
  mirror: "/acp-panels.webp",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop"
};
const SYSTEMS = [
  {
    num: "01",
    title: "PVDF Coated ACP",
    desc: "Premium fluorocarbon (PVDF) coated panels with superior UV resistance and colour retention. The gold standard for external cladding — maintains appearance for 20+ years without fading or chalking.",
    glass: "PVDF 70/30",
    wind: "FR mineral core",
    bestFor: "Towers, corporate HQs",
    price: "₹180 – ₹350 /sq ft",
    img: "pvdf"
  },
  {
    num: "02",
    title: "PE Coated ACP",
    desc: "Polyester-coated panels offering excellent value for cost-conscious projects. Available in all standard colours and finishes. Best for interior cladding, signage, and canopy soffits.",
    glass: "Polyester (PE)",
    wind: "PE / FR core",
    bestFor: "Interiors, signage, canopies",
    price: "₹90 – ₹160 /sq ft",
    img: "pe"
  },
  {
    num: "03",
    title: "Wood-Grain & Stone Finish",
    desc: "Digital printing technology creates realistic wood, stone, and marble textures on ACP surfaces. Natural aesthetics without the weight, maintenance, or cost of real materials.",
    glass: "Digital print + PVDF",
    wind: "FR mineral core",
    bestFor: "Hotels, residences, retail",
    price: "₹220 – ₹400 /sq ft",
    img: "wood"
  },
  {
    num: "04",
    title: "Mirror & Metallic ACP",
    desc: "High-reflectivity aluminium panels with mirror-polish or brushed metallic finishes. Creates striking visual impact for feature walls, fascias, and architectural accents.",
    glass: "Anodised / mirror",
    wind: "FR mineral core",
    bestFor: "Feature walls, retail fronts",
    price: "₹250 – ₹450 /sq ft",
    img: "mirror"
  }
];
const STEPS = [
  { num: "01", title: "Site Survey", desc: "Measure facade area, assess substrate & plan panel layout" },
  { num: "02", title: "Shop Drawing", desc: "Panel cutting plan, joint layout & colour/finish approval" },
  { num: "03", title: "Fabrication", desc: "CNC routing, folding & sub-frame preparation" },
  { num: "04", title: "Installation", desc: "Sub-frame fixing, panel mounting & joint sealing" }
];
function AcpCladding() {
  const [activeSystem, setActiveSystem] = useState(0);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ACP & Metal Cladding Systems",
    serviceType: "ACP Cladding Installation",
    provider: {
      "@type": "LocalBusiness",
      name: "Fine Glaze",
      "@id": "https://fineglaze.com",
      url: "https://fineglaze.com",
      telephone: "+91-8369233566",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN"
      }
    },
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Navi Mumbai" }
    ],
    description: "Aluminium Composite Panel cladding — PVDF, PE, wood-grain & mirror finishes. Fire-retardant FR grade panels from Aludecor, Alstrong & Reynobond. 20-year colour warranty."
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "ACP & Metal Cladding", item: "https://fineglaze.com/acp-aluminium-cladding" }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ACP cladding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACP (Aluminium Composite Panel) cladding uses panels made of two aluminium sheets bonded to a core material. They are fixed to a sub-frame on the building exterior, creating a flat, modern cladding surface available in hundreds of colours and finishes."
        }
      },
      {
        "@type": "Question",
        name: "Is ACP cladding fire safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We exclusively use FR (Fire Retardant) grade ACP for external cladding. FR panels have a mineral-filled core that limits flame spread and meets NBC (National Building Code) fire safety requirements. PE core panels are only used for interiors."
        }
      },
      {
        "@type": "Question",
        name: "How much does ACP cladding cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PE coated ACP starts at ₹90/sq ft for interiors. PVDF coated panels range from ₹180–₹350/sq ft. Wood-grain and stone finishes cost ₹220–₹400/sq ft. Prices include panel, sub-frame, and installation."
        }
      }
    ]
  };
  const current = SYSTEMS[activeSystem];
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "ACP Cladding Contractor Pune & Mumbai | Aluminium Panel Facades - Fine Glaze",
        description: "Top ACP cladding contractor in Pune & Mumbai. PVDF-coated fire-retardant aluminium composite panels for commercial facades, IT parks & retail buildings.",
        canonical: "https://fineglaze.com/acp-aluminium-cladding",
        keywords: "ACP cladding contractor, aluminium composite panel cladding, ACP facade, aluminium cladding, PVDF ACP, fire-retardant ACP",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: IMG.hero,
          alt: "ACP aluminium cladding facade — Fine Glaze",
          className: "absolute inset-0 w-full h-full object-cover object-center",
          style: { animation: "sgZoom 20s ease-in-out infinite alternate" },
          loading: "eager"
        }
      ),
      /* @__PURE__ */ jsx("style", { children: `@keyframes sgZoom { from { transform: scale(1.0); } to { transform: scale(1.08); } }` }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 px-5 md:px-16 pb-10 md:pb-20 pt-24", children: [
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-5 animate-fade-in",
            style: { animationDelay: "0.05s" },
            children: "Fine Glaze · Pune · Mumbai · Maharashtra"
          }
        ),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: "font-extrabold text-white leading-tight tracking-tight animate-fade-in-up",
            style: { fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", animationDelay: "0.1s" },
            children: [
              "ACP & Aluminium",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Cladding" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { style: { fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }, children: "Contractors." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up",
            style: { animationDelay: "0.2s" },
            children: "Fire-retardant ACP and aluminium cladding for durable, weather-resistant building exteriors across Pune and Mumbai."
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mt-8 flex items-center gap-8 animate-fade-in-up",
            style: { animationDelay: "0.3s" },
            children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contact",
                  className: "text-white font-semibold text-base border-b border-amber-400 pb-0.5 hover:text-amber-400 transition-colors tracking-wide",
                  children: "Get Free Quote"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "tel:+918369233566",
                  className: "text-white/60 font-medium text-base hover:text-white transition-colors tracking-wide",
                  children: "+91 83692 33566"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-1.5 mt-4 animate-fade-in-up",
            style: { animationDelay: "0.4s" },
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 12, className: "text-amber-400 fill-amber-400" }, i)) }),
              /* @__PURE__ */ jsx("span", { className: "text-white/50 text-xs font-medium ml-0.5", children: "5.0 Google · Embassy REIT Vendor · 10+ Landmark Projects" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40", children: [
        /* @__PURE__ */ jsx("span", { className: "text-white text-[10px] uppercase tracking-[0.25em] rotate-90 mb-3", children: "Scroll" }),
        /* @__PURE__ */ jsx("div", { className: "w-px h-12 bg-gradient-to-b from-white to-transparent" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16 max-w-3xl text-center", children: /* @__PURE__ */ jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "What is ACP Cladding" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5", children: [
        "Two aluminium sheets bonded to a mineral core —",
        "  ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "lightweight, fire-safe, and available in unlimited finishes." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[15px] md:text-base leading-relaxed", children: "Aluminium Composite Panels (ACP) consist of two aluminium sheets bonded to a non-combustible mineral-filled core. They provide a flat, seamless cladding surface that transforms any building exterior. Available in PVDF and PE coatings with solid, metallic, wood-grain, stone, and mirror finishes." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-900 py-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-700", children: [
      { number: "20yr", label: "Colour Warranty (PVDF)" },
      { number: "FR", label: "Fire Retardant Grade" },
      { number: "5+", label: "Years Experience" },
      { number: "100+", label: "Finish Options" }
    ].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center px-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-bold text-white", children: s.number }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[11px] uppercase tracking-widest mt-1", children: s.label })
    ] }, s.label)) }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Our Panels" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "ACP Panel Systems We Install" })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 100, children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-8", children: SYSTEMS.map((sys, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveSystem(i),
            className: cn(
              "px-4 py-2 text-sm font-medium transition-all duration-200",
              activeSystem === i ? "bg-stone-900 text-white" : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
            ),
            children: sys.title
          },
          sys.num
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-0 bg-white overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-[280px] md:h-[360px] overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: IMG[current.img],
                alt: current.title,
                className: "w-full h-full object-cover transition-opacity duration-500",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-stone-900/80 text-white text-xs font-bold px-3 py-1.5 tracking-wider", children: current.num })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-10 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-stone-900 mb-3", children: current.title }),
            /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm leading-relaxed mb-6", children: current.desc }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Coating" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: current.glass })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Core" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: current.wind })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Best For" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: current.bestFor })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-3 border border-amber-200", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-amber-600 mb-1", children: "Rate" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-stone-900", children: current.price })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(Button, { size: "sm", className: "bg-stone-900 hover:bg-stone-800 text-white gap-2", children: [
              "Get Quote for ",
              current.title.split(" ")[0],
              " ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] }) })
          ] })
        ] }, current.num)
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Why Fine Glaze" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "Built for performance. Delivered on schedule." })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 100, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [
        {
          icon: Shield,
          title: "Fire Safe",
          desc: "Only FR (Fire Retardant) grade ACP panels used for external cladding. NBC fire safety compliant."
        },
        {
          icon: Clock,
          title: "Fast Install",
          desc: "Lightweight panels install 3x faster than natural stone. Minimal scaffolding time."
        },
        {
          icon: Award,
          title: "Trusted Brands",
          desc: "We use panels from Aludecor, Alstrong, and Reynobond — the most trusted ACP manufacturers."
        },
        {
          icon: Wrench,
          title: "Clean Finish",
          desc: "CNC routing for precise folds. Silicone-sealed joints for a seamless, watertight appearance."
        }
      ].map((item) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 bg-amber-50 text-amber-700 mb-4", children: /* @__PURE__ */ jsx(item.icon, { size: 22 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-stone-900 mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-xs leading-relaxed", children: item.desc })
      ] }, item.title)) }) }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 200, className: "mt-12 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-stone-400 text-sm", children: [
        "Trusted by ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-700 font-semibold", children: "Embassy REIT" }),
        " ·",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-700 font-semibold", children: "LTIMindtree" }),
        " ·",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-700 font-semibold", children: "Pune International Airport" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "How We Work" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "From first visit to final handover" })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 100, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: STEPS.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        i < STEPS.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-5 left-[60%] right-0 h-px bg-stone-300" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-5 relative", children: [
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-stone-100 block mb-3", children: step.num }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-stone-900 mb-1", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-xs leading-relaxed", children: step.desc })
        ] })
      ] }, step.num)) }) })
    ] }) }),
    /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "relative h-[35vh] md:h-[40vh] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: IMG.process,
          alt: "Fine Glaze ACP cladding installation",
          className: "w-full h-full object-cover",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center text-center px-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm uppercase tracking-widest mb-2", children: "Our Promise" }),
        /* @__PURE__ */ jsx("p", { className: "text-white text-xl md:text-3xl font-bold max-w-xl", children: "From CNC routing to final sealant — every step done in-house for a flawless finish." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16 max-w-3xl", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Pricing" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900 mb-2", children: "ACP Cladding Cost — 2026" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-sm", children: "Indicative rates. Final cost depends on specifications & complexity. GST extra." })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 100, children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-stone-800", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500", children: "System" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500", children: "Coating / Finish" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500 text-right", children: "Rate / sq ft" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "text-sm", children: [
            { system: "PVDF Coated ACP", glass: "PVDF 70/30 + FR core", price: "₹180 – ₹350" },
            { system: "PE Coated ACP", glass: "Polyester + PE/FR core", price: "₹90 – ₹160" },
            { system: "Wood-Grain / Stone", glass: "Digital print + PVDF", price: "₹220 – ₹400" },
            { system: "Mirror / Metallic", glass: "Anodised / mirror finish", price: "₹250 – ₹450" }
          ].map((row) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-stone-100 hover:bg-stone-50 transition-colors", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3 font-semibold text-stone-800", children: row.system }),
            /* @__PURE__ */ jsx("td", { className: "py-3 text-stone-500", children: row.glass }),
            /* @__PURE__ */ jsx("td", { className: "py-3 text-right font-bold text-stone-900", children: row.price })
          ] }, row.system)) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-stone-900 hover:bg-stone-800 text-white gap-2 px-8", children: [
          "Get Exact Quote — Free Site Visit ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-14 md:py-16 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16 max-w-3xl", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Common Questions" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "FAQ" })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 100, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "What is ACP cladding?",
            a: "ACP (Aluminium Composite Panel) cladding uses panels made of two aluminium sheets bonded to a core material. They are fixed to a sub-frame on the building exterior, creating a flat, modern cladding surface available in hundreds of colours and finishes."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Is ACP cladding fire safe?",
            a: "We exclusively use FR (Fire Retardant) grade ACP for external cladding. FR panels have a mineral-filled core that limits flame spread and meets NBC (National Building Code) fire safety requirements. PE core panels are only used for interiors."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "How much does ACP cladding cost per sq ft in India?",
            a: "PE coated ACP starts at ₹90/sq ft for interiors. PVDF coated panels range from ₹180–₹350/sq ft. Wood-grain and stone finishes cost ₹220–₹400/sq ft. Prices include panel, sub-frame, and installation."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "How long does PVDF ACP last?",
            a: "PVDF (fluorocarbon) coated ACP panels come with a 20-year colour warranty. They resist UV fading, chalking, and chemical exposure far better than PE coated panels — making them the preferred choice for external facades."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Can ACP be used for renovation and existing buildings?",
            a: "Yes. ACP is ideal for building renovation because it is lightweight, installs over existing facades, and transforms the appearance quickly. The aluminium sub-frame can be adapted to any building surface."
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-900 py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Where We Work" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-6 gap-y-2", children: ["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Nashik", "Hinjewadi", "Pimpri-Chinchwad"].map((city) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 11, className: "text-amber-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/60 text-sm", children: city })
        ] }, city)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Other Services" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-1.5", children: [
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "Aluminium Facade", href: "/aluminium-facade" },
          { title: "Glass Railings", href: "/glass-railings" },
          { title: "Facade AMC", href: "/maintenance-services" },
          { title: "All Services →", href: "/services" }
        ].map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            to: link.href,
            className: "text-white/50 text-sm hover:text-amber-400 transition-colors",
            children: link.title
          },
          link.href
        )) })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  AcpCladding as default
};
