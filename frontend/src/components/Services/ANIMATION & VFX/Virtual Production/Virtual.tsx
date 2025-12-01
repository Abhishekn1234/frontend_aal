import { motion } from "framer-motion";

export default function Virtual() {
  return (
    <section className=" p-6 text-white w-full overflow-hidden">

      {/* ========================= */}
      {/* SECTION 1 — HERO */}
      {/* ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center py-24 px-6"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Virtual Production
        </h2>

        <p className="text-sm uppercase tracking-widest text-amber-300 mb-6">
          CREATIVE <span className="mx-2">•</span> STUDIO
        </p>

        

        <p className="text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          We combine real-time technology and filmmaking techniques to create
          immersive virtual environments for productions. With LED stages,
          real-time rendering, motion capture, and dynamic lighting,
          directors can visualize and shoot scenes with complete creative freedom.
        </p>
      </motion.div>

      {/* ========================= */}
      {/* SECTION 2 — EXPERTISE LIST */}
      {/* ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 pb-24"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Virtual Production Expertise
        </h3>

        <p className="text-neutral-300 max-w-3xl mx-auto text-center mb-10">
          Real-time cinematic workflows designed for modern filmmaking.
        </p>

        <ul className="space-y-6 max-w-xl mx-auto">
          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <span className="inline-block w-3 h-3 bg-amber-400 rounded-full mt-2" />
            <span className="text-gray-300 text-lg">
              Real-time LED stage environments
            </span>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <span className="inline-block w-3 h-3 bg-amber-400 rounded-full mt-2" />
            <span className="text-gray-300 text-lg">
              Interactive pre-visualization
            </span>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <span className="inline-block w-3 h-3 bg-amber-400 rounded-full mt-2" />
            <span className="text-gray-300 text-lg">
              Integration with VFX and CGI
            </span>
          </motion.li>
        </ul>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-black font-semibold shadow-md"
          >
            Book a Demo
          </a>

          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-neutral-700 hover:border-neutral-500 text-sm"
          >
            View Case Studies
          </a>
        </div>
      </motion.div>

      {/* ========================= */}
      {/* SECTION 3 — FEATURE CARDS */}
      {/* ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pb-32 grid gap-10 lg:grid-cols-2 items-start"
      >
        {/* MAIN CARD */}
        <div className="rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 p-6 shadow-2xl border border-neutral-800">
          <div className="h-72 rounded-xl bg-black/60 border border-neutral-800 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-sm text-neutral-400 mb-2">LED Stage Filming</p>
              <h4 className="text-2xl font-semibold mb-1">
                Real-time backgrounds & lighting
              </h4>
              <p className="text-xs text-neutral-400">
                Film scenes on LED stages with live backgrounds, capture realistic
                lighting, and reduce expensive post-production processes.
              </p>
            </div>
          </div>

          {/* Two small cards */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800">
              <p className="text-xs text-neutral-400">Real-Time Pre-Visualization</p>
            </div>

            <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800">
              <p className="text-xs text-neutral-400">VFX & CGI Integration</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between text-sm text-neutral-400">
            <div className="flex items-center gap-3">
              <span>Instagram</span>
              <span>•</span>
              <span>TikTok</span>
              <span>•</span>
              <span>Facebook</span>
              <span>•</span>
              <span>YouTube</span>
            </div>
            <div className="text-xs">  TIME TO UNLEASH!</div>
          </div>
        </div>

        {/* SIDE CONTENT */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
          >
            <h4 className="text-xl font-semibold mb-2">Real-Time Workflow</h4>
            <p className="text-neutral-300 text-sm">
              Directors can see the final scene while shooting — no guesswork, no waiting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
          >
            <h4 className="text-xl font-semibold mb-2">Cost-Efficient Production</h4>
            <p className="text-neutral-300 text-sm">
              Shoot multiple environments in a single studio — without expensive travel.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
