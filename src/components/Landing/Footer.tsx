import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-full ">
      <div className="w-full border-t-2 border-text"></div>
      <div className="px-4 py-3 text-text md:px-8 md:py-5 md:flex md:flex-col md:gap-y-1 xl:gap-y-3 xl:py-3">
        <div className="text-xl font-bold md:text-3xl xl:text-2xl">Social</div>
        <div className="flex flex-row mt-2 text-2xl gap-x-2 md:text-4xl md:gap-x-3 md:mt-3 xl:text-xl xl:mt-0">
          <AiFillFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
        <p className="mt-4 text-base font-semibold md:text-2xl xl:mt-2 xl:text-base xl:font-medium">
          Movjip.All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
