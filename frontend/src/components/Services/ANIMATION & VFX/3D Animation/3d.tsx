import { motion } from "framer-motion";

export default function ThreeDAnimation() {
  return (
    <section className="text-white w-full overflow-hidden">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center py-28 px-6 relative"
      >
   

        <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
          3D Animation
        </motion.h1>

        <motion.h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mt-4 text-[#e6f5f7]">
          CREATIVE <br /> STUDIO
        </motion.h2>

        <p className="max-w-3xl mx-auto mt-8 text-sm md:text-base text-gray-300 tracking-wide leading-relaxed">
          WE CREATE PHOTOREALISTIC 3D ANIMATIONS FOR FILMS, ADVERTISEMENTS,
          PRODUCT DEMOS, AND VIRTUAL EXPERIENCES.
        </p>
      </motion.div>

      {/* ============================= */}
      {/* SECTION 1 - EXPERTISE */}
      {/* ============================= */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center px-6 pb-36 relative"
      >
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* LEFT: IMAGE */}
        <div className="rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          <img
            src="/images/3d-anim-work.jpg"
            alt="3D Artist Working"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* RIGHT: TEXT */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            3D Animation Expertise
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8">
            We create photorealistic 3D animations for films, advertisements,
            product demos, and virtual experiences.
          </p>

          <ul className="space-y-6 text-lg">
            <li className="flex gap-3 items-start">
              <span className="text-purple-500 text-xl">✔</span>
              <span className="text-gray-300">3D modeling & rendering</span>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-purple-500 text-xl">✔</span>
              <span className="text-gray-300">Character & environment animation</span>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-purple-500 text-xl">✔</span>
              <span className="text-gray-300">Interactive & cinematic visualizations</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* ============================= */}
      {/* SECTION 2 - PROCESS */}
      {/* ============================= */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pb-36 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Our 3D Animation Process</h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          A refined workflow that ensures world-class cinematic quality.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "1. Concept Design", text: "Ideation, reference boards, story planning." },
            { title: "2. Modeling & Animation", text: "High-detail modeling, texturing & animation." },
            { title: "3. Rendering & Delivery", text: "Cinematic lighting and final renders." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-2xl p-8 backdrop-blur-md border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ============================= */}
      {/* SECTION 3 - WHY US */}
      {/* ============================= */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pb-40"
      >
        <h2 className="text-4xl font-bold mb-10 text-center">Why Choose Our Studio?</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-3">Photorealistic Output</h3>
            <p className="text-gray-300">We deliver cinematic visuals with high-end rendering quality.</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-3">Fast Delivery Pipeline</h3>
            <p className="text-gray-300">Optimized workflow ensures fast and reliable delivery.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
