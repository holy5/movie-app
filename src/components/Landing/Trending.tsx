import React from "react";
import MovieItem from "../../Items/MovieItem";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../Custom/CustomArrows";

function Trending() {
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
    <div className="px-4 text-text mb-7 md:px-8 md:mb-12">
      <h1 className="mb-3 text-3xl font-bold md:mb-6 md:text-4xl xl:text-2xl">
        Trending
      </h1>
      <div>
        <Slider
          {...settings}
          className="flex flex-row  mx-[-4px] md:mx-[-8px] lg:mx-[-4px] justify-center"
        >
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-2xl xl:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
          <MovieItem
            hidden={false}
            heartSize="text-xl md:text-3xl lg:text-xl"
          />
        </Slider>
      </div>
    </div>
  );
}

export default Trending;
