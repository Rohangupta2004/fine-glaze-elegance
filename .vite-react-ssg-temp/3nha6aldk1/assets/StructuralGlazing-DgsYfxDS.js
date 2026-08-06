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
  hero: "https://images.unsplash.com/photo-1430417934865-589b63ad5c00?fm=jpg&q=85&w=2400&auto=format&fit=crop",
  twoSide: "https://images.unsplash.com/photo-1469981283837-561b3779462f?fm=jpg&q=80&w=900&auto=format&fit=crop",
  fourSide: "https://images.unsplash.com/photo-1621831337128-35676ca30868?fm=jpg&q=80&w=900&auto=format&fit=crop",
  spider: "https://images.unsplash.com/photo-1509024368907-57294758cfc5?fm=jpg&q=80&w=900&auto=format&fit=crop",
  canopy: "https://images.unsplash.com/photo-1486927181919-3ac1fc3a8082?fm=jpg&q=80&w=900&auto=format&fit=crop",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop"
};
const SYSTEMS = [
  {
    num: "01",
    title: "2-Side Structural Glazing",
    desc: "Two edges bonded with structural silicone, remaining two held with aluminium pressure caps. The most cost-effective way to get a partially frameless facade.",
    glass: "6–12mm toughened",
    wind: "Up to 3.0 kPa",
    bestFor: "IT parks, offices, showrooms",
    price: "₹350 – ₹550 /sq ft",
    img: "twoSide"
  },
  {
    num: "02",
    title: "4-Side Structural Glazing",
    desc: "All four edges bonded — no external frame visible. The premium choice for high-end towers and corporate headquarters.",
    glass: "10–19mm DGU / Low-E",
    wind: "Up to 4.5 kPa",
    bestFor: "Towers, hotels, airports",
    price: "₹500 – ₹800 /sq ft",
    img: "fourSide"
  },
  {
    num: "03",
    title: "Spider / Point-Fixed Glazing",
    desc: "Glass panels held by stainless steel spider fittings at drilled points — near-invisible structure for maximum transparency.",
    glass: "12–19mm laminated",
    wind: "SS 316 marine-grade",
    bestFor: "Atriums, lobbies, feature walls",
    price: "₹800 – ₹1,500 /sq ft",
    img: "spider"
  },
  {
    num: "04",
    title: "Frameless Glass Canopies",
    desc: "Overhead laminated glass supported by structural fins or steel cables — fully weatherproof with integrated drainage.",
    glass: "17.52–21.52mm laminated",
    wind: "Aluminium fins / steel",
    bestFor: "Entrances, malls, bridges",
    price: "On Request",
    img: "canopy"
  }
];
const STEPS = [
  { num: "01", title: "Site Visit", desc: "Engineers assess your building and design intent" },
  { num: "02", title: "Engineering", desc: "Shop drawings & IS-standard structural calculations" },
  { num: "03", title: "Fabrication", desc: "Aluminium & glass systems built in our Pune facility" },
  { num: "04", title: "Installation", desc: "Certified crews install with quality checkpoints" }
];
function StructuralGlazing() {
  const [activeSystem, setActiveSystem] = useState(0);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Structural Glazing Systems",
    serviceType: "Structural Glazing Installation",
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
    description: "Frameless structural glazing systems — 2-side, 4-side & spider glazing for commercial buildings, showrooms, and premium architecture across India. ₹350–₹1,500/sq ft."
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Structural Glazing", item: "https://fineglaze.com/structural-glazing" }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is structural glazing and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Structural glazing bonds glass to an aluminium frame using structural silicone sealant instead of mechanical fixings — creating a seamless, frameless glass appearance while maintaining structural integrity."
        }
      },
      {
        "@type": "Question",
        name: "How much does structural glazing cost per sq ft in India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard 2-side SSG: ₹350–₹550/sq ft. Premium 4-side SSG: ₹500–₹800/sq ft. Spider glazing: ₹800–₹1,500/sq ft."
        }
      }
    ]
  };
  const current = SYSTEMS[activeSystem];
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Structural Glazing Contractor Pune & Mumbai | Frameless Glass Facades - Fine Glaze",
        description: "Leading structural glazing contractor in Pune & Mumbai. 2-side, 4-side & spider glazed facade systems for commercial buildings, IT parks & showrooms.",
        canonical: "https://fineglaze.com/structural-glazing",
        keywords: "structural glazing contractor, structural glazing systems, glass facade contractor, 2-side structural glazing, 4-side structural glazing, frameless glass facade",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: IMG.hero,
          alt: "Structural glazing glass facade — Fine Glaze",
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
              "Structural Glazing",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Contractors" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { style: { fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }, children: "Pune · Mumbai." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up",
            style: { animationDelay: "0.2s" },
            children: "Frameless 2-side, 4-side and spider glazing systems for commercial buildings, IT campuses and showrooms across Pune and Mumbai."
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
      /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "What is Structural Glazing" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5", children: [
        "Glass bonded directly to structure —",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "no visible frames, no clamps, no compromise." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[15px] md:text-base leading-relaxed", children: "Structural glazing replaces traditional mechanical fixings with high-performance structural silicone sealant, creating completely seamless, frameless facades for modern commercial buildings across India." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-900 py-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-700", children: [
      { number: "5+", label: "Years Experience" },
      { number: "10+", label: "Projects Delivered" },
      { number: "0", label: "Safety Incidents" },
      { number: "25yr", label: "Silicone Warranty" }
    ].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center px-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-bold text-white", children: s.number }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[11px] uppercase tracking-widest mt-1", children: s.label })
    ] }, s.label)) }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Our Systems" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "Structural Glazing Systems We Install" })
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
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Glass" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: current.glass })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Spec" }),
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
          title: "Zero Incidents",
          desc: "Strict safety protocols on every project. Certified installation crews only."
        },
        {
          icon: Clock,
          title: "On-Time Delivery",
          desc: "Milestone-based handovers. Embassy 247 completed with zero delays."
        },
        {
          icon: Award,
          title: "In-House Facility",
          desc: "We design, fabricate & install from our own Pune facility. No subcontracting."
        },
        {
          icon: Wrench,
          title: "AMC Support",
          desc: "Ongoing maintenance contracts for sealant, glass replacement & cleaning."
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
          alt: "Fine Glaze installation crew at work",
          className: "w-full h-full object-cover",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center text-center px-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm uppercase tracking-widest mb-2", children: "Our Promise" }),
        /* @__PURE__ */ jsx("p", { className: "text-white text-xl md:text-3xl font-bold max-w-xl", children: "Every facade engineered in-house. Every installation by our own teams." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16 max-w-3xl", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Pricing" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900 mb-2", children: "Structural Glazing Cost — 2026" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-sm", children: "Indicative rates. Final cost depends on height, glass spec & complexity. GST extra." })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 100, children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-stone-800", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500", children: "System" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500", children: "Glass" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500 text-right", children: "Rate / sq ft" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "text-sm", children: [
            { system: "2-Side SSG", glass: "6 – 12 mm toughened", price: "₹350 – ₹550" },
            { system: "4-Side SSG", glass: "10 – 19 mm DGU / Low-E", price: "₹500 – ₹800" },
            { system: "Spider / Point-Fixed", glass: "12 – 19 mm laminated", price: "₹800 – ₹1,500" },
            { system: "Frameless Canopy", glass: "17.52 – 21.52 mm laminated", price: "On request" }
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
            q: "What is structural glazing and how does it work?",
            a: "Structural glazing bonds glass to an aluminium frame using structural silicone sealant instead of mechanical fixings — creating a seamless, frameless glass appearance while maintaining structural integrity against wind loads and weather."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "How much does structural glazing cost per sq ft in India?",
            a: "Standard 2-side SSG ranges from ₹350–₹550 per sq ft. Premium 4-side SSG starts at ₹500–₹800 per sq ft. Spider glazing ranges from ₹800–₹1,500 per sq ft depending on glass type and fittings."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Is structural glazing safe for high-rise buildings?",
            a: "Yes. Systems are engineered to IS 875 standards, withstanding wind loads of 1.5–4.5 kPa. Fine Glaze uses Dow Corning / Sika structural silicone rated for 25+ years of adhesion strength."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "How long does installation take?",
            a: "Typically 2–6 weeks depending on facade area and building height. Fine Glaze works with milestone-based handovers. Embassy 247 was completed on time with zero delays."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Do you offer maintenance after installation?",
            a: "Yes. We provide AMC (Annual Maintenance Contracts) covering sealant inspection, glass replacement, weather seal renewal, and facade cleaning — ensuring long-term performance."
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
          { title: "Aluminium Facade", href: "/aluminium-facade" },
          { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
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
  StructuralGlazing as default
};
