import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ProjectGallery({ title, images }: { title: string; images: string[] }) {
  const [active, setActive] = useState<number | null>(null);
  const move = (step: number) => setActive((current) => current === null ? null : (current + step + images.length) % images.length);
  if (!images.length) return null;
  return (
    <section aria-label={`${title} photographs`}>
      <div className="flex items-end justify-between gap-4 mb-5">
        <div>
          <h2 className="font-bold text-2xl">Project Gallery</h2>
          <p className="text-sm text-muted-foreground mt-1">Explore the site, workmanship and finishing details.</p>
        </div>
        <span className="text-sm text-muted-foreground shrink-0">{images.length} photos</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, index) => (
          <button key={src} type="button" onClick={() => setActive(index)} aria-label={`View ${title} photo ${index + 1} full size`} className="group relative rounded-xl overflow-hidden bg-stone-100 border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
            <img src={src} alt={`${title} — project photograph ${index + 1}`} loading="lazy" decoding="async" className="w-full h-64 object-contain transition-transform duration-300 motion-safe:group-hover:scale-105" />
            <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/75 text-white text-xs px-3 py-2"><Expand size={14} /> View photo</span>
          </button>
        ))}
      </div>
      <Dialog open={active !== null} onOpenChange={(open) => { if (!open) setActive(null); }}>
        <DialogContent className="max-w-6xl w-[calc(100%_-_1.5rem)] p-4 sm:p-6" onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        }}>
          <DialogTitle className="pr-8">{title}</DialogTitle>
          <DialogDescription>Photo {(active ?? 0) + 1} of {images.length}. Use the arrows to browse, or Escape to close.</DialogDescription>
          {active !== null && <img src={images[active]} alt={`${title} — project photograph ${active + 1}`} className="w-full h-[65vh] object-contain bg-stone-100 rounded-lg" />}
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => move(-1)} disabled={images.length < 2}><ChevronLeft size={18} /> Previous</Button>
            <span className="text-sm text-muted-foreground">{(active ?? 0) + 1} / {images.length}</span>
            <Button variant="outline" onClick={() => move(1)} disabled={images.length < 2}>Next <ChevronRight size={18} /></Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
