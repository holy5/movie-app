import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { NavbarProps } from "../../types";
import SearchBox from "../Search/SearchBox";

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
        <SearchBox />
      </div>
      <FaBars className="text-2xl md:hidden" />
    </div>
  );
}

export default Navbar;
