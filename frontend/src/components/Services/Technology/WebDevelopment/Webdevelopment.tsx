import { motion } from "framer-motion";
import  Links from "../../../Layout/Links";
export default function WebDevelopment() {
  return (
    <div className="text-white overflow-x-hidden relative" style={{
      backgroundColor: "#0a192f",
      backgroundImage:
        "radial-gradient(circle at 10% 20%, rgba(28, 58, 112, 0.3) 0%, transparent 20%), " +
        "radial-gradient(circle at 90% 60%, rgba(88, 28, 135, 0.3) 0%, transparent 20%), " +
        "radial-gradient(circle at 50% 80%, rgba(19, 78, 94, 0.3) 0%, transparent 20%)"
    }}>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold tracking-wide"
        >
          Web Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-xl text-lg md:text-xl text-gray-300"
        >
          We build fast, scalable, and modern websites using the latest technologies such as React, Next.js, and Node.js.
        </motion.p>
      </section>

      {/* Expertise Section */}
   <section className="py-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
  {/* Left Side Text */}
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -50 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="md:w-1/2 space-y-6"
  >
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Web Development Expertise</h2>
      <p className="text-gray-300">
        Our web development service is focused on building high-performance websites that not only look great but also deliver results. We ensure your site is optimized for speed, accessibility, and user experience. With a modern tech stack including React, Next.js, and Node.js, we guarantee scalability and long-term maintainability.
      </p>
      <ul className="space-y-2 text-gray-300">
        <li>✅ Responsive & mobile-first design</li>
        <li>✅ SEO optimized structure</li>
        <li>✅ Scalable architecture</li>
      </ul>
    </div>

   
  </motion.div>

  {/* Right Side Image */}
  <motion.div
    className="md:w-1/2"
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: 50 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <img
      src="/ferenc-almasi-eYpcLDXHVb0-unsplash.jpg"
      alt="Web Development"
      className="w-full rounded-2xl shadow-2xl border border-white/20 object-cover"
    />
  </motion.div>
</section>
<section className="flex flex-col items-center justify-start text-left py-32 px-4 space-y-6">
  <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Our Approach</h2>
      <ul className="space-y-3 text-gray-300">
        <li>💡 Modern Technology Stack (React, Next.js, Node.js)</li>
        <li>🚀 SEO & Performance Optimization</li>
        <li>🎨 User Experience First</li>
        <li>🔗 Custom Integrations & APIs</li>
      </ul>
    </div>
</section>
 

      {/* Social Section */}
     <Links/>

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
