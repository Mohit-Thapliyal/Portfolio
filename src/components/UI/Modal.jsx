import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = (props) => {
  return (
    <div className="absolute flex items-center justify-center w-screen h-screen">
      <div
        onClick={props.onClose}
        className="fixed inset-0 z-10 flex justify-center w-screen h-screen bg-black opacity-60"
      ></div>
      {props.orientation === 0 && (
        <div className="relative z-20 p-1 overflow-hidden bg-purple-100 rounded-sm w-fit lg:rounded-lg">
          <div className="w-full h-1/2">
            <img
              src={props.painting}
              alt=""
              className="h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] rounded-sm lg:rounded-lg"
            />
            <div
              onClick={props.onClose}
              className="absolute p-1 border border-purple-300 rounded-full shadow-lg cursor-pointer bg-primary top-2 right-2"
            >
              <IoClose className="text-lg lg:text-3xl" />
            </div>
          </div>
        </div>
      )}
      {props.orientation === 1 && (
        <div className="relative z-20 p-1 overflow-hidden bg-white rounded-sm lg:rounded-lg">
          <div className="w-full h-1/2">
            <img
              src={props.painting}
              alt=""
              className="h-[35vh] md:h-[40vh] lg:h-[80vh] xl:h-[90vh] rounded-sm lg:rounded-lg"
            />
            <div
              onClick={props.onClose}
              className="absolute p-1 text-white bg-white border rounded-full shadow-lg cursor-pointer top-2 right-2 backdrop-blur-md bg-opacity-70"
            >
              <IoClose className="text-lg text-cyan-900 lg:text-3xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;