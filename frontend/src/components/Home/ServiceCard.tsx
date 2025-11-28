import type { ServiceCardProps } from "../../types/Home/scroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ENHANCED SERVICE CARD COMPONENT */
export function ServiceCard({ title, description, onSpeakClick }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const hoverBgColor = "rgba(49, 130, 246, 0.5)"; // Tailwind blue-500 with opacity

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left border border-white/20 shadow-lg transition-all duration-300 cursor-pointer"
      whileHover={{
        scale: 1.05,
        y: -5,
        backgroundColor: hoverBgColor,
      }}
    >
      <h3 className="font-semibold text-cyan-300 mb-2">{title}</h3>
      <p className="text-white/80 mb-4">{description}</p>
      <button
        onClick={onSpeakClick}
        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300"
      >
        Speak to Us
      </button>
    </motion.div>
  );
}
