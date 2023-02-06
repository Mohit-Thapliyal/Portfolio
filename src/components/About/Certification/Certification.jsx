import React from "react";
import { certificateDetails } from "../../../data";
import CertificationItem from "./CertificationItem";



const Certification = () => {
  return (
    <ul className="grid gap-10 px-3 py-5  md:grid-cols-2 lg:px-12 lg:py-10">
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
