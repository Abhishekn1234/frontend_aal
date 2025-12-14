import { motion, type Variants, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Links from "../../../Layout/Links";

const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Visual() {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const headingControls = useAnimation();
  useEffect(() => { if (headingInView) headingControls.start("visible"); }, [headingControls, headingInView]);

  const [descriptionRef, descriptionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const descriptionControls = useAnimation();
  useEffect(() => { if (descriptionInView) descriptionControls.start("visible"); }, [descriptionControls, descriptionInView]);

  const [listRef, listInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const listControls = useAnimation();
  useEffect(() => { if (listInView) listControls.start("visible"); }, [listControls, listInView]);

  const [buttonsRef, buttonsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const buttonsControls = useAnimation();
  useEffect(() => { if (buttonsInView) buttonsControls.start("visible"); }, [buttonsControls, buttonsInView]);

  const [bottomRef, bottomInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const bottomControls = useAnimation();
  useEffect(() => { if (bottomInView) bottomControls.start("visible"); }, [bottomControls, bottomInView]);

  return (
    <section className="text-white px-6 sm:px-12 py-24 space-y-32 overflow-x-hidden">
      
      {/* Heading Section */}
      <motion.div
        ref={headingRef}
        initial="hidden"
        animate={headingControls}
        variants={fadeUp}
        className="max-w-3xl mx-auto text-center mt-20"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Visual Effects Animation
        </h2>
        <p className="text-sm sm:text-base uppercase tracking-widest text-blue-300">
          CREATIVE <span className="mx-2">•</span> STUDIO
        </p>
      </motion.div>

      {/* Description + Video Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — DESCRIPTION TEXT */}
          <motion.div
            ref={descriptionRef}
            initial="hidden"
            animate={descriptionControls}
            variants={fadeUp}
            className="max-w-4xl text-left text-blue-100 space-y-4"
          >
            <p className="text-lg sm:text-xl leading-relaxed">
              We create stunning animated visual effects for films, commercials, and digital
              content to elevate storytelling. Our VFX animation combines compositing, motion
              graphics, special effects, and seamless integration with live-action footage.
            </p>
            <p className="text-blue-200 text-sm sm:text-base">
              Transform your vision into cinematic experiences that captivate audiences.
            </p>
          </motion.div>

          {/* RIGHT — VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:scale-105 transition-transform duration-500"
          >
            <video
              src="/From KlickPin CF Starry Night Sky Wallpaper.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features / List Section */}
      <motion.ul
        ref={listRef}
        initial="hidden"
        animate={listControls}
        variants={fadeUp}
        className="max-w-2xl mx-auto space-y-4 text-center"
      >
        {[
          "Compositing & motion graphics",
          "Special effects animation",
          "Integration with live-action footage",
        ].map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-center justify-center gap-3 text-sm sm:text-base font-medium"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * idx }}
          >
            <span className="inline-block w-3 h-3 bg-amber-400 rounded-full" />
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {/* Buttons Section */}
      <motion.div
        ref={buttonsRef}
        initial="hidden"
        animate={buttonsControls}
        variants={fadeUp}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Project
        </motion.a>

        <motion.a
          href="#portfolio"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/40 text-white text-lg hover:bg-white/10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Portfolio
        </motion.a>
      </motion.div>

      {/* Social / Links Section */}
      <Links />

      {/* Bottom Heading */}
      <motion.h3
        ref={bottomRef}
        initial={{ y: 30, opacity: 0 }}
        animate={bottomControls}
        variants={fadeUp}
        className="text-5xl sm:text-6xl font-bold leading-tight text-center text-amber-400 mt-16"
      >
        TIME TO UNLEASH!
      </motion.h3>
    </section>
  );
}
