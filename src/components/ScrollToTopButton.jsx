
import React from 'react';
import { motion } from "framer-motion";


const ScrollToTopButton = () => {

  const scrollTopVarient = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };




  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div variants={scrollTopVarient} animate="scrollButton" onClick={scrollToTop} className='fixed z-999 bottom-4 right-4 z-50 text-center opacity-70 md:right-12'>
    <img variants={scrollTopVarient} src='/arrows.png' className="invert h-10  ">
    </img>
    <p variants={scrollTopVarient}>Top</p>
    </motion.div>
   
  );
};

export default ScrollToTopButton;
