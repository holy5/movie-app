import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";

import Explore from "./Pages/Explore";
import Error from "./components/UI/Error";
import { SWRConfig } from "swr";
import Player from "./Pages/MoviePlayer";
import MoviePlayer from "./Pages/MoviePlayer";
import TvPlayer from "./Pages/TvPlayer";
import Category from "./Pages/Category";
import { SkeletonTheme } from "react-loading-skeleton";
import Search from "./Pages/Search";

function App() {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movie/:id" element={<MoviePlayer />} />
            <Route path="/tv/:id" element={<TvPlayer />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/search" element={<Search />} />
            <Route path="/player" element={<Player />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </SWRConfig>
  );
}

export default App;
