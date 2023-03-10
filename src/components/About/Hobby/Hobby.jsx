import React from "react";
import Painting from "./Paintings";

const Hobby = (props) => {
  return (
    <div className="flex flex-wrap gap-5 p-3 justify-evenly md:py-6 md:px-6 lg:px-0 lg:pt-10 h-3/6">
      <Painting onShowModal={props.onShowModal} onChangePainting={props.onChangePainting} />
    </div>
  );
};

export default Hobby;
