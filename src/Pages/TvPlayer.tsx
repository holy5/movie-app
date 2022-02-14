import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiMethod } from "../api/apiConfig";
import Footer from "../components/Landing/Footer";
import Navbar from "../components/Landing/Navbar";
import MainPlayer from "../components/MediaPlayer/MainPlayer";
import Error from "../components/UI/Error";
import useQueryParams from "../hooks/useQueryParams";

const TvPlayer = () => {
  const { id } = useParams();

  const queryParams = useQueryParams();

  const episodeIndex = Number(queryParams.get("episode")) || 0;

  const { data, error } = useSWR(`tv-${id}-${episodeIndex}`, () =>
    apiMethod.getTvDetails(id as string, episodeIndex)
  );

  if (error) return <Error />;

  return (
    <>
      <Navbar absolute={false} />
      {data && (
        <MainPlayer
          data={data?.data}
          sources={data?.sources}
          subtitles={data?.subtitles}
          episodeIndex={episodeIndex}
        />
      )}
      <Footer />
    </>
  );
};

export default TvPlayer;
