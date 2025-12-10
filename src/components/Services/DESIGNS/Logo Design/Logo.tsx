import { motion, type Variants } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Logo() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <div className="w-full min-h-screen text-white p-36">

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-4xl font-bold mb-12 text-center"
      >
        Logo Design
      </motion.div>

      {/* Main 2-Column Layout */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

        {/* LEFT — TEXT SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-6"
        >
          <p className="text-xl font-semibold">CREATIVE STUDIO</p>

          <p className="text-gray-300">
            We create memorable, visually appealing logos that reflect your brand identity and values.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-3">Logo Design Expertise</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• Custom logo concepts</li>
              <li>• Brand-aligned visuals</li>
              <li>• Vector & high-resolution formats</li>
            </ul>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Our logo design services focus on crafting logos that resonate with your audience and define 
            your brand identity. We combine creativity with strategy to design logos that are versatile, 
            memorable, and scalable across all mediums.
          </p>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src="/onkar-mehta-eVpZxkNY3bw-unsplash.jpg"
            alt="Logo Design"
            className="rounded-2xl w-full shadow-2xl border border-white/20 object-cover"
          />
        </motion.div>
      </div>

      {/* Subsections */}
      <div className="mt-20 space-y-10 max-w-5xl mx-auto">
        {[
          { title: "Custom Logo Concepts", desc: "Unique logo designs tailored to your brand story and identity." },
          { title: "Brand-Aligned Visuals", desc: "Every element reflects your brand values and style." },
          { title: "Scalable & Versatile", desc: "Delivered in vector formats for print & digital." },
          { title: "Multiple Revisions", desc: "We refine the logo until it perfectly matches your vision." },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-1"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <Links/>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-20 text-4xl font-extrabold text-blue-400"
      >
        TIME TO UNLEASH!
      </motion.div>
    </div>
  );
}
