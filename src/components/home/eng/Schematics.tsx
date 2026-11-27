import type { ReactNode } from "react";

/**
 * Generic line schematics for the nine services. 1.5px ink strokes, one bronze accent each.
 * Illustrative only: no dimensions, no product data.
 */
const Svg = ({ children }: { children: ReactNode }) => (
  <svg className="eg-sch" viewBox="0 0 120 80" role="presentation" aria-hidden="true" focusable="false" fill="none" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
    {children}
  </svg>
);

const hatch = (x: number, y: number, h: number, step = 8) =>
  Array.from({ length: Math.floor(h / step) }, (_, i) => <line key={i} x1={x} y1={y + (i + 1) * step} x2={x + 10} y2={y + i * step} className="t" />);

/** Elevation: mullions, transoms and a floor slab. */
export const CurtainWallDrawing = () => (
  <Svg>
    <rect x="12" y="8" width="96" height="58" />
    <line x1="36" y1="8" x2="36" y2="66" />
    <line x1="60" y1="8" x2="60" y2="66" />
    <line x1="84" y1="8" x2="84" y2="66" />
    <line x1="12" y1="28" x2="108" y2="28" />
    <line x1="12" y1="47" x2="108" y2="47" />
    <line x1="4" y1="66" x2="116" y2="66" />
    <line x1="4" y1="73" x2="116" y2="73" />
    <rect x="34" y="66" width="4" height="7" className="a" />
    <rect x="58" y="66" width="4" height="7" className="a" />
    <rect x="82" y="66" width="4" height="7" className="a" />
    <line x1="17" y1="22" x2="27" y2="13" className="t" />
    <line x1="17" y1="41" x2="27" y2="32" className="t" />
  </Svg>
);

/** Plan section: glass lites bonded to a mullion with structural silicone. */
export const StructuralGlazingDrawing = () => (
  <Svg>
    <rect x="8" y="22" width="42" height="8" />
    <rect x="70" y="22" width="42" height="8" />
    <rect x="44" y="44" width="32" height="26" />
    <rect x="52" y="52" width="16" height="10" className="t" />
    <rect x="44" y="30" width="8" height="14" className="a" />
    <rect x="68" y="30" width="8" height="14" className="a" />
    <rect x="52" y="22" width="16" height="6" className="a" />
    <line x1="8" y1="14" x2="112" y2="14" className="t" strokeDasharray="3 4" />
  </Svg>
);

/** Elevation: cladding panels on a dashed sub-frame with open joints. */
export const CladdingDrawing = () => (
  <Svg>
    <line x1="30" y1="6" x2="30" y2="74" className="t" strokeDasharray="4 3" />
    <line x1="60" y1="6" x2="60" y2="74" className="t" strokeDasharray="4 3" />
    <line x1="90" y1="6" x2="90" y2="74" className="t" strokeDasharray="4 3" />
    <rect x="10" y="10" width="46" height="28" />
    <rect x="62" y="10" width="48" height="28" />
    <rect x="10" y="42" width="30" height="28" />
    <rect x="44" y="42" width="66" height="28" />
    <line x1="56" y1="10" x2="62" y2="10" className="a" />
    <line x1="56" y1="38" x2="62" y2="38" className="a" />
    <line x1="10" y1="38" x2="110" y2="38" className="a" strokeWidth="2.5" />
  </Svg>
);

/** Elevation: a window with a sliding sash and a door leaf. */
export const WindowDoorDrawing = () => (
  <Svg>
    <rect x="10" y="12" width="60" height="56" />
    <rect x="16" y="18" width="48" height="44" className="t" />
    <line x1="40" y1="18" x2="40" y2="62" />
    <path d="M22 40 H34 M30 36 L34 40 L30 44" className="a" />
    <rect x="80" y="8" width="30" height="60" />
    <rect x="86" y="14" width="18" height="48" className="t" />
    <line x1="99" y1="38" x2="99" y2="46" className="a" strokeWidth="2.5" />
    <line x1="4" y1="68" x2="116" y2="68" />
  </Svg>
);

/** Elevation: frameless glass panels on base shoes under a handrail. */
export const RailingDrawing = () => (
  <Svg>
    <line x1="4" y1="68" x2="116" y2="68" />
    <rect x="10" y="30" width="30" height="30" />
    <rect x="45" y="30" width="30" height="30" />
    <rect x="80" y="30" width="30" height="30" />
    <rect x="8" y="60" width="34" height="6" className="a" />
    <rect x="43" y="60" width="34" height="6" className="a" />
    <rect x="78" y="60" width="34" height="6" className="a" />
    <line x1="6" y1="22" x2="114" y2="22" strokeWidth="2.5" />
    <line x1="6" y1="22" x2="6" y2="68" className="t" />
  </Svg>
);

/** Section: inclined glass held off a wall on spider fittings. */
export const SkylightDrawing = () => (
  <Svg>
    <line x1="16" y1="6" x2="16" y2="74" />
    {hatch(6, 6, 68)}
    <line x1="16" y1="38" x2="112" y2="18" />
    <line x1="16" y1="43" x2="112" y2="23" />
    <circle cx="46" cy="31" r="3" className="a" />
    <circle cx="80" cy="24" r="3" className="a" />
    <line x1="46" y1="28" x2="16" y2="14" className="t" />
    <line x1="80" y1="21" x2="16" y2="10" className="t" />
  </Svg>
);

/** Section: angled blades between two jambs. */
export const LouverDrawing = () => (
  <Svg>
    <line x1="16" y1="6" x2="16" y2="74" />
    <line x1="104" y1="6" x2="104" y2="74" />
    <line x1="16" y1="6" x2="104" y2="6" />
    <line x1="16" y1="74" x2="104" y2="74" />
    {[16, 28, 40, 52, 64].map((y) => (
      <polygon key={y} points={`22,${y + 8} 98,${y - 2} 98,${y + 1} 22,${y + 11}`} className={y === 40 ? "a" : undefined} />
    ))}
  </Svg>
);

/** Elevation: floor-to-ceiling glass with a door leaf on patch fittings. */
export const PartitionDrawing = () => (
  <Svg>
    <line x1="4" y1="8" x2="116" y2="8" />
    <line x1="4" y1="72" x2="116" y2="72" />
    <rect x="10" y="8" width="30" height="64" />
    <rect x="44" y="8" width="30" height="64" />
    <rect x="78" y="8" width="32" height="64" />
    <rect x="78" y="8" width="6" height="5" className="a" />
    <rect x="78" y="67" width="6" height="5" className="a" />
    <line x1="106" y1="36" x2="106" y2="46" className="a" strokeWidth="2.5" />
    <line x1="14" y1="30" x2="22" y2="22" className="t" />
  </Svg>
);

/** Section: a sealed joint between two glass edges, with a dashed inspection ring. */
export const MaintenanceDrawing = () => (
  <Svg>
    <rect x="6" y="20" width="46" height="12" />
    <rect x="68" y="20" width="46" height="12" />
    <circle cx="60" cy="27" r="5" />
    <path d="M52 32 H68 V40 Q60 46 52 40 Z" className="a" />
    <circle cx="60" cy="34" r="26" className="t" strokeDasharray="3 4" />
    <line x1="6" y1="60" x2="114" y2="60" className="t" />
    <line x1="6" y1="56" x2="6" y2="64" className="t" />
    <line x1="114" y1="56" x2="114" y2="64" className="t" />
  </Svg>
);
