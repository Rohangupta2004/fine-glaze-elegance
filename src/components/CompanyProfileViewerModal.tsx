import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  FileText,
  Layers,
  ExternalLink,
  Check,
  Building2,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { useCompanyProfile } from "@/context/CompanyProfileContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const PROFILE_SECTIONS = [
  { title: "Company Profile (Cover)", slide: 1, tag: "Cover" },
  { title: "Table of Contents", slide: 2, tag: "Index" },
  { title: "Company at a Glance", slide: 3, tag: "01 Who We Are" },
  { title: "Service Index (38 Sub-Services)", slide: 4, tag: "03 Services" },
  { title: "Founder & Director (Deepak Gupta)", slide: 5, tag: "12 Leadership" },
  { title: "Management Team", slide: 6, tag: "12 Leadership" },
  { title: "Finance & 40+ Engineering Team", slide: 7, tag: "12 Team" },
  { title: "Our Office & Storefront", slide: 8, tag: "12 Office" },
  { title: "Mission & Vision", slide: 9, tag: "01 Vision" },
  { title: "Our Strategic Goals", slide: 10, tag: "01 Goals" },
  { title: "Fine Glaze in Numbers", slide: 11, tag: "02 Capability" },
  { title: "Design & Fabrication", slide: 12, tag: "03 Services" },
  { title: "Installation & Maintenance", slide: 13, tag: "03 Services" },
  { title: "Facade Service Lines", slide: 14, tag: "03 Services" },
  { title: "From Enquiry to Handover", slide: 15, tag: "04 Delivery" },
  { title: "Design & Engineering", slide: 16, tag: "04 Engineering" },
  { title: "Fabrication Facility (Pisoli, Pune)", slide: 17, tag: "04 Workshop" },
  { title: "Quality Assurance & Testing", slide: 18, tag: "05 QA & QC" },
  { title: "Health, Safety & Environment", slide: 19, tag: "05 Safety" },
  { title: "Our Products (16 Lines)", slide: 20, tag: "06 Products" },
  { title: "Aluminium & Steel Systems", slide: 21, tag: "06 Products" },
  { title: "Railings, Gates & Glazing", slide: 22, tag: "06 Products" },
  { title: "Curtain Walls & Cladding", slide: 23, tag: "06 Products" },
  { title: "Railings, Partitions & Panels", slide: 24, tag: "06 Products" },
  { title: "Organisation Chart", slide: 25, tag: "12 Team" },
  { title: "Material Partners", slide: 26, tag: "07 Partners" },
  { title: "Our Clients", slide: 27, tag: "08 Clients" },
  { title: "Awards & Recognition 2024", slide: 28, tag: "09 Awards" },
  { title: "Delivered Across Mumbai & Pune", slide: 29, tag: "10 Projects" },
  { title: "SSG Honesty Nimkar Building, Panvel", slide: 30, tag: "Project 01" },
  { title: "Salsette-27, Byculla East, Mumbai", slide: 31, tag: "Project 02" },
  { title: "Salsette-27 Ramp Canopy Installation", slide: 32, tag: "Project 02" },
  { title: "Salsette-27 Ramp Canopy Completed", slide: 33, tag: "Project 02" },
  { title: "Salsette-27 Shaft Railings Tower A & B", slide: 34, tag: "Project 02" },
  { title: "Salsette-27 ACP Canopy Ground Floor", slide: 35, tag: "Project 02" },
  { title: "Nirmaann Estrellaa, Pune", slide: 36, tag: "Project 03" },
  { title: "Embassy 247, Vikhroli, Mumbai", slide: 37, tag: "Project 04" },
  { title: "Nanavati Max Hospital, Vile Parle", slide: 38, tag: "Project 05" },
  { title: "Nanavati Max Hospital ACP Cladding", slide: 39, tag: "Project 05" },
  { title: "Embassy Techzone Park, Pune", slide: 40, tag: "Project 06" },
  { title: "Embassy Techzone Spider Glass & ACP", slide: 41, tag: "Project 06" },
  { title: "Pune International Airport Terminal", slide: 42, tag: "Project 07" },
  { title: "Pune Airport SS Column Cladding", slide: 43, tag: "Project 07" },
  { title: "LTIMindtree Mensa Campus, Mahape", slide: 44, tag: "Project 08" },
  { title: "Jindal House, Balkeshwar 32, Mumbai", slide: 45, tag: "Project 09" },
  { title: "Jindal House SS Glass Railing Work", slide: 46, tag: "Project 09" },
  { title: "Leela Business Park, Andheri East", slide: 47, tag: "Project 10" },
  { title: "Naman Chambers, BKC, Mumbai", slide: 48, tag: "Project 11" },
  { title: "Mittal House, Juhu, Mumbai", slide: 49, tag: "Project 12" },
  { title: "Leela Hotel Laundry, Andheri East", slide: 50, tag: "Project 13" },
  { title: "Terrace Enclosure Samundra Tarang", slide: 51, tag: "Project 14" },
  { title: "FIFC Tower, BKC, Mumbai", slide: 52, tag: "Project 15" },
  { title: "Facade Maintenance & AMC Contract", slide: 53, tag: "11 AMC" },
  { title: "Where We Operate & Expansion", slide: 54, tag: "13 Footprint" },
  { title: "Compliance & Credentials", slide: 55, tag: "13 Compliance" },
  { title: "Connect with Us", slide: 56, tag: "14 Contact" },
  { title: "Thank You", slide: 57, tag: "Conclusion" },
];

export const CompanyProfileViewerModal: React.FC = () => {
  const {
    isOpen,
    currentSlide,
    totalSlides,
    viewMode,
    closeProfile,
    nextSlide,
    prevSlide,
    goToSlide,
    toggleViewMode,
    setViewMode,
  } = useCompanyProfile();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  // PDF Document URL
  const pdfUrl = "/docs/fine-glaze-company-profile.pdf";

  // Handle Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          document.exitFullscreen().catch(() => {});
        } else {
          closeProfile();
        }
      } else if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isFullscreen, nextSlide, prevSlide, closeProfile]);

  // Autoplay Slideshow
  useEffect(() => {
    if (!isPlaying || !isOpen || viewMode !== "slides") return;

    const interval = setInterval(() => {
      if (currentSlide < totalSlides) {
        nextSlide();
      } else {
        setIsPlaying(false);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, isOpen, currentSlide, totalSlides, nextSlide, viewMode]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  // Copy shareable link
  const handleShare = () => {
    const url = `${window.location.origin}/company-profile?slide=${currentSlide}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!isOpen) return null;

  const currentSection = PROFILE_SECTIONS[currentSlide - 1] || {
    title: `Page ${currentSlide}`,
    tag: "Fine Glaze",
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col bg-stone-950/98 backdrop-blur-2xl text-white select-none animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <header className="flex-none h-16 border-b border-stone-800/80 bg-stone-900/90 px-3 sm:px-6 flex items-center justify-between gap-2 z-20">
        {/* Brand & Current Slide Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <img src="/Logofg.webp" alt="Fine Glaze" className="h-7 sm:h-8 w-auto brightness-0 invert" />
            <span className="hidden md:inline-block text-xs uppercase tracking-widest text-amber-400 font-bold border-l border-stone-700 pl-3">
              Official Company Profile
            </span>
          </div>

          <div className="hidden sm:block h-5 w-px bg-stone-800" />

          {/* Jump dropdown */}
          <div className="relative min-w-0">
            <select
              value={currentSlide}
              onChange={(e) => goToSlide(Number(e.target.value))}
              className="bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 text-xs sm:text-sm rounded-lg px-2 sm:px-3 py-1.5 border border-stone-700 focus:outline-none focus:ring-1 focus:ring-amber-400 max-w-[200px] sm:max-w-xs truncate cursor-pointer font-medium"
            >
              {PROFILE_SECTIONS.map((sec) => (
                <option key={sec.slide} value={sec.slide}>
                  {sec.slide}. {sec.title} ({sec.tag})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Mode Switcher */}
          <div className="bg-stone-800/80 p-0.5 rounded-lg border border-stone-700 hidden xs:flex">
            <button
              onClick={() => setViewMode("slides")}
              className={cn(
                "px-2.5 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5",
                viewMode === "slides"
                  ? "bg-amber-500 text-stone-950 shadow"
                  : "text-stone-300 hover:text-white"
              )}
              title="Interactive High-Speed Deck"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Deck</span>
            </button>
            <button
              onClick={() => setViewMode("pdf")}
              className={cn(
                "px-2.5 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5",
                viewMode === "pdf"
                  ? "bg-amber-500 text-stone-950 shadow"
                  : "text-stone-300 hover:text-white"
              )}
              title="Embedded Native PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Native PDF</span>
            </button>
          </div>

          {/* Autoplay (Slides mode only) */}
          {viewMode === "slides" && (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={cn(
                "p-2 rounded-lg border border-stone-700/80 text-stone-300 hover:text-white transition-colors",
                isPlaying ? "bg-amber-500/20 text-amber-400 border-amber-500/40" : "bg-stone-800/80 hover:bg-stone-700/80"
              )}
              title={isPlaying ? "Pause Presentation" : "Play Slideshow"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          )}

          {/* Thumbnails toggle */}
          {viewMode === "slides" && (
            <button
              onClick={() => setShowThumbnails(!showThumbnails)}
              className={cn(
                "p-2 rounded-lg border border-stone-700/80 text-stone-300 hover:text-white transition-colors hidden sm:block",
                showThumbnails ? "bg-amber-500/20 text-amber-400 border-amber-500/40" : "bg-stone-800/80 hover:bg-stone-700/80"
              )}
              title="Toggle Thumbnails Strip"
            >
              <Layers className="w-4 h-4" />
            </button>
          )}

          {/* Download PDF button */}
          <a
            href={pdfUrl}
            download="fine-glaze-company-profile.pdf"
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-3 py-1.5 rounded-lg text-xs transition-all shadow-md active:scale-95 cursor-pointer"
            title="Download Full Profile PDF (7.3 MB)"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">PDF (7.3 MB)</span>
            <span className="md:hidden">PDF</span>
          </a>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-2 bg-stone-800/80 hover:bg-stone-700/80 rounded-lg border border-stone-700/80 text-stone-300 hover:text-white transition-colors"
            title="Copy Share Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-stone-800/80 hover:bg-stone-700/80 rounded-lg border border-stone-700/80 text-stone-300 hover:text-white transition-colors hidden md:block"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close */}
          <button
            onClick={closeProfile}
            className="p-2 bg-stone-800/80 hover:bg-red-600/80 text-stone-300 hover:text-white rounded-lg border border-stone-700/80 transition-all cursor-pointer ml-1"
            title="Close Viewer (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Viewing Canvas */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center p-2 sm:p-4 bg-stone-950">
        {viewMode === "slides" ? (
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center">
            {/* Slide Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                key={currentSlide}
                src={`/profile-slides/slide-${currentSlide}.webp`}
                alt={`Fine Glaze Company Profile - Slide ${currentSlide}: ${currentSection.title}`}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-black border border-stone-800/60 transition-opacity duration-200"
              />

              {/* Prev Button Overlay */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 1}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-stone-900/80 hover:bg-amber-500 text-white hover:text-stone-950 backdrop-blur-md border border-stone-700/80 transition-all disabled:opacity-20 disabled:pointer-events-none shadow-xl active:scale-95 cursor-pointer z-10"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Button Overlay */}
              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-stone-900/80 hover:bg-amber-500 text-white hover:text-stone-950 backdrop-blur-md border border-stone-700/80 transition-all disabled:opacity-20 disabled:pointer-events-none shadow-xl active:scale-95 cursor-pointer z-10"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        ) : (
          /* Native PDF Iframe / Object Mode */
          <div className="w-full h-full max-w-6xl rounded-xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900">
            <object
              data={`${pdfUrl}#page=${currentSlide}&toolbar=1&navpanes=1`}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
                <FileText className="w-16 h-16 text-amber-500" />
                <h3 className="text-xl font-bold">PDF Ready to Open</h3>
                <p className="text-stone-400 text-sm max-w-md">
                  Your browser does not support embedded PDF rendering directly. You can view via our interactive deck or open/download the file below.
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => setViewMode("slides")}
                    className="bg-amber-500 text-stone-950 hover:bg-amber-400 font-bold"
                  >
                    Switch to Interactive Deck
                  </Button>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-sm font-semibold text-white border border-stone-700"
                  >
                    Open in New Tab <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </object>
          </div>
        )}
      </main>

      {/* Bottom Thumbnail Strip (Collapsible / Toggleable) */}
      {showThumbnails && viewMode === "slides" && (
        <div className="flex-none h-24 border-t border-stone-800 bg-stone-900/90 px-4 py-2 overflow-x-auto flex items-center gap-2.5 z-20 scrollbar-thin">
          {PROFILE_SECTIONS.map((sec) => (
            <button
              key={sec.slide}
              onClick={() => goToSlide(sec.slide)}
              className={cn(
                "relative flex-none h-18 aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer group",
                currentSlide === sec.slide
                  ? "border-amber-400 ring-2 ring-amber-400/50 scale-105"
                  : "border-stone-700 opacity-60 hover:opacity-100"
              )}
            >
              <img
                src={`/profile-slides/thumb-${sec.slide}.webp`}
                alt={sec.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-0 inset-x-0 bg-stone-950/80 text-[10px] text-stone-300 px-1 py-0.5 truncate text-center font-bold">
                {sec.slide}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Bottom Navigation & Status Bar */}
      <footer className="flex-none h-14 border-t border-stone-800/80 bg-stone-900/90 px-3 sm:px-6 flex items-center justify-between text-xs text-stone-400 z-20">
        <div className="flex items-center gap-3">
          <span className="font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
            Slide {currentSlide} of {totalSlides}
          </span>
          <span className="hidden sm:inline-block text-stone-300 font-medium truncate max-w-sm">
            {currentSection.tag}: {currentSection.title}
          </span>
        </div>

        {/* Quick Contacts & Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918369233566"
            className="hidden md:inline-flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
            <span>+91 8369233566</span>
          </a>

          <a
            href="mailto:info@fineglaze.com?subject=Enquiry%20regarding%20Fine%20Glaze%20Company%20Profile"
            className="hidden sm:inline-flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
          >
            <span>info@fineglaze.com</span>
          </a>

          <span className="text-[11px] text-stone-500 hidden lg:inline">
            Use ← → arrows to navigate
          </span>
        </div>
      </footer>
    </div>
  );
};
