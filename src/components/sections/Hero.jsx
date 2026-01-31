// import React, { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useInView,
//   useMotionValue,
//   AnimatePresence,
//   useSpring,
//   useAnimation,
//   useReducedMotion,
// } from "framer-motion";
// import Button from "../ui/Button";
// import {
//   FaTimes,
//   FaArrowLeft,
//   FaArrowRight,
//   FaHeart,
//   FaEye,
//   FaPause,
//   FaPlay,
//   FaMouse,
// } from "react-icons/fa";

// // ✅ Put this at the VERY TOP of Hero.jsx (outside component)
// const bgVideos = [
//   {
//     id: 1,
//     src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     poster: "https://picsum.photos/seed/wallart1/1920/1080.jpg",
//   },
//   {
//     id: 2,
//     src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//     poster: "https://picsum.photos/seed/wallart2/1920/1080.jpg",
//   },
//   {
//     id: 3,
//     src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     poster: "https://picsum.photos/seed/wallart3/1920/1080.jpg",
//   },
// ];

// const Hero = () => {
//   const heroRef = useRef(null);
//   const isInView = useInView(heroRef, { once: true, amount: 0.3 });
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isTransforming, setIsTransforming] = useState(false);
//   const [hoveredDesign, setHoveredDesign] = useState(null);
//   const [isGalleryOpen, setIsGalleryOpen] = useState(false);
//   const [is3DShowcaseOpen, setIs3DShowcaseOpen] = useState(false);
//   const [selectedDesign, setSelectedDesign] = useState(null);
//   const [carouselRotation, setCarouselRotation] = useState(0);
//   const [isAutoRotating, setIsAutoRotating] = useState(true);
//   const controls = useAnimation();
//   const shouldReduceMotion = useReducedMotion();

//   // Scroll
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   // Mouse MotionValues with spring physics
//   const mouseX = useMotionValue(0.5);
//   const mouseY = useMotionValue(0.5);
//   const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
//   const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!heroRef.current) return;
//       const rect = heroRef.current.getBoundingClientRect();

//       mouseX.set((e.clientX - rect.left) / rect.width);
//       mouseY.set((e.clientY - rect.top) / rect.height);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Auto-rotate background images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto-rotate carousel
//   useEffect(() => {
//     if (!isAutoRotating || !is3DShowcaseOpen) return;

//     const interval = setInterval(() => {
//       setCarouselRotation((prev) => (prev + 1) % 360);
//     }, 50);
//     return () => clearInterval(interval);
//   }, [isAutoRotating, is3DShowcaseOpen]);

//   // 3D Mouse transforms with enhanced movement
//   const rotateX = useTransform(springY, [0, 1], [10, -10]);
//   const rotateY = useTransform(springX, [0, 1], [-10, 10]);
//   const translateZ = useTransform(scrollYProgress, [0, 1], [0, -50]);

//   const orbX1 = useTransform(springX, [0, 1], [-40, 40]);
//   const orbY1 = useTransform(springY, [0, 1], [-40, 40]);

//   const orbX2 = useTransform(springX, [0, 1], [40, -40]);
//   const orbY2 = useTransform(springY, [0, 1], [40, -40]);

//   const orbX3 = useTransform(springX, [0, 1], [-50, 50]);
//   const orbY3 = useTransform(springY, [0, 1], [-50, 50]);

//   // Background images
//   const bgImages = [
//     "https://picsum.photos/seed/wallart1/1920/1080.jpg",
//     "https://picsum.photos/seed/wallart2/1920/1080.jpg",
//     "https://picsum.photos/seed/wallart3/1920/1080.jpg",
//   ];

//   // Enhanced wall design samples with more variety
//   const designSamples = [
//     {
//       id: 1,
//       image: "https://picsum.photos/seed/design1/300/400.jpg",
//       x: 10,
//       y: 20,
//       z: 50,
//       rotate: 15,
//       category: "Modern",
//       description: "Clean lines and minimalist aesthetics",
//     },
//     {
//       id: 2,
//       image: "https://picsum.photos/seed/design2/280/350.jpg",
//       x: 70,
//       y: 30,
//       z: 30,
//       rotate: -10,
//       category: "Abstract",
//       description: "Bold colors and expressive forms",
//     },
//     {
//       id: 3,
//       image: "https://picsum.photos/seed/design3/320/420.jpg",
//       x: 40,
//       y: 60,
//       z: 70,
//       rotate: 5,
//       category: "Geometric",
//       description: "Precise patterns and symmetrical designs",
//     },
//     {
//       id: 4,
//       image: "https://picsum.photos/seed/design4/250/300.jpg",
//       x: 15,
//       y: 70,
//       z: 40,
//       rotate: -15,
//       category: "Nature",
//       description: "Organic elements and natural motifs",
//     },
//     {
//       id: 5,
//       image: "https://picsum.photos/seed/design5/290/380.jpg",
//       x: 75,
//       y: 65,
//       z: 60,
//       rotate: 8,
//       category: "Minimalist",
//       description: "Simple elegance with subtle details",
//     },
//   ];

//   // 3D particles for background
//   const particles = Array.from({ length: 20 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 20 + 10,
//     color: i % 3 === 0 ? "#1A4CB6" : i % 3 === 1 ? "#0C8FF2" : "#FBC410",
//   }));

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 30 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   // 3D Wall transformation animation
//   const wallVariants = {
//     initial: {
//       scale: 0.9,
//       opacity: 0.7,
//       rotateY: -10,
//       rotateX: 5,
//     },
//     animate: {
//       scale: 1,
//       opacity: 1,
//       rotateY: 0,
//       rotateX: 0,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut",
//       },
//     },
//     transform: {
//       scale: 1.05,
//       rotateY: 5,
//       rotateX: -5,
//       transition: {
//         duration: 2,
//         ease: "easeInOut",
//       },
//     },
//   };

//   // 3D Floating design animation
//   const floatingDesign = {
//     initial: { y: 0, rotateY: 0, rotateX: 0 },
//     animate: {
//       y: [0, -15, 0],
//       rotateY: [0, 5, 0, -5, 0],
//       rotateX: [0, 3, 0, -3, 0],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   // 3D Paint splash animation
//   const paintSplash = {
//     initial: { scale: 0, opacity: 0, rotateZ: -10, rotateY: -20 },
//     animate: {
//       scale: 1,
//       opacity: 0.8,
//       rotateZ: 0,
//       rotateY: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   // 3D Particle animation
//   const particleFloat = {
//     initial: { y: 0, rotateX: 0, rotateY: 0, opacity: 0 },
//     animate: {
//       y: [0, -30, 0],
//       rotateX: [0, 180, 360],
//       rotateY: [0, 180, 360],
//       opacity: [0, 0.7, 0],
//       transition: {
//         duration: 10 + Math.random() * 10,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: Math.random() * 5,
//       },
//     },
//   };

//   // Handle wall transformation
//   const handleTransformWall = () => {
//     setIsTransforming(true);
//     controls.start("transform");
//     setTimeout(() => {
//       setIsTransforming(false);
//       controls.start("animate");
//     }, 2000);
//   };

//   // Handle gallery toggle
//   const handleToggleGallery = () => {
//     setIsGalleryOpen(!isGalleryOpen);
//   };

//   // Handle 3D showcase
//   const handle3DShowcase = () => {
//     setIs3DShowcaseOpen(true);
//     setIsAutoRotating(true);
//   };

//   // Handle design selection
//   const handleSelectDesign = (design) => {
//     setSelectedDesign(design);
//     setIsAutoRotating(false);
//   };

//   // Handle close 3D showcase
//   const handleClose3DShowcase = () => {
//     setIs3DShowcaseOpen(false);
//     setSelectedDesign(null);
//     setIsAutoRotating(true);
//   };

//   // Handle carousel navigation
//   const handlePrevDesign = () => {
//     setCarouselRotation((prev) => (prev - 72 + 360) % 360);
//     setIsAutoRotating(false);
//   };

//   const handleNextDesign = () => {
//     setCarouselRotation((prev) => (prev + 72) % 360);
//     setIsAutoRotating(false);
//   };

//   return (
//     <section
//       id="home"
//       ref={heroRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       style={{ perspective: "1000px" }}
//     >
//       {/* Background with rotating images */}
//       <motion.div
//         className="absolute inset-0 z-0"
//         style={{
//           y: yBg,
//           opacity,
//           rotateX,
//           rotateY,
//           transformStyle: "preserve-3d",
//         }}
//       >
//         {/* <AnimatePresence mode="wait">
//           <motion.div
//             key={currentImageIndex}
//             className="absolute inset-0"
//             initial={{ opacity: 0, scale: 1.1, rotateY: -10 }}
//             animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//             exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage: `url(${bgImages[currentImageIndex]})`,
//                 transform: "translateZ(-50px)",
//               }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
//           </motion.div>
//         </AnimatePresence> */}

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentImageIndex}
//             className="absolute inset-0"
//             initial={{ opacity: 0, scale: 1.1, rotateY: -10 }}
//             animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//             exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             {/* Background Video */}
//             <motion.video
//               key={bgVideos[currentImageIndex].id}
//               className="absolute inset-0 w-full h-full object-cover"
//               src={bgVideos[currentImageIndex].src}
//               poster={bgVideos[currentImageIndex].poster}
//               autoPlay
//               muted
//               loop
//               playsInline
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1 }}
//               style={{
//                 transform: "translateZ(-50px)",
//               }}
//             />

//             {/* Overlay Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
//           </motion.div>
//         </AnimatePresence>

//         {/* Animated gradient overlay with brand colors */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#0A072C]/30 via-transparent to-[#A55E83]/30" />

//         {/* 3D Moving orbs with brand colors */}
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-30"
//           style={{
//             x: orbX1,
//             y: orbY1,
//             background: "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
//             transform: "translateZ(20px)",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-30"
//           style={{
//             x: orbX2,
//             y: orbY2,
//             background: "linear-gradient(135deg, #A55E83, #7E1D1D)",
//             transform: "translateZ(30px)",
//           }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-20"
//           style={{
//             x: orbX3,
//             y: orbY3,
//             background: "linear-gradient(135deg, #FBC410, #E95F15)",
//             transform: "translateZ(10px)",
//           }}
//         />

//         {/* 3D Floating particles */}
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             className="absolute rounded-full blur-sm"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               backgroundColor: particle.color,
//               transform: "translateZ(5px)",
//             }}
//             variants={particleFloat}
//             initial="initial"
//             animate="animate"
//           />
//         ))}
//       </motion.div>

//       {/* 3D Wall mockups with designs */}
//       <div
//         className="absolute inset-0 z-5 pointer-events-none"
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {/* Main 3D wall mockup */}
//         <motion.div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 md:w-200 md:h-[500px] bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden"
//           variants={wallVariants}
//           initial="initial"
//           animate={controls}
//           style={{
//             perspective: "1000px",
//             transformStyle: "preserve-3d",
//             transform: "translateZ(50px)",
//           }}
//         >
//           <div className="relative w-full h-full">
//             <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={currentImageIndex}
//                 src={bgImages[currentImageIndex]}
//                 alt="Wall design"
//                 className="absolute inset-0 w-full h-full object-cover"
//                 initial={{ opacity: 0, scale: 1.1, rotateY: -5 }}
//                 animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//                 exit={{ opacity: 0, scale: 0.9, rotateY: 5 }}
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//                 style={{ transform: "translateZ(10px)" }}
//               />
//             </AnimatePresence>

//             {/* 3D Wall frame */}
//             <div
//               className="absolute inset-0 border-4 border-white/20 rounded-lg"
//               style={{
//                 boxShadow: "0 0 20px rgba(255,255,255,0.2) inset",
//                 transform: "translateZ(5px)",
//               }}
//             />

//             {/* 3D Paint splash effect */}
//             {isTransforming && (
//               <motion.div
//                 className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#1A4CB6] to-[#A55E83] opacity-70 blur-xl"
//                 variants={paintSplash}
//                 initial="initial"
//                 animate="animate"
//                 style={{ transform: "translateZ(20px)" }}
//               />
//             )}
//           </div>
//         </motion.div>

//         {/* 3D Floating design samples */}
//         {/* {designSamples.map((sample, index) => (
//           <motion.div
//             key={sample.id}
//             className="absolute w-20 h-24 md:w-28 md:h-36 rounded-lg overflow-hidden shadow-lg"
//             style={{
//               left: `${sample.x}%`,
//               top: `${sample.y}%`,
//               zIndex: 10 - index,
//               transform: `translateZ(${sample.z}px) rotateY(${sample.rotate}deg)`,
//               transformStyle: "preserve-3d",
//             }}
//             variants={floatingDesign}
//             initial="initial"
//             animate="animate"
//             whileHover={{
//               scale: 1.1,
//               zIndex: 20,
//               rotateY: 0,
//               rotateX: 0,
//               transform: "translateZ(100px)",
//             }}
//             transition={{ delay: index * 0.2 }}
//           >
//             <img
//               src={sample.image}
//               alt={`Design sample ${sample.id}`}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//           </motion.div>
//         ))} */}
//       </div>

//       {/* 3D Image indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//         {bgImages.map((_, index) => (
//           <motion.button
//             key={index}
//             className={`h-3 rounded-full transition-all duration-300 ${
//               index === currentImageIndex
//                 ? "bg-white w-8"
//                 : "bg-white/50 hover:bg-white/70"
//             }`}
//             onClick={() => setCurrentImageIndex(index)}
//             whileHover={{ scale: 1.2, transform: "translateZ(10px)" }}
//             whileTap={{ scale: 0.9 }}
//             style={{ transformStyle: "preserve-3d" }}
//           />
//         ))}
//       </div>

//       {/* 3D Pixel animation elements */}
//       {/* <motion.div
//         className="absolute top-1/4 right-1/4 grid grid-cols-5 gap-1 z-10"
//         variants={{
//           hidden: { opacity: 0 },
//           show: {
//             opacity: 1,
//             transition: {
//               staggerChildren: 0.05,
//               delayChildren: 0.5,
//             },
//           },
//         }}
//         initial="hidden"
//         animate={isInView ? "show" : "hidden"}
//         style={{ transform: "translateZ(20px)" }}
//       >
//         {[...Array(25)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="w-2 h-2 rounded-sm"
//             style={{
//               background:
//                 i % 3 === 0 ? "#1A4CB6" : i % 3 === 1 ? "#0C8FF2" : "#FBC410",
//               opacity: 0.7,
//               transform: `translateZ(${(i % 5) * 5}px)`,
//             }}
//             variants={{
//               hidden: { opacity: 0, scale: 0, rotateY: -90 },
//               show: {
//                 opacity: 1,
//                 scale: 1,
//                 rotateY: 0,
//                 transition: {
//                   duration: 0.5,
//                   ease: "easeOut",
//                 },
//               },
//             }}
//             transition={{ delay: i * 0.05 }}
//           />
//         ))}
//       </motion.div> */}

//       {/* Content */}
//       <motion.div
//         className="container relative z-10 text-center px-4"
//         style={{
//           y: yText,
//           opacity,
//           transform: "translateZ(100px)",
//           transformStyle: "preserve-3d",
//         }}
//         variants={container}
//         initial="hidden"
//         animate={isInView ? "show" : "hidden"}
//       >
//         {/* <motion.h1
//           className="text-5xl md:text-7xl font-bold mb-4 text-white"
//           variants={item}
//           style={{
//             textShadow: "0 5px 15px rgba(0,0,0,0.3)",
//             transform: "translateZ(20px)",
//           }}
//         >
//           Pixel2Surface
//         </motion.h1> */}

//         {/* <motion.p
//           className="text-xl md:text-2xl mb-2 text-white"
//           variants={item}
//           style={{ transform: "translateZ(15px)" }}
//         >
//           Every surface has a story.
//         </motion.p> */}

//         {/* <motion.p
//           className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90"
//           variants={item}
//           style={{ transform: "translateZ(10px)" }}
//         >
//           Transform your walls into art.
//         </motion.p> */}

//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 justify-center mb-4 pt-80"
//           variants={item}
//           style={{ transform: "translateZ(15px)" }}
//         >
//           <motion.div
//             whileHover={{ scale: 1.05, transform: "translateZ(20px)" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button variant="primary" onClick={handle3DShowcase}>
//               View Designs
//             </Button>
//           </motion.div>
//           {/* <motion.div
//             whileHover={{ scale: 1.05, transform: "translateZ(20px)" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button variant="secondary" onClick={handleToggleGallery}>
//               3D Gallery
//             </Button>
//           </motion.div> */}
//         </motion.div>

//         {/* 3D Decorative wave element */}
//         <motion.div
//           className=" h-1 w-32 mx-auto rounded-full"
//           style={{
//             background:
//               "linear-gradient(90deg, #1A4CB6, #0C8FF2, #FBC410, #E95F15)",
//             transform: "translateZ(10px)",
//             boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
//           }}
//           initial={{ width: 0 }}
//           animate={{ width: "8rem" }}
//           transition={{ duration: 1, delay: 0.5 }}
//         />
//       </motion.div>

//       {/* 3D Scroll indicator */}
//       <motion.div
//         className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         style={{ transform: "translateZ(30px)" }}
//       >
//         <motion.div
//           className="w-10 h-16 rounded-full border-2 border-white/50 flex justify-center pt-2"
//           whileHover={{
//             scale: 1.1,
//             borderColor: "white",
//             transform: "translateZ(10px)",
//           }}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <FaMouse className="text-white/70 text-xs" />
//           <motion.div
//             className="w-1 h-3 rounded-full bg-white/70 absolute top-6 left-1/2 transform -translate-x-1/2"
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//         </motion.div>
//       </motion.div>

//       {/* 3D Floating paint splashes */}
//       <motion.div
//         className="absolute top-20 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-[#1A4CB6]/30 to-[#A55E83]/30 blur-xl"
//         animate={{
//           y: [0, -20, 0],
//           x: [0, 10, 0],
//           scale: [1, 1.2, 1],
//           rotateY: [0, 180, 360],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           repeatType: "reverse",
//           ease: "easeInOut",
//         }}
//         style={{ transform: "translateZ(20px)" }}
//       />
//       <motion.div
//         className="absolute bottom-32 left-20 w-20 h-20 rounded-full bg-gradient-to-br from-[#FBC410]/30 to-[#E95F15]/30 blur-xl"
//         animate={{
//           y: [0, 15, 0],
//           x: [0, -15, 0],
//           scale: [1, 0.8, 1],
//           rotateX: [0, 180, 360],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           repeatType: "reverse",
//           ease: "easeInOut",
//           delay: 1,
//         }}
//         style={{ transform: "translateZ(15px)" }}
//       />

//       {/* 3D Gallery Modal */}
//       <AnimatePresence>
//         {isGalleryOpen && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A072C]/80 backdrop-blur-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={handleToggleGallery}
//           >
//             <motion.div
//               className="relative w-full max-w-6xl h-4/5 bg-white/10 backdrop-blur-lg rounded-2xl p-8 overflow-hidden"
//               style={{ transformStyle: "preserve-3d" }}
//               initial={{ scale: 0.8, rotateY: -10, opacity: 0 }}
//               animate={{ scale: 1, rotateY: 0, opacity: 1 }}
//               exit={{ scale: 0.8, rotateY: 10, opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="relative w-full h-full flex items-center justify-center">
//                 <motion.div
//                   className="relative w-full h-full max-w-4xl max-h-[400px] rounded-xl overflow-hidden shadow-2xl"
//                   style={{ transformStyle: "preserve-3d" }}
//                   whileHover={{ rotateY: 5, rotateX: -5 }}
//                 >
//                   <img
//                     src={bgImages[currentImageIndex]}
//                     alt="Wall design"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                 </motion.div>
//               </div>

//               {/* <button
//                 className="absolute top-60 z-100 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                 onClick={handleToggleGallery}
//               >
//                 <FaTimes className="text-white" />
//               </button> */}

//               <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
//                 {bgImages.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`h-3 rounded-full transition-all duration-300 ${
//                       index === currentImageIndex
//                         ? "bg-white w-8"
//                         : "bg-white/50 hover:bg-white/70"
//                     }`}
//                     onClick={() => setCurrentImageIndex(index)}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Enhanced 3D Showcase Modal */}
//       <AnimatePresence>
//         {is3DShowcaseOpen && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A072C]/80 backdrop-blur-md overflow-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="relative w-full h-full flex items-center justify-center"
//               style={{
//                 perspective: "1200px",
//                 transformStyle: "preserve-3d",
//               }}
//             >
//               {/* 3D Carousel Container */}
//               <motion.div
//                 className="relative w-full h-full max-w-4xl max-h-[600px] flex items-center justify-center"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: `rotateY(${carouselRotation}deg)`,
//                 }}
//               >
//                 {/* 3D Carousel Items */}
//                 {designSamples.map((sample, index) => {
//                   const angle = (360 / designSamples.length) * index;
//                   const translateZ = 300;

//                   return (
//                     <motion.div
//                       key={sample.id}
//                       className="absolute w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
//                       style={{
//                         transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
//                         transformStyle: "preserve-3d",
//                       }}
//                       whileHover={{
//                         scale: 1.1,
//                         boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
//                       }}
//                       onClick={() => handleSelectDesign(sample)}
//                     >
//                       <img
//                         src={sample.image}
//                         alt={`Design sample ${sample.id}`}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//                       <div className="absolute bottom-0 left-0 right-0 p-6">
//                         <h3 className="text-white text-xl font-bold mb-2">
//                           Design {sample.id}
//                         </h3>
//                         <p className="text-white/80">{sample.category}</p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>

//               {/* Carousel Navigation */}
//               <button
//                 className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
//                 onClick={handlePrevDesign}
//               >
//                 <FaArrowLeft className="text-white" />
//               </button>
//               <button
//                 className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
//                 onClick={handleNextDesign}
//               >
//                 <FaArrowRight className="text-white" />
//               </button>

//               {/* Floating Design Details */}
//               <AnimatePresence>
//                 {selectedDesign && (
//                   <motion.div
//                     className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 bg-white/10 backdrop-blur-lg rounded-xl p-6"
//                     initial={{ opacity: 0, y: 50, rotateX: 10 }}
//                     animate={{ opacity: 1, y: 0, rotateX: 0 }}
//                     exit={{ opacity: 0, y: 50, rotateX: 10 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <div className="flex items-start space-x-4">
//                       <img
//                         src={selectedDesign.image}
//                         alt={selectedDesign.category}
//                         className="w-20 h-20 rounded-lg object-cover"
//                       />
//                       <div className="flex-1">
//                         <h3 className="text-white text-xl font-bold">
//                           Design {selectedDesign.id}
//                         </h3>
//                         <p className="text-white/80">
//                           {selectedDesign.category} Collection
//                         </p>
//                         <p className="text-white/60 text-sm mt-2">
//                           {selectedDesign.description}
//                         </p>
//                         <div className="mt-4 flex space-x-2">
//                           <button className="px-4 py-2 bg-[#1A4CB6] text-white rounded-lg hover:bg-[#0C8FF2] transition-colors flex items-center gap-2">
//                             <FaEye /> View Details
//                           </button>
//                           <button className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2">
//                             <FaHeart /> Add to Favorites
//                           </button>
//                         </div>
//                       </div>
//                       <button
//                         className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                         onClick={() => {
//                           setSelectedDesign(null);
//                           setIsAutoRotating(true);
//                         }}
//                       >
//                         <FaTimes />
//                       </button>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Close Button */}
//               <button
//                 className="absolute top-22 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
//                 onClick={handleClose3DShowcase}
//               >
//                 <FaTimes />
//               </button>

//               {/* Auto-rotate Toggle */}
//               <button
//                 className="absolute bottom-8 right-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors z-10 flex items-center gap-2"
//                 onClick={() => setIsAutoRotating(!isAutoRotating)}
//               >
//                 {isAutoRotating ? <FaPause /> : <FaPlay />}
//                 {isAutoRotating ? "Pause Rotation" : "Resume Rotation"}
//               </button>

//               {/* Instructions */}
//               <div className="absolute bottom-8 left-8 text-white/60 text-center z-10">
//                 <p>Click on any design to view details</p>
//                 <p className="text-sm mt-1">Use arrow buttons to navigate</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Hero;

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { FaMouse } from "react-icons/fa";
import pixel2Video from "../../assets/video/pixel2-video.mp4";

// Single background video
const bgVideo = {
  src: pixel2Video,
  poster: "https://picsum.photos/seed/wallart1/1920/1080.jpg",
};

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-80 md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo.src}
          poster={bgVideo.poster}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay Gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-10 h-16 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <FaMouse className="text-white/70 text-xs" />
          <div className="w-1 h-3 rounded-full bg-white/70 absolute top-6 left-1/2 transform -translate-x-1/2" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
