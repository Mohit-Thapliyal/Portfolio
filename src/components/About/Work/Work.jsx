import React from "react";
import WorkItem from "./WorkItem";

const workDetails = [
  {
    jobRole: "Frontend/React Developer",
    company: "Petmojo ∙ Internship",
    location: "Delhi, India",
    responsibilities: [
      "Worte a completely new code base.",
      "Working on Dashboard with Google map API.",
      "Using React and Tailwind for designing the website.",
      "Managing Authentication and Authorization"
    ],
    skills: ["React", "Tailwind", "JavaScript", "REST API", "JWT"],
    duration: "Sep 2022 - Present · 2 mo",
  },
  {
    jobRole: "JavaScript Developer",
    company: "Eupheus Learning ∙ Internship",
    location: "Delhi, India",
    responsibilities: [
      "Designed and built interactive online books",
      "Applied logic for various interactive activities for students",
      "Managed already written code base",
    ],
    skills: ["CSS", "HTML", "JavaScript", "jQuery"],
    duration: "Jul 2022 - Aug 2022 · 1 mo",
  },
  {
    jobRole: "Web Developer",
    company: "Dignifyd Digital Solutions · Internship",
    location: "Delhi, India",
    responsibilities: [
      "Worked on real-world projects",
      "Handled clients and designed websites according to requirements",
      "Used custom code and templating",
    ],
    skills: ["CSS", "HTML", "JavaScript", "Bootstrap"],
    duration: "Sep 2021 - Nov 2021 · 3 mos",
  },
  {
    jobRole: "Web Developer",
    company: "Failure to Success ∙ Intenship",
    location: "Delhi, India",
    responsibilities: ["Worked as a part of a team", "Built responsive web apps"],
    skills: [
      "Flask",
      "CSS",
      "Node.js",
      "HTML",
      "MongoDB",
      "JavaScript",
      "jQuery",
      "Bootstrap",
    ],
    duration: "Aug 2021 - Sep 2021 · 2 mos",
  },
];

const Work = () => {
  return (
    <ul className=" flex flex-col gap-10 px-3 lg:px-12 py-5 lg:py-10">
      {workDetails.map((workDetail,i) => (
        <WorkItem
          key={`w${i}`}
          jobRole={workDetail.jobRole}
          company={workDetail.company}
          location={workDetail.location}
          responsibilities={workDetail.responsibilities}
          skills={workDetail.skills}
          duration={workDetail.duration}
        />
      ))}
    </ul>
  );
};

export default Work;
