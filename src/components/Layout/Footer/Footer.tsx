import { motion } from "framer-motion";
import {
  // Facebook,
  // Twitter,
  // Instagram,
  // Linkedin,
  Mail,
  Phone,
  // MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";
import { useEffect, useState } from "react";
import { staggerContainer, fadeUp } from "./variant";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
// import { servicesData } from "../../Services/servicesData";




export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
const [newsletterEmail, setNewsletterEmail] = useState("");
const [isSendingNews, setIsSendingNews] = useState(false);

const MotionLink = motion(Link);
const handleNewsletterSubmit = async (e:any) => {
  e.preventDefault();
  if (!newsletterEmail) return alert("Please enter an email.");

  setIsSendingNews(true);

  try {
    await emailjs.send(
      "service_2d7z5h9",       // your service ID
      "template_xmfgpj8",      // create another template OR reuse the same
      {
        email: newsletterEmail,
        message: `Thank you for subscribing to Aalizah Technology updates!`,
      },
      "nKlBaY7MMdZCDB8OX"       // your public key
    );

    alert("Subscription successful! A confirmation email has been sent.");
    setNewsletterEmail("");
  } catch (error) {
    console.error(error);
    alert("Failed to subscribe. Please try again.");
  }

  setIsSendingNews(false);
};

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const logoStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    // objectFit: "cover",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
      
    transform: "scale(1.1) rotate(5deg)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };
  return (
    <>
      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 border-2 border-white/20"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}

      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden"  style={{
              backgroundColor: "#182C48",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}>

        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 3%, transparent 0%),
                 radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 3%, transparent 0%)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

          {/* Main Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >

            {/* Company Info */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-3">
  <img src="3.svg" style={logoStyle} alt="Aalizah Technology Logo" />

  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
    Aalizah Technology
  </h3>
</Link>

              <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-md">
                Empowering businesses with innovative digital solutions.
                We transform your vision into reality through cutting-edge
                technology and creative strategy.
              </p>

              {/* Social Icons */}
              {/* <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: "#", color: "hover:text-blue-400" },
                  { Icon: Twitter, href: "#", color: "hover:text-sky-400" },
                  { Icon: Instagram, href: "#", color: "hover:text-pink-400" },
                  { Icon: Linkedin, href: "#", color: "hover:text-blue-500" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 transition-all duration-300 ${social.color} hover:bg-white/20`}
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </div> */}
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeUp}>
              <h4 className="text-xl font-semibold mb-6 text-cyan-300">
                Quick Links
              </h4>

             <ul className="space-y-3">
  {[
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ].map((link, i) => (
    <li key={i}>
      <MotionLink
        whileHover={{ x: 5 }}
        to={link.href}
        className="text-white/80 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
      >
        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {link.name}
      </MotionLink>
    </li>
  ))}
</ul>

            </motion.div>

            {/* Contact Section */}
            <motion.div variants={fadeUp}>
             

              {/* <motion.div
                whileHover={{ translateX: 5 }}
                className="flex items-start space-x-3 text-white/80"
              >
                <MapPin size={20} className="text-cyan-400 mt-1" />
                <span>123 Tech Park, Innovation Road<br />Digital City, DC 12345</span>
              </motion.div> */}

              <motion.a
                whileHover={{ translateX: 5 }}
                href="tel:+11234567890"
                className="flex items-center space-x-3 text-white/80 hover:text-white"
              >
                <Phone size={10} className="text-cyan-400" />
                <span>+971-502037669</span>
                <span>+971-0551084366</span>
              </motion.a>

              <motion.a
                whileHover={{ translateX: 5 }}
                href="mailto:info@aalizahtechnologies.com"
                className="flex items-center space-x-3 text-white/80 hover:text-white"
              >
                <Mail size={20} className="text-cyan-400" />
                <span>info@aalizahtechnologies.com</span>
              </motion.a>

              {/* Newsletter */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-3 text-cyan-300">
                  Newsletter
                </h5>

                <div className="flex flex-col space-y-3">
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3">
  <input
    type="email"
    value={newsletterEmail}
    onChange={(e) => setNewsletterEmail(e.target.value)}
    placeholder="Enter your email"
    required
    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 outline-none focus:border-cyan-400"
  />

  <motion.button
    type="submit"
    disabled={isSendingNews}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSendingNews ? "Subscribing..." : "Subscribe"}
  </motion.button>
</form>

                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Services */}
          {/* <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-cyan-300">
              Our Services
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
  {servicesData.map((service, i) => (
    <Link to="/services" key={i}>
      <motion.span
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        className="text-white/70 hover:text-cyan-300 transition-colors duration-300 text-sm cursor-pointer py-2 px-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 block"
      >
        {service.title}
      </motion.span>
    </Link>
  ))}
</div>

          </motion.div> */}

          {/* Bottom Bar */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Aalizah Technology. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-white/60">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (text, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="hover:text-cyan-300 transition-colors duration-300"
                    href="#"
                  >
                    {text}
                  </motion.a>
                )
              )}
            </div>

            {/* Heart Animation */}
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>Made with</span>

              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ef4444", "#dc2626", "#ef4444"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart size={16} className="fill-current" />
              </motion.span>

              <span>by Aalizah Team</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Glow Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </footer>
    </>
  );
}
