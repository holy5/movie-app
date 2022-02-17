import React, { FC, useRef, useState } from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import { subtitleProxy } from "../../Helpers/misc";

interface PlayerProps {
  playerKey: string;
  sources: {
    quality: number;
    url: string;
  }[];
  subtitles: {
    lang: string;
    language: string;
    url: string;
  }[];
}

const Mobile: FC<PlayerProps> = ({ sources, subtitles, playerKey }) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [loadedData, setLoadedData] = useState(false);
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black group">
        <ReactHlsPlayer
          crossOrigin=""
          playsInline
          controls={true}
          autoPlay={false}
          playerRef={playerRef}
          src={sources[0].url}
          className="w-full h-full"
          onLoadedData={() => {
            setLoadedData(true);
            const currentTime = Number(
              localStorage.getItem(`${playerKey}-time`) as string
            );
            playerRef.current && (playerRef.current.currentTime = currentTime);
          }}
          onTimeUpdate={() => {
            localStorage.setItem(
              `${playerKey}-time`,
              String(playerRef.current?.currentTime || 0)
            );
          }}
        >
          {loadedData &&
            subtitles.map((subtitle, index) => (
              <track
                kind="subtitles"
                srcLang={subtitle.lang}
                label={subtitle.language}
                src={subtitleProxy(subtitle.url)}
                default={index === 0}
              />
            ))}
        </ReactHlsPlayer>
      </div>
    </div>
  );
};

export default Mobile;
