import { motion } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Virtual() {
  return (
    <section className="w-full text-white overflow-hidden  px-6 sm:px-12 py-24">

      {/* ========================= */}
      {/* SECTION 1 — HERO */}
      {/* ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center space-y-6"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-2">
          Virtual Production
        </h2>

        <p className="text-sm sm:text-base uppercase tracking-widest text-amber-400 mb-6">
          CREATIVE <span className="mx-2">•</span> STUDIO
        </p>

        <p className="text-neutral-300 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
          We combine real-time technology and filmmaking techniques to create immersive virtual
          environments. With LED stages, real-time rendering, motion capture, and dynamic lighting,
          directors can visualize and shoot scenes with complete creative freedom.
        </p>
      </motion.div>

      {/* ========================= */}
      {/* SECTION 2 — EXPERTISE LIST */}
      {/* ========================= */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto lg:mx-0"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left">
              Virtual Production Expertise
            </h3>

            <p className="text-neutral-300 max-w-3xl text-center lg:text-left mb-10 text-lg sm:text-xl">
              Real-time cinematic workflows designed for modern filmmaking.
            </p>

            <ul className="space-y-6 max-w-xl mx-auto lg:mx-0">
              {[
                "Real-time LED stage environments",
                "Interactive pre-visualization",
                "Integration with VFX and CGI"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 text-lg sm:text-xl font-medium"
                >
                  <span className="inline-block w-4 h-4 bg-amber-400 rounded-full mt-1" />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-6 mt-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg shadow-xl transition-transform hover:scale-105"
              >
                Book a Demo
              </a>

              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-neutral-700 hover:border-neutral-500 text-white text-lg transition-all hover:bg-white/10"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.img
            src="/jakob-owens-ZSSuEANDxM0-unsplash.jpg"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full max-h-[700px] object-cover rounded-3xl shadow-2xl border border-white/20"
            alt="Virtual Production"
          />
        </div>
      </section>

      {/* ========================= */}
      {/* SECTION 3 — FEATURE CARDS */}
      {/* ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 px-6 pb-32"
      >
        {/* MAIN CARD */}
        <div className="space-y-6">
          <div className="h-80 flex items-center justify-center rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900/70 to-black/50 border border-white/10 p-8">
            <div className="text-center">
              <p className="text-sm text-neutral-400 mb-2">LED Stage Filming</p>
              <h4 className="text-3xl font-semibold mb-2">Real-time backgrounds & lighting</h4>
              <p className="text-base text-neutral-300 leading-relaxed">
                Film scenes on LED stages with live backgrounds, capture realistic lighting, and
                reduce expensive post-production processes.
              </p>
            </div>
          </div>

          {/* Two small cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-center">
              <p className="text-sm sm:text-base text-neutral-400 font-medium">Real-Time Pre-Visualization</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-center">
              <p className="text-sm sm:text-base text-neutral-400 font-medium">VFX & CGI Integration</p>
            </div>
          </div>

          {/* Footer */}
          {/* Footer */}
{/* Footer */}
{/* Footer */}
{/* Footer */}
<div className="flex flex-col items-center justify-center space-y-6 mt-12 px-4">
  {/* Links */}
  <Links />

  {/* TIME TO UNLEASH text */}
  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-400 tracking-wider drop-shadow-[0_0_15px_rgba(255,191,0,0.8)] text-center whitespace-nowrap">
    TIME TO UNLEASH!
  </span>
</div>





</div>


        {/* SIDE CONTENT */}
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Real-Time Workflow",
              desc: "Directors can see the final scene while shooting — no guesswork, no waiting."
            },
            {
              title: "Cost-Efficient Production",
              desc: "Shoot multiple environments in a single studio — without expensive travel."
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 + idx * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
            >
              <h4 className="text-2xl font-semibold mb-2">{card.title}</h4>
              <p className="text-neutral-300 text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
