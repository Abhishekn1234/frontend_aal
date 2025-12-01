import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Business() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // -------------------------
  // Custom Cursor Logic
  // -------------------------
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", moveCursor);

    const items = document.querySelectorAll<HTMLElement>(
      "button, a, li, img, [class*='hover'], h1, h2"
    );
    items.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      items.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // -------------------------
  // Scroll Progress Bar
  // -------------------------
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const updateScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (top / height) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className="px-6 sm:px-10 pt-32 pb-20 font-sans relative overflow-hidden"
      style={{
        backgroundColor: "#182C48",
        backgroundImage:
          "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
      }}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Glow Background */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="w-6 h-6 rounded-full fixed pointer-events-none z-[100] bg-gradient-to-r from-cyan-400 to-blue-600 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-white fixed pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 25 }}
      />

      {/* HERO SECTION */}
      <motion.section
        className="text-center text-white max-w-4xl mx-auto py-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
          Business Development
        </h1>
        <p className="text-xl mt-6 text-gray-300 leading-relaxed">
          We help businesses identify opportunities, build partnerships, and scale
          sustainably through tailored strategies and expert guidance.
        </p>
      </motion.section>

      {/* LEFT SIDE IMAGE */}
      <motion.div
        className="hidden md:block absolute left-10 top-[500px]"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="https://i.pinimg.com/736x/d4/ce/47/d4ce47119eccf302d94af1aca85bbff1.jpg"
          className="w-64 rounded-2xl shadow-2xl border border-white/20"
          alt="business development"
        />
      </motion.div>

      {/* EXPERTISE SECTION */}
      <motion.section
        className="mt-32 text-white max-w-3xl ml-auto pr-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
          Business Development Expertise
        </h2>
        <p className="text-gray-300 mt-6 text-lg">
          We help businesses identify opportunities, build partnerships, and scale sustainably.
        </p>

        <ul className="mt-8 space-y-4 text-gray-200 text-lg">
          {[
            "Growth-focused strategies",
            "Partnerships & networking",
            "Data-driven decision making",
          ].map((item, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ x: 10, color: "#67e8f9" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full" /> {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* DESCRIPTION BLOCK */}
      <motion.section
        className="mt-20 max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          Our business development services are designed to fuel long-term growth.
          We identify opportunities, create strategies, and forge partnerships that
          strengthen your market position. From go-to-market planning and competitive
          analysis to relationship building and sales optimization — we ensure your
          business is equipped for sustainable success.
        </p>
      </motion.section>

      {/* SERVICES GRID */}
      <motion.section
        className="grid md:grid-cols-2 gap-8 mt-24 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          {
            title: "Market Research & Analysis",
            text: "Industry insights, competitor studies & customer behavior analysis.",
            img: "https://i.pinimg.com/736x/9f/06/b2/9f06b21fcb45d70f22e77f3dbfcaba45.jpg",
          },
          {
            title: "Growth Strategy",
            text: "Custom growth plans aligned with your goals and market conditions.",
            img: "https://i.pinimg.com/736x/59/7c/48/597c4831d1bb157ccd44fcbb40f19a28.jpg",
          },
          {
            title: "Partnership Development",
            text: "Connect with partners, investors & stakeholders for expansion.",
            img: "https://i.pinimg.com/736x/98/66/9c/98669cfa4918a47254e5f2b2fce2a55f.jpg",
          },
          {
            title: "Sales Enablement",
            text: "Improve conversions with optimized sales systems & powerful pitches.",
            img: "https://i.pinimg.com/736x/db/5a/3d/db5a3dc0aae532a6b3d5d3df15f249b4.jpg",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-900/80 p-6 rounded-2xl border border-white/10"
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02, y: -10 }}
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={item.img}
                className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-all duration-500"
              />
            </div>

            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300">
              {item.title}
            </h3>

            <p className="text-gray-300 mt-3">{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* SOCIALS + FINISH */}
      <motion.section
        className="mt-32 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-gray-400 mb-10 flex justify-center gap-6 tracking-widest text-lg">
          {["Instagram", "TikTok", "Facebook", "YouTube"].map((p) => (
            <span
              key={p}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {p.toUpperCase()}
            </span>
          ))}
        </div>

        <motion.h1
          className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          TIME TO UNLEASH!
        </motion.h1>

        <motion.button
          className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold shadow-xl hover:opacity-90 transition"
          whileHover={{ scale: 1.07 }}
        >
          Let's Talk!
        </motion.button>
      </motion.section>
    </div>
  );
}
