import { motion, type Variants, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fadeUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
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

  const [socialRef, socialInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const socialControls = useAnimation();
  useEffect(() => { if (socialInView) socialControls.start("visible"); }, [socialControls, socialInView]);

  const [bottomRef, bottomInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const bottomControls = useAnimation();
  useEffect(() => { if (bottomInView) bottomControls.start("visible"); }, [bottomControls, bottomInView]);

  return (
    <section className="text-white p-46 space-y-16 overflow-x-hidden">
      {/* Heading Section */}
      <motion.div
        ref={headingRef}
        initial="hidden"
        animate={headingControls}
        variants={fadeUp}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Visual Effects Animation
        </h2>
        <p className="text-sm uppercase tracking-widest text-amber-300">
          CREATIVE <span className="mx-2">•</span> STUDIO
        </p>
      </motion.div>

      {/* Description Section */}
      <motion.div
        ref={descriptionRef}
        initial="hidden"
        animate={descriptionControls}
        variants={fadeUp}
        className="max-w-4xl mx-auto text-center text-neutral-300"
      >
        <p>
          We create stunning animated visual effects for films, commercials, and digital content to enhance storytelling. Our VFX animation blends compositing, motion graphics, special effects, and seamless integration with live-action footage.
        </p>
      </motion.div>

      {/* List Section */}
      <motion.ul
        ref={listRef}
        initial="hidden"
        animate={listControls}
        variants={fadeUp}
        className="max-w-2xl mx-auto space-y-3 text-center"
      >
        {[
          "Compositing & motion graphics",
          "Special effects animation",
          "Integration with live-action footage",
        ].map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-center justify-center gap-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * idx }}
          >
            <span className="inline-block w-3 h-3 bg-amber-400 rounded-full" />
            <span className="text-sm">{item}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Buttons Section */}
      <motion.div
        ref={buttonsRef}
        initial="hidden"
        animate={buttonsControls}
        variants={fadeUp}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-black font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Project
        </motion.a>

        <motion.a
          href="#portfolio"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-neutral-700 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Portfolio
        </motion.a>
      </motion.div>

      {/* Social Section */}
      <motion.div
        ref={socialRef}
        initial="hidden"
        animate={socialControls}
        variants={fadeUp}
        className="flex flex-wrap justify-center gap-3 text-sm text-neutral-400"
      >
        <span>Instagram</span>
        <span>•</span>
        <span>TikTok</span>
        <span>•</span>
        <span>Facebook</span>
        <span>•</span>
        <span>YouTube</span>
      </motion.div>

      {/* Bottom Heading */}
      <motion.h3
        ref={bottomRef}
        initial={{ y: 20, opacity: 0 }}
        animate={bottomControls}
        variants={fadeUp}
        className="text-4xl sm:text-5xl font-bold leading-tight text-center text-white mt-12"
      >
        TIME TO UNLEASH!
      </motion.h3>
    </section>
  );
}

