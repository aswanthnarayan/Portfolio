import React from "react"; ;
import {MobileDrawer} from "../components/MobileDrawer"
import { motion } from "framer-motion";
import { scrollToSection } from "../HelperFunctions";


const Navbar = () => {


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
      className="hidden md:flex md:gap-16 lg:gap-24 ">
        <li className="cursor-pointer hover:scale-125 transition ease-in duration-300 "onClick={() => scrollToSection("home")}>HOME</li>
        <li className="cursor-pointer hover:scale-125 transition ease-in duration-300"onClick={() => scrollToSection("about")}>ABOUT</li>
        <li className="cursor-pointer hover:scale-125 transition ease-in duration-300"onClick={() => scrollToSection("projects")}>PROJECTS</li>
        <li className="cursor-pointer hover:scale-125 transition ease-in duration-300"onClick={() => scrollToSection("contact")}>CONTACT ME</li>
      </motion.ul>
      <motion.div 
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="hidden md:flex md:gap-6 lg:gap-8">
        <a href="https://github.com/aswanthnarayan" className="cursor-pointer hover:scale-125 transition ease-in duration-300" target="_blank" rel="noopener noreferrer">
          <img className="w-6 invert" src="./github.png" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/aswanth-narayanan" className="cursor-pointer hover:scale-125 transition ease-in duration-300" target="_blank" rel="noopener noreferrer">
          <img className="w-6 invert" src="./linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com/joey_tribbiani_____" className="cursor-pointer hover:scale-125 transition ease-in duration-300" target="_blank" rel="noopener noreferrer">
          <img className="w-6 invert" src="./instagram.png" alt="Instagram" />
        </a>
        <a href="https://facebook.com/aswanth.narayan" className="cursor-pointer hover:scale-125 transition ease-in duration-300" target="_blank" rel="noopener noreferrer">
        <img className="w-6 invert" src="./facebook.png" alt="Instagram" />
        </a>
      </motion.div>
      <div className="md:hidden">
        {/* <img className="h-6" src={menu} alt="logo" /> */}
        <MobileDrawer/>
      </div>
    </div>
  );
};

export default Navbar;
