import React from "react";
import WorkItem from "./WorkItem";
import { workDetails } from "../../../data";

const Work = () => {
  return (
    <ul className="flex flex-col gap-10 px-3 py-5 lg:px-12 lg:py-10">
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
