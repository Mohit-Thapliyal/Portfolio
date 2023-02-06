import React from "react";
import {motion} from 'framer-motion'
import { fadeInItem } from "../../../utils/motion";

const WorkItem = (props) => {
  return (
    <>
      <motion.li variants={fadeInItem} className="flex p-3 py-5 text-left duration-200 rounded-lg shadow-lg cursor-default font-nunito lg:justify-between bg-nosecondary lg:px-5 lg:py-6 lg:hover:scale-105">
        <div className="space-y-1 lg:w-3/6">
          <h2 className="text-lg font-bold leading-tight font-quicksand lg:leading-normal lg:text-xl">
            {props.jobRole}
          </h2>
          <h2 className="text-base font-semibold leading-tight text-highlight lg:leading-normal font-quicksand">
            {props.company}
          </h2>
          <p className="text-sm font-semibold lg:text-sm">{props.location}</p>
          <p className="text-xs font-bold lg:hidden font-quicksand lg:text-base ">
            {props.duration}
          </p>
          <ul className="lg:mt-2">
            {props.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="mt-1 ml-4 text-sm font-medium leading-snug list-disc font-quicksand lg:w-5/6 lg:text-sm lg:font-semibold"
              >
                {responsibility}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-2 lg:w-5/6">
            {props.skills.map((skill) => (
              <span
                key={skill}
                className="p-1 px-2 text-xs font-semibold duration-200 rounded-sm select-none text-primary font-roboto bg-opacity-90 bg-highlight hover:scale-110"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden text-center lg:block">
          <p className="px-3 py-1 text-xs font-bold rounded-full text-primary bg-highlight font-nunito lg:text-sm">
            {props.duration}
          </p>
        </div>
      </motion.li>
    </>
  );
};

export default WorkItem;
