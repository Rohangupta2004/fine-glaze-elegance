import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { BookCallDialog } from "./BookCallDialog";

export interface BookCallOptions {
  /** Pre-fills the "What is the work?" field. */
  work?: string;
  /** Where the lead came from, saved with the lead. */
  source?: string;
}

interface BookCallContextValue {
  open: (opts?: BookCallOptions) => void;
}

const BookCallContext = createContext<BookCallContextValue>({ open: () => {} });

export function useBookCall(): { open: (opts?: BookCallOptions) => void } {
  return useContext(BookCallContext);
}

export function BookCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [opts, setOpts] = useState<BookCallOptions>({});
  const [session, setSession] = useState(0);
  const openerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((o?: BookCallOptions) => {
    const active = typeof document !== "undefined" ? document.activeElement : null;
    openerRef.current = active instanceof HTMLElement && active !== document.body ? active : null;
    setOpts(o ?? {});
    setSession((n) => n + 1);
    setMounted(true);
    setIsOpen(true);
    trackEvent("book_call_open", { source: o?.source ?? "book_call" });
  }, []);

  const handleClosed = useCallback(() => {
    setIsOpen(false);
    const el = openerRef.current;
    openerRef.current = null;
    if (el && el.isConnected) el.focus();
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <BookCallContext.Provider value={value}>
      {children}
      {mounted && <BookCallDialog open={isOpen} session={session} work={opts.work} source={opts.source ?? "book_call"} onClosed={handleClosed} />}
    </BookCallContext.Provider>
  );
}
