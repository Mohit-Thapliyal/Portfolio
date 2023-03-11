import React from "react";
import { skillIcons } from "../../data";
import AnimatedPage from "../UI/AnimatedPage";
import Skill from "./Skill";

const Skills = () => {
  return (
    <AnimatedPage>
      <section
        id="skills"
        className="min-h-screen relative w-screen h-fit md:h-fit flex flex-col justify-center items-center py-[7vh] md:py-[5vh] lg:py-[17vh] xl:py-[17vh]"
      >
        <div className="grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 gap-x-10 md:gap-x-12 lg:gap-x-14 xl:gap-x-20 gap-y-8 md:gap-y-10 lg:gap-y-14 xl:gap-y-20">
          {skillIcons.map((skillIcon, i) => (
            <Skill
              key={`sk${i}`}
              index={i+1}
              source={skillIcon.source}
              alt={skillIcon.alt}
              title={skillIcon.title}
              url={skillIcon.url}
            />
          ))}
        </div>
        </section>
    </AnimatedPage>
  );
};

export default Skills;
