import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";

import profilePic from "../../images/profile/mohit1.png";
// import background from "../../images/background/background2.jpg";
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

        <div className="flex flex-col-reverse cursor-default lg:flex-row justify-end md:justify-evenly items-center xl:gap-0 gap-7 py-[5vh] md:py-[7vh] lg:py-[17vh] xl:py-[23vh]">
          <div className="w-5/6 p-3 py-5 text-left bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary via-tertiary to-secondary duration-300 ease-linear rounded-lg md:w-8/12 lg:w-6/12 md:p-10 lg:pb-8 lg:p-10 xl:pb-16">
            <h3 className="text-xl font-medium md:text-4xl">
              Namaste!
            </h3>
            <h1 className="mt-1 text-3xl font-medium tracking-tight md:text-5xl font-nunito lg:mt-4 xl:text-6xl">
              I'm{" "}
              <span className="lowercase">
                <span className="font-bold uppercase text-highlight">Mohit</span>{" "}
                Thapliyal
              </span>
            </h1>
            <h4 className="inline-block px-2 py-1 mt-2 text-sm font-semibold tracking-widest text-white md:text-lg md:font-semibold md:mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Full Stack Developer
            </h4>
            <p className="mt-2 font-sans text-sm leading-tight text-justify font-base lg:mt-5 md:w-4/5 lg:w-4/5 xl:w-3/5 lg:text-base">
              Organized, Responsive, Helpful, Observant, and Trustworthy are
              some of the adjectives to define me. Coding is my passion and art
              is my hobby.
            </p>
            <div className="flex mt-3 md:gap-4 lg:mt-10">
              <Link
                to="contact"
                className="px-3 py-2 font-bold transition-all duration-500 ease-out border rounded-md cursor-pointer md:border-2 border-primary text-primary hover:scale-110 bg-highlight md:px-5 active:border-highlight active:text-highlight active:bg-primary focus:bg-highlight/80"
              >
                Hire me
              </Link>
              <a
                href={
                  "https://drive.google.com/file/d/1qb19b9Z4yZ6iWWdH5XPlIWn1L8jgI8S6/view?usp=sharing"
                }
                target="blank"
                className="flex px-3 py-2 ml-3 font-bold transition-all duration-500 bg-transparent border rounded-md md:border-2 hover:scale-110 hover:bg-highlight text-highlight hover:text-primary md:px-5 border-highlight hover:border-primary"
              >
                Download Resume
                <HiDownload className="text-2xl font-thin" />
              </a>
            </div>
          </div>
          <div className="flex justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary via-tertiary to-secondary w-7/12  rounded-3xl md:rounded-[1em] hover:scale-105 duration-300 ease-linear md:justify-end md:w-5/12 lg:w-3/12">
            <img
              src={profilePic}
              alt="profile pic"
              className="grayscale shadow-lg rounded-3xl md:rounded-[1em]"
            />
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default Main;
