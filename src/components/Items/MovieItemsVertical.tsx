import React, { FC } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { FcCalendar } from "react-icons/fc";

interface MovieItemsVerticalProps {
  src: string;
  title: String;
  rate: number;
  year: number | string;
}

const MovieItemsVertical: FC<MovieItemsVerticalProps> = ({
  src,
  title,
  rate,
  year,
}) => {
  return (
    <div className="flex flex-col py-2 overflow-hidden cursor-pointer gap-x-2 xl:flex-row snap-start w-[100px]">
      <img
        src={src}
        alt=""
        className="xl:w-[70px] h-[180px] inline-block rounded-[0.25rem] !flex-shrink-0"
      />

      <div className="flex flex-col xl:justify-start justify-between h-[96x]">
        <h1 className="font-bold break-words xl:text-lg line-clamp-2 xl:line-clamp-3 overflow-ellipsis">
          {title}
        </h1>
        <div className="flex flex-col justify-start">
          <div className="text-sm">
            <span className="flex items-center gap-x-1">
              <AiTwotoneStar className=" text-yellow" />
              <span>{rate.toFixed(1)}</span>
            </span>
            <span className="flex items-center gap-x-1">
              <FcCalendar className=" text-yellow" />
              <span>{year}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItemsVertical;
