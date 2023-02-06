import React from "react";
import EducationItem from "./EducationItem";
import { educationDetails } from "../../../data";
import {motion} from 'framer-motion'
import { fadeInContainer } from "../../../utils/motion";

const Education = () => {
  return (
    <motion.ul variants={fadeInContainer} initial="hidden" whileInView="visible" className="flex flex-col gap-10 px-3 py-5 lg:px-12 lg:py-10">
      {educationDetails.map((educationDetail) => (
        <EducationItem
          key={educationDetail.id}
          uniName={educationDetail.uniName}
          location={educationDetail.location}
          courseName={educationDetail.courseName}
          marks={educationDetail.marks}
          duration={educationDetail.duration}
        />
      ))}
    </motion.ul>
  );
};

export default Education;
