import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ImagePlus,
  Trash2,
  Loader2,
  Lock,
  X,
  Home,
  Wrench,
  Building2,
  FileText,
  Users,
  Phone,
  LayoutTemplate,
  CheckCircle2,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const BUCKET = "project-images";
const BASE_FOLDER = "site-content";
const ADMIN_PASS = "fineglaze2025";

// ─── Site Structure ───────────────────────────────────────────────────────────
const SITE_PAGES = [
  {
    key: "home",
    label: "Home",
    icon: Home,
    color: "text-blue-600",
    sections: [
      { key: "hero", label: "Hero Section — Main Banner", maxImages: 5 },
      { key: "trust-strip", label: "Trust Strip — Client Logos Bar", maxImages: 12 },
      { key: "services-grid", label: "Services Grid — Homepage Service Cards", maxImages: 8 },
      { key: "portfolio-preview", label: "Portfolio Preview — Featured Projects", maxImages: 6 },
      { key: "about-intro", label: "About Intro — Company Overview", maxImages: 3 },
      { key: "cta-banner", label: "CTA Banner — Call to Action", maxImages: 2 },
    ],
  },
  {
    key: "services",
    label: "Services",
    icon: Wrench,
    color: "text-green-600",
    sections: [
      { key: "services-hero", label: "Services Page Hero", maxImages: 2 },
      { key: "facade-systems", label: "🏢 Facade Systems — Curtain Walls & Structural Glazing", maxImages: 8 },
      { key: "glass-railings", label: "🔩 Glass Railings — Frameless & Semi-Frameless", maxImages: 8 },
      { key: "aluminium-doors", label: "🪟 Aluminium Doors & Windows", maxImages: 8 },
      { key: "facade-amc", label: "🛠 Facade AMC & Maintenance", maxImages: 6 },
      { key: "acp-cladding", label: "🧱 ACP & Metal Cladding", maxImages: 8 },
      { key: "skylights", label: "☀️ Skylights & Glass Canopies", maxImages: 6 },
      { key: "louvers", label: "🌬 Aluminium Louvers & Sun Shading", maxImages: 6 },
      { key: "glass-partitions", label: "🚿 Glass Partitions & Shower Enclosures", maxImages: 6 },
      { key: "curtain-wall-page", label: "Page: /curtain-wall-systems", maxImages: 10 },
      { key: "structural-glazing-page", label: "Page: /structural-glazing", maxImages: 10 },
      { key: "glass-railings-page", label: "Page: /glass-railings", maxImages: 10 },
      { key: "aluminium-facade-page", label: "Page: /aluminium-facade", maxImages: 10 },
      { key: "acp-cladding-page", label: "Page: /acp-aluminium-cladding", maxImages: 10 },
      { key: "maintenance-page", label: "Page: /maintenance-services", maxImages: 8 },
    ],
  },
  {
    key: "projects",
    label: "Projects",
    icon: Building2,
    color: "text-purple-600",
    sections: [
      { key: "projects-hero", label: "Projects Page Hero", maxImages: 2 },
      { key: "ltimindtree-campus", label: "📸 LTIMindtree Mensa Campus — Navi Mumbai", maxImages: 10 },
      { key: "embassy-247", label: "📸 Embassy 247 — Vikhroli, Mumbai", maxImages: 10 },
      { key: "salsette-27", label: "📸 Salsette-27 — Byculla, Mumbai", maxImages: 10 },
      { key: "leela-business-park", label: "📸 Leela Business Park", maxImages: 10 },
      { key: "pune-airport", label: "📸 Pune International Airport — New Terminal", maxImages: 10 },
      { key: "jindal-house", label: "📸 Jindal House — Balkeshwar 32", maxImages: 10 },
      { key: "nirmaann-estrellaa", label: "📸 Nirmaann Estrellaa", maxImages: 10 },
      { key: "ssg-honesty", label: "📸 SSG Honesty", maxImages: 10 },
      { key: "leela-hotel", label: "📸 Leela Hotel", maxImages: 10 },
      { key: "embassy-techzone", label: "📸 Embassy Techzone", maxImages: 10 },
    ],
  },
  {
    key: "blog",
    label: "Blog Articles",
    icon: FileText,
    color: "text-amber-600",
    sections: [
      { key: "structural-glazing-cost-india-2026", label: "Structural Glazing Cost Per Sq Ft in India (2026)", maxImages: 5 },
      { key: "unitized-vs-stick-system-curtain-wall", label: "Unitized vs Stick System Curtain Wall", maxImages: 5 },
      { key: "types-of-glass-for-building-facades", label: "7 Types of Glass Used in Building Facades", maxImages: 5 },
      { key: "how-to-choose-facade-contractor-india", label: "How to Choose the Best Facade Contractor in India", maxImages: 5 },
      { key: "glass-railing-cost-india-2026", label: "Glass Railing Cost Per Running Foot in India (2026)", maxImages: 5 },
      { key: "aluminium-facade-vs-upvc-windows", label: "Aluminium Facade vs UPVC Windows", maxImages: 5 },
      { key: "facade-maintenance-guide-india", label: "Building Facade Maintenance Guide India", maxImages: 5 },
      { key: "curtain-wall-installation-process-india", label: "Curtain Wall Installation Process in India", maxImages: 5 },
      { key: "acp-vs-hpl-cladding-comparison", label: "ACP vs HPL Cladding: Which is Better?", maxImages: 5 },
      { key: "curtain-wall-engineering-wind-load-india", label: "Curtain Wall Engineering: Wind Load & Structural Design", maxImages: 5 },
      { key: "glass-selection-guide-u-value-shgc-is2553", label: "Glass Selection Guide: U-Value, SHGC & IS 2553", maxImages: 5 },
      { key: "acp-vs-hpl-vs-aluminium-composite-technical-guide", label: "ACP vs HPL vs Aluminium Composite Technical Guide", maxImages: 5 },
      { key: "spider-glazing-system-guide-india", label: "Spider Glazing System Guide India", maxImages: 5 },
      { key: "acp-sheet-price-per-sq-ft-india-2026", label: "ACP Sheet Price Per Sq Ft India (2026)", maxImages: 5 },
      { key: "curtain-wall-cost-per-sq-ft-india-2026", label: "Curtain Wall Cost Per Sq Ft India (2026)", maxImages: 5 },
      { key: "aluminium-window-cost-per-sq-ft-india-2026", label: "Aluminium Window Cost Per Sq Ft India (2026)", maxImages: 5 },
      { key: "double-glazed-window-cost-india-2026", label: "Double Glazed Window Cost India (2026)", maxImages: 5 },
      { key: "facade-design-trends-india-2026", label: "Top 10 Building Facade Design Trends India (2026)", maxImages: 5 },
      { key: "fire-rated-glass-facade-requirements-india", label: "Fire-Rated Glass Facade Requirements India", maxImages: 5 },
      { key: "glass-partition-cost-india-2026", label: "Glass Partition Cost India (2026)", maxImages: 5 },
      { key: "facade-contractor-vs-general-contractor", label: "Facade Contractor vs General Contractor", maxImages: 5 },
      { key: "leed-igbc-facade-requirements-india", label: "LEED & IGBC Facade Requirements India", maxImages: 5 },
      { key: "glass-facade-waterproofing-leakage-solutions-india", label: "Glass Facade Waterproofing & Leakage Solutions India", maxImages: 5 },
      { key: "acp-cladding-installation-process-india", label: "ACP Cladding Installation Process India", maxImages: 5 },
    ],
  },
  {
    key: "about",
    label: "About",
    icon: Users,
    color: "text-rose-600",
    sections: [
      { key: "about-hero", label: "About Hero Section", maxImages: 2 },
      { key: "team-photo", label: "Team / Office Photos", maxImages: 6 },
      { key: "company-story", label: "Company Story Section", maxImages: 4 },
      { key: "certifications", label: "Certifications & Awards", maxImages: 6 },
    ],
  },
  {
    key: "contact",
    label: "Contact",
    icon: Phone,
    color: "text-teal-600",
    sections: [
      { key: "contact-hero", label: "Contact Page Hero", maxImages: 2 },
      { key: "office-photos", label: "Office / Location Photos", maxImages: 4 },
    ],
  },
  {
    key: "footer",
    label: "Footer",
    icon: LayoutTemplate,
    color: "text-slate-600",
    sections: [
      { key: "footer-logo", label: "Footer Logo & Brand Images", maxImages: 2 },
      { key: "footer-bg", label: "Footer Background Image", maxImages: 1 },
    ],
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface ImageEntry {
  filename: string;
  url: string;
  uploadedAt: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function sectionPath(page: string, section: string) {
  return `${BASE_FOLDER}/${page}/${section}`;
}

function manifestPath(page: string, section: string) {
  return `${sectionPath(page, section)}/manifest.json`;
}

function getPublicUrl(path: string): string {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

// ─── SectionCard Component ────────────────────────────────────────────────────
function SectionCard({
  page,
  sectionKey,
  label,
  maxImages,
}: {
  page: string;
  sectionKey: string;
  label: string;
  maxImages: number;
}) {
  const [images, setImages] = useState<ImageEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const loadImages = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from(BUCKET)
        .download(manifestPath(page, sectionKey));

      if (!error && data) {
        const text = await data.text();
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) setImages(parsed);
      } else {
        setImages([]);
      }
    } catch {
      setImages([]);
    }
    setLoading(false);
  }, [page, sectionKey]);

  const saveManifest = async (entries: ImageEntry[]) => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], {
      type: "application/json",
    });
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(manifestPath(page, sectionKey), blob, {
        contentType: "application/json",
        upsert: true,
      });
    return !error;
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    if (images.length + files.length > maxImages) {
      toast.error(`Max ${maxImages} images for this section`);
      return;
    }

    setUploading(true);
    const newEntries: ImageEntry[] = [];

    for (const file of files) {
      const ext = file.name.split(".").pop() || "webp";
      const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}.${ext}`;
      const storagePath = `${sectionPath(page, sectionKey)}/${filename}`;

      const { error } = await supabase.storage
        .from(BUCKET)
        .upload(storagePath, file, { contentType: file.type, upsert: false });

      if (error) {
        toast.error(`Failed to upload ${file.name}`);
        continue;
      }

      newEntries.push({
        filename,
        url: getPublicUrl(storagePath),
        uploadedAt: new Date().toISOString(),
      });
    }

    if (newEntries.length > 0) {
      const updated = [...images, ...newEntries];
      const saved = await saveManifest(updated);
      if (saved) {
        setImages(updated);
        toast.success(`${newEntries.length} image(s) uploaded`);
        if (!expanded) setExpanded(true);
      }
    }

    if (fileRef.current) fileRef.current.value = "";
    setUploading(false);
  };

  const handleDelete = async (index: number) => {
    const entry = images[index];
    const storagePath = `${sectionPath(page, sectionKey)}/${entry.filename}`;

    await supabase.storage.from(BUCKET).remove([storagePath]);

    const updated = images.filter((_, i) => i !== index);
    await saveManifest(updated);
    setImages(updated);
    toast.success("Image deleted");
  };

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const hasImages = images.length > 0;

  return (
    <div className="border rounded-xl overflow-hidden bg-white hover:border-slate-300 transition-colors">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer select-none"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {loading ? (
                <span className="flex items-center gap-1">
                  <Loader2 size={10} className="animate-spin" /> Loading…
                </span>
              ) : hasImages ? (
                <span className="text-green-600 flex items-center gap-1">
                  <CheckCircle2 size={10} />
                  {images.length} / {maxImages} images uploaded
                </span>
              ) : (
                <span className="text-muted-foreground">
                  No images — click to upload
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-2 flex-shrink-0">
          {hasImages && (
            <Badge variant="secondary" className="text-xs">
              {images.length}
            </Badge>
          )}
          <label
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer"
          >
            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-8 text-xs pointer-events-none"
              disabled={uploading || images.length >= maxImages}
            >
              <span>
                {uploading ? (
                  <Loader2 size={12} className="animate-spin mr-1" />
                ) : (
                  <ImagePlus size={12} className="mr-1" />
                )}
                Upload
              </span>
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              className="sr-only"
              onChange={handleUpload}
            />
          </label>
        </div>
      </div>

      {/* Image grid (expanded) */}
      {expanded && hasImages && (
        <div className="border-t px-4 pb-4 pt-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {images.map((img, i) => (
              <div
                key={img.filename}
                className="relative group aspect-video rounded-lg overflow-hidden border bg-slate-50"
              >
                <img
                  src={img.url}
                  alt={`${label} image ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  onClick={() => handleDelete(i)}
                  className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                >
                  <X size={12} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] px-1.5 py-0.5 text-center truncate">
                  {i + 1}
                </div>
              </div>
            ))}

            {/* Add more slot */}
            {images.length < maxImages && (
              <label className="aspect-video rounded-lg border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-slate-400 hover:bg-slate-50 transition-all">
                <ImagePlus size={18} className="text-slate-300" />
                <span className="text-[10px] text-muted-foreground">Add more</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={handleUpload}
                />
              </label>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AdminSiteContent() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [activePage, setActivePage] = useState("home");

  const handleLogin = () => {
    if (pass === ADMIN_PASS) {
      setAuthed(true);
      toast.success("Welcome, Admin");
    } else {
      toast.error("Wrong password");
    }
  };

  const currentPage = SITE_PAGES.find((p) => p.key === activePage) ?? SITE_PAGES[0];

  // ─── Login ─────────────────────────────────────────────────────────────────
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
              <h1 className="text-lg font-bold">Site Content Admin</h1>
              <p className="text-xs text-muted-foreground">Fine Glaze — Admin only</p>
            </div>
          </div>
          <Input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            autoFocus
          />
          <Button onClick={handleLogin} className="w-full bg-amber-600 hover:bg-amber-700">
            Login
          </Button>
        </div>
      </div>
    );
  }

  // ─── Main UI ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50">
      <Toaster richColors />

      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="/admin/images"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <ArrowLeft size={18} />
            </a>
            <div>
              <h1 className="text-lg font-bold leading-tight">Site Content Manager</h1>
              <p className="text-xs text-muted-foreground">
                Upload images for every page & section
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="/admin/images">
              <Button variant="outline" size="sm" className="text-xs">
                <Building2 size={12} className="mr-1" /> Projects
              </Button>
            </a>
            <a href="/admin/logos">
              <Button variant="outline" size="sm" className="text-xs">
                <Users size={12} className="mr-1" /> Client Logos
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar — page navigation */}
        <div className="w-44 flex-shrink-0">
          <nav className="space-y-1 sticky top-20">
            {SITE_PAGES.map((page) => {
              const Icon = page.icon;
              return (
                <button
                  key={page.key}
                  onClick={() => setActivePage(page.key)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all text-left ${
                    activePage === page.key
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "text-muted-foreground hover:bg-slate-100 hover:text-foreground"
                  }`}
                >
                  <Icon size={15} className={activePage === page.key ? "text-amber-600" : page.color} />
                  {page.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main area — sections */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-4">
            {(() => {
              const Icon = currentPage.icon;
              return <Icon size={20} className={currentPage.color} />;
            })()}
            <h2 className="text-xl font-bold">{currentPage.label}</h2>
            <Badge variant="secondary" className="text-xs ml-auto">
              {currentPage.sections.length} sections
            </Badge>
          </div>

          <div className="space-y-2">
            {currentPage.sections.map((section) => (
              <SectionCard
                key={section.key}
                page={currentPage.key}
                sectionKey={section.key}
                label={section.label}
                maxImages={section.maxImages}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
