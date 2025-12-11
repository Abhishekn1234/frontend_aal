import { motion } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Portfolio() {
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
          PORTFOLIO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-gray-300"
        >
          We craft visually engaging portfolios that bring your creative work
          to life — beautifully, professionally, and impactfully.
        </motion.p>
      </section>

      {/* -------- SECTION 2 : EXPERTISE -------- */}
   <section className="h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-40 gap-10">
  {/* LEFT — TEXT */}
  <div className="md:w-1/2">
    <motion.h2
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-6"
    >
      Portfolio Expertise
    </motion.h2>

    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="space-y-4 text-xl"
    >
      <li>• Custom portfolio layouts</li>
      <li>• High-quality visuals</li>
      <li>• Interactive & engaging presentation</li>
    </motion.ul>
  </div>

  {/* RIGHT — IMAGE */}
  <motion.img
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    src="/ben-kolde-bs2Ba7t69mM-unsplash.jpg"
    alt="Portfolio"
    className="md:w-1/2 w-full rounded-2xl shadow-lg object-cover h-80"
  />
</section>


      {/* -------- SECTION 3 : FEATURES GRID -------- */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12">

        <FeatureBlock
          title="Custom Layouts"
          text="Tailor-made layouts designed to enhance the presentation of your best work."
        />

        <FeatureBlock
          title="High-Quality Visuals"
          text="Premium imagery and clean visual structure that elevate your portfolio."
        />

        <FeatureBlock
          title="Interactive & Digital Portfolios"
          text="Dynamic digital portfolios built for smooth, immersive navigation."
        />

        <FeatureBlock
          title="Print-Ready Designs"
          text="Beautifully formatted print-ready versions ideal for physical presentations."
        />

      </section>

      {/* -------- SECTION 4 : SOCIALS + UNLEASH -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-6">
       <Links/>

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

    </div>
  );
}

/* -------- Reusable Feature Block -------- */
const FeatureBlock = ({ title, text }: { title: string; text: string }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-base opacity-80">{text}</p>
  </div>
);

