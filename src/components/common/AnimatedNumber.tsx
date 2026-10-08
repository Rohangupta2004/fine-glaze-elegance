import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

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
  const [currentNum, setCurrentNum] = useState(0);

  useEffect(() => {
    if (!isInView || parsed.number === null) return;

    const endVal = parsed.number;
    // For large numbers like 2024, start from 2000 for a snappy finish, otherwise from 0
    const startVal = endVal > 2000 ? Math.max(0, endVal - 100) : 0;
    let startTime: number | null = null;
    let animId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic: rapid acceleration, smooth deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(startVal + (endVal - startVal) * ease);

      setCurrentNum(val);

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setCurrentNum(endVal);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isInView, parsed.number, duration]);

  if (parsed.number === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <motion.span
      ref={ref}
      className={`inline-block tabular-nums tracking-tight ${className}`}
      initial={{ opacity: 0.4, y: 4 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <span>{parsed.prefix}</span>
      <span>{isInView ? currentNum.toLocaleString() : "0"}</span>
      <span>{parsed.suffix}</span>
    </motion.span>
  );
};
