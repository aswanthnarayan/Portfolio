import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0, backgroundColor: "transparent" },
  active: { width: "calc(100% - 0.75rem)", backgroundColor: "#FFA500" }, // Orange color
};

const transition = {
  duration: 0.7, 
  ease: "easeInOut",
};

const TabButton = ({ selectTab, active, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} style={{ paddingBottom: 0 }}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        transition={transition} 
        className="h-1  mr-3"
        style={{ originX: 0 }}
      ></motion.div>
    </button>
  );
};

export default TabButton;
