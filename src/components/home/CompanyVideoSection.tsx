import { Play } from "lucide-react";

export const CompanyVideoSection = () => {
  return (
    <section className="py-16 bg-stone-900 text-white border-y border-stone-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/40">
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
            src="https://player.vimeo.com/video/1191408845?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute top-0 left-0 w-full h-full"
            title="Fine Glaze Corporate Facade Video"
          />
        </div>
      </div>
    </section>
  );
};
