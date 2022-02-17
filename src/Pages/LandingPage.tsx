import React from "react";
import Footer from "../components/Landing/Footer";
import MainMovie from "../components/Landing/MainMovie";
import Navbar from "../components/Landing/Navbar";
import HomeSlider from "../components/Landing/HomeSlider";
import useSWRInfinite from "swr/infinite";
import { apiMethod } from "../api/apiConfig";
import Error from "../components/UI/Error";
import { HomeSection } from "../types";

function LandingPage() {
  const getKey = (index: number) => `home-${index || 0}`;

  const { data, error } = useSWRInfinite(
    getKey,
    (key) => apiMethod.getHome(Number(key.split("-").slice(-1)[0])),
    { revalidateFirstPage: false }
  );

  if (error) return <Error />;

  return (
    <>
      <Navbar absolute={true} />
      <MainMovie />
      {data &&
        data[0]?.map((item: HomeSection, index: number) => {
          return (
            <HomeSlider
              key={index}
              title={item.homeSectionName}
              list={item.recommendContentVOList}
            />
          );
        })}

      <Footer />
    </>
  );
}

export default LandingPage;
