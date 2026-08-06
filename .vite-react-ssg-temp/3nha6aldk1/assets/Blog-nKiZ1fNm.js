import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, S as SEO } from "../main.mjs";
import { Link } from "react-router-dom";
import { Tag, Clock, ArrowRight } from "lucide-react";
import { b as blogPostsList } from "./blog-BadoX4PM.js";
import { u as useBlogImages } from "./useBlogImages-Bb4beXa3.js";
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
function Blog() {
  const { getHeroImage } = useBlogImages();
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Facade & Glazing Blog – Pricing Guides, Tips & Industry Insights | Fine Glaze",
        description: "Expert articles on facade engineering, structural glazing costs, curtain wall comparisons, glass types, and how to choose the right contractor in India. Free knowledge by Fine Glaze.",
        canonical: "https://fineglaze.com/blog",
        keywords: "facade blog India, structural glazing cost guide, curtain wall article, glass facade tips, ACP vs HPL, facade contractor guide",
        schema: {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Fine Glaze Blog",
          "url": "https://fineglaze.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Fine Glaze",
            "logo": "https://fineglaze.com/Logofg.webp"
          }
        }
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-16 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: "/Glazing.webp", alt: "", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/90" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center max-w-3xl relative z-10", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold uppercase tracking-wider border border-amber-500/30 mb-6", children: [
          /* @__PURE__ */ jsx(Tag, { size: 14 }),
          " Knowledge Hub"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-extrabold mb-4", children: [
          "Facade & Glazing ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Insights" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-lg", children: "Pricing guides, technical comparisons, and expert tips to help you make smarter facade decisions." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogPostsList.map((post) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/blog/${post.slug}`,
        className: "group bg-background rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: getHeroImage(post.slug, post.heroImage),
              alt: post.title,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
              loading: "lazy",
              width: "600",
              height: "338"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold", children: post.category }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Clock, { size: 12 }),
                " ",
                post.readTime
              ] })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold leading-snug group-hover:text-primary transition-colors", children: post.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: post.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm font-semibold text-primary pt-1", children: [
              "Read Article",
              /* @__PURE__ */ jsx(
                ArrowRight,
                {
                  size: 14,
                  className: "group-hover:translate-x-1 transition-transform"
                }
              )
            ] })
          ] })
        ]
      },
      post.slug
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-slate-900 text-white text-center", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-3", children: "Have a Facade Question?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-6", children: "Our engineering team is happy to help — free consultation, no commitment." }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx("button", { className: "bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors", children: "Ask Our Experts" }) })
    ] }) })
  ] });
}
export {
  Blog as default
};
