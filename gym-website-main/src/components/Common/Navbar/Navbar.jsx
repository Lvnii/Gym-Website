import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../../assets/logo.png";
import DarkMode from "./DarkMode";
import { BiPhoneCall } from "react-icons/bi";
import ScrollTop from "../../Sections/ScrollToTopButton/ScrollToTopButton"

export const Navlinks = [
  {
    id: 1,
    name: "სერვისი",
    link: "/#about",
    type: "anchor",
  },
  {
    id: 2,
    name: "ინფორმაცია",
    link: "/information",
    type: "route",
  },
  {
    id: 3,
    name: "გაწევრიანდი",
    link: "/register",
    type: "route",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 left-0 z-50 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container">
        <div className="flex justify-between items-center relative">

          <div
            className="border border-yellow-800 text-yellow-800 px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-600 hover:text-black duration-200 font-bold text-base tracking-wide"
            onClick={() => navigate("/login")}
          >
            შესვლა
          </div>

          <div className="sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
            <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />
            +91 123456789
          </div>

          <div
            onClick={() => navigate("/home")}
            className="relative cursor-pointer group">
            <img
              src={Logo}
              alt="Logo"
              className="w-16 sm:w-24 m-2 sm:m-0"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-yellow-400 blur-md opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-full"></div>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold hover:text-primary duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <DarkMode />
            </ul>
          </nav>

          <div className="flex items-center gap-4 md:hidden py-4">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      <ScrollTop />

      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
