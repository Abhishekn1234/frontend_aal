import { motion, type Variants } from "framer-motion";

export default function Web() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <section className="w-full min-h-screen text-white p-27 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">Website Design</h1>
          <h2 className="text-xl md:text-2xl text-blue-300 uppercase mb-8">Creative Studio</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We design modern, visually appealing websites that reflect your brand and provide an exceptional user experience.
          </p>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-semibold">Website Design Expertise</h3>
          <p className="text-gray-300 max-w-3xl">
            We design modern, visually appealing websites that reflect your brand and provide an exceptional user experience.
          </p>
          <ul className="space-y-3 text-gray-200">
            <li>• Custom website layouts</li>
            <li>• Responsive & mobile-friendly</li>
            <li>• Brand-aligned visual design</li>
          </ul>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          <p>
            Our website design services focus on creating beautiful and functional websites. We ensure that every design element aligns with your brand identity and provides a smooth user experience. From concept to final design, we craft websites that are visually appealing, responsive, and optimized for performance across all devices.
          </p>
        </motion.div>

        {/* Subsections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {[
            { title: "Custom Layouts & Design", desc: "Create unique, brand-aligned website layouts tailored to your business goals." },
            { title: "Responsive & Mobile-Friendly", desc: "Ensure your website looks and functions perfectly on desktops, tablets, and mobile devices." },
            { title: "Brand-Aligned Visuals", desc: "Design graphics, color schemes, and typography that reflect your brand’s identity." },
            { title: "User-Centered Experience", desc: "Focus on usability and navigation to keep visitors engaged and drive conversions." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex gap-6 text-gray-300 text-lg justify-center flex-wrap"
        >
          {["Instagram", "TikTok", "Facebook", "YouTube"].map((platform) => (
            <motion.div
              key={platform}
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-semibold"
            >
              {platform}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center py-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-400 tracking-wider uppercase">
            Time to Unleash!
          </h2>
        </motion.div>

      </div>
    </section>
  );
}

