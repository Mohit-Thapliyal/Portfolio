import React from "react";
import {
  BiHome,
  BiUser,
  BiBook,
  BiBriefcaseAlt,
  BiMessageSquareDetail,
} from "react-icons/bi";

import NavItem from "./NavItem";

const Navitems = [
  {
    id: "ni1",
    icon: <BiHome/>,
    text: "Home",
    to: "/",
  },
  {
    id: "ni2",
    icon: <BiUser/>,
    text: "About",
    to: "about",
  },
  {
    id: "ni3",
    icon: <BiBook/>,
    text: "Skills",
    to: "skills",
  },
  {
    id: "ni4",
    icon: <BiBriefcaseAlt />,
    text: "Portfolio",
    to: "portfolio",
  },
  {
    id: "ni5",
    icon: <BiMessageSquareDetail />,
    text: "Contactme",
    to: "contact",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex p-1.5 md:border-r md:border-b border-tertiary fixed bottom-0 lg:bottom-auto bg-secondary lg:w-2/4 mx-auto rounded-t-md lg:rounded-full justify-around z-10 mt-4 w-screen ">
        {Navitems.map((Navitem) => (
          <NavItem
            key={Navitem.id}
            icon={Navitem.icon}
            text={Navitem.text}
            to={Navitem.to}
          />
        ))}
      </nav>
    </>
  );
};

export default Navbar;
