import React from "react";
import { FcCalendar } from "react-icons/fc";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

function MainMovie() {
  return (
    <div className="h-[100vh] relative mb-7">
      <div className=" after:absolute after:inset-0 h-[100vh] after:shadow-vignette ">
        <img
          src="https://2.bp.blogspot.com/-vM0jXCySZ1g/XOlXujbjcvI/AAAAAAAADIU/jj6yvAKidsMSQhyQDv710BD44CHjkK0zgCKgBGAs/w2880-h1800-c/hatsune-miku-anime-girl-uhdpaper.com-4K-190.jpg"
          alt=""
          className="-z-[1] w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center px-4 mb-5 text-text gap-y-3">
        <h1 className="text-5xl font-bold">Hatsune Miku</h1>
        <p className="text-lg"> Vocaloid,Artist</p>
        <span className="flex items-center gap-x-3">
          <span className="flex items-center px-2 rounded-lg gap-x-[2px] bg-stone-600">
            <span>4</span>
            <AiFillStar className="text-lg text-yellow" />
          </span>
          <span className="flex items-center gap-x-1">
            <FcCalendar className="text-lg" />
            <span>2022</span>
          </span>
          <span className="flex items-center gap-x-1">
            <MdOutlineWatchLater className="text-lg" />
            <span>191 mins</span>
          </span>
        </span>
        <div className="flex flex-col items-center justify-center gap-y-3">
          <div className="text-lg font-medium">Director:ABASFSDFS</div>
          <div className="text-lg font-medium">Stars:ABASFSDFS,adsfdashfis</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            voluptas est vero, illo quos consectetur et culpa. Consequatur nihil
            ab amet modi in, rerum nemo, dolor, voluptatem quaerat molestiae
            sit.
          </div>
          <button className="px-3 py-2 text-lg font-medium rounded-full bg-button">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainMovie;
