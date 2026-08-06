import { jsx, jsxs } from "react/jsx-runtime";
import { useParams, Navigate, Link } from "react-router-dom";
import { L as Layout, S as SEO, B as Button } from "../main.mjs";
import { b as blogPostsList, a as blogPosts } from "./blog-BadoX4PM.js";
import { u as useBlogImages } from "./useBlogImages-Bb4beXa3.js";
import { ArrowLeft, Clock, ArrowRight, Phone } from "lucide-react";
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
function BlogArticle() {
  const { slug } = useParams();
  const { getHeroImage } = useBlogImages();
  const post = slug ? blogPosts[slug] : void 0;
  if (!post) return /* @__PURE__ */ jsx(Navigate, { to: "/blog", replace: true });
  const heroImg = getHeroImage(post.slug, post.heroImage);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": heroImg.startsWith("http") ? heroImg : `https://fineglaze.com${heroImg}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Fine Glaze",
      "url": "https://fineglaze.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fine Glaze",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fineglaze.com/Logofg.webp"
      }
    }
  };
  const related = blogPostsList.filter((p) => p.slug !== post.slug).slice(0, 2);
  const seoLinks = [
    {
      title: "Structural Glazing Services",
      href: "/structural-glazing"
    },
    {
      title: "Curtain Wall Systems",
      href: "/curtain-wall-systems"
    },
    {
      title: "ACP Aluminium Cladding",
      href: "/acp-aluminium-cladding"
    },
    {
      title: "Facade Contractor in Pune",
      href: "/facade-contractor/structural-glazing-pune"
    }
  ];
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: post.metaTitle,
        description: post.metaDescription,
        canonical: `https://fineglaze.com/blog/${post.slug}`,
        keywords: post.keywords,
        ogType: "article",
        ogImage: heroImg.startsWith("http") ? heroImg : `https://fineglaze.com${heroImg}`,
        schema: articleSchema
      }
    ),
    /* @__PURE__ */ jsx("article", { className: "py-16 pt-28", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-3xl", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/blog",
          className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { size: 14 }),
            " Back to Blog"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs", children: post.category }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Clock, { size: 14 }),
          " ",
          post.readTime
        ] })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-extrabold leading-tight mb-6", children: post.title }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImg,
          alt: post.title,
          className: "w-full rounded-2xl object-cover max-h-[420px] mb-10",
          loading: "eager"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: (post.content ?? []).map((section, i) => /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl font-bold mb-3 text-foreground border-l-4 border-amber-500 pl-3", children: section.heading }),
        section.body && /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/80 leading-[1.85] mb-4", children: section.body }),
        section.list && /* @__PURE__ */ jsx("ul", { className: "space-y-3 mt-3", children: section.list.map((item, li) => /* @__PURE__ */ jsxs(
          "li",
          {
            className: "flex gap-3 text-base text-foreground/80 leading-relaxed",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "text-amber-600 font-bold mt-0.5 shrink-0", children: [
                li + 1,
                "."
              ] }),
              /* @__PURE__ */ jsx("span", { children: item })
            ]
          },
          li
        )) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 rounded-2xl border p-6 bg-muted/30", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Explore More Facade Solutions" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Browse our premium facade, glazing and aluminium cladding solutions across Pune, Mumbai and Maharashtra." }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: seoLinks.map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            to: link.href,
            className: "rounded-xl border p-4 hover:border-primary hover:bg-primary/5 transition-all",
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm md:text-base", children: link.title }),
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] })
          },
          link.href
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-slate-900 rounded-2xl text-white text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Need Help With Your Facade Project?" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-5 text-sm", children: "Free site visit & quotation — our team responds within 24 hours." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(Button, { className: "bg-amber-600 hover:bg-amber-700 text-white gap-2", children: [
            "Get Free Quote ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }) }),
          /* @__PURE__ */ jsx("a", { href: "tel:+918369233566", children: /* @__PURE__ */ jsxs(
            Button,
            {
              className: "bg-white text-slate-900 hover:bg-white/90 font-bold gap-2",
              children: [
                /* @__PURE__ */ jsx(Phone, { size: 16 }),
                " Call Now"
              ]
            }
          ) })
        ] })
      ] }),
      related.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-6", children: "Related Articles" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: related.map((r) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/blog/${r.slug}`,
            className: "group flex gap-4 p-4 rounded-xl border hover:shadow-md transition-all",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: getHeroImage(r.slug, r.heroImage),
                  alt: r.title,
                  className: "w-24 h-24 rounded-lg object-cover shrink-0",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-primary font-bold", children: r.category }),
                /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold leading-snug group-hover:text-primary transition-colors", children: r.title })
              ] })
            ]
          },
          r.slug
        )) })
      ] })
    ] }) })
  ] });
}
export {
  BlogArticle as default
};
