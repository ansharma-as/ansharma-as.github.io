import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CustomizedSwitches from "../components/themeToggler";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import ContactForm from "../components/ContactForm";



function Contact() {
  const [animateNavbar, setAnimateNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [animateFooter, setAnimateFooter] = useState(false);

  useEffect(() => {
    setAnimateNavbar(true);
    setTimeout(() => setAnimateFooter(true), 300);
  }, []);

  const toggleBackground = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div
      className={`w-full h-screen ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-black"
      }`}
    >



      {/* Navbar Component */}
      <div
        className={`z-50 relative ${animateNavbar ? "animate-slideIn" : ""}`}
      >
        <Navbar darkMode={darkMode} />
      </div>


        {/* Switch Component */}
      <div className="absolute z-10 top-4 right-4">
        <CustomizedSwitches checked={darkMode} onToggle={toggleBackground} />
      </div>


        {/* Contact Form */}
      {/* <div className="flex items-center justify-center h-full italic animate-slideIn">
        <div className="w-full max-w-lg p-8 bg-transparent rounded-lg">
          <h1 className="text-4xl w-auto left-0 font-bold mb-4 text-center items-start ">
            Message me!
          </h1>
          <div className="h-4 w-auto bg-blue-500 mb-8 mx-auto"></div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium" htmlFor="email">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 mt-2 bg-gray-900 text-white border border-gray-700 rounded resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="">
              <Button variant="contained" endIcon={<SendIcon />}>
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div> */}
      <div className="flex items-center justify-center h-full italic animate-slideIn">

        <ContactForm />
      </div>


        {/* Footer Component */}
      <div
        className={`absolute bottom-0 left-0 w-full ${
          animateFooter ? "translate-y-0" : "translate-y-20"
        } transition-transform duration-[2.5s]`}
      >
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Contact;
