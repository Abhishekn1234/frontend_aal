import type { ReactNode } from "react";
export interface ScrollRevealSectionProps {
  children: ReactNode;
  id: string;
}



 export interface ServiceCardProps {
 
  title: string;
  description: string;
  onSpeakClick: () => void;
}