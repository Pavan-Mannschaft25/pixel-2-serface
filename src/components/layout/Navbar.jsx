// // // components/layout/Navbar.jsx
// // import React, { useState, useEffect, useRef } from "react";
// // import {
// //   motion,
// //   AnimatePresence,
// //   useScroll,
// //   useTransform,
// // } from "framer-motion";
// // import { Link } from "react-scroll";
// // import logo from "../../assets/images/px2-logo.png"; // adjust path

// // const Navbar = () => {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState("home");
// //   const navRef = useRef(null);
// //   const { scrollY } = useScroll();

// //   // Transform values for animation based on scroll
// //   const navbarBackground = useTransform(
// //     scrollY,
// //     [0, 50, 100],
// //     [
// //       "rgba(246, 246, 246, 0)",
// //       "rgba(246, 246, 246, 0.8)",
// //       "rgba(246, 246, 246, 0.95)",
// //     ],
// //   );

// //   const navbarHeight = useTransform(scrollY, [0, 50], ["80px", "60px"]);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 50) {
// //         setScrolled(true);
// //       } else {
// //         setScrolled(false);
// //       }

// //       // Update active section based on scroll position
// //       const sections = [
// //         "home",
// //         "gallery",
// //         "process",
// //         "testimonials",
// //         "contact",
// //       ];
// //       const scrollPosition = window.scrollY + 100;

// //       for (const section of sections) {
// //         const element = document.getElementById(section);
// //         if (element) {
// //           const { offsetTop, offsetHeight } = element;
// //           if (
// //             scrollPosition >= offsetTop &&
// //             scrollPosition < offsetTop + offsetHeight
// //           ) {
// //             setActiveSection(section);
// //             break;
// //           }
// //         }
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // Close mobile menu when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (navRef.current && !navRef.current.contains(event.target)) {
// //         setMobileMenuOpen(false);
// //       }
// //     };

// //     if (mobileMenuOpen) {
// //       document.addEventListener("mousedown", handleClickOutside);
// //     }

// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, [mobileMenuOpen]);

// //   const navLinks = [
// //     { name: "Home", href: "home" },
// //     { name: "Gallery", href: "gallery" },
// //     { name: "Process", href: "process" },
// //     { name: "Testimonials", href: "testimonials" },
// //     { name: "Contact", href: "contact" },
// //   ];

// //   const navVariants = {
// //     hidden: { y: -100, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 0.8,
// //         ease: [0.6, 0.05, 0.1, 0.9],
// //         staggerChildren: 0.1,
// //       },
// //     },
// //   };

// //   const mobileMenuVariants = {
// //     hidden: {
// //       opacity: 0,
// //       height: 0,
// //       transition: {
// //         duration: 0.3,
// //         when: "afterChildren",
// //       },
// //     },
// //     visible: {
// //       opacity: 1,
// //       height: "auto",
// //       transition: {
// //         duration: 0.3,
// //         staggerChildren: 0.1,
// //         delayChildren: 0.1,
// //       },
// //     },
// //     exit: {
// //       opacity: 0,
// //       height: 0,
// //       transition: {
// //         duration: 0.3,
// //         when: "beforeChildren",
// //       },
// //     },
// //   };

// //   const linkVariants = {
// //     hidden: { y: -20, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: { duration: 0.3 },
// //     },
// //   };

// //   const brandVariants = {
// //     hidden: { scale: 0.8, opacity: 0 },
// //     visible: {
// //       scale: 1,
// //       opacity: 1,
// //       transition: {
// //         duration: 0.5,
// //         delay: 0.2,
// //         ease: [0.6, 0.05, 0.1, 0.9],
// //       },
// //     },
// //   };

// //   return (
// //     <motion.nav
// //       ref={navRef}
// //       className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
// //       style={{
// //         background: navbarBackground,
// //         height: navbarHeight,
// //         backdropFilter: scrolled ? "blur(10px)" : "none",
// //       }}
// //       variants={navVariants}
// //       initial="hidden"
// //       animate="visible"
// //     >
// //       {/* Decorative wave pattern */}
// //       <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
// //         <motion.div
// //           className="h-full bg-gradient-to-r from-royal-blue via-sky-blue to-royal-blue"
// //           initial={{ x: "-100%" }}
// //           animate={{ x: "100%" }}
// //           transition={{
// //             duration: 8,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           style={{ width: "200%" }}
// //         />
// //       </div>

// //       <div className="max-w-8xl mx-auto h-full flex justify-between items-center px-4 md:px-6">
// //         {/* Brand Name - Logo Removed */}
// //         <motion.div
// //           className="flex items-center"
// //           variants={brandVariants}
// //           whileHover={{ scale: 1.05 }}
// //           transition={{ type: "spring", stiffness: 400, damping: 10 }}
// //         >
// //           <div className="relative flex items-center">
// //             {/* <Link
// //               to="home"
// //               smooth={true}
// //               duration={500}
// //               className="flex items-center gap-2 brand-font text-3xl bg-gradient-to-r from-royal-blue to-sky-blue bg-clip-text text-transparent cursor-pointer font-bold"
// //             >
// //               Pixel2Surface
// //             </Link> */}
// //             <img
// //               src={logo}
// //               alt="Pixel2Surface"
// //               className="h-14 md:h-26 w-auto transition-all duration-300 m-2"
// //             />

// //             <motion.div
// //               className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-royal-blue to-sky-blue rounded-full"
// //               initial={{ width: 0 }}
// //               whileHover={{ width: "100%" }}
// //               transition={{ duration: 0.3 }}
// //             />
// //           </div>
// //         </motion.div>

// //         {/* Desktop Navigation */}
// //         <motion.div
// //           className="hidden md:flex items-center space-x-2 py-2"
// //           variants={navVariants}
// //         >
// //           {navLinks.map((link, index) => (
// //             <motion.div
// //               key={link.name}
// //               variants={linkVariants}
// //               custom={index}
// //               whileHover={{ y: -2 }}
// //               transition={{ type: "spring", stiffness: 300, damping: 10 }}
// //             >
// //               <Link
// //                 to={link.href}
// //                 smooth={true}
// //                 duration={500}
// //                 className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
// //                   activeSection === link.href
// //                     ? "text-white"
// //                     : "text-deep-navy hover:text-royal-blue"
// //                 }`}
// //                 onClick={() => setActiveSection(link.href)}
// //               >
// //                 {activeSection === link.href && (
// //                   <motion.div
// //                     className="absolute inset-0 bg-gradient-to-r from-royal-blue to-sky-blue rounded-full"
// //                     layoutId="activeTab"
// //                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //                   />
// //                 )}
// //                 <span className="relative z-10">{link.name}</span>
// //               </Link>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* CTA Button */}
// //         <motion.button
// //           className="ml-4 px-6 py-2 bg-gradient-to-r from-orange to-golden-yellow text-white rounded-full font-medium shadow-md"
// //           whileHover={{
// //             scale: 1.05,
// //             boxShadow: "0 10px 20px rgba(233, 95, 21, 0.3)",
// //           }}
// //           whileTap={{ scale: 0.95 }}
// //           transition={{ type: "spring", stiffness: 400, damping: 10 }}
// //         >
// //           Get Quote
// //         </motion.button>

// //         {/* Mobile Menu Button */}
// //         <motion.button
// //           className="md:hidden text-deep-navy ml-4"
// //           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //           whileTap={{ scale: 0.9 }}
// //         >
// //           <motion.svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-6 w-6"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //             animate={mobileMenuOpen ? "open" : "closed"}
// //           >
// //             <motion.path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M4 6h16"
// //               variants={{
// //                 closed: { d: "M4 6h16" },
// //                 open: { d: "M6 18L18 6" },
// //               }}
// //             />
// //             <motion.path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M4 12h16"
// //               variants={{
// //                 closed: { opacity: 1 },
// //                 open: { opacity: 0 },
// //               }}
// //               transition={{ duration: 0.1 }}
// //             />
// //             <motion.path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M4 18h16"
// //               variants={{
// //                 closed: { d: "M4 18h16" },
// //                 open: { d: "M6 6L18 18" },
// //               }}
// //             />
// //           </motion.svg>
// //         </motion.button>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {mobileMenuOpen && (
// //           <motion.div
// //             className="md:hidden bg-white/95 backdrop-blur-md shadow-xl rounded-b-2xl overflow-hidden"
// //             variants={mobileMenuVariants}
// //             initial="hidden"
// //             animate="visible"
// //             exit="exit"
// //           >
// //             <div className="container py-6">
// //               <div className="flex flex-col space-y-2">
// //                 {navLinks.map((link, index) => (
// //                   <motion.div
// //                     key={link.name}
// //                     variants={linkVariants}
// //                     custom={index}
// //                     whileHover={{ x: 5 }}
// //                     transition={{ type: "spring", stiffness: 300, damping: 10 }}
// //                   >
// //                     <Link
// //                       to={link.href}
// //                       smooth={true}
// //                       duration={500}
// //                       className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
// //                         activeSection === link.href
// //                           ? "bg-gradient-to-r from-royal-blue to-sky-blue text-white"
// //                           : "text-deep-navy hover:bg-gray-100"
// //                       }`}
// //                       onClick={() => {
// //                         setActiveSection(link.href);
// //                         setMobileMenuOpen(false);
// //                       }}
// //                     >
// //                       {link.name}
// //                     </Link>
// //                   </motion.div>
// //                 ))}

// //                 {/* Mobile CTA Button */}
// //                 <motion.div variants={linkVariants} custom={navLinks.length}>
// //                   <motion.button
// //                     className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange to-golden-yellow text-white rounded-lg font-medium shadow-md"
// //                     whileHover={{
// //                       scale: 1.02,
// //                       boxShadow: "0 10px 20px rgba(233, 95, 21, 0.3)",
// //                     }}
// //                     whileTap={{ scale: 0.98 }}
// //                     transition={{ type: "spring", stiffness: 400, damping: 10 }}
// //                   >
// //                     Get Quote
// //                   </motion.button>
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;

// // components/layout/Navbar.jsx
// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { Link } from "react-scroll";
// import logo from "../../assets/images/px2-logo.png";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const navRef = useRef(null);
//   const { scrollY } = useScroll();

//   /* -------------------- Scroll Animations -------------------- */

//   const navbarBackground = useTransform(
//     scrollY,
//     [0, 50, 100],
//     [
//       "rgba(246, 246, 246, 0)",
//       "rgba(246, 246, 246, 0.8)",
//       "rgba(246, 246, 246, 0.95)",
//     ],
//   );

//   // Animate padding instead of height
//   const navbarPadding = useTransform(scrollY, [0, 50], ["5px", "5px"]);

//   /* -------------------- Scroll Listener -------------------- */

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       const sections = [
//         "home",
//         "gallery",
//         "process",
//         "testimonials",
//         "contact",
//       ];

//       const scrollPosition = window.scrollY + 120;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* -------------------- Outside Click (Mobile) -------------------- */

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setMobileMenuOpen(false);
//       }
//     };

//     if (mobileMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [mobileMenuOpen]);

//   /* -------------------- Nav Links -------------------- */

//   const navLinks = [
//     { name: "Home", href: "home" },
//     { name: "Gallery", href: "gallery" },
//     { name: "Process", href: "process" },
//     { name: "Testimonials", href: "testimonials" },
//     { name: "Contact", href: "contact" },
//   ];

//   /* -------------------- Animations -------------------- */

//   const navVariants = {
//     hidden: { y: -100, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.6, 0.05, 0.1, 0.9],
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const mobileMenuVariants = {
//     hidden: { opacity: 0, height: 0 },
//     visible: {
//       opacity: 1,
//       height: "auto",
//       transition: { staggerChildren: 0.1 },
//     },
//     exit: { opacity: 0, height: 0 },
//   };

//   const linkVariants = {
//     hidden: { y: -20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   const brandVariants = {
//     hidden: { scale: 0.9, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   /* -------------------- JSX -------------------- */

//   return (
//     <motion.nav
//       ref={navRef}
//       className="fixed top-0 left-0 right-0 z-50 min-h-[60px]"
//       style={{
//         background: navbarBackground,
//         paddingTop: navbarPadding,
//         paddingBottom: navbarPadding,
//         backdropFilter: scrolled ? "blur(10px)" : "none",
//       }}
//       variants={navVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {/* Gradient Line */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
//         <motion.div
//           className="h-full bg-gradient-to-r from-royal-blue via-sky-blue to-royal-blue"
//           animate={{ x: ["-100%", "100%"] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//           style={{ width: "200%" }}
//         />
//       </div>

//       {/* Main Container */}
//       <div className="max-w-8xl mx-auto flex items-center justify-between px-4 md:px-6">
//         {/* Logo */}
//         <motion.div
//           variants={brandVariants}
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center"
//         >
//           <Link to="home" smooth duration={500} offset={-90}>
//             <img
//               src={logo}
//               alt="Pixel2Surface"
//               className="h-14 md:h-20 w-auto cursor-pointer transition-all duration-300"
//             />
//           </Link>
//         </motion.div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-2">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               smooth
//               duration={500}
//               offset={-90}
//               onClick={() => setActiveSection(link.href)}
//               className={`relative px-4 py-2 rounded-full font-medium cursor-pointer ${
//                 activeSection === link.href
//                   ? "text-white"
//                   : "text-deep-navy hover:text-royal-blue"
//               }`}
//             >
//               {activeSection === link.href && (
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-royal-blue to-sky-blue rounded-full"
//                   layoutId="activeTab"
//                 />
//               )}
//               <span className="relative z-10">{link.name}</span>
//             </Link>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.button
//           className="hidden md:block ml-4 px-6 py-2 bg-gradient-to-r from-orange to-golden-yellow text-white rounded-full shadow-md"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Get Quote
//         </motion.button>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden ml-4"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             className="md:hidden bg-white/95 backdrop-blur shadow-lg"
//             variants={mobileMenuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.href}
//                   smooth
//                   duration={500}
//                   offset={-90}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="block px-4 py-3 rounded-lg hover:bg-gray-100"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

// components/layout/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaQuoteLeft } from "react-icons/fa";
import logo from "../../assets/images/px2-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const { scrollY } = useScroll();

  /* -------------------- Scroll Animations -------------------- */

  const navbarBackground = useTransform(
    scrollY,
    [0, 50, 100],
    ["rgba(10, 7, 44, 0)", "rgba(10, 7, 44, 0.8)", "rgba(10, 7, 44, 0.95)"],
  );

  // Animate padding instead of height
  const navbarPadding = useTransform(scrollY, [0, 50], ["1px", "1px"]);

  // Logo scale on scroll
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  /* -------------------- Scroll Listener -------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "gallery",
        "process",
        "testimonials",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------- Outside Click (Mobile) -------------------- */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    if (mobileMenuOpen || dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen, dropdownOpen]);

  /* -------------------- Nav Links -------------------- */

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Gallery", href: "gallery" },
    { name: "Process", href: "process" },
    { name: "Testimonials", href: "testimonials" },
    { name: "Contact", href: "contact" },
  ];

  /* -------------------- Animations -------------------- */

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.1, 0.9],
        staggerChildren: 0.1,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.1, duration: 0.3 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const brandVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  /* -------------------- JSX -------------------- */

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 min-h-[70px]"
      style={{
        background: navbarBackground,
        paddingTop: navbarPadding,
        paddingBottom: navbarPadding,
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
      }}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Gradient Line */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <motion.div
          className="h-full"
          style={{
            background:
              "linear-gradient(90deg, #1A4CB6, #0C8FF2, #FBC410, #E95F15, #A55E83, #7E1D1D)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ width: "200%" }}
        />
      </div> */}
      {/* Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-royal-blue via-sky-blue to-royal-blue"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ width: "200%" }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-8xl mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <motion.div
          variants={brandVariants}
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
          style={{ scale: logoScale }}
        >
          <Link to="home" smooth duration={500} offset={-90}>
            <div className="relative">
              <img
                src={logo}
                alt="Pixel2Surface"
                className="h-18 md:h-22 w-auto cursor-pointer transition-all duration-300"
              />
              {/* Logo Glow Effect */}
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10"
                style={{
                  background:
                    "radial-gradient(circle, #FBC410 0%, transparent 70%)",
                  transform: "scale(1.2)",
                }}
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              smooth
              duration={500}
              offset={-90}
              onClick={() => setActiveSection(link.href)}
              className={`relative px-4 py-2 rounded-full font-medium cursor-pointer transition-all duration-300 ${
                activeSection === link.href
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {activeSection === link.href && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
                  }}
                  layoutId="activeTab"
                />
              )}
              <span className="relative z-10">{link.name}</span>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0"
                style={{
                  background: "linear-gradient(135deg, #FBC410, #E95F15)",
                }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* <motion.button
            className="px-4 py-2 rounded-full font-medium text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(26, 76, 182, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Gallery
          </motion.button> */}

          <motion.button
            className="px-4 py-2 rounded-full font-medium text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #FBC410, #E95F15)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(251, 196, 16, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden ml-4 text-white p-2 rounded-lg"
          style={{ backgroundColor: "#1A4CB6" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden"
            style={{
              background: "linear-gradient(180deg, #0A072C 0%, #1A1A3A 100%)",
            }}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      smooth
                      duration={500}
                      offset={-90}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeSection === link.href
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                      style={{
                        backgroundColor:
                          activeSection === link.href
                            ? "#1A4CB6"
                            : "transparent",
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                {/* <motion.button
                  className="w-full px-4 py-3 rounded-full font-medium text-white"
                  style={{
                    background: "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Gallery
                </motion.button> */}

                <motion.button
                  className="w-full px-4 py-3 rounded-full font-medium text-white"
                  style={{
                    background: "linear-gradient(135deg, #FBC410, #E95F15)",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Quote
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
