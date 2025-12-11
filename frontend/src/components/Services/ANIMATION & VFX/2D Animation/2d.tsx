import { motion } from "framer-motion";
import Links from "../../../Layout/Links";

export default function TwoDAnimation() {
  return (
    <div className="w-full min-h-screen text-white relative overflow-hidden">

      {/* -------- SECTION 1 : HERO -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black"
        >
          2D ANIMATION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-gray-300"
        >
          We bring ideas, characters, and stories to life with expressive,
          engaging, and emotionally driven animation.
        </motion.p>
      </section>

      {/* -------- SECTION 2 : EXPERTISE -------- */}
     <section className="h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-40 gap-10">
  
  {/* LEFT — TEXT */}
  <div className="flex-1">
    <motion.h2
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-6"
    >
      2D Animation Expertise
    </motion.h2>

    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="space-y-4 text-xl"
    >
      <li>• Character animation & storytelling</li>
      <li>• Explainer & promotional videos</li>
      <li>• Educational & training content</li>
    </motion.ul>
  </div>

  {/* RIGHT — IMAGE */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="flex-1"
  >
    <img
      src="/dominic-kurniawan-suryaputra-kMrKo0_QsII-unsplash.jpg"
      alt="2D Animation"
      className="rounded-2xl shadow-lg w-full object-cover"
    />
  </motion.div>

</section>


      {/* -------- SECTION 3 : FEATURE GRID -------- */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12">

        <FeatureBlock
          title="Character Animation"
          text="Expressive and emotional character-driven stories brought to life with fluid motion."
        />

        <FeatureBlock
          title="Explainer & Promo Videos"
          text="Clear, engaging animations designed to communicate ideas instantly."
        />

        <FeatureBlock
          title="Educational Animation"
          text="Simplified visuals that make learning engaging, fun, and easy to understand."
        />

        <FeatureBlock
          title="Digital & Social Media Formats"
          text="Optimized animations for YouTube, Instagram, TikTok, and micro-content platforms."
        />

      </section>

      {/* -------- SECTION 4 : SOCIALS + UNLEASH -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-8 text-xl font-semibold"
        >
          <span>Instagram</span>
          <span>TikTok</span>
          <span>Facebook</span>
          <span>YouTube</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-extrabold mt-10"
        >
          TIME TO UNLEASH!
        </motion.div>
      </section>
<Links/>
    </div>
  );
}

/* -------- Reusable Block Component -------- */
const FeatureBlock = ({ title, text }: { title: string; text: string }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-base opacity-80">{text}</p>
  </div>
);
