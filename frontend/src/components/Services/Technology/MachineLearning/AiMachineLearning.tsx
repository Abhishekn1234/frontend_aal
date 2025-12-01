import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Links from "../../../Layout/Links";

export default function AiMachineLearning() {
  const [isVisible, setIsVisible] = useState(false);
 console.log(isVisible);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="  text-white overflow-x-hidden relative"
      style={{
        backgroundColor: "#0a192f",
        backgroundImage: 
          "radial-gradient(circle at 10% 20%, rgba(28, 58, 112, 0.3) 0%, transparent 20%), " +
          "radial-gradient(circle at 90% 60%, rgba(88, 28, 135, 0.3) 0%, transparent 20%), " +
          "radial-gradient(circle at 50% 80%, rgba(19, 78, 94, 0.3) 0%, transparent 20%)",
      }}
    >
      {/* Animated Background Elements */}
   

      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Neural Network Animation */}
       
       

        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        //   transition={{ type: "spring", stiffness: 300 }}
        >
          AI & Machine Learning
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl max-w-3xl text-gray-300 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Transforming businesses with intelligent algorithms, predictive analytics, 
          and cutting-edge artificial intelligence solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start AI Project
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Case Studies
          </motion.button>
        </motion.div>

        {/* Floating AI Elements */}
        <div className="absolute bottom-10 left-10 opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-2xl">🧠</span>
          </motion.div>
        </div>
        <div className="absolute top-20 right-10 opacity-20">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <span className="text-2xl">📊</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="px-6 py-20 max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Our AI Expertise
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leveraging advanced machine learning algorithms to solve complex business challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Predictive Analytics",
              description: "Harness your data to forecast trends, optimize processes, and make informed business decisions with 95% accuracy.",
              icon: "📊",
              gradient: "from-blue-500 to-cyan-500",
              image: "/deng-xiang--WXQm_NTK0U-unsplash.jpg"
            },
            {
              title: "Natural Language Processing",
              description: "Intelligent chatbots, sentiment analysis, and language translation for seamless human-computer interaction.",
              icon: "💬",
              gradient: "from-purple-500 to-pink-500",
              image: "/istockphoto-2050481773-1024x1024.jpg"
            },
            {
              title: "Computer Vision",
              description: "Facial recognition, object detection, and automation solutions for retail, healthcare, and security sectors.",
              icon: "👁️",
              gradient: "from-green-500 to-teal-500",
              image: "/istockphoto-2192972011-1024x1024.jpg"
            },
            {
              title: "Deep Learning",
              description: "Neural networks that learn from massive datasets to recognize patterns and make intelligent decisions.",
              icon: "🧠",
              gradient: "from-orange-500 to-red-500",
              image: "/ali-shah-lakhani-sp1BZ1atp7M-unsplash.jpg"
            },
            {
              title: "AI Automation",
              description: "Streamline operations with intelligent process automation and robotic process automation solutions.",
              icon: "⚡",
              gradient: "from-yellow-500 to-amber-500",
              image: "/andrea-de-santis-zwd435-ewb4-unsplash.jpg"
            },
            {
              title: "Custom AI Models",
              description: "Tailored AI solutions built specifically for your unique business challenges and objectives.",
              icon: "🎯",
              gradient: "from-indigo-500 to-blue-500",
              image: "/istockphoto-2238014041-1024x1024.jpg"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f1e33] to-[#1a2d42] border border-gray-800 hover:border-blue-500/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 7, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-10 transition-opacity duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                    {service.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="px-6 py-20 max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "98%", label: "Accuracy Rate", icon: "🎯" },
            { number: "500+", label: "AI Models", icon: "🤖" },
            { number: "24/7", label: "AI Monitoring", icon: "📈" },
            { number: "99.9%", label: "Uptime", icon: "⚡" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Neural Network Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative mb-8"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-4xl shadow-2xl shadow-green-500/30">
            🚀
          </div>
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Ready to Transform?
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Let's build intelligent solutions that will revolutionize your business operations and drive unprecedented growth.
        </motion.p>

         <Links/>

        {/* Floating Contact Elements */}
        <motion.div
          className="absolute bottom-10 left-10 text-2xl opacity-30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📧
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-2xl opacity-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          📱
        </motion.div>
      </motion.section>

      {/* Footer */}

    </div>
  );
}