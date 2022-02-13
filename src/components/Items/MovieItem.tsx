import React from "react";
import { motion } from "framer-motion";
import { MovieItemsProps } from "../../types";
import Skeleton from "react-loading-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function MovieItem(MovieItemProps: MovieItemsProps) {
  return (
    <motion.div
      className="px-1 cursor-pointer rounded-xl overflow-ellipsis md:px-2 lg:px-1 xl:w-auto xl:py-5"
      whileHover={{
        scale: 1.1,
      }}
    >
      {!MovieItemProps.imgURL && (
        <Skeleton
          className="rounded-t-xl aspect-auto h-[220px]"
          baseColor="#202020"
          highlightColor="#444"
        />
      )}
      {MovieItemProps.imgURL && (
        <LazyLoadImage
          src={MovieItemProps.imgURL}
          alt=""
          className="object-cover rounded-t-xl aspect-auto brightness-90  h-[220px]"
          effect="blur"
        />
      )}
      <div className="flex flex-col max-w-[100%] bg-neutral-800 px-2 py-1 rounded-b-xl md:px-4 md:py-3 xl:px-2 xl:py-1 xl:h-[70px] justify-between shadow-lg">
        {MovieItemProps.title && (
          <h2 className="mt-1 text-base font-bold break-normal line-clamp-2 md:text-2xl lg:text-xl lg:mt-0 xl:text-lg text-text">
            {MovieItemProps.title}
          </h2>
        )}
        {!MovieItemProps.title && (
          <Skeleton count={2} baseColor="#202020" highlightColor="#444" />
        )}
      </div>
    </motion.div>
  );
}

export default MovieItem;
