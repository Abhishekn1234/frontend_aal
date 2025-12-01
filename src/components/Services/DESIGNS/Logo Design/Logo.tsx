import { motion,type Variants } from "framer-motion";

export default function Logo() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <div className="w-full min-h-screen  text-white p-46">
      
      {/* Fixed Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-3xl font-bold mb-8"
      >
        Logo Design
      </motion.div>

      {/* Scrollable Content */}
      <div className="space-y-12 max-w-4xl mx-auto">

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-xl font-semibold"
        >
          CREATIVE STUDIO
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          We create memorable, visually appealing logos that reflect your brand identity and values.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold mb-2">Logo Design Expertise</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Custom logo concepts</li>
            <li>• Brand-aligned visuals</li>
            <li>• Vector & high-resolution formats</li>
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
          Our logo design services focus on crafting logos that resonate with your audience and define 
          your brand identity. We combine creativity with strategy to design logos that are versatile, 
          memorable, and scalable across all mediums.
        </motion.p>

        {/* Subsections */}
        {[
          { title: "Custom Logo Concepts", desc: "Create unique logo designs tailored to your brand story and identity." },
          { title: "Brand-Aligned Visuals", desc: "Ensure every design element, color, and font reflects your brand values and style." },
          { title: "Scalable & Versatile", desc: "Deliver logos in vector formats suitable for all applications, from digital to print." },
          { title: "Multiple Revisions & Finalization", desc: "Collaborate with clients to refine designs until the final logo perfectly matches the vision." },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="space-y-1"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}

        {/* Social Icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex gap-4 text-lg font-semibold mt-8"
        >
          {["Instagram", "TikTok", "Facebook", "YouTube"].map((platform) => (
            <motion.div
              key={platform}
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg"
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
          className="text-center mt-12 text-4xl font-extrabold text-blue-400"
        >
          TIME TO UNLEASH!
        </motion.div>
      </div>
    </div>
  );
}

