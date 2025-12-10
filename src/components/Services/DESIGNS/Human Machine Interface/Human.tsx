import { motion, type Variants } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Human() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <section className="w-full  overflow-x-hidden p-46 text-white ">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl font-bold mb-8"
        >
          Human-Machine Interface
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
          We design intuitive interfaces that allow seamless interaction 
          between humans and machines, enhancing usability and efficiency.
        </motion.p>

        {/* Expertise Section */}
        <section className="py-20 px-4">
  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

    {/* LEFT — TEXT */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="space-y-4"
    >
      <h2 className="text-2xl font-bold mb-2">Human-Machine Interface Expertise</h2>

      <ul className="space-y-2 text-gray-300">
        <li>• Intuitive control panels</li>
        <li>• Interactive dashboards</li>
        <li>• User-centered design</li>
      </ul>
    </motion.div>

    {/* RIGHT — IMAGE */}
    <motion.img
      src="/geraltyichen-g6uW0Pz_d8A-unsplash.jpg"
      alt="Human-Machine Interface"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full rounded-xl shadow-lg object-cover"
    />

  </div>
</section>


        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-gray-300 leading-relaxed"
        >
          Our Human-Machine Interface (HMI) services focus on creating 
          interfaces that improve interaction between users and systems. 
          From industrial control panels to digital dashboards, we design 
          intuitive and user-friendly solutions that reduce errors, improve 
          efficiency, and enhance the overall experience.
        </motion.p>

        {/* Subsections */}
        {[
          { title: "Intuitive Control Panels", desc: "Design interfaces that allow users to operate complex systems easily and efficiently." },
          { title: "Interactive Dashboards", desc: "Visualize critical data and system metrics through clear, actionable dashboards." },
          { title: "User-Centered Design", desc: "Design every interaction based on user behavior, ergonomics, and task efficiency." },
          { title: "System Feedback & Alerts", desc: "Provide real-time feedback, notifications, and alerts to guide user actions effectively." },
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
       <Links/>

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
