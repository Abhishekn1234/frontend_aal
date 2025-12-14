import { motion, type Variants } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Human() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <section className="w-full overflow-x-hidden py-24 px-4 lg:px-8 text-white bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-2">Human-Machine Interface</h2>
          <p className="text-purple-400 uppercase tracking-widest text-sm lg:text-base mb-4">CREATIVE STUDIO</p>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
            We design intuitive interfaces that allow seamless interaction between humans and machines, enhancing usability and efficiency.
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
              <h3 className="text-2xl lg:text-3xl font-bold text-white">Human-Machine Interface Expertise</h3>
              <ul className="space-y-2 text-gray-400 text-sm lg:text-base">
                <li>• Intuitive control panels</li>
                <li>• Interactive dashboards</li>
                <li>• User-centered design</li>
              </ul>
            </motion.div>

            {/* RIGHT — IMAGE */}
            <motion.img
              src="/HUMAN MACHINE INTERFACE.jpg"
              alt="Human-Machine Interface"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-70 rounded-xl shadow-2xl object-cover"
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
          Our Human-Machine Interface (HMI) services focus on creating interfaces that improve interaction between users and systems. From industrial control panels to digital dashboards, we design intuitive and user-friendly solutions that reduce errors, improve efficiency, and enhance the overall experience.
        </motion.p>

        {/* Subsections */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            { title: "Intuitive Control Panels", desc: "Design interfaces that allow users to operate complex systems easily and efficiently." },
            { title: "Interactive Dashboards", desc: "Visualize critical data and system metrics through clear, actionable dashboards." },
            { title: "User-Centered Design", desc: "Design every interaction based on user behavior, ergonomics, and task efficiency." },
            { title: "System Feedback & Alerts", desc: "Provide real-time feedback, notifications, and alerts to guide user actions effectively." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="bg-gray-800 bg-opacity-30 p-5 rounded-xl shadow-md"
            >
              <h4 className="text-lg lg:text-xl font-semibold text-white">{item.title}</h4>
              <p className="text-gray-300 text-sm lg:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-10">
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
