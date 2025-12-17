import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function HeroLogo() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const titleControls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Handle responsive sizing without SSR issues
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsInitialized(true);
    };
    
    // Set initial state immediately
    if (typeof window !== "undefined") {
      checkMobile();
    }
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isInitialized) return; // Wait for initialization
    
    if (inView) {
      console.log("Logo in view - animating to rectangle");
      // Animate logo to rectangle
      controls.start({
        width: isMobile ? "260px" : "750px",
        height: isMobile ? "260px" : "720px",
        borderRadius: "12px",
        opacity: 1,
        transition: { 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.2 // Small delay to ensure state is ready
        },
      });
      
      // Animate title to appear
      titleControls.start({
        opacity: 1,
        y: 0,
        width: isMobile ? "140px" : "220px",
        transition: { 
          duration: 0.6, 
          delay: 0.4, 
          ease: "easeOut" 
        }
      });
    } else {
      console.log("Logo NOT in view - showing as circle");
      // Show as small circle (initial state)
      controls.start({
        width: isMobile ? "100px" : "100px",
        height: isMobile ? "100px" : "110px",
        borderRadius: "50%",
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
      
      // Hide title initially
      titleControls.start({
        opacity: 0,
        y: -20,
        width: isMobile ? "140px" : "220px",
        transition: { duration: 0.3, ease: "easeOut" }
      });
    }
  }, [inView, controls, titleControls, isMobile, isInitialized]);

  // Initial values based on isMobile state
  const initialLogoSize = isMobile ? 100 : 100;
  const initialTitleWidth = isMobile ? 140 : 220;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center w-full m-0 p-0"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        margin: 0,
        padding: 0,
        minHeight: "120px", // Ensure there's space for animation
      }}
    >
      {/* Logo Icon */}
      <motion.img
        src="Aalizah Technology Logo.svg"
        alt="Logo Icon"
        initial={{
          width: `${initialLogoSize}px`,
          height: `${initialLogoSize}px`,
          borderRadius: "50%",
          opacity: 1,
        }}
        animate={controls}
        style={{ 
          objectFit: "contain", 
          display: "block",
          marginBottom: "8px", // Small gap
        }}
      />

      {/* Logo Title */}
      <motion.img
        src="Aalizah title.svg"
        alt="Logo Title"
        initial={{
          width: `${initialTitleWidth}px`,
          height: "auto",
          opacity: 0,
          y: -20,
        }}
        animate={titleControls}
        style={{ 
          objectFit: "contain", 
          display: "block",
        }}
      />
    </div>
  );
}