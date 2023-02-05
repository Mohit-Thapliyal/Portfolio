import React from "react";
import {
    IoCheckmarkCircleSharp,
    IoClose,
    IoWarning,
  } from "react-icons/io5";

const Notification = (props) => {
    const successClass = "flex items-center z-30 font-nunito p-1 fixed top-8 right-5 md:top-10 md:right-10 bg-green-50 border-l-4 border-green-400 animate-bounce"
    const failClass = "flex items-center z-30 font-nunito p-1 fixed top-8 right-5 md:top-10 md:right-10 bg-red-50 border-l-4 border-red-500 animate-bounce"
  return (
    <div className={props.messageClass ? successClass : failClass}>
      <div className="flex items-center pl-2 pr-8 py-2 gap-2 text-slate-500 font-semibold">
        {props.messageClass && <IoCheckmarkCircleSharp className="text-2xl text-green-500" />}
        {!props.messageClass && <IoWarning className="text-2xl text-red-500"/>}
        <span>{props.messageClass ? "Message Sent!" : "Message Not Sent!"}</span>
      </div>
      <IoClose
        onClick={props.onCloseMessage}
        className="self-start text-lg text-slate-500"
      />
    </div>
  );
};

export default Notification;
