import { motion, type Variants } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Mobile() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <section className="w-full min-h-screen p-26 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">Mobile Experience</h1>
          <h2 className="text-xl md:text-2xl text-blue-300 uppercase mb-8">Creative Studio</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We design and optimize mobile experiences for apps and websites, focusing on usability, performance, and engagement.
          </p>
        </motion.div>

        {/* Expertise Section */}
      <section className="py-20 px-4">
  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

    {/* LEFT TEXT SECTION */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="space-y-6"
    >
      <h3 className="text-3xl md:text-4xl font-semibold">Mobile Experience Expertise</h3>
      <p className="text-gray-300 max-w-3xl">
        We design and optimize mobile experiences for apps and websites, focusing on usability, performance, and engagement.
      </p>
      <ul className="space-y-3 text-gray-200">
        <li>• Optimized mobile interfaces</li>
        <li>• High-performance mobile apps</li>
        <li>• Seamless cross-device experience</li>
      </ul>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.img
      src="/jakub-zerdzicki-jSQCLQA99Og-unsplash.jpg"
      alt="Mobile experience design illustration"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full rounded-xl shadow-lg object-cover"
    />
  </div>
</section>


        {/* Description Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          <p>
            Our mobile experience services ensure that your apps and mobile websites deliver exceptional usability and performance. We focus on intuitive navigation, responsive design, and fast-loading experiences to keep users engaged. By combining design expertise with performance optimization, we create mobile experiences that drive user satisfaction and retention.
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
            { title: "Mobile-First Design", desc: "Design interfaces that prioritize mobile users while ensuring compatibility across all devices." },
            { title: "High-Performance Apps", desc: "Develop apps and mobile sites optimized for speed, responsiveness, and smooth interactions." },
            { title: "Cross-Device Consistency", desc: "Ensure seamless experiences across phones, tablets, and other devices for consistent branding." },
            { title: "User Testing & Optimization", desc: "Gather feedback and continuously optimize mobile interfaces to enhance engagement and usability." },
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
      <Links/>

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
