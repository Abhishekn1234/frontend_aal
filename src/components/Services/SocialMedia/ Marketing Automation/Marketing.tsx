import { motion } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Marketing() {
  const services = [
    {
      title: "Email Marketing Automation",
      desc: "Create personalized automated email campaigns to nurture leads and engage customers."
    },
    {
      title: "CRM Integration",
      desc: "Connect marketing efforts with CRM systems to manage leads, track interactions, and measure success."
    },
    {
      title: "Lead Nurturing & Scoring",
      desc: "Identify the most engaged leads and deliver relevant content to increase conversion likelihood."
    },
    {
      title: "Workflow Automation",
      desc: "Automate repetitive tasks like follow-ups, social posts, and segmentation to save time."
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
          className="text-5xl md:text-6xl font-extrabold tracking-wider uppercase mb-3"
        >
          Marketing Automation
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold tracking-wide text-blue-400 mb-6"
        >
          Creative Studio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          We implement automated workflows to nurture leads, engage customers, and drive conversions efficiently.
        </motion.p>
      </section>

      {/* Expertise Section */}
     <section className="w-full px-6 py-20">

  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

    {/* LEFT — TEXT + IMAGE */}
    <div className="space-y-8">

      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold uppercase"
      >
        Marketing Automation Expertise
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-300 max-w-xl"
      >
        We implement automated workflows to nurture leads, engage customers, and drive conversions efficiently.
      </motion.p>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/melanie-deziel-fSWQPBxqClg-unsplash.jpg"
          alt="Marketing Automation"
          className="rounded-2xl w-full shadow-2xl border border-white/20 object-cover"
        />
      </motion.div>

    </div>

    {/* RIGHT — CARDS */}
    <div className="grid grid-cols-1 gap-6">
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white/10 rounded-2xl backdrop-blur shadow-xl"
        >
          <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
          <p className="text-gray-300 text-sm">{service.desc}</p>
        </motion.div>
      ))}
    </div>

  </div>
</section>


      {/* Platforms / Social Section */}
      <section className="w-full py-20 px-6 text-center">
       <Links/>

        {/* CTA Section */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-7xl font-extrabold tracking-wider text-blue-400 uppercase"
        >
          TIME TO UNLEASH!
        </motion.h1>
      </section>
    </div>
  );
}

