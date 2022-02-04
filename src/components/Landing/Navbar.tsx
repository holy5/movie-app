import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 z-[1] flex items-center justify-between px-4 py-4 md:px-8 md:py-8 text-text gap-x-3 w-full xl:py-4 ">
      <div className="text-2xl font-bold md:text-4xl xl:text-2xl">Movjp</div>
      <div className="flex items-center justify-between xl:w-[60%] md:w-full md:ml-10">
        <div className="hidden text-2xl font-bold md:flex gap-x-5 xl:text-xl">
          <span>Home</span>
          <span>TV Series</span>
          <span>Movies</span>
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
