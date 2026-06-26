/**
 * Framer Motion animation presets for scroll-triggered reveals.
 *
 * Usage:
 *   import { motion } from "framer-motion";
 *   import { fadeUp, stagger } from "@/hooks/useMotion";
 *
 *   <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
 *     <motion.div variants={stagger}>
 *       <motion.h2 variants={fadeUp}>Title</motion.h2>
 *       <motion.p  variants={fadeUp}>Text</motion.p>
 *     </motion.div>
 *   </motion.div>
 */
import type { Variants } from "framer-motion";

/** Fade up from 30px below */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Fade in without movement */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Slide in from the left */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Slide in from the right */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Scale up from 95% */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Stagger children with a delay between each */
export const stagger = (staggerDelay = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

/** Default viewport settings — animate once when 15% visible */
export const viewport = { once: true, amount: 0.15 } as const;
