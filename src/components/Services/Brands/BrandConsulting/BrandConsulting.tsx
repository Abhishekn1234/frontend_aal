import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
interface MousePosition {
  x: number;
  y: number;
}
export default function BrandConsulting() {
  const [isHovered, setIsHovered] = useState(false);
    console.log(isHovered);
  const expertisePoints = [
    "Comprehensive brand audits with detailed market analysis",
    "Positioning & messaging strategies that resonate",
    "Visual identity development that tells your story",
  ];

  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
 const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section) => {
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-slide-up");
              (entry.target as HTMLElement).style.opacity = "1";
              (entry.target as HTMLElement).style.transform =
                "translateY(0)";
            }
          },
          { threshold: 0.3 }
        );

        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observers.forEach((ob) => ob.disconnect());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };
  const cards = [
    {
      title: "Brand Strategy",
      text: "We define your vision, mission, and core values to ensure your brand deeply resonates with your target audience.",
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Visual Identity",
      text: "From logos to color palettes & typography — we craft visual systems that express your brand personality.",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Messaging & Voice",
      text: "We craft messaging frameworks & tone of voice systems that build emotional connections with customers.",
      icon: "🗣️",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Market Positioning",
      text: "We analyze competition & behavior to position your brand for maximum visibility and relevance.",
      icon: "📊",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div
      className="text-white px-6 py-24 overflow-hidden relative"
      style={{
        backgroundColor: "#182C48",
        backgroundImage:
          "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
      }}
      
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* MAIN HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-size-200 animate-gradient-shift"
            whileHover={{ scale: 1.05 }}
          >
            Brand Consulting
          </motion.h1>

          <motion.p
            className="text-white/90 text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 cursor-pointer"
            whileHover={{
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
              y: -5,
            }}
          >
            We help businesses create powerful, consistent, and memorable brands
            that connect with their audience and drive growth.
          </motion.p>
        </motion.div>

        {/* EXPERTISE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Brand Consulting Expertise
          </h2>

          <ul className="space-y-6 mb-16 max-w-2xl mx-auto">
            {expertisePoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/50 hover:bg-white/10 hover:scale-105 transition-all duration-500 group cursor-pointer"
                whileHover={{
                  x: 10,
                  boxShadow: "0 15px 30px rgba(168, 85, 247, 0.2)",
                }}
              >
                <motion.span
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"
                  whileHover={{ rotate: 180 }}
                />
                <span className="text-lg group-hover:text-purple-300 transition-colors duration-300">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-700 overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-500">
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* IMAGE + TEXT SECTION */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform perspective-1000">
              <motion.img
                src="https://via.placeholder.com/800x500.png?text=Brand+Consulting"
                alt="Brand Consulting"
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-3xl transition-all duration-500" />
              <motion.div
                className="absolute top-4 right-4 bg-purple-500/20 backdrop-blur-sm rounded-lg p-3 border border-purple-400/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨ Brand Magic
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Transform Your Brand
            </h2>
            <p className="text-white/90 text-xl leading-relaxed p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:bg-white/10 cursor-pointer">
              A powerful brand is the foundation of business growth. We craft
              identity systems that position your business for long-term success —
              visually and strategically.
            </p>
            <p className="text-white/90 text-xl leading-relaxed p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-400/30 transition-all duration-500 hover:bg-white/10 cursor-pointer">
              From strategy to storytelling, our team helps you make a memorable,
              lasting impact in your market.
            </p>

            <motion.button
              className="mt-8 px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
              whileHover={{
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Brand Journey
            </motion.button>
          </motion.div>
        </motion.div>
         <section
          ref={addToRefs}
          className="h-screen flex flex-col items-center justify-center gap-6
          opacity-0 translate-y-10 transition-all duration-700 text-center"
        >
          <span className="text-3xl text-pink-300">Instagram</span>
          <span className="text-3xl text-pink-300">TikTok</span>
          <span className="text-3xl text-pink-300">Facebook</span>
          <span className="text-3xl text-pink-300">YouTube</span>
        </section>

        {/* 6️⃣ FINAL CTA */}
        <section
          ref={addToRefs}
          className="h-screen flex items-center justify-center
          opacity-0 translate-y-10 transition-all duration-700"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-pink-400 tracking-widest drop-shadow-lg animate-pulse">
            TIME TO UNLEASH!
          </h1>
        </section>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
