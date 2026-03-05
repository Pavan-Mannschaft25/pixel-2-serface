// components/sections/Testimonials.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaArrowRight,
  FaCheckCircle,
  FaTrophy,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Homeowner",
    content:
      "Pixel2Surface changed our home interior completely. The living room wall is now the centerpiece of our home, and guests are always amazed!",
    rating: 5,
    image: "https://picsum.photos/seed/person1/200/200.jpg",
    project: "Modern Living Room",
    date: "June 2023",
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Office Manager",
    content:
      "Our office environment has been transformed. The new wall designs have boosted employee morale and creativity. Best investment we made this year!",
    rating: 5,
    image: "https://picsum.photos/seed/person2/200/200.jpg",
    project: "Corporate Office",
    date: "May 2023",
    featured: false,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Hotel Owner",
    content:
      "Our guests love the new wall designs in our lobby and rooms. It has elevated our brand and increased positive reviews. Highly recommend!",
    rating: 5,
    image: "https://picsum.photos/seed/person3/200/200.jpg",
    project: "Hotel Lobby",
    date: "July 2023",
    featured: false,
  },
  {
    id: 4,
    name: "David Park",
    position: "Restaurant Owner",
    content:
      "The wall art has completely transformed the ambiance of our restaurant. Customers love taking photos with our walls, which has been great for social media marketing.",
    rating: 5,
    image: "https://picsum.photos/seed/person4/200/200.jpg",
    project: "Restaurant Dining",
    date: "April 2023",
    featured: false,
  },
  {
    id: 5,
    name: "Jessica Taylor",
    position: "School Principal",
    content:
      "The educational wall designs have transformed our classrooms. Students are more engaged and inspired than ever before. Thank you Pixel2Surface!",
    rating: 5,
    image: "https://picsum.photos/seed/person5/200/200.jpg",
    project: "School Classroom",
    date: "August 2023",
    featured: false,
  },
  {
    id: 6,
    name: "Robert Williams",
    position: "Retail Store Owner",
    content:
      "Our showroom sales increased by 30% after the redesign. The wall art creates the perfect ambiance for our products. Absolutely worth it!",
    rating: 5,
    image: "https://picsum.photos/seed/person6/200/200.jpg",
    project: "Retail Showroom",
    date: "March 2023",
    featured: false,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Filter testimonials - MOVED TO TOP
  const filteredTestimonials =
    filter === "all"
      ? testimonials
      : filter === "featured"
        ? testimonials.filter((t) => t.featured)
        : testimonials;

  // Reset activeIndex when filter changes to prevent out of bounds
  useEffect(() => {
    if (activeIndex >= filteredTestimonials.length) {
      setActiveIndex(0);
    }
  }, [filter, filteredTestimonials.length, activeIndex]);

  // Auto-play functionality - SINGLE USE EFFECT
  useEffect(() => {
    if (!isAutoPlaying || filteredTestimonials.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1,
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  // Make sure we have a valid current testimonial
  const currentTestimonial =
    filteredTestimonials[activeIndex] || testimonials[0];

  // Statistics
  const stats = {
    projects: "500+",
    satisfaction: "98%",
    countries: "15+",
    experience: "10+ years",
  };

  return (
    <section
      id="testimonials"
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
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Testimonials"
            subtitle="Don't just take our word for it - hear from our satisfied customers"
            titleColor="text-white"
            subtitleColor="text-white/80"
          />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex rounded-full p-1"
            style={{ backgroundColor: "#1A4CB620" }}
          >
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "all"
                  ? "text-white shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
              style={{
                background:
                  filter === "all"
                    ? `linear-gradient(135deg, #1A4CB6, #0C8FF2)`
                    : undefined,
              }}
              onClick={() => {
                setFilter("all");
                setActiveIndex(0);
              }}
            >
              All Reviews
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "featured"
                  ? "text-white shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
              style={{
                background:
                  filter === "featured"
                    ? `linear-gradient(135deg, #FBC410, #E95F15)`
                    : undefined,
              }}
              onClick={() => {
                setFilter("featured");
                setActiveIndex(0);
              }}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Testimonial Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 relative overflow-hidden">
              {/* Quote Marks */}
              <FaQuoteLeft className="text-white/10 text-6xl absolute top-4 left-4" />
              <FaQuoteRight className="text-white/10 text-6xl absolute bottom-4 right-4" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-400 text-xl mr-1"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white text-lg mb-8 italic">
                    "{currentTestimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover border-2"
                      style={{ borderColor: "#FBC410" }}
                    />
                    <div>
                      <h4 className="text-white font-bold text-xl">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-white/80">
                        {currentTestimonial.position} ·{" "}
                        {currentTestimonial.project}
                      </p>
                      <p className="text-white/60 text-sm">
                        {currentTestimonial.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-8">
                <button
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  onClick={prevTestimonial}
                >
                  <FaChevronLeft />
                </button>

                <div className="flex gap-2">
                  {filteredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "w-8" : "bg-white/50"
                      }`}
                      style={{
                        backgroundColor:
                          index === activeIndex
                            ? "#FBC410"
                            : "rgba(255, 255, 255, 0.5)",
                      }}
                      onClick={() => goToTestimonial(index)}
                    />
                  ))}
                </div>

                <button
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  onClick={nextTestimonial}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
              <div className="flex items-center mb-4">
                <FaTrophy className="text-yellow-400 text-2xl mr-3" />
                <h3 className="text-white font-bold text-xl">
                  Our Achievements
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {stats.projects}
                  </div>
                  <div className="text-white/60 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {stats.satisfaction}
                  </div>
                  <div className="text-white/60 text-sm">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {stats.countries}
                  </div>
                  <div className="text-white/60 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {stats.experience}
                  </div>
                  <div className="text-white/60 text-sm">Experience</div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <FaUsers className="text-blue-400 text-2xl mr-3" />
                <h3 className="text-white font-bold text-xl">Client Types</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Homeowners</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-white/20 rounded-full mr-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: "65%", backgroundColor: "#1A4CB6" }}
                      ></div>
                    </div>
                    <span className="text-white text-sm">65%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Businesses</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-white/20 rounded-full mr-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: "25%", backgroundColor: "#0C8FF2" }}
                      ></div>
                    </div>
                    <span className="text-white text-sm">25%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Institutions</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-white/20 rounded-full mr-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: "10%", backgroundColor: "#FBC410" }}
                      ></div>
                    </div>
                    <span className="text-white text-sm">10%</span>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
              <div className="flex items-center mb-4">
                <FaHeart className="text-red-400 text-2xl mr-3" />
                <h3 className="text-white font-bold text-xl">
                  Why They Love Us
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start text-white/80">
                  <FaCheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Exceptional quality materials</span>
                </li>
                <li className="flex items-start text-white/80">
                  <FaCheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Professional installation</span>
                </li>
                <li className="flex items-start text-white/80">
                  <FaCheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Custom design options</span>
                </li>
                <li className="flex items-start text-white/80">
                  <FaCheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Outstanding customer service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => {
                const fullIndex = testimonials.findIndex(
                  (t) => t.id === testimonial.id,
                );
                setActiveIndex(fullIndex);
                setFilter("all");
              }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <p className="text-white/80 text-sm mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-white/60 text-xs">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xl text-white/80 mb-6">
            Join our satisfied customers and transform your space today
          </p>
          <motion.button
            className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl flex items-center gap-2 mx-auto"
            style={{ background: "linear-gradient(135deg, #FBC410, #E95F15)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(251, 196, 16, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
