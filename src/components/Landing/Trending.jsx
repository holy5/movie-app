import React from "react";
import MovieItem from "../../Items/MovieItem";

function Trending() {
  return (
    <div className="px-4 text-text">
      <h1 className="mb-3 text-3xl font-bold">Trending</h1>
      <div>
        <ul>
          <MovieItem />
        </ul>
      </div>
    </div>
  );
}

export default Trending;
