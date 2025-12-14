import { motion } from "framer-motion";
import Links from "../../../Layout/Links";

type SectionBlockProps = {
  title: string;
  text: string;
};

const SectionBlock = ({ title, text }: SectionBlockProps) => (
  <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 shadow-lg flex flex-col justify-between h-full">
    <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
    <p className="text-sm md:text-base text-gray-300 opacity-90">{text}</p>
  </div>
);

export default function Ad() {
  return (
    <div className="w-full min-h-screen text-white relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">

      {/* -------- HERO SECTION -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Pre-heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
          
        >
          Ad Film Studio
        </motion.h1>

        {/* Main Heading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl font-semibold text-gray-400 mb-2"
        >
          CREATIVE <span className="text-blue-400">STUDIO</span>
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed"
        >
          We produce high-quality advertising films that communicate your
          brand message effectively and captivate your audience.
        </motion.p>
      </section>

      {/* -------- AD FILM EXPERTISE SECTION -------- */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-40 gap-10">
        {/* LEFT — TEXT */}
        <div className="md:w-1/2 space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ad Film Shoot Expertise
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-3 text-lg md:text-xl text-gray-300"
          >
            <li>• Creative concept development</li>
            <li>• Professional filming & direction</li>
            <li>• Post-production & editing</li>
          </motion.ul>
        </div>

        {/* RIGHT — IMAGE */}
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="/brands-people-br2HgQuvq6I-unsplash.jpg"
          alt="Ad Film Shoot"
          className="md:w-1/2 w-full rounded-2xl shadow-2xl border border-white/20 object-cover h-80"
        />
      </section>

      {/* -------- FEATURE CARDS -------- */}
      <section className="py-12 px-6 md:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <SectionBlock
          title="Concept & Storyboarding"
          text="Develop creative concepts and storyboards to plan shots for maximum impact."
        />
        <SectionBlock
          title="Filming & Direction"
          text="Execute professional shoots using advanced cameras, lighting, and direction techniques."
        />
        <SectionBlock
          title="Post-Production"
          text="Edit and enhance videos with color grading, motion graphics, and sound design."
        />
        <SectionBlock
          title="Distribution & Formats"
          text="Deliver optimized ad films for TV, web, and social media platforms."
        />
      </section>

      {/* -------- SOCIALS + CTA -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-6">
        <Links/>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mt-10 text-blue-400"
        >
          TIME TO UNLEASH!
        </motion.div>
      </section>
    </div>
  );
}
