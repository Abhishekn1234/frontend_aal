import { motion, type Variants } from "framer-motion";
import {
  Briefcase,
  Package,
  Megaphone,
  Building2,
 
} from "lucide-react";
import Links from "../../../Layout/Links";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export default function Business() {
  return (
    <div
      className="text-white overflow-x-hidden"
      style={{
        backgroundColor: "#182C48",
        backgroundImage:
          "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
      }}
    >
      {/* Hero Section */}
      <motion.section
        className="w-full py-24 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h1 className="text-5xl font-extrabold tracking-wide">
          Business Photography
        </h1>
        <h2 className="mt-4 text-xl text-gray-300 font-light uppercase tracking-widest">
          Creative Studio
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-gray-300 leading-relaxed">
          We provide professional photography solutions for businesses,
          enhancing brand image and marketing materials.
        </p>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
  className="w-full py-16 px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeUp}
>
  <h3 className="text-3xl font-bold text-center mb-10">
    Business Photography Expertise
  </h3>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">

    {/* LEFT SIDE — CARDS (2 per row) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      {/* Card 1 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
      >
        <Briefcase className="w-12 h-12 mb-4 text-white" />
        <h4 className="text-xl font-semibold mb-2">Corporate Headshots</h4>
        <p className="text-gray-300 text-sm">
          Professional headshots for executives and employees, ideal for websites,
          LinkedIn, and press releases.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
      >
        <Package className="w-12 h-12 mb-4 text-white" />
        <h4 className="text-xl font-semibold mb-2">Product Photography</h4>
        <p className="text-gray-300 text-sm">
          High-quality product photos that highlight features, details, and aesthetics with
          professional lighting setups.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
      >
        <Megaphone className="w-12 h-12 mb-4 text-white" />
        <h4 className="text-xl font-semibold mb-2">Marketing & Commercial</h4>
        <p className="text-gray-300 text-sm">
          Visuals crafted for ad campaigns, brochures, websites, and social media to enhance
          brand presence.
        </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
      >
        <Building2 className="w-12 h-12 mb-4 text-white" />
        <h4 className="text-xl font-semibold mb-2">Team & Office Photography</h4>
        <p className="text-gray-300 text-sm">
          Showcase your company culture, team, and workspace with polished professional imagery.
        </p>
      </motion.div>

    </div>

    {/* RIGHT SIDE — FULL IMAGE */}
    <motion.img
      src="/declan-sun-kudMGsJb38I-unsplash.jpg"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-full max-h-[700px] object-cover rounded-2xl shadow-xl"
      alt="Business Photography"
    />
  </div>
</motion.section>


      {/* Social Icons */}
     <Links/>

      {/* CTA */}
      <motion.section
        className="py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h1 className="text-5xl font-extrabold tracking-widest uppercase">
          Time to unleash!
        </h1>
      </motion.section>
    </div>
  );
}
