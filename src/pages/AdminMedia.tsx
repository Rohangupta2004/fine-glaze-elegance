import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ImagePlus,
  Film,
  Loader2,
  Lock,
  RefreshCw,
  Upload,
  RotateCcw,
  Check,
  Link2,
} from "lucide-react";
import {
  MEDIA_SLOTS,
  MediaSlot,
  groupSlotsByPage,
} from "@/data/siteMedia";
import {
  SiteMediaMap,
  fetchSiteMediaMap,
  SITE_MEDIA_MANIFEST,
} from "@/hooks/useSiteMedia";

const BUCKET = "project-images";
const FOLDER = "site-media";
const ADMIN_PASS = "fineglaze2025";

function getPublicUrl(path: string): string {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

async function saveManifest(map: SiteMediaMap): Promise<void> {
  const blob = new Blob([JSON.stringify(map, null, 2)], {
    type: "application/json",
  });
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(SITE_MEDIA_MANIFEST, blob, {
      contentType: "application/json",
      upsert: true,
    });
  if (error) throw error;
}

export default function AdminMedia() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [map, setMap] = useState<SiteMediaMap>({});
  const [loading, setLoading] = useState(true);

  const handleLogin = () => {
    if (pass === ADMIN_PASS) {
      setAuthed(true);
      toast.success("Logged in");
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

  const updateSlot = async (
    slot: MediaSlot,
    url: string | null
  ): Promise<void> => {
    const next: SiteMediaMap = { ...map };
    if (url) {
      next[slot.key] = { url, type: slot.type };
    } else {
      delete next[slot.key];
    }
    await saveManifest(next);
    setMap(next);
  };

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
              Enter password to manage website media
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

  const grouped = groupSlotsByPage();

  return (
    <div className="min-h-screen bg-slate-50">
      <Toaster />
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/admin" title="Admin home">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </a>
            <div>
              <h1 className="text-xl font-bold">Website Media</h1>
              <p className="text-sm text-muted-foreground">
                Replace hero images & videos across all pages
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={load}
            disabled={loading}
          >
            <RefreshCw
              className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          Object.entries(grouped).map(([page, slots]) => (
            <section key={page} className="space-y-4">
              <h2 className="text-lg font-bold text-slate-800 border-b pb-2">
                {page}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {slots.map((slot) => (
                  <SlotCard
                    key={slot.key}
                    slot={slot}
                    current={map[slot.key]?.url || null}
                    onSave={(url) => updateSlot(slot, url)}
                  />
                ))}
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  );
}

// ─── Slot Card ────────────────────────────────────────────────────────────────
function SlotCard({
  slot,
  current,
  onSave,
}: {
  slot: MediaSlot;
  current: string | null;
  onSave: (url: string | null) => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const effective = current || slot.fallback;
  const isSet = !!current;

  const doSave = async (url: string | null, msg: string) => {
    setBusy(true);
    try {
      await onSave(url);
      toast.success(msg);
      setUrlInput("");
    } catch (e: any) {
      toast.error(`Save failed: ${e.message || e}`);
    } finally {
      setBusy(false);
    }
  };

  const handleUpload = async (files: FileList | null) => {
    if (!files?.length) return;
    const file = files[0];
    if (slot.type === "image" && !file.type.startsWith("image/")) {
      toast.error("Select an image file");
      return;
    }
    setBusy(true);
    try {
      const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const path = `${FOLDER}/${slot.key}-${Date.now()}-${safe}`;
      const { error } = await supabase.storage
        .from(BUCKET)
        .upload(path, file, { contentType: file.type, upsert: false });
      if (error) throw error;
      const url = getPublicUrl(path);
      await onSave(url);
      toast.success(`${slot.label} updated!`);
    } catch (e: any) {
      const m = String(e?.message || e);
      if (m.toLowerCase().includes("mime")) {
        toast.error(
          "This file type can't be uploaded to storage. Paste a hosted URL instead."
        );
      } else {
        toast.error(`Upload failed: ${m}`);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-sm flex items-center gap-2">
            {slot.type === "video" ? (
              <Film className="w-4 h-4 text-purple-600" />
            ) : (
              <ImagePlus className="w-4 h-4 text-amber-600" />
            )}
            {slot.label}
          </h3>
          {slot.note && (
            <p className="text-xs text-muted-foreground mt-1">{slot.note}</p>
          )}
        </div>
        <span
          className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
            isSet
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {isSet ? "Custom" : "Default"}
        </span>
      </div>

      {/* Preview */}
      <div className="rounded-lg overflow-hidden border bg-slate-100 aspect-[16/9] flex items-center justify-center">
        {slot.type === "video" ? (
          <video
            key={effective}
            src={effective}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            autoPlay
          />
        ) : (
          <img
            src={effective}
            alt={slot.label}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Image upload (only for image slots) */}
      {slot.type === "image" && (
        <>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleUpload(e.target.files)}
          />
          <div
            onClick={() => !busy && fileRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              handleUpload(e.dataTransfer.files);
            }}
            className={`rounded-lg border-2 border-dashed cursor-pointer transition-all py-5 flex flex-col items-center gap-1 text-center ${
              dragOver
                ? "border-amber-500 bg-amber-50"
                : "border-slate-200 hover:border-amber-400 hover:bg-slate-50"
            } ${busy ? "pointer-events-none opacity-60" : ""}`}
          >
            {busy ? (
              <Loader2 className="w-6 h-6 animate-spin text-amber-600" />
            ) : (
              <Upload className="w-6 h-6 text-slate-400" />
            )}
            <span className="text-xs font-medium">
              {busy ? "Uploading…" : "Drop image or click to upload"}
            </span>
            <span className="text-[10px] text-muted-foreground">
              JPG, PNG, WebP — max 10 MB
            </span>
          </div>
        </>
      )}

      {/* URL paste (both types) */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (urlInput.trim()) doSave(urlInput.trim(), `${slot.label} updated!`);
        }}
        className="flex gap-2"
      >
        <div className="relative flex-1">
          <Link2 className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <Input
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder={
              slot.type === "video"
                ? "Paste video URL (.mp4 / Pexels link)"
                : "…or paste an image URL"
            }
            className="pl-8 h-9 text-xs"
            disabled={busy}
          />
        </div>
        <Button
          type="submit"
          size="sm"
          disabled={busy || !urlInput.trim()}
          className="h-9"
        >
          <Check className="w-4 h-4" />
        </Button>
      </form>

      {/* Reset */}
      {isSet && (
        <button
          onClick={() => doSave(null, "Reset to default")}
          disabled={busy}
          className="w-full text-xs text-muted-foreground hover:text-red-600 flex items-center justify-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3 h-3" /> Reset to default
        </button>
      )}
    </div>
  );
}
