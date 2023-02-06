import React, { useState } from "react";
import { FaUserGraduate, FaPalette, FaHistory } from "react-icons/fa";
import {BsFillFileEarmarkPersonFill} from 'react-icons/bs'
import {AiFillSafetyCertificate} from "react-icons/ai"

import Education from "./Education/Education";
import Hobby from "./Hobby/Hobby";
import Work from "./Work/Work";
import Modal from "../UI/Modal";
import AboutMe from "./AboutMe/AboutMe";
import Certification from "./Certification/Certification";
import AnimatedPage from "../UI/AnimatedPage";
import { AnimatePresence } from "framer-motion";

const aboutList = [
  {
    id: "l1",
    title: "About Me",
    number: 1,
    icon: <BsFillFileEarmarkPersonFill />
  },
  {
    id: "l2",
    title: "Education",
    number: 2,
    icon: <FaUserGraduate />
  },
  {
    id: "l3",
    title: "Work History",
    number: 3,
    icon: <FaHistory />
  },
  {
    id: "l4",
    title: "Interest",
    number: 4,
    icon: <FaPalette />
  },
  {
    id: "l5",
    title: "Certificate",
    number: 5,
    icon: <AiFillSafetyCertificate />
  },
];

const About = () => {
  const [sectionNumber, setSectionNumber] = useState(2);

  const [selectedPainting, setSelectedPainting] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrientation, setSelectedOrientation] = useState(1);

  const hideModalHandler = () => {
    setShowModal(false);
  };
  const showModalHandler = (orientation, painting) => {
    setSelectedPainting(painting);
    setSelectedOrientation(orientation);
    setShowModal(true);
  };

  const aboutNavClass =
    " font-quicksand w-2/5 lg:w-full py-0 cursor-pointer text-sm md:text-md lg:text-lg font-extrabold rounded-r-full sm:p-1 -ml-1 lg:ml-0 pl-4 sm:pl-4";
  const aboutNavActiveClass =
    "font-quicksand w-2/5 lg:w-full cursor-pointer text-sm text-highlight bg-secondary md:text-md lg:text-lg font-bold rounded-r-full p-1 -ml-1 lg:ml-0 pl-4 lg:text-left ";

  return (
    <AnimatedPage>
      <AnimatePresence mode="wait">
      {showModal && (
        <Modal
          painting={selectedPainting}
          onClose={hideModalHandler}
          orientation={selectedOrientation}
        />
      )}
      </AnimatePresence>
      <section
        id="about"
        className="flex pt-0 md:py-16 flex-col lg:flex-row justify-center items-center w-screen h-[95vh] md:h-screen lg:h-[101vh] gap-2 lg:gap-4"
      >
        <div className="hidden lg:flex w-11/12 h-[20vh] md:h-[20vh] lg:w-1/6 lg:h-5/6 text-left border-secondary border-l-[1.8rem] lg:border-l-[2.2rem] font-nunito">
          <ul className="flex flex-col select-none justify-evenly">
            {aboutList.map(item=>(
              <li
              key={item.id}
              onClick={() => {
                setSectionNumber(item.number);
              }}
              className={`pt-1 -ml-6 text-sm font-bold cursor-pointer md:text-lg lg:text-xl lg:-ml-7 ${item.number===sectionNumber&&"text-highlight"} ${item.number!==1&&"mt-2"}`}
            >
              {item.icon}
            </li>
            ))}
          </ul>
          <ul className="flex flex-col w-full select-none justify-evenly">
            {aboutList.map((element) => (
              <li
                key={element.id}
                onClick={() => {
                  setSectionNumber(element.number);
                }}
                className={
                  sectionNumber === element.number
                    ? aboutNavActiveClass
                    : aboutNavClass
                }
              >
                {element.title}
              </li>
            ))}
          </ul>
        </div>
       
        <ul className="grid w-11/12 grid-cols-2 grid-rows-3 lg:hidden h-fit gap-x-3 md:gap-x-8 gap-y-2 md:gap-y-3">
          {aboutList.map((element)=>(
            <li key={element.id}
            onClick={()=>{setSectionNumber(element.number)}}
            className={
              sectionNumber === element.number
                ? "font-quicksand cursor-pointer shadow-xl md:text-xl text-primary rounded-lg p-2 font-extrabold bg-highlight flex justify-center items-center"
                : "font-quicksand cursor-pointer shadow-xl md:text-xl text-white rounded-lg p-2 font-semibold bg-secondary flex justify-center items-center"
            }
            >{element.title}</li>
          ))}
        </ul>

        {/* <div className="w-11/12 overflow-y-scroll rounded-sm shadow-lg h-4/6 md:h-5/6 lg:w-4/6 lg:h-5/6 bg-[#2c1059]"> */}
        <div className="w-11/12 overflow-y-scroll rounded-sm shadow-lg h-4/6 md:h-5/6 lg:w-4/6 lg:h-5/6 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-highlight via-tertiary to-highlight">
          {sectionNumber === 1 && <AboutMe/>}
          {sectionNumber === 2 && <Education />}
          {sectionNumber === 3 && <Work />}
          {sectionNumber === 4 && <Hobby onShowModal={showModalHandler} />}
          {sectionNumber === 5 && <Certification />}
        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
