// App.jsx
import React from "react";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
