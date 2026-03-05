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
