import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ImagePlus,
  Trash2,
  Loader2,
  Lock,
  GripVertical,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface LogoEntry {
  name: string;
  filename: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const BUCKET = "project-images";
const LOGOS_FOLDER = "client-logos";
const MANIFEST_PATH = `${LOGOS_FOLDER}/manifest.json`;
const ADMIN_PASS = "fineglaze2025";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getPublicUrl(filename: string): string {
  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(`${LOGOS_FOLDER}/${filename}`);
  return data.publicUrl;
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function AdminLogos() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [logos, setLogos] = useState<LogoEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [clientName, setClientName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    if (pass === ADMIN_PASS) {
      setAuthed(true);
      toast.success("Logged in");
    } else {
      toast.error("Wrong password");
    }
  };

  // ─── Fetch manifest ───────────────────────────────────────────────────────
  const fetchLogos = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from(BUCKET)
        .download(MANIFEST_PATH);

      if (error || !data) {
        // No manifest yet — start fresh
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

  // ─── Save manifest ───────────────────────────────────────────────────────
  const saveManifest = async (entries: LogoEntry[]) => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], {
      type: "application/json",
    });

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(MANIFEST_PATH, blob, { upsert: true });

    if (error) {
      toast.error("Failed to save manifest: " + error.message);
      return false;
    }
    return true;
  };

  // ─── Upload logo ──────────────────────────────────────────────────────────
  const handleUpload = async () => {
    const file = fileRef.current?.files?.[0];
    if (!file) return toast.error("Select an image first");
    if (!clientName.trim()) return toast.error("Enter client name");

    setUploading(true);
    const ext = file.name.split(".").pop() || "png";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const path = `${LOGOS_FOLDER}/${filename}`;

    // Upload image
    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, file);

    if (uploadError) {
      toast.error("Upload failed: " + uploadError.message);
      setUploading(false);
      return;
    }

    // Update manifest
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

  // ─── Delete logo ──────────────────────────────────────────────────────────
  const handleDelete = async (index: number) => {
    const logo = logos[index];
    if (!confirm(`Delete "${logo.name}" logo?`)) return;

    // Remove from storage
    await supabase.storage
      .from(BUCKET)
      .remove([`${LOGOS_FOLDER}/${logo.filename}`]);

    // Update manifest
    const newLogos = logos.filter((_, i) => i !== index);
    const saved = await saveManifest(newLogos);

    if (saved) {
      setLogos(newLogos);
      toast.success(`"${logo.name}" deleted`);
    }
  };

  // ─── Reorder ──────────────────────────────────────────────────────────────
  const moveUp = async (index: number) => {
    if (index === 0) return;
    const newLogos = [...logos];
    [newLogos[index - 1], newLogos[index]] = [
      newLogos[index],
      newLogos[index - 1],
    ];
    setLogos(newLogos);
    await saveManifest(newLogos);
  };

  const moveDown = async (index: number) => {
    if (index >= logos.length - 1) return;
    const newLogos = [...logos];
    [newLogos[index], newLogos[index + 1]] = [
      newLogos[index + 1],
      newLogos[index],
    ];
    setLogos(newLogos);
    await saveManifest(newLogos);
  };

  useEffect(() => {
    if (authed) fetchLogos();
  }, [authed, fetchLogos]);

  // ─── Login screen ─────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Toaster richColors />
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Lock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Client Logos</h1>
              <p className="text-xs text-muted-foreground">Admin access</p>
            </div>
          </div>
          <Input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
        </div>
      </div>
    );
  }

  // ─── Main UI ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50">
      <Toaster richColors />

      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <a
            href="/admin/images"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
          </a>
          <div>
            <h1 className="text-xl font-bold">Client Logos</h1>
            <p className="text-xs text-muted-foreground">
              Upload logos for the homepage carousel
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Upload Section */}
        <div className="bg-white rounded-xl border p-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ImagePlus size={20} className="text-amber-600" />
            Add Client Logo
          </h2>

          <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-3 items-end">
            <div className="space-y-1">
              <label className="text-sm font-medium text-muted-foreground">
                Client Name
              </label>
              <Input
                placeholder="e.g. Embassy REIT"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-muted-foreground">
                Logo Image
              </label>
              <Input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
              />
            </div>
            <Button
              onClick={handleUpload}
              disabled={uploading}
              className="bg-amber-600 hover:bg-amber-700 h-10"
            >
              {uploading ? (
                <Loader2 size={16} className="animate-spin mr-2" />
              ) : (
                <ImagePlus size={16} className="mr-2" />
              )}
              {uploading ? "Uploading..." : "Upload"}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Recommended: PNG or SVG with transparent background, around 200×80px
          </p>
        </div>

        {/* Logos List */}
        <div className="bg-white rounded-xl border">
          <div className="p-4 border-b">
            <h2 className="font-semibold">
              Uploaded Logos ({logos.length})
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Drag to reorder. These appear in the homepage carousel.
            </p>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <Loader2 className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
            </div>
          ) : logos.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <ImagePlus className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No logos uploaded yet</p>
              <p className="text-xs mt-1">
                Add your first client logo above
              </p>
            </div>
          ) : (
            <div className="divide-y">
              {logos.map((logo, i) => (
                <div
                  key={logo.filename}
                  className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors"
                >
                  {/* Grip icon */}
                  <div className="text-muted-foreground/40">
                    <GripVertical size={18} />
                  </div>

                  {/* Logo preview */}
                  <div className="w-24 h-14 rounded-lg border bg-white flex items-center justify-center p-2 flex-shrink-0">
                    <img
                      src={getPublicUrl(logo.filename)}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Name */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{logo.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Position {i + 1}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => moveUp(i)}
                      disabled={i === 0}
                    >
                      <ArrowUp size={14} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => moveDown(i)}
                      disabled={i === logos.length - 1}
                    >
                      <ArrowDown size={14} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDelete(i)}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
