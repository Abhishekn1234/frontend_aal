import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Ticket } from "lucide-react";

export default function MotionGraphics() {
  return (
    <div className="text-white overflow-x-hidden ">
      {/* Hero Section */}
      <section className="text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-extrabold mb-4"
        >
          Motion Graphics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-amber-300 mb-6"
        >
          CREATIVE • STUDIO
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-2xl mx-auto text-neutral-300"
        >
          We create animated graphics and visual storytelling elements that bring concepts to life and engage audiences. From explainer videos to dynamic branding, our motion graphics simplify ideas and enhance marketing campaigns.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-2">2D & 3D Animation</h3>
          <p className="text-gray-300 text-sm">
            Smooth animations that engage and bring your visuals to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-2">Explainer Videos & Infographics</h3>
          <p className="text-gray-300 text-sm">
            Simplify complex ideas through animated storytelling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6  backdrop-blur-md bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-2">Dynamic Branding Visuals</h3>
          <p className="text-gray-300 text-sm">
            Eye-catching visual elements for marketing, branding, and campaigns.
          </p>
        </motion.div>
      </section>

      {/* Right Visual / Demo Section */}
     <div className="text-white overflow-x-hidden">

      {/* 2D & 3D Animations Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="  p-6 "
        >
          <div className="h-72  flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-sm text-neutral-400 mb-2">2D & 3D Animations</p>
              <h4 className="text-2xl font-semibold mb-1">Smooth • Engaging • Modern</h4>
              <p className="text-xs text-neutral-400">
                Create eye-catching animations for branding, marketing, and storytelling.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Explainer Videos Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl  text-center"
        >
          <p className="text-xs text-neutral-400">Explainer Videos</p>
        </motion.div>
      </section>

      {/* Dynamic Branding Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6  text-center"
        >
          <p className="text-xs text-neutral-400">Dynamic Branding</p>
        </motion.div>
      </section>

      {/* Social + CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center justify-center gap-6">
            <Instagram className="w-6 h-6 cursor-pointer hover:text-amber-400 transition" />
            <Ticket className="w-6 h-6 cursor-pointer hover:text-amber-400 transition" />
            <Facebook className="w-6 h-6 cursor-pointer hover:text-amber-400 transition" />
            <Youtube className="w-6 h-6 cursor-pointer hover:text-amber-400 transition" />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-block px-6 py-3 cursor-pointer text-black font-semibold  text-center"
          >
            TIME TO UNLEASH!
          </motion.div>
        </motion.div>
      </section>
    </div>
    </div>
  );
}
