import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { fadeUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "../components/Home/variant";
import { ScrollProgress } from "../components/Home/scrollprogress";
import { ScrollDownIndicator } from "../components/Home/ScrollDownIndicator";
import { VideoPlayer } from "../components/Home/VideoPlayer";
import { ScrollRevealSection } from "../components/Home/ScrollReveal";
import { servicesData } from "../components/Services/servicesData";
import HeroLogo from "./HeroLogo";
const DARK_GRADIENT_BG = {
  backgroundColor: "#182C48",
  backgroundImage:
    "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
};
// backgroundColor: "#020b1c",
//   backgroundImage: `
//     radial-gradient(
//       circle at 70% 40%,
//       rgba(59,130,246,0.25),
//       rgba(2,11,28,0.9) 60%
//     ),
//     linear-gradient(
//       135deg,
//       #020b1c 0%,
//       #061b3a 40%,
//       #020b1c 100%
//     )
//   `,
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden relative">
      <ScrollProgress />

      {/* HERO SECTION - BLACK */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="relative w-full min-h-screen flex mt-10 items-center justify-center py-20 md:py-28 px-4 sm:px-6 text-center overflow-hidden"
        style={DARK_GRADIENT_BG}
      >
        {/* Background Video */}
        <video
          src="/IMG_0593.MOV"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#0a192f]/70 to-black/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-2">
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg uppercase"
          >
            Empowering Businesses with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Digital Innovation
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 opacity-90 leading-relaxed max-w-2xl mx-auto text-white/90 text-[18px]"
          >
            Premium IT solutions that elevate your brand, optimize operations,
            and fast-track your digital growth.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300 drop-shadow-lg"
          >
            # Your Vision, Our Technology
          </motion.p>

          <div className="mt-6">
            <HeroLogo />
          </div>
        </div>

        <ScrollDownIndicator />
      </motion.section>

      {/* ABOUT US - WHITE */}
      <ScrollRevealSection id="about-section">
        <section className="max-w-8xl mx-auto py-20 md:py-28 px-4 sm:px-6 relative" style={{ backgroundColor: "#fff" }}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
            {/* Text Content */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Us</span>
              </h2>
              <div className="space-y-4">
                {[
                  "At Aalizah Technologies, we are passionate about transforming ideas into innovative digital solutions. We specialize in web development, digital marketing, and IT services for modern businesses.",
                  "Our team combines creativity and strategy to deliver measurable results that drive your business forward in the digital landscape.",
                  "We believe in building long-term partnerships and providing solutions that not only meet but exceed our clients' expectations."
                ].map((text, idx) => (
                  <motion.p
                    key={idx}
                    variants={scaleIn}
                    className="bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-6 rounded-3xl border border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 text-gray-800 hover:translate-y-[-2px]"
                  >
                    {text.split("Aalizah Technologies").map((part, i) =>
                      i === 1 ? <span key={i} className="font-semibold text-cyan-500">Aalizah Technologies</span> : part
                    )}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Icon Cards */}
            <motion.div variants={fadeInRight} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "🚀", title: "Innovation", desc: "Cutting-edge solutions" },
                { icon: "💡", title: "Strategy", desc: "Data-driven approach" },
                { icon: "⭐", title: "Quality", desc: "Premium deliverables" },
                { icon: "🤝", title: "Partnership", desc: "Long-term relationships" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-3xl text-center border border-gray-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-400 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl md:text-5xl mb-3 text-cyan-500">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-lg hover:text-cyan-500 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* SERVICES - BLACK */}
    <ScrollRevealSection id="services-section">
        <section
          className="w-full py-20 md:py-28 px-4 sm:px-6 relative"
          style={DARK_GRADIENT_BG}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            >
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                We Provide
              </span>
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                >
                  <img
                    src={service.image}
                    className="h-48 w-full object-cover"
                  />
                  <h3 className="text-lg font-bold text-center py-3">
                    {service.title}
                  </h3>
                  <ul className="p-4 text-sm space-y-1">
                    {service.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </ScrollRevealSection>


      {/* WHY CHOOSE US - WHITE */}
      <ScrollRevealSection id="why-choose-us">
        <section className="py-20 md:py-32 px-4 sm:px-6 relative" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-blue-800"
            >
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Aalizah Technologies</span>
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Innovation at Core", desc: "We leverage the latest technologies to create forward-thinking solutions." },
                { title: "Expert Team", desc: "Our skilled professionals bring years of experience and expertise." },
                { title: "Client-Centric Approach", desc: "We tailor our services to meet your specific business needs." },
                { title: "Quality & Reliability", desc: "We maintain the highest standards in all deliverables." },
                { title: "End-to-End Solutions", desc: "From concept to deployment, we cover all your digital needs." },
                { title: "Trusted Partnerships", desc: "We build lasting relationships based on trust and transparency." },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeUp} className="p-6 md:p-8 rounded-2xl bg-blue-50 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer" whileHover={{ scale: 1.02, y: -5 }}>
                  <CheckCircle className="text-cyan-500 mb-4 md:mb-6 size-6 md:size-8 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-blue-700 group-hover:text-cyan-500 transition-colors duration-300">{item.title}</h3>
                  <p className="text-blue-600/80 leading-relaxed text-sm md:text-base group-hover:text-blue-800 transition-colors duration-300">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* VIDEO SECTION - BLACK */}
      <ScrollRevealSection id="video-section">
        <section
          className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden"
          style={DARK_GRADIENT_BG}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-[#0a192f]/70 to-black/80" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            >
              See Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Digital Marketing
              </span>
            </motion.h2>

            <VideoPlayer />

            <motion.p
              variants={fadeUp}
              className="text-center mt-8 text-white/80 max-w-2xl mx-auto"
            >
              Watch how our strategies transform businesses and drive results.
            </motion.p>
          </div>
        </section>
      </ScrollRevealSection>
      {/* CLIENTS - WHITE */}
      <motion.div variants={fadeUp} className="mt-16 md:mt-20 relative z-10" style={{ backgroundColor: "#fff" }}>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-800">
          OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">CLIENTS</span>
        </h3>
        <div className="overflow-hidden w-full py-4">
          <motion.div className="flex gap-10" animate={{ x: ["0%", "-100%"] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
            {["/5.svg","/6.svg","/7.svg","/8.svg","/9.svg","/10.svg","/11.svg","/12.svg"].concat(["/5.svg","/6.svg","/7.svg","/8.svg","/9.svg","/10.svg","/11.svg","/12.svg"]).map((img, i) => (
              <img key={i} src={img} className="h-32 md:h-36 object-contain filter brightness-90 hover:brightness-100 transition duration-300" alt={`Client ${i + 1}`} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
