import { motion, type Variants } from "framer-motion";
import Links from "../../../../Layout/Links";

export default function Ux() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <section className="w-full min-h-screen text-white p-30 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">UI/UX Design</h1>
          <h2 className="text-xl md:text-2xl text-blue-300 uppercase mb-8">Creative Studio</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We create intuitive and visually stunning interfaces that enhance user experience and engagement across digital platforms.
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
      <h3 className="text-3xl md:text-4xl font-semibold">UI/UX Design Expertise</h3>
      <p className="text-gray-300 max-w-3xl">
        We create intuitive and visually stunning interfaces that enhance user experience and engagement across digital platforms.
      </p>
      <ul className="space-y-3 text-gray-200">
        <li>• User research & personas</li>
        <li>• Wireframes & prototyping</li>
        <li>• Interactive and responsive design</li>
      </ul>
    </motion.div>

    {/* RIGHT IMAGE SECTION */}
    <motion.img
      src="/balazs-ketyi-_x335IZXxfc-unsplash.jpg"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full rounded-xl shadow-lg"
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
            Our UI/UX design services focus on creating seamless experiences that users love. We combine user research, wireframing, and prototyping to design interfaces that are both functional and visually appealing. Every design decision is backed by data and user behavior analysis to ensure maximum usability and engagement.
          </p>
        </motion.div>

        {/* Subsections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-8"
        >
          {[
            { title: "User Research & Analysis", desc: "Understand your audience through research, personas, and usability testing to drive design decisions." },
            { title: "Wireframing & Prototyping", desc: "Create low and high-fidelity prototypes to visualize user journeys and refine designs before development." },
            { title: "Interactive & Responsive Design", desc: "Design interfaces that adapt seamlessly across devices and platforms for a consistent user experience." },
            { title: "User Testing & Feedback", desc: "Iterate designs based on real user feedback to improve usability and engagement." },
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
