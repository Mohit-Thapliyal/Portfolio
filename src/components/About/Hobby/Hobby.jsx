import React from "react";
import Painting from "./Paintings";

const Hobby = (props) => {
  return (
    <div className="flex gap-5 justify-evenly p-3 md:py-6 md:px-6 lg:px-0 lg:pt-10 h-3/6 flex-wrap">
      <Painting onShowModal={props.onShowModal} onChangePainting={props.onChangePainting} />
    </div>
  );
};

export default Hobby;
