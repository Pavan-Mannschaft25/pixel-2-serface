// // // components/layout/Footer.jsx
// // import React from "react";
// // import { motion } from "framer-motion";

// // const Footer = () => {
// //   return (
// //     <footer className="bg-gray-900 text-white py-12">
// //       <div className="container">
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <h3 className="brand-font text-2xl mb-4 text-blue-400">
// //               Pixel2Surface
// //             </h3>
// //             <p className="text-gray-400">
// //               Transforming walls into art, one surface at a time.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5, delay: 0.1 }}
// //           >
// //             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
// //             <ul className="space-y-2 text-gray-400">
// //               <li>
// //                 <a href="#home" className="hover:text-white transition-colors">
// //                   Home
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="#gallery"
// //                   className="hover:text-white transition-colors"
// //                 >
// //                   Gallery
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="#process"
// //                   className="hover:text-white transition-colors"
// //                 >
// //                   Process
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="#contact"
// //                   className="hover:text-white transition-colors"
// //                 >
// //                   Contact
// //                 </a>
// //               </li>
// //             </ul>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //           >
// //             <h4 className="text-lg font-semibold mb-4">Services</h4>
// //             <ul className="space-y-2 text-gray-400">
// //               <li>
// //                 <a href="#" className="hover:text-white transition-colors">
// //                   Home Design
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" className="hover:text-white transition-colors">
// //                   Office Design
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" className="hover:text-white transition-colors">
// //                   Commercial Spaces
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" className="hover:text-white transition-colors">
// //                   Custom Artwork
// //                 </a>
// //               </li>
// //             </ul>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5, delay: 0.3 }}
// //           >
// //             <h4 className="text-lg font-semibold mb-4">Contact</h4>
// //             <ul className="space-y-2 text-gray-400">
// //               <li>info@pixel2surface.com</li>
// //               <li>+1 (555) 123-4567</li>
// //               <li>123 Design Street, Creative City</li>
// //             </ul>
// //           </motion.div>
// //         </div>

// //         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
// //           <p>
// //             &copy; {new Date().getFullYear()} Pixel2Surface. All rights
// //             reserved.
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// // components/layout/Footer.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   FaLinkedin,
//   FaPinterest,
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaArrowRight,
//   FaHeart,
// } from "react-icons/fa";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email) {
//       setSubscribed(true);
//       setTimeout(() => setSubscribed(false), 3000);
//       setEmail("");
//     }
//   };

//   const socialLinks = [
//     { icon: <FaFacebook />, url: "#", color: "#1A4CB6" },
//     { icon: <FaInstagram />, url: "#", color: "#E95F15" },
//     { icon: <FaTwitter />, url: "#", color: "#0C8FF2" },
//     { icon: <FaYoutube />, url: "#", color: "#7E1D1D" },
//     { icon: <FaLinkedin />, url: "#", color: "#0C8FF2" },
//     { icon: <FaPinterest />, url: "#", color: "#E95F15" },
//     { icon: <FaWhatsapp />, url: "#", color: "#0C8FF2" },
//   ];

//   return (
//     <footer
//       className="relative overflow-hidden"
//       style={{ backgroundColor: "#0A072C" }}
//     >
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
//           style={{ backgroundColor: "#1A4CB6" }}
//         ></div>
//         <div
//           className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
//           style={{ backgroundColor: "#A55E83" }}
//         ></div>
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
//           style={{ backgroundColor: "#FBC410" }}
//         ></div>
//       </div>

//       <div className="container relative z-10 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Brand Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Pixel2Surface
//             </h3>
//             <p className="text-gray-400 mb-6">
//               Transforming walls into art, one surface at a time. We bring your
//               vision to life with stunning custom designs.
//             </p>

//             {/* Social Media Icons */}
//             <div className="flex space-x-3">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.url}
//                   className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all"
//                   style={{ backgroundColor: social.color }}
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#home"
//                   className="text-gray-400 hover:text-white transition-colors flex items-center"
//                 >
//                   <span
//                     className="w-1 h-1 rounded-full mr-3"
//                     style={{ backgroundColor: "#FBC410" }}
//                   ></span>
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#gallery"
//                   className="text-gray-400 hover:text-white transition-colors flex items-center"
//                 >
//                   <span
//                     className="w-1 h-1 rounded-full mr-3"
//                     style={{ backgroundColor: "#FBC410" }}
//                   ></span>
//                   Gallery
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#process"
//                   className="text-gray-400 hover:text-white transition-colors flex items-center"
//                 >
//                   <span
//                     className="w-1 h-1 rounded-full mr-3"
//                     style={{ backgroundColor: "#FBC410" }}
//                   ></span>
//                   Process
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#testimonials"
//                   className="text-gray-400 hover:text-white transition-colors flex items-center"
//                 >
//                   <span
//                     className="w-1 h-1 rounded-full mr-3"
//                     style={{ backgroundColor: "#FBC410" }}
//                   ></span>
//                   Testimonials
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#contact"
//                   className="text-gray-400 hover:text-white transition-colors flex items-center"
//                 >
//                   <span
//                     className="w-1 h-1 rounded-full mr-3"
//                     style={{ backgroundColor: "#FBC410" }}
//                   ></span>
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Services Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors flex items-center"
//                 >
//                   <span
//                     className="w-1 h-1 rounded-full mr-3"
//                     style={{ backgroundColor: "#0C8FF2" }}
//                   ></span>
//                   Home Design
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors flex items-center"
//                 >
//                   <span
//                     className="w-1 h-1 rounded-full mr-3"
//                     style={{ backgroundColor: "#0C8FF2" }}
//                   ></span>
//                   Office Design
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors flex items-center"
//                 >
//                   <span
//                     className="w-1 h-1 rounded-full mr-3"
//                     style={{ backgroundColor: "#0C8FF2" }}
//                   ></span>
//                   Commercial Spaces
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors flex items-center"
//                 >
//                   <span
//                     className="w-1 h-1 rounded-full mr-3"
//                     style={{ backgroundColor: "#0C8FF2" }}
//                   ></span>
//                   Custom Artwork
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors flex items-center"
//                 >
//                   <span
//                     className="w-1 h-1 rounded-full mr-3"
//                     style={{ backgroundColor: "#0C8FF2" }}
//                   ></span>
//                   3D Wall Designs
//                 </a>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Newsletter & Contact Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <h4 className="text-xl font-bold mb-6 text-white">Stay Updated</h4>
//             <p className="text-gray-400 mb-6">
//               Subscribe to our newsletter for the latest design trends and
//               exclusive offers.
//             </p>

//             <form onSubmit={handleSubscribe} className="mb-8">
//               <div className="flex">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="px-4 py-3 rounded-r-lg text-white transition-all flex items-center"
//                   style={{
//                     background: "linear-gradient(135deg, #FBC410, #E95F15)",
//                   }}
//                 >
//                   <FaArrowRight />
//                 </button>
//               </div>
//               {subscribed && (
//                 <motion.p
//                   className="mt-2 text-green-400 text-sm"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                 >
//                   Thank you for subscribing!
//                 </motion.p>
//               )}
//             </form>

//             <div className="space-y-3">
//               <div className="flex items-center text-gray-400">
//                 <FaEnvelope className="mr-3" style={{ color: "#1A4CB6" }} />
//                 <span>info@pixel2surface.com</span>
//               </div>
//               <div className="flex items-center text-gray-400">
//                 <FaPhone className="mr-3" style={{ color: "#0C8FF2" }} />
//                 <span>+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center text-gray-400">
//                 <FaMapMarkerAlt className="mr-3" style={{ color: "#A55E83" }} />
//                 <span>123 Design Street, Creative City</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <motion.p
//               className="text-gray-400 text-sm mb-4 md:mb-0"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               &copy; {new Date().getFullYear()} Pixel2Surface. All rights
//               reserved.
//             </motion.p>

//             <motion.div
//               className="flex space-x-6"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors text-sm"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors text-sm"
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors text-sm"
//               >
//                 Sitemap
//               </a>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Made with Love Badge */}
//       <div className="text-center py-4 border-t border-white/5">
//         <motion.p
//           className="text-gray-500 text-xs flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           Made with <FaHeart className="mx-1" style={{ color: "#E95F15" }} /> by
//           Pixel2Surface Team
//         </motion.p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// components/layout/Footer.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterest,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/images/px2-logo.png";

const Footer = () => {
  const socialLinks = [
    // {
    //   icon: <FaFacebook size={25} />,
    //   url: "https://www.instagram.com/pixel2surface/",
    //   color: "#1877F2", // Facebook Blue
    // },
    {
      icon: <FaInstagram size={25} />,
      url: "https://www.instagram.com/pixel2surface/",
      color: "#E4405F", // Instagram Pink/Red
    },
    {
      icon: <FaLinkedinIn size={25} />,
      url: "https://www.linkedin.com/in/pixel-surface-8167823a9/",
      color: "#0A66C2",
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
    <footer className="relative overflow-hidden">
      {/* Main Footer Section with Gradient Background */}
      <div
        className="relative py-10"
        // style={{
        //   background:
        //     "linear-gradient(135deg, #0A072C 0%, #1A1A3A 50%, #0A072C 100%)",
        // }}
        style={{ backgroundColor: "#0A072C" }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: "#1A4CB6" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: "#A55E83" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: "#FBC410" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pixel2Surface
              </h3> */}
              <Link to="home" smooth duration={500} offset={-90}>
                <div className="relative">
                  <img
                    src={logo}
                    alt="Pixel2Surface"
                    className="h-18 md:h-25 w-auto cursor-pointer transition-all duration-300"
                  />
                </div>
              </Link>

              <p className="text-gray-400 mb-6 md:ml-6">
                Transforming walls into art, one surface at a time. We bring
                your vision to life with stunning custom designs.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-3 md:ml-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all"
                    style={{ backgroundColor: social.color }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6 mt-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="home" smooth duration={500} offset={-90}>
                    <div className="cursor-pointer">
                      <p className="text-gray-400 hover:text-white transition-colors flex items-center">
                        <span
                          className="w-1 h-1 rounded-full mr-3"
                          style={{ backgroundColor: "#FBC410" }}
                        ></span>
                        Home
                      </p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="use-cases" smooth duration={500} offset={-90}>
                    <div className="cursor-pointer">
                      <p className="text-gray-400 hover:text-white transition-colors flex items-center">
                        <span
                          className="w-1 h-1 rounded-full mr-3"
                          style={{ backgroundColor: "#FBC410" }}
                        ></span>
                        Use Cases
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="process" smooth duration={500} offset={-90}>
                    <div className="cursor-pointer">
                      <p className="text-gray-400 hover:text-white transition-colors flex items-center">
                        <span
                          className="w-1 h-1 rounded-full mr-3"
                          style={{ backgroundColor: "#FBC410" }}
                        ></span>
                        Process
                      </p>
                    </div>
                  </Link>
                </li>
                {/* <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span
                      className="w-1 h-1 rounded-full mr-3"
                      style={{ backgroundColor: "#FBC410" }}
                    ></span>
                    Testimonials
                  </a>
                </li> */}
                <li>
                  <Link to="contact" smooth duration={500} offset={-90}>
                    <div className="cursor-pointer">
                      <p
                        href="#contact"
                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                      >
                        <span
                          className="w-1 h-1 rounded-full mr-3"
                          style={{ backgroundColor: "#FBC410" }}
                        ></span>
                        Contact
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 mt-6 text-white">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span
                      className="w-1 h-1 rounded-full mr-3"
                      style={{ backgroundColor: "#0C8FF2" }}
                    ></span>
                    Home Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span
                      className="w-1 h-1 rounded-full mr-3"
                      style={{ backgroundColor: "#0C8FF2" }}
                    ></span>
                    Office Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span
                      className="w-1 h-1 rounded-full mr-3"
                      style={{ backgroundColor: "#0C8FF2" }}
                    ></span>
                    Commercial Spaces
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span
                      className="w-1 h-1 rounded-full mr-3"
                      style={{ backgroundColor: "#0C8FF2" }}
                    ></span>
                    Custom Artwork
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span
                      className="w-1 h-1 rounded-full mr-3"
                      style={{ backgroundColor: "#0C8FF2" }}
                    ></span>
                    3D Wall Designs
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Newsletter & Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold mb-6 mt-6 text-white">
                Stay Updated
              </h4>
              {/* <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for the latest design trends and
                exclusive offers.
              </p> */}

              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <FaEnvelope className="mr-3" style={{ color: "#1A4CB6" }} />
                  <span className="w-1/2">team.pixel2surface@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FaPhone className="mr-3" style={{ color: "#0C8FF2" }} />
                  <span>+1 (925) 819-4412</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FaMapMarkerAlt
                    className="mr-3"
                    style={{ color: "#A55E83" }}
                  />
                  <span>San Ramon, CA, USA</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Different Background */}
      <div
        className="border-t border-white/10 pt-8 pb-8"
        style={{ backgroundColor: "#0A072C" }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              &copy; {new Date().getFullYear()} Pixel2Surface. All rights
              reserved.
            </motion.p>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Sitemap
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
