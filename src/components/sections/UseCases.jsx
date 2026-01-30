import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
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
//Home images
import h1Img from "../../assets/home/H-2.jpg";
import h2Img from "../../assets/home/H-3.jpg";
import h3Img from "../../assets/home/H-6.jpg";
import h4Img from "../../assets/home/H-7.jpeg";
//office images
import office1Img from "../../assets/office/Off-3.avif";
import office2Img from "../../assets/office/Off-4.jpg";
import office3Img from "../../assets/office/Off-1.jpg";
import office4Img from "../../assets/office/Off-2.jpg";
//Hotel images
import hotel1Img from "../../assets/hotel/Hot-3.avif";
import hotel2Img from "../../assets/hotel/Hot-2.webp";
import hotel3Img from "../../assets/hotel/Hot-4.jpeg";
import hotel4Img from "../../assets/hotel/Hot-1.jpg";
//school images
import school1Img from "../../assets/school/s-2.jpg";
import school2Img from "../../assets/school/s-3.jpg";
import school3Img from "../../assets/school/s-4.jpg";
import school4Img from "../../assets/school/s-5.jpg";
import school5Img from "../../assets/school/s-6.jpg";
//showroom images
import showroom1Img from "../../assets/showroom/sho-1.jpg";
import showroom2Img from "../../assets/showroom/sho-2.jpg";
import showroom3Img from "../../assets/showroom/sho-3.jpg";
import showroom4Img from "../../assets/showroom/sho-4.jpg";
//restaurant images
import restaurant1Img from "../../assets/restaurant/rest-1.jpg";
import restaurant2Img from "../../assets/restaurant/rest-2.jpg";
import restaurant3Img from "../../assets/restaurant/rest-3.jpg";
import restaurant4Img from "../../assets/restaurant/rest-5.jpg";
import restaurant5Img from "../../assets/restaurant/rest-6.jpg";

const useCases = [
  {
    id: 1,
    title: "Home",
    description:
      "Transform your living spaces into personalized art galleries.",
    icon: <FaHome />,
    image: h1Img,
    gallery: [h4Img, h2Img, h3Img],
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
    image: office1Img,
    gallery: [office2Img, office3Img, office4Img],
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
    image: hotel1Img,
    gallery: [hotel2Img, hotel3Img, hotel4Img],
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
    image: school1Img,
    gallery: [school2Img, school3Img, school4Img, school5Img],
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
    image: showroom1Img,
    gallery: [showroom2Img, showroom3Img, showroom4Img],
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
    image: restaurant1Img,
    gallery: [restaurant2Img, restaurant3Img, restaurant4Img, restaurant5Img],
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
  // const showcaseRef = useRef(null);

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
        <div className="text-center mb-12">
          <SectionTitle
            title="Where It Works"
            subtitle="Our designs transform any space into something extraordinary"
            titleColor="text-white"
            subtitleColor="text-white/80"
          />
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
          <div>
            <Link to="contact" smooth duration={500} offset={-90}>
              <button
                className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                style={{
                  background: "linear-gradient(135deg, #FBC410, #E95F15)",
                }}
              >
                Get Custom Design
              </button>
            </Link>
          </div>
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
