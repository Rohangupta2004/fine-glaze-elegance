import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: string;
  duration?: number; // milliseconds
  className?: string;
}

/**
 * Parses formatted numbers with prefixes & suffixes:
 * "~20,566 SQM" -> { prefix: "~", number: 20566, suffix: " SQM" }
 * "5+ Yrs"      -> { prefix: "", number: 5, suffix: "+ Yrs" }
 * "45+ Years"   -> { prefix: "", number: 45, suffix: "+ Years" }
 * "Up to 540"   -> { prefix: "Up to ", number: 540, suffix: "" }
 * "Award 2024"  -> { prefix: "Award ", number: 2024, suffix: "" }
 */
function parseValueString(val: string): { prefix: string; number: number | null; suffix: string } {
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

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1600,
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const parsed = parseValueString(value);
  // Start at the FINAL value so pre-rendered HTML (and crawlers that do not run
  // JavaScript) read the real figure, never "0".
  const [currentNum, setCurrentNum] = useState<number | null>(parsed.number);
  const [armed, setArmed] = useState(false);

  // After hydration, only numbers that are still below the fold get reset so
  // they can count up when scrolled into view.
  useEffect(() => {
    if (parsed.number === null || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      setCurrentNum(parsed.number > 2000 ? Math.max(0, parsed.number - 100) : 0);
      setArmed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!armed || !isInView || parsed.number === null) return;

    const endVal = parsed.number;
    const startVal = endVal > 2000 ? Math.max(0, endVal - 100) : 0;
    let startTime: number | null = null;
    let animId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCurrentNum(Math.floor(startVal + (endVal - startVal) * ease));
      if (progress < 1) animId = requestAnimationFrame(animate);
      else setCurrentNum(endVal);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [armed, isInView, parsed.number, duration]);

  if (parsed.number === null) {
    return <span className={className}>{value}</span>;
  }

  const shown = currentNum ?? parsed.number;
  // Years such as "2024" must not get a thousands separator.
  const formatted = parsed.number >= 1900 && parsed.number <= 2100 ? String(shown) : shown.toLocaleString("en-IN");

  return (
    <span ref={ref} className={`inline-block tabular-nums tracking-tight ${className}`}>
      <span>{parsed.prefix}</span>
      <span>{formatted}</span>
      <span>{parsed.suffix}</span>
    </span>
  );
};
