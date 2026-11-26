/**
 * Minimal full-page loading spinner shown while lazy-loaded route chunks download.
 * Matches the site's stone/amber brand palette.
 */
export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-line border-t-amber-600 animate-spin" />
      <span className="text-sm text-muted-foreground font-medium">Loading…</span>
    </div>
  </div>
);
