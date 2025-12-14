import { motion } from "framer-motion";
import Links from "../../../Layout/Links";

type FeatureBlockProps = {
  title: string;
  text: string;
};

const FeatureBlock = ({ title, text }: FeatureBlockProps) => (
  <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 shadow-lg flex flex-col justify-between h-full">
    <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
    <p className="text-sm md:text-base text-gray-300 opacity-90">{text}</p>
  </div>
);

export default function Portfolio() {
  return (
    <div className="w-full min-h-screen text-white relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">

      {/* -------- HERO SECTION -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
        >
          PORTFOLIO
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl md:text-3xl font-extrabold text-blue-400 mt-2"
        >
          Creative Studio
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed"
        >
          We craft visually engaging portfolios that bring your creative work
          to life — beautifully, professionally, and impactfully.
        </motion.p>
      </section>

      {/* -------- EXPERTISE SECTION -------- */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-40 gap-10">
        {/* LEFT — TEXT */}
        <div className="md:w-1/2 space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Portfolio Expertise
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-3 text-lg md:text-xl text-gray-300"
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
          src="/PORTFOLIO.jpg"
          alt="Portfolio"
          className="md:w-1/2 w-full rounded-2xl shadow-2xl border border-white/20 object-cover h-72"
        />
      </section>

      {/* -------- FEATURE CARDS -------- */}
      <section className="py-12 px-6 md:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

      {/* -------- SOCIALS + CTA -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-6">
        <Links/>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mt-10 text-blue-400"
        >
          TIME TO UNLEASH!
        </motion.div>
      </section>
    </div>
  );
}
