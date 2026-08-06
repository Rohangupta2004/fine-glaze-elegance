import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { s as supabase, o as Toaster, I as Input, B as Button } from "../main.mjs";
import { toast } from "sonner";
import { Lock, ArrowLeft, Search, Loader2, CheckCircle2, XCircle, ImagePlus, Trash2 } from "lucide-react";
import { b as blogPostsList } from "./blog-BadoX4PM.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
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
const BUCKET = "project-images";
const BLOG_FOLDER = "blog";
const MANIFEST_PATH = `${BLOG_FOLDER}/manifest.json`;
const ADMIN_PASS = "fineglaze2025";
function getPublicUrl(filename) {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(`${BLOG_FOLDER}/${filename}`);
  return data.publicUrl;
}
function AdminBlogImages() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [manifest, setManifest] = useState({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(null);
  const [search, setSearch] = useState("");
  const fileRefs = useRef({});
  const handleLogin = () => {
    if (pass === ADMIN_PASS) {
      setAuthed(true);
      toast.success("Logged in");
    } else {
      toast.error("Wrong password");
    }
  };
  const fetchManifest = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.storage.from(BUCKET).download(MANIFEST_PATH);
      if (error || !data) {
        setManifest({});
      } else {
        const text = await data.text();
        const parsed = JSON.parse(text);
        if (typeof parsed === "object" && !Array.isArray(parsed)) {
          setManifest(parsed);
        }
      }
    } catch {
      setManifest({});
    }
    setLoading(false);
  }, []);
  const saveManifest = async (updated) => {
    const blob = new Blob([JSON.stringify(updated, null, 2)], {
      type: "application/json"
    });
    const { error } = await supabase.storage.from(BUCKET).upload(MANIFEST_PATH, blob, {
      upsert: true,
      contentType: "application/json"
    });
    if (error) throw error;
    setManifest(updated);
  };
  const handleUpload = async (slug, file) => {
    var _a;
    if (!file.type.startsWith("image/")) {
      toast.error("Only image files allowed");
      return;
    }
    setUploading(slug);
    try {
      const ext = ((_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "webp";
      const filename = `${slug}.${ext}`;
      const path = `${BLOG_FOLDER}/${filename}`;
      const oldFilename = manifest[slug];
      if (oldFilename && oldFilename !== filename) {
        await supabase.storage.from(BUCKET).remove([`${BLOG_FOLDER}/${oldFilename}`]);
      }
      const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
        upsert: true,
        contentType: file.type
      });
      if (error) throw error;
      const updated = { ...manifest, [slug]: filename };
      await saveManifest(updated);
      toast.success("Image uploaded!");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      toast.error(msg);
    }
    setUploading(null);
  };
  const handleRemove = async (slug) => {
    const filename = manifest[slug];
    if (!filename) return;
    setUploading(slug);
    try {
      await supabase.storage.from(BUCKET).remove([`${BLOG_FOLDER}/${filename}`]);
      const updated = { ...manifest };
      delete updated[slug];
      await saveManifest(updated);
      toast.success("Image removed");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Remove failed";
      toast.error(msg);
    }
    setUploading(null);
  };
  useEffect(() => {
    if (authed) fetchManifest();
  }, [authed, fetchManifest]);
  if (!authed) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center bg-slate-950 p-4", children: [
      /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-center" }),
      /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm space-y-4 text-center", children: [
        /* @__PURE__ */ jsx(Lock, { className: "mx-auto text-amber-500", size: 40 }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-white", children: "Blog Images Admin" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: "Upload hero images for blog articles" }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              handleLogin();
            },
            className: "flex gap-2",
            children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "password",
                  placeholder: "Password",
                  value: pass,
                  onChange: (e) => setPass(e.target.value),
                  className: "bg-slate-800 border-slate-700 text-white"
                }
              ),
              /* @__PURE__ */ jsx(Button, { type: "submit", className: "bg-amber-600 hover:bg-amber-700", children: "Enter" })
            ]
          }
        )
      ] })
    ] });
  }
  const filtered = blogPostsList.filter(
    (p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.slug.toLowerCase().includes(search.toLowerCase())
  );
  const uploadedCount = Object.keys(manifest).length;
  const totalCount = blogPostsList.length;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-950 text-white", children: [
    /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-center" }),
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/admin",
            className: "text-slate-400 hover:text-white transition-colors",
            children: /* @__PURE__ */ jsx(ArrowLeft, { size: 20 })
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold", children: "Blog Images" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400", children: [
            uploadedCount,
            "/",
            totalCount,
            " articles have custom images"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-64", children: [
        /* @__PURE__ */ jsx(
          Search,
          {
            size: 16,
            className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Search articles…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-9 bg-slate-800 border-slate-700 text-white text-sm"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "max-w-5xl mx-auto px-4 py-8", children: loading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsx(Loader2, { className: "animate-spin text-amber-500", size: 32 }) }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: filtered.map((post) => {
      const hasCustom = !!manifest[post.slug];
      const displayImage = hasCustom ? getPublicUrl(manifest[post.slug]) : post.heroImage;
      const isUploading = uploading === post.slug;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex items-center gap-4 p-4 rounded-xl border transition-colors ${hasCustom ? "border-emerald-800/50 bg-emerald-950/20" : "border-slate-800 bg-slate-900/50"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-24 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-800", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: displayImage,
                alt: post.title,
                className: "w-full h-full object-cover",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
                hasCustom ? /* @__PURE__ */ jsx(
                  CheckCircle2,
                  {
                    size: 14,
                    className: "text-emerald-500 shrink-0"
                  }
                ) : /* @__PURE__ */ jsx(
                  XCircle,
                  {
                    size: 14,
                    className: "text-slate-500 shrink-0"
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold truncate", children: post.title })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500 truncate", children: [
                post.slug,
                " · ",
                post.date
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  accept: "image/*",
                  className: "hidden",
                  ref: (el) => {
                    fileRefs.current[post.slug] = el;
                  },
                  onChange: (e) => {
                    var _a;
                    const file = (_a = e.target.files) == null ? void 0 : _a[0];
                    if (file) handleUpload(post.slug, file);
                    e.target.value = "";
                  }
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  disabled: isUploading,
                  onClick: () => {
                    var _a;
                    return (_a = fileRefs.current[post.slug]) == null ? void 0 : _a.click();
                  },
                  className: "text-xs gap-1.5 border-slate-700 hover:border-amber-600 hover:text-amber-500",
                  children: [
                    isUploading ? /* @__PURE__ */ jsx(Loader2, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ jsx(ImagePlus, { size: 14 }),
                    hasCustom ? "Replace" : "Upload"
                  ]
                }
              ),
              hasCustom && /* @__PURE__ */ jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  disabled: isUploading,
                  onClick: () => handleRemove(post.slug),
                  className: "text-xs text-red-400 hover:text-red-300 hover:bg-red-950/30",
                  children: /* @__PURE__ */ jsx(Trash2, { size: 14 })
                }
              )
            ] })
          ]
        },
        post.slug
      );
    }) }) })
  ] });
}
export {
  AdminBlogImages as default
};
