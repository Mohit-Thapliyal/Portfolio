import React from "react";
import { certificateDetails } from "../../../data";
import CertificationItem from "./CertificationItem";
import {motion} from 'framer-motion'
import { fadeInContainer } from "../../../utils/motion";

const Certification = () => {
  return (
    <motion.ul variants={fadeInContainer} initial="hidden" whileInView="visible" className="grid gap-5 px-3 py-5 lg:gap-10 md:grid-cols-2 lg:px-12 lg:py-10">
      {certificateDetails.map((certificateDetail) => (
        <CertificationItem
          key={certificateDetail.id}
          certificate={certificateDetail.certificate}l
          institution={certificateDetail.institution}
          instructor={certificateDetail.instructor}
          date={certificateDetail.date}
          link={certificateDetail.link}
        />
      ))}
    </motion.ul>
  );
};

export default Certification;
