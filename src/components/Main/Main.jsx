import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

import profilePic from "../../images/profile/mohit.png";
import AnimatedPage from "../UI/AnimatedPage";

const Main = () => {
  return (
    <AnimatedPage>
      <main className="relative flex flex-col justify-center w-screen min-h-screen text-white font-nunito md:justify-center ">
        <div className="fixed top-0 z-20 flex justify-between w-full p-3 lg:hidden bg-secondary">
          <span className="text-lg font-extrabold tracking-wider text-rose-100 font-comfortaa">
            Portfolio
          </span>
          <span className="text-base font-bold text-rose-100">
            Mohit Thapliyal
          </span>
        </div>

        <motion.div className="flex flex-col cursor-default lg:flex-row-reverse justify-end md:justify-evenly items-center xl:gap-0 gap-7 py-[5vh] md:py-[7vh] lg:py-[17vh] xl:py-[23vh]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.01 },
            }}
            transition={{
              duration: 0.05,
            }}
            className="flex justify-center w-7/12 hover:scale-105 duration-300 ease-linear md:justify-end md:w-5/12 lg:w-3/12"
          >
            {/* <img
              src={profilePic}
              alt="profile pic"
              className="grayscale shadow-lg rounded-3xl md:rounded-[1em]"
            /> */}
            <img
              src={profilePic}
              alt="profile pic"
              className="lg:scale-[1.15]"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            // whileHover={{
            //   scale: 1.03,
            //   transition: { duration: 0.01 },
            // }}
            transition={{
              duration: 0.05,
            }}
            className="relative  w-5/6 p-3 py-5 text-left duration-300 ease-linear rounded-lg md:w-8/12 lg:w-6/12 md:p-10 lg:pb-8 lg:p-10 xl:pb-16"
          >
            <div className=" rounded-full blur-[100px] lg:blur-[150px] top-10 left-1/4 h-2/5 w-2/5 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-tertiary via-teal-700 to-tertiary absolute" />
            <div className=" rounded-full blur-[100px] lg:blur-[150px] top-10 left-10 h-2/5 w-2/5 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-tertiary via-teal-700 to-tertiary absolute" />
            <div className="flex flex-col gap-2 md:gap-5 lg: z-10 relative">
              <h1 className=" text-3xl tracking-normal md:text-5xl xl:text-6xl font-extrabold uppercase text-highlight text-shadow-lg">
                Mohit <span className=" text-white">Thapliyal</span>
              </h1>
              <h4 className="uppercase text-sm md:text-xl font-semibold font-mono">
                I am a{" "}
                <ReactTypingEffect className="inline-block px-2 py-1 text-sm font-semibold tracking-widest text-white md:text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" cursorClassName="md:text-xl" text={["Front End Developer","React Developer", "Full Stack Developer"]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={5000}
                typingDelay={50}
                />
              </h4>

              <p className="font-sans my-2 text-xs leading-5 font-medium lg:leading-7 text-justify text-shadow-sm md:w-4/5 lg:w-full xl:w-4/5 lg:text-base">
              A skilled frontend developer with a passion for art. I enjoy crafting visually stunning websites and exploring different forms of creative expression in my free time.
              </p>
              <div className="flex md:gap-4">
                <Link
                  to="contact"
                  className="px-3 text-sm lg:text-base py-2 font-bold transition-all duration-500 ease-out border rounded-full cursor-pointer md:border-2 border-primary hover:scale-110 bg-highlight text-primary md:px-5 active:border-highlight active:text-highlight active:bg-primary focus:bg-highlight/80"
                >
                  Hire me
                </Link>
                <a
                  href={
                    "https://docs.google.com/document/d/1TZY3x4PmRfx0eFCds9ul9M-1iHG3z83rBOvlmp_F0bY/edit?usp=sharing"
                  }
                  target="blank"
                  className="flex gap-1 text-sm lg:text-base px-3 py-2 ml-3 font-bold transition-all duration-500 bg-transparent border rounded-full md:border-2 hover:scale-110 hover:bg-highlight text-highlight hover:text-primary md:px-5 border-highlight hover:border-primary"
                >
                  Download Resume
                  <HiDownload className="text-lg lg:text-2xl font-thin" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </AnimatedPage>
  );
};

export default Main;
