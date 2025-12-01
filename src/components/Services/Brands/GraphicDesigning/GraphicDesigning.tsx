// import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export default function GraphicDesign() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

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

  return (
    <div
      className="min-h-screen text-white overflow-hidden relative font-sans"
      style={{
        backgroundColor: "#182C48",
        backgroundImage:
          "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
      }}
    >

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 1️⃣ HERO SECTION */}
        <section
          ref={addToRefs}
          className="h-screen flex flex-col items-center justify-center 
          opacity-0 translate-y-10 transition-all duration-700 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Graphic Design <br />
            <span className="text-pink-400">CREATIVE</span> <br />
            STUDIO
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-300 max-w-3xl">
            We craft visually compelling designs that communicate your brand’s message
            with clarity, creativity, and impact.
          </p>
        </section>

        {/* 2️⃣ EXPERTISE INTRO */}
        <section
          ref={addToRefs}
          className="h-screen flex flex-col items-center justify-center 
          opacity-0 translate-y-10 transition-all duration-700 text-center px-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold">Graphic Design</h2>
          <h3 className="text-2xl md:text-4xl font-semibold text-pink-400 mt-2">
            Graphic Design Expertise
          </h3>

          <p className="mt-6 text-gray-300 max-w-3xl text-lg">
            We craft visually compelling designs that communicate your brand’s message
            with clarity, creativity, and impact.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300 text-lg">
            <li>• Brand-focused visuals</li>
            <li>• Creative and unique concepts</li>
            <li>• Print & digital design expertise</li>
          </ul>
        </section>

        {/* 3️⃣ DESCRIPTION */}
        <section
          ref={addToRefs}
          className="h-screen flex items-center justify-center 
          opacity-0 translate-y-10 transition-all duration-700 text-center px-8"
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            Our graphic design services are built around creating stunning visuals
            that capture attention and build strong brand recognition. From logos and
            marketing materials to digital campaigns and packaging, we design with
            purpose. Every element is crafted to match your brand identity and appeal
            to your target audience.
          </p>
        </section>

        {/* 4️⃣ SERVICE CARDS */}
        <section
          ref={addToRefs}
          className="h-screen flex items-center justify-center
          opacity-0 translate-y-10 transition-all duration-700 px-6"
        >
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl">

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/10">
              <h3 className="text-2xl font-semibold text-pink-300 mb-4">
                Logo & Brand Identity
              </h3>
              <p className="text-gray-300">
                We design logos, color palettes, and typography systems that define
                your brand’s essence.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/10">
              <h3 className="text-2xl font-semibold text-pink-300 mb-4">
                Marketing Collateral
              </h3>
              <p className="text-gray-300">
                Brochures, posters, business cards — we create designs that elevate
                your message.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/10">
              <h3 className="text-2xl font-semibold text-pink-300 mb-4">
                Digital & Social Media
              </h3>
              <p className="text-gray-300">
                Eye-catching social media creatives and website visuals.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/10">
              <h3 className="text-2xl font-semibold text-pink-300 mb-4">
                Packaging Design
              </h3>
              <p className="text-gray-300">
                Functional and attractive packaging that boosts shelf appeal.
              </p>
            </div>
          </div>
        </section>

        {/* 5️⃣ SOCIAL LABELS */}
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


      {/* Animations */}
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
