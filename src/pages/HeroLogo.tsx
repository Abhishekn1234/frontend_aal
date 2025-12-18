import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function HeroLogo() {
  const ref = useRef<HTMLImageElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;

      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Trigger when element is within 150px of viewport bottom
      if (top < windowHeight - 150) {
        controls.start({
          width: "clamp(150px, 50vw, 750px)",
          height: "clamp(150px, 50vw, 720px)",
          borderRadius: "12px",
          transition: { duration: 0.6, ease: "easeOut" },
        });
      } else {
        // Optional: shrink back when scrolling out
        controls.start({
          width: "100px",
          height: "110px",
          borderRadius: "50%",
          transition: { duration: 0.6, ease: "easeOut" },
        });
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check in case already visible
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div style={{ display: "flex", justifyContent: "center", minHeight: "70vh",margin:"40px" }}>
      <motion.img
        ref={ref}
        src="Aalizah Technologies.svg"
        alt="Logo"
        initial={{ width: "100px", height: "110px", borderRadius: "50%" }}
        animate={controls}
        style={{ display: "block" }}
      />
    </div>
  );
}





