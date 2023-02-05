import React from "react";
import {  NavLink } from "react-router-dom";

const navClassName = "flex text-lg py-2 font-semibold lg:p-0 flex-col justify-center items-center cursor-pointer hover:text-highlight hover:scale-125 duration-300 ease-linear select-none"
const activeNavClassName = "flex text-xl font-bold text-highlight py-2 lg:p-0 flex-col justify-center items-center cursor-pointer sm:hover:text-highlight sm:hover:scale-125 duration-300 ease-linear select-none"

const NavItem = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({isActive})=>isActive?activeNavClassName:navClassName}
    >
      {props.icon}
      <span className={`text-xs mt-0.5 select-none`}>
        {props.text}
      </span>
    </NavLink>
  );
};

export default NavItem;
