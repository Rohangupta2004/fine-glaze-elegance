import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { 
  Award, 
  Target, 
  Eye, 
  ShieldCheck, 
  Users, 
  Factory, 
  CheckCircle2, 
  HardHat 
} from "lucide-react";
import SEO from "@/components/SEO";
import { useSiteMedia } from "@/hooks/useSiteMedia";

const teamMembers = [
  {
    name: "Deepak Gupta",
    role: "Founder & Director · QHSE & Design Lead",
    qualification: "B.E. Civil · 15+ Years Industry Experience",
    experience: "15+ Years",
    bio: "Civil engineering graduate with over 15+ years of hands-on facade and fenestration industry leadership. Gained prestigious multinational experience with the Al Ghurair Group in the Middle East before founding Fine Glaze. Personally leads design direction, technical innovation, structural compliance, and overall project delivery across India.",
    tags: ["Ex-Al Ghurair Group", "B.E. Civil", "Design & QHSE Direction"],
  },
  {
    name: "Harishankar Chowdhary",
    role: "Operation Manager",
    qualification: "30+ Years Facade Industry Veteran",
    experience: "30+ Years",
    bio: "Seasoned industry veteran with more than 30 years of extensive facade execution experience. Has worked with leading multinational corporations (MNCs) as an essential contributor on landmark commercial, institutional, and high-rise developments across India.",
    tags: ["30+ Yrs Experience", "MNC Project Veteran", "Site Operations Lead"],
  },
  {
    name: "Kavya Gupta",
    role: "Marketing Head",
    qualification: "10+ Years Marketing & Client Relations",
    experience: "10+ Years",
    bio: "Spearheads corporate marketing, institutional client relationships, developer partnerships, and strategic expansion across national metro markets.",
    tags: ["10+ Yrs Marketing", "Client Partnerships", "Corporate Strategy"],
  },
  {
    name: "Yogesh",
    role: "Design Head",
    qualification: "Senior Architectural Draftsman",
    experience: "Design & Detailing",
    bio: "Leads our in-house engineering and drafting studio. Produces meticulous 2D/3D shop drawings, fabrication cut-lists, and architectural coordination models prior to workshop cutting.",
    tags: ["Shop Drawings", "Fabrication Detailing", "Architectural Coordination"],
  },
  {
    name: "Swikrut",
    role: "Structural Engineer",
    qualification: "Structural Engineering Specialist",
    experience: "Engineering Verification",
    bio: "Responsible for member sizing, anchor bracket calculations, and structural deflection checks verified against project wind loads and IS 875 standards.",
    tags: ["Wind Load Analysis", "Bracket Anchor Design", "IS 875 Compliance"],
  },
  {
    name: "CA Rohit",
    role: "Chief Accountant",
    qualification: "Chartered Accountant · Accounts & Finance Lead",
    experience: "Finance & Governance",
    bio: "Manages financial governance, contract budgeting, vendor accounts, and corporate statutory compliance across all project portfolios.",
    tags: ["Commercial Governance", "Financial Oversight", "Statutory Compliance"],
  },
  {
    name: "Akash",
    role: "Safety & QHSE Officer",
    qualification: "Certified Height Safety & QHSE Lead",
    experience: "Health, Safety & Environment",
    bio: "Nominated safety officer overseeing work-at-height permits, full body harness and lifeline protocols, edge protection, and daily shift toolbox talks across active sites.",
    tags: ["Work-at-Height Safety", "Daily Toolbox Talks", "ISO 45001 Protocols"],
  },
];

const capabilityStats = [
  { val: "~20,566 SQM", label: "Facade Area Delivered", desc: "Commercial, healthcare & high-rises" },
  { val: "16+", label: "Marquee Project Records", desc: "Documented in corporate profile" },
  { val: "5+ Years", label: "Company Track Record", desc: "Turnkey delivery & long-term AMC" },
  { val: "15+ Years", label: "Founder Industry Leadership", desc: "Multinational Al Ghurair alumni" },
  { val: "~2,500 SQ FT", label: "In-House Fabrication Unit", desc: "Pisoli, Pune dedicated facility" },
  { val: "40+", label: "Core Technical Team", desc: "Design, supervision & engineering" },
  { val: "Up to 540", label: "Peak Labour Mobilisation", desc: "Multi-site parallel execution" },
  { val: "Award 2024", label: "Best Performance Vendor", desc: "Awarded by Embassy REIT" },
];

const deliveryStages = [
  {
    num: "01",
    title: "Enquiry & Site Survey",
    desc: "Site measurement, access study, scaffolding layout, and scope freeze with client and facade consultant.",
  },
  {
    num: "02",
    title: "Design & Shop Drawings",
    desc: "Fabrication and installation drawings prepared in-house before cutting for consultant review.",
  },
  {
    num: "03",
    title: "Engineering Check",
    desc: "Member sizing, bracket anchor calculations, and deflection verification tested against project wind loads.",
  },
  {
    num: "04",
    title: "Approval & GFC",
    desc: "Drawings routed through architect, PMC, and client until final GFC (Good For Construction) release.",
  },
  {
    num: "05",
    title: "In-House Fabrication",
    desc: "Precision cutting, grooving, routing, and assembly at our Pisoli facility, project-batched with QC.",
  },
  {
    num: "06",
    title: "Sequenced Installation",
    desc: "Floor-by-floor erection under dedicated site incharge, safety officer, and qualified supervisors.",
  },
  {
    num: "07",
    title: "Testing & Snagging",
    desc: "On-site dynamic water penetration testing; third-party ASTM testing; snag register closure.",
  },
  {
    num: "08",
    title: "Handover & DLP",
    desc: "As-built documentation handover, maintenance manuals, and Defect Liability Period (DLP) support.",
  },
];

const materialPartners = [
  { category: "Architectural Glass", partners: "Saint-Gobain, AIS, Guardian" },
  { category: "ACP & Metal Cladding", partners: "Alubond, Eurobond, Aludecor, Alstrong" },
  { category: "Structural Sealants", partners: "Dowsil (Dow Corning), Sika" },
  { category: "Aluminium Systems", partners: "Jindal Aluminium, Hindalco, Architectural Extrusions" },
  { category: "Architectural Hardware", partners: "Dorma, Geze, Kinlong, McCoy" },
  { category: "Stainless Steel Cladding", partners: "Jindal Stainless Limited (JSL)" },
];

const About = () => {
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const videoRef = useScrollAnimation();
  const { getMedia } = useSiteMedia();
  const aboutHero = getMedia("about_hero", "/Embassy.webp");
  const aboutStoryPhoto = getMedia("about_story_photo", "/Embassy.webp");

  return (
    <Layout darkHero>
      <SEO
        title="About Fine Glaze: Complete Facade Solutions & Fenestration Expert Pan India"
        description="Fine Glaze is a premier turnkey facade engineering company Pan India. 5+ years company track record, founder 15+ years multinational experience (Ex-Al Ghurair Group). ~20,566+ SQM delivered. Embassy REIT Best Performance Vendor 2024."
        canonical="https://fineglaze.com/about"
        keywords="Fine Glaze, Deepak Gupta facade, Harishankar Chowdhary, complete facade solutions, fenestration expert India, facade contractor Pan India, aluminium facade fabrication, structural glazing company, curtain wall contractor India"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Fine Glaze",
            "url": "https://fineglaze.com",
            "founder": {
              "@type": "Person",
              "name": "Deepak Gupta",
              "jobTitle": "Founder & Director",
              "alumniOf": "Al Ghurair Group"
            },
            "foundingLocation": { "@type": "Place", "name": "Pune, Maharashtra" },
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": 40 },
            "award": "Best Performance Vendor – Embassy REIT 2024",
            "taxID": "27BFJPG1853A1ZU"
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden" ref={heroRef.ref}>
        <div className="absolute inset-0">
          <img src={aboutHero} alt="Fine Glaze Facade Projects" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/80 to-stone-950/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={cn(
              "max-w-4xl mx-auto text-center space-y-6 slide-up",
              heroRef.isVisible && "visible"
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>5+ Yrs Company Track Record · Founder 15+ Yrs Industry Leadership (Ex-Al Ghurair)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Complete Facade Solutions &amp; <br />
              <span className="text-gradient-gold">Fenestration Expert</span> Pan India
            </h1>

            <p className="text-stone-200 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Design, in-house fabrication, precision high-rise erection, and lifecycle envelope maintenance — delivered for India's leading developers, REITs, healthcare campuses, and corporate asset owners.
            </p>
          </div>
        </div>
      </section>

      {/* Capability in Numbers (Slide 3 & 11) */}
      <section className="py-14 bg-stone-900 border-y border-stone-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">
              02 — Capability in Numbers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Delivered Work &amp; Mobilisation Strength
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {capabilityStats.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-stone-950/60 border border-stone-800 p-5 rounded-xl hover:border-amber-500/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-amber-400">{item.val}</div>
                <div className="text-sm font-bold text-white mt-1">{item.label}</div>
                <div className="text-xs text-stone-400 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Pedigree Section */}
      <section className="py-20 bg-background" ref={storyRef.ref}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={cn(
                "relative slide-up",
                storyRef.isVisible && "visible"
              )}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img
                  src={aboutStoryPhoto}
                  alt="Fine Glaze Landmark Project"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 rounded-xl shadow-xl border border-amber-400/40 max-w-xs">
                <Award size={32} className="mb-2 text-amber-200" />
                <p className="font-bold text-base">Best Performance Vendor 2024</p>
                <p className="text-xs text-amber-100">
                  Awarded by Embassy REIT for Embassy 247 Vikhroli
                </p>
              </div>
            </div>

            <div
              className={cn(
                "space-y-6 slide-up",
                storyRef.isVisible && "visible"
              )}
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="text-primary font-bold uppercase tracking-wider text-sm">
                01 — Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Engineering <span className="text-gradient-subtle">Architectural Envelopes</span> With Accountable Mastery
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fine Glaze operates as a specialist facade and fenestration contractor — design, fabrication, installation, and long-term maintenance handled by a dedicated, accountable in-house team.
                </p>
                <p>
                  With more than <strong>5+ years</strong> of dedicated company execution and a founder bringing over <strong>15+ years</strong> of multinational facade engineering leadership (including prestigious work with the Al Ghurair Group), Fine Glaze has established itself as the trusted partner for India's Grade-A asset owners.
                </p>
                <p>
                  From large-scale commercial curtain walls at <strong>Embassy 247</strong> and <strong>Embassy Techzone</strong> to landmark public infrastructure at the <strong>New Integrated Terminal of Pune International Airport</strong>, hospital facades with <strong>L&amp;T Construction</strong> at <strong>Nanavati Max Hospital</strong>, and corporate IT campuses like <strong>LTIMindtree</strong> — we engineer envelopes that withstand extreme climate dynamics while delivering pristine architectural elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Management Team (Slides 5, 6, 7, 16, 25) */}
      <section className="py-20 bg-muted/60 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              12 — Leadership &amp; Engineering Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              Driven by <span className="text-gradient-subtle">Proven Facade Leadership</span>
            </h2>
            <p className="text-muted-foreground mt-3">
              An accountable leadership structure combining global multinational standards with over four decades of collective facade engineering mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={member.name}
                className={cn(
                  "bg-card p-6 border border-border/80 rounded-xl hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between",
                  idx === 0 && "md:col-span-2 lg:col-span-2 border-amber-500/40 bg-gradient-to-br from-card via-card to-amber-500/5"
                )}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-extrabold text-foreground">{member.name}</h3>
                      <p className="text-sm font-semibold text-amber-600 mt-0.5">{member.role}</p>
                      <p className="text-xs text-muted-foreground font-medium">{member.qualification}</p>
                    </div>
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-700 text-xs font-bold rounded-full border border-amber-500/20 shrink-0">
                      {member.experience}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-2">
                  {member.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-[11px] font-semibold rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Wider Team Card */}
            <div className="bg-stone-900 text-white p-6 rounded-xl border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-white">40+ Core Team</h3>
                    <p className="text-sm font-semibold text-amber-400 mt-0.5">Engineering, Supervision &amp; Execution</p>
                  </div>
                  <Users className="w-8 h-8 text-amber-400" />
                </div>
                <p className="text-sm text-stone-300 leading-relaxed mt-3">
                  Supported by site incharge engineers (Amit, Ramesh), supervisory staff (Bhagwati P.), technical sales (Vipin), and an on-demand site labour mobilisation capacity of up to <strong>540 workers</strong> for simultaneous multi-tower erection.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-800 text-xs font-bold text-amber-400 uppercase tracking-wider">
                Mobilisation Capacity: Up to 540 Workers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Stage Delivery Process (Slide 15) */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              04 — How We Deliver
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              From Enquiry to Handover — <span className="text-gradient-subtle">8 Controlled Stages</span>
            </h2>
            <p className="text-muted-foreground mt-3">
              Eight structured milestones executed on every facade package to guarantee structural safety, wind-load resistance, and zero interface clashes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryStages.map((stage) => (
              <div 
                key={stage.num} 
                className="bg-card border border-border p-6 rounded-xl hover:border-amber-500/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-amber-600">{stage.num}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Stage {stage.num}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{stage.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-House Fabrication Facility (Slide 17) */}
      <section className="py-20 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm">
                04 — Fabrication Facility
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                Dedicated In-House Facility at <span className="text-gradient-subtle">Pisoli, Pune</span>
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Our ~2,500 sq ft covered fabrication facility at Pisoli, Pune serves as the centralized production hub feeding sites across India with project-batched, pre-tested facade assemblies.
              </p>

              <div className="space-y-3 mt-6">
                {[
                  "Aluminium and mild steel cutting, precision fabrication and assembly",
                  "ACP routing, grooving and composite panel preparation",
                  "Railing, louver and framing sub-assembly before dispatch",
                  "Material inward quality check and stage inspection at source",
                  "Project-batched output despatched directly to site under strict tagging",
                ].map((cap, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-900 text-white p-8 rounded-2xl border border-stone-800 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Factory className="text-amber-400" />
                Workshop Capability &amp; Scale
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-800">
                  <div className="text-2xl font-extrabold text-amber-400">~2,500</div>
                  <div className="text-xs text-stone-300 mt-1 uppercase tracking-wider">SQ FT Covered Area</div>
                </div>
                <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-800">
                  <div className="text-2xl font-extrabold text-amber-400">Pisoli</div>
                  <div className="text-xs text-stone-300 mt-1 uppercase tracking-wider">Pune Unit Location</div>
                </div>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Expansion continuously planned as our national order book grows. Heavy processing and specialized thermal tempering handled via accredited partner float facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality, Safety & Testing (Slide 18 & 19) */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              05 — Quality &amp; Safety
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              Rigorous Quality Assurance &amp; <span className="text-gradient-subtle">HSE Standards</span>
            </h2>
            <p className="text-muted-foreground mt-3">
              Facade work is height work, and it is strictly governed by institutional safety, stage inspections, and accredited testing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* QA & Testing Card */}
            <div className="bg-card border border-border p-8 rounded-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Stage Inspection &amp; Testing</h3>
                  <p className="text-xs text-muted-foreground">Checked at source, checked at site, verified before handover</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <strong className="text-foreground block">01. Material Inward:</strong>
                  Sections, glass thickness, and panel coatings checked against approved consultant specifications upon receipt.
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <strong className="text-foreground block">02. Workshop Check:</strong>
                  Dimensional tolerance and finish check at our facility prior to site shipment.
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <strong className="text-foreground block">03. Site Installation Check:</strong>
                  Line, level, plumb, and anchor torque verified floor-by-floor.
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <strong className="text-foreground block">04. Water &amp; ASTM Testing:</strong>
                  Site dynamic water penetration test on installed glazing; third-party air leakage, water penetration, and structural testing to ASTM arranged through accredited laboratories.
                </div>
              </div>
            </div>

            {/* Health & Safety Card */}
            <div className="bg-card border border-border p-8 rounded-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600">
                  <HardHat size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Health, Safety &amp; Environment (HSE)</h3>
                  <p className="text-xs text-muted-foreground">Dedicated safety officer &amp; work-at-height documentation</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <strong className="text-foreground block">Dedicated Safety Officer:</strong>
                  A nominated safety officer oversees elevation scaffolding, cradle systems, and terrace activities across all active sites.
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <strong className="text-foreground block">Personal Protection:</strong>
                  Full-body safety harness, certified lifelines, and dual anchorage on every high-altitude operation.
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <strong className="text-foreground block">Daily Toolbox Talks:</strong>
                  Mandatory safety briefings before every shift with coordinated Permit-To-Work (PTW) protocols.
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <strong className="text-foreground block">Certification &amp; Systems:</strong>
                  ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Health &amp; Safety) occupational management alignment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Partners (Slide 26) */}
      <section className="py-20 bg-muted/60 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              07 — Material Partners
            </span>
            <h2 className="text-3xl font-bold text-foreground mt-2">
              Engineered With <span className="text-gradient-subtle">Global Material Brands</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Where a project specifies an approved vendor list, material is procured strictly from that list, backed by test certificates and manufacturer warranties.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {materialPartners.map((item) => (
              <div key={item.category} className="bg-card p-6 border border-border rounded-xl">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <p className="font-semibold text-foreground text-sm">
                  {item.partners}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎥 Video Section */}
      <section className="py-20 bg-background border-t border-border" ref={videoRef.ref}>
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "max-w-4xl mx-auto text-center space-y-6 slide-up",
              videoRef.isVisible && "visible"
            )}
          >
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Company Overview · Film
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              See Fine Glaze <span className="text-gradient-subtle">in Action</span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Watch how Fine Glaze executes high-precision facade systems through advanced engineering, skilled site supervision, and uncompromising safety.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1191408845?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="FINE GLAZE"
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js" />
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals (Slides 9 & 10) */}
      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card metallic-border p-8 space-y-4 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Our <span className="text-gradient-subtle">Mission</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Making Fine Glaze a well-established and profitable company in the facade industry, through the best service for the customer and through best engineering and execution practices.
              </p>
            </div>

            <div className="glass-card metallic-border p-8 space-y-4 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Our <span className="text-gradient-subtle">Vision</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Making Fine Glaze a well-renowned company that develops exceptionally innovative, best-in-class facade products — making buildings more energy efficient, sustainable, and best in quality.
              </p>
            </div>
          </div>

          {/* 4 Core Goals */}
          <div className="bg-card p-8 border border-border rounded-2xl">
            <h4 className="text-lg font-bold text-foreground mb-6 text-center">
              Our 4 Strategic Company Goals
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { num: "01", text: "Developing exceptional facade products through innovation and R&D." },
                { num: "02", text: "Transforming the maximum number of buildings to be energy-efficient and sustainable." },
                { num: "03", text: "Making the built environment more sustainable through engineered facade envelopes." },
                { num: "04", text: "Building Fine Glaze into an enduring, trusted nationwide facade institution." },
              ].map((g) => (
                <div key={g.num} className="p-4 bg-secondary/40 rounded-xl">
                  <div className="text-2xl font-black text-amber-600 mb-2">{g.num}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Credentials (Slide 3 & 55) */}
      <section className="py-16 bg-stone-950 text-white border-t border-stone-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">
              13 — Compliance &amp; Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Documentation for Prequalification &amp; Vendor Registration
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-4 bg-stone-900 border border-stone-800 rounded-xl">
              <div className="text-stone-400 text-[10px] uppercase tracking-wider">Legal Status</div>
              <div className="text-white font-bold text-xs sm:text-sm mt-1">Proprietorship Firm</div>
            </div>
            <div className="p-4 bg-stone-900 border border-stone-800 rounded-xl">
              <div className="text-stone-400 text-[10px] uppercase tracking-wider">GSTIN</div>
              <div className="text-amber-400 font-bold text-xs sm:text-sm mt-1">27BFJPG1853A1ZU</div>
            </div>
            <div className="p-4 bg-stone-900 border border-stone-800 rounded-xl">
              <div className="text-stone-400 text-[10px] uppercase tracking-wider">Trademark</div>
              <div className="text-white font-bold text-xs sm:text-sm mt-1">Registered Word Mark</div>
            </div>
            <div className="p-4 bg-stone-900 border border-stone-800 rounded-xl">
              <div className="text-stone-400 text-[10px] uppercase tracking-wider">Quality &amp; HSE</div>
              <div className="text-white font-bold text-xs sm:text-sm mt-1">ISO 9001 / 14001 / 45001</div>
            </div>
            <div className="p-4 bg-stone-900 border border-stone-800 rounded-xl">
              <div className="text-stone-400 text-[10px] uppercase tracking-wider">Third-Party Testing</div>
              <div className="text-white font-bold text-xs sm:text-sm mt-1">ASTM Lab Testing</div>
            </div>
            <div className="p-4 bg-stone-900 border border-stone-800 rounded-xl">
              <div className="text-stone-400 text-[10px] uppercase tracking-wider">Defect Liability</div>
              <div className="text-white font-bold text-xs sm:text-sm mt-1">DLP Warranty Support</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
