import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDownload, BsSuitHeart } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { FeatureProps } from "../../types";

function Feature(FeatureProps: FeatureProps) {
  const { desktopHidden } = FeatureProps;

  return (
    <div
      className={`flex items-center justify-between px-6 py-8 border-b-2 border-gray-500 md:border-b-4 md:px-12 md:py-12 text-text lg:px-16 ${
        desktopHidden ? "hidden" : "inline-block"
      } xl:border-0 xl:px-0 xl:py-0 xl:gap-x-5 xl:justify-start`}
    >
      <div className="flex flex-col items-center gap-y-1 md:gap-y-3 xl:bg-blue-500 xl:p-4 xl:rounded-full">
        <AiOutlinePlus className="text-2xl md:text-4xl xl:text-xl " />
        <span className="md:text-2xl xl:hidden">Add to list</span>
      </div>
      <div className="flex flex-col items-center gap-y-1 md:gap-y-3 xl:bg-blue-500 xl:p-4 xl:rounded-full">
        <BsSuitHeart className="text-xl md:text-4xl xl:text-xl" />
        <span className="md:text-2xl xl:hidden">Favorite</span>
      </div>
      <div className="flex flex-col items-center gap-y-1 md:gap-y-3 xl:bg-blue-500 xl:p-4 xl:rounded-full">
        <BsDownload className="text-xl md:text-4xl xl:text-xl" />
        <span className="md:text-2xl xl:hidden">Download</span>
      </div>
      <div className="flex flex-col items-center gap-y-1 md:gap-y-3 xl:bg-blue-500 xl:p-4 xl:rounded-full">
        <FaShare className="text-xl md:text-4xl xl:text-xl" />
        <span className="md:text-2xl xl:hidden">Share</span>
      </div>
    </div>
  );
}

export default Feature;
