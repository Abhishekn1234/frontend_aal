import { motion, type Variants } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Commerce() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <section className="w-full min-h-screen overflow-x-hidden text-white py-24 px-4 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-2">Commerce Experience</h2>
          <p className="text-purple-400 uppercase tracking-widest text-sm lg:text-base mb-4">CREATIVE STUDIO</p>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
            We design engaging, user-friendly e-commerce experiences that boost conversions and enhance customer satisfaction.
          </p>
        </motion.div>

        {/* Expertise Section */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">

            {/* LEFT — TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="space-y-3"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white">Commerce Experience Expertise</h3>
              <ul className="space-y-2 text-gray-400 text-sm lg:text-base">
                <li>• Optimized checkout flows</li>
                <li>• Personalized shopping journeys</li>
                <li>• Seamless cross-platform experience</li>
              </ul>
            </motion.div>

            {/* RIGHT — IMAGE */}
            <motion.img
              src="/COMMERCE EXPERIENCE.jpg"
              alt="Commerce Experience"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full rounded-xl shadow-2xl object-cover"
            />
          </div>
        </section>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center text-gray-300 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto"
        >
          Our commerce experience services focus on creating e-commerce platforms that are intuitive, fast, and visually appealing, ensuring smooth navigation and increased conversion rates.
        </motion.p>

        {/* Social Links */}
        <div className="mt-10 flex justify-center">
          <Links />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center mt-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-400">TIME TO UNLEASH!</h2>
        </motion.div>

      </div>
    </section>
  );
}
