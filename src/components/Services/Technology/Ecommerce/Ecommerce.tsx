import { motion } from "framer-motion";

export default function Ecommerce() {
  return (
    <div
      className="text-white overflow-x-hidden relative"
      style={{
        backgroundColor: "#0a192f",
        backgroundImage:
          "radial-gradient(circle at 15% 25%, rgba(135, 40, 180, 0.3) 0%, transparent 20%), " +
          "radial-gradient(circle at 85% 55%, rgba(28, 58, 112, 0.3) 0%, transparent 20%), " +
          "radial-gradient(circle at 50% 80%, rgba(88, 28, 135, 0.3) 0%, transparent 20%)",
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
          E-commerce Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-xl text-lg md:text-xl text-gray-300"
        >
          We develop secure and user-friendly e-commerce platforms with custom features and payment integration.
        </motion.p>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">E-commerce Development Expertise</h2>
          <p className="text-gray-300">
            Our e-commerce development services focus on building scalable, fast, and intuitive online stores. From design to checkout, we ensure a seamless shopping experience that drives conversions and customer loyalty.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Custom online store design</li>
            <li>✅ Secure payment integration</li>
            <li>✅ Optimized for speed & conversions</li>
          </ul>
        </motion.div>

        
      </section>
      <section className=" py-20 px-4 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Our Solutions</h2>
          <ul className="space-y-3 text-gray-300">
            <li>🛍️ Custom Store Design: Visual & user-friendly stores to maximize sales.</li>
            <li>🔒 Payment & Security: Secure gateways, SSL, encryption, and compliance.</li>
            <li>📦 Inventory & Order Management: Manage stock & orders efficiently.</li>
            <li>📊 Marketing & Analytics: Tools for SEO, promotions, and customer insights.</li>
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

      {/* CTA Section - Scroll Reveal */}
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

