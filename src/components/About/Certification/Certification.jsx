import React from "react";
import CertificationItem from "./CertificationItem";

const certificateDetails = [
  {
    id: "cert1",
    certificate: "Web Development Bootcamp",
    institution: "Udemy",
    instructor: "Dr. Angela Yu",
    date: "APR 2021",
    link: "https://www.udemy.com/certificate/UC-ca1fa17f-30ec-4581-a9f3-08930a7a0a0c/"
  },
  {
    id: "cert2",
    certificate: "React - The Complete Guide",
    institution: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    date: "SEP 2022",
    link: "https://www.udemy.com/certificate/UC-ad72c371-c738-48c3-a2cd-b70359f92072/"
  },
  {
    id: "cert3",
    certificate: "BVICAM Hackathon",
    institution: "Bharati Vidyapeeth University",
    instructor: "",
    date: "JUL 2021",
    link: "https://drive.google.com/file/d/12L_hYjWcmm4P29ASHqJQ6TkKNAkOUbfY/view"
  }
];

const Certification = () => {
  return (
    <ul className=" grid md:grid-cols-2 gap-10 lg:px-12 py-5 lg:py-10 px-3">
      {certificateDetails.map((certificateDetail) => (
        <CertificationItem
          key={certificateDetail.id}
          certificate={certificateDetail.certificate}l
          institution={certificateDetail.institution}
          instructor={certificateDetail.instructor}
          date={certificateDetail.date}
          link={certificateDetail.link}
        />
      ))}
    </ul>
  );
};

export default Certification;
