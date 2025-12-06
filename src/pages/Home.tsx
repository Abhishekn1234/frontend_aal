import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  X,
  // Phone,
  Send
} from "lucide-react";
import { fadeUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "../components/Home/variant";
import { ScrollProgress } from "../components/Home/scrollprogress";
import { ScrollDownIndicator } from "../components/Home/ScrollDownIndicator";
import { MouseFollower } from "../components/Home/MouseFollower";
import { VideoPlayer } from "../components/Home/VideoPlayer";
import { ScrollRevealSection } from "../components/Home/ScrollReveal";
import { ServiceCard } from "../components/Home/ServiceCard";
import './global.css';
import { Link } from "react-router-dom";
import { servicesData } from "../components/Services/servicesData";
// import emailjs from "emailjs-com";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  setTimeout(() => {
    setIsSubmitting(false);
    setIsModalOpen(false);

    // Redirect to WhatsApp after submit
    const phoneNumber = "971502037669"; 
    const message = encodeURIComponent("Hello, I would like to know more.");
    
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  }, 2000);
};


// const handleSubmits = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   const form = e.currentTarget;

//   const formData = {
//     firstName: form.firstName.value,
//     lastName: form.lastName.value,
//     email: form.email.value,
//     company: form.company.value,
//     phone: `+971 ${form.phone.value}`,
//     area: form.area.value,
//   };

//   try {
//     await emailjs.send(
//       "service_2d7z5h9",        // Service ID
//       "template_xmfgpj8",       // Template ID
//       formData,
//       "nKlBaY7MMdZCDB8OX"       // Public Key
//     );

//     alert("Form submitted! Email sent successfully.");
//     setIsSubmitting(false);
//     setIsModalOpen(false);

//     form.reset();
//   } catch (error) {
//     console.error(error);
//     alert("Failed to send email. Try again.");
//     setIsSubmitting(false);
//   }
// };

  return (
    <div
   style={{
              backgroundColor: "#182C48",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}
      className="w-full min-h-screen overflow-hidden relative"
    >
      <ScrollProgress />
      <MouseFollower />
      
      {/* Main content container with consistent background */}
      <div className="relative z-10"  style={{
              backgroundColor: "#182C48",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}>
        
        {/* HERO SECTION */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative w-full min-h-screen flex items-center justify-center py-20 md:py-28 px-4 sm:px-6 text-center overflow-hidden"
          style={{
              backgroundColor: "#182C48",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}
        >
          {/* Background Video */}
          <video
            src="/home page banner.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center brightness-75 scale-105"
          />

          {/* Enhanced Gradient Overlay to blend with background */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(10, 25, 47, 0.85) 0%, rgba(0, 4, 40, 0.8) 50%, rgba(10, 25, 47, 0.85) 100%)",
              backdropFilter: "blur(1px)"
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 text-white drop-shadow-lg"
            >
              Empowering Businesses with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                Digital Innovation
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed max-w-4xl mx-auto text-white/90"
            >
              Premium IT solutions that elevate your brand, optimize operations,
              and fast-track your digital growth.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 md:mt-8 text-xl md:text-2xl font-semibold text-cyan-300 drop-shadow-lg"
            >
              # Your Vision, Our Technology
            </motion.p>
           <br/>
           <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
  style={{
    textShadow: "2px 2px 10px rgba(255, 255, 255, 0.6)" // soft glow/highlight
  }}
>
  Aalizah Technology
</motion.p>


            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* <button
                onClick={() => setIsModalOpen(true)}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Speak to Our Expert
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button> */}

              <Link
  to="/services"
  className="group border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 
             font-semibold py-4 px-8 rounded-2xl transition-all duration-300 
             backdrop-blur-sm hover:border-cyan-300 transform hover:scale-105 inline-block"
>
  View Our Work
</Link>

            </motion.div>
          </div>

          <ScrollDownIndicator />
        </motion.section>

        {/* VIDEO SECTION */}
        <ScrollRevealSection id="video-section">
          <section 
            className="py-20 md:py-32 px-4 sm:px-6 relative"
            style={{
              backgroundColor: "#182C48",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(10, 25, 47, 0.9) 0%, rgba(0, 4, 40, 0.85) 50%, rgba(10, 25, 47, 0.9) 100%)",
              }}
            />
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white"
              >
                See Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Digital Marketing</span> in Action
              </motion.h2>
              
              <motion.div variants={fadeUp} className="px-2">
                <VideoPlayer />
              </motion.div>
              
              <motion.p
                variants={fadeUp}
                className="text-center mt-6 md:mt-8 text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4"
              >
                Watch how our digital marketing strategies transform businesses and drive measurable results through innovative campaigns and data-driven approaches.
              </motion.p>
            </div>
          </section>
        </ScrollRevealSection>

        {/* ABOUT US - Left Aligned Content */}
        <ScrollRevealSection id="about-section">
          <section 
            className="max-w-8xl mx-auto py-20 md:py-30 px-4 sm:px-6 relative"
            style={{
              backgroundColor: "#060608ff",
              backgroundImage: "linear-gradient(135deg, #010101ff 0%, #000428 50%, #0a192f 100%)",
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(0, 4, 40, 0.9) 50%, rgba(10, 25, 47, 0.95) 100%)",
                backdropFilter: "blur(2px)"
              }}
            />
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
              <motion.div
                variants={fadeInLeft}
                className="space-y-4 md:space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-4 md:mb-6">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Us</span>
                </h2>
                
                <div className="space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed">
                  <motion.p 
                    variants={scaleIn}
                    className="bg-white/10 backdrop-blur-sm text-white p-4 md:p-6 rounded-2xl shadow-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    At <span className="font-semibold text-cyan-300">Aalizah Technology</span>, we are passionate about transforming ideas into innovative digital solutions. We specialize in web development, digital marketing, and IT services for modern businesses.
                  </motion.p>
                  
                  <motion.p 
                    variants={scaleIn}
                    className="bg-white/10 backdrop-blur-sm text-white p-4 md:p-6 rounded-2xl shadow-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    Our team combines creativity and strategy to deliver measurable results that drive your business forward in the digital landscape.
                  </motion.p>
                  
                  <motion.p 
                    variants={scaleIn}
                    className="bg-white/10 backdrop-blur-sm text-white p-4 md:p-6 rounded-2xl shadow-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    We believe in building long-term partnerships and providing solutions that not only meet but exceed our clients' expectations.
                  </motion.p>
                </div>
              </motion.div>
       

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              >
                {[
                  { icon: "🚀", title: "Innovation", desc: "Cutting-edge solutions" },
                  { icon: "💡", title: "Strategy", desc: "Data-driven approach" },
                  { icon: "⭐", title: "Quality", desc: "Premium deliverables" },
                  { icon: "🤝", title: "Partnership", desc: "Long-term relationships" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={scaleIn}
                    className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl text-center border border-white/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-2xl group cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-2xl md:text-3xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <h3 className="font-semibold text-cyan-300 mb-1 md:mb-2 text-sm md:text-base group-hover:text-cyan-200 transition-colors duration-300">{item.title}</h3>
                    <p className="text-xs md:text-sm text-white/80 group-hover:text-white transition-colors duration-300">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Clients Section */}
          
        <motion.div variants={fadeUp} className="mt-16 md:mt-20 relative z-10">
  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">
    OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">CLIENTS</span>
  </h3>

  <div className="overflow-hidden w-full py-4">
    <motion.div
      className="flex gap-10"
      animate={{ x: ["0%", "-100%"] }} // scroll left
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
        repeatType: "mirror", // back and forth
      }}
    >
      {[
        "/5.svg",
        "/6.svg",
        "/7.svg",
        "/8.svg",
        "/9.svg",
        "/10.svg",
        "/11.svg",
        "/12.svg",
      ].map((img, i) => (
       <img
  key={i}
  src={img}
  className="h-32 md:h-36 object-contain"
/>

      ))}
    </motion.div>
  </div>
</motion.div>



          </section>
        </ScrollRevealSection>

        {/* WHY CHOOSE US */}
        <ScrollRevealSection id="why-choose-us">
          <section 
            className="py-20 md:py-32 px-4 sm:px-6 relative"
            style={{
              backgroundColor: "#182C48",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(10, 25, 47, 0.92) 0%, rgba(0, 4, 40, 0.88) 50%, rgba(10, 25, 47, 0.92) 100%)",
                backdropFilter: "blur(2px)"
              }}
            />
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.h2 
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white"
              >
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Aalizah Technology</span>
              </motion.h2>

              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {[
                  { 
                    title: "Innovation at Core", 
                    desc: "We leverage the latest technologies to create forward-thinking solutions that keep you ahead of the competition." 
                  },
                  { 
                    title: "Expert Team", 
                    desc: "Our skilled professionals bring years of experience and expertise to every project we undertake." 
                  },
                  { 
                    title: "Client-Centric Approach", 
                    desc: "Your success is our priority. We tailor our services to meet your specific business needs and goals." 
                  },
                  { 
                    title: "Quality & Reliability", 
                    desc: "We maintain the highest standards of quality and reliability in all our deliverables and services." 
                  },
                  { 
                    title: "End-to-End Solutions", 
                    desc: "From concept to deployment, we provide comprehensive solutions that cover all your digital needs." 
                  },
                  { 
                    title: "Trusted Partnerships", 
                    desc: "We build lasting relationships based on trust, transparency, and mutual success with our clients." 
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm text-white shadow-2xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-cyan-400/50 group cursor-pointer"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <CheckCircle className="text-cyan-400 mb-4 md:mb-6 size-6 md:size-8 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">{item.title}</h3>
                    <p className="text-white/80 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors duration-300">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </ScrollRevealSection>

        {/* SERVICES */}
        <ScrollRevealSection id="services-section">
          <section
            className="w-full py-20 md:py-28 px-4 sm:px-6 relative"
            style={{
              backgroundColor: "#0a192f",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}
          >
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(0, 4, 40, 0.9) 50%, rgba(10, 25, 47, 0.95) 100%)",
                backdropFilter: "blur(2px)"
              }}
            />

         <div className="relative z-10 max-w-7xl mx-auto">
  {/* Title */}
  <motion.h2
    variants={fadeUp}
    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 md:mb-20 text-white"
  >
    What <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">We Provide</span>
  </motion.h2>

  {/* SERVICES GRID */}
  <motion.div
  variants={staggerContainer}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16"
>
  {servicesData.slice
  (0,6).map((service, idx) => (
    <div key={idx} id={service.title.replace(/\s+/g, "-").toLowerCase()}>
      <ServiceCard
        title={service.title}
        icon={service.icon}
        image={service.image}
        items={service.items}
        // description={service.description}
        onSpeakClick={() => setIsModalOpen(true)}
      />
    </div>
  ))}
</motion.div>

</div>


            {/* Enhanced Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="bg-white border border-cyan-500/30 rounded-2xl p-6 w-[90vw] max-w-[700px] h-auto max-h-[90vh] overflow-y-auto relative shadow-2xl"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors duration-200 p-1 hover:bg-black/10 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      Let's Get Started
                    </h3>
                    <p className="text-black mt-2 text-sm">
                      Tell us about your project and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Form */}
                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
  {/* Row 1: First & Last Name */} 
  <div className="flex flex-col md:flex-row gap-4">
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      required
      className="flex-1 bg-gray-100 border border-gray-300 rounded-xl p-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      required
      className="flex-1 bg-gray-100 border border-gray-300 rounded-xl p-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
    />
  </div>

  {/* Row 2: Email & Company Name */}
  <div className="flex flex-col md:flex-row gap-4">
    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="flex-1 bg-gray-100 border border-gray-300 rounded-xl p-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
    />
    <input
      type="text"
      name="company"
      placeholder="Company Name"
      className="flex-1 bg-gray-100 border border-gray-300 rounded-xl p-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
    />
  </div>

  {/* Row 3: Mobile Number */}
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">+971</span>
    <input
      type="tel"
      name="phone"
      placeholder="Mobile Number"
      required
      className="w-full pl-16 bg-gray-100 border border-gray-300 rounded-xl p-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
    />
  </div>

  {/* Area of Interest */}
  <select
    name="area"
    required
    className="w-full bg-gray-100 border border-gray-300 rounded-xl p-4 text-black focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
  >
    <option value="">Select Area of Interest</option>
    <option value="web-dev">Website Development</option>
    <option value="mobile-dev">Mobile App Development</option>
    <option value="social-media">Social Media Marketing</option>
    <option value="branding">Branding & Logo Design</option>
    <option value="digital-marketing">Digital Marketing</option>
    <option value="it-support">IT Support & AMC</option>
    <option value="cloud">Cloud Solutions</option>
    <option value="erp-crm">ERP & CRM Solutions</option>
    <option value="pr">PR & Media Actions</option>
  </select>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
  >
    {isSubmitting ? (
      <>
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        Processing...
      </>
    ) : (
      <>
        <Send className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        Submit Request
      </>
    )}
  </button>
</form>

                </motion.div>
              </div>
            )}
          </section>
        </ScrollRevealSection>
      </div>
    </div>
  );
}