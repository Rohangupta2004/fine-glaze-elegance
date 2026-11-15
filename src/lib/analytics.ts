/**
 * Conversion tracking for GA4 (gtag is loaded in index.html).
 *
 * Calls, WhatsApp taps, emails and profile downloads are the leads a facade
 * contractor actually gets, so they are tracked as GA4 events. Mark
 * `contact_call`, `contact_whatsapp` and `generate_lead` as key events in GA4.
 */
type GtagParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void; clarity?: (...args: unknown[]) => void };
  try {
    w.gtag?.("event", name, { page_path: window.location.pathname, ...params });
    w.clarity?.("event", name);
  } catch {
    /* analytics must never break the page */
  }
}

/** One delegated listener for every tel:, WhatsApp, mailto: and document link on the site. */
export function installContactClickTracking() {
  if (typeof document === "undefined") return;
  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const label = (link.textContent ?? "").trim().slice(0, 80);
      if (href.startsWith("tel:")) trackEvent("contact_call", { link_url: href, link_text: label });
      else if (/wa\.me|api\.whatsapp\.com/.test(href)) trackEvent("contact_whatsapp", { link_text: label });
      else if (href.startsWith("mailto:")) trackEvent("contact_email", { link_url: href });
      else if (/\.(pdf|vcf)(\?|$)/i.test(href)) trackEvent("file_download", { file_name: href.split("/").pop() });
    },
    { capture: true, passive: true },
  );
}
