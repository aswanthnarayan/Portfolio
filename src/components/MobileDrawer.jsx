import React from "react";
import logo from "/logo.png";
import github from "/github.png";
import linkedin from "/linkedin.png";
import instagram from "/instagram.png";
import facebook from "/facebook.png";

import {
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import menu from "/menu-bar.png";


 
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
          <IconButton className="ml-auto" variant="text" color="black" onClick={closeDrawerRight}>
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
      <div className="flex flex-col items-center justify-center gap-8 ">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>
      <div className="flex gap-2">
        <img className="w-4 " src={github} alt="logo" />
        <img className="w-4 " src={linkedin} alt="logo" />
        <img className="w-4 " src={instagram} alt="logo" />
        <img className="w-4 " src={facebook} alt="logo" />
      </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}