import React from "react";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

const Footer = ({className}) => {
  const date = new Date();
  return (
    <footer className={`lg:bg-secondary flex-col-reverse lg:flex-row text-white w-screen gap-4 h-fit py-6 pb-[11vh] sm:pb-[8vh] md:pb-[8vh] lg:p-2 xl:p-4 flex justify-around items-center ${className}`}>
      <div className="font-mono text-sm sm:text-lg lg:hidden">
        <p>All rights reserved © {date.getFullYear()}</p>
      </div>
      <div className="flex text-2xl lg:hidden gap-7 lg:gap-8">
        <a
          target="facebook"
          href="https://www.facebook.com/profile.php?id=100010237621145"
          className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-150"
        >
          <IoLogoFacebook />
        </a>
        <a
          target="github"
          href="https://github.com/Mohit-Thapliyal"
          className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-150"
        >
          <IoLogoGithub />
        </a>
        <a
          target="linkedin"
          href="https://www.linkedin.com/in/mohit-thapliyal-b20104146/"
          className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-150"
        >
          <IoLogoLinkedin />
        </a>
        <a
          target="instagram"
          href="https://www.instagram.com/mohitthapliyal100/"
          className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-150"
        >
          <IoLogoInstagram />
        </a>
      </div>
      
      <div>
        <p className="text-md sm:text-lg font-quicksand">
          Developed by <span className="font-semibold text-highlight">Mohit Thapliyal</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
