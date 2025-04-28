import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import { BiPhoneCall } from "react-icons/bi";
import RegistrationForm from "./RegistrationForm"; 

export const Navlinks = [
  {
    id: 1,
    name: "სერვისი",
    link: "/#services",
  },
  {
    id: 2,
    name: "ინფორმაცია",
    link: "/#about",
  },
  {
    id: 3,
    name: "გაწევრიანდი",
    link: "/#join",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container">
        <div className="flex justify-between items-center relative">
          
          
          <div
            className="border border-yellow-800 text-yellow-800 px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-600 hover:text-black duration-200 font-bold text-base tracking-wide"
            onClick={() => setShowForm(true)}
          >
            რეგისტრაცია
          </div>

          
          <div className="sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
            <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />
            +91 123456789
          </div>

          
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-16 sm:w-24 m-2 sm:m-0"
            />
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

      
      <ResponsiveMenu showMenu={showMenu} />

      
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
            >
              ✖
            </button>

            
            <RegistrationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
