import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../Custom/CustomArrows";
import MovieItem from "../../Items/MovieItem";

function UpComing() {
  let settings = {
    slidesToShow: 9,
    slidesToScroll: 9,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 4200,
    cssEase: "linear",
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
    <div className="px-4 text-text mb-7 md:px-8 md:mb-12">
      <h1 className="mb-3 text-3xl font-bold md:mb-6 md:text-4xl xl:text-2xl">
        Up Coming
      </h1>
      <div>
        <Slider
          {...settings}
          className="flex flex-row overflow-hidden mx-[-4px] md:mx-[-8px]"
        >
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
          <MovieItem hidden={true} heartSize="text-xl" />
        </Slider>
      </div>
    </div>
  );
}

export default UpComing;
