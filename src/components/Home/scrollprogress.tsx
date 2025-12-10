import { useEffect,useState } from "react";
import { motion } from "framer-motion";
export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 w-full h-1 bg-gray-700/50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div 
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", damping: 25 }}
      />
    </motion.div>
  );
}