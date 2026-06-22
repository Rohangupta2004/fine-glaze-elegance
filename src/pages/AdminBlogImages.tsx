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
  Loader2,
  Lock,
  Search,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { blogPostsList } from "@/data/blog";

// ─── Constants ────────────────────────────────────────────────────────────────
const BUCKET = "project-images";
const BLOG_FOLDER = "blog";
const MANIFEST_PATH = `${BLOG_FOLDER}/manifest.json`;
const ADMIN_PASS = "fineglaze2025";

type Manifest = Record<string, string>; // slug → filename

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getPublicUrl(filename: string): string {
  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(`${BLOG_FOLDER}/${filename}`);
  return data.publicUrl;
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function AdminBlogImages() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [manifest, setManifest] = useState<Manifest>({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const fileRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleLogin = () => {
    if (pass === ADMIN_PASS) {
      setAuthed(true);
      toast.success("Logged in");
    } else {
      toast.error("Wrong password");
    }
  };

  // ─── Fetch manifest ───────────────────────────────────────────────────────
  const fetchManifest = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from(BUCKET)
        .download(MANIFEST_PATH);
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

  // ─── Save manifest ───────────────────────────────────────────────────────
  const saveManifest = async (updated: Manifest) => {
    const blob = new Blob([JSON.stringify(updated, null, 2)], {
      type: "application/json",
    });
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(MANIFEST_PATH, blob, {
        upsert: true,
        contentType: "application/json",
      });
    if (error) throw error;
    setManifest(updated);
  };

  // ─── Upload image for a blog post ────────────────────────────────────────
  const handleUpload = async (slug: string, file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Only image files allowed");
      return;
    }
    setUploading(slug);
    try {
      // Generate filename: slug.ext
      const ext = file.name.split(".").pop()?.toLowerCase() || "webp";
      const filename = `${slug}.${ext}`;
      const path = `${BLOG_FOLDER}/${filename}`;

      // Delete old file if exists with different extension
      const oldFilename = manifest[slug];
      if (oldFilename && oldFilename !== filename) {
        await supabase.storage
          .from(BUCKET)
          .remove([`${BLOG_FOLDER}/${oldFilename}`]);
      }

      // Upload new file
      const { error } = await supabase.storage
        .from(BUCKET)
        .upload(path, file, {
          upsert: true,
          contentType: file.type,
        });
      if (error) throw error;

      // Update manifest
      const updated = { ...manifest, [slug]: filename };
      await saveManifest(updated);
      toast.success("Image uploaded!");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      toast.error(msg);
    }
    setUploading(null);
  };

  // ─── Remove image for a blog post ────────────────────────────────────────
  const handleRemove = async (slug: string) => {
    const filename = manifest[slug];
    if (!filename) return;
    setUploading(slug);
    try {
      await supabase.storage
        .from(BUCKET)
        .remove([`${BLOG_FOLDER}/${filename}`]);
      const updated = { ...manifest };
      delete updated[slug];
      await saveManifest(updated);
      toast.success("Image removed");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Remove failed";
      toast.error(msg);
    }
    setUploading(null);
  };

  useEffect(() => {
    if (authed) fetchManifest();
  }, [authed, fetchManifest]);

  // ─── Login screen ─────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
        <Toaster richColors position="top-center" />
        <div className="w-full max-w-sm space-y-4 text-center">
          <Lock className="mx-auto text-amber-500" size={40} />
          <h1 className="text-2xl font-bold text-white">Blog Images Admin</h1>
          <p className="text-slate-400 text-sm">
            Upload hero images for blog articles
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="flex gap-2"
          >
            <Input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white"
            />
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
              Enter
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Filter posts ─────────────────────────────────────────────────────────
  const filtered = blogPostsList.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase())
  );

  const uploadedCount = Object.keys(manifest).length;
  const totalCount = blogPostsList.length;

  // ─── Main UI ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Toaster richColors position="top-center" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="/admin"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </a>
            <div>
              <h1 className="text-lg font-bold">Blog Images</h1>
              <p className="text-xs text-slate-400">
                {uploadedCount}/{totalCount} articles have custom images
              </p>
            </div>
          </div>
          <div className="relative w-64">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <Input
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-slate-800 border-slate-700 text-white text-sm"
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-amber-500" size={32} />
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((post) => {
              const hasCustom = !!manifest[post.slug];
              const displayImage = hasCustom
                ? getPublicUrl(manifest[post.slug])
                : post.heroImage;
              const isUploading = uploading === post.slug;

              return (
                <div
                  key={post.slug}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                    hasCustom
                      ? "border-emerald-800/50 bg-emerald-950/20"
                      : "border-slate-800 bg-slate-900/50"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-800">
                    <img
                      src={displayImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      {hasCustom ? (
                        <CheckCircle2
                          size={14}
                          className="text-emerald-500 shrink-0"
                        />
                      ) : (
                        <XCircle
                          size={14}
                          className="text-slate-500 shrink-0"
                        />
                      )}
                      <h3 className="text-sm font-semibold truncate">
                        {post.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 truncate">
                      {post.slug} · {post.date}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      ref={(el) => {
                        fileRefs.current[post.slug] = el;
                      }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleUpload(post.slug, file);
                        e.target.value = "";
                      }}
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={isUploading}
                      onClick={() =>
                        fileRefs.current[post.slug]?.click()
                      }
                      className="text-xs gap-1.5 border-slate-700 hover:border-amber-600 hover:text-amber-500"
                    >
                      {isUploading ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <ImagePlus size={14} />
                      )}
                      {hasCustom ? "Replace" : "Upload"}
                    </Button>
                    {hasCustom && (
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={isUploading}
                        onClick={() => handleRemove(post.slug)}
                        className="text-xs text-red-400 hover:text-red-300 hover:bg-red-950/30"
                      >
                        <Trash2 size={14} />
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
