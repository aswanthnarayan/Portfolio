import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
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

  const sliderVariants = {
    initial: {
      x: "0%",
    },
    animate: {
      x: "-100%", 
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 90,
      },
    },
  };

  return (
    <div className="relative flex flex-col gap-3 h-full pb-4 md:flex-row md:pb-0 overflow-hidden">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="h-1/2 order-last flex flex-col items-center justify-center gap-2 md:h-full md:order-first md:w-1/2 md:gap-8 md:pl-24 md:items-start"
      >
        <motion.h2 variants={textVariants} className="text-xl uppercase tracking-[.225rem] md:text-2xl md:tracking-[.625rem]">
          aswanth c k
        </motion.h2>
        <motion.h1 variants={textVariants} className="text-3xl px-6 uppercase text-center lg:text-6xl md:text-left lg:leading-[1.2] md:px-0">
          Web developer and UI designer
        </motion.h1>
        <motion.div variants={textVariants} className="w-full flex flex-col gap-2 px-6 md:px-0 md:flex-row">
          <motion.button variants={textVariants} className="border border-white p-1.5 rounded-md">
            See the Latest Works
          </motion.button>
          <motion.button variants={textVariants} className="border border-white p-1.5 rounded-md">
            Contact Me
          </motion.button>
        </motion.div>

        <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" className="hidden w-12 md:flex" alt="" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 font-bold text-9xl whitespace-nowrap text-white opacity-10 overflow-hidden"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span>React Redux Javascript HTML&CSS Tailwind Node </motion.span>
      </motion.div>
      <div className="relative h-1/2 flex justify-center md:h-full md:w-1/2">
        <img className="absolute h-full object-cover" src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
