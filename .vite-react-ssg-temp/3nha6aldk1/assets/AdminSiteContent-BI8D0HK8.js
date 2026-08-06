import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useRef } from "react";
import { q as fetchSiteMediaMap, o as Toaster, I as Input, B as Button, s as supabase, r as SITE_MEDIA_MANIFEST } from "../main.mjs";
import { toast } from "sonner";
import { Lock, ArrowLeft, RefreshCw, Loader2, Film, ImagePlus, X, Upload, Link2, Check, RotateCcw } from "lucide-react";
import { g as groupSlotsByPage } from "./siteMedia-B07iWX_D.js";
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
const FOLDER = "site-media";
const ADMIN_PASS = "fineglaze2025";
function getPublicUrl(path) {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}
async function saveManifest(map) {
  const blob = new Blob([JSON.stringify(map, null, 2)], {
    type: "application/json"
  });
  const { error } = await supabase.storage.from(BUCKET).upload(SITE_MEDIA_MANIFEST, blob, {
    contentType: "application/json",
    upsert: true
  });
  if (error) throw error;
}
function AdminSiteContent() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [map, setMap] = useState({});
  const [loading, setLoading] = useState(true);
  const handleLogin = () => {
    if (pass === ADMIN_PASS) {
      setAuthed(true);
      toast.success("Welcome, Admin");
    } else {
      toast.error("Wrong password");
    }
  };
  const load = useCallback(async () => {
    setLoading(true);
    const m = await fetchSiteMediaMap();
    setMap(m);
    setLoading(false);
  }, []);
  useEffect(() => {
    if (authed) load();
  }, [authed, load]);
  const updateSlot = async (slot, url) => {
    const next = { ...map };
    if (url) {
      next[slot.key] = { url, type: slot.type };
    } else {
      delete next[slot.key];
    }
    await saveManifest(next);
    setMap(next);
  };
  if (!authed) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsx(Toaster, {}),
      /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm bg-white rounded-2xl shadow-lg border p-8 space-y-5 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(Lock, { className: "w-6 h-6 text-amber-700" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "Fine Glaze — Image Admin" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Upload and replace images across the entire website" })
        ] }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              handleLogin();
            },
            className: "space-y-3",
            children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "password",
                  placeholder: "Password",
                  value: pass,
                  onChange: (e) => setPass(e.target.value),
                  autoFocus: true
                }
              ),
              /* @__PURE__ */ jsxs(Button, { className: "w-full bg-amber-600 hover:bg-amber-700", type: "submit", children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 mr-2" }),
                " Sign In"
              ] })
            ]
          }
        )
      ] })
    ] });
  }
  const grouped = groupSlotsByPage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50", children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-10 bg-white border-b shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("a", { href: "/admin", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "w-5 h-5" }) }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "Website Images" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Upload a new image — it goes live on the site immediately" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("a", { href: "/admin/blog-images", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "text-xs", children: "Blog Images" }) }),
        /* @__PURE__ */ jsx("a", { href: "/admin/logos", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "text-xs", children: "Client Logos" }) }),
        /* @__PURE__ */ jsx("a", { href: "/admin/images", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "text-xs", children: "Project Gallery" }) }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: load,
            disabled: loading,
            children: /* @__PURE__ */ jsx(RefreshCw, { className: `w-4 h-4 ${loading ? "animate-spin" : ""}` })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "max-w-5xl mx-auto px-4 py-8 space-y-10", children: loading ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-24", children: /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin text-muted-foreground" }) }) : Object.entries(grouped).map(([page, slots]) => /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-bold text-slate-800 border-b pb-2", children: page }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: slots.map((slot) => {
        var _a;
        return /* @__PURE__ */ jsx(
          SlotCard,
          {
            slot,
            current: ((_a = map[slot.key]) == null ? void 0 : _a.url) || null,
            onSave: (url) => updateSlot(slot, url)
          },
          slot.key
        );
      }) })
    ] }, page)) })
  ] });
}
function SlotCard({
  slot,
  current,
  onSave
}) {
  const [busy, setBusy] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);
  const effective = current || slot.fallback;
  const isCustom = !!current;
  const doSave = async (url, msg) => {
    setBusy(true);
    try {
      await onSave(url);
      toast.success(msg);
      setUrlInput("");
    } catch (e) {
      toast.error(`Save failed: ${e.message || e}`);
    } finally {
      setBusy(false);
    }
  };
  const handleUpload = async (files) => {
    if (!(files == null ? void 0 : files.length)) return;
    const file = files[0];
    if (slot.type === "image" && !file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    setBusy(true);
    try {
      const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const path = `${FOLDER}/${slot.key}-${Date.now()}-${safe}`;
      const { error } = await supabase.storage.from(BUCKET).upload(path, file, { contentType: file.type, upsert: false });
      if (error) throw error;
      const url = getPublicUrl(path);
      await onSave(url);
      toast.success(`${slot.label} updated!`);
    } catch (e) {
      const m = String((e == null ? void 0 : e.message) || e);
      if (m.toLowerCase().includes("mime")) {
        toast.error("File type not allowed — try pasting a URL instead.");
      } else {
        toast.error(`Upload failed: ${m}`);
      }
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border shadow-sm p-5 space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-semibold text-sm flex items-center gap-2", children: [
          slot.type === "video" ? /* @__PURE__ */ jsx(Film, { className: "w-4 h-4 text-purple-500" }) : /* @__PURE__ */ jsx(ImagePlus, { className: "w-4 h-4 text-amber-600" }),
          slot.label
        ] }),
        slot.note && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: slot.note })
      ] }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: `shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${isCustom ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`,
          children: isCustom ? "Custom ✓" : "Default"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border bg-slate-100 aspect-video flex items-center justify-center relative", children: [
      slot.type === "video" ? /* @__PURE__ */ jsx(
        "video",
        {
          src: effective,
          className: "w-full h-full object-cover",
          muted: true,
          loop: true,
          playsInline: true,
          autoPlay: true
        },
        effective
      ) : /* @__PURE__ */ jsx(
        "img",
        {
          src: effective,
          alt: slot.label,
          className: "w-full h-full object-cover"
        }
      ),
      isCustom && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => doSave(null, "Reset to default"),
          disabled: busy,
          title: "Remove custom image",
          className: "absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center shadow hover:bg-red-600 transition-colors",
          children: /* @__PURE__ */ jsx(X, { size: 14 })
        }
      )
    ] }),
    slot.type === "image" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          ref: fileRef,
          type: "file",
          accept: "image/*",
          className: "hidden",
          onChange: (e) => handleUpload(e.target.files)
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: () => {
            var _a;
            return !busy && ((_a = fileRef.current) == null ? void 0 : _a.click());
          },
          onDragOver: (e) => {
            e.preventDefault();
            setDragOver(true);
          },
          onDragLeave: () => setDragOver(false),
          onDrop: (e) => {
            e.preventDefault();
            setDragOver(false);
            handleUpload(e.dataTransfer.files);
          },
          className: `rounded-lg border-2 border-dashed cursor-pointer transition-all py-4 flex flex-col items-center gap-1 text-center ${dragOver ? "border-amber-500 bg-amber-50" : "border-slate-200 hover:border-amber-400 hover:bg-slate-50"} ${busy ? "pointer-events-none opacity-60" : ""}`,
          children: [
            busy ? /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 animate-spin text-amber-600" }) : /* @__PURE__ */ jsx(Upload, { className: "w-5 h-5 text-slate-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: busy ? "Uploading…" : "Drop image here or click to upload" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground", children: "JPG, PNG, WebP — max 10 MB" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          if (urlInput.trim()) doSave(urlInput.trim(), `${slot.label} updated!`);
        },
        className: "flex gap-2",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsx(Link2, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                value: urlInput,
                onChange: (e) => setUrlInput(e.target.value),
                placeholder: slot.type === "video" ? "Paste video URL (.mp4)" : "Or paste an image URL",
                className: "pl-8 h-9 text-xs",
                disabled: busy
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              size: "sm",
              disabled: busy || !urlInput.trim(),
              className: "h-9 bg-amber-600 hover:bg-amber-700",
              children: /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" })
            }
          )
        ]
      }
    ),
    isCustom && /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => doSave(null, "Reset to default"),
        disabled: busy,
        className: "w-full text-xs text-muted-foreground hover:text-red-500 flex items-center justify-center gap-1.5 transition-colors",
        children: [
          /* @__PURE__ */ jsx(RotateCcw, { className: "w-3 h-3" }),
          " Reset to default"
        ]
      }
    )
  ] });
}
export {
  AdminSiteContent as default
};
