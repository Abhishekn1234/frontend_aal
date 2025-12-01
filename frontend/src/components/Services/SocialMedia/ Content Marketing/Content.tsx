import { motion } from "framer-motion";

export default function Content() {
  const services = [
    {
      title: "Content Strategy",
      desc: "We develop a roadmap for content creation, distribution, and promotion tailored to your business goals."
    },
    {
      title: "Blog & Article Writing",
      desc: "Engaging and SEO-friendly articles to educate your audience and improve organic traffic."
    },
    {
      title: "Social Media Content",
      desc: "Create visually appealing posts and campaigns that resonate with your audience."
    },
    {
      title: "Content Performance Tracking",
      desc: "Measure engagement, traffic, and conversions to optimize content for maximum impact."
    }
  ];

  return (
    <div
      className="text-white overflow-x-hidden p-26"
      style={{
        backgroundColor: "#182C48",
        backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-wide mb-4"
        >
          Content Marketing
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-blue-300 uppercase mb-6"
        >
          Creative Studio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-3xl text-lg md:text-xl text-gray-300 mb-12"
        >
          We create and distribute valuable, relevant content to attract, engage, and retain your target audience.
        </motion.p>
      </section>

      {/* Expertise Section */}
      <section className="w-full px-6 py-16 max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-4"
        >
          Content Marketing Expertise
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 max-w-3xl mb-8"
        >
          We create and distribute valuable, relevant content to attract, engage, and retain your target audience.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-3 text-gray-200 mb-12"
        >
          <li>• Blog & article creation</li>
          <li>• Social media content</li>
          <li>• Content strategy & planning</li>
        </motion.ul>
      </section>

      {/* Detailed Services Section */}
      <section className="w-full px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a192f] p-8 rounded-2xl shadow-lg"
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-2">{service.title}</h4>
            <p className="opacity-80">{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Social Section */}
      <section className="w-full py-16 flex flex-col items-center gap-4 text-lg opacity-90">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Instagram</p>
          <p>TikTok</p>
          <p>Facebook</p>
          <p>YouTube</p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex items-center justify-center py-20">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-7xl font-extrabold tracking-wider text-blue-400 uppercase"
        >
          Time to Unleash!
        </motion.h1>
      </section>
    </div>
  );
}

