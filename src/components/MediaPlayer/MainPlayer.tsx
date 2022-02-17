import React, { useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { FcCalendar } from "react-icons/fc";
import Genre from "../Items/Genre";
import { DetailType } from "../../types";
import Desktop from "./Desktop";
import { Link } from "react-router-dom";
import Similar from "./Similar";
import Episodes from "./Episodes";
import { isMobile } from "../../Helpers/misc";
import Mobile from "./Mobile";

interface props {
  data?: DetailType | undefined;
  sources: {
    quality: number;
    url: string;
  }[];
  subtitles?: {
    language: string;
    url: string;
    lang: string;
  }[];
  episodeIndex?: number;
}

function MainPlayer(props: props) {
  const { sources, subtitles, data, episodeIndex } = props;
  const mediaType = typeof episodeIndex === "undefined" ? "movie" : "tv";
  const playerKey = `${mediaType}-${data?.id}${
    episodeIndex ? `-${episodeIndex}` : ""
  }`;

  return (
    <div className="xl:min-h-[100vh] xl:px-16 xl:py-12 px-4">
      <div className="flex flex-col gap-x-5 xl:flex-row">
        <div className="flex flex-col items-start text-text gap-y-2 xl:gap-y-3">
          {sources &&
            subtitles &&
            playerKey &&
            (isMobile() ? (
              <Mobile
                playerKey={playerKey}
                sources={sources}
                subtitles={subtitles}
              />
            ) : (
              <Desktop
                playerKey={playerKey}
                sources={sources}
                subtitles={subtitles}
              />
            ))}
          <h1 className="text-2xl font-bold xl:text-3xl xl:mt-3">
            {data?.name}
          </h1>
          <div className="flex gap-x-3">
            <span className="flex items-center gap-x-1">
              <AiTwotoneStar className="text-xl text-yellow" />
              <span>{data?.score?.toFixed(1)}</span>
            </span>
            <span className="flex items-center gap-x-1">
              <FcCalendar className="text-xl text-yellow" />
              <span>{data?.year}</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-2 ">
            {data?.tagList.map((tag) => {
              return (
                <Link to={`/category/${tag.id}`} key={tag.id}>
                  <Genre title={tag.name} />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-y-2">
            <h1 className="text-xl font-medium">Overview</h1>
            <p className="max-w-full text-sm xl:max-w-3xl">
              {data?.introduction}
            </p>
            {data && data?.episodeVo.length > 1 && (
              <Episodes data={data} episodeIndex={episodeIndex} />
            )}
          </div>
        </div>
        <div className="xl:flex flex-col w-full text-text xl:h-[600px] xl:overflow-auto py-4 xl:py-0 ">
          {data && <Similar data={data} />}
        </div>
      </div>
    </div>
  );
}

export default MainPlayer;
