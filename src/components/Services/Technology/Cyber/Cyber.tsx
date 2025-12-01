import { motion } from "framer-motion";

export default function CyberSecurity() {
  return (
    <div
      className="text-white overflow-x-hidden relative"
      style={{
        backgroundColor: "#0a192f",
        backgroundImage:
          "radial-gradient(circle at 20% 25%, rgba(88, 28, 135, 0.3) 0%, transparent 20%), " +
          "radial-gradient(circle at 80% 60%, rgba(28, 58, 112, 0.3) 0%, transparent 20%), " +
          "radial-gradient(circle at 50% 80%, rgba(135, 40, 180, 0.3) 0%, transparent 20%)",
      }}
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold tracking-wide"
        >
          Cyber Security
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-xl text-lg md:text-xl text-gray-300"
        >
          We provide end-to-end cyber security solutions to protect your digital assets, networks, and data from threats and vulnerabilities.
        </motion.p>
        
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Cyber Security Expertise</h2>
          <p className="text-gray-300">
            Our cyber security services protect businesses from evolving threats and ensure compliance with industry standards. We offer comprehensive security solutions, including vulnerability assessments, penetration testing, and monitoring.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Threat analysis & vulnerability assessment</li>
            <li>✅ Network & application security</li>
            <li>✅ Compliance & risk management</li>
          </ul>
        </motion.div>

       
      </section>
      <section className="py-20 px-4 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
         <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Our Solutions</h2>
          <ul className="space-y-3 text-gray-300">
            <li>🛡️ Threat & Vulnerability Assessment: Identify security gaps to prevent breaches.</li>
            <li>🌐 Network & Application Security: Secure networks, servers, and apps from attacks.</li>
            <li>📋 Compliance & Risk Management: Meet industry regulations and manage risks.</li>
            <li>⚡ Monitoring & Incident Response: 24/7 monitoring and rapid threat mitigation.</li>
          </ul>
        </motion.div>
      </section>

      {/* Social Section */}
      <section className="py-16 text-center space-y-6">
        <h3 className="text-2xl font-semibold">Connect with us</h3>
        <div className="flex justify-center space-x-6">
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
      </section>
        <section className="w-full flex items-center justify-center py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-8 py-6  text-4xl md:text-5xl font-extrabold text-white  text-center"
        >
          TIME TO UNLEASH!
        </motion.div>
      </section>
    </div>
  );
}
