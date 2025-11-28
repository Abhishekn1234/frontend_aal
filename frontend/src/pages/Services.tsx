import { motion } from "framer-motion";
import { servicesData } from "../components/Services/servicesData";

export default function Services() {
  
  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-100 pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-sans"  
        style={{
              backgroundColor: "#182C48",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}>
      <div className="max-w-7xl mx-auto text-white">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl">
            Comprehensive digital solutions to transform your business and drive growth in the modern landscape
          </p>
        </motion.div>

        {/* Service Cards Grid */}
       {/* Service Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {servicesData.map((service, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative"
    >
      <div
        className="rounded-2xl shadow-xl border border-gray-50 p-6 overflow-hidden
                   hover:border-blue-300 hover:shadow-2xl transition-all duration-300
                   h-[520px] flex flex-col justify-between bg-gray-900 text-white"
      >
        {/* TOP CONTENT WRAPPER */}
        <div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-48 rounded-xl overflow-hidden mb-4 shadow-md"
          >
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* HR under image */}
          <hr className="border-gray-200 mb-6" />

          {/* Title */}
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-all">
            {service.title}
          </h2>

          {/* HR under title */}
          <hr className="border-gray-300 mb-4 w-24 group-hover:border-blue-400 transition-all" />

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {service.items.slice(0, 4).map((item, i) => (
              <li key={i} className="flex items-start text-white">
                <svg
                  className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* BUTTON PINNED AT BOTTOM */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2
                     w-full py-3 bg-blue-600 text-white rounded-xl font-semibold
                     shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  ))}
</div>





        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-white rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-xl">
              Let's discuss how our comprehensive services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-100 transition-all shadow-lg">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

