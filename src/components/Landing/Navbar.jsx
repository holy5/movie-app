import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 z-[1] flex items-center justify-between px-4 py-4 text-text gap-x-3">
      <div className="text-2xl font-bold">Movjp</div>
      <div className="relative flex items-center border-2 rounded-full border-text">
        <input
          type="text"
          placeholder="Search anything"
          className="px-3 w-[88%] py-1 bg-transparent outline-none "
        />
        <BiSearch className="absolute right-0 mr-2 text-2xl text-text" />
      </div>
      <FaBars className="text-2xl" />
    </div>
  );
}

export default Navbar;
