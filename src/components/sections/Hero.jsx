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
