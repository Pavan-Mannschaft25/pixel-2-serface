// // components/sections/Compare.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import SectionTitle from "../ui/SectionTitle";

// const Compare = () => {
//   const [sliderPosition, setSliderPosition] = useState(50);

//   const handleSliderChange = (e) => {
//     setSliderPosition(e.target.value);
//   };

//   return (
//     <section className="section-padding bg-gray-50">
//       <div className="container">
//         <SectionTitle
//           title="Transform Your Space"
//           subtitle="See the difference our designs can make in your environment"
//         />

//         <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
//           <div className="relative h-96 md:h-[500px]">
//             {/* Before Image */}
//             <div className="absolute inset-0">
//               <img
//                 src="https://picsum.photos/seed/blankwall/1200/800.jpg"
//                 alt="Plain wall"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
//                 Before
//               </div>
//             </div>

//             {/* After Image with clip-path based on slider position */}
//             <div
//               className="absolute inset-0"
//               style={{
//                 clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
//               }}
//             >
//               <img
//                 src="https://picsum.photos/seed/designedwall/1200/800.jpg"
//                 alt="Designed wall"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
//                 After
//               </div>
//             </div>

//             {/* Slider */}
//             <div
//               className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
//               style={{ left: `${sliderPosition}%` }}
//             >
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-gray-800"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Hidden range input for slider control */}
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={sliderPosition}
//             onChange={handleSliderChange}
//             className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
//           />
//         </div>

//         <motion.div
//           className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="text-center">
//             <h3 className="text-2xl font-bold mb-4 text-gray-800">
//               Your walls are empty.
//             </h3>
//             <p className="text-gray-600">
//               Plain, uninspired spaces that lack personality and character.
//             </p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-2xl font-bold mb-4 gradient-text">
//               We turn them into experiences.
//             </h3>
//             <p className="text-gray-600">
//               Vibrant, artistic expressions that transform your environment and
//               elevate your mood.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Compare;

// components/sections/Compare.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaArrowLeft,
  FaArrowRight,
  FaSyncAlt,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import lraImg from "../../assets/images/LR-A.jpeg";
import lrbImg from "../../assets/images/LR-B.jpeg";
import officeaImg from "../../assets/images/office_after.jpeg";
import officebImg from "../../assets/images/office_before.jpeg";
import badroomaImg from "../../assets/images/bedroom_after.jpeg";
import badroombImg from "../../assets/images/bedroom_before.jpeg";

const Compare = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeComparison, setActiveComparison] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const comparisons = [
    {
      id: 1,
      before: {
        image: lraImg,
        title: "Blank Canvas",
        description:
          "A plain, uninspired wall with no character or personality.",
      },
      after: {
        image: lrbImg,
        title: "Artistic Expression",
        description:
          "A vibrant, custom-designed wall that transforms the entire space.",
      },
      category: "Living Room",
    },
    {
      id: 2,
      before: {
        image: officeaImg,
        title: "Corporate Blandness",
        description:
          "A standard office space that lacks inspiration and creativity.",
      },
      after: {
        image: officebImg,
        title: "Creative Workspace",
        description:
          "An inspiring environment that boosts productivity and innovation.",
      },
      category: "Office",
    },
    {
      id: 3,
      before: {
        image: badroomaImg,
        title: "Basic Bedroom",
        description: "A simple bedroom with minimal character and comfort.",
      },
      after: {
        image: badroombImg,
        title: "Personal Sanctuary",
        description:
          "A luxurious retreat that reflects personal style and promotes relaxation.",
      },
      category: "Bedroom",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Pixel2Surface completely transformed our living room. The design they created became the centerpiece of our home!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Office Manager",
      content:
        "Our office has never been more inspiring. Employee morale and creativity have skyrocketed since the redesign.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Interior Designer",
      content:
        "The quality and attention to detail in Pixel2Surface's work is unmatched. They're my go-to for all client projects.",
      rating: 5,
    },
  ];

  const benefits = [
    "Custom designs tailored to your space",
    "High-quality materials that last",
    "Professional installation service",
    "Satisfaction guaranteed",
  ];

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleNextComparison = () => {
    setActiveComparison((prev) => (prev + 1) % comparisons.length);
    setSliderPosition(50);
  };

  const handlePrevComparison = () => {
    setActiveComparison((prev) =>
      prev === 0 ? comparisons.length - 1 : prev - 1,
    );
    setSliderPosition(50);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalTouchEnd);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, []);

  const currentComparison = comparisons[activeComparison];

  return (
    <section
      ref={containerRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#1A1A3A" }}
      // style={{
      //   background:
      //     "linear-gradient(135deg, #0A072C 0%, #1A1A3A 30%, #0A072C 100%)",
      // }}
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
        <SectionTitle
          title="Transform Your Space"
          subtitle="See the difference our designs can make in your environment"
          titleColor="text-white"
          subtitleColor="text-white/80"
        />

        {/* Comparison Selector */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex rounded-full p-1"
            style={{ backgroundColor: "#1A4CB620" }}
          >
            {comparisons.map((comparison, index) => (
              <button
                key={comparison.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeComparison === index
                    ? "text-white shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
                style={{
                  background:
                    activeComparison === index
                      ? `linear-gradient(135deg, #1A4CB6, #0C8FF2)`
                      : undefined,
                }}
                onClick={() => {
                  setActiveComparison(index);
                  setSliderPosition(50);
                }}
              >
                {comparison.category}
              </button>
            ))}
          </div>
        </div>

        {/* Before/After Comparison Slider */}
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl mb-8">
          <div className="relative h-80 md:h-[500px]">
            {/* Before Image */}
            <div className="absolute inset-0">
              <img
                src={currentComparison.before.image}
                alt={currentComparison.before.title}
                className="w-full h-full object-fill"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-bold mb-2">
                  {currentComparison.before.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {currentComparison.before.description}
                </p>
              </div>
            </div>

            {/* After Image with clip-path based on slider position */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <img
                src={currentComparison.after.image}
                alt={currentComparison.after.title}
                className="w-full h-full object-fill"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-bold mb-2">
                  {currentComparison.after.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {currentComparison.after.description}
                </p>
              </div>
            </div>

            {/* Slider Line */}
            <div
              className={`absolute top-0 bottom-0 w-1 cursor-ew-resize z-20 ${isDragging ? "bg-white" : "bg-white/70"}`}
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl">
                <div className="flex">
                  <FaArrowLeft className="text-gray-800 mr-1" />
                  <FaArrowRight className="text-gray-800 ml-1" />
                </div>
              </div>
            </div>

            {/* Before/After Labels */}
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: "#7E1D1D" }}
            >
              Before
            </div>
            <div
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{
                background: "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
              }}
            >
              After
            </div>
          </div>

          {/* Hidden range input for slider control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
          />

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-30"
            onClick={handlePrevComparison}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-30"
            onClick={handleNextComparison}
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Comparison Details */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">Your walls are empty.</h3>
            <p className="text-white/80 mb-4">
              Plain, uninspired spaces that lack personality and character.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">✗</span>
                <span className="text-white/70">Bland and uninteresting</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">✗</span>
                <span className="text-white/70">No personal expression</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">✗</span>
                <span className="text-white/70">
                  Missed opportunity for impact
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">
              We turn them into experiences.
            </h3>
            <p className="text-white/80 mb-4">
              Vibrant, artistic expressions that transform your environment and
              elevate your mood.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-400 mr-2 mt-1" />
                <span className="text-white/70">
                  Custom designs that reflect your style
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-400 mr-2 mt-1" />
                <span className="text-white/70">
                  Creates an emotional connection
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-400 mr-2 mt-1" />
                <span className="text-white/70">
                  Transforms the entire space
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Pixel2Surface?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #FBC410, #E95F15)",
                  }}
                >
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <p className="text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link to="contact" smooth duration={500} offset={-90}>
            <motion.button
              className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl"
              style={{
                background: "linear-gradient(135deg, #FBC410, #E95F15)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(251, 196, 16, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Transform Your Space Today
            </motion.button>
          </Link>
        </div>
        {/* <div className="text-center mt-16">
          <a href="contact">
            <motion.button
              className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl"
              style={{
                background: "linear-gradient(135deg, #FBC410, #E95F15)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(251, 196, 16, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Transform Your Space Today
            </motion.button>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Compare;
