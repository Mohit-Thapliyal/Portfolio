import React from "react";
import WorkItem from "./WorkItem";
import { workDetails } from "../../../data";
import {motion} from 'framer-motion'
import { fadeInContainer } from "../../../utils/motion";

const Work = () => {
  return (
    <motion.ul variants={fadeInContainer} initial="hidden" animate="visible" className="flex flex-col gap-5 px-3 py-5 lg:gap-10 lg:px-12 lg:py-10">
      {workDetails.map((workDetail, i) => (
        <WorkItem
          key={`w${i}`}
          jobRole={workDetail.jobRole}
          company={workDetail.company}
          location={workDetail.location}
          responsibilities={workDetail.responsibilities}
          skills={workDetail.skills}
          duration={workDetail.duration}
        />
      ))}
    </motion.ul>
  );
};

export default Work;
