import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Links from "../../../Layout/Links";

interface MousePosition {
  x: number;
  y: number;
}

export default function IndustrialProductDesign() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
 console.log(mousePosition);
  // Properly typed array of refs
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        },
        { threshold: 0.15, rootMargin: "-50px" }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div
      className="text-white px-6 py-24 overflow-hidden relative font-sans"
      style={{
        backgroundColor: "#182C48",
        backgroundImage:
          "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* SECTION 1 — Main Heading */}
        <div
          ref={addToRefs}
          className="text-center mb-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-8 bg-clip-text text-transparent 
                       bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                       animate-gradient-shift uppercase tracking-tight"
          >
            Industrial Design
          </motion.h1>

          <p
            className="text-gray-300 text-xl md:text-2xl text-center max-w-4xl mx-auto 
                       leading-relaxed bg-white/5 backdrop-blur-sm p-8 rounded-3xl 
                       border border-white/10 transition-all duration-500 hover:scale-105"
          >
            We create innovative, functional, and market-ready product designs that balance
            aesthetics, usability, and manufacturability.
          </p>
        </div>

        {/* SECTION 2 — Image and Intro */}
       <div
  ref={addToRefs}
  className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-28 
             opacity-0 translate-y-10 transition-all duration-700"
>
  {/* left image */}
  <div className="relative group">
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
      <img
  src="/isis-franca-hsPFuudRg5I-unsplash.jpg"
  alt="Creative Studio"
  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
/>

    </div>
  </div>

  {/* right text */}
  <div className="space-y-8">
    <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
      Creative Studio
    </h2>

    <p className="text-gray-300 text-xl leading-relaxed p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
      Our industrial and product design services bring ideas to life by merging
      creativity with practicality.
    </p>

    <p className="text-gray-300 text-xl leading-relaxed p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
      We focus on ergonomics, materials, and manufacturing feasibility to create
      stunning and functional products.
    </p>

    <button className="mt-6 px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-2xl hover:scale-110 transition-all">
      Start Your Project
    </button>
  </div>
</div>


        {/* SECTION 3 — Expertise */}
        <div
          ref={addToRefs}
          className="max-w-5xl mx-auto mb-28 text-center opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Design Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Human-centered design approach",
              "Prototyping & 3D modeling",
              "Manufacturing-ready solutions",
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 
                           hover:scale-105 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>
                <p className="text-xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4 — Detailed Services */}
        <div
          ref={addToRefs}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 mb-28 
                     opacity-0 translate-y-10 transition-all duration-700"
        >
          {[
            {
              title: "Concept Development",
              text: "We turn ideas into solid product concepts with sketches and CAD models.",
              img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
            },
            {
              title: "3D Modeling & Prototyping",
              text: "We build accurate 3D models and prototypes for testing.",
              img: "/zmorph-all-in-one-3d-printers-p1m4B-lhS9Y-unsplash.jpg",
            },
            {
              title: "Ergonomics & Usability",
              text: "We design for comfort, safety and ease of use.",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            },
            {
              title: "Manufacturing Support",
              text: "Production-ready specs, materials, and manufacturer guidance.",
              img: "/europeana-zyw3m6kheS8-unsplash.jpg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-3xl overflow-hidden border border-white/10 hover:scale-[1.03] transition-all duration-700"
            >
              <img src={item.img} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 5 — Social */}
        <div
          ref={addToRefs}
          className="text-center py-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-wide mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
             TIME TO UNLEASH!
          </h2>

          <Links/>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
    </div>
  );
}
