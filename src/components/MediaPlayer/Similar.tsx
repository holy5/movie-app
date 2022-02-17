import React, { FC } from "react";
import { Link } from "react-router-dom";
import { resizeImage } from "../../Helpers/misc";
import { DetailType } from "../../types";
import MovieItemsVertical from "../Items/MovieItemsVertical";
interface SimilarProps {
  data: DetailType;
}

const Similar: FC<SimilarProps> = ({ data }) => {
  return (
    <>
      <h1 className="text-2xl font-bold ">Similar</h1>
      {data?.likeList && data.likeList.length > 0 && (
        <div className="flex flex-row gap-2 mt-3 overflow-x-auto xl:flex-col snap-x snap-mandatory xl:scroll-hidden">
          {data.likeList.map((item) => {
            return (
              <Link
                to={`/${item.category === 0 ? "movie" : "tv"}/${item.id}`}
                key={item.id}
              >
                <MovieItemsVertical
                  rate={item.score}
                  src={resizeImage(item.coverVerticalUrl, "200")}
                  year={item.year}
                  title={item.name}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Similar;
