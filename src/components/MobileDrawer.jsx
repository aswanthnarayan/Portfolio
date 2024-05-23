import React from "react";


import {
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import menu from "/menu-bar.png";
import { scrollToSection } from "../HelperFunctions";


 
export function MobileDrawer() {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);


 
 
  return (
    <React.Fragment>
        <img className="h-6" src={menu} onClick={openDrawerRight} alt="logo" />
      <Drawer
        placement="right"
        open={openRight}
        onClose={openDrawerRight}
        className="p-4"
        size={200}
        
      >
         <div className="mb-6 flex items-center ">
          <IconButton className="ml-auto cursor-pointer hover:scale-125 transition ease-in duration-300" variant="text" color="black" onClick={closeDrawerRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
    <div className="flex flex-col items-center justify-center text-black gap-12">
      <ul className="flex flex-col items-center justify-center gap-8 ">
      <li className="cursor-pointer hover:scale-125 transition ease-in duration-300"  onClick={() =>{
        closeDrawerRight()
        scrollToSection("home")  }}>Home</li>
        <li className="cursor-pointer hover:scale-125 transition ease-in duration-300" onClick={() =>{
          closeDrawerRight()
          scrollToSection("about")}}>About</li>
        <li className="cursor-pointer hover:scale-125 transition ease-in duration-300" onClick={() =>{
          closeDrawerRight()
          scrollToSection("projects")}}>Projects</li>
        <li className="cursor-pointer hover:scale-125 transition ease-in duration-300" onClick={() =>{
          closeDrawerRight()
          scrollToSection("contact")}}>Contact</li>
      </ul>
      <div className="flex gap-2">
      <a href="https://github.com/aswanthnarayan" className="cursor-pointer  hover:scale-125 transition ease-in duration-300" target="_blank" rel="noopener noreferrer">
          <img className="w-6 " src="./github.png" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/aswanth-narayanan" className="cursor-pointer hover:scale-125 transition ease-in duration-300" target="_blank" rel="noopener noreferrer">
          <img className="w-6 " src="./linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com/joey_tribbiani_____" className="cursor-pointer hover:scale-125 transition ease-in duration-300" target="_blank" rel="noopener noreferrer">
          <img className="w-6 " src="./instagram.png" alt="Instagram" />
        </a>
        <a href="https://facebook.com/aswanth.narayan" className="cursor-pointer hover:scale-125 transition ease-in duration-300" target="_blank" rel="noopener noreferrer">
        <img className="w-6 " src="./facebook.png" alt="Instagram" />
        </a>
      </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}