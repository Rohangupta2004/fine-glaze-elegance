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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle2, Star } from "lucide-react";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const projectTypes = [
  "Structural Glazing",
  "Curtain Wall Systems",
  "Aluminium Doors & Windows",
  "ACP Cladding",
  "Glass Railings",
  "Facade Maintenance",
  "Skylights & Canopies",
  "Aluminium Louvers",
  "Glass Partitions",
  "Other",
];

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
    projectType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.projectType) {
      toast.error("Please select a project type");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "74dce7dc-85a9-4479-ab00-bd002f23409a",
          name: formData.name,
          phone: formData.phone,
          project_type: formData.projectType,
          subject: "Quick Quote – Fine Glaze Website (Header)",
          from_name: "Fine Glaze Website",
        }),
      });

      const data = await res.json();

      if (isSupabaseConfigured) {
        try {
          await supabase.from("contact_leads").insert({
            name: formData.name,
            phone: formData.phone,
            project_type: formData.projectType,
            source: "website_header_quote",
          });
        } catch {
          console.warn("Supabase lead save failed (non-blocking)");
        }
      }

      if (data.success) {
        setIsSubmitted(true);
        toast.success("We'll call you back within 30 minutes!");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      // Reset form when closing
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", projectType: "" });
      }, 200);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden">
        {!isSubmitted ? (
          <>
            {/* Header strip */}
            <div className="bg-stone-900 px-6 pt-6 pb-4">
              <DialogHeader>
                <DialogTitle className="text-white text-lg font-bold">
                  Get a Free Quote
                </DialogTitle>
                <DialogDescription className="text-stone-400 text-sm">
                  Tell us what you need — we'll call back within 30 minutes.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <span className="text-stone-400 text-xs">
                  5.0 Google · Embassy REIT Vendor
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 pt-2 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quote-name" className="text-sm font-medium">
                  Your Name
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
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quote-phone" className="text-sm font-medium">
                  Phone / WhatsApp
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
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Project Type</Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(v) =>
                    setFormData((prev) => ({ ...prev, projectType: v }))
                  }
                >
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Select service..." />
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

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white h-11 font-semibold gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Get Free Quote <Send size={15} />
                  </>
                )}
              </Button>

              <p className="text-center text-stone-400 text-[11px]">
                Or WhatsApp us directly at{" "}
                <a
                  href="https://wa.me/918369233566?text=Hi%20Fine%20Glaze%2C%20I%20need%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 font-medium hover:underline"
                >
                  +91 83692 33566
                </a>
              </p>
            </form>
          </>
        ) : (
          /* ── Success state ── */
          <div className="px-6 py-12 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
              <CheckCircle2 size={28} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              We've got your details!
            </h3>
            <p className="text-stone-500 text-sm mb-6">
              Our team will call you back within 30 minutes during business
              hours (Mon–Sat, 9 AM – 7 PM).
            </p>
            <Button
              onClick={() => handleClose(false)}
              variant="outline"
              className="px-8"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
