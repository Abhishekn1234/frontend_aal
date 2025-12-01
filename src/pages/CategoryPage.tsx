import { useParams } from "react-router-dom";
import { servicesData } from "../components/Services/servicesData";
import { slugify } from "../components/Services/slug";
import { useEffect, useRef, useState } from "react";

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<HTMLElement[]>([]);
  const observers = useRef<IntersectionObserver[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const category = servicesData.find(
    (cat) => slugify(cat.title) === categorySlug
  );

  useEffect(() => {
  setIsVisible(true);

  // Mouse move effect
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", handleMouseMove);

  // Scroll animation observers
  sectionRefs.current.forEach((section) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
      }
    }, { threshold: 0.1, rootMargin: "-50px" });

    observer.observe(section);
    observers.current.push(observer);
  });

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);

    // Cleanup observers
    observers.current.forEach((observer) => observer.disconnect());
    observers.current = [];
  };
}, []);


  // Add ref to each section
const addToRefs = (el: HTMLElement | null) => {
  if (el && !sectionRefs.current.includes(el)) {
    sectionRefs.current.push(el);
  }
};


  if (!category)
    return (
      <p className="p-10 text-xl text-white text-center animate-fade-in">
        Category not found
      </p>
    );

  return (
    <>
      {/* Animated Background Gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-1000"
        style={{
          background: `
            radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(120, 119, 198, 0.15), transparent 80%),
            linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)
          `,
        }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div
        className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-10 min-h-screen font-sans text-white overflow-hidden"
        style={{
          backgroundColor: "#0a192f",
        }}
      >
        {/* ------------------ HEADER ------------------ */}
        <div 
          ref={addToRefs}
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide hover:scale-105 transition-transform duration-500 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-size-200 animate-gradient">
              Brand Consulting
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 blur-xl opacity-30 -z-10 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 opacity-90 mt-8">
            CREATIVE <span className="text-yellow-400 animate-bounce inline-block">STUDIO</span>
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90 leading-relaxed transform hover:scale-105 transition-all duration-300">
            We help businesses create powerful, consistent, and memorable brands 
            that connect with their audience and drive growth.
          </p>
        </div>

        {/* ------------------ EXPERTISE SECTION ------------------ */}
        <div 
          ref={addToRefs}
          className="text-center mb-20 opacity-0 transform translate-y-10"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Brand Consulting Expertise
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400 rounded-full animate-pulse" />
          </div>

          <p className="max-w-3xl mx-auto text-lg opacity-90 leading-relaxed mt-8 text-gray-200">
            Turning ideas into powerful identities, we build strategy, visuals, 
            and messaging that set brands apart.
          </p>
        </div>

        {/* ------------------ FEATURE LIST ------------------ */}
        <div 
          ref={addToRefs}
          className="bg-white/5 p-10 rounded-3xl max-w-4xl mx-auto backdrop-blur-xl 
                      shadow-2xl border border-white/10 hover:border-yellow-400/30
                      hover:shadow-yellow-500/30 transition-all duration-500 opacity-0 transform translate-y-10
                      hover:scale-105 group"
        >
          <div className="flex items-center mb-6">
            <div className="w-3 h-8 bg-yellow-400 rounded-full mr-4 animate-bounce" />
            <h3 className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">
              What We Offer
            </h3>
          </div>

          <ul className="space-y-4 text-lg">
            {["Comprehensive brand audits", "Positioning & messaging strategies", "Visual identity development"].map((item, i) => (
              <li 
                key={i}
                className="hover:text-yellow-300 cursor-pointer transition-all duration-300 transform hover:translate-x-4 
                           flex items-center group/item"
              >
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4 group-hover/item:scale-150 transition-transform" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------ DESCRIPTION ------------------ */}
        <p 
          ref={addToRefs}
          className="max-w-4xl mx-auto mt-16 text-lg opacity-90 text-center leading-relaxed opacity-0 transform translate-y-10
                     bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
        >
          Our brand consulting services are designed to uncover what makes your 
          business unique and communicate it effectively. From defining your 
          brand's voice to creating a visual identity that resonates, we ensure 
          consistency across every touchpoint.
        </p>

        {/* ------------------ SUB SECTIONS ------------------ */}
        <div 
          ref={addToRefs}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto opacity-0 transform translate-y-10"
        >
          {[
            {
              title: "Brand Strategy",
              desc: "We define your vision, mission, and values to align your brand with the right audience.",
              icon: "🎯"
            },
            {
              title: "Visual Identity",
              desc: "Logos, colors, typography — we design a visual identity that stands out.",
              icon: "🎨"
            },
            {
              title: "Messaging & Voice",
              desc: "We craft messaging and tone that create emotional connection and trust.",
              icon: "🗣️"
            },
            {
              title: "Market Positioning",
              desc: "We analyze competitors & your audience to position your brand effectively.",
              icon: "📊"
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg
                         hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 hover:border-yellow-400/50
                         transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                {item.title}
              </h3>
              <p className="opacity-90 group-hover:opacity-100 transition-opacity">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ------------------ SOCIAL PLATFORMS ------------------ */}
        <div 
          ref={addToRefs}
          className="mt-24 text-center opacity-0 transform translate-y-10"
        >
          <h3 className="text-4xl font-bold mb-10 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Platforms We Work On
          </h3>

          <div className="flex flex-wrap justify-center gap-6 text-xl font-semibold">
            {["Instagram", "TikTok", "Facebook", "YouTube", "Twitter", "LinkedIn"].map((platform, i) => (
              <span
                key={i}
                className="px-8 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md
                           hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-black hover:shadow-2xl
                           hover:scale-110 hover:border-yellow-400/50 cursor-pointer transition-all duration-500 
                           transform hover:-translate-y-2 group relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-black">{platform}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </span>
            ))}
          </div>
        </div>

        {/* ------------------ CTA ------------------ */}
        <div 
          ref={addToRefs}
          className="mt-28 text-center opacity-0 transform translate-y-10"
        >
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-size-200 animate-gradient tracking-tighter leading-tight hover:scale-105 transition-transform duration-500 cursor-pointer">
              TIME TO<br />
              <span className="text-stroke">ROAR!</span>
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 blur-2xl opacity-20 -z-10 animate-pulse" />
          </div>
          
          {/* Animated CTA Button */}
          <button className="mt-12 px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-xl rounded-2xl 
                           hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 
                           transform hover:-translate-y-2 animate-pulse hover:animate-none">
            Start Your Journey
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .text-stroke {
          -webkit-text-stroke: 2px #f59e0b;
          paint-order: stroke fill;
        }
      `}</style>
    </>
  );
}