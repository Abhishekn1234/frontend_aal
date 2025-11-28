import type { ReactNode } from "react";
export interface ScrollRevealSectionProps {
  children: ReactNode;
  id: string;
}



export interface ServiceCardProps {
  title: string;
  icon?: string; // optional emoji/icon
  image: string; // required image path
  items?: string[]; // optional list of service points
  description?: string; // optional, in case you want a short description
  onSpeakClick: () => void; // click handler
}
