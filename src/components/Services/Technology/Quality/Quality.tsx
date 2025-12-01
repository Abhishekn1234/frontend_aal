import { motion, type Variants } from "framer-motion";

export default function Quality() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }, // cubic-bezier for easeOut
    },
  };

  const scrollVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <div
      className="text-white overflow-x-hidden relative"
      style={{
        backgroundColor: "#0a192f",
        backgroundImage:
          "radial-gradient(circle at 25% 20%, rgba(28, 58, 112, 0.3) 0%, transparent 20%), " +
          "radial-gradient(circle at 75% 60%, rgba(88, 28, 135, 0.3) 0%, transparent 20%), " +
          "radial-gradient(circle at 50% 85%, rgba(135, 40, 180, 0.3) 0%, transparent 20%)",
      }}
    >
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="flex flex-col items-center justify-center text-center py-32 px-4 space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          Quality Assurance & Testing
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-gray-300">
          We ensure your software is robust, bug-free, and performs flawlessly across all platforms through comprehensive QA and testing services.
        </p>
       
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-20 px-4 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">QA & Testing Expertise</h2>
          <p className="text-gray-300">
            Our QA and testing services are designed to guarantee software quality and reliability. We conduct thorough manual and automated testing, covering functionality, usability, performance, and security.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Manual & automated testing</li>
            <li>✅ Performance & security testing</li>
            <li>✅ Bug detection & issue resolution</li>
          </ul>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-20 px-4 max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <ul className="space-y-3 text-gray-300 text-left md:text-center">
          <li>📝 Manual Testing: Catch functionality and usability issues before launch.</li>
          <li>🤖 Automated Testing: Quick validation of large features, reduce regression issues.</li>
          <li>⚡ Performance & Load Testing: Ensure apps/websites perform under heavy traffic.</li>
          <li>🔒 Security Testing: Identify vulnerabilities and ensure compliance.</li>
        </ul>
      </motion.section>

      {/* Social Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-16 text-center space-y-6"
      >
        <h3 className="text-2xl font-semibold">Connect with us</h3>
        <div className="flex justify-center space-x-6 flex-wrap">
          {["Instagram", "TikTok", "Facebook", "YouTube"].map((platform) => (
            <motion.div
              key={platform}
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-400 px-4 py-2 rounded-lg font-semibold"
            >
              {platform}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Bottom Section */}
      <motion.section
        className="flex justify-center py-32 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollVariant}
      >
        <div className="text-4xl font-bold text-white">TIME TO UNLEASH!</div>
      </motion.section>
    </div>
  );
}
