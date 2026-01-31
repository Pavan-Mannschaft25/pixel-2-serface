// // components/sections/Process.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import SectionTitle from "../ui/SectionTitle";

// const processSteps = [
//   {
//     id: 1,
//     title: "Choose Wall",
//     description: "Select the wall you want to transform in your space.",
//     icon: "📐",
//   },
//   {
//     id: 2,
//     title: "Select Design",
//     description: "Browse our collection or work with us on a custom design.",
//     icon: "🎨",
//   },
//   {
//     id: 3,
//     title: "Preview in 3D",
//     description:
//       "See how the design will look in your space before installation.",
//     icon: "👁️",
//   },
//   {
//     id: 4,
//     title: "Print & Install",
//     description:
//       "Our professionals handle the printing and installation process.",
//     icon: "✨",
//   },
// ];

// const Process = () => {
//   return (
//     <section id="process" className="section-padding">
//       <div className="container">
//         <SectionTitle
//           title="How It Works"
//           subtitle="Our simple four-step process to transform your walls"
//         />

//         <div className="relative">
//           {/* Desktop Timeline */}
//           <div className="hidden md:block">
//             <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
//             <div
//               className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"
//               style={{ width: "100%" }}
//             ></div>

//             <div className="relative flex justify-between">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={step.id}
//                   className="flex flex-col items-center w-1/4"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center mb-4 z-10 relative">
//                     <span className="text-2xl">{step.icon}</span>
//                   </div>
//                   <h3 className="text-lg font-bold mb-2">{step.title}</h3>
//                   <p className="text-sm text-gray-600 text-center">
//                     {step.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Timeline */}
//           <div className="md:hidden space-y-8">
//             {processSteps.map((step, index) => (
//               <motion.div
//                 key={step.id}
//                 className="flex items-start"
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
//                   <span className="text-white font-bold">{index + 1}</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold mb-2">{step.title}</h3>
//                   <p className="text-sm text-gray-600">{step.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <motion.div
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//         >
//           <p className="text-lg text-gray-700 mb-6">
//             Ready to transform your space?
//           </p>
//           <button className="btn-primary">Start Your Project</button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Process;

// components/sections/Process.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaRulerCombined,
  FaPalette,
  FaCube,
  FaMagic,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import chooseWallImg from "../../assets/images/choose-wall.avif";
import selectImg from "../../assets/images/pre-img.jpg";
import preImg from "../../assets/images/pre2-img.jpeg";
import printImg from "../../assets/images/print-img.jpg";

const processSteps = [
  {
    id: 1,
    title: "Choose Wall",
    img: chooseWallImg,
    description: "Select the wall you want to transform in your space.",
    icon: <FaRulerCombined />,
    color: "#1A4CB6",
    details: [
      "Measure your wall dimensions",
      "Take photos from different angles",
      "Note any obstacles or features",
    ],
  },
  {
    id: 2,
    title: "Select Design",
    img: selectImg,
    description: "Browse our collection or work with us on a custom design.",
    icon: <FaPalette />,
    color: "#0C8FF2",
    details: [
      "Explore our design gallery",
      "Consult with our design experts",
      "Finalize your custom design",
    ],
  },
  {
    id: 3,
    title: "Preview in 3D",
    img: preImg,
    description:
      "See how the design will look in your space before installation.",
    icon: <FaCube />,
    color: "#FBC410",
    details: [
      "View in augmented reality",
      "Adjust colors and scale",
      "Get virtual room visualization",
    ],
  },
  {
    id: 4,
    title: "Print & Install",
    img: printImg,
    description:
      "Our professionals handle the printing and installation process.",
    icon: <FaMagic />,
    color: "#E95F15",
    details: [
      "High-quality printing process",
      "Professional installation team",
      "Final inspection and touch-ups",
    ],
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredStep, setHoveredStep] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Auto-advance through steps
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="process"
      ref={sectionRef}
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
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="How It Works"
            subtitle="Our simple four-step process to transform your walls"
            titleColor="text-white"
            subtitleColor="text-white/80"
          />
        </motion.div>

        {/* Auto-play Controls */}
        <div className="flex justify-end mb-8">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? <FaPause /> : <FaPlay />}
            <span className="text-sm">
              {isAutoPlaying ? "Pause" : "Play"} Animation
            </span>
          </button>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 transform -translate-y-1/2"></div>

          {/* Progress Line */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 transform -translate-y-1/2 origin-left"
            style={{ backgroundColor: "#FBC410" }}
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 2, delay: 0.5 }}
          ></motion.div>

          <div className="relative flex justify-between">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center w-1/4 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Circle */}
                <motion.div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 z-10 relative transition-all duration-300 ${
                    activeStep === index ? "scale-110" : ""
                  }`}
                  style={{
                    backgroundColor:
                      activeStep === index ? step.color : "white",
                    border: `4px solid ${step.color}`,
                    boxShadow:
                      activeStep === index
                        ? `0 0 20px ${step.color}40`
                        : "none",
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className={`text-3xl ${activeStep === index ? "text-white" : ""}`}
                    style={{
                      color: activeStep === index ? "white" : step.color,
                    }}
                  >
                    {step.icon}
                  </span>
                </motion.div>

                {/* Step Number */}
                {/* <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: step.color }}
                >
                  {index + 1}
                </div> */}

                {/* Step Content */}
                <motion.div
                  className="text-center"
                  animate={{
                    scale: hoveredStep === index ? 1.05 : 1,
                    color: hoveredStep === index ? step.color : "white",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-white/80 max-w-xs">
                    {step.description}
                  </p>
                </motion.div>

                {/* Detail List on Hover */}
                <AnimatePresence>
                  {hoveredStep === index && (
                    <motion.div
                      className="absolute top-full mt-4 w-64 bg-white rounded-lg shadow-xl p-4 z-20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-gray-700"
                          >
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Timeline */}
        <div className="lg:hidden">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 cursor-pointer transition-all duration-300 ${
                  activeStep === index ? "bg-white/20" : ""
                }`}
                style={{ borderLeftColor: step.color }}
                variants={itemVariants}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: step.color }}
                  >
                    <span className="text-white text-xl">{step.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-white mr-2">
                        {step.title}
                      </h3>
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs"
                        style={{ backgroundColor: step.color }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-sm text-white/80 mb-3">
                      {step.description}
                    </p>

                    <AnimatePresence>
                      {hoveredStep === index && (
                        <motion.ul
                          className="space-y-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {step.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start text-xs text-white/70"
                            >
                              <FaCheckCircle className="mr-2 mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Step Details */}
        <div className="mt-12 bg-white/10 backdrop-blur-md rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Step {activeStep + 1}: {processSteps[activeStep].title}
              </h3>
              <p className="text-white/80 mb-6">
                {processSteps[activeStep].description}
              </p>
              <ul className="space-y-3 mb-6">
                {processSteps[activeStep].details.map((detail, i) => (
                  <li key={i} className="flex items-start text-white/80">
                    <FaCheckCircle className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <div>
                  <Link to="transform" smooth duration={500} offset={-90}>
                    <button
                      className="px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2 transition-all"
                      style={{
                        backgroundColor: processSteps[activeStep].color,
                      }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="use-cases" smooth duration={500} offset={-90}>
                    <button
                      className="px-6 py-3 rounded-lg text-white font-medium border border-white/30 hover:bg-white/10 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Examples
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative h-64 lg:h-80">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <img
                  src={processSteps[activeStep].img}
                  alt={processSteps[activeStep].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Step Indicator Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeStep ? "w-8" : ""
                    }`}
                    style={{
                      backgroundColor:
                        index === activeStep
                          ? "#FBC410"
                          : "rgba(255, 255, 255, 0.5)",
                    }}
                    onClick={() => setActiveStep(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xl text-white/80 mb-6">
            Ready to transform your space?
          </p>
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
              Start Your Project
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
