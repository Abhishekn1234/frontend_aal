import { motion, type Variants } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Logo() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <section className="w-full min-h-screen text-white py-24 px-4 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Logo Design</h1>
          <p className="text-purple-400 uppercase tracking-widest text-sm lg:text-base mb-6">CREATIVE STUDIO</p>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
            We create memorable, visually appealing logos that reflect your brand identity and values.
          </p>
        </motion.div>

        {/* 2-Column Main Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">Logo Design Expertise</h2>
              <ul className="space-y-2 text-gray-400 text-sm lg:text-base">
                <li>• Custom logo concepts</li>
                <li>• Brand-aligned visuals</li>
                <li>• Vector & high-resolution formats</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              Our logo design services focus on crafting logos that resonate with your audience and define 
              your brand identity. We combine creativity with strategy to design logos that are versatile, 
              memorable, and scalable across all mediums.
            </p>
          </motion.div>

          {/* RIGHT — Image */}
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

        {/* Subsections / Features */}
        <div className="mt-16 space-y-8 max-w-4xl mx-auto">
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
              className="bg-gray-800 bg-opacity-30 p-5 rounded-xl shadow-md"
            >
              <h3 className="text-lg lg:text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm lg:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center">
          <Links />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-400">TIME TO UNLEASH!</h2>
        </motion.div>

      </div>
    </section>
  );
}
