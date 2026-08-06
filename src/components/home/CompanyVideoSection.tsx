import { Play, ShieldCheck, CheckCircle2 } from "lucide-react";

export const CompanyVideoSection = () => {
  return (
    <section className="py-16 bg-stone-900 text-white border-y border-stone-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
            <Play className="w-3 h-3 fill-current" /> Company Overview Video
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            See Fine Glaze <span className="text-amber-400">In Action</span>
          </h2>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Watch how Fine Glaze delivers high-rise glass curtain walls, structural glazing, and architectural cladding through in-house engineering and precision site execution.
          </p>
        </div>

        {/* Vimeo Video Embed Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700 bg-stone-950 aspect-[16/9] max-w-4xl mx-auto">
          <iframe
            src="https://player.vimeo.com/video/1191408845?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute top-0 left-0 w-full h-full"
            title="Fine Glaze Corporate Facade Video"
          />
        </div>

        {/* Video Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8 text-center sm:text-left">
          <div className="flex items-center gap-3 bg-stone-950/60 p-4 rounded-xl border border-stone-800">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-stone-200">CNC Profile Fabrication</p>
              <p className="text-[11px] text-stone-400">Micron-level factory tolerances</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-stone-950/60 p-4 rounded-xl border border-stone-800">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-stone-200">High-Rise Safety Protocol</p>
              <p className="text-[11px] text-stone-400">Zero accident safety standard</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-stone-950/60 p-4 rounded-xl border border-stone-800">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-stone-200">AAMA 501.2 Hose Tested</p>
              <p className="text-[11px] text-stone-400">Verified weather tightness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
