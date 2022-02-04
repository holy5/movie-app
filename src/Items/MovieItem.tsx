import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { MovieItemsProps } from "../types";

function MovieItem(MovieItemProps: MovieItemsProps) {
  return (
    <div className="px-1 rounded-xl overflow-ellipsis md:px-2 lg:px-1 xl:w-auto ">
      <img
        src="https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NzA3MDU5LmFwcDc4NTQyNl9zY3JlZW5fM18xNTI2MzY2NzU4XzAzNw/screen-3.jpg?fakeurl=1&type=.jpg"
        alt=""
        className="object-cover rounded-t-xl aspect-auto brightness-90"
      />
      <div className="max-w-[100%] bg-gray-500 px-2 py-1 rounded-b-xl md:px-4 md:py-3 xl:px-2 xl:py-1">
        <h2 className="mt-1 text-base font-bold break-normal line-clamp-2 md:text-2xl lg:text-xl lg:mt-0">
          God of war Ragnarok
        </h2>
        <div className="mt-[2px] text-xl text-stone-400 font-medium text-left md:text-2xl xl:text-base lg:text-lg">
          19 Sep
        </div>
        <div
          className={`${MovieItemProps.hidden ? "hidden" : "block"} ${
            MovieItemProps.padding
          }`}
        >
          <span className="flex flex-row items-center justify-between">
            <span className="flex flex-row items-center md:gap-x-1 lg:gap-x-0">
              <span className="text-lg font-semibold md:text-2xl xl:text-base lg:text-xl">
                4
              </span>
              <AiFillStar className="text-lg text-yellow md:text-2xl xl:text-base lg:text-xl" />
            </span>
            <BsSuitHeart className={`${MovieItemProps.heartSize}`} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
