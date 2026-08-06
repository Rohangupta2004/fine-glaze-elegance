import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useRef } from "react";
import { s as supabase, o as Toaster, I as Input, B as Button } from "../main.mjs";
import { toast } from "sonner";
import { Lock, RefreshCw, Loader2, ImagePlus, Star, ArrowLeft, Upload, Trash2, Eye } from "lucide-react";
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
const ADMIN_PASS = "fineglaze2025";
function parseGallery(g) {
  if (!g) return [];
  if (Array.isArray(g)) return g;
  try {
    const p = JSON.parse(g);
    return Array.isArray(p) ? p : [];
  } catch {
    return [];
  }
}
function isStorageUrl(url) {
  return url.startsWith("https://") && url.includes("supabase");
}
function getPublicUrl(path) {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}
function AdminImages() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const handleLogin = () => {
    if (pass === ADMIN_PASS) {
      setAuthed(true);
      toast.success("Logged in");
    } else {
      toast.error("Wrong password");
    }
  };
  const fetchProjects = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.from("projects").select("id,title,slug,category,location,year,client,image,gallery,is_award_winner").order("sort_order", { ascending: true });
    if (error) {
      toast.error("Failed to load projects");
    } else {
      setProjects(data || []);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    if (authed) fetchProjects();
  }, [authed, fetchProjects]);
  useEffect(() => {
    if (selected) {
      const updated = projects.find((p) => p.id === selected.id);
      if (updated) setSelected(updated);
    }
  }, [projects]);
  if (!authed) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsx(Toaster, {}),
      /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm bg-white rounded-2xl shadow-lg border p-8 space-y-6 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(Lock, { className: "w-6 h-6 text-amber-700" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "Fine Glaze Admin" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Enter password to manage project images" })
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
              /* @__PURE__ */ jsxs(Button, { className: "w-full", type: "submit", children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 mr-2" }),
                " Sign In"
              ] })
            ]
          }
        )
      ] })
    ] });
  }
  if (selected) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Toaster, {}),
      /* @__PURE__ */ jsx(
        ProjectEditor,
        {
          project: selected,
          onBack: () => setSelected(null),
          onUpdate: () => fetchProjects()
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50", children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-10 bg-white border-b shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "Project Images" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Upload & manage project photos" })
      ] }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: fetchProjects,
          disabled: loading,
          children: [
            /* @__PURE__ */ jsx(
              RefreshCw,
              {
                className: `w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`
              }
            ),
            "Refresh"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "max-w-6xl mx-auto px-4 py-8", children: loading ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-20", children: /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin text-muted-foreground" }) }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: projects.map((p) => {
      const imgSrc = p.image && isStorageUrl(p.image) ? p.image : null;
      const galleryCount = parseGallery(p.gallery).filter(
        isStorageUrl
      ).length;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setSelected(p),
          className: "group bg-white rounded-xl border shadow-sm hover:shadow-md transition-all text-left overflow-hidden",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-44 bg-slate-100", children: [
              imgSrc ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: imgSrc,
                  alt: p.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                }
              ) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-2", children: [
                /* @__PURE__ */ jsx(ImagePlus, { className: "w-8 h-8" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "No image uploaded" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 text-xs font-semibold capitalize shadow-sm", children: p.category }),
              p.is_award_winner && /* @__PURE__ */ jsx("span", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-amber-500 fill-amber-500" }) }),
              galleryCount > 0 && /* @__PURE__ */ jsxs("span", { className: "absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 text-white text-xs font-medium", children: [
                "+",
                galleryCount,
                " gallery"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-sm truncate", children: p.title }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                p.location,
                " · ",
                p.year
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: p.client })
            ] })
          ]
        },
        p.id
      );
    }) }) })
  ] });
}
function ProjectEditor({
  project,
  onBack,
  onUpdate
}) {
  const [uploading, setUploading] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [dragOverGallery, setDragOverGallery] = useState(false);
  const mainRef = useRef(null);
  const galleryRef = useRef(null);
  const imgSrc = project.image && isStorageUrl(project.image) ? project.image : null;
  const gallery = parseGallery(project.gallery).filter(isStorageUrl);
  const oldImage = project.image && !isStorageUrl(project.image) ? project.image : null;
  const uploadFile = async (file, folder) => {
    const ts = Date.now();
    const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${folder}/${ts}-${safe}`;
    const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
      contentType: file.type,
      upsert: false
    });
    if (error) throw error;
    return getPublicUrl(path);
  };
  const handleMainUpload = async (files) => {
    if (!(files == null ? void 0 : files.length)) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Select an image file");
      return;
    }
    setUploading(true);
    try {
      const url = await uploadFile(file, project.slug);
      const { error } = await supabase.from("projects").update({ image: url }).eq("id", project.id);
      if (error) throw error;
      toast.success("Main image updated!");
      onUpdate();
    } catch (e) {
      toast.error(`Upload failed: ${e.message}`);
    } finally {
      setUploading(false);
    }
  };
  const handleGalleryUpload = async (files) => {
    if (!(files == null ? void 0 : files.length)) return;
    const imgs = Array.from(files).filter((f) => f.type.startsWith("image/"));
    if (!imgs.length) {
      toast.error("Select image files");
      return;
    }
    setUploadingGallery(true);
    try {
      const urls = [];
      for (const file of imgs) {
        const url = await uploadFile(file, `${project.slug}/gallery`);
        urls.push(url);
      }
      const currentGallery = parseGallery(project.gallery);
      const newGallery = [...currentGallery, ...urls];
      const { error } = await supabase.from("projects").update({ gallery: JSON.stringify(newGallery) }).eq("id", project.id);
      if (error) throw error;
      toast.success(`${urls.length} image(s) added to gallery!`);
      onUpdate();
    } catch (e) {
      toast.error(`Upload failed: ${e.message}`);
    } finally {
      setUploadingGallery(false);
    }
  };
  const removeGalleryImage = async (index) => {
    const currentGallery = parseGallery(project.gallery);
    const newGallery = currentGallery.filter((_, i) => i !== index);
    try {
      const { error } = await supabase.from("projects").update({ gallery: JSON.stringify(newGallery) }).eq("id", project.id);
      if (error) throw error;
      toast.success("Image removed");
      onUpdate();
    } catch (e) {
      toast.error(`Remove failed: ${e.message}`);
    }
  };
  const handleDrop = (e, type) => {
    e.preventDefault();
    setDragOver(false);
    setDragOverGallery(false);
    if (type === "main") handleMainUpload(e.dataTransfer.files);
    else handleGalleryUpload(e.dataTransfer.files);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50", children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-10 bg-white border-b shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 py-4 flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: onBack, children: /* @__PURE__ */ jsx(ArrowLeft, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold truncate", children: project.title }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
          project.location,
          " · ",
          project.year,
          " · ",
          project.client
        ] })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold capitalize", children: project.category })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "max-w-4xl mx-auto px-4 py-8 space-y-8", children: [
      oldImage && /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800", children: [
        "Current image is a local file path: ",
        /* @__PURE__ */ jsx("code", { className: "bg-amber-100 px-1 rounded", children: oldImage }),
        /* @__PURE__ */ jsx("br", {}),
        "Upload a new image below to replace it with a proper hosted URL."
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-xl border shadow-sm p-6 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold", children: "Main Image" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Hero/cover image for the project. Drag & drop or click to upload." })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: mainRef,
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: (e) => handleMainUpload(e.target.files)
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => {
              var _a;
              return !uploading && ((_a = mainRef.current) == null ? void 0 : _a.click());
            },
            onDragOver: (e) => {
              e.preventDefault();
              setDragOver(true);
            },
            onDragLeave: () => setDragOver(false),
            onDrop: (e) => handleDrop(e, "main"),
            className: `
              relative rounded-xl border-2 border-dashed transition-all cursor-pointer
              ${dragOver ? "border-amber-500 bg-amber-50" : "border-slate-200 hover:border-amber-400 hover:bg-slate-50"}
              ${uploading ? "pointer-events-none opacity-60" : ""}
            `,
            children: [
              imgSrc ? /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: imgSrc,
                    alt: project.title,
                    className: "w-full h-64 md:h-80 object-cover rounded-lg"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2 text-white", children: [
                  /* @__PURE__ */ jsx(Upload, { className: "w-8 h-8" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Click or drop to replace" })
                ] }) })
              ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-16 gap-3", children: [
                uploading ? /* @__PURE__ */ jsx(Loader2, { className: "w-10 h-10 animate-spin text-amber-600" }) : /* @__PURE__ */ jsx(ImagePlus, { className: "w-10 h-10 text-slate-400" }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: uploading ? "Uploading..." : "Drop an image here or click to browse" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "JPG, PNG, WebP or GIF — max 10 MB" })
                ] })
              ] }),
              uploading && imgSrc && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin text-white" }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-xl border shadow-sm p-6 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold", children: "Gallery Images" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Additional images for the project detail page. Select multiple at once." })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: galleryRef,
            type: "file",
            accept: "image/*",
            multiple: true,
            className: "hidden",
            onChange: (e) => handleGalleryUpload(e.target.files)
          }
        ),
        gallery.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: gallery.map((url, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative group rounded-lg overflow-hidden border bg-slate-100 aspect-[4/3]",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: url,
                  alt: `Gallery ${i + 1}`,
                  className: "w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    removeGalleryImage(i);
                  },
                  className: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white rounded-full p-1.5 shadow-lg hover:scale-110",
                  children: /* @__PURE__ */ jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxs("span", { className: "text-white text-xs font-medium", children: [
                "Image ",
                i + 1
              ] }) })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            onClick: () => {
              var _a;
              return !uploadingGallery && ((_a = galleryRef.current) == null ? void 0 : _a.click());
            },
            onDragOver: (e) => {
              e.preventDefault();
              setDragOverGallery(true);
            },
            onDragLeave: () => setDragOverGallery(false),
            onDrop: (e) => handleDrop(e, "gallery"),
            className: `
              rounded-xl border-2 border-dashed transition-all cursor-pointer
              ${dragOverGallery ? "border-amber-500 bg-amber-50" : "border-slate-200 hover:border-amber-400 hover:bg-slate-50"}
              ${uploadingGallery ? "pointer-events-none opacity-60" : ""}
            `,
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-10 gap-2", children: [
              uploadingGallery ? /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin text-amber-600" }) : /* @__PURE__ */ jsx(ImagePlus, { className: "w-8 h-8 text-slate-400" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: uploadingGallery ? "Uploading images..." : "Drop images here or click to browse" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Select multiple files at once" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center pb-8", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/project/${project.slug}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-amber-700 transition-colors",
          children: [
            /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" }),
            "Preview project page →"
          ]
        }
      ) })
    ] })
  ] });
}
export {
  AdminImages as default
};
