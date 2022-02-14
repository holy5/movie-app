import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiMethod } from "../api/apiConfig";
import Footer from "../components/Landing/Footer";
import Navbar from "../components/Landing/Navbar";
import MainPlayer from "../components/MediaPlayer/MainPlayer";
import Error from "../components/UI/Error";

function MoviePlayer() {
  const { id } = useParams();
  const { data, error } = useSWR(`movie-${id}`, () =>
    apiMethod.getMovieDetails(id as string)
  );

  if (error) return <Error />;

  return (
    <div>
      <Navbar absolute={false} />
      {data && (
        <MainPlayer
          sources={data?.sources}
          subtitles={data?.subtitles}
          data={data.data}
        />
      )}
      <Footer />
    </div>
  );
}

export default MoviePlayer;
