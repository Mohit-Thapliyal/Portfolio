import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center min-h-full p-1 md:h-full md:p-3 lg:p-5 xl:p-7 text-shadow-md">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-col items-center justify-between h-full gap-5 px-2 py-3 font-medium text-center rounded-md lg:overflow-y-scroll scrollbar-hide md:gap-10 lg:gap-2 md:px-10 bg-nosecondary xl:py-6 xl:px-5 font-edusa md:text-lg lg:text-lg xl:text-2xl"
      >

        <div className="flex flex-col justify-center flex-grow md:gap-3 lg:gap-1">
          <h2 className="font-bold text-highlight">Namaste! Everyone, </h2>
          <p>Hope you all are doing well.</p>
        </div>

        <div className="flex flex-col justify-between flex-grow gap-2 lg:gap-0">
          <div className="leading-7 md:leading-10 lg:leading-8">
            My name is <span className="font-semibold">Mohit Thapliyal</span>{" "}
            and I'm 21 years old. Currently pursuing a{" "}
            <span className="font-semibold">
              Bachelors of Technology in Computer Science
            </span>{" "}
            from <span className="font-semibold">TIIPS</span>.
          </div>
          <div className="leading-7 md:leading-10 lg:leading-8">
            I've sound knowledge of web development and since childhood, it
            interests me. I am very{" "}
            <span className="font-semibold">enthusiastic</span> and always{" "}
            <span className="font-semibold">eager to learn</span>. I always put
            my hundred percent into everything that I do. I'm very good at time
            management and know how to prioritize the work.
          </div>
          <div className="leading-7 md:leading-10 lg:leading-8">
            I never quit and have a{" "}
            <span className="font-semibold">competitive spirit</span>. I'm{" "}
            <span className="font-semibold">not afraid of failures</span>{" "}
            instead learn from them because they always teach me something that
            no one can teach.
          </div>
          <div className="leading-7 md:leading-10 lg:leading-8">
            Apart from this I really enjoy meeting new people, hope we'll meet
            someday.
          </div>
        </div>

        <div className="flex flex-col justify-center flex-grow gap-1">
          <div className="font-semibold text-highlight">Regards,</div>
          <div className="font-bold text-highlight">Mohit Thapliyal</div>
        </div>

      </motion.div>
    </div>
  );
};

export default AboutMe;
