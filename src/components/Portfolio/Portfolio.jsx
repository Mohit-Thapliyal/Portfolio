import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "../UI/Modal";
import Project from "./Project";
import AnimatedPage from "../UI/AnimatedPage";
import { projects } from "../../data";
import { AnimatePresence } from "framer-motion";

const Portfolio = () => {
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

  const settings = {
    // centerMode: true,
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        id="portfolio"
        className="w-screen relative md:px-[2.5rem] xl:px-[5rem] h-[95vh] md:h-screen md:py-[10vh] lg:py-[19vh] xl:py-[24vh] flex flex-col justify-center"
      >
        <div className="absolute left-0 z-[5] md:w-[6vw] lg:w-[5vw] xl:w-[6vw] h-screen bg-primary"/>
        <div className="absolute right-0 z-[5] md:w-[6vw] lg:w-[5vw] xl:w-[6vw] h-screen bg-primary"/>
        <div>
          <Slider {...settings}>
            {projects.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                github={project.github}
                onShowModal={showModalHandler}
              />
            ))}
          </Slider>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Portfolio;
