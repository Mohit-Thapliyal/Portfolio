import React from "react";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

const Footer = () => {
  const date = new Date();
  return (
    <div className="md:bg-secondary flex-col-reverse lg:flex-row text-white w-screen gap-4 h-fit py-6 sm:p-10 pb-[8vh] md:pb-[8vh] lg:p-5 xl:p-8 flex justify-around items-center">
      <div className="font-mono text-sm sm:text-lg">
        <p>All rights reserved © {date.getFullYear()}</p>
      </div>
      <div className="flex text-2xl gap-7 lg:gap-8">
        <a
          target="facebook"
          href="https://www.facebook.com/profile.php?id=100010237621145"
          className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-125"
        >
          <IoLogoFacebook />
        </a>
        <a
          target="github"
          href="https://github.com/Mohit-Thapliyal"
          className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-125"
        >
          <IoLogoGithub />
        </a>
        <a
          target="linkedin"
          href="https://www.linkedin.com/in/mohit-thapliyal-b20104146/"
          className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-125"
        >
          <IoLogoLinkedin />
        </a>
        <a
          target="instagram"
          href="https://www.instagram.com/mohitthapliyal100/"
          className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-125"
        >
          <IoLogoInstagram />
        </a>
      </div>
      <div>
        <p className="text-md sm:text-lg font-quicksand">
          Developed by <span className="font-semibold text-highlight">Mohit Thapliyal</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
