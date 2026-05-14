import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ImagePlus,
  Trash2,
  Upload,
  Loader2,
  Lock,
  Star,
  RefreshCw,
  Eye,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ProjectRow {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  year: string;
  client: string;
  image: string | null;
  gallery: string[] | string | null;
  is_award_winner: boolean;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const BUCKET = "project-images";
const ADMIN_PASS = "fineglaze2025";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function parseGallery(g: string[] | string | null): string[] {
  if (!g) return [];
  if (Array.isArray(g)) return g;
  try {
    const p = JSON.parse(g);
    return Array.isArray(p) ? p : [];
  } catch {
    return [];
  }
}

function isStorageUrl(url: string): boolean {
  return url.startsWith("https://") && url.includes("supabase");
}

function getPublicUrl(path: string): string {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function AdminImages() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ProjectRow | null>(null);

  // Auth check
  const handleLogin = () => {
    if (pass === ADMIN_PASS) {
      setAuthed(true);
      toast.success("Logged in");
    } else {
      toast.error("Wrong password");
    }
  };

  // Fetch projects
  const fetchProjects = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("id,title,slug,category,location,year,client,image,gallery,is_award_winner")
      .order("sort_order", { ascending: true });
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

  // Update selected project from latest data
  useEffect(() => {
    if (selected) {
      const updated = projects.find((p) => p.id === selected.id);
      if (updated) setSelected(updated);
    }
  }, [projects]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Toaster />
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border p-8 space-y-6 text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
            <Lock className="w-6 h-6 text-amber-700" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Fine Glaze Admin</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Enter password to manage project images
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-3"
          >
            <Input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              autoFocus
            />
            <Button className="w-full" type="submit">
              <Lock className="w-4 h-4 mr-2" /> Sign In
            </Button>
          </form>
        </div>
      </div>
    );
  }

  if (selected) {
    return (
      <>
        <Toaster />
        <ProjectEditor
          project={selected}
          onBack={() => setSelected(null)}
          onUpdate={() => fetchProjects()}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Toaster />
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Project Images</h1>
            <p className="text-sm text-muted-foreground">
              Upload & manage project photos
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchProjects}
            disabled={loading}
          >
            <RefreshCw
              className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => {
              const imgSrc =
                p.image && isStorageUrl(p.image) ? p.image : null;
              const galleryCount = parseGallery(p.gallery).filter(
                isStorageUrl
              ).length;

              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className="group bg-white rounded-xl border shadow-sm hover:shadow-md transition-all text-left overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="relative h-44 bg-slate-100">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-2">
                        <ImagePlus className="w-8 h-8" />
                        <span className="text-xs font-medium">
                          No image uploaded
                        </span>
                      </div>
                    )}
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 text-xs font-semibold capitalize shadow-sm">
                      {p.category}
                    </span>
                    {p.is_award_winner && (
                      <span className="absolute top-3 right-3">
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                      </span>
                    )}
                    {/* Gallery badge */}
                    {galleryCount > 0 && (
                      <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 text-white text-xs font-medium">
                        +{galleryCount} gallery
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4 space-y-1">
                    <h3 className="font-bold text-sm truncate">{p.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {p.location} · {p.year}
                    </p>
                    <p className="text-xs text-muted-foreground">{p.client}</p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

// ─── Project Editor ──────────────────────────────────────────────────────────
function ProjectEditor({
  project,
  onBack,
  onUpdate,
}: {
  project: ProjectRow;
  onBack: () => void;
  onUpdate: () => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [dragOverGallery, setDragOverGallery] = useState(false);
  const mainRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);

  const imgSrc =
    project.image && isStorageUrl(project.image) ? project.image : null;
  const gallery = parseGallery(project.gallery).filter(isStorageUrl);
  const oldImage =
    project.image && !isStorageUrl(project.image) ? project.image : null;

  // Upload a file → return public URL
  const uploadFile = async (file: File, folder: string): Promise<string> => {
    const ts = Date.now();
    const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${folder}/${ts}-${safe}`;

    const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
      contentType: file.type,
      upsert: false,
    });
    if (error) throw error;
    return getPublicUrl(path);
  };

  // Main image upload
  const handleMainUpload = async (files: FileList | null) => {
    if (!files?.length) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Select an image file");
      return;
    }
    setUploading(true);
    try {
      const url = await uploadFile(file, project.slug);
      const { error } = await supabase
        .from("projects")
        .update({ image: url })
        .eq("id", project.id);
      if (error) throw error;
      toast.success("Main image updated!");
      onUpdate();
    } catch (e: any) {
      toast.error(`Upload failed: ${e.message}`);
    } finally {
      setUploading(false);
    }
  };

  // Gallery upload (multi)
  const handleGalleryUpload = async (files: FileList | null) => {
    if (!files?.length) return;
    const imgs = Array.from(files).filter((f) => f.type.startsWith("image/"));
    if (!imgs.length) {
      toast.error("Select image files");
      return;
    }
    setUploadingGallery(true);
    try {
      const urls: string[] = [];
      for (const file of imgs) {
        const url = await uploadFile(file, `${project.slug}/gallery`);
        urls.push(url);
      }
      const currentGallery = parseGallery(project.gallery);
      const newGallery = [...currentGallery, ...urls];

      const { error } = await supabase
        .from("projects")
        .update({ gallery: JSON.stringify(newGallery) })
        .eq("id", project.id);
      if (error) throw error;
      toast.success(`${urls.length} image(s) added to gallery!`);
      onUpdate();
    } catch (e: any) {
      toast.error(`Upload failed: ${e.message}`);
    } finally {
      setUploadingGallery(false);
    }
  };

  // Remove gallery image
  const removeGalleryImage = async (index: number) => {
    const currentGallery = parseGallery(project.gallery);
    const newGallery = currentGallery.filter((_, i) => i !== index);
    try {
      const { error } = await supabase
        .from("projects")
        .update({ gallery: JSON.stringify(newGallery) })
        .eq("id", project.id);
      if (error) throw error;
      toast.success("Image removed");
      onUpdate();
    } catch (e: any) {
      toast.error(`Remove failed: ${e.message}`);
    }
  };

  // Drag handlers
  const handleDrop = (e: React.DragEvent, type: "main" | "gallery") => {
    e.preventDefault();
    setDragOver(false);
    setDragOverGallery(false);
    if (type === "main") handleMainUpload(e.dataTransfer.files);
    else handleGalleryUpload(e.dataTransfer.files);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold truncate">{project.title}</h1>
            <p className="text-xs text-muted-foreground">
              {project.location} · {project.year} · {project.client}
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold capitalize">
            {project.category}
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Old image notice */}
        {oldImage && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            Current image is a local file path: <code className="bg-amber-100 px-1 rounded">{oldImage}</code>
            <br />
            Upload a new image below to replace it with a proper hosted URL.
          </div>
        )}

        {/* ── Main Image ─────────────────────────────────────── */}
        <section className="bg-white rounded-xl border shadow-sm p-6 space-y-4">
          <div>
            <h2 className="text-lg font-bold">Main Image</h2>
            <p className="text-sm text-muted-foreground">
              Hero/cover image for the project. Drag & drop or click to upload.
            </p>
          </div>

          <input
            ref={mainRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleMainUpload(e.target.files)}
          />

          <div
            onClick={() => !uploading && mainRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => handleDrop(e, "main")}
            className={`
              relative rounded-xl border-2 border-dashed transition-all cursor-pointer
              ${dragOver ? "border-amber-500 bg-amber-50" : "border-slate-200 hover:border-amber-400 hover:bg-slate-50"}
              ${uploading ? "pointer-events-none opacity-60" : ""}
            `}
          >
            {imgSrc ? (
              <div className="relative group">
                <img
                  src={imgSrc}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2 text-white">
                    <Upload className="w-8 h-8" />
                    <span className="text-sm font-medium">
                      Click or drop to replace
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 gap-3">
                {uploading ? (
                  <Loader2 className="w-10 h-10 animate-spin text-amber-600" />
                ) : (
                  <ImagePlus className="w-10 h-10 text-slate-400" />
                )}
                <div className="text-center">
                  <p className="font-medium text-sm">
                    {uploading
                      ? "Uploading..."
                      : "Drop an image here or click to browse"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    JPG, PNG, WebP or GIF — max 10 MB
                  </p>
                </div>
              </div>
            )}

            {uploading && imgSrc && (
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-white" />
              </div>
            )}
          </div>
        </section>

        {/* ── Gallery ─────────────────────────────────────────── */}
        <section className="bg-white rounded-xl border shadow-sm p-6 space-y-4">
          <div>
            <h2 className="text-lg font-bold">Gallery Images</h2>
            <p className="text-sm text-muted-foreground">
              Additional images for the project detail page. Select multiple at
              once.
            </p>
          </div>

          <input
            ref={galleryRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleGalleryUpload(e.target.files)}
          />

          {/* Existing gallery */}
          {gallery.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {gallery.map((url, i) => (
                <div
                  key={i}
                  className="relative group rounded-lg overflow-hidden border bg-slate-100 aspect-[4/3]"
                >
                  <img
                    src={url}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeGalleryImage(i);
                    }}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white rounded-full p-1.5 shadow-lg hover:scale-110"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-medium">
                      Image {i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upload area */}
          <div
            onClick={() => !uploadingGallery && galleryRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOverGallery(true);
            }}
            onDragLeave={() => setDragOverGallery(false)}
            onDrop={(e) => handleDrop(e, "gallery")}
            className={`
              rounded-xl border-2 border-dashed transition-all cursor-pointer
              ${dragOverGallery ? "border-amber-500 bg-amber-50" : "border-slate-200 hover:border-amber-400 hover:bg-slate-50"}
              ${uploadingGallery ? "pointer-events-none opacity-60" : ""}
            `}
          >
            <div className="flex flex-col items-center justify-center py-10 gap-2">
              {uploadingGallery ? (
                <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
              ) : (
                <ImagePlus className="w-8 h-8 text-slate-400" />
              )}
              <p className="font-medium text-sm">
                {uploadingGallery
                  ? "Uploading images..."
                  : "Drop images here or click to browse"}
              </p>
              <p className="text-xs text-muted-foreground">
                Select multiple files at once
              </p>
            </div>
          </div>
        </section>

        {/* Preview link */}
        <div className="text-center pb-8">
          <a
            href={`/project/${project.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-amber-700 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Preview project page →
          </a>
        </div>
      </main>
    </div>
  );
}
