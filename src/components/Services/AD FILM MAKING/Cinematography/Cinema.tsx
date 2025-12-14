import { motion } from "framer-motion";
import Links from "../../../Layout/Links";

export default function Cinematography() {
  return (
    <div className="w-full min-h-screen text-white relative overflow-hidden">

      {/* -------- SECTION 1 : HERO -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black"
        >
          CINEMATOGRAPHY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-xl text-base md:text-lg text-gray-300"
        >
          We create cinematic visuals that tell powerful stories and elevate
          your brand through stunning film production.
        </motion.p>
      </section>

      {/* -------- SECTION 2 : EXPERTISE LIST -------- */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">

          {/* LEFT — TEXT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Cinematography Expertise
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-3 text-lg md:text-xl text-gray-300"
            >
              <li>• Story-driven video production</li>
              <li>• Professional lighting & camera work</li>
              <li>• Post-production editing & color grading</li>
            </motion.ul>
          </div>

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/kyle-loftus-FtQE89f3EXA-unsplash.jpg"
              alt="Cinematography"
              className="rounded-2xl w-full shadow-2xl border border-white/10 object-cover"
            />
          </motion.div>

        </div>
      </section>
       <br/><br/>
      {/* -------- SECTION 3 : FEATURE GRID -------- */}
      <section className="py-12 px-6 md:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">

        <FeatureBlock
          title="Storyboarding & Concept"
          text="Develop clear concepts and cinematic storyboards to ensure a powerful narrative."
        />

        <FeatureBlock
          title="Professional Filming"
          text="Capture stunning footage using expert cinematography, lighting, and camera movement."
        />

        <FeatureBlock
          title="Post-Production & Editing"
          text="Enhance visuals with editing, color grading, sound design, and motion graphics."
        />

        <FeatureBlock
          title="Distribution & Formats"
          text="Deliver optimized video formats for social media, digital ads, or broadcast."
        />

      </section>

      {/* -------- SECTION 4 : SOCIALS + UNLEASH -------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-6">
        <Links/>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mt-10"
        >
          TIME TO UNLEASH!
        </motion.div>
      </section>

    </div>
  );
}

/* -------- Reusable Block Component -------- */
const FeatureBlock = ({ title, text }: { title: string; text: string }) => (
  <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:scale-[1.03] transition-all duration-300 shadow-lg">
    <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
    <p className="text-sm md:text-base opacity-80">{text}</p>
  </div>
);

