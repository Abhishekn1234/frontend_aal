import { motion } from "framer-motion";

import Links from "../../../Layout/Links";

export default function Vfxstory() {
  return (
    <div
      className="text-white overflow-x-hidden relative"
      style={{
        backgroundColor: "#0a192f",
        backgroundImage:
          "radial-gradient(circle at 20% 25%, rgba(88, 28, 135, 0.2) 0%, transparent 25%), " +
          "radial-gradient(circle at 80% 70%, rgba(28, 58, 112, 0.2) 0%, transparent 25%)",
      }}
    >
      {/* Hero Section */}
      <section className="w-full py-32 px-6 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-wide"
        >
          VFX Storyboarding
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-blue-300 font-light uppercase tracking-widest"
        >
          Creative Studio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          We plan every visual effect shot meticulously through detailed storyboards to ensure efficiency and creative clarity.
        </motion.p>
      </section>

      {/* Expertise Section */}
     <section className="w-full py-20 px-6">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-center mb-12"
  >
    VFX Storyboarding Expertise
  </motion.h3>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

    {/* LEFT — ALL CARDS */}
    <div className="grid sm:grid-cols-1 gap-8">
      {[
        {
          title: "Shot Planning",
          text: "Define each scene and shot with detailed sketches and notes for VFX integration.",
        },
        {
          title: "Pre-Visualization",
          text: "Create digital mock-ups and pre-visualization sequences for complex VFX shots.",
        },
        {
          title: "Production Efficiency",
          text: "Streamline VFX production by clearly communicating visual requirements to the team.",
        },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="p-6 bg-white/10 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 flex flex-col items-start text-left"
        >
          <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
          <p className="text-gray-300 text-sm">{item.text}</p>
        </motion.div>
      ))}
    </div>

    {/* RIGHT — IMAGE */}
    <motion.img
      src="/mw-FWp9yrgW658-unsplash.jpg"  // ← replace with your image
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-full max-h-[700px] object-cover rounded-2xl shadow-2xl"
      alt="Storyboarding"
    />
  </div>
</section>


      {/* Description Section */}
      <section className="w-full py-16 px-6 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          Our VFX storyboarding services allow filmmakers and content creators to visualize complex scenes before production. Detailed storyboards help plan VFX shots, camera angles, and effects placement, saving time and ensuring creative alignment. This pre-visualization step ensures the final production meets creative expectations with minimal revisions.
        </motion.p>
      </section>

      <Links/>

      {/* CTA Section */}
      <section className="w-full py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-block px-10 py-6  text-4xl md:text-5xl font-extrabold text-white shadow-2xl"
        >
          TIME TO UNLEASH!
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-gray-300 text-lg md:text-xl"
        >
          Visualize and plan your VFX shots for flawless execution.
        </motion.p>
      </section>
    </div>
  );
}

