import { motion } from "framer-motion";
import Links from "../../../Layout/Links";

type SectionBlockProps = {
  title: string;
  text: string;
};

const SectionBlock = ({ title, text }: SectionBlockProps) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-base opacity-80">{text}</p>
  </div>
);

export default function Ad() {
  return (
    <div className="w-full min-h-screen text-white relative overflow-hidden">

      {/* -------- FULL SCREEN SECTION 1 -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black"
        >
          CREATIVE <br /> STUDIO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-gray-300"
        >
          We produce high-quality advertising films that communicate your
          brand message effectively and captivate your audience.
        </motion.p>
      </section>

      {/* -------- FULL SCREEN SECTION 2 -------- */}
     <section className="h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-40 gap-10">
  {/* LEFT — TEXT */}
  <div className="md:w-1/2">
    <motion.h2
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-6"
    >
      Ad Film Shoot Expertise
    </motion.h2>

    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="space-y-4 text-xl"
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
    className="md:w-1/2 w-full rounded-2xl shadow-lg object-cover h-80"
  />
</section>


      {/* -------- SECTION 3 -------- */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12">
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

      {/* -------- SECTION 4 -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-6">
        <Links/>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-extrabold mt-10"
        >
          TIME TO UNLEASH!
        </motion.div>
      </section>

    </div>
  );
}
