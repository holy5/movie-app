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
        <div className="flex flex-col mt-3 gap-y-2">
          {data.likeList.map((item) => {
            return (
              <Link
                to={`/${item.category === 0 ? "movie" : "tv"}/${item.id}`}
                key={item.id}
              >
                <MovieItemsVertical
                  rate={item.score}
                  src={resizeImage(item.coverVerticalUrl, "250")}
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
