import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CustomizedSwitches from "../components/themeToggler";
import HomeAnimation1 from "../components/HomeAnimation1";
import HomeComponent2 from "../components/HomeComponent2";


function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateLogo(true), 300);
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
      <div className="fixed">
        <Navbar darkMode={darkMode} /> {/* Pass darkMode to Navbar */}
      </div>

      {/* Switch Component */}
      <div className="absolute top-4 right-4 z-10">
        <CustomizedSwitches checked={darkMode} onToggle={toggleBackground} />
      </div>

      {/* Home page Components */}
      <div className="w-full flex h-screen">
        {/* Left side: HomeAnimation1 */}
        <div className="w-1/2 flex justify-center items-center mb-28">
          <HomeAnimation1 />
        </div>

        {/* Right side: Image with fixed position */}
        <div className="w-1/2 relative flex justify-center items-center">
          <div className={`${animateLogo ? "animate-slideUp" : ""}`}>
            <img
              src="/logos/image.gif"
              alt="image"
              className="max-w-md max-h-md"
            />
          </div>
        </div>
      </div>

      {/* homeComponent2 */}
      <div>
        <HomeComponent2 darkMode={darkMode}/>
        {/* No need to pass darkMode here as it's not used anywhere */}
      </div>

      {/* Footer Component */}
      <div>
        <Footer darkMode={darkMode} /> {/* Pass darkMode to Footer */}
      </div>
    </div>
  );
}

export default Home;
