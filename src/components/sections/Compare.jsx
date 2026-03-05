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
  FaExchangeAlt,
  FaHandPointer,
  FaArrowDown,
} from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import lraImg from "../../assets/images/livingroom_after.png";
import lrbImg from "../../assets/images/livingroom_before.png";
import officeaImg from "../../assets/pixelImages/office_after.png";
import officebImg from "../../assets/pixelImages/office_before.png";
import badroomaImg from "../../assets/pixelImages/bedroom_after.png";
import badroombImg from "../../assets/pixelImages/bedroom_before.png";

const Compare = () => {
  const [activeComparison, setActiveComparison] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const comparisons = [
    {
      id: 1,
      before: {
        image: lrbImg,
        title: "Blank Canvas",
        description:
          "A plain, uninspired wall with no character or personality.",
      },
      after: {
        image: lraImg,
        title: "Artistic Expression",
        description:
          "A vibrant, custom-designed wall that transforms the entire space.",
      },
      category: "Living Room",
    },
    {
      id: 2,
      before: {
        image: officebImg,
        title: "Corporate Blandness",
        description:
          "A standard office space that lacks inspiration and creativity.",
      },
      after: {
        image: officeaImg,
        title: "Creative Workspace",
        description:
          "An inspiring environment that boosts productivity and innovation.",
      },
      category: "Office",
    },
    {
      id: 3,
      before: {
        image: badroombImg,
        title: "Basic Bedroom",
        description: "A simple bedroom with minimal character and comfort.",
      },
      after: {
        image: badroomaImg,
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

  const handleNextComparison = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveComparison((prev) => (prev + 1) % comparisons.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrevComparison = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveComparison((prev) =>
          prev === 0 ? comparisons.length - 1 : prev - 1,
        );
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentComparison = comparisons[activeComparison];

  return (
    <section
      id="transform"
      ref={containerRef}
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
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveComparison(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
              >
                {comparison.category}
              </button>
            ))}
          </div>
        </div>

        {/* Before/After Comparison Container */}
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl mb-8">
          {/* Instructions for first-time users */}
          {showInstructions && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 bg-black/70 text-white px-4 py-2 rounded-full text-sm flex items-center">
              <FaHandPointer className="mr-2" />
              Click the arrows or tabs to see different transformations
              <button
                onClick={() => setShowInstructions(false)}
                className="ml-4 text-white/70 hover:text-white"
              >
                ✕
              </button>
            </div>
          )}

          <div className="relative">
            {/* Desktop: Side-by-Side Layout */}
            <div className="hidden md:block relative h-80 md:h-[450px] lg:h-[450px]">
              <div className="grid grid-cols-2 h-full">
                {/* Before Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    key={`before-${activeComparison}`}
                    src={currentComparison.before.image}
                    alt={currentComparison.before.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {currentComparison.before.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {currentComparison.before.description}
                    </p>
                  </div>

                  {/* Before Label */}
                  <div className="absolute top-1 left-2 z-20">
                    <div className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: "#7E1D1D" }}
                      ></div>
                      <div
                        className="px-3 py-1 rounded-full text-md font-medium text-white backdrop-blur-sm"
                        style={{ backgroundColor: "rgba(126, 29, 29, 0.8)" }}
                      >
                        Before
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider Line - Desktop Only */}
                {/* <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-white/30 z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl">
                    <FaExchangeAlt className="text-gray-800" />
                  </div>
                </div> */}

                {/* After Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    key={`after-${activeComparison}`}
                    src={currentComparison.after.image}
                    alt={currentComparison.after.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {currentComparison.after.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {currentComparison.after.description}
                    </p>
                  </div>

                  {/* After Label */}
                  <div className="absolute top-1 right-2 z-20">
                    <div className="flex items-center">
                      <div
                        className="px-3 py-1 rounded-full text-md font-medium text-white backdrop-blur-sm mr-2"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(26, 76, 182, 0.8), rgba(12, 143, 242, 0.8))",
                        }}
                      >
                        After
                      </div>
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Stacked Layout */}
            <div className="md:hidden">
              {/* Before Image - Mobile */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  key={`mobile-before-${activeComparison}`}
                  src={currentComparison.before.image}
                  alt={currentComparison.before.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-lg font-bold mb-1">
                    {currentComparison.before.title}
                  </h3>
                  <p className="text-white/80 text-xs">
                    {currentComparison.before.description}
                  </p>
                </div>

                {/* Before Label - Mobile */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: "#7E1D1D" }}
                    ></div>
                    <div
                      className="px-2 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm"
                      style={{ backgroundColor: "rgba(126, 29, 29, 0.8)" }}
                    >
                      Before
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Divider */}
              <div className="relative bg-white/10 py-3 flex items-center justify-center">
                <div className="absolute left-0 right-0 h-px bg-white/30"></div>
                <div className="relative bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <FaArrowDown className="text-white text-sm" />
                </div>
              </div>

              {/* After Image - Mobile */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  key={`mobile-after-${activeComparison}`}
                  src={currentComparison.after.image}
                  alt={currentComparison.after.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-lg font-bold mb-1">
                    {currentComparison.after.title}
                  </h3>
                  <p className="text-white/80 text-xs">
                    {currentComparison.after.description}
                  </p>
                </div>

                {/* After Label - Mobile */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center">
                    <div
                      className="px-2 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm mr-2"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(26, 76, 182, 0.8), rgba(12, 143, 242, 0.8))",
                      }}
                    >
                      After
                    </div>
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #1A4CB6, #0C8FF2)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110 z-30"
            onClick={handlePrevComparison}
            aria-label="Previous comparison"
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110 z-30"
            onClick={handleNextComparison}
            aria-label="Next comparison"
          >
            <FaArrowRight />
          </button>

          {/* Comparison Dots Indicator */}
          <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2 z-30">
            {comparisons.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === activeComparison
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveComparison(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                aria-label={`Go to comparison ${index + 1}`}
              />
            ))}
          </div>
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
      </div>
    </section>
  );
};

export default Compare;
