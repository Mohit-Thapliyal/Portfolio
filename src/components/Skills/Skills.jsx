import React from "react";
import AnimatedPage from "../UI/AnimatedPage";
import Skill from "./Skill";

const skillIcons = [
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    alt: "The logo icon for HTML 5",
    title: "HTML 5",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    alt: "The logo icon for CSS",
    title: "CSS",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "The logo icon for JAVASCRIPT",
    title: "JAVASCRIPT",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    alt: "The logo icon for React",
    title: "React",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    alt: "The logo icon for Redux",
    title: "Redux",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
    alt: "The logo icon for FIREBASE",
    title: "FIREBASE",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "The logo icon for MongoDB",
    title: "MongoDB",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    alt: "The logo icon for Tailwind",
    title: "Tailwind",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    alt: "The logo icon for Bootstrap",
    title: "Bootstrap",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "The logo icon for Node.JS",
    title: "Node.JS",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    alt: "The logo icon for Next.JS",
    title: "Next.JS",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    alt: "The logo icon for Git",
    title: "Git",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    alt: "The logo icon for Github",
    title: "Github",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg",
    alt: "The logo icon for Heroku",
    title: "Heroku",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "The logo icon for Figma",
    title: "Figma",
  },
];

const Skills = () => {
  return (
    <AnimatedPage>
      <div
        id="skills"
        className="min-h-screen w-screen h-fit md:h-fit flex flex-col justify-center items-center py-[7vh]  md:py-[5vh] lg:py-[17vh] xl:py-[17vh]"
      >
        <div className="grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 gap-x-10 md:gap-x-12 lg:gap-x-14 xl:gap-x-20 gap-y-8 md:gap-y-10 lg:gap-y-14 xl:gap-y-20">
          {skillIcons.map((skillIcon, i) => (
            <Skill
              key={`sk${i}`}
              index={i+1}
              source={skillIcon.source}
              alt={skillIcon.alt}
              title={skillIcon.title}
            />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Skills;
