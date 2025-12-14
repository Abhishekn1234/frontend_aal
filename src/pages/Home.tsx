import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  CheckCircle,
  // X,
  // Phone,
  // Send
} from "lucide-react";
import { fadeUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "../components/Home/variant";
import { ScrollProgress } from "../components/Home/scrollprogress";
import { ScrollDownIndicator } from "../components/Home/ScrollDownIndicator";
// import { MouseFollower } from "../components/Home/MouseFollower";
import { VideoPlayer } from "../components/Home/VideoPlayer";
import { ScrollRevealSection } from "../components/Home/ScrollReveal";

import './global.css';

import { servicesData } from "../components/Services/servicesData";

// import emailjs from "emailjs-com";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  
 const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { margin: "-100px 0px", once: true }); // triggers slightly before fully in view

  useEffect(() => {
    if (inView) {
      controls.start({
        width: "750px",        // increase width
        height: "720px",       // increase height
        borderRadius: "12px",  // rectangle shape
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      controls.start({
        width: "100px",
        height: "110px",
        borderRadius: "50%",   // back to circle if needed
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

 console.log(isModalOpen);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   setTimeout(() => {
//     setIsSubmitting(false);
//     setIsModalOpen(false);

//     // Redirect to WhatsApp after submit
//     const phoneNumber = "971502037669"; 
//     const message = encodeURIComponent("Hello, I would like to know more.");
    
//     window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
//   }, 2000);
// };


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
     {/* <MouseFollower/> */}
      
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
  className="
    text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
    font-extrabold 
    leading-tight 
    mb-6 md:mb-8 
    text-white 
    drop-shadow-lg uppercase
  "
>
  Empowering Businesses with{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
    Digital Innovation
  </span>
</motion.h1>

<motion.p
  variants={fadeUp}
  className="
    mt-6 
   
    opacity-90 
    leading-relaxed 
    max-w-2xl mx-auto 
    text-white/90
    text-[18px]
  "
>
  Premium IT solutions that elevate your brand, optimize operations,
  and fast-track your digital growth.
</motion.p>

<motion.p
  variants={fadeUp}
  className="
    mt-4 
    text-lg sm:text-xl md:text-2xl 
    font-semibold 
    text-cyan-300
    drop-shadow-lg
  "
>
  # Your Vision, Our Technology
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="
    mt-6
    text-3xl sm:text-4xl md:text-5xl 
    font-bold 
    bg-gradient-to-r 
    from-blue-400 via-purple-500 to-pink-500 
    bg-clip-text text-transparent uppercase
  "
  style={{
    textShadow: "2px 2px 10px rgba(255, 255, 255, 0.6)",
  }}
>
  Aalizah Technologies
</motion.p>

<div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "2rem 0",
      }}
    >
      <motion.img
        src="3.svg"
        alt="Logo"
        initial={{
          width: "100px",
          height: "110px",
          borderRadius: "50%", // start as circle
        }}
        animate={controls}
      />
    </div>




            {/* CTA Buttons */}
            
          </div>

          <ScrollDownIndicator />
        </motion.section>

       
      

        {/* ABOUT US - Left Aligned Content */}
       <ScrollRevealSection id="about-section">
  <section 
    className="max-w-8xl mx-auto py-20 md:py-28 px-4 sm:px-6 relative"
    style={{ backgroundColor: "#ffffff" }}
  >
    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">

      {/* Text Content */}
      <motion.div variants={fadeInLeft} className="space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Us</span>
        </h2>

        <div className="space-y-4">
          {[
            "At Aalizah Technologies, we are passionate about transforming ideas into innovative digital solutions. We specialize in web development, digital marketing, and IT services for modern businesses.",
            "Our team combines creativity and strategy to deliver measurable results that drive your business forward in the digital landscape.",
            "We believe in building long-term partnerships and providing solutions that not only meet but exceed our clients' expectations."
          ].map((text, idx) => (
            <motion.p 
              key={idx}
              variants={scaleIn}
              className="bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-6 rounded-3xl border border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 text-gray-800 hover:translate-y-[-2px]"
            >
              {text.split("Aalizah Technologies").map((part, i) =>
                i === 1 ? <span key={i} className="font-semibold text-cyan-500">Aalizah Technologies</span> : part
              )}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Icon Cards */}
      <motion.div 
        variants={fadeInRight} 
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
            className="bg-white p-6 rounded-3xl text-center border border-gray-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-400 cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-4xl md:text-5xl mb-3 text-cyan-500">{item.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-lg hover:text-cyan-500 transition-colors duration-300">{item.title}</h3>
            <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
</ScrollRevealSection>


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
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16"
>
  {servicesData.map((service, index) => {
    const isLastSingleCard = index === servicesData.length - 1 && servicesData.length % 3 === 1;
    return (
      <div
  key={service.title.replace(/\s+/g, "-").toLowerCase()}
  id={service.title.replace(/\s+/g, "-").toLowerCase()}
  className={`w-full max-w-sm h-[450px] rounded-2xl shadow-lg overflow-hidden flex flex-col bg-gray-100
    ${isLastSingleCard ? "lg:col-start-2 focus:ring-0 border-white" : ""}`}
>

        {/* White background section for image + title */}
        <div className="bg-white flex flex-col items-center border-white">
          {service.image && (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
          )}
          <h3 className="text-lg font-bold text-gray-800 text-center py-2">
            {service.title}
          </h3>
        </div>

        {/* Items section with bullet points */}
        <div className="flex-1 p-4">
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {service.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  })}
</motion.div>









</div>


            {/* Enhanced Modal */}
            
          </section>
        </ScrollRevealSection>
        {/* WHY CHOOSE US */}
       <ScrollRevealSection id="why-choose-us">
  <section 
    className="py-20 md:py-32 px-4 sm:px-6 relative"
    style={{ backgroundColor: "#ffffff" }} // White background
  >
    <div className="max-w-7xl mx-auto relative z-10">

      {/* Section Heading */}
      <motion.h2 
        variants={fadeUp}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-blue-800"
      >
        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Aalizah Technologies</span>
      </motion.h2>

      {/* Cards Grid */}
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
            className="p-6 md:p-8 rounded-2xl bg-blue-50 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <CheckCircle className="text-cyan-500 mb-4 md:mb-6 size-6 md:size-8 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-blue-700 group-hover:text-cyan-500 transition-colors duration-300">{item.title}</h3>
            <p className="text-blue-600/80 leading-relaxed text-sm md:text-base group-hover:text-blue-800 transition-colors duration-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
</ScrollRevealSection>


        {/* SERVICES */}
     
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
   <motion.div
  variants={fadeUp}
  className="mt-16 md:mt-20 relative z-10"
  style={{ backgroundColor: "#ffffff" }} // white background
>
  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-800">
    OUR{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
      CLIENTS
    </span>
  </h3>

  <div className="overflow-hidden w-full py-4">
    <motion.div
      className="flex gap-10"
      animate={{ x: ["0%", "-100%"] }} // scroll left
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
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
      ]
        .concat([
          "/5.svg",
          "/6.svg",
          "/7.svg",
          "/8.svg",
          "/9.svg",
          "/10.svg",
          "/11.svg",
          "/12.svg",
        ]) // duplicate images for seamless scroll
        .map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-32 md:h-36 object-contain filter brightness-90 hover:brightness-100 transition duration-300"
            alt={`Client ${i + 1}`}
          />
        ))}
    </motion.div>
  </div>
</motion.div>

      </div>
    </div>
  );
}