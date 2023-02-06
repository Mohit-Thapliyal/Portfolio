import React from "react";
import {motion} from 'framer-motion'
import { fadeInItem } from "../../../utils/motion";

const EducationItem = (props) => {
  return (
    <>
      <motion.li variants={fadeInItem} className="flex p-3 text-left duration-200 rounded-lg shadow-lg cursor-default bg-nosecondary font-nunito lg:justify-between lg:px-5 lg:py-6 lg:hover:scale-105">
        <div className="space-y-1 lg:w-3/6">
          <h2 className="text-lg font-bold leading-tight font-edusa lg:leading-normal lg:text-xl">
            {props.uniName},
          </h2>
          <p className="text-sm font-semibold text-highlight lg:text-base">
            {props.location}
          </p>
          <h3 className="text-base font-semibold leading-snug font-quicksand">
            {props.courseName}
          </h3>
          <p className="text-xs font-bold text-highlight/80 lg:hidden font-quicksand lg:text-base">
            {props.duration}
          </p>
          <h4 className="text-sm font-semibold font-quicksand lg:text-base">
            {props.marks}
          </h4>
        </div>
        <div className="hidden w-2/6 text-center lg:block xl:w-1/6">
          <p className="px-3 py-1 text-xs font-bold rounded-full text-primary bg-highlight lg:text-sm">
            {props.duration}
          </p>
        </div>
      </motion.li>
    </>
  );
};

export default EducationItem;
