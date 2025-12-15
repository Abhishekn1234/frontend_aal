
import { useEffect, useState } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";


export function MouseFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Add new trail point
      setTrailPositions((prev) => [
        ...prev.slice(-10), // keep last 10 points
        { x: e.clientX, y: e.clientY },
      ]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rainbowColors = [
    "rgba(255,0,0,0.3)",
    "rgba(255,165,0,0.3)",
    "rgba(255,255,0,0.3)",
    "rgba(0,255,0,0.3)",
    "rgba(0,0,255,0.3)",
    "rgba(75,0,130,0.3)",
    "rgba(238,130,238,0.3)",
  ];

  return (
    <>
      {/* Rainbow smoke trails */}
      {trailPositions.map((pos, idx) => (
        <motion.div
          key={idx}
          className="fixed w-8 h-8 rounded-full pointer-events-none z-40"
          style={{
            x: pos.x,
            y: pos.y,
            translateX: "-50%",
            translateY: "-50%",
            background: rainbowColors[idx % rainbowColors.length],
            filter: "blur(40px)",
          }}
          animate={{
            scale: [0.5, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: 0,
          }}
        />
      ))}

      {/* Mouse follower logo */}
      <motion.div
        className="fixed w-12 h-12 md:w-16 md:h-16 pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <img
          src="/Aaliza logo white.svg"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>
     
    </>
  );
}
