import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle2, Award } from "lucide-react";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const projectTypes = [
  "Curtain Wall Systems",
  "Structural Glazing",
  "Aluminium Doors & Windows",
  "ACP Cladding",
  "Glass Railings",
  "Skylights & Canopies",
  "Aluminium Louvers",
  "Glass Partitions",
  "Facade Maintenance & AMC",
  "Other",
];

const cities = ["Pune", "Mumbai", "Thane", "Navi Mumbai", "Other"];

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Pune",
    projectType: "Curtain Wall Systems",
    approxArea: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selectedProjectType = formData.projectType || "Curtain Wall Systems";
    setIsSubmitting(true);

    const waMsg = encodeURIComponent(
      `Hello Fine Glaze,\n\nI would like a quote for:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- City: ${formData.city}\n- Project Type: ${selectedProjectType}\n- Area: ${formData.approxArea || "Not specified"}\n- Notes: ${formData.message || "None"}`
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "74dce7dc-85a9-4479-ab00-bd002f23409a",
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          project_type: selectedProjectType,
          approx_area: formData.approxArea,
          message: formData.message,
          subject: "Project Quote Request — Fine Glaze Website",
          from_name: "Fine Glaze Quote Form",
        }),
      });

      const data = await res.json();

      if (isSupabaseConfigured) {
        try {
          await supabase.from("contact_leads").insert({
            name: formData.name,
            phone: formData.phone,
            city: formData.city,
            project_type: selectedProjectType,
            approx_area: formData.approxArea,
            message: formData.message,
            source: "quote_modal",
          });
        } catch {
          console.warn("Supabase lead save failed (non-blocking)");
        }
      }

      setIsSubmitted(true);
      toast.success("Quote request submitted! We will contact you within 2 business hours.");
    } catch {
      // Fallback: Redirect to WhatsApp directly so quote is never lost
      window.open(`https://wa.me/918369233566?text=${waMsg}`, "_blank");
      setIsSubmitted(true);
      toast.success("Opening WhatsApp to complete your quote request...");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          city: "Pune",
          projectType: "",
          approxArea: "",
          message: "",
        });
      }, 200);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden rounded-2xl">
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="bg-stone-900 px-6 pt-6 pb-4 border-b border-stone-800">
              <DialogHeader>
                <DialogTitle className="text-white text-xl font-bold">
                  Request a Project Quote
                </DialogTitle>
                <DialogDescription className="text-stone-300 text-xs mt-1">
                  Provide your building details — our facade engineering team will review your specifications and contact you within 2 business hours.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2 mt-3 text-amber-400 text-xs font-semibold">
                <Award size={14} />
                <span>Embassy REIT Best Performance Vendor 2024</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 pt-4 space-y-3.5 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="quote-name" className="text-xs font-bold text-stone-700">
                    Your Name *
                  </Label>
                  <Input
                    id="quote-name"
                    name="name"
                    placeholder="Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    className="h-9 text-sm focus-visible:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="quote-phone" className="text-xs font-bold text-stone-700">
                    Phone / WhatsApp *
                  </Label>
                  <Input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    required
                    className="h-9 text-sm focus-visible:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs font-bold text-stone-700">City *</Label>
                  <Select
                    value={formData.city}
                    onValueChange={(v) =>
                      setFormData((prev) => ({ ...prev, city: v }))
                    }
                  >
                    <SelectTrigger className="h-9 text-sm focus-visible:ring-amber-500">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-bold text-stone-700">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(v) =>
                      setFormData((prev) => ({ ...prev, projectType: v }))
                    }
                  >
                    <SelectTrigger className="h-9 text-sm focus-visible:ring-amber-500">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="quote-area" className="text-xs font-bold text-stone-700">
                  Approximate Area (sq ft)
                </Label>
                <Input
                  id="quote-area"
                  name="approxArea"
                  placeholder="e.g. 5,000 sq ft or 12 floors"
                  value={formData.approxArea}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, approxArea: e.target.value }))
                  }
                  className="h-9 text-sm focus-visible:ring-amber-500"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="quote-message" className="text-xs font-bold text-stone-700">
                  Message / Specifications
                </Label>
                <Textarea
                  id="quote-message"
                  name="message"
                  placeholder="Briefly describe your requirements or drawings link..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  rows={2}
                  className="text-sm resize-none focus-visible:ring-amber-500"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-white h-12 rounded-xl font-bold text-sm tracking-wider uppercase gap-2 shadow-lg shadow-amber-900/20 border border-amber-400/40 transition-all duration-200 active:scale-[0.99] cursor-pointer"
              >
                {isSubmitting ? (
                  "Submitting Specifications..."
                ) : (
                  <>
                    Submit Quote Request <Send size={15} />
                  </>
                )}
              </Button>

              <p className="text-center text-stone-500 text-[11px] pt-1">
                Direct helpline / WhatsApp:{" "}
                <a
                  href="https://wa.me/918369233566?text=Hi%20Fine%20Glaze%2C%20I%20need%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-bold hover:underline"
                >
                  +91 83692 33566
                </a>
              </p>
            </form>
          </>
        ) : (
          /* ── Confirmation state ── */
          <div className="px-6 py-10 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full">
              <CheckCircle2 size={36} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-900">
              Thank you, {formData.name || "Customer"}!
            </h3>
            <p className="text-stone-600 text-sm max-w-sm mx-auto leading-relaxed">
              Your quote request for <strong>{formData.projectType}</strong> ({formData.city}) has been received. Our senior facade engineering team will review your specifications and contact you within <strong>2 business hours</strong>.
            </p>
            <Button
              onClick={() => handleClose(false)}
              variant="outline"
              className="px-8 font-bold border-stone-300"
            >
              Close Window
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
