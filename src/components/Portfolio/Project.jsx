import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <div className="transition-all duration-300 ease-in-out cursor-default hover:scale-105">
      <motion.div
        initial={{y:20, opacity: 0, scale: 0.8 }}
        animate={{
          y:0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
        className="flex flex-col items-center justify-center"
      >
        <div className="w-11/12 overflow-hidden bg-tertiary rounded-2xl">
          <div 
        onClick={() => {
          props.onShowModal(1, props.image);
        }} className="h-40 p-2 pb-0 md:h-40 lg:h-40 xl:h-52">
            <img
              className="w-full h-full border-b rounded-lg cursor-pointer rounded-t-xl"
              src={props.image}
              alt="project-img"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold font-quicksand">{props.title}</h2>
            <div className="h-24 mt-2 text-sm font-medium text-justify select-text lg:text-md font-nunito">
              {props.description}
            </div>
          </div>
          <div className="flex gap-3 px-5 pt-5 pb-3 bg-secondary rounded-t-md">
            {props.link && (
              <a
                href={props.link}
                target={props.title}
                className="flex items-center gap-2 px-2 py-1 font-mono duration-300 ease-in-out rounded-full hover:scale-110 text-secondary bg-highlight text-md"
              >
                <BiLink className="text-xl" />
                link
              </a>
            )}
            {!props.link && (
              <button className="flex items-center gap-2 px-2 py-1 font-mono text-white rounded-full cursor-not-allowed bg-tertiary text-md">
                <BiLink className="text-xl" />
                link
              </button>
            )}
            {props.github && (
              <a
                href={props.github}
                target={props.title}
                className="flex items-center gap-2 px-2 py-1 font-mono text-white duration-300 ease-in-out rounded-full hover:scale-110 bg-primary text-md"
              >
                <AiOutlineGithub className="text-xl text-white" />
                github
              </a>
            )}
            {!props.github && (
              <button className="flex items-center gap-2 px-2 py-1 font-mono text-white rounded-full cursor-not-allowed bg-tertiary text-md">
                <AiOutlineGithub className="text-xl text-white" />
                github
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
