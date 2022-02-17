import MovieItem from "../Items/MovieItem";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../Custom/CustomArrows";

import Skeleton from "../UI/Skeleton";
import { resizeImage } from "../../Helpers/misc";

import { FC } from "react";
import { Link } from "react-router-dom";
import { HomeSliderListProps } from "../../types";

interface HomeSliderProps {
  title: string;
  list: HomeSliderListProps[] | undefined;
}

const HomeSlider: FC<HomeSliderProps> = ({ title, list }) => {
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
    <div className="px-4 mb-4 text-text xl:mb-7 md:px-8 md:mb-12">
      <h1 className="mb-3 text-2xl font-bold md:text-4xl xl:text-2xl">
        {title}
      </h1>
      <div>
        {!title && <Skeleton />}
        <Slider
          {...settings}
          className="flex flex-row mx-[-4px] md:mx-[-8px] lg:mx-[-4px] justify-center overflow-hidden "
        >
          {list?.map((movie, index) => {
            return (
              <Link
                key={index}
                to={`/${movie.category === 0 ? "movie" : "tv"}/${movie.id}`}
              >
                <MovieItem
                  title={movie.title}
                  imgURL={resizeImage(movie.imageUrl, "200")}
                />
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
