import React , { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = ({ darkMode }) => {
  const navigate = useNavigate();
  const [animateNavbar, setAnimateNavbar] = useState(false);


  useEffect(() => {
    setAnimateNavbar(true);
  }, []);


  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={`z-50 relative ${animateNavbar ? "animate-slideIn" : ""}`}>
    <div
      className={`fixed z-50 top-0 left-0 h-screen flex flex-col items-center py-6 px-6 w-auto transition-colors duration-300 bg-transparent
        `}
    >
      {/* Logo */}
      <div className="w-20 h-20 flex flex-col mt-4" onClick={handleClick}>
  <button className="w-full h-full bg-transparent border-none cursor-pointer flex justify-center items-center">
    {darkMode ? (
      <img
        src="/logos/As2_processed_processed.png"
        alt="Logo"
        className="w-full h-full object-contain transition-transform duration-300 hover:scale-110 hover:animate-bounce"
      />
    ) : (
      <img
        src="/logos/As2_processed.png"
        alt="Logo"
        className="w-full h-full object-contain transition-transform duration-300 hover:scale-110 hover:animate-slideUp filter invert brightness-0.5 saturate-150 font-extrabold"
      />
    )}
  </button>
</div>


      {/* Navigation Links */}
      <nav className="flex flex-col  gap-y-16  italic font-bold mt-20 pl-5 pr-5 pb-4">
        <a href="/home" className={`transform -rotate-90 text-sm tracking-wider transition duration-300 hover:text-blue-500
        } hover:rotate-0`}>
          Home
        </a>
        <a href="/projects" className={`transform -rotate-90 text-sm tracking-wider transition duration-300 hover:text-blue-500
        }  hover:rotate-0`}>
          Projects
        </a>
        
        <a href="/about" className={`transform -rotate-90 text-sm tracking-wider transition duration-300 hover:text-blue-500
        } hover:rotate-0`}>
          About
        </a>
        <a href="/contact" className={`transform -rotate-90 text-sm tracking-wider transition duration-300 hover:text-blue-500
        } hover:rotate-0`}>
          Contact
        </a>
      </nav>

      {/* Social Icons */}
      <div className="flex flex-col gap-6 mt-auto p-4">
      {/* <a href="mailto:ansharma712.as@gmail.com" className={`transition duration-300 flex items-center  hover:text-blue-500
        }`}>
          <MailIcon fontSize="medium" />
        </a> */}
        <a href="https://www.instagram.com/ansharma.as/" className={`transition duration-300 flex items-center  hover:text-blue-500
        }`}>
          <InstagramIcon fontSize="medium" />
        </a>
        <a href="https://www.linkedin.com/in/ansharma-as/" className={`transition duration-300 flex items-center  hover:text-blue-500
        }`}>
          <LinkedInIcon fontSize="medium" />
        </a>
        <a href="https://www.github.com/ansharma-as" className={`transition duration-300 flex items-center  hover:text-blue-500
        }`}>
          <GitHubIcon fontSize="medium" />
        </a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
