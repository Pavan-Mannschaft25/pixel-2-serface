// // // // components/sections/Gallery.jsx
// // // import React, { useState, useEffect, useRef } from "react";
// // // import { motion, AnimatePresence, useInView } from "framer-motion";
// // // import SectionTitle from "../ui/SectionTitle";

// // // const galleryData = [
// // //   {
// // //     id: 1,
// // //     category: "living-room",
// // //     title: "Modern Living Room",
// // //     image: "https://picsum.photos/seed/livingroom/800/600.jpg",
// // //     description: "Transform your living space with our contemporary designs",
// // //     tags: ["modern", "minimalist", "contemporary"],
// // //   },
// // //   {
// // //     id: 2,
// // //     category: "bedroom",
// // //     title: "Cozy Bedroom",
// // //     image: "https://picsum.photos/seed/bedroom/800/600.jpg",
// // //     description: "Create a serene atmosphere in your personal sanctuary",
// // //     tags: ["cozy", "relaxing", "personal"],
// // //   },
// // //   {
// // //     id: 3,
// // //     category: "office",
// // //     title: "Creative Office Space",
// // //     image: "https://picsum.photos/seed/office/800/600.jpg",
// // //     description: "Inspire productivity with innovative wall designs",
// // //     tags: ["professional", "creative", "inspiring"],
// // //   },
// // //   {
// // //     id: 4,
// // //     category: "reception",
// // //     title: "Hotel Reception",
// // //     image: "https://picsum.photos/seed/reception/800/600.jpg",
// // //     description:
// // //       "Make a lasting first impression with stunning reception areas",
// // //     tags: ["welcoming", "luxury", "impressive"],
// // //   },
// // //   {
// // //     id: 5,
// // //     category: "kids-room",
// // //     title: "Kids Playroom",
// // //     image: "https://picsum.photos/seed/kidsroom/800/600.jpg",
// // //     description: "Spark imagination with playful and colorful designs",
// // //     tags: ["playful", "colorful", "imaginative"],
// // //   },
// // //   {
// // //     id: 6,
// // //     category: "restaurant",
// // //     title: "Restaurant Dining",
// // //     image: "https://picsum.photos/seed/restaurant/800/600.jpg",
// // //     description: "Enhance dining experiences with atmospheric wall art",
// // //     tags: ["atmospheric", "elegant", "dining"],
// // //   },
// // //   {
// // //     id: 7,
// // //     category: "living-room",
// // //     title: "Minimalist Living",
// // //     image: "https://picsum.photos/seed/minimalist/800/600.jpg",
// // //     description: "Less is more with our minimalist design approach",
// // //     tags: ["minimalist", "clean", "sophisticated"],
// // //   },
// // //   {
// // //     id: 8,
// // //     category: "bedroom",
// // //     title: "Luxury Bedroom",
// // //     image: "https://picsum.photos/seed/luxurybed/800/600.jpg",
// // //     description: "Indulge in luxury with our premium bedroom designs",
// // //     tags: ["luxury", "premium", "elegant"],
// // //   },
// // //   {
// // //     id: 9,
// // //     category: "office",
// // //     title: "Corporate Office",
// // //     image: "https://picsum.photos/seed/corporate/800/600.jpg",
// // //     description: "Professional environments that inspire success",
// // //     tags: ["corporate", "professional", "success"],
// // //   },
// // // ];

// // // const categories = [
// // //   { id: "all", name: "All", icon: "🎨" },
// // //   { id: "living-room", name: "Living Room", icon: "🛋️" },
// // //   { id: "bedroom", name: "Bedroom", icon: "🛏️" },
// // //   { id: "office", name: "Office", icon: "💼" },
// // //   { id: "reception", name: "Reception", icon: "🏨" },
// // //   { id: "kids-room", name: "Kids Room", icon: "🧸" },
// // //   { id: "restaurant", name: "Restaurant", icon: "🍽️" },
// // // ];

// // // const Gallery = () => {
// // //   const [selectedCategory, setSelectedCategory] = useState("all");
// // //   const [selectedImage, setSelectedImage] = useState(null);
// // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// // //   const [imageLoading, setImageLoading] = useState({});
// // //   const galleryRef = useRef(null);
// // //   const isInView = useInView(galleryRef, { once: true, amount: 0.1 });

// // //   const filteredGallery =
// // //     selectedCategory === "all"
// // //       ? galleryData
// // //       : galleryData.filter((item) => item.category === selectedCategory);

// // //   // Find index of selected image in filtered gallery for navigation
// // //   useEffect(() => {
// // //     if (selectedImage) {
// // //       const index = filteredGallery.findIndex(
// // //         (item) => item.id === selectedImage.id,
// // //       );
// // //       setCurrentImageIndex(index);
// // //     }
// // //   }, [selectedImage, filteredGallery]);

// // //   const openModal = (image) => {
// // //     setSelectedImage(image);
// // //     document.body.style.overflow = "hidden";
// // //   };

// // //   const closeModal = () => {
// // //     setSelectedImage(null);
// // //     document.body.style.overflow = "auto";
// // //   };

// // //   const navigateImage = (direction) => {
// // //     if (direction === "next") {
// // //       const newIndex = (currentImageIndex + 1) % filteredGallery.length;
// // //       setSelectedImage(filteredGallery[newIndex]);
// // //     } else {
// // //       const newIndex =
// // //         currentImageIndex === 0
// // //           ? filteredGallery.length - 1
// // //           : currentImageIndex - 1;
// // //       setSelectedImage(filteredGallery[newIndex]);
// // //     }
// // //   };

// // //   const handleImageLoad = (id) => {
// // //     setImageLoading((prev) => ({ ...prev, [id]: false }));
// // //   };

// // //   const handleImageLoadStart = (id) => {
// // //     setImageLoading((prev) => ({ ...prev, [id]: true }));
// // //   };

// // //   // Animation variants
// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     show: {
// // //       opacity: 1,
// // //       transition: {
// // //         staggerChildren: 0.1,
// // //       },
// // //     },
// // //   };

// // //   const itemVariants = {
// // //     hidden: { opacity: 0, y: 20 },
// // //     show: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.5,
// // //       },
// // //     },
// // //   };

// // //   const categoryVariants = {
// // //     hidden: { opacity: 0, scale: 0.8 },
// // //     show: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       transition: {
// // //         duration: 0.3,
// // //       },
// // //     },
// // //   };

// // //   return (
// // //     <section
// // //       id="gallery"
// // //       ref={galleryRef}
// // //       className="section-padding bg-gray-50"
// // //     >
// // //       <div className="container">
// // //         <SectionTitle
// // //           title="Design Gallery"
// // //           subtitle="Explore our collection of stunning wall transformations"
// // //         />

// // //         {/* Enhanced Category Filter */}
// // //         <div className="flex flex-wrap justify-center gap-3 mb-12">
// // //           {categories.map((category, index) => (
// // //             <motion.button
// // //               key={category.id}
// // //               className={`px-5 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
// // //                 selectedCategory === category.id
// // //                   ? "bg-gradient-to-r from-royal-blue to-sky-blue text-white shadow-lg"
// // //                   : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
// // //               }`}
// // //               onClick={() => setSelectedCategory(category.id)}
// // //               variants={categoryVariants}
// // //               initial="hidden"
// // //               animate={isInView ? "show" : "hidden"}
// // //               transition={{ delay: index * 0.05 }}
// // //               whileHover={{ y: -3 }}
// // //               whileTap={{ scale: 0.95 }}
// // //             >
// // //               <span className="text-lg">{category.icon}</span>
// // //               <span className="font-medium">{category.name}</span>
// // //             </motion.button>
// // //           ))}
// // //         </div>

// // //         {/* Gallery Grid with Enhanced Animations */}
// // //         <motion.div
// // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           animate={isInView ? "show" : "hidden"}
// // //         >
// // //           {filteredGallery.map((item, index) => (
// // //             <motion.div
// // //               key={item.id}
// // //               className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
// // //               variants={itemVariants}
// // //               whileHover={{ y: -10 }}
// // //               onClick={() => openModal(item)}
// // //               layout
// // //             >
// // //               {/* Image with Loading State */}
// // //               <div className="relative h-72 overflow-hidden">
// // //                 {imageLoading[item.id] && (
// // //                   <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
// // //                     <div className="w-10 h-10 border-4 border-royal-blue border-t-transparent rounded-full animate-spin"></div>
// // //                   </div>
// // //                 )}
// // //                 <img
// // //                   src={item.image}
// // //                   alt={item.title}
// // //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// // //                   onLoadStart={() => handleImageLoadStart(item.id)}
// // //                   onLoad={() => handleImageLoad(item.id)}
// // //                 />

// // //                 {/* Gradient Overlay */}
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

// // //                 {/* Category Badge */}
// // //                 <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-deep-navy">
// // //                   {categories.find((c) => c.id === item.category)?.name}
// // //                 </div>

// // //                 {/* Tags */}
// // //                 <div className="absolute top-4 right-4 flex flex-wrap gap-1 max-w-[50%]">
// // //                   {item.tags.map((tag, i) => (
// // //                     <span
// // //                       key={i}
// // //                       className="px-2 py-1 bg-royal-blue/80 backdrop-blur-sm rounded-full text-xs text-white"
// // //                     >
// // //                       {tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>

// // //                 {/* Content Overlay */}
// // //                 <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
// // //                   <h3 className="text-xl font-bold text-white mb-2">
// // //                     {item.title}
// // //                   </h3>
// // //                   <p className="text-sm text-white/80">{item.description}</p>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* Enhanced Image Modal */}
// // //         <AnimatePresence>
// // //           {selectedImage && (
// // //             <motion.div
// // //               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               exit={{ opacity: 0 }}
// // //               onClick={closeModal}
// // //             >
// // //               {/* Navigation Arrows */}
// // //               <button
// // //                 className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-10"
// // //                 onClick={(e) => {
// // //                   e.stopPropagation();
// // //                   navigateImage("prev");
// // //                 }}
// // //               >
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   className="h-6 w-6"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M15 19l-7-7 7-7"
// // //                   />
// // //                 </svg>
// // //               </button>

// // //               <button
// // //                 className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-10"
// // //                 onClick={(e) => {
// // //                   e.stopPropagation();
// // //                   navigateImage("next");
// // //                 }}
// // //               >
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   className="h-6 w-6"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M9 5l7 7-7 7"
// // //                   />
// // //                 </svg>
// // //               </button>

// // //               <motion.div
// // //                 className="relative max-w-5xl w-full max-h-[90vh]"
// // //                 initial={{ scale: 0.9, opacity: 0 }}
// // //                 animate={{ scale: 1, opacity: 1 }}
// // //                 exit={{ scale: 0.9, opacity: 0 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 onClick={(e) => e.stopPropagation()}
// // //               >
// // //                 <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
// // //                   {/* Image Container */}
// // //                   <div className="relative h-[60vh] overflow-hidden">
// // //                     <img
// // //                       src={selectedImage.image}
// // //                       alt={selectedImage.title}
// // //                       className="w-full h-full object-contain"
// // //                     />

// // //                     {/* Close Button */}
// // //                     <button
// // //                       className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
// // //                       onClick={closeModal}
// // //                     >
// // //                       <svg
// // //                         xmlns="http://www.w3.org/2000/svg"
// // //                         className="h-6 w-6"
// // //                         fill="none"
// // //                         viewBox="0 0 24 24"
// // //                         stroke="currentColor"
// // //                       >
// // //                         <path
// // //                           strokeLinecap="round"
// // //                           strokeLinejoin="round"
// // //                           strokeWidth={2}
// // //                           d="M6 18L18 6M6 6l12 12"
// // //                         />
// // //                       </svg>
// // //                     </button>
// // //                   </div>

// // //                   {/* Image Details */}
// // //                   <div className="p-6 bg-white">
// // //                     <div className="flex items-center justify-between mb-4">
// // //                       <h3 className="text-2xl font-bold text-deep-navy">
// // //                         {selectedImage.title}
// // //                       </h3>
// // //                       <span className="px-3 py-1 bg-gradient-to-r from-royal-blue to-sky-blue text-white rounded-full text-sm font-medium">
// // //                         {
// // //                           categories.find(
// // //                             (c) => c.id === selectedImage.category,
// // //                           )?.name
// // //                         }
// // //                       </span>
// // //                     </div>

// // //                     <p className="text-gray-600 mb-4">
// // //                       {selectedImage.description}
// // //                     </p>

// // //                     {/* Tags */}
// // //                     <div className="flex flex-wrap gap-2 mb-6">
// // //                       {selectedImage.tags.map((tag, i) => (
// // //                         <span
// // //                           key={i}
// // //                           className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
// // //                         >
// // //                           #{tag}
// // //                         </span>
// // //                       ))}
// // //                     </div>

// // //                     {/* Action Buttons */}
// // //                     <div className="flex gap-3">
// // //                       <button className="px-6 py-3 bg-gradient-to-r from-royal-blue to-sky-blue text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
// // //                         Request This Design
// // //                       </button>
// // //                       <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
// // //                         Save to Favorites
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Image Counter */}
// // //                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
// // //                   {currentImageIndex + 1} / {filteredGallery.length}
// // //                 </div>
// // //               </motion.div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Gallery;

// // // components/sections/Gallery.jsx
// // import React, { useState, useEffect, useRef } from "react";
// // import {
// //   motion,
// //   AnimatePresence,
// //   useInView,
// //   useAnimation,
// // } from "framer-motion";
// // import {
// //   FaTimes,
// //   FaArrowLeft,
// //   FaArrowRight,
// //   FaHeart,
// //   FaShare,
// //   FaSearchPlus,
// //   FaFilter,
// //   FaBookmark,
// //   FaPalette,
// // } from "react-icons/fa";
// // import SectionTitle from "../ui/SectionTitle";

// // const galleryData = [
// //   {
// //     id: 1,
// //     category: "living-room",
// //     title: "Modern Living Room",
// //     image: "https://picsum.photos/seed/livingroom/800/600.jpg",
// //     description: "Transform your living space with our contemporary designs",
// //     tags: ["modern", "minimalist", "contemporary"],
// //     featured: true,
// //   },
// //   {
// //     id: 2,
// //     category: "bedroom",
// //     title: "Cozy Bedroom",
// //     image: "https://picsum.photos/seed/bedroom/800/600.jpg",
// //     description: "Create a serene atmosphere in your personal sanctuary",
// //     tags: ["cozy", "relaxing", "personal"],
// //     featured: false,
// //   },
// //   {
// //     id: 3,
// //     category: "office",
// //     title: "Creative Office Space",
// //     image: "https://picsum.photos/seed/office/800/600.jpg",
// //     description: "Inspire productivity with innovative wall designs",
// //     tags: ["professional", "creative", "inspiring"],
// //     featured: true,
// //   },
// //   {
// //     id: 4,
// //     category: "reception",
// //     title: "Hotel Reception",
// //     image: "https://picsum.photos/seed/reception/800/600.jpg",
// //     description:
// //       "Make a lasting first impression with stunning reception areas",
// //     tags: ["welcoming", "luxury", "impressive"],
// //     featured: false,
// //   },
// //   {
// //     id: 5,
// //     category: "kids-room",
// //     title: "Kids Playroom",
// //     image: "https://picsum.photos/seed/kidsroom/800/600.jpg",
// //     description: "Spark imagination with playful and colorful designs",
// //     tags: ["playful", "colorful", "imaginative"],
// //     featured: true,
// //   },
// //   {
// //     id: 6,
// //     category: "restaurant",
// //     title: "Restaurant Dining",
// //     image: "https://picsum.photos/seed/restaurant/800/600.jpg",
// //     description: "Enhance dining experiences with atmospheric wall art",
// //     tags: ["atmospheric", "elegant", "dining"],
// //     featured: false,
// //   },
// //   {
// //     id: 7,
// //     category: "living-room",
// //     title: "Minimalist Living",
// //     image: "https://picsum.photos/seed/minimalist/800/600.jpg",
// //     description: "Less is more with our minimalist design approach",
// //     tags: ["minimalist", "clean", "sophisticated"],
// //     featured: false,
// //   },
// //   {
// //     id: 8,
// //     category: "bedroom",
// //     title: "Luxury Bedroom",
// //     image: "https://picsum.photos/seed/luxurybed/800/600.jpg",
// //     description: "Indulge in luxury with our premium bedroom designs",
// //     tags: ["luxury", "premium", "elegant"],
// //     featured: true,
// //   },
// //   {
// //     id: 9,
// //     category: "office",
// //     title: "Corporate Office",
// //     image: "https://picsum.photos/seed/corporate/800/600.jpg",
// //     description: "Professional environments that inspire success",
// //     tags: ["corporate", "professional", "success"],
// //     featured: false,
// //   },
// // ];

// // const categories = [
// //   { id: "all", name: "All", icon: <FaPalette /> },
// //   { id: "living-room", name: "Living Room", icon: "🛋️" },
// //   { id: "bedroom", name: "Bedroom", icon: "🛏️" },
// //   { id: "office", name: "Office", icon: "💼" },
// //   { id: "reception", name: "Reception", icon: "🏨" },
// //   { id: "kids-room", name: "Kids Room", icon: "🧸" },
// //   { id: "restaurant", name: "Restaurant", icon: "🍽️" },
// // ];

// // const Gallery = () => {
// //   const [selectedCategory, setSelectedCategory] = useState("all");
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const [imageLoading, setImageLoading] = useState({});
// //   const [favorites, setFavorites] = useState([]);
// //   const [showFilterMenu, setShowFilterMenu] = useState(false);
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const galleryRef = useRef(null);
// //   const isInView = useInView(galleryRef, { once: true, amount: 0.1 });
// //   const controls = useAnimation();

// //   const filteredGallery =
// //     selectedCategory === "all"
// //       ? galleryData
// //       : galleryData.filter((item) => item.category === selectedCategory);

// //   // Find index of selected image in filtered gallery for navigation
// //   useEffect(() => {
// //     if (selectedImage) {
// //       const index = filteredGallery.findIndex(
// //         (item) => item.id === selectedImage.id,
// //       );
// //       setCurrentImageIndex(index);
// //     }
// //   }, [selectedImage, filteredGallery]);

// //   // Trigger animation when in view
// //   useEffect(() => {
// //     if (isInView) {
// //       controls.start("visible");
// //     }
// //   }, [isInView, controls]);

// //   const openModal = (image) => {
// //     setSelectedImage(image);
// //     document.body.style.overflow = "hidden";
// //   };

// //   const closeModal = () => {
// //     setSelectedImage(null);
// //     document.body.style.overflow = "auto";
// //   };

// //   const navigateImage = (direction) => {
// //     if (direction === "next") {
// //       const newIndex = (currentImageIndex + 1) % filteredGallery.length;
// //       setSelectedImage(filteredGallery[newIndex]);
// //     } else {
// //       const newIndex =
// //         currentImageIndex === 0
// //           ? filteredGallery.length - 1
// //           : currentImageIndex - 1;
// //       setSelectedImage(filteredGallery[newIndex]);
// //     }
// //   };

// //   const handleImageLoad = (id) => {
// //     setImageLoading((prev) => ({ ...prev, [id]: false }));
// //   };

// //   const handleImageLoadStart = (id) => {
// //     setImageLoading((prev) => ({ ...prev, [id]: true }));
// //   };

// //   const toggleFavorite = (id) => {
// //     setFavorites((prev) =>
// //       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
// //     );
// //   };

// //   // Animation variants
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 30, scale: 0.9 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       scale: 1,
// //       transition: {
// //         duration: 0.5,
// //         ease: [0.25, 0.46, 0.45, 0.94],
// //       },
// //     },
// //   };

// //   const categoryVariants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       transition: {
// //         duration: 0.3,
// //         ease: [0.25, 0.46, 0.45, 0.94],
// //       },
// //     },
// //   };

// //   return (
// //     <section
// //       id="gallery"
// //       ref={galleryRef}
// //       className="section-padding relative overflow-hidden"
// //       style={{ backgroundColor: "#0A072C" }}
// //     >
// //       {/* Background Decorative Elements */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <div
// //           className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
// //           style={{ backgroundColor: "#1A4CB6" }}
// //         ></div>
// //         <div
// //           className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
// //           style={{ backgroundColor: "#A55E83" }}
// //         ></div>
// //         <div
// //           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl"
// //           style={{ backgroundColor: "#FBC410" }}
// //         ></div>
// //       </div>

// //       <div className="container relative z-10">
// //         <SectionTitle
// //           title="Design Gallery"
// //           subtitle="Explore our collection of stunning wall transformations"
// //           titleColor="text-white"
// //           subtitleColor="text-white/80"
// //         />

// //         {/* Enhanced Category Filter */}
// //         <div className="flex flex-wrap justify-center gap-3 mb-12">
// //           {categories.map((category, index) => (
// //             <motion.button
// //               key={category.id}
// //               className={`px-5 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
// //                 selectedCategory === category.id
// //                   ? "text-white shadow-lg"
// //                   : "bg-white/10 text-white/70 hover:bg-white/20 shadow-md backdrop-blur-sm"
// //               }`}
// //               style={{
// //                 background:
// //                   selectedCategory === category.id
// //                     ? `linear-gradient(135deg, #1A4CB6, #0C8FF2)`
// //                     : undefined,
// //               }}
// //               onClick={() => setSelectedCategory(category.id)}
// //               variants={categoryVariants}
// //               initial="hidden"
// //               animate={isInView ? "visible" : "hidden"}
// //               transition={{ delay: index * 0.05 }}
// //               whileHover={{ y: -3, scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               <span className="text-lg">{category.icon}</span>
// //               <span className="font-medium">{category.name}</span>
// //             </motion.button>
// //           ))}
// //         </div>

// //         {/* Gallery Grid with Enhanced Animations */}
// //         <motion.div
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate={controls}
// //         >
// //           {filteredGallery.map((item, index) => (
// //             <motion.div
// //               key={item.id}
// //               className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
// //               variants={itemVariants}
// //               whileHover={{ y: -10 }}
// //               onHoverStart={() => setHoveredCard(item.id)}
// //               onHoverEnd={() => setHoveredCard(null)}
// //               onClick={() => openModal(item)}
// //               layout
// //             >
// //               {/* Featured Badge */}
// //               {item.featured && (
// //                 <div
// //                   className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
// //                   style={{
// //                     background: "linear-gradient(135deg, #FBC410, #E95F15)",
// //                   }}
// //                 >
// //                   Featured
// //                 </div>
// //               )}

// //               {/* Image with Loading State */}
// //               <div className="relative h-72 overflow-hidden">
// //                 {imageLoading[item.id] && (
// //                   <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-10">
// //                     <div
// //                       className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin"
// //                       style={{
// //                         borderColor: "#1A4CB6",
// //                         borderTopColor: "transparent",
// //                       }}
// //                     ></div>
// //                   </div>
// //                 )}
// //                 <img
// //                   src={item.image}
// //                   alt={item.title}
// //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                   onLoadStart={() => handleImageLoadStart(item.id)}
// //                   onLoad={() => handleImageLoad(item.id)}
// //                 />

// //                 {/* Gradient Overlay */}
// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A072C] via-[#0A072C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

// //                 {/* Category Badge */}
// //                 <div
// //                   className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium"
// //                   style={{ color: "#0A072C" }}
// //                 >
// //                   {categories.find((c) => c.id === item.category)?.name}
// //                 </div>

// //                 {/* Tags */}
// //                 <div className="absolute top-4 left-4 flex flex-wrap gap-1 max-w-[50%]">
// //                   {item.tags.slice(0, 2).map((tag, i) => (
// //                     <span
// //                       key={i}
// //                       className="px-2 py-1 backdrop-blur-sm rounded-full text-xs text-white"
// //                       style={{ backgroundColor: "#1A4CB6" }}
// //                     >
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>

// //                 {/* Quick Actions */}
// //                 <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                   <button
// //                     className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       toggleFavorite(item.id);
// //                     }}
// //                   >
// //                     <FaHeart
// //                       className={
// //                         favorites.includes(item.id) ? "text-red-400" : ""
// //                       }
// //                     />
// //                   </button>
// //                   <button
// //                     className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       // Handle share functionality
// //                     }}
// //                   >
// //                     <FaShare />
// //                   </button>
// //                   <button
// //                     className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       openModal(item);
// //                     }}
// //                   >
// //                     <FaSearchPlus />
// //                   </button>
// //                 </div>

// //                 {/* Content Overlay */}
// //                 <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
// //                   <h3 className="text-xl font-bold text-white mb-2">
// //                     {item.title}
// //                   </h3>
// //                   <p className="text-sm text-white/80">{item.description}</p>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Enhanced Image Modal */}
// //         <AnimatePresence>
// //           {selectedImage && (
// //             <motion.div
// //               className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
// //               style={{ backgroundColor: "rgba(10, 7, 44, 0.9)" }}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               onClick={closeModal}
// //             >
// //               {/* Navigation Arrows */}
// //               <button
// //                 className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-10"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   navigateImage("prev");
// //                 }}
// //               >
// //                 <FaArrowLeft />
// //               </button>

// //               <button
// //                 className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-10"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   navigateImage("next");
// //                 }}
// //               >
// //                 <FaArrowRight />
// //               </button>

// //               <motion.div
// //                 className="relative max-w-5xl w-full max-h-[90vh]"
// //                 initial={{ scale: 0.9, opacity: 0, y: 20 }}
// //                 animate={{ scale: 1, opacity: 1, y: 0 }}
// //                 exit={{ scale: 0.9, opacity: 0, y: 20 }}
// //                 transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
// //                 onClick={(e) => e.stopPropagation()}
// //               >
// //                 <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
// //                   {/* Image Container */}
// //                   <div className="relative h-[60vh] overflow-hidden">
// //                     <img
// //                       src={selectedImage.image}
// //                       alt={selectedImage.title}
// //                       className="w-full h-full object-contain"
// //                     />

// //                     {/* Close Button */}
// //                     <button
// //                       className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
// //                       onClick={closeModal}
// //                     >
// //                       <FaTimes />
// //                     </button>
// //                   </div>

// //                   {/* Image Details */}
// //                   <div className="p-6 bg-white">
// //                     <div className="flex items-center justify-between mb-4">
// //                       <h3
// //                         className="text-2xl font-bold"
// //                         style={{ color: "#0A072C" }}
// //                       >
// //                         {selectedImage.title}
// //                       </h3>
// //                       <span
// //                         className="px-3 py-1 text-white rounded-full text-sm font-medium"
// //                         style={{
// //                           background:
// //                             "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
// //                         }}
// //                       >
// //                         {
// //                           categories.find(
// //                             (c) => c.id === selectedImage.category,
// //                           )?.name
// //                         }
// //                       </span>
// //                     </div>

// //                     <p className="text-gray-600 mb-4">
// //                       {selectedImage.description}
// //                     </p>

// //                     {/* Tags */}
// //                     <div className="flex flex-wrap gap-2 mb-6">
// //                       {selectedImage.tags.map((tag, i) => (
// //                         <span
// //                           key={i}
// //                           className="px-3 py-1 rounded-full text-sm"
// //                           style={{
// //                             backgroundColor: "#FBC41020",
// //                             color: "#E95F15",
// //                             border: "1px solid #FBC41050",
// //                           }}
// //                         >
// //                           #{tag}
// //                         </span>
// //                       ))}
// //                     </div>

// //                     {/* Action Buttons */}
// //                     <div className="flex gap-3">
// //                       <button
// //                         className="px-6 py-3 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
// //                         style={{
// //                           background:
// //                             "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
// //                         }}
// //                       >
// //                         Request This Design
// //                       </button>
// //                       <button
// //                         className="px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
// //                         style={{
// //                           backgroundColor: "#A55E8320",
// //                           color: "#A55E83",
// //                           border: "1px solid #A55E8350",
// //                         }}
// //                         onClick={() => toggleFavorite(selectedImage.id)}
// //                       >
// //                         <FaBookmark
// //                           className={
// //                             favorites.includes(selectedImage.id)
// //                               ? "text-red-500"
// //                               : ""
// //                           }
// //                         />
// //                         {favorites.includes(selectedImage.id)
// //                           ? "Saved"
// //                           : "Save to Favorites"}
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Image Counter */}
// //                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
// //                   {currentImageIndex + 1} / {filteredGallery.length}
// //                 </div>
// //               </motion.div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Gallery;

// // components/sections/Gallery.jsx
// import React, {
//   useState,
//   useEffect,
//   useRef,
//   useMemo,
//   useCallback,
// } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useInView,
//   useAnimation,
// } from "framer-motion";
// import {
//   FaTimes,
//   FaArrowLeft,
//   FaArrowRight,
//   FaHeart,
//   FaShare,
//   FaSearchPlus,
//   FaFilter,
//   FaBookmark,
//   FaPalette,
// } from "react-icons/fa";
// import SectionTitle from "../ui/SectionTitle";

// const galleryData = [
//   {
//     id: 1,
//     category: "living-room",
//     title: "Modern Living Room",
//     image:
//       "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
//     description: "Transform your living space with our contemporary designs",
//     tags: ["modern", "minimalist", "contemporary"],
//     featured: true,
//   },
//   {
//     id: 2,
//     category: "bedroom",
//     title: "Cozy Bedroom",
//     image:
//       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop",
//     description: "Create a serene atmosphere in your personal sanctuary",
//     tags: ["cozy", "relaxing", "personal"],
//     featured: false,
//   },
//   {
//     id: 3,
//     category: "office",
//     title: "Creative Office Space",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w-800&auto=format&fit=crop",
//     description: "Inspire productivity with innovative wall designs",
//     tags: ["professional", "creative", "inspiring"],
//     featured: true,
//   },
//   {
//     id: 4,
//     category: "reception",
//     title: "Hotel Reception",
//     image:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
//     description:
//       "Make a lasting first impression with stunning reception areas",
//     tags: ["welcoming", "luxury", "impressive"],
//     featured: false,
//   },
//   {
//     id: 5,
//     category: "kids-room",
//     title: "Kids Playroom",
//     image:
//       "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop",
//     description: "Spark imagination with playful and colorful designs",
//     tags: ["playful", "colorful", "imaginative"],
//     featured: true,
//   },
//   {
//     id: 6,
//     category: "restaurant",
//     title: "Restaurant Dining",
//     image:
//       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
//     description: "Enhance dining experiences with atmospheric wall art",
//     tags: ["atmospheric", "elegant", "dining"],
//     featured: false,
//   },
//   {
//     id: 7,
//     category: "living-room",
//     title: "Minimalist Living",
//     image:
//       "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop",
//     description: "Less is more with our minimalist design approach",
//     tags: ["minimalist", "clean", "sophisticated"],
//     featured: false,
//   },
//   {
//     id: 8,
//     category: "bedroom",
//     title: "Luxury Bedroom",
//     image:
//       "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop",
//     description: "Indulge in luxury with our premium bedroom designs",
//     tags: ["luxury", "premium", "elegant"],
//     featured: true,
//   },
//   {
//     id: 9,
//     category: "office",
//     title: "Corporate Office",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
//     description: "Professional environments that inspire success",
//     tags: ["corporate", "professional", "success"],
//     featured: false,
//   },
// ];

// const categories = [
//   { id: "all", name: "All", icon: <FaPalette /> },
//   { id: "living-room", name: "Living Room", icon: "🛋️" },
//   { id: "bedroom", name: "Bedroom", icon: "🛏️" },
//   { id: "office", name: "Office", icon: "💼" },
//   { id: "reception", name: "Reception", icon: "🏨" },
//   { id: "kids-room", name: "Kids Room", icon: "🧸" },
//   { id: "restaurant", name: "Restaurant", icon: "🍽️" },
// ];

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [imageLoading, setImageLoading] = useState({});
//   const [favorites, setFavorites] = useState([]);
//   const galleryRef = useRef(null);
//   const isInView = useInView(galleryRef, { once: true, amount: 0.1 });
//   const controls = useAnimation();

//   // Memoize filtered gallery for better performance
//   const filteredGallery = useMemo(() => {
//     return selectedCategory === "all"
//       ? galleryData
//       : galleryData.filter((item) => item.category === selectedCategory);
//   }, [selectedCategory]);

//   // Find index of selected image
//   useEffect(() => {
//     if (selectedImage) {
//       const index = filteredGallery.findIndex(
//         (item) => item.id === selectedImage.id,
//       );
//       setCurrentImageIndex(Math.max(0, index));
//     }
//   }, [selectedImage, filteredGallery]);

//   // Trigger animation when in view
//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   const openModal = useCallback((image) => {
//     setSelectedImage(image);
//     document.body.style.overflow = "hidden";
//   }, []);

//   const closeModal = useCallback(() => {
//     setSelectedImage(null);
//     document.body.style.overflow = "auto";
//   }, []);

//   const navigateImage = useCallback(
//     (direction) => {
//       setCurrentImageIndex((prevIndex) => {
//         let newIndex;
//         if (direction === "next") {
//           newIndex = (prevIndex + 1) % filteredGallery.length;
//         } else {
//           newIndex =
//             prevIndex === 0 ? filteredGallery.length - 1 : prevIndex - 1;
//         }
//         setSelectedImage(filteredGallery[newIndex]);
//         return newIndex;
//       });
//     },
//     [filteredGallery],
//   );

//   const handleImageLoad = useCallback((id) => {
//     setImageLoading((prev) => ({ ...prev, [id]: false }));
//   }, []);

//   const handleImageLoadStart = useCallback((id) => {
//     setImageLoading((prev) => ({ ...prev, [id]: true }));
//   }, []);

//   const toggleFavorite = useCallback((id, e) => {
//     e?.stopPropagation();
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
//     );
//   }, []);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!selectedImage) return;

//       switch (e.key) {
//         case "Escape":
//           closeModal();
//           break;
//         case "ArrowRight":
//           navigateImage("next");
//           break;
//         case "ArrowLeft":
//           navigateImage("prev");
//           break;
//         default:
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [selectedImage, closeModal, navigateImage]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut",
//       },
//     },
//   };

//   const categoryVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       id="gallery"
//       ref={galleryRef}
//       className="section-padding relative overflow-hidden"
//       style={{ backgroundColor: "#0A072C" }}
//     >
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
//           style={{ backgroundColor: "#1A4CB6" }}
//         />
//         <div
//           className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
//           style={{ backgroundColor: "#A55E83" }}
//         />
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl"
//           style={{ backgroundColor: "#FBC410" }}
//         />
//       </div>

//       <div className="container relative z-10">
//         <SectionTitle
//           title="Design Gallery"
//           subtitle="Explore our collection of stunning wall transformations"
//           titleColor="text-white"
//           subtitleColor="text-white/80"
//         />

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 px-4">
//           {categories.map((category, index) => (
//             <motion.button
//               key={category.id}
//               className={`px-4 py-2.5 md:px-5 md:py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base ${
//                 selectedCategory === category.id
//                   ? "text-white shadow-lg"
//                   : "bg-white/10 text-white/70 hover:bg-white/20 shadow-md backdrop-blur-sm"
//               }`}
//               style={{
//                 background:
//                   selectedCategory === category.id
//                     ? `linear-gradient(135deg, #1A4CB6, #0C8FF2)`
//                     : undefined,
//               }}
//               onClick={() => setSelectedCategory(category.id)}
//               variants={categoryVariants}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               transition={{ delay: index * 0.03 }}
//               whileHover={{ y: -2, scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="text-base md:text-lg">{category.icon}</span>
//               <span className="font-medium">{category.name}</span>
//             </motion.button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//           key={selectedCategory} // Re-animate on filter change
//         >
//           {filteredGallery.map((item) => (
//             <motion.div
//               key={item.id}
//               className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer group"
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               onClick={() => openModal(item)}
//               layout
//             >
//               {/* Featured Badge */}
//               {item.featured && (
//                 <div
//                   className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
//                   style={{
//                     background: "linear-gradient(135deg, #FBC410, #E95F15)",
//                   }}
//                 >
//                   Featured
//                 </div>
//               )}

//               {/* Image Container */}
//               <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-900">
//                 {imageLoading[item.id] && (
//                   <div className="absolute inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center z-10">
//                     <div
//                       className="w-8 h-8 border-3 border-t-transparent rounded-full animate-spin"
//                       style={{
//                         borderColor: "#1A4CB6",
//                         borderTopColor: "transparent",
//                       }}
//                     />
//                   </div>
//                 )}

//                 {/* Optimized Image with proper alt text */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   loading="lazy"
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   onLoad={() => handleImageLoad(item.id)}
//                   onLoadStart={() => handleImageLoadStart(item.id)}
//                   onError={() => handleImageLoad(item.id)}
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A072C]/80 via-[#0A072C]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

//                 {/* Category Badge */}
//                 <div
//                   className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium shadow-sm"
//                   style={{ color: "#0A072C" }}
//                 >
//                   {categories.find((c) => c.id === item.category)?.name}
//                 </div>

//                 {/* Quick Actions */}
//                 <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
//                   <button
//                     className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                     onClick={(e) => toggleFavorite(item.id, e)}
//                   >
//                     <FaHeart
//                       size={16}
//                       className={
//                         favorites.includes(item.id)
//                           ? "text-red-400 fill-red-400"
//                           : ""
//                       }
//                     />
//                   </button>
//                   <button
//                     className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <FaShare size={16} />
//                   </button>
//                 </div>

//                 {/* Content */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
//                   <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 line-clamp-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-xs md:text-sm text-white/90 line-clamp-2">
//                     {item.description}
//                   </p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-1 mt-2 md:mt-3">
//                     {item.tags.slice(0, 2).map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-2 py-1 text-xs backdrop-blur-sm rounded-full text-white"
//                         style={{ backgroundColor: "#1A4CB6" }}
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* No Results Message */}
//         {filteredGallery.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-12"
//           >
//             <div className="text-white/60 text-lg">
//               No designs found for this category.
//             </div>
//             <button
//               className="mt-4 px-6 py-2 rounded-full text-white transition-colors"
//               style={{
//                 background: "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
//               }}
//               onClick={() => setSelectedCategory("all")}
//             >
//               View All Designs
//             </button>
//           </motion.div>
//         )}

//         {/* Enhanced Image Modal */}
//         <AnimatePresence mode="wait">
//           {selectedImage && (
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center p-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeModal}
//             >
//               {/* Dark Overlay */}
//               <motion.div
//                 className="absolute inset-0"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 style={{ backgroundColor: "rgba(10, 7, 44, 0.95)" }}
//               />

//               {/* Navigation Arrows */}
//               <button
//                 className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigateImage("prev");
//                 }}
//                 disabled={filteredGallery.length <= 1}
//               >
//                 <FaArrowLeft size={20} />
//               </button>

//               <button
//                 className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigateImage("next");
//                 }}
//                 disabled={filteredGallery.length <= 1}
//               >
//                 <FaArrowRight size={20} />
//               </button>

//               {/* Modal Content */}
//               <motion.div
//                 className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden"
//                 initial={{ scale: 0.9, opacity: 0, y: 20 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.9, opacity: 0, y: 20 }}
//                 transition={{ duration: 0.2, ease: "easeOut" }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
//                   {/* Image Container */}
//                   <div className="relative h-[50vh] sm:h-[60vh] bg-gray-900">
//                     <img
//                       src={selectedImage.image}
//                       alt={selectedImage.title}
//                       className="w-full h-full object-contain"
//                     />

//                     {/* Close Button */}
//                     <button
//                       className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
//                       onClick={closeModal}
//                     >
//                       <FaTimes size={20} />
//                     </button>

//                     {/* Image Counter */}
//                     {filteredGallery.length > 1 && (
//                       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
//                         {currentImageIndex + 1} / {filteredGallery.length}
//                       </div>
//                     )}
//                   </div>

//                   {/* Image Details */}
//                   <div className="p-6 md:p-8 bg-white">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
//                       <div>
//                         <h3
//                           className="text-2xl md:text-3xl font-bold mb-2"
//                           style={{ color: "#0A072C" }}
//                         >
//                           {selectedImage.title}
//                         </h3>
//                         <span
//                           className="inline-block px-3 py-1 text-white rounded-full text-sm font-medium"
//                           style={{
//                             background:
//                               "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
//                           }}
//                         >
//                           {
//                             categories.find(
//                               (c) => c.id === selectedImage.category,
//                             )?.name
//                           }
//                         </span>
//                       </div>

//                       {/* Quick Actions */}
//                       <div className="flex gap-2">
//                         <button
//                           className="w-10 h-10 rounded-full flex items-center justify-center border hover:shadow-md transition-all"
//                           style={{
//                             backgroundColor: favorites.includes(
//                               selectedImage.id,
//                             )
//                               ? "#FEE2E2"
//                               : "#F3F4F6",
//                             borderColor: favorites.includes(selectedImage.id)
//                               ? "#EF4444"
//                               : "#E5E7EB",
//                             color: favorites.includes(selectedImage.id)
//                               ? "#EF4444"
//                               : "#6B7280",
//                           }}
//                           onClick={() => toggleFavorite(selectedImage.id)}
//                         >
//                           <FaHeart
//                             size={18}
//                             className={
//                               favorites.includes(selectedImage.id)
//                                 ? "fill-current"
//                                 : ""
//                             }
//                           />
//                         </button>
//                         <button
//                           className="w-10 h-10 rounded-full flex items-center justify-center border hover:shadow-md transition-all"
//                           style={{
//                             backgroundColor: "#F3F4F6",
//                             borderColor: "#E5E7EB",
//                             color: "#6B7280",
//                           }}
//                         >
//                           <FaShare size={18} />
//                         </button>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 mb-6 text-lg">
//                       {selectedImage.description}
//                     </p>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mb-8">
//                       {selectedImage.tags.map((tag, i) => (
//                         <span
//                           key={i}
//                           className="px-4 py-2 rounded-full text-sm font-medium"
//                           style={{
//                             backgroundColor: "#FBC41020",
//                             color: "#E95F15",
//                             border: "1px solid #FBC41050",
//                           }}
//                         >
//                           #{tag}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-4">
//                       <button
//                         className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex-1 text-center"
//                         style={{
//                           background:
//                             "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
//                         }}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         Request This Design
//                       </button>
//                       <button
//                         className="px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex-1 text-center"
//                         style={{
//                           backgroundColor: "#F3F4F6",
//                           color: "#374151",
//                           border: "1px solid #D1D5DB",
//                         }}
//                         onClick={closeModal}
//                       >
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

// components/sections/Gallery.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaShare,
  FaFilter,
  FaBookmark,
  FaPalette,
} from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

const galleryData = [
  {
    id: 1,
    category: "living-room",
    title: "Modern Living Room",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    description: "Transform your living space with our contemporary designs",
    tags: ["modern", "minimalist", "contemporary"],
    featured: true,
  },
  {
    id: 2,
    category: "bedroom",
    title: "Cozy Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop",
    description: "Create a serene atmosphere in your personal sanctuary",
    tags: ["cozy", "relaxing", "personal"],
    featured: false,
  },
  {
    id: 3,
    category: "office",
    title: "Creative Office Space",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    description: "Inspire productivity with innovative wall designs",
    tags: ["professional", "creative", "inspiring"],
    featured: true,
  },
  {
    id: 4,
    category: "reception",
    title: "Hotel Reception",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    description:
      "Make a lasting first impression with stunning reception areas",
    tags: ["welcoming", "luxury", "impressive"],
    featured: false,
  },
  {
    id: 5,
    category: "kids-room",
    title: "Kids Playroom",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop",
    description: "Spark imagination with playful and colorful designs",
    tags: ["playful", "colorful", "imaginative"],
    featured: true,
  },
  {
    id: 6,
    category: "restaurant",
    title: "Restaurant Dining",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    description: "Enhance dining experiences with atmospheric wall art",
    tags: ["atmospheric", "elegant", "dining"],
    featured: false,
  },
  {
    id: 7,
    category: "living-room",
    title: "Minimalist Living",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop",
    description: "Less is more with our minimalist design approach",
    tags: ["minimalist", "clean", "sophisticated"],
    featured: false,
  },
  {
    id: 8,
    category: "bedroom",
    title: "Luxury Bedroom",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop",
    description: "Indulge in luxury with our premium bedroom designs",
    tags: ["luxury", "premium", "elegant"],
    featured: true,
  },
  {
    id: 9,
    category: "office",
    title: "Corporate Office",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    description: "Professional environments that inspire success",
    tags: ["corporate", "professional", "success"],
    featured: false,
  },
];

const categories = [
  { id: "all", name: "All", icon: <FaPalette /> },
  { id: "living-room", name: "Living Room", icon: "🛋️" },
  { id: "bedroom", name: "Bedroom", icon: "🛏️" },
  { id: "office", name: "Office", icon: "💼" },
  { id: "reception", name: "Reception", icon: "🏨" },
  { id: "kids-room", name: "Kids Room", icon: "🧸" },
  { id: "restaurant", name: "Restaurant", icon: "🍽️" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const galleryRef = useRef(null);

  // Set up intersection observer to detect when gallery is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  // Memoize filtered gallery for better performance
  const filteredGallery = useMemo(() => {
    return selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Find index of selected image
  useEffect(() => {
    if (selectedImage) {
      const index = filteredGallery.findIndex(
        (item) => item.id === selectedImage.id,
      );
      setCurrentImageIndex(Math.max(0, index));
    }
  }, [selectedImage, filteredGallery]);

  const openModal = useCallback((image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  }, []);

  const navigateImage = useCallback(
    (direction) => {
      setCurrentImageIndex((prevIndex) => {
        let newIndex;
        if (direction === "next") {
          newIndex = (prevIndex + 1) % filteredGallery.length;
        } else {
          newIndex =
            prevIndex === 0 ? filteredGallery.length - 1 : prevIndex - 1;
        }
        setSelectedImage(filteredGallery[newIndex]);
        return newIndex;
      });
    },
    [filteredGallery],
  );

  const handleImageLoad = useCallback((id) => {
    setImageLoading((prev) => ({ ...prev, [id]: false }));
  }, []);

  const handleImageLoadStart = useCallback((id) => {
    setImageLoading((prev) => ({ ...prev, [id]: true }));
  }, []);

  const toggleFavorite = useCallback((id, e) => {
    e?.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeModal, navigateImage]);

  return (
    <section
      id="gallery"
      ref={galleryRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#0A072C" }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#1A4CB6" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#A55E83" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#FBC410" }}
        />
      </div>

      <div className="container relative z-10">
        <SectionTitle
          title="Gallery"
          subtitle="Explore our collection of stunning wall transformations"
          titleColor="text-white"
          subtitleColor="text-white/80"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2.5 md:px-5 md:py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base ${
                selectedCategory === category.id
                  ? "text-white shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20 shadow-md backdrop-blur-sm"
              }`}
              style={{
                background:
                  selectedCategory === category.id
                    ? `linear-gradient(135deg, #1A4CB6, #0C8FF2)`
                    : undefined,
              }}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="text-base md:text-lg">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
          key={selectedCategory} // Re-render on filter change
        >
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer group hover:shadow-2xl transition-all duration-300"
              onClick={() => openModal(item)}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div
                  className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #FBC410, #E95F15)",
                  }}
                >
                  Featured
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-900">
                {imageLoading[item.id] && (
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center z-10">
                    <div
                      className="w-8 h-8 border-3 border-t-transparent rounded-full animate-spin"
                      style={{
                        borderColor: "#1A4CB6",
                        borderTopColor: "transparent",
                      }}
                    />
                  </div>
                )}

                {/* Optimized Image with proper alt text */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onLoad={() => handleImageLoad(item.id)}
                  onLoadStart={() => handleImageLoadStart(item.id)}
                  onError={() => handleImageLoad(item.id)}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A072C]/80 via-[#0A072C]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Category Badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium shadow-sm"
                  style={{ color: "#0A072C" }}
                >
                  {categories.find((c) => c.id === item.category)?.name}
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    onClick={(e) => toggleFavorite(item.id, e)}
                  >
                    <FaHeart
                      size={16}
                      className={
                        favorites.includes(item.id)
                          ? "text-red-400 fill-red-400"
                          : ""
                      }
                    />
                  </button>
                  <button
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaShare size={16} />
                  </button>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/90 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-2 md:mt-3">
                    {item.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs backdrop-blur-sm rounded-full text-white"
                        style={{ backgroundColor: "#1A4CB6" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <div className="text-white/60 text-lg">
              No designs found for this category.
            </div>
            <button
              className="mt-4 px-6 py-2 rounded-full text-white transition-colors"
              style={{
                background: "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
              }}
              onClick={() => setSelectedCategory("all")}
            >
              View All Designs
            </button>
          </div>
        )}

        {/* Enhanced Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(10, 7, 44, 0.95)" }}
            onClick={closeModal}
          >
            {/* Navigation Arrows */}
            <button
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              disabled={filteredGallery.length <= 1}
            >
              <FaArrowLeft size={20} />
            </button>

            <button
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              disabled={filteredGallery.length <= 1}
            >
              <FaArrowRight size={20} />
            </button>

            {/* Modal Content */}
            <div
              className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Image Container */}
                <div className="relative h-[50vh] sm:h-[60vh] bg-gray-900">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />

                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                    onClick={closeModal}
                  >
                    <FaTimes size={20} />
                  </button>

                  {/* Image Counter */}
                  {filteredGallery.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                      {currentImageIndex + 1} / {filteredGallery.length}
                    </div>
                  )}
                </div>

                {/* Image Details */}
                <div className="p-6 md:p-8 bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3
                        className="text-2xl md:text-3xl font-bold mb-2"
                        style={{ color: "#0A072C" }}
                      >
                        {selectedImage.title}
                      </h3>
                      <span
                        className="inline-block px-3 py-1 text-white rounded-full text-sm font-medium"
                        style={{
                          background:
                            "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
                        }}
                      >
                        {
                          categories.find(
                            (c) => c.id === selectedImage.category,
                          )?.name
                        }
                      </span>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2">
                      <button
                        className="w-10 h-10 rounded-full flex items-center justify-center border hover:shadow-md transition-all"
                        style={{
                          backgroundColor: favorites.includes(selectedImage.id)
                            ? "#FEE2E2"
                            : "#F3F4F6",
                          borderColor: favorites.includes(selectedImage.id)
                            ? "#EF4444"
                            : "#E5E7EB",
                          color: favorites.includes(selectedImage.id)
                            ? "#EF4444"
                            : "#6B7280",
                        }}
                        onClick={() => toggleFavorite(selectedImage.id)}
                      >
                        <FaHeart
                          size={18}
                          className={
                            favorites.includes(selectedImage.id)
                              ? "fill-current"
                              : ""
                          }
                        />
                      </button>
                      <button
                        className="w-10 h-10 rounded-full flex items-center justify-center border hover:shadow-md transition-all"
                        style={{
                          backgroundColor: "#F3F4F6",
                          borderColor: "#E5E7EB",
                          color: "#6B7280",
                        }}
                      >
                        <FaShare size={18} />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">
                    {selectedImage.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedImage.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: "#FBC41020",
                          color: "#E95F15",
                          border: "1px solid #FBC41050",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex-1 text-center"
                      style={{
                        background: "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
                      }}
                    >
                      Request This Design
                    </button>
                    <button
                      className="px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex-1 text-center"
                      style={{
                        backgroundColor: "#F3F4F6",
                        color: "#374151",
                        border: "1px solid #D1D5DB",
                      }}
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
