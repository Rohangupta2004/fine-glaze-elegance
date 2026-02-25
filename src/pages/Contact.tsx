import { useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Check, Circle, CloudUpload, DollarSign, MapPin } from "lucide-react";
import { toast } from "sonner";

const PROJECT_TYPES = ["New Construction", "Retrofit", "Consultation"] as const;

type ProjectType = (typeof PROJECT_TYPES)[number];

const Contact = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    projectType: "New Construction" as ProjectType,
    projectLocation: "",
    estimatedBudget: "",
    structuralRequirements: "",
    file: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.projectLocation.trim()) {
      toast.error("Please enter a project location");
      return;
    }

    if (!formData.structuralRequirements.trim()) {
      toast.error("Please describe your structural requirements");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        access_key: "74dce7dc-85a9-4479-ab00-bd002f23409a",
        subject: "RFP Intake – Fine Glaze Website",
        from_name: "Fine Glaze Website",
        project_type: formData.projectType,
        project_location: formData.projectLocation,
        estimated_budget: formData.estimatedBudget,
        structural_requirements: formData.structuralRequirements,
        attachment_name: formData.file?.name || "No file uploaded",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error("Submission failed");
      }

      toast.success("Contact step submitted. We will reach out shortly.");
      setFormData({
        projectType: "New Construction",
        projectLocation: "",
        estimatedBudget: "",
        structuralRequirements: "",
        file: null,
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="bg-slate-100 pt-28 pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Enterprise Tender Portal
            </p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-6xl">
              Request for Proposal
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
              Submit project specifications for preliminary structural assessment and pricing.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-md border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <div className="mb-8 grid grid-cols-3 gap-3 text-center">
              <div className="space-y-2">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  <Check size={16} />
                </div>
                <p className="text-sm font-bold uppercase tracking-wide text-slate-900">Contact</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold">
                  2
                </div>
                <p className="text-sm font-bold uppercase tracking-wide text-slate-900">Details</p>
              </div>
              <div className="space-y-2 opacity-55">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-500">
                  <Circle size={14} />
                </div>
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Timeline</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label className="text-base font-semibold uppercase tracking-wide text-slate-900">Project Type</Label>
                <div className="grid grid-cols-1 overflow-hidden rounded-sm border border-slate-300 md:grid-cols-3">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                      className={cn(
                        "h-12 border-r border-slate-300 text-base transition-colors last:border-r-0",
                        formData.projectType === type
                          ? "bg-primary text-white"
                          : "bg-white text-slate-600 hover:bg-slate-100"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectLocation" className="text-base font-semibold uppercase tracking-wide text-slate-900">
                  Project Location
                </Label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <Input
                    id="projectLocation"
                    placeholder="e.g. 30 Hudson Yards, New York"
                    className="h-12 border-slate-300 pl-10"
                    value={formData.projectLocation}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        projectLocation: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="estimatedBudget" className="text-base font-semibold uppercase tracking-wide text-slate-900">
                  Estimated Glazing Budget
                </Label>
                <div className="relative">
                  <DollarSign className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <Input
                    id="estimatedBudget"
                    placeholder="e.g. 5,000,000"
                    className="h-12 border-slate-300 pl-10 pr-16"
                    value={formData.estimatedBudget}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        estimatedBudget: e.target.value,
                      }))
                    }
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold uppercase text-slate-500">
                    USD
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="structuralRequirements"
                  className="text-base font-semibold uppercase tracking-wide text-slate-900"
                >
                  Structural Requirements
                </Label>
                <Textarea
                  id="structuralRequirements"
                  rows={5}
                  placeholder="Briefly describe key structural challenges (e.g. wind load, seismic requirements, thermal performance targets)..."
                  className="border-slate-300"
                  value={formData.structuralRequirements}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      structuralRequirements: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base font-semibold uppercase tracking-wide text-slate-900">Architectural Schematics</Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.dwg,.dxf"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      file: e.target.files?.[0] ?? null,
                    }))
                  }
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex min-h-[170px] w-full flex-col items-center justify-center rounded-sm border border-dashed border-slate-300 bg-slate-50 px-6 text-center hover:bg-slate-100"
                >
                  <CloudUpload className="text-slate-300" size={36} />
                  <p className="mt-4 text-base text-slate-500">
                    <span className="font-semibold text-primary">Upload a file</span> or drag and drop
                  </p>
                  <p className="text-sm text-slate-400">PDF, DWG, or DXF up to 50MB</p>
                  {formData.file && (
                    <p className="mt-2 text-sm font-medium text-slate-700">Selected: {formData.file.name}</p>
                  )}
                </button>
              </div>

              <Button type="submit" disabled={isSubmitting} className="h-12 w-full rounded-sm text-sm uppercase tracking-[0.16em]">
                {isSubmitting ? "Submitting..." : "Next: Timeline"}
              </Button>

              <p className="text-center text-sm text-slate-400">
                By continuing, you agree to our strict <span className="underline">NDA policy</span> regarding project data.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
