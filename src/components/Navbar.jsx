import React from "react";
import logo from "/logo.png";
import github from "/github.png";
import linkedin from "/linkedin.png";
import instagram from "/instagram.png";
import facebook from "/facebook.png";
import {MobileDrawer} from "../components/MobileDrawer"
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <div className="flex items-center h-[80px] justify-between px-6">
      <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="flex items-center">
        <img className="h-16 lg:h-24" src={logo} alt="logo" />
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="hidden md:flex md:gap-8 lg:gap-12">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="hidden md:flex md:gap-6 lg:gap-8">
        <img className="w-4 invert" src={github} alt="logo" />
        <img className="w-4 invert" src={linkedin} alt="logo" />
        <img className="w-4 invert" src={instagram} alt="logo" />
        <img className="w-4 invert" src={facebook} alt="logo" />
      </motion.div>
      <div className="md:hidden">
        {/* <img className="h-6" src={menu} alt="logo" /> */}
        <MobileDrawer/>
      </div>
    </div>
  );
};

export default Navbar;