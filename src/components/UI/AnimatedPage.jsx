import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.4 } },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.section
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedPage;
