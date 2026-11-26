import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { trackEvent } from "@/lib/analytics";

const WEB3FORMS_ACCESS_KEY = "74dce7dc-85a9-4479-ab00-bd002f23409a";

export interface Lead {
  name: string;
  phone: string;
  city?: string;
  preferredDay?: string;
  preferredSlot?: string;
  message?: string;
  /** Where the lead came from, saved with the lead. */
  source: string;
  email?: string;
  projectType?: string;
  approxArea?: string;
  preferCallback?: boolean;
  /** Email subject and sender label for the Web3Forms notification. */
  subject?: string;
  fromName?: string;
  /** Extra fields sent only in the notification email. */
  extra?: Record<string, string>;
}

/** Posts the lead to Web3Forms and saves a copy in Supabase. Resolves true when the notification was sent. */
export async function submitLead(lead: Lead): Promise<boolean> {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: lead.subject ?? "Call booking: Fine Glaze website",
        from_name: lead.fromName ?? "Fine Glaze Website",
        name: lead.name,
        phone: lead.phone,
        city: lead.city,
        preferred_day: lead.preferredDay,
        preferred_slot: lead.preferredSlot,
        email: lead.email,
        project_type: lead.projectType,
        approx_area: lead.approxArea,
        message: lead.message || "(No details provided)",
        prefers_callback: lead.preferCallback === undefined ? undefined : lead.preferCallback ? "Yes" : "No",
        source: lead.source,
        ...lead.extra,
      }),
    });
    let data: { success?: boolean } = {};
    try {
      data = await res.json();
    } catch {
      /* body is not JSON; fall back to the status code */
    }
    if (!res.ok || data.success === false) throw new Error("submit failed");

    if (isSupabaseConfigured) {
      try {
        await supabase.from("contact_leads").insert({
          name: lead.name,
          phone: lead.phone,
          city: lead.city ?? null,
          preferred_day: lead.preferredDay ?? null,
          preferred_slot: lead.preferredSlot ?? null,
          message: lead.message || null,
          source: lead.source,
          email: lead.email ?? null,
          project_type: lead.projectType ?? null,
          approx_area: lead.approxArea ?? null,
          prefers_callback: lead.preferCallback ?? null,
        });
      } catch {
        console.warn("Supabase lead save failed (non-blocking)");
      }
    }

    trackEvent("generate_lead", { form: lead.source, city: lead.city, project_type: lead.projectType });
    return true;
  } catch {
    return false;
  }
}
