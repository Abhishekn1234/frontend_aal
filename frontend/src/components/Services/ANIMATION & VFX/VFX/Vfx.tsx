import { motion } from "framer-motion";
import { Film, Monitor, Zap, Layers, Instagram, Facebook, Youtube, Clapperboard } from "lucide-react";

export default function Vfx() {
  return (
    <div
      className="text-white overflow-x-hidden relative"
      style={{
        backgroundColor: "#182C48",
        backgroundImage:
          "radial-gradient(circle at 20% 30%, rgba(88, 28, 135, 0.2) 0%, transparent 25%), " +
          "radial-gradient(circle at 80% 70%, rgba(28, 58, 112, 0.2) 0%, transparent 25%), " +
          "linear-gradient(135deg, #0a192f 0%, #000428 100%)",
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
          VFX & CGI
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
          We provide professional VFX and CGI solutions that enhance storytelling and visual impact for film, commercials, and digital content.
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
          VFX & CGI Expertise
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[{
            icon: Film,
            title: "Compositing & CGI",
            text: "Seamless compositing, 3D integration, and CGI to bring complex visuals to life."
          },{
            icon: Monitor,
            title: "Motion Graphics & Titles",
            text: "High-impact motion graphics, title design, and animated elements for storytelling."
          },{
            icon: Zap,
            title: "Visual Effects Supervision",
            text: "End-to-end VFX supervision, pipeline setup, and on-set support for smooth production."
          },{
            icon: Layers,
            title: "Post-Production & Delivery",
            text: "Color grading, final renders, format delivery, and optimization for broadcast or web."
          }].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 bg-white/10 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 flex flex-col items-start text-left"
            >
              <item.icon className="w-12 h-12 mb-4 text-blue-300" />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Section */}
      <section className="w-full py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-8"
        >
          {[Instagram, Clapperboard, Facebook, Youtube].map((Icon, idx) => (
            <Icon
              key={idx}
              className="w-10 h-10 cursor-pointer text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            />
          ))}
        </motion.div>
      </section>

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
          Bring your vision to life with premium VFX & CGI.
        </motion.p>
      </section>
    </div>
  );
}
