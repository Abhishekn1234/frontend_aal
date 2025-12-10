
import type  { ScrollRevealSectionProps } from "../../types/Home/scroll";
import { motion, useInView} from "framer-motion";
import { staggerContainer } from "./variant";
import { useRef } from "react";

export function ScrollRevealSection({ children, id }: ScrollRevealSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px" 
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={staggerContainer}
      className="scroll-section"
    >
      {children}
    </motion.section>
  );
}