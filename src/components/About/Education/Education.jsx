import React from "react";
import EducationItem from "./EducationItem";

const educationDetails = [
  {
    id: "edu1",
    uniName: "Guru Gobind Singh Indraprastha University",
    location: "Delhi, India",
    courseName: "B.Tech · Computer Science Engineering",
    marks: "9.1 CGPA",
    duration: "2019 - Present",
  },
  {
    id: "edu2",
    uniName: "Dashmesh Public School (CBSE)",
    location: "Delhi, India",
    courseName: "12th · Physics, Chemistry, Maths",
    marks: "82%",
    duration: "2018 - 2019",
  },
  {
    id: "edu3",
    uniName: "Dashmesh Public School (CBSE)",
    location: "Delhi, India",
    courseName: "10th · Science",
    marks: "9 CGPA",
    duration: "2016 - 2017",
  },
];

const Education = () => {
  return (
    <ul className=" flex flex-col gap-10 lg:px-12 py-5 lg:py-10 px-3">
      {educationDetails.map((educationDetail) => (
        <EducationItem
          key={educationDetail.id}
          uniName={educationDetail.uniName}
          location={educationDetail.location}
          courseName={educationDetail.courseName}
          marks={educationDetail.marks}
          duration={educationDetail.duration}
        />
      ))}
    </ul>
  );
};

export default Education;
