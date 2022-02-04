import React from "react";
import AllMovies from "../components/Landing/AllMovies";
import Footer from "../components/Landing/Footer";
import MainMovie from "../components/Landing/MainMovie";
import Navbar from "../components/Landing/Navbar";
import Recommend from "../components/Landing/Recommend";
import Trending from "../components/Landing/Trending";
import UpComing from "../components/Landing/UpComing";

function LandingPage() {
  return (
    <>
      <Navbar />
      <MainMovie />
      <Trending />
      <UpComing />
      <Recommend />
      <AllMovies />
      <Footer />
    </>
  );
}

export default LandingPage;
