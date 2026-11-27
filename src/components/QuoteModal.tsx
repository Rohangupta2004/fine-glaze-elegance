import { useEffect } from "react";
import { useBookCall } from "@/components/booking/BookCallProvider";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Passed to the booking sheet as the work to discuss. */
  defaultProjectType?: string;
  /** Kept for existing callers; the booking sheet does not use it. */
  defaultArea?: string;
  /** Kept for existing callers; the booking sheet does not use it. */
  defaultMessage?: string;
  /** Where the lead came from, saved with the lead. */
  source?: string;
}

/**
 * Compatibility wrapper: opening it opens the booking sheet instead.
 * Existing callers keep their `open` / `onOpenChange` state unchanged.
 */
export function QuoteModal({ open, onOpenChange, defaultProjectType, source = "quote_modal" }: QuoteModalProps) {
  const book = useBookCall();

  useEffect(() => {
    if (!open) return;
    book.open({ work: defaultProjectType, source });
    onOpenChange(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return null;
}
