import React from "react";
import MovieItem from "../../Items/MovieItem";

function AllMovies() {
  return (
    <div className="px-4 text-text mb-7 md:px-8 md:mb-12">
      <h1 className="mb-3 text-3xl font-bold md:mb-6 md:text-4xl">
        All Movies
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 md:gap-y-[16px] gap-y-3 mx-[-4px] md:mx-[-8px] ">
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />{" "}
        <MovieItem
          hidden={false}
          heartSize="text-2xl lg:text-2xl xl:text-xl"
          padding="px-2 py-2 lg:px-0 lg:py-0"
        />
      </ul>
      <div className="flex justify-center mt-7 md:mt-12 ">
        <button className="px-4 py-2 font-bold border-2 rounded-xl md:text-2xl md:py-3 md:px-6 xl:py-1 xl:px-3 xl:text-xl">
          Show more
        </button>
      </div>
    </div>
  );
}

export default AllMovies;
