import { motion,type  Variants } from "framer-motion";

export default function Commerce() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <section className="w-full min-h-screen overflow-x-hidden  text-white p-46">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl font-bold mb-8"
        >
          Commerce Experience
        </motion.div>

        {/* Studio Label */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-xl font-semibold"
        >
          CREATIVE STUDIO
        </motion.p>

        {/* Introduction */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          We design engaging, user-friendly e-commerce experiences that boost
          conversions and enhance customer satisfaction.
        </motion.p>

        {/* Expertise Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold mb-2">Commerce Experience Expertise</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Optimized checkout flows</li>
            <li>• Personalized shopping journeys</li>
            <li>• Seamless cross-platform experience</li>
          </ul>
        </motion.div>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-gray-300 leading-relaxed"
        >
          Our commerce experience services focus on creating e-commerce platforms
          that are intuitive, fast, and visually appealing, ensuring smooth navigation
          and increased conversion rates.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center mt-12 text-4xl font-extrabold text-blue-400"
        >
          TIME TO UNLEASH!
        </motion.div>
      </div>
    </section>
  );
}
