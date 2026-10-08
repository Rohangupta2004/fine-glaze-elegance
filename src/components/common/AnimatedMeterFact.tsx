import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MeterFactProps {
  val: string;
  label: string;
  sub?: string;
  percent?: number; // 0 - 100
  metricUnit?: string;
  statusBadge?: string;
  theme?: "light" | "dark";
  className?: string;
}

/**
 * Extracts numeric value, prefix, and suffix from a string like:
 * "~20,566 SQM" -> { prefix: "~", number: 20566, suffix: " SQM" }
 * "45+ Yrs"     -> { prefix: "", number: 45, suffix: "+ Yrs" }
 * "Up to 540"   -> { prefix: "Up to ", number: 540, suffix: "" }
 * "Award 2024"  -> { prefix: "Award ", number: 2024, suffix: "" }
 * "10 Lines"    -> { prefix: "", number: 10, suffix: " Lines" }
 */
function parseValueString(val: string): { prefix: string; number: number | null; suffix: string } {
  // Matches optional prefix, numbers with commas, and suffix
  const match = val.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) {
    return { prefix: "", number: null, suffix: val };
  }
  const prefix = match[1];
  const numStr = match[2].replace(/,/g, "");
  const num = parseInt(numStr, 10);
  const suffix = match[3];

  return {
    prefix,
    number: isNaN(num) ? null : num,
    suffix,
  };
}

export const AnimatedMeterFact: React.FC<MeterFactProps> = ({
  val,
  label,
  sub,
  percent = 85,
  metricUnit,
  statusBadge,
  theme = "light",
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const parsed = parseValueString(val);
  const [displayNumber, setDisplayNumber] = useState(0);

  // Animate counter on view
  useEffect(() => {
    if (!isInView || parsed.number === null) return;

    const startVal = parsed.number > 2000 ? Math.max(0, parsed.number - 100) : 0;
    const endVal = parsed.number;
    const duration = 1600; // ms
    let startTime: number | null = null;
    let animId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startVal + (endVal - startVal) * ease);

      setDisplayNumber(current);

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setDisplayNumber(endVal);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isInView, parsed.number]);

  // Meter geometry (180-degree arch)
  // Center: (50, 48), radius = 34
  // Angle: from 180° to 0°
  // Arc path: M 16 48 A 34 34 0 0 1 84 48
  const radius = 34;
  const centerX = 50;
  const centerY = 48;

  // Clamped percent
  const safePercent = Math.min(Math.max(percent, 5), 100);
  const targetRotation = -90 + (safePercent / 100) * 180; // from -90deg to +90deg

  // Generate 9 tick notches
  const ticks = Array.from({ length: 9 }).map((_, i) => {
    const tickPercent = (i / 8) * 100;
    const angleRad = Math.PI - (i / 8) * Math.PI; // 180° to 0°
    const rIn = radius + 4;
    const rOut = radius + (i % 2 === 0 ? 9 : 6);
    const x1 = centerX + rIn * Math.cos(angleRad);
    const y1 = centerY - rIn * Math.sin(angleRad);
    const x2 = centerX + rOut * Math.cos(angleRad);
    const y2 = centerY - rOut * Math.sin(angleRad);
    const isActive = tickPercent <= safePercent;

    return { x1, y1, x2, y2, isActive, tickPercent };
  });

  const isDark = theme === "dark";

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative flex flex-col justify-between p-4 rounded-xl transition-all duration-300",
        isDark
          ? "bg-stone-950/80 border border-stone-800 hover:border-amber-500/50 hover:bg-stone-900/90 shadow-md shadow-black/40"
          : "bg-white/90 border border-border/80 hover:border-amber-500/50 hover:shadow-lg shadow-sm hover:bg-amber-500/[0.02]",
        className
      )}
    >
      {/* Top Header: Meter Status or Unit Indicator */}
      <div className="flex items-center justify-between text-[10px] font-mono tracking-wider mb-2">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-semibold uppercase tracking-widest text-[9px]",
            isDark
              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
              : "bg-amber-500/10 text-amber-800 border border-amber-500/20"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          {statusBadge || `${safePercent}% CALIBRATED`}
        </span>
        {metricUnit && (
          <span className={cn(isDark ? "text-stone-400" : "text-stone-500")}>
            [{metricUnit}]
          </span>
        )}
      </div>

      {/* SVG Meter Motion Dial */}
      <div className="relative w-full max-w-[140px] mx-auto my-1 flex items-center justify-center">
        <svg
          viewBox="0 0 100 58"
          className="w-full h-auto overflow-visible select-none pointer-events-none drop-shadow-sm"
        >
          <defs>
            {/* Active sweep gradient */}
            <linearGradient id={`meterGrad-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            {/* Needle metallic gradient */}
            <linearGradient id="needleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* Calibrated Ticks */}
          {ticks.map((t, idx) => (
            <line
              key={idx}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke={
                t.isActive && isInView
                  ? "#d97706"
                  : isDark
                  ? "#44403c"
                  : "#e2e8f0"
              }
              strokeWidth={idx % 2 === 0 ? "1.8" : "1.2"}
              strokeLinecap="round"
              className="transition-colors duration-700"
            />
          ))}

          {/* Background Meter Track */}
          <path
            d={`M 16 ${centerY} A ${radius} ${radius} 0 0 1 84 ${centerY}`}
            fill="none"
            stroke={isDark ? "#292524" : "#f1f5f9"}
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Animated Meter Arc (Sweep Motion) */}
          <motion.path
            d={`M 16 ${centerY} A ${radius} ${radius} 0 0 1 84 ${centerY}`}
            fill="none"
            stroke={`url(#meterGrad-${label})`}
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: safePercent / 100 } : { pathLength: 0 }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {/* Animated Needle Indicator (Physical Meter Motion) */}
          <motion.g
            initial={{ rotate: -90 }}
            animate={isInView ? { rotate: targetRotation } : { rotate: -90 }}
            transition={{
              duration: 1.7,
              ease: [0.34, 1.3, 0.64, 1], // subtle spring overshoot
            }}
            style={{
              transformOrigin: `${centerX}px ${centerY}px`,
            }}
          >
            {/* Needle Line */}
            <line
              x1={centerX}
              y1={centerY}
              x2={centerX}
              y2={centerY - radius + 5}
              stroke="url(#needleGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            {/* Needle Tip Arrow Marker */}
            <circle
              cx={centerX}
              cy={centerY - radius + 5}
              r="2"
              fill="#f59e0b"
            />
          </motion.g>

          {/* Center Hub / Pivot Ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r="4.5"
            fill={isDark ? "#1c1917" : "#ffffff"}
            stroke={isDark ? "#78716c" : "#cbd5e1"}
            strokeWidth="1.5"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r="2"
            fill="#d97706"
          />
        </svg>
      </div>

      {/* Dynamic Counter & Metric Value */}
      <div className="text-center mt-1">
        <div
          className={cn(
            "text-lg sm:text-xl md:text-2xl font-black tracking-tight",
            isDark ? "text-amber-400" : "text-amber-600"
          )}
        >
          {parsed.number !== null ? (
            <>
              <span>{parsed.prefix}</span>
              <span>{isInView ? displayNumber.toLocaleString() : "0"}</span>
              <span>{parsed.suffix}</span>
            </>
          ) : (
            <span>{val}</span>
          )}
        </div>

        {/* Metric Label */}
        <div
          className={cn(
            "text-xs font-bold leading-tight mt-1 line-clamp-1",
            isDark ? "text-stone-100" : "text-foreground/90"
          )}
          title={label}
        >
          {label}
        </div>

        {/* Subtitle / Context */}
        {sub && (
          <div
            className={cn(
              "text-[10px] mt-0.5 uppercase tracking-wider line-clamp-1",
              isDark ? "text-stone-400" : "text-muted-foreground"
            )}
            title={sub}
          >
            {sub}
          </div>
        )}
      </div>

      {/* Bottom Meter Level Bar (Precision Indicator) */}
      <div className="mt-3 pt-2 border-t border-border/40">
        <div className="flex items-center justify-between text-[9px] text-muted-foreground mb-1 font-mono">
          <span>0</span>
          <span className="text-amber-600 font-semibold">{safePercent}%</span>
          <span>100</span>
        </div>
        <div className={cn("h-1 w-full rounded-full overflow-hidden", isDark ? "bg-stone-800" : "bg-stone-200")}>
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-400 rounded-full"
            initial={{ width: "0%" }}
            animate={isInView ? { width: `${safePercent}%` } : { width: "0%" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </div>
  );
};
