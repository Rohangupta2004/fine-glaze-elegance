/**
 * Keep <title> and meta descriptions inside what Google shows in results
 * (~60 characters / ~155 characters) without mangling the wording.
 * Social cards still get the full text.
 */
const BRAND = "Fine Glaze";
const BRAND_SUFFIX = /\s*[|–—-]\s*Fine Glaze\s*$/;
export const TITLE_MAX = 65;
export const DESCRIPTION_MAX = 160;

export function fitTitle(title: string, max = TITLE_MAX): string {
  if (title.length <= max) return title;
  const core = title.replace(BRAND_SUFFIX, "").trim();
  const withBrand = (t: string) => (t.includes(BRAND) ? t : `${t} | ${BRAND}`);
  if (withBrand(core).length <= max) return withBrand(core);
  // Drop trailing " | secondary phrase" segments, then " – detail" clauses.
  for (const sep of [" | ", " – ", " — ", ": "]) {
    const parts = core.split(sep);
    while (parts.length > 1) {
      parts.pop();
      const t = parts.join(sep).trim();
      if (t.length < 25) break;
      if (withBrand(t).length <= max) return withBrand(t);
      if (t.length <= max) return t;
    }
  }
  return core.length <= max + 10 ? core : withBrand(core);
}

export function fitDescription(text: string, max = DESCRIPTION_MAX): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  // Prefer ending on a full sentence.
  const cut = t.slice(0, max);
  const sentenceEnd = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "));
  if (sentenceEnd >= 70) return cut.slice(0, sentenceEnd + 1);
  const space = cut.lastIndexOf(" ", max - 1);
  return `${cut.slice(0, space > 80 ? space : max - 1).replace(/[,;:–—-]\s*$/, "")}…`;
}
