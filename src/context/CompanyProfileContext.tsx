import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type ProfileViewMode = "slides" | "pdf";

interface CompanyProfileContextType {
  isOpen: boolean;
  currentSlide: number;
  totalSlides: number;
  viewMode: ProfileViewMode;
  openProfile: (slideIndex?: number, mode?: ProfileViewMode) => void;
  closeProfile: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (slideNumber: number) => void;
  setViewMode: (mode: ProfileViewMode) => void;
  toggleViewMode: () => void;
}

const TOTAL_SLIDES = 29;

const CompanyProfileContext = createContext<CompanyProfileContextType | undefined>(undefined);

export const CompanyProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [viewMode, setViewMode] = useState<ProfileViewMode>("slides");

  const openProfile = useCallback((slideIndex = 1, mode: ProfileViewMode = "slides") => {
    setCurrentSlide(Math.max(1, Math.min(TOTAL_SLIDES, slideIndex)));
    setViewMode(mode);
    setIsOpen(true);
  }, []);

  const closeProfile = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const goToSlide = useCallback((slideNumber: number) => {
    setCurrentSlide(Math.max(1, Math.min(TOTAL_SLIDES, slideNumber)));
  }, []);

  const toggleViewMode = useCallback(() => {
    setViewMode((prev) => (prev === "slides" ? "pdf" : "slides"));
  }, []);

  // Listen for global custom event for 1-click triggers
  useEffect(() => {
    const handleGlobalTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<{ slide?: number; mode?: ProfileViewMode }>;
      const slide = customEvent.detail?.slide || 1;
      const mode = customEvent.detail?.mode || "slides";
      openProfile(slide, mode);
    };

    window.addEventListener("fineglaze:open-profile", handleGlobalTrigger);
    return () => {
      window.removeEventListener("fineglaze:open-profile", handleGlobalTrigger);
    };
  }, [openProfile]);

  return (
    <CompanyProfileContext.Provider
      value={{
        isOpen,
        currentSlide,
        totalSlides: TOTAL_SLIDES,
        viewMode,
        openProfile,
        closeProfile,
        nextSlide,
        prevSlide,
        goToSlide,
        setViewMode,
        toggleViewMode,
      }}
    >
      {children}
    </CompanyProfileContext.Provider>
  );
};

export const useCompanyProfile = () => {
  const context = useContext(CompanyProfileContext);
  if (!context) {
    throw new Error("useCompanyProfile must be used within a CompanyProfileProvider");
  }
  return context;
};

// Global helper for 1-click open without needing direct hook access
export const triggerCompanyProfile = (slideIndex = 1, mode: ProfileViewMode = "slides") => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("fineglaze:open-profile", {
        detail: { slide: slideIndex, mode },
      })
    );
  }
};
