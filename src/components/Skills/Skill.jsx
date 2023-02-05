import React from "react";
import { motion } from "framer-motion";

const Skill = ({ source, alt, title, index }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        rotate: -360,
        scale: 1,
        transition: {
          duration: 0.8,
        },
      }}
      whileHover={{
        scale: 1.3,
        transition: { duration: 0.4 },
      }}
      className={`w-20 h-20 p-3 rounded-xl md:w-24 md:h-24 lg:w-32 lg:h-32 ${index%2===0 ? "bg-highlight": "bg-tertiary"}`}
    >
      <div className="p-2 bg-white rounded-xl">
        <img src={source} alt={alt} title={title} className="w-fit" />
      </div>
    </motion.div>
  );
};

export default Skill;
