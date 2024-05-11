import React from "react"; ;
import {MobileDrawer} from "../components/MobileDrawer"
import { motion } from "framer-motion";


const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center h-[80px] justify-between px-6">
      <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="flex items-center">
        <img className="h-16 lg:h-24" src="/logo.png" alt="logo" />
      </motion.div>
      <motion.ul 
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="hidden md:flex md:gap-16 lg:gap-24">
      <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </motion.ul>
      <motion.div 
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="hidden md:flex md:gap-6 lg:gap-8">
        <img className="w-4 invert" src='./github.png' alt="logo" />
        <img className="w-4 invert" src='./linkedin.png' alt="logo" />
        <img className="w-4 invert" src='./instagram.png' alt="logo" />
        <img className="w-4 invert" src='./facebook.png' alt="logo" />
      </motion.div>
      <div className="md:hidden">
        {/* <img className="h-6" src={menu} alt="logo" /> */}
        <MobileDrawer/>
      </div>
    </div>
  );
};

export default Navbar;
