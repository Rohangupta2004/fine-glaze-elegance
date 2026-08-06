import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { s as supabase, o as Toaster, I as Input, B as Button } from "../main.mjs";
import { toast } from "sonner";
import { Lock, ArrowLeft, ImagePlus, Loader2, GripVertical, ArrowUp, ArrowDown, Trash2 } from "lucide-react";
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
const LOGOS_FOLDER = "client-logos";
const MANIFEST_PATH = `${LOGOS_FOLDER}/manifest.json`;
const ADMIN_PASS = "fineglaze2025";
function getPublicUrl(filename) {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(`${LOGOS_FOLDER}/${filename}`);
  return data.publicUrl;
}
function AdminLogos() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [clientName, setClientName] = useState("");
  const fileRef = useRef(null);
  const handleLogin = () => {
    if (pass === ADMIN_PASS) {
      setAuthed(true);
      toast.success("Logged in");
    } else {
      toast.error("Wrong password");
    }
  };
  const fetchLogos = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.storage.from(BUCKET).download(MANIFEST_PATH);
      if (error || !data) {
        setLogos([]);
      } else {
        const text = await data.text();
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) setLogos(parsed);
      }
    } catch {
      setLogos([]);
    }
    setLoading(false);
  }, []);
  const saveManifest = async (entries) => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], {
      type: "application/json"
    });
    const { error } = await supabase.storage.from(BUCKET).upload(MANIFEST_PATH, blob, { contentType: "application/json", upsert: true });
    if (error) {
      toast.error("Failed to save manifest: " + error.message);
      return false;
    }
    return true;
  };
  const handleUpload = async () => {
    var _a, _b;
    const file = (_b = (_a = fileRef.current) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
    if (!file) return toast.error("Select an image first");
    if (!clientName.trim()) return toast.error("Enter client name");
    setUploading(true);
    const ext = file.name.split(".").pop() || "png";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const path = `${LOGOS_FOLDER}/${filename}`;
    const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, file, { contentType: file.type, upsert: false });
    if (uploadError) {
      toast.error("Upload failed: " + uploadError.message);
      setUploading(false);
      return;
    }
    const newLogos = [...logos, { name: clientName.trim(), filename }];
    const saved = await saveManifest(newLogos);
    if (saved) {
      setLogos(newLogos);
      setClientName("");
      if (fileRef.current) fileRef.current.value = "";
      toast.success(`"${clientName.trim()}" logo added!`);
    }
    setUploading(false);
  };
  const handleDelete = async (index) => {
    const logo = logos[index];
    if (!confirm(`Delete "${logo.name}" logo?`)) return;
    await supabase.storage.from(BUCKET).remove([`${LOGOS_FOLDER}/${logo.filename}`]);
    const newLogos = logos.filter((_, i) => i !== index);
    const saved = await saveManifest(newLogos);
    if (saved) {
      setLogos(newLogos);
      toast.success(`"${logo.name}" deleted`);
    }
  };
  const moveUp = async (index) => {
    if (index === 0) return;
    const newLogos = [...logos];
    [newLogos[index - 1], newLogos[index]] = [
      newLogos[index],
      newLogos[index - 1]
    ];
    setLogos(newLogos);
    await saveManifest(newLogos);
  };
  const moveDown = async (index) => {
    if (index >= logos.length - 1) return;
    const newLogos = [...logos];
    [newLogos[index], newLogos[index + 1]] = [
      newLogos[index + 1],
      newLogos[index]
    ];
    setLogos(newLogos);
    await saveManifest(newLogos);
  };
  useEffect(() => {
    if (authed) fetchLogos();
  }, [authed, fetchLogos]);
  if (!authed) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 flex items-center justify-center", children: [
      /* @__PURE__ */ jsx(Toaster, { richColors: true }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5 text-amber-600" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold", children: "Client Logos" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Admin access" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "password",
            placeholder: "Password",
            value: pass,
            onChange: (e) => setPass(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && handleLogin()
          }
        ),
        /* @__PURE__ */ jsx(Button, { onClick: handleLogin, className: "w-full", children: "Login" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50", children: [
    /* @__PURE__ */ jsx(Toaster, { richColors: true }),
    /* @__PURE__ */ jsx("div", { className: "bg-white border-b sticky top-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 py-4 flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/admin/images",
          className: "text-muted-foreground hover:text-foreground transition-colors",
          children: /* @__PURE__ */ jsx(ArrowLeft, { size: 20 })
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "Client Logos" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Upload logos for the homepage carousel" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 py-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border p-6 space-y-4", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-lg font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ImagePlus, { size: 20, className: "text-amber-600" }),
          "Add Client Logo"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-[1fr_1fr_auto] gap-3 items-end", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-muted-foreground", children: "Client Name" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "e.g. Embassy REIT",
                value: clientName,
                onChange: (e) => setClientName(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-muted-foreground", children: "Logo Image" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                ref: fileRef,
                type: "file",
                accept: "image/*",
                className: "file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handleUpload,
              disabled: uploading,
              className: "bg-amber-600 hover:bg-amber-700 h-10",
              children: [
                uploading ? /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin mr-2" }) : /* @__PURE__ */ jsx(ImagePlus, { size: 16, className: "mr-2" }),
                uploading ? "Uploading..." : "Upload"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Recommended: PNG or SVG with transparent background, around 200×80px" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4 border-b", children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-semibold", children: [
            "Uploaded Logos (",
            logos.length,
            ")"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Drag to reorder. These appear in the homepage carousel." })
        ] }),
        loading ? /* @__PURE__ */ jsx("div", { className: "p-12 text-center", children: /* @__PURE__ */ jsx(Loader2, { className: "w-6 h-6 animate-spin mx-auto text-muted-foreground" }) }) : logos.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "p-12 text-center text-muted-foreground", children: [
          /* @__PURE__ */ jsx(ImagePlus, { className: "w-10 h-10 mx-auto mb-3 opacity-30" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "No logos uploaded yet" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs mt-1", children: "Add your first client logo above" })
        ] }) : /* @__PURE__ */ jsx("div", { className: "divide-y", children: logos.map((logo, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground/40", children: /* @__PURE__ */ jsx(GripVertical, { size: 18 }) }),
              /* @__PURE__ */ jsx("div", { className: "w-24 h-14 rounded-lg border bg-white flex items-center justify-center p-2 flex-shrink-0", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: getPublicUrl(logo.filename),
                  alt: logo.name,
                  className: "max-w-full max-h-full object-contain"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-sm truncate", children: logo.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "Position ",
                  i + 1
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8",
                    onClick: () => moveUp(i),
                    disabled: i === 0,
                    children: /* @__PURE__ */ jsx(ArrowUp, { size: 14 })
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8",
                    onClick: () => moveDown(i),
                    disabled: i === logos.length - 1,
                    children: /* @__PURE__ */ jsx(ArrowDown, { size: 14 })
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50",
                    onClick: () => handleDelete(i),
                    children: /* @__PURE__ */ jsx(Trash2, { size: 14 })
                  }
                )
              ] })
            ]
          },
          logo.filename
        )) })
      ] })
    ] })
  ] });
}
export {
  AdminLogos as default
};
