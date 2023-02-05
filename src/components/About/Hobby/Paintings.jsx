import React from "react";

import painting1 from "../../../images/painting/painting1.jpg";
import painting2 from "../../../images/painting/painting2.jpg";
import painting3 from "../../../images/painting/painting3.jpg";
import painting4 from "../../../images/painting/painting4.jpg";
import painting5 from "../../../images/painting/painting5.jpg";
import painting6 from "../../../images/painting/painting6.jpg";
import painting7 from "../../../images/painting/painting7.jpg";
import painting8 from "../../../images/painting/painting8.jpg";
import painting9 from "../../../images/painting/painting9.jpg";
import painting10 from "../../../images/painting/painting10.jpg";

const portraitPaintings = [
  {
    id: "pp1",
    painting: painting1,
    title: "Rural man and woman playing music",
  },
  { id: "pp2", painting: painting3, title: "Akshay kumar" },
  { id: "pp3", painting: painting2, title: "My Grandma" },
  { id: "pp4", painting: painting4, title: "Lord Shiva" },
  { id: "pp5", painting: painting5, title: "Flowers in a pot" },
  { id: "pp6", painting: painting6, title: "Royal woman" },
];
const landscapePaintngs = [
  { id: "lp1", painting: painting7, title: "Abstract pattern" },
  { id: "lp2", painting: painting8, title: "Lion facing each other" },
  { id: "lp3", painting: painting9, title: "Radha Krishna" },
  { id: "lp4", painting: painting10, title: "Deer in the sunset" },
];

const Paintings = (props) => {
  return (
    <>
      <div className="flex flex-col gap-8 pb-3 lg:pb-10">
        <div className="grid grid-flow-col grid-rows-3 grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-8 lg:px-10">
          {portraitPaintings.map((portraitPainting) => (
            <div key={portraitPainting.id}>
              <img
                src={portraitPainting.painting}
                alt={portraitPainting.title}
                title={portraitPainting.title}
                loading="lazy"
                className="hover:scale-110 duration-200 rounded-lg"
                onClick={() => {
                  props.onShowModal(0, portraitPainting.painting);
                }}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-flow-col grid-rows-4 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 gap-8 lg:px-10">
          {landscapePaintngs.map((landscapePaintng) => (
            <div key={landscapePaintng.id}>
              <img
                src={landscapePaintng.painting}
                alt={landscapePaintng.title}
                title={landscapePaintng.title}
                loading="lazy"
                className="hover:scale-110 duration-200 rounded-lg"
                onClick={() => {
                  props.onShowModal(1, landscapePaintng.painting);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Paintings;
