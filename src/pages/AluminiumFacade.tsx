import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  Check,
  ChevronRight,
  DoorOpen,
  Gauge,
  GlassWater,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
  Timer,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

function Stat({
  label,
  value,
  icon: Icon,
  testId,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  testId: string;
}) {
  return (
    <div
      className="rounded-2xl border bg-white/70 px-4 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50"
      data-testid={testId}
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>
      <div className="mt-1 font-serif text-lg tracking-tight text-foreground">
        {value}
      </div>
    </div>
  );
}

function Feature({
  title,
  description,
  icon: Icon,
  testId,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  testId: string;
}) {
  return (
    <Card
      className="group relative overflow-hidden rounded-3xl border bg-white/70 p-5 shadow-sm backdrop-blur transition-shadow hover:shadow-md"
      data-testid={testId}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-sky-300/35 to-cyan-200/10 blur-2xl" />
        <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-300/30 to-sky-200/10 blur-2xl" />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-white/70 shadow-sm">
              <Icon className="h-5 w-5 text-sky-700" />
            </div>
            <div className="font-semibold tracking-tight">{title}</div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </Card>
  );
}

function Pill({
  children,
  testId,
}: {
  children: React.ReactNode;
  testId: string;
}) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5 text-xs text-foreground shadow-sm backdrop-blur"
      data-testid={testId}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
      <span className="whitespace-nowrap">{children}</span>
    </div>
  );
}

function MiniCalculator({ testId }: { testId: string }) {
  const [width, setWidth] = useState<string>("6");
  const [height, setHeight] = useState<string>("4");

  const area = useMemo(() => {
    const w = Number(width);
    const h = Number(height);
    if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0)
      return null;
    return (w * h).toFixed(1);
  }, [width, height]);

  return (
    <Card
      className="rounded-3xl border bg-white/70 p-5 shadow-sm backdrop-blur"
      data-testid={testId}
    >
      <div className="flex items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-white/70 shadow-sm">
          <Calculator className="h-5 w-5 text-sky-700" />
        </div>
        <div>
          <div
            className="font-semibold tracking-tight"
            data-testid="text-calc-title"
          >
            Quick sizing helper
          </div>
          <div
            className="text-xs text-muted-foreground"
            data-testid="text-calc-subtitle"
          >
            Estimate opening area in sq. ft.
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="width" className="text-xs" data-testid="label-width">
            Width (ft)
          </Label>
          <Input
            id="width"
            inputMode="decimal"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="mt-1"
            data-testid="input-width"
          />
        </div>
        <div>
          <Label
            htmlFor="height"
            className="text-xs"
            data-testid="label-height"
          >
            Height (ft)
          </Label>
          <Input
            id="height"
            inputMode="decimal"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1"
            data-testid="input-height"
          />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border bg-white/60 px-4 py-3">
        <div
          className="text-xs text-muted-foreground"
          data-testid="text-calc-result-label"
        >
          Opening area
        </div>
        <div
          className="mt-1 font-serif text-2xl tracking-tight"
          data-testid="text-calc-result"
        >
          {area ? (
            <span>
              {area}{" "}
              <span className="text-base text-muted-foreground">sq. ft.</span>
            </span>
          ) : (
            <span className="text-muted-foreground">—</span>
          )}
        </div>
      </div>

      <p
        className="mt-3 text-xs leading-relaxed text-muted-foreground"
        data-testid="text-calc-footnote"
      >
        For a real quote, we’ll confirm site measurements, track configuration,
        glass type, and hardware.
      </p>
    </Card>
  );
}

export default function FineGlazePage() {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    requirement: "Sliding windows + 2-track",
    message: "",
  });

  const [activeSection, setActiveSection] = useState<"learn" | "contact">(
    "learn",
  );

  function handleSubmit() {
    toast({
      title: "Request sent (mock)",
      description:
        "Thanks! FineGlaze will contact you shortly. (This prototype doesn’t send messages yet.)",
    });
  }

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-window.png"
            alt="Luxury aluminium windows"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-grain opacity-[0.15]" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <header className="absolute top-6 left-4 right-4 flex items-center justify-between gap-4 sm:left-6 sm:right-6">
            <div
              className="flex items-center gap-3"
              data-testid="brand-fineglaze"
            >
              <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-white/70 shadow-sm backdrop-blur">
                <Sparkles className="h-5 w-5 text-sky-700" />
              </div>
              <div className="leading-tight">
                <div
                  className="font-semibold tracking-tight"
                  data-testid="text-brand-name"
                >
                  FineGlaze
                </div>
                <div
                  className="text-xs text-muted-foreground"
                  data-testid="text-brand-tagline"
                >
                  Aluminium sliding windows & doors • India
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <Button
                variant={activeSection === "learn" ? "default" : "secondary"}
                className="rounded-full"
                onClick={() => {
                  setActiveSection("learn");
                  document
                    .getElementById("learn")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-nav-learn"
              >
                Learn
              </Button>
              <Button
                variant={activeSection === "contact" ? "default" : "secondary"}
                className="rounded-full"
                onClick={() => {
                  setActiveSection("contact");
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-nav-contact"
              >
                Contact
              </Button>
              <Button
                className="rounded-full"
                onClick={() => {
                  setActiveSection("contact");
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-nav-quote"
              >
                Get a quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </header>

          <motion.section
            className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
            initial="initial"
            animate="animate"
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.07 } },
            }}
            aria-label="Hero"
          >
            <motion.div variants={fadeUp}>
              <div
                className="flex flex-wrap items-center gap-2"
                data-testid="hero-pills"
              >
                <Pill testId="pill-made-in-india">
                  Made for Indian climate (heat, rain, dust)
                </Pill>
                <Pill testId="pill-site-measurement">
                  Site measurement support
                </Pill>
                <Pill testId="pill-custom-finish">Custom finishes & glass</Pill>
              </div>

              <h1
                className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl"
                data-testid="text-hero-title"
              >
                Aluminium Sliding Windows & Doors—
                <span className="text-sky-700">
                  {" "}
                  built clean, sealed tight.
                </span>
              </h1>
              <p
                className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
                data-testid="text-hero-subtitle"
              >
                A practical, no-confusion guide to profiles, tracks, glass, and
                hardware—plus a fast way to reach FineGlaze for consultation and
                quotes.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  className="h-11 rounded-full"
                  onClick={() => {
                    setActiveSection("contact");
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-testid="button-hero-contact"
                >
                  Talk to FineGlaze
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  className="h-11 rounded-full"
                  onClick={() => {
                    setActiveSection("learn");
                    document
                      .getElementById("learn")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-testid="button-hero-learn"
                >
                  Learn what to ask
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <div
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                  data-testid="text-hero-trust"
                >
                  <BadgeCheck className="h-4 w-4 text-sky-700" />
                  <span>Warranty-ready specs • Measurement-first approach</span>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Stat
                  label="Noise + dust sealing"
                  value="Wool pile + EPDM"
                  icon={ShieldCheck}
                  testId="stat-sealing"
                />
                <Stat
                  label="Configuration"
                  value="2/3/4-track"
                  icon={DoorOpen}
                  testId="stat-tracks"
                />
                <Stat
                  label="Glass options"
                  value="Single / DGU"
                  icon={GlassWater}
                  testId="stat-glass"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative aspect-video overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl"
            >
              <img
                src="/hero-window.png"
                alt="Product detail"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 mb-2">
                  Premium Series 700
                </Badge>
                <div className="text-white font-serif text-xl">
                  Ultra-slim profiles for maximum view.
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <section id="learn" className="scroll-mt-24 pt-10">
          <div className="flex flex-col gap-2">
            <div
              className="text-xs font-semibold tracking-wide text-sky-700"
              data-testid="text-section-kicker"
            >
              Buyer’s guide
            </div>
            <h2
              className="font-serif text-3xl tracking-tight"
              data-testid="text-learn-title"
            >
              Sliding windows & doors in India—what to check before you buy
            </h2>
            <p
              className="max-w-3xl text-sm leading-relaxed text-muted-foreground"
              data-testid="text-learn-subtitle"
            >
              Aluminium systems are all about the details. Use this quick guide
              to compare quotes and avoid common issues like dust ingress,
              rattling, and water seepage.
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <Feature
              title="Profile thickness & alloy"
              description="Ask for wall thickness, alloy grade, and reinforcement on large shutters. Strong profiles keep sliders aligned over time."
              icon={Building2}
              testId="card-feature-profile"
            />
            <Feature
              title="Sealing system"
              description="Look for wool pile + EPDM gaskets and proper interlock design—this is where noise and dust control comes from."
              icon={ShieldCheck}
              testId="card-feature-sealing"
            />
            <Feature
              title="Glass + performance"
              description="Single glass is common. DGU can improve noise/heat. Confirm thickness, spacer, and quality of silicone sealing."
              icon={Sun}
              testId="card-feature-glass"
            />
            <Feature
              title="Water drainage"
              description="Proper weep holes + drainage path matters more than you think for monsoon. Ask to see corner joints and drainage."
              icon={Wind}
              testId="card-feature-drainage"
            />
            <Feature
              title="Hardware quality"
              description="Rollers, handles, and locks define daily feel. Ask brand/grade, SS fasteners, and smooth operation for heavy glass."
              icon={Gauge}
              testId="card-feature-hardware"
            />
            <Feature
              title="Installation method"
              description="The best profile still fails with poor installation. Confirm alignment, anchoring, foam + sealant, and finishing details."
              icon={BadgeCheck}
              testId="card-feature-install"
            />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <MiniCalculator testId="card-mini-calc" />

            <Card className="rounded-3xl border bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div
                    className="font-semibold tracking-tight"
                    data-testid="text-tabs-title"
                  >
                    Quick compare
                  </div>
                  <div
                    className="text-xs text-muted-foreground"
                    data-testid="text-tabs-subtitle"
                  >
                    Pick a topic to see recommended choices.
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="rounded-full"
                  data-testid="badge-india"
                >
                  India-fit
                </Badge>
              </div>

              <div className="mt-4" data-testid="tabs-compare">
                <Tabs defaultValue="windows">
                  <TabsList
                    className="grid w-full grid-cols-3"
                    data-testid="tabslist-compare"
                  >
                    <TabsTrigger value="windows" data-testid="tab-windows">
                      Windows
                    </TabsTrigger>
                    <TabsTrigger value="doors" data-testid="tab-doors">
                      Doors
                    </TabsTrigger>
                    <TabsTrigger value="balcony" data-testid="tab-balcony">
                      Balcony
                    </TabsTrigger>
                  </TabsList>

                  
