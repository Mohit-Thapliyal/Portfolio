import React from "react";

const CertificationItem = (props) => {
  return (
    <>
      <li className="flex p-3 text-left duration-200 rounded-lg shadow-lg cursor-default font-nunito bg-nosecondary lg:px-8 lg:py-6 lg:hover:scale-105">
        <div className="flex flex-col justify-between gap-5 font-quicksand">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">{props.certificate}</h1>
            <div className="flex items-center gap-5">
              <span className="text-lg font-semibold text-purple-100">{props.institution}</span>
              <span className="font-semibold text-highlight">{props.instructor}</span>
            </div>
            <div className="text-sm font-semibold">{props.date}</div>
          </div>
          <a className="px-10 py-1 text-sm font-bold rounded-sm text-primary w-fit bg-highlight" href={props.link} target="certificate">Link</a>
        </div>
      </li>
    </>
  );
};

export default CertificationItem;
