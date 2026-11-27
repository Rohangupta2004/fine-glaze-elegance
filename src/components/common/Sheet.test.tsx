import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { LinkTable, Process, SpecList, SpecTable } from "./Sheet";

const html = (node: React.ReactNode) => renderToString(<StaticRouter location="/">{node}</StaticRouter>);

describe("drawing-set components", () => {
  it("SpecTable labels every cell for the stacked phone layout", () => {
    const out = html(<SpecTable caption="Systems" columns={["No.", "System"]} rows={[["01", "Unitized"]]} />);
    expect(out).toContain('data-l="System"');
    expect(out).toContain("sx-t-no");
    expect(out).toContain("Unitized");
  });
  it("SpecTable can skip the index column styling", () => {
    expect(html(<SpecTable caption="x" columns={["A"]} rows={[["a"]]} indexed={false} />)).not.toContain("sx-t-no");
  });
  it("SpecList numbers items with two digits", () => {
    const out = html(<SpecList items={["a", "b"]} />);
    expect(out).toContain(">01<");
    expect(out).toContain(">02<");
  });
  it("LinkTable renders internal links", () => {
    expect(html(<LinkTable items={[{ to: "/services", title: "Services" }]} />)).toContain('href="/services"');
  });
  it("Process draws one node per step", () => {
    const out = html(<Process steps={[{ title: "Survey", desc: "d" }, { title: "Install", desc: "e" }]} />);
    expect(out.match(/sx-node/g)).toHaveLength(2);
  });
});
