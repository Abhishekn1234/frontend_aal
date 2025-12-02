

import { motion } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Sem() {
  const services = [
    {
      title: "Campaign Strategy",
      desc: "We design a strategy based on your business goals, competition, and target audience to maximize ad performance."
    },
    {
      title: "Ad Creation & Optimization",
      desc: "Craft compelling ad copy and continuously optimize campaigns for clicks, conversions, and ROI."
    },
    {
      title: "Keyword & Audience Targeting",
      desc: "Target the most relevant keywords and audience segments to drive qualified traffic and leads."
    },
    {
      title: "Performance Analysis & Reporting",
      desc: "Track KPIs, analyze campaign performance, and provide actionable insights for continuous improvement."
    }
  ];

  return (
    <div
      className="text-white overflow-x-hidden p-34"
      style={{
        backgroundColor: "#182C48",
        backgroundImage:
          "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-wide"
        >
          Search Engine Marketing (SEM)
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl mt-4 font-semibold text-blue-300"
        >
          CREATIVE STUDIO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mt-6 text-lg opacity-90"
        >
          We create data-driven paid campaigns on Google and Bing to drive targeted traffic and maximize ROI.
        </motion.p>
      </section>

      {/* Expertise Section */}
      <section className="w-full px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4">SEM Expertise</h3>
          <p className="text-lg opacity-90">
            We create data-driven paid campaigns on Google and Bing to drive targeted traffic and maximize ROI.
          </p>
          <ul className="mt-6 space-y-3 text-lg list-disc list-inside opacity-90">
            <li>Google Ads & Bing Ads campaigns</li>
            <li>Targeted audience segmentation</li>
            <li>Conversion tracking & optimization</li>
          </ul>
        </motion.div>
        <img src="/campaign-creators-pypeCEaJeZY-unsplash.jpg"/>
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
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="opacity-80">{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Social Section */}
     <Links/>
      {/* CTA Section */}
      <section className="w-full flex items-center justify-center py-20">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-extrabold tracking-wider text-blue-400"
        >
          TIME TO UNLEASH!
        </motion.h1>
      </section>
    </div>
  );
}