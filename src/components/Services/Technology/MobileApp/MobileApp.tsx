import { motion } from "framer-motion";
import  Links from "../../../Layout/Links";

const scrollVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function MobileApp() {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#0a192f",
        backgroundSize: "cover",
        backgroundImage:
          "radial-gradient(circle at 20% 30%, rgba(88, 28, 135, 0.3) 0%, transparent 20%), " +
          "radial-gradient(circle at 80% 60%, rgba(28, 58, 112, 0.3) 0%, transparent 20%), " +
          "radial-gradient(circle at 50% 80%, rgba(135, 40, 180, 0.3) 0%, transparent 20%)",
      }}
    >
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center text-center py-32 px-4 md:px-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        variants={scrollVariant}
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          Mobile App Development
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-gray-300 mt-4">
          We build cross-platform and native mobile apps designed for performance, usability, and seamless user experience.
        </p>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="py-20 px-4 md:px-8 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        variants={scrollVariant}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Approach</h2>
          <ul className="space-y-3 text-gray-300">
            <li>📱 Cross-Platform Development: Run seamlessly on both iOS & Android.</li>
            <li>⚡ Native App Expertise: High-performance apps for critical needs.</li>
            <li>🎨 UI/UX Focused: Intuitive, attractive interfaces for engagement.</li>
            <li>🚀 App Deployment & Maintenance: Store submissions & ongoing support.</li>
          </ul>
        </div>
      </motion.section>

      {/* Mobile App Expertise Section */}
      <motion.section
  className="py-20 px-4 md:px-8 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full items-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1 }}
  variants={scrollVariant}
>
  {/* Left Side Text */}
  <div className="space-y-6">
    <h2 className="text-3xl font-semibold">Mobile App Development Expertise</h2>
    <p className="text-gray-300">
      Our mobile app development services focus on creating engaging, intuitive, and high-performance applications. We build native and cross-platform apps using modern frameworks like React Native and Flutter to ensure consistency and speed.
    </p>
    <ul className="space-y-2 text-gray-300">
      <li>✅ iOS & Android apps</li>
      <li>✅ Cross-platform frameworks (React Native, Flutter)</li>
      <li>✅ App Store & Play Store ready</li>
    </ul>
  </div>

  {/* Right Side Image */}
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: 50 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <img
      src="/olaf-val-UTk9cXzYWAg-unsplash.jpg"
      alt="Mobile App Development"
      className="w-full rounded-2xl shadow-2xl border border-white/20 object-cover"
    />
  </motion.div>
</motion.section>


      {/* Social Section */}
      <Links/>

      {/* CTA Section */}
      <motion.section
        className="flex justify-center py-32 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        variants={scrollVariant}
      >
        <div className="text-4xl font-bold text-white">TIME TO UNLEASH!</div>
      </motion.section>
    </div>
  );
}
