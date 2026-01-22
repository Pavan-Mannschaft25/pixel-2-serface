// pages/LandingPage.jsx
import React from "react";
import Hero from "../components/sections/Hero";
import Compare from "../components/sections/Compare";
import UseCases from "../components/sections/UseCases";
import Gallery from "../components/sections/Gallery";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import { FaWhatsapp } from "react-icons/fa";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Compare />
      <UseCases />
      <Gallery />
      <Process />
      <Testimonials />
      <CTA />
      <a
        href="https://wa.me/916305070487"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rounded-full shadow-2xl px-3 py-3 font-semibold z-100 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white transition"
      >
        <FaWhatsapp size={42} />
        {/* <span>Chat on WhatsApp</span> */}
      </a>
    </main>
  );
};

export default LandingPage;
