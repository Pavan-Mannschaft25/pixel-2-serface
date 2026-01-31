// // components/sections/CTA.jsx
// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaCalendarAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaInstagram,
//   FaFacebook,
//   FaYoutube,
//   FaWhatsapp,
//   FaArrowRight,
//   FaCheckCircle,
//   FaTimes,
// } from "react-icons/fa";
// import Button from "../ui/Button";

// const CTA = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     consultation: false,
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [activeTab, setActiveTab] = useState("contact");

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // Handle form submission
//   //   setIsSubmitted(true);
//   //   setTimeout(() => {
//   //     setIsSubmitted(false);
//   //     setFormData({
//   //       name: "",
//   //       email: "",
//   //       phone: "",
//   //       message: "",
//   //       consultation: false,
//   //     });
//   //   }, 3000);
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//       // source: "Contact Form", // helpful to identify source
//     };

//     emailjs
//       .send(
//         "service_fx0rwoq",
//         "template_lctbw6o",
//         templateParams,
//         "lzU4090RrPwQncSrq",
//       )
//       .then(
//         () => {
//           setIsSubmitted(true);
//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             message: "",
//             consultation: false,
//           });

//           setTimeout(() => {
//             setIsSubmitted(false);
//           }, 3000);
//         },
//         (error) => {
//           console.error("EmailJS Error:", error);
//           alert("Failed to send message. Please try again.");
//         },
//       );
//   };

//   const socialLinks = [
//     {
//       icon: <FaFacebook size={25} />,
//       url: "https://www.instagram.com/pixel2surface/",
//       color: "#1877F2", // Facebook Blue
//     },
//     {
//       icon: <FaInstagram size={25} />,
//       url: "https://www.instagram.com/pixel2surface/",
//       color: "#E4405F", // Instagram Pink/Red
//     },
//     {
//       icon: <FaYoutube size={25} />,
//       url: "https://www.youtube.com/channel/UCNGDQFfLWq0Gj85rvk72xdQ",
//       color: "#FF0000", // YouTube Red
//     },
//     {
//       icon: <FaWhatsapp size={25} />,
//       url: "https://wa.me/15125453068",
//       color: "#25D366", // WhatsApp Green
//     },
//   ];
//   // const socialLinks = [
//   //   {
//   //     icon: <FaInstagram />,
//   //     url: "https://instagram.com/pixel2surface",
//   //     color: "#E95F15",
//   //   },
//   //   {
//   //     icon: <FaFacebook />,
//   //     url: "https://facebook.com/pixel2surface",
//   //     color: "#1A4CB6",
//   //   },
//   //   {
//   //     icon: <FaYoutube />,
//   //     url: "https://youtube.com/pixel2surface",
//   //     color: "#7E1D1D",
//   //   },
//   //   { icon: <FaWhatsapp />, url: "https://wa.me/1234567890", color: "#0C8FF2" },
//   // ];

//   return (
//     <section
//       id="contact"
//       className="section-padding relative overflow-hidden"
//       style={{ backgroundColor: "#1A1A3A" }}
//     >
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
//           style={{ backgroundColor: "#1A4CB6" }}
//         ></div>
//         <div
//           className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
//           style={{ backgroundColor: "#A55E83" }}
//         ></div>
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl"
//           style={{ backgroundColor: "#FBC410" }}
//         ></div>
//       </div>

//       <div className="container relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Contact Us
//           </h2>
//           <p className="text-xl text-white/80 max-w-2xl mx-auto">
//             Get in touch with our design team and start your wall transformation
//             journey today
//           </p>
//         </motion.div>

//         <div className="max-w-5xl mx-auto">
//           <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
//             {/* Tab Navigation */}
//             <div className="flex border-b border-white/10">
//               <button
//                 className={`flex-1 py-4 text-center font-medium transition-colors ${
//                   activeTab === "contact"
//                     ? "text-white border-b-2"
//                     : "text-white/60 hover:text-white"
//                 }`}
//                 style={{
//                   borderBottomColor:
//                     activeTab === "contact" ? "#FBC410" : "transparent",
//                 }}
//                 onClick={() => setActiveTab("contact")}
//               >
//                 Contact Us
//               </button>
//               <button
//                 className={`flex-1 py-4 text-center font-medium transition-colors ${
//                   activeTab === "consultation"
//                     ? "text-white border-b-2"
//                     : "text-white/60 hover:text-white"
//                 }`}
//                 style={{
//                   borderBottomColor:
//                     activeTab === "consultation" ? "#FBC410" : "transparent",
//                 }}
//                 onClick={() => setActiveTab("consultation")}
//               >
//                 Book Consultation
//               </button>
//             </div>

//             <div className="p-8 md:p-12">
//               <AnimatePresence mode="wait">
//                 {activeTab === "contact" ? (
//                   <motion.div
//                     key="contact"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className="grid grid-cols-1 md:grid-cols-2 gap-8"
//                   >
//                     <div>
//                       <h3 className="text-2xl font-bold text-white mb-6">
//                         Get In Touch
//                       </h3>

//                       <AnimatePresence>
//                         {isSubmitted ? (
//                           <motion.div
//                             className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center mb-6"
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.9 }}
//                           >
//                             <FaCheckCircle className="text-green-400 text-4xl mx-auto mb-4" />
//                             <h4 className="text-white text-xl font-bold mb-2">
//                               Thank You!
//                             </h4>
//                             <p className="text-white/80">
//                               Your message has been sent successfully. We'll get
//                               back to you soon!
//                             </p>
//                           </motion.div>
//                         ) : (
//                           <form onSubmit={handleSubmit} className="space-y-4">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                               <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                                 placeholder="Your Name"
//                                 required
//                                 className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                               />
//                               <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 placeholder="Your Email"
//                                 required
//                                 className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                               />
//                             </div>
//                             <input
//                               type="tel"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleInputChange}
//                               placeholder="Your Phone (Optional)"
//                               className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             />
//                             <textarea
//                               name="message"
//                               value={formData.message}
//                               onChange={handleInputChange}
//                               placeholder="Tell us about your project..."
//                               rows="4"
//                               required
//                               className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                             ></textarea>
//                             <button
//                               type="submit"
//                               className="w-full py-3 rounded-lg text-white font-medium transition-all flex items-center justify-center gap-2"
//                               style={{
//                                 background:
//                                   "linear-gradient(135deg, #FBC410, #E95F15)",
//                               }}
//                             >
//                               Send Message
//                               <FaArrowRight />
//                             </button>
//                           </form>
//                         )}
//                       </AnimatePresence>

//                       <div className="mt-8 pt-8 border-t border-white/10">
//                         <h4 className="text-white font-bold mb-4">
//                           Connect With Us
//                         </h4>
//                         <div className="flex space-x-4">
//                           {socialLinks.map((social, index) => (
//                             <a
//                               key={index}
//                               href={social.url}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
//                               style={{ backgroundColor: social.color }}
//                             >
//                               {social.icon}
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-6">
//                       <div>
//                         <h3 className="text-2xl font-bold text-white mb-6">
//                           Contact Information
//                         </h3>

//                         <div className="space-y-4">
//                           <div className="flex items-start">
//                             <div
//                               className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
//                               style={{ backgroundColor: "#1A4CB6" }}
//                             >
//                               <FaPhoneAlt className="text-white" />
//                             </div>
//                             <div>
//                               <h4 className="text-white font-medium">Phone</h4>
//                               <p className="text-white/80">+1 (512) 545-3068</p>
//                             </div>
//                           </div>

//                           <div className="flex items-start">
//                             <div
//                               className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
//                               style={{ backgroundColor: "#0C8FF2" }}
//                             >
//                               <FaEnvelope className="text-white" />
//                             </div>
//                             <div>
//                               <h4 className="text-white font-medium">Email</h4>
//                               <p className="text-white/80">
//                                 team.pixel2surface@gmail.com
//                               </p>
//                             </div>
//                           </div>

//                           <div className="flex items-start">
//                             <div
//                               className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
//                               style={{ backgroundColor: "#A55E83" }}
//                             >
//                               <FaMapMarkerAlt className="text-white" />
//                             </div>
//                             <div>
//                               <h4 className="text-white font-medium">Office</h4>
//                               <p className="text-white/80">
//                                 123 Design Street, Creative City, CC 12345
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="bg-white/5 rounded-xl p-6">
//                         <h4 className="text-white font-bold mb-4">
//                           Business Hours
//                         </h4>
//                         <div className="space-y-2 text-white/80">
//                           <div className="flex justify-between">
//                             <span>Monday - Friday</span>
//                             <span>9:00 AM - 6:00 PM</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span>Saturday</span>
//                             <span>10:00 AM - 4:00 PM</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span>Sunday</span>
//                             <span>Closed</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="consultation"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className="max-w-2xl mx-auto"
//                   >
//                     <div className="text-center mb-8">
//                       <div
//                         className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
//                         style={{
//                           background:
//                             "linear-gradient(135deg, #FBC410, #E95F15)",
//                         }}
//                       >
//                         <FaCalendarAlt className="text-white text-2xl" />
//                       </div>
//                       <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                         Book a Free Consultation
//                       </h3>
//                       <p className="text-white/80">
//                         Meet with our design experts to discuss your vision and
//                         explore possibilities for your space.
//                       </p>
//                     </div>

//                     <div className="bg-white/5 rounded-xl p-6 mb-6">
//                       <h4 className="text-white font-bold mb-4">
//                         What to Expect:
//                       </h4>
//                       <ul className="space-y-3 text-white/80">
//                         <li className="flex items-start">
//                           <FaCheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" />
//                           <span>
//                             30-minute one-on-one consultation with our design
//                             team
//                           </span>
//                         </li>
//                         <li className="flex items-start">
//                           <FaCheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" />
//                           <span>
//                             Personalized design recommendations based on your
//                             space
//                           </span>
//                         </li>
//                         <li className="flex items-start">
//                           <FaCheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" />
//                           <span>Detailed quote with no obligation</span>
//                         </li>
//                         <li className="flex items-start">
//                           <FaCheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" />
//                           <span>Virtual or in-person meeting options</span>
//                         </li>
//                       </ul>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                       <input
//                         type="text"
//                         placeholder="Your Name"
//                         className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                       <input
//                         type="email"
//                         placeholder="Your Email"
//                         className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                       <input
//                         type="tel"
//                         placeholder="Your Phone"
//                         className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                       <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                         <option value="" className="bg-gray-800">
//                           Preferred Consultation Type
//                         </option>
//                         <option value="virtual" className="bg-gray-800">
//                           Virtual Consultation
//                         </option>
//                         <option value="in-person" className="bg-gray-800">
//                           In-Person Consultation
//                         </option>
//                       </select>
//                     </div>

//                     <textarea
//                       placeholder="Tell us about your project..."
//                       rows="4"
//                       className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-6"
//                     ></textarea>

//                     <div className="flex items-center mb-6">
//                       <input
//                         type="checkbox"
//                         id="agree"
//                         className="mr-2 w-4 h-4"
//                       />
//                       <label htmlFor="agree" className="text-white/80 text-sm">
//                         I agree to be contacted by Pixel2Surface regarding my
//                         consultation.
//                       </label>
//                     </div>

//                     <button
//                       className="w-full py-3 rounded-lg text-white font-bold text-lg transition-all flex items-center justify-center gap-2"
//                       style={{
//                         background: "linear-gradient(135deg, #FBC410, #E95F15)",
//                       }}
//                     >
//                       Book Free Consultation
//                       <FaArrowRight />
//                     </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTA;

// components/sections/CTA.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import Button from "../ui/Button";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consultation: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      source: "CTA Section",
      date: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          consultation: false,
        });

        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  const socialLinks = [
    // {
    //   icon: <FaFacebook size={25} />,
    //   url: "https://www.instagram.com/pixel2surface/",
    //   color: "#1877F2", // Facebook Blue
    // },
    {
      icon: <FaInstagram size={25} />,
      url: "https://www.instagram.com/pixel2surface/",
      color: "#E4405F",
    },
    {
      icon: <FaYoutube size={25} />,
      url: "https://www.youtube.com/channel/UCNGDQFfLWq0Gj85rvk72xdQ",
      color: "#FF0000", // YouTube Red
    },
    {
      icon: <FaWhatsapp size={25} />,
      url: "https://wa.me/19258194412",
      color: "#25D366", // WhatsApp Green
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#1A1A3A" }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#1A4CB6" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#A55E83" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#FBC410" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch with our design team and start your wall transformation
            journey today
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>

                <AnimatePresence>
                  {isSubmitted ? (
                    <motion.div
                      className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <FaCheckCircle className="text-green-400 text-4xl mx-auto mb-4" />
                      <h4 className="text-white text-xl font-bold mb-2">
                        Thank You!
                      </h4>
                      <p className="text-white/80">
                        Your message has been sent successfully. We'll get back
                        to you soon!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone (Optional)"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project..."
                        rows="4"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg text-white font-medium transition-all flex items-center justify-center gap-2"
                        style={{
                          background:
                            "linear-gradient(135deg, #FBC410, #E95F15)",
                        }}
                      >
                        Send Message
                        <FaArrowRight />
                      </button>
                    </form>
                  )}
                </AnimatePresence>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-white font-bold mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                        style={{ backgroundColor: social.color }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#1A4CB6" }}
                      >
                        <FaPhoneAlt className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Phone</h4>
                        <p className="text-white/80">+1 (925) 819-4412</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#0C8FF2" }}
                      >
                        <FaEnvelope className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Email</h4>
                        <p className="text-white/80">
                          team.pixel2surface@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#A55E83" }}
                      >
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Office</h4>
                        <p className="text-white/80">San Ramon, CA, USA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-4">Business Hours</h4>
                  <div className="space-y-2 text-white/80">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
