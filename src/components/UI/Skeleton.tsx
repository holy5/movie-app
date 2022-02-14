import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../Custom/CustomArrows";
import MovieItem from "../Items/MovieItem";

function Skeleton() {
  let settings = {
    slidesToShow: 9,
    slidesToScroll: 9,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className="flex flex-row mx-[-4px] md:mx-[-8px] lg:mx-[-4px] justify-center overflow-hidden"
    >
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
      <MovieItem imgURL="" title="" />
    </Slider>
  );
}

export default Skeleton;
