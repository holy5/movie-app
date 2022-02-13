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
    <div className="flex cursor-pointer gap-x-2">
      <img
        src={src}
        alt=""
        className="w-[70px] object-cover aspect-[10/16] rounded-[0.25rem]"
      />

      <div className="flex flex-col ">
        <h1 className="text-lg font-bold break-words line-clamp-3 overflow-ellipsis">
          {title}
        </h1>
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
  );
};

export default MovieItemsVertical;
