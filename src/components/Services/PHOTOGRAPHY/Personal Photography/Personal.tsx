import { motion, type Variants } from "framer-motion";
import { Camera, Users, Sparkles, BookOpen } from "lucide-react";
import Links from "../../../Layout/Links";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export default function Personal() {
  return (
    <div
      className="text-white overflow-x-hidden p-26"
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
        <h1 className="text-5xl font-extrabold tracking-wide">Personal Photography</h1>
        <h2 className="mt-4 text-xl text-gray-300 font-light uppercase tracking-widest">
          Creative Studio
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-gray-300 leading-relaxed">
          We capture moments that matter, creating stunning personal photographs that tell your unique story.
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
    Personal Photography Expertise
  </h3>

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">

  {/* LEFT SIDE – CARDS IN 2 COLUMNS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    {/* Card 1 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
    >
      <Camera className="w-12 h-12 mb-4 text-white" />
      <h4 className="text-xl font-semibold mb-2">Portrait & Lifestyle Photography</h4>
      <p className="text-gray-300 text-sm">
        Capture authentic and beautiful moments that reflect your personality and style.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
    >
      <Users className="w-12 h-12 mb-4 text-white" />
      <h4 className="text-xl font-semibold mb-2">Event Coverage</h4>
      <p className="text-gray-300 text-sm">
        Professional coverage of birthdays, weddings, or personal celebrations.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
    >
      <Sparkles className="w-12 h-12 mb-4 text-white" />
      <h4 className="text-xl font-semibold mb-2">Editing & Retouching</h4>
      <p className="text-gray-300 text-sm">
        Professional post-processing, color correction, and retouching for perfect results.
      </p>
    </motion.div>

    {/* Card 4 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
    >
      <BookOpen className="w-12 h-12 mb-4 text-white" />
      <h4 className="text-xl font-semibold mb-2">Personalized Albums</h4>
      <p className="text-gray-300 text-sm">
        Beautifully crafted albums or digital galleries showcasing your photographs.
      </p>
    </motion.div>

  </div>

  {/* RIGHT SIDE – SINGLE IMAGE */}
  <motion.img
    src="/hector-falcon-obkwHqTCeWA-unsplash.jpg"
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="w-full h-full max-h-[700px] object-cover rounded-2xl shadow-xl"
    alt="Photography"
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
        <h1 className="text-5xl font-extrabold tracking-widest uppercase">Time to unleash!</h1>
      </motion.section>
    </div>
  );
}

