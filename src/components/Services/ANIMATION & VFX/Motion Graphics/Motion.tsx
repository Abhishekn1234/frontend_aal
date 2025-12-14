import { motion } from "framer-motion";
import Links from "../../../Layout/Links";

export default function MotionGraphics() {
  return (
    <div className="text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight"
        >
          Motion Graphics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-sm uppercase tracking-widest text-blue-200 mb-6"
        >
          CREATIVE • STUDIO
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-2xl mx-auto text-blue-100 text-lg leading-relaxed"
        >
          We create animated graphics and visual storytelling elements that bring concepts to life and engage audiences. From explainer videos to dynamic branding, our motion graphics simplify ideas and enhance marketing campaigns.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white/10 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">2D & 3D Animation</h3>
              <p className="text-blue-100 text-sm">
                Smooth animations that engage and bring your visuals to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white/10 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">Explainer Videos & Infographics</h3>
              <p className="text-blue-100 text-sm">
                Simplify complex ideas through animated storytelling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-white/10 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">Dynamic Branding Visuals</h3>
              <p className="text-blue-100 text-sm">
                Eye-catching visual elements for marketing, branding, and campaigns.
              </p>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="/shubham-dhage-Hatkch_piQM-unsplash.jpg"
            alt="Animation Visual"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover border border-white/20"
          />
        </div>
      </section>

      {/* Demo / Highlight Sections */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">
        {/* 2D & 3D Animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 text-center bg-white/10 rounded-2xl backdrop-blur-md border border-white/20"
        >
          <p className="text-sm text-blue-200 mb-2">2D & 3D Animations</p>
          <h4 className="text-2xl font-semibold mb-1 text-white">Smooth • Engaging • Modern</h4>
          <p className="text-blue-100 text-sm">
            Create eye-catching animations for branding, marketing, and storytelling.
          </p>
        </motion.div>

        {/* Explainer Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 text-center bg-white/10 rounded-2xl backdrop-blur-md border border-white/20"
        >
          <p className="text-sm text-blue-200">Explainer Videos</p>
        </motion.div>

        {/* Dynamic Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 text-center bg-white/10 rounded-2xl backdrop-blur-md border border-white/20"
        >
          <p className="text-sm text-blue-200">Dynamic Branding</p>
        </motion.div>
      </section>

      <Links />
    </div>
  );
}

