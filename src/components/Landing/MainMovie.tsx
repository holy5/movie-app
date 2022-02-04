import React from "react";
import { FcCalendar } from "react-icons/fc";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Genre from "../../Items/Genre";

function MainMovie() {
  return (
    <div className="h-[100vh] relative mb-7 md:mb-12">
      <div className=" after:absolute after:inset-0 h-[100vh] after:shadow-vignette ">
        <img
          src="https://2.bp.blogspot.com/-vM0jXCySZ1g/XOlXujbjcvI/AAAAAAAADIU/jj6yvAKidsMSQhyQDv710BD44CHjkK0zgCKgBGAs/w2880-h1800-c/hatsune-miku-anime-girl-uhdpaper.com-4K-190.jpg"
          alt=""
          className="-z-[1] w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center px-4 mb-20 text-text gap-y-3 md:items-start md:gap-y-5 md:px-8 md:mb-16 lg:gap-y-3 lg:mb-10 xl:mb-20 ">
        <h1 className="text-5xl font-bold md:text-6xl xl:text-4xl lg:text-4xl">
          Hatsune Miku
        </h1>
        <div className="flex flex-row text-xl md:text-2xl gap-x-2 xl:text-sm lg:text-base">
          <Genre />
          <Genre />
          <Genre />
        </div>
        <span className="flex items-center gap-x-3 md:gap-x-5">
          <span className="flex items-center px-2 rounded-lg gap-x-[2px] md:gap-x-2 bg-stone-600 md:px-3 md:py-1 lg:px-2 lg:py-0 lg:gap-x-0">
            <span className="md:text-2xl lg:text-base">4</span>
            <AiFillStar className="text-xl text-yellow md:text-3xl lg:text-xl" />
          </span>
          <span className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-1">
            <FcCalendar className="text-xl md:text-3xl lg:text-xl" />
            <span className="md:text-2xl lg:text-base">2022</span>
          </span>
          <span className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-1">
            <MdOutlineWatchLater className="text-xl md:text-3xl lg:text-xl" />
            <span className="md:text-2xl lg:text-base">191 mins</span>
          </span>
        </span>
        <div className="flex flex-col items-center justify-center gap-y-2 md:items-start md:gap-y-3 lg:gap-y-1">
          <div className="text-xl font-medium md:text-2xl lg:text-xl">
            Director:ABASFSDFS
          </div>
          <div className="text-xl font-medium md:text-2xl lg:text-xl">
            Stars:ABASFSDFS,adsfdashfis
          </div>
          <div className="md:text-xl md:max-w-lg md:text-justify lg:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            voluptas est vero, illo quos consectetur et culpa. Consequatur nihil
            ab amet modi in, rerum nemo, dolor, voluptatem quaerat molestiae
            sit.
          </div>
          <div className="flex flex-row gap-x-5">
            <button className="px-3 py-2 mt-5 text-xl font-medium md:px-7 md:py-4 text-[#161616] bg-blue-400 rounded-full md:text-2xl xl:px-4 xl:py-2 xl:text-base lg:px-5 lg:py-2 lg:text-lg">
              Watch Now
            </button>
            <button className=" md:px-7 md:border-[3px] md:text-2xl md:py-[11px] px-3 py-[6px] mt-5 text-xl font-medium bg-transparent border-2 rounded-full xl:px-4 xl:py-[5px] xl:text-base lg:px-5 lg:py-2 lg:text-lg">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMovie;
