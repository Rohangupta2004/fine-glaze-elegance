import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Check, CloudUpload, DollarSign, MapPin } from "lucide-react";
import { toast } from "sonner";

const projectTypes = ["New Construction", "Retrofit", "Consultation"] as const;

type ProjectType = (typeof projectTypes)[number];

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
      toast.error("Please enter project location");
      return;
    }

    if (!formData.structuralRequirements.trim()) {
      toast.error("Please add structural requirements");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "74dce7dc-85a9-4479-ab00-bd002f23409a",
          subject: "RFP Intake – Fine Glaze Website",
          from_name: "Fine Glaze Website",
          project_type: formData.projectType,
          project_location: formData.projectLocation,
          estimated_budget: formData.estimatedBudget,
          structural_requirements: formData.structuralRequirements,
          attachment_name: formData.file?.name || "No file uploaded",
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error("Submission failed");
      }

      toast.success("Details submitted successfully");
      setFormData({
        projectType: "New Construction",
        projectLocation: "",
        estimatedBudget: "",
        structuralRequirements: "",
        file: null,
      });
    } catch {
      toast.error("Unable to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F4F8] text-[#0F1830]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-5 w-5 grid-cols-2 gap-0.5">
              <span className="bg-primary" />
              <span className="bg-primary/85" />
              <span className="bg-primary/85" />
              <span className="bg-primary" />
            </span>
            <span className="text-[34px] font-bold leading-none tracking-tight">FINE GLAZE</span>
          </Link>

          <nav className="hidden items-center gap-10 text-[28px] font-medium text-slate-600 lg:flex">
            <Link to="/portfolio" className="hover:text-slate-900">Projects</Link>
            <Link to="/services" className="hover:text-slate-900">Services</Link>
            <Link to="/portal" className="hover:text-slate-900">Client Portal</Link>
            <Button className="h-11 rounded-sm px-8 text-[16px]">Initiate Tender</Button>
          </nav>
        </div>
      </header>

      <main className="px-4 pb-16 pt-14 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[18px] font-semibold uppercase tracking-[0.18em] text-primary">
            Enterprise Tender Portal
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#121C3B] md:text-7xl">Request for Proposal</h1>
          <p className="mx-auto mt-5 max-w-4xl text-[30px] text-slate-500">
            Submit project specifications for preliminary structural assessment and pricing.
          </p>
        </div>

        <section className="mx-auto mt-12 max-w-[860px] rounded border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(15,24,48,0.04)] md:p-11">
          <div className="mb-8 grid grid-cols-3 text-center">
            <div>
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <Check size={16} />
              </div>
              <p className="mt-3 text-[30px] font-bold uppercase tracking-wide">Contact</p>
            </div>
            <div>
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">2</div>
              <p className="mt-3 text-[30px] font-bold uppercase tracking-wide">Details</p>
            </div>
            <div className="opacity-50">
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-sm font-semibold text-slate-500">3</div>
              <p className="mt-3 text-[30px] font-medium uppercase tracking-wide text-slate-500">Timeline</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <Label className="text-[33px] font-semibold uppercase tracking-wide">Project Type</Label>
              <div className="grid grid-cols-1 overflow-hidden border border-slate-300 md:grid-cols-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                    className={cn(
                      "h-14 border-r border-slate-300 text-[30px] transition-colors last:border-r-0",
                      formData.projectType === type ? "bg-primary text-white" : "bg-white text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="projectLocation" className="text-[33px] font-semibold uppercase tracking-wide">Project Location</Label>
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <Input
                  id="projectLocation"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData((prev) => ({ ...prev, projectLocation: e.target.value }))}
                  className="h-14 border-slate-300 pl-11 text-[28px]"
                  placeholder="e.g. 30 Hudson Yards, New York"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="estimatedBudget" className="text-[33px] font-semibold uppercase tracking-wide">Estimated Glazing Budget</Label>
              <div className="relative">
                <DollarSign className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <Input
                  id="estimatedBudget"
                  value={formData.estimatedBudget}
                  onChange={(e) => setFormData((prev) => ({ ...prev, estimatedBudget: e.target.value }))}
                  className="h-14 border-slate-300 pl-11 pr-16 text-[28px]"
                  placeholder="e.g. 5,000,000"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-base font-semibold uppercase text-slate-500">USD</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="structuralRequirements" className="text-[33px] font-semibold uppercase tracking-wide">Structural Requirements</Label>
              <Textarea
                id="structuralRequirements"
                value={formData.structuralRequirements}
                onChange={(e) => setFormData((prev) => ({ ...prev, structuralRequirements: e.target.value }))}
                rows={5}
                className="border-slate-300 text-[25px]"
                placeholder="Briefly describe key structural challenges (e.g. wind load, seismic requirements, thermal performance targets)..."
                required
              />
            </div>

            <div className="space-y-3">
              <Label className="text-[33px] font-semibold uppercase tracking-wide">Architectural Schematics</Label>
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.dwg,.dxf"
                onChange={(e) => setFormData((prev) => ({ ...prev, file: e.target.files?.[0] ?? null }))}
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex min-h-[185px] w-full flex-col items-center justify-center border border-dashed border-slate-300 px-6 text-center text-slate-500 hover:bg-slate-50"
              >
                <CloudUpload className="text-slate-300" size={40} />
                <p className="mt-4 text-[26px]">
                  <span className="font-semibold text-primary">Upload a file</span> or drag and drop
                </p>
                <p className="text-lg text-slate-400">PDF, DWG, or DXF up to 50MB</p>
                {formData.file && <p className="mt-2 text-base font-medium text-slate-700">Selected: {formData.file.name}</p>}
              </button>
            </div>

            <Button type="submit" disabled={isSubmitting} className="h-14 w-full rounded-sm text-[24px] font-semibold uppercase tracking-[0.15em]">
              {isSubmitting ? "Submitting..." : "Next: Timeline"}
            </Button>

            <p className="text-center text-base text-slate-400">
              By continuing, you agree to our strict <span className="underline">NDA policy</span> regarding project data.
            </p>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#F2F4F8] py-7">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-4 px-6 text-slate-500 md:flex-row">
          <p className="text-[24px]">© 2024 Fine Glaze International. All rights reserved.</p>
          <div className="flex gap-8 text-[24px]">
            <a href="#" className="hover:text-slate-800">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800">Terms of Service</a>
            <a href="#" className="hover:text-slate-800">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
