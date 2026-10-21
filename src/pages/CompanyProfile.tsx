import React, { useState, useEffect } from "react";
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

const TOTAL_SLIDES = 29;

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

  const currentSection = PROFILE_SECTIONS[currentSlide - 1] || {
    title: `Page ${currentSlide}`,
    tag: "Fine Glaze",
  };

  return (
    <Layout>
      <Helmet>
        <title>Fine Glaze Company Profile (2026–27) | Facade Specialists Mumbai & Pune</title>
        <meta
          name="description"
          content="Explore the official Fine Glaze Company Profile. 20,566+ SQM delivered, unitized curtain wall, structural glazing, ACP cladding, leadership team, and landmark projects."
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

      {/* Hero Header */}
      <section className="bg-stone-950 text-white pt-28 pb-10 border-b border-stone-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Official Corporate Presentation &amp; Credentials</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Fine Glaze <span className="text-amber-400">Company Profile</span>
              </h1>
              <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
                Design, fabrication, installation and maintenance of architectural facade systems across Mumbai, Pune &amp; Pan-India.
              </p>
            </div>

            {/* Quick 1-Click Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                onClick={() => openProfile(currentSlide, viewMode)}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 gap-2 cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                Fullscreen Deck
              </Button>

              <a
                href={pdfUrl}
                download="fine-glaze-company-profile.pdf"
                className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-stone-700 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400" />
                Download PDF (35 MB)
              </a>

              <Button
                variant="outline"
                onClick={handleShare}
                className="border-stone-700 bg-stone-900 text-stone-200 hover:bg-stone-800 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                {copied ? "Link Copied!" : "Share"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Viewer Container */}
      <section className="bg-stone-900 py-8 min-h-[70vh]">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Viewer Toolbar */}
          <div className="bg-stone-950 rounded-t-2xl border border-stone-800 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 shadow-xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                Slide {currentSlide} of {TOTAL_SLIDES}
              </span>
              <span className="text-xs sm:text-sm text-stone-300 font-medium truncate max-w-[200px] sm:max-w-md">
                {currentSection.tag}: {currentSection.title}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Dropdown Jump */}
              <select
                value={currentSlide}
                onChange={(e) => goToSlide(Number(e.target.value))}
                className="bg-stone-800 text-stone-200 text-xs rounded-lg px-2.5 py-1.5 border border-stone-700 focus:outline-none focus:ring-1 focus:ring-amber-400 cursor-pointer max-w-[180px] truncate"
              >
                {PROFILE_SECTIONS.map((sec) => (
                  <option key={sec.slide} value={sec.slide}>
                    {sec.slide}. {sec.title}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="bg-stone-800 p-0.5 rounded-lg border border-stone-700 hidden sm:flex">
                <button
                  onClick={() => setViewMode("slides")}
                  className={cn(
                    "px-2.5 py-1 text-xs font-semibold rounded-md transition-all",
                    viewMode === "slides" ? "bg-amber-500 text-stone-950 font-bold" : "text-stone-300"
                  )}
                >
                  Deck View
                </button>
                <button
                  onClick={() => setViewMode("pdf")}
                  className={cn(
                    "px-2.5 py-1 text-xs font-semibold rounded-md transition-all",
                    viewMode === "pdf" ? "bg-amber-500 text-stone-950 font-bold" : "text-stone-300"
                  )}
                >
                  Native PDF
                </button>
              </div>

              {/* Expand Fullscreen */}
              <button
                onClick={() => openProfile(currentSlide, viewMode)}
                className="p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg border border-stone-700 transition-colors"
                title="Open 1-Click Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Viewer Body */}
          <div className="bg-stone-950 border-x border-b border-stone-800 rounded-b-2xl overflow-hidden shadow-2xl relative min-h-[500px] flex items-center justify-center p-2 sm:p-6">
            {viewMode === "slides" ? (
              <div className="relative w-full flex items-center justify-center">
                <img
                  key={currentSlide}
                  src={`/profile-slides/slide-${currentSlide}.webp`}
                  alt={`Fine Glaze Company Profile - Slide ${currentSlide}`}
                  className="w-full max-h-[75vh] object-contain rounded-lg border border-stone-800/80 shadow-2xl"
                />

                {/* Left / Right Navigation Overlay Buttons */}
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 1}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-amber-500 text-white hover:text-stone-950 backdrop-blur-md border border-stone-700/80 transition-all disabled:opacity-20 disabled:pointer-events-none shadow-xl cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === TOTAL_SLIDES}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-amber-500 text-white hover:text-stone-950 backdrop-blur-md border border-stone-700/80 transition-all disabled:opacity-20 disabled:pointer-events-none shadow-xl cursor-pointer"
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
                  className="w-full h-full rounded-lg"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <FileText className="w-16 h-16 text-amber-500" />
                    <p className="text-stone-300">PDF document is ready for download or interactive preview.</p>
                    <a
                      href={pdfUrl}
                      className="px-6 py-3 bg-amber-500 text-stone-950 font-bold rounded-xl"
                      download
                    >
                      Download PDF (35 MB)
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
                  "flex-none text-left px-3 py-2 rounded-xl border text-xs font-medium transition-all cursor-pointer",
                  currentSlide === sec.slide
                    ? "bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-md"
                    : "bg-stone-900/80 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white"
                )}
              >
                <div className="text-[10px] uppercase tracking-wider opacity-75">{sec.tag}</div>
                <div className="truncate max-w-[140px] font-semibold">{sec.title}</div>
              </button>
            ))}
          </div>

          {/* Key Facts Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="bg-stone-950/80 border border-stone-800 p-5 rounded-2xl">
              <div className="text-2xl font-black text-amber-400">20,566+</div>
              <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-semibold">SQM Delivered</div>
              <p className="text-xs text-stone-300 mt-2">Facade installations across Pune and Mumbai commercial hubs.</p>
            </div>

            <div className="bg-stone-950/80 border border-stone-800 p-5 rounded-2xl">
              <div className="text-2xl font-black text-amber-400">40+ Team</div>
              <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-semibold">Core Engineering</div>
              <p className="text-xs text-stone-300 mt-2">In-house design, structural engineering, and site supervision.</p>
            </div>

            <div className="bg-stone-950/80 border border-stone-800 p-5 rounded-2xl">
              <div className="text-2xl font-black text-amber-400">2,500 SQFT</div>
              <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-semibold">Fabrication Unit</div>
              <p className="text-xs text-stone-300 mt-2">State-of-the-art facility at Pisoli, Pune with strict QC.</p>
            </div>

            <div className="bg-stone-950/80 border border-stone-800 p-5 rounded-2xl">
              <div className="text-2xl font-black text-amber-400">Award 2024</div>
              <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-semibold">Best Vendor</div>
              <p className="text-xs text-stone-300 mt-2">Honored by Embassy REIT for Embassy 247 Vikhroli execution.</p>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-12 bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Planning a Commercial or High-Rise Facade Package?
              </h3>
              <p className="text-sm text-stone-300 max-w-xl">
                Get an engineered estimate, design consultation, or technical proposal tailored to your architectural specifications.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-6 rounded-xl shadow-lg shadow-amber-500/20 text-sm cursor-pointer"
              >
                Request Proposal <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <a
                href="tel:+918369233566"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-stone-700 hover:bg-stone-800 text-white font-semibold text-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                +91 8369233566
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </Layout>
  );
}
