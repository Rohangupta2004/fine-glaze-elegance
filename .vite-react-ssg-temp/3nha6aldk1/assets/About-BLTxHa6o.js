import { jsxs, jsx } from "react/jsx-runtime";
import { u as useSiteMedia, L as Layout, S as SEO, c as cn } from "../main.mjs";
import { u as useScrollAnimation } from "./useScrollAnimation-BUkRNC2S.js";
import { Award, Target, Eye, Shield, Clock, Users } from "lucide-react";
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
const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every measurement, every cut, every joint — executed with micron-level accuracy that only comes from years of hands-on facade expertise."
  },
  {
    icon: Shield,
    title: "Quality",
    description: "We source only from trusted global brands — Dow Corning, Sika, Aludecor — and enforce stringent quality checks at every fabrication stage."
  },
  {
    icon: Clock,
    title: "Timeliness",
    description: "Deadlines are non-negotiable. Our parallel workflows and unitized pre-fabrication ensure we meet your construction schedule without compromise."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We embed ourselves within your project team — working hand-in-hand with architects, PMCs, and contractors for seamless, conflict-free execution."
  }
];
const About = () => {
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const videoRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const { getMedia } = useSiteMedia();
  const aboutHero = getMedia("about_hero", "/Embassy.webp");
  const aboutStoryPhoto = getMedia("about_story_photo", "/Embassy.webp");
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "About Fine Glaze: Facade and Glazing Specialists | Fine Glaze",
        description: "About Fine Glaze — premier facade and glazing specialists in Pune & Mumbai with 5+ years of experience, 10+ landmark projects & 50+ corporate clients.",
        canonical: "https://fineglaze.com/about",
        keywords: "Fine Glaze facade contractor, Fine Glaze India, Fine Glaze Pune, facade fabrication company, facade installation company",
        schema: {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Fine Glaze",
            "url": "https://fineglaze.com",
            "foundingLocation": { "@type": "Place", "name": "Pune, Maharashtra" },
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": 25 },
            "award": "Best Performance Vendor – Embassy REIT 2024"
          }
        }
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 overflow-hidden", ref: heroRef.ref, children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: aboutHero, alt: "", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "max-w-3xl mx-auto text-center space-y-6 slide-up",
            heroRef.isVisible && "visible"
          ),
          children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold uppercase tracking-wider border border-amber-500/30", children: "About Us" }),
            /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold text-white", children: [
              "Crafting",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Excellence" }),
              " ",
              "in Facade Solutions"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-white/80 text-lg", children: "Fine Glaze is Pune's premier facade fabrication company — delivering precision-engineered glass and aluminium solutions for landmark commercial and residential projects across India." })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", ref: storyRef.ref, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "relative slide-up",
            storyRef.isVisible && "visible"
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] rounded-xl overflow-hidden", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: aboutStoryPhoto,
                alt: "Fine Glaze Project",
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg", children: [
              /* @__PURE__ */ jsx(Award, { size: 32, className: "mb-2" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Best Vendor 2024" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-foreground/70", children: "Embassy REIT" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "space-y-6 slide-up",
            storyRef.isVisible && "visible"
          ),
          style: { transitionDelay: "0.1s" },
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-medium uppercase tracking-wider text-sm", children: "Our Story" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-foreground", children: [
              "Building",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient-subtle", children: "Trust" }),
              " ",
              "Through Excellence"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-muted-foreground", children: [
              /* @__PURE__ */ jsx("p", { children: "Founded in Pune, Fine Glaze has grown from a specialized glass fabrication unit into a full-service facade solutions provider — trusted by India's top developers and institutions." }),
              /* @__PURE__ */ jsx("p", { children: "We combine traditional craftsmanship with modern engineering technology to deliver facade systems that are visually stunning, structurally sound, and built to last decades." }),
              /* @__PURE__ */ jsx("p", { children: "Our in-house engineers and certified technicians collaborate closely with architects and project management consultants to bring even the most ambitious architectural visions to life — on time and on budget." })
            ] })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", ref: videoRef.ref, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "max-w-5xl mx-auto text-center space-y-6 slide-up",
          videoRef.isVisible && "visible"
        ),
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary font-medium uppercase tracking-wider text-sm", children: "Company Overview" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-foreground", children: [
            "See Fine Glaze",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient-subtle", children: "in Action" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Watch how Fine Glaze delivers premium facade systems through precision engineering, skilled site execution, and an uncompromised commitment to quality and safety." }),
          /* @__PURE__ */ jsx("div", { className: "rounded-xl overflow-hidden shadow-xl", style: { padding: "75% 0 0 0", position: "relative" }, children: /* @__PURE__ */ jsx(
            "iframe",
            {
              src: "https://player.vimeo.com/video/1191408845?badge=0&autopause=0&player_id=0&app_id=58479",
              frameBorder: "0",
              allow: "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
              referrerPolicy: "strict-origin-when-cross-origin",
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" },
              title: "FINE GLAZE"
            }
          ) }),
          /* @__PURE__ */ jsx("script", { src: "https://player.vimeo.com/api/player.js" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card metallic-border p-8 space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Target, { size: 28, className: "text-primary" }) }),
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-foreground", children: [
          "Our ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-subtle", children: "Mission" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "To deliver world-class facade solutions that enhance building aesthetics, improve energy efficiency, and create lasting value — for clients, communities, and the skylines we shape." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card metallic-border p-8 space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Eye, { size: 28, className: "text-primary" }) }),
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-foreground", children: [
          "Our ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-subtle", children: "Vision" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "To be India's most trusted facade partner — renowned for transforming bold architectural concepts into iconic, enduring structures that stand the test of time." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", ref: valuesRef.ref, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "text-center space-y-4 mb-12 slide-up",
            valuesRef.isVisible && "visible"
          ),
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-medium uppercase tracking-wider text-sm", children: "Our Values" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-foreground", children: [
              "What ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient-subtle", children: "Drives" }),
              " Us"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: values.map((value, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "text-center p-6 space-y-4 slide-up",
            valuesRef.isVisible && "visible"
          ),
          style: { transitionDelay: `${index * 0.1}s` },
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(value.icon, { size: 32, className: "text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground", children: value.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: value.description })
          ]
        },
        value.title
      )) })
    ] }) })
  ] });
};
export {
  About as default
};
