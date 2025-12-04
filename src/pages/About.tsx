import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { values, fadeUp, scaleIn, staggerContainer } from "../components/About/aboutdata";
import { Eye, Target, Users, Rocket, MapPin } from "lucide-react";
import { cardData } from "../components/About/carddata";
import Card from "../components/About/Card";
import { servicesData } from "../components/Services/servicesData";

// Modal Component
interface Service {
  title: string;
}

interface SpeakToUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
}

const SpeakToUsModal: React.FC<SpeakToUsModalProps> = ({ isOpen, onClose, services }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstName: e.currentTarget.firstName.value,
      lastName: e.currentTarget.lastName.value,
      email: e.currentTarget.email.value,
      company: e.currentTarget.company.value,
      phone: `+971 ${e.currentTarget.phone.value}`,
      area: e.currentTarget.area.value,
    };
    

    emailjs
      .send(
        "service_2d7z5h9",              // Service ID
        "template_xmfgpj8",     // Template ID
        formData,
        "nKlBaY7MMdZCDB8OX"             // Public Key
      )
      .then(
        () => {
          alert("Form submitted! Email sent successfully.");
          setLoading(false);
          onClose();
          e.currentTarget.reset(); // reset form
        },
        (err:any) => {
          console.error(err);
          alert("Failed to send email. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-xl p-6 w-full max-w-lg "
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Speak to Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First row: First & Last Name */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <input type="text" name="firstName" placeholder="First Name" className="flex-1 border rounded px-3 py-2 text-gray-900" required />
            <input type="text" name="lastName" placeholder="Last Name" className="flex-1 border rounded px-3 py-2 text-gray-900" required />
          </div>

          {/* Second row: Email & Company */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <input type="email" name="email" placeholder="Email" className="flex-1 border rounded px-3 py-2 text-gray-900" required />
            <input type="text" name="company" placeholder="Company Name" className="flex-1 border rounded px-3 py-2 text-gray-900" />
          </div>

          {/* Third row: UAE code & Phone */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <input type="text" placeholder="+971" className="w-20 border rounded px-3 py-2 text-gray-900" value="+971" readOnly />
            <input type="tel" name="phone" placeholder="Phone Number" className="flex-1 border rounded px-3 py-2 text-gray-900" required />
          </div>

          {/* Fourth row: Area of Interest */}
          <select name="area" className="w-full border rounded px-3 py-2 text-gray-900" required>
            <option value="">Select Area of Interest</option>
            {services.map((service, idx) => (
              <option key={idx} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>

          {/* Buttons */}
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-900">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};


// Main About Component
export default function About() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [modalOpen, setModalOpen] = useState(false);

  const services=servicesData
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    const moveCursor = (e: any) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="w-full min-h-screen text-white relative overflow-hidden font-sans"
      style={{
        backgroundColor: "#182C48",
        backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
      }}
    >
      {/* ================= Custom Cursor ================= */}
      <motion.div
        className="fixed pointer-events-none w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full mix-blend-screen shadow-lg z-50"
        animate={{ x: cursorPos.x - 12, y: cursorPos.y - 12 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* ================= Background Lights ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full blur-3xl opacity-20 animate-pulse delay-500" />
      </div>

      <div className="relative z-10 pt-32 px-6 md:px-12 lg:px-24">
        {/* ================= Header Section ================= */}
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 mb-24">
  
  {/* LEFT SIDE - TEXT SECTION */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="flex-1 text-center md:text-left"
  >
    {/* Header Dots */}
    <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
      <div className="w-2 h-2 bg-blue-500 rounded-full" />
      <div className="text-blue-600 font-semibold tracking-widest text-sm uppercase">
        About Our Company
      </div>
      <div className="w-2 h-2 bg-blue-500 rounded-full" />
    </motion.div>

    {/* Title */}
    <motion.h1
      variants={fadeUp}
      className="text-5xl md:text-6xl font-bold mb-6 text-blue-600 drop-shadow-md"
    >
      About Us
    </motion.h1>

    {/* Underline */}
    <motion.div variants={fadeUp} className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-8" />

    {/* Paragraph */}
    <motion.p
      variants={fadeUp}
      className="text-lg md:text-xl text-white max-w-3xl leading-relaxed tracking-wide space-y-4"
    >
      <span className="block">
        At <span className="font-semibold text-primary">Aalizah Technology</span>, we are passionate about transforming ideas into innovative digital solutions...
      </span>
      <span className="block">
        Our team combines creativity, technical expertise, and strategic thinking to deliver exceptional results.
      </span>
      <span className="block">
        We value quality, innovation, and customer satisfaction above all.
      </span>
    </motion.p>

    {/* Button */}
    <motion.button
      onClick={() => setModalOpen(true)}
      className="mt-6 px-6 py-3 rounded bg-primary text-white hover:bg-gray-500"
      whileHover={{ scale: 1.05 }}
    >
      Speak to Us
    </motion.button>

    {/* Modal */}
    <SpeakToUsModal 
      isOpen={modalOpen} 
      onClose={() => setModalOpen(false)} 
      services={services} 
    />
  </motion.div>

  {/* RIGHT SIDE - IMAGE */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="flex-1 flex justify-center md:justify-end"
  >
    {/* RIGHT SIDE - IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex-1 flex justify-center md:justify-end"
>
  <motion.img
    src="/download.jpg"
    alt="About Us"
    className="w-full max-w-md rounded-xl shadow-lg border-4 border-transparent hover:border-blue-500"
    whileHover={{
      scale: 1.05,
      rotate: 2,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
    }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  />
</motion.div>

  </motion.div>

</div>



        {/* ================= Who We Are Section ================= */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
          <motion.div variants={scaleIn} className="backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:shadow-3xl transition-all">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Who We Are</h2>
            </motion.div>

            <div className="space-y-6">
              {[
                <>At <span className="font-bold text-blue-300">Aalizah Technology</span>, we transform ideas into innovative digital solutions.</>,
                "Our team blends creativity, strategy, and top-tier technical expertise.",
                <>We value <span className="font-semibold text-blue-300">quality, innovation, and customer satisfaction</span>.</>
              ].map((text, i) => (
                <motion.p key={i} variants={fadeUp} className="text-white text-lg leading-relaxed p-5 md:p-6 rounded-2xl border border-white/20 hover:scale-[1.02] transition-transform">
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= Mission & Vision ================= */}
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {[
            { title: "Our Mission", icon: Target, text: "To deliver premium technology solutions that empower businesses to grow and innovate." },
            { title: "Our Vision", icon: Eye, text: "To be recognized as a leading IT partner for reliability and excellence." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="text-white rounded-3xl p-8 md:p-10 shadow-2xl hover:scale-[1.03] transition-all cursor-pointer h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-2xl">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                </div>
                <p className="text-white opacity-95">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= Global Footprint ================= */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
          <motion.div variants={fadeUp} className="text-left mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 text-left">Our Global Footprint</h2>
            <motion.div variants={fadeUp} className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6" />
            <p className="text-white text-xl max-w-2xl leading-relaxed text-left">
              Aalizah Technology has established branches across the globe, bringing innovation to every corner of the world
            </p>
          </motion.div>

          <motion.div variants={scaleIn} className="backdrop-blur-xl rounded-3xl p-8 overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "United Arab Emirates", flag: "🇦🇪", code: "UAE" },
                { name: "India", flag: "🇮🇳", code: "IND" },
                { name: "Saudi Arabia", flag: "🇸🇦", code: "KSA" },
                { name: "Qatar", flag: "🇶🇦", code: "QAT" },
                { name: "Oman", flag: "🇴🇲", code: "OMN" },
                { name: "Canada", flag: "🇨🇦", code: "CAN" },
                { name: "United States", flag: "🇺🇸", code: "USA" },
                { name: "Kuwait", flag: "🇰🇼", code: "KWT" }
              ].map((country, i) => (
                <motion.div key={i} variants={scaleIn} whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 400, damping: 25 } }} className="group relative rounded-2xl p-6 border border-white/20 hover:border-blue-300/60 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{country.flag}</div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{country.name}</h3>
                    <div className="text-sm font-mono px-2 py-1 rounded-lg text-white/80 group-hover:text-blue-200 transition-colors">{country.code}</div>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <MapPin className="w-4 h-4 text-blue-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= Achievements ================= */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
          <motion.div variants={fadeUp} className="text-left mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Achievements</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 max-w-6xl mx-auto text-center">
            {[
              { value: "20+", label: "Year History" },
              { value: "5", label: "Global Locations" },
              { value: "300+", label: "Active Clients" },
              { value: "100+", label: "In-house Digital Marketing" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-lg md:text-xl text-blue-200 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= Cards Section ================= */}
        <div className="container mx-auto px-4 mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 text-white">
            Trusted by <span className="">Legal Brands</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {cardData.map((card, index) => (
              <Card key={index} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>

        {/* ================= Core Values ================= */}
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="mb-24">
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-5xl md:text-4xl font-bold text-white mb-3">Our Core Values</h2>
            <p className="text-white text-lg max-w-2xl">These principles guide our work and define our excellence.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <motion.div key={value.title} variants={scaleIn}>
                <div className="backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-[1.03] transition-transform duration-300 h-full cursor-pointer">
                  <div className="text-blue-400 text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-white leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= CTA Section ================= */}
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
          <motion.div variants={scaleIn} className="w-full text-white rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden hover:scale-[1.02] cursor-pointer mb-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-24 -left-24 w-40 h-40 rounded-full bg-cyan-300/10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              <motion.div variants={fadeUp} className="flex items-center">
                <div className="p-4 bg-white/20 rounded-2xl">
                  <Rocket className="w-12 h-12 md:w-14 md:h-14 text-white" />
                </div>
                <motion.h2 variants={fadeUp} className="ml-4 text-3xl md:text-4xl font-bold">
                  We Are{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Aalizah Technology
                  </span>
                </motion.h2>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4 max-w-2xl text-left">
                <p className="text-white text-lg opacity-95">
                  A team of innovators, creators, and problem-solvers delivering exceptional digital experiences.
                </p>
                <p className="text-white text-lg opacity-95">
                  We turn complex challenges into elegant, effective solutions.
                </p>
                <p className="text-white text-lg font-semibold opacity-95">
                  Your vision becomes our mission.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-4 bg-white/20 text-white rounded-2xl font-semibold shadow-lg">
                    Start Your Project
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-4 border-2 border-white/30 text-white rounded-2xl">
                    Meet Our Team
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
