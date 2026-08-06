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
  hero: "/louvers-closeup.webp",
  fixed: "/louvers-vertical.webp",
  operable: "/louvers-closeup.webp",
  motorised: "/louvers-motorized.webp",
  fins: "/louvers-vertical.webp",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop"
};
const SYSTEMS = [
  {
    num: "01",
    title: "Fixed Aluminium Louvers",
    desc: "Permanently angled aluminium blades mounted on a frame. The simplest and most cost-effective sun shading solution. Blade angle is optimised for building orientation and sun path at your location.",
    glass: "Flat / elliptical blade",
    wind: "Fixed angle",
    bestFor: "Parking, facades, utilities",
    price: "₹250 – ₹500 /sq ft",
    img: "fixed"
  },
  {
    num: "02",
    title: "Operable Louvers",
    desc: "Manually adjustable blades that can be angled to control light and airflow. Linked rod mechanism allows all blades to move together. Ideal for spaces needing variable sun control throughout the day.",
    glass: "Aerofoil blade",
    wind: "Manual rod-operated",
    bestFor: "Offices, residential",
    price: "₹400 – ₹700 /sq ft",
    img: "operable"
  },
  {
    num: "03",
    title: "Motorised Sun Control",
    desc: "Automated louver systems with sensor-driven or timer-controlled motors. Blades adjust automatically based on sun position, time, or interior temperature — maximum energy savings with zero manual effort.",
    glass: "Aerofoil blade",
    wind: "Motorised + sensor",
    bestFor: "Green buildings, IT parks",
    price: "₹700 – ₹1,200 /sq ft",
    img: "motorised"
  },
  {
    num: "04",
    title: "Vertical Fins & Screens",
    desc: "Vertical aluminium blades or perforated screens that provide sun shading, privacy, and architectural rhythm. Available in twisted, angled, and perforated profiles for unique facade expression.",
    glass: "Custom profiles",
    wind: "Fixed / operable",
    bestFor: "Feature facades, screens",
    price: "₹350 – ₹800 /sq ft",
    img: "fins"
  }
];
const STEPS = [
  { num: "01", title: "Sun Study", desc: "Analyse building orientation, sun path & shading needs" },
  { num: "02", title: "Design", desc: "Blade profile selection, spacing calculations & 3D preview" },
  { num: "03", title: "Fabrication", desc: "CNC extrusion, cutting & powder coating at our facility" },
  { num: "04", title: "Installation", desc: "Bracket fixing, blade mounting & mechanism testing" }
];
function Louvers() {
  const [activeSystem, setActiveSystem] = useState(0);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aluminium Louver & Sun Shading Systems",
    serviceType: "Aluminium Louver Installation",
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
    description: "Architectural aluminium louver and sun shading systems — fixed, operable & motorised. Reduce solar heat gain by up to 70%. Aerofoil & flat blade profiles."
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Aluminium Louvers", item: "https://fineglaze.com/aluminium-louvers" }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much do aluminium louvers reduce heat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Properly designed aluminium louver systems reduce direct solar heat gain by up to 70%. This translates to significant air-conditioning cost savings — typically 20–30% reduction in HVAC energy consumption for commercial buildings."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between fixed and operable louvers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fixed louvers have permanently set blade angles — simple and low maintenance. Operable louvers allow manual or motorised angle adjustment throughout the day for optimal light and heat control based on changing sun position."
        }
      },
      {
        "@type": "Question",
        name: "How much do aluminium louvers cost per sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fixed louvers start at ₹250/sq ft. Operable systems range from ₹400–₹700/sq ft. Motorised louvers with sensors cost ₹700–₹1,200/sq ft. Vertical fins and screens range from ₹350–₹800/sq ft."
        }
      }
    ]
  };
  const current = SYSTEMS[activeSystem];
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Aluminium Louver Contractor Pune & Mumbai | Facade Sun Louvers - Fine Glaze",
        description: "Top aluminium louver contractor in Pune & Mumbai. Fixed, vertical, motorized & architectural aluminium sun louvers for solar heat reduction.",
        canonical: "https://fineglaze.com/aluminium-louvers",
        keywords: "aluminium louver contractor, aluminium sun louvers, facade louvers, vertical louvers, motorized louvers, architectural louvers",
        schema: [serviceSchema, faqSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: IMG.hero,
          alt: "Aluminium louver sun shading — Fine Glaze",
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
              "Aluminium",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Louvers" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { style: { fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }, children: "& Sun Shading." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up",
            style: { animationDelay: "0.2s" },
            children: "Architectural solar control systems that cut heat by 70% while adding design character."
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
      /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Why Louver Systems" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5", children: [
        "Control sunlight, reduce HVAC costs —",
        "  ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "with louvers that double as architectural features." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[15px] md:text-base leading-relaxed", children: "Aluminium louver systems block direct solar radiation while maintaining airflow and outward visibility. They reduce solar heat gain by up to 70%, cutting air-conditioning costs significantly. Available in fixed, operable, and motorised configurations with elliptical, aerofoil, and flat blade profiles." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-900 py-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-16", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-700", children: [
      { number: "70%", label: "Solar Heat Reduction" },
      { number: "5+", label: "Years Experience" },
      { number: "300mm", label: "Max Blade Width" },
      { number: "Any RAL", label: "Custom Colours" }
    ].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center px-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-bold text-white", children: s.number }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-[11px] uppercase tracking-widest mt-1", children: s.label })
    ] }, s.label)) }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Our Systems" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900", children: "Louver Systems We Install" })
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
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Blade Profile" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: current.glass })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-stone-50 p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-stone-400 mb-1", children: "Operation" }),
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
          title: "Sun-Path Optimised",
          desc: "Blade angles calculated for your building's orientation. Not guesswork — engineering."
        },
        {
          icon: Clock,
          title: "Fast Production",
          desc: "Standard louver systems delivered in 15–20 days from design approval."
        },
        {
          icon: Award,
          title: "Premium Extrusions",
          desc: "6063-T6 aluminium extrusions with powder-coat or anodised finishes. 15-year warranty."
        },
        {
          icon: Wrench,
          title: "Motor Warranty",
          desc: "Motorised systems backed by 5-year motor warranty. BMS integration available."
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
          alt: "Fine Glaze louver installation",
          className: "w-full h-full object-cover",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center text-center px-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm uppercase tracking-widest mb-2", children: "Our Promise" }),
        /* @__PURE__ */ jsx("p", { className: "text-white text-xl md:text-3xl font-bold max-w-xl", children: "Solar control engineered precisely for your building — not a one-size-fits-all solution." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-16 max-w-3xl", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Pricing" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900 mb-2", children: "Aluminium Louver Cost — 2026" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-sm", children: "Indicative rates. Final cost depends on specifications & complexity. GST extra." })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 100, children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-stone-800", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500", children: "System" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500", children: "Blade Type" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 text-xs font-bold uppercase tracking-wider text-stone-500 text-right", children: "Rate / sq ft" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "text-sm", children: [
            { system: "Fixed Louvers", glass: "Flat / elliptical blade", price: "₹250 – ₹500" },
            { system: "Operable Louvers", glass: "Aerofoil + rod mechanism", price: "₹400 – ₹700" },
            { system: "Motorised System", glass: "Aerofoil + motor + sensor", price: "₹700 – ₹1,200" },
            { system: "Vertical Fins / Screens", glass: "Custom profiles", price: "₹350 – ₹800" }
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
            q: "How much do aluminium louvers reduce heat?",
            a: "Properly designed aluminium louver systems reduce direct solar heat gain by up to 70%. This translates to significant air-conditioning cost savings — typically 20–30% reduction in HVAC energy consumption for commercial buildings."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "What is the difference between fixed and operable louvers?",
            a: "Fixed louvers have permanently set blade angles — simple and low maintenance. Operable louvers allow manual or motorised angle adjustment throughout the day for optimal light and heat control based on changing sun position."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "How much do aluminium louvers cost per sq ft?",
            a: "Fixed louvers start at ₹250/sq ft. Operable systems range from ₹400–₹700/sq ft. Motorised louvers with sensors cost ₹700–₹1,200/sq ft. Vertical fins and screens range from ₹350–₹800/sq ft."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "Can motorised louvers be connected to building management systems?",
            a: "Yes. Our motorised louver systems can be integrated with BMS (Building Management Systems) for automated control based on sun sensors, interior temperature, or scheduled timers. This maximises energy savings."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            q: "What finishes are available for aluminium louvers?",
            a: "Louvers are available in any RAL colour via powder coating, or in natural/bronze/black anodised finishes. Wood-grain effect coatings are also available for architectural projects requiring a natural appearance."
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
          { title: "Aluminium Facade", href: "/aluminium-facade" },
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
          { title: "Structural Glazing", href: "/structural-glazing" },
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
  Louvers as default
};
