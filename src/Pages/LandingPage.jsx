import React from "react";
import MainMovie from "../components/Landing/MainMovie";
import Navbar from "../components/Landing/Navbar";
import Trending from "../components/Landing/Trending";

function LandingPage() {
  return (
    <>
      <Navbar />
      <MainMovie />
      <Trending />
    </>
  );
}

export default LandingPage;
