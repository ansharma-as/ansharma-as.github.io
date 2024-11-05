import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CustomizedSwitches from "../components/themeToggler";
import HomeAnimation1 from "../components/HomeAnimation1";
import Details from "../components/Details";

function About() {
  const [darkMode, setDarkMode] = useState(true);
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateLogo(true), 300); // Delay footer animation slightly for a better effect
  }, []);

  const toggleBackground = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div
      className={`w-full h-full ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Navbar Component */}
      <div>
        <Navbar darkMode={darkMode} />
      </div>

      {/* Switch Component */}
      <div className="absolute top-4 right-4 z-10">
        <CustomizedSwitches checked={darkMode} onToggle={toggleBackground} />
      </div>

      {/* Abour page Components */}
      <div>
        <Details />
      </div>

      {/* Footer Component */}
      <div>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default About;
