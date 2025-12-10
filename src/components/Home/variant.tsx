
import type { Variants } from "framer-motion";
 export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.95
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};