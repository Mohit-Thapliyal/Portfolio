import React from "react";
import { motion } from "framer-motion";
import { slideInVariant } from "../../utils/motion";

const AnimatedPage = ({ children }) => {
  return (
    <motion.section
      variants={slideInVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedPage;
