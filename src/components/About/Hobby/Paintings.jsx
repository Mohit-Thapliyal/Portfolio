import React from "react";
import {motion} from 'framer-motion'
import { paintings } from "../../../data";
import {fadeInContainer, fadeInItem} from '../../../utils/motion'

const Paintings = (props) => {
  return (
    <>
      <div className="flex flex-col gap-8 pb-3 lg:pb-10">
        <motion.div variants={fadeInContainer} initial="hidden" animate="visible" className="grid grid-cols-12 gap-4 px-1 lg:gap-8 lg:px-10">
          {paintings.map((item) => (
            <motion.div variants={fadeInItem} key={item.id} 
            className={`${item.type==='portrait'?"col-span-6 lg:col-span-4":"col-span-12 lg:col-span-6"}`}
            >
              {item.type==="portrait"?(<img
                src={item.painting}
                alt={item.title}
                title={item.title}
                loading="lazy"
                className="duration-200 rounded-lg hover:scale-110"
                onClick={() => {
                  props.onShowModal(0, item.painting);
                }}
              />):(<img
                src={item.painting}
                alt={item.title}
                title={item.title}
                loading="lazy"
                className="duration-200 rounded-lg hover:scale-110"
                onClick={() => {
                  props.onShowModal(1, item.painting);
                }}
              />)}
            </motion.div>
          ))}
        </motion.div>
        {/* <motion.div variants={fadeInContainer} initial="hidden" animate="visible" className="grid grid-flow-col grid-cols-1 grid-rows-4 gap-8 lg:grid-rows-2 lg:grid-cols-2 lg:px-10">
          {landscapePaintngs.map((landscapePaintng) => (
            <motion.div variants={fadeInItem} key={landscapePaintng.id}>
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
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </>
  );
};

export default Paintings;
