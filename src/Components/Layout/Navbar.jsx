import React, { useState } from "react";
import DarkAndLightMode from "../DarkAndLightMode";
import { FaBars } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

const Navbar = ({ navbar }) => {
  const [sidebar, setSideBar] = useState(true);
  return (
    <nav
      className={`w-full sticky top-0 bg-gray-50 h-14 flex items-center justify-between px-12 max-sm:px-4 z-20 ${
        navbar ? "shadow-md" : ""
      }`}
    >
      <div>logo</div>
      <div
        className={`max-md:absolute max-md:top-14   ${
          sidebar ? "myCollapse" : "openSidebar"
        } max-md:w-48 max-md:h-screen max-md:bg-gray-100`}
      >
        <ul className="max-md:mt-8 max-md:ml-4 uppercase">
          <a href="#home">
            <li className="inline-block px-2 my-4 mx-2 max-md:block">Home</li>
          </a>
          <a href="#about">
            <li className="inline-block px-2 my-4 mx-2 max-md:block">
              About Me
            </li>
          </a>
          <a href="#education">
            <li className="inline-block px-2 my-4 mx-2 max-md:block">
              Education
            </li>
          </a>
          <a href="#skills">
            <li className="inline-block px-2 my-4 mx-2 max-md:block">Skills</li>
          </a>

          <a href="#project">
            <li className="inline-block px-2 my-4 mx-2 max-md:block">
              projects
            </li>
          </a>
        </ul>
      </div>
      <div className="hidden max-md:block">
        <button onClick={() => setSideBar(!sidebar)} className="text-2xl p-2">
          {sidebar ? <FaBars /> : <HiMiniXMark />}
        </button>

        {/* <DarkAndLightMode /> */}
      </div>
    </nav>
  );
};

export default Navbar;
