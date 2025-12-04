import { motion } from "framer-motion";
import { servicesData } from "../components/Services/servicesData";
import { useEffect } from "react";

export default function Services() {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans min-h-screen"
      style={{
        backgroundColor: "#182C48",
        backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto text-white">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full mx-auto mb-4"></div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
          </motion.div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions to transform your business and drive exponential growth
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="flex flex-col gap-12">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="cursor-pointer flex justify-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative transition-all duration-300 flex flex-col border border-gray-700/50 rounded-3xl p-10 w-full max-w-5xl min-h-[280px] backdrop-blur-sm hover:border-blue-400/30 group"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-yellow-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Container */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8">
                  {/* Title & Items */}
                  <div className="flex-1">
                    <motion.h2 
                      whileHover={{ x: 5 }}
                      className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4 cursor-pointer group-hover:text-blue-400 transition-colors duration-300"
                    >
                      {service.title}
                    </motion.h2>

                    {/* Decorative HR */}
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full ml-2"></div>
                    </div>

                    {/* Items List */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {service.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-start p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-yellow-500 transition-colors"
                          >
                            <span className="text-white text-xs font-bold">✓</span>
                          </motion.div>
                          <span className="text-gray-200 text-lg leading-relaxed group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Button */}
                    {/* <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        background: "linear-gradient(135deg, #3b82f6, #f59e0b)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative mt-4 py-4 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group/btn"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      <span className="relative flex items-center justify-center gap-2">
                        Learn More
                        <motion.svg
                          whileHover={{ x: 5 }}
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </span>
                    </motion.button> */}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
