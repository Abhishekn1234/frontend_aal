import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { staggerContainer, fadeUp } from "../components/About/aboutdata";
import type { FormData } from "../types/Contact/contactform";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    countryCode: "+971",
   
    email: "",
    subject: "",
    message: "",
  });

 const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // Prevent form reload

  try {
    // `e.target` is your <form> element
    const form = e.target as HTMLFormElement;

    const response = await emailjs.sendForm(
      "service_xxrqodk",   // Your Service ID
      "template_1kbshdd",  // Your Template ID
      form,                 // Pass the form element directly
      "wf4jaU4SPSH9YMtZU"   // Your Public Key
    );

    console.log("EmailJS response:", response);

    if (response.status === 200) {
      alert(`Thank you! Your message has been sent.`);
      form.reset(); // Reset form fields
    } else {
      console.warn("Unexpected response from EmailJS:", response);
      alert("Something went wrong. Please try again.");
    }

  } catch (error: any) {
    console.error("EmailJS caught an error:", error);

    if (error.status && error.text) {
      alert(`EmailJS Error! Status: ${error.status}, Message: ${error.text}`);
    } else if (error.message) {
      alert(`EmailJS Error: ${error.message}`);
    } else {
      alert("Failed to send email. See console for full details.");
    }
  }
};



  return (
    <div
      className="w-full min-h-screen text-white font-sans relative overflow-hidden flex items-start justify-center pt-24 md:pt-32"
      style={{
              backgroundColor: "#182C48",
              backgroundImage: "linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)",
            }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full max-w-4xl flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold mb-4 text-blue-600 drop-shadow-sm"
          >
            CONTACT US
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white leading-relaxed"
          >
            We visualize, design, and deliver stunning solutions for a digitized tomorrow.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-md md:text-lg text-white mt-4 leading-relaxed"
          >
            We concept, visualize, design, and deliver digital solutions for businesses globally. Our services include app development, E-commerce development, web development, CMS development, custom development, digital design, and marketing and communication. Our expert team of developers and designers devise tailor-made digital products that run seamlessly across all devices and platforms. We promise to deliver visually appealing, easy-to-navigate, web-friendly, interactive, and intuitive solutions for a digitized tomorrow.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
     <motion.form
  onSubmit={handleSubmit}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
  className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 space-y-6 w-full"
>
  {/* Row 1: First Name + Last Name */}
  <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={formData.firstName || ""}
      onChange={handleChange}
      required
      className="w-full p-4 rounded-xl border border-white/50 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName || ""}
      onChange={handleChange}
      required
      className="w-full p-4 rounded-xl border border-white/50 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
    />
  </motion.div>

  {/* Row 2: Email + Company Name */}
  <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full p-4 rounded-xl border border-white/50 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
    />
    <input
      type="text"
      name="company"
      placeholder="Company Name"
      value={formData.company || ""}
      onChange={handleChange}
      className="w-full p-4 rounded-xl border border-white/50 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
    />
  </motion.div>

  {/* Row 3: Phone Number with Country Code */}
<motion.div variants={fadeUp} className="grid grid-cols-1 gap-6">
  <div className="flex w-full">

    {/* Country Code Dropdown */}
    <select
      name="countryCode"
      value={formData.countryCode || "+91"}
      onChange={handleChange}
      className="p-4 rounded-l-xl border border-white/50 bg-white text-black 
                 focus:outline-none focus:ring-2 focus:ring-blue-400 
                 transition-all duration-300 w-32"
    >
      <option value="+91">+91 (India)</option>
      <option value="+971">+971 (UAE)</option>
    </select>

    {/* Phone Number Input */}
    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      value={formData.phone || ""}
      onChange={handleChange}
      required
      className="flex-1 p-4 rounded-r-xl border border-white/50 bg-white text-black 
                 border-l-0 focus:outline-none focus:ring-2 focus:ring-blue-400 
                 transition-all duration-300"
    />

  </div>
</motion.div>



  {/* Message Textarea */}
  <motion.textarea
    variants={fadeUp}
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    rows={6}
    required
    className="w-full p-4 rounded-xl border border-white/50 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
  />

  {/* Submit Button */}
  <motion.button
    variants={fadeUp}
    type="submit"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
  >
    <Mail className="w-6 h-6 text-white" /> Send Message
  </motion.button>
</motion.form>


        {/* CTA Buttons with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 w-full mb-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:aalizahtechnologies@gmail.com"
            className="flex-1 py-4 text-center bg-white/10 text-white rounded-2xl font-semibold shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5 text-white" /> Email Us
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/1234567890"
            target="_blank"
            className="flex-1 py-4 text-center bg-green-500 text-white rounded-2xl font-semibold shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-white" /> WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
