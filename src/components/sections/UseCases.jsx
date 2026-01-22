// // // // components/sections/UseCases.jsx
// // // import React, { useState, useRef, useEffect } from "react";
// // // import { motion, AnimatePresence, useInView } from "framer-motion";
// // // import SectionTitle from "../ui/SectionTitle";

// // // const useCases = [
// // //   {
// // //     id: 1,
// // //     title: "Home",
// // //     description:
// // //       "Transform your living spaces into personalized art galleries.",
// // //     icon: "🏠",
// // //     image: "https://picsum.photos/seed/homewall/600/400.jpg",
// // //     gallery: [
// // //       "https://picsum.photos/seed/living1/400/300.jpg",
// // //       "https://picsum.photos/seed/living2/400/300.jpg",
// // //       "https://picsum.photos/seed/living3/400/300.jpg",
// // //     ],
// // //     features: [
// // //       "Custom designs",
// // //       "Personalized themes",
// // //       "Family-friendly materials",
// // //     ],
// // //     color: "from-blue-500 to-cyan-500",
// // //     stats: { projects: "500+", satisfaction: "98%" },
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Office",
// // //     description: "Create inspiring work environments that boost creativity.",
// // //     icon: "🏢",
// // //     image: "https://picsum.photos/seed/officewall/600/400.jpg",
// // //     gallery: [
// // //       "https://picsum.photos/seed/office1/400/300.jpg",
// // //       "https://picsum.photos/seed/office2/400/300.jpg",
// // //       "https://picsum.photos/seed/office3/400/300.jpg",
// // //     ],
// // //     features: [
// // //       "Branding integration",
// // //       "Productivity boosters",
// // //       "Sound-absorbing materials",
// // //     ],
// // //     color: "from-green-500 to-teal-500",
// // //     stats: { projects: "300+", satisfaction: "95%" },
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Hotel",
// // //     description: "Offer guests unique, memorable experiences in every room.",
// // //     icon: "🏨",
// // //     image: "https://picsum.photos/seed/hotelwall/600/400.jpg",
// // //     gallery: [
// // //       "https://picsum.photos/seed/hotel1/400/300.jpg",
// // //       "https://picsum.photos/seed/hotel2/400/300.jpg",
// // //       "https://picsum.photos/seed/hotel3/400/300.jpg",
// // //     ],
// // //     features: ["Thematic designs", "Durability", "Easy maintenance"],
// // //     color: "from-purple-500 to-pink-500",
// // //     stats: { projects: "200+", satisfaction: "99%" },
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "School",
// // //     description:
// // //       "Engage students with interactive and educational wall designs.",
// // //     icon: "🏫",
// // //     image: "https://picsum.photos/seed/schoolwall/600/400.jpg",
// // //     gallery: [
// // //       "https://picsum.photos/seed/school1/400/300.jpg",
// // //       "https://picsum.photos/seed/school2/400/300.jpg",
// // //       "https://picsum.photos/seed/school3/400/300.jpg",
// // //     ],
// // //     features: ["Educational content", "Interactive elements", "Safe materials"],
// // //     color: "from-yellow-500 to-orange-500",
// // //     stats: { projects: "150+", satisfaction: "97%" },
// // //   },
// // //   {
// // //     id: 5,
// // //     title: "Showroom",
// // //     description: "Make your products stand out with stunning backdrops.",
// // //     icon: "🏬",
// // //     image: "https://picsum.photos/seed/showroomwall/600/400.jpg",
// // //     gallery: [
// // //       "https://picsum.photos/seed/showroom1/400/300.jpg",
// // //       "https://picsum.photos/seed/showroom2/400/300.jpg",
// // //       "https://picsum.photos/seed/showroom3/400/300.jpg",
// // //     ],
// // //     features: ["Brand consistency", "Product highlighting", "Modular designs"],
// // //     color: "from-red-500 to-pink-500",
// // //     stats: { projects: "180+", satisfaction: "96%" },
// // //   },
// // //   {
// // //     id: 6,
// // //     title: "Restaurant",
// // //     description: "Enhance dining ambiance with thematic wall art.",
// // //     icon: "🍽️",
// // //     image: "https://picsum.photos/seed/restaurantwall/600/400.jpg",
// // //     gallery: [
// // //       "https://picsum.photos/seed/restaurant1/400/300.jpg",
// // //       "https://picsum.photos/seed/restaurant2/400/300.jpg",
// // //       "https://picsum.photos/seed/restaurant3/400/300.jpg",
// // //     ],
// // //     features: ["Atmosphere creation", "Food-safe materials", "Easy cleaning"],
// // //     color: "from-indigo-500 to-purple-500",
// // //     stats: { projects: "250+", satisfaction: "98%" },
// // //   },
// // // ];

// // // const UseCases = () => {
// // //   const [selectedUseCase, setSelectedUseCase] = useState(null);
// // //   const [activeGalleryImage, setActiveGalleryImage] = useState(0);
// // //   const [filter, setFilter] = useState("all");
// // //   const sectionRef = useRef(null);
// // //   const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

// // //   // Auto-rotate gallery images
// // //   useEffect(() => {
// // //     if (!selectedUseCase) return;

// // //     const interval = setInterval(() => {
// // //       setActiveGalleryImage(
// // //         (prev) => (prev + 1) % selectedUseCase.gallery.length,
// // //       );
// // //     }, 3000);

// // //     return () => clearInterval(interval);
// // //   }, [selectedUseCase]);

// // //   const openUseCaseDetails = (useCase) => {
// // //     setSelectedUseCase(useCase);
// // //     setActiveGalleryImage(0);
// // //   };

// // //   const closeUseCaseDetails = () => {
// // //     setSelectedUseCase(null);
// // //   };

// // //   const filteredUseCases =
// // //     filter === "all"
// // //       ? useCases
// // //       : useCases.filter((useCase) =>
// // //           useCase.title.toLowerCase().includes(filter.toLowerCase()),
// // //         );

// // //   // Animation variants
// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     show: {
// // //       opacity: 1,
// // //       transition: {
// // //         staggerChildren: 0.1,
// // //         delayChildren: 0.2,
// // //       },
// // //     },
// // //   };

// // //   const itemVariants = {
// // //     hidden: { opacity: 0, y: 30, scale: 0.9 },
// // //     show: {
// // //       opacity: 1,
// // //       y: 0,
// // //       scale: 1,
// // //       transition: {
// // //         duration: 0.5,
// // //         type: "spring",
// // //         stiffness: 100,
// // //       },
// // //     },
// // //   };

// // //   const modalVariants = {
// // //     hidden: { opacity: 0 },
// // //     show: {
// // //       opacity: 1,
// // //       transition: {
// // //         when: "beforeChildren",
// // //         staggerChildren: 0.1,
// // //       },
// // //     },
// // //     exit: {
// // //       opacity: 0,
// // //       transition: {
// // //         when: "afterChildren",
// // //       },
// // //     },
// // //   };

// // //   const modalContentVariants = {
// // //     hidden: { scale: 0.9, opacity: 0 },
// // //     show: {
// // //       scale: 1,
// // //       opacity: 1,
// // //       transition: {
// // //         duration: 0.3,
// // //         type: "spring",
// // //         stiffness: 300,
// // //         damping: 30,
// // //       },
// // //     },
// // //     exit: {
// // //       scale: 0.9,
// // //       opacity: 0,
// // //       transition: {
// // //         duration: 0.2,
// // //       },
// // //     },
// // //   };

// // //   return (
// // //     <section
// // //       id="use-cases"
// // //       ref={sectionRef}
// // //       className="section-padding bg-gray-50 relative overflow-hidden"
// // //     >
// // //       {/* Background decoration */}
// // //       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
// // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
// // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
// // //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
// // //       </div>

// // //       <div className="container relative z-10">
// // //         <SectionTitle
// // //           title="Where It Works"
// // //           subtitle="Our designs transform any space into something extraordinary"
// // //         />

// // //         {/* Filter Tabs */}
// // //         <div className="flex flex-wrap justify-center gap-3 mb-12">
// // //           <button
// // //             className={`px-5 py-2 rounded-full transition-all duration-300 ${
// // //               filter === "all"
// // //                 ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
// // //                 : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
// // //             }`}
// // //             onClick={() => setFilter("all")}
// // //           >
// // //             All Spaces
// // //           </button>
// // //           <button
// // //             className={`px-5 py-2 rounded-full transition-all duration-300 ${
// // //               filter === "home"
// // //                 ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
// // //                 : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
// // //             }`}
// // //             onClick={() => setFilter("home")}
// // //           >
// // //             Residential
// // //           </button>
// // //           <button
// // //             className={`px-5 py-2 rounded-full transition-all duration-300 ${
// // //               filter === "office" || filter === "showroom"
// // //                 ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
// // //                 : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
// // //             }`}
// // //             onClick={() => setFilter("commercial")}
// // //           >
// // //             Commercial
// // //           </button>
// // //           <button
// // //             className={`px-5 py-2 rounded-full transition-all duration-300 ${
// // //               filter === "hotel" || filter === "restaurant"
// // //                 ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
// // //                 : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
// // //             }`}
// // //             onClick={() => setFilter("hospitality")}
// // //           >
// // //             Hospitality
// // //           </button>
// // //         </div>

// // //         {/* Use Cases Grid */}
// // //         <motion.div
// // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           animate={isInView ? "show" : "hidden"}
// // //         >
// // //           {filteredUseCases.map((useCase, index) => (
// // //             <motion.div
// // //               key={useCase.id}
// // //               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
// // //               variants={itemVariants}
// // //               whileHover={{ y: -10 }}
// // //               onClick={() => openUseCaseDetails(useCase)}
// // //             >
// // //               <div className="relative h-56 overflow-hidden">
// // //                 <img
// // //                   src={useCase.image}
// // //                   alt={useCase.title}
// // //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// // //                 />

// // //                 {/* Gradient Overlay */}
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

// // //                 {/* View More Indicator */}
// // //                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// // //                   <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
// // //                     <svg
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       className="h-6 w-6 text-gray-800"
// // //                       fill="none"
// // //                       viewBox="0 0 24 24"
// // //                       stroke="currentColor"
// // //                     >
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth={2}
// // //                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
// // //                       />
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth={2}
// // //                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
// // //                       />
// // //                     </svg>
// // //                   </div>
// // //                 </div>

// // //                 {/* Category Badge */}
// // //                 <div className="absolute top-4 left-4">
// // //                   <div
// // //                     className={`px-3 py-1 bg-gradient-to-r ${useCase.color} text-white rounded-full text-sm font-medium shadow-lg`}
// // //                   >
// // //                     {useCase.title}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="p-6">
// // //                 <div className="flex items-center mb-4">
// // //                   <span className="text-3xl mr-3">{useCase.icon}</span>
// // //                   <h3 className="text-xl font-bold">{useCase.title}</h3>
// // //                 </div>
// // //                 <p className="text-gray-600 mb-4">{useCase.description}</p>

// // //                 {/* Stats */}
// // //                 <div className="flex justify-between text-sm text-gray-500">
// // //                   <span>{useCase.stats.projects} Projects</span>
// // //                   <span>{useCase.stats.satisfaction} Satisfaction</span>
// // //                 </div>

// // //                 {/* View More Button */}
// // //                 <div className="mt-4 flex items-center text-blue-600 font-medium">
// // //                   <span>View Examples</span>
// // //                   <svg
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                     className="h-4 w-4 ml-1"
// // //                     fill="none"
// // //                     viewBox="0 0 24 24"
// // //                     stroke="currentColor"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth={2}
// // //                       d="M9 5l7 7-7 7"
// // //                     />
// // //                   </svg>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>
// // //       </div>

// // //       {/* Detailed Use Case Modal */}
// // //       <AnimatePresence>
// // //         {selectedUseCase && (
// // //           <motion.div
// // //             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
// // //             variants={modalVariants}
// // //             initial="hidden"
// // //             animate="show"
// // //             exit="exit"
// // //             onClick={closeUseCaseDetails}
// // //           >
// // //             <motion.div
// // //               className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
// // //               variants={modalContentVariants}
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               {/* Header with Gallery */}
// // //               <div className="relative h-80 overflow-hidden">
// // //                 <AnimatePresence mode="wait">
// // //                   <motion.img
// // //                     key={activeGalleryImage}
// // //                     src={selectedUseCase.gallery[activeGalleryImage]}
// // //                     alt={selectedUseCase.title}
// // //                     className="w-full h-full object-cover"
// // //                     initial={{ opacity: 0, x: 100 }}
// // //                     animate={{ opacity: 1, x: 0 }}
// // //                     exit={{ opacity: 0, x: -100 }}
// // //                     transition={{ duration: 0.5 }}
// // //                   />
// // //                 </AnimatePresence>

// // //                 {/* Gallery Indicators */}
// // //                 <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
// // //                   {selectedUseCase.gallery.map((_, index) => (
// // //                     <button
// // //                       key={index}
// // //                       className={`w-2 h-2 rounded-full transition-all duration-300 ${
// // //                         index === activeGalleryImage
// // //                           ? "w-8 bg-white"
// // //                           : "bg-white/50"
// // //                       }`}
// // //                       onClick={() => setActiveGalleryImage(index)}
// // //                     />
// // //                   ))}
// // //                 </div>

// // //                 {/* Close Button */}
// // //                 <button
// // //                   className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
// // //                   onClick={closeUseCaseDetails}
// // //                 >
// // //                   <svg
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                     className="h-6 w-6"
// // //                     fill="none"
// // //                     viewBox="0 0 24 24"
// // //                     stroke="currentColor"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth={2}
// // //                       d="M6 18L18 6M6 6l12 12"
// // //                     />
// // //                   </svg>
// // //                 </button>
// // //               </div>

// // //               {/* Content */}
// // //               <div className="p-6">
// // //                 <div className="flex items-center mb-4">
// // //                   <span className="text-4xl mr-3">{selectedUseCase.icon}</span>
// // //                   <h2 className="text-2xl font-bold">
// // //                     {selectedUseCase.title}
// // //                   </h2>
// // //                 </div>

// // //                 <p className="text-gray-600 mb-6">
// // //                   {selectedUseCase.description}
// // //                 </p>

// // //                 {/* Features */}
// // //                 <div className="mb-6">
// // //                   <h3 className="text-lg font-semibold mb-3">Key Features</h3>
// // //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
// // //                     {selectedUseCase.features.map((feature, index) => (
// // //                       <div key={index} className="flex items-center">
// // //                         <svg
// // //                           xmlns="http://www.w3.org/2000/svg"
// // //                           className="h-5 w-5 text-green-500 mr-2"
// // //                           viewBox="0 0 20 20"
// // //                           fill="currentColor"
// // //                         >
// // //                           <path
// // //                             fillRule="evenodd"
// // //                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
// // //                             clipRule="evenodd"
// // //                           />
// // //                         </svg>
// // //                         <span>{feature}</span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 {/* Stats */}
// // //                 <div className="grid grid-cols-2 gap-4 mb-6">
// // //                   <div
// // //                     className={`bg-gradient-to-r ${selectedUseCase.color} rounded-lg p-4 text-white`}
// // //                   >
// // //                     <div className="text-2xl font-bold">
// // //                       {selectedUseCase.stats.projects}
// // //                     </div>
// // //                     <div className="text-sm opacity-90">Completed Projects</div>
// // //                   </div>
// // //                   <div
// // //                     className={`bg-gradient-to-r ${selectedUseCase.color} rounded-lg p-4 text-white`}
// // //                   >
// // //                     <div className="text-2xl font-bold">
// // //                       {selectedUseCase.stats.satisfaction}
// // //                     </div>
// // //                     <div className="text-sm opacity-90">
// // //                       Client Satisfaction
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Action Buttons */}
// // //                 <div className="flex gap-3">
// // //                   <button
// // //                     className={`px-6 py-3 bg-gradient-to-r ${selectedUseCase.color} text-white rounded-lg font-medium hover:shadow-lg transition-shadow`}
// // //                   >
// // //                     View Portfolio
// // //                   </button>
// // //                   <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
// // //                     Get Quote
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </section>
// // //   );
// // // };

// // // export default UseCases;

// // import React, { useState, useRef, useEffect } from "react";
// // import {
// //   motion,
// //   AnimatePresence,
// //   useInView,
// //   useMotionValue,
// //   useSpring,
// //   useTransform,
// // } from "framer-motion";
// // import SectionTitle from "../ui/SectionTitle";

// // const useCases = [
// //   {
// //     id: 1,
// //     title: "Home",
// //     description:
// //       "Transform your living spaces into personalized art galleries.",
// //     icon: "🏠",
// //     image: "https://picsum.photos/seed/homewall/600/400.jpg",
// //     gallery: [
// //       "https://picsum.photos/seed/living1/400/300.jpg",
// //       "https://picsum.photos/seed/living2/400/300.jpg",
// //       "https://picsum.photos/seed/living3/400/300.jpg",
// //     ],
// //     features: [
// //       "Custom designs",
// //       "Personalized themes",
// //       "Family-friendly materials",
// //     ],
// //     color: "from-blue-500 to-cyan-500",
// //     stats: { projects: "500+", satisfaction: "98%" },
// //   },
// //   {
// //     id: 2,
// //     title: "Office",
// //     description: "Create inspiring work environments that boost creativity.",
// //     icon: "🏢",
// //     image: "https://picsum.photos/seed/officewall/600/400.jpg",
// //     gallery: [
// //       "https://picsum.photos/seed/office1/400/300.jpg",
// //       "https://picsum.photos/seed/office2/400/300.jpg",
// //       "https://picsum.photos/seed/office3/400/300.jpg",
// //     ],
// //     features: [
// //       "Branding integration",
// //       "Productivity boosters",
// //       "Sound-absorbing materials",
// //     ],
// //     color: "from-green-500 to-teal-500",
// //     stats: { projects: "300+", satisfaction: "95%" },
// //   },
// //   {
// //     id: 3,
// //     title: "Hotel",
// //     description: "Offer guests unique, memorable experiences in every room.",
// //     icon: "🏨",
// //     image: "https://picsum.photos/seed/hotelwall/600/400.jpg",
// //     gallery: [
// //       "https://picsum.photos/seed/hotel1/400/300.jpg",
// //       "https://picsum.photos/seed/hotel2/400/300.jpg",
// //       "https://picsum.photos/seed/hotel3/400/300.jpg",
// //     ],
// //     features: ["Thematic designs", "Durability", "Easy maintenance"],
// //     color: "from-purple-500 to-pink-500",
// //     stats: { projects: "200+", satisfaction: "99%" },
// //   },
// //   {
// //     id: 4,
// //     title: "School",
// //     description:
// //       "Engage students with interactive and educational wall designs.",
// //     icon: "🏫",
// //     image: "https://picsum.photos/seed/schoolwall/600/400.jpg",
// //     gallery: [
// //       "https://picsum.photos/seed/school1/400/300.jpg",
// //       "https://picsum.photos/seed/school2/400/300.jpg",
// //       "https://picsum.photos/seed/school3/400/300.jpg",
// //     ],
// //     features: ["Educational content", "Interactive elements", "Safe materials"],
// //     color: "from-yellow-500 to-orange-500",
// //     stats: { projects: "150+", satisfaction: "97%" },
// //   },
// //   {
// //     id: 5,
// //     title: "Showroom",
// //     description: "Make your products stand out with stunning backdrops.",
// //     icon: "🏬",
// //     image: "https://picsum.photos/seed/showroomwall/600/400.jpg",
// //     gallery: [
// //       "https://picsum.photos/seed/showroom1/400/300.jpg",
// //       "https://picsum.photos/seed/showroom2/400/300.jpg",
// //       "https://picsum.photos/seed/showroom3/400/300.jpg",
// //     ],
// //     features: ["Brand consistency", "Product highlighting", "Modular designs"],
// //     color: "from-red-500 to-pink-500",
// //     stats: { projects: "180+", satisfaction: "96%" },
// //   },
// //   {
// //     id: 6,
// //     title: "Restaurant",
// //     description: "Enhance dining ambiance with thematic wall art.",
// //     icon: "🍽️",
// //     image: "https://picsum.photos/seed/restaurantwall/600/400.jpg",
// //     gallery: [
// //       "https://picsum.photos/seed/restaurant1/400/300.jpg",
// //       "https://picsum.photos/seed/restaurant2/400/300.jpg",
// //       "https://picsum.photos/seed/restaurant3/400/300.jpg",
// //     ],
// //     features: ["Atmosphere creation", "Food-safe materials", "Easy cleaning"],
// //     color: "from-indigo-500 to-purple-500",
// //     stats: { projects: "250+", satisfaction: "98%" },
// //   },
// // ];

// // const UseCases = () => {
// //   const [selectedUseCase, setSelectedUseCase] = useState(null);
// //   const [activeGalleryImage, setActiveGalleryImage] = useState(0);
// //   const [filter, setFilter] = useState("all");
// //   const [showcaseMode, setShowcaseMode] = useState(false);
// //   const [showcaseRotation, setShowcaseRotation] = useState(0);
// //   const [isAutoRotating, setIsAutoRotating] = useState(true);
// //   const sectionRef = useRef(null);
// //   const showcaseRef = useRef(null);
// //   const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

// //   // Mouse tracking for 3D effect
// //   const mouseX = useMotionValue(0.5);
// //   const mouseY = useMotionValue(0.5);
// //   const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
// //   const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

// //   // 3D rotation based on mouse position
// //   const rotateX = useTransform(springY, [0, 1], [10, -10]);
// //   const rotateY = useTransform(springX, [0, 1], [-10, 10]);

// //   // Auto-rotate gallery images
// //   useEffect(() => {
// //     if (!selectedUseCase) return;

// //     const interval = setInterval(() => {
// //       setActiveGalleryImage(
// //         (prev) => (prev + 1) % selectedUseCase.gallery.length,
// //       );
// //     }, 3000);

// //     return () => clearInterval(interval);
// //   }, [selectedUseCase]);

// //   // Auto-rotate showcase
// //   useEffect(() => {
// //     if (!isAutoRotating || !showcaseMode) return;

// //     const interval = setInterval(() => {
// //       setShowcaseRotation((prev) => (prev + 1) % 360);
// //     }, 50);

// //     return () => clearInterval(interval);
// //   }, [isAutoRotating, showcaseMode]);

// //   // Mouse move handler
// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       if (!sectionRef.current) return;
// //       const rect = sectionRef.current.getBoundingClientRect();

// //       mouseX.set((e.clientX - rect.left) / rect.width);
// //       mouseY.set((e.clientY - rect.top) / rect.height);
// //     };

// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   const openUseCaseDetails = (useCase) => {
// //     setSelectedUseCase(useCase);
// //     setActiveGalleryImage(0);
// //   };

// //   const closeUseCaseDetails = () => {
// //     setSelectedUseCase(null);
// //   };

// //   const openShowcase = () => {
// //     setShowcaseMode(true);
// //     setIsAutoRotating(true);
// //   };

// //   const closeShowcase = () => {
// //     setShowcaseMode(false);
// //     setIsAutoRotating(true);
// //   };

// //   const filteredUseCases =
// //     filter === "all"
// //       ? useCases
// //       : useCases.filter((useCase) =>
// //           useCase.title.toLowerCase().includes(filter.toLowerCase()),
// //         );

// //   // Animation variants
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     show: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //         delayChildren: 0.2,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 30, scale: 0.9, rotateY: -15 },
// //     show: {
// //       opacity: 1,
// //       y: 0,
// //       scale: 1,
// //       rotateY: 0,
// //       transition: {
// //         duration: 0.5,
// //         type: "spring",
// //         stiffness: 100,
// //       },
// //     },
// //   };

// //   const modalVariants = {
// //     hidden: { opacity: 0 },
// //     show: {
// //       opacity: 1,
// //       transition: {
// //         when: "beforeChildren",
// //         staggerChildren: 0.1,
// //       },
// //     },
// //     exit: {
// //       opacity: 0,
// //       transition: {
// //         when: "afterChildren",
// //       },
// //     },
// //   };

// //   const modalContentVariants = {
// //     hidden: { scale: 0.9, opacity: 0, rotateY: -15 },
// //     show: {
// //       scale: 1,
// //       opacity: 1,
// //       rotateY: 0,
// //       transition: {
// //         duration: 0.3,
// //         type: "spring",
// //         stiffness: 300,
// //         damping: 30,
// //       },
// //     },
// //     exit: {
// //       scale: 0.9,
// //       opacity: 0,
// //       rotateY: 15,
// //       transition: {
// //         duration: 0.2,
// //       },
// //     },
// //   };

// //   return (
// //     <section
// //       id="use-cases"
// //       ref={sectionRef}
// //       className="section-padding bg-gray-50 relative overflow-hidden"
// //       style={{ perspective: "1000px" }}
// //     >
// //       {/* Background decoration with 3D effect */}
// //       <motion.div
// //         className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
// //         style={{
// //           rotateX,
// //           rotateY,
// //           transformStyle: "preserve-3d",
// //         }}
// //       >
// //         <motion.div
// //           className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
// //           animate={{
// //             scale: [1, 1.2, 1],
// //             rotate: [0, 180, 360],
// //             x: [0, 50, 0],
// //             y: [0, -30, 0],
// //           }}
// //           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
// //           animate={{
// //             scale: [1, 0.8, 1],
// //             rotate: [0, -180, 360],
// //             x: [0, -50, 0],
// //             y: [0, 30, 0],
// //           }}
// //           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
// //           animate={{
// //             scale: [1, 1.1, 1],
// //             rotate: [0, 360, 0],
// //             x: [0, 30, 0],
// //             y: [0, -50, 0],
// //           }}
// //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //       </motion.div>

// //       <div className="container relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: -30 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <SectionTitle
// //             title="Where It Works"
// //             subtitle="Our designs transform any space into something extraordinary"
// //           />
// //         </motion.div>

// //         {/* 3D Showcase Button */}
// //         <motion.div
// //           className="flex justify-center mb-8"
// //           initial={{ opacity: 0, scale: 0.8 }}
// //           animate={
// //             isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
// //           }
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //         >
// //           <motion.button
// //             className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
// //             onClick={openShowcase}
// //             whileHover={{
// //               scale: 1.05,
// //               boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
// //             }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             <span className="flex items-center">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="h-5 w-5 mr-2"
// //                 viewBox="0 0 20 20"
// //                 fill="currentColor"
// //               >
// //                 <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
// //                   clipRule="evenodd"
// //                 />
// //               </svg>
// //               3D Showcase
// //             </span>
// //           </motion.button>
// //         </motion.div>

// //         {/* Filter Tabs */}
// //         <div className="flex flex-wrap justify-center gap-3 mb-12">
// //           {["all", "home", "commercial", "hospitality"].map((filterOption) => (
// //             <motion.button
// //               key={filterOption}
// //               className={`px-5 py-2 rounded-full transition-all duration-300 ${
// //                 filter === filterOption
// //                   ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
// //                   : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
// //               }`}
// //               onClick={() => setFilter(filterOption)}
// //               whileHover={{ scale: 1.05, y: -2 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {filterOption === "all" && "All Spaces"}
// //               {filterOption === "home" && "Residential"}
// //               {filterOption === "commercial" && "Commercial"}
// //               {filterOption === "hospitality" && "Hospitality"}
// //             </motion.button>
// //           ))}
// //         </div>

// //         {/* 3D Use Cases Grid */}
// //         <motion.div
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate={isInView ? "show" : "hidden"}
// //           style={{ transformStyle: "preserve-3d" }}
// //         >
// //           {filteredUseCases.map((useCase, index) => (
// //             <motion.div
// //               key={useCase.id}
// //               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
// //               variants={itemVariants}
// //               whileHover={{
// //                 y: -15,
// //                 scale: 1.05,
// //                 rotateY: 5,
// //                 boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
// //                 z: 50,
// //               }}
// //               style={{
// //                 transformStyle: "preserve-3d",
// //                 transform: `translateZ(${(index % 3) * 10}px)`,
// //               }}
// //               onClick={() => openUseCaseDetails(useCase)}
// //             >
// //               <div className="relative h-56 overflow-hidden">
// //                 <motion.img
// //                   src={useCase.image}
// //                   alt={useCase.title}
// //                   className="w-full h-full object-cover"
// //                   whileHover={{ scale: 1.1 }}
// //                   transition={{ duration: 0.7 }}
// //                 />

// //                 {/* 3D Gradient Overlay */}
// //                 <motion.div
// //                   className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
// //                   style={{ transform: "translateZ(20px)" }}
// //                 />

// //                 {/* 3D View More Indicator */}
// //                 <motion.div
// //                   className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// //                   style={{ transform: "translateZ(30px)" }}
// //                 >
// //                   <motion.div
// //                     className="bg-white/90 backdrop-blur-sm rounded-full p-3"
// //                     initial={{ scale: 0, rotate: -180 }}
// //                     animate={{ scale: 1, rotate: 0 }}
// //                     transition={{ duration: 0.3, delay: 0.1 }}
// //                   >
// //                     <svg
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       className="h-6 w-6 text-gray-800"
// //                       fill="none"
// //                       viewBox="0 0 24 24"
// //                       stroke="currentColor"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
// //                       />
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
// //                       />
// //                     </svg>
// //                   </motion.div>
// //                 </motion.div>

// //                 {/* 3D Category Badge */}
// //                 <motion.div
// //                   className="absolute top-4 left-4"
// //                   style={{ transform: "translateZ(25px)" }}
// //                 >
// //                   <div
// //                     className={`px-3 py-1 bg-gradient-to-r ${useCase.color} text-white rounded-full text-sm font-medium shadow-lg`}
// //                   >
// //                     {useCase.title}
// //                   </div>
// //                 </motion.div>
// //               </div>

// //               <div className="p-6" style={{ transform: "translateZ(10px)" }}>
// //                 <div className="flex items-center mb-4">
// //                   <span className="text-3xl mr-3">{useCase.icon}</span>
// //                   <h3 className="text-xl font-bold">{useCase.title}</h3>
// //                 </div>
// //                 <p className="text-gray-600 mb-4">{useCase.description}</p>

// //                 {/* Stats */}
// //                 <div className="flex justify-between text-sm text-gray-500">
// //                   <span>{useCase.stats.projects} Projects</span>
// //                   <span>{useCase.stats.satisfaction} Satisfaction</span>
// //                 </div>

// //                 {/* 3D View More Button */}
// //                 <motion.div
// //                   className="mt-4 flex items-center text-blue-600 font-medium"
// //                   whileHover={{ x: 5 }}
// //                 >
// //                   <span>View Examples</span>
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="h-4 w-4 ml-1"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M9 5l7 7-7 7"
// //                     />
// //                   </svg>
// //                 </motion.div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>

// //       {/* 3D Detailed Use Case Modal */}
// //       <AnimatePresence>
// //         {selectedUseCase && (
// //           <motion.div
// //             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
// //             variants={modalVariants}
// //             initial="hidden"
// //             animate="show"
// //             exit="exit"
// //             onClick={closeUseCaseDetails}
// //           >
// //             <motion.div
// //               className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
// //               variants={modalContentVariants}
// //               style={{ transformStyle: "preserve-3d" }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               {/* 3D Header with Gallery */}
// //               <div
// //                 className="relative h-80 overflow-hidden"
// //                 style={{ perspective: "1000px" }}
// //               >
// //                 <AnimatePresence mode="wait">
// //                   <motion.img
// //                     key={activeGalleryImage}
// //                     src={selectedUseCase.gallery[activeGalleryImage]}
// //                     alt={selectedUseCase.title}
// //                     className="w-full h-full object-cover"
// //                     initial={{ opacity: 0, x: 100, rotateY: -15 }}
// //                     animate={{ opacity: 1, x: 0, rotateY: 0 }}
// //                     exit={{ opacity: 0, x: -100, rotateY: 15 }}
// //                     transition={{ duration: 0.5 }}
// //                     style={{ transform: "translateZ(50px)" }}
// //                   />
// //                 </AnimatePresence>

// //                 {/* 3D Gallery Indicators */}
// //                 <div
// //                   className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
// //                   style={{ transform: "translateZ(30px)" }}
// //                 >
// //                   {selectedUseCase.gallery.map((_, index) => (
// //                     <motion.button
// //                       key={index}
// //                       className={`w-2 h-2 rounded-full transition-all duration-300 ${
// //                         index === activeGalleryImage
// //                           ? "w-8 bg-white"
// //                           : "bg-white/50"
// //                       }`}
// //                       onClick={() => setActiveGalleryImage(index)}
// //                       whileHover={{ scale: 1.2, y: -2 }}
// //                       whileTap={{ scale: 0.8 }}
// //                     />
// //                   ))}
// //                 </div>

// //                 {/* 3D Close Button */}
// //                 <motion.button
// //                   className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
// //                   onClick={closeUseCaseDetails}
// //                   style={{ transform: "translateZ(40px)" }}
// //                   whileHover={{ scale: 1.1, rotate: 90 }}
// //                   whileTap={{ scale: 0.9 }}
// //                 >
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="h-6 w-6"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M6 18L18 6M6 6l12 12"
// //                     />
// //                   </svg>
// //                 </motion.button>
// //               </div>

// //               {/* 3D Content */}
// //               <div className="p-6" style={{ transform: "translateZ(20px)" }}>
// //                 <div className="flex items-center mb-4">
// //                   <span className="text-4xl mr-3">{selectedUseCase.icon}</span>
// //                   <h2 className="text-2xl font-bold">
// //                     {selectedUseCase.title}
// //                   </h2>
// //                 </div>

// //                 <p className="text-gray-600 mb-6">
// //                   {selectedUseCase.description}
// //                 </p>

// //                 {/* 3D Features */}
// //                 <div className="mb-6">
// //                   <h3 className="text-lg font-semibold mb-3">Key Features</h3>
// //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
// //                     {selectedUseCase.features.map((feature, index) => (
// //                       <motion.div
// //                         key={index}
// //                         className="flex items-center"
// //                         initial={{ opacity: 0, x: -20 }}
// //                         animate={{ opacity: 1, x: 0 }}
// //                         transition={{ duration: 0.3, delay: index * 0.1 }}
// //                         whileHover={{ x: 5, scale: 1.05 }}
// //                       >
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           className="h-5 w-5 text-green-500 mr-2"
// //                           viewBox="0 0 20 20"
// //                           fill="currentColor"
// //                         >
// //                           <path
// //                             fillRule="evenodd"
// //                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
// //                             clipRule="evenodd"
// //                           />
// //                         </svg>
// //                         <span>{feature}</span>
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* 3D Stats */}
// //                 <div className="grid grid-cols-2 gap-4 mb-6">
// //                   <motion.div
// //                     className={`bg-gradient-to-r ${selectedUseCase.color} rounded-lg p-4 text-white`}
// //                     whileHover={{ scale: 1.05, y: -5 }}
// //                     style={{ transform: "translateZ(15px)" }}
// //                   >
// //                     <div className="text-2xl font-bold">
// //                       {selectedUseCase.stats.projects}
// //                     </div>
// //                     <div className="text-sm opacity-90">Completed Projects</div>
// //                   </motion.div>
// //                   <motion.div
// //                     className={`bg-gradient-to-r ${selectedUseCase.color} rounded-lg p-4 text-white`}
// //                     whileHover={{ scale: 1.05, y: -5 }}
// //                     style={{ transform: "translateZ(15px)" }}
// //                   >
// //                     <div className="text-2xl font-bold">
// //                       {selectedUseCase.stats.satisfaction}
// //                     </div>
// //                     <div className="text-sm opacity-90">
// //                       Client Satisfaction
// //                     </div>
// //                   </motion.div>
// //                 </div>

// //                 {/* 3D Action Buttons */}
// //                 <div className="flex gap-3">
// //                   <motion.button
// //                     className={`px-6 py-3 bg-gradient-to-r ${selectedUseCase.color} text-white rounded-lg font-medium hover:shadow-lg transition-shadow`}
// //                     whileHover={{ scale: 1.05, y: -3 }}
// //                     whileTap={{ scale: 0.95 }}
// //                   >
// //                     View Portfolio
// //                   </motion.button>
// //                   <motion.button
// //                     className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
// //                     whileHover={{ scale: 1.05, y: -3 }}
// //                     whileTap={{ scale: 0.95 }}
// //                   >
// //                     Get Quote
// //                   </motion.button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* 3D Showcase Modal */}
// //       <AnimatePresence>
// //         {showcaseMode && (
// //           <motion.div
// //             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md overflow-hidden"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //           >
// //             <motion.div
// //               ref={showcaseRef}
// //               className="relative w-full h-full flex items-center justify-center"
// //               style={{
// //                 perspective: "1200px",
// //                 transformStyle: "preserve-3d",
// //               }}
// //             >
// //               {/* 3D Carousel Container */}
// //               <motion.div
// //                 className="relative w-full h-full max-w-7xl max-h-[800px] flex items-center justify-center"
// //                 style={{
// //                   transformStyle: "preserve-3d",
// //                   transform: `rotateY(${showcaseRotation}deg)`,
// //                 }}
// //               >
// //                 {/* 3D Carousel Items */}
// //                 {filteredUseCases.map((useCase, index) => {
// //                   const angle = (360 / filteredUseCases.length) * index;
// //                   const translateZ = 300;

// //                   return (
// //                     <motion.div
// //                       key={useCase.id}
// //                       className="absolute w-80 h-96 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
// //                       style={{
// //                         transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
// //                         transformStyle: "preserve-3d",
// //                       }}
// //                       whileHover={{
// //                         scale: 1.1,
// //                         boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
// //                         z: 50,
// //                       }}
// //                       onClick={() => {
// //                         closeShowcase();
// //                         openUseCaseDetails(useCase);
// //                       }}
// //                     >
// //                       <img
// //                         src={useCase.image}
// //                         alt={useCase.title}
// //                         className="w-full h-full object-cover"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
// //                       <div className="absolute bottom-0 left-0 right-0 p-6">
// //                         <h3 className="text-white text-xl font-bold mb-2">
// //                           {useCase.title}
// //                         </h3>
// //                         <p className="text-white/80 text-sm">
// //                           {useCase.description}
// //                         </p>
// //                       </div>
// //                     </motion.div>
// //                   );
// //                 })}
// //               </motion.div>

// //               {/* 3D Navigation Controls */}
// //               <button
// //                 className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
// //                 onClick={() => {
// //                   setShowcaseRotation((prev) => (prev - 72 + 360) % 360);
// //                   setIsAutoRotating(false);
// //                 }}
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M15 19l-7-7 7-7"
// //                   />
// //                 </svg>
// //               </button>
// //               <button
// //                 className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
// //                 onClick={() => {
// //                   setShowcaseRotation((prev) => (prev + 72) % 360);
// //                   setIsAutoRotating(false);
// //                 }}
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M9 5l7 7-7 7"
// //                   />
// //                 </svg>
// //               </button>

// //               {/* 3D Close Button */}
// //               <button
// //                 className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
// //                 onClick={closeShowcase}
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               </button>

// //               {/* Auto-rotate Toggle */}
// //               <button
// //                 className="absolute bottom-8 right-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors z-10"
// //                 onClick={() => setIsAutoRotating(!isAutoRotating)}
// //               >
// //                 {isAutoRotating ? "Pause Rotation" : "Resume Rotation"}
// //               </button>

// //               {/* Instructions */}
// //               <div className="absolute bottom-8 left-8 text-white/60 text-center z-10">
// //                 <p>Click on any use case to view details</p>
// //                 <p className="text-sm mt-1">Use arrow buttons to navigate</p>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // };

// // export default UseCases;

// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useInView,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import {
//   FaHome,
//   FaBuilding,
//   FaHotel,
//   FaSchool,
//   FaStore,
//   FaUtensils,
//   FaArrowRight,
//   FaQuoteLeft,
//   FaQuoteRight,
//   FaStar,
//   FaTimes,
//   FaPlay,
//   FaPause,
//   FaFilter,
//   FaSearch,
//   FaHeart,
//   FaShare,
//   FaExpand,
// } from "react-icons/fa";
// import SectionTitle from "../ui/SectionTitle";

// const useCases = [
//   {
//     id: 1,
//     title: "Home",
//     description:
//       "Transform your living spaces into personalized art galleries.",
//     icon: <FaHome />,
//     image: "https://picsum.photos/seed/homewall/600/400.jpg",
//     gallery: [
//       "https://picsum.photos/seed/living1/400/300.jpg",
//       "https://picsum.photos/seed/living2/400/300.jpg",
//       "https://picsum.photos/seed/living3/400/300.jpg",
//     ],
//     features: [
//       "Custom designs",
//       "Personalized themes",
//       "Family-friendly materials",
//     ],
//     color: "#1A4CB6",
//     stats: { projects: "500+", satisfaction: "98%" },
//     testimonial:
//       "Pixel2Surface transformed our living room beyond our expectations. The design process was seamless and the result is stunning!",
//     author: "Sarah Johnson",
//     role: "Homeowner",
//   },
//   {
//     id: 2,
//     title: "Office",
//     description: "Create inspiring work environments that boost creativity.",
//     icon: <FaBuilding />,
//     image: "https://picsum.photos/seed/officewall/600/400.jpg",
//     gallery: [
//       "https://picsum.photos/seed/office1/400/300.jpg",
//       "https://picsum.photos/seed/office2/400/300.jpg",
//       "https://picsum.photos/seed/office3/400/300.jpg",
//     ],
//     features: [
//       "Branding integration",
//       "Productivity boosters",
//       "Sound-absorbing materials",
//     ],
//     color: "#0C8FF2",
//     stats: { projects: "300+", satisfaction: "95%" },
//     testimonial:
//       "Our office has never been more inspiring. Employee morale and creativity have skyrocketed since the redesign.",
//     author: "Michael Chen",
//     role: "Office Manager",
//   },
//   {
//     id: 3,
//     title: "Hotel",
//     description: "Offer guests unique, memorable experiences in every room.",
//     icon: <FaHotel />,
//     image: "https://picsum.photos/seed/hotelwall/600/400.jpg",
//     gallery: [
//       "https://picsum.photos/seed/hotel1/400/300.jpg",
//       "https://picsum.photos/seed/hotel2/400/300.jpg",
//       "https://picsum.photos/seed/hotel3/400/300.jpg",
//     ],
//     features: ["Thematic designs", "Durability", "Easy maintenance"],
//     color: "#A55E83",
//     stats: { projects: "200+", satisfaction: "99%" },
//     testimonial:
//       "Our guests love the new wall designs in our lobby and rooms. It has elevated our brand and increased positive reviews.",
//     author: "Emily Rodriguez",
//     role: "Hotel Owner",
//   },
//   {
//     id: 4,
//     title: "School",
//     description:
//       "Engage students with interactive and educational wall designs.",
//     icon: <FaSchool />,
//     image: "https://picsum.photos/seed/schoolwall/600/400.jpg",
//     gallery: [
//       "https://picsum.photos/seed/school1/400/300.jpg",
//       "https://picsum.photos/seed/school2/400/300.jpg",
//       "https://picsum.photos/seed/school3/400/300.jpg",
//     ],
//     features: ["Educational content", "Interactive elements", "Safe materials"],
//     color: "#FBC410",
//     stats: { projects: "150+", satisfaction: "97%" },
//     testimonial:
//       "The educational wall designs have transformed our classrooms. Students are more engaged and inspired than ever.",
//     author: "Jessica Taylor",
//     role: "School Principal",
//   },
//   {
//     id: 5,
//     title: "Showroom",
//     description: "Make your products stand out with stunning backdrops.",
//     icon: <FaStore />,
//     image: "https://picsum.photos/seed/showroomwall/600/400.jpg",
//     gallery: [
//       "https://picsum.photos/seed/showroom1/400/300.jpg",
//       "https://picsum.photos/seed/showroom2/400/300.jpg",
//       "https://picsum.photos/seed/showroom3/400/300.jpg",
//     ],
//     features: ["Brand consistency", "Product highlighting", "Modular designs"],
//     color: "#E95F15",
//     stats: { projects: "180+", satisfaction: "96%" },
//     testimonial:
//       "Our showroom sales increased by 30% after the redesign. The wall art creates the perfect ambiance for our products.",
//     author: "David Kim",
//     role: "Retail Manager",
//   },
//   {
//     id: 6,
//     title: "Restaurant",
//     description: "Enhance dining ambiance with thematic wall art.",
//     icon: <FaUtensils />,
//     image: "https://picsum.photos/seed/restaurantwall/600/400.jpg",
//     gallery: [
//       "https://picsum.photos/seed/restaurant1/400/300.jpg",
//       "https://picsum.photos/seed/restaurant2/400/300.jpg",
//       "https://picsum.photos/seed/restaurant3/400/300.jpg",
//     ],
//     features: ["Atmosphere creation", "Food-safe materials", "Easy cleaning"],
//     color: "#7E1D1D",
//     stats: { projects: "250+", satisfaction: "98%" },
//     testimonial:
//       "The wall art has completely transformed our restaurant's atmosphere. Customers love taking photos with our signature walls.",
//     author: "Alex Thompson",
//     role: "Restaurant Owner",
//   },
// ];

// const UseCases = () => {
//   const [selectedUseCase, setSelectedUseCase] = useState(null);
//   const [activeGalleryImage, setActiveGalleryImage] = useState(0);
//   const [filter, setFilter] = useState("all");
//   const [showcaseMode, setShowcaseMode] = useState(false);
//   const [showcaseIndex, setShowcaseIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [favorites, setFavorites] = useState([]);
//   const [viewMode, setViewMode] = useState("grid"); // grid or list
//   const sectionRef = useRef(null);
//   const showcaseRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end"],
//   });

//   // Filter use cases - MOVED TO TOP
//   const filteredUseCases = useCases.filter((useCase) => {
//     const matchesFilter =
//       filter === "all" ||
//       (filter === "residential" && useCase.title === "Home") ||
//       (filter === "commercial" &&
//         (useCase.title === "Office" || useCase.title === "Showroom")) ||
//       (filter === "hospitality" &&
//         (useCase.title === "Hotel" || useCase.title === "Restaurant")) ||
//       (filter === "educational" && useCase.title === "School");

//     const matchesSearch =
//       useCase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       useCase.description.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesFilter && matchesSearch;
//   });

//   // Progress bar animation
//   const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   // Auto-rotate gallery images
//   useEffect(() => {
//     if (!selectedUseCase || !isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setActiveGalleryImage(
//         (prev) => (prev + 1) % selectedUseCase.gallery.length,
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [selectedUseCase, isAutoPlaying]);

//   // Auto-play showcase
//   useEffect(() => {
//     if (!isAutoPlaying || !showcaseMode) return;

//     const interval = setInterval(() => {
//       setShowcaseIndex((prev) => (prev + 1) % filteredUseCases.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, showcaseMode, filteredUseCases.length]);

//   const openUseCaseDetails = (useCase) => {
//     setSelectedUseCase(useCase);
//     setActiveGalleryImage(0);
//     setIsAutoPlaying(true);
//   };

//   const closeUseCaseDetails = () => {
//     setSelectedUseCase(null);
//     setIsAutoPlaying(false);
//   };

//   const openShowcase = () => {
//     setShowcaseMode(true);
//     setIsAutoPlaying(true);
//   };

//   const closeShowcase = () => {
//     setShowcaseMode(false);
//     setIsAutoPlaying(false);
//   };

//   const toggleFavorite = (id) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
//     );
//   };

//   const nextShowcase = () => {
//     setShowcaseIndex((prev) => (prev + 1) % filteredUseCases.length);
//     setIsAutoPlaying(false);
//   };

//   const prevShowcase = () => {
//     setShowcaseIndex((prev) =>
//       prev === 0 ? filteredUseCases.length - 1 : prev - 1,
//     );
//     setIsAutoPlaying(false);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   };

//   const modalVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1,
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         when: "afterChildren",
//       },
//     },
//   };

//   const modalContentVariants = {
//     hidden: { scale: 0.9, opacity: 0 },
//     show: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.3,
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//       },
//     },
//     exit: {
//       scale: 0.9,
//       opacity: 0,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <section
//       id="use-cases"
//       ref={sectionRef}
//       className="section-padding relative overflow-hidden"
//       style={{ backgroundColor: "#0A072C" }}
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
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.8 }}
//         >
//           <SectionTitle
//             title="Where It Works"
//             subtitle="Our designs transform any space into something extraordinary"
//             titleColor="text-white"
//             subtitleColor="text-white/80"
//           />
//         </motion.div>

//         {/* Search and Filter Bar */}
//         <motion.div
//           className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="relative flex-1">
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
//               <input
//                 type="text"
//                 placeholder="Search use cases..."
//                 className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="flex gap-2">
//               <div className="relative">
//                 <button
//                   className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white flex items-center gap-2 hover:bg-white/20 transition-colors"
//                   onClick={() =>
//                     setFilter(filter === "all" ? "residential" : "all")
//                   }
//                 >
//                   <FaFilter />
//                   <span>Filter</span>
//                 </button>
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-20 overflow-hidden">
//                   <button
//                     className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                       filter === "all" ? "bg-gray-100 font-medium" : ""
//                     }`}
//                     onClick={() => setFilter("all")}
//                   >
//                     All Spaces
//                   </button>
//                   <button
//                     className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                       filter === "residential" ? "bg-gray-100 font-medium" : ""
//                     }`}
//                     onClick={() => setFilter("residential")}
//                   >
//                     Residential
//                   </button>
//                   <button
//                     className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                       filter === "commercial" ? "bg-gray-100 font-medium" : ""
//                     }`}
//                     onClick={() => setFilter("commercial")}
//                   >
//                     Commercial
//                   </button>
//                   <button
//                     className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                       filter === "hospitality" ? "bg-gray-100 font-medium" : ""
//                     }`}
//                     onClick={() => setFilter("hospitality")}
//                   >
//                     Hospitality
//                   </button>
//                   <button
//                     className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                       filter === "educational" ? "bg-gray-100 font-medium" : ""
//                     }`}
//                     onClick={() => setFilter("educational")}
//                   >
//                     Educational
//                   </button>
//                 </div>
//               </div>
//               <button
//                 className="px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2"
//                 style={{ backgroundColor: "#FBC410" }}
//                 onClick={openShowcase}
//               >
//                 <FaExpand />
//                 <span>Showcase</span>
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* View Mode Toggle */}
//         <div className="flex justify-between items-center mb-8">
//           <div className="text-white/80">
//             {searchTerm && (
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                 Found {filteredUseCases.length} result
//                 {filteredUseCases.length !== 1 ? "s" : ""} for "{searchTerm}"
//               </motion.div>
//             )}
//           </div>
//           <div className="flex gap-2">
//             <button
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                 viewMode === "grid"
//                   ? "bg-white text-gray-800"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//               onClick={() => setViewMode("grid")}
//             >
//               Grid View
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                 viewMode === "list"
//                   ? "bg-white text-gray-800"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//               onClick={() => setViewMode("list")}
//             >
//               List View
//             </button>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
//           <motion.div
//             className="h-full"
//             style={{
//               background:
//                 "linear-gradient(90deg, #1A4CB6, #0C8FF2, #FBC410, #E95F15, #A55E83, #7E1D1D)",
//               scaleX,
//             }}
//           />
//         </div>

//         {/* Use Cases Grid/List */}
//         <motion.div
//           className={
//             viewMode === "grid"
//               ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               : "space-y-6"
//           }
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "show" : "hidden"}
//         >
//           {filteredUseCases.map((useCase, index) => (
//             <motion.div
//               key={useCase.id}
//               className={`bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group cursor-pointer ${
//                 viewMode === "list" ? "flex" : ""
//               }`}
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               onClick={() => openUseCaseDetails(useCase)}
//             >
//               {viewMode === "grid" ? (
//                 <>
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={useCase.image}
//                       alt={useCase.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />

//                     {/* Quick Actions */}
//                     <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <button
//                         className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           toggleFavorite(useCase.id);
//                         }}
//                       >
//                         <FaHeart
//                           className={
//                             favorites.includes(useCase.id) ? "text-red-400" : ""
//                           }
//                         />
//                       </button>
//                       <button
//                         className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           // Handle share functionality
//                         }}
//                       >
//                         <FaShare />
//                       </button>
//                     </div>

//                     {/* Category Badge */}
//                     <div className="absolute top-4 left-4">
//                       <div
//                         className="px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg"
//                         style={{ backgroundColor: useCase.color }}
//                       >
//                         {useCase.title}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <div className="flex items-center mb-4">
//                       <div
//                         className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-3"
//                         style={{ backgroundColor: useCase.color }}
//                       >
//                         {useCase.icon}
//                       </div>
//                       <h3 className="text-xl font-bold text-white">
//                         {useCase.title}
//                       </h3>
//                     </div>
//                     <p className="text-white/80 mb-4">{useCase.description}</p>

//                     {/* Stats */}
//                     <div className="flex justify-between text-sm text-white/60 mb-4">
//                       <span>{useCase.stats.projects} Projects</span>
//                       <span>{useCase.stats.satisfaction} Satisfaction</span>
//                     </div>

//                     {/* View More Button */}
//                     <button className="flex items-center text-white font-medium hover:text-blue-400 transition-colors">
//                       <span>View Examples</span>
//                       <FaArrowRight className="ml-1" />
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="w-48 h-32 overflow-hidden flex-shrink-0">
//                     <img
//                       src={useCase.image}
//                       alt={useCase.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex-1 p-6">
//                     <div className="flex items-center mb-4">
//                       <div
//                         className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-3"
//                         style={{ backgroundColor: useCase.color }}
//                       >
//                         {useCase.icon}
//                       </div>
//                       <h3 className="text-xl font-bold text-white">
//                         {useCase.title}
//                       </h3>
//                     </div>
//                     <p className="text-white/80 mb-4">{useCase.description}</p>
//                     <div className="flex justify-between text-sm text-white/60">
//                       <span>{useCase.stats.projects} Projects</span>
//                       <span>{useCase.stats.satisfaction} Satisfaction</span>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* No Results Message */}
//         {filteredUseCases.length === 0 && (
//           <motion.div
//             className="text-center py-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <p className="text-white/80 text-lg mb-4">
//               No use cases found matching your criteria.
//             </p>
//             <button
//               className="px-6 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
//               onClick={() => {
//                 setSearchTerm("");
//                 setFilter("all");
//               }}
//             >
//               Clear Filters
//             </button>
//           </motion.div>
//         )}

//         {/* CTA Section */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//         >
//           <p className="text-xl text-white/80 mb-6">
//             Can't find what you're looking for?
//           </p>
//           <motion.button
//             className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl"
//             style={{ background: "linear-gradient(135deg, #FBC410, #E95F15)" }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 10px 20px rgba(251, 196, 16, 0.3)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get Custom Design
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Detailed Use Case Modal */}
//       <AnimatePresence>
//         {selectedUseCase && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//             variants={modalVariants}
//             initial="hidden"
//             animate="show"
//             exit="exit"
//             onClick={closeUseCaseDetails}
//           >
//             <motion.div
//               className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//               variants={modalContentVariants}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header with Gallery */}
//               <div className="relative h-80 overflow-hidden">
//                 <AnimatePresence mode="wait">
//                   <img
//                     key={activeGalleryImage}
//                     src={selectedUseCase.gallery[activeGalleryImage]}
//                     alt={selectedUseCase.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </AnimatePresence>

//                 {/* Gallery Controls */}
//                 <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//                   {selectedUseCase.gallery.map((_, index) => (
//                     <button
//                       key={index}
//                       className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                         index === activeGalleryImage
//                           ? "w-8 bg-white"
//                           : "bg-white/50"
//                       }`}
//                       onClick={() => setActiveGalleryImage(index)}
//                     />
//                   ))}
//                 </div>

//                 {/* Auto-play Toggle */}
//                 <button
//                   className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                   onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//                 >
//                   {isAutoPlaying ? <FaPause /> : <FaPlay />}
//                 </button>

//                 {/* Close Button */}
//                 <button
//                   className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                   onClick={closeUseCaseDetails}
//                 >
//                   <FaTimes />
//                 </button>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div
//                     className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-3"
//                     style={{ backgroundColor: selectedUseCase.color }}
//                   >
//                     {selectedUseCase.icon}
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     {selectedUseCase.title}
//                   </h2>
//                 </div>

//                 <p className="text-gray-600 mb-6">
//                   {selectedUseCase.description}
//                 </p>

//                 {/* Features */}
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-3 text-gray-800">
//                     Key Features
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                     {selectedUseCase.features.map((feature, index) => (
//                       <div key={index} className="flex items-center">
//                         <div
//                           className="w-6 h-6 rounded-full mr-2 flex items-center justify-center"
//                           style={{ backgroundColor: selectedUseCase.color }}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-3 w-3 text-white"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </div>
//                         <span className="text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Stats */}
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div
//                     className="rounded-lg p-4 text-white"
//                     style={{ backgroundColor: selectedUseCase.color }}
//                   >
//                     <div className="text-2xl font-bold">
//                       {selectedUseCase.stats.projects}
//                     </div>
//                     <div className="text-sm opacity-90">Completed Projects</div>
//                   </div>
//                   <div
//                     className="rounded-lg p-4 text-white"
//                     style={{ backgroundColor: selectedUseCase.color }}
//                   >
//                     <div className="text-2xl font-bold">
//                       {selectedUseCase.stats.satisfaction}
//                     </div>
//                     <div className="text-sm opacity-90">
//                       Client Satisfaction
//                     </div>
//                   </div>
//                 </div>

//                 {/* Testimonial */}
//                 <div className="bg-gray-50 rounded-lg p-6 mb-6">
//                   <div className="flex mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <FaStar key={i} className="text-yellow-400" />
//                     ))}
//                   </div>
//                   <div className="relative">
//                     <FaQuoteLeft className="text-gray-300 text-xl absolute -top-2 -left-2" />
//                     <p className="text-gray-700 italic mb-4 pl-6">
//                       {selectedUseCase.testimonial}
//                     </p>
//                     <FaQuoteRight className="text-gray-300 text-xl absolute -bottom-2 -right-2" />
//                   </div>
//                   <div className="flex items-center mt-4">
//                     <div
//                       className="w-10 h-10 rounded-full mr-3 flex items-center justify-center"
//                       style={{ backgroundColor: selectedUseCase.color }}
//                     >
//                       <span className="text-white font-bold">
//                         {selectedUseCase.author
//                           .split(" ")
//                           .map((n) => n[0])
//                           .join("")}
//                       </span>
//                     </div>
//                     <div>
//                       <div className="font-medium text-gray-800">
//                         {selectedUseCase.author}
//                       </div>
//                       <div className="text-sm text-gray-600">
//                         {selectedUseCase.role}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-3">
//                   <button
//                     className="px-6 py-3 text-white rounded-lg font-medium hover:shadow-lg transition-all flex-1"
//                     style={{ backgroundColor: selectedUseCase.color }}
//                   >
//                     View Portfolio
//                   </button>
//                   <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex-1">
//                     Get Quote
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Showcase Modal */}
//       <AnimatePresence>
//         {showcaseMode && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <div className="relative w-full h-full flex items-center justify-center max-w-6xl">
//               {/* Current Showcase Item */}
//               <div className="relative w-full h-[80vh] max-w-4xl rounded-xl overflow-hidden shadow-2xl">
//                 <img
//                   src={filteredUseCases[showcaseIndex].image}
//                   alt={filteredUseCases[showcaseIndex].title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

//                 <div className="absolute bottom-0 left-0 right-0 p-8">
//                   <div className="flex items-center mb-4">
//                     <div
//                       className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-3"
//                       style={{
//                         backgroundColor: filteredUseCases[showcaseIndex].color,
//                       }}
//                     >
//                       {filteredUseCases[showcaseIndex].icon}
//                     </div>
//                     <h3 className="text-2xl font-bold text-white">
//                       {filteredUseCases[showcaseIndex].title}
//                     </h3>
//                   </div>
//                   <p className="text-white/80 mb-6 max-w-2xl">
//                     {filteredUseCases[showcaseIndex].description}
//                   </p>
//                   <div className="flex gap-4">
//                     <button
//                       className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/30 transition-colors"
//                       onClick={() => {
//                         closeShowcase();
//                         openUseCaseDetails(filteredUseCases[showcaseIndex]);
//                       }}
//                     >
//                       View Details
//                     </button>
//                     <button
//                       className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/30 transition-colors"
//                       onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//                     >
//                       {isAutoPlaying ? "Pause" : "Play"} Slideshow
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation Controls */}
//               <button
//                 className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
//                 onClick={prevShowcase}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 19l-7-7 7-7"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
//                 onClick={nextShowcase}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>

//               {/* Close Button */}
//               <button
//                 className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
//                 onClick={closeShowcase}
//               >
//                 <FaTimes />
//               </button>

//               {/* Slide Indicators */}
//               <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
//                 {filteredUseCases.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       index === showcaseIndex ? "w-8 bg-white" : "bg-white/50"
//                     }`}
//                     onClick={() => {
//                       setShowcaseIndex(index);
//                       setIsAutoPlaying(false);
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default UseCases;

import React, { useState, useRef, useEffect } from "react";
import {
  FaHome,
  FaBuilding,
  FaHotel,
  FaSchool,
  FaStore,
  FaUtensils,
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaTimes,
  FaPlay,
  FaPause,
  FaFilter,
  FaSearch,
  FaHeart,
  FaShare,
  FaExpand,
} from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

const useCases = [
  {
    id: 1,
    title: "Home",
    description:
      "Transform your living spaces into personalized art galleries.",
    icon: <FaHome />,
    image: "https://picsum.photos/seed/homewall/600/400.jpg",
    gallery: [
      "https://picsum.photos/seed/living1/400/300.jpg",
      "https://picsum.photos/seed/living2/400/300.jpg",
      "https://picsum.photos/seed/living3/400/300.jpg",
    ],
    features: [
      "Custom designs",
      "Personalized themes",
      "Family-friendly materials",
    ],
    color: "#1A4CB6",
    stats: { projects: "500+", satisfaction: "98%" },
    testimonial:
      "Pixel2Surface transformed our living room beyond our expectations. The design process was seamless and the result is stunning!",
    author: "Sarah Johnson",
    role: "Homeowner",
  },
  {
    id: 2,
    title: "Office",
    description: "Create inspiring work environments that boost creativity.",
    icon: <FaBuilding />,
    image: "https://picsum.photos/seed/officewall/600/400.jpg",
    gallery: [
      "https://picsum.photos/seed/office1/400/300.jpg",
      "https://picsum.photos/seed/office2/400/300.jpg",
      "https://picsum.photos/seed/office3/400/300.jpg",
    ],
    features: [
      "Branding integration",
      "Productivity boosters",
      "Sound-absorbing materials",
    ],
    color: "#0C8FF2",
    stats: { projects: "300+", satisfaction: "95%" },
    testimonial:
      "Our office has never been more inspiring. Employee morale and creativity have skyrocketed since the redesign.",
    author: "Michael Chen",
    role: "Office Manager",
  },
  {
    id: 3,
    title: "Hotel",
    description: "Offer guests unique, memorable experiences in every room.",
    icon: <FaHotel />,
    image: "https://picsum.photos/seed/hotelwall/600/400.jpg",
    gallery: [
      "https://picsum.photos/seed/hotel1/400/300.jpg",
      "https://picsum.photos/seed/hotel2/400/300.jpg",
      "https://picsum.photos/seed/hotel3/400/300.jpg",
    ],
    features: ["Thematic designs", "Durability", "Easy maintenance"],
    color: "#A55E83",
    stats: { projects: "200+", satisfaction: "99%" },
    testimonial:
      "Our guests love the new wall designs in our lobby and rooms. It has elevated our brand and increased positive reviews.",
    author: "Emily Rodriguez",
    role: "Hotel Owner",
  },
  {
    id: 4,
    title: "School",
    description:
      "Engage students with interactive and educational wall designs.",
    icon: <FaSchool />,
    image: "https://picsum.photos/seed/schoolwall/600/400.jpg",
    gallery: [
      "https://picsum.photos/seed/school1/400/300.jpg",
      "https://picsum.photos/seed/school2/400/300.jpg",
      "https://picsum.photos/seed/school3/400/300.jpg",
    ],
    features: ["Educational content", "Interactive elements", "Safe materials"],
    color: "#FBC410",
    stats: { projects: "150+", satisfaction: "97%" },
    testimonial:
      "The educational wall designs have transformed our classrooms. Students are more engaged and inspired than ever.",
    author: "Jessica Taylor",
    role: "School Principal",
  },
  {
    id: 5,
    title: "Showroom",
    description: "Make your products stand out with stunning backdrops.",
    icon: <FaStore />,
    image: "https://picsum.photos/seed/showroomwall/600/400.jpg",
    gallery: [
      "https://picsum.photos/seed/showroom1/400/300.jpg",
      "https://picsum.photos/seed/showroom2/400/300.jpg",
      "https://picsum.photos/seed/showroom3/400/300.jpg",
    ],
    features: ["Brand consistency", "Product highlighting", "Modular designs"],
    color: "#E95F15",
    stats: { projects: "180+", satisfaction: "96%" },
    testimonial:
      "Our showroom sales increased by 30% after the redesign. The wall art creates the perfect ambiance for our products.",
    author: "David Kim",
    role: "Retail Manager",
  },
  {
    id: 6,
    title: "Restaurant",
    description: "Enhance dining ambiance with thematic wall art.",
    icon: <FaUtensils />,
    image: "https://picsum.photos/seed/restaurantwall/600/400.jpg",
    gallery: [
      "https://picsum.photos/seed/restaurant1/400/300.jpg",
      "https://picsum.photos/seed/restaurant2/400/300.jpg",
      "https://picsum.photos/seed/restaurant3/400/300.jpg",
    ],
    features: ["Atmosphere creation", "Food-safe materials", "Easy cleaning"],
    color: "#7E1D1D",
    stats: { projects: "250+", satisfaction: "98%" },
    testimonial:
      "The wall art has completely transformed our restaurant's atmosphere. Customers love taking photos with our signature walls.",
    author: "Alex Thompson",
    role: "Restaurant Owner",
  },
];

const UseCases = () => {
  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [filter, setFilter] = useState("all");
  const [showcaseMode, setShowcaseMode] = useState(false);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const sectionRef = useRef(null);
  const showcaseRef = useRef(null);

  // Filter use cases
  const filteredUseCases = useCases.filter((useCase) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "residential" && useCase.title === "Home") ||
      (filter === "commercial" &&
        (useCase.title === "Office" || useCase.title === "Showroom")) ||
      (filter === "hospitality" &&
        (useCase.title === "Hotel" || useCase.title === "Restaurant")) ||
      (filter === "educational" && useCase.title === "School");

    const matchesSearch =
      useCase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      useCase.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Auto-rotate gallery images
  useEffect(() => {
    if (!selectedUseCase || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveGalleryImage(
        (prev) => (prev + 1) % selectedUseCase.gallery.length,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedUseCase, isAutoPlaying]);

  // Auto-play showcase
  useEffect(() => {
    if (!isAutoPlaying || !showcaseMode) return;

    const interval = setInterval(() => {
      setShowcaseIndex((prev) => (prev + 1) % filteredUseCases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, showcaseMode, filteredUseCases.length]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showFilterDropdown && !event.target.closest(".filter-dropdown")) {
        setShowFilterDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilterDropdown]);

  const openUseCaseDetails = (useCase) => {
    setSelectedUseCase(useCase);
    setActiveGalleryImage(0);
    setIsAutoPlaying(true);
  };

  const closeUseCaseDetails = () => {
    setSelectedUseCase(null);
    setIsAutoPlaying(false);
  };

  const openShowcase = () => {
    setShowcaseMode(true);
    setIsAutoPlaying(true);
  };

  const closeShowcase = () => {
    setShowcaseMode(false);
    setIsAutoPlaying(false);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const nextShowcase = () => {
    setShowcaseIndex((prev) => (prev + 1) % filteredUseCases.length);
    setIsAutoPlaying(false);
  };

  const prevShowcase = () => {
    setShowcaseIndex((prev) =>
      prev === 0 ? filteredUseCases.length - 1 : prev - 1,
    );
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#0A072C" }}
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
        <div className="text-center mb-12">
          <SectionTitle
            title="Where It Works"
            subtitle="Our designs transform any space into something extraordinary"
            titleColor="text-white"
            subtitleColor="text-white/80"
          />
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              <input
                type="text"
                placeholder="Search use cases..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <div className="relative filter-dropdown">
                <button
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white flex items-center gap-2 hover:bg-white/20 transition-colors"
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                >
                  <FaFilter />
                  <span>Filter</span>
                </button>
                {showFilterDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-20 overflow-hidden">
                    <button
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        filter === "all" ? "bg-gray-100 font-medium" : ""
                      }`}
                      onClick={() => {
                        setFilter("all");
                        setShowFilterDropdown(false);
                      }}
                    >
                      All Spaces
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        filter === "residential"
                          ? "bg-gray-100 font-medium"
                          : ""
                      }`}
                      onClick={() => {
                        setFilter("residential");
                        setShowFilterDropdown(false);
                      }}
                    >
                      Residential
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        filter === "commercial" ? "bg-gray-100 font-medium" : ""
                      }`}
                      onClick={() => {
                        setFilter("commercial");
                        setShowFilterDropdown(false);
                      }}
                    >
                      Commercial
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        filter === "hospitality"
                          ? "bg-gray-100 font-medium"
                          : ""
                      }`}
                      onClick={() => {
                        setFilter("hospitality");
                        setShowFilterDropdown(false);
                      }}
                    >
                      Hospitality
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        filter === "educational"
                          ? "bg-gray-100 font-medium"
                          : ""
                      }`}
                      onClick={() => {
                        setFilter("educational");
                        setShowFilterDropdown(false);
                      }}
                    >
                      Educational
                    </button>
                  </div>
                )}
              </div>
              <button
                className="px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2"
                style={{ backgroundColor: "#FBC410" }}
                onClick={openShowcase}
              >
                <FaExpand />
                <span>Showcase</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-white/80">
            {searchTerm && (
              <div>
                Found {filteredUseCases.length} result
                {filteredUseCases.length !== 1 ? "s" : ""} for "{searchTerm}"
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-white text-gray-800"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              onClick={() => setViewMode("grid")}
            >
              Grid View
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "list"
                  ? "bg-white text-gray-800"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              onClick={() => setViewMode("list")}
            >
              List View
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full"
            style={{
              background:
                "linear-gradient(90deg, #1A4CB6, #0C8FF2, #FBC410, #E95F15, #A55E83, #7E1D1D)",
              width: "100%",
            }}
          />
        </div>

        {/* Use Cases Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
        >
          {filteredUseCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className={`bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group cursor-pointer ${
                viewMode === "list" ? "flex" : ""
              }`}
              onClick={() => openUseCaseDetails(useCase)}
            >
              {viewMode === "grid" ? (
                <>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(useCase.id);
                        }}
                      >
                        <FaHeart
                          className={
                            favorites.includes(useCase.id) ? "text-red-400" : ""
                          }
                        />
                      </button>
                      <button
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle share functionality
                        }}
                      >
                        <FaShare />
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className="px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg"
                        style={{ backgroundColor: useCase.color }}
                      >
                        {useCase.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-3"
                        style={{ backgroundColor: useCase.color }}
                      >
                        {useCase.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="text-white/80 mb-4">{useCase.description}</p>

                    {/* Stats */}
                    <div className="flex justify-between text-sm text-white/60 mb-4">
                      <span>{useCase.stats.projects} Projects</span>
                      <span>{useCase.stats.satisfaction} Satisfaction</span>
                    </div>

                    {/* View More Button */}
                    <button className="flex items-center text-white font-medium hover:text-blue-400 transition-colors">
                      <span>View Examples</span>
                      <FaArrowRight className="ml-1" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-48 h-32 overflow-hidden flex-shrink-0">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-3"
                        style={{ backgroundColor: useCase.color }}
                      >
                        {useCase.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="text-white/80 mb-4">{useCase.description}</p>
                    <div className="flex justify-between text-sm text-white/60">
                      <span>{useCase.stats.projects} Projects</span>
                      <span>{useCase.stats.satisfaction} Satisfaction</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredUseCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg mb-4">
              No use cases found matching your criteria.
            </p>
            <button
              className="px-6 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => {
                setSearchTerm("");
                setFilter("all");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-white/80 mb-6">
            Can't find what you're looking for?
          </p>
          <button
            className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            style={{ background: "linear-gradient(135deg, #FBC410, #E95F15)" }}
          >
            Get Custom Design
          </button>
        </div>
      </div>

      {/* Detailed Use Case Modal */}
      {selectedUseCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeUseCaseDetails}
        >
          <div
            className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Gallery */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={selectedUseCase.gallery[activeGalleryImage]}
                alt={selectedUseCase.title}
                className="w-full h-full object-cover"
              />

              {/* Gallery Controls */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {selectedUseCase.gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeGalleryImage
                        ? "w-8 bg-white"
                        : "bg-white/50"
                    }`}
                    onClick={() => setActiveGalleryImage(index)}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <button
                className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              >
                {isAutoPlaying ? <FaPause /> : <FaPlay />}
              </button>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={closeUseCaseDetails}
              >
                <FaTimes />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-3"
                  style={{ backgroundColor: selectedUseCase.color }}
                >
                  {selectedUseCase.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedUseCase.title}
                </h2>
              </div>

              <p className="text-gray-600 mb-6">
                {selectedUseCase.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {selectedUseCase.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className="w-6 h-6 rounded-full mr-2 flex items-center justify-center"
                        style={{ backgroundColor: selectedUseCase.color }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div
                  className="rounded-lg p-4 text-white"
                  style={{ backgroundColor: selectedUseCase.color }}
                >
                  <div className="text-2xl font-bold">
                    {selectedUseCase.stats.projects}
                  </div>
                  <div className="text-sm opacity-90">Completed Projects</div>
                </div>
                <div
                  className="rounded-lg p-4 text-white"
                  style={{ backgroundColor: selectedUseCase.color }}
                >
                  <div className="text-2xl font-bold">
                    {selectedUseCase.stats.satisfaction}
                  </div>
                  <div className="text-sm opacity-90">Client Satisfaction</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-gray-300 text-xl absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic mb-4 pl-6">
                    {selectedUseCase.testimonial}
                  </p>
                  <FaQuoteRight className="text-gray-300 text-xl absolute -bottom-2 -right-2" />
                </div>
                <div className="flex items-center mt-4">
                  <div
                    className="w-10 h-10 rounded-full mr-3 flex items-center justify-center"
                    style={{ backgroundColor: selectedUseCase.color }}
                  >
                    <span className="text-white font-bold">
                      {selectedUseCase.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">
                      {selectedUseCase.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {selectedUseCase.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  className="px-6 py-3 text-white rounded-lg font-medium hover:shadow-lg transition-all flex-1"
                  style={{ backgroundColor: selectedUseCase.color }}
                >
                  View Portfolio
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex-1">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Showcase Modal */}
      {showcaseMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
          <div className="relative w-full h-full flex items-center justify-center max-w-6xl">
            {/* Current Showcase Item */}
            <div className="relative w-full h-[80vh] max-w-4xl rounded-xl overflow-hidden shadow-2xl">
              <img
                src={filteredUseCases[showcaseIndex].image}
                alt={filteredUseCases[showcaseIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-3"
                    style={{
                      backgroundColor: filteredUseCases[showcaseIndex].color,
                    }}
                  >
                    {filteredUseCases[showcaseIndex].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {filteredUseCases[showcaseIndex].title}
                  </h3>
                </div>
                <p className="text-white/80 mb-6 max-w-2xl">
                  {filteredUseCases[showcaseIndex].description}
                </p>
                <div className="flex gap-4">
                  <button
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/30 transition-colors"
                    onClick={() => {
                      closeShowcase();
                      openUseCaseDetails(filteredUseCases[showcaseIndex]);
                    }}
                  >
                    View Details
                  </button>
                  <button
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/30 transition-colors"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  >
                    {isAutoPlaying ? "Pause" : "Play"} Slideshow
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={prevShowcase}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={nextShowcase}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Close Button */}
            <button
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={closeShowcase}
            >
              <FaTimes />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {filteredUseCases.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === showcaseIndex ? "w-8 bg-white" : "bg-white/50"
                  }`}
                  onClick={() => {
                    setShowcaseIndex(index);
                    setIsAutoPlaying(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UseCases;
