import React from "react";

import { portraitPaintings, landscapePaintngs } from "../../../data";

const Paintings = (props) => {
  return (
    <>
      <div className="flex flex-col gap-8 pb-3 lg:pb-10">
        <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-8 lg:grid-rows-2 lg:grid-cols-3 lg:px-10">
          {portraitPaintings.map((portraitPainting) => (
            <div key={portraitPainting.id}>
              <img
                src={portraitPainting.painting}
                alt={portraitPainting.title}
                title={portraitPainting.title}
                loading="lazy"
                className="duration-200 rounded-lg hover:scale-110"
                onClick={() => {
                  props.onShowModal(0, portraitPainting.painting);
                }}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-flow-col grid-cols-1 grid-rows-4 gap-8 lg:grid-rows-2 lg:grid-cols-2 lg:px-10">
          {landscapePaintngs.map((landscapePaintng) => (
            <div key={landscapePaintng.id}>
              <img
                src={landscapePaintng.painting}
                alt={landscapePaintng.title}
                title={landscapePaintng.title}
                loading="lazy"
                className="duration-200 rounded-lg hover:scale-110"
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
