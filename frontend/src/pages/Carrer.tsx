import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function Career() {
  // const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-white font-sans relative overflow-hidden"  style={{
              backgroundColor: "#182C48",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}>
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: cursorPos.x - 12, y: cursorPos.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-4xl mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
            Let your skills make a difference
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            Join Aalizah Technologies and unleash your skills to create meaningful impact. We offer a dynamic work environment where you can challenge the status quo, learn and grow, and be part of building something great. Take your career to the next level and join us today.
          </p>
        </motion.div>

        

        {/* How to Apply */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            How to Apply
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
            If you're passionate about innovation and want to be part of a forward-thinking digital team, we’d love to hear from you.
          </p>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            📧 Send your resume to:{" "}
            <span className="text-blue-600 font-semibold">
              aalizahtechnologies@gmail.com, careers@aalizahtechnologies.com
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

