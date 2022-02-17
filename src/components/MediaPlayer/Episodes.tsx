import React, { FC } from "react";
import { Link } from "react-router-dom";

import { DetailType } from "../../types";

interface EpisodesProps {
  data: DetailType;
  episodeIndex: number | undefined;
}

const Episodes: FC<EpisodesProps> = ({ data, episodeIndex }) => {
  return (
    <>
      <h1 className="text-xl font-medium">Episodes</h1>
      <div className="flex flex-wrap gap-2 xl:max-w-[60vw] max-w-full">
        {data?.episodeVo.map((_, index) => {
          return (
            <Link
              key={index}
              to={`/tv/${data.id}?episode=${index}`}
              className={`font-bold h-[40px] w-[40px] leading-[40px] rounded-md cursor-pointer bg-blue-500 text-center ${
                index === episodeIndex ? "bg-blue-500" : "bg-neutral-600"
              }`}
            >
              {index + 1}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Episodes;
