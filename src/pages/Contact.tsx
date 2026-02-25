import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Upload, Check } from "lucide-react";
import { toast } from "sonner";

const projectTypes = ["New Construction", "Retrofit", "Consultation"];

const Contact = () => {
  const [activeProjectType, setActiveProjectType] = useState(projectTypes[0]);
  const [projectLocation, setProjectLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [requirements, setRequirements] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!projectLocation || !budget || !requirements) {
      toast.error("Please complete all required details.");
      return;
    }

    toast.success("Contact details captured. Proceeding to timeline.");
  };

  return (
    <Layout>
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Enterprise Tender Portal
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Request for Proposal
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Submit project specifications for preliminary structural assessment and pricing.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-border bg-card p-6 shadow-sm md:p-10">
            <div className="mb-8 grid grid-cols-3 gap-2 text-center">
              <div className="space-y-2">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check size={18} />
                </div>
                <p className="text-lg font-semibold text-primary">Contact</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  2
                </div>
                <p className="text-lg font-semibold text-foreground">Details</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm font-semibold text-muted-foreground">
                  3
                </div>
                <p className="text-lg font-semibold text-muted-foreground">Timeline</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label className="text-base font-semibold uppercase tracking-wide">Project Type</Label>
                <div className="mt-3 grid grid-cols-1 overflow-hidden rounded-md border border-border sm:grid-cols-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`h-12 border-r border-border text-sm font-medium transition last:border-r-0 ${
                        activeProjectType === type
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-muted-foreground hover:bg-muted"
                      }`}
                      onClick={() => setActiveProjectType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-location" className="text-base font-semibold uppercase tracking-wide">
                  Project Location
                </Label>
                <div className="relative">
                  <MapPin
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="project-location"
                    value={projectLocation}
                    onChange={(event) => setProjectLocation(event.target.value)}
                    placeholder="e.g. 30 Hudson Yards, New York"
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-base font-semibold uppercase tracking-wide">
                  Estimated Glazing Budget
                </Label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$
                  </span>
                  <Input
                    id="budget"
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    placeholder="e.g. 5,000,000"
                    className="pl-8 pr-14"
                    required
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    USD
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements" className="text-base font-semibold uppercase tracking-wide">
                  Structural Requirements
                </Label>
                <Textarea
                  id="requirements"
                  rows={5}
                  value={requirements}
                  onChange={(event) => setRequirements(event.target.value)}
                  placeholder="Briefly describe key structural challenges (e.g. wind load, seismic requirements, thermal performance targets)..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="schematics" className="text-base font-semibold uppercase tracking-wide">
                  Architectural Schematics
                </Label>
                <label
                  htmlFor="schematics"
                  className="block cursor-pointer rounded-md border border-dashed border-border bg-muted/20 p-8 text-center transition hover:bg-muted/40"
                >
                  <Upload size={28} className="mx-auto text-muted-foreground" />
                  <p className="mt-4 text-base text-foreground">
                    <span className="font-semibold text-primary">Upload a file</span> or drag and drop
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">PDF, DWG, or DXF up to 50MB</p>
                  {fileName ? <p className="mt-3 text-sm font-medium">Selected: {fileName}</p> : null}
                </label>
                <Input
                  id="schematics"
                  type="file"
                  accept=".pdf,.dwg,.dxf"
                  className="hidden"
                  onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
                />
              </div>

              <Button type="submit" className="h-12 w-full text-sm font-semibold uppercase tracking-[0.18em]">
                Next: Timeline
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By continuing, you agree to our strict NDA policy regarding project data.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
