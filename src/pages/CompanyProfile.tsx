import React, { useState, useEffect } from "react";
import PageHero from "@/components/common/PageHero";
import { Helmet } from "react-helmet-async";
import { useSearchParams, Link } from "react-router-dom";
import {
  Download,
  Share2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Layers,
  FileText,
  PhoneCall,
  Mail,
  Award,
  CheckCircle2,
  Building,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/QuoteModal";
import { PROFILE_SECTIONS } from "@/components/CompanyProfileViewerModal";
import { useCompanyProfile } from "@/context/CompanyProfileContext";
import { cn } from "@/lib/utils";

const TOTAL_SLIDES = 57;

export default function CompanyProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSlideParam = parseInt(searchParams.get("slide") || "1", 10);
  const [currentSlide, setCurrentSlide] = useState(
    isNaN(initialSlideParam) ? 1 : Math.max(1, Math.min(TOTAL_SLIDES, initialSlideParam))
  );
  const [viewMode, setViewMode] = useState<"slides" | "pdf">("slides");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { openProfile } = useCompanyProfile();

  const pdfUrl = "/docs/fine-glaze-company-profile.pdf";

  // Sync slide with URL search param
  useEffect(() => {
    const s = parseInt(searchParams.get("slide") || "1", 10);
    if (!isNaN(s) && s >= 1 && s <= TOTAL_SLIDES && s !== currentSlide) {
      setCurrentSlide(s);
    }
  }, [searchParams]);

  const goToSlide = (slide: number) => {
    const valid = Math.max(1, Math.min(TOTAL_SLIDES, slide));
    setCurrentSlide(valid);
    setSearchParams({ slide: valid.toString() });
  };

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES) goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 1) goToSlide(currentSlide - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const touchStartXRef = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  const currentSection = PROFILE_SECTIONS[currentSlide - 1] || {
    title: `Page ${currentSlide}`,
    tag: "Fine Glaze",
  };

  return (
    <Layout darkHero>
      <Helmet>
        <title>Fine Glaze Company Profile | Architectural Facade Systems</title>
        <meta
          name="description"
          content="Fine Glaze Company Profile. unitized curtain wall, structural glazing, ACP cladding, leadership team, and landmark projects."
        />
        <link rel="canonical" href="https://fineglaze.com/company-profile" />
        <meta property="og:title" content="Fine Glaze Company Profile — Facade Specialists Mumbai & Pune" />
        <meta
          property="og:description"
          content="View our complete capability profile, technical specifications, and landmark client portfolio."
        />
        <meta property="og:image" content="https://fineglaze.com/profile-slides/slide-1.webp" />
        <meta property="og:type" content="article" />
      </Helmet>

      <PageHero
        crumbs={[{ label: "Company profile" }]}
        title={<>Fine Glaze <span className="text-lamp">Company Profile</span></>}
        intro="Design, fabrication, installation and maintenance of architectural facade systems in Pune and Mumbai."
        hideAction
        source="profile_hero"
      />

      <section className="fg-sec" style={{ paddingBlock: 32 }}>
        <div className="fg-wrap">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                onClick={() => openProfile(currentSlide, viewMode)}
                className="bg-lamp hover:bg-lamp/90 text-lamp-ink font-bold text-xs sm:text-sm px-4 py-2.5 shadow-amber-500/20 gap-2 cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                Fullscreen View
              </Button>

              <a
                href={pdfUrl}
                download="fine-glaze-company-profile.pdf"
                className="inline-flex items-center gap-2 bg-night-2 hover:bg-line text-paper font-bold text-xs sm:text-sm px-4 py-2.5 border border-line transition-all active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-lamp" />
                Download PDF (7.3 MB)
              </a>

              <Button
                variant="outline"
                onClick={handleShare}
                className="border-line bg-night-2 text-paper hover:bg-night-2 text-xs sm:text-sm px-3.5 py-2.5 gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                {copied ? "Link Copied!" : "Share"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Viewer Container */}
      <section className="bg-night-2 py-8 min-h-[70vh]">
        <div className="fg-wrap">
          {/* Viewer Toolbar */}
          <div className="bg-night border border-line p-2.5 sm:p-4 flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Mobile Prev Thumb Button */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 1}
                className="sm:hidden p-1.5 bg-night-2 text-paper hover:bg-line disabled:opacity-30 disabled:pointer-events-none transition-colors border border-line active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-bold text-lamp bg-lamp/10 border border-lamp/20 px-2 sm:px-2.5 py-1">
                {currentSlide} / {TOTAL_SLIDES}
              </span>

              {/* Mobile Next Thumb Button */}
              <button
                onClick={nextSlide}
                disabled={currentSlide === TOTAL_SLIDES}
                className="sm:hidden p-1.5 bg-night-2 text-paper hover:bg-line disabled:opacity-30 disabled:pointer-events-none transition-colors border border-line active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <span className="hidden sm:inline-block text-xs sm:text-sm text-paper/80 font-medium truncate max-w-[200px] sm:max-w-md ml-1">
                {currentSection.title}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Dropdown Jump */}
              <select
                value={currentSlide}
                onChange={(e) => goToSlide(Number(e.target.value))}
                className="bg-night-2 text-paper text-xs px-2 sm:px-2.5 py-1.5 border border-line focus:outline-none focus:ring-1 focus:ring-lamp cursor-pointer max-w-[130px] xs:max-w-[170px] truncate"
              >
                {PROFILE_SECTIONS.map((sec) => (
                  <option key={sec.slide} value={sec.slide}>
                    {sec.slide}. {sec.title}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="bg-night-2 p-0.5 border border-line hidden sm:flex">
                <button
                  onClick={() => setViewMode("slides")}
                  className={cn(
                    "px-2.5 py-1 text-xs font-semibold  transition-all",
                    viewMode === "slides" ? "bg-lamp text-lamp-ink font-bold" : "text-paper/80"
                  )}
                >
                  Deck View
                </button>
                <button
                  onClick={() => setViewMode("pdf")}
                  className={cn(
                    "px-2.5 py-1 text-xs font-semibold  transition-all",
                    viewMode === "pdf" ? "bg-lamp text-lamp-ink font-bold" : "text-paper/80"
                  )}
                >
                  Native PDF
                </button>
              </div>

              {/* Expand Fullscreen */}
              <button
                onClick={() => openProfile(currentSlide, viewMode)}
                className="p-1.5 bg-night-2 hover:bg-line text-paper/80 border border-line transition-colors"
                title="Fullscreen View"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Viewer Body */}
          <div
            className="bg-night border-x border-b border-line overflow-hidden relative min-h-[220px] sm:min-h-[500px] flex items-center justify-center p-1 sm:p-6"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {viewMode === "slides" ? (
              <div className="relative w-full flex items-center justify-center">
                <img
                  key={currentSlide}
                  src={`/profile-slides/slide-${currentSlide}.webp`}
                  alt={`Fine Glaze Company Profile - Slide ${currentSlide}`}
                  className="w-full max-h-[75vh] object-contain border border-line"
                  loading="eager"
                />

                {/* Left / Right Navigation Overlay Buttons (Desktop / Tablet) */}
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 1}
                  className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-night-2/80 hover:bg-lamp/90 text-lamp-ink hover:text-paper border border-line transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === TOTAL_SLIDES}
                  className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-night-2/80 hover:bg-lamp/90 text-lamp-ink hover:text-paper border border-line transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <div className="w-full h-[75vh]">
                <object
                  data={`${pdfUrl}#page=${currentSlide}&toolbar=1`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <FileText className="w-16 h-16 text-lamp" />
                    <p className="text-paper/80">PDF document is ready for download or interactive preview.</p>
                    <a
                      href={pdfUrl}
                      className="px-6 py-3 bg-lamp text-lamp-ink font-bold"
                      download
                    >
                      Download PDF (7.3 MB)
                    </a>
                  </div>
                </object>
              </div>
            )}
          </div>

          {/* Quick Chapter Strip */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto py-2 scrollbar-thin">
            {PROFILE_SECTIONS.map((sec) => (
              <button
                key={sec.slide}
                onClick={() => goToSlide(sec.slide)}
                className={cn(
                  "flex-none text-left px-3 py-2  border text-xs font-medium transition-all cursor-pointer",
                  currentSlide === sec.slide
                    ? "bg-lamp text-lamp-ink font-bold border-lamp/40 "
                    : "bg-night-2/80 text-paper/80 border-line hover:border-line hover:text-paper"
                )}
              >
                <div className="text-[13px]">{sec.tag}</div>
                <div className="truncate max-w-[140px] font-semibold">{sec.title}</div>
              </button>
            ))}
          </div>

          {/* Key Facts Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="bg-night/80 border border-line p-5">
              <div className="text-2xl font-black text-lamp">40+ Team</div>
              <div className="text-xs text-mute mt-1 font-semibold">Core Engineering</div>
              <p className="text-xs text-paper/80 mt-2">In-house design, structural engineering, and site supervision.</p>
            </div>

            <div className="bg-night/80 border border-line p-5">
              <div className="text-2xl font-black text-lamp">PISOLI, PUNE</div>
              <div className="text-xs text-mute mt-1 font-semibold">Fabrication Unit</div>
              <p className="text-xs text-paper/80 mt-2">Our own unit for cutting, fabrication and assembly, with inspection at source.</p>
            </div>

            <div className="bg-night/80 border border-line p-5">
              <div className="text-2xl font-black text-lamp">Award 2024</div>
              <div className="text-xs text-mute mt-1 font-semibold">Best Vendor</div>
              <p className="text-xs text-paper/80 mt-2">Honored by Embassy REIT for Embassy 247 Vikhroli execution.</p>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-12 bg-night-2 border border-lamp/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-medium text-paper">
                Planning a Commercial or High-Rise Facade Package?
              </h3>
              <p className="text-sm text-paper/80 max-w-xl">
                Get an engineered estimate, design consultation, or technical proposal tailored to your architectural specifications.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-lamp hover:bg-lamp/90 text-lamp-ink font-bold px-6 py-6 shadow-amber-500/20 text-sm cursor-pointer"
              >
                Request Proposal <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <a
                href="tel:+918369233566"
                className="inline-flex items-center gap-2 px-5 py-3 border border-line hover:bg-night-2 text-paper font-semibold text-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-lamp" />
                +91 8369233566
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </Layout>
  );
}
