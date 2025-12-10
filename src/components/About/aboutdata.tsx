import { type Variants } from "framer-motion";
import { 
 
  HeartHandshake,
 
  Star,
  Shield,
  Zap
} from "lucide-react";
import type { ReactNode } from "react";

// ---------- Animation Variants ----------
export  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

 export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

 export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // ---------- Data ----------
export  const values: { icon: ReactNode; title: string; desc: string }[] = [
    { icon: <Zap className="w-8 h-8" />, title: "Innovation", desc: "Cutting-edge solutions that push boundaries" },
    { icon: <Shield className="w-8 h-8" />, title: "Reliability", desc: "Trusted partnership you can count on" },
    { icon: <Star className="w-8 h-8" />, title: "Excellence", desc: "Uncompromising quality in every deliverable" },
    { icon: <HeartHandshake className="w-8 h-8" />, title: "Partnership", desc: "Collaborative approach to success" }
  ];