import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { NavbarProps } from "../../types";

function Navbar(NavbarProps: NavbarProps) {
  const { hiddenCondition, absolute } = NavbarProps;
  const location = useLocation();

  return (
    <div
      className={`${
        absolute ? "absolute" : ""
      } top-0 left-0 z-[1] flex items-center justify-between px-4 py-4 md:px-8 md:py-8 text-text gap-x-3 w-full xl:py-4 ${hiddenCondition}`}
    >
      <Link
        to="/"
        className="text-2xl font-bold uppercase md:text-4xl xl:text-2xl"
      >
        Movjp
      </Link>
      <div className="flex items-center justify-between xl:w-[60%] md:w-full md:ml-10">
        <div className="hidden text-2xl font-bold md:flex gap-x-5 xl:text-xl">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "border-b-4 border-blue-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/explore"
            className={`${
              location.pathname === "/explore"
                ? "border-b-4 border-blue-500"
                : ""
            }`}
          >
            Explore
          </Link>
        </div>
        <div className="relative flex items-center border-2 rounded-full md:border-none border-text md:px-2 md:py-2 xl:border-solid xl:w-[50%] xl:py-1">
          <input
            type="text"
            placeholder="Search anything"
            className="px-3 w-[88%] py-1 bg-transparent outline-none md:placeholder:text-xl md:hidden xl:inline-block xl:placeholder:text-xl "
          />
          <BiSearch className="absolute right-0 mr-2 text-2xl text-text md:text-4xl xl:text-2xl" />
        </div>
      </div>
      <FaBars className="text-2xl md:hidden" />
    </div>
  );
}

export default Navbar;
