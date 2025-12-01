import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function MarketingMaterials() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Cursor Logic
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", moveCursor);

    const interactive = Array.from(
      document.querySelectorAll<HTMLElement>(
        "button, a, [class*='hover'], li, img"
      )
    );

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Scroll Progress Bar
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className="min-h-screen px-6 sm:px-10 pt-32 pb-20 font-sans relative overflow-hidden"
      style={{ backgroundColor: "#182C48",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}
    >
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Glow Background Spheres */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 fixed pointer-events-none z-[100] mix-blend-difference"
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

      {/* HERO */}
      <div className="text-center text-white max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Marketing Materials
        </motion.h1>

        <motion.p
          className="text-xl mt-6 text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We design impactful marketing materials that amplify your brand across
          print and digital platforms.
        </motion.p>
      </div>

      {/* Left Side Image */}
      <motion.div
        className="hidden md:block absolute left-10 top-60"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="https://i.pinimg.com/736x/7e/0c/ed/7e0ced823e2cd5e9b2d7c0b9f90c6d3a.jpg"
          className="w-64 rounded-2xl shadow-2xl border border-white/20"
        />
      </motion.div>

      {/* Expertise */}
      <div className="mt-32 text-white max-w-3xl ml-auto pr-4">
        <motion.h2
          className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Marketing Materials Expertise
        </motion.h2>

        <motion.p
          className="text-gray-300 mt-6 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          We design impactful materials that strengthen your brand identity.
        </motion.p>

        <ul className="mt-8 space-y-4 text-gray-200 text-lg">
          {[
            "Custom designs for print & digital",
            "Consistent branding across all assets",
            "High-quality, conversion-focused visuals",
          ].map((item, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ x: 8, color: "#67e8f9" }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full" /> {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Description */}
      <motion.div
        className="mt-20 max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          Our designs include brochures, flyers, ads, social creatives, email
          templates, and everything required to elevate your brand.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-24 max-w-6xl mx-auto">
        {[
          {
            title: "Print Collateral",
            text: "Brochures, flyers, posters & catalogs designed to impress.",
            img: "https://i.pinimg.com/736x/a8/51/94/a85194cbb44e0d3f8b9c5ca7a76412d4.jpg",
          },
          {
            title: "Digital Marketing Assets",
            text: "Ad creatives, social visuals & banners for conversions.",
            img: "https://i.pinimg.com/736x/53/bc/e3/53bce3dfc356589d81e79e0ca3c14620.jpg",
          },
          {
            title: "Presentation Design",
            text: "Professional pitch decks for impact.",
            img: "https://i.pinimg.com/736x/0b/7d/c0/0b7dc0b97b2f3f8ad1ef75621e0e581d.jpg",
          },
          {
            title: "Event & Promotional Materials",
            text: "Booths, merchandise & promotional branding.",
            img: "https://i.pinimg.com/736x/ce/71/5a/ce715a998ab437f3ad8947d74fde1865.jpg",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-900/80 p-6 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
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

            <p className="text-gray-300 mt-3 group-hover:text-gray-200">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Final Section */}
      <div className="mt-32 text-center text-white">
        <div className="text-gray-400 mb-10 flex justify-center gap-6 tracking-widest text-lg">
          {["INSTAGRAM", "TIKTOK", "FACEBOOK", "YOUTUBE"].map((p) => (
            <span
              key={p}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {p}
            </span>
          ))}
        </div>

        <motion.h1
          className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          TIME TO UNLEASH!
        </motion.h1>
      </div>
    </div>
  );
}

